function solve(array) {
    function createTown(name, latitude, longtitude) {
        
        let town = {
            name,
            latitude,
            longtitude
        }

        return town;
    }

    for (let i = 0; i < array.length; i++) {
        const name = array[i].split(' | ')[0];
        const latitude = parseFloat(array[i].split(' | ')[1]).toFixed(3);
        const longtitude = parseFloat(array[i].split(' | ')[2]).toFixed(2);

        console.log(createTown(name, latitude, longtitude));
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);