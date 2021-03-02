function solve(arr) {
    
    let sum = 0;
    let inverseSum = 0;
    let str = '';

    for (let i in arr) {
        sum += arr[i];
        inverseSum += 1 / arr[i];
        str += arr[i];
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(str);
}

solve([1, 2, 3]);