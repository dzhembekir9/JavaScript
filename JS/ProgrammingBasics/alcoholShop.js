function alcoholShop(input) {
    let whiskyPrice = Number(input.shift());
    let beerLitres = Number(input.shift());
    let wineLitres = Number(input.shift());
    let rakiaLitres = Number(input.shift());
    let whiskyLitres = Number(input.shift());

    let rakiaPrice = whiskyPrice / 2;
    let winePrice = rakiaPrice - (0.4 * rakiaPrice);
    let beerPrice = rakiaPrice - (0.8 * rakiaPrice);

    let rakiaTotal = rakiaLitres * rakiaPrice;
    let wineTotal = wineLitres * winePrice;
    let beerTotal = beerLitres * beerPrice;
    let whiskyTotal = whiskyLitres * whiskyPrice;
    
    let totalPrice = rakiaTotal + beerTotal + wineTotal + whiskyTotal;

    console.log(totalPrice.toFixed(2));

}

alcoholShop([50, 10, 3.5, 6.5, 1]);