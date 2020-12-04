module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/floatingInput.js":
/*!*************************************!*\
  !*** ./components/floatingInput.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/attitude/www/owwi/components/floatingInput.js";


const FloatingInput = ({
  htmlForAndId,
  label,
  type = "text"
}) => {
  const {
    0: isActive,
    1: setIsActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");

  const handleTextChange = text => {
    setValue(text);

    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "float-label",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: isActive ? "inputFull" : "",
      type: type,
      value: value,
      onChange: e => handleTextChange(e.target.value),
      id: htmlForAndId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      className: `${isActive ? "full" : ""} md:text-lg`,
      htmlFor: htmlForAndId,
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FloatingInput);

/***/ }),

/***/ "./components/stepNavMenu.js":
/*!***********************************!*\
  !*** ./components/stepNavMenu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/attitude/www/owwi/components/stepNavMenu.js";


const StepNavMenu = () => {
  const {
    0: compteur,
    1: setCompteur
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const {
    0: isStep1Default,
    1: setIsStep1Default
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: isStep1Completed,
    1: setStep1Completed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isStep2Completed,
    1: setStep2Completed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isStep3Completed,
    1: setStep3Completed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isStep4Completed,
    1: setStep4Completed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isStep5Completed,
    1: setStep5Completed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isStep6Completed,
    1: setStep6Completed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isStep7Completed,
    1: setStep7Completed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isStep8Completed,
    1: setStep8Completed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isStep9Completed,
    1: setStep9Completed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isStep10Completed,
    1: setStep10Completed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isStep2Current,
    1: setStep2Current
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isStep3Current,
    1: setStep3Current
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isStep4Current,
    1: setStep4Current
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isStep5Current,
    1: setStep5Current
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isStep6Current,
    1: setStep6Current
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isStep7Current,
    1: setStep7Current
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isStep8Current,
    1: setStep8Current
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isStep9Current,
    1: setStep9Current
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isStep10Current,
    1: setStep10Current
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const btnNext = () => {
    if (compteur === 1) {
      setStep1Completed(true);
      setIsStep1Default(false);
      setStep2Current(true);
      setCompteur(compteur + 1);
    }

    if (compteur === 2) {
      setStep2Completed(true);
      setStep3Current(true);
      setCompteur(compteur + 1);
    }

    if (compteur === 3) {
      setStep3Completed(true);
      setStep4Current(true);
      setCompteur(compteur + 1);
    }

    if (compteur === 4) {
      setStep4Completed(true);
      setStep5Current(true);
      setCompteur(compteur + 1);
    }

    if (compteur === 5) {
      setStep5Completed(true);
      setStep6Current(true);
      setCompteur(compteur + 1);
    }

    if (compteur === 6) {
      setStep6Completed(true);
      setStep7Current(true);
      setCompteur(compteur + 1);
    }

    if (compteur === 7) {
      setStep7Completed(true);
      setStep8Current(true);
      setCompteur(compteur + 1);
    }

    if (compteur === 8) {
      setStep8Completed(true);
      setStep9Current(true);
      setCompteur(compteur + 1);
    }

    if (compteur === 9) {
      setStep9Completed(true);
      setStep10Current(true);
      setCompteur(compteur + 1);
    }
  };

  const btnBack = () => {
    if (compteur === 2) {
      setStep1Completed(false);
      setIsStep1Default(true);
      setStep2Current(false);
      setCompteur(compteur - 1);
    }

    if (compteur === 3) {
      setStep2Completed(false);
      setStep3Current(false);
      setCompteur(compteur - 1);
    }

    if (compteur === 4) {
      setStep3Completed(false);
      setStep4Current(false);
      setCompteur(compteur - 1);
    }

    if (compteur === 5) {
      setStep4Completed(false);
      setStep5Current(false);
      setCompteur(compteur - 1);
    }

    if (compteur === 6) {
      setStep5Completed(false);
      setStep6Current(false);
      setCompteur(compteur - 1);
    }

    if (compteur === 7) {
      setStep6Completed(false);
      setStep7Current(false);
      setCompteur(compteur - 1);
    }

    if (compteur === 8) {
      setStep7Completed(false);
      setStep8Current(false);
      setCompteur(compteur - 1);
    }

    if (compteur === 9) {
      setStep8Completed(false);
      setStep9Current(false);
      setCompteur(compteur - 1);
    }

    if (compteur === 10) {
      setStep9Completed(false);
      setStep10Current(false);
      setCompteur(compteur - 1);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "flex items-center content",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: `${isStep1Completed ? "completed" : ""} ${isStep1Default ? "firstOne" : ""}`,
        children: "1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: `${isStep2Completed ? "completed" : ""} ${isStep2Current ? "current" : ""}`,
        children: "2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: `${isStep3Completed ? "completed" : ""} ${isStep3Current ? "current" : ""}`,
        children: "3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: `${isStep4Completed ? "completed" : ""} ${isStep4Current ? "current" : ""}`,
        children: "4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: `${isStep5Completed ? "completed" : ""} ${isStep5Current ? "current" : ""}`,
        children: "5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: `${isStep6Completed ? "completed" : ""} ${isStep6Current ? "current" : ""}`,
        children: "6"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: `${isStep7Completed ? "completed" : ""} ${isStep7Current ? "current" : ""}`,
        children: "7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: `${isStep8Completed ? "completed" : ""} ${isStep8Current ? "current" : ""}`,
        children: "8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: `${isStep9Completed ? "completed" : ""} ${isStep9Current ? "current" : ""}`,
        children: "9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: `${isStep10Completed ? "completed" : ""} ${isStep10Current ? "lastOne" : ""}`,
        children: "10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "btn-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "btn bg-gray-500",
        id: "Back",
        onClick: btnBack,
        children: "Back"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "btn bg-green-500",
        id: "Next",
        onClick: btnNext,
        children: "Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (StepNavMenu);

/***/ }),

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_floatingInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/floatingInput */ "./components/floatingInput.js");
/* harmony import */ var _components_stepNavMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/stepNavMenu */ "./components/stepNavMenu.js");

var _jsxFileName = "/home/attitude/www/owwi/pages/test.js";




const test = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex flex-col",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "btn btnRed",
      children: "Rouge"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "btn btnBlue",
      children: "Bleu"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "btn btnGreen",
      children: "Vert"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_floatingInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: "pr\xE9nom",
        type: "text",
        htmlForAndId: "lastName"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_floatingInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: "nom",
        type: "password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "flex filArial",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "linkArialHome",
            href: "#",
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "linkArial",
            href: "#",
            children: "1ere \xE9tape"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "linkArial",
            href: "#",
            children: "2eme \xE9tape"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_stepNavMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (test);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mbG9hdGluZ0lucHV0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3RlcE5hdk1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdGVzdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkZsb2F0aW5nSW5wdXQiLCJodG1sRm9yQW5kSWQiLCJsYWJlbCIsInR5cGUiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlVGV4dENoYW5nZSIsInRleHQiLCJlIiwidGFyZ2V0IiwiU3RlcE5hdk1lbnUiLCJjb21wdGV1ciIsInNldENvbXB0ZXVyIiwiaXNTdGVwMURlZmF1bHQiLCJzZXRJc1N0ZXAxRGVmYXVsdCIsImlzU3RlcDFDb21wbGV0ZWQiLCJzZXRTdGVwMUNvbXBsZXRlZCIsImlzU3RlcDJDb21wbGV0ZWQiLCJzZXRTdGVwMkNvbXBsZXRlZCIsImlzU3RlcDNDb21wbGV0ZWQiLCJzZXRTdGVwM0NvbXBsZXRlZCIsImlzU3RlcDRDb21wbGV0ZWQiLCJzZXRTdGVwNENvbXBsZXRlZCIsImlzU3RlcDVDb21wbGV0ZWQiLCJzZXRTdGVwNUNvbXBsZXRlZCIsImlzU3RlcDZDb21wbGV0ZWQiLCJzZXRTdGVwNkNvbXBsZXRlZCIsImlzU3RlcDdDb21wbGV0ZWQiLCJzZXRTdGVwN0NvbXBsZXRlZCIsImlzU3RlcDhDb21wbGV0ZWQiLCJzZXRTdGVwOENvbXBsZXRlZCIsImlzU3RlcDlDb21wbGV0ZWQiLCJzZXRTdGVwOUNvbXBsZXRlZCIsImlzU3RlcDEwQ29tcGxldGVkIiwic2V0U3RlcDEwQ29tcGxldGVkIiwiaXNTdGVwMkN1cnJlbnQiLCJzZXRTdGVwMkN1cnJlbnQiLCJpc1N0ZXAzQ3VycmVudCIsInNldFN0ZXAzQ3VycmVudCIsImlzU3RlcDRDdXJyZW50Iiwic2V0U3RlcDRDdXJyZW50IiwiaXNTdGVwNUN1cnJlbnQiLCJzZXRTdGVwNUN1cnJlbnQiLCJpc1N0ZXA2Q3VycmVudCIsInNldFN0ZXA2Q3VycmVudCIsImlzU3RlcDdDdXJyZW50Iiwic2V0U3RlcDdDdXJyZW50IiwiaXNTdGVwOEN1cnJlbnQiLCJzZXRTdGVwOEN1cnJlbnQiLCJpc1N0ZXA5Q3VycmVudCIsInNldFN0ZXA5Q3VycmVudCIsImlzU3RlcDEwQ3VycmVudCIsInNldFN0ZXAxMEN1cnJlbnQiLCJidG5OZXh0IiwiYnRuQmFjayIsInRlc3QiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOztBQUVBLE1BQU1BLGFBQWEsR0FBRyxDQUFDO0FBQUVDLGNBQUY7QUFBZ0JDLE9BQWhCO0FBQXVCQyxNQUFJLEdBQUc7QUFBOUIsQ0FBRCxLQUE0QztBQUNoRSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUMsS0FBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkYsc0RBQVEsQ0FBQyxFQUFELENBQWxDOztBQUNBLFFBQU1HLGdCQUFnQixHQUFJQyxJQUFELElBQVU7QUFDakNGLFlBQVEsQ0FBQ0UsSUFBRCxDQUFSOztBQUNBLFFBQUlBLElBQUksS0FBSyxFQUFiLEVBQWlCO0FBQ2ZMLGlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0Q7QUFDRixHQVBEOztBQVNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQSw0QkFDRTtBQUNFLGVBQVMsRUFBRUQsUUFBUSxHQUFHLFdBQUgsR0FBaUIsRUFEdEM7QUFFRSxVQUFJLEVBQUVELElBRlI7QUFHRSxXQUFLLEVBQUVJLEtBSFQ7QUFJRSxjQUFRLEVBQUdJLENBQUQsSUFBT0YsZ0JBQWdCLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTTCxLQUFWLENBSm5DO0FBS0UsUUFBRSxFQUFFTjtBQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFRRTtBQUNFLGVBQVMsRUFBRyxHQUFFRyxRQUFRLEdBQUcsTUFBSCxHQUFZLEVBQUcsYUFEdkM7QUFFRSxhQUFPLEVBQUVILFlBRlg7QUFBQSxnQkFJR0M7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBaUJELENBN0JEOztBQStCZUYsNEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTs7QUFFQSxNQUFNYSxXQUFXLEdBQUcsTUFBTTtBQUN4QixRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJULHNEQUFRLENBQUMsQ0FBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDVSxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDWCxzREFBUSxDQUFDLElBQUQsQ0FBcEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ1ksZ0JBQUQ7QUFBQSxPQUFtQkM7QUFBbkIsTUFBd0NiLHNEQUFRLENBQUMsS0FBRCxDQUF0RDtBQUNBLFFBQU07QUFBQSxPQUFDYyxnQkFBRDtBQUFBLE9BQW1CQztBQUFuQixNQUF3Q2Ysc0RBQVEsQ0FBQyxLQUFELENBQXREO0FBQ0EsUUFBTTtBQUFBLE9BQUNnQixnQkFBRDtBQUFBLE9BQW1CQztBQUFuQixNQUF3Q2pCLHNEQUFRLENBQUMsS0FBRCxDQUF0RDtBQUNBLFFBQU07QUFBQSxPQUFDa0IsZ0JBQUQ7QUFBQSxPQUFtQkM7QUFBbkIsTUFBd0NuQixzREFBUSxDQUFDLEtBQUQsQ0FBdEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ29CLGdCQUFEO0FBQUEsT0FBbUJDO0FBQW5CLE1BQXdDckIsc0RBQVEsQ0FBQyxLQUFELENBQXREO0FBQ0EsUUFBTTtBQUFBLE9BQUNzQixnQkFBRDtBQUFBLE9BQW1CQztBQUFuQixNQUF3Q3ZCLHNEQUFRLENBQUMsS0FBRCxDQUF0RDtBQUNBLFFBQU07QUFBQSxPQUFDd0IsZ0JBQUQ7QUFBQSxPQUFtQkM7QUFBbkIsTUFBd0N6QixzREFBUSxDQUFDLEtBQUQsQ0FBdEQ7QUFDQSxRQUFNO0FBQUEsT0FBQzBCLGdCQUFEO0FBQUEsT0FBbUJDO0FBQW5CLE1BQXdDM0Isc0RBQVEsQ0FBQyxLQUFELENBQXREO0FBQ0EsUUFBTTtBQUFBLE9BQUM0QixnQkFBRDtBQUFBLE9BQW1CQztBQUFuQixNQUF3QzdCLHNEQUFRLENBQUMsS0FBRCxDQUF0RDtBQUNBLFFBQU07QUFBQSxPQUFDOEIsaUJBQUQ7QUFBQSxPQUFvQkM7QUFBcEIsTUFBMEMvQixzREFBUSxDQUFDLEtBQUQsQ0FBeEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ2dDLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBb0NqQyxzREFBUSxDQUFDLEtBQUQsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ2tDLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBb0NuQyxzREFBUSxDQUFDLEtBQUQsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ29DLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBb0NyQyxzREFBUSxDQUFDLEtBQUQsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ3NDLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBb0N2QyxzREFBUSxDQUFDLEtBQUQsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ3dDLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBb0N6QyxzREFBUSxDQUFDLEtBQUQsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQzBDLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBb0MzQyxzREFBUSxDQUFDLEtBQUQsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQzRDLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBb0M3QyxzREFBUSxDQUFDLEtBQUQsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQzhDLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBb0MvQyxzREFBUSxDQUFDLEtBQUQsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ2dELGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBc0NqRCxzREFBUSxDQUFDLEtBQUQsQ0FBcEQ7O0FBRUEsUUFBTWtELE9BQU8sR0FBRyxNQUFNO0FBQ3BCLFFBQUkxQyxRQUFRLEtBQUssQ0FBakIsRUFBb0I7QUFDbEJLLHVCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDQUYsdUJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUNBc0IscUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDQXhCLGlCQUFXLENBQUNELFFBQVEsR0FBRyxDQUFaLENBQVg7QUFDRDs7QUFDRCxRQUFJQSxRQUFRLEtBQUssQ0FBakIsRUFBb0I7QUFDbEJPLHVCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDQW9CLHFCQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0ExQixpQkFBVyxDQUFDRCxRQUFRLEdBQUcsQ0FBWixDQUFYO0FBQ0Q7O0FBQ0QsUUFBSUEsUUFBUSxLQUFLLENBQWpCLEVBQW9CO0FBQ2xCUyx1QkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0FvQixxQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBNUIsaUJBQVcsQ0FBQ0QsUUFBUSxHQUFHLENBQVosQ0FBWDtBQUNEOztBQUNELFFBQUlBLFFBQVEsS0FBSyxDQUFqQixFQUFvQjtBQUNsQlcsdUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNBb0IscUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDQTlCLGlCQUFXLENBQUNELFFBQVEsR0FBRyxDQUFaLENBQVg7QUFDRDs7QUFDRCxRQUFJQSxRQUFRLEtBQUssQ0FBakIsRUFBb0I7QUFDbEJhLHVCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDQW9CLHFCQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0FoQyxpQkFBVyxDQUFDRCxRQUFRLEdBQUcsQ0FBWixDQUFYO0FBQ0Q7O0FBQ0QsUUFBSUEsUUFBUSxLQUFLLENBQWpCLEVBQW9CO0FBQ2xCZSx1QkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0FvQixxQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBbEMsaUJBQVcsQ0FBQ0QsUUFBUSxHQUFHLENBQVosQ0FBWDtBQUNEOztBQUNELFFBQUlBLFFBQVEsS0FBSyxDQUFqQixFQUFvQjtBQUNsQmlCLHVCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDQW9CLHFCQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0FwQyxpQkFBVyxDQUFDRCxRQUFRLEdBQUcsQ0FBWixDQUFYO0FBQ0Q7O0FBQ0QsUUFBSUEsUUFBUSxLQUFLLENBQWpCLEVBQW9CO0FBQ2xCbUIsdUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNBb0IscUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDQXRDLGlCQUFXLENBQUNELFFBQVEsR0FBRyxDQUFaLENBQVg7QUFDRDs7QUFDRCxRQUFJQSxRQUFRLEtBQUssQ0FBakIsRUFBb0I7QUFDbEJxQix1QkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0FvQixzQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0F4QyxpQkFBVyxDQUFDRCxRQUFRLEdBQUcsQ0FBWixDQUFYO0FBQ0Q7QUFDRixHQS9DRDs7QUFpREEsUUFBTTJDLE9BQU8sR0FBRyxNQUFNO0FBQ3BCLFFBQUkzQyxRQUFRLEtBQUssQ0FBakIsRUFBb0I7QUFDbEJLLHVCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDQUYsdUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNBc0IscUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDQXhCLGlCQUFXLENBQUNELFFBQVEsR0FBRyxDQUFaLENBQVg7QUFDRDs7QUFDRCxRQUFJQSxRQUFRLEtBQUssQ0FBakIsRUFBb0I7QUFDbEJPLHVCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDQW9CLHFCQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0ExQixpQkFBVyxDQUFDRCxRQUFRLEdBQUcsQ0FBWixDQUFYO0FBQ0Q7O0FBQ0QsUUFBSUEsUUFBUSxLQUFLLENBQWpCLEVBQW9CO0FBQ2xCUyx1QkFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0FvQixxQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNBNUIsaUJBQVcsQ0FBQ0QsUUFBUSxHQUFHLENBQVosQ0FBWDtBQUNEOztBQUNELFFBQUlBLFFBQVEsS0FBSyxDQUFqQixFQUFvQjtBQUNsQlcsdUJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUNBb0IscUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDQTlCLGlCQUFXLENBQUNELFFBQVEsR0FBRyxDQUFaLENBQVg7QUFDRDs7QUFDRCxRQUFJQSxRQUFRLEtBQUssQ0FBakIsRUFBb0I7QUFDbEJhLHVCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDQW9CLHFCQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0FoQyxpQkFBVyxDQUFDRCxRQUFRLEdBQUcsQ0FBWixDQUFYO0FBQ0Q7O0FBQ0QsUUFBSUEsUUFBUSxLQUFLLENBQWpCLEVBQW9CO0FBQ2xCZSx1QkFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0FvQixxQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNBbEMsaUJBQVcsQ0FBQ0QsUUFBUSxHQUFHLENBQVosQ0FBWDtBQUNEOztBQUNELFFBQUlBLFFBQVEsS0FBSyxDQUFqQixFQUFvQjtBQUNsQmlCLHVCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDQW9CLHFCQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0FwQyxpQkFBVyxDQUFDRCxRQUFRLEdBQUcsQ0FBWixDQUFYO0FBQ0Q7O0FBQ0QsUUFBSUEsUUFBUSxLQUFLLENBQWpCLEVBQW9CO0FBQ2xCbUIsdUJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUNBb0IscUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDQXRDLGlCQUFXLENBQUNELFFBQVEsR0FBRyxDQUFaLENBQVg7QUFDRDs7QUFDRCxRQUFJQSxRQUFRLEtBQUssRUFBakIsRUFBcUI7QUFDbkJxQix1QkFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0FvQixzQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0F4QyxpQkFBVyxDQUFDRCxRQUFRLEdBQUcsQ0FBWixDQUFYO0FBQ0Q7QUFDRixHQS9DRDs7QUFpREEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQywyQkFBZDtBQUFBLDhCQUNFO0FBQ0UsaUJBQVMsRUFBRyxHQUFFSSxnQkFBZ0IsR0FBRyxXQUFILEdBQWlCLEVBQUcsSUFDaERGLGNBQWMsR0FBRyxVQUFILEdBQWdCLEVBQy9CLEVBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFRRTtBQUNFLGlCQUFTLEVBQUcsR0FBRUksZ0JBQWdCLEdBQUcsV0FBSCxHQUFpQixFQUFHLElBQ2hEa0IsY0FBYyxHQUFHLFNBQUgsR0FBZSxFQUM5QixFQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBZUU7QUFDRSxpQkFBUyxFQUFHLEdBQUVoQixnQkFBZ0IsR0FBRyxXQUFILEdBQWlCLEVBQUcsSUFDaERrQixjQUFjLEdBQUcsU0FBSCxHQUFlLEVBQzlCLEVBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZkYsZUFzQkU7QUFDRSxpQkFBUyxFQUFHLEdBQUVoQixnQkFBZ0IsR0FBRyxXQUFILEdBQWlCLEVBQUcsSUFDaERrQixjQUFjLEdBQUcsU0FBSCxHQUFlLEVBQzlCLEVBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdEJGLGVBNkJFO0FBQ0UsaUJBQVMsRUFBRyxHQUFFaEIsZ0JBQWdCLEdBQUcsV0FBSCxHQUFpQixFQUFHLElBQ2hEa0IsY0FBYyxHQUFHLFNBQUgsR0FBZSxFQUM5QixFQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTdCRixlQW9DRTtBQUNFLGlCQUFTLEVBQUcsR0FBRWhCLGdCQUFnQixHQUFHLFdBQUgsR0FBaUIsRUFBRyxJQUNoRGtCLGNBQWMsR0FBRyxTQUFILEdBQWUsRUFDOUIsRUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFwQ0YsZUEyQ0U7QUFDRSxpQkFBUyxFQUFHLEdBQUVoQixnQkFBZ0IsR0FBRyxXQUFILEdBQWlCLEVBQUcsSUFDaERrQixjQUFjLEdBQUcsU0FBSCxHQUFlLEVBQzlCLEVBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBM0NGLGVBa0RFO0FBQ0UsaUJBQVMsRUFBRyxHQUFFaEIsZ0JBQWdCLEdBQUcsV0FBSCxHQUFpQixFQUFHLElBQ2hEa0IsY0FBYyxHQUFHLFNBQUgsR0FBZSxFQUM5QixFQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxERixlQXlERTtBQUNFLGlCQUFTLEVBQUcsR0FBRWhCLGdCQUFnQixHQUFHLFdBQUgsR0FBaUIsRUFBRyxJQUNoRGtCLGNBQWMsR0FBRyxTQUFILEdBQWUsRUFDOUIsRUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF6REYsZUFnRUU7QUFDRSxpQkFBUyxFQUFHLEdBQUVoQixpQkFBaUIsR0FBRyxXQUFILEdBQWlCLEVBQUcsSUFDakRrQixlQUFlLEdBQUcsU0FBSCxHQUFlLEVBQy9CLEVBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQXlFRTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsOEJBQ0U7QUFBUSxpQkFBUyxFQUFDLGlCQUFsQjtBQUFvQyxVQUFFLEVBQUMsTUFBdkM7QUFBOEMsZUFBTyxFQUFFRyxPQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFO0FBQVEsaUJBQVMsRUFBQyxrQkFBbEI7QUFBcUMsVUFBRSxFQUFDLE1BQXhDO0FBQStDLGVBQU8sRUFBRUQsT0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW9GRCxDQTdNRDs7QUErTWUzQywwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTkE7QUFDQTtBQUNBOztBQUVBLE1BQU02QyxJQUFJLEdBQUcsTUFBTTtBQUNqQixzQkFDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUEsNEJBQ0U7QUFBUSxlQUFTLEVBQUMsWUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFRLGVBQVMsRUFBQyxhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQVEsZUFBUyxFQUFDLGNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBS0U7QUFBQSw4QkFDRSxxRUFBQyxpRUFBRDtBQUFlLGFBQUssRUFBQyxXQUFyQjtBQUE4QixZQUFJLEVBQUMsTUFBbkM7QUFBMEMsb0JBQVksRUFBQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUscUVBQUMsaUVBQUQ7QUFBZSxhQUFLLEVBQUMsS0FBckI7QUFBMkIsWUFBSSxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBU0U7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUMsZUFBZDtBQUFBLGdDQUNFO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFDLGVBQWI7QUFBNkIsZ0JBQUksRUFBQyxHQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFNRTtBQUFBLGlDQUNFO0FBQUcscUJBQVMsRUFBQyxXQUFiO0FBQXlCLGdCQUFJLEVBQUMsR0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GLGVBV0U7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUMsV0FBYjtBQUF5QixnQkFBSSxFQUFDLEdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGLGVBNkJFLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBaUNELENBbENEOztBQW9DZUEsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUN4Q0Esa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvdGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvdGVzdC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBGbG9hdGluZ0lucHV0ID0gKHsgaHRtbEZvckFuZElkLCBsYWJlbCwgdHlwZSA9IFwidGV4dFwiIH0pID0+IHtcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGhhbmRsZVRleHRDaGFuZ2UgPSAodGV4dCkgPT4ge1xuICAgIHNldFZhbHVlKHRleHQpO1xuICAgIGlmICh0ZXh0ICE9PSBcIlwiKSB7XG4gICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtbGFiZWxcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e2lzQWN0aXZlID8gXCJpbnB1dEZ1bGxcIiA6IFwiXCJ9XG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVUZXh0Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgaWQ9e2h0bWxGb3JBbmRJZH1cbiAgICAgIC8+XG4gICAgICA8bGFiZWxcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtpc0FjdGl2ZSA/IFwiZnVsbFwiIDogXCJcIn0gbWQ6dGV4dC1sZ2B9XG4gICAgICAgIGh0bWxGb3I9e2h0bWxGb3JBbmRJZH1cbiAgICAgID5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZsb2F0aW5nSW5wdXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU3RlcE5hdk1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IFtjb21wdGV1ciwgc2V0Q29tcHRldXJdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtpc1N0ZXAxRGVmYXVsdCwgc2V0SXNTdGVwMURlZmF1bHRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtpc1N0ZXAxQ29tcGxldGVkLCBzZXRTdGVwMUNvbXBsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1N0ZXAyQ29tcGxldGVkLCBzZXRTdGVwMkNvbXBsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1N0ZXAzQ29tcGxldGVkLCBzZXRTdGVwM0NvbXBsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1N0ZXA0Q29tcGxldGVkLCBzZXRTdGVwNENvbXBsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1N0ZXA1Q29tcGxldGVkLCBzZXRTdGVwNUNvbXBsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1N0ZXA2Q29tcGxldGVkLCBzZXRTdGVwNkNvbXBsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1N0ZXA3Q29tcGxldGVkLCBzZXRTdGVwN0NvbXBsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1N0ZXA4Q29tcGxldGVkLCBzZXRTdGVwOENvbXBsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1N0ZXA5Q29tcGxldGVkLCBzZXRTdGVwOUNvbXBsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1N0ZXAxMENvbXBsZXRlZCwgc2V0U3RlcDEwQ29tcGxldGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzU3RlcDJDdXJyZW50LCBzZXRTdGVwMkN1cnJlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNTdGVwM0N1cnJlbnQsIHNldFN0ZXAzQ3VycmVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1N0ZXA0Q3VycmVudCwgc2V0U3RlcDRDdXJyZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzU3RlcDVDdXJyZW50LCBzZXRTdGVwNUN1cnJlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNTdGVwNkN1cnJlbnQsIHNldFN0ZXA2Q3VycmVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1N0ZXA3Q3VycmVudCwgc2V0U3RlcDdDdXJyZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzU3RlcDhDdXJyZW50LCBzZXRTdGVwOEN1cnJlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNTdGVwOUN1cnJlbnQsIHNldFN0ZXA5Q3VycmVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1N0ZXAxMEN1cnJlbnQsIHNldFN0ZXAxMEN1cnJlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGJ0bk5leHQgPSAoKSA9PiB7XG4gICAgaWYgKGNvbXB0ZXVyID09PSAxKSB7XG4gICAgICBzZXRTdGVwMUNvbXBsZXRlZCh0cnVlKTtcbiAgICAgIHNldElzU3RlcDFEZWZhdWx0KGZhbHNlKTtcbiAgICAgIHNldFN0ZXAyQ3VycmVudCh0cnVlKTtcbiAgICAgIHNldENvbXB0ZXVyKGNvbXB0ZXVyICsgMSk7XG4gICAgfVxuICAgIGlmIChjb21wdGV1ciA9PT0gMikge1xuICAgICAgc2V0U3RlcDJDb21wbGV0ZWQodHJ1ZSk7XG4gICAgICBzZXRTdGVwM0N1cnJlbnQodHJ1ZSk7XG4gICAgICBzZXRDb21wdGV1cihjb21wdGV1ciArIDEpO1xuICAgIH1cbiAgICBpZiAoY29tcHRldXIgPT09IDMpIHtcbiAgICAgIHNldFN0ZXAzQ29tcGxldGVkKHRydWUpO1xuICAgICAgc2V0U3RlcDRDdXJyZW50KHRydWUpO1xuICAgICAgc2V0Q29tcHRldXIoY29tcHRldXIgKyAxKTtcbiAgICB9XG4gICAgaWYgKGNvbXB0ZXVyID09PSA0KSB7XG4gICAgICBzZXRTdGVwNENvbXBsZXRlZCh0cnVlKTtcbiAgICAgIHNldFN0ZXA1Q3VycmVudCh0cnVlKTtcbiAgICAgIHNldENvbXB0ZXVyKGNvbXB0ZXVyICsgMSk7XG4gICAgfVxuICAgIGlmIChjb21wdGV1ciA9PT0gNSkge1xuICAgICAgc2V0U3RlcDVDb21wbGV0ZWQodHJ1ZSk7XG4gICAgICBzZXRTdGVwNkN1cnJlbnQodHJ1ZSk7XG4gICAgICBzZXRDb21wdGV1cihjb21wdGV1ciArIDEpO1xuICAgIH1cbiAgICBpZiAoY29tcHRldXIgPT09IDYpIHtcbiAgICAgIHNldFN0ZXA2Q29tcGxldGVkKHRydWUpO1xuICAgICAgc2V0U3RlcDdDdXJyZW50KHRydWUpO1xuICAgICAgc2V0Q29tcHRldXIoY29tcHRldXIgKyAxKTtcbiAgICB9XG4gICAgaWYgKGNvbXB0ZXVyID09PSA3KSB7XG4gICAgICBzZXRTdGVwN0NvbXBsZXRlZCh0cnVlKTtcbiAgICAgIHNldFN0ZXA4Q3VycmVudCh0cnVlKTtcbiAgICAgIHNldENvbXB0ZXVyKGNvbXB0ZXVyICsgMSk7XG4gICAgfVxuICAgIGlmIChjb21wdGV1ciA9PT0gOCkge1xuICAgICAgc2V0U3RlcDhDb21wbGV0ZWQodHJ1ZSk7XG4gICAgICBzZXRTdGVwOUN1cnJlbnQodHJ1ZSk7XG4gICAgICBzZXRDb21wdGV1cihjb21wdGV1ciArIDEpO1xuICAgIH1cbiAgICBpZiAoY29tcHRldXIgPT09IDkpIHtcbiAgICAgIHNldFN0ZXA5Q29tcGxldGVkKHRydWUpO1xuICAgICAgc2V0U3RlcDEwQ3VycmVudCh0cnVlKTtcbiAgICAgIHNldENvbXB0ZXVyKGNvbXB0ZXVyICsgMSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGJ0bkJhY2sgPSAoKSA9PiB7XG4gICAgaWYgKGNvbXB0ZXVyID09PSAyKSB7XG4gICAgICBzZXRTdGVwMUNvbXBsZXRlZChmYWxzZSk7XG4gICAgICBzZXRJc1N0ZXAxRGVmYXVsdCh0cnVlKTtcbiAgICAgIHNldFN0ZXAyQ3VycmVudChmYWxzZSk7XG4gICAgICBzZXRDb21wdGV1cihjb21wdGV1ciAtIDEpO1xuICAgIH1cbiAgICBpZiAoY29tcHRldXIgPT09IDMpIHtcbiAgICAgIHNldFN0ZXAyQ29tcGxldGVkKGZhbHNlKTtcbiAgICAgIHNldFN0ZXAzQ3VycmVudChmYWxzZSk7XG4gICAgICBzZXRDb21wdGV1cihjb21wdGV1ciAtIDEpO1xuICAgIH1cbiAgICBpZiAoY29tcHRldXIgPT09IDQpIHtcbiAgICAgIHNldFN0ZXAzQ29tcGxldGVkKGZhbHNlKTtcbiAgICAgIHNldFN0ZXA0Q3VycmVudChmYWxzZSk7XG4gICAgICBzZXRDb21wdGV1cihjb21wdGV1ciAtIDEpO1xuICAgIH1cbiAgICBpZiAoY29tcHRldXIgPT09IDUpIHtcbiAgICAgIHNldFN0ZXA0Q29tcGxldGVkKGZhbHNlKTtcbiAgICAgIHNldFN0ZXA1Q3VycmVudChmYWxzZSk7XG4gICAgICBzZXRDb21wdGV1cihjb21wdGV1ciAtIDEpO1xuICAgIH1cbiAgICBpZiAoY29tcHRldXIgPT09IDYpIHtcbiAgICAgIHNldFN0ZXA1Q29tcGxldGVkKGZhbHNlKTtcbiAgICAgIHNldFN0ZXA2Q3VycmVudChmYWxzZSk7XG4gICAgICBzZXRDb21wdGV1cihjb21wdGV1ciAtIDEpO1xuICAgIH1cbiAgICBpZiAoY29tcHRldXIgPT09IDcpIHtcbiAgICAgIHNldFN0ZXA2Q29tcGxldGVkKGZhbHNlKTtcbiAgICAgIHNldFN0ZXA3Q3VycmVudChmYWxzZSk7XG4gICAgICBzZXRDb21wdGV1cihjb21wdGV1ciAtIDEpO1xuICAgIH1cbiAgICBpZiAoY29tcHRldXIgPT09IDgpIHtcbiAgICAgIHNldFN0ZXA3Q29tcGxldGVkKGZhbHNlKTtcbiAgICAgIHNldFN0ZXA4Q3VycmVudChmYWxzZSk7XG4gICAgICBzZXRDb21wdGV1cihjb21wdGV1ciAtIDEpO1xuICAgIH1cbiAgICBpZiAoY29tcHRldXIgPT09IDkpIHtcbiAgICAgIHNldFN0ZXA4Q29tcGxldGVkKGZhbHNlKTtcbiAgICAgIHNldFN0ZXA5Q3VycmVudChmYWxzZSk7XG4gICAgICBzZXRDb21wdGV1cihjb21wdGV1ciAtIDEpO1xuICAgIH1cbiAgICBpZiAoY29tcHRldXIgPT09IDEwKSB7XG4gICAgICBzZXRTdGVwOUNvbXBsZXRlZChmYWxzZSk7XG4gICAgICBzZXRTdGVwMTBDdXJyZW50KGZhbHNlKTtcbiAgICAgIHNldENvbXB0ZXVyKGNvbXB0ZXVyIC0gMSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBjb250ZW50XCI+XG4gICAgICAgIDxsaVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNTdGVwMUNvbXBsZXRlZCA/IFwiY29tcGxldGVkXCIgOiBcIlwifSAke1xuICAgICAgICAgICAgaXNTdGVwMURlZmF1bHQgPyBcImZpcnN0T25lXCIgOiBcIlwiXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICAxXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNTdGVwMkNvbXBsZXRlZCA/IFwiY29tcGxldGVkXCIgOiBcIlwifSAke1xuICAgICAgICAgICAgaXNTdGVwMkN1cnJlbnQgPyBcImN1cnJlbnRcIiA6IFwiXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDJcbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc1N0ZXAzQ29tcGxldGVkID8gXCJjb21wbGV0ZWRcIiA6IFwiXCJ9ICR7XG4gICAgICAgICAgICBpc1N0ZXAzQ3VycmVudCA/IFwiY3VycmVudFwiIDogXCJcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgM1xuICAgICAgICA8L2xpPlxuICAgICAgICA8bGlcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzU3RlcDRDb21wbGV0ZWQgPyBcImNvbXBsZXRlZFwiIDogXCJcIn0gJHtcbiAgICAgICAgICAgIGlzU3RlcDRDdXJyZW50ID8gXCJjdXJyZW50XCIgOiBcIlwiXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICA0XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNTdGVwNUNvbXBsZXRlZCA/IFwiY29tcGxldGVkXCIgOiBcIlwifSAke1xuICAgICAgICAgICAgaXNTdGVwNUN1cnJlbnQgPyBcImN1cnJlbnRcIiA6IFwiXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDVcbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc1N0ZXA2Q29tcGxldGVkID8gXCJjb21wbGV0ZWRcIiA6IFwiXCJ9ICR7XG4gICAgICAgICAgICBpc1N0ZXA2Q3VycmVudCA/IFwiY3VycmVudFwiIDogXCJcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgNlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGlcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzU3RlcDdDb21wbGV0ZWQgPyBcImNvbXBsZXRlZFwiIDogXCJcIn0gJHtcbiAgICAgICAgICAgIGlzU3RlcDdDdXJyZW50ID8gXCJjdXJyZW50XCIgOiBcIlwiXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICA3XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNTdGVwOENvbXBsZXRlZCA/IFwiY29tcGxldGVkXCIgOiBcIlwifSAke1xuICAgICAgICAgICAgaXNTdGVwOEN1cnJlbnQgPyBcImN1cnJlbnRcIiA6IFwiXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDhcbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc1N0ZXA5Q29tcGxldGVkID8gXCJjb21wbGV0ZWRcIiA6IFwiXCJ9ICR7XG4gICAgICAgICAgICBpc1N0ZXA5Q3VycmVudCA/IFwiY3VycmVudFwiIDogXCJcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgOVxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGlcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzU3RlcDEwQ29tcGxldGVkID8gXCJjb21wbGV0ZWRcIiA6IFwiXCJ9ICR7XG4gICAgICAgICAgICBpc1N0ZXAxMEN1cnJlbnQgPyBcImxhc3RPbmVcIiA6IFwiXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDEwXG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJnLWdyYXktNTAwXCIgaWQ9XCJCYWNrXCIgb25DbGljaz17YnRuQmFja30+XG4gICAgICAgICAgQmFja1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYmctZ3JlZW4tNTAwXCIgaWQ9XCJOZXh0XCIgb25DbGljaz17YnRuTmV4dH0+XG4gICAgICAgICAgTmV4dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RlcE5hdk1lbnU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGbG9hdGluZ0lucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL2Zsb2F0aW5nSW5wdXRcIjtcbmltcG9ydCBTdGVwTmF2TWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9zdGVwTmF2TWVudVwiO1xuXG5jb25zdCB0ZXN0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuUmVkXCI+Um91Z2U8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bkJsdWVcIj5CbGV1PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG5HcmVlblwiPlZlcnQ8L2J1dHRvbj5cblxuICAgICAgPGZvcm0+XG4gICAgICAgIDxGbG9hdGluZ0lucHV0IGxhYmVsPVwicHLDqW5vbVwiIHR5cGU9XCJ0ZXh0XCIgaHRtbEZvckFuZElkPVwibGFzdE5hbWVcIiAvPlxuICAgICAgICA8RmxvYXRpbmdJbnB1dCBsYWJlbD1cIm5vbVwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8bmF2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmaWxBcmlhbFwiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtBcmlhbEhvbWVcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rQXJpYWxcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAxZXJlIMOpdGFwZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua0FyaWFsXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgMmVtZSDDqXRhcGVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG5cbiAgICAgIDxTdGVwTmF2TWVudSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGVzdDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9