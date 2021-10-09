const { assert } = require('chai');
const createCalculator = require('../07_add_subtract').createCalculator;

describe('add subtract tests', function() {
    it('should return an object with add, subtract and get functions', function () {
        const calculator = createCalculator();
        assert.isObject(calculator);
        assert.isFunction(calculator.add);
        assert.isFunction(calculator.subtract);
        assert.isFunction(calculator.get);
    });
    it('add function should add a number to an internal sum and get function should return that sum', function () {
        const calculator = createCalculator();
        const expectedResult = 10;
        calculator.add(5);
        calculator.add(5);
        const actualResult = calculator.get();
        assert.equal(expectedResult, actualResult);
    });
    it('subtract function should subtract a number from an internal sum and get function should return that sum', function () {
        const calculator = createCalculator();
        const expectedResult = 5;
        calculator.add(10);
        calculator.subtract(5);
        const actualResult = calculator.get();
        assert.equal(expectedResult, actualResult);
    });
    it('add function should add a number as string to an internal sum and get function should return that sum', function () {
        const calculator = createCalculator();
        const expectedResult = 10;
        calculator.add('5');
        calculator.add('5');
        const actualResult = calculator.get();
        assert.equal(expectedResult, actualResult);
    });
    it('subtract function should subtract a number as string from an internal sum and get function should return that sum', function () {
        const calculator = createCalculator();
        const expectedResult = 5;
        calculator.add('10');
        calculator.subtract('5');
        const actualResult = calculator.get();
        assert.equal(expectedResult, actualResult);
    });
});