/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const CountryView = __webpack_require__(/*! ./views/country_view.js */ \"./src/views/country_view.js\")\nconst SelectView = __webpack_require__(/*! ./views/select_view.js */ \"./src/views/select_view.js\")\nconst Countries = __webpack_require__(/*! ./models/countries.js */ \"./src/models/countries.js\")\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    console.log('javascript loaded');\n\n    const countryDropdown = document.querySelector('select#country-select')\n    const countrySelectView = new SelectView(countryDropdown)\n    countrySelectView.bindEvents()\n\n    const countryInfo = document.querySelector('section#country-info')\n    const countryView = new CountryView(countryInfo)\n    countryView.bindEvents()\n\n    const countries = new Countries('https://restcountries.eu/rest/v2/regionalbloc/au')\n    countries.getData()\n    countries.bindEvents()\n\n    \n})\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n    publish: function (channel, payload) {\n      const event = new CustomEvent(channel, {\n        detail: payload\n      });\n      document.dispatchEvent(event);\n    },\n    subscribe: function (channel, callback) {\n      document.addEventListener(channel, callback);\n    }\n  }\n  \n  module.exports = PubSub;\n  \n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request_helper.js":
/*!***************************************!*\
  !*** ./src/helpers/request_helper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n    this.url = url;\n  };\n  \n  RequestHelper.prototype.get = function () {\n     return fetch(this.url)\n      .then(response => response.json())\n      .catch((error) => {console.log(\"Error in get:\", error);\n      })\n  };\n  \n  module.exports = RequestHelper;\n\n//# sourceURL=webpack:///./src/helpers/request_helper.js?");

/***/ }),

/***/ "./src/models/countries.js":
/*!*********************************!*\
  !*** ./src/models/countries.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\")\nconst RequestHelper = __webpack_require__(/*! ../helpers/request_helper */ \"./src/helpers/request_helper.js\")\n\n\nconst Countries = function(url){\n    this.url = url\n    this.countries = null\n}\n\nCountries.prototype.bindEvents = function(){\n    PubSub.subscribe('SelectView:single-country-select', (event) =>{\n        console.log('Countries subscribed to SelectView:single-country-select');\n        countryIndex = event.detail\n        countryDetails = this.countries[countryIndex]\n        console.log('whole country: ', countryDetails);\n\n        PubSub.publish('Countries:all-country-data', countryDetails)\n        \n        \n    })\n}\n\nCountries.prototype.getData = function(){\n    const data = new RequestHelper(this.url)\n    data.get()\n    .then((countryList) => {\n        this.countries = countryList\n        PubSub.publish('Countries:all-countries', this.countries)\n        console.log('Countries has published Countries:all-countries');\n        \n    })\n}\n\n\nmodule.exports = Countries;\n\n//# sourceURL=webpack:///./src/models/countries.js?");

/***/ }),

/***/ "./src/views/country_view.js":
/*!***********************************!*\
  !*** ./src/views/country_view.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\")\n\n\nconst CountryView = function(container){\n    this.container = container\n}\n\nCountryView.prototype.bindEvents = function(){\n    PubSub.subscribe('Countries:all-country-data', (event) => {\n        console.log('CountryView subscribed to Countries:all-country-data');\n        \n        console.log('should be all of a countrys data?', event.detail);\n        this.render(event.detail)\n        \n    })\n}\n\nCountryView.prototype.render = function(countryInfo){\n    const countryName = document.createElement('h2')\n    countryName.textContent = `Name: ${countryInfo.name}`\n    this.container.appendChild(countryName)\n}\n\n\n\nmodule.exports = CountryView;\n\n//# sourceURL=webpack:///./src/views/country_view.js?");

/***/ }),

/***/ "./src/views/select_view.js":
/*!**********************************!*\
  !*** ./src/views/select_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\")\n\nconst SelectView = function(element){\n    this.element = element\n}\n\nSelectView.prototype.bindEvents = function () {\n    PubSub.subscribe('Countries:all-countries', (evt) => {\n        console.log('SelectView subscribed to Countries:all-countries');\n      this.populate(evt.detail)\n    });\n  \n    this.element.addEventListener('change', (evt) => {\n      const selectedIndex = evt.target.value;\n      console.log(selectedIndex);\n      \n      PubSub.publish('SelectView:single-country-select', selectedIndex);\n      console.log('SelectView published SelectView:single-country-select');\n      \n    })\n  };\n  \n  SelectView.prototype.populate = function (countries) {\n    countries.forEach((country, index) => {\n      const countryOption = this.createOption(country.name, index);\n      this.element.appendChild(countryOption);\n    });\n  };\n  \n  SelectView.prototype.createOption = function (name, index) {\n    const option = document.createElement('option');\n    option.textContent = name;\n    option.value = index;\n    return option;\n  };\n\nmodule.exports = SelectView;\n\n//# sourceURL=webpack:///./src/views/select_view.js?");

/***/ })

/******/ });