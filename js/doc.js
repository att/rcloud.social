$(function() {
    
  var $toc      = $('#sidebar');
  var $contents = $('#contents');
  var $tocbtn   = $('#tocbtn');
  
  var is_toc = true;
  
    $tocbtn.click(function() {
    
      if( is_toc )
      {
      console.log("Test again");
	$toc.css({display:"none"});
	$contents.removeClass("col-md-9");
	$contents.addClass("col-md-12");
	$tocbtn.html('Show TOC <span class="glyphicon glyphicon-menu-hamburger"></span>');
	is_toc = false;
      }
      else
      {
	$toc.css({display:"block"});
	$contents.removeClass("col-md-12");
	$contents.addClass("col-md-9");
	$tocbtn.html('Hide TOC <span class="glyphicon glyphicon-remove-sign"></span>');
	is_toc = true;
      }
      
    })

})


var marginTop = "40px";
var marginTotal = parseInt( marginTop, 10 ) + "px";

var $body = $(document.body);
var navHeight = $('.navbar').height() + $('#fxd').height() + marginTotal;

setTimeout(function () {
$('#sidebar').affix({
      offset: {
        top: function () {
            var offsetTop = $('#sidebar').offset().top;
            
            return (this.top = offsetTop-navHeight)
        },
        bottom: function () {
            return (this.bottom = $('footer').outerHeight(true))
        }
      }
});
},100);
