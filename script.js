const Player = (mark) => {
  this.mark = mark

  return {
    mark
  }
}

const gameBoard = (() => {
  let _board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  const x = Player('x');
  const o = Player('o');
  let currentPlayer = o;
  const cells = Array.from(document.getElementsByClassName(('cell')));
  
  const getBoard = () => {
    return {..._board}
  }

  // this bad boy handles the click on the DOM which changes the _board
  const handeClick = (cell, i, player) => {
    if(currentPlayer == o) {
      currentPlayer = x
    } else {
      currentPlayer = o
    }
    _board[i] = currentPlayer.mark;
  }

  cells.forEach(cell => cell.addEventListener('click', (cell) => {
    gameBoard.handeClick(cell, cell.target.id, o)
    displayController.render()

  }))

  return {
    getBoard,
    handeClick,
    cells,
  }
})();

const displayController = (() =>{
  const render = () => {
    const cells = Array.from(document.getElementsByClassName(('cell')));
    cells.forEach((cell, i) => {
      cell.innerText = gameBoard.getBoard()[i];
    })

  }

  return {
    render
  }
})()
