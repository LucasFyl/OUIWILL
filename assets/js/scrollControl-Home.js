var controller = new ScrollMagic.Controller();
var firstTween = new TweenMax.fromTo('#home .intro div', 0.5, {opacity:0,x:-20}, {opacity:1,x:0,ease:Power4.easeOut});
var secondTween = new TweenMax.staggerFromTo('#home .showreel h2, #home .showreel .play-btn', 0.5, {opacity:0,y:20}, {opacity:1,y:0,ease:Power4.easeOut}, 0.2);
var thirdTween = new TweenMax.staggerFromTo('#home .clients .row > div', 0.25, {opacity:0,y:20}, {opacity:1,y:0,ease:Power4.easeOut}, 0.1);
var fourthTween = new TweenMax.fromTo('#home .carreers .light-btn', 0.25, {opacity:0,scale:0.6}, {opacity:1,scale:1,ease:Elastic.easeInOut});

var introScene = new ScrollMagic.Scene({triggerElement: "#home .intro"})
    .addTo(controller)
    .setTween(firstTween);
var showreelScene = new ScrollMagic.Scene({triggerElement: "#home .showreel"})
    .addTo(controller)
    .setTween(secondTween);
var clientsScene = new ScrollMagic.Scene({triggerElement: "#home .clients"})
    .addTo(controller)
    .setTween(thirdTween);
var carreersScene = new ScrollMagic.Scene({triggerElement: "#home .carreers p"})
    .addTo(controller)
    .setTween(fourthTween);