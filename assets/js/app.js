 $(document).ready(function(){
 	initPage();
 	window.onresize = resize;
 });

function hideLoader() {
	console.log('hide loader function');
	// setTimeout(function(){
	// 	TweenMax.to('#loader .center', 0.5, {opacity:0, display:'none', ease:Expo.easeOut});
	// 	TweenMax.to('#loader', 1.5, {opacity:0, display:'none', ease:Power1.easeOut, delay:0.5, onComplete:function(){
	// 		$gallery.slick('slickPlay');
	// 	}});
	// }, 1000);
}
function resize() {
	console.log('page has been resized');
}
function initVideoPage() {
	console.log('video page');

	TweenMax.set('.video-modal', {display:'none'});
}
function initPage(){

	// Page load event 
	hideLoader();

	// Page specific load events
	if ( $('.main.home').length ) { initVideoPage(); }
	if ( $('.main.video').length ) { initVideoPage(); }
}