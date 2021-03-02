function solve(nums) {
    
    let counter = 0;

    for (let i in nums) {
        let num = nums[i].toString().split('');
        if (num.length % 2 === 0) {
            counter++;
        }
    }

    console.log(counter);
}

solve([12, 345, 2, 6, 7896]);