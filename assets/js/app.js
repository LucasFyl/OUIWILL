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
	$(document).on('click', '.brand-wrap', function(){
		closeMenu();
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
	
	appendBars = function(){
		$('.bx-pager-item').append('<span class="bar"></span>');
		$('span.bar').each(function(index){
			$(this).addClass('i_'+ index);
		});
	};

	initImg = function(){
		$('.bg img').each(function(index){
			$(this).addClass('i_'+ index);
		});
		TweenMax.to('img.i_0', 0.25, {opacity:1,ease:Power2.easeOut});
	};

	resetComponents = function(){
		TweenMax.set('span.bar', {className:"+=still"});
		TweenMax.set('span.bar', {className:"-=active",delay:0.1});
		TweenMax.set('.bx-pager-link', {className:"-=fill",delay:0.2});
		TweenMax.set('span.bar', {className:"-=still",delay:0.2});
	};

	$('.bxslider').bxSlider({
		mode: 'fade',
		controls: false,
		auto: true,
		pause: 7000,
		onSliderResize: function(){
			appendBars();
			resetComponents();
		},
		onSliderLoad: function(currentIndex){
			var thisBar = 'span.i_' + currentIndex;
			
			// dot class mgmt
			var thisDot = $('.bx-pager-link.active');
			TweenMax.staggerTo(sliderContent, 0.5, {css:{opacity:1,y:0},ease:Power2.easeOut}, 0.25);
			
			// create timing bars and class 
			appendBars();
			
			// add index class to bg and display first
			initImg();
			
			// expand the bar after everything is set
			TweenMax.set(thisBar, {className:'+=active',delay:1});
			
			// prevent dot behavior
			TweenMax.set(thisDot, {className:'+=fill'});
		},
		onSlideBefore: function(currentIndex, oldIndex, newIndex) {

			// Prevent initial dot behavior
			var thisDot = $('span.i_' + newIndex).prev('.bx-pager-link');
			var prevDot = $('span.i_' + oldIndex).prev('.bx-pager-link');
			TweenMax.set([thisDot, prevDot], {className:'+=fill'});

			// fade Out this img
			var thisBg = '.bg img.i_'+oldIndex;
			TweenMax.to(thisBg, 0.15, {opacity:0,ease:Power2.easeOut});

			// animate slide content (leaving animation)
			TweenMax.to(sliderContent, 0.25, {css:{opacity:0,y:20},ease:Power2.easeIn});
			
			// maintain bar active state
			var thisBar = 'span.i_' + newIndex;
			TweenMax.set(thisBar, {className:'+=active',delay:1});
		},
		onSlideAfter: function(currentIndex, oldIndex, newIndex){
			// fade In current slide img
			var thisBg = $('.bg img.i_'+newIndex);
			TweenMax.to(thisBg, 0.35, {opacity:1,ease:Power2.easeOut});
			
			// animate slide content (landing animation)
			TweenMax.staggerTo(sliderContent, 0.5, {css:{opacity:1,y:0},ease:Power2.easeOut}, 0.25);

			// reset components for next round
			if ( $('span.i_3').hasClass('active') ) {
				resetComponents();
			}
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