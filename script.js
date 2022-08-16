
// IIFE 
const gameBoard = (() => {
    const board = ['x', 'o']

    return {board}
})();

const displayControler = (() => {
    gameBoard.board.forEach((tile => console.log(tile)))
})

displayControler();