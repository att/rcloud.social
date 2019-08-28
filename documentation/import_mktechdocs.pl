#!/usr/bin/perl -w

# This perl script takes a single markdown file on stdin and splits it out
# into multiple markdown files with a level-1 heading at the top and
# level-(1+subsection) sections underneath. The file names match the level-1
# headings. It also produces a MkTechDocs "master" document as well as a
# configuration file so the files can be compiled into a single markdown
# document used by the existing build system.
#
# Author: Spencer Seidel
# Created Date: 08/28/2019
#

use strict;

sub help {
  print STDERR "cat markdown.md | split_doc.pl <output directory>\n";
}

# Strips out bad characters from an existing header and returns
# a suitable markdown file name.
sub file_from_header {
  my ($header) = @_;
  my $file = $header;
  $file =~ s/[\s`\.\(\)]+/\-/g;
  $file =~ s/^[\-]*//g;
  $file = lc($file).".md";

  return $file;
}

# Bail if the given directory is bad
if (!defined($ARGV[0])) {
  help();
  exit(1);
}
elsif (! (-d $ARGV[0]) ) {
  help();
  exit(1);
}

# Start our master document
open(MASTERFH, ">$ARGV[0]/master.md") or
  die "Can't open $ARGV[0]/master.md for writing. Giving up.\n";
print MASTERFH "```include\n";

# Holds collected file lines
my $fileBuffer = "";

# Current heading
my $heading = "";

# Slurp all of STDIN
my @lines = <STDIN>;
# Kill the newlines
chomp(@lines);

my $maxIdx = scalar(@lines);
my $index = 0;
while ($index <= $maxIdx) {
  # Grab 2 lines at a time. We use l2 as a lookahead only.
  my $l1 = $lines[$index];
  my $l2 = ($index+1 < $maxIdx) ? $lines[$index+1] : "EOF";

  # If the look ahead is a row of equal signs, we have
  # a level-1 heading. If l2 is EOF, we still need to check if
  # we have a stored heading.
  if ($l2 =~ /^[=]+$/ || $l2 eq "EOF") {
    # If we have a heading, we need to create a new file
    # using the collected lines.
    if ($heading ne "") {
      # If l2 is EOF we need to add the last line into the file
      # buffer.
      if ($l2 eq "EOF") {
        $fileBuffer .= "$l1\n";
      }

      my $filename = file_from_header($heading);

      print STDERR "Creating a file named $filename\n";

      # Create the right number of ='s for the level-1 heading.
      # We could just use '#', but that wouldn't be consistent
      # with the existing formatting.
      my $underline = "="x(length($heading));

      # Add the level-1 heading to the file buffer
      $fileBuffer = "$heading\n$underline\n$fileBuffer";

      # Create a new file in the given directory
      open(SPLITFH, ">$ARGV[0]/$filename") or
        die "Can't open $ARGV[0]/$filename for writing. Giving up.\n";
      print SPLITFH "$fileBuffer";
      close(SPLITFH);

      # Update our master file
      print MASTERFH "$filename\n";

      # Clear the file buffer
      $fileBuffer = "";

      # Eat l2
      $index++;
    }

    # Save the heading we found
    $heading = $l1;
  }
  else {
    # Whoops, wasn't a heading. Collect the lines in the file buffer.
    $fileBuffer = "$fileBuffer$l1\n"
  }

  $index++;
}

# Finish up our master document
print MASTERFH "```\n";
close(MASTERFH);

# Create a MkTechDocs config
open(FH, ">$ARGV[0]/mktechdocs.conf") or
  die "Can't open $ARGV[0]/mktechdocs.conf for writing. Giving up.\n";
print FH <<EOF;
TITLE=doc
OUTPUT_FILE_NAME_BASE=doc
FORMAT=markdown
HTML_STYLE=archwiki
# Commented out so mktechdocs will not produce a TOC
#TABLE_OF_CONTENTS_MAIN_DEPTH=0
#TABLE_OF_CONTENTS_SUB_DEPTH=0
SECTION_NUMBERS=true
IMAGES=./img
#BUILD_SCRIPT=postbuild.sh
#CUSTOM_CSS=my.css
#CUSTOM_TEMPLATE=mytemplate.html
KEEP_TEMP_FILES=false
#UML_OUTPUT_FORMAT=png
EOF

close(FH);

