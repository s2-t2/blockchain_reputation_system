webpackHotUpdate(6,{

/***/ 1133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(461);

var _Layout = __webpack_require__(1114);

var _Layout2 = _interopRequireDefault(_Layout);

var _participants = __webpack_require__(1134);

var _participants2 = _interopRequireDefault(_participants);

var _eds = __webpack_require__(949);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/sujata/Documents/Masters-Thesis/endorsements/pages/participants/show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/sujata/Documents/Masters-Thesis/endorsements/pages/participants/show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/participants/show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi43YjdlZGM5NTlkZTZhYjk2MjE2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGFydGljaXBhbnRzL3Nob3cuanM/NjYxYTU4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgRW5kb3JzZW1lbnQgZnJvbSAnLi4vLi4vZXRoZXJldW0vcGFydGljaXBhbnRzJztcbmltcG9ydCBlZHMgZnJvbSAnLi4vLi4vZXRoZXJldW0vZWRzJztcblxuY2xhc3MgUGFydGljaXBhbnRTaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuXHRcdC8vcHJvcHMucXVlcnkuYWRkcmVzcz1hZGRyZXNzIG9mIHRoZSBhY3R1YWwgcGFydGljaXBhbnQgdGhhdCB3ZSBzaG93XG5cdFx0Ly9jb25zb2xlLmxvZyhwcm9wcy5xdWVyeS5hZGRyZXNzKTtcblx0XHQvL2NvbnN0IGFkZHJlc3MgPSBwcm9wcy5xdWVyeS5hZGRyZXNzO1xuXHRcdGNvbnN0IHVzZXIgPSBFbmRvcnNlbWVudChwcm9wcy5xdWVyeS5hZGRyZXNzKTtcblxuXHRcdGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBlZHMubWV0aG9kcy5nZXRQcm9maWxlKHByb3BzLnF1ZXJ5LmFkZHJlc3MpLmNhbGwoKTtcblx0XHQvL2NvbnNvbGUubG9nKHN1bW1hcnkgKTtcbi8vXHRcdHVzZXIubWV0aG9kc1xuLy9cdFx0XHQuZ2V0UHJvZmlsZShwcm9wcy5xdWVyeS5hZGRyZXNzKVxuLy9cdFx0XHQuY2FsbCgpXG4vL1x0XHRcdC50aGVuKCAoc3VtbWFyeSkgPT4ge1xuLy9cdFx0XHRcdGNvbnNvbGUubG9nKCBzdW1tYXJ5IClcbi8vXHRcdFx0fSkgO1xuXHRcdFxuXG5cdFx0Ly91c2VyLm1ldGhvZHMuZ2V0UHJvZmlsZShwcm9wcy5xdWVyeS5hZGRyZXNzKS5jYWxsKCkudGhlbihmdW5jdGlvbihpbnN0YW5jZSl7c3VtbWFyeT1pbnN0YW5jZTt9KTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRvdXREZWdyZWU6IHN1bW1hcnlbMF0sXG5cdFx0XHR1c2VkUG93ZXI6IHN1bW1hcnlbMV0sXG5cdFx0XHRvdXRDb25uczogc3VtbWFyeVsyXSxcblxuXHRcdFx0aW5EZWdyZWU6IHN1bW1hcnlbM10sXG5cdFx0XHRyZWNlaXZlZFBvaW50czogc3VtbWFyeVs0XSxcblx0XHRcdGluQ29ubnM6IHN1bW1hcnlbNV1cblx0XHR9O1xuXHRcblx0fVxuXG5cdHJlbmRlckNhcmRzKCApIHtcblx0XHRjb25zdCB7XG5cdFx0XHRvdXREZWdyZWUsXG5cdFx0XHR1c2VkUG93ZXIsXG5cdFx0XHRvdXRDb25ucyxcblx0XHRcdGluRGVncmVlLFxuXHRcdFx0cmVjZWl2ZWRQb2ludHMsXG5cdFx0XHRpbkNvbm5zXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblxuXHRcdGNvbnN0IGl0ZW1zID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRoZWFkZXI6IG91dERlZ3JlZSxcblx0XHRcdFx0bWV0YTogJ25FRycsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOidEZWdyZWUgb2YgT3V0Z29pbmcgY29ubmVjdGlvbnMnLFxuXHRcdFx0XHRzdHlsZToge292ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnfVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aGVhZGVyOiB1c2VkUG93ZXIsXG5cdFx0XHRcdG1ldGE6ICdjb25zdW1lZCBQb2ludHMnLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjonQW1vdW50IG9mIHBvaW50cyBhbHJlYWR5IGNvbnN1bWVkJyxcblx0XHRcdFx0c3R5bGU6IHtvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ31cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGhlYWRlcjogaW5EZWdyZWUsXG5cdFx0XHRcdG1ldGE6ICduRVInLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjonRGVncmVlIG9mIEluY29taW5nIENvbm5lY3Rpb25zJyxcblx0XHRcdFx0c3R5bGU6IHtvdmVyZmxvd1dyYXA6J2JyZWFrLXdvcmQnfVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aGVhZGVyOiByZWNlaXZlZFBvaW50cyxcblx0XHRcdFx0bWV0YTogJ1JlY2VpdmVkIEVuZG9yc2VtZW50IFBvaW50cycsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiAnU3VtIG9mIGFsbCB0aGUgZW5kb3JzZW1lbnQgcG9pbnRzIHJlY2VpdmVkJyxcblx0XHRcdFx0c3R5bGU6IHtvdmVyZmxvd1dyYXA6J2JyZWFrLXdvcmQnfVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aGVhZGVyOiBvdXRDb25ucyxcblx0XHRcdFx0bWV0YTogJ091dGdvaW5nIENvbm5lY3Rpb25zJyxcblx0XHRcdFx0ZGVzY3JpcHRpb246ICdBcnJheSBvZiBhZGRyZXNzZXMgdG8gd2hvbSB0aGUgcGFydGljaXBhbnQgaGFzIGVuZG9yc2VkJyxcblx0XHRcdFx0c3R5bGU6IHtvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ31cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGhlYWRlcjogaW5Db25ucyxcblx0XHRcdFx0bWV0YTonSW5jb21pbmcgQ29ubmVjdGlvbnMnLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjonQXJyYXkgb2YgYWRkcmVzc2VzIGZyb20gd2hvbSB0aGUgcGFydGljaXBhbnQgaGFzIHJlY2VpdmVkIGVuZG9yc2VtZW50Jyxcblx0XHRcdFx0c3R5bGU6IHtvdmVyZmxvd1dyYXA6J2JyZWFrLXdvcmQnfVxuXHRcdFx0fVxuXHRcdF07XG5cdFx0cmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG5cdFxuXHR9XG5cblxuXHRyZW5kZXIoICkge1xuXHRcdFxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8aDM+IFBhcnRpY2lwYW50IERldGFpbHMgPC9oMz5cblx0XHRcdFx0e3RoaXMucmVuZGVyQ2FyZHMoKSB9XG5cdFx0XHQ8L0xheW91dD5cblx0XHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFydGljaXBhbnRTaG93O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvcGFydGljaXBhbnRzL3Nob3cuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQTtBQVFBO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFFQTtBQUZBO0FBQUE7Ozs7QUFPQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUF2RkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBO0FBREE7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==