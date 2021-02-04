function solve(str, word) {
    let counter = 0;
    let strArr = str.split(' ');
    for (let i in strArr) {
        if (strArr[i] === word) {
            counter++;
        }
    }

    console.log(counter);

}

solve("This is a word and it also is a sentence", "is");