Header bar
==========

The RCloud header bar is located at the top of the browser window and contains several notebook control icons:

<a href="img/header.png"><img class="trunc" src="img/header.png" /></a>

<img style="margin: 0;float: left;" src="img/header_share.png" />: Please see the [Sharing Your Notebooks](#sharing-your-notebooks) section for more information.

<img style="margin: 0;float: left;" src="img/header_star.png" />: Click the star icon to add the current notebook to your "Notebooks I Starred" folder, shown in the Notebooks panel. The number next to the star represents the number of RCloud users who have starred the notebook.

<img style="margin: 0;float: left;" src="img/header_fork.png" />: Click the fork icon to make a new copy of a notebook for editing.

<img style="margin: 0;float: left;" src="img/header_save.png" />: Whenever you
run a notebook, RCloud automatically saves a version in GitHub. If you need to
close your RCloud session immediately without waiting for a lengthy run time,
click the save icon to save a version immediately. Note that this icon is only
visible for notebooks you are allowed to save.

<img style="margin: 0;float: left;" src="img/header_play.png" />: Click the play icon to run all [markdown and prompt cells](#cells) in the current notebook. Cells are executed asynchronously. RCloud displays the output as it becomes available.

<img style="margin: 0;float: left;" src="img/stop.png" />: When you run a notebook, you can stop running cells and prevent queued cells from running by pressing the stop button, located in the header at the top of the screen:

This sends an interrupt to the R process and terminates execution if possible.

<img style="margin: 0;float: left;" src="img/header_title.png" />: This is the title of the current notebook. Click in the title to change it.

Note that you can create subdirectories by adding any number of forward slashes ('/') to your title, similar to a Unix command line. E.g. "Cookbook for R/1 - Basics/1.1 - Indexing into a Data Structure." If the subdirectories don't already exist, RCloud will create them on the fly, so there is no need to create individual subdirectories before changing the name of your notebook. Subdirectories allow you to group your notebooks and will be displayed in a tree-like hierarchy in the [Notebooks section](#notebooks) of the left sidebar.

If a notebook was created as a result of [Forking another notebook](#forking-copying-a-notebook), the forked notebook name is displayed in a smaller font beneath the current notebook's title.

<img style="margin: 0;float: left;" src="img/header_forum.png" />: Depending on
your installation, some users may see a "Forum" link, which will open a new tab
to an RCloud discussion forum.

<img style="margin: 0;float: left;" src="img/header_about.png" />: Depending on
your installation, some users may see an "About" link, which will open a new tab
with more information about the RCloud platform.

<img style="margin: 0;float: left;" src="img/header_advanced.png" />: Click the Advanced drop-down menu to access more [advanced notebook features](#advanced-notebook-features).


<img style="margin: 0;float: left;" src="img/header_discover.png" />: Click the Discover link in the header bar to view the most recent and most popular notebooks.

You can create a mini-view of your notebook for the Discover view by creating an [asset](#notebook-assets) called `thumb.png`. `thumb.png` will be displayed in the Discover view if present.

<img style="margin: 0;float: left;" src="img/header_logout.png" />: Click Logout to end your RCloud session.

