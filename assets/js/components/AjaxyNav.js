(function(){
	function loadContent(_href) {
		TweenMax.set('#loader', {display:'block'});
		TweenMax.to('#loader .animHalf', 1, {height:'50vh',ease:Power2.easeOut,onComplete:function(){
			window.location.href = _href;	
		}});
	}
	if (Modernizr.history) {
    	// hijack the nav click event
	    $('body').delegate("a:not(.jsLink)", "click", function(e) {
	      e.preventDefault();
	      var _this = $(this),
	      	  _href = _this.attr("href");
	      // change the url without a page refresh and add a history entry.
	      history.pushState(null, null, _href);
	      // load the content
	      loadContent(_href); 
	    });

    } else {
    	// history is not supported; nothing fancy here
    }

    $(window).bind("popstate", function() {
	    link = location.pathname.replace(/^.*[\\/]/, ""); // get filename only
	    loadContent(link);
	});
})();