function solve(input) {
    let n = Number(input.shift());
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        sum += num;
    }

    console.log(sum);
}

solve([4, 45, -20, 7, 11]);