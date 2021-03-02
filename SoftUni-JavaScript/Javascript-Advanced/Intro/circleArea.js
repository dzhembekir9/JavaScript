function solve(rad) {
    if (typeof rad === 'number') {
        console.log((Math.PI * rad**2).toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof rad}.`);
    }
}

solve(5);