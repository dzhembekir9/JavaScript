function gardenGrassing(input) {
    let area = Number(input.shift());
    let totalPrice = area * 7.61;
    let discount = 0.18 * totalPrice;
    let finalPrice = totalPrice - discount;


    console.log(`The final price is: ${parseFloat(finalPrice).toFixed(2)} lv.`);
    console.log(`The discount is: ${parseFloat(discount).toFixed(2)} lv.`);
}

gardenGrassing([540]);