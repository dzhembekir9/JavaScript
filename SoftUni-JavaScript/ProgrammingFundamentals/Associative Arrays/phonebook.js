function solve(arr) {
    let phonebook = {};
    for (let el in arr) {
        let firstEntry = arr[el].split(' ');
        phonebook[firstEntry[0]] = firstEntry[1];
    }

    for (let key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);
    }
    
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);