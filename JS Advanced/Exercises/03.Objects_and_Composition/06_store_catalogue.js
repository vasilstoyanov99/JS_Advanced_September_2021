function createSortedCatalogue(data) {

    let productsCatalogue = {};

    for (let i = 0; i < data.length; i++) {
        let [productName, productPrice] = data[i].split(' : ');
        productPrice = Number(productPrice);
        let initial = productName[0].toUpperCase();

        if (!productsCatalogue.hasOwnProperty(initial)){
            productsCatalogue[initial] = {};
        }

        productsCatalogue[initial][productName] = productPrice;
    }
        let result = [];
        let sortedByInitials = Object.keys(productsCatalogue)
            .sort((a, b) => a.localeCompare(b));

        for (const initial of sortedByInitials) {
            let sortedProducts = Object.entries(productsCatalogue[initial])
                .sort((a, b) => a[0].localeCompare(b[0]));
            result.push(initial);
            let productsAsStrings = sortedProducts.map(product => `  ${product[0]}: ${product[1]}`)
                .join('\n');
            result.push(productsAsStrings);
        }

        return result.join('\n');
}