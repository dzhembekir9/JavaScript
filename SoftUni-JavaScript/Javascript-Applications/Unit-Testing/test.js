const assert = require('chai').assert;
const sum = require('./sumOfNumbers');

describe('Calc Sum', function () {
    it('Should return integer sum of numbers in an array', () => {
        // Arrange
        let arr = [1, 2, 3];

        // Act
        let result = sum(arr);

        // Assert
        assert.equal(result, 6);
    });
});
