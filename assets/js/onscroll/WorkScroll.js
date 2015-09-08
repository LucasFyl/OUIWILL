(function(){
	var WorkScroll = {
		init:function(){
			var controller = new ScrollMagic.Controller();
			var landingTl = new TimelineMax({paused:true});

			var foo = ['.showcase .single-work:first-child, .showcase .single-work:nth-child(2)'];
			var workTween1 = new TweenMax.staggerFromTo('.single-work:nth-child(3), .single-work:nth-child(4)', 1, {opacity:0,y:20}, {opacity:1,y:0,ease:Power4.easeInOut}, 0.1);
			var workTween2 = new TweenMax.staggerFromTo('.single-work:nth-child(5), .single-work:nth-child(6)', 1, {opacity:0,y:20}, {opacity:1,y:0,ease:Power4.easeInOut}, 0.1);
			var workTween3 = new TweenMax.staggerFromTo('.single-work:nth-child(7), .single-work:nth-child(8)', 1, {opacity:0,y:20}, {opacity:1,y:0,ease:Power4.easeInOut}, 0.1);
			var workTween4 = new TweenMax.staggerFromTo('.single-work:nth-child(9), .single-work:nth-child(10)', 1, {opacity:0,y:20}, {opacity:1,y:0,ease:Power4.easeInOut}, 0.1);
			var workTween5 = new TweenMax.staggerFromTo('.single-work:nth-child(11), .single-work:nth-child(12)', 1, {opacity:0,y:20}, {opacity:1,y:0,ease:Power4.easeInOut}, 0.1);
			var workTween6 = new TweenMax.staggerFromTo('.single-work:nth-child(13), .single-work:nth-child(14)', 1, {opacity:0,y:20}, {opacity:1,y:0,ease:Power4.easeInOut}, 0.1);

			TweenMax.set('#filters .filter, .showcase .single-work', {opacity:0,y:20});
			TweenMax.staggerTo(foo, 1, {opacity:1,y:0,ease:Power3.easeOut,delay:0}, 0.1);
			TweenMax.staggerTo('#filters .filter', 0.5, {opacity:1,y:0,ease:Power3.easeOut}, 0.1);

			var workScrollScene1 = new ScrollMagic.Scene({triggerElement: ".single-work:nth-child(2)", triggerHook: 'onLeave'})
			    .addTo(controller)
			    .setTween(workTween1);
			var workScrollScene2 = new ScrollMagic.Scene({triggerElement: ".single-work:nth-child(4)", triggerHook: 'onLeave'})
			    .addTo(controller)
			    .setTween(workTween2);
			var workScrollScene2 = new ScrollMagic.Scene({triggerElement: ".single-work:nth-child(6)", triggerHook: 'onLeave'})
			    .addTo(controller)
			    .setTween(workTween3);
			var workScrollScene2 = new ScrollMagic.Scene({triggerElement: ".single-work:nth-child(8)", triggerHook: 'onLeave'})
			    .addTo(controller)
			    .setTween(workTween4);
			var workScrollScene2 = new ScrollMagic.Scene({triggerElement: ".single-work:nth-child(10)", triggerHook: 'onLeave'})
			    .addTo(controller)
			    .setTween(workTween5);
			var workScrollScene2 = new ScrollMagic.Scene({triggerElement: ".single-work:nth-child(12)", triggerHook: 'onLeave'})
			    .addTo(controller)
			    .setTween(workTween6);

			if (isMobile === false ){
				this.desktopOnly(controller);
			}
		},
		desktopOnly: function(controller){

		}
	}
	WorkScroll.init();
})();

			