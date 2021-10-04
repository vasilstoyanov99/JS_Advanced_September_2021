function filterEmployeesAndPrintResult(jsonData, criteria) {
    const [employeeKey, employeeValue] = criteria.split('-');
    let counter = -1;
    JSON.parse(jsonData)
        .forEach(ed => filterAndPrint.call(ed));

    function filterAndPrint() {
        if (this[employeeKey] === employeeValue || employeeKey === 'all'){
            console.log(`${++counter}. ${this['first_name']} ${this['last_name']} - ${this['email']}`);
        }
    }
}