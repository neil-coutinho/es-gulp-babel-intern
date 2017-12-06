"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cart = function () {
  function Cart() {
    _classCallCheck(this, Cart);

    // if(!name) {
    //   throw new Error('name parameter is missing');
    // }
    this.items = [];
  }

  _createClass(Cart, [{
    key: "getItems",
    value: function getItems() {
      return this.items;
    }
  }]);

  return Cart;
}();

exports.default = Cart;