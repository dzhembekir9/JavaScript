function solve(nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = parseInt(nums[i]);
        if (num % 2 === 0) {
            sum += num;
        }
    }
    console.log(sum);
}

solve(['2', '4', '6', '8', '10']);