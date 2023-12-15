class TicTacToe {
  constructor() {
    this.currentPlayer = 'X';
    this.cells = [];
    this.message = document.getElementById('message');
    this.board = document.getElementById('board');
    this.initBoard();
  }

  initBoard() {
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.addEventListener('click', () => this.placeMarker(i));
      this.cells.push(cell);
      this.board.appendChild(cell);
    }
  }

  placeMarker(index) {
    if (this.cells[index].textContent === '' && !this.checkWinner()) {
      this.cells[index].textContent = this.currentPlayer;
      if (this.checkWinner()) {
        this.message.textContent = `¡Jugador ${this.currentPlayer} ha ganado!`;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.message.textContent = `Es el turno del Jugador ${this.currentPlayer}`;
      }
    }
  }

  checkWinner() {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    return winningCombos.some(combo => {
      const [a, b, c] = combo;
      return this.cells[a].textContent !== '' &&
        this.cells[a].textContent === this.cells[b].textContent &&
        this.cells[a].textContent === this.cells[c].textContent;
    });
  }
}

function resetGame() {
  ticTacToe.reset();
}

const ticTacToe = new TicTacToe();
