function getFibonator() {
    let current = 0;
    let previous = -1;
    let result = 0;

    return function fib() {
        result = Math.abs(current + previous);
        previous = current;
        current = result;
        return result;
    }
}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());

