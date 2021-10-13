class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(nameInput, salaryAsStringInput, positionInput, departmentInput) {
        const errorMessage = 'Invalid input!';

        if (!isValid(nameInput) || !isValid(salaryAsStringInput)
            || !isValid(positionInput) || !isValid(departmentInput) ) {
            throw new Error(errorMessage);
        }

        const salaryInput = Number(salaryAsStringInput);

        if (salaryInput < 0) {
            throw new Error(errorMessage);
        }

        const employee = { name: nameInput, salary: salaryInput, position: positionInput };

        if (this.departments[departmentInput] === undefined) {
            this.departments[departmentInput] = [];
        }

        this.departments[departmentInput].push(employee);

        function isValid(input) {
            return !(input === '' || input === undefined || input === null);
        }

        return `New employee is hired. Name: ${nameInput}. Position: ${positionInput}`;
    }

    bestDepartment() {
        const departmentsAvgSalary = {};

        Object.keys(this.departments)
            .forEach(key => {
                const averageSalary = this.departments[key].reduce((acc, e, i, arr) => {
                    return acc + e.salary / arr.length;
                }, 0);
                departmentsAvgSalary[key] = averageSalary;
            });
        
        const bestDepartment = Object.keys(departmentsAvgSalary)
            .sort((d1k, d2k) =>
                departmentsAvgSalary[d2k] - departmentsAvgSalary[d1k])[0];

        const result = [];
        result.push(`Best Department is: ${bestDepartment}\nAverage salary: ${departmentsAvgSalary[bestDepartment].toFixed(2)}`);

        const sortedEmployees = this.departments[bestDepartment]
            .sort((e1, e2) => e1.name.localeCompare(e2.name))
            .sort((e1, e2) => e2.salary - e1.salary);

        for (const employee of sortedEmployees) {
            result.push(`${employee.name} ${employee.salary} ${employee.position}`);
        }

        return result.join('\n');
    }
}


