function solve(num) {
    let sum = 0;
    let arr = num.toString().split('');
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }

    if (sum / arr.length == arr[0]) {
        console.log(true);
    }
    else {
        console.log(false);
    }
    console.log(sum);

    let nums = [1, 2, 3, 4, 5];

    let largest = Math.max(...nums);

    console.log(largest);

}

solve(2222222);