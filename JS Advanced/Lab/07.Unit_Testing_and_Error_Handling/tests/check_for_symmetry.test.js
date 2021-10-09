const { assert } = require('chai');
const isSymmetric = require('../05_check_for_symmetry').isSymmetric;

describe('check for symmetry tests',() => {
    it('should return true when given a symmetric array', () => {
        const expectedResult = true;
        const actualResult = isSymmetric(['a', 'a']);
        assert.equal(expectedResult, actualResult);
    });
    it('should return false when given a asymmetric array', () => {
        const expectedResult = false;
        const actualResult = isSymmetric(['a', 'b']);
        assert.equal(expectedResult, actualResult);
    });
    it('should return false the input is not an array ', () => {
        const expectedResult = false;
        const actualResult = isSymmetric('a');
        assert.equal(expectedResult, actualResult);
    });
    it('should return false when given a mixed-type array', () => {
        const expectedResult = false;
        const actualResult = isSymmetric([5, '5']);
        assert.equal(expectedResult, actualResult);
    });
})
