(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(9716)}])},4963:function(n,t,e){"use strict";e.d(t,{Z:function(){return m}});var i=e(5893);e(7294);var r=e(5675),o=e.n(r),l=e(2729),c=e(8458);function a(){let n=(0,l._)(["\n  0% {\n    transform: rotate(0)\n  }\n  100% {\n    transform: rotate(360deg)\n  }\n"]);return a=function(){return n},n}function s(){let n=(0,l._)(["\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(1);\n  }\n"]);return s=function(){return n},n}function d(){let n=(0,l._)(["\n    animation: "," "," infinite ",";\n  "]);return d=function(){return n},n}function u(){let n=(0,l._)(["\n  align-items: center;\n  display: flex;\n  cursor: ",";\n\n  ","\n"]);return u=function(){return n},n}let f=(0,c.F4)(a()),h=(0,c.F4)(s()),p=c.ZP.div.withConfig({componentId:"sc-772ede53-0"})(u(),n=>{let{clickable:t}=n;return t?"pointer":"default"},n=>{let{animate:t,animation:e,animationTime:i}=n;return t&&(0,c.iv)(d(),void 0!==e?"rotateAnimation"===e?f:e:h,i,null!==e&&"rotateAnimation"===e?"linear":"")}),g=n=>{let{useContainer:t=!0,animation:e,animationTime:r="1.3s",animate:l=!1,style:c,...a}=n,s=(0,i.jsx)(o(),{quality:100,onClick:a.onClick,...a});return t?(0,i.jsx)(p,{clickable:a.clickable,animationTime:r,animation:e,animate:l,children:s}):s};var m=g},1666:function(n,t,e){"use strict";e.d(t,{Z:function(){return b}});var i=e(5893);e(7294);var r=e(2729),o=e(8458);function l(){let n=(0,r._)(["\n  display: flex;\n  justify-content: left;\n  align-items: baseline;\n  padding: 3em 0 0 0;\n  gap: 2rem;\n  width: 100%;\n"]);return l=function(){return n},n}function c(){let n=(0,r._)(["\n    position: relative;\n"]);return c=function(){return n},n}function a(){let n=(0,r._)(["\n  position: absolute;\n    bottom: -45%;\n    right: -35%;\n  z-index: 10;\n"]);return a=function(){return n},n}function s(){let n=(0,r._)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 3rem;\n"]);return s=function(){return n},n}function d(){let n=(0,r._)(["\n  /* Style your nav item here */\n"]);return d=function(){return n},n}function u(){let n=(0,r._)(["\n        padding: 10px 23px;\n          gap: 10px;\n        \n          width: 217px;\n          height: 43px;\n        \n          border: 3px solid rgba(255, 255, 255, 0.1);\n          filter: drop-shadow(0px 1px 2px #000);\n          border-radius: 40px;\n      background: transparent;\n"]);return u=function(){return n},n}let f=o.ZP.div.withConfig({componentId:"sc-d3a2d433-0"})(l()),h=o.ZP.div.withConfig({componentId:"sc-d3a2d433-1"})(c()),p=o.ZP.div.withConfig({componentId:"sc-d3a2d433-2"})(a());o.ZP.div.withConfig({componentId:"sc-d3a2d433-3"})(s()),o.ZP.div.withConfig({componentId:"sc-d3a2d433-4"})(d()),o.ZP.button.withConfig({componentId:"sc-d3a2d433-5"})(n=>{let{theme:t}=n;return(0,o.iv)(u())});var g=e(4963),m=e(1163),x=e(3046);let w=()=>{let n=(0,m.useRouter)();return(0,i.jsx)(f,{children:(0,i.jsxs)(h,{children:[(0,i.jsx)(g.Z,{width:360,height:80,src:"/images/logo/logo.png",onClick:()=>n.push(x.Z.HOME),alt:"logo",clickable:!0}),(0,i.jsx)(p,{children:(0,i.jsx)(g.Z,{width:150,height:82,src:"/images/logo/logo_suffix.png",onClick:()=>n.push(x.Z.HOME),alt:"logo",clickable:!1,animate:!0,useContainer:!0})})]})})};var b=w},3046:function(n,t,e){"use strict";var i,r;e.d(t,{Z:function(){return i}}),(r=i||(i={})).HOME="/",r.EXCHANGE="/exchange",r.TERMS="/terms",r.PRIVACY="/privacy"},9716:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return n8}});var i,r,o,l,c,a,s,d,u=e(5893),f=e(7294),h=e(2729),p=e(8458);function g(){let n=(0,h._)(["\n width: 100%;\n min-height: 100%;\n margin: 0;\n padding: 0;\n"]);return g=function(){return n},n}let m=p.ZP.div.withConfig({componentId:"sc-4d65f536-0"})(g());var x=e(1666);let w=n=>{let{children:t}=n;return(0,u.jsxs)(m,{children:[(0,u.jsx)(x.Z,{}),t]})};function b(){let n=(0,h._)(["\n        width: 100%;\n    "]);return b=function(){return n},n}function j(){let n=(0,h._)(['\n      display: flex;\n      position: relative;\n      overflow: hidden;\n\n      &.default {\n        background: linear-gradient(#21483f, #215045);\n      }\n\n      &.secondary {\n        background: linear-gradient(#21483f, #1f463d);\n\n\n        &::before {\n          content: "";\n          background: linear-gradient(45deg, #2f5349, #3f594e);\n          position: absolute;\n          top: 0;\n          right: 28%;\n          display: block;\n          z-index: 0;\n          height: 100%;\n          width: 80%;\n          clip-path: polygon(0% 0%, /* top left */ 0% 0%, /* top left */ 100% 0%, /* top right */ 95% 100%, /* top right */ 100% 100%, /* bottom right */ 100% 100%, /* bottom right */ 0% 100%, /* bottom left */ 0 100% /* bottom left */);\n        }\n      }\n    ']);return j=function(){return n},n}function y(){let n=(0,h._)(["\n      padding: ",";\n      width: 100%;\n      z-index: 1;\n\n        & > label:not(:first-child) {\n            margin-top: 1.2rem;\n        }\n    "]);return y=function(){return n},n}function v(){let n=(0,h._)(["\n      display: flex;\n      text-transform: uppercase;\n      margin-bottom: 1.2rem;\n      font-size: 12px;\n      font-weight: 700;\n    "]);return v=function(){return n},n}let _=p.ZP.div.withConfig({componentId:"sc-2279f81c-0"})(n=>{let{theme:t}=n;return(0,p.iv)(b())}),C=p.ZP.div.withConfig({componentId:"sc-2279f81c-1"})(n=>{let{theme:t}=n;return(0,p.iv)(j())}),Z=p.ZP.div.withConfig({componentId:"sc-2279f81c-2"})(n=>{let{theme:t,body:e}=n;return(0,p.iv)(y(),void 0===e||e?"40px":"0")});p.ZP.label.withConfig({componentId:"sc-2279f81c-3"})(n=>{let{theme:t}=n;return(0,p.iv)(v())});let I=n=>{let{children:t,type:e,...i}=n;return(0,u.jsx)(_,{children:(0,u.jsx)(C,{className:"".concat(e||"default"," shadow-xl"),...i,children:(0,u.jsx)(Z,{body:void 0===i.body||i.body,className:e||"default",children:t})})})};function P(){let n=(0,h._)(["\n    font-style: normal;\n    font-weight: 400;\n    font-size: 12px;\n  "]);return P=function(){return n},n}function k(){let n=(0,h._)(["\n  display: inline-block;\n  margin-top: auto;\n  font-size: calc(1 * ","px);\n  text-align: ",";\n  color: ",";\n  font-weight: ",";\n\n  ","\n\n  ","\n"]);return k=function(){return n},n}(i=c||(c={})).PRIMARY="primary",i.SECONDARY="secondary",i.DEFAULT="default",(r=a||(a={})).LEFT="left",r.RIGHT="right",(o=s||(s={})).ALWAYS="ALWAYS",o.HOVER="HOVER",o.FOCUS="FOCUS",(l=d||(d={})).BOUNCE="BOUNCE",l.ROTATE="ROTATE",l.FADE="FADE";let T=p.ZP.label.withConfig({componentId:"sc-b845fb73-0"})(k(),n=>n.size,n=>n.textAlign,n=>n.color,n=>n.fontWeight,n=>n.styleType===c.PRIMARY&&(0,p.iv)(P()),n=>n.styleType===c.SECONDARY&&"\n        // style for secondary label\n    "),z=n=>{let{styleType:t=c.DEFAULT,marginTop:e="0",...i}=n;return(0,u.jsx)(T,{styleType:t,...i})};function S(){let n=(0,h._)(["\n  display: flex;\n  flex-direction: row;\n  gap: 2rem;\n  padding: 3em 0;\n"]);return S=function(){return n},n}function E(){let n=(0,h._)(["\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    gap: 1rem;\n"]);return E=function(){return n},n}function B(){let n=(0,h._)(["\n  display: flex;\n    flex-direction: column;\n  gap: 2rem;\n  position: relative;\n"]);return B=function(){return n},n}function A(){let n=(0,h._)(["\n  position: absolute;\n    top: -116px;\n    left: 50%;\n    transform: translateX(-50%);\n"]);return A=function(){return n},n}function O(){let n=(0,h._)(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  gap: 0.4rem;\n  //space-between;\n  justify-content: space-between;\n"]);return O=function(){return n},n}function R(){let n=(0,h._)(["\n  flex: 1;\n  margin-top: ",";\n  margin-bottom: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  gap: 0.5rem;\n  width: 100%; \n  height: 100%;\n  min-height: 200px;\n  min-width: 170px;\n\n"]);return R=function(){return n},n}function G(){let n=(0,h._)(["\n    margin-bottom: 5px;\n\n"]);return G=function(){return n},n}function N(){let n=(0,h._)(["\n  flex: 1;\n  margin-top: ",";\n  margin-bottom: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  gap: 0.5rem;\n  width: 100%; \n  height: 100%;\n  min-height: 200px;\n  min-width: 230px;\n\n"]);return N=function(){return n},n}function F(){let n=(0,h._)(["\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  top: -25%;\n  z-index: -1;\n"]);return F=function(){return n},n}function D(){let n=(0,h._)(["\n  position: absolute;\n  width: 300px;\n  height: 300px;\n  top: -10%;\n  left: -30%;\n  z-index: -1;\n"]);return D=function(){return n},n}function L(){let n=(0,h._)(["\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: center;\n    gap: 0.4rem;\n"]);return L=function(){return n},n}function H(){let n=(0,h._)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 2rem;\n"]);return H=function(){return n},n}function M(){let n=(0,h._)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 0.5rem;\n"]);return M=function(){return n},n}function W(){let n=(0,h._)(["\n  display: flex;\n  flex-direction: row;\n  align-items: end;\n  justify-content: center;\n  gap: 2.7rem;\n"]);return W=function(){return n},n}function U(){let n=(0,h._)(["\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: center;\n"]);return U=function(){return n},n}function Y(){let n=(0,h._)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: ",";\n    align-items: center;\n    height: 60px; \n    width: 100%;\n  background: linear-gradient(#21483f, #1f463d);\n  padding: 2.5rem 1rem;\n  gap: 1rem;\n  \n\n"]);return Y=function(){return n},n}let V=p.ZP.div.withConfig({componentId:"sc-c8ba88e1-0"})(S()),X=p.ZP.div.withConfig({componentId:"sc-c8ba88e1-1"})(E()),q=p.ZP.div.withConfig({componentId:"sc-c8ba88e1-2"})(B()),Q=p.ZP.div.withConfig({componentId:"sc-c8ba88e1-3"})(A()),K=p.ZP.div.withConfig({componentId:"sc-c8ba88e1-4"})(O()),J=p.ZP.div.withConfig({componentId:"sc-c8ba88e1-5"})(R(),n=>{let{marginTop:t}=n;return t}),$=p.ZP.div.withConfig({componentId:"sc-c8ba88e1-6"})(G()),nn=p.ZP.div.withConfig({componentId:"sc-c8ba88e1-7"})(N(),n=>{let{marginTop:t}=n;return t});p.ZP.div.withConfig({componentId:"sc-c8ba88e1-8"})(F()),p.ZP.div.withConfig({componentId:"sc-c8ba88e1-9"})(D());let nt=p.ZP.div.withConfig({componentId:"sc-c8ba88e1-10"})(L()),ne=p.ZP.div.withConfig({componentId:"sc-c8ba88e1-11"})(H()),ni=p.ZP.div.withConfig({componentId:"sc-c8ba88e1-12"})(M()),nr=p.ZP.div.withConfig({componentId:"sc-c8ba88e1-13"})(W()),no=p.ZP.div.withConfig({componentId:"sc-c8ba88e1-14"})(U()),nl=p.ZP.div.withConfig({componentId:"sc-c8ba88e1-15"})(Y(),n=>{let{justifyContent:t}=n;return t||"space-between"});var nc=e(4963);function na(){let n=(0,h._)(["\n    line-height:0;\n  width: 100%;\n  height: 100%;\n"]);return na=function(){return n},n}function ns(){let n=(0,h._)(["\n  border: solid 1px #333;\n    "]);return ns=function(){return n},n}let nd=p.ZP.div.withConfig({componentId:"sc-811afec0-0"})(na()),nu=p.ZP.video.attrs({muted:!0,autoPlay:!0,loop:!0,controls:!1}).withConfig({componentId:"sc-811afec0-1"})(ns()),nf=n=>{let{src:t,height:e=720,width:i=1280,className:r,...o}=n,l=(0,f.useRef)(null),c=(0,f.useRef)(null);return(0,f.useEffect)(()=>{let n=l.current,t=c.current;function e(){(null==n?void 0:n.currentTime)&&n.currentTime>=48&&(n.currentTime=0,null==t||t.play()),(null==t?void 0:t.currentTime)&&t.currentTime>=48&&(t.currentTime=0,null==n||n.play())}return n&&n.addEventListener("timeupdate",e),t&&t.addEventListener("timeupdate",e),()=>{n&&n.removeEventListener("timeupdate",e),t&&t.removeEventListener("timeupdate",e)}},[]),(0,u.jsxs)(nd,{children:[(0,u.jsx)(nu,{ref:l,autoPlay:!0,width:i,height:e,src:t}),(0,u.jsx)(nu,{ref:c,style:{display:"none"},width:i,height:e,src:t})]})};function nh(){let n=(0,h._)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n  font-size: 1.5rem;\n  background-color: ",";\n\n  &.primary {\n    border: 3px solid #4fa051;\n    background-color: #326653;\n  }\n\n"]);return nh=function(){return n},n}function np(){let n=(0,h._)(["\n  display: block;\n  width: 100%;\n  color: #21483f;\n  background: #62bd89;\n  text-align: center;\n  font-size: 1.2rem;\n    line-height: 40px;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin: 0;\n"]);return np=function(){return n},n}function ng(){let n=(0,h._)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n  \n    .board-place {\n      \n    }\n\n      .board-data {\n    \n      }\n"]);return ng=function(){return n},n}function nm(){let n=(0,h._)(["\n  display: block;\n  width: 60px;\n  line-height: 50px;\n  font-weight: bold;\n  font-size: 1.6rem;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.1);\n  color: #4fa051;\n  ","\n"]);return nm=function(){return n},n}function nx(){let n=(0,h._)(["\n  display: block;\n  width: 100%;\n  height: 100%;\n  color: #7ecb58;\n  min-width: 180px;\n  font-weight: bold;\n  \n    @media (min-width: 1920px) {\n        min-width: 250px;\n    }\n"]);return nx=function(){return n},n}function nw(){let n=(0,h._)(["\n  display: block;\n  width: 30%;\n  height: 100%;\n  color: #59ab52;\n  font-weight: bold;\n  margin-right: 1.5rem;\n  text-align: right;\n"]);return nw=function(){return n},n}function nb(){let n=(0,h._)(['\n  width: 100%;\n  position: relative;\n\n  &.primary {\n      &::before {\n        content: "";\n        background-image: url("/images/icons/decoration/Leaderboard_Silver.png");\n        background-repeat: no-repeat;\n        background-size: cover;\n        width: 100%;\n        height: 48%;\n        position: absolute;\n        top: 0;\n        opacity: 0.1;\n        left: 0;\n      }\n    }\n']);return nb=function(){return n},n}let nj=p.ZP.div.withConfig({componentId:"sc-8d4238e2-0"})(nh(),n=>{let{index:t}=n;return t%2==0?"#29594f":"#2f6256"}),ny=p.ZP.h2.withConfig({componentId:"sc-8d4238e2-1"})(np()),nv=p.ZP.div.withConfig({componentId:"sc-8d4238e2-2"})(ng()),n_=p.ZP.div.withConfig({componentId:"sc-8d4238e2-3"})(nm(),n=>{let{place:t}=n;return(0===t||1===t||2===t||3===t)&&'color: #28594d; background-image: url("/images/icons/board/Frame_leaderboards_DIY_'.concat(t,'.png");')}),nC=p.ZP.div.withConfig({componentId:"sc-8d4238e2-4"})(nx()),nZ=p.ZP.div.withConfig({componentId:"sc-8d4238e2-5"})(nw()),nI=p.ZP.div.withConfig({componentId:"sc-8d4238e2-6"})(nb()),nP=n=>{let{type:t="secondary",...e}=n;return(0,u.jsxs)(nj,{className:t,index:e.index,children:[(0,u.jsx)(n_,{place:e.place,children:0===e.place?1:e.place}),(0,u.jsxs)(nv,{children:[(0,u.jsx)(nC,{children:e.entity.name}),(0,u.jsx)(nZ,{children:e.entity.points})]})]})},nk=n=>{let{items:t,type:e="primary"}=n;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(ny,{children:"Yeasterday's High Score"}),(0,u.jsx)(nP,{type:"primary",index:0,entity:{name:"-",points:"-"},place:0}),(0,u.jsx)(nI,{className:e,children:t.map((n,t)=>(0,u.jsx)(nP,{index:t,entity:n,place:t+1}))})]})};function nT(){let n=(0,h._)(["\n  0% {\n    transform: rotate(0)\n  }\n  100% {\n    transform: rotate(360deg)\n  }\n"]);return nT=function(){return n},n}function nz(){let n=(0,h._)(["\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(1);\n  }\n"]);return nz=function(){return n},n}function nS(){let n=(0,h._)(["\n    animation: "," "," infinite ",";\n  "]);return nS=function(){return n},n}function nE(){let n=(0,h._)(["\n  position: relative;\n  font-family: 'Oxanium', cursive;\n  font-size: ",";\n  font-weight: ",";\n  text-align: ",";\n  white-space: ",";\n  color: transparent;\n  background-image: linear-gradient(to bottom, ",", ",");\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-stroke: ",";\n  text-stroke: ",";\n  z-index: 10;\n  margin: 0;\n\n  ","\n\n  & > span:first-child {\n      font-family: 'Oxanium', cursive;\n  font-size: ",";\n  font-weight: ",";\n  text-align: ",";\n  white-space: ",";\n  color: transparent;\n  background-image: linear-gradient(to bottom, ",", ",");\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-stroke: ",";\n  text-stroke: ",";\n  z-index: 10;\n  position: relative;\n  display: block;\n  }\n  \n  & > span:last-child {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    font-family: 'Oxanium', cursive;\n    font-size: ",";\n    font-weight: ",";\n    text-align: ",";\n    white-space: ",";\n    color: transparent;\n    pointer-events: none;\n    z-index: 0;\n    text-shadow: 0 0 20px rgba(0, 0, 0, 0.4), 0 0 10px rgba(0, 0, 0, 0.3);\n  {...props}\n  }\n"]);return nE=function(){return n},n}let nB=(0,p.F4)(nT()),nA=(0,p.F4)(nz()),nO=p.ZP.h1.withConfig({componentId:"sc-eadee195-0"})(nE(),n=>{let{size:t}=n;return t||"1.5rem"},n=>{let{weight:t}=n;return t||"bold"},n=>{let{textAlign:t}=n;return t||"center"},n=>{let{whiteSpace:t}=n;return t||"normal"},n=>{let{color1:t}=n;return t},n=>{let{color2:t}=n;return t},n=>{let{textBorderSize:t,textBorderColor:e}=n;return t&&e?"".concat(t," ").concat(e):"none"},n=>{let{textBorderSize:t,textBorderColor:e}=n;return t&&e?"".concat(t," ").concat(e):"none"},n=>{let{animate:t,animation:e,animationTime:i}=n;return t&&(0,p.iv)(nS(),void 0!==e&&"rotateAnimation"===e?nB:nA,i,null!==e&&"rotateAnimation"===e?"linear":"")},n=>{let{size:t}=n;return t||"1.5rem"},n=>{let{weight:t}=n;return t||"bold"},n=>{let{textAlign:t}=n;return t||"center"},n=>{let{whiteSpace:t}=n;return t||"normal"},n=>{let{color1:t}=n;return t},n=>{let{color2:t}=n;return t},n=>{let{textBorderSize:t,textBorderColor:e}=n;return t&&e?"".concat(t," ").concat(e):"none"},n=>{let{textBorderSize:t,textBorderColor:e}=n;return t&&e?"".concat(t," ").concat(e):"none"},n=>{let{size:t}=n;return t||"1.5rem"},n=>{let{weight:t}=n;return t||"bold"},n=>{let{textAlign:t}=n;return t||"center"},n=>{let{whiteSpace:t}=n;return t||"normal"}),nR=n=>{let{children:t,animationTime:e="1.3s",animate:i,animation:r="pulseAnimation",...o}=n;return(0,u.jsx)(nO,{animate:i,animationTime:e,animation:r,...o,children:t})};function nG(){let n=(0,h._)(["\n    display: flex;\n    margin-top: auto;\n    background-color: #234940;\n    color: #7ecb58;\n    font-size: 1.2rem;\n    padding-left: 0.4rem;\n    padding-right: 0.8rem;\n    font-weight: 600;\n    border-left: 1px solid #282828;\n    border-bottom: 1px solid #282828;\n    //box-shadow: 0 1px 1px 0 #282828;\n"]);return nG=function(){return n},n}function nN(){let n=(0,h._)(["\n    font-size: 0.9rem;\n    font-weight: 600;\n    color: #7ecb58;\n    padding: 0 0 0 0.4rem;\n    border-left: 1px solid transparent;\n    margin: 0;\n"]);return nN=function(){return n},n}function nF(){let n=(0,h._)(["\n    position: absolute;\n    top: -16%;\n    min-height: 43px;\n    left: 5%;\n    display: flex;\n    flex-direction: column;\n"]);return nF=function(){return n},n}let nD=p.ZP.div.withConfig({componentId:"sc-4806ea45-0"})(nG()),nL=p.ZP.h4.withConfig({componentId:"sc-4806ea45-1"})(nN()),nH=p.ZP.div.withConfig({componentId:"sc-4806ea45-2"})(nF()),nM=n=>{let{points:t,useTitle:e=!0}=n;return(0,u.jsxs)(nH,{children:[e&&(0,u.jsx)(nL,{children:"score"}),(0,u.jsx)(nD,{children:t})]})};var nW=e(6154);let nU=nW.Z.create({baseURL:"https://templaterun-api.elympics.cc/api/v1/"}),nY=async()=>{let{data:n}=await nU.get("elympics/leaderboard/");return n},nV=n=>{let t=()=>{let t=+new Date(n)-+new Date,e={hours:0,minutes:0,seconds:0};return t>0&&(e={hours:Math.floor(t/36e5%24),minutes:Math.floor(t/1e3/60%60),seconds:Math.floor(t/1e3%60)}),e},[e,i]=(0,f.useState)(t());return(0,f.useEffect)(()=>{let n=setTimeout(()=>{i(t())},1e3);return()=>clearTimeout(n)}),e},nX=async()=>{let n=await nU.get("elympics/leaderboard/streamlit-leaderboard");return n.data};function nq(){let n=(0,h._)(["\n    position: absolute;\n    left: ",";\n    top: ",";\n    right: ",";\n    bottom: ",";\n  \n"]);return nq=function(){return n},n}let nQ=p.ZP.div.withConfig({componentId:"sc-7527099c-0"})(nq(),n=>n.left,n=>n.top,n=>n.right,n=>n.bottom),nK=n=>{let{color:t="Blue",size:e="20",width:i=300,height:r=300,...o}=n;return(0,u.jsx)(nQ,{color:t,...o,children:(0,u.jsx)(nc.Z,{animate:!0,src:"/images/icons/glimmer/Glimmer_".concat(t,".png"),alt:"",width:i,height:r})})};function nJ(){let n=(0,h._)(["\n    position: absolute;\n    left: ",";\n    top: ",";\n    right: ",";\n    bottom: ",";\n    transform: rotate(","deg);\n\n    z-index: -1;\n  \n"]);return nJ=function(){return n},n}let n$=p.ZP.div.withConfig({componentId:"sc-b4804964-0"})(nJ(),n=>n.left,n=>n.top,n=>n.right,n=>n.bottom,n=>n.rotate),n0=n=>{let{color:t="Blue",animationTime:e="10s",rotate:i="0",size:r="10",width:o=300,height:l=300,...c}=n;return(0,u.jsx)(n$,{rotate:i,color:t,...c,children:(0,u.jsx)(nc.Z,{animationTime:e,animation:"rotateAnimation",animate:!0,src:"/images/icons/decoration/Prize_Glow_".concat(t,".png"),alt:"",width:o,height:l})})},n1=()=>{let[n,t]=(0,f.useState)({GameId:"",GameVersion:"",LeaderboardGameVersion:"",QueueName:"",TimeScope:"",DateFrom:"",DateTo:""}),[e,i]=(0,f.useState)({nicknames:[],data:[]}),[r,o]=(0,f.useState)(new Date().toISOString()),l=nV(r);(0,f.useEffect)(()=>{let n=async()=>{let n=await nY();t(n)};n().catch(n=>{console.error(n)})},[]),(0,f.useEffect)(()=>{console.log(e),console.log(null==e?void 0:e.nicknames)},[e]),(0,f.useEffect)(()=>{let n=async()=>{let n=await nX();i(n)};n().catch(n=>{console.error(n)})},[]),(0,f.useEffect)(()=>{let n=setInterval(()=>{let n=async()=>{let n=await nX();i(n)};n().catch(n=>{console.error(n)})},15e3);return()=>clearInterval(n)},[]),(0,f.useEffect)(()=>{n&&o(new Date(n.DateTo).toISOString())},[n]);let c=l.hours||0,a=l.minutes||0,s=l.seconds||0,d="".concat(c<10?"0"+c:c,":").concat(a<10?"0"+a:a,":").concat(s<10?"0"+s:s),h=[];if(e)for(h=e.data.map(n=>{let t=e.nicknames.find(t=>t.elympics_user_id===n.userId);return{name:t?t.nickname:"Unknown",points:Math.floor(n.points)}});h.length<12;)h.push({name:"-",points:0});return(0,u.jsx)(w,{children:(0,u.jsxs)(V,{children:[(0,u.jsx)(X,{children:(0,u.jsx)(I,{body:!1,children:(0,u.jsxs)(no,{children:[(0,u.jsxs)(nl,{justifyContent:"space-between",children:[(0,u.jsxs)(nR,{size:"1.5rem",weight:"700",textAlign:"left",color1:"#56914c",color2:"#56914c",children:[(0,u.jsxs)("span",{children:["Leaderboard",(0,u.jsx)("br",{})," closes in"]}),(0,u.jsxs)("span",{children:["Leaderboard",(0,u.jsx)("br",{})," closes in"]})]}),(0,u.jsxs)(nR,{size:"2.5rem",whiteSpace:"nowrap",weight:"800",textBorderColor:"#000",textBorderSize:"1.5px",color1:"#fa2021",color2:"#e70c60",children:[(0,u.jsx)("span",{children:d}),(0,u.jsx)("span",{children:d})]})]}),e&&(0,u.jsx)(nk,{items:h})]})})}),(0,u.jsxs)(q,{children:[(0,u.jsx)(Q,{children:(0,u.jsx)(nc.Z,{src:"/images/logo/logo_tournament.png",alt:"",width:600,height:75})}),(0,u.jsxs)(I,{body:!1,type:"secondary",children:[(0,u.jsxs)(nl,{justifyContent:"center",children:[(0,u.jsxs)(nR,{size:"2.5rem",textAlign:"left",whiteSpace:"nowrap",weight:"800",textBorderColor:"#000",textBorderSize:"1.5px",color1:"#fbd924",color2:"#fb9d05",children:[(0,u.jsx)("span",{children:"Prize Pool Over"}),(0,u.jsx)("span",{children:"Prize Pool Over"})]}),(0,u.jsx)(nc.Z,{animate:!0,src:"/images/icons/currencies/dollar.png",alt:"",width:32,height:54}),(0,u.jsxs)(nR,{size:"3.5rem",animate:!0,textAlign:"left",whiteSpace:"nowrap",weight:"800",textBorderColor:"#000",textBorderSize:"1.5px",color1:"#fbd924",color2:"#fb9d05",children:[(0,u.jsx)("span",{children:"3 300"}),(0,u.jsx)("span",{children:"3 300"})]})]}),(0,u.jsxs)(nr,{children:[(0,u.jsxs)(K,{children:[(0,u.jsxs)(J,{marginTop:"auto",children:[(0,u.jsx)(nM,{points:"300+"}),(0,u.jsx)($,{children:(0,u.jsx)(nc.Z,{src:"/images/icons/prizes/Shot.png",alt:"",width:80,height:95})}),(0,u.jsx)(z,{fontWeight:"bold",color:"#7ecb58",lineHeight:2.5,size:22,whiteSpace:"nowrap",children:"SHOT!"}),(0,u.jsx)(z,{fontWeight:"bold",color:"#7ECB585F",whiteSpace:"nowrap",children:"Till you drink us out"})]}),(0,u.jsxs)(J,{marginTop:"auto",children:[(0,u.jsx)(nM,{points:"1000+"}),(0,u.jsx)($,{children:(0,u.jsx)(nc.Z,{src:"/images/icons/prizes/Tricket.png",alt:"",width:120,height:88})}),(0,u.jsx)(nK,{color:"Gold",width:30,height:30,left:"10%",top:"20%"}),(0,u.jsxs)(z,{fontWeight:"bold",color:"#7ecb58",size:22,textAlign:"center",whiteSpace:"nowrap",children:["NBX Berlin",(0,u.jsx)("br",{}),"ticket"]}),(0,u.jsx)(z,{fontWeight:"bold",color:"#7ECB585F",whiteSpace:"nowrap",children:"10 a day in stock"})]}),(0,u.jsxs)(J,{marginTop:"auto",children:[(0,u.jsx)(nM,{useTitle:!1,points:"#1 place"}),(0,u.jsx)($,{children:(0,u.jsx)(nc.Z,{src:"/images/icons/prizes/Tricket_VIP.png",alt:"",width:155,height:95})}),(0,u.jsx)(nK,{color:"Gold",width:25,height:25,left:"3%",top:"30%"}),(0,u.jsx)(nK,{color:"Gold",width:20,height:20,right:"3%",top:"5%"}),(0,u.jsx)(nK,{color:"Gold",width:30,height:30,right:"15%",top:"40%"}),(0,u.jsxs)(z,{fontWeight:"bold",color:"#7ecb58",size:22,textAlign:"center",whiteSpace:"nowrap",children:["VIP NBX",(0,u.jsx)("br",{}),"Berlin ticket"]}),(0,u.jsx)(z,{marginTop:"auto",fontWeight:"bold",color:"#7ECB585F",whiteSpace:"nowrap",children:"1 a day"}),(0,u.jsx)(n0,{animationTime:"8s",width:200,height:200,color:"Gold_Blur",top:"-25%"}),(0,u.jsx)(n0,{animationTime:"10s",width:200,height:200,color:"Gold_Shinyyy",top:"-25%"}),(0,u.jsx)(n0,{animationTime:"12s",width:200,height:200,rotate:"45",color:"Gold_Blur",top:"-25%"}),(0,u.jsx)(n0,{animationTime:"14s",width:200,height:200,rotate:"45",color:"Gold_Blur",top:"-25%"})]})]}),(0,u.jsx)(K,{children:(0,u.jsxs)(nn,{marginTop:"0",children:[(0,u.jsxs)(nR,{size:"1.6rem",textAlign:"center",whiteSpace:"nowrap",weight:"800",textBorderColor:"#000",textBorderSize:"1px",color1:"#fbd924",color2:"#fb9d05",children:[(0,u.jsx)("span",{children:"ULTIMATE"}),(0,u.jsx)("span",{children:"ULTIMATE"})]}),(0,u.jsxs)(nR,{size:"1.4rem",textAlign:"center",whiteSpace:"nowrap",weight:"800",textBorderColor:"#000",textBorderSize:"1px",color1:"#fbd924",color2:"#fb9d05",children:[(0,u.jsx)("span",{children:"HIGH SCORE PRIZE"}),(0,u.jsx)("span",{children:"HIGH SCORE PRIZE"})]}),(0,u.jsx)($,{children:(0,u.jsx)(nc.Z,{src:"/images/icons/prizes/Grand_Prize.png",animate:!0,alt:"",width:78,height:95})}),(0,u.jsxs)(z,{fontWeight:"bold",color:"white",size:22,textAlign:"center",whiteSpace:"nowrap",children:["Keystone",(0,u.jsx)("br",{}),"Hardware Wallet"]}),(0,u.jsx)(nK,{color:"Blue",width:30,height:30,left:"20%",top:"30%"}),(0,u.jsx)(nK,{color:"Blue",width:40,height:40,left:"20%",bottom:"25%"}),(0,u.jsx)(nK,{color:"Blue",width:30,height:30,right:"20%",top:"40%"}),(0,u.jsx)(n0,{color:"Blue_Blur",left:"-17%"}),(0,u.jsx)(n0,{color:"Blue_Shinyyy",left:"-17%"}),(0,u.jsx)(n0,{rotate:"45",color:"Blue_Blur",left:"-17%"}),(0,u.jsx)(n0,{rotate:"45",color:"Blue_Shinyyy",left:"-17%"})]})})]})]}),(0,u.jsxs)(ne,{children:[(0,u.jsx)(nf,{className:"shadow-xl",frameBorder:"0",fit:"cover",width:585,allowFullScreen:!1,allow:"autoplay; fullscreen",height:330,src:"/videos/present.webm",autoPlay:!0,loop:!0}),(0,u.jsxs)(nt,{children:[(0,u.jsx)(nc.Z,{className:"shadow-xl",src:"/images/qr/QR_code.png",alt:"",width:200,height:200}),(0,u.jsxs)(ni,{children:[(0,u.jsx)(nc.Z,{src:"/images/vendors/Download_Button_AppStore.png",alt:"",width:200,height:58}),(0,u.jsx)(nc.Z,{src:"/images/vendors/Download_Button_Google.png",alt:"",width:200,height:58})]})]})]})]})]})})},n2=()=>(0,u.jsx)(n1,{});var n8=n2}},function(n){n.O(0,[873,154,774,888,179],function(){return n(n.s=8312)}),_N_E=n.O()}]);