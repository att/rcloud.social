
# Output site root directory.
<<<<<<< HEAD
OUT_DIR       = $(abspath ./out)

# Path to the folder containing documentation versions (e.g. 1.3,1.4,1.5,...)
DOC_DIR      = doc
=======
OUTDIR       = $(abspath ./out)

# Path to the folder containing documentation versions (e.g. 1.3,1.4,1.5,...)
DOCDIR      = doc
>>>>>>> fb5ae60ab8daf7c0b210fa7eda2da7595562c908

# Path from the installed sub-topics (e.g tryit,gallery,tutorials, ...) index.html to the site root directory.
BASEPATH     = ..

# Topic directories.
SUBDIRS = documentation gallery tutorials tryit community

<<<<<<< HEAD
# Dir's containing files which must be copied to the output site 
COPY_SRC_DIRS = css images js fonts

# Get a list of all files in the COPY_SRC_DIRS
COPY_FNS      = $(foreach dr,$(COPY_SRC_DIRS),$(shell find $(dr) -type f))

# Form a list of all files that need to be copied to the output site.
COPY_SRC_FNS = favicon.ico $(COPY_FNS)
COPY_DST_FNS = $(foreach fn,$(COPY_SRC_FNS),$(addprefix $(OUT_DIR)/,$(fn)))


all: $(SUBDIRS) $(COPY_DST_FNS) local doc

clean: $(SUBDIRS) local doc

clean-all : clean local doc
	rm -f $(COPY_DST_FNS)

# Run make on each topic directory
$(SUBDIRS) :
	make -C $@ OUT_DIR=$(OUT_DIR) DOC_DIR=$(DOC_DIR)  CONTAINER=true INNER_WRAPPER=true BOOTSTRAP=true $(MAKECMDGOALS)


$(COPY_DST_FNS) : $(OUT_DIR)/% : %
	mkdir -p $(dir $@)
	cp $< $@

# Build the local index.html page.
local :
	make -f Makefile.mk OUT_DIR=$(OUT_DIR) INNER_WRAPPER=true  $(MAKECMDGOALS)

# Build the documentation pages.
doc :
	make -C documentation -f doc.mk OUT_DIR=$(OUT_DIR)/documentation/doc DOC_DIR=$(abspath $(DOC_DIR))  $(MAKECMDGOALS)

.PHONY:  $(SUBDIRS) doc local all clean clean-all
=======
# Local files which must be copied to the output site 
LOCAL_SRC    = favicon.ico
CSS_SRC_FNS  = $(shell find css -type f)
IMG_SRC_FNS  = $(shell find images -type f)
JS_SRC_FNS   = $(shell find js -type f)

# Form a list of all files that need to be copied to the output site.
COPY_SRC_FNS = $(LOCAL_SRC) $(CSS_SRC_FNS) $(IMG_SRC_FNS) $(JS_SRC_FNS)
COPY_DST_FNS =  $(foreach fn,$(COPY_SRC_FNS),$(addprefix $(OUTDIR)/, $(fn) ))  

all: $(SUBDIRS) $(COPY_DST_FNS) local doc

clean: $(SUBDIRS) local doc

clean-all : clean local doc
	rm -f $(COPY_DST_FNS)

# Run make on each topic directory
$(SUBDIRS) :
	make -C $@ OUTDIR=$(OUTDIR) DOC_DIR=$(DOCDIR)  CONTAINER=true INNER_WRAPPER=true BOOTSTRAP=true $(MAKECMDGOALS)


# Process files which need to be copied to the output site.
$(COPY_DST_FNS) : $(OUTDIR)/% : %
	mkdir -p $(dir $@)
	cp $< $@


# Build the local index.html page.
local :
	make -f Makefile.mk OUTDIR=$(OUTDIR) INNER_WRAPPER=true  $(MAKECMDGOALS)
>>>>>>> fb5ae60ab8daf7c0b210fa7eda2da7595562c908

# Build the documentation pages.
doc :
	make -C documentation -f doc.mk OUT_DIR=$(OUTDIR)/documentation DOC_DIR=$(abspath $(DOCDIR))  $(MAKECMDGOALS)

.PHONY:  $(SUBDIRS) doc local

