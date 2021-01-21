function init() {
    function Duck (sound) {
        this.sound = sound;
        this.quack = function() { console.log(this.sound); }
        this.makeSound = function () {
            console.log("QUACK.. QUACK");
        }
    }

    let toy = new Duck("quack quack");

    toy.quack();

    toy.makeSound();

    console.log(typeof toy);
    console.log(toy instanceof Duck);
}

window.onload = init;