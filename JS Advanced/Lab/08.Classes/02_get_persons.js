function returnArrOfPerson() {
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

    let result = [];
    result.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    result.push(new Person('SoftUni'));
    result.push(new Person('Stephan', 'Johnson', 25));
    result.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));

    return result;
}