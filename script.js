const gameBoard = (() => {
  let _board = ['x','x','o','o','x','x','o','o','x']

  const getBoard = () => {
    return [..._board]
  }

  return {
    getBoard,
  }
})();

const diplayController = (() =>{
  const cells = Array.from(document.getElementsByClassName(('cell')));
  console.log(cells)

  cells.forEach((cell,i) => {
    cell.innerText = gameBoard.getBoard()[i]
  })

})()
