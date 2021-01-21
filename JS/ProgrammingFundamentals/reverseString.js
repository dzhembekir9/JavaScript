function solve(input) {
    word = input.shift();
    reverse = word.split("").reverse().join("");
    console.log(reverse);
}

solve(['Hello']);