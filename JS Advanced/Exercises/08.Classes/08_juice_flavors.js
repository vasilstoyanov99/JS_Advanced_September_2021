function juiceFlavors(data) {
    let juices = {};
    let bottles = {};

    data.forEach(d => {
        const [juice, quantityAsString] = d.split(' => ');
        const quantity = Number(quantityAsString);
        juices.hasOwnProperty(juice)
            ? juices[juice] += quantity
            : juices[juice] = quantity;

        if (juices[juice] >= 1000) {
            const currBottles = Math.trunc(juices[juice] / 1000);
            bottles.hasOwnProperty(juice)
            ? bottles[juice] += currBottles
            : bottles[juice] = currBottles;
            juices[juice] %= 1000;
        }
    });

    for (const key in bottles) {
        console.log(`${key} => ${bottles[key]}`);
    }
}
