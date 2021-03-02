function solve(arr) {
    class Person {
        constructor(name, personalNumber) {
            this.name = name;
            this.personalNumber = personalNumber;
        }

        printInfo() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`);
        }
    }


    for (let i = 0; i < arr.length; i++) {
        
        const name = arr[i];
        const number = arr[i].length;

        const person = new Person(name, number);
        person.printInfo();
    }

}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']
);

