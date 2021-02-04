function solve(arr) {

    let meetings = {};
    
    for (let el in arr) {
        let entry = arr[el].split(' ');
        
        if (!meetings.hasOwnProperty(entry[0])) {
            meetings[entry[0]] = entry[1];
            console.log(`Scheduled for ${entry[0]}`);
        }
        else {
            console.log(`Conflict on ${entry[0]}!`);
        }
    }

    for (let key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);