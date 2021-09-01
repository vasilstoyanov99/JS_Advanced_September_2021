function solve(elements) {
    let sum = elements.reduce((a, b) => a + b);
    let concatenatedValues = elements.join('');
    let inversedValuesSum = aggregate(elements, 0, (a, b) => a + 1 / b);

    function aggregate(array, initValue, func) {
        let result = initValue;
        for (let i = 0; i < array.length; i++) {
            result = func(result, array[i]);
        }

        return result;
    }

    console.log(sum);
    console.log(inversedValuesSum);
    console.log(concatenatedValues);
}