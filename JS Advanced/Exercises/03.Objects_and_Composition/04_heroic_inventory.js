function registerHeroes(data) {

    let registry = [];

    for (let index = 0; index < data.length; index++) {
        let heroData = data[index].split(/\W+/);
        let heroObject = {
            name: heroData.shift(),
            level: Number(heroData.shift()),
            items: heroData
        };
        registry.push(heroObject);
    }

    let jsonResult = JSON.stringify(registry);
    return jsonResult;
}