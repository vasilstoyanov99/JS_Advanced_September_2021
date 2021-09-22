function createCityObject(name, population, treasury) {

    const record = {
        name,
        population,
        treasury
    };

    return record;
}

console.log(createCityObject('Tortuga',
    7000,
    15000
));