function solve(nums) {

    nums.sort((a, b) => a - b);
    console.log(nums[0], nums[1]);
}

//solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);