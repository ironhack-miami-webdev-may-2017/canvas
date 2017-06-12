$(document).ready(function () {
  $(document).keydown(function (theEvent) {
    if (theEvent.while === 38 ||
        theEvent.which === 39 ||
        theEvent.which === 40 ||
        theEvent.which === 37) {
      theEvent.preventDefault();
    }

    // up arrow key
    if (theEvent.which === 38) {
      bigPokeY -= 5;
    }
    // right arrow key
    else if (theEvent.which === 39) {
      bigPokeX += 5;
    }
    // down arrow key
    else if (theEvent.which === 40) {
      bigPokeY += 5;
    }
    // left arrow key
    else if (theEvent.which === 37) {
      bigPokeX -= 5;
    }
  });
});


// With jQuery:
// var canvas = $('#my-canvas')[0];

// Without jQuery
var canvas = document.getElementById('my-canvas');

// -------------------------------------------------------------------------
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//             new Image();
var pickachu = new Image();
pickachu.src = 'https://img.pokemondb.net/sprites/x-y/normal/pikachu-f.png';

var mewtwo = new Image();
mewtwo.src = 'https://img.pokemondb.net/sprites/x-y/normal/mewtwo.png';

var squirtle = new Image();
squirtle.src = 'https://img.pokemondb.net/sprites/x-y/normal/squirtle.png';

var pokemons = [pickachu, mewtwo, squirtle];

var mewtwoX = 100;
var mewtwoY = 100;

var bigPokeX = 0;
var bigPokeY = 0;

var greenX = 99;
var greenY = 99;

var pokemon = pickachu;


function draw () {
  // clear old draws of canvas
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  ctx.fillStyle = 'orange';
  ctx.fillRect(25, 25, 200, 500);
  //            |   |   |    |
  //            x   y   |    |
  //                 width  height

  ctx.fillStyle = 'green';
  ctx.fillRect(greenX, greenY, 500, 300);

  ctx.drawImage(pokemon, bigPokeX, bigPokeY, 300, 300);
  ctx.drawImage(pokemon, 300, 100);
  ctx.drawImage(pokemon, 500, 100);

  ctx.drawImage(pokemon, mewtwoX, mewtwoY);

  ctx.drawImage(pokemon, 800, 50);
}

var currentPoke = 0;

setInterval(function () {
  currentPoke += 1;
  if (currentPoke >= pokemons.length) {
    currentPoke = 0;
  }

  pokemon = pokemons[currentPoke];
}, 3000);


setInterval(function () {
  mewtwoX += 3;
  mewtwoY += 1;

  greenX += 5;

  draw();
}, 33);
