class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        const name = arr[i].split(' ')[0];
        const age = arr[i].split(' ')[1];
        const cat = new Cat(name, age);

        cat.meow();
    }
}

solve(['Mellow 2', 'Tom 5']);