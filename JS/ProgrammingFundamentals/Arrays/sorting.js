function solve(arr) {

    arr.sort((a, b) => b - a);
    let biggest = [];
    let smallest = [];

    for (let i = 0; i < arr.length / 2; i++) {
        biggest.push(arr[i]);
    }

    arr.sort((a, b) => a - b);
    
    for (let i = 0; i < arr.length / 2; i++) {
       smallest.push(arr[i]);
    }

    let output = '';
    
    for (let index = 0; index < smallest.length; index++) {
        output += biggest[index] + ' ';
        output += smallest[index] + ' ';
    }

    console.log(output);

}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);