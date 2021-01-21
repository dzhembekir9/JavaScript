function solve(input) {
    let nylonQuantity = Number(input.shift());
    let paintLitres = Number(input.shift());
    let thinnerLitres = Number(input.shift());
    let hoursWorked = Number(input.shift());

    let nylonExp = (nylonQuantity + 2) * 1.5;
    let paintExp = (paintLitres + paintLitres / 10) * 14.5;
    let thinnerExp = thinnerLitres * 5.0;
    
    let materialExp = nylonExp + paintExp + thinnerExp + 0.40;
    let workersExp = (materialExp * 30 / 100) * hoursWorked;
    let totalExp = materialExp + workersExp;

    console.log(`${totalExp.toFixed(2)} lv.`);
}

solve([5, 10, 10, 1]);