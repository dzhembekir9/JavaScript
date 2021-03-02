function solve(word, caseType) {
    
    let sum = 0;

    for (let i in word) {
        if (caseType === 'LOWERCASE') {
            if (word[i].charCodeAt(0) >= 97 && word[i].charCodeAt(0) <= 122) {
                sum += word[i].charCodeAt(0);
            }
        }
        else if (caseType === 'UPPERCASE') {
            if (word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90) {
                sum += word[i].charCodeAt(0);
            }
        }
    }

    console.log(`The total sum is: ${sum}`);
}

solve('HelloFromMyAwesomePROGRAM', 'LOWERCASE');

solve('AC/DC', 'UPPERCASE');