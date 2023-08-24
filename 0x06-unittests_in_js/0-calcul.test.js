const calculateNumber = require("./0-calcul.js");
var assert = require('chai').assert;
assert.equal(calculateNumber(1, 3), 4)
assert.equal(calculateNumber(1, 3.7), 5)
assert.equal(calculateNumber(1.2, 3.7), 5)
