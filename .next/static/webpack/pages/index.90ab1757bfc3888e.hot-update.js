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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BoardContainer\": function() { return /* binding */ BoardContainer; },\n/* harmony export */   \"BoardData\": function() { return /* binding */ BoardData; },\n/* harmony export */   \"BoardEntityContainer\": function() { return /* binding */ BoardEntityContainer; },\n/* harmony export */   \"BoardPlace\": function() { return /* binding */ BoardPlace; },\n/* harmony export */   \"BoardPoints\": function() { return /* binding */ BoardPoints; },\n/* harmony export */   \"BoardTitle\": function() { return /* binding */ BoardTitle; },\n/* harmony export */   \"BoardWrapper\": function() { return /* binding */ BoardWrapper; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  gap: 0.5rem;\\n  width: 100%;\\n  font-size: 1.5rem;\\n  background-color: \",\n        \";\\n\\n  &.primary {\\n    border: 3px solid #4fa051;\\n    background-color: #326653;\\n  }\\n\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: block;\\n  width: 100%;\\n  color: #21483f;\\n  background: #62bd89;\\n  text-align: center;\\n  font-size: 1.2rem;\\n    line-height: 40px;\\n  font-weight: bold;\\n  text-transform: uppercase;\\n  margin: 0;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    width: 100%;\\n  \\n    .board-place {\\n      \\n    }\\n\\n      .board-data {\\n    \\n      }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: block;\\n  width: 60px;\\n  line-height: 50px;\\n  font-weight: bold;\\n  font-size: 1.6rem;\\n  text-align: center;\\n  background-color: rgba(0, 0, 0, 0.1);\\n  color: #4fa051;\\n  \",\n        \"\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: block;\\n  width: 100%;\\n  height: 100%;\\n  color: #7ecb58;\\n  min-width: 180px;\\n  font-weight: bold;\\n  \\n    @media (min-width: 1920px) {\\n        min-width: 250px;\\n    }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: block;\\n  width: 30%;\\n  height: 100%;\\n  color: #59ab52;\\n  font-weight: bold;\\n  padding-right: 1rem;\\n  text-align: right;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  width: 100%;\\n  position: relative;\\n\\n  &.primary {\\n      &::before {\\n        content: \"\";\\n        background-image: url(\"/images/icons/decoration/Leaderboard_Silver.png\");\\n        background-repeat: no-repeat;\\n        background-size: cover;\\n        width: 100%;\\n        height: 48%;\\n        position: absolute;\\n        top: 0;\\n        opacity: 0.1;\\n        left: 0;\\n      }\\n    }\\n'\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst BoardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Board.styled__BoardContainer\",\n    componentId: \"sc-1a3c82-0\"\n})(_templateObject(), (param)=>{\n    let { index  } = param;\n    return index % 2 === 0 ? \"#29594f\" : \"#2f6256\";\n});\nconst BoardTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h2.withConfig({\n    displayName: \"Board.styled__BoardTitle\",\n    componentId: \"sc-1a3c82-1\"\n})(_templateObject1());\nconst BoardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Board.styled__BoardWrapper\",\n    componentId: \"sc-1a3c82-2\"\n})(_templateObject2());\nconst BoardPlace = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Board.styled__BoardPlace\",\n    componentId: \"sc-1a3c82-3\"\n})(_templateObject3(), (param)=>{\n    let { place  } = param;\n    return (place === 0 || place === 1 || place === 2 || place === 3) && 'color: #28594d; background-image: url(\"/images/icons/board/Frame_leaderboards_DIY_'.concat(place, '.png\");');\n});\nconst BoardData = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Board.styled__BoardData\",\n    componentId: \"sc-1a3c82-4\"\n})(_templateObject4());\nconst BoardPoints = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Board.styled__BoardPoints\",\n    componentId: \"sc-1a3c82-5\"\n})(_templateObject5());\nconst BoardEntityContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Board.styled__BoardEntityContainer\",\n    componentId: \"sc-1a3c82-6\"\n})(_templateObject6());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvQm9hcmQvQm9hcmQuc3R5bGVkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUdoQyxNQUFNQyxpQkFBaUJELHdFQUFVOzs7c0JBT2xCLFNBQWNHO1FBQWIsRUFBQ0EsTUFBSyxFQUFDO1dBQU1BLFFBQVEsTUFBTSxJQUFJLFlBQVksU0FBUztBQUFELEdBT3hFO0FBRUssTUFBTUMsYUFBYUosdUVBQVM7Ozt1QkFXbEM7QUFFTSxNQUFNTSxlQUFlTix3RUFBVTs7O3VCQWFwQztBQUVLLE1BQU1PLGFBQWFQLHdFQUFVOzs7dUJBU2hDLFNBQ0E7UUFEQyxFQUFFUSxNQUFLLEVBQUU7V0FDVixDQUFDQSxVQUFVLEtBQUtBLFVBQVUsS0FBS0EsVUFBVSxLQUFLQSxVQUFVLE1BQ3hELHFGQUEyRixPQUFOQSxPQUFNO0FBQU8sR0FDcEc7QUFHSyxNQUFNQyxZQUFZVCx3RUFBVTs7O3VCQVdqQztBQUVLLE1BQU1VLGNBQWNWLHdFQUFVOzs7dUJBUW5DO0FBRUssTUFBTVcsdUJBQXVCWCx3RUFBVTs7O3VCQWtCNUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL0JvYXJkL0JvYXJkLnN0eWxlZC50cz80YjBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge0JvYXJkUHJvcHN9IGZyb20gXCJAY29tcG9uZW50cy9tb2xlY3VsZXMvQm9hcmQvQm9hcmRcIjtcblxuZXhwb3J0IGNvbnN0IEJvYXJkQ29udGFpbmVyID0gc3R5bGVkLmRpdjx7aW5kZXg6IG51bWJlcn0+YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7aW5kZXh9KSA9PiAoaW5kZXggJSAyID09PSAwID8gXCIjMjk1OTRmXCIgOiBcIiMyZjYyNTZcIil9O1xuXG4gICYucHJpbWFyeSB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzRmYTA1MTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI2NjUzO1xuICB9XG5cbmA7XG5cbmV4cG9ydCBjb25zdCBCb2FyZFRpdGxlID0gc3R5bGVkLmgyYFxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjMjE0ODNmO1xuICBiYWNrZ3JvdW5kOiAjNjJiZDg5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwO1xuYFxuXG5leHBvcnQgY29uc3QgQm9hcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgXG4gICAgLmJvYXJkLXBsYWNlIHtcbiAgICAgIFxuICAgIH1cblxuICAgICAgLmJvYXJkLWRhdGEge1xuICAgIFxuICAgICAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJvYXJkUGxhY2UgPSBzdHlsZWQuZGl2PHsgcGxhY2U6IG51bWJlciB9PmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgY29sb3I6ICM0ZmEwNTE7XG4gICR7KHsgcGxhY2UgfSkgPT5cbiAgICAocGxhY2UgPT09IDAgfHwgcGxhY2UgPT09IDEgfHwgcGxhY2UgPT09IDIgfHwgcGxhY2UgPT09IDMpICYmXG4gICAgYGNvbG9yOiAjMjg1OTRkOyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvaW1hZ2VzL2ljb25zL2JvYXJkL0ZyYW1lX2xlYWRlcmJvYXJkc19ESVlfJHtwbGFjZX0ucG5nXCIpO2B9XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBCb2FyZERhdGEgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICM3ZWNiNTg7XG4gIG1pbi13aWR0aDogMTgwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gICAgICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJvYXJkUG9pbnRzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICM1OWFiNTI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbmA7XG5cbmV4cG9ydCBjb25zdCBCb2FyZEVudGl0eUNvbnRhaW5lciA9IHN0eWxlZC5kaXY8Qm9hcmRQcm9wcz5gXG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJi5wcmltYXJ5IHtcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9pbWFnZXMvaWNvbnMvZGVjb3JhdGlvbi9MZWFkZXJib2FyZF9TaWx2ZXIucG5nXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA0OCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBvcGFjaXR5OiAwLjE7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuYDsiXSwibmFtZXMiOlsic3R5bGVkIiwiQm9hcmRDb250YWluZXIiLCJkaXYiLCJpbmRleCIsIkJvYXJkVGl0bGUiLCJoMiIsIkJvYXJkV3JhcHBlciIsIkJvYXJkUGxhY2UiLCJwbGFjZSIsIkJvYXJkRGF0YSIsIkJvYXJkUG9pbnRzIiwiQm9hcmRFbnRpdHlDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/molecules/Board/Board.styled.ts\n"));

/***/ })

});