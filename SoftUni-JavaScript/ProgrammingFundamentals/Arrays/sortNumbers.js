function solve(input) {    
    input.sort((a, b) => b - a);
    for (let i = 0; i < input.length; i++) {
        console.log(input[i]);
    }   
}   

solve([1, 2, 3, 4, 5]);