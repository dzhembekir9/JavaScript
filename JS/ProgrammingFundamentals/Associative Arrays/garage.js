function solve(arr) {

    let garage = new Map();
    
    for (let el in arr) {
        let car = arr[el].split(',');
        
        let garageNum = car[0].split(' - ')[0];
        
        car[0] = car[0].substring(car[0].indexOf('-') + 2);

        let carArr = [];
        
        if (!garage.has(garageNum)) {
            garage.set(garageNum, []);
        }
        

        let existing = garage.get(garageNum); 
        for (let el of car) {
            existing.push(el);
        }
        
    }
    let sortedGarages = [...garage.entries()].sort((a, b) => a[0] - b[0]);

    let output = '';
    for (let [currGarage, currCarKeyValue] of sortedGarages) {
        output += `Garage № ${currGarage}\n`;
        for (let currCarProperties of currCarKeyValue) {
            currCarProperties = currCarProperties.replace(/: /g, ' - ');
            output += `--- ${currCarProperties}\n`;
        }
    }
    console.log(output);


}

solve(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);