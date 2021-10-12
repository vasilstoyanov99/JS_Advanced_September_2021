class Person {
    constructor(firstName, lastName, age, email) {
        Object.assign(this, {
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email
        });
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}
