// Player factory
const Player = (mark) => {
  this.mark = mark

  return {
    mark
  }
}

// Gameboard arr - contains the _board are which is what we display on the HTML, we pass a shallow copy of this arr to our functions with gameBoard.getBoard()
const gameBoard = (() => {

  // Variables for our functions
  let _board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  const x = Player('x');
  const o = Player('o');
  let currentPlayer;
  let round = 0
  const board = document.querySelector('.gameBoard')
  const h2 = document.querySelector('.gameMessage')
  const cells = Array.from(document.getElementsByClassName(('cell')));
  const resetButton = document.getElementById('restartButton')
  const modal = document.getElementById("myModal");
    
  // Destructured _board, creates a shallow copy
  const getBoard = () => {
    return {..._board}
  }

  // This function handles the click event on the board - so every function in this is ran once the board is clicked
  const handeClick = (cell, i, player) => {
    if(player == undefined) alert("Please pick a marker") // alert if there is no marker chosen
    if(cell.target.innerText !== "") return // stops code if the clicked cell is occupied
      _placeMark(i)
     if(_checkForWin(player)) {
         _endGame(false)
       } else if(_checkForDraw()) {
         _endGame(true)
      } else {
        _switchPlayers()
      }
    }

  // round here is a count variable which indicates a draw, each click increments round, if comes up to 9 and there's still no winningComb then it's a draw
  const _checkForDraw = () => {
    if(round == 9) {
      return true
    }
  }

  // fn for picking a marker
  const _playerPicker = (e) => {
    e.target.id == 'x' ? currentPlayer = x : currentPlayer = o;
  }


  const p1 = document.getElementById('x')
  const p2 = document.getElementById('o')
  p1.addEventListener('click', _playerPicker)
  p2.addEventListener('click', _playerPicker)
  

  const _placeMark = (i) => {
      _board[i] = currentPlayer.mark
      round++
  }

  // switch turns/players
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

    // we're checking if some of our winning combinations elements, like [0,1,2] has our player mark in each of its index
    return winningCombinations.some(combination => {
      return combination.every(index => _board[index] === player.mark)
      })
    }

  const _endGame = (draw) => {
    if(draw) {
      h2.innerText = "It's a draw"
      _showModal()
    } else {
      h2.innerText = `${currentPlayer.mark} won!`
      _showModal()
    }      
    round = 0;
  }

  const _resetGame = () => {
    _board = ['','','','','','','','','']
    console.log(_board)
    displayController.render()

    board.style.display = "grid"
    modal.style.display = "none";
  }

  // used a call back to call handleClick on each cell
  cells.forEach(cell => cell.addEventListener('click', (cell) => {
    gameBoard.handeClick(cell, cell.target.id, currentPlayer)

    // so each click, on the _board will then be updating our _board arr then will be displayed by render here
    displayController.render()
  }))

  const _showModal = () => {
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

    modal.style.display = "block";
  }

  resetButton.addEventListener('click', _resetGame)
 
  return {
    getBoard,
    handeClick,
    cells,

  }
})();

// render here displays our _board arr to the html
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