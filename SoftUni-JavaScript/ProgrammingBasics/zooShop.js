function zooShop(input) {
    let dogCount = Number(input.shift());
    let othersCount = Number(input.shift());
    let totalCost = dogCount * 2.5 + othersCount * 4;

    console.log(`${totalCost} lv.`);
}

zooShop([5, 4]);