'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Endorsement = require('./build/Endorsement.json');

var _Endorsement2 = _interopRequireDefault(_Endorsement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_Endorsement2.default.interface),
//'0xec634F9a727b8E3A0159Cb374231e61F753cb8C1'
'0xf6a2D92b6d644f0dd43ADe46ceC655B53688ab4A');
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2Vkcy5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiZWRzIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQWdCLEFBQWhCOzs7Ozs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2hCLEtBQUssQUFBTCxNQUFXLHNCQUFJLEFBQWYsQUFEZ0I7QUFFaEI7QUFDQSxBQUhnQixBQUFqQixBQUtBO2tCQUFlLEFBQWYiLCJmaWxlIjoiZWRzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3N1amF0YS9Eb2N1bWVudHMvTWFzdGVycy1UaGVzaXMvZW5kb3JzZW1lbnRzIn0=