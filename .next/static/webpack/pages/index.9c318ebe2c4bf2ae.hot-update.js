"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/molecules/Board/Board.tsx":
/*!**************************************************!*\
  !*** ./src/components/molecules/Board/Board.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_atoms_BoardEntity_BoardEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/atoms/BoardEntity/BoardEntity */ \"./src/components/atoms/BoardEntity/BoardEntity.tsx\");\n/* harmony import */ var _components_molecules_Board_Board_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/molecules/Board/Board.styled */ \"./src/components/molecules/Board/Board.styled.ts\");\n\n\n\nconst Board = (param)=>{\n    let { items , type =\"primary\"  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_molecules_Board_Board_styled__WEBPACK_IMPORTED_MODULE_2__.BoardTitle, {\n                children: \"Yeasterday's\"\n            }, void 0, false, {\n                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/molecules/Board/Board.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_BoardEntity_BoardEntity__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                type: \"primary\",\n                index: 0,\n                entity: {\n                    name: \"test\",\n                    points: 21232131\n                },\n                place: 1\n            }, void 0, false, {\n                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/molecules/Board/Board.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_molecules_Board_Board_styled__WEBPACK_IMPORTED_MODULE_2__.BoardEntityContainer, {\n                className: type,\n                children: items.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_BoardEntity_BoardEntity__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        index: index,\n                        entity: item,\n                        place: index + 1\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/molecules/Board/Board.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 28\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/molecules/Board/Board.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvQm9hcmQvQm9hcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvRTtBQUVzQjtBQVcxRixNQUFNRyxRQUFRLFNBQTJDO1FBQTFDLEVBQUNDLE1BQUssRUFBRUMsTUFBTyxVQUFTLEVBQWE7SUFDaEQscUJBQ0k7OzBCQUNJLDhEQUFDSCxnRkFBVUE7MEJBQUM7Ozs7OzswQkFDWiw4REFBQ0YsaUZBQVdBO2dCQUFDSyxNQUFNO2dCQUFXQyxPQUFPO2dCQUFHQyxRQUFRO29CQUFDQyxNQUFNO29CQUFRQyxRQUFRO2dCQUFRO2dCQUFHQyxPQUFPOzs7Ozs7MEJBQ3pGLDhEQUFDVCwwRkFBb0JBO2dCQUFDVSxXQUFXTjswQkFDNUJELE1BQU1RLEdBQUcsQ0FBQyxDQUFDQyxNQUFNUCxRQUFVO29CQUN4QixxQkFBTyw4REFBQ04saUZBQVdBO3dCQUFDTSxPQUFPQTt3QkFBT0MsUUFBUU07d0JBQU1ILE9BQU9KLFFBQVE7Ozs7OztnQkFDbkU7Ozs7Ozs7O0FBTWhCO0tBZE1IO0FBZ0JOLCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9Cb2FyZC9Cb2FyZC50c3g/MDYwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmRFbnRpdHkgZnJvbSBcIkBjb21wb25lbnRzL2F0b21zL0JvYXJkRW50aXR5L0JvYXJkRW50aXR5XCI7XG5pbXBvcnQge21hcH0gZnJvbSBcInpvZFwiO1xuaW1wb3J0IHtCb2FyZEVudGl0eUNvbnRhaW5lciwgQm9hcmRUaXRsZX0gZnJvbSBcIkBjb21wb25lbnRzL21vbGVjdWxlcy9Cb2FyZC9Cb2FyZC5zdHlsZWRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCb2FyZFByb3BzIHtcbiAgICB0eXBlPzogXCJwcmltYXJ5XCIgfCBcInNlY29uZGFyeVwiO1xuICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgIHBvaW50czogbnVtYmVyO1xuICAgICAgICB9XG4gICAgXVxufVxuY29uc3QgQm9hcmQgPSAoe2l0ZW1zLCB0eXBlID0gJ3ByaW1hcnknfTogQm9hcmRQcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Qm9hcmRUaXRsZT5ZZWFzdGVyZGF5J3M8L0JvYXJkVGl0bGU+XG4gICAgICAgICAgICA8Qm9hcmRFbnRpdHkgdHlwZT17J3ByaW1hcnknfSBpbmRleD17MH0gZW50aXR5PXt7bmFtZTogJ3Rlc3QnLCBwb2ludHM6IDIxMjMyMTMxfX0gcGxhY2U9ezF9Lz5cbiAgICAgICAgICAgIDxCb2FyZEVudGl0eUNvbnRhaW5lciBjbGFzc05hbWU9e3R5cGV9PlxuICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Qm9hcmRFbnRpdHkgaW5kZXg9e2luZGV4fSBlbnRpdHk9e2l0ZW19IHBsYWNlPXtpbmRleCArIDF9Lz5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvQm9hcmRFbnRpdHlDb250YWluZXI+XG4gICAgICAgIDwvPlxuXG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkIl0sIm5hbWVzIjpbIkJvYXJkRW50aXR5IiwiQm9hcmRFbnRpdHlDb250YWluZXIiLCJCb2FyZFRpdGxlIiwiQm9hcmQiLCJpdGVtcyIsInR5cGUiLCJpbmRleCIsImVudGl0eSIsIm5hbWUiLCJwb2ludHMiLCJwbGFjZSIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/molecules/Board/Board.tsx\n"));

/***/ })

});