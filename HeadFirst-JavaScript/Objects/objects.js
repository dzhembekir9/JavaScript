var cadi = {
    make: "Cadillac",
    model: "GM Cadillac",
    year: 1995,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892,
    started: false,

    start: function() {
        this.started = true;
        alert("Engine started!");
    },

    stop: function () {
        this.started = false;
        alert("Engine stopped!");
    },

    drive: function() {
        if (this.started) {
            alert("zoom zoom");
        }
        else {
            alert("You need to start the engine first");
        }
    }
};

cadi.color = "red";
cadi.needsWashing = true;


cadi.drive();
cadi.start();
cadi.drive();
cadi.stop();

