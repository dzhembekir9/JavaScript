function solve(str) {
    
    let strArr = str.split('');
    let letters = [];
    let counter = 0;

    letters.push(strArr[0]);
    while (strArr.length > 1) {
        
        if (strArr[1] === letters[counter]) {
            strArr.shift();
        }
        else {
            counter++
            letters.push(strArr[1]);
        }

    }

    console.log(letters.join(''));

}

solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd');