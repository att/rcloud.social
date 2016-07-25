
SRC  = index.pd ../html/index_template.html5 index_style.css

index.html : $(SRC)
	pandoc \
	--to=html5 \
	--from=markdown  \
	--template=../html/index_template.html5 \
	--css="index_style.css" \
	-o index.html index.pd




