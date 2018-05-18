webpackHotUpdate(7,{

/***/ 1135:
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

var _participants = __webpack_require__(1136);

var _participants2 = _interopRequireDefault(_participants);

var _eds = __webpack_require__(949);

var _eds2 = _interopRequireDefault(_eds);

var _web = __webpack_require__(950);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5iZjE4YTA1NTBlMTdjN2RiY2ZmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGFydGljaXBhbnRzL3Nob3cuanM/M2IzNDFhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXJkLCBCdXR0b24sIEZvcm0sIElucHV0LCBNZXNzYWdlLCBHcm91cCwgR3JpZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEVuZG9yc2VtZW50IGZyb20gJy4uLy4uL2V0aGVyZXVtL3BhcnRpY2lwYW50cyc7XG5pbXBvcnQgZWRzIGZyb20gJy4uLy4uL2V0aGVyZXVtL2Vkcyc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcbi8vaW1wb3J0IEVuZG9yc2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9FbmRvcnNlJztcblxuY2xhc3MgUGFydGljaXBhbnRTaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuXG5cdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXHRcdC8vcHJvcHMucXVlcnkuYWRkcmVzcz1hZGRyZXNzIG9mIHRoZSBhY3R1YWwgcGFydGljaXBhbnQgdGhhdCB3ZSBzaG93XG5cdFx0Ly9jb25zb2xlLmxvZyhwcm9wcy5xdWVyeS5hZGRyZXNzKTtcblx0XHRjb25zdCBhZGRyZXNzID0gcHJvcHMucXVlcnkuYWRkcmVzcztcblx0XHRjb25zdCB1c2VyID0gRW5kb3JzZW1lbnQocHJvcHMucXVlcnkuYWRkcmVzcyk7XG5cblx0XHRjb25zdCBzdW1tYXJ5ID0gYXdhaXQgZWRzLm1ldGhvZHMuZ2V0UHJvZmlsZShwcm9wcy5xdWVyeS5hZGRyZXNzKS5jYWxsKCk7XG5cdFx0Y29uc3QgaW1wYWN0ID0gYXdhaXQgZWRzLm1ldGhvZHMuY29tcHV0ZUltcGFjdChwcm9wcy5xdWVyeS5hZGRyZXNzKS5jYWxsKCk7XG5cdFx0Y29uc3QgaW5kZXggPSBhd2FpdCBlZHMubWV0aG9kcy5nZXRQYXJ0aWNpcGFudEluZGV4KHByb3BzLnF1ZXJ5LmFkZHJlc3MpLmNhbGwoKTtcblx0XHRjb25zdCBuYW1lID0gYXdhaXQgZWRzLm1ldGhvZHMucGFydGljaXBhbnRzKGluZGV4KS5jYWxsKCk7XG5cdFx0XG5cdFx0cmV0dXJuIHtcblx0XHRcdGluZGV4OiBpbmRleCxcblx0XHRcdG5hbWU6IG5hbWVbMV0sXG5cdFx0XHRhZGRyZXNzOiBwcm9wcy5xdWVyeS5hZGRyZXNzLFxuXHRcdFx0aW1wYWN0OiBpbXBhY3QsXG5cblx0XHRcdG91dERlZ3JlZTogc3VtbWFyeVswXSxcblx0XHRcdHVzZWRQb3dlcjogc3VtbWFyeVsxXSxcblx0XHRcdG91dENvbm5zOiBzdW1tYXJ5WzJdLFxuXG5cdFx0XHRpbkRlZ3JlZTogc3VtbWFyeVszXSxcblx0XHRcdHJlY2VpdmVkUG9pbnRzOiBzdW1tYXJ5WzRdLFxuXHRcdFx0aW5Db25uczogc3VtbWFyeVs1XVxuXHRcdH07XG5cblxuXHRcdH1cblxuXHRvbkhhbmRsZUNsaWNrID0gYXN5bmMoKSA9PiB7XG5cdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXHRcdGF3YWl0IGVkcy5tZXRob2RzLmVuZG9yc2UodGhpcy5wcm9wcy5pbmRleCkuc2VuZCh7XG5cdFx0XHRmcm9tOiBhY2NvdW50c1swXVxuXHRcdH0pO1xuXG5cdFx0Y29uc29sZS5sb2coXCJoZWxsb1wiKTtcblx0XHQvL2NvbnNvbGUubG9nKHRoaXMucHJvcHMuYWRkcmVzcyk7XG5cdFxuXHR9XG5cblx0XG5cdFxuXG5cdHJlbmRlckNhcmRzKCApIHtcblx0XHRjb25zdCB7XG5cdFx0XHRvdXREZWdyZWUsXG5cdFx0XHR1c2VkUG93ZXIsXG5cdFx0XHRvdXRDb25ucyxcblx0XHRcdGluRGVncmVlLFxuXHRcdFx0cmVjZWl2ZWRQb2ludHMsXG5cdFx0XHRpbkNvbm5zLFxuXHRcdFx0aW1wYWN0LFxuXHRcdFx0bmFtZVx0XG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblxuXHRcdGNvbnN0IGl0ZW1zID0gW1xuXHRcdFx0eyBcblx0XHRcdFx0aGVhZGVyOnRoaXMucHJvcHMuYWRkcmVzcyxcblx0XHRcdFx0bWV0YTonUHVibGljIGtleSB1c2VkIHdoZW4gam9pbmluZyB0aGUgbmV0d29yaycsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiAnUHVibGljIGtleSBvZiB0aGUgcGFydGljaXBhbnQnLFxuXHRcdFx0XHRzdHlsZToge292ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnfVxuXHRcdFx0XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRoZWFkZXI6IG5hbWUsXG5cdFx0XHRcdG1ldGE6ICdVc2VyIE5hbWUnLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogJ1BzZXVkb255bSB1c2VkIHdoZW4gam9pbmluZyB0aGUgbmV0d29yaycsXG5cdFx0XHRcdHN0eWxlOiB7b3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCd9XG5cdFx0XHRcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGhlYWRlcjogb3V0RGVncmVlLFxuXHRcdFx0XHRtZXRhOiAnbkVHJyxcblx0XHRcdFx0ZGVzY3JpcHRpb246J0RlZ3JlZSBvZiBPdXRnb2luZyBjb25uZWN0aW9ucycsXG5cdFx0XHRcdHN0eWxlOiB7b3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCd9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRoZWFkZXI6IHVzZWRQb3dlcixcblx0XHRcdFx0bWV0YTogJ2NvbnN1bWVkIFBvaW50cycsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOidBbW91bnQgb2YgcG9pbnRzIGFscmVhZHkgY29uc3VtZWQnLFxuXHRcdFx0XHRzdHlsZToge292ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnfVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aGVhZGVyOiBpbkRlZ3JlZSxcblx0XHRcdFx0bWV0YTogJ25FUicsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOidEZWdyZWUgb2YgSW5jb21pbmcgQ29ubmVjdGlvbnMnLFxuXHRcdFx0XHRzdHlsZToge292ZXJmbG93V3JhcDonYnJlYWstd29yZCd9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRoZWFkZXI6IHJlY2VpdmVkUG9pbnRzLFxuXHRcdFx0XHRtZXRhOiAnUmVjZWl2ZWQgRW5kb3JzZW1lbnQgUG9pbnRzJyxcblx0XHRcdFx0ZGVzY3JpcHRpb246ICdTdW0gb2YgYWxsIHRoZSBlbmRvcnNlbWVudCBwb2ludHMgcmVjZWl2ZWQnLFxuXHRcdFx0XHRzdHlsZToge292ZXJmbG93V3JhcDonYnJlYWstd29yZCd9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRoZWFkZXI6IGltcGFjdCxcblx0XHRcdFx0bWV0YTogJ0VuZG9yc2VtZW50IEltcGFjdCcsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiAnVG90YWwgRW5kb3JzZW1lbnQgSW1wYWN0IG1hZGUgYnkgdGhlIHBhcnRpY2lwYW50Jyxcblx0XHRcdFx0c3R5bGU6IHtvdmVyZmxvd1dyYXA6J2JyZWFrLXdvcmQnfVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aGVhZGVyOiBvdXRDb25ucyxcblx0XHRcdFx0bWV0YTogJ091dGdvaW5nIENvbm5lY3Rpb25zJyxcblx0XHRcdFx0ZGVzY3JpcHRpb246ICdBcnJheSBvZiBhZGRyZXNzZXMgdG8gd2hvbSB0aGUgcGFydGljaXBhbnQgaGFzIGVuZG9yc2VkJyxcblx0XHRcdFx0c3R5bGU6IHtvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ31cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGhlYWRlcjogaW5Db25ucyxcblx0XHRcdFx0bWV0YTonSW5jb21pbmcgQ29ubmVjdGlvbnMnLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjonQXJyYXkgb2YgYWRkcmVzc2VzIGZyb20gd2hvbSB0aGUgcGFydGljaXBhbnQgaGFzIHJlY2VpdmVkIGVuZG9yc2VtZW50Jyxcblx0XHRcdFx0c3R5bGU6IHtvdmVyZmxvd1dyYXA6J2JyZWFrLXdvcmQnfVxuXHRcdFx0fVxuXHRcdF07XG5cdFx0cmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG5cdH1cblxuXHRyZW5kZXIoICkge1xuXHRcdFxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8aDM+IFBhcnRpY2lwYW50IERldGFpbHMgPC9oMz5cblx0XHRcdFx0PEdyaWQ+XG5cdFx0XHRcdFx0PEdyaWQuQ29sdW1uIHdpZHRoPXsxMCB9PlxuXHRcdFx0XHRcdFx0e3RoaXMucmVuZGVyQ2FyZHMoKX1cblx0XHRcdFx0XHQ8L0dyaWQuQ29sdW1uPlxuXHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdDxHcmlkPlxuXHRcdFx0XHRcdDxHcmlkLkNvbHVtbiB3aWR0aD17MTV9PlxuXHRcdFx0XHRcdDxCdXR0b24gY29sb3I9XCJncmVlblwiIGJhc2ljIG9uQ2xpY2s9e3RoaXMub25IYW5kbGVDbGlja30+XG5cdFx0XHRcdFx0XHRFbmRvcnNlIHRoaXMgUGFydGljaXBhbnQhXG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9HcmlkLkNvbHVtbj5cblx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2lwYW50U2hvdztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3BhcnRpY2lwYW50cy9zaG93LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBTkE7QUFDQTtBQURBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7QUFjQTtBQVVBO0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUtBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUlBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFPQTs7Ozs7Ozs7Ozs7O0FBeElBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUlBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=