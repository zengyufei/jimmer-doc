"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2072],{42976:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(74848),a=t(28453),i=t(11470),o=t(19365);const s={sidebar_position:4,title:"Working with Jackson"},l=void 0,c={id:"object/jackson",title:"Working with Jackson",description:"Jimmer objects are dynamic and not all properties of an object need to be initialized. It allows missing some properties.",source:"@site/docs/object/jackson.mdx",sourceDirName:"object",slug:"/object/jackson",permalink:"/jimmer-doc/docs/object/jackson",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/object/jackson.mdx",tags:[],version:"current",lastUpdatedAt:1729456376e3,sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Working with Jackson"},sidebar:"tutorialSidebar",previous:{title:"Draft",permalink:"/jimmer-doc/docs/object/draft"},next:{title:"DTO conversion",permalink:"/jimmer-doc/docs/object/view/"}},u={},d=[];function m(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Jimmer objects are dynamic and not all properties of an object need to be initialized. It allows missing some properties."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Accessing an unspecified property directly in code will cause an exception."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Unspecified properties are automatically ignored in JSON serialization without exceptions."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["JSON serialization is mentioned here, referring to ",(0,r.jsx)(n.a,{href:"https://github.com/FasterXML/jackson",children:"jackson"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["jimmer-core defines a jackson module: ",(0,r.jsx)(n.code,{children:"org.babyfish.jimmer.jackson.ImmutableModule"})," which can add the ability of serialize/deserialize jimmer immutable objects for jackson."]}),"\n",(0,r.jsx)(n.p,{children:"There are two cases:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Using Spring Boot Starter"}),"\n",(0,r.jsx)(n.p,{children:"In this case, Jimmer has already registered ImmutableModule to Spring as below:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// Internal Jimmer code, not user code\n@ConditionalOnMissingBean(ImmutableModule.class) \n@Bean\npublic ImmutableModule immutableModule() {\n    return new ImmutableModule();\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Therefore, the default ",(0,r.jsx)(n.code,{children:"ObjectMapper"})," of Spring can already serialize/deserialize Jimmer dynamic objects, and most serialization/deserialization work is done automatically by Spring during HTTP interaction, so no extra development is required."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["The default JSON handling library in Spring is ",(0,r.jsx)(n.a,{href:"https://github.com/FasterXML/jackson",children:"jackson"}),". Don't replace it."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Using low level API"}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'ObjectMapper mapper = new ObjectMapper()\n    // highlight-next-line\n    .registerModule(new ImmutableModule());\n\nTreeNode treeNode = Immutables.createTreeNode(\n    draft -> draft.setName("Root Node")\n);\n\n// Serialize    \nString json = mapper.writeValueAsString(treeNode);\n\n// Deserialize\nTreeNode deserializedTreeNode = \n    mapper.readValue(json, TreeNode.class);\n'})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'val mapper = ObjectMapper()\n    // highlight-next-line\n    .registerModule(ImmutableModule())\n\nval treeNode = TreeNode {\n    name = "Root Node"\n}\n\n// Serialize\nval json = mapper.writeValueAsString(treeNode)\n\n// Deserialize\nval deserializedTreeNode = \n    mapper.readValue(json, TreeNode::class.java)\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For serialization, there is a handy way which is the ",(0,r.jsx)(n.code,{children:"toString"})," method of jimmer objects."]}),"\n"]})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),a=t(18215),i=t(23104),o=t(56347),s=t(205),l=t(57485),c=t(31682),u=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,d]=h({queryString:t,groupId:a}),[b,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),f=(()=>{const e=c??b;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),j(e)}),[d,j,i]),tabValues:i}}var j=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==r&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:i}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function w(e){const n=(0,j.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(96540);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);