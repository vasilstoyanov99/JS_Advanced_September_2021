const { assert } = require('chai');
const numberOperations = require('./03_number_operations').numberOperations;

describe('numberOperations tests', function () {
    describe('powNumber test', function () {
        it('should return the power of the given input', function () {
            const expectedResult = 4;
            const actualResult = numberOperations.powNumber(2);
            assert.equal(expectedResult, actualResult);
        });
    });
    describe('numberChecker tests', function () {
        it('should throw an error when the given input is not a number', function () {
            assert.throws(() => numberOperations.numberChecker('string'));
        });
        it('should return "The number is lower than 100!" when given a number lower than 100', function () {
            const expectedResult = 'The number is lower than 100!';
            const actualResult = numberOperations.numberChecker(99);
            assert.equal(expectedResult, actualResult);
        });
        it('should return "The number is greater or equal to 100!" when given a number equal to 100', function () {
            const expectedResult = 'The number is greater or equal to 100!';
            const actualResult = numberOperations.numberChecker(100);
            assert.equal(expectedResult, actualResult);
        });
        it('should return "The number is greater or equal to 100!" when given a number greater to 100', function () {
            const expectedResult = 'The number is greater or equal to 100!';
            const actualResult = numberOperations.numberChecker(101);
            assert.equal(expectedResult, actualResult);
        });
    });
    describe('sumArrays tests', function () {
        it('should return array with the sum of the elements with equal indexes from both arrays which are with equal length', function () {
            const expectedResult = [2, 2];
            const actualResult = numberOperations.sumArrays([1, 1], [1, 1]);
            assert.deepEqual(expectedResult, actualResult);
        });
        it('should return array with the sum of the elements with equal indexes from both arrays where the first is longer than the second', function () {
            const expectedResult = [2, 2, 4];
            const actualResult = numberOperations.sumArrays([1, 1, 4], [1, 1]);
            assert.deepEqual(expectedResult, actualResult);
        });
    });
});