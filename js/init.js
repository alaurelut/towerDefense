window.onload = function()
{
    canvas        = document.getElementById("canvas");
    context       = canvas.getContext("2d");
    canvas.width  = canvas_width;
    canvas.height = canvas_height;
    player = new Player(1);
    spawn = new Spawn(); 
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
    run();
};

