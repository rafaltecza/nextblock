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

/***/ "./src/components/atoms/Title/Title.styled.ts":
/*!****************************************************!*\
  !*** ./src/components/atoms/Title/Title.styled.ts ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledTitle\": function() { return /* binding */ StyledTitle; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: relative;\\n\\n  & > span:first-child {\\n      font-family: 'Oxanium', cursive;\\n  font-size: \",\n        \";\\n  font-weight: \",\n        \";\\n  text-align: \",\n        \";\\n  white-space: \",\n        \";\\n  color: transparent;\\n  background-image: linear-gradient(to bottom, \",\n        \", \",\n        \");\\n  background-clip: text;\\n  z-index: 1;\\n  -webkit-background-clip: text;\\n  -webkit-text-stroke: \",\n        \";\\n  text-stroke: \",\n        \";\\n  z-index: 10;\\n  position: relative;\\n  display: block;\\n  }\\n  \\n  & > span:last-child {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    font-family: 'Oxanium', cursive;\\n    font-size: \",\n        \";\\n    font-weight: \",\n        \";\\n    text-align: \",\n        \";\\n    white-space: \",\n        \";\\n    color: transparent;\\n    pointer-events: none;\\n    z-index: 0;\\n    text-shadow: 0 0 20px rgba(0, 0, 0, 0.4), 0 0 10px rgba(0, 0, 0, 0.3);\\n  {...props}\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nconst StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1.withConfig({\n    displayName: \"Title.styled__StyledTitle\",\n    componentId: \"sc-2a4af00e-0\"\n})(_templateObject(), (param)=>{\n    let { size  } = param;\n    return size || \"1.5rem\";\n}, (param)=>{\n    let { weight  } = param;\n    return weight || \"bold\";\n}, (param)=>{\n    let { textAlign  } = param;\n    return textAlign || \"center\";\n}, (param)=>{\n    let { whiteSpace  } = param;\n    return whiteSpace || \"normal\";\n}, (param)=>{\n    let { color1  } = param;\n    return color1;\n}, (param)=>{\n    let { color2  } = param;\n    return color2;\n}, (param)=>{\n    let { textBorderSize , textBorderColor  } = param;\n    return textBorderSize && textBorderColor ? \"\".concat(textBorderSize, \" \").concat(textBorderColor) : \"none\";\n}, (param)=>{\n    let { textBorderSize , textBorderColor  } = param;\n    return textBorderSize && textBorderColor ? \"\".concat(textBorderSize, \" \").concat(textBorderColor) : \"none\";\n}, (param)=>{\n    let { size  } = param;\n    return size || \"1.5rem\";\n}, (param)=>{\n    let { weight  } = param;\n    return weight || \"bold\";\n}, (param)=>{\n    let { textAlign  } = param;\n    return textAlign || \"center\";\n}, (param)=>{\n    let { whiteSpace  } = param;\n    return whiteSpace || \"normal\";\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hdG9tcy9UaXRsZS9UaXRsZS5zdHlsZWQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUloQyxNQUFNQyxjQUFjRCx1RUFBUzs7O3NCQUtyQixTQUFjRztRQUFiLEVBQUVBLEtBQUksRUFBRTtXQUFLQSxRQUFRO0FBQU8sR0FDM0IsU0FBZ0JDO1FBQWYsRUFBRUEsT0FBTSxFQUFFO1dBQUtBLFVBQVU7QUFBSyxHQUNoQyxTQUFtQkM7UUFBbEIsRUFBRUEsVUFBUyxFQUFFO1dBQUtBLGFBQWE7QUFBTyxHQUN0QyxTQUFvQkM7UUFBbkIsRUFBRUEsV0FBVSxFQUFFO1dBQUtBLGNBQWM7QUFBTyxHQUVULFNBQWdCQztRQUFmLEVBQUVBLE9BQU0sRUFBRTtXQUFLQTtBQUFLLEdBQU0sU0FBZ0JDO1FBQWYsRUFBRUEsT0FBTSxFQUFFO1dBQUtBO0FBQUssR0FJeEUsU0FDckJDO1FBRHNCLEVBQUVBLGVBQWMsRUFBRUMsZ0JBQWUsRUFBRTtXQUN6REQsa0JBQWtCQyxrQkFBa0IsR0FBcUJBLE9BQWxCRCxnQkFBZSxLQUFtQixPQUFoQkMsbUJBQW9CLE1BQU07QUFBRCxHQUNyRSxTQUNiRDtRQURjLEVBQUVBLGVBQWMsRUFBRUMsZ0JBQWUsRUFBRTtXQUNqREQsa0JBQWtCQyxrQkFBa0IsR0FBcUJBLE9BQWxCRCxnQkFBZSxLQUFtQixPQUFoQkMsbUJBQW9CLE1BQU07QUFBRCxHQWFyRSxTQUFjUDtRQUFiLEVBQUVBLEtBQUksRUFBRTtXQUFLQSxRQUFRO0FBQU8sR0FDM0IsU0FBZ0JDO1FBQWYsRUFBRUEsT0FBTSxFQUFFO1dBQUtBLFVBQVU7QUFBSyxHQUNoQyxTQUFtQkM7UUFBbEIsRUFBRUEsVUFBUyxFQUFFO1dBQUtBLGFBQWE7QUFBTyxHQUN0QyxTQUFvQkM7UUFBbkIsRUFBRUEsV0FBVSxFQUFFO1dBQUtBLGNBQWM7QUFBTyxHQU8xRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hdG9tcy9UaXRsZS9UaXRsZS5zdHlsZWQudHM/NjkwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHtUaXRsZVByb3BzfSBmcm9tIFwiQGNvbXBvbmVudHMvYXRvbXMvVGl0bGUvVGl0bGVcIjtcblxuXG5leHBvcnQgY29uc3QgU3R5bGVkVGl0bGUgPSBzdHlsZWQuaDE8VGl0bGVQcm9wcz5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmID4gc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgICBmb250LWZhbWlseTogJ094YW5pdW0nLCBjdXJzaXZlO1xuICBmb250LXNpemU6ICR7KHsgc2l6ZSB9KSA9PiBzaXplIHx8IFwiMS41cmVtXCJ9O1xuICBmb250LXdlaWdodDogJHsoeyB3ZWlnaHQgfSkgPT4gd2VpZ2h0IHx8IFwiYm9sZFwifTtcbiAgdGV4dC1hbGlnbjogJHsoeyB0ZXh0QWxpZ24gfSkgPT4gdGV4dEFsaWduIHx8IFwiY2VudGVyXCJ9O1xuICB3aGl0ZS1zcGFjZTogJHsoeyB3aGl0ZVNwYWNlIH0pID0+IHdoaXRlU3BhY2UgfHwgXCJub3JtYWxcIn07XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHsoeyBjb2xvcjEgfSkgPT4gY29sb3IxfSwgJHsoeyBjb2xvcjIgfSkgPT4gY29sb3IyfSk7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgei1pbmRleDogMTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1zdHJva2U6ICR7KHsgdGV4dEJvcmRlclNpemUsIHRleHRCb3JkZXJDb2xvciB9KSA9PlxuICAgIHRleHRCb3JkZXJTaXplICYmIHRleHRCb3JkZXJDb2xvciA/IGAke3RleHRCb3JkZXJTaXplfSAke3RleHRCb3JkZXJDb2xvcn1gIDogXCJub25lXCJ9O1xuICB0ZXh0LXN0cm9rZTogJHsoeyB0ZXh0Qm9yZGVyU2l6ZSwgdGV4dEJvcmRlckNvbG9yIH0pID0+XG4gICAgdGV4dEJvcmRlclNpemUgJiYgdGV4dEJvcmRlckNvbG9yID8gYCR7dGV4dEJvcmRlclNpemV9ICR7dGV4dEJvcmRlckNvbG9yfWAgOiBcIm5vbmVcIn07XG4gIHotaW5kZXg6IDEwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAmID4gc3BhbjpsYXN0LWNoaWxkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiAnT3hhbml1bScsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiAkeyh7IHNpemUgfSkgPT4gc2l6ZSB8fCBcIjEuNXJlbVwifTtcbiAgICBmb250LXdlaWdodDogJHsoeyB3ZWlnaHQgfSkgPT4gd2VpZ2h0IHx8IFwiYm9sZFwifTtcbiAgICB0ZXh0LWFsaWduOiAkeyh7IHRleHRBbGlnbiB9KSA9PiB0ZXh0QWxpZ24gfHwgXCJjZW50ZXJcIn07XG4gICAgd2hpdGUtc3BhY2U6ICR7KHsgd2hpdGVTcGFjZSB9KSA9PiB3aGl0ZVNwYWNlIHx8IFwibm9ybWFsXCJ9O1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB6LWluZGV4OiAwO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuNCksIDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgey4uLnByb3BzfVxuICB9XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlN0eWxlZFRpdGxlIiwiaDEiLCJzaXplIiwid2VpZ2h0IiwidGV4dEFsaWduIiwid2hpdGVTcGFjZSIsImNvbG9yMSIsImNvbG9yMiIsInRleHRCb3JkZXJTaXplIiwidGV4dEJvcmRlckNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/atoms/Title/Title.styled.ts\n"));

/***/ })

});