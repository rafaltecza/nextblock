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

/***/ "./src/components/organisms/Navigation/Navigation.tsx":
/*!************************************************************!*\
  !*** ./src/components/organisms/Navigation/Navigation.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navigation_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation.styled */ \"./src/components/organisms/Navigation/Navigation.styled.ts\");\n/* harmony import */ var _components_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/atoms/Image/Image */ \"./src/components/atoms/Image/Image.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _consts_Routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @consts/Routes */ \"./src/consts/Routes.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Navigation = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation_styled__WEBPACK_IMPORTED_MODULE_2__.NavigationContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                width: 400,\n                height: 93,\n                src: \"/images/logo.png\",\n                onClick: ()=>router.push(_consts_Routes__WEBPACK_IMPORTED_MODULE_5__.Routes.HOME),\n                alt: \"logo\",\n                clickable: true\n            }, void 0, false, {\n                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/organisms/Navigation/Navigation.tsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                width: 150,\n                height: 36,\n                src: \"/images/logo_suffix.png\",\n                onClick: ()=>router.push(_consts_Routes__WEBPACK_IMPORTED_MODULE_5__.Routes.HOME),\n                alt: \"logo\",\n                clickable: true\n            }, void 0, false, {\n                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/organisms/Navigation/Navigation.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/organisms/Navigation/Navigation.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Navigation, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDMEU7QUFDNUM7QUFDbEI7QUFDQTtBQUV0QyxNQUFNSyxhQUF1QixJQUFNOztJQUMvQixNQUFNQyxTQUFTSCxzREFBU0E7SUFDeEIscUJBQ0ksOERBQUNGLG1FQUFtQkE7OzBCQUNoQiw4REFBQ0MscUVBQVdBO2dCQUFDSyxPQUFPO2dCQUNiQyxRQUFRO2dCQUNSQyxLQUFLO2dCQUNMQyxTQUFTLElBQU1KLE9BQU9LLElBQUksQ0FBQ1AsdURBQVc7Z0JBQ3RDUyxLQUFLO2dCQUNKQyxXQUFXLElBQUk7Ozs7OzswQkFDdkIsOERBQUNaLHFFQUFXQTtnQkFBQ0ssT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsU0FBUyxJQUFNSixPQUFPSyxJQUFJLENBQUNQLHVEQUFXO2dCQUN0Q1MsS0FBSztnQkFDTEMsV0FBVyxJQUFJOzs7Ozs7Ozs7Ozs7QUFHeEM7R0FsQk1UOztRQUNhRixrREFBU0E7OztLQUR0QkU7QUFvQk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL05hdmlnYXRpb24vTmF2aWdhdGlvbi50c3g/ZTQ0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uQ29udGFpbmVyLCBOYXZJdGVtLCBDb25uZWN0QnV0dG9uLCBOYXZpZ2F0aW9uTGVmdFNpZGV9IGZyb20gJy4vTmF2aWdhdGlvbi5zdHlsZWQnO1xuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCJAY29tcG9uZW50cy9hdG9tcy9JbWFnZS9JbWFnZVwiO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZXN9IGZyb20gXCJAY29uc3RzL1JvdXRlc1wiO1xuXG5jb25zdCBOYXZpZ2F0aW9uOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TmF2aWdhdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxDdXN0b21JbWFnZSB3aWR0aD17NDAwfVxuICAgICAgICAgICAgICAgICAgIGhlaWdodD17OTN9XG4gICAgICAgICAgICAgICAgICAgc3JjPXsnL2ltYWdlcy9sb2dvLnBuZyd9XG4gICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goUm91dGVzLkhPTUUpfVxuICAgICAgICAgICAgICAgICAgIGFsdD17J2xvZ28nfVxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU9e3RydWV9Lz5cbiAgICAgICAgICAgIDxDdXN0b21JbWFnZSB3aWR0aD17MTUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsnL2ltYWdlcy9sb2dvX3N1ZmZpeC5wbmcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFJvdXRlcy5IT01FKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9eydsb2dvJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU9e3RydWV9Lz5cbiAgICAgICAgPC9OYXZpZ2F0aW9uQ29udGFpbmVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmF2aWdhdGlvbkNvbnRhaW5lciIsIkN1c3RvbUltYWdlIiwidXNlUm91dGVyIiwiUm91dGVzIiwiTmF2aWdhdGlvbiIsInJvdXRlciIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwib25DbGljayIsInB1c2giLCJIT01FIiwiYWx0IiwiY2xpY2thYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/organisms/Navigation/Navigation.tsx\n"));

/***/ })

});