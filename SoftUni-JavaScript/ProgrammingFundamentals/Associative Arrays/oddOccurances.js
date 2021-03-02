function solve(str) {

    let wordsArr = str.toLowerCase().split(' ');
    let words = new Map();
    
    for (let el in wordsArr) {
        if (!words.has(wordsArr[el])) {
            words.set(wordsArr[el], 1);
        }
        else {
            let count = words.get(wordsArr[el]) + 1;
            words.set(wordsArr[el], count);
        }
    }

    let string = '';

    for (let [key, value] of words) {
        if (value % 2 !== 0) {
            string += key + ' '
        }
    }

    console.log(string);
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');