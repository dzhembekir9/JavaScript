function solve(matrix) {
    
    let magicRows = false;
    let magicCols = false;
    let rowSum = [0, 0, 0];
    let colSum = [0, 0, 0];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            rowSum[i] += matrix[i][j];
            colSum[i] += matrix[j][i];
        }
    }

    for (let i = 0; i < matrix.length - 1; i++) {
        if (rowSum[i] === rowSum[i + 1]) {
            magicRows = true;
        }
        if (colSum[i] === colSum[i + 1]) {
            magicCols = true;
        }
    }

    if (magicCols && magicRows) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);

solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
);

solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
);