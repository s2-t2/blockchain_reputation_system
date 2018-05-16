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
		key: 'render',
		value: function render() {

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, ' Participant show '));
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

								console.log(summary);
								//		user.methods
								//			.getProfile(props.query.address)
								//			.call()
								//			.then( (summary) => {
								//				console.log( summary )
								//			}) ;


								//user.methods.getProfile(props.query.address).call().then(function(instance){summary=instance;});

								return _context.abrupt('return', {});

							case 6:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3BhcnRpY2lwYW50cy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiRW5kb3JzZW1lbnQiLCJlZHMiLCJQYXJ0aWNpcGFudFNob3ciLCJwcm9wcyIsInVzZXIiLCJxdWVyeSIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0UHJvZmlsZSIsImNhbGwiLCJzdW1tYXJ5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBUzs7Ozs7Ozs7O0ksQUFFVjs7Ozs7Ozs7Ozs7MkJBd0JLLEFBRVQ7OzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUZGLEFBQ0MsQUFDQyxBQUdGOzs7Ozt3R0E5QjRCLEE7Ozs7O1lBQzVCO0FBQ0E7QUFDQTtBQUNNO0EsZUFBTyw0QkFBWSxNQUFBLEFBQU0sTUFBbEIsQUFBd0IsQTs7ZUFFZixjQUFBLEFBQUksUUFBSixBQUFZLFdBQVcsTUFBQSxBQUFNLE1BQTdCLEFBQW1DLFMsQUFBbkMsQUFBNEM7O1lBQTVEO0EsMkJBQ047O2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0U7Ozs7O3lDQUVPLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFuQnFCLEEsQUFrQzlCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvc3VqYXRhL0RvY3VtZW50cy9NYXN0ZXJzLVRoZXNpcy9lbmRvcnNlbWVudHMifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4zMjhhY2MxYTIzMTcxYTdlYTFjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGFydGljaXBhbnRzL3Nob3cuanM/MzA0N2M3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBFbmRvcnNlbWVudCBmcm9tICcuLi8uLi9ldGhlcmV1bS9wYXJ0aWNpcGFudHMnO1xuaW1wb3J0IGVkcyBmcm9tICcuLi8uLi9ldGhlcmV1bS9lZHMnO1xuXG5jbGFzcyBQYXJ0aWNpcGFudFNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XG5cdFx0Ly9wcm9wcy5xdWVyeS5hZGRyZXNzPWFkZHJlc3Mgb2YgdGhlIGFjdHVhbCBwYXJ0aWNpcGFudCB0aGF0IHdlIHNob3dcblx0XHQvL2NvbnNvbGUubG9nKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xuXHRcdC8vY29uc3QgYWRkcmVzcyA9IHByb3BzLnF1ZXJ5LmFkZHJlc3M7XG5cdFx0Y29uc3QgdXNlciA9IEVuZG9yc2VtZW50KHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xuXG5cdFx0Y29uc3Qgc3VtbWFyeSA9IGF3YWl0IGVkcy5tZXRob2RzLmdldFByb2ZpbGUocHJvcHMucXVlcnkuYWRkcmVzcykuY2FsbCgpO1xuXHRcdGNvbnNvbGUubG9nKHN1bW1hcnkgKTtcbi8vXHRcdHVzZXIubWV0aG9kc1xuLy9cdFx0XHQuZ2V0UHJvZmlsZShwcm9wcy5xdWVyeS5hZGRyZXNzKVxuLy9cdFx0XHQuY2FsbCgpXG4vL1x0XHRcdC50aGVuKCAoc3VtbWFyeSkgPT4ge1xuLy9cdFx0XHRcdGNvbnNvbGUubG9nKCBzdW1tYXJ5IClcbi8vXHRcdFx0fSkgO1xuXHRcdFxuXG5cdFx0Ly91c2VyLm1ldGhvZHMuZ2V0UHJvZmlsZShwcm9wcy5xdWVyeS5hZGRyZXNzKS5jYWxsKCkudGhlbihmdW5jdGlvbihpbnN0YW5jZSl7c3VtbWFyeT1pbnN0YW5jZTt9KTtcblxuXHRcdHJldHVybiB7IH07XG5cdFxuXHR9XG5cblxuXHRyZW5kZXIoICkge1xuXHRcdFxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8aDM+IFBhcnRpY2lwYW50IHNob3cgPC9oMz5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXJ0aWNpcGFudFNob3c7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9wYXJ0aWNpcGFudHMvc2hvdy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==