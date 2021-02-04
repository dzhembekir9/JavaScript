function solve(arr1, arr2) {
    let sum = 0;
    let diff = -1;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            sum += arr1[i];        
        } else { diff = i; }
    }
    if (diff >= 0) {
        console.log(`Arrays are not identical. Found difference at ${diff} index`);
    } else { console.log(`Arrays are identical. Sum: ${sum}`); }
}

// solve([10, 20, 30], [10, 20, 30]);
//solve([1], [10]);
solve([1, 2, 3, 4, 5], [1, 2, 4, 4, 5]);