var isMobile = false; //initiate as false

console.log('isMobile:',isMobile);

$(document).ready(function(){
 	initPage();
 	window.onresize = resize;
 });

function hideLoader(){
	TweenMax.to('#loader', 1, {opacity:0,display:'none',ease:Power1.easeInOut,delay:0.1});
}
function resize() {
	console.log('page has been resized');
	detectMobile();

}
function initVideoPage(){
	console.log('video page');

	$('body').on('click', '.play-btn', function(){
		var video = $(this).attr('data-video');
		var target = $('body').find('.'+video);
		openVideo(video, target);
	});
	
	openVideo = function(video, target) {
		TweenMax.set('.video-modal', {display:'none'});
		TweenMax.set(target, {display:'block',delay:0.1});
	};
}
function initWorkHover() {
	var workEl = $('.single-work');

	setHover = function(){
		$('.single-work').each(function() {
			TweenMax.set('.hover', {scale:0.75,opacity:0});
			TweenMax.set('.hover h5, .hover p', {y:20,opacity:0});
		});
	};
	hoverIn = function(){
		var hover = $(this).find('.hover'),
			foo = hover.find('div'),
			hoverCtnt = foo.find('*');
		TweenMax.to(hover, 0.8, {scale:1,opacity:1,ease:Expo.easeOut});
		TweenMax.staggerTo(hoverCtnt, 0.25, {y:0,opacity:1,ease:Expo.easeOut,delay:0.3}, 0.15);
	};
	hoverOut = function(){
		var hover = $(this).find('.hover'),
			foo = hover.find('div'),
			hoverCtnt = foo.find('*');
		TweenMax.to(hover, 0.8, {scale:0.9,opacity:0,ease:Expo.easeOut});
		TweenMax.staggerTo(hoverCtnt, 0.25, {y:20,opacity:0,ease:Expo.easeOut,delay:0.6}, 0.15);
	};

	setHover();
	$('.single-work').hoverIntent(hoverIn, hoverOut);
}
function scrollNav() {
	var animateHeaderIn = function(){
		TweenMax.to('header.black.hidden', 0.5, {top:0,ease:Power2.easeOut});
	};
	var animateHeaderOut = function(){
		TweenMax.to('header.black.hidden', 0.5, {top:'-7.8rem',ease:Power2.easeIn});
	};
	var lastScrollTop = 0;

	$(window).scroll(function(event){
	    clearTimeout($.data(this, 'scrollTimer'));
	    
	    $.data(this, 'scrollTimer', setTimeout(function() {
	    	var st = $(this).scrollTop();
			if (st < lastScrollTop){
				animateHeaderIn();
			} else {
				animateHeaderOut();
			}
			lastScrollTop = st;
	    }, 100));
	});
}
function detectMobile(){
	
	// device detection
	if( $('.isMobile').is(':visible') ) {
	 	isMobile = true;
	 	TweenMax.set('html',{overflowX:'hidden'});
	}

	if (isMobile == true) {
		console.log('isMobile:',isMobile);
	} else {
		console.log('isMobile:',isMobile);
	}

}

// Page load event 
function initPage(){

	detectMobile();
	hideLoader();
	scrollNav();

	// Page specific load events
	if ( $('.main.video').length ) { initVideoPage(); }
	if ( $('.single-work').length ) { initWorkHover(); }
}