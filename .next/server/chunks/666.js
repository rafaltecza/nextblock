"use strict";
exports.id = 666;
exports.ids = [666];
exports.modules = {

/***/ 4963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Image)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/atoms/Image/Image.styled.ts

const rotateAnimation = external_styled_components_.keyframes`
  0% {
    transform: rotate(0)
  }
  100% {
    transform: rotate(360deg)
  }
`;
const pulseAnimation = external_styled_components_.keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;
const ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-772ede53-0"
})`
  align-items: center;
  display: flex;
  cursor: ${({ clickable  })=>clickable ? "pointer" : "default"};

  ${({ animate , animation , animationTime  })=>animate && external_styled_components_.css`
    animation: ${animation !== undefined ? animation === "rotateAnimation" ? rotateAnimation : animation : pulseAnimation} ${animationTime} infinite ${animation !== null ? animation === "rotateAnimation" ? "linear" : "" : ""};
  `}
`;

;// CONCATENATED MODULE: ./src/components/atoms/Image/Image.tsx




const CustomImage = ({ useContainer =true , animation , animationTime ="1.3s" , animate =false , style , ...props })=>{
    const ImageContent = /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
        quality: 100,
        onClick: props.onClick,
        ...props
    });
    if (useContainer) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageContainer, {
            clickable: props.clickable,
            animationTime: animationTime,
            animation: animation,
            animate: animate,
            children: ImageContent
        });
    } else {
        return ImageContent;
    }
};
/* harmony default export */ const Image = (CustomImage);


/***/ }),

/***/ 1666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Navigation_Navigation)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/organisms/Navigation/Navigation.styled.ts

const NavigationContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-d3a2d433-0"
})`
  display: flex;
  justify-content: left;
  align-items: baseline;
  padding: 3em 0 0 0;
  gap: 2rem;
  width: 100%;
`;
const NavigationLogoContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-d3a2d433-1"
})`
    position: relative;
`;
const NavigationLogoSuffix = external_styled_components_default().div.withConfig({
    componentId: "sc-d3a2d433-2"
})`
  position: absolute;
    bottom: -45%;
    right: -35%;
  z-index: 10;
`;
const NavigationLeftSide = external_styled_components_default().div.withConfig({
    componentId: "sc-d3a2d433-3"
})`
  display: inline-flex;
  align-items: center;
  gap: 3rem;
`;
const NavItem = external_styled_components_default().div.withConfig({
    componentId: "sc-d3a2d433-4"
})`
  /* Style your nav item here */
`;
const ConnectButton = external_styled_components_default().button.withConfig({
    componentId: "sc-d3a2d433-5"
})(({ theme  })=>external_styled_components_.css`
        padding: 10px 23px;
          gap: 10px;
        
          width: 217px;
          height: 43px;
        
          border: 3px solid rgba(255, 255, 255, 0.1);
          filter: drop-shadow(0px 1px 2px #000);
          border-radius: 40px;
      background: transparent;
`);

// EXTERNAL MODULE: ./src/components/atoms/Image/Image.tsx + 1 modules
var Image = __webpack_require__(4963);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/consts/Routes.ts
var Routes = __webpack_require__(3046);
;// CONCATENATED MODULE: ./src/components/organisms/Navigation/Navigation.tsx






const Navigation = ()=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(NavigationContainer, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(NavigationLogoContainer, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* default */.Z, {
                    width: 360,
                    height: 80,
                    src: "/images/logo/logo.png",
                    onClick: ()=>router.push(Routes/* Routes.HOME */.Z.HOME),
                    alt: "logo",
                    clickable: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(NavigationLogoSuffix, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* default */.Z, {
                        width: 150,
                        height: 82,
                        src: "/images/logo/logo_suffix.png",
                        onClick: ()=>router.push(Routes/* Routes.HOME */.Z.HOME),
                        alt: "logo",
                        clickable: false,
                        animate: true,
                        useContainer: true
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Navigation_Navigation = (Navigation);


/***/ }),

/***/ 3046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Routes)
/* harmony export */ });
var Routes;
(function(Routes) {
    Routes["HOME"] = "/";
    Routes["EXCHANGE"] = "/exchange";
    Routes["TERMS"] = "/terms";
    Routes["PRIVACY"] = "/privacy";
})(Routes || (Routes = {}));


/***/ })

};
;