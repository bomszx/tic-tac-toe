/*
 * You do, but generally not directly. When the DOM board is clicked, you might be able to tell which cell was clicked. And you might tell some sort of "game manager thing" what the index of the clicked cell was. And that "game manager thing"? It might ask the gameBoard array "hey, is this index able to be set to this marker?" And that gameBoard array might respond if it can or not.

Developing this one is sort of "orchestrating the conversation" between the various bits.

Great question! If you find you're getting a little stuck? I might suggest checking in the threads for either this channel or the other JS one. There are a lot of great threads about the TicTacToe project, from "how to structure it" to "how to check for a win" to "factories or classes?"
 */

// _ for private methods and properties

/**
    - TIC-TAC-TOE
    
    - click cell to play
      - when a cell is clicked, player's mark will populate the cell
      - if a cell is populated players should not be able to click it
      - after a click, switch to player2

      - after each click we should check for a win/tie..
        - tie happens if there's no 3 in a row and all cells are empty
        - a win is if a player has 3 in a row
      
      How to check for a win?
        - we have ids for all the cells
          - we can use these id's together w/ markers for 3 in a row combinations

    playerFactory
      - players
        - player 
            -methods, clicking  
    
    gameBoard module 
      - _board
      - renderBoard
      // - eventlisteners for clicks
      - check for win
      - reset

    game module
      - start game
      - switch players - if cell is not empty or other players turn
    
  */

const gameBoard = (() => {
  let board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const cells = document.querySelectorAll(".cell");

  return {
    board,
    cells
  }
})()

const Player = (name, marker) => {
  const move = (index, name, marker) => {
    console.log(index, name, marker)
  }
  return {
    move
  }
}

const displayController = (() => {
  const render = () => {
    for(let i = 0; i < gameBoard.cells.length; i++) {
      gameBoard.cells[i].innerText = gameBoard.board[i]
    }
  }
  return {
    render
  }
})()
displayController.render()

