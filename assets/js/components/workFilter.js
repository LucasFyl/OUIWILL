(function(){
	var WorkFilter = {
		init:function(){
			// init filters
			this.bindEvents();
		},
		filter: function(_this){
			var needed = '.single-work.'+_this;
			var notneeded = '.single-work:not(.'+_this+')';
			TweenMax.staggerTo(notneeded, 1, {y:200,opacity:0,ease:Power4.easeInOut,onComplete:WorkFilter.updateGrid(needed, notneeded)}, 0.1);
		},
		reset: function(clickTarget){
			// manage filtering or not
			$('.filter').removeClass('active');
			$(this).addClass('active');
			var _this = $(this).attr('data-filter');
			$('.single-work').removeClass('disabled');
			if ( _this != 'all' ) { WorkFilter.filter(_this); } else {
				TweenMax.staggerFromTo('.single-work', 1, {opacity:0,y:20}, {y:0,opacity:1,ease:Power4.easeInOut}, 0.15);
			}
		},
		updateGrid: function(needed, notneeded){
			// hide not needed 
			$('.showcase').find(notneeded).addClass('disabled');
			TweenMax.staggerFromTo(needed, 1, {opacity:0,y:20}, {y:0,opacity:1,ease:Power4.easeInOut}, 0.15);
		},
		bindEvents: function(){
			// bind click events
			$('body').on("click", "#filters a.filter", WorkFilter.reset);

		}
	}
	WorkFilter.init();
})();