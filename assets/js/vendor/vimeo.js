(function(){

    // Listen for the ready event for any vimeo video players on the page
    var vimeoPlayers = document.querySelectorAll('iframe'),
        player;

    for (var i = 0, length = vimeoPlayers.length; i < length; i++) {
        player = vimeoPlayers[i];
        $f(player).addEvent('ready', ready);
    }
})();