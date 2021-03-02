function solve(speed) {
    if (speed <= 10) {
        console.log("siow");
    } else if (speed > 10 && speed <= 50) {
        console.log("average");
    } else if (speed > 50 && speed <= 150 ) {
        console.log("fast");
    } else if (speed > 150 && speed <= 1000) {
        console.log("ultra fast");
    }
}

solve(143);