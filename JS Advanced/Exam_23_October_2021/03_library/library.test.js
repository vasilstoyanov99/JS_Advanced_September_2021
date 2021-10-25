const { assert } = require('chai');
const library = require('./library').library;

describe('library tests', function () {
    describe('calcPriceOfBook tests', function () {
        it('should throw an error when the given nameOfBook is not a string', function () {
            assert.throws(() => library.calcPriceOfBook(5, 5));
        });
        it('should throw an error when the given year is not an integer', function () {
            assert.throws(() => library.calcPriceOfBook('string', 5.20));
        });
        it('should throw an error when the given year is not an integer', function () {
            assert.throws(() => library.calcPriceOfBook(5.20, 5.20));
        });
        it('should return a message with discount when the given year which is equal to 1980', function () {
            const expectedResult = `Price of testBook is 10.00`;
            const actualResult = library.calcPriceOfBook('testBook', 1980);
            assert.equal(expectedResult, actualResult);
        });
        it('should return a message with discount when the given year which is less than 1980', function () {
            const expectedResult = `Price of testBook is 10.00`;
            const actualResult = library.calcPriceOfBook('testBook', 1979);
            assert.equal(expectedResult, actualResult);
        });
        it('should return a message with the default price when the given year which is greater than 1980', function () {
            const expectedResult = `Price of testBook is 20.00`;
            const actualResult = library.calcPriceOfBook('testBook', 1981);
            assert.equal(expectedResult, actualResult);
        });
    });
    describe('findBook tests', function () {
        it('should throw an error when given an empty array', function () {
            assert.throws(() => library.findBook([], 'Troy'));
        });
        it('should return success message when the desired book is found', function () {
            const expectedResult = 'We found the book you want.';
            const actualResult = library.findBook(['Troy', 'Life Style', 'Torronto'], 'Troy');
        });
        it('should return success message when the desired book is found', function () {
            const expectedResult = 'We found the book you want.';
            const actualResult = library.findBook(['Troy'], 'Troy');
        });
        it('should return an error message when the desired book is not found', function () {
            const expectedResult = 'The book you are looking for is not here!';
            const actualResult = library.findBook(['Troy', 'Life Style', 'Torronto'], 'NotAvailable');
            assert.equal(expectedResult, actualResult);
        });
    });
    describe('arrangeTheBooks tests', function () {
        it('should throw an error when the given countBooks is not an integer', function () {
            assert.throws(() => library.arrangeTheBooks('string'));
        });
        it('should throw an error when the given countBooks is not an integer', function () {
            assert.throws(() => library.arrangeTheBooks(5.20));
        });
        it('should throw an error when the given countBooks is a negative number', function () {
            assert.throws(() => library.arrangeTheBooks(-1));
        });
        it('should a success message when the given countBooks is equal to 40', function () {
            const expectedResult = 'Great job, the books are arranged.';
            const actualResult = library.arrangeTheBooks(40);
            assert.equal(expectedResult, actualResult);
        });
        it('should a success message when the given countBooks is less than 40', function () {
            const expectedResult = 'Great job, the books are arranged.';
            const actualResult = library.arrangeTheBooks(39);
            assert.equal(expectedResult, actualResult);
        });
        it('should an error message when the given countBooks is greater than 40', function () {
            const expectedResult = 'Insufficient space, more shelves need to be purchased.';
            const actualResult = library.arrangeTheBooks(41);
            assert.equal(expectedResult, actualResult);
        });
    });
});
