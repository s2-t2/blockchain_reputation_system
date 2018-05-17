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

var _Endorse = require('../../components/Endorse');

var _Endorse2 = _interopRequireDefault(_Endorse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/sujata/Documents/Masters-Thesis/endorsements/pages/participants/show.js?entry';


var ParticipantShow = function (_Component) {
	(0, _inherits3.default)(ParticipantShow, _Component);

	function ParticipantShow() {
		(0, _classCallCheck3.default)(this, ParticipantShow);

		return (0, _possibleConstructorReturn3.default)(this, (ParticipantShow.__proto__ || (0, _getPrototypeOf2.default)(ParticipantShow)).apply(this, arguments));
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
					lineNumber: 119
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 125
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 126
				}
			}, ' Participant Details '), _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 127
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 128
				}
			}, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
					fileName: _jsxFileName,
					lineNumber: 131
				}
			}, _react2.default.createElement(_Endorse2.default, { id: this.props.index, __source: {
					fileName: _jsxFileName,
					lineNumber: 132
				}
			}))));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var user, summary, impact, index, name;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								//props.query.address=address of the actual participant that we show
								//console.log(props.query.address);
								//const address = props.query.address;
								user = (0, _participants2.default)(props.query.address);
								_context.next = 3;
								return _eds2.default.methods.getProfile(props.query.address).call();

							case 3:
								summary = _context.sent;
								_context.next = 6;
								return _eds2.default.methods.computeImpact(props.query.address).call();

							case 6:
								impact = _context.sent;
								_context.next = 9;
								return _eds2.default.methods.getParticipantIndex(props.query.address).call();

							case 9:
								index = _context.sent;
								_context.next = 12;
								return _eds2.default.methods.participants(index).call();

							case 12:
								name = _context.sent;
								return _context.abrupt('return', {
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

							case 14:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3BhcnRpY2lwYW50cy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJHcm91cCIsIkdyaWQiLCJMYXlvdXQiLCJFbmRvcnNlbWVudCIsImVkcyIsIndlYjMiLCJFbmRvcnNlIiwiUGFydGljaXBhbnRTaG93IiwicHJvcHMiLCJvdXREZWdyZWUiLCJ1c2VkUG93ZXIiLCJvdXRDb25ucyIsImluRGVncmVlIiwicmVjZWl2ZWRQb2ludHMiLCJpbkNvbm5zIiwiaW1wYWN0IiwibmFtZSIsIml0ZW1zIiwiaGVhZGVyIiwiYWRkcmVzcyIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyQ2FyZHMiLCJpbmRleCIsInVzZXIiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRQcm9maWxlIiwiY2FsbCIsInN1bW1hcnkiLCJjb21wdXRlSW1wYWN0IiwiZ2V0UGFydGljaXBhbnRJbmRleCIsInBhcnRpY2lwYW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVMsQUFBTSxBQUFRLEFBQU0sQUFBTyxBQUFTLEFBQU87O0FBQ3BELEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFhOzs7Ozs7Ozs7SSxBQUVkOzs7Ozs7Ozs7OztnQ0F1Q1U7Z0JBVVYsS0FWVSxBQVVMO09BVkssQUFFYixtQkFGYSxBQUViO09BRmEsQUFHYixtQkFIYSxBQUdiO09BSGEsQUFJYixrQkFKYSxBQUliO09BSmEsQUFLYixrQkFMYSxBQUtiO09BTGEsQUFNYix3QkFOYSxBQU1iO09BTmEsQUFPYixpQkFQYSxBQU9iO09BUGEsQUFRYixnQkFSYSxBQVFiO09BUmEsQUFTYixjQVRhLEFBU2IsQUFJRDs7T0FBTTtZQUVHLEtBQUEsQUFBSyxNQURiLEFBQ21CLEFBQ2xCO1VBRkQsQUFFTSxBQUNMO2lCQUhELEFBR2MsQUFDYjtXQUFPLEVBQUMsY0FMSSxBQUNiLEFBSVEsQUFBZTs7QUFKdkIsQUFDQyxJQUZZO1lBUWIsQUFDUyxBQUNSO1VBRkQsQUFFTyxBQUNOO2lCQUhELEFBR2MsQUFDYjtXQUFPLEVBQUMsY0FaSSxBQVFiLEFBSVEsQUFBZTs7QUFKdkIsQUFDQztZQU1ELEFBQ1MsQUFDUjtVQUZELEFBRU8sQUFDTjtpQkFIRCxBQUdhLEFBQ1o7V0FBTyxFQUFDLGNBbkJJLEFBZWIsQUFJUSxBQUFlO0FBSnZCLEFBQ0M7WUFLRCxBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBSEQsQUFHYSxBQUNaO1dBQU8sRUFBQyxjQXpCSSxBQXFCYixBQUlRLEFBQWU7QUFKdkIsQUFDQztZQUtELEFBQ1MsQUFDUjtVQUZELEFBRU8sQUFDTjtpQkFIRCxBQUdhLEFBQ1o7V0FBTyxFQUFDLGNBL0JJLEFBMkJiLEFBSVEsQUFBYztBQUp0QixBQUNDO1lBS0QsQUFDUyxBQUNSO1VBRkQsQUFFTyxBQUNOO2lCQUhELEFBR2MsQUFDYjtXQUFPLEVBQUMsY0FyQ0ksQUFpQ2IsQUFJUSxBQUFjO0FBSnRCLEFBQ0M7WUFLRCxBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBSEQsQUFHYyxBQUNiO1dBQU8sRUFBQyxjQTNDSSxBQXVDYixBQUlRLEFBQWM7QUFKdEIsQUFDQztZQUtELEFBQ1MsQUFDUjtVQUZELEFBRU8sQUFDTjtpQkFIRCxBQUdjLEFBQ2I7V0FBTyxFQUFDLGNBakRJLEFBNkNiLEFBSVEsQUFBZTtBQUp2QixBQUNDO1lBS0QsQUFDUyxBQUNSO1VBRkQsQUFFTSxBQUNMO2lCQUhELEFBR2EsQUFDWjtXQUFPLEVBQUMsY0F2RFYsQUFBYyxBQW1EYixBQUlRLEFBQWMsQUFHdkI7QUFQQyxBQUNDO3dDQU1LLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7ZUFBbkI7aUJBQVAsQUFBTyxBQUNQO0FBRE87SUFBQTs7OzsyQkFHRSxBQUVUOzswQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0EsMENBQUEsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO2VBQXBCO2lCQUFBLEFBQ0U7QUFERjtXQURELEFBQ0MsQUFDRSxBQUFLLEFBRVAsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtlQUFwQjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQyxtQ0FBUSxJQUFJLEtBQUEsQUFBSyxNQUFsQixBQUF3QjtlQUF4QjtpQkFSSixBQUNDLEFBRUMsQUFJQyxBQUNDLEFBS0o7QUFMSTs7Ozs7O3dHQTFId0IsQTs7Ozs7WUFDNUI7QUFDQTtBQUNBO0FBQ007QSxlQUFPLDRCQUFZLE1BQUEsQUFBTSxNLEFBQWxCLEFBQXdCOztlQUVmLGNBQUEsQUFBSSxRQUFKLEFBQVksV0FBVyxNQUFBLEFBQU0sTUFBN0IsQUFBbUMsU0FBbkMsQUFBNEMsQTs7WUFBNUQ7QTs7ZUFDZSxjQUFBLEFBQUksUUFBSixBQUFZLGNBQWMsTUFBQSxBQUFNLE1BQWhDLEFBQXNDLFNBQXRDLEEsQUFBK0M7O1lBQTlEO0E7O2VBQ2MsY0FBQSxBQUFJLFFBQUosQUFBWSxvQkFBb0IsTUFBQSxBQUFNLE1BQXRDLEFBQTRDLFNBQTVDLEFBQXFELEE7O1lBQW5FO0E7O2VBQ2EsY0FBQSxBQUFJLFFBQUosQUFBWSxhQUFaLEFBQXlCLE9BQXpCLEEsQUFBZ0M7O1lBQTdDO0E7O2dCQVlDLEFBQ0MsQUFDUDtlQUFNLEtBRkEsQUFFQSxBQUFLLEFBQ1g7a0JBQVMsTUFBQSxBQUFNLE1BSFQsQUFHZSxBQUNyQjtpQkFKTSxBQUlFLEFBRVI7O29CQUFXLFFBTkwsQUFNSyxBQUFRLEFBQ25CO29CQUFXLFFBUEwsQUFPSyxBQUFRLEFBQ25CO21CQUFVLFFBUkosQUFRSSxBQUFRLEFBRWxCOzttQkFBVSxRQVZKLEFBVUksQUFBUSxBQUNsQjt5QkFBZ0IsUUFYVixBQVdVLEFBQVEsQUFDeEI7a0JBQVMsUUFBQSxBQUFRLEEsQUFaWDtBQUFBLEFBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF2QjJCLEEsQUFtSTlCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvc3VqYXRhL0RvY3VtZW50cy9NYXN0ZXJzLVRoZXNpcy9lbmRvcnNlbWVudHMifQ==