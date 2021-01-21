function init() {
    
    function Person (name, age) {
        this.name = name;
        this.age = age;
        this.introduceYourself = function () {
            console.log(`My name is ${this.name} and I am ${this.age} years old`);
        }
    }

    let person1 = new Person("Djem", 19);

    person1.introduceYourself();

    let person = {
        name: "Djem",
        surname: "Bekir",
        age: 19,
        favFood: "burger",

        introduceYourself: function () {
            console.log(`My name is ${person.name} ${person.surname}. I am ${person.age} years old and my favourite food is ${person.favFood}`);
        }
    }

    person.introduceYourself();

}

window.onload = init;