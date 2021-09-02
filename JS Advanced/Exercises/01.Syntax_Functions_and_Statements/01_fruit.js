function calculatePrice(fruit, grams, pricePerKilo) {
    let kilos = grams / 1000.0;
    let cost = kilos * pricePerKilo;
    console.log(`I need $${cost.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruit}.`);
}