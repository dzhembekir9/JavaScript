function makeCar() {

    var makes = ["Audi", "Mercedez", "BMW", "Toyota", "Opel", "Jeep", "Ferrari", "Ford"];
    var years = [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010];
    var colors = ["red", "green", "black", "white", "grey", "blue", "orange", "pink"];
    var convertibles = [true, false]

    var rand1 = Math.floor(Math.random() * makes.length);
    var rand2 = Math.floor(Math.random() * years.length);
    var rand3 = Math.floor(Math.random() * colors.length);
    var rand4 = Math.floor(Math.random() * convertibles.length);

    var car = {
        make: makes[rand1],
        year: years[rand2],
        color: colors[rand3],
        convertible: convertibles[rand4]
    };

    return car;

}

function getCar(car) {
    console.log(`${car.make}, ${car.year}, ${car.color}, ${car.convertible}`)
}

var carToSell = makeCar();
getCar(carToSell);





