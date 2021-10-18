function solve() {
    class Employee {
        constructor(nameInput, ageInput) {
            this.name = nameInput;
            this.age = ageInput;
            this.salary = 0;
            this.tasks = [];
            this._taskIndex = 0;
        }

        work() {
            if (this._taskIndex >= this.tasks.length) {
                this._taskIndex = 0;
            }

            console.log(this.tasks[this._taskIndex]);
            this._taskIndex++;
        }

        collectSalary() {
            const dividend = this.dividend ? this.dividend : 0;
            console.log(`${this.name} received ${this.salary + dividend} this month.`);
        }
    }
    
    class Junior extends Employee {
        constructor(nameInput, ageInput) {
            super(nameInput, ageInput);
            this.tasks = [`${this.name} is working on a simple task.`];
        }
    }

    class Senior extends Employee {
        constructor(nameInput, ageInput) {
            super(nameInput, ageInput);
            this.tasks = [`${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.`];
        }
    }

    class Manager extends Employee {
        constructor(nameInput, ageInput) {
            super(nameInput, ageInput);
            this.tasks = [`${this.name} scheduled a meeting.`,
                `${this.name} is preparing a quarterly report.`];
            this.dividend = 0;
        }
    }

    return {
        Employee, Junior, Senior, Manager
    };
}