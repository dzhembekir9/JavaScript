function solve(arr1, arr2) {
    let commonElements = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[i] === arr2[j]) {
                commonElements[i] = arr2[j];
            }
        }   
    }

    console.log(commonElements.join('\n'));
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);