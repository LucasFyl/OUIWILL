(function(){
	
	var Navigation = {
		init: function(menutimeline){
			TweenMax.set('#menu', {display:'none'});
			TweenMax.set('#menu .overlay', {opacity:0});
			TweenMax.set('#menu .brand .social ul > *', {opacity:0,y:20});
			TweenMax.set('#menu .menu', {x:'100%'});

			var menutimeline = new TimelineMax({paused:true});
			menutimeline.set('#menu', {display:'block'})
						.set('#menu .closer', {x:10,opacity:0})
						.to('#menu .menu', 0.45, {x:'0%',ease:Power1.easeOut})
			 			.to('#menu .overlay', 0.25, {opacity:1}, "-=0.2")
						.to('#menu .closer', 0.25, {x:0,opacity:1})
						.staggerTo('#menu .brand .social ul > *', 0.3, {opacity:1,y:0,ease:Power2.easeOut}, 0.1);

			this.bindEvents(menutimeline);
			return menutimeline;
		},

		openMenu: function(menutimeline){
			if (isMobile === false) {
				TweenMax.set('body', {width:'100vw',height:'100vh',overflow:'hidden'});
			}
			menutimeline.timeScale += 20;
			menutimeline.play();
		},
		closeMenu: function(menutimeline){
			menutimeline.timeScale += 50;
			menutimeline.reverse();
			if (isMobile === false) {
				TweenMax.set('body', {width:'100%',height:'100%',overflow:'auto'});
			}
		},

		bindEvents: function(menutimeline){
			$(document).on('click', '.menu-trigger', function(){
				if ( $(this).parents('.scroll-header').length > 0 ) {
					TweenMax.to('.scroll-header', 0.25, {top:'-7.8rem',ease:Power2.easeIn});
				}
				Navigation.openMenu(menutimeline);
			});
			$(document).keyup(function(e){
				if(e.which == 27) {
				  	Navigation.closeMenu(menutimeline);
				}
			});
			$(document).on('click', '.closeMenu', function(){
				Navigation.closeMenu(menutimeline);
			});
			$(document).on('click', '.overlay', function(e){
				if( e.target != this ) {
       				return;
				} else {
					Navigation.closeMenu(menutimeline);
				}
			});
		}
	}

	Navigation.init();

})();