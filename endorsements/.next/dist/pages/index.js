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

var _semanticUiReact = require('semantic-ui-react');

var _eds = require('../ethereum/eds');

var _eds2 = _interopRequireDefault(_eds);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/sujata/Documents/Masters-Thesis/endorsements/pages/index.js?entry';


var ParticipantIndex = function (_Component) {
	(0, _inherits3.default)(ParticipantIndex, _Component);

	function ParticipantIndex() {
		(0, _classCallCheck3.default)(this, ParticipantIndex);

		return (0, _possibleConstructorReturn3.default)(this, (ParticipantIndex.__proto__ || (0, _getPrototypeOf2.default)(ParticipantIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(ParticipantIndex, [{
		key: 'renderParticipants',
		value: function renderParticipants() {
			var items = this.props.participants.map(function (address) {
				return {
					header: address,
					description: _react2.default.createElement(_routes.Link, { route: '/participants/' + address + '/', __source: {
							fileName: _jsxFileName,
							lineNumber: 21
						}
					}, _react2.default.createElement('a', {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 22
						}
					}, 'View Details ')),
					fluid: true
				};
			});

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 29
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			//return <div> {this.props.participants[0]} </div>
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, 'Get All Participants '), _react2.default.createElement(_routes.Link, { route: '/participants/new', __source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}, _react2.default.createElement(_semanticUiReact.Button, {
				floated: 'right',
				content: 'Join Network',
				icon: 'add circle',
				primary: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}))), this.renderParticipants()));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var participants;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _eds2.default.methods.getAllParticipants().call();

							case 2:
								participants = _context.sent;
								return _context.abrupt('return', { participants: participants });

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps() {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return ParticipantIndex;
}(_react.Component);

exports.default = ParticipantIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImVkcyIsIkxheW91dCIsIkxpbmsiLCJQYXJ0aWNpcGFudEluZGV4IiwiaXRlbXMiLCJwcm9wcyIsInBhcnRpY2lwYW50cyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyUGFydGljaXBhbnRzIiwibWV0aG9kcyIsImdldEFsbFBhcnRpY2lwYW50cyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7dUNBU2UsQUFDbkI7T0FBTSxhQUFRLEFBQUssTUFBTCxBQUFXLGFBQVgsQUFBd0IsSUFBSSxtQkFBVyxBQUNwRDs7YUFBTyxBQUNFLEFBQ1I7a0NBQ0MsQUFBQyw4QkFBSywwQkFBQSxBQUF3QixVQUE5QjtpQkFBQTttQkFBQSxBQUNDO0FBREQ7TUFBQSxrQkFDQyxjQUFBOztpQkFBQTttQkFBQTtBQUFBO0FBQUEsUUFKSSxBQUdMLEFBQ0MsQUFHRjtZQVBELEFBQU8sQUFPQyxBQUVSO0FBVE8sQUFDTjtBQUZGLEFBQWMsQUFZZCxJQVpjOzt3Q0FZUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO2VBQW5CO2lCQUFQLEFBQU8sQUFFUDtBQUZPO0lBQUE7Ozs7MkJBSUUsQUFDVDtBQUNBOzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQTtBQURBO0FBQUEsSUFBQSxrQkFDQSxjQUFBOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUdBLDBDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2VBQVo7aUJBQUEsQUFDQTtBQURBO3NCQUNBLGNBQUE7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsQUFBQzthQUFELEFBQ1MsQUFDUjthQUZELEFBRVcsQUFDVjtVQUhELEFBR1EsQUFDUDthQUpELEFBSVk7O2VBSlo7aUJBTkYsQUFJQyxBQUNBLEFBQ0MsQUFTQTtBQVRBO0FBQ0MsY0FUSixBQUNDLEFBQ0EsQUFlRSxBQUFLLEFBSVI7Ozs7Ozs7Ozs7OztlQTlDMkIsY0FBQSxBQUFJLFFBQUosQUFBWSxxQkFBWixBQUFpQyxBOztZQUF0RDtBO3lDQUNDLEVBQUMsY0FBRCxBQUFlLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKTyxBLEFBb0QvQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9zdWphdGEvRG9jdW1lbnRzL01hc3RlcnMtVGhlc2lzL2VuZG9yc2VtZW50cyJ9