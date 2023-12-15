class Game {
  constructor() {
    this.currentPlayer = 'X';
    this.cells = [];
    this.message = document.getElementById('message');
    this.board = new Board(this.cells, this.message);
  }

  placeMarker(index) {
    if (this.board.isEmptyCell(index) && !this.board.checkWinner()) {
      this.board.setCell(index, this.currentPlayer);
      if (this.board.checkWinner()) {
        this.message.textContent = `¡Jugador ${this.currentPlayer} ha ganado!`;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.message.textContent = `Es el turno del Jugador ${this.currentPlayer}`;
      }
    }
  }

  resetGame() {
    this.board.reset();
    this.currentPlayer = 'X';
    this.message.textContent = 'Es el turno del Jugador X';
  }
}

class Board {
  constructor(cells, message) {
    this.cells = cells;
    this.message = message;
    this.initBoard();
  }

  initBoard() {
    const boardElement = document.getElementById('board');
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.addEventListener('click', () => game.placeMarker(i));
      boardElement.appendChild(cell);
      this.cells.push(cell);
    }
  }

  setCell(index, player) {
    this.cells[index].textContent = player;
  }

  isEmptyCell(index) {
    return this.cells[index].textContent === '';
  }

  checkWinner() {
    // Lógica de comprobación de ganador (sin cambios)
  }

  reset() {
    this.cells.forEach(cell => {
      cell.textContent = '';
    });
  }
}

const game = new Game();
