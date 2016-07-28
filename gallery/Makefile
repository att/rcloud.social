
# Set the site base output directory.
OUTDIR = ..

# Path from the output HTML file to the site root.
BASEPATH = ..

FOLDER = gallery

DSTDIR = $(OUTDIR)/$(FOLDER)

SRC = index.pd index.yaml ../html/index_template.html5 head.html

all : $(DSTDIR)/index.html  $(DSTDIR)/index.css


$(DSTDIR)/index.html : $(SRC)
	mkdir -p $(DSTDIR)
	pandoc \
	--to=html5 \
	--from=markdown  \
	--css=index.css \
	--template=../html/index_template.html5 \
	--include-in-header=head.html \
	--include-before-body=../html/body_top.html \
	--include-after-body=../html/body_bottom.html \
	-o $(DSTDIR)/index.html index.pd index.yaml

$(DSTDIR)/index.css : index.css
	cp index.css  $(DSTDIR)/index.css

# Use ../hmtl/head_template.html to generate a <head> include file with the CSS and Javscript refrences
# pointing to the correct location.
head.html : ../html/head_template.html
	pandoc --template=../html/head_template.html --variable=basepath:$(BASEPATH) -o head.html ../dummy.pd


clean :
	rm -f $(DSTDIR)/index.html $(DSTDIR)/index.css  head.html

.PHONY : all clean
