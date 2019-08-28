RStudio Shiny Support
=====================

RCloud is 100% compatible with the [RStudio Shiny web application framework](http://shiny.rstudio.com) via the rcloud.shiny package. `rcloud.shiny` emulates a network connection to run Shiny on an RCloud server and client instead of a Shiny server.

Although comprehensive documentation of rcloud.shiny is beyond the scope of this document, the implementation is simple enough to get many users already familiar with Shiny started.

    # Include rcloud.shiny library
    library(rcloud.shiny)
    # Include all the libraries from ui.R and server.R
    library(datasets)

    # The rcloud.shinyApp function is the equivalent of the shinyApp
    # (http://rmarkdown.rstudio.com/authoring_embedded_shiny.html#inline-applications)
    # function in shiny library.
    rcloud.shinyApp(
                
        # Pass the ui.R code something as shown below. 
      ui = fluidPage(

        # Application title
        headerPanel("Word Cloud"),
        .
        .
        .
        etc.

To learn more about how to use Shiny in RCloud, please see the `rcloud.shiny` example notebooks under RCloud Sample Notebooks in the Notebooks panel and the [official Shiny documentation](http://shiny.rstudio.com/).

