function solve(fruit, g, price) {
    let total = g / 1000 * price;
    console.log(`I need $${total.toFixed(2)} to buy ${(g / 1000).toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);