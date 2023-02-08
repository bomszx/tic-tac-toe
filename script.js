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
 * 
 * x = currentPlayer, place their mark
 *  - if current cell is not empty they can place their mark
 *  - check for win 3 in a row or a tie if no more empty cells
 * 
 * o = currentPlayer, place their mark
 *  - if current cell is not empty they can place their mark
 *  - check for win 3 in a row or a tie if no more empty cells
 * 
 *  pop up to restart game
 */

/*
  
*/

const gameBoard = (() => {
  // tie this array to the html board - this _board we can use to check for winning combs, and state (if a cell has an marker on it or not)
  const _board = ["x", "1", "o", "o", "x", "x", "o", "x", "x"];

  // display our _board arr to the DOM/HTML
  const displayBoard = () => {
    const cells = document.querySelectorAll(".cell");

    for(let i = 0; i < cells.length; i++) {
      cells[i].innerText = _board[i];
      console.log(cells[i].id)
    }
  }

  const getBoard = () => {
    return {
      ..._board
    };
  }

  return {
    getBoard,
    displayBoard
  }
})();

// player factory
const Player = (name, marker) => {
  this.name = name;
  this.marker = marker;

  return {
    name, marker
  }
}

// this module controls the flow of the game
const game = (() => {
  const player1 = Player("x", "x")
  const player2 = Player("o", "o")

  return {
    player1,
    player2
  }
})()