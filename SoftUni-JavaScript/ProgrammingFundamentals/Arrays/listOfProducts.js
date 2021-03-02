function solve(arr) {
    arr.sort();
    let index = 1;
    for (let product of arr) {
        console.log(`${index}.${product} \n`);
        index++;
    }
}

solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);