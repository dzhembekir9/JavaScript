function solve(arr, n) {
    for (let i = 0; i < n; i++) {
        arr.push(arr[i]);
    }
    arr.splice(0, n);
    console.log(arr);
}

solve([51, 47, 32, 61, 21], 2); 