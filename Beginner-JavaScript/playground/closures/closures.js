function createGame(gameName) {
  let score = 0;
  return function win() {
    score += 1;
    console.log(`Your ${gameName} score is ${score}`);
  };
}

const football = createGame('Footbal');
const tennis = createGame('Tennis');
const basketball = createGame('Bastetball');
