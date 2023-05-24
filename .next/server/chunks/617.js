"use strict";
exports.id = 617;
exports.ids = [617];
exports.modules = {

/***/ 6271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$4": () => (/* binding */ DocumentTitle),
/* harmony export */   "HN": () => (/* binding */ DocumentContainer),
/* harmony export */   "Tg": () => (/* binding */ DocumentParagraph),
/* harmony export */   "Vo": () => (/* binding */ DocumentOrderedList),
/* harmony export */   "fN": () => (/* binding */ DocumentSubtitle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const DocumentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8c3f37cc-0"
})(({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
        position: relative;
    `);
const DocumentTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1.withConfig({
    componentId: "sc-8c3f37cc-1"
})(({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
          font-size: 22px;
            font-weight: 400;
          text-transform: uppercase;
          margin: 3rem 0 3rem 0;
      
          &.center {
            text-align: center;
          }

        @include media-breakpoint-up(md) {
          margin: 60px 0;
        }
    `);
const DocumentSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
    componentId: "sc-8c3f37cc-2"
})(({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: 18px;
      margin: 15px 0;
      font-weight: 700;
      
      &.center {
        text-align: center;
      }

    @include media-breakpoint-up(md) {
      margin: 30px 0;
    }
    `);
const DocumentParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
    componentId: "sc-8c3f37cc-3"
})(({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: 20px;
    `);
const DocumentOrderedList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ol.withConfig({
    componentId: "sc-8c3f37cc-4"
})(({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: 16px;
    .list {
        list-style: normal;
        padding-left: 16px;
        &__item {
          padding-bottom: 20px;
        }
        &__inner {
          list-style-type: lower-latin;
          padding: 20px 0 0 20px;
        }
  }
    `);


/***/ }),

/***/ 9617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DocumentTemplate_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6271);
/* harmony import */ var _components_organisms_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1666);




const DocumentTemplate = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_organisms_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DocumentTemplate_styled__WEBPACK_IMPORTED_MODULE_2__/* .DocumentContainer */ .HN, {
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocumentTemplate);


/***/ })

};
;