(function(){
	
	var Navigation = {
		init: function(menutimeline){
			TweenMax.set('#menu', {display:'none'});
			TweenMax.set('#menu .overlay', {opacity:0,display:'none'});
			TweenMax.set('#menu .brand .social ul > *', {opacity:0,y:20});
			TweenMax.set('#menu .menu', {x:'100%'});
			TweenMax.set('#menu h1.logo img', {opacity:0});
			TweenMax.set('#menu .menu li', {opacity:0,y:10});
			TweenMax.set('.closeMenu', {opacity:0});

			var menutimeline = new TimelineMax({paused:true});
			menutimeline.set('#menu', {display:'block'})
						.to('#menu .menu', 0.45, {x:'0%',ease:Power1.easeOut})
			 			.to('#menu .overlay', 0.25, {opacity:1,display:'block'}, "-=0.2")
						.to('header.black.hidden', 0.25, {top:'-7.8rem',ease:Power2.easeIn}, "-=0.4")
						.to('#menu h1.logo img', 0.3, {opacity:1,ease:Power2.easeOut}, '-=0.5')
						.staggerTo('#menu .brand .social ul > *', 0.3, {opacity:1,y:0,ease:Power2.easeOut}, 0.1, "-=0.5")
						.to('.closeMenu', 0.25, {opacity:1,ease:Power2.easeOut}, "-=0.25")
						.staggerTo('#menu .menu li', 0.25, {opacity:1,y:0,ease:Power2.easeOut}, 0.1, "-=0.1");

			this.bindEvents(menutimeline);
			return menutimeline;
		},

		openMenu: function(menutimeline){
			TweenMax.set('body', {overflow:'hidden'});
			menutimeline.timeScale += 20;
			menutimeline.play();
		},
		closeMenu: function(menutimeline){
			menutimeline.timeScale += 50;
			menutimeline.reverse();
		  	setTimeout(function(){
				TweenMax.set('body', {overflow:'auto'});
		  	}, 2100);
		},

		bindEvents: function(menutimeline){
			$(document).on('click', '#trigger', function(){
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