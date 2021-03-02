function solve(nums) {
    let newArr = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            newArr.unshift(nums[i]);
        }
        else {
            newArr.push(nums[i]);
        }
    }
    console.log(newArr);
}

//solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);      