const { suite, test } = intern.getInterface('tdd');
const { assert } = intern.getPlugin('chai');
const { expect } = intern.getPlugin('chai');
const CART = require('../../src/commonjs/cart.js');

// console.log(CART);
// let cart = new CART.default();
// console.log(cart);

suite('CART', () => {
  test('new component init', () => {
    //let cart = new Cart()
    assert.doesNotThrow(function(){new CART.default()});
  });

});
