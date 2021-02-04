function solve(input) {
    let totalMoney = 0;
    let bitcoinCount = 0;
    let firstDay = 0;
    let leftMoney = 0;
    const oneBitcoinCost = 11949.16;
    const oneGramGold = 67.51;
    const daysOfSteal = Math.floor(input.length / 3);
    const moneyByDays = [];
    let moneyStolen = 0;    

    for (let i = 0; i < input.length; i++) {
        moneyByDays[i] = input[i] * oneGramGold;
        totalMoney += moneyByDays[i];
    }

    for (let i = 0; i < daysOfSteal; i++) {
        moneyStolen += moneyByDays[(daysOfSteal * 3) - 1] * 0.3;
    }

    for (let i = 0; i < moneyByDays.length; i++) {
        if (moneyByDays[i] >= oneBitcoinCost) {
            firstDay = i + 1;
            break;
        }
        else {
            moneyByDays[i] += moneyByDays[i + 1];
        }
    }
    
    bitcoinCount = Math.floor((totalMoney - moneyStolen) / oneBitcoinCost);
    leftMoney = totalMoney - bitcoinCount * oneBitcoinCost - moneyStolen;


    if (bitcoinCount === 0) {
        console.log(`Bought bitcoins: ${bitcoinCount}`);
        console.log(`Left money: ${leftMoney.toFixed(2)} lv.`);
    }
    else {
        console.log(`Bought bitcoins: ${bitcoinCount}`);
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
        console.log(`Left money: ${leftMoney.toFixed(2)} lv.`);
    }
}

solve([ 3124.15,504.212,2511.124]);
//solve([ 100, 200, 300]);
//solve([ 50, 100]);

    