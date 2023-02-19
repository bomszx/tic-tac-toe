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
      _placeMark(cell, i)
      if(_checkForWin(player)) {
        _endGame()
      } else {
        _switchPlayers()
      }
   } 

  const _placeMark = (cell, i) => {
    if(cell.target.innerText == "")
    _board[i] = currentPlayer.mark
  }

  const _switchPlayers = () => {
    currentPlayer == o ? currentPlayer = x : currentPlayer = o;
  }

  const _checkForWin = (player) => {
    const winningCombinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    let win = winningCombinations
    .some(combination => combination
      .every(index => _board[index] === player.mark))

      return win;
  }

  const _checkForDraw = () => {
    let draw = cells.every(cell => cell.innerText == "x" || cell.innerText == "o")

    return draw

  }

  const _endGame = () => {
    const board = document.querySelector('.gameBoard')
    const h2 = document.querySelector('.gameMessage')

    h2.innerText = `${currentPlayer.mark} won!`
    board.style.display = "none"
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
