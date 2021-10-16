function createAndReturnPersonAndTeacher() {
    class Person {
        constructor(nameInput, emailInput) {
            this.name = nameInput;
            this.email = emailInput;
        }
    }

    class Teacher extends Person {
        constructor(nameInput, emailInput, subjectInput) {
            super(nameInput, emailInput);
            this.subject = subjectInput;
        }
    }

    return {
        Person, Teacher
    };
}