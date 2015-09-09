$(document).ready(function(){
	(function(){
		var HomeScroll = {
			init:function(){
				var controller = new ScrollMagic.Controller();

			    var introTween = new TweenMax.fromTo('#home .intro div', 1, {opacity:0,x:-20}, {opacity:1,x:0,ease:Power2.easeOut});
			    var showreelTween = new TweenMax.to('#home .showreel .play-btn', 0.5, {opacity:1,marginTop:'3rem',ease:Power2.easeInOut});
			    var clientTween = new TweenMax.staggerFromTo('#home .clients > div', 0.25, {opacity:0,y:20}, {opacity:1,y:0,ease:Power4.easeOut}, 0.1);
			    var workTween = new TweenMax.staggerFromTo('#home .single-work', 2, {opacity:0}, {opacity:1,ease:Power2.easeOut}, 0.25);
			    var newsTween = new TweenMax.staggerFromTo('#home .single-news', 0.75, {opacity:0}, {opacity:1,ease:Power4.easeInOut}, 0.1);
			    var carreersTween = new TweenMax.fromTo('#home .carreers .light-btn', 0.25, {opacity:0,scale:0.6}, {opacity:1,scale:1,ease:Elastic.easeInOut});

			    var introScene = new ScrollMagic.Scene({triggerElement: "#home .intro"})
			        .addTo(controller)
			        .setTween(introTween);
			        
			    var showreelScene = new ScrollMagic.Scene({triggerElement: "#home .showreel", offset: 200})
			        .addTo(controller)
			        .setTween(showreelTween);
			        
			    var clientsScene = new ScrollMagic.Scene({triggerElement: "#home .clients", triggerHook: 'onEnter', offset: 200})
			        .addTo(controller)
			        .setTween(clientTween);
			        
			    var workScene = new ScrollMagic.Scene({triggerElement: "#home .single-work", triggerHook: 'onEnter', offset: 200})
			        .addTo(controller)
			        .setTween(workTween);
			        
			    var newsScene = new ScrollMagic.Scene({triggerElement: "#home .news", triggerHook: 'onEnter', offset: 100})
			        .addTo(controller)
			        .setTween(newsTween);
			        
			    var carreersScene = new ScrollMagic.Scene({triggerElement: "#home .carreers"})
			        .addTo(controller)
			        .setTween(carreersTween);

				if (isMobile === false ){
					this.desktopOnly(controller);
				}
			},
			desktopOnly: function(controller){
				// 
			}
		}
		HomeScroll.init();
	})();
});