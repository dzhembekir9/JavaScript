function solve(arr) {

    let juices = {};

    for (let i in arr) {
        let token = arr[i].split(' => ');
        let juiceName = token[0];
        let quantity = Number(token[1]);

        if (!juices[juiceName]) {
            juices[juiceName] = quantity;
        }
        else {
            let prevQuantiy = juices[juiceName];
            juices[juiceName] = quantity + prevQuantiy;
        }
    }

    
    for (let [key, value] of Object.entries(juices)) {
        if (value > 1000) {
            console.log(`${key} => ${parseInt(value / 1000)}`);
        }
    }

}

solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
);

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);