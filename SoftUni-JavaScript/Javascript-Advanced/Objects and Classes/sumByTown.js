function solve(arr) {
    
    let town = {};

    while (arr.length > 0) {
        if (!town[arr[0]]) {
            let townName = arr.shift();
            town[townName] = Number(arr.shift());
        }
        else {
            let currentTown = arr.shift();
            town[currentTown] += Number(arr.shift());
        }
    }

    let str = JSON.stringify(town);
    console.log(str);
}

solve(['Sofia','20','Varna','3','Sofia','5','Varna','4']);