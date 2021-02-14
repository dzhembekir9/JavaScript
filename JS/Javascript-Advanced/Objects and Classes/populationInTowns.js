function solve(arr) {

    let town = {};

    for (let i in arr) {
        let token = arr[i].split(' <-> ');
        let [townName, populationNum] = token;
        
        if (!town[townName]) {
            town[townName] = Number(populationNum);
        }
        else {
            let previousNum = Number(town[townName]);
            town[townName] = Number(populationNum) + Number(previousNum);
        }

    }

    for (let [key, value] of Object.entries(town)) {
        console.log(`${key} : ${value}`);
    }
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)