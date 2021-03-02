function solve(arr) {

    let array = [];
    let x, y, z;
    
    function area(x, y) {
        return x * y;
    }

    function volume(x, y, z) {
        return x * y * z;
    }

    for (let i in arr) {
        
        x = arr[i]['x'];
        y = arr[i]['y'];
        z = arr[i]['z'];

        let obj = {
            area: area(x, y),
            volume: volume(x, y, z)
        }

        array.push(obj);
    }

    let json = JSON.stringify(array);

    console.log(json);

}


solve([
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}]
);