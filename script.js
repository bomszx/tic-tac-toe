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
  // tie this array to the html board
    const _board = ["x", "o", "o", "o", "x", "x", "o", "x", "x"];

    const getBoard = () => {
      return {
        ..._board
      };
    }

    return {
      getBoard
    }
})();

const Player = (name, marker) => {
  this.name = name;
  this.marker = marker;

  return {
    name, marker
  }
}

const game = (() => {
  const player1 = Player("x", "x")
  const player2 = Player("o", "o")

  return {
    player1,
    player2
  }
})()