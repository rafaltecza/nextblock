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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Image_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Image.styled */ \"./src/components/atoms/Image/Image.styled.ts\");\n\n\n\n\nconst CustomImage = (param)=>{\n    let { useContainer =true , animation , animationTime =\"1.3s\" , animate =false , backgroundSrc , style , ...props } = param;\n    const ImageContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n        quality: 100,\n        onClick: props.onClick,\n        width: props.width,\n        height: props.height,\n        alt: props.alt,\n        src: props.src,\n        ...props\n    }, void 0, false, {\n        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/atoms/Image/Image.tsx\",\n        lineNumber: 20,\n        columnNumber: 26\n    }, undefined);\n    if (useContainer) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Image_styled__WEBPACK_IMPORTED_MODULE_3__.ImageContainer, {\n            clickable: props.clickable,\n            animationTime: animationTime,\n            animation: animation,\n            animate: animate,\n            children: ImageContent\n        }, void 0, false, {\n            fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/atoms/Image/Image.tsx\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, undefined);\n    } else {\n        return ImageContent;\n    }\n};\n_c = CustomImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomImage);\nvar _c;\n$RefreshReg$(_c, \"CustomImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hdG9tcy9JbWFnZS9JbWFnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBQ0s7QUFDSztBQWdCcEMsTUFBTUcsY0FBYyxTQUE2SDtRQUE1SCxFQUFFQyxjQUFlLElBQUksR0FBRUMsVUFBUyxFQUFFQyxlQUFnQixPQUFNLEVBQUVDLFNBQVUsS0FBSyxHQUFFQyxjQUFhLEVBQUVDLE1BQUssRUFBRSxHQUFHQyxPQUFtQjtJQUN4SSxNQUFNQyw2QkFBZSw4REFBQ1YsbURBQUtBO1FBQUNXLFNBQVM7UUFBS0MsU0FBU0gsTUFBTUcsT0FBTztRQUFFQyxPQUFPSixNQUFNSSxLQUFLO1FBQUVDLFFBQVFMLE1BQU1LLE1BQU07UUFBRUMsS0FBS04sTUFBTU0sR0FBRztRQUFFQyxLQUFLUCxNQUFNTyxHQUFHO1FBQUcsR0FBR1AsS0FBSzs7Ozs7O0lBRXJKLElBQUlOLGNBQWM7UUFDZCxxQkFDSSw4REFBQ0YseURBQWdCO1lBQUNpQixXQUFXVCxNQUFNUyxTQUFTO1lBQUViLGVBQWVBO1lBQWVELFdBQVdBO1lBQVdFLFNBQVNBO3NCQUN0R0k7Ozs7OztJQUdiLE9BQU87UUFDSCxPQUFPQTtJQUNYLENBQUM7QUFDTDtLQVpNUjtBQWNOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2F0b21zL0ltYWdlL0ltYWdlLnRzeD9kMzMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9JbWFnZS5zdHlsZWRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJbWFnZVByb3BzIHtcbiAgICBzcmM6IHN0cmluZztcbiAgICBhbHQ6IHN0cmluZztcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICAgIGNsaWNrYWJsZT86IGJvb2xlYW47XG4gICAgdXNlQ29udGFpbmVyPzogYm9vbGVhbjtcbiAgICBhbmltYXRlPzogYm9vbGVhbjtcbiAgICBhbmltYXRpb24/OiAncm90YXRlQW5pbWF0aW9uJyB8ICdwdWxzZUFuaW1hdGlvbicgfCAnbm9uZSc7XG4gICAgYW5pbWF0aW9uVGltZT86IHN0cmluZztcbiAgICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXM7XG59XG5cbmNvbnN0IEN1c3RvbUltYWdlID0gKHsgdXNlQ29udGFpbmVyID0gdHJ1ZSwgYW5pbWF0aW9uLCBhbmltYXRpb25UaW1lID0gJzEuM3MnLCBhbmltYXRlID0gZmFsc2UsIGJhY2tncm91bmRTcmMsIHN0eWxlLCAuLi5wcm9wcyB9OiBJbWFnZVByb3BzKSA9PiB7XG4gICAgY29uc3QgSW1hZ2VDb250ZW50ID0gPEltYWdlIHF1YWxpdHk9ezEwMH0gb25DbGljaz17cHJvcHMub25DbGlja30gd2lkdGg9e3Byb3BzLndpZHRofSBoZWlnaHQ9e3Byb3BzLmhlaWdodH0gYWx0PXtwcm9wcy5hbHR9IHNyYz17cHJvcHMuc3JjfSB7Li4ucHJvcHN9Lz47XG5cbiAgICBpZiAodXNlQ29udGFpbmVyKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Uy5JbWFnZUNvbnRhaW5lciBjbGlja2FibGU9e3Byb3BzLmNsaWNrYWJsZX0gYW5pbWF0aW9uVGltZT17YW5pbWF0aW9uVGltZX0gYW5pbWF0aW9uPXthbmltYXRpb259IGFuaW1hdGU9e2FuaW1hdGV9PlxuICAgICAgICAgICAgICAgIHtJbWFnZUNvbnRlbnR9XG4gICAgICAgICAgICA8L1MuSW1hZ2VDb250YWluZXI+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIEltYWdlQ29udGVudDtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21JbWFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIlMiLCJDdXN0b21JbWFnZSIsInVzZUNvbnRhaW5lciIsImFuaW1hdGlvbiIsImFuaW1hdGlvblRpbWUiLCJhbmltYXRlIiwiYmFja2dyb3VuZFNyYyIsInN0eWxlIiwicHJvcHMiLCJJbWFnZUNvbnRlbnQiLCJxdWFsaXR5Iiwib25DbGljayIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Iiwic3JjIiwiSW1hZ2VDb250YWluZXIiLCJjbGlja2FibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/atoms/Image/Image.tsx\n"));

/***/ }),

/***/ "./src/components/atoms/Particles/Particles.tsx":
/*!******************************************************!*\
  !*** ./src/components/atoms/Particles/Particles.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/atoms/Image/Image */ \"./src/components/atoms/Image/Image.tsx\");\n/* harmony import */ var _components_atoms_Particles_Particles_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/atoms/Particles/Particles.styled */ \"./src/components/atoms/Particles/Particles.styled.ts\");\n\n\n\nconst Particles = (param)=>{\n    let { color =\"Blue\" , rotate , size , width =300 , height =300 , ...props } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Particles_Particles_styled__WEBPACK_IMPORTED_MODULE_2__.StyledParticlesContainer, {\n        rotate: rotate,\n        color: color,\n        size: size,\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            animationTime: \"5s\",\n            animation: \"rotateAnimation\",\n            animate: true,\n            src: \"/images/icons/decoration/Prize_Glow_\".concat(color, \".png\"),\n            alt: \"\",\n            width: width,\n            height: height\n        }, void 0, false, {\n            fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/atoms/Particles/Particles.tsx\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/atoms/Particles/Particles.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Particles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Particles);\nvar _c;\n$RefreshReg$(_c, \"Particles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hdG9tcy9QYXJ0aWNsZXMvUGFydGljbGVzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0Q7QUFDOEI7QUFjdEYsTUFBTUUsWUFBWSxTQUEyRTtRQUExRSxFQUFFQyxPQUFRLE9BQU0sRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUVDLE9BQVEsSUFBRyxFQUFFQyxRQUFTLElBQUcsRUFBRSxHQUFHQyxPQUFPO0lBQ3BGLHFCQUNJLDhEQUFDUCxrR0FBd0JBO1FBQUNHLFFBQVFBO1FBQVFELE9BQU9BO1FBQU9FLE1BQU1BO1FBQU8sR0FBR0csS0FBSztrQkFDekUsNEVBQUNSLHFFQUFXQTtZQUFDUyxlQUFlO1lBQU1DLFdBQVc7WUFBbUJDLFNBQVMsSUFBSTtZQUFFQyxLQUFLLHVDQUE2QyxPQUFOVCxPQUFNO1lBQU9VLEtBQUs7WUFBSVAsT0FBT0E7WUFBT0MsUUFBUUE7Ozs7Ozs7Ozs7O0FBR25MO0tBTk1MO0FBUU4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvUGFydGljbGVzL1BhcnRpY2xlcy50c3g/ZjA5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcIkBjb21wb25lbnRzL2F0b21zL0ltYWdlL0ltYWdlXCI7XG5pbXBvcnQge1N0eWxlZFBhcnRpY2xlc0NvbnRhaW5lcn0gZnJvbSBcIkBjb21wb25lbnRzL2F0b21zL1BhcnRpY2xlcy9QYXJ0aWNsZXMuc3R5bGVkXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFydGljbGVzUHJvcHMge1xuICAgIGNvbG9yPzogc3RyaW5nO1xuICAgIHJvdGF0ZT86IHN0cmluZztcbiAgICBzaXplPzogc3RyaW5nO1xuICAgIHdpZHRoPzogbnVtYmVyO1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgICBsZWZ0Pzogc3RyaW5nO1xuICAgIHRvcD86IHN0cmluZztcbiAgICByaWdodD86IHN0cmluZztcbiAgICBib3R0b20/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFBhcnRpY2xlcyA9ICh7IGNvbG9yID0gJ0JsdWUnLCByb3RhdGUsIHNpemUsIHdpZHRoID0gMzAwLCBoZWlnaHQgPSAzMDAsIC4uLnByb3BzIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkUGFydGljbGVzQ29udGFpbmVyIHJvdGF0ZT17cm90YXRlfSBjb2xvcj17Y29sb3J9IHNpemU9e3NpemV9IHsuLi5wcm9wc30+XG4gICAgICAgICAgICA8Q3VzdG9tSW1hZ2UgYW5pbWF0aW9uVGltZT17JzVzJ30gYW5pbWF0aW9uPXtcInJvdGF0ZUFuaW1hdGlvblwifSBhbmltYXRlPXt0cnVlfSBzcmM9e2AvaW1hZ2VzL2ljb25zL2RlY29yYXRpb24vUHJpemVfR2xvd18ke2NvbG9yfS5wbmdgfSBhbHQ9eycnfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fS8+XG4gICAgICAgIDwvU3R5bGVkUGFydGljbGVzQ29udGFpbmVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2xlczsiXSwibmFtZXMiOlsiQ3VzdG9tSW1hZ2UiLCJTdHlsZWRQYXJ0aWNsZXNDb250YWluZXIiLCJQYXJ0aWNsZXMiLCJjb2xvciIsInJvdGF0ZSIsInNpemUiLCJ3aWR0aCIsImhlaWdodCIsInByb3BzIiwiYW5pbWF0aW9uVGltZSIsImFuaW1hdGlvbiIsImFuaW1hdGUiLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/atoms/Particles/Particles.tsx\n"));

/***/ })

});