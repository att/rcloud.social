# External RCloud Website

This is the rcloud.social website.  The documentation pages come from the gh-docs branch of https://github.com/att/rcloud repository.

The procedure for bringing in the markdown pages and converting them into HTML for this website is as follows:
 
Pull from gh-docs branch to make sure everything is current.
From the root directory of this website, run the Makefile:
>cd ~/rcloud
>make all

The html files then get created in the leaf directories of "rcloud/documentation".  The Pandoc template is used for the navigation and the footer; still in development. 

Divs need to be added back to the original gh-pages markdown files (removed due to incorrect commit) so that some sections may be hidden using CSS.

At the moment, the documentation landing page (index.html) needs to be copied to the documentation folder. 


