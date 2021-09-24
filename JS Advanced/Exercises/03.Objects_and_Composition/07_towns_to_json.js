function townsToJSON(data) {

    let townsData = [];

    for (let i = 1; i < data.length; i++) {
        let splitData = data[i].split(/ \| +|\| | \|/).filter(a => a);
        let latitudeAsString = Number(splitData[1])
            .toLocaleString(undefined,
                { maximumFractionDigits: 2, minimumFractionDigits: 1 });
        let longitudeAsString = Number(splitData[2])
            .toLocaleString(undefined,
                { maximumFractionDigits: 2, minimumFractionDigits: 1 });
        let town = {
            Town: splitData[0],
            Latitude: Number(latitudeAsString),
            Longitude: Number(longitudeAsString)
        };
        townsData.push(town);
    }

    let json = JSON.stringify(townsData);
    return json;
}