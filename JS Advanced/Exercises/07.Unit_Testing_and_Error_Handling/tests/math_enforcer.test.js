const { assert } = require('chai');
const mathEnforcer = require('../04_math_enforcer').mathEnforcer;

describe('math enforcer tests', function () {
    it('should have three functions', function () {
        assert.isFunction(mathEnforcer.sum);
        assert.isFunction(mathEnforcer.addFive);
        assert.isFunction(mathEnforcer.subtractTen);
    });
    describe('addFive function tests', function () {
        it('should add 5 to the given positive number input and return the result', function () {
            const expectedResult = 15;
            const actualResult = mathEnforcer.addFive(10);
            assert.equal(expectedResult, actualResult);
        });
        it('should add 5 to the given negative number input and return the result', function () {
            const expectedResult = 15;
            const actualResult = mathEnforcer.addFive(-20);
            assert.equal(expectedResult, actualResult);
        });
        it('should add 5 to the given floating-point number input and return the result', function () {
            const expectedResult = 5.9;
            const actualResult = mathEnforcer.addFive(0.9);
            assert.closeTo(expectedResult, actualResult, 0.01);
        });
        it('should return undefined when the given input which type is not Number', function () {
            const expectedResult = undefined;
            const actualResult = mathEnforcer.addFive('10');
            assert.equal(expectedResult, actualResult);
        });
    });
    describe('subtractTen function tests', function () {
        it('should subtract 10 from the given positive number input and return the result', function () {
            const expectedResult = 15;
            const actualResult = mathEnforcer.subtractTen(25);
            assert.equal(expectedResult, actualResult);
        });
        it('should subtract 10 from the given negative number input and return the result', function () {
            const expectedResult = -15;
            const actualResult = mathEnforcer.subtractTen(-5);
            assert.equal(expectedResult, actualResult);
        });
        it('should subtract 10 from the given floating-point number input and return the result', function () {
            const expectedResult = 15.9;
            const actualResult = mathEnforcer.subtractTen(5.9);
            assert.closeTo(expectedResult, actualResult, 0.01);
        });
        it('should return undefined when the given input which type is not Number', function () {
            const expectedResult = undefined;
            const actualResult = mathEnforcer.subtractTen('15');
            assert.equal(expectedResult, actualResult);
        });
    });
    describe('sum function tests', function () {
        it('should sum the given two numbers and return the result', function () {
            const expectedResult = 15;
            const actualResult = mathEnforcer.sum(10, 5);
            assert.equal(expectedResult, actualResult);
        });
        it('should sum the given two negative numbers and return the result', function () {
            const expectedResult = -15;
            const actualResult = mathEnforcer.sum(-10, -5);
            assert.equal(expectedResult, actualResult);
        });
        it('should sum the given two floating-point numbers and return the result', function () {
            const expectedResult = 10.8;
            const actualResult = mathEnforcer.sum(5.4, 5.4);
            assert.closeTo(expectedResult, actualResult, 0.01);
        });
        it('should return undefined when the first input type is not Number', function () {
            const expectedResult = undefined;
            const actualResult = mathEnforcer.sum('10', 5);
            assert.equal(expectedResult, actualResult);
        });
        it('should return undefined when the second input type is not Number', function () {
            const expectedResult = undefined;
            const actualResult = mathEnforcer.sum(10, '5');
            assert.equal(expectedResult, actualResult);
        });
    });
});