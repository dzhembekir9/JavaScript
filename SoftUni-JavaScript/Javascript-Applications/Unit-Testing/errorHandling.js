function solve(arr, start, end) {
    
    let sum = 0;

    if (start < 0) {
        start = 0;
    }
    if (end > arr.length) {
        end = arr.length;
    }

    for (let el in arr) {
        if (arr[el] !== Number(arr[el])) {
            return NaN;
        }
        else if (el >= start && el <= end) {
            sum += arr[el];
        }
    }
    
    return sum;

}

let sum = solve([10, 20, 30, 40, 50, 60], 3, 300);
console.log(sum);
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(solve([10, 'twenty', 30, 40], 0, 2));
console.log(solve([], 1, 2));
console.log(solve('text', 0, 2));