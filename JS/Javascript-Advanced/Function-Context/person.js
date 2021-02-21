class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
    }
}

let person1 = new Person('Ivan', 'Ivanov');
console.log(person1.fullName);