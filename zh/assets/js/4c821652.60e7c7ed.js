"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6862],{96499:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"showcase/recursive-query/depth","title":"3.2 \u9650\u5236\u6df1\u5ea6","description":"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/showcase/recursive-query/depth.mdx","sourceDirName":"showcase/recursive-query","slug":"/showcase/recursive-query/depth","permalink":"/jimmer-doc/zh/docs/showcase/recursive-query/depth","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/showcase/recursive-query/depth.mdx","tags":[],"version":"current","lastUpdatedAt":1708691860000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"3.2 \u9650\u5236\u6df1\u5ea6"},"sidebar":"tutorialSidebar","previous":{"title":"3.1 \u57fa\u672c\u7528\u6cd5","permalink":"/jimmer-doc/zh/docs/showcase/recursive-query/usage"},"next":{"title":"3.2 \u63a7\u5236\u8282\u70b9\u662f\u5426\u9012\u5f52","permalink":"/jimmer-doc/zh/docs/showcase/recursive-query/node-control"}}');var a=t(74848),l=t(28453),s=t(11470),o=t(19365);const i={sidebar_position:2,title:"3.2 \u9650\u5236\u6df1\u5ea6"},u=void 0,c={},d=[{value:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",id:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",level:2},{value:"\u67e5\u8be2\u9759\u6001DTO",id:"\u67e5\u8be2\u9759\u6001dto",level:2}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",children:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53"}),"\n",(0,a.jsxs)(s.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"TreeNodeTable table = TreeNodeTable.$;\n\nList<TreeNode> rootNodes = sqlClient\n    .createQuery(table)\n    .where(table.parentId().isNull())\n    .select(\n        table.fetch(\n            TreeNodeFetcher.$\n                .allScalarFields()\n                .recursiveChildNodes(\n                    // highlight-next-line\n                    cfg -> cfg.depth(2)\n                )\n        )\n    )\n    .execute();\n"})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val rootNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        where(table.parentId.isNull())\n        select(\n            table.fetchBy {\n                allScalarFields()\n                `childNodes*` {\n                    // highlight-next-line\n                    depth(2)\n                }\n            }\n        )\n    }\n    .execute()\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"\u5f53\u524d\u88ab\u67e5\u8be2\u7684\u805a\u5408\u6839\u88ab\u89c4\u5b9a\u4e3a\u7b2c0\u5c42\uff0c\u5728\u5176\u57fa\u7840\u4e0a\u5411\u4e0b\u67e5\u8be2\u4e24\u5c42\u5b50\u5bf9\u8c61\uff0c\u5f97\u5230\u5982\u4e0b\u7684\u6570\u636e"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "id":1,\n        "name":"Home",\n        "childNodes":[\n            {\n                "id":2,\n                "name":"Food",\n                "childNodes":[\n                    // highlight-next-line\n                    {"id":3,"name":"Drinks"},\n                    // highlight-next-line\n                    {"id":6,"name":"Bread"}\n                ]\n            },\n            {\n                "id":9,\n                "name":"Clothing",\n                "childNodes":[\n                    // highlight-next-line\n                    {"id":10,"name":"Woman"},\n                    // highlight-next-line\n                    {"id":18,"name":"Man"}\n                ]\n            }\n        ]\n    }\n]\n'})}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["\u6700\u6df1\u76844\u4e2a\u5bf9\u8c61\uff0c\u5e76\u975e\u8868\u73b0\u4e3a",(0,a.jsx)(n.code,{children:"childNodes"}),"\u5c5e\u6027\u4e3a",(0,a.jsx)(n.code,{children:"[]"}),"\uff0c\u800c\u662f\u6839\u672c\u6ca1\u6709",(0,a.jsx)(n.code,{children:"childNodes"}),"\u5c5e\u6027\u3002"]}),(0,a.jsx)(n.p,{children:"\u8fd9\u8868\u793a\uff0c\u8fd94\u4e2a\u5bf9\u8c61\u662f\u5426\u6709\u4e0b\u7ea7\u5bf9\u8c61\u662f\u672a\u77e5\u7684\uff0c\u56e0\u4e3a\u9012\u5f52\u8fc7\u7a0b\u56e0\u4eba\u4e3a\u5e72\u9884\u800c\u88ab\u63d0\u524d\u7ec8\u6b62\u3002"})]}),"\n",(0,a.jsx)(n.h2,{id:"\u67e5\u8be2\u9759\u6001dto",children:"\u67e5\u8be2\u9759\u6001DTO"}),"\n",(0,a.jsx)(n.p,{children:"\u9759\u6001DTO\u9650\u5236\u9012\u5f52\u6df1\u5ea6\u540e\u7eed\u7248\u672c\u63d0\u4f9b\uff0c\u8bf7\u7b49\u5f85\u540e\u7eed\u7248\u672c"})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var l=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),a=t(18215),l=t(23104),s=t(56347),o=t(205),i=t(57485),u=t(31682),c=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[u,d]=m({queryString:t,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),v=(()=>{const e=u??b;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),a=o[t].value;a!==r&&(u(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:l}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const a={},l=r.createContext(a);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);