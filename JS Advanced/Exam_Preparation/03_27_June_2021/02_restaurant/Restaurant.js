class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = []
    }

    loadProducts(products) {
        products.forEach(p => {
            const  [name, quantityAsString, totalPriceAsString] = p.split(' ')
                .filter(p => p);
            const totalPrice = Number(totalPriceAsString);

            if (this.budgetMoney >= totalPrice) {
                this.budgetMoney -= totalPrice;
                const quantity = Number(quantityAsString);

                if (this.stockProducts.hasOwnProperty(name)) {
                    this.stockProducts[name] += quantity;
                } else {
                    this.stockProducts[name] = quantity;
                }

                this.history.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.history.push(`There was not enough money to load ${quantityAsString} ${name}`);
            }
            //TODO: Check if works correctly
            return this.history.join('\n');
        })
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu[meal] === undefined) {
            const newMeal = {
                neededProducts: [],
                price: price
            }

            neededProducts.forEach(p => {
                const [name, quantityAsString] = p.split(' ').filter(p => p);
                const product = {
                    name: name,
                    quantity: Number(quantityAsString)
                };
                newMeal.neededProducts.push(product);
            })

            this.menu[meal] = newMeal;

            const totalMeals = Object.keys(this.menu).length;

            if (totalMeals === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else if (totalMeals === 0 || totalMeals >=2) {
                return `Great idea! Now with the ${meal} we have ${totalMeals} meals in the menu, other ideas?`;
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {
        const result = [];

        if (this.menu.length > 0) {
            for (const key in this.menu) {
                result.push(`${key} - $ ${this.menu[key].price}`);
            }
        } else {
            result.push('Our menu is not ready yet, please come later...');
        }

        return result.join('\n');
    }

    makeTheOrder(meal) {
        if (this.menu[meal] === undefined) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            const neededProducts = this.menu[meal].neededProducts;
            for (const key in this.stockProducts) {
                const productQuantityInStock = this.stockProducts[key];
                const neededQuantity = neededProducts
                    .find(p => p.name === key).quantity;

                if (neededQuantity > productQuantityInStock) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                }
            }
        }

        const neededProducts = this.menu[meal].neededProducts;

        for (const key in this.stockProducts) {
            const neededQuantity = neededProducts
                .find(p => p.name === key).quantity;
            this.stockProducts[key] -= neededQuantity;
        }

        const price = this.menu[meal].price;
        this.budgetMoney += price;

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`;
    }
}

let test = new Restaurant(1000);
let res = test.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(res);