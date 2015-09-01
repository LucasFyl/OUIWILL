var controller = new ScrollMagic.Controller();
var landingTl = new TimelineMax({paused:true});

TweenMax.set('#filters .filter, .showcase .single-work', {opacity:0,y:20});
TweenMax.staggerTo('.showcase .single-work', 1, {opacity:1,y:0,ease:Power3.easeOut,delay:0.5}, 0.1);
TweenMax.staggerTo('#filters .filter', 0.5, {opacity:1,y:0,ease:Power3.easeOut,delay:1}, 0.1);