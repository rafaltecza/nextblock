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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledTitle\": function() { return /* binding */ StyledTitle; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: relative;\\n  font-family: 'Oxanium', cursive;\\n  font-size: \",\n        \";\\n  font-weight: \",\n        \";\\n  text-align: \",\n        \";\\n  white-space: \",\n        \";\\n  color: transparent;\\n  background-image: linear-gradient(to bottom, \",\n        \", \",\n        \");\\n  background-clip: text;\\n  -webkit-background-clip: text;\\n  -webkit-text-stroke: \",\n        \";\\n  text-stroke: \",\n        \";\\n  z-index: 10;\\n\\n  & > span:first-child {\\n      font-family: 'Oxanium', cursive;\\n  font-size: \",\n        \";\\n  font-weight: \",\n        \";\\n  text-align: \",\n        \";\\n  white-space: \",\n        \";\\n  color: transparent;\\n  background-image: linear-gradient(to bottom, \",\n        \", \",\n        \");\\n  background-clip: text;\\n  z-index: 1;\\n  -webkit-background-clip: text;\\n  -webkit-text-stroke: \",\n        \";\\n  text-stroke: \",\n        \";\\n  z-index: 10;\\n  position: relative;\\n  display: block;\\n  }\\n  \\n  & > span:last-child {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    font-family: 'Oxanium', cursive;\\n    font-size: \",\n        \";\\n    font-weight: \",\n        \";\\n    text-align: \",\n        \";\\n    white-space: \",\n        \";\\n    color: transparent;\\n    pointer-events: none;\\n    z-index: 0;\\n    text-shadow: 0 0 20px rgba(0, 0, 0, 0.4), 0 0 10px rgba(0, 0, 0, 0.3);\\n  {...props}\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nconst StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1.withConfig({\n    displayName: \"Title.styled__StyledTitle\",\n    componentId: \"sc-3c84508e-0\"\n})(_templateObject(), (param)=>{\n    let { size  } = param;\n    return size || \"1.5rem\";\n}, (param)=>{\n    let { weight  } = param;\n    return weight || \"bold\";\n}, (param)=>{\n    let { textAlign  } = param;\n    return textAlign || \"center\";\n}, (param)=>{\n    let { whiteSpace  } = param;\n    return whiteSpace || \"normal\";\n}, (param)=>{\n    let { color1  } = param;\n    return color1;\n}, (param)=>{\n    let { color2  } = param;\n    return color2;\n}, (param)=>{\n    let { textBorderSize , textBorderColor  } = param;\n    return textBorderSize && textBorderColor ? \"\".concat(textBorderSize, \" \").concat(textBorderColor) : \"none\";\n}, (param)=>{\n    let { textBorderSize , textBorderColor  } = param;\n    return textBorderSize && textBorderColor ? \"\".concat(textBorderSize, \" \").concat(textBorderColor) : \"none\";\n}, (param)=>{\n    let { size  } = param;\n    return size || \"1.5rem\";\n}, (param)=>{\n    let { weight  } = param;\n    return weight || \"bold\";\n}, (param)=>{\n    let { textAlign  } = param;\n    return textAlign || \"center\";\n}, (param)=>{\n    let { whiteSpace  } = param;\n    return whiteSpace || \"normal\";\n}, (param)=>{\n    let { color1  } = param;\n    return color1;\n}, (param)=>{\n    let { color2  } = param;\n    return color2;\n}, (param)=>{\n    let { textBorderSize , textBorderColor  } = param;\n    return textBorderSize && textBorderColor ? \"\".concat(textBorderSize, \" \").concat(textBorderColor) : \"none\";\n}, (param)=>{\n    let { textBorderSize , textBorderColor  } = param;\n    return textBorderSize && textBorderColor ? \"\".concat(textBorderSize, \" \").concat(textBorderColor) : \"none\";\n}, (param)=>{\n    let { size  } = param;\n    return size || \"1.5rem\";\n}, (param)=>{\n    let { weight  } = param;\n    return weight || \"bold\";\n}, (param)=>{\n    let { textAlign  } = param;\n    return textAlign || \"center\";\n}, (param)=>{\n    let { whiteSpace  } = param;\n    return whiteSpace || \"normal\";\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hdG9tcy9UaXRsZS9UaXRsZS5zdHlsZWQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBSWhDLE1BQU1DLGNBQWNELHVFQUFTOzs7c0JBR3JCLFNBQWNHO1FBQWIsRUFBRUEsS0FBSSxFQUFFO1dBQUtBLFFBQVE7QUFBTyxHQUMzQixTQUFnQkM7UUFBZixFQUFFQSxPQUFNLEVBQUU7V0FBS0EsVUFBVTtBQUFLLEdBQ2hDLFNBQW1CQztRQUFsQixFQUFFQSxVQUFTLEVBQUU7V0FBS0EsYUFBYTtBQUFPLEdBQ3RDLFNBQW9CQztRQUFuQixFQUFFQSxXQUFVLEVBQUU7V0FBS0EsY0FBYztBQUFPLEdBRVQsU0FBZ0JDO1FBQWYsRUFBRUEsT0FBTSxFQUFFO1dBQUtBO0FBQUssR0FBTSxTQUFnQkM7UUFBZixFQUFFQSxPQUFNLEVBQUU7V0FBS0E7QUFBSyxHQUd4RSxTQUNyQkM7UUFEc0IsRUFBRUEsZUFBYyxFQUFFQyxnQkFBZSxFQUFFO1dBQ3pERCxrQkFBa0JDLGtCQUFrQixHQUFxQkEsT0FBbEJELGdCQUFlLEtBQW1CLE9BQWhCQyxtQkFBb0IsTUFBTTtBQUFELEdBQ3JFLFNBQ2JEO1FBRGMsRUFBRUEsZUFBYyxFQUFFQyxnQkFBZSxFQUFFO1dBQ2pERCxrQkFBa0JDLGtCQUFrQixHQUFxQkEsT0FBbEJELGdCQUFlLEtBQW1CLE9BQWhCQyxtQkFBb0IsTUFBTTtBQUFELEdBS3ZFLFNBQWNQO1FBQWIsRUFBRUEsS0FBSSxFQUFFO1dBQUtBLFFBQVE7QUFBTyxHQUMzQixTQUFnQkM7UUFBZixFQUFFQSxPQUFNLEVBQUU7V0FBS0EsVUFBVTtBQUFLLEdBQ2hDLFNBQW1CQztRQUFsQixFQUFFQSxVQUFTLEVBQUU7V0FBS0EsYUFBYTtBQUFPLEdBQ3RDLFNBQW9CQztRQUFuQixFQUFFQSxXQUFVLEVBQUU7V0FBS0EsY0FBYztBQUFPLEdBRVQsU0FBZ0JDO1FBQWYsRUFBRUEsT0FBTSxFQUFFO1dBQUtBO0FBQUssR0FBTSxTQUFnQkM7UUFBZixFQUFFQSxPQUFNLEVBQUU7V0FBS0E7QUFBSyxHQUl4RSxTQUNyQkM7UUFEc0IsRUFBRUEsZUFBYyxFQUFFQyxnQkFBZSxFQUFFO1dBQ3pERCxrQkFBa0JDLGtCQUFrQixHQUFxQkEsT0FBbEJELGdCQUFlLEtBQW1CLE9BQWhCQyxtQkFBb0IsTUFBTTtBQUFELEdBQ3JFLFNBQ2JEO1FBRGMsRUFBRUEsZUFBYyxFQUFFQyxnQkFBZSxFQUFFO1dBQ2pERCxrQkFBa0JDLGtCQUFrQixHQUFxQkEsT0FBbEJELGdCQUFlLEtBQW1CLE9BQWhCQyxtQkFBb0IsTUFBTTtBQUFELEdBYXJFLFNBQWNQO1FBQWIsRUFBRUEsS0FBSSxFQUFFO1dBQUtBLFFBQVE7QUFBTyxHQUMzQixTQUFnQkM7UUFBZixFQUFFQSxPQUFNLEVBQUU7V0FBS0EsVUFBVTtBQUFLLEdBQ2hDLFNBQW1CQztRQUFsQixFQUFFQSxVQUFTLEVBQUU7V0FBS0EsYUFBYTtBQUFPLEdBQ3RDLFNBQW9CQztRQUFuQixFQUFFQSxXQUFVLEVBQUU7V0FBS0EsY0FBYztBQUFPLEdBTzFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2F0b21zL1RpdGxlL1RpdGxlLnN0eWxlZC50cz82OTA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQge1RpdGxlUHJvcHN9IGZyb20gXCJAY29tcG9uZW50cy9hdG9tcy9UaXRsZS9UaXRsZVwiO1xuXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZC5oMTxUaXRsZVByb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogJ094YW5pdW0nLCBjdXJzaXZlO1xuICBmb250LXNpemU6ICR7KHsgc2l6ZSB9KSA9PiBzaXplIHx8IFwiMS41cmVtXCJ9O1xuICBmb250LXdlaWdodDogJHsoeyB3ZWlnaHQgfSkgPT4gd2VpZ2h0IHx8IFwiYm9sZFwifTtcbiAgdGV4dC1hbGlnbjogJHsoeyB0ZXh0QWxpZ24gfSkgPT4gdGV4dEFsaWduIHx8IFwiY2VudGVyXCJ9O1xuICB3aGl0ZS1zcGFjZTogJHsoeyB3aGl0ZVNwYWNlIH0pID0+IHdoaXRlU3BhY2UgfHwgXCJub3JtYWxcIn07XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHsoeyBjb2xvcjEgfSkgPT4gY29sb3IxfSwgJHsoeyBjb2xvcjIgfSkgPT4gY29sb3IyfSk7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1zdHJva2U6ICR7KHsgdGV4dEJvcmRlclNpemUsIHRleHRCb3JkZXJDb2xvciB9KSA9PlxuICAgIHRleHRCb3JkZXJTaXplICYmIHRleHRCb3JkZXJDb2xvciA/IGAke3RleHRCb3JkZXJTaXplfSAke3RleHRCb3JkZXJDb2xvcn1gIDogXCJub25lXCJ9O1xuICB0ZXh0LXN0cm9rZTogJHsoeyB0ZXh0Qm9yZGVyU2l6ZSwgdGV4dEJvcmRlckNvbG9yIH0pID0+XG4gICAgdGV4dEJvcmRlclNpemUgJiYgdGV4dEJvcmRlckNvbG9yID8gYCR7dGV4dEJvcmRlclNpemV9ICR7dGV4dEJvcmRlckNvbG9yfWAgOiBcIm5vbmVcIn07XG4gIHotaW5kZXg6IDEwO1xuXG4gICYgPiBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnT3hhbml1bScsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogJHsoeyBzaXplIH0pID0+IHNpemUgfHwgXCIxLjVyZW1cIn07XG4gIGZvbnQtd2VpZ2h0OiAkeyh7IHdlaWdodCB9KSA9PiB3ZWlnaHQgfHwgXCJib2xkXCJ9O1xuICB0ZXh0LWFsaWduOiAkeyh7IHRleHRBbGlnbiB9KSA9PiB0ZXh0QWxpZ24gfHwgXCJjZW50ZXJcIn07XG4gIHdoaXRlLXNwYWNlOiAkeyh7IHdoaXRlU3BhY2UgfSkgPT4gd2hpdGVTcGFjZSB8fCBcIm5vcm1hbFwifTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkeyh7IGNvbG9yMSB9KSA9PiBjb2xvcjF9LCAkeyh7IGNvbG9yMiB9KSA9PiBjb2xvcjJ9KTtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICB6LWluZGV4OiAxO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogJHsoeyB0ZXh0Qm9yZGVyU2l6ZSwgdGV4dEJvcmRlckNvbG9yIH0pID0+XG4gICAgdGV4dEJvcmRlclNpemUgJiYgdGV4dEJvcmRlckNvbG9yID8gYCR7dGV4dEJvcmRlclNpemV9ICR7dGV4dEJvcmRlckNvbG9yfWAgOiBcIm5vbmVcIn07XG4gIHRleHQtc3Ryb2tlOiAkeyh7IHRleHRCb3JkZXJTaXplLCB0ZXh0Qm9yZGVyQ29sb3IgfSkgPT5cbiAgICB0ZXh0Qm9yZGVyU2l6ZSAmJiB0ZXh0Qm9yZGVyQ29sb3IgPyBgJHt0ZXh0Qm9yZGVyU2l6ZX0gJHt0ZXh0Qm9yZGVyQ29sb3J9YCA6IFwibm9uZVwifTtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gICYgPiBzcGFuOmxhc3QtY2hpbGQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6ICdPeGFuaXVtJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6ICR7KHsgc2l6ZSB9KSA9PiBzaXplIHx8IFwiMS41cmVtXCJ9O1xuICAgIGZvbnQtd2VpZ2h0OiAkeyh7IHdlaWdodCB9KSA9PiB3ZWlnaHQgfHwgXCJib2xkXCJ9O1xuICAgIHRleHQtYWxpZ246ICR7KHsgdGV4dEFsaWduIH0pID0+IHRleHRBbGlnbiB8fCBcImNlbnRlclwifTtcbiAgICB3aGl0ZS1zcGFjZTogJHsoeyB3aGl0ZVNwYWNlIH0pID0+IHdoaXRlU3BhY2UgfHwgXCJub3JtYWxcIn07XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IDA7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC40KSwgMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB7Li4ucHJvcHN9XG4gIH1cbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiU3R5bGVkVGl0bGUiLCJoMSIsInNpemUiLCJ3ZWlnaHQiLCJ0ZXh0QWxpZ24iLCJ3aGl0ZVNwYWNlIiwiY29sb3IxIiwiY29sb3IyIiwidGV4dEJvcmRlclNpemUiLCJ0ZXh0Qm9yZGVyQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/atoms/Title/Title.styled.ts\n"));

/***/ })

});