$(document).ready(function(){
	(function(){
		var HomeSlider = {
			init:function(){
				// define slider components
				var val = 0;
				var content = $('#mySlider .slider-content ul li');
				var kids = content.children('h2, p, a');
				var nav = $('#mySlider .slider-nav ul li');
				var images = $('#mySlider .slider-bg img');

				// set components classes based on index
				content.each(function(index){ $(this).addClass('i_'+ index); });
				images.each(function(index){ $(this).addClass('i_'+ index); });
				nav.each(function(index){ $(this).addClass('i_'+ index); });

				// set components positions 
				this.reset(content, kids, images, nav, val);
			},
			reset: function(content, kids, images, nav, val){
				// (re)set slide content style for animation
				TweenMax.set(kids, {opacity:0,y:20});
				TweenMax.set(images, {zIndex:2,opacity:0});

				// init first slide positions
				var firstLi = $('.slider-content li.i_0');
				var firstContent = $('.slider-content li.i_0').children('h2, p, a');
				var firstImage = $('img.i_0');
				firstLi.addClass('topIndex');
				TweenMax.to(firstImage, 0.25, {zIndex:3,opacity:1,ease:Power2.easeOut});
				TweenMax.staggerTo(firstContent, 0.5, {opacity:1,y:0,ease:Expo.easeOut,delay:0.5}, 0.15);
				
				// trigger bind events
				this.bindEvents(content, kids, images, nav, val);
			},
			resetNav: function(val){
				// Reset bars and dots class
				TweenMax.set('li.current', {className:'-=current',delay:0.01});
				// Set back first dot and first bar to active
				TweenMax.set('.slider-nav .i_'+ val, {className:'+=current',delay:0.2});
			},
			slideIn: function(val){
				var slideIn = new TimelineMax();

				var targetLi = $('#mySlider .slider-content li.i_' + val);
				var targetContent = $('#mySlider .slider-content li.i_' + val).children('h2, p, a.light-btn');
				var targetImage = $('#mySlider .slider-bg img.i_' + val);
				targetLi.addClass('topIndex');
				
				slideIn.to(targetImage, 0.35, {zIndex:3,opacity:1,ease:Power2.easeOut}).play()
					   .staggerTo(targetContent, 0.5, {opacity:1,y:0,zIndex:4,ease:Power2.easeOut}, 0.25).play();
			},
			slideOut: function(val){
				var slideOut = new TimelineMax();

				var currentLi = $('#mySlider .slider-content li.i_' + val);
				var currentContent = $('#mySlider .slider-content li.i_' + val).children('h2, p, a.light-btn');
				var currentImage = $('#mySlider .slider-bg img.i_' + val);

				slideOut.staggerTo(currentContent, 0.3, {opacity:0,y:20,ease:Power2.easeOut}, 0.1)
						.to(currentImage, 0.25, {opacity:0,ease:Power2.easeOut,onComplete:function(){
							currentLi.removeClass('topIndex');
						}}).play();
			},
			bindEvents: function(content, kids, images, nav, val){
				$(document).on('click', '#mySlider a.nav-link', function(e){
					// hide components for next slide
					HomeSlider.slideOut(val);
					// Get target id from nav link
					e.preventDefault();
					var _this = $(this);
					var target = _this.parent().attr('class');
					var lastChar = target.substr(target.length - 1);
					// set val to target
					val = lastChar;
					setTimeout(function(){
						HomeSlider.resetNav(val);
						HomeSlider.slideIn(val);
					}, 500);
				});
			}
		};
		setTimeout(function(){
			HomeSlider.init();
		}, 2500);
	})();
}); 