

/*
    ** need to have as little to no global variables/functions



*/

const Gameboard = (() => {
    const X_CLASS = 'x';
    const C_CLASS = 'circle';

    let circleTurn

    const cellElements = document.querySelectorAll('[data-cell]')

    const handleClick = (e) => {
        const cell = e.target;
        const currentClass = circleTurn ? C_CLASS : X_CLASS;
        placeMark(cell, currentClass)
    }

    // Eventlistener for each cell
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, {once: true})
    })



    const placeMark = (cell, currentClass) => {
        cell.classList.add(currentClass)
    }
    return {cellElements, handleClick, placeMark}
})();

