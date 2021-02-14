class CheckingAccount {
    constructor(email, firstName, lastName) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    set clientId(clientId) {
        if (clientId.length < 6) {
            console.log('ID must be greater than 6 digits');
            this.currentId = '000000';
        }
        else {
            this.currentId = clientId;
        }
    }
    get getClientId() {
        return this.currentId;
    }

    printData() {
        return `ID: ${this.currentId}, name: ${this.firstName}, surname: ${this.lastName}, email: ${this.email}`
    }
}

let newUser = new CheckingAccount('asd@abv.com', 'Ivan', 'Draganov');
newUser.clientId = '123456';
console.log(newUser.getClientId);
console.log(newUser.printData());