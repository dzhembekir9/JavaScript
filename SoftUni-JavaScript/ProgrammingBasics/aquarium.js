function aquarium(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let altitude = Number(input.shift()); 
    let percent = Number(input.shift());

    let volume = length * width * altitude;
    let litres = volume * 0.001;
    let percentValue = percent * 0.01;
    let totalLitresNeeded = litres * (1 - percentValue);

    console.log(parseFloat(totalLitresNeeded).toFixed(3));
}

aquarium([85, 75, 47, 17]);