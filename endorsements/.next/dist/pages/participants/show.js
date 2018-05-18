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

var _participants = require('../../ethereum/participants');

var _participants2 = _interopRequireDefault(_participants);

var _eds = require('../../ethereum/eds');

var _eds2 = _interopRequireDefault(_eds);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/sujata/Documents/Masters-Thesis/endorsements/pages/participants/show.js?entry';

//import Endorse from '../../components/Endorse';

var ParticipantShow = function (_Component) {
	(0, _inherits3.default)(ParticipantShow, _Component);

	function ParticipantShow() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ParticipantShow);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ParticipantShow.__proto__ || (0, _getPrototypeOf2.default)(ParticipantShow)).call.apply(_ref, [this].concat(args))), _this), _this.onHandleClick = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			var accounts;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return _web2.default.eth.getAccounts();

						case 2:
							accounts = _context.sent;
							_context.next = 5;
							return _eds2.default.methods.endorse(_this.props.index).send({
								from: accounts[0]
							});

						case 5:

							console.log("hello");
						//console.log(this.props.address);

						case 6:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this2);
		})), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ParticipantShow, [{
		key: 'renderCards',
		value: function renderCards() {
			var _props = this.props,
			    outDegree = _props.outDegree,
			    usedPower = _props.usedPower,
			    outConns = _props.outConns,
			    inDegree = _props.inDegree,
			    receivedPoints = _props.receivedPoints,
			    inConns = _props.inConns,
			    impact = _props.impact,
			    name = _props.name;

			var items = [{
				header: this.props.address,
				meta: 'Public key used when joining the network',
				description: 'Public key of the participant',
				style: { overflowWrap: 'break-word' }

			}, {
				header: name,
				meta: 'User Name',
				description: 'Pseudonym used when joining the network',
				style: { overflowWrap: 'break-word' }

			}, {
				header: outDegree,
				meta: 'nEG',
				description: 'Degree of Outgoing connections',
				style: { overflowWrap: 'break-word' }
			}, {
				header: usedPower,
				meta: 'consumed Points',
				description: 'Amount of points already consumed',
				style: { overflowWrap: 'break-word' }
			}, {
				header: inDegree,
				meta: 'nER',
				description: 'Degree of Incoming Connections',
				style: { overflowWrap: 'break-word' }
			}, {
				header: receivedPoints,
				meta: 'Received Endorsement Points',
				description: 'Sum of all the endorsement points received',
				style: { overflowWrap: 'break-word' }
			}, {
				header: impact,
				meta: 'Endorsement Impact',
				description: 'Total Endorsement Impact made by the participant',
				style: { overflowWrap: 'break-word' }
			}, {
				header: outConns,
				meta: 'Outgoing Connections',
				description: 'Array of addresses to whom the participant has endorsed',
				style: { overflowWrap: 'break-word' }
			}, {
				header: inConns,
				meta: 'Incoming Connections',
				description: 'Array of addresses from whom the participant has received endorsement',
				style: { overflowWrap: 'break-word' }
			}];
			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 126
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 132
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 133
				}
			}, ' Participant Details '), _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 134
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 135
				}
			}, this.renderCards())), _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 139
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 15, __source: {
					fileName: _jsxFileName,
					lineNumber: 140
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onHandleClick, __source: {
					fileName: _jsxFileName,
					lineNumber: 141
				}
			}, 'Endorse this Participant!'))));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
				var accounts, address, user, summary, impact, index, name;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return _web2.default.eth.getAccounts();

							case 2:
								accounts = _context2.sent;

								//props.query.address=address of the actual participant that we show
								//console.log(props.query.address);
								address = props.query.address;
								user = (0, _participants2.default)(props.query.address);
								_context2.next = 7;
								return _eds2.default.methods.getProfile(props.query.address).call();

							case 7:
								summary = _context2.sent;
								_context2.next = 10;
								return _eds2.default.methods.computeImpact(props.query.address).call();

							case 10:
								impact = _context2.sent;
								_context2.next = 13;
								return _eds2.default.methods.getParticipantIndex(props.query.address).call();

							case 13:
								index = _context2.sent;
								_context2.next = 16;
								return _eds2.default.methods.participants(index).call();

							case 16:
								name = _context2.sent;
								return _context2.abrupt('return', {
									index: index,
									name: name[1],
									address: props.query.address,
									impact: impact,

									outDegree: summary[0],
									usedPower: summary[1],
									outConns: summary[2],

									inDegree: summary[3],
									receivedPoints: summary[4],
									inConns: summary[5]
								});

							case 18:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getInitialProps(_x) {
				return _ref3.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return ParticipantShow;
}(_react.Component);

exports.default = ParticipantShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3BhcnRpY2lwYW50cy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJHcm91cCIsIkdyaWQiLCJMYXlvdXQiLCJFbmRvcnNlbWVudCIsImVkcyIsIndlYjMiLCJQYXJ0aWNpcGFudFNob3ciLCJvbkhhbmRsZUNsaWNrIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJlbmRvcnNlIiwicHJvcHMiLCJpbmRleCIsInNlbmQiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsIm91dERlZ3JlZSIsInVzZWRQb3dlciIsIm91dENvbm5zIiwiaW5EZWdyZWUiLCJyZWNlaXZlZFBvaW50cyIsImluQ29ubnMiLCJpbXBhY3QiLCJuYW1lIiwiaXRlbXMiLCJoZWFkZXIiLCJhZGRyZXNzIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJyZW5kZXJDYXJkcyIsInF1ZXJ5IiwidXNlciIsImdldFByb2ZpbGUiLCJjYWxsIiwic3VtbWFyeSIsImNvbXB1dGVJbXBhY3QiLCJnZXRQYXJ0aWNpcGFudEluZGV4IiwicGFydGljaXBhbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUyxBQUFNLEFBQVEsQUFBTSxBQUFPLEFBQVMsQUFBTzs7QUFDcEQsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBVTs7Ozs7Ozs7QUFDakI7O0lBRU0sQTs7Ozs7Ozs7Ozs7Ozs7OzROQWdDTCxBLHlGQUFnQixtQkFBQTtPQUFBO2lFQUFBO2NBQUE7c0NBQUE7V0FBQTt1QkFBQTtjQUNRLGNBQUEsQUFBSyxJQURiLEFBQ1EsQUFBUzs7V0FBMUI7QUFEUywyQkFBQTt1QkFB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QUFVLE1BQUEsQUFBTSxNQUFNLEFBQ3RCLEE7QSxlQUFPLDRCQUFZLE1BQUEsQUFBTSxNLEFBQWxCLEFBQXdCOztlQUVmLGNBQUEsQUFBSSxRQUFKLEFBQVksV0FBVyxNQUFBLEFBQU0sTUFBN0IsQUFBbUMsUyxBQUFuQyxBQUE0Qzs7WUFBNUQ7QTs7ZUFDZSxjQUFBLEFBQUksUUFBSixBQUFZLGNBQWMsTUFBQSxBQUFNLE1BQWhDLEFBQXNDLFMsQUFBdEMsQUFBK0M7O1lBQTlEO0E7O2VBQ2MsY0FBQSxBQUFJLFFBQUosQUFBWSxvQkFBb0IsTUFBQSxBQUFNLE1BQXRDLEFBQTRDLFNBQTVDLEFBQXFELEE7O1lBQW5FO0E7O2VBQ2EsY0FBQSxBQUFJLFFBQUosQUFBWSxhQUFaLEFBQXlCLE9BQXpCLEFBQWdDLEE7O1lBQTdDO0E7O2dCQUVDLEFBQ0MsQUFDUDtlQUFNLEtBRkEsQUFFQSxBQUFLLEFBQ1g7a0JBQVMsTUFBQSxBQUFNLE1BSFQsQUFHZSxBQUNyQjtpQkFKTSxBQUlFLEFBRVI7O29CQUFXLFFBTkwsQUFNSyxBQUFRLEFBQ25CO29CQUFXLFFBUEwsQUFPSyxBQUFRLEFBQ25CO21CQUFVLFFBUkosQUFRSSxBQUFRLEFBRWxCOzttQkFBVSxRQVZKLEFBVUksQUFBUSxBQUNsQjt5QkFBZ0IsUUFYVixBQVdVLEFBQVEsQUFDeEI7a0JBQVMsUUFaSCxBQVlHLEFBQVEsQTtBQVpYLEFBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFmMkIsQSxBQThJOUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9zdWphdGEvRG9jdW1lbnRzL01hc3RlcnMtVGhlc2lzL2VuZG9yc2VtZW50cyJ9