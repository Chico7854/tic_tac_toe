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

/***/ "./src/Board.js":
/*!**********************!*\
  !*** ./src/Board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Board: () => (/* binding */ Board)\n/* harmony export */ });\nclass Board {\n    constructor() {\n        this.board = [\n            [0, 0, 0],\n            [0, 0, 0],\n            [0, 0, 0],\n        ];\n        this.mapDOMSquares();\n        this.connectBoard();\n    }\n\n    mapDOMSquares() {\n        const squares = document.querySelectorAll('.square');\n        let row = 0;\n        let column = 0;\n       \n        for (const square of squares) {\n            square.dataset.coordinates = `[${row}, ${column}]`;\n            column++;\n            if (column > 2) {\n                row++;\n                column = 0;\n            }\n        }\n    }\n\n    connectBoard() {\n        const board = document.getElementById('board');\n        board.addEventListener('click', event => {\n            const target = event.target;\n            if (target.classList.contains('square')) {\n                const coordinates = JSON.parse(target.dataset.coordinates);\n                this.updateBoardData(coordinates, window.playerTurn);\n                this.updateBoardUI(target, window.playerTurn);\n                console.log(this.board);\n            } else {\n                event.stopPropagation();\n            }\n        })\n    }\n\n    updateBoardData(coordinates, player) {\n        const row = coordinates[0];\n        const column = coordinates[1];\n        this.board[row][column] = player;\n    }\n\n    updateBoardUI(squareElement, player) {\n        if (player === 1) {\n            squareElement.style.backgroundColor = 'red';\n        } else {\n            squareElement.style.backgroundColor = 'blue';\n        }\n    }\n}\n\n\n//# sourceURL=webpack://tic_tac_toe/./src/Board.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.js */ \"./src/Board.js\");\n\n\nclass Game {\n    static startGame() {\n        const board = new _Board_js__WEBPACK_IMPORTED_MODULE_0__.Board();\n        const boardElement = document.getElementById('board');\n        window.playerTurn = 1;\n        boardElement.addEventListener('click', () => {\n            if (window.playerTurn === 1) {\n                window.playerTurn = 2;;\n            } else {\n                window.playerTurn = 1;\n            }\n        })\n    }\n}\n\nGame.startGame();\n\n\n//# sourceURL=webpack://tic_tac_toe/./src/Game.js?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Game.js");
/******/ 	
/******/ })()
;