/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entry/collection/collection.html":
/*!**********************************************!*\
  !*** ./src/entry/collection/collection.html ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../favicons/apple-touch-icon.png */ \"./src/favicons/apple-touch-icon.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../favicons/favicon-32x32.png */ \"./src/favicons/favicon-32x32.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../favicons/favicon-16x16.png */ \"./src/favicons/favicon-16x16.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"ru\\\">\\r\\n<head>\\r\\n  <!-- Basic page needs -->\\r\\n  <meta charset=\\\"UTF-8\\\">\\r\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n  <meta name=\\\"description\\\" content=\\\"Resume frontend developer\\\">\\r\\n  <title>Резюме - Сборник микрозадач</title>\\r\\n\\r\\n  <!-- Site favicons -->\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"180x180\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\r\\n  <link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"32x32\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\">\\r\\n  <link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"16x16\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\">\\r\\n</head>\\r\\n<body>\\r\\n  <div class=\\\"row\\\">\\r\\n    <navigation class=\\\"navigation\\\">\\r\\n      <div class=\\\"navigation__appellation\\\">\\r\\n        <span class=\\\"navigation__appellation__title\\\">Сборник микрозадач</span>\\r\\n        <a class=\\\"navigation__appellation__service remove__style__link\\\" href=\\\"index.html\\\">Резюме</a>\\r\\n        <a class=\\\"navigation__appellation__service remove__style__link\\\" href=\\\"tasks.html\\\">Трекер задач</a>\\r\\n        <a class=\\\"navigation__appellation__service remove__style__link\\\" href=\\\"manadger.html\\\">Менеджер файлов</a>\\r\\n      </div>\\r\\n      <div class=\\\"navigation__menu\\\">\\r\\n        <button class=\\\"navigation__menu__button\\\" type=\\\"button\\\" id=\\\"widget__payment\\\">Виджет платежной системы</button>\\r\\n        <button class=\\\"button\\\" id=\\\"\\\" type=\\\"button\\\">Здесь ничего</button>\\r\\n      </div>\\r\\n      <div class=\\\"navigation__contacts\\\"></div>\\r\\n    </navigation>\\r\\n    <main class=\\\"main\\\">\\r\\n      \\r\\n    </main>\\r\\n  </div>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://resume/./src/entry/collection/collection.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = String(url.__esModule ? url.default : url);\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://resume/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/entry/collection/collection.css":
/*!*********************************************!*\
  !*** ./src/entry/collection/collection.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://resume/./src/entry/collection/collection.css?");

/***/ }),

/***/ "./src/entry/collection/collection.js":
/*!********************************************!*\
  !*** ./src/entry/collection/collection.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _collection_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection.html */ \"./src/entry/collection/collection.html\");\n/* harmony import */ var _collection_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collection.css */ \"./src/entry/collection/collection.css\");\n/* harmony import */ var _js_collection_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/collection/collection */ \"./src/js/collection/collection.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://resume/./src/entry/collection/collection.js?");

/***/ }),

/***/ "./src/js/collection/collection.js":
/*!*****************************************!*\
  !*** ./src/js/collection/collection.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment */ \"./src/js/collection/payment.js\");\n\r\n\r\nfunction showWidget(called, func, presBtn) {\r\n  const mainContent = document.querySelector('.main');\r\n  mainContent.innerHTML = '<div class=\"main__widget\"></div>';\r\n  const widgetContent = mainContent.querySelector('.main__widget');\r\n  widgetContent.classList.add(`${presBtn.id.slice(8)}`);\r\n  func.call(called, widgetContent);\r\n}\r\n\r\nconst btnPayment = document.querySelector('#widget__payment');\r\nbtnPayment.addEventListener('click', () => {\r\n  const newWidget = new _payment__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n  showWidget(newWidget, newWidget.addPayment, btnPayment);\r\n});\r\n\n\n//# sourceURL=webpack://resume/./src/js/collection/collection.js?");

/***/ }),

/***/ "./src/js/collection/payment.js":
/*!**************************************!*\
  !*** ./src/js/collection/payment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WidgetPayment)\n/* harmony export */ });\nclass WidgetPayment {\r\n  constructor() {\r\n    this.paymentCards = null;\r\n  }\r\n\r\n  addPayment(container) {\r\n    container.innerHTML = `\r\n      <div class=\"payment__cards\">\r\n        <div class=\"payment__cards__card\" id=\"card__mir\"></div>\r\n        <div class=\"payment__cards__card\" id=\"card__visa\"></div>\r\n        <div class=\"payment__cards__card\" id=\"card__mastercard\"></div>\r\n        <div class=\"payment__cards__card\" id=\"card__jcb\"></div>\r\n        <div class=\"payment__cards__card\" id=\"card__union\"></div>\r\n        <div class=\"payment__cards__card\" id=\"card__american\"></div>\r\n      </div>\r\n      <form class=\"payment__form\">\r\n        <input type=\"number\" class=\"payment__form__input\" id=\"input__card__number\"></input>\r\n        <button type=\"button\" class=\"button\" id=\"payment__send\">Нажмите для подтверждения</button>\r\n      </form>\r\n    `;\r\n    this.paymentCards = container.querySelector('.payment__cards');\r\n    const paymentForm = container.querySelector('.payment__form');\r\n    const paymentFormInput = paymentForm.querySelector('#input__card__number');\r\n    const paymentFormBtn = paymentForm.querySelector('#payment__send');\r\n    paymentFormInput.addEventListener('keyup', () => {\r\n      const belongingPayment = this.belongingPayment.call(this, paymentFormInput.value);\r\n      const thereWarning = paymentForm.querySelector('.payment__form__warning');\r\n      if (paymentFormInput.value.length > 0) {\r\n        if (belongingPayment !== null) {\r\n          if (thereWarning !== null) paymentForm.removeChild(thereWarning);\r\n          this.showCard(belongingPayment);\r\n        }\r\n        if (belongingPayment === null && paymentFormInput.value.length >= 1) {\r\n          if (thereWarning === null) {\r\n            paymentForm.insertAdjacentHTML('beforeend', `\r\n              <div class=\"payment__form__warning\">Формат карты не найден</div>\r\n            `);\r\n          }\r\n          this.hideCard();\r\n        }\r\n      } else {\r\n        if (thereWarning !== null) paymentForm.removeChild(thereWarning);\r\n        this.hideCard();\r\n      }\r\n      \r\n      const isValidNumber = this.checkLuhn(paymentFormInput.value);\r\n    });\r\n    paymentFormBtn.addEventListener('click', () => {\r\n      if (paymentFormInput.value.length > 0) {\r\n        const isValidNumber = this.checkLuhn(paymentFormInput.value);\r\n        if (isValidNumber) {\r\n          paymentFormBtn.remove();\r\n          paymentForm.classList.add('form__safety');\r\n          paymentForm.insertAdjacentHTML('beforeend', `\r\n            <div class=\"payment__form__safety\">\r\n              <input type=\"text\" class=\"payment__form__input\" id=\"input__card__period\" \r\n                placeholder=\"Срок\" \r\n                autocomplete=\"off\" \r\n                inputmode=\"numeric\"\r\n                minlength=\"3\"\r\n                maxlength=\"4\"\r\n                pattern=\"[0-9]+\"\r\n                required\r\n              ></input>\r\n              <input type=\"text\" class=\"payment__form__input\" id=\"input__card__cvv\" \r\n                placeholder=\"Код\" \r\n                autocomplete=\"off\" \r\n                inputmode=\"numeric\"\r\n                minlength=\"3\"\r\n                maxlength=\"4\"\r\n                pattern=\"[0-9]+\"\r\n                required\r\n              ></input>\r\n            </div>\r\n            <button type=\"submit\" class=\"button\" id=\"payment__pay\">Оплатить</button>\r\n          `);\r\n        }\r\n      }\r\n    });\r\n  }\r\n\r\n  checkLuhn(ccn) {\r\n    const ccnS = ccn.toString();\r\n    let sum = 0;\r\n    const parity = (ccnS.length) % 2;\r\n    for (let i = 0; i < ccnS.length; i += 1) {\r\n      let digit = Number(ccnS[i]);\r\n      if (i % 2 === parity) {\r\n        digit *= 2;\r\n        if (digit > 9) {\r\n          digit -= 9;\r\n        }\r\n      }\r\n      sum += digit;\r\n    }\r\n    return Number(sum % 10) === 0;\r\n  }\r\n\r\n  showCard(type) {\r\n    const definedCard = this.paymentCards.querySelector(`#${type}`);\r\n    definedCard.style.opacity = '1';\r\n    return definedCard;\r\n  }\r\n\r\n  hideCard() {\r\n    const cards = Array.from(this.paymentCards.querySelectorAll('.payment__cards__card'));\r\n    cards.forEach(card => {\r\n      if (card.style.opacity === '1') card.style.opacity = '0.6';\r\n    });\r\n  }\r\n\r\n  belongingPayment(number) {\r\n    let type = null;\r\n    if (number.slice(0, 1) === '2') type = 'card__mir';\r\n    if (number.slice(0, 1) === '4') type = 'card__visa';\r\n    if (number.slice(0, 1) === '5') type = 'card__mastercard';\r\n    if (number.slice(0, 1) === '6') type = 'card__union';\r\n    if (type === null) {\r\n      if (number.slice(0, 2) === '35') type = 'card__jcb';\r\n      if (number.slice(0, 2) === '37') type = 'card__american';\r\n    }\r\n    return type;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://resume/./src/js/collection/payment.js?");

/***/ }),

/***/ "./src/favicons/apple-touch-icon.png":
/*!*******************************************!*\
  !*** ./src/favicons/apple-touch-icon.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"apple-touch-icon.png\";\n\n//# sourceURL=webpack://resume/./src/favicons/apple-touch-icon.png?");

/***/ }),

/***/ "./src/favicons/favicon-16x16.png":
/*!****************************************!*\
  !*** ./src/favicons/favicon-16x16.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"favicon-16x16.png\";\n\n//# sourceURL=webpack://resume/./src/favicons/favicon-16x16.png?");

/***/ }),

/***/ "./src/favicons/favicon-32x32.png":
/*!****************************************!*\
  !*** ./src/favicons/favicon-32x32.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"favicon-32x32.png\";\n\n//# sourceURL=webpack://resume/./src/favicons/favicon-32x32.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"collection": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/entry/collection/collection.js");
/******/ 	
/******/ })()
;