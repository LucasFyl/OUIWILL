(function(){
	var NewsScroll = {
		init:function(){
			var controller = new ScrollMagic.Controller();
			var allNewsTween = new TweenMax.staggerFromTo('#single-news .related .single-news', 1, {opacity:0}, {opacity:1,ease:Power4.easeInOut}, 0.1);
			var tlnextprev = new TimelineMax({paused:true});

			tlnextprev.set('.txt-wrap > *', {opacity:0,y:20})
					.fromTo('.nextprev', 0.5, {yPercent:100,zIndex:-1}, {yPercent:0,zIndex:9,ease:Power4.easeInOut})
					.staggerTo('.prev .txt-wrap > *', 0.25, {opacity:1,y:0,ease:Power3.easeOut}, 0.1)
					.staggerTo('.next .txt-wrap > *', 0.25, {opacity:1,y:0,ease:Power3.easeOut}, 0.1, "-=0.5");
					
			var allNews = new ScrollMagic.Scene({triggerElement: "#single-news .related", triggerHook: 'onEnter', offset:100})
			    .addTo(controller)
			    .setTween(allNewsTween);

			var nextPrev = new ScrollMagic.Scene({triggerElement: "footer.big", triggerHook: 'onEnter'})
			    .addTo(controller)
			    .setTween(tlnextprev.play());

			if (isMobile === false ){
				this.desktopOnly(controller);
			}
		},
		desktopOnly: function(controller){

		}
	}
	NewsScroll.init();
})();
			