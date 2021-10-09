const { assert } = require('chai');
const lookupChar = require('../03_char_lookup').lookupChar;

describe('lookup char tests', function () {
    it('should return the correct char at given index from given string', function () {
        const expectedResult = 't';
        const actualResult = lookupChar('test', 0);
        assert.equal(expectedResult, actualResult);
    });
    it('should return the correct char at given index from given string', function () {
        const expectedResult = 'C';
        const actualResult = lookupChar('lookupCharTest', 6);
        assert.equal(expectedResult, actualResult);
    });
    it('should return undefined when given a parameter which type is not String', function () {
        const expectedResult = undefined;
        const actualResult = lookupChar(5, 0);
        assert.equal(expectedResult, actualResult);
    });
    it('should return undefined when given a index which type is not integer', function () {
        const expectedResult = undefined;
        const actualResult = lookupChar('test', 2.5);
        assert.equal(expectedResult, actualResult);
    });
    it('should return Incorrect index message when given a negative index', function () {
        const expectedResult = 'Incorrect index';
        const actualResult = lookupChar('t', -1);
        assert.equal(expectedResult, actualResult);
    });
    it('should return Incorrect index message when string parameter length is less then the given index', function () {
        const expectedResult = 'Incorrect index';
        const actualResult = lookupChar('t', 2);
        assert.equal(expectedResult, actualResult);
    });
    it('should return Incorrect index message when string parameter length is equal to then the given index', function () {
        const expectedResult = 'Incorrect index';
        const actualResult = lookupChar('t', 1);
        assert.equal(expectedResult, actualResult);
    });
});