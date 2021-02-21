let person = {
    name: 'Ivan',
    age: 20,
    grades: [2, 3, 4, 5, 6, 2],
    speak: function () {
        console.log(`Hi I am ${this.name}`);
        console.log(this);
    },
    speak3: function () {
        return () => {
            console.log(`Hi I am ${this.name}`);
            console.log(this);
        }
    },
    tellGrades: function () {
        console.log(this);
        return function () {
            console.log(this);
            console.log(`${this.name} grades are: ${this.grades}`);
        }
    }
}

let persons = [
    {name: 'Dragan', age: 15},
    {name: 'Ivan', age: 20},
    {name: 'Pesho', age: 21}
]

console.log(...persons);




