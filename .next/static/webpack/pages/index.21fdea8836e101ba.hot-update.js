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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_molecules_Board_Board_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/molecules/Board/Board.styled */ \"./src/components/molecules/Board/Board.styled.ts\");\n\n\nconst BoardEntity = (param)=>{\n    let { type =\"secondary\" , ...props } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_molecules_Board_Board_styled__WEBPACK_IMPORTED_MODULE_1__.BoardContainer, {\n        className: type,\n        index: props.index,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_molecules_Board_Board_styled__WEBPACK_IMPORTED_MODULE_1__.BoardPlace, {\n                place: props.place,\n                index: props.index,\n                children: props.place\n            }, void 0, false, {\n                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/atoms/BoardEntity/BoardEntity.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_molecules_Board_Board_styled__WEBPACK_IMPORTED_MODULE_1__.BoardWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_molecules_Board_Board_styled__WEBPACK_IMPORTED_MODULE_1__.BoardData, {\n                        index: props.index,\n                        children: props.entity.name\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/atoms/BoardEntity/BoardEntity.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_molecules_Board_Board_styled__WEBPACK_IMPORTED_MODULE_1__.BoardPoints, {\n                        index: props.index,\n                        children: props.entity.points\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/atoms/BoardEntity/BoardEntity.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/atoms/BoardEntity/BoardEntity.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/atoms/BoardEntity/BoardEntity.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n_c = BoardEntity;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardEntity);\nvar _c;\n$RefreshReg$(_c, \"BoardEntity\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hdG9tcy9Cb2FyZEVudGl0eS9Cb2FyZEVudGl0eS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNa0Q7QUFVbEQsTUFBTUssY0FBYyxTQUF1RDtRQUF0RCxFQUFFQyxNQUFPLFlBQVcsRUFBQyxHQUFHQyxPQUF5QjtJQUNsRSxxQkFDSSw4REFBQ1Asb0ZBQWNBO1FBQUNRLFdBQVdGO1FBQU1HLE9BQU9GLE1BQU1FLEtBQUs7OzBCQUMvQyw4REFBQ1AsZ0ZBQVVBO2dCQUFDUSxPQUFPSCxNQUFNRyxLQUFLO2dCQUFFRCxPQUFPRixNQUFNRSxLQUFLOzBCQUFHRixNQUFNRyxLQUFLOzs7Ozs7MEJBQ2hFLDhEQUFDTixrRkFBWUE7O2tDQUNULDhEQUFDSCwrRUFBU0E7d0JBQUNRLE9BQU9GLE1BQU1FLEtBQUs7a0NBQUdGLE1BQU1JLE1BQU0sQ0FBQ0MsSUFBSTs7Ozs7O2tDQUNqRCw4REFBQ1QsaUZBQVdBO3dCQUFDTSxPQUFPRixNQUFNRSxLQUFLO2tDQUFHRixNQUFNSSxNQUFNLENBQUNFLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlyRTtLQVZNUjtBQVlOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2F0b21zL0JvYXJkRW50aXR5L0JvYXJkRW50aXR5LnRzeD84YWFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQm9hcmRDb250YWluZXIsXG4gICAgQm9hcmREYXRhLFxuICAgIEJvYXJkUGxhY2UsXG4gICAgQm9hcmRQb2ludHMsXG4gICAgQm9hcmRXcmFwcGVyXG59IGZyb20gXCJAY29tcG9uZW50cy9tb2xlY3VsZXMvQm9hcmQvQm9hcmQuc3R5bGVkXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9hcmRFbnRpdHlQcm9wcyB7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBlbnRpdHk6IGFueTtcbiAgICBwbGFjZTogbnVtYmVyO1xuICAgIHBvaW50czogbnVtYmVyO1xuICAgIHR5cGU/OiBcInByaW1hcnlcIiB8IFwic2Vjb25kYXJ5XCI7XG59XG5cbmNvbnN0IEJvYXJkRW50aXR5ID0gKHsgdHlwZSA9ICdzZWNvbmRhcnknLC4uLnByb3BzIH06IEJvYXJkRW50aXR5UHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm9hcmRDb250YWluZXIgY2xhc3NOYW1lPXt0eXBlfSBpbmRleD17cHJvcHMuaW5kZXh9PlxuICAgICAgICAgICAgPEJvYXJkUGxhY2UgcGxhY2U9e3Byb3BzLnBsYWNlfSBpbmRleD17cHJvcHMuaW5kZXh9Pntwcm9wcy5wbGFjZX08L0JvYXJkUGxhY2U+XG4gICAgICAgICAgICA8Qm9hcmRXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxCb2FyZERhdGEgaW5kZXg9e3Byb3BzLmluZGV4fT57cHJvcHMuZW50aXR5Lm5hbWV9PC9Cb2FyZERhdGE+XG4gICAgICAgICAgICAgICAgPEJvYXJkUG9pbnRzIGluZGV4PXtwcm9wcy5pbmRleH0+e3Byb3BzLmVudGl0eS5wb2ludHN9PC9Cb2FyZFBvaW50cz5cbiAgICAgICAgICAgIDwvQm9hcmRXcmFwcGVyPlxuICAgICAgICA8L0JvYXJkQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRFbnRpdHk7Il0sIm5hbWVzIjpbIkJvYXJkQ29udGFpbmVyIiwiQm9hcmREYXRhIiwiQm9hcmRQbGFjZSIsIkJvYXJkUG9pbnRzIiwiQm9hcmRXcmFwcGVyIiwiQm9hcmRFbnRpdHkiLCJ0eXBlIiwicHJvcHMiLCJjbGFzc05hbWUiLCJpbmRleCIsInBsYWNlIiwiZW50aXR5IiwibmFtZSIsInBvaW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/atoms/BoardEntity/BoardEntity.tsx\n"));

/***/ }),

/***/ "./src/components/molecules/Board/Board.styled.ts":
/*!********************************************************!*\
  !*** ./src/components/molecules/Board/Board.styled.ts ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BoardContainer\": function() { return /* binding */ BoardContainer; },\n/* harmony export */   \"BoardData\": function() { return /* binding */ BoardData; },\n/* harmony export */   \"BoardEntityContainer\": function() { return /* binding */ BoardEntityContainer; },\n/* harmony export */   \"BoardPlace\": function() { return /* binding */ BoardPlace; },\n/* harmony export */   \"BoardPoints\": function() { return /* binding */ BoardPoints; },\n/* harmony export */   \"BoardWrapper\": function() { return /* binding */ BoardWrapper; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    gap: 0.5rem;\\n    width: 100%;\\n    font-size: 1.5rem;\\n\\n  .primary {\\n    \\n  }\\n  \\n  background-color: \",\n        \";\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    width: 100%;\\n  \\n    .board-place {\\n      \\n    }\\n\\n      .board-data {\\n    \\n      }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: block;\\n  width: 60px;\\n  line-height: 50px;\\n  font-weight: bold;\\n  font-size: 1.6rem;\\n  text-align: center;\\n  background-color: rgba(0, 0, 0, 0.1);\\n  color: #4fa051;\\n  \",\n        \"\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: block;\\n  width: 100%;\\n  height: 100%;\\n  color: #7ecb58;\\n  min-width: 250px;\\n  font-weight: bold;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: block;\\n  width: 30%;\\n  height: 100%;\\n  color: #59ab52;\\n  font-weight: bold;\\n  padding-right: 1rem;\\n  text-align: right;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  width: 100%;\\n  \\n    &.primary {\\n      &::before {\\n        content: \"\";\\n        background-image: url(\"/images/icons/decoration/Leaderboard_Silver.png\");\\n        background-repeat: no-repeat;\\n        background-size: cover;\\n        width: 100%;\\n        height: 42%;\\n        position: absolute;\\n        top: 80px;\\n        opacity: 0.3;\\n        left: 0;\\n      }\\n    }\\n'\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst BoardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Board.styled__BoardContainer\",\n    componentId: \"sc-4991a7d2-0\"\n})(_templateObject(), (param)=>{\n    let { index  } = param;\n    return index % 2 === 0 ? \"#29594f\" : \"#2f6256\";\n});\nconst BoardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Board.styled__BoardWrapper\",\n    componentId: \"sc-4991a7d2-1\"\n})(_templateObject1());\nconst BoardPlace = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Board.styled__BoardPlace\",\n    componentId: \"sc-4991a7d2-2\"\n})(_templateObject2(), (param)=>{\n    let { place  } = param;\n    return (place === 1 || place === 2 || place === 3) && 'color: #28594d; background-image: url(\"/images/icons/board/Frame_leaderboards_DIY_'.concat(place, '.png\");');\n});\nconst BoardData = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Board.styled__BoardData\",\n    componentId: \"sc-4991a7d2-3\"\n})(_templateObject3());\nconst BoardPoints = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Board.styled__BoardPoints\",\n    componentId: \"sc-4991a7d2-4\"\n})(_templateObject4());\nconst BoardEntityContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Board.styled__BoardEntityContainer\",\n    componentId: \"sc-4991a7d2-5\"\n})(_templateObject5());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvQm9hcmQvQm9hcmQuc3R5bGVkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBR2hDLE1BQU1DLGlCQUFpQkQsd0VBQVU7OztzQkFZbEIsU0FBZ0JHO1FBQWYsRUFBRUEsTUFBSyxFQUFFO1dBQU1BLFFBQVEsTUFBTSxJQUFJLFlBQVksU0FBUztBQUFELEdBQzFFO0FBRUssTUFBTUMsZUFBZUosd0VBQVU7Ozt1QkFhcEM7QUFFSyxNQUFNSyxhQUFhTCx3RUFBVTs7O3VCQVNoQyxTQUNBO1FBREMsRUFBRU0sTUFBSyxFQUFFO1dBQ1YsQ0FBQ0EsVUFBVSxLQUFLQSxVQUFVLEtBQUtBLFVBQVUsTUFDekMscUZBQTJGLE9BQU5BLE9BQU07QUFBTyxHQUNwRztBQUdLLE1BQU1DLFlBQVlQLHdFQUFVOzs7dUJBT2pDO0FBRUssTUFBTVEsY0FBY1Isd0VBQVU7Ozt1QkFRbkM7QUFFSyxNQUFNUyx1QkFBdUJULHdFQUFVOzs7dUJBaUI1QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvQm9hcmQvQm9hcmQuc3R5bGVkLnRzPzRiMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7Qm9hcmRQcm9wc30gZnJvbSBcIkBjb21wb25lbnRzL21vbGVjdWxlcy9Cb2FyZC9Cb2FyZFwiO1xuXG5leHBvcnQgY29uc3QgQm9hcmRDb250YWluZXIgPSBzdHlsZWQuZGl2PHtpbmRleDogbnVtYmVyfT5gXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG5cbiAgLnByaW1hcnkge1xuICAgIFxuICB9XG4gIFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IGluZGV4IH0pID0+IChpbmRleCAlIDIgPT09IDAgPyBcIiMyOTU5NGZcIiA6IFwiIzJmNjI1NlwiKX07XG5gO1xuXG5leHBvcnQgY29uc3QgQm9hcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgXG4gICAgLmJvYXJkLXBsYWNlIHtcbiAgICAgIFxuICAgIH1cblxuICAgICAgLmJvYXJkLWRhdGEge1xuICAgIFxuICAgICAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJvYXJkUGxhY2UgPSBzdHlsZWQuZGl2PHsgcGxhY2U6IG51bWJlciB9PmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgY29sb3I6ICM0ZmEwNTE7XG4gICR7KHsgcGxhY2UgfSkgPT5cbiAgICAocGxhY2UgPT09IDEgfHwgcGxhY2UgPT09IDIgfHwgcGxhY2UgPT09IDMpICYmXG4gICAgYGNvbG9yOiAjMjg1OTRkOyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvaW1hZ2VzL2ljb25zL2JvYXJkL0ZyYW1lX2xlYWRlcmJvYXJkc19ESVlfJHtwbGFjZX0ucG5nXCIpO2B9XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBCb2FyZERhdGEgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICM3ZWNiNTg7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYDtcblxuZXhwb3J0IGNvbnN0IEJvYXJkUG9pbnRzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICM1OWFiNTI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbmA7XG5cbmV4cG9ydCBjb25zdCBCb2FyZEVudGl0eUNvbnRhaW5lciA9IHN0eWxlZC5kaXY8Qm9hcmRQcm9wcz5gXG4gIHdpZHRoOiAxMDAlO1xuICBcbiAgICAmLnByaW1hcnkge1xuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2ltYWdlcy9pY29ucy9kZWNvcmF0aW9uL0xlYWRlcmJvYXJkX1NpbHZlci5wbmdcIik7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQyJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDgwcHg7XG4gICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG5gOyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJCb2FyZENvbnRhaW5lciIsImRpdiIsImluZGV4IiwiQm9hcmRXcmFwcGVyIiwiQm9hcmRQbGFjZSIsInBsYWNlIiwiQm9hcmREYXRhIiwiQm9hcmRQb2ludHMiLCJCb2FyZEVudGl0eUNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/molecules/Board/Board.styled.ts\n"));

/***/ })

});