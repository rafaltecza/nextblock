"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./src/styles/Globals.styled.ts

/* harmony default export */ const Globals_styled = ((0,external_styled_components_.createGlobalStyle)(({ theme  })=>external_styled_components_.css`

      @font-face {
        font-family: "DM Sans";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local("DMSans-Regular"), url("../../public/fonts/DMSans-Regular.ttf") format("truetype");
      }

      @font-face {
        font-family: "DM Sans";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local("DMSans-Bold"), url("../../public/fonts/DMSans-Bold.ttf") format("truetype");
      }

      html,
      body {
        font-family: 'Oxanium', cursive;
        background-color: transparent;
        height: 100%;
        margin: 0 auto;
        padding: 0 10px;
        max-width: 1280px;

        &::before {
          content: "";
          background-image: url("/images/logo/background.png");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .shadow-sm {
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }

        .shadow-md {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .shadow-lg {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .shadow-xl {
          box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.4), 0 0 10px -5px rgba(0, 0, 0, 0.3);
        }
        
        .text-shadow-xl {
          text-shadow: 0 0 20px rgba(0, 0, 0, 0.4), 0 0 10px rgba(0, 0, 0, 0.3);
        }
      }

      * {
        box-sizing: border-box;
        color: ${theme.color.textPrimary};

        //Animations
        @keyframes bounce {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes fade {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }


      }


    `));

;// CONCATENATED MODULE: external "react-intl"
const external_react_intl_namespaceObject = require("react-intl");
;// CONCATENATED MODULE: ./src/translations/pl.json
const pl_namespaceObject = JSON.parse('{"title":"Next Block"}');
;// CONCATENATED MODULE: ./src/translations/en.json
const en_namespaceObject = JSON.parse('{"title":"Next Block"}');
;// CONCATENATED MODULE: ./src/context/MultiContext.tsx


const combineComponents = (...components)=>{
    return components.reduce((AccumulatedComponents, CurrentComponent)=>({ children  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(AccumulatedComponents, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CurrentComponent, {
                    children: children
                })
            }), ({ children  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: children
        }));
};

;// CONCATENATED MODULE: ./src/context/LocaleContext/LocaleContextTypes.ts
var LocaleContextTypes;
(function(LocaleContextTypes) {
    LocaleContextTypes["setLocale"] = "SET_LOCALE";
})(LocaleContextTypes || (LocaleContextTypes = {}));

;// CONCATENATED MODULE: ./src/context/LocaleContext/LocaleContextReducer.ts



const initialState = {
    locale: "en",
    messages: {
        pl: pl_namespaceObject,
        en: en_namespaceObject
    }
};
const localeContextReducer = (state = initialState, action)=>{
    switch(action.type){
        case LocaleContextTypes.setLocale:
            return {
                ...state,
                locale: action.payload.locale
            };
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/context/LocaleContext/LocaleContextProvider.tsx



const LocaleContext = /*#__PURE__*/ external_react_default().createContext(null);
const LocaleContextProvider = ({ children  })=>{
    const [state, dispatch] = external_react_default().useReducer(localeContextReducer, initialState, (state)=>state);
    const value = external_react_default().useMemo(()=>({
            state,
            dispatch
        }), [
        state,
        dispatch
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(LocaleContext.Provider, {
        value: value,
        children: children
    });
};

;// CONCATENATED MODULE: ./src/context/LocaleContext/LocaleContextHook.ts


const useLocaleContext = ()=>{
    const context = external_react_default().useContext(LocaleContext);
    if (!context) {
        throw Error("useLocaleContext must be used within a LocaleContextProvider");
    }
    return context;
};

;// CONCATENATED MODULE: ./src/types/ContextTypes.ts
function createAction(type, payload) {
    return {
        type,
        payload
    };
}

;// CONCATENATED MODULE: ./src/context/LocaleContext/LocaleContextActions.ts


const setLocaleAction = (dispatch, locale)=>{
    dispatch(LocaleContextDispatch.setLocale(locale));
};
const LocaleContextDispatch = {
    setLocale: (locale)=>createAction(LocaleContextTypes.setLocale, {
            locale
        })
};

;// CONCATENATED MODULE: ./src/utils/theme/color.ts
const color = {
    // Background
    backgroundPrimary: "#000",
    // Text
    textPrimary: "hsla(0,0%,100%,.4);"
};

;// CONCATENATED MODULE: ./src/utils/theme/font.ts
const font = {
    // Family
    familyPrimary: "Source Sans Pro, sans-serif;",
    familySecondary: "Merriweather, serif;",
    // Size
    sizeBase: "62.5%",
    // Size Laptop
    sizeH1Laptop: "6.4rem",
    sizeH2Laptop: "4.2rem",
    sizeH3Laptop: "3.2rem",
    sizePLaptop: "2rem",
    sizePGreaterLaptop: "2.4rem",
    // Size Tablet
    sizeH1Tablet: "5rem",
    sizeH2Tablet: "3.7rem",
    sieH3Tablet: "3.2rem",
    sizePTablet: "1.75rem",
    sizePGreaterTablet: "2rem",
    // Size XS
    sizeH1Mobile: "4rem",
    sizeH2Mobile: "3.2rem",
    sieH3Mobile: "3.2rem",
    sizePMobile: "1.5rem",
    sizePGreaterMobile: "1.6rem",
    // Size XXS
    sizeH1XXSMobile: "3.2rem",
    sizeH2XXSMobile: "2.8rem",
    sieH3XXSMobile: "2.4rem",
    sizePXXSMobile: "1.2rem",
    sizePGreaterXXSMobile: "1.4rem",
    //Weight
    weightThin: 100,
    weightExtraLight: 200,
    weightLight: 300,
    weightRegular: 400,
    weightMedium: 500,
    weightSemiBold: 600,
    weightBold: 700,
    weightExtraBold: 800,
    weightBlack: 900
};

;// CONCATENATED MODULE: ./src/utils/theme/theme.ts


const theme = {
    color: color,
    font: font
};

;// CONCATENATED MODULE: ./src/pages/_app.tsx













function App({ Component , pageProps  }) {
    const intl = (0,external_react_intl_namespaceObject.useIntl)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                        children: intl.formatMessage({
                            id: "title"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "description",
                        content: intl.formatMessage({
                            id: "description"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_styled_components_.ThemeProvider, {
                theme: theme,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Globals_styled, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Component, {
                        ...pageProps
                    })
                ]
            })
        ]
    });
}
const AppContextParent = (props)=>{
    const { state , dispatch  } = useLocaleContext();
    const messages = (0,external_react_.useMemo)(()=>{
        return {
            pl: pl_namespaceObject,
            en: en_namespaceObject
        };
    }, []);
    const setLocale = (0,external_react_.useCallback)((language)=>{
        setLocaleAction(dispatch, language);
    }, [
        dispatch
    ]);
    (0,external_react_.useEffect)(()=>{
        const browserLanguage = navigator.language.split("-")[0];
        if (Object.keys(messages).includes(browserLanguage)) {
            setLocale(browserLanguage);
        }
    }, [
        messages,
        setLocale
    ]);
    const locale = state.locale;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(external_react_intl_namespaceObject.IntlProvider, {
        locale: locale,
        messages: messages[locale],
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(App, {
            ...props
        })
    });
};
const AppContextProvider = combineComponents(...[]);
const AppWithContext = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(AppContextProvider, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LocaleContextProvider, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppContextParent, {
                ...props
            })
        })
    });
/* harmony default export */ const _app = (AppWithContext);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(6717)));
module.exports = __webpack_exports__;

})();