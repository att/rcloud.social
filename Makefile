# base source directory
DOC_DIR = ../../../rcloud-docs/rcloud/doc

# base output directory
OUT_DIR = documentation/doc

# Pandoc compile options 
PANDOC_OPTS= --from=markdown --to=html  --template=pandoc_html.template

# Get a list of the directories rooted on $(DOC_DIR)
DIRS  = $(shell find $(DOC_DIR) -type d)

# Find all files in folders listed in $(DIRS) with 'md' extension.
SRC =  $(foreach DIR,$(DIRS),$(wildcard $(DIR)/*.md))

# Generate an output file name for each src file.
DST =  $(foreach fn,$(SRC), $(subst .md,.html,$(subst $(DOC_DIR),$(OUT_DIR),$(fn))))

# Create a list of output directories
DST_DIRS = $(foreach dir,$(DIRS),$(subst  $(DOC_DIR),$(OUT_DIR),$(dir)))

# Create a list of source image dir's
SRC_IMG_DIRS = $(foreach src,$(SRC),$(dir $(src))img)

# Create a list of source images
SRC_IMG      = $(foreach dir,$(SRC_IMG_DIRS),$(wildcard $(dir)/*))

# Create a list of output image dirs
DST_IMG_DIRS = $(foreach dir,$(SRC_IMG_DIRS), $(subst $(DOC_DIR),$(OUT_DIR),$(dir)))

# Create a list of output images
DST_IMG      = $(foreach fn,$(SRC_IMG), $(subst $(DOC_DIR),$(OUT_DIR),$(fn)))

define make-goal
$1: $2  pandoc_html.template
	@echo $$< " to " $$@
	pandoc $(PANDOC_OPTS) -o $$@ $$<
endef

# Generate a recipe for each SRC markdown file
$(foreach fn,$(SRC),$(eval $(call make-goal,$(subst .md,.html, $(subst $(DOC_DIR),$(OUT_DIR),$(fn))) ,$(fn))))

define make-goal-img
$1: $2
	@echo $$< " to " $$@
	cp $$< $$@
endef

# Generate a recipe foe each source image file
$(foreach fn,$(SRC_IMG),$(eval $(call make-goal-img,$(subst $(DOC_DIR),$(OUT_DIR),$(fn)),$(fn))))


# Build the output tree then process the pandoc files and copy the image files
all: makedirs $(DST) $(DST_IMG)


# Build the output tree.
# We need a first step so that we
# have a single rule to refer to in 'all'.
makedirs: $(DST_DIRS) $(DST_IMG_DIRS)

# we need a second rule so that the
# targets are the directories 
$(DST_DIRS):
	@mkdir -p $@


clean :
	rm -f $(DST)

.PHONY : all makedirs clean




