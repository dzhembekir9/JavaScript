function result() {
    return function (num) {
        return `$ ${num.toFixed(2)}`       
    }
}

let dollarFormatter = result();
console.log(dollarFormatter(545));
console.log(dollarFormatter(3.1429))