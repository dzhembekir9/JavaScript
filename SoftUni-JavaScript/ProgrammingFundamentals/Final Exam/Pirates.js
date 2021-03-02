function solve(arr) {

    let city = new Map();

    while (arr[0] !== 'Sail') {

        let cityName = arr[0].substring(0, arr[0].indexOf('|'));
        let population = Number(arr[0].substring(arr[0].indexOf('|') + 2, arr[0].lastIndexOf('|') - 1));
        let gold = Number(arr[0].substring(arr[0].lastIndexOf('|') + 1));
        
        let props = {
            population,
            gold
        }
        
        if (!city.has(cityName)) {
            city.set(cityName, props);
        }
        else {            
            city.get(cityName).population += population;
            city.get(cityName).gold += gold;
        }

        arr.shift();
    }


    while (arr[0] !== 'End') {

        let cityArr = arr[0].split('=>');

        let action = cityArr[0];
        let NameOfCity = cityArr[1];
        
        if (action === 'Plunder') {
            let goldAmount = Number(cityArr[3]);
            let people = Number(cityArr[2]);

            if (city.get(NameOfCity).population > 0 || city.get(NameOfCity).gold > 0) {
                console.log(`${NameOfCity} plundered! ${goldAmount} gold stolen, ${people} citizens killed.`);
                city.get(NameOfCity).population -= people;
                city.get(NameOfCity).gold -= goldAmount;
            } 
            if (city.get(NameOfCity).population <= 0 || city.get(NameOfCity).gold <= 0) {
                console.log(`${NameOfCity} has been wiped off the map!`);
                city.delete(NameOfCity);
            }
            
        }
        else if (action === 'Prosper') {
            let gold = Number(cityArr[2]);
            if (gold > 0) {
                city.get(NameOfCity).gold += gold;
                console.log(`${gold} gold added to the city treasury. ${NameOfCity} now has ${city.get(NameOfCity).gold} gold.`);
            }
            else {
                console.log('Gold added cannot be a negative number!');
            }
        }

        arr.shift();
    }

    console.log(`Ahoy, Captain! There are ${city.size} wealthy settlements to go to:`);

    function compareTowns([nameA, townA], [nameB, townB]) {
        return townB.gold - townA.gold || nameA.localeCompare(nameB);
    }

    let sorted = Array.from(city).sort(compareTowns);

    for (let [key, value] of sorted) {
        console.log(`${key} -> Population: ${value.population} citizens, Gold: ${value.gold} kg`);
    }

}

solve(['Tortuga||345000||1250', 
'Santo Domingo||240000||630', 
'Havana||410000||1100', 
'Sail', 
'Plunder=>Tortuga=>75000=>380', 
'Prosper=>Santo Domingo=>180',
'End']
);

console.log('---------------------------');

solve(['Nassau||95000||1000',
'San Juan||930000||1250',
'Campeche||270000||690',
'Port Royal||320000||1000', 
'Port Royal||100000||2000',
'Sail',
'Prosper=>Port Royal=>-200',
'Plunder=>Nassau=>94000=>750', 
'Plunder=>Nassau=>1000=>150',
'Plunder=>Campeche=>150000=>690',
'End']
);