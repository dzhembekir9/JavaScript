function solve(num1, num2) {
    let sum = 0;
    for (let index = num1; index <= num2; index++) {
        sum += index;
    }
    console.log(`Sum: ${sum}`);
}

solve(50, 60);