// gameboard module
const board = (() => {
    const gameBoard = ["xeeee", "2", "", "5", "x", "", "", "", "o"];
    const cells = document.querySelectorAll('.cell')

    const render = () => {
        for(let i = 0; i < cells.length; i++) {
            cells[i].innerText = gameBoard[i]
        }       
    }
    return {gameBoard, cells, render}
})();

// player factory
const Player = (name, marker) => {
    const writeMark = () => {
        console.log(`my name is mark and this is my mark ${marker}`);eeeeeeeeeeeeeeeee
    }

    return {name, marker, writeMark}
}

/*
Set up your HTML and write a JavaScript function that will render the contents of the gameboard array to the webpage (for now you can just manually fill in the array with "X"s and "O"s) 
*/