function solve(input) {
    let word = input.shift();

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        console.log(letter);
    }
}

solve(["ice cream"])