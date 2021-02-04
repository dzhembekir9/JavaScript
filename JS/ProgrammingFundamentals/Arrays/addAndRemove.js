function solve(arr) {
    let numsArr = [];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === 'add') {
            numsArr.push(i + 1);
        }
        else if (arr[i] === 'remove') {
            numsArr.pop();
        }
    }

    console.log(numsArr);
}

//solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);