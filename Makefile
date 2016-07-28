
OUTDIR = ~/temp/blah
BASEPATH = ..
DOC_BASEPATH =  ../../../..

SUBDIRS = documentation gallery tutorials tryit
TARGET = all

all: $(SUBDIRS)

$(SUBDIRS) :
	make -C $@ OUTDIR=$(OUTDIR) BASEPATH=$(BASEPATH) DOC_BASEPATH=$(DOC_BASEPATH) $(TARGET)



.PHONY: all clean $(SUBDIRS)

