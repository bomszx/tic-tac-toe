/**
 * need to create a player object which gives us the mark of the player
 * need a function that will take player, id of the cell which was clicked and probably a color or anything to distinguish between players
 * need a function that toggles who's turn it is to place their mark
 */

// gameboard module
const board = (() => {
    const gameBoard = ["x", "o", "x", "", "", "", "", "", ""];
    const cells = document.querySelectorAll('.cell')

    // click handler defines the cell that is clicked
    const handleClick = (e) => {
        const x = Player('x')
        const o = Player('o')
        const clickedCell = e.target.id;
        cells[clickedCell].innerText = x.marker;
    }
    
    cells.forEach(cell => cell.addEventListener('click', handleClick))
    


    return {gameBoard, handleClick}
})();

const displayController = (() => {

})();

// player factory
const Player = (marker) => {
    this.marker = marker

    return {marker}
}

