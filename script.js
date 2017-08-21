const gridSize = 3;
const block = '&nbsp;';
const blocksArr = [];
let turn = 'X';
let moves;

//init and draw the 3x3 grid
function init() {
  const board = document.createElement('table');
  board.setAttribute('border', '1px');
  board.setAttribute('cellspacing', 0);

  let count = 1;
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('tr');
    board.appendChild(row);
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement('td');
      cell.setAttribute('height', 90);
      cell.setAttribute('width', 90);
      cell.setAttribute('align', 'center');
      cell.setAttribute('valign', 'center');
      cell.classList.add(`col${j}`, `row${i}`);
      cell.addEventListener('click', set);
      row.appendChild(cell);
      blocksArr.push(cell);
    }
  }
  document.getElementById('tic-tac-toe').appendChild(board);
  startNewGame();
}

//clear the board, start new
function startNewGame() {
  moves = 0;
  turn = 'X';
  document.getElementById('turn').innerHTML = 'Player X'
  blocksArr.forEach(square => {
    square.innerHTML = block;
  });
}

//draw and play
function set() {
  if (this.innerHTML !== block) {
    return ;
  }
  this.innerHTML = turn;
  moves += 1;
  if (moves === gridSize * gridSize) {
    alert('Game over! Starting a new game');
    startNewGame();
  } else {
    turn = turn === 'X' ? 'O' : 'X';
    document.getElementById('turn').innerHTML = `Player ${turn}`;
  }
}

init();
