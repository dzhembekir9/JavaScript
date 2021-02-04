function solve(arr) {

    let guests = new Map();

    let left = [];

    let invited = arr.join(' ').split(' PARTY ')[0].split(' ');
    let arrived = arr.join(' ').split(' PARTY ')[1].split(' ');

    for (let el in invited) {
        if (!arrived.includes(invited[el])) {
            left.push(invited[el]);
        }
    }

    function compare(a, b) {
        const firsChar = a.charAt(0);
        if (typeof firsChar === 'number') {
            return b - a;
        }
        else {
            return a - b;
        }
    }

    let sorted = left.sort((a, b) => compare(a, b));

    console.log(sorted.length);
    for (let el in sorted) {
        console.log(sorted[el]);
    }
    
}

solve(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]);

solve(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]
);