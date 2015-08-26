(function($) {
    $.simpleSlider = function(){
        setInterval(function () {
            moveRight();
        }, 3500);
      
        var slideCount = $('#slider ul li').length;
        var slideWidth = $('#slider ul li').width();
        var slideHeight = $('#slider ul li').height();
        var sliderUlWidth = slideCount * slideWidth;
        
        $('#slider').css({ width: slideWidth, height: slideHeight });
        
        $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
        
        $('#slider ul li:last-child').prependTo('#slider ul');

        function moveLeft() {
            TweenMax.to('#slider ul', 1.2, {left:+slideWidth,ease:Expo.easeInOut,onComplete:function(){
                $('#slider ul li:last-child').prependTo('#slider ul');
                $('#slider ul').css('left', '');
            }});
        };

        function moveRight() {
            TweenMax.to('#slider ul', 1.2, {left:-slideWidth,ease:Expo.easeInOut,onComplete:function(){
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

jQuery(document).ready(function ($) {

    var slider = $.simpleSlider( );

});    
