"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8180,5323,7704,561,2942,5799],{68999:(e,t,o)=>{o.d(t,{A:()=>G});var n=o(98587),r=o(58168),s=o(96540),a=o(37273),i=o(94521),c=o(17245),u=o(64111),l=o(61311),p=o(51264),m=o(33571);const d=["ownerState"],f=["variants"],h=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function y(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const v=(0,p.A)(),A=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function k({defaultTheme:e,theme:t,themeId:o}){return n=t,0===Object.keys(n).length?e:t[o]||t;var n}function w(e){return e?(t,o)=>o[e]:null}function S(e,t){let{ownerState:o}=t,s=(0,n.A)(t,d);const a="function"==typeof e?e((0,r.A)({ownerState:o},s)):e;if(Array.isArray(a))return a.flatMap((e=>S(e,(0,r.A)({ownerState:o},s))));if(a&&"object"==typeof a&&Array.isArray(a.variants)){const{variants:e=[]}=a;let t=(0,n.A)(a,f);return e.forEach((e=>{let n=!0;"function"==typeof e.props?n=e.props((0,r.A)({ownerState:o},s,o)):Object.keys(e.props).forEach((t=>{(null==o?void 0:o[t])!==e.props[t]&&s[t]!==e.props[t]&&(n=!1)})),n&&(Array.isArray(t)||(t=[t]),t.push("function"==typeof e.style?e.style((0,r.A)({ownerState:o},s,o)):e.style))})),t}return a}const b=function(e={}){const{themeId:t,defaultTheme:o=v,rootShouldForwardProp:s=y,slotShouldForwardProp:a=y}=e,c=e=>(0,m.A)((0,r.A)({},e,{theme:k((0,r.A)({},e,{defaultTheme:o,themeId:t}))}));return c.__mui_systemSx=!0,(e,u={})=>{(0,l.internal_processStyles)(e,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:p,slot:m,skipVariantsResolver:d,skipSx:f,overridesResolver:v=w(A(m))}=u,b=(0,n.A)(u,h),g=void 0!==d?d:m&&"Root"!==m&&"root"!==m||!1,x=f||!1;let _=y;"Root"===m||"root"===m?_=s:m?_=a:function(e){return"string"==typeof e&&e.charCodeAt(0)>96}(e)&&(_=void 0);const C=(0,l.default)(e,(0,r.A)({shouldForwardProp:_,label:undefined},b)),R=e=>"function"==typeof e&&e.__emotion_real!==e||(0,i.Q)(e)?n=>S(e,(0,r.A)({},n,{theme:k({theme:n.theme,defaultTheme:o,themeId:t})})):e,j=(n,...s)=>{let a=R(n);const i=s?s.map(R):[];p&&v&&i.push((e=>{const n=k((0,r.A)({},e,{defaultTheme:o,themeId:t}));if(!n.components||!n.components[p]||!n.components[p].styleOverrides)return null;const s=n.components[p].styleOverrides,a={};return Object.entries(s).forEach((([t,o])=>{a[t]=S(o,(0,r.A)({},e,{theme:n}))})),v(e,a)})),p&&!g&&i.push((e=>{var n;const s=k((0,r.A)({},e,{defaultTheme:o,themeId:t}));return S({variants:null==s||null==(n=s.components)||null==(n=n[p])?void 0:n.variants},(0,r.A)({},e,{theme:s}))})),x||i.push(c);const u=i.length-s.length;if(Array.isArray(n)&&u>0){const e=new Array(u).fill("");a=[...n,...e],a.raw=[...n.raw,...e]}const l=C(a,...i);return e.muiName&&(l.muiName=e.muiName),l};return C.withConfig&&(j.withConfig=C.withConfig),j}}(),g=b;var x=o(44467),_=o(39599),C=o(89452),R=o(3675),j=o(74848);const T=["component","direction","spacing","divider","children","className","useFlexGap"],N=(0,p.A)(),I=g("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function F(e){return(0,x.A)({props:e,name:"MuiStack",defaultTheme:N})}function M(e,t){const o=s.Children.toArray(e).filter(Boolean);return o.reduce(((e,n,r)=>(e.push(n),r<o.length-1&&e.push(s.cloneElement(t,{key:`separator-${r}`})),e)),[])}const O=({ownerState:e,theme:t})=>{let o=(0,r.A)({display:"flex",flexDirection:"column"},(0,C.NI)({theme:t},(0,C.kW)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const n=(0,R.LX)(t),r=Object.keys(t.breakpoints.values).reduce(((t,o)=>(("object"==typeof e.spacing&&null!=e.spacing[o]||"object"==typeof e.direction&&null!=e.direction[o])&&(t[o]=!0),t)),{}),s=(0,C.kW)({values:e.direction,base:r}),a=(0,C.kW)({values:e.spacing,base:r});"object"==typeof s&&Object.keys(s).forEach(((e,t,o)=>{if(!s[e]){const n=t>0?s[o[t-1]]:"column";s[e]=n}}));const c=(t,o)=>{return e.useFlexGap?{gap:(0,R._W)(n,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${r=o?s[o]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r]}`]:(0,R._W)(n,t)}};var r};o=(0,i.A)(o,(0,C.NI)({theme:t},a,c))}return o=(0,C.iZ)(t.breakpoints,o),o};var P=o(11848),E=o(3541);const W=function(e={}){const{createStyledComponent:t=I,useThemeProps:o=F,componentName:i="MuiStack"}=e,l=t(O),p=s.forwardRef((function(e,t){const s=o(e),p=(0,_.A)(s),{component:m="div",direction:d="column",spacing:f=0,divider:h,children:y,className:v,useFlexGap:A=!1}=p,k=(0,n.A)(p,T),w={direction:d,spacing:f,useFlexGap:A},S=(0,u.A)({root:["root"]},(e=>(0,c.Ay)(i,e)),{});return(0,j.jsx)(l,(0,r.A)({as:m,ownerState:w,ref:t,className:(0,a.A)(S.root,v)},k,{children:h?M(y,h):y}))}));return p}({createStyledComponent:(0,P.Ay)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,E.A)({props:e,name:"MuiStack"})}),G=W},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>i});var n=o(96540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);