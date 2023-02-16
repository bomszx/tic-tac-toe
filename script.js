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
  let currentPlayer = x;
  const cells = Array.from(document.getElementsByClassName(('cell')));
  
  const getBoard = () => {
    return {..._board}
  }

  // this bad boy handles the click on the DOM which changes the _board
  const handeClick = (cell, i, player) => {
    if(cell.target.innerText == "") {
      _board[i] = currentPlayer.mark;
      _switchPlayers()
    }
  } 

  const _switchPlayers = () => {
    currentPlayer == o ? currentPlayer = x : currentPlayer = o;
  }

  cells.forEach(cell => cell.addEventListener('click', (cell) => {
    gameBoard.handeClick(cell, cell.target.id, currentPlayer)
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
    gameBoard.cells.forEach((cell, i) => {
      cell.innerText = gameBoard.getBoard()[i];
    })

  }

  return {
    render
  }
})()
