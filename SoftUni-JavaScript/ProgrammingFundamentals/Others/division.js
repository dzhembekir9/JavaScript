function solve(input) {
    let number = Number(input.shift());
    let nums = [2, 3, 6, 7, 10];
    let divisible = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (number % nums[i] === 0) {
            divisible = nums[i];
        }
    }

    if (divisible > 0) {
        console.log(`The number is divisible by ${divisible}`);
    }
    else {
        console.log("Not divisible");
    }
    
}

solve([1643]);