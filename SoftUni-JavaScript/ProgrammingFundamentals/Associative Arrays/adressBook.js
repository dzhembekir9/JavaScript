function solve(arr) {
    
    let addressBook = {};

    for (let el in arr) {
        let [name, address] = arr[el].split(':');
        addressBook[name] = address;
    }

    let entries = Object.entries(addressBook);

    entries.sort((a, b) => {
        let nameA = a[0];
        let nameB = b[0];
        return nameA.localeCompare(nameB);
    });


    for (let entry in entries) {
        console.log(entries[entry].join(' -> '));
    }
    
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);