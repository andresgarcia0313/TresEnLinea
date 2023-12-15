let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');

function placeMarker(index) {
  if (cells[index].textContent === '' && !checkWinner()) {
    cells[index].textContent = currentPlayer;
    if (checkWinner()) {
      message.textContent = `¡Jugador ${currentPlayer} ha ganado!`;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      message.textContent = `Es el turno del Jugador ${currentPlayer}`;
    }
  }
}

function checkWinner() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  return winningCombos.some(combo => {
    const [a, b, c] = combo;
    return cells[a].textContent !== '' &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent;
  });
}

function resetGame() {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
  message.textContent = 'Es el turno del Jugador X';
}
