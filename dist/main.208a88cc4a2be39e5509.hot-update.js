"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetic_tac_toe"]("main",{

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.js */ \"./src/Board.js\");\n\n\nclass Game {\n    static startGame() {\n        const board = new _Board_js__WEBPACK_IMPORTED_MODULE_0__.Board();\n        const boardElement = document.getElementById('board');\n        window.playerTurn = 1;\n        boardElement.addEventListener('click', () => {\n            if (window.playerTurn === 1) {\n                window.playerTurn = 2;;\n            } else {\n                window.playerTurn = 1;\n            }\n            console.log(\"Ho\");\n        })\n    }\n}\n\nGame.startGame();\n\n\n//# sourceURL=webpack://tic_tac_toe/./src/Game.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("96b01d826474bf8d4b38")
/******/ })();
/******/ 
/******/ }
);