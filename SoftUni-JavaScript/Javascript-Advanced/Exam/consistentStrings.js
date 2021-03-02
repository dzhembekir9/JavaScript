function solve(allowed, words) {

    let allowedLetters = allowed.split('');
    let counter = 0;
   
    for (let i in words) {
        let wordArr = words[i].split('');
        let isEqual = true;
        for (let j in wordArr) {
            if (!allowedLetters.includes(wordArr[j])) {
                isEqual = false;
            }
        }
        if (isEqual) {
            counter++;
        }
    }

    console.log(counter);

}

solve('ab', ["ad","bd","aaab","baa","badab"]);