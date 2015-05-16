/**
 * Lógica del juego
 */
var Juego = {
    /**
     * Tareas iniciales
     */
    arrancar: function() {

    }
};

var game = {


    showLevelScreen: function () {
        $('.gamelayer').hide();
        $('#levelselectscreen').show('slow');
    },


    init: function () {

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
    }
};

$(window).on('load', function() {
    game.init();
});

$(document).ready(function() {
    Juego.arrancar();
});