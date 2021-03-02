function solve(arr) {

    let products = new Map();

    for (let i in arr) {
        let token = arr[i].split(' : ');
        let productName = token[0];
        let price = token[1];
        let firstLetter = productName.split('')[0];
        
        let product = {
            productName,
            price
        };
        
        if (!products.has(firstLetter)) {
            products.set(firstLetter, [product]);
        } else {
            products.get(firstLetter).push(product)
        }
    }

    let sorted = Array.from(products).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [key, value] of sorted) {
        console.log(key);
        for (let key of value) {
            console.log(`  ${key.productName}: ${key.price}`);
        }
    }

}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);