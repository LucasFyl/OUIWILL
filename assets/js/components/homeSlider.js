(function(){
	var HomeSlider = {
		init:function(){
			// define slider components
			var val = 0;
			var content = $('#mySlider .slider-content ul li');
			var kids = content.children('h2, p, a');
			var nav = $('#mySlider .slider-nav .nav-item');
			var images = $('#mySlider .slider-bg img');

			// set components classes based on index
			content.each(function(index){
				$(this).addClass('i_'+ index);
			});
			images.each(function(index){
				$(this).addClass('i_'+ index);
			});
			nav.each(function(index){
				$(this).addClass('i_'+ index);
			});

			// set components positions 
			this.reset(content, kids, images, nav, val);

		},
		reset: function(content, kids, images, nav, val){
			// (re)set slide content style for animation
			TweenMax.set(kids, {opacity:0,y:20});
			TweenMax.set(images, {zIndex:2,opacity:0});

			// init first slide positions
			var firstContent = $('li.i_0').children('h2, p, a');
			var firstImage = $('img.i_0');
			TweenMax.to(firstImage, 0.25, {zIndex:3,opacity:1,ease:Power2.easeOut});
			TweenMax.staggerTo(firstContent, 0.5, {opacity:1,y:0,ease:Expo.easeOut,delay:0.5,onComplete:function(){
				TweenMax.to(firstContent, 0.25, {y:20,opacity:0,ease:Power2.easeIn,delay:3.5});
			}}, 0.15);

			// trigger navigation
			this.navigation(val);
			// trigger slider
			this.slide(content, kids, images, nav, val);
		},
		navigation: function(val){
			var targetNav = $('#mySlider .slider-nav .nav-item.i_' + val);
			var targetDot = targetNav.find('.nav-link');
			var targetBar = targetNav.find('.bar');

			if( val === 0 ) {
				// Reset bars and dots class
				TweenMax.set('.bar', {className:"+=still"});
				TweenMax.set(['.nav-link','.bar'], {className:'-=active',delay:0.01});
				TweenMax.set('.bar', {className:"-=still",delay:0.02});
				// Set back first dot and first bar to active
				TweenMax.set(['.nav-item.i_0 .bar','.nav-item.i_0 .nav-link'], {className:'+=active',delay:0.2});
			} else {
				// set target bar and dot to active
				TweenMax.set([targetBar,targetDot], {className:'+=active'});
			}
		},
		slide: function(content, kids, images, nav, val){
			setInterval(function(){
				
				// if 0 then target is 1
				if (val === 0) {val=val+1;}
				
				if( val <= 3 ) {
					// slide to target, update nav, and increment slide val
					HomeSlider.slideTo(val);
					HomeSlider.navigation(val);
					val=val+1;
					return;
				} else {
					// reset everything and start again
					val = 0;
					HomeSlider.reset(content, kids, images, nav, val);
					return;
				}
				return;
			}, 5000 );
		},
		slideTo: function(val){
			var targetContent = $('#mySlider .slider-content li.i_' + val).children('h2, p, a');
			var targetImage = $('#mySlider .slider-bg img.i_' + val);

			TweenMax.staggerTo(targetContent, 0.5, {opacity:1,y:0,ease:Power2.easeOut,onComplete:function(){
				TweenMax.to(targetContent, 0.25, {y:20,opacity:0,ease:Power2.easeIn,delay:4});
			}}, 0.25);
			TweenMax.to(targetImage, 0.35, {zIndex:3,opacity:1,ease:Power2.easeOut});
		},
		bindEvent: function(){
			$('body').on('click', '.nav-link', function(e){
				e.preventDefault();
				var _this = $(this);
				var target = _this.parent().attr('class');
				console.log(target);
			})

		}
	}
	HomeSlider.init();
})();