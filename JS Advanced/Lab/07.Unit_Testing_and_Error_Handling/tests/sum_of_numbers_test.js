const sum = require('../04_sum_of_numbers').sum;
const { expect } = require('chai');

describe('Sum of Numbers', function () {
    it('all elements are type Number', function () {
        const actualResult = sum([20, 30]);
        const expectedResult = 50;
        expect(actualResult.to.be.equal(expectedResult));
    });
});