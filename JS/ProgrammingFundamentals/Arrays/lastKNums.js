function solve(n, k) {
    //1, 1, 2, 4, 7, 13
    let arr = [1];
    for (let i = 1; i < n; i++) {
        let lastK = arr.slice(-k);
        console.log(lastK);
        let sum = 0;
        for (let j = 0; j < lastK.length; j++) {
            sum += lastK[j];
        }
        arr.push(sum);
    }
    console.log(arr.join(' '));
}

solve(8, 2);