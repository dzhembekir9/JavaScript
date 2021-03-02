function solve(arr) {
    let going = []
    let notGoing = [];

    for (str of arr) {
        const name = str.split(' ')[0];
        if (!str.includes('not')) {
            if (!going.includes(name)) {
                going.push(name);
            }
            else {
                console.log(`${name} is already in the list!`);
            }
        }
        else {
            if (going.includes(name)) {
                const index = going.indexOf(name, 0);
                going.splice(index, 1);
            }
            else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    for (goingNames of going) {
        console.log(goingNames);
    }
}

solve(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']);

solve(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);