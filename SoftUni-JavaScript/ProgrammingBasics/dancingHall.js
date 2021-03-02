function dancingHall(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let shelfSide = Number(input.shift());

    let areaOfHallInCM = (length * 100) * (width * 100);
    let areaOfShelf = (shelfSide * 100) * (shelfSide * 100);
    let areaOfBench = areaOfHallInCM / 10;
    let freeSpace = areaOfHallInCM - areaOfShelf - areaOfBench;
    let numOfDancers = freeSpace / (40 + 7000);

    console.log(parseFloat(numOfDancers).toFixed(0));
}

dancingHall([50, 25, 2]);