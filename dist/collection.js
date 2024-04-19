/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entry/collection/collection.html":
/*!**********************************************!*\
  !*** ./src/entry/collection/collection.html ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../favicons/apple-touch-icon.png */ "./src/favicons/apple-touch-icon.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../favicons/favicon-32x32.png */ "./src/favicons/favicon-32x32.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../favicons/favicon-16x16.png */ "./src/favicons/favicon-16x16.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n<head>\r\n  <!-- Basic page needs -->\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <meta name=\"description\" content=\"Resume frontend developer\">\r\n  <title>Резюме - Сборник микрозадач</title>\r\n\r\n  <!-- Site favicons -->\r\n  <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n  <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\">\r\n  <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\">\r\n</head>\r\n<body>\r\n  <div class=\"row\">\r\n    <navigation class=\"navigation\">\r\n      <div class=\"navigation__appellation\">\r\n        <span class=\"navigation__appellation__title\">Сборник микрозадач</span>\r\n        <a class=\"navigation__appellation__service remove__style__link\" href=\"index.html\">Резюме</a>\r\n        <a class=\"navigation__appellation__service remove__style__link\" href=\"tasks.html\">Трекер задач</a>\r\n        <a class=\"navigation__appellation__service remove__style__link\" href=\"manadger.html\">Менеджер файлов</a>\r\n      </div>\r\n      <div class=\"navigation__menu\">\r\n        <button class=\"navigation__menu__button\" type=\"button\" id=\"widget__payment\">Виджет платежной системы</button>\r\n        <button class=\"button\" id=\"\" type=\"button\">Здесь ничего</button>\r\n      </div>\r\n      <div class=\"navigation__contacts\"></div>\r\n    </navigation>\r\n    <main class=\"main\">\r\n      \r\n    </main>\r\n  </div>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  }

  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ }),

/***/ "./src/entry/collection/collection.css":
/*!*********************************************!*\
  !*** ./src/entry/collection/collection.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/collection/collection.ts":
/*!*****************************************!*\
  !*** ./src/js/collection/collection.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const payment_1 = __importDefault(__webpack_require__(/*! ./payment */ "./src/js/collection/payment.ts"));
function showWidget(called, func, presBtn) {
    const mainContent = document.querySelector('.main');
    mainContent.innerHTML = '<div class="main__widget"></div>';
    const widgetContent = mainContent.querySelector('.main__widget');
    widgetContent.classList.add(`${presBtn.id.slice(8)}`);
    func.call(called, widgetContent);
}
const btnPayment = document.querySelector('#widget__payment');
btnPayment.addEventListener('click', () => {
    const newWidget = new payment_1.default();
    showWidget(newWidget, newWidget.addPayment, btnPayment);
});


/***/ }),

/***/ "./src/js/collection/payment.ts":
/*!**************************************!*\
  !*** ./src/js/collection/payment.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class WidgetPayment {
    addPayment(container) {
        container.innerHTML = `
      <div class="payment__cards">
        <div class="payment__cards__card" id="card__mir"></div>
        <div class="payment__cards__card" id="card__visa"></div>
        <div class="payment__cards__card" id="card__mastercard"></div>
        <div class="payment__cards__card" id="card__jcb"></div>
        <div class="payment__cards__card" id="card__union"></div>
        <div class="payment__cards__card" id="card__american"></div>
      </div>
      <form class="payment__form">
        <input type="number" class="payment__form__input" id="input__card__number"></input>
        <button type="button" class="button" id="payment__send">Нажмите для подтверждения</button>
      </form>
    `;
        const paymentCards = container.querySelector('.payment__cards');
        const paymentForm = container.querySelector('.payment__form');
        const paymentFormInput = paymentForm.querySelector('#input__card__number');
        const paymentFormBtn = paymentForm.querySelector('#payment__send');
        paymentFormInput.addEventListener('keyup', () => {
            const belongingPayment = this.belongingPayment.call(this, paymentFormInput.value);
            const thereWarning = paymentForm.querySelector('.payment__form__warning');
            if (paymentFormInput.value.length > 0) {
                if (belongingPayment !== null) {
                    if (thereWarning !== null)
                        paymentForm.removeChild(thereWarning);
                    this.showCard(paymentCards, belongingPayment);
                }
                if (belongingPayment === null && paymentFormInput.value.length >= 1) {
                    if (thereWarning === null) {
                        paymentForm.insertAdjacentHTML('beforeend', `
              <div class="payment__form__warning">Формат карты не найден</div>
            `);
                    }
                    this.hideCard(paymentCards);
                }
            }
            else {
                if (thereWarning !== null)
                    paymentForm.removeChild(thereWarning);
                this.hideCard(paymentCards);
            }
        });
        paymentFormBtn.addEventListener('click', () => {
            if (paymentFormInput.value.length > 0) {
                const isValidNumber = this.checkLuhn(paymentFormInput.value);
                if (isValidNumber) {
                    paymentFormBtn.remove();
                    paymentForm.classList.add('form__safety');
                    paymentForm.insertAdjacentHTML('beforeend', `
            <div class="payment__form__safety">
              <input type="text" class="payment__form__input" id="input__card__period" 
                placeholder="Срок" 
                autocomplete="off" 
                inputmode="numeric"
                minlength="3"
                maxlength="4"
                pattern="[0-9]+"
                required
              ></input>
              <input type="text" class="payment__form__input" id="input__card__cvv" 
                placeholder="Код" 
                autocomplete="off" 
                inputmode="numeric"
                minlength="3"
                maxlength="4"
                pattern="[0-9]+"
                required
              ></input>
            </div>
            <button type="submit" class="button" id="payment__pay">Оплатить</button>
          `);
                }
            }
        });
    }
    checkLuhn(ccn) {
        const ccnS = ccn;
        let sum = 0;
        const parity = (ccnS.length) % 2;
        for (let i = 0; i < ccnS.length; i += 1) {
            let digit = Number(ccnS[i]);
            if (i % 2 === parity) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            sum += digit;
        }
        return Number(sum % 10) === 0;
    }
    showCard(container, type) {
        const definedCard = container.querySelector(`#${type}`);
        definedCard.style.opacity = '1';
        return definedCard;
    }
    hideCard(container) {
        const cards = Array.from(container.querySelectorAll('.payment__cards__card'));
        cards.forEach(card => {
            if (card.style.opacity === '1')
                card.style.opacity = '0.6';
        });
    }
    belongingPayment(number) {
        let type = null;
        if (number.slice(0, 1) === '2')
            type = 'card__mir';
        if (number.slice(0, 1) === '4')
            type = 'card__visa';
        if (number.slice(0, 1) === '5')
            type = 'card__mastercard';
        if (number.slice(0, 1) === '6')
            type = 'card__union';
        if (type === null) {
            if (number.slice(0, 2) === '35')
                type = 'card__jcb';
            if (number.slice(0, 2) === '37')
                type = 'card__american';
        }
        return type;
    }
}
exports["default"] = WidgetPayment;


/***/ }),

/***/ "./src/favicons/apple-touch-icon.png":
/*!*******************************************!*\
  !*** ./src/favicons/apple-touch-icon.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "apple-touch-icon.png";

/***/ }),

/***/ "./src/favicons/favicon-16x16.png":
/*!****************************************!*\
  !*** ./src/favicons/favicon-16x16.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "favicon-16x16.png";

/***/ }),

/***/ "./src/favicons/favicon-32x32.png":
/*!****************************************!*\
  !*** ./src/favicons/favicon-32x32.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "favicon-32x32.png";

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************!*\
  !*** ./src/entry/collection/collection.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collection_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection.html */ "./src/entry/collection/collection.html");
/* harmony import */ var _collection_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collection.css */ "./src/entry/collection/collection.css");
/* harmony import */ var _js_collection_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/collection/collection */ "./src/js/collection/collection.ts");
/* harmony import */ var _js_collection_collection__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_collection_collection__WEBPACK_IMPORTED_MODULE_2__);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7O0FDckIyQjtBQUNEO0FBQ2MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvZW50cnkvY29sbGVjdGlvbi9jb2xsZWN0aW9uLmh0bWwiLCJ3ZWJwYWNrOi8vcmVzdW1lLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3JjL2VudHJ5L2NvbGxlY3Rpb24vY29sbGVjdGlvbi5jc3M/ZGRhMiIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvanMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLnRzIiwid2VicGFjazovL3Jlc3VtZS8uL3NyYy9qcy9jb2xsZWN0aW9uL3BheW1lbnQudHMiLCJ3ZWJwYWNrOi8vcmVzdW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3VtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN1bWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3VtZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3VtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3VtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3VtZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN1bWUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3JjL2VudHJ5L2NvbGxlY3Rpb24vY29sbGVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uLy4uL2Zhdmljb25zL2Zhdmljb24tMzJ4MzIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vLi4vZmF2aWNvbnMvZmF2aWNvbi0xNngxNi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18pO1xudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcclxcbjxodG1sIGxhbmc9XFxcInJ1XFxcIj5cXHJcXG48aGVhZD5cXHJcXG4gIDwhLS0gQmFzaWMgcGFnZSBuZWVkcyAtLT5cXHJcXG4gIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIj5cXHJcXG4gIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIj5cXHJcXG4gIDxtZXRhIG5hbWU9XFxcImRlc2NyaXB0aW9uXFxcIiBjb250ZW50PVxcXCJSZXN1bWUgZnJvbnRlbmQgZGV2ZWxvcGVyXFxcIj5cXHJcXG4gIDx0aXRsZT7QoNC10LfRjtC80LUgLSDQodCx0L7RgNC90LjQuiDQvNC40LrRgNC+0LfQsNC00LDRhzwvdGl0bGU+XFxyXFxuXFxyXFxuICA8IS0tIFNpdGUgZmF2aWNvbnMgLS0+XFxyXFxuICA8bGluayByZWw9XFxcImFwcGxlLXRvdWNoLWljb25cXFwiIHNpemVzPVxcXCIxODB4MTgwXFxcIiBocmVmPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCI+XFxyXFxuICA8bGluayByZWw9XFxcImljb25cXFwiIHR5cGU9XFxcImltYWdlL3BuZ1xcXCIgc2l6ZXM9XFxcIjMyeDMyXFxcIiBocmVmPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCI+XFxyXFxuICA8bGluayByZWw9XFxcImljb25cXFwiIHR5cGU9XFxcImltYWdlL3BuZ1xcXCIgc2l6ZXM9XFxcIjE2eDE2XFxcIiBocmVmPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCI+XFxyXFxuPC9oZWFkPlxcclxcbjxib2R5PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgPG5hdmlnYXRpb24gY2xhc3M9XFxcIm5hdmlnYXRpb25cXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmlnYXRpb25fX2FwcGVsbGF0aW9uXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19hcHBlbGxhdGlvbl9fdGl0bGVcXFwiPtCh0LHQvtGA0L3QuNC6INC80LjQutGA0L7Qt9Cw0LTQsNGHPC9zcGFuPlxcclxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm5hdmlnYXRpb25fX2FwcGVsbGF0aW9uX19zZXJ2aWNlIHJlbW92ZV9fc3R5bGVfX2xpbmtcXFwiIGhyZWY9XFxcImluZGV4Lmh0bWxcXFwiPtCg0LXQt9GO0LzQtTwvYT5cXHJcXG4gICAgICAgIDxhIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19hcHBlbGxhdGlvbl9fc2VydmljZSByZW1vdmVfX3N0eWxlX19saW5rXFxcIiBocmVmPVxcXCJ0YXNrcy5odG1sXFxcIj7QotGA0LXQutC10YAg0LfQsNC00LDRhzwvYT5cXHJcXG4gICAgICAgIDxhIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19hcHBlbGxhdGlvbl9fc2VydmljZSByZW1vdmVfX3N0eWxlX19saW5rXFxcIiBocmVmPVxcXCJtYW5hZGdlci5odG1sXFxcIj7QnNC10L3QtdC00LbQtdGAINGE0LDQudC70L7QsjwvYT5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19tZW51XFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcIm5hdmlnYXRpb25fX21lbnVfX2J1dHRvblxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwid2lkZ2V0X19wYXltZW50XFxcIj7QktC40LTQttC10YIg0L/Qu9Cw0YLQtdC20L3QvtC5INGB0LjRgdGC0LXQvNGLPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b25cXFwiIGlkPVxcXCJcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+0JfQtNC10YHRjCDQvdC40YfQtdCz0L48L2J1dHRvbj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19jb250YWN0c1xcXCI+PC9kaXY+XFxyXFxuICAgIDwvbmF2aWdhdGlvbj5cXHJcXG4gICAgPG1haW4gY2xhc3M9XFxcIm1haW5cXFwiPlxcclxcbiAgICAgIFxcclxcbiAgICA8L21haW4+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2JvZHk+XFxyXFxuPC9odG1sPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBXaWRnZXRQYXltZW50IGZyb20gJy4vcGF5bWVudCc7XHJcblxyXG5mdW5jdGlvbiBzaG93V2lkZ2V0KGNhbGxlZDogb2JqZWN0LCBmdW5jOiBGdW5jdGlvbiwgcHJlc0J0bjogRWxlbWVudCk6IHZvaWQge1xyXG4gIGNvbnN0IG1haW5Db250ZW50OiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykhO1xyXG4gIG1haW5Db250ZW50LmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwibWFpbl9fd2lkZ2V0XCI+PC9kaXY+JztcclxuICBjb25zdCB3aWRnZXRDb250ZW50OiBIVE1MRGl2RWxlbWVudCA9IG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX193aWRnZXQnKSE7XHJcbiAgd2lkZ2V0Q29udGVudC5jbGFzc0xpc3QuYWRkKGAke3ByZXNCdG4uaWQuc2xpY2UoOCl9YCk7XHJcbiAgZnVuYy5jYWxsKGNhbGxlZCwgd2lkZ2V0Q29udGVudCk7XHJcbn1cclxuXHJcbmNvbnN0IGJ0blBheW1lbnQ6IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpZGdldF9fcGF5bWVudCcpITtcclxuYnRuUGF5bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjb25zdCBuZXdXaWRnZXQ6IFdpZGdldFBheW1lbnQgPSBuZXcgV2lkZ2V0UGF5bWVudCgpO1xyXG4gIHNob3dXaWRnZXQobmV3V2lkZ2V0LCBuZXdXaWRnZXQuYWRkUGF5bWVudCwgYnRuUGF5bWVudCk7XHJcbn0pO1xyXG4iLCJ0eXBlIFRCZWxvbmdpbmdQYXltZW50ID0gc3RyaW5nIHwgbnVsbDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldFBheW1lbnQge1xyXG4gIGFkZFBheW1lbnQoY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cInBheW1lbnRfX2NhcmRzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBheW1lbnRfX2NhcmRzX19jYXJkXCIgaWQ9XCJjYXJkX19taXJcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGF5bWVudF9fY2FyZHNfX2NhcmRcIiBpZD1cImNhcmRfX3Zpc2FcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGF5bWVudF9fY2FyZHNfX2NhcmRcIiBpZD1cImNhcmRfX21hc3RlcmNhcmRcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGF5bWVudF9fY2FyZHNfX2NhcmRcIiBpZD1cImNhcmRfX2pjYlwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXltZW50X19jYXJkc19fY2FyZFwiIGlkPVwiY2FyZF9fdW5pb25cIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGF5bWVudF9fY2FyZHNfX2NhcmRcIiBpZD1cImNhcmRfX2FtZXJpY2FuXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Zm9ybSBjbGFzcz1cInBheW1lbnRfX2Zvcm1cIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwicGF5bWVudF9fZm9ybV9faW5wdXRcIiBpZD1cImlucHV0X19jYXJkX19udW1iZXJcIj48L2lucHV0PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uXCIgaWQ9XCJwYXltZW50X19zZW5kXCI+0J3QsNC20LzQuNGC0LUg0LTQu9GPINC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIGA7XHJcbiAgICBjb25zdCBwYXltZW50Q2FyZHM6IEhUTUxEaXZFbGVtZW50ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wYXltZW50X19jYXJkcycpITtcclxuICAgIGNvbnN0IHBheW1lbnRGb3JtOiBIVE1MRm9ybUVsZW1lbnQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnBheW1lbnRfX2Zvcm0nKSE7XHJcbiAgICBjb25zdCBwYXltZW50Rm9ybUlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gcGF5bWVudEZvcm0ucXVlcnlTZWxlY3RvcignI2lucHV0X19jYXJkX19udW1iZXInKSE7XHJcbiAgICBjb25zdCBwYXltZW50Rm9ybUJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBwYXltZW50Rm9ybS5xdWVyeVNlbGVjdG9yKCcjcGF5bWVudF9fc2VuZCcpITtcclxuICAgIHBheW1lbnRGb3JtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGJlbG9uZ2luZ1BheW1lbnQ6IFRCZWxvbmdpbmdQYXltZW50ID0gdGhpcy5iZWxvbmdpbmdQYXltZW50LmNhbGwodGhpcywgcGF5bWVudEZvcm1JbnB1dC52YWx1ZSk7XHJcbiAgICAgIGNvbnN0IHRoZXJlV2FybmluZzogSFRNTERpdkVsZW1lbnQgPSBwYXltZW50Rm9ybS5xdWVyeVNlbGVjdG9yKCcucGF5bWVudF9fZm9ybV9fd2FybmluZycpITtcclxuICAgICAgaWYgKHBheW1lbnRGb3JtSW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGlmIChiZWxvbmdpbmdQYXltZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBpZiAodGhlcmVXYXJuaW5nICE9PSBudWxsKSBwYXltZW50Rm9ybS5yZW1vdmVDaGlsZCh0aGVyZVdhcm5pbmcpO1xyXG4gICAgICAgICAgdGhpcy5zaG93Q2FyZChwYXltZW50Q2FyZHMsIGJlbG9uZ2luZ1BheW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYmVsb25naW5nUGF5bWVudCA9PT0gbnVsbCAmJiBwYXltZW50Rm9ybUlucHV0LnZhbHVlLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgICBpZiAodGhlcmVXYXJuaW5nID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHBheW1lbnRGb3JtLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXltZW50X19mb3JtX193YXJuaW5nXCI+0KTQvtGA0LzQsNGCINC60LDRgNGC0Ysg0L3QtSDQvdCw0LnQtNC10L08L2Rpdj5cclxuICAgICAgICAgICAgYCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmhpZGVDYXJkKHBheW1lbnRDYXJkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGVyZVdhcm5pbmcgIT09IG51bGwpIHBheW1lbnRGb3JtLnJlbW92ZUNoaWxkKHRoZXJlV2FybmluZyk7XHJcbiAgICAgICAgdGhpcy5oaWRlQ2FyZChwYXltZW50Q2FyZHMpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBjb25zdCBpc1ZhbGlkTnVtYmVyOiBib29sZWFuID0gdGhpcy5jaGVja0x1aG4ocGF5bWVudEZvcm1JbnB1dC52YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIHBheW1lbnRGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAocGF5bWVudEZvcm1JbnB1dC52YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgaXNWYWxpZE51bWJlcjogYm9vbGVhbiA9IHRoaXMuY2hlY2tMdWhuKHBheW1lbnRGb3JtSW5wdXQudmFsdWUpO1xyXG4gICAgICAgIGlmIChpc1ZhbGlkTnVtYmVyKSB7XHJcbiAgICAgICAgICBwYXltZW50Rm9ybUJ0bi5yZW1vdmUoKTtcclxuICAgICAgICAgIHBheW1lbnRGb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX3NhZmV0eScpO1xyXG4gICAgICAgICAgcGF5bWVudEZvcm0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXltZW50X19mb3JtX19zYWZldHlcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInBheW1lbnRfX2Zvcm1fX2lucHV0XCIgaWQ9XCJpbnB1dF9fY2FyZF9fcGVyaW9kXCIgXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCh0YDQvtC6XCIgXHJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIiBcclxuICAgICAgICAgICAgICAgIGlucHV0bW9kZT1cIm51bWVyaWNcIlxyXG4gICAgICAgICAgICAgICAgbWlubGVuZ3RoPVwiM1wiXHJcbiAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCI0XCJcclxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XStcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInBheW1lbnRfX2Zvcm1fX2lucHV0XCIgaWQ9XCJpbnB1dF9fY2FyZF9fY3Z2XCIgXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCa0L7QtFwiIFxyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCIgXHJcbiAgICAgICAgICAgICAgICBpbnB1dG1vZGU9XCJudW1lcmljXCJcclxuICAgICAgICAgICAgICAgIG1pbmxlbmd0aD1cIjNcIlxyXG4gICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwiNFwiXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0rXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ1dHRvblwiIGlkPVwicGF5bWVudF9fcGF5XCI+0J7Qv9C70LDRgtC40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoZWNrTHVobihjY246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgY2NuUzogc3RyaW5nID0gY2NuO1xyXG4gICAgbGV0IHN1bSA9IDA7XHJcbiAgICBjb25zdCBwYXJpdHk6IG51bWJlciA9IChjY25TLmxlbmd0aCkgJSAyO1xyXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGNjblMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgbGV0IGRpZ2l0OiBudW1iZXIgPSBOdW1iZXIoY2NuU1tpXSk7XHJcbiAgICAgIGlmIChpICUgMiA9PT0gcGFyaXR5KSB7XHJcbiAgICAgICAgZGlnaXQgKj0gMjtcclxuICAgICAgICBpZiAoZGlnaXQgPiA5KSB7XHJcbiAgICAgICAgICBkaWdpdCAtPSA5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzdW0gKz0gZGlnaXQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTnVtYmVyKHN1bSAlIDEwKSA9PT0gMDtcclxuICB9XHJcblxyXG4gIHNob3dDYXJkKGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQsIHR5cGU6IFRCZWxvbmdpbmdQYXltZW50KSB7XHJcbiAgICBjb25zdCBkZWZpbmVkQ2FyZDogSFRNTERpdkVsZW1lbnQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihgIyR7dHlwZX1gKSE7XHJcbiAgICBkZWZpbmVkQ2FyZC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgcmV0dXJuIGRlZmluZWRDYXJkO1xyXG4gIH1cclxuXHJcbiAgaGlkZUNhcmQoY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgY29uc3QgY2FyZHM6IEhUTUxEaXZFbGVtZW50W10gPSBBcnJheS5mcm9tKGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcucGF5bWVudF9fY2FyZHNfX2NhcmQnKSk7XHJcbiAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICBpZiAoY2FyZC5zdHlsZS5vcGFjaXR5ID09PSAnMScpIGNhcmQuc3R5bGUub3BhY2l0eSA9ICcwLjYnO1xyXG4gICAgfSk7XHJcbiAgfSBcclxuXHJcbiAgYmVsb25naW5nUGF5bWVudChudW1iZXI6IHN0cmluZyk6IFRCZWxvbmdpbmdQYXltZW50IHtcclxuICAgIGxldCB0eXBlOiBUQmVsb25naW5nUGF5bWVudCA9IG51bGw7XHJcbiAgICBpZiAobnVtYmVyLnNsaWNlKDAsIDEpID09PSAnMicpIHR5cGUgPSAnY2FyZF9fbWlyJztcclxuICAgIGlmIChudW1iZXIuc2xpY2UoMCwgMSkgPT09ICc0JykgdHlwZSA9ICdjYXJkX192aXNhJztcclxuICAgIGlmIChudW1iZXIuc2xpY2UoMCwgMSkgPT09ICc1JykgdHlwZSA9ICdjYXJkX19tYXN0ZXJjYXJkJztcclxuICAgIGlmIChudW1iZXIuc2xpY2UoMCwgMSkgPT09ICc2JykgdHlwZSA9ICdjYXJkX191bmlvbic7XHJcbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xyXG4gICAgICBpZiAobnVtYmVyLnNsaWNlKDAsIDIpID09PSAnMzUnKSB0eXBlID0gJ2NhcmRfX2pjYic7XHJcbiAgICAgIGlmIChudW1iZXIuc2xpY2UoMCwgMikgPT09ICczNycpIHR5cGUgPSAnY2FyZF9fYW1lcmljYW4nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHR5cGU7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiY29sbGVjdGlvblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL2NvbGxlY3Rpb24uaHRtbCc7XHJcbmltcG9ydCAnLi9jb2xsZWN0aW9uLmNzcyc7XHJcbmltcG9ydCAnLi4vLi4vanMvY29sbGVjdGlvbi9jb2xsZWN0aW9uJztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9