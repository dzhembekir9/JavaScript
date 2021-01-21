function radiansToDegrees(input) {
    let rad = Number(input.shift());
    let deg = rad * (180 / Math.PI);

    console.log(parseFloat(deg).toFixed(0));
}

radiansToDegrees([3.1416]);