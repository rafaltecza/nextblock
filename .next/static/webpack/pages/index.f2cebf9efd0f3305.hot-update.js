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

/***/ "./src/components/molecules/Board/Board.styled.ts":
/*!********************************************************!*\
  !*** ./src/components/molecules/Board/Board.styled.ts ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BoardContainer\": function() { return /* binding */ BoardContainer; },\n/* harmony export */   \"BoardData\": function() { return /* binding */ BoardData; },\n/* harmony export */   \"BoardPlace\": function() { return /* binding */ BoardPlace; },\n/* harmony export */   \"BoardPoints\": function() { return /* binding */ BoardPoints; },\n/* harmony export */   \"BoardWrapper\": function() { return /* binding */ BoardWrapper; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    gap: 0.5rem;\\n    width: 100%;\\n  \\n  \\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    width: 100%;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: block;\\n    background-color: #2d584e;\\n    width: 20%;\\n    height: 100%;\\n    font-size: 1.5rem;\\n    font-weight: bold;\\n    color: #fff;\\n  text-align: center;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: block;\\n  width: 100%;\\n  height: 100%;\\n  background-color: \",\n        \";\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: block;\\n  width: 30%;\\n  height: 100%;\\n  background-color: \",\n        \";\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst BoardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Board.styled__BoardContainer\",\n    componentId: \"sc-2371239a-0\"\n})(_templateObject());\nconst BoardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Board.styled__BoardWrapper\",\n    componentId: \"sc-2371239a-1\"\n})(_templateObject1());\nconst BoardPlace = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Board.styled__BoardPlace\",\n    componentId: \"sc-2371239a-2\"\n})(_templateObject2());\nconst BoardData = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Board.styled__BoardData\",\n    componentId: \"sc-2371239a-3\"\n})(_templateObject3(), (param)=>{\n    let { index  } = param;\n    return index % 2 === 0 ? \"#2aad90\" : \"#232332\";\n});\nconst BoardPoints = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Board.styled__BoardPoints\",\n    componentId: \"sc-2371239a-4\"\n})(_templateObject4(), (param)=>{\n    let { index  } = param;\n    return index % 2 === 0 ? \"#2aad90\" : \"#232332\";\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvQm9hcmQvQm9hcmQuc3R5bGVkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFaEMsTUFBTUMsaUJBQWlCRCx3RUFBVTs7O3NCQVF0QztBQUVLLE1BQU1HLGVBQWVILHdFQUFVOzs7dUJBS3BDO0FBRUssTUFBTUksYUFBYUosd0VBQVU7Ozt1QkFTbEM7QUFFSyxNQUFNSyxZQUFZTCx3RUFBVTs7O3VCQUliLFNBQWdCTTtRQUFmLEVBQUVBLE1BQUssRUFBRTtXQUFNQSxRQUFRLE1BQU0sSUFBSSxZQUFZLFNBQVM7QUFBRCxHQUMxRTtBQUVLLE1BQU1DLGNBQWNQLHdFQUFVOzs7dUJBSWYsU0FBZ0JNO1FBQWYsRUFBRUEsTUFBSyxFQUFFO1dBQU1BLFFBQVEsTUFBTSxJQUFJLFlBQVksU0FBUztBQUFELEdBQzFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9Cb2FyZC9Cb2FyZC5zdHlsZWQudHM/NGIwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgQm9hcmRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICBcbiAgXG5gO1xuXG5leHBvcnQgY29uc3QgQm9hcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbmA7XG5cbmV4cG9ydCBjb25zdCBCb2FyZFBsYWNlID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ1ODRlO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgQm9hcmREYXRhID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgaW5kZXggfSkgPT4gKGluZGV4ICUgMiA9PT0gMCA/IFwiIzJhYWQ5MFwiIDogXCIjMjMyMzMyXCIpfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBCb2FyZFBvaW50cyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgaW5kZXggfSkgPT4gKGluZGV4ICUgMiA9PT0gMCA/IFwiIzJhYWQ5MFwiIDogXCIjMjMyMzMyXCIpfTtcbmA7Il0sIm5hbWVzIjpbInN0eWxlZCIsIkJvYXJkQ29udGFpbmVyIiwiZGl2IiwiQm9hcmRXcmFwcGVyIiwiQm9hcmRQbGFjZSIsIkJvYXJkRGF0YSIsImluZGV4IiwiQm9hcmRQb2ludHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/molecules/Board/Board.styled.ts\n"));

/***/ })

});