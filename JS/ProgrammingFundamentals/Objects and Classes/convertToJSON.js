function solve(fName, lName, hColor) {
    const obj = {
        name: fName,
        lastName: lName,
        hairColor: hColor
    }
    let str = JSON.stringify(obj);
    console.log(str);
}

solve('George', 'Jones', 'Brown');