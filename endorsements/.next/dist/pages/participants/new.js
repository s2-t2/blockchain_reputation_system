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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _eds = require('../../ethereum/eds');

var _eds2 = _interopRequireDefault(_eds);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/sujata/Documents/Masters-Thesis/endorsements/pages/participants/new.js?entry';


var ParticipantNew = function (_Component) {
	(0, _inherits3.default)(ParticipantNew, _Component);

	function ParticipantNew() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ParticipantNew);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ParticipantNew.__proto__ || (0, _getPrototypeOf2.default)(ParticipantNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			pseudonym: '',
			errorMessage: '',
			loading: false
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var accounts;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();

								_this.setState({ loading: true, errorMessage: '' });

								_context.prev = 2;
								_context.next = 5;
								return _web2.default.eth.getAccounts();

							case 5:
								accounts = _context.sent;
								_context.next = 8;
								return _eds2.default.methods.joinNetwork(_this.state.pseudonym).send({
									from: accounts[0]
								});

							case 8:

								_routes.Router.pushRoute('/');

								_context.next = 14;
								break;

							case 11:
								_context.prev = 11;
								_context.t0 = _context['catch'](2);

								_this.setState({ errorMessage: _context.t0.message });

							case 14:
								_this.setState({ loading: false });

							case 15:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[2, 11]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ParticipantNew, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, ' New Participant '), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, 'Pseudonym'), _react2.default.createElement(_semanticUiReact.Input, {
				label: 'User Name',
				labelPosition: 'right',
				value: this.state.pseudonym,
				onChange: function onChange(event) {
					return _this3.setState({ pseudonym: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			})), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, 'Join!!')));
		}
	}]);

	return ParticipantNew;
}(_react.Component);

exports.default = ParticipantNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3BhcnRpY2lwYW50cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiTGF5b3V0IiwiZWRzIiwid2ViMyIsIlJvdXRlciIsIlBhcnRpY2lwYW50TmV3Iiwic3RhdGUiLCJwc2V1ZG9ueW0iLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImpvaW5OZXR3b3JrIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVEsQUFBTzs7QUFDOUIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0lBRWpCLEE7Ozs7Ozs7Ozs7Ozs7OzswTkFDTCxBO2NBQVEsQUFDSSxBQUNYO2lCQUZPLEFBRU8sQUFDZDtZQUhPLEEsQUFHRTtBQUhGLEFBQ1AsVyxBQUtEO3dGQUFXLGlCQUFBLEFBQU8sT0FBUDtRQUFBO2tFQUFBO2VBQUE7dUNBQUE7WUFDVjtjQUFBLEFBQU0sQUFFTjs7Y0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUhyQixBQUdWLEFBQWMsQUFBOEI7O3dCQUhsQzt3QkFBQTtlQVFhLGNBQUEsQUFBSyxJQVJsQixBQVFhLEFBQVM7O1lBQTFCO0FBUkksNEJBQUE7d0JBQUE7NkJBVUosQUFBSSxRQUFKLEFBQ0osWUFBWSxNQUFBLEFBQUssTUFEYixBQUNtQixXQURuQixBQUVKO2VBQ00sU0FiRSxBQVVKLEFBRUMsQUFDQyxBQUFTO0FBRFYsQUFDTCxTQUhJOztZQU1MOzt1QkFBQSxBQUFPLFVBaEJFLEFBZ0JULEFBQWlCOzt3QkFoQlI7QUFBQTs7WUFBQTt3QkFBQTt3Q0FvQlQ7O2NBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQXBCckIsQUFvQlQsQUFBYyxBQUFvQjs7WUFFbkM7Y0FBQSxBQUFLLFNBQVMsRUFBRSxTQXRCTixBQXNCVixBQUFjLEFBQVc7O1lBdEJmO1lBQUE7d0JBQUE7O0FBQUE7NkJBQUE7QTs7Ozs7Ozs7OzsyQkEwQkQ7Z0JBQ1Q7OzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFFQSxzQ0FBQSxBQUFDLHVDQUFLLFVBQVksS0FBbEIsQUFBdUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBL0MsQUFBcUQ7ZUFBckQ7aUJBQUEsQUFDQztBQUREO3NCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSw4QkFBQSxBQUFDO1dBQUQsQUFDTyxBQUNOO21CQUZELEFBRWUsQUFDZDtXQUFPLEtBQUEsQUFBSyxNQUhiLEFBR21CLEFBQ2xCO2NBQVUseUJBQUE7WUFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLFdBQVcsTUFBQSxBQUFNLE9BQTFDLEFBQVMsQUFBYyxBQUEwQjtBQUo1RDs7ZUFBQTtpQkFIRixBQUNDLEFBRUMsQUFRRDtBQVJDO0FBQ0Msd0JBT0YsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO2VBQWxEO2lCQVhELEFBV0MsQUFDQTtBQURBO3VCQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBVSxTQUF0QztlQUFBO2lCQUFBO0FBQUE7TUFoQkgsQUFDQyxBQUdDLEFBWUMsQUFTSDs7Ozs7QUEzRDJCLEEsQUE4RDdCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9zdWphdGEvRG9jdW1lbnRzL01hc3RlcnMtVGhlc2lzL2VuZG9yc2VtZW50cyJ9