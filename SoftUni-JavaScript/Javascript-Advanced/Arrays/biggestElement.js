function solve(matrix) {

    let maxNums = [];

    for (let i in matrix) {
        let max = Math.max(...matrix[i]);
        maxNums.push(max);
    }

    console.log(Math.max(...maxNums));

}

solve([[20, 50, 10],
    [8, 33, 145]]
);