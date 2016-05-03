var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

$(document).ready(function(){

	var player;
        onYouTubeIframeAPIReady = function() {
            player = new YT.Player('video', {
                height: '1000',
                width: '562',
                videoId: 'aMFzfUnMDE',
                allowfullscreen: 'true',
                playerVars: {
                	modestbranding: 1,
                    wmode: 'opaque',
                    enablejsapi: 1,
                    theme: 'light',
                    showinfo: 0,
                    rel: 0
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }
        onPlayerReady = function(event) {
            //event.target.playVideo();
        }
        var done = false;
        onPlayerStateChange = function(event) {
            if (event.data == YT.PlayerState.ENDED) {
            	$('.video-overlay').show();
            	alert("we are done here");
                done = true;
            }
        }

	// Mobile Off-Canvas Navigation Toggling

	$('.menu-button').click(function(e) {
		e.preventDefault();
		$('html').toggleClass('js-nav');
		$('body').toggleClass('mobile-nav-on');
		$('nav').toggleClass('open');
	});

	$('.menu-toggle').click(function(){
        $('.main-navigation').toggleClass('open');
    });

	// Features & Benefits Accordion Toggling

	$('.features-accordion h4').click(function(){
		if ($(window).width() <= 749){
			if ($(this).hasClass('open-tab')) {
				$('.features-accordion p').slideUp();
				$('.features-accordion h4').removeClass('open-tab');
			} else {
				$('.features-accordion p').slideUp();
				$('.features-accordion h4').removeClass('open-tab');
				$(this).next('p').slideToggle();
				$(this).toggleClass('open-tab');
			}
		}
	});

    // Desktop Navigation Toggling on Scroll

	if ($(this).scrollTop() > 420 && $(window).width() >= 750){
        	$('#wrapper').addClass('shrink-off');
        	setTimeout(function(){
		       $('#wrapper').addClass('completed');
		   	}, 200);
	    } else if ($(this).scrollTop() <= 420 && $(window).width() >= 750) {
        	$('#wrapper').removeClass('shrink-off');
        	setTimeout(function(){
		       $('#wrapper').removeClass('completed');
		   	}, 200);
	    }
        
    $(window).scroll(function(){
        if ($(this).scrollTop() > 420 && $(window).width() >= 750){
        	$('#wrapper').addClass('shrink-off');
        	setTimeout(function(){
		       $('#wrapper').addClass('completed');
		   	}, 200);
	    } else if ($(this).scrollTop() <= 420 && $(window).width() >= 750) {
        	$('#wrapper').removeClass('shrink-off');
        	setTimeout(function(){
		       $('#wrapper').removeClass('completed');
		   	}, 200);
	    }
    });

    // Video Module Toggling

    function loadIframe(url) {
	    var $iframe = $('#video');
	    if ( $iframe.length ) {
	        $iframe.attr('src',url);   
	        return false;
	    }
	    return true;
	}

    $('.videos-top .video-nav a').click(function(e){
    	e.preventDefault();

    	$('.videos-top .video-nav a').removeClass('active');
    	$(this).addClass('active');

    	if ($('.video-overlay').is(':visible')) {
	    	vidURL = $(this).attr('href');
	    	loadIframe(vidURL);

	    	$('#video').fadeIn('fast', function(){
	    		$('.video-overlay').fadeOut('slow', function(){
	    			player.playVideo();
	    		});
	    	}); 
    	} else { 
    		vidURL = $(this).attr('href');
    		loadIframe(vidURL);
    		player.playVideo();
    	}
    });
});


$('#sidebar').affix({
      offset: {
        top: 245
      }
});

var $body   = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 10;

$body.scrollspy({
	target: '#leftCol',
	offset: navHeight
});



/* Dropdown Menu */
(function($){
	$(document).ready(function(){
		$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
			event.preventDefault(); 
			event.stopPropagation(); 
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});
	});
})(jQuery);
/*
( function( $ ) {
$( document ).ready(function() {
$('#cssmenu li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp();
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown();
			element.siblings('li').children('ul').slideUp();
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp();
		}
	});

	$('#cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');

	(function getColor() {
		var r, g, b;
		var textColor = $('#cssmenu').css('color');
		textColor = textColor.slice(4);
		r = textColor.slice(0, textColor.indexOf(','));
		textColor = textColor.slice(textColor.indexOf(' ') + 1);
		g = textColor.slice(0, textColor.indexOf(','));
		textColor = textColor.slice(textColor.indexOf(' ') + 1);
		b = textColor.slice(0, textColor.indexOf(')'));
		var l = rgbToHsl(r, g, b);
		if (l > 0.7) {
			$('#cssmenu>ul>li>a').css('text-shadow', '0 1px 1px rgba(0, 0, 0, .35)');
			$('#cssmenu>ul>li>a>span').css('border-color', 'rgba(0, 0, 0, .35)');
		}
		else
		{
			$('#cssmenu>ul>li>a').css('text-shadow', '0 1px 0 rgba(255, 255, 255, .35)');
			$('#cssmenu>ul>li>a>span').css('border-color', 'rgba(255, 255, 255, .35)');
		}
	})();

	function rgbToHsl(r, g, b) {
	    r /= 255, g /= 255, b /= 255;
	    var max = Math.max(r, g, b), min = Math.min(r, g, b);
	    var h, s, l = (max + min) / 2;

	    if(max == min){
	        h = s = 0;
	    }
	    else {
	        var d = max - min;
	        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	        switch(max){
	            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	            case g: h = (b - r) / d + 2; break;
	            case b: h = (r - g) / d + 4; break;
	        }
	        h /= 6;
	    }
	    return l;
	}
});
} )( jQuery ); */