let counter = 0;

const sayHi = () => {
   counter++;
   console.log(counter);
}

const input = document.querySelector(".input");
input.addEventListener("keypress", () => {
    console.log('Nice job');
});

setTimeout(sayHi, 2000);

