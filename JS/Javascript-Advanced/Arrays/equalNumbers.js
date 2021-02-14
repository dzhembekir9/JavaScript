function solve(matrix) {

    let counter = 0;

    for (let i = 0; i <= matrix.length; i++) {
        for (let j = 0; j < matrix.length - 1; j++) {
            if (matrix[j][i] === matrix[j + 1][i]) {
                counter++;
            }
        }
    }

    console.log(counter);
}

solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);

solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
);
