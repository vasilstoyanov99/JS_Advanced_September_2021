function registerCarSales(data) {
    let registry = {};

    data.forEach(d => {
        const [carBrand, carModel, producedCarsAsString] =
            d.split(' | ').filter(d => d);
        const producedCars = Number(producedCarsAsString);

        if (!registry.hasOwnProperty(carBrand)) {
            registry[carBrand] = new Map();
            setData(carBrand, carModel, producedCars);
        } else if (!registry[carBrand].get(carModel)) {
            setData(carBrand, carModel, producedCars);
        } else {
            registry[carBrand].get(carModel).push(producedCars);
        }
    });

    function setData(carBrand, carModel, producedCars) {
        registry[carBrand].set(carModel, []);
        registry[carBrand].get(carModel).push(producedCars);
    }

    Object.keys(registry)
        .forEach(key => {
            console.log(key);
            const brand = registry[key];
            brand.forEach(print);
        })

    function print(producedCars, carModel) {
        const totalProducedCars =
            producedCars.length > 1
                ? producedCars.reduce((acc, e) => acc += e, 0)
                : producedCars[0];
        console.log(`###${carModel} -> ${totalProducedCars}`);
    }
}

registerCarSales(['Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200']
);