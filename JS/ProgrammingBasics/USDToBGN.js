function USDToBGN(input) {
    let usd = Number(input.shift());
    let bgn = usd * 1.79549;

    console.log(parseFloat(bgn).toFixed(2));
}

USDToBGN([100]);