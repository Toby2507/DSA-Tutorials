class Snake {
  constructor() {
    this.snakeBody = [
      [4, 1],
      [4, 2],
      [4, 3],
      [4, 4],
    ];
    this.prevDirection = null;
  }

  move(direction) {
    const delta = {
      up: [-1, 0],
      down: [1, 0],
      right: [0, 1],
      left: [0, -1]
    };
    const currHead = this.snakeBody[this.snakeBody.length - 1];
    const [currRow, currCol] = currHead;
    if ((currRow === 19 && direction === "down") || (currRow === 0 && direction === "up") || (currCol === 18 && direction === "right") || (currCol === 1 && direction === "left")) {
      process.exit(1);
    };
    const [newRow, newCol] = delta[direction];
    const newHead = [currRow + newRow, currCol + newCol];
    this.snakeBody.push(newHead);
    this.snakeBody.shift();
  }

  draw() {
    const grid = [];
    for (let i = 0; i < 20; i++) {
      const row = [];
      for (let j = 0; j < 20; j++) {
        row.push(' ');
      }
      grid.push(row);
    }
    this.snakeBody.forEach(pos => {
      const [row, col] = pos;
      grid[row][col] = "O";
    });
    console.clear();
    grid.forEach(row => console.log(row.join("|")));
  }

  play() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', keypress => {
      if (keypress === 'w') this.move('up');
      if (keypress === 'a') this.move('left');
      if (keypress === 's') this.move('down');
      if (keypress === 'd') this.move('right');
      if (keypress === '\u0003') process.exit();

      this.draw();
    });
  }
}

const game = new Snake();
game.draw();
game.play();