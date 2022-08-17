

/*
    ** need to have as little to no global variables/functions
*/

const Gameboard = (() => {
        const X_CLASS = 'x';
        const C_CLASS = 'circle';
        const board = document.getElementById('board');
        const cellElements = document.querySelectorAll('[data-cell]')
        const winningMessageTextElement = document.getElementById('winningMessage')
        const restartButton = document.getElementById('restartButton')

        let circleTurn
        const WINNING_COMB = [
                            [0,1,2],
                            [3,4,5],
                            [6,7,8],
                            [0,3,6],
                            [1,4,7],
                            [2,5,8],
                            [0,4,8],
                            [2,4,6]
                        ]
        const checkWin = (currentClass) => {
            return WINNING_COMB.some(combination => {
                return combination.every(index => {
                    return cellElements[index].classList.contains(currentClass)
                })
            })
        }

        const isDraw = () => {
            return [...cellElements].every(cell => {
                return cell.classList.contains(X_CLASS) || cell.classList.contains(C_CLASS)
            })
        }

        const endGame = (draw) => {
            if(draw) {
                winningMessageTextElement.innerText = 'Draw!'
            } else {
                winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
            }
            winningMessageTextElement.classList.add('show')
        }

        const setBoardHoverClass = () => {
            board.classList.remove(X_CLASS)
            board.classList.remove(C_CLASS)

            if(circleTurn) {
                board.classList.add(C_CLASS)
            } else {
                board.classList.add(X_CLASS)
            }
        }
        // Click eventhandler
        const handleClick = (e) => {
            const cell = e.target;
            const currentClass = circleTurn ? C_CLASS : X_CLASS;
            placeMark(cell, currentClass)
            if(checkWin(currentClass)) {
                endGame(false)
            } else if (isDraw()) {
                endGame(true)
            } else {
                swapTurns()
                setBoardHoverClass()
            }
        }

        const startGame = () => {
            circleTurn = false;
            cellElements.forEach(cell => {
                cell.classList.remove(X_CLASS)
                cell.classList.remove(C_CLASS)
                cell.removeEventListener('click', handleClick)
                cell.addEventListener('click', handleClick, {once: true})
            })
            setBoardHoverClass()
            winningMessageTextElement.classList.remove('show')
        }

        startGame();

        restartButton.addEventListener('click', startGame)

        const placeMark = (cell, currentClass) => {
            cell.classList.add(currentClass)
        }

        const swapTurns = () => {
            circleTurn = !circleTurn;
        }

        // Eventlistener for each cell to click each cell only once
        cellElements.forEach(cell => {
            cell.addEventListener('click', handleClick, {once: true})
        })
    return {cellElements}
})();





