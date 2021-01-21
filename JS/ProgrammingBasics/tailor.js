function tailor(input) {
    let numOfDesks = Number(input.shift());
    let lengthInMetres = Number(input.shift());
    let widthInMetres = Number(input.shift());

    let area1 = numOfDesks * (lengthInMetres + 2 * 0.30) * (widthInMetres + 2 * 0.30);
    let area2 = numOfDesks * (lengthInMetres / 2) * (lengthInMetres / 2);

    let priceUSD = area1 * 7 + area2 * 9;
    let priceBGN = priceUSD * 1.85;

    console.log(`${parseFloat(priceUSD).toFixed(2)} USD`);
    console.log(`${parseFloat(priceBGN).toFixed(2)} BGN`);
}

tailor([5, 1.00, 0.50]);