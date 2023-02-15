const gameBoard = (() => {
  let board = ['','','','','','','','','']

  const getBoard = () => {
    return [...board]
  }

  return {
    getBoard,
  }
})();
