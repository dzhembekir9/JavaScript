function solve(nums) {
    let reverseDoubled = [];

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 !== 0) {
            reverseDoubled.push(nums[i] * 2);
        }
    }
    console.log(reverseDoubled.reverse().join(' '));
}

//solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);