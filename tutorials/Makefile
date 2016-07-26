
SRC  = index.pd index.css  tutorial_template.html5

index.html : $(SRC)
	pandoc \
	--to=html5 \
	--from=markdown  \
	--css=index.css \
	--template=tutorial_template.html5 \
	--toc \
	--toc-depth=4 \
	-o index.html index.pd

