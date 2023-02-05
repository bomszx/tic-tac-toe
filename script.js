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

const gameBoard = (() => {
    const board = ['X', 'O', 'O', 'X', 'O', 'X', 'X', 'O', 'O'];
})();

const displayController = (() => {}()

const Player = (name, marker) => {
  
}