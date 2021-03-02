function solve(input) {
    let nums = input.split(' ').map(x => Number(x));
    let sum = 0, counter = 0;

    for (let num of nums) {
        sum += num;
    }
    const average = sum / nums.length;

    const sortedNums = nums.sort((a, b) => b - a);
    let finalArr = [];
    
    for (let num of sortedNums) {
        counter++;
        if (num > average && counter <= 5) {
            finalArr.push(num);
        }
    }
    if (finalArr.length === 0) {
        console.log('No');
    }
    else {
        console.log(finalArr.join(' '));
    }
}

//solve('10 20 30 40 50');
//solve('5 2 3 4 -10 30 40 50 20 50 60 60 51');
solve('1');
//solve('-1 -2 -3 -4 -5 -6');