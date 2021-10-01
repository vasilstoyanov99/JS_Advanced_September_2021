function solve() {
    const addButtonsArr = Array.from(document.getElementsByClassName('add-product'));

    for (const element of addButtonsArr) {
        element.addEventListener('click', addButtonOnClick);
    }

    document.getElementsByClassName('checkout')[0]
        .addEventListener('click', checkoutButtonOnClick);
    const outputElement = document.querySelector('textarea');
    outputElement.value = '';
    let basket = {
        products: [],
        totalPrice: 0.00
    };

    function addButtonOnClick({target}) {
        const productInfo = target.parentElement.parentElement;
        const productName = productInfo
            .getElementsByClassName('product-title')[0].textContent;

        if (!basket.products.includes(productName)){
            basket.products.push(productName);
        }

        const productPrice = Number(productInfo
            .getElementsByClassName('product-line-price')[0].textContent);
        basket.totalPrice += productPrice;
        outputElement.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
    }

    function checkoutButtonOnClick({target}) {
        outputElement.value += `You bought ${basket.products.join(', ')} for ${basket.totalPrice.toFixed(2)}.`;

        for (const button of addButtonsArr) {
            button.disabled = true;
        }

        target.disabled = true;
    }
}