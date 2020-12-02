webpackHotUpdate_N_E("pages/test",{

/***/ "./components/floatingInput.js":
/*!*************************************!*\
  !*** ./components/floatingInput.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/home/attitude/www/owwi/components/floatingInput.js",
    _this = undefined,
    _s = $RefreshSig$();



var FloatingInput = function FloatingInput(_ref) {
  _s();

  var label = _ref.label,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isActive = _useState[0],
      setIsActive = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      value = _useState2[0],
      setValue = _useState2[1];

  function handleTextChange(text) {
    setValue(text);

    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "float-label",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: isActive ? "inputFull" : "",
      type: type,
      value: value,
      onChange: function onChange(e) {
        return handleTextChange(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      className: (isActive ? "full" : "", "bg-red-500"),
      htmlFor: "test",
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_s(FloatingInput, "7hVzbmhJW5brSKQVpQuU2urddRU=");

_c = FloatingInput;
/* harmony default export */ __webpack_exports__["default"] = (FloatingInput);

var _c;

$RefreshReg$(_c, "FloatingInput");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mbG9hdGluZ0lucHV0LmpzIl0sIm5hbWVzIjpbIkZsb2F0aW5nSW5wdXQiLCJsYWJlbCIsInR5cGUiLCJ1c2VTdGF0ZSIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlVGV4dENoYW5nZSIsInRleHQiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLEtBQTJCLFFBQTNCQSxLQUEyQjtBQUFBLHVCQUFwQkMsSUFBb0I7QUFBQSxNQUFwQkEsSUFBb0IsMEJBQWIsTUFBYTs7QUFBQSxrQkFDbEJDLHNEQUFRLENBQUMsS0FBRCxDQURVO0FBQUEsTUFDM0NDLFFBRDJDO0FBQUEsTUFDakNDLFdBRGlDOztBQUFBLG1CQUV4QkYsc0RBQVEsQ0FBQyxFQUFELENBRmdCO0FBQUEsTUFFM0NHLEtBRjJDO0FBQUEsTUFFcENDLFFBRm9DOztBQUdsRCxXQUFTQyxnQkFBVCxDQUEwQkMsSUFBMUIsRUFBZ0M7QUFDOUJGLFlBQVEsQ0FBQ0UsSUFBRCxDQUFSOztBQUNBLFFBQUlBLElBQUksS0FBSyxFQUFiLEVBQWlCO0FBQ2ZKLGlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0Q7QUFDRjs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUEsNEJBQ0U7QUFDRSxlQUFTLEVBQUVELFFBQVEsR0FBRyxXQUFILEdBQWlCLEVBRHRDO0FBRUUsVUFBSSxFQUFFRixJQUZSO0FBR0UsV0FBSyxFQUFFSSxLQUhUO0FBSUUsY0FBUSxFQUFFLGtCQUFDSSxDQUFEO0FBQUEsZUFBT0YsZ0JBQWdCLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTTCxLQUFWLENBQXZCO0FBQUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRTtBQUFPLGVBQVMsR0FBR0YsUUFBUSxHQUFHLE1BQUgsR0FBWSxFQUFwQixFQUF3QixZQUEzQixDQUFoQjtBQUEwRCxhQUFPLEVBQUMsTUFBbEU7QUFBQSxnQkFDR0g7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFhRCxDQXpCRDs7R0FBTUQsYTs7S0FBQUEsYTtBQTJCU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC40OTc5YTEzYTQxOTFlNWU4ZGI0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEZsb2F0aW5nSW5wdXQgPSAoeyBsYWJlbCwgdHlwZSA9IFwidGV4dFwiIH0pID0+IHtcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGZ1bmN0aW9uIGhhbmRsZVRleHRDaGFuZ2UodGV4dCkge1xuICAgIHNldFZhbHVlKHRleHQpO1xuICAgIGlmICh0ZXh0ICE9PSBcIlwiKSB7XG4gICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1sYWJlbFwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBcImlucHV0RnVsbFwiIDogXCJcIn1cbiAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVRleHRDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9eyhpc0FjdGl2ZSA/IFwiZnVsbFwiIDogXCJcIiwgXCJiZy1yZWQtNTAwXCIpfSBodG1sRm9yPVwidGVzdFwiPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmxvYXRpbmdJbnB1dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=