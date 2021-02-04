function solve(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == arr2[0]) {
            let index = arr1.indexOf(arr1[i], 0);
            console.log(index);
            arr1.splice(index, arr2[1] + 1);
            arr1.splice(index - arr2[1], arr2[1]);
        }
    }

    for (let num of arr1) {
        sum += num;
    }

    console.log(arr1);
    console.log(sum);
}

solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);    
solve([1, 4, 4, 2, 8, 9, 1], [9, 3]);
solve([1, 7, 7, 1, 2, 3], [7, 1]);
solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);