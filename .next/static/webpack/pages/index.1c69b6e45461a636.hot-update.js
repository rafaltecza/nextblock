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

/***/ "./src/components/atoms/BoardEntity/BoardEntity.tsx":
/*!**********************************************************!*\
  !*** ./src/components/atoms/BoardEntity/BoardEntity.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_molecules_Board_Board_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/molecules/Board/Board.styled */ \"./src/components/molecules/Board/Board.styled.ts\");\n\n\nconst BoardEntity = (param)=>{\n    let { ...props } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_molecules_Board_Board_styled__WEBPACK_IMPORTED_MODULE_1__.BoardContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_molecules_Board_Board_styled__WEBPACK_IMPORTED_MODULE_1__.BoardPlace, {\n                index: props.index,\n                children: props.place\n            }, void 0, false, {\n                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/atoms/BoardEntity/BoardEntity.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_molecules_Board_Board_styled__WEBPACK_IMPORTED_MODULE_1__.BoardData, {\n                index: props.index,\n                children: props.entity.name\n            }, void 0, false, {\n                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/atoms/BoardEntity/BoardEntity.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_molecules_Board_Board_styled__WEBPACK_IMPORTED_MODULE_1__.BoardPoints, {\n                index: props.index,\n                children: props.entity.points\n            }, void 0, false, {\n                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/atoms/BoardEntity/BoardEntity.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/atoms/BoardEntity/BoardEntity.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n_c = BoardEntity;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardEntity);\nvar _c;\n$RefreshReg$(_c, \"BoardEntity\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hdG9tcy9Cb2FyZEVudGl0eS9Cb2FyZEVudGl0eS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEc7QUFTNUcsTUFBTUksY0FBYyxTQUFvQztRQUFuQyxFQUFFLEdBQUdDLE9BQXlCO0lBQy9DLHFCQUNJLDhEQUFDTCxvRkFBY0E7OzBCQUNYLDhEQUFDRSxnRkFBVUE7Z0JBQUNJLE9BQU9ELE1BQU1DLEtBQUs7MEJBQUdELE1BQU1FLEtBQUs7Ozs7OzswQkFDNUMsOERBQUNOLCtFQUFTQTtnQkFBQ0ssT0FBT0QsTUFBTUMsS0FBSzswQkFBR0QsTUFBTUcsTUFBTSxDQUFDQyxJQUFJOzs7Ozs7MEJBQ2pELDhEQUFDTixpRkFBV0E7Z0JBQUNHLE9BQU9ELE1BQU1DLEtBQUs7MEJBQUdELE1BQU1HLE1BQU0sQ0FBQ0UsTUFBTTs7Ozs7Ozs7Ozs7O0FBR2pFO0tBUk1OO0FBVU4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvQm9hcmRFbnRpdHkvQm9hcmRFbnRpdHkudHN4PzhhYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCb2FyZENvbnRhaW5lciwgQm9hcmREYXRhLCBCb2FyZFBsYWNlLCBCb2FyZFBvaW50c30gZnJvbSBcIkBjb21wb25lbnRzL21vbGVjdWxlcy9Cb2FyZC9Cb2FyZC5zdHlsZWRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCb2FyZEVudGl0eVByb3BzIHtcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIGVudGl0eTogYW55O1xuICAgIHBsYWNlOiBudW1iZXI7XG4gICAgcG9pbnRzOiBudW1iZXI7XG59XG5cbmNvbnN0IEJvYXJkRW50aXR5ID0gKHsgLi4ucHJvcHMgfTogQm9hcmRFbnRpdHlQcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCb2FyZENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxCb2FyZFBsYWNlIGluZGV4PXtwcm9wcy5pbmRleH0+e3Byb3BzLnBsYWNlfTwvQm9hcmRQbGFjZT5cbiAgICAgICAgICAgIDxCb2FyZERhdGEgaW5kZXg9e3Byb3BzLmluZGV4fT57cHJvcHMuZW50aXR5Lm5hbWV9PC9Cb2FyZERhdGE+XG4gICAgICAgICAgICA8Qm9hcmRQb2ludHMgaW5kZXg9e3Byb3BzLmluZGV4fT57cHJvcHMuZW50aXR5LnBvaW50c308L0JvYXJkUG9pbnRzPlxuICAgICAgICA8L0JvYXJkQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRFbnRpdHk7Il0sIm5hbWVzIjpbIkJvYXJkQ29udGFpbmVyIiwiQm9hcmREYXRhIiwiQm9hcmRQbGFjZSIsIkJvYXJkUG9pbnRzIiwiQm9hcmRFbnRpdHkiLCJwcm9wcyIsImluZGV4IiwicGxhY2UiLCJlbnRpdHkiLCJuYW1lIiwicG9pbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/atoms/BoardEntity/BoardEntity.tsx\n"));

/***/ }),

/***/ "./src/components/molecules/Board/Board.tsx":
/*!**************************************************!*\
  !*** ./src/components/molecules/Board/Board.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_atoms_BoardEntity_BoardEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/atoms/BoardEntity/BoardEntity */ \"./src/components/atoms/BoardEntity/BoardEntity.tsx\");\n\n\nconst Board = (param)=>{\n    let { items  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: items.map((item, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_BoardEntity_BoardEntity__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                index: index,\n                entity: item,\n                place: index + 1\n            }, void 0, false, {\n                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/molecules/Board/Board.tsx\",\n                lineNumber: 16,\n                columnNumber: 20\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/molecules/Board/Board.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvQm9hcmQvQm9hcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9FO0FBV3BFLE1BQU1DLFFBQVEsU0FBeUI7UUFBeEIsRUFBQ0MsTUFBSyxFQUFhO0lBQzlCLHFCQUNJLDhEQUFDQztrQkFDSUQsTUFBTUUsR0FBRyxDQUFDLENBQUNDLE1BQU1DLFFBQVU7WUFDNUIscUJBQU8sOERBQUNOLGlGQUFXQTtnQkFBQ00sT0FBT0E7Z0JBQU9DLFFBQVFGO2dCQUFNRyxPQUFPRixRQUFROzs7Ozs7UUFDL0Q7Ozs7OztBQUlaO0tBVE1MO0FBV04sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL0JvYXJkL0JvYXJkLnRzeD8wNjBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb2FyZEVudGl0eSBmcm9tIFwiQGNvbXBvbmVudHMvYXRvbXMvQm9hcmRFbnRpdHkvQm9hcmRFbnRpdHlcIjtcbmltcG9ydCB7bWFwfSBmcm9tIFwiem9kXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9hcmRQcm9wcyB7XG4gICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgcG9pbnRzOiBudW1iZXI7XG4gICAgICAgIH1cbiAgICBdXG59XG5jb25zdCBCb2FyZCA9ICh7aXRlbXN9OiBCb2FyZFByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPEJvYXJkRW50aXR5IGluZGV4PXtpbmRleH0gZW50aXR5PXtpdGVtfSBwbGFjZT17aW5kZXggKyAxfS8+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkIl0sIm5hbWVzIjpbIkJvYXJkRW50aXR5IiwiQm9hcmQiLCJpdGVtcyIsImRpdiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImVudGl0eSIsInBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/molecules/Board/Board.tsx\n"));

/***/ })

});