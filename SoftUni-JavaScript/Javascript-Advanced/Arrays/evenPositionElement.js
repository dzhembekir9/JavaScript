function solve(arr) {

    let string = '';
    
    const sumEven = () => {
        for (let i in arr) {
            if (i % 2 === 0) {
                string += arr[i] + ' '; 
            }
        }
        return string;
    }

    const result = sumEven();
    console.log(result);
}

solve(['20', '30', '40']);
solve(['5', '10']);