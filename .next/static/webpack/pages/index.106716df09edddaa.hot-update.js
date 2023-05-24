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

/***/ "./src/components/pages/Home/Home.tsx":
/*!********************************************!*\
  !*** ./src/components/pages/Home/Home.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_templates_MainTemplate_MainTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/templates/MainTemplate/MainTemplate */ \"./src/components/templates/MainTemplate/MainTemplate.tsx\");\n/* harmony import */ var _components_atoms_Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/atoms/Card/Card */ \"./src/components/atoms/Card/Card.tsx\");\n/* harmony import */ var _components_atoms_Label_Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/atoms/Label/Label */ \"./src/components/atoms/Label/Label.tsx\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ \"./node_modules/yup/index.esm.js\");\n/* harmony import */ var _views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @views/Home/Home.styled */ \"./src/components/pages/Home/Home.styled.ts\");\n/* harmony import */ var _components_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/atoms/Image/Image */ \"./src/components/atoms/Image/Image.tsx\");\n/* harmony import */ var _components_atoms_Video_Video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/atoms/Video/Video */ \"./src/components/atoms/Video/Video.tsx\");\n/* harmony import */ var _components_molecules_Board_Board__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/molecules/Board/Board */ \"./src/components/molecules/Board/Board.tsx\");\n/* harmony import */ var _components_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/atoms/Title/Title */ \"./src/components/atoms/Title/Title.tsx\");\n\n\n\n\n\n\n\n\n\n\nconst Home = ()=>{\n    const initialValues = {\n        cryptoAmount: \"\",\n        currencyAmount: \"\",\n        walletAddress: \"\"\n    };\n    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_4__.object().shape({\n        cryptoAmount: yup__WEBPACK_IMPORTED_MODULE_4__.string().required(\"Crypto Amount is required\"),\n        currencyAmount: yup__WEBPACK_IMPORTED_MODULE_4__.string().required(\"Currency Amount is required\"),\n        walletAddress: yup__WEBPACK_IMPORTED_MODULE_4__.string().required(\"Wallet Address is required\")\n    });\n    const items = [\n        {\n            name: \"Malitova\",\n            points: 1000\n        },\n        {\n            name: \"Spalacz\",\n            points: 900\n        },\n        {\n            name: \"Krwawic\",\n            points: 800\n        },\n        {\n            name: \"Zniesmaczony\",\n            points: 700\n        },\n        {\n            name: \"Randall\",\n            points: 600\n        },\n        {\n            name: \"Burton\",\n            points: 500\n        },\n        {\n            name: \"Rychlik\",\n            points: 400\n        },\n        {\n            name: \"Kowalski\",\n            points: 300\n        },\n        {\n            name: \"LadyRedShot\",\n            points: 200\n        },\n        {\n            name: \"NotYourBaby\",\n            points: 100\n        },\n        {\n            name: \"Polliana\",\n            points: 100\n        },\n        {\n            name: \"PolskaPanda\",\n            points: 100\n        },\n        {\n            name: \"Wojdyla\",\n            points: 100\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_templates_MainTemplate_MainTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__.HomeContainer, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__.LeftContainer, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Card_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        body: false,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__.LeaderBoardContainer, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    size: \"2rem\",\n                                    weight: \"800\",\n                                    textBorderColor: \"#000\",\n                                    textBorderSize: \"1px\",\n                                    color1: \"#fa2021\",\n                                    color2: \"#e70c60\",\n                                    children: \"Today's Leaderboards\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_molecules_Board_Board__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    items: items\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__.RightContainer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Card_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            type: \"secondary\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__.InfoContainer, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__.PrizesContainer, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__.PrizeContainer, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                    src: \"/images/icons/medals/medal_1.png\",\n                                                    alt: \"\",\n                                                    width: 45,\n                                                    height: 62\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                    lineNumber: 113,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Label_Label__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    fontWeight: \"bold\",\n                                                    color: \"#7ecb58\",\n                                                    whiteSpace: \"nowrap\",\n                                                    children: \"Lorem ipsum te de se la maniano lorem ipsum\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                    lineNumber: 114,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                            lineNumber: 112,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__.PrizeContainer, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                    src: \"/images/icons/medals/medal_2.png\",\n                                                    alt: \"\",\n                                                    width: 45,\n                                                    height: 62\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                    lineNumber: 117,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Label_Label__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    fontWeight: \"bold\",\n                                                    color: \"#7ecb58\",\n                                                    whiteSpace: \"nowrap\",\n                                                    children: \"Lorem ipsum te de se la maniano lorem ipsum\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                    lineNumber: 118,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                            lineNumber: 116,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__.PrizeContainer, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                    src: \"/images/icons/medals/medal_3.png\",\n                                                    alt: \"\",\n                                                    width: 45,\n                                                    height: 62\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                    lineNumber: 121,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Label_Label__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    fontWeight: \"bold\",\n                                                    color: \"#7ecb58\",\n                                                    whiteSpace: \"nowrap\",\n                                                    children: \"Lorem ipsum te de se la maniano lorem ipsum\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                    lineNumber: 122,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                            lineNumber: 120,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__.MainPrizeContainer, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Label_Label__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                size: 25,\n                                                fontWeight: \"bold\",\n                                                color: \"red\",\n                                                whiteSpace: \"nowrap\",\n                                                children: \"MAIN PRIZE IS WAITING FOR YOU\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                lineNumber: 125,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                            lineNumber: 124,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Video_Video__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            frameBorder: \"0\",\n                            allowFullScreen: false,\n                            allow: \"autoplay; fullscreen\" // Dodanie atrybutu 'autoplay' i dozwolonego fullscreen\n                            ,\n                            height: 480,\n                            src: \"/videos/preview.m4v\",\n                            autoPlay: true\n                        }, void 0, false, {\n                            fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                            lineNumber: 133,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n            lineNumber: 97,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n        lineNumber: 96,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU87Z0RBQU9DLFlBQVk7MERBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FRekYsOERBQUM5QixxRUFBS0E7NEJBQVMrQixhQUFZOzRCQUNaQyxpQkFBaUIsS0FBSzs0QkFDdEJDLE9BQU0sdUJBQXVCLHVEQUF1RDs7NEJBQ3BGTixRQUFROzRCQUFLSCxLQUFLOzRCQUF1QlUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEY7S0FySE0vQjtBQXVITiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Ib21lL0hvbWUudHN4Pzk1ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1haW5UZW1wbGF0ZSBmcm9tIFwiQGNvbXBvbmVudHMvdGVtcGxhdGVzL01haW5UZW1wbGF0ZS9NYWluVGVtcGxhdGVcIjtcbmltcG9ydCBDYXJkIGZyb20gXCJAY29tcG9uZW50cy9hdG9tcy9DYXJkL0NhcmRcIjtcbmltcG9ydCB7Q2FyZENhdGVnb3J5fSBmcm9tIFwiQGNvbXBvbmVudHMvYXRvbXMvQ2FyZC9DYXJkLnN0eWxlZFwiO1xuaW1wb3J0IElucHV0U2VsZWN0LCB7SW5wdXRUeXBlfSBmcm9tIFwiQGNvbXBvbmVudHMvbW9sZWN1bGVzL0lucHV0U2VsZWN0L0lucHV0U2VsZWN0XCI7XG5pbXBvcnQgQ29tYmluZWRJbnB1dFNlbGVjdCBmcm9tIFwiQGNvbXBvbmVudHMvbW9sZWN1bGVzL0NvbWJpbmVkSW5wdXRTZWxlY3QvQ29tYmluZWRJbnB1dFNlbGVjdFwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCJAY29tcG9uZW50cy9hdG9tcy9MYWJlbC9MYWJlbFwiO1xuaW1wb3J0IHtBbmltYXRpb25FdmVudCwgQW5pbWF0aW9uVHlwZSwgSWNvblNpZGUsIFN0eWxlVHlwZX0gZnJvbSBcIkB0eXBlL0VudW1zXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAY29tcG9uZW50cy9hdG9tcy9CdXR0b24vQnV0dG9uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIkBjb21wb25lbnRzL2F0b21zL0ltYWdlL0ltYWdlXCI7XG5pbXBvcnQgRm9ybUV4Y2hhbmdlIGZyb20gXCJAY29tcG9uZW50cy9vcmdhbmlzbXMvRm9ybS9Gb3JtRXhjaGFuZ2UvRm9ybUV4Y2hhbmdlXCI7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIkBjb21wb25lbnRzL29yZ2FuaXNtcy9Gb3JtL0Zvcm1cIjtcbmltcG9ydCBDdXN0b21Gb3JtIGZyb20gXCJAY29tcG9uZW50cy9vcmdhbmlzbXMvRm9ybS9Gb3JtXCI7XG5pbXBvcnQge1xuICAgIERvd25sb2FkQ29udGFpbmVyLFxuICAgIEhvbWVDb250YWluZXIsIEluZm9Db250YWluZXIsIExlYWRlckJvYXJkQ29udGFpbmVyLCBMZWFkZXJCb2FyZExvZ28sXG4gICAgTGVmdENvbnRhaW5lciwgTWFpblByaXplQ29udGFpbmVyLFxuICAgIFByaXplQ29udGFpbmVyLFxuICAgIFByaXplc0NvbnRhaW5lciwgUmlnaHRDb250YWluZXIsIFRpdGxlQ29udGFpbmVyLCBWZW5kb3JzQ29udGFpbmVyXG59IGZyb20gXCJAdmlld3MvSG9tZS9Ib21lLnN0eWxlZFwiO1xuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCJAY29tcG9uZW50cy9hdG9tcy9JbWFnZS9JbWFnZVwiO1xuaW1wb3J0IFZpZGVvIGZyb20gXCJAY29tcG9uZW50cy9hdG9tcy9WaWRlby9WaWRlb1wiO1xuaW1wb3J0IEJvYXJkIGZyb20gXCJAY29tcG9uZW50cy9tb2xlY3VsZXMvQm9hcmQvQm9hcmRcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiQGNvbXBvbmVudHMvYXRvbXMvVGl0bGUvVGl0bGVcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcblxuICAgIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XG4gICAgICAgIGNyeXB0b0Ftb3VudDogXCJcIixcbiAgICAgICAgY3VycmVuY3lBbW91bnQ6IFwiXCIsXG4gICAgICAgIHdhbGxldEFkZHJlc3M6IFwiXCIsXG4gICAgfTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICBjcnlwdG9BbW91bnQ6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIkNyeXB0byBBbW91bnQgaXMgcmVxdWlyZWRcIiksXG4gICAgICAgIGN1cnJlbmN5QW1vdW50OiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJDdXJyZW5jeSBBbW91bnQgaXMgcmVxdWlyZWRcIiksXG4gICAgICAgIHdhbGxldEFkZHJlc3M6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIldhbGxldCBBZGRyZXNzIGlzIHJlcXVpcmVkXCIpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiTWFsaXRvdmFcIixcbiAgICAgICAgICAgIHBvaW50czogMTAwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlNwYWxhY3pcIixcbiAgICAgICAgICAgIHBvaW50czogOTAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiS3J3YXdpY1wiLFxuICAgICAgICAgICAgcG9pbnRzOiA4MDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJabmllc21hY3pvbnlcIixcbiAgICAgICAgICAgIHBvaW50czogNzAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiUmFuZGFsbFwiLFxuICAgICAgICAgICAgcG9pbnRzOiA2MDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJCdXJ0b25cIixcbiAgICAgICAgICAgIHBvaW50czogNTAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiUnljaGxpa1wiLFxuICAgICAgICAgICAgcG9pbnRzOiA0MDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJLb3dhbHNraVwiLFxuICAgICAgICAgICAgcG9pbnRzOiAzMDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJMYWR5UmVkU2hvdFwiLFxuICAgICAgICAgICAgcG9pbnRzOiAyMDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJOb3RZb3VyQmFieVwiLFxuICAgICAgICAgICAgcG9pbnRzOiAxMDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJQb2xsaWFuYVwiLFxuICAgICAgICAgICAgcG9pbnRzOiAxMDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJQb2xza2FQYW5kYVwiLFxuICAgICAgICAgICAgcG9pbnRzOiAxMDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJXb2pkeWxhXCIsXG4gICAgICAgICAgICBwb2ludHM6IDEwMFxuICAgICAgICB9XG4gICAgXTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNYWluVGVtcGxhdGU+XG4gICAgICAgICAgICA8SG9tZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8TGVmdENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQgYm9keT17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExlYWRlckJvYXJkQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZSBzaXplPVwiMnJlbVwiIHdlaWdodD1cIjgwMFwiIHRleHRCb3JkZXJDb2xvcj1cIiMwMDBcIiB0ZXh0Qm9yZGVyU2l6ZT1cIjFweFwiIGNvbG9yMT1cIiNmYTIwMjFcIiBjb2xvcjI9XCIjZTcwYzYwXCI+VG9kYXkncyBMZWFkZXJib2FyZHM8L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZCBpdGVtcz17aXRlbXN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGVhZGVyQm9hcmRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICA8L0xlZnRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFJpZ2h0Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCB0eXBlPXsnc2Vjb25kYXJ5J30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5mb0NvbnRhaW5lcj5cbiAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcml6ZXNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcml6ZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSBzcmM9eycvaW1hZ2VzL2ljb25zL21lZGFscy9tZWRhbF8xLnBuZyd9IGFsdD17Jyd9IHdpZHRoPXs0NX0gaGVpZ2h0PXs2Mn0+PC9DdXN0b21JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb250V2VpZ2h0PXsnYm9sZCd9IGNvbG9yPXsnIzdlY2I1OCd9IHdoaXRlU3BhY2U9eydub3dyYXAnfT5Mb3JlbSBpcHN1bSB0ZSBkZSBzZSBsYSBtYW5pYW5vIGxvcmVtIGlwc3VtPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qcml6ZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaXplQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlIHNyYz17Jy9pbWFnZXMvaWNvbnMvbWVkYWxzL21lZGFsXzIucG5nJ30gYWx0PXsnJ30gd2lkdGg9ezQ1fSBoZWlnaHQ9ezYyfT48L0N1c3RvbUltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvbnRXZWlnaHQ9eydib2xkJ30gY29sb3I9eycjN2VjYjU4J30gd2hpdGVTcGFjZT17J25vd3JhcCd9PkxvcmVtIGlwc3VtIHRlIGRlIHNlIGxhIG1hbmlhbm8gbG9yZW0gaXBzdW08L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ByaXplQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpemVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2Ugc3JjPXsnL2ltYWdlcy9pY29ucy9tZWRhbHMvbWVkYWxfMy5wbmcnfSBhbHQ9eycnfSB3aWR0aD17NDV9IGhlaWdodD17NjJ9PjwvQ3VzdG9tSW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9udFdlaWdodD17J2JvbGQnfSBjb2xvcj17JyM3ZWNiNTgnfSB3aGl0ZVNwYWNlPXsnbm93cmFwJ30+TG9yZW0gaXBzdW0gdGUgZGUgc2UgbGEgbWFuaWFubyBsb3JlbSBpcHN1bTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJpemVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluUHJpemVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgc2l6ZT17MjV9IGZvbnRXZWlnaHQ9eydib2xkJ30gY29sb3I9eydyZWQnfSB3aGl0ZVNwYWNlPXsnbm93cmFwJ30+TUFJTiBQUklaRSBJUyBXQUlUSU5HIEZPUiBZT1U8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01haW5Qcml6ZUNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJpemVzQ29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0luZm9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8VmlkZW8gICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW49e2ZhbHNlfSAvLyBVc3V3YW5pZSBuYXdpZ2FjamkgKHByenljaXNrIGZ1bGxzY3JlZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93PVwiYXV0b3BsYXk7IGZ1bGxzY3JlZW5cIiAvLyBEb2RhbmllIGF0cnlidXR1ICdhdXRvcGxheScgaSBkb3p3b2xvbmVnbyBmdWxsc2NyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDgwfSBzcmM9eycvdmlkZW9zL3ByZXZpZXcubTR2J30gYXV0b1BsYXkvPlxuICAgICAgICAgICAgICAgIDwvUmlnaHRDb250YWluZXI+XG4gICAgICAgICAgICA8L0hvbWVDb250YWluZXI+XG5cblxuICAgICAgICA8L01haW5UZW1wbGF0ZT5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG4iXSwibmFtZXMiOlsiTWFpblRlbXBsYXRlIiwiQ2FyZCIsIkxhYmVsIiwiWXVwIiwiSG9tZUNvbnRhaW5lciIsIkluZm9Db250YWluZXIiLCJMZWFkZXJCb2FyZENvbnRhaW5lciIsIkxlZnRDb250YWluZXIiLCJNYWluUHJpemVDb250YWluZXIiLCJQcml6ZUNvbnRhaW5lciIsIlByaXplc0NvbnRhaW5lciIsIlJpZ2h0Q29udGFpbmVyIiwiQ3VzdG9tSW1hZ2UiLCJWaWRlbyIsIkJvYXJkIiwiVGl0bGUiLCJIb21lIiwiaW5pdGlhbFZhbHVlcyIsImNyeXB0b0Ftb3VudCIsImN1cnJlbmN5QW1vdW50Iiwid2FsbGV0QWRkcmVzcyIsInZhbGlkYXRpb25TY2hlbWEiLCJvYmplY3QiLCJzaGFwZSIsInN0cmluZyIsInJlcXVpcmVkIiwiaXRlbXMiLCJuYW1lIiwicG9pbnRzIiwiYm9keSIsInNpemUiLCJ3ZWlnaHQiLCJ0ZXh0Qm9yZGVyQ29sb3IiLCJ0ZXh0Qm9yZGVyU2l6ZSIsImNvbG9yMSIsImNvbG9yMiIsInR5cGUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImZvbnRXZWlnaHQiLCJjb2xvciIsIndoaXRlU3BhY2UiLCJmcmFtZUJvcmRlciIsImFsbG93RnVsbFNjcmVlbiIsImFsbG93IiwiYXV0b1BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/pages/Home/Home.tsx\n"));

/***/ })

});