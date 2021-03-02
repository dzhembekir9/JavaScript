function solve(str) {
    
    let map = new Map();

    for (let i in str) {
        if (!map.has(str[i])) {
            map.set(str[i], []);
        }
        map.get(str[i]).push(i);
    }

    for (let [key, value] of map) {
        console.log(`${key}:${value.join('/')}`);
    }
}

solve('abababa');
solve('avjavamsdmcalsdm');