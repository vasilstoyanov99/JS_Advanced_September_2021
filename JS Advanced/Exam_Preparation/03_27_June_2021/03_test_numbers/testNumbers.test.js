const { assert } = require('chai');
const testNumbers = require('./testNumbers').testNumbers;

describe('testNumbers tests', function () {
    describe('sumNumbers tests', function () {
        it('should return undefined when given num1 which is not number', function () {
            const expectedResult = undefined;
            const actualResult = testNumbers.sumNumbers('string', 5);
            assert.equal(expectedResult, actualResult);
        });
        it('should return undefined when given num2 which is not number', function () {
            const expectedResult = undefined;
            const actualResult = testNumbers.sumNumbers(5, 'string');
            assert.equal(expectedResult, actualResult);
        });
        it('should return the sum of the two given numbers rounded to rounded to second number after decimal point', function () {
            const expectedResult = '10.00';
            const actualResult = testNumbers.sumNumbers(5, 5);
            assert.equal(expectedResult, actualResult);
        });
        it('should return the sum of the two given negative numbers rounded to rounded to second number after decimal point', function () {
            const expectedResult = '-10.00';
            const actualResult = testNumbers.sumNumbers(-5, -5);
            assert.equal(expectedResult, actualResult);
        });
    });
    describe('numberChecker tests', function () {
        it('should return error when give a parameter which is not a number', function () {
            assert.throws(() => testNumbers.numberChecker('string'), 'The input is not a number!');
        });
        it('should return "The number is even!" when given an even number', function () {
            const expectedResult = 'The number is even!';
            const actualResult = testNumbers.numberChecker(6);
            assert.equal(expectedResult, actualResult);
        });
        it('should return "The number is odd!" when given a odd number', function () {
            const expectedResult = 'The number is odd!';
            const actualResult = testNumbers.numberChecker(7);
            assert.equal(expectedResult, actualResult);
        });
    });
    describe('averageSumArray tests', function () {
        it('should return the average of all elements from the input array', function () {
            const expectedResult = 5;
            const actualResult = testNumbers.averageSumArray([5, 5]);
            assert.equal(expectedResult, actualResult);
        });
    });
});