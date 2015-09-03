(function(){
	
	var Modal = {
		init: function(menutimeline){
			TweenMax.set('.modal-fade-screen', {opacity:0,visibility:'hidden'});
			// TweenMax.set('.modal-inner', {opacity:0,y:-50});
			Modal.bindEvents();
		},
		open: function(){
			TweenMax.set('body', {overflow:'hidden'});
			TweenMax.to('.modal-fade-screen', 0.5, {visibility:'visible',opacity:1,ease:Power2.easeOut});
			TweenMax.fromTo('.modal-inner', 0.35, {opacity:0,y:-50}, {y:0,opacity:1,ease:Power2.easeOut,delay:0.5});
		},
		close: function(){
			TweenMax.to('.modal-fade-screen', 0.5, {opacity:0,visibility:'hidden',delay:0.35,ease:Power2.easeIn});
			TweenMax.fromTo('.modal-inner', 0.35, {y:0,opacity:1}, {opacity:0,y:50,ease:Power2.easeIn});
			TweenMax.set('body', {overflow:'auto'});
		},
		bindEvents: function(menutimeline){
			$('body').on('click', '.play-btn', function(e){
				e.preventDefault();
				Modal.open();
			});
			$('body').on('click', '.modal-fade-screen', function(e){
				e.preventDefault();
				Modal.close();
			});
			$(document).keyup(function(e){
				if(e.which == 27) {
				  	Modal.close();
				}
			});	
		}
	}

	Modal.init();

})();