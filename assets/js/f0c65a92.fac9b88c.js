"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9405],{67817:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"query/paging/reverse-sorting","title":"Reverse Sorting Optimization","description":"Concept","source":"@site/docs/query/paging/reverse-sorting.mdx","sourceDirName":"query/paging","slug":"/query/paging/reverse-sorting","permalink":"/jimmer-doc/docs/query/paging/reverse-sorting","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/paging/reverse-sorting.mdx","tags":[],"version":"current","lastUpdatedAt":1707396615000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Reverse Sorting Optimization"},"sidebar":"tutorialSidebar","previous":{"title":"Table Join Optimization","permalink":"/jimmer-doc/docs/query/paging/unncessary-join"},"next":{"title":"Deep Pagination Optimization","permalink":"/jimmer-doc/docs/query/paging/deep-optimization"}}');var a=t(74848),i=t(28453),s=t(11470),o=t(19365);const l={sidebar_position:3,title:"Reverse Sorting Optimization"},c=void 0,u={},d=[{value:"Concept",id:"concept",level:2},{value:"Example",id:"example",level:2},{value:"Forward Sorting",id:"forward-sorting",level:3},{value:"Reverse Sorting",id:"reverse-sorting",level:3}];function p(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"concept",children:"Concept"}),"\n",(0,a.jsx)(n.p,{children:"As page numbers increase, pagination query efficiency drops. To solve this, Jimmer supports reverse sorting optimization."}),"\n",(0,a.jsx)(n.p,{children:"Reverse sorting optimization takes effect only when the following prerequisites are met together:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["This feature does not apply to queries that only care about in-page data regardless of total row count before pagination, i.e. ",(0,a.jsx)(n.code,{children:"limit(limit, offset)"}),". It must be queries that care about both in-page data and total count."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"The template query must have explicit orderBy clause."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"The queried page data is late relative to all data before pagination. I.e."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"offset"})," + ",(0,a.jsx)(n.code,{children:"pageSize"})," / 2 > ",(0,a.jsx)(n.code,{children:"totalCount"})," / 2"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"When all above conditions are met, Jimmer flips the sorting of the template query. Because a forward sorting query with relatively large page number and a reverse sorting query with relatively small page number are equivalent."}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"Let's look at an example."}),"\n",(0,a.jsxs)(s.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public Page<Book> findBooks(\n    int pageIndex,\n    int pageSize    \n) {\n    BookTable table = Tables.BOOK_TABLE;\n    \n    return sqlClient\n        .createQuery(table)\n        .orderBy(table.name().asc(), table.edition().desc())\n        .select(table)\n        .fetchPage(pageIndex, pageSize);\n}\n"})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"fun findBooks(\n    pageIndex: Int,\n    pageSize: Int\n): Page<Book> = \n    sqlClient\n        .createQuery(Book::class) {\n            orderBy(table.name.asc(), table.edition.desc())\n            select(table)\n        }\n        .fetchPage(pageIndex, pageSize)\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Assume there are 12 ",(0,a.jsx)(n.code,{children:"Book"})," records total. ",(0,a.jsx)(n.code,{children:"pageSize"})," is 2, so there are 6 pages. ",(0,a.jsx)(n.code,{children:"pageIndex"})," has 5 possible values: 0, 1, 2, 3, 4, 5."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"0, 1, 2: Data to query is early, use forward sorting pagination."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"3, 4, 5: Data to query is late, use reverse sorting pagination."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Next we demonstrate the difference between reverse and forward sorting pagination with ",(0,a.jsx)(n.code,{children:"pageIndex=2"})," and ",(0,a.jsx)(n.code,{children:"pageIndex=3"})," as examples."]}),"\n",(0,a.jsx)(n.h3,{id:"forward-sorting",children:"Forward Sorting"}),"\n",(0,a.jsxs)(n.p,{children:["Executing ",(0,a.jsx)(n.code,{children:"findBooks(2, 2)"})," generates the forward sorting SQL:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_  \norder by\n    /* highlight-next-line */  \n    tb_1_.NAME asc,\n    /* highlight-next-line */\n    tb_1_.EDITION desc\nlimit ? /* 2 */\noffset ? /* 4 */ \n"})}),"\n",(0,a.jsx)(n.p,{children:"The result is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "rows":[\n        {\n            "id":11,\n            "name":"GraphQL in Action",\n            "edition":2,\n            "price":81,\n            "store":{\n                "id":2\n            }\n        },\n        {\n            "id":10, \n            "name":"GraphQL in Action",\n            "edition":1,\n            "price":80,\n            "store":{\n                "id":2\n            }\n        }\n    ],\n    "totalCount":12,\n    "totalPage":6\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"reverse-sorting",children:"Reverse Sorting"}),"\n",(0,a.jsxs)(n.p,{children:["Executing ",(0,a.jsx)(n.code,{children:"findBooks(3, 2)"})," generates the reverse sorting SQL:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME, \n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_   \norder by\n    /* highlight-next-line */\n    tb_1_.NAME desc, // Reversed: asc to desc\n    /* highlight-next-line */ \n    tb_1_.EDITION asc // Reversed: desc to asc\nlimit ? /* 2 */\noffset ? /* 4 */\n"})}),"\n",(0,a.jsx)(n.p,{children:"The result is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "rows":[\n        {\n            "id":3,\n            "name":"Learning GraphQL",\n            "edition":3,\n            "price":51, \n            "store":{\n                "id":1\n            }\n        },\n        {\n            "id":2,\n            "name":"Learning GraphQL",\n            "edition":2,\n            "price":55,\n            "store":{\n                "id":1\n            } \n        }\n    ],\n    "totalCount":12,\n    "totalPage":6\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>_});var r=t(96540),a=t(18215),i=t(23104),s=t(56347),o=t(205),l=t(57485),c=t(31682),u=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,d]=g({queryString:t,groupId:a}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),f=(()=>{const e=c??m;return h({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function _(e){const n=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);