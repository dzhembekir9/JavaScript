function solve(s, t) {
    
    let first = s.split('');
    let second = t.split('');

    let isEqual = false;


    let firstSorted = first.sort((a, b) => a.localeCompare(b));
    let secondSorted = second.sort((a, b) => a.localeCompare(b));

    console.log(firstSorted);
    console.log(secondSorted);

    if (first.length !== second.length) {
        console.log(false);
    }
    else {
        if (first.length === 0 && second.length === 0) {
            console.log(true);
        }
        else {
            for (let i in firstSorted) {
                if (firstSorted[i] === secondSorted[i]) {
                    isEqual = true;
                }
                else {
                    isEqual = false;
                    break;
                }
            }
        
            console.log(isEqual);
        }
    }

}

//solve('anagram', 'nagaram');
//solve('a', 'ab');
//solve('aacc', 'ccac');