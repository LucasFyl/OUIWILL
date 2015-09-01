(function(){
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
			
			// Animate slide content (landing animation)
			TweenMax.staggerTo(sliderContent, 0.5, {css:{opacity:1,y:0},ease:Power2.easeOut}, 0.25);
			
			// create timing bars and class 
			appendBars();
			
			// add index class to bg and display first
			initImg();
			
			// expand the bar after everything is set
			var thisBar = 'span.i_' + currentIndex;
			TweenMax.set(thisBar, {className:'+=active',delay:1});
			
			// prevent dot behavior
			var thisDot = $('.bx-pager-link.active');
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
})();