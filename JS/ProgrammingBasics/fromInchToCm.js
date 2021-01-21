function fromInchToCm(input) {
    let numInch = Number(input.shift());
    let numCm = numInch * 2.54;

    console.log(numCm);
}

fromInchToCm([5]);