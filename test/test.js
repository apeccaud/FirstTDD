const assert = require('assert');
const returnRomanNumeralForDigit = require('../index');

describe('Test', function() {
    it('1 = 1', function() {
        assert.equal(1, 1);
    })
});

describe('Roman numerals', function() {
    it('1 must return I', function() {
        assert.equal(returnRomanNumeralForDigit(1), "I");
    });
    it('2 must return II', function() {
        assert.equal(returnRomanNumeralForDigit(2), "II");
    });
    it('5 must return V', function() {
        assert.equal(returnRomanNumeralForDigit(5), "V");
    });
    it('7 must return VII', function() {
        assert.equal(returnRomanNumeralForDigit(7), "VII");
    });
    it('10 must return X', function() {
        assert.equal(returnRomanNumeralForDigit(10), "X");
    });
    it('11 must return XI', function() {
        assert.equal(returnRomanNumeralForDigit(11), "XI");
    });
    it('15 must return XV', function() {
        assert.equal(returnRomanNumeralForDigit(15), "XV");
    });
    it('17 must return XVII', function() {
        assert.equal(returnRomanNumeralForDigit(17), "XVII");
    });
    it('50 must return L', function() {
        assert.equal(returnRomanNumeralForDigit(50), "L");
    });
    it('73 must return LXXIII', function() {
        assert.equal(returnRomanNumeralForDigit(73), "LXXIII");
    });
});