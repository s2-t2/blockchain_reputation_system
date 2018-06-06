'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _ConnectionRow = require('../../components/ConnectionRow');

var _ConnectionRow2 = _interopRequireDefault(_ConnectionRow);

var _OutRow = require('../../components/OutRow');

var _OutRow2 = _interopRequireDefault(_OutRow);

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
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this2);
		})), _this.onRemove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
			var accounts;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return _web2.default.eth.getAccounts();

						case 2:
							accounts = _context2.sent;
							_context2.next = 5;
							return _eds2.default.methods.removeEndorsement(_this.props.address).send({
								from: accounts[0]
							});

						case 5:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, _this2);
		})), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ParticipantShow, [{
		key: 'renderOutRows',
		value: function renderOutRows() {
			var _this3 = this;

			return this.props.outConns.map(function (outConns, index) {
				return _react2.default.createElement(_OutRow2.default, {
					key: index,
					outConns: outConns,
					id: index,
					address: _this3.props.address,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 93
					}
				});
			});
		}
	}, {
		key: 'renderRows',
		value: function renderRows() {
			var _this4 = this;

			return this.props.inConns.map(function (inConns, index) {
				return _react2.default.createElement(_ConnectionRow2.default, {
					key: index,
					inConns: inConns,
					id: index,
					address: _this4.props.address,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 106
					}
				});
			});
		}
	}, {
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
				style: { overflowWrap: 'break-word'
					//			{
					//				header: outConns,
					//				meta: 'Outgoing Connections',
					//				description: 'Array of addresses to whom the participant has endorsed',
					//				style: {overflowWrap: 'break-word'}
					//			},
					//			{
					//				header: inConns,
					//				meta:'Incoming Connections',
					//				description:'Array of addresses from whom the participant has received endorsement',
					//				style: {overflowWrap:'break-word'}
					//			}
				} }];
			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 188
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var Header = _semanticUiReact.Table.Header,
			    Row = _semanticUiReact.Table.Row,
			    HeaderCell = _semanticUiReact.Table.HeaderCell,
			    Body = _semanticUiReact.Table.Body;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 195
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 196
				}
			}, ' Participant Details '), _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 197
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 15, __source: {
					fileName: _jsxFileName,
					lineNumber: 198
				}
			}, this.renderCards())), _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 202
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 203
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onHandleClick, __source: {
					fileName: _jsxFileName,
					lineNumber: 204
				}
			}, 'Endorse this Participant!'), _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onRemove, __source: {
					fileName: _jsxFileName,
					lineNumber: 207
				}
			}, 'Remove Endorsement'))), _react2.default.createElement(_semanticUiReact.Table, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 212
				}
			}, _react2.default.createElement(Header, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 213
				}
			}, _react2.default.createElement(Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 214
				}
			}, _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 215
				}
			}, 'ID'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 216
				}
			}, 'IncomingConnections'))), _react2.default.createElement(Body, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 219
				}
			}, this.renderRows())), _react2.default.createElement(_semanticUiReact.Table, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 223
				}
			}, _react2.default.createElement(Header, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 224
				}
			}, _react2.default.createElement(Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 225
				}
			}, _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 226
				}
			}, 'ID'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 227
				}
			}, 'Outgoing Connections'))), _react2.default.createElement(Body, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 230
				}
			}, this.renderOutRows())));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
				var accounts, address, user, summary, impact, index, name, givenTo, receivedFrom, givenToCount, receivedFromCount, outConns, inConns;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_context3.next = 2;
								return _web2.default.eth.getAccounts();

							case 2:
								accounts = _context3.sent;

								//props.query.address=address of the actual participant that we show
								//console.log(props.query.address);
								address = props.query.address;
								user = (0, _participants2.default)(props.query.address);
								_context3.next = 7;
								return _eds2.default.methods.getProfile(props.query.address).call();

							case 7:
								summary = _context3.sent;
								_context3.next = 10;
								return _eds2.default.methods.computeImpact(props.query.address).call();

							case 10:
								impact = _context3.sent;
								_context3.next = 13;
								return _eds2.default.methods.getParticipantIndex(props.query.address).call();

							case 13:
								index = _context3.sent;
								_context3.next = 16;
								return _eds2.default.methods.participants(index).call();

							case 16:
								name = _context3.sent;
								_context3.next = 19;
								return _eds2.default.methods.getGivenTo(props.query.address).call();

							case 19:
								givenTo = _context3.sent;
								_context3.next = 22;
								return _eds2.default.methods.getReceivedFrom(props.query.address).call();

							case 22:
								receivedFrom = _context3.sent;
								givenToCount = givenTo.length;
								receivedFromCount = receivedFrom.length;
								_context3.next = 27;
								return _promise2.default.all(Array(givenToCount).fill().map(function (element, index) {
									return givenTo[index];
								}));

							case 27:
								outConns = _context3.sent;
								_context3.next = 30;
								return _promise2.default.all(Array(receivedFromCount).fill().map(function (element, index) {
									return receivedFrom[index];
								}));

							case 30:
								inConns = _context3.sent;
								return _context3.abrupt('return', {
									index: index,
									name: name[1],
									address: props.query.address,
									impact: impact / 1000000000000000000000000000,

									outDegree: summary[0],
									usedPower: summary[1] / 1000000000,
									//	outConns: summary[2],

									inDegree: summary[3],
									receivedPoints: summary[4] / 1000000000,
									//	inConns: summary[5]
									inConns: inConns,
									outConns: outConns
								});

							case 32:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function getInitialProps(_x) {
				return _ref4.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return ParticipantShow;
}(_react.Component);

exports.default = ParticipantShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3BhcnRpY2lwYW50cy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJHcm91cCIsIkdyaWQiLCJUYWJsZSIsIkxheW91dCIsIkVuZG9yc2VtZW50IiwiQ29ubmVjdGlvblJvdyIsIk91dFJvdyIsImVkcyIsIndlYjMiLCJQYXJ0aWNpcGFudFNob3ciLCJvbkhhbmRsZUNsaWNrIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJlbmRvcnNlIiwicHJvcHMiLCJpbmRleCIsInNlbmQiLCJmcm9tIiwib25SZW1vdmUiLCJyZW1vdmVFbmRvcnNlbWVudCIsImFkZHJlc3MiLCJvdXRDb25ucyIsIm1hcCIsImluQ29ubnMiLCJvdXREZWdyZWUiLCJ1c2VkUG93ZXIiLCJpbkRlZ3JlZSIsInJlY2VpdmVkUG9pbnRzIiwiaW1wYWN0IiwibmFtZSIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlckNhcmRzIiwicmVuZGVyUm93cyIsInJlbmRlck91dFJvd3MiLCJxdWVyeSIsInVzZXIiLCJnZXRQcm9maWxlIiwiY2FsbCIsInN1bW1hcnkiLCJjb21wdXRlSW1wYWN0IiwiZ2V0UGFydGljaXBhbnRJbmRleCIsInBhcnRpY2lwYW50cyIsImdldEdpdmVuVG8iLCJnaXZlblRvIiwiZ2V0UmVjZWl2ZWRGcm9tIiwicmVjZWl2ZWRGcm9tIiwiZ2l2ZW5Ub0NvdW50IiwibGVuZ3RoIiwicmVjZWl2ZWRGcm9tQ291bnQiLCJhbGwiLCJBcnJheSIsImZpbGwiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNm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Y0FBQSxBQUFJLFFBQUosQUFBWSxjQUFjLE1BQUEsQUFBTSxNQUFoQyxBQUFzQyxTQUF0QyxBQUErQyxBOztZQUE5RDtBOztlQUNjLGNBQUEsQUFBSSxRQUFKLEFBQVksb0JBQW9CLE1BQUEsQUFBTSxNQUF0QyxBQUE0QyxTQUE1QyxBQUFxRCxBOztZQUFuRTtBOztlQUNhLGNBQUEsQUFBSSxRQUFKLEFBQVksYUFBWixBQUF5QixPQUF6QixBQUFnQyxBOztZQUE3QztBOztlQUVnQixjQUFBLEFBQUksUUFBSixBQUFZLFdBQVcsTUFBQSxBQUFNLE1BQTdCLEFBQW1DLFNBQW5DLEFBQTRDLEE7O1lBQTVEO0E7O2VBQ3FCLGNBQUEsQUFBSSxRQUFKLEFBQVksZ0JBQWdCLE1BQUEsQUFBTSxNQUFsQyxBQUF3QyxTQUF4QyxBQUFpRCxBOztZQUF0RTtBLGlDQUVBO0EsdUJBQWUsUUFDZixBLEFBRHVCO0EsNEJBQ0gsYUFBYSxBOztpQ0FFaEIsQUFBUSxVQUM5QixBQUFNLGNBQU4sQUFDRSxPQURGLEFBRUUsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFTLE9BQVUsQUFDdkI7Z0JBQU8sUUFBUCxBQUFPLEFBQVEsQUFDZjtBQUxvQixBQUN0QixBLFNBQUEsQ0FEc0I7O1lBQWpCO0E7O2lDQVVnQixBQUFRLFVBQzdCLEFBQU0sbUJBQU4sQUFDRSxPQURGLEFBRUUsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFTLE9BQVMsQUFDdEI7Z0JBQU8sYUFBUCxBQUFPLEFBQWEsQUFDcEI7QUFKRixBLEFBRHFCLFNBQ3JCLENBRHFCOztZQUFoQjtBOztnQkFVQyxBQUNDLEFBQ1A7ZUFBTSxLQUZBLEFBRUEsQUFBSyxBQUNYO2tCQUFTLE1BQUEsQUFBTSxNQUhULEFBR2UsQUFDckI7aUJBQVEsU0FKRixBQUlTLEFBRWY7O29CQUFXLFFBTkwsQUFNSyxBQUFRLEFBQ25CO29CQUFXLFFBQUEsQUFBUSxLQVBiLEFBT2dCLEFBQ3ZCO0FBRUM7O21CQUFVLFFBVkosQUFVSSxBQUFRLEFBQ2xCO3lCQUFnQixRQUFBLEFBQVEsS0FYbEIsQUFXcUIsQUFDNUI7QUFDQztrQkFiTSxBQWNOO21CQWRNLEE7QUFBQSxBQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBekMyQixBLEFBb085Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3N1amF0YS9Eb2N1bWVudHMvTWFzdGVycy1UaGVzaXMvZW5kb3JzZW1lbnRzIn0=