function solve(arr) {
    const n = arr.shift();
    const firstNums = arr.slice(0, n);
    const lastNums = arr.slice(n - n - n); 

    console.log(firstNums.join(' '));
    console.log(lastNums.join(' '));

}

solve([2, 7, 8, 9]);
//solve([3, 6, 7, 8, 9]);