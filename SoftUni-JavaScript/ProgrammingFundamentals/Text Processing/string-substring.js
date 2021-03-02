function solve(word, str) {
    
    let strArr = str.split(' ');
    let matching = [];

    for (let i in strArr) {
        strArr[i] = strArr[i].toLowerCase();

        if (strArr[i] === word) {
            matching.push(word);
            break;
        }
    }

    if (matching.length > 0) {
        console.log(word);
    }
    else {
        console.log(`${word} not found!`);
    }

}

solve('javascript',
'JavaScript is the best programming language');

solve('python',
'JavaScript is the best programming language');