'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Endorsement = require('./build/Endorsement.json');

var _Endorsement2 = _interopRequireDefault(_Endorsement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//many different addresses as user visits different addresses
exports.default = function (address) {
	return new _web2.default.eth.Contract(JSON.parse(_Endorsement2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3BhcnRpY2lwYW50cy5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiRW5kb3JzZW1lbnQiLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUF3QixBQUF4Qjs7Ozs7O0FBRUEsQUFDQTtrQkFBZSxVQUFDLEFBQUQsU0FBYSxBQUMzQjtRQUFPLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNOLEtBQUssQUFBTCxNQUFXLHNCQUFZLEFBQXZCLEFBRE0sWUFDNkIsQUFEN0IsQUFBUCxBQUVBO0FBSEQiLCJmaWxlIjoicGFydGljaXBhbnRzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3N1amF0YS9Eb2N1bWVudHMvTWFzdGVycy1UaGVzaXMvZW5kb3JzZW1lbnRzIn0=