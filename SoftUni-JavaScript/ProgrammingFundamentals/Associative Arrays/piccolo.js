function solve(arr) {
    
    let cars = new Map();

    for (let car in arr) {
        let number = arr[car].split(', ')[1];
        let state = arr[car].split(', ')[0];
        
        cars.set(number, state);
        if (cars.get(number) === 'OUT') {
            cars.delete(number);
        }
    }

    let sorted = Array.from(cars).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [key, value] of sorted) {
        if (sorted.length > 0) {
            console.log(key);
        }
        else {
            console.log('Parking Lot is Empty');
        }
    }
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);