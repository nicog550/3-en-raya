/**
 * Created with IntelliJ IDEA.
 * User: isaac
 * Date: 23/03/15
 * Time: 13:00
 * To change this template use File | Settings | File Templates.
 */

// Setup requestAnimationFrame and cancelAnimationFrame for use in the game code
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
            window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());



$(document).ready(function () {
    language_complete = navigator.language.split("-");
    language = (language_complete[0]);
    console.log("Lenguaje: %s", language);

  
});




$(window).load(function () {
    game.init();
});

var game = {

    showLevelScreen: function () {
        $('.gamelayer').hide();
        $('#levelselectscreen').show('slow');
    },


    init: function () {
        levels.init();
        loader.init();
        mouse.init();

        $('.gamelayer').hide();
        $('#gamestartscreen').show();

        game.canvas = $('#gamecanvas')[0];
        game.context = game.canvas.getContext('2d');
    },


    // Game Mode
    mode:"intro",
    // X & Y Coordinates of the slingshot
    slingshotX:140,
    slingshotY:280,
    start:function(){
        $('.gamelayer').hide();
        // Display the game canvas and score
        $('#gamecanvas').show();
        $('#scorescreen').show();

        game.mode = "intro";
        game.offsetLeft = 0;
        game.ended = false;
        game.animationFrame = window.requestAnimationFrame(game.animate,game.canvas);
    },
    }
