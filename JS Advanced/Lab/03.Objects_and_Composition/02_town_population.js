function createCitiesRecord(data) {

    const record = {};

    for (const cityData of data) {

        const splitData = cityData.split(' <-> ');
        const cityName = splitData[0];
        const cityPopulation = Number(splitData[1]);

        if (record[cityName]) {
            record[cityName] += cityPopulation;
        } else {
            record[cityName] = cityPopulation;
        }
    }

    for (const cityName in record) {

        console.log(`${cityName} : ${record[cityName]}`);
    }
}