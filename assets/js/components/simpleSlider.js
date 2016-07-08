(function($) {
    $.simpleSlider = function(){
      
        var slideCount = $('#slider ul li').length;
        var slideWidth = $('#slider ul li').width();
        var slideHeight = $('#slider ul li').height();
        var sliderUlWidth = slideCount * slideWidth;
        
        TweenMax.set('#slider', { width: slideWidth, height: slideHeight })
        TweenMax.set('#slider ul', { width: sliderUlWidth, marginLeft: - slideWidth })
        $('#slider ul li:last-child').prependTo('#slider ul');

        moveLeft = function() {
            TweenMax.to('#slider ul', 1, {left:'+='+slideWidth,ease:Power2.easeOut,onComplete:function(){
                $('#slider ul li:last-child').prependTo('#slider ul');
                $('#slider ul').css('left', '');
            }});
        };

        moveRight = function() {
            TweenMax.to('#slider ul', 1, {left:'-='+slideWidth,ease:Power2.easeOut,onComplete:function(){
                $('#slider ul li:first-child').appendTo('#slider ul');
                $('#slider ul').css('left', '');
            }});
        };

        $('a.control_prev').click(function (e) {
            e.preventDefault;
            moveLeft();
            return false;
        });

        $('a.control_next').click(function (e) {
            e.preventDefault;
            moveRight();
            return false;
        });
    }
})(jQuery);   
