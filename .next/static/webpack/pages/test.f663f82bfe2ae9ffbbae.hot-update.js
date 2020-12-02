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
      className: "".concat(isActive ? "full" : "", " md:text-lg"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mbG9hdGluZ0lucHV0LmpzIl0sIm5hbWVzIjpbIkZsb2F0aW5nSW5wdXQiLCJsYWJlbCIsInR5cGUiLCJ1c2VTdGF0ZSIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlVGV4dENoYW5nZSIsInRleHQiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLEtBQTJCLFFBQTNCQSxLQUEyQjtBQUFBLHVCQUFwQkMsSUFBb0I7QUFBQSxNQUFwQkEsSUFBb0IsMEJBQWIsTUFBYTs7QUFBQSxrQkFDbEJDLHNEQUFRLENBQUMsS0FBRCxDQURVO0FBQUEsTUFDM0NDLFFBRDJDO0FBQUEsTUFDakNDLFdBRGlDOztBQUFBLG1CQUV4QkYsc0RBQVEsQ0FBQyxFQUFELENBRmdCO0FBQUEsTUFFM0NHLEtBRjJDO0FBQUEsTUFFcENDLFFBRm9DOztBQUdsRCxXQUFTQyxnQkFBVCxDQUEwQkMsSUFBMUIsRUFBZ0M7QUFDOUJGLFlBQVEsQ0FBQ0UsSUFBRCxDQUFSOztBQUNBLFFBQUlBLElBQUksS0FBSyxFQUFiLEVBQWlCO0FBQ2ZKLGlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0Q7QUFDRjs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUEsNEJBQ0U7QUFDRSxlQUFTLEVBQUVELFFBQVEsR0FBRyxXQUFILEdBQWlCLEVBRHRDO0FBRUUsVUFBSSxFQUFFRixJQUZSO0FBR0UsV0FBSyxFQUFFSSxLQUhUO0FBSUUsY0FBUSxFQUFFLGtCQUFDSSxDQUFEO0FBQUEsZUFBT0YsZ0JBQWdCLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTTCxLQUFWLENBQXZCO0FBQUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRTtBQUFPLGVBQVMsWUFBS0YsUUFBUSxHQUFHLE1BQUgsR0FBWSxFQUF6QixnQkFBaEI7QUFBMEQsYUFBTyxFQUFDLE1BQWxFO0FBQUEsZ0JBQ0dIO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0F6QkQ7O0dBQU1ELGE7O0tBQUFBLGE7QUEyQlNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3QuZjY2M2Y4MmJmZTJhZTlmZmJiYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBGbG9hdGluZ0lucHV0ID0gKHsgbGFiZWwsIHR5cGUgPSBcInRleHRcIiB9KSA9PiB7XG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBmdW5jdGlvbiBoYW5kbGVUZXh0Q2hhbmdlKHRleHQpIHtcbiAgICBzZXRWYWx1ZSh0ZXh0KTtcbiAgICBpZiAodGV4dCAhPT0gXCJcIikge1xuICAgICAgc2V0SXNBY3RpdmUodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtbGFiZWxcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e2lzQWN0aXZlID8gXCJpbnB1dEZ1bGxcIiA6IFwiXCJ9XG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVUZXh0Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgJHtpc0FjdGl2ZSA/IFwiZnVsbFwiIDogXCJcIn0gbWQ6dGV4dC1sZ2B9IGh0bWxGb3I9XCJ0ZXN0XCI+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGbG9hdGluZ0lucHV0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==