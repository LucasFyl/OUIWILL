var controller = new ScrollMagic.Controller();
var founderImgTween = new TweenMax.fromTo('#about .founder img', 1, {opacity:0}, {opacity:1,ease:Power4.easeInOut});
var founderTxtTween = new TweenMax.staggerFromTo('#about .founder h2, #about .founder h3, #about .founder p', 1, {opacity:0,y:20}, {opacity:1,y:0,ease:Power4.easeInOut}, 0.1);
var parisSandiegoTween = new TweenMax.fromTo('#about .paris-sandiego .row', 1, {opacity:0}, {opacity:1,ease:Power4.easeInOut});
var carreersTween = new TweenMax.fromTo('.carreers .light-btn', 0.25, {opacity:0,scale:0.6}, {opacity:1,scale:1,ease:Elastic.easeInOut});

var founderImg = new ScrollMagic.Scene({triggerElement: "#about .founder", triggerHook: 'onEnter'})
    .addTo(controller)
    .setTween(founderImgTween);

var founderTxt = new ScrollMagic.Scene({triggerElement: "#about .founder .row", triggerHook: 'onEnter'})
    .addTo(controller)
    .setTween(founderTxtTween);

var parisSandiego = new ScrollMagic.Scene({triggerElement: "#about .paris-sandiego", triggerHook: 'onEnter'})
    .addTo(controller)
    .setTween(parisSandiegoTween);

var carreersScene = new ScrollMagic.Scene({triggerElement: ".carreers p"})
    .addTo(controller)
    .setTween(carreersTween);