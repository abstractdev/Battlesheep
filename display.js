export const Display = (() => {
  const body = document.querySelector('body')

  function renderBoard(gameBoardObj, boardName, container) {
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild)
    }
    const board = document.createElement('div')
    board.classList.add(`${boardName}-gameboard`);
    container.appendChild(board)
    for (let i = 0; i < gameBoardObj.board.length; i++) {
        const row = document.createElement('div');
        // row.setAttribute('data-id', `${i}`);
        row.classList.add(`${boardName}${i}`)
        board.appendChild(row)
        for (let j = 0; j < gameBoardObj.board[i].length; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('data-id', `${boardName}${i}${j}`);
            cell.classList.add('cell')
            if (gameBoardObj.board[i][j] === 1) {
              cell.style.backgroundColor = 'red'
            }
            if (gameBoardObj.board[i][j] === 'hit') {
              cell.style.backgroundColor = 'blue'
            }
            document.querySelector(`.${boardName}${i}`).appendChild(cell)
        }
    }
  }


  return {
    renderBoard
  }
})();

