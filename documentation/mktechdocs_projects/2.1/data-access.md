Data access
===========

There are many ways to access data in RCloud. We'll cover the options available in the GUI here, but be sure to browse the "RCloud Sample Notebooks" section of the Notebooks panel for ideas.

File upload
-----------

Open the File Upload panel on the right sidebar by clicking on the heading. Then, select "Choose Files" and browse to a local file.

![File Upload: Example 1](img/fileupload1.png)

Next, click the "Upload" button. If the file exists, RCloud prompts with a notice that it will be overwritten. If all goes well, RCloud confirms the upload.

The file now exists in your installation server's home directory and is accessible from within RCloud. For example:

![File Upload: Example 2](img/fileupload2.png)

The first line of R code loads the contents of the CSV file into an object called "mydata." The next line tells R to output a string version of the object.

Upload to notebook
------------------

The **Upload to Notebook** checkbox changes the way File Upload works. Rather than uploading your file to your home directory, RCloud will store the file inside your notebook as an "asset." To view notebook assets, click on the Assets panel on the right sidebar. Please see the [Notebook Assets](#notebook-assets) section for more information.

