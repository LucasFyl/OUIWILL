var controller = new ScrollMagic.Controller();

var tlnextprev = new TimelineMax({paused:true});
// var sideBarTween = new TweenMax.set('#sidebar', {className:'+=fixed'});
console.log(isMobile);
if ( isMobile = false) {
	console.log(isMobile);
	var sideBar = new ScrollMagic.Scene({triggerElement: "#sidebar", triggerHook: 'onLeave', offset:-60, duration:0})
	    .addTo(controller)
	    .setClassToggle("#sidebar", "fixed");
}


tlnextprev.set('.txt-wrap > *', {opacity:0,y:20})
		.set('#sidebar', {className:'-=fixed'})
		.fromTo('.nextprev', 0.5, {yPercent:100,zIndex:-1}, {yPercent:0,zIndex:9,ease:Power4.easeInOut})
		.staggerTo('.prev .txt-wrap > *', 0.25, {opacity:1,y:0,ease:Power3.easeOut}, 0.1)
		.staggerTo('.next .txt-wrap > *', 0.25, {opacity:1,y:0,ease:Power3.easeOut}, 0.1, "-=0.5");
		
var nextPrev = new ScrollMagic.Scene({triggerElement: "footer.big", triggerHook: 'onEnter'})
    .addTo(controller)
    .setTween(tlnextprev.play());