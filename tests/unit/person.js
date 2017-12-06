const { suite, test } = intern.getInterface('tdd');
const { assert } = intern.getPlugin('chai');
const { expect } = intern.getPlugin('chai');
const PERSON = require('../../src/commonjs/person.js');

// console.log(CART);
// let cart = new CART.default();
// console.log(cart);

suite('PERSON', () => {
  test('new component init', () => {
    //let cart = new Cart()
    assert.doesNotThrow(function(){new PERSON.default()});
  });

});
