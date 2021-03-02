function solve(arr) {

    let nums = arr[0].split(' ').map(x => Number(x));
    arr.shift();

    while (arr[0] !== 'end') {
        
        const tokens = arr[0].split(' ');

        if (tokens[0] === 'swap') {
            let temp = nums[tokens[1]];
            nums[tokens[1]] = nums[tokens[2]];
            nums[tokens[2]] = temp;
        } else if (tokens[0] === 'multiply') {
            nums[tokens[1]] *= nums[tokens[2]];
        } else if (tokens[0] === 'decrease') {
            nums = nums.map(x => x - 1)
        }


        arr.shift();   
    }

    console.log(nums.join(', '));
    
}

solve( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']
);    