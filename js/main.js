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

	// Tutorials Accordion Toggling

		$('.tutorials-accordion h4').click(function(){
		if ($(window).width() <= 749){
			if ($(this).hasClass('open-tab')) {
				$('.tutorials-accordion div').slideUp();
				$('.tutorials-accordion h4').removeClass('open-tab');
			} else {
				$('.tutorials-accordion div').slideUp();
				$('.tutorials-accordion h4').removeClass('open-tab');
				$(this).next('div').slideToggle();
				$(this).toggleClass('open-tab');
			}
		}
	});
	

	var accrd = document.getElementsByClassName("accrdn");
	var iacrd;

	for (iacrd = 0; iacrd < accrd.length; iacrd++) {
		accrd[iacrd].onclick = function(){
			this.classList.toggle("active");
			this.nextElementSibling.classList.toggle("show");
	  }
	}
		


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