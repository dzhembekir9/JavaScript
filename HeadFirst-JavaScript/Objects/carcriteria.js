var car1 = {
    make: "Audi",
    model: "A3",
    year: 2004,
    mileage: 20000
}

var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};

var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
};

function isWorth(obj) {

    var isWorth = false;

    if (obj.mileage < 210000 && obj.year >= 2004) {
        isWorth = true;  
    }
    else {
        isWorth = true;
    }
}

isWorth(car1);

if(isWorth) {
    console.log(chevy.make + " " + chevy.model + " is worth buying.")
}
else {
    console.log(chevy.make + " " + chevy.model + " is not worth looking for.");
}