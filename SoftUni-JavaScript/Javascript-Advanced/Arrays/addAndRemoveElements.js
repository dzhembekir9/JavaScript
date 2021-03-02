function solve(arr) {
    let counter = 1;
    let result = [];

    for (let i in arr) {
        if (arr[i] === 'add') {
            result.push(counter);
        }
        else {
            result.pop();
        }
        counter++;
    }

    if (result.length > 0) {
        for (let el of result) {
            console.log(el);
        }
    }
    else {
        console.log('Empty');
    }
}

solve(['add', 
'add', 
'add', 
'add']
);

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);

solve(['remove', 
'remove', 
'remove']
);