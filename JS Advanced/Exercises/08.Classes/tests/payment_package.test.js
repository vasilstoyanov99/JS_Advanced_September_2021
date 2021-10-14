const { assert } = require('chai');
const PaymentPackage = require('../12_payment_package').PaymentPackage;

describe('Payment Package tests', function () {
    it('constructor should take only two parameters', function () {
        const expectedName = 'name';
        const expectedValue = 5;
        const instance = new PaymentPackage(expectedName, expectedValue);
        assert.equal(expectedName, instance.name);
        assert.equal(expectedValue, instance.value);
    });
    it('should be instantiated with VAT and active parameters with default values', function () {
        const expectedVAT = 20;
        const expectedActive = true;
        const instance = new PaymentPackage('name', 5);
        assert.equal(expectedVAT, instance.VAT);
        assert.equal(expectedActive, instance.active);
    });
    it('set name should throw an Error when given parameter which type is not string', function () {
        const instance = new PaymentPackage('name', 5);
        assert.throws(() => instance.name = 4, 'Name must be a non-empty string');
    });
    it('set name should throw an Error when given string with length 0', function () {
        const instance = new PaymentPackage('name', 5);
        assert.throws(() => instance.name = '', 'Name must be a non-empty string');
    });
    it('set name should work correctly when given valid parameter', function () {
        const instance = new PaymentPackage('name', 5);
        const expectedResult = 'testName';
        instance.name = expectedResult;
        assert.equal(expectedResult, instance.name);
    });
    it('set value should throw an Error when given parameter which type is not number', function () {
        const instance = new PaymentPackage('name', 5);
        assert.throws(() => instance.value = 'test', 'Value must be a non-negative number');
    });
    it('set value should throw an Error when given negative number', function () {
        const instance = new PaymentPackage('name', 5);
        assert.throws(() => instance.value = -1, 'Value must be a non-negative number');
    });
    it('set value should work correctly when given valid parameter', function () {
        const instance = new PaymentPackage('name', 5);
        const expectedResult = 6;
        instance.value = expectedResult;
        assert.equal(expectedResult, instance.value);
    });
    it('set VAT should throw an Error when given parameter which type is not number', function () {
        const instance = new PaymentPackage('name', 5);
        assert.throws(() => instance.VAT = 'test', 'VAT must be a non-negative number');
    });
    it('set VAT should throw an Error when given negative number', function () {
        const instance = new PaymentPackage('name', 5);
        assert.throws(() => instance.VAT = -1, 'VAT must be a non-negative number');
    });
    it('set VAT should work correctly when given valid parameter', function () {
        const instance = new PaymentPackage('name', 5);
        const expectedResult = 6;
        instance.VAT = expectedResult;
        assert.equal(expectedResult, instance.VAT);
    });
    it('set active should throw an Error when given parameter which type is not boolean', function () {
        const instance = new PaymentPackage('name', 5);
        assert.throws(() => instance.active = -1, 'Active status must be a boolean');
    });
    it('set active should work correctly when given valid parameter', function () {
        const instance = new PaymentPackage('name', 5);
        const expectedResult = true;
        instance.active = expectedResult;
        assert.equal(expectedResult, instance.active);
    });
    it('toString should work correctly with default values of VAT and active', function () {
        const value = 5;
        const defaultVAT = 20;
        const expectedVATValue = 6;
        const instance = new PaymentPackage('name', value);
        const expectedResult = [`Package: name`,
            `- Value (excl. VAT): ${value}`,
            `- Value (VAT ${defaultVAT}%): ${expectedVATValue}`]
            .join('\n');
        assert.equal(expectedResult, instance.toString());
    });
    it('toString should work correctly when VAT and active values is not default', function () {
        const value = 5;
        const vat = 30;
        const expectedVATValue = 6.5;
        const instance = new PaymentPackage('name', value);
        instance.VAT = vat;
        instance.active = false;
        const expectedResult = [`Package: name (inactive)`,
            `- Value (excl. VAT): ${value}`,
            `- Value (VAT ${vat}%): ${expectedVATValue}`]
            .join('\n');
        assert.equal(expectedResult, instance.toString());
    });
});