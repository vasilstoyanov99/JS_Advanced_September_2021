function createPerson(firstName, lastName) {
    const result = {
        firstName,
        lastName,
        fullName: ``
    }

    Object.defineProperty(result, 'fullName', {
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(value) {
            const [firstNameInput, lastNameInput] = value.split(' ');
            if (firstNameInput !== undefined && lastNameInput !== undefined) {
                this.firstName = firstNameInput;
                this.lastName = lastNameInput;
            }
        },
        configurable: true,
        enumerable: true
    });

    return result;
}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
