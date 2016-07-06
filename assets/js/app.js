var isMobile = false; //initiate as false

console.log('isMobile:',isMobile);

$(document).ready(function(){
 	initPage();
 	window.onresize = resize;
 });

function hideLoader(){
	tl_loader = new TimelineMax({paused:true});
	tl_loader.to('#loader .spinnerDad', 0.25, {opacity:0,ease:Power2.easeOut,delay:0.75})
			 .to('#loader .animHalf', 1, {height:0,ease:Power1.easeInOut,delay:0.1,onComplete:function(){
			 	TweenMax.set('#loader', {display:'none'});
			 }}).play();
}
function resize() {
	detectMobile();
}
function initVideoPage(){
	
	$('body').on('click', '.play-btn', function(){
		video = $(this).attr('data-video');
		target = $('body').find('.'+video);
		openVideo(video, target);
	});
	
	openVideo = function(video, target) {
		TweenMax.set('.modal .modal-inner > *', {opacity:0,display:'none'});
		TweenMax.set(target, {opacity:1,display:'block',delay:0.1});
		video = null; target = null;
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
function initNextPrevHover(){
		
	var el = $('.blockprevnext > div');
		elNext = (el+'.next'),
		elPrev = (el+'.prev'),
		trigger = el.find('.hoverTrigger');
	
	animIn = function($this){
		var foo = $(this),
			arrow = ('.txt-wrap h4 .arrow');
		
		if ( foo.hasClass('next') ) {
			var thisArrow = $(arrow+'.nextArrow');
			TweenMax.to(thisArrow, 0.25, {right:"-=20px",opacity:1,ease:Power2.easeIn});
			TweenMax.set('.next img', {css:{position:'absolute',zIndex:'-1'}});
			TweenMax.to('.next img', 0.75, {scale:1.05,ease:Power2.easeInOut});
		} else if ( foo.hasClass('prev') ) {
			var thisArrow = $(arrow+'.prevArrow');
			TweenMax.to(thisArrow, 0.25, {left:"-=20px",opacity:1,ease:Power2.easeIn});
			TweenMax.set('.prev img', {css:{position:'absolute',zIndex:'-1'}});
			TweenMax.to('.prev img', 0.75, {scale:1.05,ease:Power2.easeInOut});
		}
	};
	animOut = function($this){
		var foo = $(this),
			arrow = ('.txt-wrap h4 .arrow');
		
		if ( foo.hasClass('next') ) {
			var thisArrow = $(arrow+'.nextArrow');
			TweenMax.to(thisArrow, 0.25, {right:"+=20px",opacity:0,ease:Power2.easeInOut});
			TweenMax.to('.next img', 0.5, {scale:1,ease:Power2.easeOut});
			// TweenMax.set('.next img', {css:{position:'static'}});
		} else if ( foo.hasClass('prev') ) {
			var thisArrow = $(arrow+'.prevArrow');
			TweenMax.to(thisArrow, 0.25, {left:"+=20px",opacity:0,ease:Power2.easeInOut});
			TweenMax.to('.prev img', 0.5, {scale:1,ease:Power2.easeOut});
			// TweenMax.set('.prev img', {css:{position:'static'}});
		}
	};

	trigger.hoverIntent(animIn, animOut);
}
function scrollNav() {
	var lastScrollTop = 0;
	var animateHeaderIn = function(){
		TweenMax.to('header.black.hidden', 0.5, {top:0,ease:Expo.easeOut});
		if ( $('#sidebar.fixed').length ) {
		    TweenMax.to('#sidebar.fixed', 0.15, {top:'10rem',ease:Expo.easeOut});
		}
	};
	var animateHeaderOut = function(){
		TweenMax.to('header.black.hidden', 0.5, {top:'-7.8rem',ease:Expo.easeOut});
		if ( $('#sidebar.fixed').length ) {
		    TweenMax.to('#sidebar.fixed', 0.15, {top:'5rem',ease:Expo.easeOut});
		}
	};

	$(window).scroll(function(event){
	    clearTimeout($.data(this, 'scrollTimer'));

	    $.data(this, 'scrollTimer', setTimeout(function() {
	    	var st = $(this).scrollTop();
	    	if (st > 300) {
	    		if (st < lastScrollTop){
					animateHeaderIn();
				} else {
					animateHeaderOut();
				}
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
	if ( $('.blockprevnext').length ) { initNextPrevHover(); }
	if ( $('.single-work').length ) { 
		if ( isMobile === false ) {
			initWorkHover();
		}
	}
	if ( $('body.home').length ) {
		TweenMax.to('#super-loader video', 1, {opacity:0,display:'none',ease:Power2.easeIntOut,delay:1.5});
		TweenMax.to('#super-loader', 1, {opacity:0,display:'none',ease:Power2.easeIntOut,delay:2.5});

		landingHomeTL = new TimelineMax({paused:true});
		landingHomeTL
			.fromTo('.landing .overlay', 0.5, {marginTop:'-5rem',opacity:0},{marginTop:"3rem",opacity:1,ease:Power2.easeOut}, "-=0.8")
			.staggerFromTo('.landing .container div > *', 0.5, {y:-20,opacity:0},{y:0,opacity:1,ease:Power2.easeOut});
		
		setTimeout(function() {
			landingHomeTL.play();
			$("#bgvid").get(0).play();
		}, 2000);

		var slider = $.simpleSlider();

		$(document).on('click', '.landing .caret-down', function(e){
			e.preventDefault();
			var vh100 = $(window).height();
			TweenMax.to(window, 1, {scrollTo:{y:vh100},ease:Power2.easeInOut});
		});
	}
	// if ( $('body.work').length ) { }
	if ( $('body.about').length ) {
		var slider = $.simpleSlider();
	}
}