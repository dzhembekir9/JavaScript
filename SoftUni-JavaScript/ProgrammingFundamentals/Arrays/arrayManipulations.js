function solve(arr) {

    let nums = arr.join(',').split(',')[0].split(' ');
    const operations = arr.join(',').split(',');
    operations.shift();

    for (let i = 0; i < operations.length; i++) {

        const num = operations[i].split(' ')[1];

        if (operations[i].includes('Add')) {
            nums.push(num);
        }
        if (operations[i].includes('Remove')) {
            nums = nums.filter(el => el !== num)
        }
        if (operations[i].includes('RemoveAt')) {
            nums.splice(num, 1);
        }
        if (operations[i].includes('Insert')) {
            const index = operations[i].split(' ')[2];
            nums.splice(index, 0, num);
        }
    }

    console.log(nums.join(' '));

}

solve(['4 19 2 53 6 43', 
'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);