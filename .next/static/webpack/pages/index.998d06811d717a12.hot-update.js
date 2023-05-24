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

/***/ "./src/components/atoms/Image/Image.tsx":
/*!**********************************************!*\
  !*** ./src/components/atoms/Image/Image.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Image_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Image.styled */ \"./src/components/atoms/Image/Image.styled.ts\");\n\n\n\n\nconst CustomImage = (param)=>{\n    let { useContainer =true , animate =false , backgroundSrc , ...props } = param;\n    const ImageContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n        quality: 100,\n        onClick: props.onClick,\n        width: props.width,\n        height: props.height,\n        alt: props.alt,\n        src: props.src\n    }, void 0, false, {\n        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/atoms/Image/Image.tsx\",\n        lineNumber: 18,\n        columnNumber: 26\n    }, undefined);\n    let BackgroundImages;\n    if (backgroundSrc) {\n        const backgroundSrcArray = Array.isArray(backgroundSrc) ? backgroundSrc : [\n            backgroundSrc\n        ];\n        BackgroundImages = backgroundSrcArray.map((src, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                style: {\n                    position: \"absolute\",\n                    left: \"-50%\"\n                },\n                quality: 100,\n                width: 300,\n                height: 300,\n                alt: \"background-\".concat(index),\n                src: src\n            }, index, false, {\n                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/atoms/Image/Image.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined));\n    }\n    if (useContainer) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Image_styled__WEBPACK_IMPORTED_MODULE_3__.ImageContainer, {\n            clickable: props.clickable,\n            animate: animate,\n            children: [\n                ImageContent,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Image_styled__WEBPACK_IMPORTED_MODULE_3__.ImageBackgroundContainer, {\n                    children: BackgroundImages\n                }, void 0, false, {\n                    fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/atoms/Image/Image.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/atoms/Image/Image.tsx\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, undefined);\n    } else {\n        return ImageContent;\n    }\n};\n_c = CustomImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomImage);\nvar _c;\n$RefreshReg$(_c, \"CustomImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hdG9tcy9JbWFnZS9JbWFnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBQ0s7QUFDSztBQWNwQyxNQUFNRyxjQUFjLFNBQW1GO1FBQWxGLEVBQUVDLGNBQWUsSUFBSSxHQUFFQyxTQUFVLEtBQUssR0FBRUMsY0FBYSxFQUFFLEdBQUdDLE9BQW1CO0lBQzlGLE1BQU1DLDZCQUFlLDhEQUFDUCxtREFBS0E7UUFBQ1EsU0FBUztRQUFLQyxTQUFTSCxNQUFNRyxPQUFPO1FBQUVDLE9BQU9KLE1BQU1JLEtBQUs7UUFBRUMsUUFBUUwsTUFBTUssTUFBTTtRQUFFQyxLQUFLTixNQUFNTSxHQUFHO1FBQUVDLEtBQUtQLE1BQU1PLEdBQUc7Ozs7OztJQUUxSSxJQUFJQztJQUNKLElBQUlULGVBQWU7UUFDZixNQUFNVSxxQkFBcUJDLE1BQU1DLE9BQU8sQ0FBQ1osaUJBQWlCQSxnQkFBZ0I7WUFBQ0E7U0FBYztRQUN6RlMsbUJBQW1CQyxtQkFBbUJHLEdBQUcsQ0FBQyxDQUFDTCxLQUFLTSxzQkFDNUMsOERBQUNuQixtREFBS0E7Z0JBQUNvQixPQUFPO29CQUFDQyxVQUFVO29CQUFZQyxNQUFNO2dCQUFNO2dCQUFlZCxTQUFTO2dCQUFLRSxPQUFPO2dCQUFLQyxRQUFRO2dCQUFLQyxLQUFLLGNBQW9CLE9BQU5PO2dCQUFTTixLQUFLQTtlQUEvRU07Ozs7O0lBRWpFLENBQUM7SUFFRCxJQUFJaEIsY0FBYztRQUNkLHFCQUNJLDhEQUFDRix5REFBZ0I7WUFBQ3VCLFdBQVdsQixNQUFNa0IsU0FBUztZQUFFcEIsU0FBU0E7O2dCQUNsREc7OEJBQ0QsOERBQUNOLG1FQUEwQjs4QkFDdEJhOzs7Ozs7Ozs7Ozs7SUFJakIsT0FBTztRQUNILE9BQU9QO0lBQ1gsQ0FBQztBQUNMO0tBdkJNTDtBQXlCTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hdG9tcy9JbWFnZS9JbWFnZS50c3g/ZDMzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vSW1hZ2Uuc3R5bGVkXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VQcm9wcyB7XG4gICAgc3JjOiBzdHJpbmc7XG4gICAgYWx0OiBzdHJpbmc7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbiAgICBjbGlja2FibGU/OiBib29sZWFuO1xuICAgIHVzZUNvbnRhaW5lcj86IGJvb2xlYW47XG4gICAgYW5pbWF0ZT86IGJvb2xlYW47XG4gICAgYmFja2dyb3VuZFNyYz86IHN0cmluZyB8IHN0cmluZ1tdOyAvLyBOZXcgcHJvcFxufVxuXG5jb25zdCBDdXN0b21JbWFnZSA9ICh7IHVzZUNvbnRhaW5lciA9IHRydWUsIGFuaW1hdGUgPSBmYWxzZSwgYmFja2dyb3VuZFNyYywgLi4ucHJvcHMgfTogSW1hZ2VQcm9wcykgPT4ge1xuICAgIGNvbnN0IEltYWdlQ29udGVudCA9IDxJbWFnZSBxdWFsaXR5PXsxMDB9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9IHdpZHRoPXtwcm9wcy53aWR0aH0gaGVpZ2h0PXtwcm9wcy5oZWlnaHR9IGFsdD17cHJvcHMuYWx0fSBzcmM9e3Byb3BzLnNyY30gLz47XG5cbiAgICBsZXQgQmFja2dyb3VuZEltYWdlcztcbiAgICBpZiAoYmFja2dyb3VuZFNyYykge1xuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kU3JjQXJyYXkgPSBBcnJheS5pc0FycmF5KGJhY2tncm91bmRTcmMpID8gYmFja2dyb3VuZFNyYyA6IFtiYWNrZ3JvdW5kU3JjXTtcbiAgICAgICAgQmFja2dyb3VuZEltYWdlcyA9IGJhY2tncm91bmRTcmNBcnJheS5tYXAoKHNyYywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxJbWFnZSBzdHlsZT17e3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIGxlZnQ6ICctNTAlJ319IGtleT17aW5kZXh9IHF1YWxpdHk9ezEwMH0gd2lkdGg9ezMwMH0gaGVpZ2h0PXszMDB9IGFsdD17YGJhY2tncm91bmQtJHtpbmRleH1gfSBzcmM9e3NyY30gLz5cbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgaWYgKHVzZUNvbnRhaW5lcikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFMuSW1hZ2VDb250YWluZXIgY2xpY2thYmxlPXtwcm9wcy5jbGlja2FibGV9IGFuaW1hdGU9e2FuaW1hdGV9PlxuICAgICAgICAgICAgICAgIHtJbWFnZUNvbnRlbnR9XG4gICAgICAgICAgICAgICAgPFMuSW1hZ2VCYWNrZ3JvdW5kQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICB7QmFja2dyb3VuZEltYWdlc31cbiAgICAgICAgICAgICAgICA8L1MuSW1hZ2VCYWNrZ3JvdW5kQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9TLkltYWdlQ29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBJbWFnZUNvbnRlbnQ7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tSW1hZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJTIiwiQ3VzdG9tSW1hZ2UiLCJ1c2VDb250YWluZXIiLCJhbmltYXRlIiwiYmFja2dyb3VuZFNyYyIsInByb3BzIiwiSW1hZ2VDb250ZW50IiwicXVhbGl0eSIsIm9uQ2xpY2siLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNyYyIsIkJhY2tncm91bmRJbWFnZXMiLCJiYWNrZ3JvdW5kU3JjQXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJpbmRleCIsInN0eWxlIiwicG9zaXRpb24iLCJsZWZ0IiwiSW1hZ2VDb250YWluZXIiLCJjbGlja2FibGUiLCJJbWFnZUJhY2tncm91bmRDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/atoms/Image/Image.tsx\n"));

/***/ })

});