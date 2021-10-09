const { assert } = require('chai');
const rgbToHexColor = require('../06_rgb_to_hex').rgbToHexColor;

describe('rgb to hex tests', () => {
    it('should return #FFFFFF when given 255, 255, 255 input', () => {
        const expectedResult = '#FFFFFF';
        const actualResult = rgbToHexColor(255, 255, 255);
        assert.equal(expectedResult, actualResult);
    });
    it('should return undefined when the input value of red is 256', () => {
        const expectedResult = undefined;
        const actualResult = rgbToHexColor(256, 255, 255);
        assert.equal(expectedResult, actualResult);
    });
    it('should return undefined when the input value of green is 256', () => {
        const expectedResult = undefined;
        const actualResult = rgbToHexColor(255, 256, 255);
        assert.equal(expectedResult, actualResult);
    });
    it('should return undefined when the input value of blue is 256', () => {
        const expectedResult = undefined;
        const actualResult = rgbToHexColor(255, 255, 256);
        assert.equal(expectedResult, actualResult);
    });
    it('should return undefined when the input value of red is -1', () => {
        const expectedResult = undefined;
        const actualResult = rgbToHexColor(-1, 255, 255);
        assert.equal(expectedResult, actualResult);
    });
    it('should return undefined when the input value of green is -1', () => {
        const expectedResult = undefined;
        const actualResult = rgbToHexColor(255, -1, 255);
        assert.equal(expectedResult, actualResult);
    });
    it('should return undefined when the input value of blue is -1', () => {
        const expectedResult = undefined;
        const actualResult = rgbToHexColor(255, 255, -1);
        assert.equal(expectedResult, actualResult);
    });
    it('should return undefined when the input value of red is not a number', () => {
        const expectedResult = undefined;
        const actualResult = rgbToHexColor('r', 255, 255);
        assert.equal(expectedResult, actualResult);
    });
    it('should return undefined when the input value of green is not a number', () => {
        const expectedResult = undefined;
        const actualResult = rgbToHexColor(255, 'g', 255);
        assert.equal(expectedResult, actualResult);
    });
    it('should return undefined when the input value of blue is not a number', () => {
        const expectedResult = undefined;
        const actualResult = rgbToHexColor(255, 255, 'b');
        assert.equal(expectedResult, actualResult);
    });
});