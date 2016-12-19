// script for Jack specific movement

const wackJack = document.getElementById('wackjack');
const gameBoard = document.getElementById('container');
const safeSpace = document.getElementById('safespace');
// identify the variables that will be used in gameplay
let jackLeft = 415;
// beginning position of jack is based on the height and width set by the container establishing the #gameboard.

// had to define the perameters of the game board in order to easily determine where wackjack's starting point is in px to define left for the function playercontrol(x), otherwise it defaulted in the 0,0 position in the top left corner of the window.

function playercontrol(x) {
//   function to determine which button is being pressed for what direction of movment

if(x.keyCode==39){
//   if right arrow key (39) is pressed
  jackLeft +=2;
// move jack two px
  wackJack.style.left = jackLeft + 'px';
// internal js style to make jack move two px from the left. Concat jackLeft and the value pixels so the program knows what unit to operate the move in
  }

if(x.keyCode==37){
// // if left arrow key is pressed
  jackLeft -=2;
// // make jack move -2 px
  wackJack.style.left = jackLeft + 'px';
  }
// // internal style in js to make jack move -2 px left
// right arrow is 39
// left arrow is 37
// down arrow is 40
// found on keycode.info (javascript keycode info site.)
}

document.onkeydown = playercontrol;


