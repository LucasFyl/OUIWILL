jQuery(document).ready(function ($) {

    setInterval(function () {
        moveRight();
    }, 3000);
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        TweenMax.to('#slider ul', 0.5, {left:+slideWidth,ease:Power2.easeInOut,onComplete:function(){
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        }});

        // $('#slider ul').animate({
        //     left: + slideWidth
        // }, 200, function () {
        //     $('#slider ul li:last-child').prependTo('#slider ul');
        //     $('#slider ul').css('left', '');
        // });
    };

    function moveRight() {
        TweenMax.to('#slider ul', 0.5, {left:-slideWidth,ease:Power2.easeInOut,onComplete:function(){
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        }});
        // $('#slider ul').animate({
        //     left: - slideWidth
        // }, 200, function () {
        //     $('#slider ul li:first-child').appendTo('#slider ul');
        //     $('#slider ul').css('left', '');
        // });
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

});    
