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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_templates_MainTemplate_MainTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/templates/MainTemplate/MainTemplate */ \"./src/components/templates/MainTemplate/MainTemplate.tsx\");\n/* harmony import */ var _components_atoms_Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/atoms/Card/Card */ \"./src/components/atoms/Card/Card.tsx\");\n/* harmony import */ var _components_atoms_Label_Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/atoms/Label/Label */ \"./src/components/atoms/Label/Label.tsx\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ \"./node_modules/yup/index.esm.js\");\n/* harmony import */ var _views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @views/Home/Home.styled */ \"./src/components/pages/Home/Home.styled.ts\");\n/* harmony import */ var _components_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/atoms/Image/Image */ \"./src/components/atoms/Image/Image.tsx\");\n/* harmony import */ var _components_atoms_Video_Video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/atoms/Video/Video */ \"./src/components/atoms/Video/Video.tsx\");\n/* harmony import */ var _components_molecules_Board_Board__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/molecules/Board/Board */ \"./src/components/molecules/Board/Board.tsx\");\n\n\n\n\n\n\n\n\n\nconst Home = ()=>{\n    const initialValues = {\n        cryptoAmount: \"\",\n        currencyAmount: \"\",\n        walletAddress: \"\"\n    };\n    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_4__.object().shape({\n        cryptoAmount: yup__WEBPACK_IMPORTED_MODULE_4__.string().required(\"Crypto Amount is required\"),\n        currencyAmount: yup__WEBPACK_IMPORTED_MODULE_4__.string().required(\"Currency Amount is required\"),\n        walletAddress: yup__WEBPACK_IMPORTED_MODULE_4__.string().required(\"Wallet Address is required\")\n    });\n    const items = [\n        {\n            name: \"Malitova\",\n            points: 1000\n        },\n        {\n            name: \"Spalacz\",\n            points: 900\n        },\n        {\n            name: \"Krwawic\",\n            points: 800\n        },\n        {\n            name: \"Zniesmaczony\",\n            points: 700\n        },\n        {\n            name: \"Randall\",\n            points: 600\n        },\n        {\n            name: \"Burton\",\n            points: 500\n        },\n        {\n            name: \"Rychlik\",\n            points: 400\n        },\n        {\n            name: \"Kowalski\",\n            points: 300\n        },\n        {\n            name: \"LadyRedShot\",\n            points: 200\n        },\n        {\n            name: \"NotYourBaby\",\n            points: 100\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_templates_MainTemplate_MainTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__.HomeContainer, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__.LeftContainer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            src: \"/images/Leaderboard_Header.png\",\n                            alt: \"\",\n                            width: 300,\n                            height: 33\n                        }, void 0, false, {\n                            fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Card_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            body: false,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_molecules_Board_Board__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                items: items\n                            }, void 0, false, {\n                                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__.RightContainer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Card_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            type: \"secondary\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__.InfoContainer, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__.DownloadContainer, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                src: \"/images/qr/QR_Code.png\",\n                                                alt: \"\",\n                                                width: 200,\n                                                height: 200\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                lineNumber: 95,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__.VendorsContainer, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                        src: \"/images/vendors/Download_Button_AppStore.png\",\n                                                        alt: \"\",\n                                                        width: 200,\n                                                        height: 58\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                        lineNumber: 97,\n                                                        columnNumber: 37\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                        src: \"/images/vendors/Download_Button_Google.png\",\n                                                        alt: \"\",\n                                                        width: 200,\n                                                        height: 58\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                        lineNumber: 98,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                lineNumber: 96,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__.PrizesContainer, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__.PrizeContainer, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                        src: \"/images/icons/medals/medal_1.png\",\n                                                        alt: \"\",\n                                                        width: 45,\n                                                        height: 62\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                        lineNumber: 104,\n                                                        columnNumber: 37\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Label_Label__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                        fontWeight: \"bold\",\n                                                        color: \"#7ecb58\",\n                                                        whiteSpace: \"nowrap\",\n                                                        children: \"Lorem ipsum te de se la maniano lorem ipsum\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                        lineNumber: 105,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                lineNumber: 103,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__.PrizeContainer, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                        src: \"/images/icons/medals/medal_2.png\",\n                                                        alt: \"\",\n                                                        width: 45,\n                                                        height: 62\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                        lineNumber: 108,\n                                                        columnNumber: 37\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Label_Label__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                        fontWeight: \"bold\",\n                                                        color: \"#7ecb58\",\n                                                        whiteSpace: \"nowrap\",\n                                                        children: \"Lorem ipsum te de se la maniano lorem ipsum\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                        lineNumber: 109,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                lineNumber: 107,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__.PrizeContainer, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Image_Image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                        src: \"/images/icons/medals/medal_3.png\",\n                                                        alt: \"\",\n                                                        width: 45,\n                                                        height: 62\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                        lineNumber: 112,\n                                                        columnNumber: 37\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Label_Label__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                        fontWeight: \"bold\",\n                                                        color: \"#7ecb58\",\n                                                        whiteSpace: \"nowrap\",\n                                                        children: \"Lorem ipsum te de se la maniano lorem ipsum\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                        lineNumber: 113,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                lineNumber: 111,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_views_Home_Home_styled__WEBPACK_IMPORTED_MODULE_5__.MainPrizeContainer, {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Label_Label__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    size: 25,\n                                                    fontWeight: \"bold\",\n                                                    color: \"red\",\n                                                    whiteSpace: \"nowrap\",\n                                                    children: \"MAIN PRIZE IS WAITING FOR YOU\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                    lineNumber: 116,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                                lineNumber: 115,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Video_Video__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            frameBorder: \"0\",\n                            allowFullScreen: false,\n                            allow: \"autoplay; fullscreen\" // Dodanie atrybutu 'autoplay' i dozwolonego fullscreen\n                            ,\n                            height: 480,\n                            src: \"/videos/preview.mp4\",\n                            autoPlay: true\n                        }, void 0, false, {\n                            fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n            lineNumber: 84,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rafaltecza/Downloads/next-block/src/components/pages/Home/Home.tsx\",\n        lineNumber: 83,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0RBQUNpQyxZQUFZO3dEQUFRQyxPQUFPO3dEQUFXQyxZQUFZO2tFQUFVOzs7Ozs7Ozs7Ozs7MERBRXZFLDhEQUFDN0IsdUVBQWtCQTswREFDZiw0RUFBQ04scUVBQUtBO29EQUFDb0MsTUFBTTtvREFBSUgsWUFBWTtvREFBUUMsT0FBTztvREFBT0MsWUFBWTs4REFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FRekYsOERBQUN2QixxRUFBS0E7NEJBQVN5QixhQUFZOzRCQUNaQyxpQkFBaUIsS0FBSzs0QkFDdEJDLE9BQU0sdUJBQXVCLHVEQUF1RDs7NEJBQ3BGVCxRQUFROzRCQUFLSCxLQUFLOzRCQUF1QmEsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEY7S0E3R00xQjtBQStHTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Ib21lL0hvbWUudHN4Pzk1ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1haW5UZW1wbGF0ZSBmcm9tIFwiQGNvbXBvbmVudHMvdGVtcGxhdGVzL01haW5UZW1wbGF0ZS9NYWluVGVtcGxhdGVcIjtcbmltcG9ydCBDYXJkIGZyb20gXCJAY29tcG9uZW50cy9hdG9tcy9DYXJkL0NhcmRcIjtcbmltcG9ydCB7Q2FyZENhdGVnb3J5fSBmcm9tIFwiQGNvbXBvbmVudHMvYXRvbXMvQ2FyZC9DYXJkLnN0eWxlZFwiO1xuaW1wb3J0IElucHV0U2VsZWN0LCB7SW5wdXRUeXBlfSBmcm9tIFwiQGNvbXBvbmVudHMvbW9sZWN1bGVzL0lucHV0U2VsZWN0L0lucHV0U2VsZWN0XCI7XG5pbXBvcnQgQ29tYmluZWRJbnB1dFNlbGVjdCBmcm9tIFwiQGNvbXBvbmVudHMvbW9sZWN1bGVzL0NvbWJpbmVkSW5wdXRTZWxlY3QvQ29tYmluZWRJbnB1dFNlbGVjdFwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCJAY29tcG9uZW50cy9hdG9tcy9MYWJlbC9MYWJlbFwiO1xuaW1wb3J0IHtBbmltYXRpb25FdmVudCwgQW5pbWF0aW9uVHlwZSwgSWNvblNpZGUsIFN0eWxlVHlwZX0gZnJvbSBcIkB0eXBlL0VudW1zXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAY29tcG9uZW50cy9hdG9tcy9CdXR0b24vQnV0dG9uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIkBjb21wb25lbnRzL2F0b21zL0ltYWdlL0ltYWdlXCI7XG5pbXBvcnQgRm9ybUV4Y2hhbmdlIGZyb20gXCJAY29tcG9uZW50cy9vcmdhbmlzbXMvRm9ybS9Gb3JtRXhjaGFuZ2UvRm9ybUV4Y2hhbmdlXCI7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIkBjb21wb25lbnRzL29yZ2FuaXNtcy9Gb3JtL0Zvcm1cIjtcbmltcG9ydCBDdXN0b21Gb3JtIGZyb20gXCJAY29tcG9uZW50cy9vcmdhbmlzbXMvRm9ybS9Gb3JtXCI7XG5pbXBvcnQge1xuICAgIERvd25sb2FkQ29udGFpbmVyLFxuICAgIEhvbWVDb250YWluZXIsIEluZm9Db250YWluZXIsIExlYWRlckJvYXJkQ29udGFpbmVyLFxuICAgIExlZnRDb250YWluZXIsIE1haW5Qcml6ZUNvbnRhaW5lcixcbiAgICBQcml6ZUNvbnRhaW5lcixcbiAgICBQcml6ZXNDb250YWluZXIsIFJpZ2h0Q29udGFpbmVyLCBWZW5kb3JzQ29udGFpbmVyXG59IGZyb20gXCJAdmlld3MvSG9tZS9Ib21lLnN0eWxlZFwiO1xuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCJAY29tcG9uZW50cy9hdG9tcy9JbWFnZS9JbWFnZVwiO1xuaW1wb3J0IFZpZGVvIGZyb20gXCJAY29tcG9uZW50cy9hdG9tcy9WaWRlby9WaWRlb1wiO1xuaW1wb3J0IEJvYXJkIGZyb20gXCJAY29tcG9uZW50cy9tb2xlY3VsZXMvQm9hcmQvQm9hcmRcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcblxuICAgIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XG4gICAgICAgIGNyeXB0b0Ftb3VudDogXCJcIixcbiAgICAgICAgY3VycmVuY3lBbW91bnQ6IFwiXCIsXG4gICAgICAgIHdhbGxldEFkZHJlc3M6IFwiXCIsXG4gICAgfTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICBjcnlwdG9BbW91bnQ6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIkNyeXB0byBBbW91bnQgaXMgcmVxdWlyZWRcIiksXG4gICAgICAgIGN1cnJlbmN5QW1vdW50OiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJDdXJyZW5jeSBBbW91bnQgaXMgcmVxdWlyZWRcIiksXG4gICAgICAgIHdhbGxldEFkZHJlc3M6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIldhbGxldCBBZGRyZXNzIGlzIHJlcXVpcmVkXCIpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiTWFsaXRvdmFcIixcbiAgICAgICAgICAgIHBvaW50czogMTAwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlNwYWxhY3pcIixcbiAgICAgICAgICAgIHBvaW50czogOTAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiS3J3YXdpY1wiLFxuICAgICAgICAgICAgcG9pbnRzOiA4MDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJabmllc21hY3pvbnlcIixcbiAgICAgICAgICAgIHBvaW50czogNzAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiUmFuZGFsbFwiLFxuICAgICAgICAgICAgcG9pbnRzOiA2MDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJCdXJ0b25cIixcbiAgICAgICAgICAgIHBvaW50czogNTAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiUnljaGxpa1wiLFxuICAgICAgICAgICAgcG9pbnRzOiA0MDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJLb3dhbHNraVwiLFxuICAgICAgICAgICAgcG9pbnRzOiAzMDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJMYWR5UmVkU2hvdFwiLFxuICAgICAgICAgICAgcG9pbnRzOiAyMDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJOb3RZb3VyQmFieVwiLFxuICAgICAgICAgICAgcG9pbnRzOiAxMDBcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TWFpblRlbXBsYXRlPlxuICAgICAgICAgICAgPEhvbWVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPExlZnRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSBzcmM9eycvaW1hZ2VzL0xlYWRlcmJvYXJkX0hlYWRlci5wbmcnfSBhbHQ9eycnfSB3aWR0aD17MzAwfSBoZWlnaHQ9ezMzfT48L0N1c3RvbUltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBib2R5PXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmQgaXRlbXM9e2l0ZW1zfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICA8L0xlZnRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFJpZ2h0Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCB0eXBlPXsnc2Vjb25kYXJ5J30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5mb0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG93bmxvYWRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSBzcmM9eycvaW1hZ2VzL3FyL1FSX0NvZGUucG5nJ30gYWx0PXsnJ30gd2lkdGg9ezIwMH0gaGVpZ2h0PXsyMDB9PjwvQ3VzdG9tSW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWZW5kb3JzQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlIHNyYz17Jy9pbWFnZXMvdmVuZG9ycy9Eb3dubG9hZF9CdXR0b25fQXBwU3RvcmUucG5nJ30gYWx0PXsnJ30gd2lkdGg9ezIwMH0gaGVpZ2h0PXs1OH0+PC9DdXN0b21JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSBzcmM9eycvaW1hZ2VzL3ZlbmRvcnMvRG93bmxvYWRfQnV0dG9uX0dvb2dsZS5wbmcnfSBhbHQ9eycnfSB3aWR0aD17MjAwfSBoZWlnaHQ9ezU4fT48L0N1c3RvbUltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZlbmRvcnNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Eb3dubG9hZENvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcml6ZXNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcml6ZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZSBzcmM9eycvaW1hZ2VzL2ljb25zL21lZGFscy9tZWRhbF8xLnBuZyd9IGFsdD17Jyd9IHdpZHRoPXs0NX0gaGVpZ2h0PXs2Mn0+PC9DdXN0b21JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb250V2VpZ2h0PXsnYm9sZCd9IGNvbG9yPXsnIzdlY2I1OCd9IHdoaXRlU3BhY2U9eydub3dyYXAnfT5Mb3JlbSBpcHN1bSB0ZSBkZSBzZSBsYSBtYW5pYW5vIGxvcmVtIGlwc3VtPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qcml6ZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaXplQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUltYWdlIHNyYz17Jy9pbWFnZXMvaWNvbnMvbWVkYWxzL21lZGFsXzIucG5nJ30gYWx0PXsnJ30gd2lkdGg9ezQ1fSBoZWlnaHQ9ezYyfT48L0N1c3RvbUltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvbnRXZWlnaHQ9eydib2xkJ30gY29sb3I9eycjN2VjYjU4J30gd2hpdGVTcGFjZT17J25vd3JhcCd9PkxvcmVtIGlwc3VtIHRlIGRlIHNlIGxhIG1hbmlhbm8gbG9yZW0gaXBzdW08L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ByaXplQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpemVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2Ugc3JjPXsnL2ltYWdlcy9pY29ucy9tZWRhbHMvbWVkYWxfMy5wbmcnfSBhbHQ9eycnfSB3aWR0aD17NDV9IGhlaWdodD17NjJ9PjwvQ3VzdG9tSW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9udFdlaWdodD17J2JvbGQnfSBjb2xvcj17JyM3ZWNiNTgnfSB3aGl0ZVNwYWNlPXsnbm93cmFwJ30+TG9yZW0gaXBzdW0gdGUgZGUgc2UgbGEgbWFuaWFubyBsb3JlbSBpcHN1bTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJpemVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluUHJpemVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgc2l6ZT17MjV9IGZvbnRXZWlnaHQ9eydib2xkJ30gY29sb3I9eydyZWQnfSB3aGl0ZVNwYWNlPXsnbm93cmFwJ30+TUFJTiBQUklaRSBJUyBXQUlUSU5HIEZPUiBZT1U8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01haW5Qcml6ZUNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJpemVzQ29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0luZm9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8VmlkZW8gICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW49e2ZhbHNlfSAvLyBVc3V3YW5pZSBuYXdpZ2FjamkgKHByenljaXNrIGZ1bGxzY3JlZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93PVwiYXV0b3BsYXk7IGZ1bGxzY3JlZW5cIiAvLyBEb2RhbmllIGF0cnlidXR1ICdhdXRvcGxheScgaSBkb3p3b2xvbmVnbyBmdWxsc2NyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDgwfSBzcmM9eycvdmlkZW9zL3ByZXZpZXcubXA0J30gYXV0b1BsYXkvPlxuICAgICAgICAgICAgICAgIDwvUmlnaHRDb250YWluZXI+XG4gICAgICAgICAgICA8L0hvbWVDb250YWluZXI+XG5cblxuICAgICAgICA8L01haW5UZW1wbGF0ZT5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG4iXSwibmFtZXMiOlsiTWFpblRlbXBsYXRlIiwiQ2FyZCIsIkxhYmVsIiwiWXVwIiwiRG93bmxvYWRDb250YWluZXIiLCJIb21lQ29udGFpbmVyIiwiSW5mb0NvbnRhaW5lciIsIkxlZnRDb250YWluZXIiLCJNYWluUHJpemVDb250YWluZXIiLCJQcml6ZUNvbnRhaW5lciIsIlByaXplc0NvbnRhaW5lciIsIlJpZ2h0Q29udGFpbmVyIiwiVmVuZG9yc0NvbnRhaW5lciIsIkN1c3RvbUltYWdlIiwiVmlkZW8iLCJCb2FyZCIsIkhvbWUiLCJpbml0aWFsVmFsdWVzIiwiY3J5cHRvQW1vdW50IiwiY3VycmVuY3lBbW91bnQiLCJ3YWxsZXRBZGRyZXNzIiwidmFsaWRhdGlvblNjaGVtYSIsIm9iamVjdCIsInNoYXBlIiwic3RyaW5nIiwicmVxdWlyZWQiLCJpdGVtcyIsIm5hbWUiLCJwb2ludHMiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImJvZHkiLCJ0eXBlIiwiZm9udFdlaWdodCIsImNvbG9yIiwid2hpdGVTcGFjZSIsInNpemUiLCJmcmFtZUJvcmRlciIsImFsbG93RnVsbFNjcmVlbiIsImFsbG93IiwiYXV0b1BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/pages/Home/Home.tsx\n"));

/***/ })

});