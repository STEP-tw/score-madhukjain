let game=undefined;
// let food=undefined;
let numberOfRows=60;
let numberOfCols=120;


let animator=undefined;

const animateSnake=function() {
// <<<<<<< HEAD
  // let oldHead=snake.getHead();
  // let oldTail=snake.move();
  // let head=snake.getHead();
  // paintBody(oldHead);
  // unpaintSnake(oldTail);
  // paintHead(head);
  //
  // if(head.isSameCoordAs(Game.food)) {
  //   // updateScore();
  //   snake.grow();
  //   createFood(numberOfRows,numberOfCols);
  //   drawFood(food);
  // }
// =======
  let details=game.move();
  paintBody(details.oldHead);
  unpaintSnake(details.oldTail);
  paintHead(details.head);
  if(game.hasSnakeEatenFood()) {
    game.increaseScore();
    updateScore(game.score);
    game.grow();
    game.createFood();
    drawFood(game.getFood());
// >>>>>>> 0822f617b6e86a915098e0ffc3b43a84d1c6d94b
  }
}


const changeSnakeDirection=function(event) {
  switch (event.code) {
    case "KeyA":
      game.turnLeft();
      break;
    case "KeyD":
      game.turnRight();
      break;
    case "KeyC":
      game.grow();
      break;
    default:
  }
}

const addKeyListener=function() {
  let grid=document.getElementById("keys");
  grid.onkeyup=changeSnakeDirection;
  grid.focus();
}

const createSnake=function() {
  let tail=new Position(12,10,"east");
  let body=[];
  body.push(tail);
  body.push(tail.next());
  let head=tail.next().next();

  snake=new Snake(head,body);
  game.addSnake(snake);
}

const createFood=function(numberOfRows,numberOfCols) {
  food=generateRandomPosition(numberOfCols,numberOfRows);
}

const createGame=function() {
  let topLeft=new Position(0,0,"east");
  let bottomRight=new Position(numberOfCols,numberOfRows,"east");
  game=new Game(topLeft,bottomRight);
}

const startGame=function() {

  createGame();
  createSnake();
  drawGrids(numberOfRows,numberOfCols);
  drawSnake(game.getSnake());
  game.createFood();
  drawFood(game.getFood());
  addKeyListener();
  animator=setInterval(animateSnake,140);
}

window.onload=startGame;
