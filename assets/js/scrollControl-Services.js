var controller = new ScrollMagic.Controller();
var firstTween = new TweenMax.fromTo('#services section.brand', 0.5, {opacity:0.4}, {opacity:1,ease:Power4.easeOut});
var secondTween = new TweenMax.fromTo('#services section.digital', 0.5, {opacity:0.4}, {opacity:1,ease:Power4.easeOut});
var thirdTween = new TweenMax.fromTo('#services section.photo', 0.5, {opacity:0.4}, {opacity:1,ease:Power4.easeOut});
var fourthTween = new TweenMax.fromTo('#services section.sectors', 0.5, {opacity:0.4}, {opacity:1,ease:Power4.easeOut});

var firstScene = new ScrollMagic.Scene({triggerElement: "#services section.brand"})
    .addTo(controller)
    .setTween(firstTween);
var secondScene = new ScrollMagic.Scene({triggerElement: "#services section.digital"})
    .addTo(controller)
    .setTween(secondTween);
var thirdScene = new ScrollMagic.Scene({triggerElement: "#services section.photo"})
    .addTo(controller)
    .setTween(thirdTween);
var fourthScene = new ScrollMagic.Scene({triggerElement: "#services section.sectors"})
    .addTo(controller)
    .setTween(fourthTween);