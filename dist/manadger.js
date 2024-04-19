/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entry/manadger/manadger.html":
/*!******************************************!*\
  !*** ./src/entry/manadger/manadger.html ***!
  \******************************************/
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
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n<head>\r\n  <!-- Basic page needs -->\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <meta name=\"description\" content=\"Resume frontend developer\">\r\n  <title>Резюме - Менеджер файлов</title>\r\n\r\n  <!-- Site favicons -->\r\n  <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n  <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\">\r\n  <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\">\r\n</head>\r\n<body>\r\n  <div class=\"row\">\r\n    <navigation class=\"navigation\">\r\n      <div class=\"navigation__appellation\">\r\n        <span class=\"navigation__appellation__title\">Менеджер файлов</span>\r\n        <a class=\"navigation__appellation__service remove__style__link\" href=\"index.html\">Резюме</a>\r\n        <a class=\"navigation__appellation__service remove__style__link\" href=\"tasks.html\">Трекер задач</a>\r\n        <a class=\"navigation__appellation__service remove__style__link\" href=\"collection.html\">Сборник микрозадач</a>\r\n      </div>\r\n      <div class=\"navigation__menu\">\r\n        <a class=\"navigation__appellation__service remove__style__link\" href=\"#\">Все файлы</a>\r\n        <a class=\"navigation__appellation__service remove__style__link\" href=\"#\">Фото</a>\r\n        <a class=\"navigation__appellation__service remove__style__link\" href=\"#\">Избранные</a>\r\n        <a class=\"navigation__appellation__service remove__style__link\" href=\"#\">Удаленные файлы</a>\r\n        <button class=\"button\" id=\"upload__file\" type=\"button\">Загрузить файл</button>\r\n      </div>\r\n      <div class=\"navigation__contacts\">\r\n\r\n      </div>\r\n    </navigation>\r\n    <main class=\"main\">\r\n      <div class=\"main__navigation\"></div>\r\n      <div class=\"main__filter\">\r\n        <h1 class=\"main__filter__title\">Все файлы</h1>\r\n        <div class=\"main__filter__instruments\">\r\n          <input type=\"search\" placeholder=\"Поиск файла\" id=\"search__file\">\r\n          <div class=\"main__filter__instruments__sort\"><div class=\"main__filter__instruments__sort__meaning\"></div><div class=\"instruments__sort\"><span id=\"sort__title\">Сортировка</span></div></div>\r\n          <div class=\"main__filter__instruments__filters\"><span id=\"instruments__filter\">Фильтры</span></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"main__files\"></div>\r\n      <div class=\"main__task__detailed__container\"></div>\r\n    </main>\r\n  </div>\r\n</body>\r\n</html>";
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

/***/ "./src/entry/manadger/manadger.css":
/*!*****************************************!*\
  !*** ./src/entry/manadger/manadger.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/manadger/manadger.ts":
/*!*************************************!*\
  !*** ./src/js/manadger/manadger.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const upload_1 = __importDefault(__webpack_require__(/*! ./upload */ "./src/js/manadger/upload.ts"));
const btnUpload = document.querySelector('#upload__file');
btnUpload.addEventListener('click', () => {
    const newFile = new upload_1.default();
    newFile.uploadFile.call(newFile);
});


/***/ }),

/***/ "./src/js/manadger/upload.ts":
/*!***********************************!*\
  !*** ./src/js/manadger/upload.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const mainContent = document.querySelector('.main');
const mainFiles = mainContent.querySelector('.main__files');
const files = [];
class NewFile {
    constructor(file = null, delayed = null) {
        this.file = file;
        this.delayed = delayed;
    }
    uploadFile() {
        if (mainContent.classList.contains('main__upload__back'))
            return false;
        mainContent.classList.add('main__upload__back');
        mainContent.insertAdjacentHTML('beforeend', `
      <div class="main__upload__file">
        <div class="closed__upload__file"><span id="closed__upload">✖</span></div>
        <div class="upload__file__container">
          <div class="upload__file__container__choose">
            <label for="upload__file__input" class="upload__file__label">Выберите файл</label>
            <input type="file" id="upload__file__input" multiple="multiple"/>
          </div>
          <span class="upload__file__container__text">или</span>
          <input type="text" placeholder="Вставьте ссылку" id="upload__file__link" class="standart__link">
        </div>
        <input type="text" placeholder="Название файла" id="upload__file__title" maxlength="34">
        <textarea type="text" placeholder="Описание файла" id="upload__file__description" maxlength="864"></textarea>
        <div class="upload__delayed__date__container">
          <label for="upload__delayed__date__input" class="upload__delayed__date__label">Запланировать публикацию</label>
          <input type="datetime-local" placeholder="Не определен" id="upload__delayed__date__input">
        </div>
        <button class="button" type="button" id="add__file">Опубликовать файл</button>
      </div>
    `);
        const uploadFileContainer = mainContent.querySelector('.main__upload__file');
        const btnClosedUpload = uploadFileContainer.querySelector('#closed__upload');
        btnClosedUpload.addEventListener('click', () => this.closedUpload(uploadFileContainer));
        const uploadTransfer = document.querySelector('.main__upload__back');
        uploadTransfer.addEventListener('mouseup', ev => this.uploadFileTransfer(ev));
        const uploadLink = uploadFileContainer.querySelector('#upload__file__link');
        uploadLink.addEventListener('change', () => { this.uploadFileLink(uploadLink.value, uploadLink); });
        const btnChooseFile = uploadFileContainer.querySelector('#upload__file__input');
        const labelChooseFile = uploadFileContainer.querySelector('.upload__file__label');
        btnChooseFile.addEventListener('click', () => this.chooseFile(btnChooseFile, labelChooseFile));
        const btnDelayedAddFile = uploadFileContainer.querySelector('.upload__delayed__date__label');
        const inputDelayedAddFile = uploadFileContainer.querySelector('#upload__delayed__date__input');
        btnDelayedAddFile.addEventListener('click', () => this.delayedAddFile(inputDelayedAddFile));
        const btnAddFile = uploadFileContainer.querySelector('#add__file');
        btnAddFile.addEventListener('click', () => this.addFile(uploadFileContainer, btnChooseFile, uploadLink));
        return true;
    }
    closedUpload(container) {
        mainContent.removeChild(container);
        mainContent.classList.remove('main__upload__back');
    }
    previewImage(file, input) {
        const previewEl = document.querySelector('[data-id=preview]');
        if (previewEl !== null)
            previewEl.remove();
        input.insertAdjacentHTML('afterend', `
      <img data-id="preview" class="upload__file__preview">
    `);
        if (typeof file === 'string') {
            const previewEl = document.querySelector('[data-id=preview]');
            previewEl.src = file;
            previewEl.addEventListener('load', () => {
                URL.revokeObjectURL(previewEl.src);
            });
            previewEl.addEventListener('error', () => {
                previewEl.remove();
            });
        }
        else if (file.type.indexOf('image') === 0) {
            const previewEl = document.querySelector('[data-id=preview]');
            previewEl.src = URL.createObjectURL(file);
            previewEl.addEventListener('load', () => {
                URL.revokeObjectURL(previewEl.src);
            });
        }
    }
    chooseFile(input, label) {
        input.style.opacity = '100';
        input.style.zIndex = '0';
        label.style.opacity = '0';
        label.style.height = 'max-content';
        input.addEventListener('change', () => {
            const files = Array.from(input.files);
            files.forEach(el => {
                this.previewImage(el, input);
            });
        });
    }
    uploadFileTransfer(event) {
        event.preventDefault();
    }
    validateLink(link) {
        let validate = false;
        let value = null;
        if (link.length !== 0)
            value = link.search(/^https?:\/\/.+\..*/);
        if (value === -1)
            validate = false;
        if (value === 0 && validate !== null)
            validate = true;
        return validate;
    }
    uploadFileLink(link, input) {
        let btnClearLink = mainContent.querySelector('#clear__input__link');
        if (btnClearLink === null) {
            input.insertAdjacentHTML('afterend', `
        <button type="button" id="clear__input__link">Очистить</button>
      `);
            btnClearLink = mainContent.querySelector('#clear__input__link');
            btnClearLink.addEventListener('click', () => {
                input.value = '';
                const previewEl = document.querySelector('[data-id=preview]');
                if (previewEl !== null)
                    previewEl.remove();
                btnClearLink.remove();
                if (input.classList.contains('valid__link'))
                    input.classList.remove('valid__link');
                if (input.classList.contains('invalid__link'))
                    input.classList.remove('invalid__link');
            });
        }
        const validate = this.validateLink(link);
        if (validate === false) {
            if (input.classList.contains('valid__link'))
                input.classList.remove('valid__link');
            input.classList.add('invalid__link');
            return false;
        }
        if (input.classList.contains('invalid__link'))
            input.classList.remove('invalid__link');
        input.classList.add('valid__link');
        this.previewImage(input.value, input);
        return true;
    }
    saveFile(fileName) {
        const linksSaving = Array.from(mainFiles.querySelectorAll('#link__for__saving'));
        const linkSaving = linksSaving[linksSaving.length - 1];
        console.log(linkSaving, fileName);
    }
    indexGenerator() {
        let index = 1;
        if (files.length !== 0) {
            files.forEach(el => {
                if (Number(el.id.slice(6)) >= index)
                    index = Number(el.id.slice(6)) + 1;
            });
        }
        return index;
    }
    addFile(container, btn, link) {
        const validate = this.validateLink(link.value);
        const index = this.indexGenerator();
        const titleFileElement = container.querySelector('#upload__file__title');
        let titleFile = titleFileElement.value;
        const descriptionFileElement = container.querySelector('#upload__file__description');
        let descriptionFile = descriptionFileElement.value;
        if (descriptionFile.length === 0)
            descriptionFile = 'Описания нет';
        if (btn.value.length !== 0) {
            const reader = new FileReader();
            reader.readAsDataURL(btn.files[0]);
            reader.addEventListener('load', (event) => __awaiter(this, void 0, void 0, function* () {
                if (titleFile.length === 0)
                    titleFile = btn.files[0].name;
                const img = document.createElement('img');
                img.src = `${event.target.result}`;
                img.onload = () => {
                    mainFiles.insertAdjacentHTML('beforeend', `
            <div class="main__files__file__info" id="file__${index}">
              <div class="main__files__file__card">
                <img src="${img.src}" alt="${btn.files[0].name}" class="main__files__file__card__image">
              </div>
              <div class="main__files__file__card__title">${titleFile}</div>
              <span class="main__files__file__card__type">${btn.files[0].type}</span>
            </div>
          `);
                    this.file = mainFiles.querySelector(`#file__${index}`);
                    if (this.file !== null) {
                        const card = this.file.querySelector('.main__files__file__card');
                        card.addEventListener('mouseenter', ev => this.fileInFocus(ev));
                        files.push(this.file);
                    }
                };
                img.onerror = () => {
                    mainFiles.insertAdjacentHTML('beforeend', `
            <div class="main__files__file__info" id="file__${index}">
              <div class="main__files__file__card">
                <div class="main__files__file__card__image card__file__image"><a href="${event.target.result}" id="link__for__saving"></a></div>
              </div>
              <div class="main__files__file__card__title">${titleFile}</div>
              <span class="main__files__file__card__type">${btn.files[0].type}</span>
            </div>
          `);
                    this.saveFile(titleFile);
                    this.file = mainFiles.querySelector(`#file__${index}`);
                    if (this.file !== null) {
                        const card = this.file.querySelector('.main__files__file__card');
                        card.addEventListener('mouseenter', ev => this.fileInFocus(ev));
                        files.push(this.file);
                    }
                };
            }));
            this.closedUpload(container);
        }
        else if (link.value.length !== 0 && validate) {
            if (titleFile.length === 0)
                titleFile = 'Безымянный';
            const img = document.createElement('img');
            img.src = link.value;
            img.onload = () => {
                mainFiles.insertAdjacentHTML('beforeend', `
          <div class="main__files__file__info" id="file__${index}">
            <div class="main__files__file__card">
              <img src="${link.value}" alt="Uploaded image user" class="main__files__file__card__image">
            </div>
            <div class="main__files__file__card__title">${titleFile}</div>
            <span class="main__files__file__card__type">Image</span>
          </div>
        `);
                this.file = mainFiles.querySelector(`#file__${index}`);
                if (this.file !== null) {
                    const card = this.file.querySelector('.main__files__file__card');
                    card.addEventListener('mouseenter', ev => this.fileInFocus(ev));
                    files.push(this.file);
                }
            };
            img.onerror = () => {
                mainFiles.insertAdjacentHTML('beforeend', `
          <div class="main__files__file__info" id="file__${index}">
            <div class="main__files__file__card">
              <div class="main__files__file__card__image card__file__image"><a href="${link.value}" id="link__for__saving"></a></div>
            </div>
            <div class="main__files__file__card__title">${titleFile}</div>
            <span class="main__files__file__card__type">File</span>
          </div>
        `);
                this.saveFile(titleFile);
                this.file = mainFiles.querySelector(`#file__${index}`);
                if (this.file !== null) {
                    const card = this.file.querySelector('.main__files__file__card');
                    card.addEventListener('mouseenter', ev => this.fileInFocus(ev));
                    files.push(this.file);
                }
            };
            this.closedUpload(container);
        }
        else {
            if (validate === null) {
                const containerForBtn = container.querySelector('.upload__file__label');
                containerForBtn.classList.add('head__shake');
                setTimeout(() => {
                    containerForBtn.classList.remove('head__shake');
                }, 500);
            }
            link.classList.add('head__shake');
            setTimeout(() => {
                link.classList.remove('head__shake');
            }, 500);
        }
    }
    delayedAddFile(datetime) {
        datetime.showPicker();
        datetime.style.opacity = '100';
        datetime.style.zIndex = '0';
        const delayedRemove = () => {
            if (datetime.value.length === 0) {
                datetime.style.opacity = '0';
                datetime.style.zIndex = '-1';
                datetime.removeEventListener('blur', delayedRemove);
            }
        };
        datetime.addEventListener('blur', delayedRemove);
    }
    removeFile(id) {
        const file = mainContent.querySelector(`#${id}`);
        file.remove();
    }
    fileInFocus(event) {
        const card = event.target;
        card.insertAdjacentHTML('afterbegin', `
      <span id="remove__file">✖</span>
    `);
        const removeCard = card.querySelector('#remove__file');
        card.addEventListener('mouseleave', () => removeCard.remove());
        const parentCard = card.closest('.main__files__file__info');
        removeCard.addEventListener('click', () => this.removeFile(parentCard.id));
    }
}
exports["default"] = NewFile;


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
/******/ 			"manadger": 0
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
/*!****************************************!*\
  !*** ./src/entry/manadger/manadger.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _manadger_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manadger.html */ "./src/entry/manadger/manadger.html");
/* harmony import */ var _manadger_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manadger.css */ "./src/entry/manadger/manadger.css");
/* harmony import */ var _js_manadger_manadger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/manadger/manadger */ "./src/js/manadger/manadger.ts");
/* harmony import */ var _js_manadger_manadger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_manadger_manadger__WEBPACK_IMPORTED_MODULE_2__);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBRSxDQUFDO1FBQzdFLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0NBQ0Y7QUF4U0QsNkJBd1NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNVNEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJ5QjtBQUNEO0FBQ1kiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvZW50cnkvbWFuYWRnZXIvbWFuYWRnZXIuaHRtbCIsIndlYnBhY2s6Ly9yZXN1bWUvLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvZW50cnkvbWFuYWRnZXIvbWFuYWRnZXIuY3NzP2IwOGMiLCJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3JjL2pzL21hbmFkZ2VyL21hbmFkZ2VyLnRzIiwid2VicGFjazovL3Jlc3VtZS8uL3NyYy9qcy9tYW5hZGdlci91cGxvYWQudHMiLCJ3ZWJwYWNrOi8vcmVzdW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3VtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN1bWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3VtZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3VtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3VtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3VtZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN1bWUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3JjL2VudHJ5L21hbmFkZ2VyL21hbmFkZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL2Zhdmljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vLi4vZmF2aWNvbnMvZmF2aWNvbi0zMngzMi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi8uLi9mYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyk7XG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxyXFxuPGh0bWwgbGFuZz1cXFwicnVcXFwiPlxcclxcbjxoZWFkPlxcclxcbiAgPCEtLSBCYXNpYyBwYWdlIG5lZWRzIC0tPlxcclxcbiAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPlxcclxcbiAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiPlxcclxcbiAgPG1ldGEgbmFtZT1cXFwiZGVzY3JpcHRpb25cXFwiIGNvbnRlbnQ9XFxcIlJlc3VtZSBmcm9udGVuZCBkZXZlbG9wZXJcXFwiPlxcclxcbiAgPHRpdGxlPtCg0LXQt9GO0LzQtSAtINCc0LXQvdC10LTQttC10YAg0YTQsNC50LvQvtCyPC90aXRsZT5cXHJcXG5cXHJcXG4gIDwhLS0gU2l0ZSBmYXZpY29ucyAtLT5cXHJcXG4gIDxsaW5rIHJlbD1cXFwiYXBwbGUtdG91Y2gtaWNvblxcXCIgc2l6ZXM9XFxcIjE4MHgxODBcXFwiIGhyZWY9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIj5cXHJcXG4gIDxsaW5rIHJlbD1cXFwiaWNvblxcXCIgdHlwZT1cXFwiaW1hZ2UvcG5nXFxcIiBzaXplcz1cXFwiMzJ4MzJcXFwiIGhyZWY9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIj5cXHJcXG4gIDxsaW5rIHJlbD1cXFwiaWNvblxcXCIgdHlwZT1cXFwiaW1hZ2UvcG5nXFxcIiBzaXplcz1cXFwiMTZ4MTZcXFwiIGhyZWY9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyArIFwiXFxcIj5cXHJcXG48L2hlYWQ+XFxyXFxuPGJvZHk+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8bmF2aWdhdGlvbiBjbGFzcz1cXFwibmF2aWdhdGlvblxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibmF2aWdhdGlvbl9fYXBwZWxsYXRpb25cXFwiPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm5hdmlnYXRpb25fX2FwcGVsbGF0aW9uX190aXRsZVxcXCI+0JzQtdC90LXQtNC20LXRgCDRhNCw0LnQu9C+0LI8L3NwYW4+XFxyXFxuICAgICAgICA8YSBjbGFzcz1cXFwibmF2aWdhdGlvbl9fYXBwZWxsYXRpb25fX3NlcnZpY2UgcmVtb3ZlX19zdHlsZV9fbGlua1xcXCIgaHJlZj1cXFwiaW5kZXguaHRtbFxcXCI+0KDQtdC30Y7QvNC1PC9hPlxcclxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm5hdmlnYXRpb25fX2FwcGVsbGF0aW9uX19zZXJ2aWNlIHJlbW92ZV9fc3R5bGVfX2xpbmtcXFwiIGhyZWY9XFxcInRhc2tzLmh0bWxcXFwiPtCi0YDQtdC60LXRgCDQt9Cw0LTQsNGHPC9hPlxcclxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm5hdmlnYXRpb25fX2FwcGVsbGF0aW9uX19zZXJ2aWNlIHJlbW92ZV9fc3R5bGVfX2xpbmtcXFwiIGhyZWY9XFxcImNvbGxlY3Rpb24uaHRtbFxcXCI+0KHQsdC+0YDQvdC40Log0LzQuNC60YDQvtC30LDQtNCw0Yc8L2E+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibmF2aWdhdGlvbl9fbWVudVxcXCI+XFxyXFxuICAgICAgICA8YSBjbGFzcz1cXFwibmF2aWdhdGlvbl9fYXBwZWxsYXRpb25fX3NlcnZpY2UgcmVtb3ZlX19zdHlsZV9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+0JLRgdC1INGE0LDQudC70Ys8L2E+XFxyXFxuICAgICAgICA8YSBjbGFzcz1cXFwibmF2aWdhdGlvbl9fYXBwZWxsYXRpb25fX3NlcnZpY2UgcmVtb3ZlX19zdHlsZV9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+0KTQvtGC0L48L2E+XFxyXFxuICAgICAgICA8YSBjbGFzcz1cXFwibmF2aWdhdGlvbl9fYXBwZWxsYXRpb25fX3NlcnZpY2UgcmVtb3ZlX19zdHlsZV9fbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+0JjQt9Cx0YDQsNC90L3Ri9C1PC9hPlxcclxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm5hdmlnYXRpb25fX2FwcGVsbGF0aW9uX19zZXJ2aWNlIHJlbW92ZV9fc3R5bGVfX2xpbmtcXFwiIGhyZWY9XFxcIiNcXFwiPtCj0LTQsNC70LXQvdC90YvQtSDRhNCw0LnQu9GLPC9hPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uXFxcIiBpZD1cXFwidXBsb2FkX19maWxlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPtCX0LDQs9GA0YPQt9C40YLRjCDRhNCw0LnQuzwvYnV0dG9uPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmlnYXRpb25fX2NvbnRhY3RzXFxcIj5cXHJcXG5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9uYXZpZ2F0aW9uPlxcclxcbiAgICA8bWFpbiBjbGFzcz1cXFwibWFpblxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWFpbl9fbmF2aWdhdGlvblxcXCI+PC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWFpbl9fZmlsdGVyXFxcIj5cXHJcXG4gICAgICAgIDxoMSBjbGFzcz1cXFwibWFpbl9fZmlsdGVyX190aXRsZVxcXCI+0JLRgdC1INGE0LDQudC70Ys8L2gxPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibWFpbl9fZmlsdGVyX19pbnN0cnVtZW50c1xcXCI+XFxyXFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJzZWFyY2hcXFwiIHBsYWNlaG9sZGVyPVxcXCLQn9C+0LjRgdC6INGE0LDQudC70LBcXFwiIGlkPVxcXCJzZWFyY2hfX2ZpbGVcXFwiPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYWluX19maWx0ZXJfX2luc3RydW1lbnRzX19zb3J0XFxcIj48ZGl2IGNsYXNzPVxcXCJtYWluX19maWx0ZXJfX2luc3RydW1lbnRzX19zb3J0X19tZWFuaW5nXFxcIj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJpbnN0cnVtZW50c19fc29ydFxcXCI+PHNwYW4gaWQ9XFxcInNvcnRfX3RpdGxlXFxcIj7QodC+0YDRgtC40YDQvtCy0LrQsDwvc3Bhbj48L2Rpdj48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWFpbl9fZmlsdGVyX19pbnN0cnVtZW50c19fZmlsdGVyc1xcXCI+PHNwYW4gaWQ9XFxcImluc3RydW1lbnRzX19maWx0ZXJcXFwiPtCk0LjQu9GM0YLRgNGLPC9zcGFuPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWFpbl9fZmlsZXNcXFwiPjwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1haW5fX3Rhc2tfX2RldGFpbGVkX19jb250YWluZXJcXFwiPjwvZGl2PlxcclxcbiAgICA8L21haW4+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2JvZHk+XFxyXFxuPC9odG1sPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBOZXdGaWxlIGZyb20gJy4vdXBsb2FkJztcclxuXHJcbmNvbnN0IGJ0blVwbG9hZDogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBsb2FkX19maWxlJykhO1xyXG5idG5VcGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc3QgbmV3RmlsZTogTmV3RmlsZSA9IG5ldyBOZXdGaWxlKCk7XHJcbiAgbmV3RmlsZS51cGxvYWRGaWxlLmNhbGwobmV3RmlsZSk7XHJcbn0pO1xyXG4iLCJjb25zdCBtYWluQ29udGVudDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpITtcclxuY29uc3QgbWFpbkZpbGVzOiBIVE1MRGl2RWxlbWVudCA9IG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19maWxlcycpITtcclxuY29uc3QgZmlsZXM6IEhUTUxEaXZFbGVtZW50W10gPSBbXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0ZpbGUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGZpbGU6IG51bGwgfCBIVE1MRGl2RWxlbWVudCA9IG51bGwsXHJcbiAgICBwdWJsaWMgZGVsYXllZDogbnVsbCB8IEhUTUxEaXZFbGVtZW50ID0gbnVsbFxyXG4gICkgeyB9XHJcblxyXG4gIHVwbG9hZEZpbGUoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAobWFpbkNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluX191cGxvYWRfX2JhY2snKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbl9fdXBsb2FkX19iYWNrJyk7XHJcbiAgICBtYWluQ29udGVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcclxuICAgICAgPGRpdiBjbGFzcz1cIm1haW5fX3VwbG9hZF9fZmlsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZWRfX3VwbG9hZF9fZmlsZVwiPjxzcGFuIGlkPVwiY2xvc2VkX191cGxvYWRcIj7inJY8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVwbG9hZF9fZmlsZV9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkX19maWxlX19jb250YWluZXJfX2Nob29zZVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidXBsb2FkX19maWxlX19pbnB1dFwiIGNsYXNzPVwidXBsb2FkX19maWxlX19sYWJlbFwiPtCS0YvQsdC10YDQuNGC0LUg0YTQsNC50Ls8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cInVwbG9hZF9fZmlsZV9faW5wdXRcIiBtdWx0aXBsZT1cIm11bHRpcGxlXCIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInVwbG9hZF9fZmlsZV9fY29udGFpbmVyX190ZXh0XCI+0LjQu9C4PC9zcGFuPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQktGB0YLQsNCy0YzRgtC1INGB0YHRi9C70LrRg1wiIGlkPVwidXBsb2FkX19maWxlX19saW5rXCIgY2xhc3M9XCJzdGFuZGFydF9fbGlua1wiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0J3QsNC30LLQsNC90LjQtSDRhNCw0LnQu9CwXCIgaWQ9XCJ1cGxvYWRfX2ZpbGVfX3RpdGxlXCIgbWF4bGVuZ3RoPVwiMzRcIj5cclxuICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCe0L/QuNGB0LDQvdC40LUg0YTQsNC50LvQsFwiIGlkPVwidXBsb2FkX19maWxlX19kZXNjcmlwdGlvblwiIG1heGxlbmd0aD1cIjg2NFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVwbG9hZF9fZGVsYXllZF9fZGF0ZV9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwidXBsb2FkX19kZWxheWVkX19kYXRlX19pbnB1dFwiIGNsYXNzPVwidXBsb2FkX19kZWxheWVkX19kYXRlX19sYWJlbFwiPtCX0LDQv9C70LDQvdC40YDQvtCy0LDRgtGMINC/0YPQsdC70LjQutCw0YbQuNGOPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiBwbGFjZWhvbGRlcj1cItCd0LUg0L7Qv9GA0LXQtNC10LvQtdC9XCIgaWQ9XCJ1cGxvYWRfX2RlbGF5ZWRfX2RhdGVfX2lucHV0XCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBpZD1cImFkZF9fZmlsZVwiPtCe0L/Rg9Cx0LvQuNC60L7QstCw0YLRjCDRhNCw0LnQuzwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGApO1xyXG5cclxuICAgIGNvbnN0IHVwbG9hZEZpbGVDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gbWFpbkNvbnRlbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3VwbG9hZF9fZmlsZScpITtcclxuICAgIC8vINCX0LDQutGA0YvRgtGMINC+0LrQvdC+INC30LDQs9GA0YPQt9C60Lgg0YTQsNC50LvQsFxyXG4gICAgY29uc3QgYnRuQ2xvc2VkVXBsb2FkOiBIVE1MRGl2RWxlbWVudCA9IHVwbG9hZEZpbGVDb250YWluZXIucXVlcnlTZWxlY3RvcignI2Nsb3NlZF9fdXBsb2FkJykhO1xyXG4gICAgYnRuQ2xvc2VkVXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jbG9zZWRVcGxvYWQodXBsb2FkRmlsZUNvbnRhaW5lcikpO1xyXG4gICAgLy8gVE9ETzog0JfQsNCz0YDRg9C30LjRgtGMINGE0LDQudC7INC/0LXRgNC10L3QvtGB0L7QvFxyXG4gICAgY29uc3QgdXBsb2FkVHJhbnNmZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3VwbG9hZF9fYmFjaycpITtcclxuICAgIHVwbG9hZFRyYW5zZmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBldiA9PiB0aGlzLnVwbG9hZEZpbGVUcmFuc2ZlcihldikpO1xyXG4gICAgLy8g0JfQsNCz0YDRg9C30LjRgtGMINGE0LDQudC7INC/0L4g0YHRgdGL0LvQutC1IFVSTFxyXG4gICAgY29uc3QgdXBsb2FkTGluazogSFRNTElucHV0RWxlbWVudCA9IHVwbG9hZEZpbGVDb250YWluZXIucXVlcnlTZWxlY3RvcignI3VwbG9hZF9fZmlsZV9fbGluaycpITtcclxuICAgIHVwbG9hZExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4geyB0aGlzLnVwbG9hZEZpbGVMaW5rKHVwbG9hZExpbmsudmFsdWUsIHVwbG9hZExpbmspOyB9KTtcclxuICAgIC8vINCX0LDQs9GA0YPQt9C40YLRjCDRhNCw0LnQuyDQuNC3INC60L7QvNC/0YzRjtGC0LXRgNCwINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gICAgY29uc3QgYnRuQ2hvb3NlRmlsZTogSFRNTElucHV0RWxlbWVudCA9IHVwbG9hZEZpbGVDb250YWluZXIucXVlcnlTZWxlY3RvcignI3VwbG9hZF9fZmlsZV9faW5wdXQnKSE7XHJcbiAgICBjb25zdCBsYWJlbENob29zZUZpbGU6IEhUTUxMYWJlbEVsZW1lbnQgPSB1cGxvYWRGaWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy51cGxvYWRfX2ZpbGVfX2xhYmVsJykhO1xyXG4gICAgYnRuQ2hvb3NlRmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY2hvb3NlRmlsZShidG5DaG9vc2VGaWxlLCBsYWJlbENob29zZUZpbGUpKTtcclxuICAgIC8vINCX0LDQv9C70LDQvdC40YDQvtCy0LDRgtGMINC/0YPQsdC70LjQutCw0YbQuNGOXHJcbiAgICBjb25zdCBidG5EZWxheWVkQWRkRmlsZTogSFRNTExhYmVsRWxlbWVudCA9IHVwbG9hZEZpbGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLnVwbG9hZF9fZGVsYXllZF9fZGF0ZV9fbGFiZWwnKSE7XHJcbiAgICBjb25zdCBpbnB1dERlbGF5ZWRBZGRGaWxlOiBIVE1MSW5wdXRFbGVtZW50ID0gdXBsb2FkRmlsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjdXBsb2FkX19kZWxheWVkX19kYXRlX19pbnB1dCcpITtcclxuICAgIGJ0bkRlbGF5ZWRBZGRGaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5kZWxheWVkQWRkRmlsZShpbnB1dERlbGF5ZWRBZGRGaWxlKSk7XHJcbiAgICAvLyDQlNC+0LHQsNCy0LjRgtGMINC/0YPQsdC70LjQutCw0YbQuNGOIFxyXG4gICAgY29uc3QgYnRuQWRkRmlsZTogSFRNTEJ1dHRvbkVsZW1lbnQgPSB1cGxvYWRGaWxlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNhZGRfX2ZpbGUnKSE7XHJcbiAgICBidG5BZGRGaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5hZGRGaWxlKHVwbG9hZEZpbGVDb250YWluZXIsIGJ0bkNob29zZUZpbGUsIHVwbG9hZExpbmspKTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNsb3NlZFVwbG9hZChjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XHJcbiAgICBtYWluQ29udGVudC5yZW1vdmVDaGlsZChjb250YWluZXIpO1xyXG4gICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbl9fdXBsb2FkX19iYWNrJyk7XHJcbiAgfVxyXG5cclxuICAvLyDQn9C+0LrQsNC30LDRgtGMINC40LfQvtCx0YDQsNC20LXQvdC40LUg0L/RgNC10LTQstCw0YDQuNGC0LXQu9GM0L3QvlxyXG4gIHByZXZpZXdJbWFnZShmaWxlOiBzdHJpbmcgfCBGaWxlLCBpbnB1dDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJldmlld0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaWQ9cHJldmlld10nKTtcclxuICAgIGlmIChwcmV2aWV3RWwgIT09IG51bGwpIHByZXZpZXdFbC5yZW1vdmUoKTtcclxuICAgIGlucHV0Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBgXHJcbiAgICAgIDxpbWcgZGF0YS1pZD1cInByZXZpZXdcIiBjbGFzcz1cInVwbG9hZF9fZmlsZV9fcHJldmlld1wiPlxyXG4gICAgYCk7XHJcbiAgICBpZiAodHlwZW9mIGZpbGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGNvbnN0IHByZXZpZXdFbDogSFRNTEltYWdlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWlkPXByZXZpZXddJykhO1xyXG4gICAgICBwcmV2aWV3RWwuc3JjID0gZmlsZTtcclxuICAgICAgcHJldmlld0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChwcmV2aWV3RWwuc3JjKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHByZXZpZXdFbC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcclxuICAgICAgICBwcmV2aWV3RWwucmVtb3ZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChmaWxlLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA9PT0gMCl7XHJcbiAgICAgIGNvbnN0IHByZXZpZXdFbDogSFRNTEltYWdlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWlkPXByZXZpZXddJykhO1xyXG4gICAgICBwcmV2aWV3RWwuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgICAgcHJldmlld0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChwcmV2aWV3RWwuc3JjKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaG9vc2VGaWxlKGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LCBsYWJlbDogSFRNTExhYmVsRWxlbWVudCkge1xyXG4gICAgaW5wdXQuc3R5bGUub3BhY2l0eSA9ICcxMDAnO1xyXG4gICAgaW5wdXQuc3R5bGUuekluZGV4ID0gJzAnO1xyXG4gICAgbGFiZWwuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgIGxhYmVsLnN0eWxlLmhlaWdodCA9ICdtYXgtY29udGVudCc7XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGVzOiBGaWxlW10gPSBBcnJheS5mcm9tKGlucHV0LmZpbGVzISk7XHJcbiAgICAgIGZpbGVzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIHRoaXMucHJldmlld0ltYWdlKGVsLCBpbnB1dCk7XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86INCg0LXQsNC70LjQt9C+0LLQsNGC0Ywg0LvQvtCz0LjQutGDINC30LDQs9GA0YPQt9C60Lgg0YTQsNC50LvQsCDRgSDQv9C+0LzQvtGJ0YzRjiDQv9C10YDQtdC90L7RgdCwXHJcbiAgdXBsb2FkRmlsZVRyYW5zZmVyKGV2ZW50OiBFdmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KVxyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVMaW5rKGxpbms6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHZhbGlkYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBsZXQgdmFsdWU6IG51bGwgfCBudW1iZXIgPSBudWxsXHJcblxyXG4gICAgaWYgKGxpbmsubGVuZ3RoICE9PSAwKSB2YWx1ZSA9IGxpbmsuc2VhcmNoKC9eaHR0cHM/OlxcL1xcLy4rXFwuLiovKTtcclxuICAgIGlmICh2YWx1ZSA9PT0gLTEpIHZhbGlkYXRlID0gZmFsc2U7XHJcbiAgICBpZiAodmFsdWUgPT09IDAgJiYgdmFsaWRhdGUgIT09IG51bGwpIHZhbGlkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4gdmFsaWRhdGU7XHJcbiAgfVxyXG5cclxuICB1cGxvYWRGaWxlTGluayhsaW5rOiBzdHJpbmcsIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICBsZXQgYnRuQ2xlYXJMaW5rOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGVhcl9faW5wdXRfX2xpbmsnKTtcclxuICAgIGlmIChidG5DbGVhckxpbmsgPT09IG51bGwpIHtcclxuICAgICAgaW5wdXQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGBcclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNsZWFyX19pbnB1dF9fbGlua1wiPtCe0YfQuNGB0YLQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgYCk7XHJcbiAgICAgIGJ0bkNsZWFyTGluayA9IG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGVhcl9faW5wdXRfX2xpbmsnKTtcclxuICAgICAgYnRuQ2xlYXJMaW5rIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGNvbnN0IHByZXZpZXdFbDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pZD1wcmV2aWV3XScpITtcclxuICAgICAgICBpZiAocHJldmlld0VsICE9PSBudWxsKSBwcmV2aWV3RWwucmVtb3ZlKCk7XHJcbiAgICAgICAgYnRuQ2xlYXJMaW5rIS5yZW1vdmUoKTtcclxuICAgICAgICBpZiAoaW5wdXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2YWxpZF9fbGluaycpKSBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZF9fbGluaycpO1xyXG4gICAgICAgIGlmIChpbnB1dC5jbGFzc0xpc3QuY29udGFpbnMoJ2ludmFsaWRfX2xpbmsnKSkgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZF9fbGluaycpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHZhbGlkYXRlOiBib29sZWFuID0gdGhpcy52YWxpZGF0ZUxpbmsobGluayk7XHJcbiAgICBpZiAodmFsaWRhdGUgPT09IGZhbHNlKSB7XHJcbiAgICAgIGlmIChpbnB1dC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZhbGlkX19saW5rJykpIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkX19saW5rJyk7XHJcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWRfX2xpbmsnKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGlucHV0LmNsYXNzTGlzdC5jb250YWlucygnaW52YWxpZF9fbGluaycpKSBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkX19saW5rJyk7XHJcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCd2YWxpZF9fbGluaycpO1xyXG4gICAgdGhpcy5wcmV2aWV3SW1hZ2UoaW5wdXQudmFsdWUsIGlucHV0KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUZpbGUoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgbGlua3NTYXZpbmc6IEhUTUxMaW5rRWxlbWVudFtdID0gQXJyYXkuZnJvbShtYWluRmlsZXMucXVlcnlTZWxlY3RvckFsbCgnI2xpbmtfX2Zvcl9fc2F2aW5nJykpO1xyXG4gICAgY29uc3QgbGlua1NhdmluZyA9IGxpbmtzU2F2aW5nW2xpbmtzU2F2aW5nLmxlbmd0aCAtIDFdO1xyXG4gICAgY29uc29sZS5sb2cobGlua1NhdmluZywgZmlsZU5hbWUpXHJcbiAgICAvLyBsaW5rU2F2aW5nLm9uY2xpY2sgPSAoKSA9PiB7IGxpbmtTYXZpbmcuZG93bmxvYWQgPSBmaWxlTmFtZTsgfTtcclxuICB9XHJcblxyXG4gIGluZGV4R2VuZXJhdG9yKCk6IG51bWJlciB7XHJcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IDE7XHJcbiAgICBpZiAoZmlsZXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGZpbGVzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGlmIChOdW1iZXIoZWwuaWQuc2xpY2UoNikpID49IGluZGV4KSBpbmRleCA9IE51bWJlcihlbC5pZC5zbGljZSg2KSkgKyAxO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpbmRleDtcclxuICB9XHJcblxyXG4gIGFkZEZpbGUoY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCwgYnRuOiBIVE1MSW5wdXRFbGVtZW50LCBsaW5rOiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVMaW5rKGxpbmsudmFsdWUpO1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmluZGV4R2VuZXJhdG9yKCk7XHJcbiAgICBjb25zdCB0aXRsZUZpbGVFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyN1cGxvYWRfX2ZpbGVfX3RpdGxlJykhO1xyXG4gICAgbGV0IHRpdGxlRmlsZTogc3RyaW5nID0gdGl0bGVGaWxlRWxlbWVudC52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRmlsZUVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignI3VwbG9hZF9fZmlsZV9fZGVzY3JpcHRpb24nKSE7XHJcbiAgICBsZXQgZGVzY3JpcHRpb25GaWxlOiBzdHJpbmcgPSBkZXNjcmlwdGlvbkZpbGVFbGVtZW50LnZhbHVlO1xyXG4gICAgaWYgKGRlc2NyaXB0aW9uRmlsZS5sZW5ndGggPT09IDApIGRlc2NyaXB0aW9uRmlsZSA9ICfQntC/0LjRgdCw0L3QuNGPINC90LXRgic7XHJcbiAgICBpZiAoYnRuLnZhbHVlLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChidG4uZmlsZXMhWzBdKTtcclxuICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyBldmVudCA9PiB7XHJcbiAgICAgICAgaWYgKHRpdGxlRmlsZS5sZW5ndGggPT09IDApIHRpdGxlRmlsZSA9IGJ0bi5maWxlcyFbMF0ubmFtZTtcclxuICAgICAgICBjb25zdCBpbWc6IEhUTUxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBpbWcuc3JjID0gYCR7ZXZlbnQudGFyZ2V0IS5yZXN1bHR9YDtcclxuICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgbWFpbkZpbGVzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9fZmlsZXNfX2ZpbGVfX2luZm9cIiBpZD1cImZpbGVfXyR7aW5kZXh9XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fX2ZpbGVzX19maWxlX19jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1nLnNyY31cIiBhbHQ9XCIke2J0bi5maWxlcyFbMF0ubmFtZX1cIiBjbGFzcz1cIm1haW5fX2ZpbGVzX19maWxlX19jYXJkX19pbWFnZVwiPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX19maWxlc19fZmlsZV9fY2FyZF9fdGl0bGVcIj4ke3RpdGxlRmlsZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1haW5fX2ZpbGVzX19maWxlX19jYXJkX190eXBlXCI+JHtidG4uZmlsZXMhWzBdLnR5cGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIGApO1xyXG4gICAgICAgICAgdGhpcy5maWxlID0gbWFpbkZpbGVzLnF1ZXJ5U2VsZWN0b3IoYCNmaWxlX18ke2luZGV4fWApO1xyXG4gICAgICAgICAgaWYgKHRoaXMuZmlsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkOiBIVE1MRGl2RWxlbWVudCA9IHRoaXMuZmlsZS5xdWVyeVNlbGVjdG9yKCcubWFpbl9fZmlsZXNfX2ZpbGVfX2NhcmQnKSE7XHJcbiAgICAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGV2ID0+IHRoaXMuZmlsZUluRm9jdXMoZXYpKTtcclxuICAgICAgICAgICAgZmlsZXMucHVzaCh0aGlzLmZpbGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaW1nLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICBtYWluRmlsZXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX19maWxlc19fZmlsZV9faW5mb1wiIGlkPVwiZmlsZV9fJHtpbmRleH1cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9fZmlsZXNfX2ZpbGVfX2NhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX19maWxlc19fZmlsZV9fY2FyZF9faW1hZ2UgY2FyZF9fZmlsZV9faW1hZ2VcIj48YSBocmVmPVwiJHtldmVudC50YXJnZXQhLnJlc3VsdH1cIiBpZD1cImxpbmtfX2Zvcl9fc2F2aW5nXCI+PC9hPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX19maWxlc19fZmlsZV9fY2FyZF9fdGl0bGVcIj4ke3RpdGxlRmlsZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1haW5fX2ZpbGVzX19maWxlX19jYXJkX190eXBlXCI+JHtidG4uZmlsZXMhWzBdLnR5cGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIGApO1xyXG4gICAgICAgICAgdGhpcy5zYXZlRmlsZSh0aXRsZUZpbGUpO1xyXG4gICAgICAgICAgdGhpcy5maWxlID0gbWFpbkZpbGVzLnF1ZXJ5U2VsZWN0b3IoYCNmaWxlX18ke2luZGV4fWApO1xyXG4gICAgICAgICAgaWYgKHRoaXMuZmlsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkOiBIVE1MRGl2RWxlbWVudCA9IHRoaXMuZmlsZS5xdWVyeVNlbGVjdG9yKCcubWFpbl9fZmlsZXNfX2ZpbGVfX2NhcmQnKSE7XHJcbiAgICAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGV2ID0+IHRoaXMuZmlsZUluRm9jdXMoZXYpKTtcclxuICAgICAgICAgICAgZmlsZXMucHVzaCh0aGlzLmZpbGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNsb3NlZFVwbG9hZChjb250YWluZXIpO1xyXG4gICAgfSBlbHNlIGlmIChsaW5rLnZhbHVlLmxlbmd0aCAhPT0gMCAmJiB2YWxpZGF0ZSkge1xyXG4gICAgICBpZiAodGl0bGVGaWxlLmxlbmd0aCA9PT0gMCkgdGl0bGVGaWxlID0gJ9CR0LXQt9GL0LzRj9C90L3Ri9C5JztcclxuICAgICAgY29uc3QgaW1nOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgIGltZy5zcmMgPSBsaW5rLnZhbHVlO1xyXG4gICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIG1haW5GaWxlcy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX19maWxlc19fZmlsZV9faW5mb1wiIGlkPVwiZmlsZV9fJHtpbmRleH1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fX2ZpbGVzX19maWxlX19jYXJkXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2xpbmsudmFsdWV9XCIgYWx0PVwiVXBsb2FkZWQgaW1hZ2UgdXNlclwiIGNsYXNzPVwibWFpbl9fZmlsZXNfX2ZpbGVfX2NhcmRfX2ltYWdlXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9fZmlsZXNfX2ZpbGVfX2NhcmRfX3RpdGxlXCI+JHt0aXRsZUZpbGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWFpbl9fZmlsZXNfX2ZpbGVfX2NhcmRfX3R5cGVcIj5JbWFnZTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGApO1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IG1haW5GaWxlcy5xdWVyeVNlbGVjdG9yKGAjZmlsZV9fJHtpbmRleH1gKTtcclxuICAgICAgICBpZiAodGhpcy5maWxlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBjb25zdCBjYXJkOiBIVE1MRGl2RWxlbWVudCA9IHRoaXMuZmlsZS5xdWVyeVNlbGVjdG9yKCcubWFpbl9fZmlsZXNfX2ZpbGVfX2NhcmQnKSE7XHJcbiAgICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBldiA9PiB0aGlzLmZpbGVJbkZvY3VzKGV2KSk7XHJcbiAgICAgICAgICBmaWxlcy5wdXNoKHRoaXMuZmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBpbWcub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICBtYWluRmlsZXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9fZmlsZXNfX2ZpbGVfX2luZm9cIiBpZD1cImZpbGVfXyR7aW5kZXh9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX19maWxlc19fZmlsZV9fY2FyZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX19maWxlc19fZmlsZV9fY2FyZF9faW1hZ2UgY2FyZF9fZmlsZV9faW1hZ2VcIj48YSBocmVmPVwiJHtsaW5rLnZhbHVlfVwiIGlkPVwibGlua19fZm9yX19zYXZpbmdcIj48L2E+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9fZmlsZXNfX2ZpbGVfX2NhcmRfX3RpdGxlXCI+JHt0aXRsZUZpbGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWFpbl9fZmlsZXNfX2ZpbGVfX2NhcmRfX3R5cGVcIj5GaWxlPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYCk7XHJcbiAgICAgICAgdGhpcy5zYXZlRmlsZSh0aXRsZUZpbGUpO1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IG1haW5GaWxlcy5xdWVyeVNlbGVjdG9yKGAjZmlsZV9fJHtpbmRleH1gKTtcclxuICAgICAgICBpZiAodGhpcy5maWxlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBjb25zdCBjYXJkOiBIVE1MRGl2RWxlbWVudCA9IHRoaXMuZmlsZS5xdWVyeVNlbGVjdG9yKCcubWFpbl9fZmlsZXNfX2ZpbGVfX2NhcmQnKSE7XHJcbiAgICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBldiA9PiB0aGlzLmZpbGVJbkZvY3VzKGV2KSk7XHJcbiAgICAgICAgICBmaWxlcy5wdXNoKHRoaXMuZmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmNsb3NlZFVwbG9hZChjb250YWluZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHZhbGlkYXRlID09PSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyRm9yQnRuOiBIVE1MTGFiZWxFbGVtZW50ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy51cGxvYWRfX2ZpbGVfX2xhYmVsJykhO1xyXG4gICAgICAgIGNvbnRhaW5lckZvckJ0bi5jbGFzc0xpc3QuYWRkKCdoZWFkX19zaGFrZScpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgY29udGFpbmVyRm9yQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRfX3NoYWtlJyk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgfVxyXG4gICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2hlYWRfX3NoYWtlJyk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZF9fc2hha2UnKTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlbGF5ZWRBZGRGaWxlKGRhdGV0aW1lOiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICBkYXRldGltZS5zaG93UGlja2VyKCk7XHJcbiAgICBkYXRldGltZS5zdHlsZS5vcGFjaXR5ID0gJzEwMCc7XHJcbiAgICBkYXRldGltZS5zdHlsZS56SW5kZXggPSAnMCc7XHJcbiAgICBjb25zdCBkZWxheWVkUmVtb3ZlID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICBpZiAoZGF0ZXRpbWUudmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgZGF0ZXRpbWUuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgICBkYXRldGltZS5zdHlsZS56SW5kZXggPSAnLTEnO1xyXG4gICAgICAgIGRhdGV0aW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBkZWxheWVkUmVtb3ZlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGRhdGV0aW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBkZWxheWVkUmVtb3ZlKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUZpbGUoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgZmlsZTogSFRNTERpdkVsZW1lbnQgPSBtYWluQ29udGVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKSE7XHJcbiAgICBmaWxlLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgZmlsZUluRm9jdXMoZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3QgY2FyZDogSFRNTERpdkVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBjYXJkLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGBcclxuICAgICAgPHNwYW4gaWQ9XCJyZW1vdmVfX2ZpbGVcIj7inJY8L3NwYW4+XHJcbiAgICBgKTtcclxuICAgIGNvbnN0IHJlbW92ZUNhcmQ6IEhUTUxEaXZFbGVtZW50ID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcjcmVtb3ZlX19maWxlJykhO1xyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gcmVtb3ZlQ2FyZC5yZW1vdmUoKSk7XHJcbiAgICBjb25zdCBwYXJlbnRDYXJkOiBIVE1MRGl2RWxlbWVudCA9IGNhcmQuY2xvc2VzdCgnLm1haW5fX2ZpbGVzX19maWxlX19pbmZvJykhO1xyXG4gICAgcmVtb3ZlQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMucmVtb3ZlRmlsZShwYXJlbnRDYXJkLmlkKSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFuYWRnZXJcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9tYW5hZGdlci5odG1sJztcclxuaW1wb3J0ICcuL21hbmFkZ2VyLmNzcyc7XHJcbmltcG9ydCAnLi4vLi4vanMvbWFuYWRnZXIvbWFuYWRnZXInO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=