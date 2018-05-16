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
			    inConns = _props.inConns;

			var items = [{
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
					lineNumber: 87
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 95
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 96
				}
			}, ' Participant Details '), this.renderCards());
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var user, summary;
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
								return _context.abrupt('return', {
									outDegree: summary[0],
									usedPower: summary[1],
									outConns: summary[2],

									inDegree: summary[3],
									receivedPoints: summary[4],
									inConns: summary[5]
								});

							case 5:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3BhcnRpY2lwYW50cy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkxheW91dCIsIkVuZG9yc2VtZW50IiwiZWRzIiwiUGFydGljaXBhbnRTaG93IiwicHJvcHMiLCJvdXREZWdyZWUiLCJ1c2VkUG93ZXIiLCJvdXRDb25ucyIsImluRGVncmVlIiwicmVjZWl2ZWRQb2ludHMiLCJpbkNvbm5zIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInJlbmRlckNhcmRzIiwidXNlciIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRQcm9maWxlIiwiY2FsbCIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFTOztBQUNULEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBUzs7Ozs7Ozs7O0lBRVYsQTs7Ozs7Ozs7Ozs7Z0NBK0JVO2dCQVFWLEtBUlUsQUFRTDtPQVJLLEFBRWIsbUJBRmEsQUFFYjtPQUZhLEFBR2IsbUJBSGEsQUFHYjtPQUhhLEFBSWIsa0JBSmEsQUFJYjtPQUphLEFBS2Isa0JBTGEsQUFLYjtPQUxhLEFBTWIsd0JBTmEsQUFNYjtPQU5hLEFBT2IsaUJBUGEsQUFPYixBQUlEOztPQUFNO1lBQ0wsQUFDUyxBQUNSO1VBRkQsQUFFTyxBQUNOO2lCQUhELEFBR2EsQUFDWjtXQUFPLEVBQUMsY0FMSSxBQUNiLEFBSVEsQUFBZTtBQUp2QixBQUNDLElBRlk7WUFPYixBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBSEQsQUFHYSxBQUNaO1dBQU8sRUFBQyxjQVhJLEFBT2IsQUFJUSxBQUFlO0FBSnZCLEFBQ0M7WUFLRCxBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBSEQsQUFHYSxBQUNaO1dBQU8sRUFBQyxjQWpCSSxBQWFiLEFBSVEsQUFBYztBQUp0QixBQUNDO1lBS0QsQUFDUyxBQUNSO1VBRkQsQUFFTyxBQUNOO2lCQUhELEFBR2MsQUFDYjtXQUFPLEVBQUMsY0F2QkksQUFtQmIsQUFJUSxBQUFjO0FBSnRCLEFBQ0M7WUFLRCxBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBSEQsQUFHYyxBQUNiO1dBQU8sRUFBQyxjQTdCSSxBQXlCYixBQUlRLEFBQWU7QUFKdkIsQUFDQztZQUtELEFBQ1MsQUFDUjtVQUZELEFBRU0sQUFDTDtpQkFIRCxBQUdhLEFBQ1o7V0FBTyxFQUFDLGNBbkNWLEFBQWMsQUErQmIsQUFJUSxBQUFjLEFBR3ZCO0FBUEMsQUFDQzt3Q0FNSyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO2VBQW5CO2lCQUFQLEFBQU8sQUFFUDtBQUZPO0lBQUE7Ozs7MkJBS0UsQUFFVDs7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNDLCtCQUhILEFBQ0MsQUFFRSxBQUFLLEFBR1I7Ozs7O3dHLEFBNUY0Qjs7Ozs7WUFDNUI7QUFDQTtBQUNBO0FBQ007QSxlQUFPLDRCQUFZLE1BQUEsQUFBTSxNQUFsQixBLEFBQXdCOztlQUVmLGNBQUEsQUFBSSxRQUFKLEFBQVksV0FBVyxNQUFBLEFBQU0sTUFBN0IsQUFBbUMsU0FBbkMsQUFBNEMsQTs7WUFBNUQ7QTs7b0JBYU0sUUFETCxBQUNLLEFBQVEsQUFDbkI7b0JBQVcsUUFGTCxBQUVLLEFBQVEsQUFDbkI7bUJBQVUsUUFISixBQUdJLEFBQVEsQUFFbEI7O21CQUFVLFFBTEosQUFLSSxBQUFRLEFBQ2xCO3lCQUFnQixRQU5WLEFBTVUsQUFBUSxBQUN4QjtrQkFBUyxRQVBILEFBT0csQUFBUSxBO0FBUFgsQUFDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXBCMkIsQSxBQWdHOUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9zdWphdGEvRG9jdW1lbnRzL01hc3RlcnMtVGhlc2lzL2VuZG9yc2VtZW50cyJ9