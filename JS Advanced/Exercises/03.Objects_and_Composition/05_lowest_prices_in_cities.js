function findTheLowestPrice(data) {

    let products = {};

    for (let i = 0; i < data.length; i++) {
        let [townName, productName, productPrice] = data[i].split(' | ');
        productPrice = Number(productPrice);

        if (!products.hasOwnProperty(productName)){
            products[productName] = {};
        }

        products[productName][townName] = productPrice;
    }

    let result = [];

    for (const productName in products) {
        let townsWithProductsSorted = Object.entries(products[productName])
            .sort((a, b) => a[1] - b[1]);
        let cheapestTown = townsWithProductsSorted[0];
        result.push(`${productName} -> ${cheapestTown[1]} (${cheapestTown[0]})`);
    }

    return result.join('\n');
}