module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Ethereum/build/PatientContract.json":
/*!*********************************************!*\
  !*** ./Ethereum/build/PatientContract.json ***!
  \*********************************************/
/*! exports provided: abi, bytecode, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"Patient\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"Doctor\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"LocalServerAdd\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"DoctorAdress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"GetReferences\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"LocalServer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PatientAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"DataHash\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"TimeStamp\",\"type\":\"string\"}],\"name\":\"StoreReferences\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"data_references\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"DataHash\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"TimeStamp\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"bytecode\":\"608060405234801561001057600080fd5b5060405161099a38038061099a8339818101604052606081101561003357600080fd5b81019080805190602001909291908051906020019092919080519060200190929190505050826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505061086e8061012c6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806305efc4ff146100675780632af2f191146100b15780634be14d5b146100fb5780637defc14114610153578063d4cff702146102a5578063e48ad686146103b8575b600080fd5b61006f610402565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100b9610428565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61013d6004803603602081101561011157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061044e565b6040518082815260200191505060405180910390f35b6102a36004803603604081101561016957600080fd5b810190808035906020019064010000000081111561018657600080fd5b82018360208201111561019857600080fd5b803590602001918460018302840111640100000000831117156101ba57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561021d57600080fd5b82018360208201111561022f57600080fd5b8035906020019184600183028401116401000000008311171561025157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061050e565b005b6102d1600480360360208110156102bb57600080fd5b81019080803590602001909291905050506105f3565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b838110156103155780820151818401526020810190506102fa565b50505050905090810190601f1680156103425780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561037b578082015181840152602081019050610360565b50505050905090810190601f1680156103a85780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b6103c0610754565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614806104f85750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b61050157600080fd5b6003805490509050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461056757600080fd5b61056f610779565b6040518060400160405280848152602001838152509050600381908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000190805190602001906105ce929190610793565b5060208201518160010190805190602001906105eb929190610793565b505050505050565b6003818154811061060057fe5b9060005260206000209060020201600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106ac5780601f10610681576101008083540402835291602001916106ac565b820191906000526020600020905b81548152906001019060200180831161068f57829003601f168201915b505050505090806001018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561074a5780601f1061071f5761010080835404028352916020019161074a565b820191906000526020600020905b81548152906001019060200180831161072d57829003601f168201915b5050505050905082565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b604051806040016040528060608152602001606081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106107d457805160ff1916838001178555610802565b82800160010185558215610802579182015b828111156108015782518255916020019190600101906107e6565b5b50905061080f9190610813565b5090565b61083591905b80821115610831576000816000905550600101610819565b5090565b9056fea26469706673582212208fd1738282925d98f0b5da156bfe01995c7e19a7515d222aa80dc26aa8bcd53564736f6c63430006010033\"}");

/***/ }),

/***/ "./Ethereum/patient.js":
/*!*****************************!*\
  !*** ./Ethereum/patient.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./Ethereum/web3.js");
/* harmony import */ var _build_PatientContract_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/PatientContract.json */ "./Ethereum/build/PatientContract.json");
var _build_PatientContract_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./build/PatientContract.json */ "./Ethereum/build/PatientContract.json", 1);


/* harmony default export */ __webpack_exports__["default"] = (address => {
  return new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(_build_PatientContract_json__WEBPACK_IMPORTED_MODULE_1__.abi, address);
});

/***/ }),

/***/ "./Ethereum/web3.js":
/*!**************************!*\
  !*** ./Ethereum/web3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

let web3;

if (false) {} else {
  // we are on the server or the user is not running methamask
  const provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider("https://rinkeby.infura.io/v3/61f94d5d41ef4aa8b1fb74410c7e62d2");
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
}

/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ }),

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

/***/ "./pages/patients/show.js":
/*!********************************!*\
  !*** ./pages/patients/show.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _Ethereum_patient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Ethereum/patient */ "./Ethereum/patient.js");
/* harmony import */ var truncate_middle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! truncate-middle */ "truncate-middle");
/* harmony import */ var truncate_middle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(truncate_middle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Ethereum/web3 */ "./Ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import header from "../../components/header";





class patientShow extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static async getInitialProps(props) {
    const accounts = await _Ethereum_web3__WEBPACK_IMPORTED_MODULE_5__["default"].eth.getAccounts();
    const {
      address
    } = props.query;
    const patient = Object(_Ethereum_patient__WEBPACK_IMPORTED_MODULE_2__["default"])(address);
    const referencesCount = await patient.methods.GetReferences(`0x1833894eCc8586d988A74cAaaf761bE59914b137`).call();
    const references = await Promise.all(Array(parseInt(referencesCount)).fill().map((element, index) => {
      return patient.methods.data_references(index).call();
    }));
    return {
      references,
      address
    };
  }

  PopupAddress(text) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Popup"], {
      content: text,
      trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        content: truncate_middle__WEBPACK_IMPORTED_MODULE_3___default()(text, 5, 5, '....')
      })
    });
  }

  renderRow() {
    return this.props.references.map((link, index) => {
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Cell, null, index), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Cell, null, link.TimeStamp), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Cell, null, this.PopupAddress(link.DataHash)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Cell, null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        route: `/records/read/${link.DataHash}`
      }, "Read")));
    });
  }

  render() {
    const {
      address
    } = this.props;
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
      columns: 2
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Header, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].HeaderCell, null, "ID"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].HeaderCell, null, "Time"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].HeaderCell, null, "Reference"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].HeaderCell, null, "Read"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Body, null, this.renderRow()))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      route: `/records/add/${address}`
    }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      content: "send data",
      primary: true,
      floated: "right"
    })))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (patientShow);

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

/***/ 4:
/*!**************************************!*\
  !*** multi ./pages/patients/show.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project\clientside\pages\patients\show.js */"./pages/patients/show.js");


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

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRXRoZXJldW0vcGF0aWVudC5qcyIsIndlYnBhY2s6Ly8vLi9FdGhlcmV1bS93ZWIzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3BhdGllbnRzL3Nob3cuanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcm91dGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRydW5jYXRlLW1pZGRsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYjNcIiJdLCJuYW1lcyI6WyJhZGRyZXNzIiwid2ViMyIsImV0aCIsIkNvbnRyYWN0IiwiUGF0aWVudENvbnRyYWN0IiwiYWJpIiwicHJvdmlkZXIiLCJXZWIzIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsInBhdGllbnRTaG93IiwiUmVhY3QiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJhY2NvdW50cyIsImdldEFjY291bnRzIiwicXVlcnkiLCJwYXRpZW50IiwiUGF0aWVudCIsInJlZmVyZW5jZXNDb3VudCIsIm1ldGhvZHMiLCJHZXRSZWZlcmVuY2VzIiwiY2FsbCIsInJlZmVyZW5jZXMiLCJQcm9taXNlIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJkYXRhX3JlZmVyZW5jZXMiLCJQb3B1cEFkZHJlc3MiLCJ0ZXh0IiwidHJ1bmNhdGVNaWRkbGUiLCJyZW5kZXJSb3ciLCJsaW5rIiwiVGltZVN0YW1wIiwiRGF0YUhhc2giLCJyZW5kZXIiLCJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlQSxzRUFBTyxJQUFJO0FBQ3RCLFNBQU8sSUFBSUMsNkNBQUksQ0FBQ0MsR0FBTCxDQUFTQyxRQUFiLENBQXNCQyx3REFBZSxDQUFDQyxHQUF0QyxFQUEyQ0wsT0FBM0MsQ0FBUDtBQUNILENBRkQsRTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFJQyxJQUFKOztBQUNBLElBQUksS0FBSixFQUFrRSxFQUFsRSxNQUdPO0FBQ0g7QUFDQSxRQUFNSyxRQUFRLEdB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TFQsRUFLa0IsWUFMbEI7QUFNQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSixNQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwYXRpZW50c1xcc2hvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImltcG9ydCB3ZWIzIGZyb20gXCIuL3dlYjNcIjtcclxuaW1wb3J0IFBhdGllbnRDb250cmFjdCBmcm9tIFwiLi9idWlsZC9QYXRpZW50Q29udHJhY3QuanNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkcmVzcyA9PiB7XHJcbiAgICByZXR1cm4gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFBhdGllbnRDb250cmFjdC5hYmksIGFkZHJlc3MpO1xyXG59OyIsImltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcblxyXG5sZXQgd2ViMztcclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LndlYjMgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIC8vIHdlIGFyZSBpbiBicm93c2VyIGFuZCBtZXRoYW1hc2sgaXNydW5uaW5nLlxyXG4gICAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XHJcbn0gZWxzZSB7XHJcbiAgICAvLyB3ZSBhcmUgb24gdGhlIHNlcnZlciBvciB0aGUgdXNlciBpcyBub3QgcnVubmluZyBtZXRoYW1hc2tcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihcclxuICAgICAgICBcImh0dHBzOi8vcmlua2VieS5pbmZ1cmEuaW8vdjMvNjFmOTRkNWQ0MWVmNGFhOGIxZmI3NDQxMGM3ZTYyZDJcIlxyXG4gICAgKTtcclxuICAgIHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd2ViMyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnU+XHJcbiAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5FLUIgQXBwPC9hPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cclxuXHJcbiAgICAgIDwvTWVudS5NZW51PlxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFBhdGllbnQgZnJvbSBcIi4uLy4uL0V0aGVyZXVtL3BhdGllbnRcIjtcclxuaW1wb3J0IHRydW5jYXRlTWlkZGxlIGZyb20gXCJ0cnVuY2F0ZS1taWRkbGVcIjtcclxuLy8gaW1wb3J0IGhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IHsgQ2FyZCwgVGFibGUsIEdyaWQsIEJ1dHRvbiwgUG9wdXAsIEdyaWRDb2x1bW4sIEdyaWRSb3cgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL0V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcclxuXHJcbmNsYXNzIHBhdGllbnRTaG93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gcHJvcHMucXVlcnk7XHJcbiAgICAgICAgY29uc3QgcGF0aWVudCA9IFBhdGllbnQoYWRkcmVzcyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlc0NvdW50ID0gYXdhaXQgcGF0aWVudC5tZXRob2RzLkdldFJlZmVyZW5jZXMoYDB4MTgzMzg5NGVDYzg1ODZkOTg4QTc0Y0FhYWY3NjFiRTU5OTE0YjEzN2ApLmNhbGwoKTtcclxuICAgICAgICBjb25zdCByZWZlcmVuY2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICAgIEFycmF5KHBhcnNlSW50KHJlZmVyZW5jZXNDb3VudCkpXHJcbiAgICAgICAgICAgICAgICAuZmlsbCgpXHJcbiAgICAgICAgICAgICAgICAubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXRpZW50Lm1ldGhvZHMuZGF0YV9yZWZlcmVuY2VzKGluZGV4KS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZWZlcmVuY2VzLCBhZGRyZXNzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgUG9wdXBBZGRyZXNzKHRleHQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgPFBvcHVwIGNvbnRlbnQ9e3RleHR9XHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyPXs8QnV0dG9uIGNvbnRlbnQ9e3RydW5jYXRlTWlkZGxlKHRleHQsIDUsIDUsICcuLi4uJyl9IC8+fSAvPlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZW5kZXJSb3coKSB7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5yZWZlcmVuY2VzLm1hcCgobGluaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxUYWJsZS5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+e2luZGV4fTwvVGFibGUuQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbD57bGluay5UaW1lU3RhbXB9PC9UYWJsZS5DZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5Qb3B1cEFkZHJlc3MobGluay5EYXRhSGFzaCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17YC9yZWNvcmRzL3JlYWQvJHtsaW5rLkRhdGFIYXNofWB9PlJlYWQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBhZGRyZXNzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93IGNvbHVtbnM9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPklEPC9UYWJsZS5IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+VGltZTwvVGFibGUuSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPlJlZmVyZW5jZTwvVGFibGUuSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPlJlYWQ8L1RhYmxlLkhlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGUuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGUuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZS5Cb2R5Pnt0aGlzLnJlbmRlclJvdygpfTwvVGFibGUuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL3JlY29yZHMvYWRkLyR7YWRkcmVzc31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInNlbmQgZGF0YVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZCA+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0ID5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHBhdGllbnRTaG93O1xyXG4iLCJjb25zdCByb3V0ZXMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIikoKTtcclxuXHJcbnJvdXRlc1xyXG4gICAgLmFkZChcIi9uZXdQYXRpZW50L3JlZ2lzdGVyXCIsICdwYXRpZW50cy9uZXdQYXRpZW50JylcclxuICAgIC5hZGQoXCIvcmVjb3Jkcy86YWRkcmVzc1wiLCBcInBhdGllbnRzL3Nob3dcIilcclxuICAgIC5hZGQoXCIvcmVjb3Jkcy9yZWFkLzpyZWZlcmVuY2VLZXlcIiwgXCJwYXRpZW50cy9yZWNvcmRzL3JlYWRcIilcclxuICAgIC5hZGQoXCIvcmVjb3Jkcy9hZGQvOmFkZHJlc3NcIiwgXCJwYXRpZW50cy9yZWNvcmRzL2FkZFJlY29yZFwiKVxyXG4gICAgLmFkZChcIi9sb2dpblwiLFwiYXV0aC9sb2dpblwiKTtcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXM7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRydW5jYXRlLW1pZGRsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=