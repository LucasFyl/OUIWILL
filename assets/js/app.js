 $(document).ready(function(){
 	initPage();
 	window.onresize = resize;
 });

function hideLoader() {
	console.log('hide loader function');
	TweenMax.to('#loader', 1, {opacity:0,display:'none',ease:Power1.easeInOut,delay:0.1});
	// setTimeout(function(){
	// 	TweenMax.to('#loader .center', 0.5, {opacity:0, display:'none', ease:Expo.easeOut});
	// 	TweenMax.to('#loader', 1.5, {opacity:0, display:'none', ease:Power1.easeOut, delay:0.5, onComplete:function(){
	// 		$gallery.slick('slickPlay');
	// 	}});
	// }, 1000);
}
function resize() {
	console.log('page has been resized');
}
function initVideoPage() {
	console.log('video page');
	TweenMax.set('.video-modal', {display:'none'});

	$('body').on('click', '.play-btn', function(){
		var video = $(this).attr('data-video');
		var target = $('body').find('.'+video);
		openVideo(video, target);
	});
	
	openVideo = function(video, target) {
		
		TweenMax.set('body', {overflow:'hidden'});
		TweenMax.to('.modal-fade-screen', 0.25, {visibility:'visible',opacity:1,ease:Power2.easeOut});
		TweenMax.set(target, {display:'block'});
		$('body').on('click', '.modal-fade-screen', function(){
			TweenMax.to('.modal-fade-screen', 0.25, {opacity:0,visibility:'hidden',ease:Power2.easeOut});
			TweenMax.set('body', {overflow:'auto'});
		});
	};
}
function initHomeSlider() {
	var sliderContent = '.vertical-center li > h2, .vertical-center li > p, .vertical-center li > a',
	firstSlideCtnt = '.bxslider ul li:first-child > h2, .bxslider ul li:first-child > p, .bxslider ul li:first-child > a';
	TweenMax.set(sliderContent, {css:{opacity:0,y:20}});
	$('.bxslider').bxSlider({
		mode: 'fade',
		auto: true,
		pause: 7000,
		onSliderLoad: function(){
			TweenMax.staggerTo(sliderContent, 0.5, {css:{opacity:1,y:0},ease:Power2.easeOut}, 0.25);
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
	initWorkHover();
}

// Page load event 
function initPage(){

	hideLoader();

	// Page specific load events
	if ( $('.main#home').length ) { initHomePage(); }
	if ( $('.main.video').length ) { initVideoPage(); }
}