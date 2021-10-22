class ChristmasDinner {
    constructor(budgetInput) {
        this.budget = budgetInput;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        
        this._budget = value;
    }

    shopping(product) {
        const price = product[1];

        if (price > this.budget) {
            throw new Error('Not enough money to buy this product');
        }

        const name = product[0];
        this.budget -= price;
        this.products.push(name);

        return `You have successfully bought ${name}!`;
    }

    recipes(recipe) {
        const neededProducts = recipe.productsList;

        for (const neededProduct of neededProducts) {
            if (!this.products.includes(neededProduct)) {
                throw new Error('We do not have this product');
            }
        }

        const recipeName = recipe.recipeName;
        this.dishes.push({
            recipeName: recipeName,
            productsList: neededProducts
        });

        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        let doesDishExists = false;

        this.dishes.forEach(d => {
            if (d.recipeName === dish) {
                doesDishExists = true;
            }
        })

        if (!doesDishExists) {
            throw new Error('We do not have this dish');
        } else if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        const result = [];

        for (const key in this.guests) {
            const productsList = this.dishes.find(d => d.recipeName === key)
                .productsList;
            result.push(`${key} will eat ${this.guests[key]}, which consists of ${productsList.join(', ')}`);
        }

        return result.join('\n');
    }
}