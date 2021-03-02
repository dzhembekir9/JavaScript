function solve(num1, num2, operator) {
    const result = eval(`${num1} ${operator} ${num2}`);
    console.log(result);
}

solve(3, 5.5, '*');