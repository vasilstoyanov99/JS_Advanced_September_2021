const sum = require('../04_sum_of_numbers').sum;
const { assert } = require('chai');

describe('Sum of Numbers', function () {
    it('should return the sum of elements when give an array of Numbers',
        function () {
            const expectedResult = 50;
            const actualResult = sum([20, 30]);
        assert.equal(expectedResult, actualResult);
    });
    it('should return the sum of numbers in string format',
        function () {
        const expectedResult = 50;
        const actualResult = sum(['20', '30']);
        assert.equal(expectedResult, actualResult);
    });
    it('should return NaN with invalid input', function () {
        const expectedResult = 'NaN';
        const actualResult = sum('test').toString();
        assert.equal(expectedResult, actualResult);
    });
    it('should return zero when input is an empty array',
        function () {
        const expectedResult = 0;
        const actualResult = sum([]);
        assert.equal(expectedResult, actualResult);
    });
});