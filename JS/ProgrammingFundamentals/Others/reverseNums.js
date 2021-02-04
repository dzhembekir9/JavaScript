function solve(n, arr) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr[i] = arr[i];
    }
    newArr = newArr.reverse();
    console.log(newArr.join(' '))
}

solve(3, [10, 20, 30, 40, 50]);