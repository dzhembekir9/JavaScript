function solve(matrix) {
    
    let sum1 = 0;
    let row = 0;
    let col = 0;

    for (let i in matrix) {
        sum1 += matrix[row][col];
        row++;
        col++; 
    }


    let sum2 = 0;
    let row2 = 0;
    let col2 = matrix.length - 1;

    for (let i in matrix) {
        sum2 += matrix[row2][col2];
        row2++;
        col2--; 
    }

    console.log(sum1, sum2);
}

solve([[20, 40],
    [10, 60]]
);

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );