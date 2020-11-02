function makeTea(cups, tea) {
    console.log(`Brewing ${cups} cups of ${tea}`);
}

makeTea(3);

function makeMeTea(cups, tea) {
    console.log(`Brewing ${cups} cups of ${tea}`);
}

makeMeTea(3, "Earl Grey", 42, "Hello");

function sayHello() {
    console.log("Helloooo");
}

sayHello();

function bake(degrees) {
    var message;

    if (degrees > 400) {
        return "I am not a nuclear reactor";
    }
    else if (degrees < 100) {
        message = "I am not a refrigerator";
    }
    else {
        message = "That is the perfect heath for me";
    }

    return message;
}

var output = bake(350);
console.log(output);
