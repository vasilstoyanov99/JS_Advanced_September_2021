const { assert } = require('chai');
const dealership = require('./03_dealership').dealership;

describe('dealership tests', function () {
    describe('newCarCost tests', function () {
        it('should return a discount when given "Audi A4 B8" as old car', function () {
            const expectedResult = 5000;
            const actualResult = dealership.newCarCost('Audi A4 B8', 20000);
            assert.equal(expectedResult, actualResult);
        });
        it('should return a discount when given "Audi A6 4K" as old car', function () {
            const expectedResult = 5000;
            const actualResult = dealership.newCarCost('Audi A6 4K', 25000);
            assert.equal(expectedResult, actualResult);
        });
        it('should return a discount when given "Audi A8 D5" as old car', function () {
            const expectedResult = 5000;
            const actualResult = dealership.newCarCost('Audi A8 D5', 30000);
            assert.equal(expectedResult, actualResult);
        });
        it('should return a discount when given "Audi TT 8J" as old car', function () {
            const expectedResult = 5000;
            const actualResult = dealership.newCarCost('Audi TT 8J', 19000);
            assert.equal(expectedResult, actualResult);
        });
        it('should return the input price when given an invalid', function () {
            const expectedResult = 10000;
            const actualResult = dealership.newCarCost('invalid', 10000);
            assert.equal(expectedResult, actualResult);
        });
    });
    describe('carEquipment tests', function () {
        it('should return an array with the selected elements when given an array of indexes and an array of elements', function () {
            const expectedResult = ['sliding roof', 'navigation'];
            const actualResult = dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [1, 3]);
            assert.deepEqual(expectedResult, actualResult);
        });
    });
    describe('euroCategory tests', function () {
        it('should return error message when given category lower than 4', function () {
            const expectedResult = 'Your euro category is low, so there is no discount from the final price!';
            const actualResult = dealership.euroCategory(3);
            assert.equal(expectedResult, actualResult);
        });
        it('should return a message with the discount when given category equal to 4', function () {
            const expectedResult = 'We have added 5% discount to the final price: 14250.';
            const actualResult = dealership.euroCategory(4);
            assert.equal(expectedResult, actualResult);
        });
        it('should return a message with the discount when given category greater than 4', function () {
            const expectedResult = 'We have added 5% discount to the final price: 14250.';
            const actualResult = dealership.euroCategory(5);
            assert.equal(expectedResult, actualResult);
        });
    });
});