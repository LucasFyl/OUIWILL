$(document).ready(function(){
	(function(){
		var HomeSlider = {
			init:function(){
				// define slider components
				var val = 0;
				var foo = 0;
				var content = $('#mySlider .slider-content ul li');
				var kids = content.children('h2, p, a');
				var nav = $('#mySlider .slider-nav .wrap > div');
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
				this.reset(content, kids, images, nav, val, foo);


			},
			reset: function(content, kids, images, nav, val, foo){
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
				// trigger bind events
				this.bindEvents(content, kids, images, nav);
				// trigger navigation
				this.navigation(val);
				// trigger slider
				this.slide(content, kids, images, nav, val, foo);
			},
			navigation: function(val, foo){
				var targetNav = $('#mySlider .slider-nav .wrap > div.i_' + val);
				var targetDot = targetNav.find('.nav-link');
				var targetBar = targetNav.find('.bar');

				if( val === 0 ) {
					HomeSlider.resetNav(val);
				} else {
					// set target bar and dot to active
					TweenMax.set([targetBar,targetDot], {className:'+=active'});
				}
			},
			resetNav: function(val){
				// Reset bars and dots class
				TweenMax.set('.bar', {className:"+=still"});
				TweenMax.set(['.nav-link','.bar'], {className:'-=active',delay:0.01});
				TweenMax.set('.bar', {className:"-=still",delay:0.02});
				// Set back first dot and first bar to active
				TweenMax.set(['.slider-nav .i_'+ val +' .bar','.slider-nav .i_'+ val +' .nav-link'], {className:'+=active',delay:0.2});
			},
			slide: function(content, kids, images, nav, val, foo){
				var slideInt = setInterval(function(){
					if ( foo <= 36 ) { 
						// killer variable
						foo = foo+1;
						console.log('foo:',foo);
						
						// if 0 then target is 1
						if (val === 0) {val=val+1;foo = foo+1;}

						// if not last slide switch to next, else switch to first an reset val
						if( val <= 3 ) {
							// stop all buffered events and execute only last animation
							HomeSlider.stopBuffering(content, kids, images, nav);
							// slide to target, update nav, and increment slide val
							HomeSlider.slideTo(val);
							HomeSlider.navigation(val);
							val=val+1;
							return;
						} else {
							// stop all buffered events and execute only last animation
							HomeSlider.stopBuffering(content, kids, images, nav);

							// reset everything and start again
							val = 0;
							HomeSlider.reset(content, kids, images, nav, val);
							return;
						}
					} else if ( foo >= 36 ) { 
						clearInterval(slideInt);
						console.log('foo:',foo);
						val = 0; foo = 0;
						HomeSlider.stopBuffering(content, kids, images, nav);
						HomeSlider.kill(content, kids, images, nav, val, foo); 
					}
				}, 5000);
			},
			slideTo: function(val, foo){
				var targetContent = $('#mySlider .slider-content li.i_' + val).children('h2, p, a.light-btn');
				var targetImage = $('#mySlider .slider-bg img.i_' + val);
				TweenMax.staggerTo(targetContent, 0.5, {opacity:1,y:0,zIndex:4,ease:Power2.easeOut,onComplete:function(){
					TweenMax.to(targetContent, 0.25, {y:20,opacity:0,ease:Power2.easeIn,delay:4});
				}}, 0.25);
				TweenMax.to(targetImage, 0.35, {zIndex:3,opacity:1,ease:Power2.easeOut});
			},
			// slideToWithTarget: function(target){
			// 	console.log(target);
			// },
			stopBuffering: function(content, kids, images, nav){
				// stop all buffered events and execute only last animation
				// MAY fix the inactive-tab bug as seen on : 
				// http://stackoverflow.com/questions/6183463/when-using-setinterval-if-i-switch-tabs-in-chrome-and-go-back-the-slider-goes
				$('#mySlider').stop(true,true);
				$('#mySlider .slider-content').stop(true,true);
				$('#mySlider .slider-nav').stop(true,true);
				$('#mySlider .slider-bg').stop(true,true);
				content.stop(true,true);
				kids.stop(true,true);
				images.stop(true,true);
				nav.stop(true,true);
			},
			kill: function(content, kids, images, nav, val, foo){
				console.log('kill');
				// (re)set slide content style for animation
				TweenMax.set(kids, {opacity:0,y:20});
				TweenMax.set(images, {zIndex:2,opacity:0});
				// init first slide positions
				var firstContent = $('li.i_0').children('h2, p, a');
				var firstImage = $('img.i_0');
				TweenMax.to(firstImage, 0.25, {zIndex:3,opacity:1,ease:Power2.easeOut});
				TweenMax.staggerTo(firstContent, 0.5, {opacity:1+' !important',y:0+' !important',ease:Expo.easeOut,delay:0.5,onComplete:function(){
					TweenMax.to(firstContent, 0.25, {y:20,opacity:0,ease:Power2.easeIn,delay:3.5});
				}}, 0.15);
				// reset navigation components
				TweenMax.set('.bar', {className:"+=still"});
				TweenMax.set(['.nav-link','.bar'], {className:'-=active',delay:0.01});
				TweenMax.set('.bar', {className:"-=still",delay:0.02});
			},
			bindEvents: function(content, kids, images, nav, foo){
				$(document).on('click', '#mySlider a.nav-link', function(e){
					// Get target id from nav link
					e.preventDefault();
					var _this = $(this);
					var target = _this.parent().attr('class');
					var lastChar = target.substr(target.length - 1);
					// set val to target
					val = lastChar;
					// (re)set slide content style for animation
					TweenMax.set(kids, {opacity:0,y:20});
					TweenMax.set(images, {zIndex:2,opacity:0});
					// Reset navigation
					HomeSlider.resetNav(val);
					// trigger slider
					HomeSlider.slideTo(val);
					// trigger navigation
					HomeSlider.navigation(val);
				});
			}
		};
		HomeSlider.init();
	})();
});