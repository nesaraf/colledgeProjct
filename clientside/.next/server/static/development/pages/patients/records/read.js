module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx("div", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
  })), __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], null), props.children));
});

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/"
  }, __jsx("a", {
    className: "item"
  }, "E-B App")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
    position: "right"
  }));
});

/***/ }),

/***/ "./pages/patients/records/read.js":
/*!****************************************!*\
  !*** ./pages/patients/records/read.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var truncate_middle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! truncate-middle */ "truncate-middle");
/* harmony import */ var truncate_middle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(truncate_middle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class dataRead extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static async getInitialProps(props) {
    const {
      referenceKey
    } = props.query;

    function getData(key) {
      if (typeof localStorage !== 'undefined') {
        const authData = localStorage.getItem('19divoc');
        return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`http://localhost:5000/info/get/${key}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${authData}`
          }
        }).then(res => {
          const item = res;
          return item.data;
        }).catch(error => {
          const errStatus = error.response.status;

          if (errStatus === 403) {
            next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/login');
          } else {
            Console.log('WTF');
          }
        });
      } else {
        return {
          message: 403
        };
      }
    }

    const refData = await getData(referenceKey);
    return {
      referenceKey,
      refData
    };
  }

  renderData() {
    const {
      referenceKey,
      refData
    } = this.props;

    if (refData.message === 403) {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Content, {
        header: "You need to log in",
        meta: __jsx(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
          route: `/login`
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          color: "red",
          content: "Login"
        })),
        description: ""
      });
    }

    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"].Content, {
      header: truncate_middle__WEBPACK_IMPORTED_MODULE_5___default()(refData.dataHash, 5, 5, '.....'),
      meta: refData.createdAt,
      description: refData.data
    });
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["CardGroup"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Card"], null, this.renderData())));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (dataRead);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add("/newPatient/register", 'patients/newPatient').add("/records/:address", "patients/show").add("/records/read/:referenceKey", "patients/records/read").add("/records/add/:address", "patients/records/addRecord").add("/login", "auth/login");
module.exports = routes;

/***/ }),

/***/ 5:
/*!**********************************************!*\
  !*** multi ./pages/patients/records/read.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project\clientside\pages\patients\records\read.js */"./pages/patients/records/read.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "truncate-middle":
/*!**********************************!*\
  !*** external "truncate-middle" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("truncate-middle");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGF0aWVudHMvcmVjb3Jkcy9yZWFkLmpzIiwid2VicGFjazovLy8uL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcm91dGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidHJ1bmNhdGUtbWlkZGxlXCIiXSwibmFtZXMiOlsicHJvcHMiLCJjaGlsZHJlbiIsImRhdGFSZWFkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJyZWZlcmVuY2VLZXkiLCJxdWVyeSIsImdldERhdGEiLCJrZXkiLCJsb2NhbFN0b3JhZ2UiLCJhdXRoRGF0YSIsImdldEl0ZW0iLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlcyIsIml0ZW0iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImVyclN0YXR1cyIsInJlc3BvbnNlIiwic3RhdHVzIiwiUm91dGVyIiwicHVzaCIsIkNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwicmVmRGF0YSIsInJlbmRlckRhdGEiLCJ0cnVuY2F0ZU1pZGRsZSIsImRhdGFIYXNoIiwiY3JlYXRlZEF0IiwicmVuZGVyIiwicm91dGVzIiwicmVxdWlyZSIsImFkZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7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SHhDLEVBSUtBLEdBSkwsQ0FJUyx1QkFKVCxFQUlrQyw0QkFKbEMsRUFLS0EsR0FMTCxDQUtTLFFBTFQsRUFLa0IsWUFMbEI7QUFNQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSixNQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDRDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwYXRpZW50c1xccmVjb3Jkc1xccmVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnU+XHJcbiAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5FLUIgQXBwPC9hPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cclxuXHJcbiAgICAgIDwvTWVudS5NZW51PlxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyBDYXJkR3JvdXAsIENhcmQsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRlc1wiO1xyXG5pbXBvcnQgdHJ1bmNhdGVNaWRkbGUgZnJvbSBcInRydW5jYXRlLW1pZGRsZVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5cclxuY2xhc3MgZGF0YVJlYWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuICAgICAgICBjb25zdCB7IHJlZmVyZW5jZUtleSB9ID0gcHJvcHMucXVlcnk7XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0RGF0YShrZXkpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdXRoRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCcxOWRpdm9jJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2luZm8vZ2V0LyR7a2V5fWAsIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBiZWFyZXIgJHthdXRoRGF0YX1gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJTdGF0dXMgPSBlcnJvci5yZXNwb25zZS5zdGF0dXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJTdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc29sZS5sb2coJ1dURicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoeyBtZXNzYWdlOiA0MDMgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZWZEYXRhID0gYXdhaXQgZ2V0RGF0YShyZWZlcmVuY2VLZXkpXHJcbiAgICAgICAgcmV0dXJuIHsgcmVmZXJlbmNlS2V5LCByZWZEYXRhIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRGF0YSgpIHtcclxuXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICByZWZlcmVuY2VLZXksXHJcbiAgICAgICAgICAgIHJlZkRhdGFcclxuICAgICAgICB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGlmIChyZWZEYXRhLm1lc3NhZ2UgPT09IDQwMykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPENhcmQuQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIllvdSBuZWVkIHRvIGxvZyBpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YT17PExpbmsgcm91dGU9e2AvbG9naW5gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj0ncmVkJyBjb250ZW50PVwiTG9naW5cIiAvPjwvTGluaz59XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249JydcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENhcmQuQ29udGVudFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPXt0cnVuY2F0ZU1pZGRsZShyZWZEYXRhLmRhdGFIYXNoLCA1LCA1LCAnLi4uLi4nKX1cclxuICAgICAgICAgICAgICAgIG1ldGE9e3JlZkRhdGEuY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3JlZkRhdGEuZGF0YX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxDYXJkR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckRhdGEoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRHcm91cD5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBkYXRhUmVhZDsiLCJjb25zdCByb3V0ZXMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIikoKTtcclxuXHJcbnJvdXRlc1xyXG4gICAgLmFkZChcIi9uZXdQYXRpZW50L3JlZ2lzdGVyXCIsICdwYXRpZW50cy9uZXdQYXRpZW50JylcclxuICAgIC5hZGQoXCIvcmVjb3Jkcy86YWRkcmVzc1wiLCBcInBhdGllbnRzL3Nob3dcIilcclxuICAgIC5hZGQoXCIvcmVjb3Jkcy9yZWFkLzpyZWZlcmVuY2VLZXlcIiwgXCJwYXRpZW50cy9yZWNvcmRzL3JlYWRcIilcclxuICAgIC5hZGQoXCIvcmVjb3Jkcy9hZGQvOmFkZHJlc3NcIiwgXCJwYXRpZW50cy9yZWNvcmRzL2FkZFJlY29yZFwiKVxyXG4gICAgLmFkZChcIi9sb2dpblwiLFwiYXV0aC9sb2dpblwiKTtcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXM7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRydW5jYXRlLW1pZGRsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9