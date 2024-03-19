/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entry/tasks/tasks.html":
/*!************************************!*\
  !*** ./src/entry/tasks/tasks.html ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../favicons/apple-touch-icon.png */ \"./src/favicons/apple-touch-icon.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../favicons/favicon-32x32.png */ \"./src/favicons/favicon-32x32.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../favicons/favicon-16x16.png */ \"./src/favicons/favicon-16x16.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"ru\\\">\\r\\n<head>\\r\\n  <!-- Basic page needs -->\\r\\n  <meta charset=\\\"UTF-8\\\">\\r\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n  <meta name=\\\"description\\\" content=\\\"Resume frontend developer\\\">\\r\\n  <title>Резюме - Трекер задач</title>\\r\\n\\r\\n  <!-- Site favicons -->\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"180x180\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\r\\n  <link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"32x32\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\">\\r\\n  <link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"16x16\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\">\\r\\n</head>\\r\\n<body>\\r\\n  <div class=\\\"row\\\">\\r\\n    <navigation class=\\\"navigation\\\">\\r\\n      <div class=\\\"navigation__appellation\\\">\\r\\n        <span class=\\\"navigation__appellation__title\\\">Трекер задач</span>\\r\\n        <a class=\\\"navigation__appellation__service\\\" href=\\\"index.html\\\">Все сервисы</a>\\r\\n      </div>\\r\\n      <div class=\\\"navigation__menu\\\">\\r\\n        <span class=\\\"navigation__menu__task\\\">Задачи</span>\\r\\n        <span class=\\\"navigation__menu__board\\\">Доски задач</span>\\r\\n        <button class=\\\"button\\\" id=\\\"create__task\\\" type=\\\"button\\\">Создать задачу</button>\\r\\n      </div>\\r\\n      <div class=\\\"navigation__contacts\\\">\\r\\n\\r\\n      </div>\\r\\n    </navigation>\\r\\n    <main class=\\\"main\\\">\\r\\n      <div class=\\\"main__navigation\\\">\\r\\n\\r\\n      </div>\\r\\n      <div class=\\\"main__filter\\\">\\r\\n        <h1 class=\\\"main__filter__title\\\" title=\\\"Новая задача\\\">Новая задача</h1>\\r\\n        <div class=\\\"main__filter__instruments\\\">\\r\\n          <input type=\\\"search\\\" placeholder=\\\"Поиск по задачам\\\" id=\\\"search__task\\\">\\r\\n          <span class=\\\"main__filter__instruments__sort\\\">Сортировка</span>\\r\\n          <span class=\\\"main__filter__instruments__filters\\\">Фильтры</span>\\r\\n        </div>\\r\\n      </div>\\r\\n      <div class=\\\"main__tasks\\\">\\r\\n        <div class=\\\"main__tasks__open\\\">\\r\\n          <div class=\\\"main__tasks__menu\\\">\\r\\n            <span>Открыт</span>\\r\\n            <div class=\\\"main__tasks__task__instruments\\\">&#8285</div>\\r\\n          </div>\\r\\n          <div class=\\\"main__tasks__all\\\"></div>\\r\\n        </div>\\r\\n        <div class=\\\"main__tasks__work\\\">\\r\\n          <div class=\\\"main__tasks__menu\\\">\\r\\n            <span>В работе</span>\\r\\n            <div class=\\\"main__tasks__task__instruments\\\">&#8285</div>\\r\\n          </div>\\r\\n          <div class=\\\"main__tasks__all\\\"></div>\\r\\n        </div>\\r\\n        <div class=\\\"main__tasks__close\\\">\\r\\n          <div class=\\\"main__tasks__menu\\\">\\r\\n            <span>Закрыт</span>\\r\\n            <div class=\\\"main__tasks__task__instruments\\\">&#8285</div>\\r\\n          </div>\\r\\n          <div class=\\\"main__tasks__all\\\"></div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </main>\\r\\n  </div>\\r\\n</body>\\r\\n</html>\\r\\n\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://resume/./src/entry/tasks/tasks.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = String(url.__esModule ? url.default : url);\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://resume/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/entry/tasks/tasks.css":
/*!***********************************!*\
  !*** ./src/entry/tasks/tasks.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://resume/./src/entry/tasks/tasks.css?");

/***/ }),

/***/ "./src/entry/tasks/tasks.js":
/*!**********************************!*\
  !*** ./src/entry/tasks/tasks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tasks_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.html */ \"./src/entry/tasks/tasks.html\");\n/* harmony import */ var _tasks_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.css */ \"./src/entry/tasks/tasks.css\");\n/* harmony import */ var _js_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/tasks */ \"./src/js/tasks.js\");\n/* harmony import */ var _js_tasks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_tasks__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://resume/./src/entry/tasks/tasks.js?");

/***/ }),

/***/ "./src/js/tasks.js":
/*!*************************!*\
  !*** ./src/js/tasks.js ***!
  \*************************/
/***/ (() => {

eval("const mainContent = document.querySelector('.main');\r\nconst allTasks = mainContent.querySelector('.main__tasks');\r\nconst btnCreateTask = document.querySelector('#create__task');\r\n\r\nfunction createTask() {\r\n  mainContent.classList.add('main__create__back');\r\n  mainContent.insertAdjacentHTML('beforeend', `\r\n    <div class=\"main__create__task\">\r\n      <input type=\"text\" placeholder=\"Название задачи\" id=\"create__task__title\" maxlength=\"34\">\r\n      <textarea type=\"text\" placeholder=\"Описание задачи\" id=\"create__task__description\" maxlength=\"864\"></textarea>\r\n      <div class=\"create__task__info\">\r\n        <div class=\"create__task__info__specification\">\r\n          <label class=\"create__task__info__text\" for=\"create__task__info__priority\">Приоритет</label>\r\n          <select id=\"create__task__info__priority\">\r\n            <option value=\"none\" selected disabled>Не определен</option>\r\n            <option value=\"low\">Низкий</option>\r\n            <option value=\"average\">Средний</option>\r\n            <option value=\"critical\">Кретичный</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"create__task__info__specification\">\r\n          <span class=\"create__task__info__text\">Дата начала</span>\r\n          <input type=\"date\" placeholder=\"Не определен\" id=\"create__task__info__date\">\r\n        </div>\r\n        <div class=\"create__task__info__specification\">\r\n          <span class=\"create__task__info__text\">Дедлайн</span>\r\n          <input type=\"date\" placeholder=\"Не определен\" id=\"create__task__info__deadline\">\r\n        </div>\r\n        <div class=\"create__task__info__specification\">\r\n          <span class=\"create__task__info__text\">Автор</span>\r\n          <input type=\"text\" placeholder=\"Не определен\" id=\"create__task__info__author\" maxlength=\"24\">\r\n        </div>\r\n        <div class=\"create__task__info__specification\">\r\n          <span class=\"create__task__info__text\">Исполнитель</span>\r\n          <input type=\"text\" placeholder=\"Не определен\" id=\"create__task__info__executor\" maxlength=\"24\">\r\n        </div>\r\n      </div>\r\n      <button class=\"button\" type=\"button\" id=\"add__task\">Создать задачу</button>\r\n    </div>\r\n  `);\r\n\r\n  const textarea = mainContent.querySelector('#create__task__description');\r\n  textarea.addEventListener('input', event => {\r\n    const block = event.target;\r\n    const height = Number(block.style.height.slice(0, block.style.height.indexOf('p')));\r\n    if (block.scrollHeight > height) {\r\n      const size = block.scrollHeight - 20;\r\n      block.style.height = `${size}px`;\r\n    }\r\n  });\r\n\r\n  const btnAddTask = mainContent.querySelector('#add__task');\r\n  const createdTask = mainContent.querySelector('.main__create__task');\r\n  function addTask() {\r\n    const areaTask = allTasks.querySelector('.main__tasks__open');\r\n    areaTask.style.gap = '15px';\r\n    const openTask = areaTask.querySelector('.main__tasks__all');\r\n    let authorTask = createdTask.querySelector('#create__task__info__author').value;\r\n    if (authorTask.length === 0) authorTask = 'Пользователь';\r\n    let titleTask = createdTask.querySelector('#create__task__title').value;\r\n    if (titleTask.length === 0) titleTask = 'Новая задача';\r\n    let descriptionTask = createdTask.querySelector('#create__task__description').value;\r\n    if (descriptionTask.length === 0) descriptionTask = 'Описания нет';\r\n    openTask.insertAdjacentHTML('beforeend', `\r\n      <div class=\"main__tasks__task\">\r\n        <div class=\"main__tasks__task__info\">\r\n          <span class=\"main__tasks__task__info__user\">${authorTask}</span>\r\n          <div class=\"main__tasks__task__info__instruments\">&#8285</div>\r\n        </div>\r\n        <span class=\"main__tasks__task__title\">${titleTask}</span>\r\n      </div>\r\n    `);\r\n    mainContent.removeChild(createdTask);\r\n    mainContent.classList.remove('main__create__back');\r\n  }\r\n  btnAddTask.addEventListener('click', addTask);\r\n}\r\n\r\nbtnCreateTask.addEventListener('click', createTask);\r\n\n\n//# sourceURL=webpack://resume/./src/js/tasks.js?");

/***/ }),

/***/ "./src/favicons/apple-touch-icon.png":
/*!*******************************************!*\
  !*** ./src/favicons/apple-touch-icon.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e473fdac636d48acba1c.png\";\n\n//# sourceURL=webpack://resume/./src/favicons/apple-touch-icon.png?");

/***/ }),

/***/ "./src/favicons/favicon-16x16.png":
/*!****************************************!*\
  !*** ./src/favicons/favicon-16x16.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e5ae6c077c9a95ec6253.png\";\n\n//# sourceURL=webpack://resume/./src/favicons/favicon-16x16.png?");

/***/ }),

/***/ "./src/favicons/favicon-32x32.png":
/*!****************************************!*\
  !*** ./src/favicons/favicon-32x32.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4ffeb1bfbe5df6b8619c.png\";\n\n//# sourceURL=webpack://resume/./src/favicons/favicon-32x32.png?");

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
/******/ 			"tasks": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/entry/tasks/tasks.js");
/******/ 	
/******/ })()
;