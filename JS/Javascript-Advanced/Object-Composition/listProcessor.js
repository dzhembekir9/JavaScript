function solve(arr) {
    
    let result = [];

    while (arr[0] !== 'print') {
        let action = arr[0].split(' ')[0];
        let word = arr[0].split(' ')[1];

        if (action === 'add') {
            result.push(word);
        }
        else {
            result.splice(result.indexOf(word), 1);
        }

        arr.shift();
    }

    console.log(result.join(', '));

}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);