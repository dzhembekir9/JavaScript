function solve(arr) {
    let wagons = arr.join(',').split(',')[0].split(' ');
    let capacity = parseInt(arr.join(',').split(',')[1]);
    arr.shift();
    arr.shift();

    let pushCounter = 1;
    
    while (arr[0].includes('Add')) {
        const number = arr.join(', ').split(', ');
        wagons.push(number[0].split(' ')[1]);
        arr.shift();
        pushCounter++;
    }

    let counter = 0;

    for (let index = 0; index <= wagons.length + pushCounter; index++) {
        if (wagons[counter] * 1 + arr[0] * 1 <= capacity * 1) {
            wagons[counter] = wagons[counter] * 1 + arr[0] * 1;
            arr.shift();
        }
        else {
            counter++;
        }
    }
    

    console.log(wagons.join(' '));


}

solve(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);

solve(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
);
