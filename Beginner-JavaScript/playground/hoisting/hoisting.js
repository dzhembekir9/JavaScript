sayHi('Djem');

function sayHi(name) {
  console.log(`Hello, ${name}`);
}

function game(gameName) {
  let score = 0;

  return function win() {
    score++;
    return `Your ${gameName} score is ${score}`;
  };
}

const football = game('Football');
const basketball = game('Basketball');
