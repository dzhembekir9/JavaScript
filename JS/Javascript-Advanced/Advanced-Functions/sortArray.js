function solve() {
    let sorted;
    return function (arr, str) {
        if (str === 'asc') {
            sorted = arr.sort((a, b) => a - b);
        }
        else {
            sorted = arr.sort((a, b) => b - a);
        }
        return sorted;
    }
}

let sort = solve();

console.log(sort([14, 7, 17, 6, 8], 'asc'));

console.log(sort([14, 7, 17, 6, 8], 'desc'));
