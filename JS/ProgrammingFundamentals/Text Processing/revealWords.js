function solve(words, str) {
    
    let wordsArr = words.split(', ');
    let strArr = str.split(' ');
    
    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < wordsArr.length; j++) {
            if (strArr[i].includes('*') && (strArr[i].length === wordsArr[j].length)) {
                strArr[i] = wordsArr[j];
            }
        }
    }

    console.log(strArr.join(' '));

}

solve('great, learning', 'softuni is ***** place for learning new programming languages')