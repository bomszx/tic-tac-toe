
const gameBoard = (() => {
    const cellElements = document.querySelectorAll('[data-cell]')

    cellElements.forEach(cell => {
        cell.addEventListener('click', function(e) {
            console.log(e, 'PUTANGINA MO')
        })
    })
    return {cellElements}
})();