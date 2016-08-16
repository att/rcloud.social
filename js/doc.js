$(function() {
    
  var $toc      = $('#toc');
  var $contents = $('#contents');
  var $tocbtn   = $('#tocbtn');
  
  var is_toc = true;
  
    $tocbtn.click(function() {
    
      if( is_toc )
      {
	$toc.css({display:"none"});
	$contents.removeClass("col-sm-9");
	$contents.addClass("col-sm-12");
	$tocbtn.text("Show TOC");
	is_toc = false;
      }
      else
      {
	$toc.css({display:"block"});
	$contents.removeClass("col-sm-12");
	$contents.addClass("col-sm-9");
	$tocbtn.text("Hide TOC");
	is_toc = true;
      }
      
    })

  
})
