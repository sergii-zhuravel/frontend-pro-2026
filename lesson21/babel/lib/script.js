"use strict";

var testFunction = function testFunction(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  return a + b;
};