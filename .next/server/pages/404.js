"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/404";
exports.ids = ["pages/404"];
exports.modules = {

/***/ "./src/consts/Routes.ts":
/*!******************************!*\
  !*** ./src/consts/Routes.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Routes\": () => (/* binding */ Routes)\n/* harmony export */ });\nvar Routes;\n(function(Routes) {\n    Routes[\"HOME\"] = \"/\";\n    Routes[\"EXCHANGE\"] = \"/exchange\";\n    Routes[\"TERMS\"] = \"/terms\";\n    Routes[\"PRIVACY\"] = \"/privacy\";\n})(Routes || (Routes = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RzL1JvdXRlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0lBQU87VUFBS0EsTUFBTTtJQUFOQSxPQUNSQyxVQUFPO0lBRENELE9BRVJFLGNBQVc7SUFGSEYsT0FHUkcsV0FBUTtJQUhBSCxPQUlSSSxhQUFVO0dBSkZKLFdBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3J5cHRvbmltLXJlYWN0Ly4vc3JjL2NvbnN0cy9Sb3V0ZXMudHM/NjFhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBSb3V0ZXMge1xuICAgIEhPTUUgPSAnLycsXG4gICAgRVhDSEFOR0UgPSAnL2V4Y2hhbmdlJyxcbiAgICBURVJNUyA9ICcvdGVybXMnLFxuICAgIFBSSVZBQ1kgPSAnL3ByaXZhY3knLFxufSJdLCJuYW1lcyI6WyJSb3V0ZXMiLCJIT01FIiwiRVhDSEFOR0UiLCJURVJNUyIsIlBSSVZBQ1kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/consts/Routes.ts\n");

/***/ }),

/***/ "./src/pages/404.tsx":
/*!***************************!*\
  !*** ./src/pages/404.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _consts_Routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consts/Routes */ \"./src/consts/Routes.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Custom404 = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        router.push(_consts_Routes__WEBPACK_IMPORTED_MODULE_1__.Routes.HOME).catch();\n    }, [\n        router\n    ]);\n    return null;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Custom404);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvNDA0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFDUTtBQUNGO0FBRXRDLE1BQU1HLFlBQVksSUFBTTtJQUNwQixNQUFNQyxTQUFTRixzREFBU0E7SUFFeEJGLGdEQUFTQSxDQUFDLElBQU07UUFDWkksT0FBT0MsSUFBSSxDQUFDSix1REFBVyxFQUFFTSxLQUFLO0lBQ2xDLEdBQUc7UUFBQ0g7S0FBTztJQUVYLE9BQU8sSUFBSTtBQUNmO0FBRUEsaUVBQWVELFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcnlwdG9uaW0tcmVhY3QvLi9zcmMvcGFnZXMvNDA0LnRzeD81YzcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Um91dGVzfSBmcm9tIFwiLi4vY29uc3RzL1JvdXRlc1wiO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBDdXN0b200MDQgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaChSb3V0ZXMuSE9NRSkuY2F0Y2goKTtcbiAgICB9LCBbcm91dGVyXSk7XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tNDA0OyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJSb3V0ZXMiLCJ1c2VSb3V0ZXIiLCJDdXN0b200MDQiLCJyb3V0ZXIiLCJwdXNoIiwiSE9NRSIsImNhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/404.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/404.tsx"));
module.exports = __webpack_exports__;

})();