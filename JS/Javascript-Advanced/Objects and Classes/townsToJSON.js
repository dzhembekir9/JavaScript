function solve(arr) {

    let town1 = arr[1].split('|');
    
    let townName1 = town1[1].trim();
    let lat1 = town1[2].trim();
    let long1 = town1[3].trim();

    let town2 = arr[2].split('|');
    
    let townName2 = town2[1].trim();
    let lat2 = town2[2].trim();
    let long2 = town2[3].trim();

    let firstTown = {
        Town: townName1,
        Latitude: parseFloat(lat1),
        Longitude: parseFloat(long1)
    };

    let secondTown = {
        Town: townName2,
        Latitude: parseFloat(lat2),
        Longitude: parseFloat(long2) 
    };

    let townsArr = [firstTown, secondTown];

    let str = JSON.stringify(townsArr);

    console.log(str);
    
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);