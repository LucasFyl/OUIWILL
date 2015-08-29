 $(document).ready(function(){
 	initPage();
 	window.onresize = resize;
 });

function hideLoader(){
	console.log('hide loader function');
	TweenMax.to('#loader', 1, {opacity:0,display:'none',ease:Power1.easeInOut,delay:0.1});
}
function resize() {
	console.log('page has been resized');
}
function initModal() {
	TweenMax.set('.modal-fade-screen', {opacity:0,visibility:'hidden'});
	TweenMax.set('.modal-inner', {opacity:0,y:-50});

	openModal = function(){
		TweenMax.set('body', {overflow:'hidden'});
		TweenMax.to('.modal-fade-screen', 0.5, {visibility:'visible',opacity:1,ease:Power2.easeIn});
		TweenMax.to('.modal-inner', 0.35, {y:0,opacity:1,ease:Power2.easeOut,delay:0.5});
	};
	closeModal = function(){
		TweenMax.to('.modal-fade-screen', 0.5, {opacity:0,visibility:'hidden',ease:Power2.easeOut});
		TweenMax.set('.modal-inner', {opacity:0,y:-50});
		TweenMax.set('body', {overflow:'auto'});
	};

	$('body').on('click', '.play-btn', function(){
		openModal();
	});
	$('body').on('click', '.modal-fade-screen', function(){
		closeModal();
	});
	$(document).keyup(function(e){
		if(e.which == 27) {
		  	closeModal();
		}
	});
}
function initNavigation(){
	var menu = new TimelineMax({paused:true});
	TweenMax.set('#menu', {display:'none',opacity:0});
	TweenMax.set('#menu .brand > *', {opacity:0,y:20});
	TweenMax.set('#menu .menu', {opacity:0,x:'100%'});
	TweenMax.set('#menu .menu li', {opacity:0,y:20});

	menu.to('#menu', 0.45, {display:'block',opacity:1,ease:Power2.easeIn})
		.to('#menu .menu', 0.45, {opacity:1,x:'0%',ease:Power2.easeOut})
		.staggerTo('#menu .brand > *', 0.5, {opacity:1,y:0,ease:Power2.easeOut}, 0.1)
		.staggerTo('#menu .menu li', 0.5, {opacity:1,y:0,ease:Power2.easeOut}, 0.1, "-=0.4");

	openMenu = function() {
		TweenMax.set('body', {overflow:'hidden'});
		menu.play();
	};
	closeMenu = function() {
		menu.reverse();
	  	setTimeout(function(){
			TweenMax.set('body', {overflow:'auto'});
	  	}, 2100);
	  	// console.log(menu.duration());
	};
	$(document).on('click', '#trigger', function(){
		openMenu();
	});
	$(document).keyup(function(e){
		if(e.which == 27) {
		  	closeMenu();
		}
	});
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
function initHomeSlider(){
	var sliderContent = '.project-infos li > h2, .project-infos li > p, .project-infos li > a';
	TweenMax.set(sliderContent, {css:{opacity:0,y:20}});
	
	// $('.bx-pager-item').each(function(){
	// 	$(this).append('<span class="bar"></span>');
	// });

	$('.bxslider').bxSlider({
		mode: 'fade',
		auto: false,
		pause: 7000,
		onSliderLoad: function(){
			TweenMax.staggerTo(sliderContent, 0.5, {css:{opacity:1,y:0},ease:Power2.easeOut}, 0.25);
			$('.bx-pager-item').append('<span class="bar"></span>');
		},
		onSlideBefore: function() {
			TweenMax.to(sliderContent, 0.25, {css:{opacity:0,y:20},ease:Power2.easeIn});
		},
		onSlideAfter: function(){
			TweenMax.staggerTo(sliderContent, 0.5, {css:{opacity:1,y:0},ease:Power2.easeOut}, 0.25);
		}
	})
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
function initHomePage() {
	initHomeSlider();
}

// Page load event 
function initPage(){

	hideLoader();
	initNavigation();

	// Page specific load events
	if ( $('.main#home').length ) { initHomePage(); }
	if ( $('.main.video').length ) { initVideoPage(); }
	if ( $('.single-work').length ) { initWorkHover(); }
	if ( $('.modal').length ) { initModal(); }
}