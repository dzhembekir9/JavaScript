function solve(arr1, arr2) {
    const num1 = arr2.shift();
    const num2 = arr2.shift();
    const num3 = arr2.shift();

    let counter = 0;

    for (let i = 0; i < arr1.length - num1; i++) {
        arr1.pop();
    }
    for (let i = 0; i < num2; i++) {
        arr1.shift();
    }
    for (let num of arr1) {
        if (num === num3) {
            counter++;        
        }
    }
    console.log(`Number ${num3} occurs ${counter} times`);
}

solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);