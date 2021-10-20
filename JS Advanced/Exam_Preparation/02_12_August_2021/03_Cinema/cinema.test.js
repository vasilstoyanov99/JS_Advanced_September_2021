const { assert } = require('chai');
const cinema = require('./cinema').cinema;

describe('Tests', function() {
    describe('showMovies tests', function() {
        it('should return an error message when an empty array', function() {
            const expectedResult = 'There are currently no movies to show.';
            const actualResult = cinema.showMovies([]);
            assert.equal(expectedResult, actualResult);
        });
        it('should join the given array and return the result', function () {
            const expectedResult = 'test1, test2';
            const actualResult = cinema.showMovies(['test1', 'test2']);
            assert.equal(expectedResult, actualResult);
        });
    });
    describe('ticketPrice tests', function () {
        it('should throw an error when given an invalid parameter', function () {
            assert.throws(() => cinema.ticketPrice('invalid'), 'Invalid projection type.');
        });
        it('should return the correct price for Premiere ticket', function () {
            const expectedResult = 12.00;
            const actualResult = cinema.ticketPrice('Premiere');
            assert.equal(expectedResult, actualResult);
        });
        it('should return the correct price for Normal ticket', function () {
            const expectedResult = 7.50;
            const actualResult = cinema.ticketPrice('Normal');
            assert.equal(expectedResult, actualResult);
        });
        it('should return the correct price for Discount ticket', function () {
            const expectedResult = 5.50;
            const actualResult = cinema.ticketPrice('Discount');
            assert.equal(expectedResult, actualResult);
        });
    });
    describe('swapSeatsInHall', function () {
        const expectedResult = 'Unsuccessful change of seats in the hall.';
        it('should return an error message when given firstPlace which is not an integer', function () {
            const actualResult = cinema.swapSeatsInHall(5.50, 5);
            assert.equal(expectedResult, actualResult);
        });
        it('should return an error message when given secondPlace which is not an integer', function () {
            const actualResult = cinema.swapSeatsInHall(5, 5.50);
            assert.equal(expectedResult, actualResult);
        });
        it('should return an error message when given firstPlace which is a negative integer', function () {
            const actualResult = cinema.swapSeatsInHall(-1, 5);
            assert.equal(expectedResult, actualResult);
        });
        it('should return an error message when given secondPlace which is a negative integer', function () {
            const actualResult = cinema.swapSeatsInHall(5, -1);
            assert.equal(expectedResult, actualResult);
        });
        it('should return an error message when given firstPlace which is 0', function () {
            const actualResult = cinema.swapSeatsInHall(0, 5);
            assert.equal(expectedResult, actualResult);
        });
        it('should return an error message when given secondPlace which is 0', function () {
            const actualResult = cinema.swapSeatsInHall(5, 0);
            assert.equal(expectedResult, actualResult);
        });
        it('should return an error message when given firstPlace which is more than 20', function () {
            const actualResult = cinema.swapSeatsInHall(21, 5);
            assert.equal(expectedResult, actualResult);
        });
        it('should return an error message when given secondPlace which is more than 20', function () {
            const actualResult = cinema.swapSeatsInHall(5, 21);
            assert.equal(expectedResult, actualResult);
        });
        it('should return an error message when given firstPlace and secondPlace which are equal', function () {
            const actualResult = cinema.swapSeatsInHall(5, 5);
            assert.equal(expectedResult, actualResult);
        });
        it('should return a success message when given valid parameters', function () {
            const expectedResult = 'Successful change of seats in the hall.';
            const actualResult = cinema.swapSeatsInHall(5, 6);
            assert.equal(expectedResult, actualResult);
        });
    });
});