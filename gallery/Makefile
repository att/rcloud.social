
SRC  = index.pd index.yaml ../html/index_template.html5

index.html : $(SRC)
	pandoc \
	--to=html5 \
	--from=markdown  \
	--template=../html/index_template.html5 \
	-o index.html index.pd index.yaml




