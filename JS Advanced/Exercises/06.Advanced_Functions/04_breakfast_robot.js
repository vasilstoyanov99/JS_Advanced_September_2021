function robot() {
    const successMessage = 'Success';
    let availableIngredients = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0
    };
    let recipes = {
        apple: { carbohydrate: 1, flavour: 2},
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3},
        eggs: { protein: 5, fat: 1, flavour: 1},
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
        prepareRecipe(recipe, quantity) {
            let notEnoughIngredient = false;
            for (const ingredient in this[recipe]) {
                const neededIngredient = this[recipe][ingredient] * quantity;
                if (neededIngredient > availableIngredients[ingredient] ){
                    notEnoughIngredient = true;
                    return (`Error: not enough ${ingredient} in stock`);
                }
            }

            if (!notEnoughIngredient){
                for (const ingredient in this[recipe]) {
                    const neededIngredient = this[recipe][ingredient] * quantity;
                    availableIngredients[ingredient] -= neededIngredient;
                }
            }
            
            return successMessage;
        }
    };

    function process(input) {
        const [command, ingredientOrRecipe, quantity] = input.split(' ');

        if (command === 'restock') {
            availableIngredients[ingredientOrRecipe] += Number(quantity);
            return successMessage;
        } else if(command === 'prepare') {
            return recipes.prepareRecipe(ingredientOrRecipe, Number(quantity));
        } else {
            const result = Object.keys(availableIngredients)
                .map(k => `${k}=${availableIngredients[k]}`)
                .join(' ');
            return  result;
        }
    }

    return process;
}