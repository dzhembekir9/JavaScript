function solve(arr) {
    let map = new Map();

    for (let el of arr) {
        let pairs = el.split(' ');
        let product = pairs[0];
        let quantity = Number(pairs[1]);
        if (!map.has(product)) {
            map.set(product, quantity);
        }
        else {
            let currentQuantity = map.get(product);
            quantity += currentQuantity;
            map.set(product, quantity);
        }
    }
    
    for (let key of map.keys()) {
        console.log(`${key} -> ${map.get(key)}`);
    }
}

solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);