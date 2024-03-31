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

/***/ "./src/entry/tasks/tasks.html":
/*!************************************!*\
  !*** ./src/entry/tasks/tasks.html ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../favicons/apple-touch-icon.png */ \"./src/favicons/apple-touch-icon.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../favicons/favicon-32x32.png */ \"./src/favicons/favicon-32x32.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../favicons/favicon-16x16.png */ \"./src/favicons/favicon-16x16.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"ru\\\">\\r\\n<head>\\r\\n  <!-- Basic page needs -->\\r\\n  <meta charset=\\\"UTF-8\\\">\\r\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n  <meta name=\\\"description\\\" content=\\\"Resume frontend developer\\\">\\r\\n  <title>Резюме - Трекер задач</title>\\r\\n\\r\\n  <!-- Site favicons -->\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"180x180\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\r\\n  <link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"32x32\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\">\\r\\n  <link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"16x16\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\">\\r\\n</head>\\r\\n<body>\\r\\n  <div class=\\\"row\\\">\\r\\n    <navigation class=\\\"navigation\\\">\\r\\n      <div class=\\\"navigation__appellation\\\">\\r\\n        <span class=\\\"navigation__appellation__title\\\">Трекер задач</span>\\r\\n        <a class=\\\"navigation__appellation__service remove__style__link\\\" href=\\\"index.html\\\">Резюме</a>\\r\\n        <a class=\\\"navigation__appellation__service remove__style__link\\\" href=\\\"manadger.html\\\">Менеджер файлов</a>\\r\\n        <a class=\\\"navigation__appellation__service remove__style__link\\\" href=\\\"collection.html\\\">Сборник микрозадач</a>\\r\\n      </div>\\r\\n      <div class=\\\"navigation__menu\\\">\\r\\n        <a class=\\\"navigation__menu__task remove__style__link\\\" href=\\\"#\\\">Задачи</a>\\r\\n        <a class=\\\"navigation__menu__favourites remove__style__link\\\" href=\\\"#\\\">Избранные</a>\\r\\n        <a class=\\\"navigation__menu__board remove__style__link\\\" href=\\\"#\\\">Доски задач</a>\\r\\n        <button class=\\\"button\\\" id=\\\"create__task\\\" type=\\\"button\\\">Создать задачу</button>\\r\\n      </div>\\r\\n      <div class=\\\"navigation__contacts\\\">\\r\\n\\r\\n      </div>\\r\\n    </navigation>\\r\\n    <main class=\\\"main\\\">\\r\\n      <div class=\\\"main__navigation\\\"></div>\\r\\n      <div class=\\\"main__filter\\\">\\r\\n        <h1 class=\\\"main__filter__title\\\">Новая доска</h1>\\r\\n        <div class=\\\"main__filter__instruments\\\">\\r\\n          <input type=\\\"search\\\" placeholder=\\\"Поиск по задачам\\\" id=\\\"search__task\\\">\\r\\n          <div class=\\\"main__filter__instruments__sort\\\"><div class=\\\"main__filter__instruments__sort__meaning\\\"></div><div class=\\\"instruments__sort\\\"><span id=\\\"sort__title\\\">Сортировка</span></div></div>\\r\\n          <div class=\\\"main__filter__instruments__filters\\\"><span id=\\\"instruments__filter\\\">Фильтры</span></div>\\r\\n        </div>\\r\\n      </div>\\r\\n      <div class=\\\"main__tasks\\\">\\r\\n        <div class=\\\"main__tasks__open\\\">\\r\\n          <div class=\\\"main__tasks__menu\\\">\\r\\n            <span>Открыт</span>\\r\\n            <div class=\\\"main__tasks__task__instruments\\\">&#8285</div>\\r\\n          </div>\\r\\n          <div class=\\\"main__tasks__all\\\"></div>\\r\\n        </div>\\r\\n        <div class=\\\"main__tasks__work\\\">\\r\\n          <div class=\\\"main__tasks__menu\\\">\\r\\n            <span>В работе</span>\\r\\n            <div class=\\\"main__tasks__task__instruments\\\">&#8285</div>\\r\\n          </div>\\r\\n          <div class=\\\"main__tasks__all\\\"></div>\\r\\n        </div>\\r\\n        <div class=\\\"main__tasks__close\\\">\\r\\n          <div class=\\\"main__tasks__menu\\\">\\r\\n            <span>Закрыт</span>\\r\\n            <div class=\\\"main__tasks__task__instruments\\\">&#8285</div>\\r\\n          </div>\\r\\n          <div class=\\\"main__tasks__all\\\"></div>\\r\\n        </div>\\r\\n      </div>\\r\\n      <div class=\\\"main__task__detailed__container\\\"></div>\\r\\n    </main>\\r\\n  </div>\\r\\n</body>\\r\\n</html>\\r\\n\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://resume/./src/entry/tasks/tasks.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = String(url.__esModule ? url.default : url);\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://resume/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/entry/tasks/tasks.css":
/*!***********************************!*\
  !*** ./src/entry/tasks/tasks.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://resume/./src/entry/tasks/tasks.css?");

/***/ }),

/***/ "./src/entry/tasks/tasks.js":
/*!**********************************!*\
  !*** ./src/entry/tasks/tasks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tasks_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.html */ \"./src/entry/tasks/tasks.html\");\n/* harmony import */ var _tasks_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.css */ \"./src/entry/tasks/tasks.css\");\n/* harmony import */ var _js_tasks_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/tasks/tasks */ \"./src/js/tasks/tasks.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://resume/./src/entry/tasks/tasks.js?");

/***/ }),

/***/ "./src/js/tasks/create.js":
/*!********************************!*\
  !*** ./src/js/tasks/create.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTasks: () => (/* binding */ getTasks),\n/* harmony export */   redrawTasks: () => (/* binding */ redrawTasks)\n/* harmony export */ });\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort */ \"./src/js/tasks/sort.js\");\n// eslint-disable-next-line import/no-cycle\r\n\r\n\r\nconst mainContent = document.querySelector('.main');\r\nconst allTasks = mainContent.querySelector('.main__tasks');\r\nconst btnCreateTask = document.querySelector('#create__task');\r\nconst taskAll = [];\r\n\r\n// Возможность доступа к задачам в других модулях\r\nfunction getTasks() {\r\n  return taskAll;\r\n}\r\n\r\n// Функция для перерисовки элементов в контейнере\r\nfunction redrawTasks(tasks, container) {\r\n  tasks.forEach(task => {\r\n    container.appendChild(container.children[`task__${task.id}`]);\r\n  });\r\n}\r\n\r\nfunction addOpportunitiesTask(task, container) {\r\n  // Добавленная задача в контейнер\r\n  const buildTask = container.querySelector(`#task__${task.id}`);\r\n\r\n  // Показать/скрыть дополнительную информацию о задаче\r\n  buildTask.addEventListener('click', event => {\r\n    const detailedInfoContainer = mainContent.querySelector('.main__task__detailed__container');\r\n    if (event.target.classList.contains('main__tasks__task')) {\r\n      if (detailedInfoContainer.classList.contains('show__detailed')) {\r\n        removeDetailedInfo(detailedInfoContainer);\r\n      } else {\r\n        taskAll.forEach(el => {\r\n          if (el.id === task.id) {\r\n            showDetailedInfo(detailedInfoContainer, el);\r\n          }\r\n        });\r\n      }\r\n    } else if (event.target.classList.contains('main__tasks__task__info__instruments') && detailedInfoContainer.classList.contains('show__detailed')) {\r\n      removeDetailedInfo(detailedInfoContainer);\r\n    }\r\n  });\r\n\r\n  // TODO: Закрепить/переместить задачу выше остальных задач\r\n  const taskCliped = buildTask.querySelector('.main__tasks__task__info__instruments__clip');\r\n  taskCliped.addEventListener('click', () => {\r\n    taskCliped.classList.toggle('task__cliped');\r\n    const { cliped } = task.parametrs;\r\n    /* eslint-disable no-return-assign, no-param-reassign */\r\n    let tasks;\r\n    if (cliped === true) {\r\n      task.parametrs.cliped = false;\r\n      tasks = taskAll.sort((a, b) => a.id - b.id).filter(el => {\r\n        if (el.parametrs.cliped === true) return false;\r\n        return true;\r\n      });\r\n    } else {\r\n      task.parametrs.cliped = true;\r\n      tasks = (0,_sort__WEBPACK_IMPORTED_MODULE_0__.getTasksWithFixed)();\r\n    }\r\n    // Базовая сортировка при закреплении задачи\r\n    const sortedTask = (0,_sort__WEBPACK_IMPORTED_MODULE_0__.basicSorting)(tasks);\r\n    redrawTasks(sortedTask, buildTask.closest('.main__tasks__all'));\r\n  });\r\n\r\n  // Удалить задачу из контейнера\r\n  buildTask.querySelector('.main__tasks__task__info__instruments__remove').addEventListener('click', () => {\r\n    taskAll.forEach(el => {\r\n      if (el.id === task.id) taskAll.splice(taskAll.indexOf(el), 1);\r\n    });\r\n    container.removeChild(buildTask);\r\n    if (taskAll.length === 0) container.closest('.main__tasks__open').style.gap = '';\r\n  });\r\n}\r\n\r\n// Функция, исполняющая \"Скрыть дополнительную информацию о задаче\"\r\nfunction removeDetailedInfo(container) {\r\n  const detailedInfoContainer = container;\r\n  detailedInfoContainer.classList.remove('show__detailed');\r\n  detailedInfoContainer.classList.add('remove__detailed');\r\n  detailedInfoContainer.style.cssText = 'border-left: none;';\r\n  detailedInfoContainer.innerHTML = '';\r\n}\r\n\r\n// Функция, исполняющая \"Показать дополнительную информацию о задаче\"\r\nfunction showDetailedInfo(container, taskInfo) {\r\n  const detailedInfoContainer = container;\r\n  const { title, parametrs, priority } = taskInfo;\r\n  let {\r\n    description,\r\n    date,\r\n    deadline,\r\n    author,\r\n    executor,\r\n  } = taskInfo;\r\n  if (description.length === 0) {\r\n    description = 'Добавьте описание задачи, чтобы исполнителю было понятно, что нужно сделать в рамках задачи';\r\n  }\r\n  if (date.length === 0) date = '-';\r\n  if (deadline.length === 0) deadline = '-';\r\n  if (author.length === 0) author = '-';\r\n  if (executor.length === 0) executor = '-';\r\n  let favouritedClass = 'main__task__detailed__menu__favourites__add';\r\n  if (parametrs.favourited === true) favouritedClass = 'main__task__detailed__menu__favourites__add favourites__added';\r\n  let likedClass = 'main__task__detailed__menu__liked__add';\r\n  if (parametrs.liked.status === true) likedClass = 'main__task__detailed__menu__liked__add liked__added';\r\n  detailedInfoContainer.classList.remove('remove__detailed');\r\n  detailedInfoContainer.classList.add('show__detailed');\r\n  detailedInfoContainer.style.cssText = 'border-left: 8px solid var(--color-main-blue);';\r\n  detailedInfoContainer.innerHTML = `\r\n    <div class=\"main__task__detailed\">\r\n      <div class=\"main__task__detailed__menu\">\r\n        <span class=\"main__task__detailed__name\">Задачи</span>\r\n        <div class=\"main__task__detailed__menu__instruments\">\r\n          <div class=\"${favouritedClass}\" id=\"add__favourites\"></div>\r\n          <div class=\"${likedClass}\" id=\"add__liked\"></div>\r\n          <div class=\"main__task__detailed__menu__closed\"><span id=\"closed__detailed\">✖</span></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"main__tasks__detailed__info__basic\">\r\n        <div class=\"main__tasks__detailed__info__timer\"></div>\r\n        <div class=\"main__tasks__detailed__info__block\"><span class=\"main__tasks__detailed__info__block__title\">${title}</span></div>\r\n        <div class=\"main__tasks__detailed__info__block\"><span class=\"main__tasks__detailed__info__block__description\">${description}</span></div>\r\n      </div>\r\n      <ul class=\"main__tasks__detailed__info__all\">\r\n        <li class=\"main__tasks__detailed__info__status\"><span class=\"detailed__info__name\">Статус</span><span>Открыта</span></li>\r\n        <li class=\"main__tasks__detailed__info__priority\"><span class=\"detailed__info__name\">Приоритет</span><span>${priority.meaning}</span></li>\r\n        <li class=\"main__tasks__detailed__info__date\"><span class=\"detailed__info__name\">Дата начала</span><span>${date}</span></li>\r\n        <li class=\"main__tasks__detailed__info__deadline\"><span class=\"detailed__info__name\">Дедлайн</span><span>${deadline}</span></li>\r\n        <li class=\"main__tasks__detailed__info__author\"><span class=\"detailed__info__name\">Автор</span><span>${author}</span></li>\r\n        <li class=\"main__tasks__detailed__info__executor\"><span class=\"detailed__info__name\">Исполнитель</span><span>${executor}</span></li>\r\n      </ul>\r\n      <div class=\"main__tasks__detailed__comments\">\r\n      </div>\r\n    </div>\r\n  `;\r\n\r\n  // TODO: Возможность добавить задачу в избранное\r\n  const addTaskFavourites = detailedInfoContainer.querySelector('#add__favourites');\r\n  addTaskFavourites.addEventListener('click', () => {\r\n    addTaskFavourites.classList.toggle('favourites__added');\r\n    const { favourited } = taskInfo.parametrs;\r\n    /* eslint-disable no-return-assign, no-param-reassign */\r\n    if (favourited === true) {\r\n      taskInfo.parametrs.favourited = false;\r\n    } else {\r\n      taskInfo.parametrs.favourited = true;\r\n    }\r\n    // TODO: add task favourites\r\n  });\r\n\r\n  // TODO: Возможность отметить задачу понравившейся\r\n  const addTaskLiked = detailedInfoContainer.querySelector('#add__liked');\r\n  addTaskLiked.addEventListener('click', () => {\r\n    addTaskLiked.classList.toggle('liked__added');\r\n    const { liked } = taskInfo.parametrs;\r\n    /* eslint-disable no-return-assign, no-param-reassign */\r\n    if (liked.status === true) {\r\n      taskInfo.parametrs.liked.status = false;\r\n      if (liked.quantity > 0) taskInfo.parametrs.liked.quantity -= 1;\r\n    } else {\r\n      taskInfo.parametrs.liked.status = true;\r\n      taskInfo.parametrs.liked.quantity += 1;\r\n    }\r\n    // TODO: add task in liked\r\n  });\r\n\r\n  detailedInfoContainer.querySelector('#closed__detailed').addEventListener('click', () => {\r\n    removeDetailedInfo(detailedInfoContainer);\r\n  });\r\n}\r\n\r\n// Отменить создание задачи\r\nfunction closedCreate() {\r\n  const createdTask = mainContent.querySelector('.main__create__task');\r\n  mainContent.removeChild(createdTask);\r\n  mainContent.classList.remove('main__create__back');\r\n  btnCreateTask.addEventListener('click', createTask);\r\n}\r\n\r\n// Сгенерировать порядковый идентификатор для задачи\r\nfunction indexGenerator(tasks) {\r\n  let index = 1;\r\n  if (tasks.length !== 0) {\r\n    tasks.forEach(el => {\r\n      if (el.id >= index) index = el.id + 1;\r\n    });\r\n  }\r\n  return index;\r\n}\r\n\r\n// Добавить задачу в контейнер\r\nfunction addTask() {\r\n  const createdTask = mainContent.querySelector('.main__create__task');\r\n  const areaTask = allTasks.querySelector('.main__tasks__open');\r\n  areaTask.style.gap = '15px';\r\n  const openTask = areaTask.querySelector('.main__tasks__all');\r\n\r\n  const index = indexGenerator(taskAll);\r\n  let titleTask = createdTask.querySelector('#create__task__title').value;\r\n  if (titleTask.length === 0) titleTask = 'Новая задача';\r\n  let authorTask = createdTask.querySelector('#create__task__info__author').value;\r\n  if (authorTask.length === 0) authorTask = 'Пользователь';\r\n  let priorityTask = createdTask.querySelector('#create__task__info__priority').value;\r\n  switch (priorityTask) {\r\n    case 'Низкий':\r\n      priorityTask = { meaning: 'Низкий', dimension: 2 };\r\n      break;\r\n    case 'Средний':\r\n      priorityTask = { meaning: 'Средний', dimension: 3 };\r\n      break;\r\n    case 'Кретичный':\r\n      priorityTask = { meaning: 'Кретичный', dimension: 4 };\r\n      break;\r\n    default:\r\n      priorityTask = { meaning: '-', dimension: 1 };\r\n      break;\r\n  }\r\n  const taskInfo = {\r\n    id: index,\r\n    title: titleTask,\r\n    description: createdTask.querySelector('#create__task__description').value,\r\n    priority: priorityTask,\r\n    date: createdTask.querySelector('#create__task__info__date').value,\r\n    deadline: createdTask.querySelector('#create__task__info__deadline').value,\r\n    author: authorTask,\r\n    executor: createdTask.querySelector('#create__task__info__executor').value,\r\n    parametrs: {\r\n      favourited: false,\r\n      liked: {\r\n        status: false,\r\n        quantity: 0,\r\n      },\r\n      cliped: false,\r\n    },\r\n  };\r\n  taskAll.push(taskInfo);\r\n  openTask.insertAdjacentHTML('beforeend', `\r\n    <div class=\"main__tasks__task\" id=\"task__${index}\">\r\n      <div class=\"main__tasks__task__info\">\r\n        <span class=\"main__tasks__task__info__user\">${authorTask}</span>\r\n        <div class=\"main__tasks__task__info__instruments\">\r\n          <div class=\"main__tasks__task__info__instruments__clip\"></div>\r\n          <div class=\"main__tasks__task__info__instruments__remove\">✖</div>\r\n        </div>\r\n      </div>\r\n      <span class=\"main__tasks__task__title\">${titleTask}</span>\r\n    </div>\r\n  `);\r\n  addOpportunitiesTask(taskInfo, openTask);\r\n  // Базовая сортировка при добавлении задачи\r\n  const sortedTask = (0,_sort__WEBPACK_IMPORTED_MODULE_0__.basicSorting)();\r\n  redrawTasks(sortedTask, openTask);\r\n  closedCreate();\r\n}\r\n\r\n// Создать задачу\r\nfunction createTask() {\r\n  btnCreateTask.removeEventListener('click', createTask);\r\n  mainContent.classList.add('main__create__back');\r\n  mainContent.insertAdjacentHTML('beforeend', `\r\n    <div class=\"main__create__task\">\r\n      <div class=\"closed__create__task\"><span id=\"closed__create\">✖</span></div>\r\n      <input type=\"text\" placeholder=\"Название задачи\" id=\"create__task__title\" maxlength=\"34\">\r\n      <textarea type=\"text\" placeholder=\"Описание задачи\" id=\"create__task__description\" maxlength=\"864\"></textarea>\r\n      <div class=\"create__task__info\">\r\n        <div class=\"create__task__info__specification\">\r\n          <label class=\"create__task__info__text\" for=\"create__task__info__priority\">Приоритет</label>\r\n          <select id=\"create__task__info__priority\">\r\n            <option value=\"\" selected disabled>Не определен</option>\r\n            <option value=\"Низкий\">Низкий</option>\r\n            <option value=\"Средний\">Средний</option>\r\n            <option value=\"Кретичный\">Кретичный</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"create__task__info__specification\">\r\n          <span class=\"create__task__info__text\">Дата начала</span>\r\n          <input type=\"date\" placeholder=\"Не определен\" id=\"create__task__info__date\">\r\n        </div>\r\n        <div class=\"create__task__info__specification\">\r\n          <span class=\"create__task__info__text\">Дедлайн</span>\r\n          <input type=\"date\" placeholder=\"Не определен\" id=\"create__task__info__deadline\">\r\n        </div>\r\n        <div class=\"create__task__info__specification\">\r\n          <span class=\"create__task__info__text\">Автор</span>\r\n          <input type=\"text\" placeholder=\"Не определен\" id=\"create__task__info__author\" maxlength=\"24\">\r\n        </div>\r\n        <div class=\"create__task__info__specification\">\r\n          <span class=\"create__task__info__text\">Исполнитель</span>\r\n          <input type=\"text\" placeholder=\"Не определен\" id=\"create__task__info__executor\" maxlength=\"24\">\r\n        </div>\r\n      </div>\r\n      <button class=\"button\" type=\"button\" id=\"add__task\">Создать задачу</button>\r\n    </div>\r\n  `);\r\n\r\n  const createdTask = mainContent.querySelector('.main__create__task');\r\n  const btnClosedCreate = createdTask.querySelector('#closed__create');\r\n  const btnAddTask = mainContent.querySelector('#add__task');\r\n\r\n  const textarea = createdTask.querySelector('#create__task__description');\r\n  textarea.addEventListener('input', event => {\r\n    const block = event.target;\r\n    const height = Number(block.style.height.slice(0, block.style.height.indexOf('p')));\r\n    if (block.scrollHeight > height) {\r\n      const size = block.scrollHeight - 20;\r\n      block.style.height = `${size}px`;\r\n    }\r\n  });\r\n\r\n  btnClosedCreate.addEventListener('click', closedCreate);\r\n  btnAddTask.addEventListener('click', addTask);\r\n}\r\n\r\nbtnCreateTask.addEventListener('click', createTask);\r\n\r\n\r\n\n\n//# sourceURL=webpack://resume/./src/js/tasks/create.js?");

/***/ }),

/***/ "./src/js/tasks/sort.js":
/*!******************************!*\
  !*** ./src/js/tasks/sort.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   basicSorting: () => (/* binding */ basicSorting),\n/* harmony export */   getTasksWithFixed: () => (/* binding */ getTasksWithFixed)\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/js/tasks/create.js\");\n// eslint-disable-next-line import/no-cycle\r\n\r\n\r\nconst mainContent = document.querySelector('.main');\r\nconst openContainer = mainContent.querySelector('.main__tasks__open').querySelector('.main__tasks__all');\r\nconst sortTaskContainer = mainContent.querySelector('.main__filter__instruments__sort');\r\nconst sortMeaningMain = sortTaskContainer.querySelector('.main__filter__instruments__sort__meaning');\r\nconst btnSortTasks = mainContent.querySelector('.instruments__sort');\r\nconst sortTasksTitle = btnSortTasks.querySelector('#sort__title');\r\n\r\n// Получить не закрепленные задачи\r\nfunction getTasksWithFixed() {\r\n  const tasksWithFixed = (0,_create__WEBPACK_IMPORTED_MODULE_0__.getTasks)().filter(task => {\r\n    if (task.parametrs.cliped === true) return false;\r\n    return true;\r\n  });\r\n  return tasksWithFixed;\r\n}\r\n\r\n// Сортировка задач в зависимости от выбранного параметра и значения\r\nfunction sortTasks(property, meaning, container = openContainer) {\r\n  const tasksWithFixed = getTasksWithFixed();\r\n  let sortedTasks;\r\n  switch (property) {\r\n    case 'Приоритет':\r\n      if (meaning === 'ascending') sortedTasks = tasksWithFixed.sort((a, b) => a.priority.dimension - b.priority.dimension);\r\n      if (meaning === 'descending') sortedTasks = tasksWithFixed.sort((a, b) => b.priority.dimension - a.priority.dimension);\r\n      break;\r\n    case 'Дата':\r\n      if (meaning === 'ascending') sortedTasks = tasksWithFixed.sort((a, b) => new Date(a.date) - new Date(b.date));\r\n      if (meaning === 'descending') sortedTasks = tasksWithFixed.sort((a, b) => new Date(b.date) - new Date(a.date));\r\n      break;\r\n    case 'Дедлайн':\r\n      if (meaning === 'ascending') sortedTasks = tasksWithFixed.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));\r\n      if (meaning === 'descending') sortedTasks = tasksWithFixed.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));\r\n      break;\r\n    default:\r\n      sortedTasks = tasksWithFixed.sort((a, b) => a.id - b.id);\r\n      break;\r\n  }\r\n  (0,_create__WEBPACK_IMPORTED_MODULE_0__.redrawTasks)(sortedTasks, container);\r\n  return sortedTasks;\r\n}\r\n\r\nfunction basicSorting(tasks = getTasksWithFixed()) {\r\n  const sortMeaning = sortTaskContainer.querySelector('.sort__meaning');\r\n  // Сортировка при закреплении задачи\r\n  let sortedTask = tasks;\r\n  if (sortMeaning !== null) {\r\n    // Сортировка в зависимости от выбранного параметра, значение - предыдущее выбранное\r\n    sortedTask = sortTasks(sortTasksTitle.textContent, Array.from(sortMeaning.classList)[1]);\r\n  } else {\r\n    // Сортировка по параметру ID, значение по умолчанию - возрастание\r\n    sortedTask = sortTasks(sortTasksTitle.textContent, 'ascending');\r\n  }\r\n  return sortedTask;\r\n}\r\n\r\n// Реакция на клик по параметру в меню сортировки\r\nfunction enterProperty(event) {\r\n  if (event.target.textContent !== 'Ручная сортировка') {\r\n    sortTasksTitle.textContent = `${event.target.textContent}`;\r\n    if (sortTaskContainer.querySelector('.main__filter__instruments__sort__meaning') !== null) sortTaskContainer.removeChild(sortMeaningMain);\r\n    if (sortTaskContainer.querySelector('.sort__meaning') === null) {\r\n      sortTaskContainer.insertAdjacentHTML('afterbegin', `\r\n        <div class=\"sort__meaning ascending\"></div>\r\n      `);\r\n      const sortMeaning = sortTaskContainer.querySelector('.sort__meaning');\r\n      sortMeaning.addEventListener('click', ev => {\r\n        const statusMeaning = Array.from(sortMeaning.classList)[1];\r\n        if (statusMeaning === 'ascending') {\r\n          // Сортировка по значению - убыванию\r\n          sortMeaning.classList.remove('ascending');\r\n          sortMeaning.classList.add('descending');\r\n        } else {\r\n          // Сортировка по значению - возрастанию\r\n          sortMeaning.classList.remove('descending');\r\n          sortMeaning.classList.add('ascending');\r\n        }\r\n        sortTasks(sortTasksTitle.textContent, Array.from(sortMeaning.classList)[1]);\r\n      });\r\n    }\r\n  } else {\r\n    const sortMeaning = sortTaskContainer.querySelector('.sort__meaning');\r\n    if (sortMeaning !== null) sortTaskContainer.removeChild(sortMeaning);\r\n    sortTasksTitle.textContent = 'Сортировка';\r\n    sortTaskContainer.prepend(sortMeaningMain);\r\n  }\r\n  const sortMeaning = sortTaskContainer.querySelector('.sort__meaning');\r\n\r\n  // Сортировка при выборе или смене параметра\r\n  if (sortMeaning !== null) {\r\n    // Сортировка в зависимости от выбранного параметра, значение - предыдущее выбранное\r\n    sortTasks(sortTasksTitle.textContent, Array.from(sortMeaning.classList)[1]);\r\n  } else {\r\n    // Сортировка по параметру ID, значение по умолчанию - возрастание\r\n    sortTasks(sortTasksTitle.textContent, 'ascending');\r\n  }\r\n}\r\n\r\n// Показать меню сортировки при клике\r\nfunction showSortMenu(ev = null) {\r\n  let sortList = btnSortTasks.querySelector('.main__filter__instruments__sort__active');\r\n  if (sortList === null) {\r\n    if (ev.target === sortTasksTitle || ev.target === sortMeaningMain) {\r\n      btnSortTasks.insertAdjacentHTML('beforeend', `\r\n        <div class=\"main__filter__instruments__sort__active\">\r\n          <span class=\"main__filter__instruments__sort__property\" id=\"sort__property__priority\">Приоритет</span>\r\n          <span class=\"main__filter__instruments__sort__property\" id=\"sort__property__date\">Дата</span>\r\n          <span class=\"main__filter__instruments__sort__property\" id=\"sort__property__deadline\">Дедлайн</span>\r\n        </div>\r\n    `);\r\n      sortList = btnSortTasks.querySelector('.main__filter__instruments__sort__active');\r\n      const propertyTitle = sortTasksTitle.textContent;\r\n      if (propertyTitle !== 'Сортировка') {\r\n        sortList.insertAdjacentHTML('afterbegin', `\r\n          <span class=\"main__filter__instruments__sort__property\" id=\"sort__property__property\">Ручная сортировка</span>\r\n        `);\r\n      }\r\n      const propertyList = Array.from(sortList.querySelectorAll('.main__filter__instruments__sort__property'));\r\n      propertyList.forEach(property => property.addEventListener('click', event => {\r\n        enterProperty(event);\r\n      }));\r\n    }\r\n  } else {\r\n    btnSortTasks.removeChild(sortList);\r\n  }\r\n}\r\n\r\nbtnSortTasks.addEventListener('click', event => showSortMenu(event));\r\nsortMeaningMain.addEventListener('click', showSortMenu);\r\n\r\n\r\n\n\n//# sourceURL=webpack://resume/./src/js/tasks/sort.js?");

/***/ }),

/***/ "./src/js/tasks/tasks.js":
/*!*******************************!*\
  !*** ./src/js/tasks/tasks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/js/tasks/create.js\");\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort */ \"./src/js/tasks/sort.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://resume/./src/js/tasks/tasks.js?");

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