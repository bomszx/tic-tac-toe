/*
 * create a gameBoard 3x3
 * addEventListeners to each cell of the board
 *  - will call a fn that will update the board with the marker
 * need player factory for player objects (x, o) 
 */
/*
 * You do, but generally not directly. When the DOM board is clicked, you might be able to tell which cell was clicked. And you might tell some sort of "game manager thing" what the index of the clicked cell was. And that "game manager thing"? It might ask the gameBoard array "hey, is this index able to be set to this marker?" And that gameBoard array might respond if it can or not.

Developing this one is sort of "orchestrating the conversation" between the various bits.

Great question! If you find you're getting a little stuck? I might suggest checking in the threads for either this channel or the other JS one. There are a lot of great threads about the TicTacToe project, from "how to structure it" to "how to check for a win" to "factories or classes?"
 */

// _ for private methods and properties

/**
    - PUTANGINANG INANG TIC-TAC-TOE

  - initially, choose which marker we want,
    - set the choice as the currentPlayer variable
  
  - make our board clickable..
    - with each click want to return the index of the cell and the current marker for that cell
      - we need this so we can use our _board array for the winning combination

    - check if clicked cell is empty
    - after a click, switch players
  */
 

  const gameBoard = (() => {
  // tie this array to the html board - this _board we can use to check for winning combs, and state (if a cell has an marker on it or not)
  const _board = ["x", "o", "x", "x", "o", "x", "x", "o", "x"];

  const cells = document.querySelectorAll(".cell"); // DOM Element

  // display our _board arr to the DOM/HTML
  const renderBoard = () => {
    for(let i = 0; i < cells.length; i++) {
      cells[i].innerText = _board[i];
    }
  }

  // returns a copy of our _board
  const getBoard = () => {
    return {
      ..._board
    };
  }


  const setCell = (e) => {

    e.target.innerText = game.player1.marker
  }

  cells.forEach(cell => cell.addEventListener('click', setCell));


  const checkForWin = () => {

  }

  const resetBoard = () => {

  }

  return {
    getBoard,
    renderBoard,
    setCell,
  // returning cell so I can use it to add eventlisteners from the game module
  }
})();

// player factory
const Player = (name,marker) => {
  this.name = name;
  this.marker = marker;

  return {
    name, marker,
  }
}

// this module controls the flow of the game
const game = (() => {
  const player1 = Player("x", "x")
  const player2 = Player("o", "o")
  let currentPlayer = player1;


  return {
    player1,
    player2

  }

})()
