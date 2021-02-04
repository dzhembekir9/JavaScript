function solve(arr) {
    
    let words = arr.shift().split(' ');
    
    let map = new Map();

    for (let el in words) {
        map.set(words[el], 0);
    }

    
    for (let el in arr) {
        if (map.has(arr[el])) {
            let counter = map.get(arr[el]) + 1;
            map.set(arr[el], counter);
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }
}

solve([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task']
);