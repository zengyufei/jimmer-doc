"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3288],{92760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(74848),a=t(28453),l=t(11470),s=t(19365);const o={sidebar_position:8,title:"8. \u5176\u4ed6\u67e5\u8be2"},u=void 0,i={id:"showcase/other-query",title:"8. \u5176\u4ed6\u67e5\u8be2",description:"\u6807\u51c6\u5b50\u67e5\u8be2",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/showcase/other-query.mdx",sourceDirName:"showcase",slug:"/showcase/other-query",permalink:"/jimmer-doc/zh/docs/showcase/other-query",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/showcase/other-query.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"8. \u5176\u4ed6\u67e5\u8be2"},sidebar:"tutorialSidebar",previous:{title:"7. \u7efc\u5408\u67e5\u8be2",permalink:"/jimmer-doc/zh/docs/showcase/comprehensive-query"},next:{title:"9. Update\u8bed\u53e5",permalink:"/jimmer-doc/zh/docs/showcase/update-statement"}},c={},d=[{value:"\u6807\u51c6\u5b50\u67e5\u8be2",id:"\u6807\u51c6\u5b50\u67e5\u8be2",level:2},{value:"Native SQL",id:"native-sql",level:2}];function h(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u6807\u51c6\u5b50\u67e5\u8be2",children:"\u6807\u51c6\u5b50\u67e5\u8be2"}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"BookTable book = BookTable.$;\n\nList<Book> newestBooks = sqlClient\n    .createQuery(book)\n    .where(\n        Expression.tuple(\n            book.name(),\n            book.edition()\n        ).in(sqlClient\n            .createSubQuery(book)\n            .groupBy(book.name())\n            .select(\n                book.name(),\n                book.edition().max()\n            )\n        )\n    )\n    .select(book)\n    .execute();\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"val newestBooks = sqlClient\n    .createQuery(Book::class) {\n        where( \n            tuple(\n                table.name, \n                table.edition\n            ) valueIn subQuery(Book::class) {\n                groupBy(table.name)\n                select(\n                    table.name,\n                    max(table.edition).asNonNull()\n                )\n            }\n        )\n        select(table)\n    }\n    .execute()\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"native-sql",children:"Native SQL"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3a\u4e86\u652f\u6301\u7279\u6709\u6570\u636e\u5e93\u4ea7\u54c1\u7279\u6709\u7684\u80fd\u529b\uff0cJimmer\u7684SQL DSL\u652f\u6301\u5d4c\u5165Native SQL\u8868\u8fbe\u5f0f\u3002\u4ee5\u6b63\u5219\u8868\u8fbe\u5f0f\u67e5\u8be2\u4e3a\u4f8b\u3002"}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'AuthorTable table = Tables.AUTHOR_TABLE;\n\nList<Author> authors = sqlClient\n    .createQuery(table)\n    .where(\n        Predicate.sql(\n            "regexp_like(%e, %v)",\n            it -> it\n                .expression(table.firstName())\n                .value("^Ste(v|ph)en$")\n        )\n    )\n    .select(table)\n    .execute();\n'})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'val authors = sqlClient\n    .createQuery(Author::class) {\n        where(\n            sql(Boolean::class, "regexp_like(%e, %v)") {\n                expression(table.firstName)\n                value("^Ste(v|ph)en$")\n            }\n        )\n        select(table)\n    }\n    .execute()\n'})})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Native SQL\u7247\u6bb5\u4e2d\u7684",(0,r.jsx)(n.code,{children:"%e"}),"\u8868\u793a\u53ef\u4ee5\u5d4c\u5165\u4e00\u4e2a\u5f3a\u7c7b\u578b\u7684Jimmer DSL\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["Lambda\u4e2d\u7684",(0,r.jsx)(n.code,{children:"expression(...)"}),"\u6307\u5b9a\u7528\u4e8e\u66ff\u6362",(0,r.jsx)(n.code,{children:"%e"}),"\u7684\u8868\u8fbe\u5f0f\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Native SQL\u7247\u6bb5\u4e2d\u7684",(0,r.jsx)(n.code,{children:"%v"}),"\u8868\u793a\u53ef\u4ee5\u5d4c\u5165\u4e00\u4e2a\u5b57\u9762\u91cf\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["Lambda\u4e2d\u7684",(0,r.jsx)(n.code,{children:"value(...)"}),"\u6307\u5b9a\u7528\u4e8e\u66ff\u6362",(0,r.jsx)(n.code,{children:"%v"}),"\u7684\u5b57\u9762\u91cf\u3002"]}),"\n"]}),"\n"]})]})}function b(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var l=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),a=t(18215),l=t(23104),s=t(56347),o=t(205),u=t(57485),i=t(31682),c=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=h(e),[s,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[i,d]=p({queryString:t,groupId:a}),[m,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),f=(()=>{const e=i??m;return b({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{f&&u(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),c=e=>{const n=e.currentTarget,t=u.indexOf(n),a=o[t].value;a!==r&&(i(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function k(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function y(e){const n=(0,v.A)();return(0,x.jsx)(k,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const a={},l=r.createContext(a);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);