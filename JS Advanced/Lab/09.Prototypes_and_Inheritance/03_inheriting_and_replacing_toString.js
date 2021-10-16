// Judge will give 0 points with this solution

function toStringExtension() {

    class Person {
        constructor(nameInput, emailInput) {
            this.name = nameInput;
            this.email = emailInput;
        }

        toString() {
            let className = this.constructor.name;
            return `${className} name: ${this.name}, email: ${this.email}`;
        }
    }

    class Teacher extends Person {
        constructor(nameInput, emailInput, subjectInput) {
            super(nameInput, emailInput);
            this.subject = subjectInput;
        }

        toString() {
            return super.toString() + ` , subject: ${this.subject}`;
        }
    }

    class Student extends Person {
        constructor(nameInput, emailInput, courseInput) {
            super(nameInput, emailInput);
            this.course = courseInput;
        }

        toString() {
            return super.toString() + ` , subject: ${this.course}`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    };
}