function solve(input) {
    let numOfdays = Number(input.shift());
    let numOfCooks = Number(input.shift());
    let numOfCakes = Number(input.shift());
    let numOfWaffles = Number(input.shift());
    let numOfPancakes = Number(input.shift());

    let cakePrice = numOfCakes * 45;
    let wafflePrice = numOfWaffles * 5.80;
    let pancalePrice = numOfPancakes * 3.20;
    let totalForDay = (cakePrice + wafflePrice + pancalePrice) * numOfCooks;
    let totalMoney = totalForDay * numOfdays;
    let final = totalMoney - ((1 / 8) * totalMoney);

    console.log(final.toFixed(2));
}

charity([131, 5, 9, 33, 46]);