const { assert } = require('chai');
const isOddOrEven = require('../02_even_or_odd').isOddOrEven;

describe('is odd or even tests', function () {
    it('should return even when given a string with even length', function () {
        const expectedResult = 'even';
        const actualResult = isOddOrEven('evenTest');
        assert.equal(expectedResult, actualResult);
    });
    it('should return odd when given a string with odd length', function () {
        const expectedResult = 'odd';
        const actualResult = isOddOrEven('oddTest');
        assert.equal(expectedResult, actualResult);
    });
    it('should return undefined when given input which is not of type String', function () {
        const expectedResult = undefined;
        const actualResult = isOddOrEven(5);
        assert.equal(expectedResult, actualResult);
    });
});