function solve(input) {

    let word = input.shift();
    let counter = 0;

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (letter === 'a') {
            counter++;
        }else if (letter === 'e') {
            counter += 2;
        }else if (letter === 'i') {
            counter += 3;
        }else if (letter === 'o') {
            counter += 4;
        }else if (letter === 'u') {
            counter += 5;
        }         
    }

    console.log(counter);
}

solve(["bamboo"]);