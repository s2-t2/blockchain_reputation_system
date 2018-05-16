'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _participants = require('../../ethereum/participants');

var _participants2 = _interopRequireDefault(_participants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/sujata/Documents/Masters-Thesis/endorsements/pages/participants/show.js?entry';


var ParticipantShow = function (_Component) {
	(0, _inherits3.default)(ParticipantShow, _Component);

	function ParticipantShow() {
		(0, _classCallCheck3.default)(this, ParticipantShow);

		return (0, _possibleConstructorReturn3.default)(this, (ParticipantShow.__proto__ || (0, _getPrototypeOf2.default)(ParticipantShow)).apply(this, arguments));
	}

	(0, _createClass3.default)(ParticipantShow, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 26
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}, ' Participant show '));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var address, user, summary;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								//props.query.address=address of the actual participant that we show
								//console.log(props.query.address);
								address = props.query.address;
								user = (0, _participants2.default)(props.query.address);
								_context.next = 4;
								return user.methods.getProfile(address).call();

							case 4:
								summary = _context.sent;

								//const summary = await Endorsement.methods.getProfile(props.query.address).call();

								console.log(summary);

								return _context.abrupt('return', {});

							case 7:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return ParticipantShow;
}(_react.Component);

exports.default = ParticipantShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3BhcnRpY2lwYW50cy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiRW5kb3JzZW1lbnQiLCJQYXJ0aWNpcGFudFNob3ciLCJwcm9wcyIsImFkZHJlc3MiLCJxdWVyeSIsInVzZXIiLCJtZXRob2RzIiwiZ2V0UHJvZmlsZSIsImNhbGwiLCJzdW1tYXJ5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWlCOzs7Ozs7Ozs7SSxBQUVsQjs7Ozs7Ozs7Ozs7MkJBa0JLLEFBRVQ7OzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUZGLEFBQ0MsQUFDQyxBQUdGOzs7Ozt3R0F4QjRCLEE7Ozs7O1lBQzVCO0FBQ0E7QUFDTTtBLGtCQUFVLE1BQUEsQUFBTSxNQUFNLEEsQUFDdEI7QSxlQUFPLDRCQUFZLE1BQUEsQUFBTSxNQUFsQixBQUF3QixBOztlQUVmLEtBQUEsQUFBSyxRQUFMLEFBQWEsV0FBYixBQUF3QixTQUF4QixBQUFpQyxBOztZQUFqRDtBLDJCQUVOOztBQUVBOztnQkFBQSxBQUFRLElBQVIsQUFBWTs7eUNBRUwsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWJxQixBLEFBNEI5Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3N1amF0YS9Eb2N1bWVudHMvTWFzdGVycy1UaGVzaXMvZW5kb3JzZW1lbnRzIn0=