function solve(arr) {

    let map = new Map();
    
    for (let el in arr) {
        
        let value = map.get(arr[el]);
        if (map.has(arr[el])) {
            map.set(arr[el], value += 1);
        }
        else {
            map.set(arr[el], 1);
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1])

    for (let [key, value] of sorted) {
        console.log(`${key} -> ${value} times`);
    }
}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);