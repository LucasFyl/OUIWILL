(function(){
	var ServicesScroll = {
		init:function(){
			var controller = new ScrollMagic.Controller();
			var tlquote = new TimelineMax({paused:true});
			tlquote.set('.blockquote p', {opacity:0,y:20})
			    .fromTo('.blockquote', 1, {yPercent:100,zIndex:-1}, {yPercent:0,zIndex:9,ease:Power4.easeInOut})
			    .staggerTo('.blockquote p', 1, {opacity:1,y:0,ease:Power3.easeOut}, 0.25);


			if (isMobile === false ){
				this.desktopOnly(controller, tlquote);
			} else {
				this.mobileOnly(controller, tlquote);
			}
		},
		desktopOnly: function(controller, tlquote){
			var brandTween = new TweenMax.fromTo('#services section.brand', 1, {opacity:0.2}, {opacity:1,ease:Power4.easeOut});
	        var digitalTween = new TweenMax.fromTo('#services section.digital', 1, {opacity:0.2}, {opacity:1,ease:Power4.easeOut});
	        var photoTween = new TweenMax.fromTo('#services section.photo', 1, {opacity:0.2}, {opacity:1,ease:Power4.easeOut});
	        var sectorsTween = new TweenMax.fromTo('#services section.sectors', 1, {opacity:0.2}, {opacity:1,ease:Power4.easeOut});

	        var brandScene = new ScrollMagic.Scene({triggerElement: "#services section.brand", offset: 150})
	            .addTo(controller)
	            .setTween(brandTween);
	        var digitalScene = new ScrollMagic.Scene({triggerElement: "#services section.digital", offset: 150})
	            .addTo(controller)
	            .setTween(digitalTween);
	        var photoScene = new ScrollMagic.Scene({triggerElement: "#services section.photo", offset: 150})
	            .addTo(controller)
	            .setTween(photoTween);
	        var sectorsScene = new ScrollMagic.Scene({triggerElement: "#services section.sectors", offset: 150})
	            .addTo(controller)
	            .setTween(sectorsTween);
	        var quoteScene = new ScrollMagic.Scene({triggerElement: "footer.big", triggerHook: 'onEnter'})
	            .addTo(controller)
	            .setTween(tlquote.play());
		},
		mobileOnly: function(controller, tlquote){
			var quoteScene = new ScrollMagic.Scene({triggerElement: "#services section.sectors", triggerHook: 'onLeave', offset:100})
            .addTo(controller)
            .setTween(tlquote.play());
		}
	}
	ServicesScroll.init();
})();