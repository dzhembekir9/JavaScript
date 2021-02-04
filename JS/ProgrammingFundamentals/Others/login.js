function solve(input) {
    const userName = input.shift();
    let counter = 0;
    const n = input.length;

    for (let i = 0; i < n; i++) {
        word = input.shift();
        reverse = word.split("").reverse().join("");
        if (counter >= 3) {
            console.log(`User ${userName} blocked!`);
        }
        else if (counter < 4) {
            if (reverse === userName) {
                console.log(`User ${userName} logged in.`);
            }
            else {
                console.log(`Incorrect password. Try again.`);
                counter++;
            }      
        }
    }
}

solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);

