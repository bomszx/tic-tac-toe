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
  let round = 0
  const board = document.querySelector('.gameBoard')
  const h2 = document.querySelector('.gameMessage')
  const cells = Array.from(document.getElementsByClassName(('cell')));
  const resetButton = document.getElementById('resetButton')
    
  const getBoard = () => {
    return {..._board}
  }

  // this bad boy handles the click on the DOM which changes the _board
  const handeClick = (cell, i, player) => {
      _placeMark(cell, i)
      console.log(round)
      if(_checkForWin(player)) {
        _endGame(false)
      } else if(_checkForDraw()) {
        _endGame(true)
      } else {
        _switchPlayers()
      }
   } 

  const _checkForDraw = () => {
    if(round == 9) {
      return true
    }
  }

  const _placeMark = (cell, i) => {
    if(cell.target.innerText === "") {
      _board[i] = currentPlayer.mark
      round++
    }

    return round
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

    return winningCombinations.some(combination => {
      return combination.every(index => _board[index] === player.mark)
      })
    }

  const _endGame = (draw) => {
    if(draw) {
      h2.innerText = "It's a draw"
      board.style.display = "none"
    } else {
      h2.innerText = `${currentPlayer.mark} won!`
      board.style.display = "none"
    }      
    round = 0;
  }

  const _resetGame = () => {
    _board = ['','','','','','','','','']
    console.log(_board)
    displayController.render()

    // can change, since we're gonna be using a modal
    board.style.display = "grid"
    h2.innerText = "choose I guess..."
  }

  cells.forEach(cell => cell.addEventListener('click', (cell) => {
    gameBoard.handeClick(cell, cell.target.id, currentPlayer)
    displayController.render()

  }))

  resetButton.addEventListener('click', _resetGame)
 
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
