function solve(groupNum, groupType, dayOfWeek) {
    let totalPrice;
    if (groupType === 'Students') {
        if (dayOfWeek === 'Friday') {
            totalPrice = groupNum * 8.45;
        }
        else if (dayOfWeek === 'Saturday') {
            totalPrice = groupNum * 9.80;
        }
        else if (dayOfWeek === 'Sunday') {
            totalPrice = groupNum * 10.46;
        }
        if (groupNum >= 30) {
            totalPrice = totalPrice - totalPrice * 0.15;
        }
    }
    else if (groupType === 'Business') {
        let tenPeopleAmount;
        if (dayOfWeek === 'Friday') {
            totalPrice = groupNum * 10.90;
            tenPeopleAmount = 10 * 10.90;
        }
        else if (dayOfWeek === 'Saturday') {
            totalPrice = groupNum * 15.60;
            tenPeopleAmount = 10 * 15.60;
        }
        else if (dayOfWeek === 'Sunday') {
            totalPrice = groupNum * 16;
            tenPeopleAmount = 10 * 16;
        }
        if (groupNum >= 100) {
            totalPrice -= tenPeopleAmount;
        }
    }
    else if (groupType === 'Regular') {
        if (dayOfWeek === 'Friday') {
            totalPrice = groupNum * 15;
        }
        else if (dayOfWeek === 'Saturday') {
            totalPrice = groupNum * 20;
        }
        else if (dayOfWeek === 'Sunday') {
            totalPrice = groupNum * 22.50;
        }
        if (groupNum >= 10 && groupNum <= 20) {
            totalPrice = totalPrice - totalPrice * 0.05;
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

solve(40, "Regular", "Saturday");