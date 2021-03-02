function solve(arr) {

    let hoodArr = arr[0].split(', ');
    let hoods = new Map();
    for (let hood in hoodArr) {
        hoods.set(hoodArr[hood], []);
    }

    arr.shift();
    
    for (let entry in arr) {
        let hood = arr[entry].split(' - ');
        
        if (hoods.has(hood[0])) {
            hoods.get(hood[0]).push(hood[1]);
        }

    }

    let sorted = Array.from(hoods).sort((a, b) => b[1].length - a[1].length);

    for (let [key, value] of sorted) {
        console.log(`${key}: ${value.length}`);
        value.forEach(element => {
            console.log(`--${element}`);
        });
    }
}

solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']);