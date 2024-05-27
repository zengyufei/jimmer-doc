"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1989],{23100:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=t(74848),s=t(28453),r=t(11470),o=t(19365);const a={sidebar_position:1,title:"Problem"},l=void 0,c={id:"mutation/save-command/input-dto/problem",title:"Problem",description:"In this article we discuss:",source:"@site/docs/mutation/save-command/input-dto/problem.mdx",sourceDirName:"mutation/save-command/input-dto",slug:"/mutation/save-command/input-dto/problem",permalink:"/jimmer-doc/docs/mutation/save-command/input-dto/problem",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/save-command/input-dto/problem.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Problem"},sidebar:"tutorialSidebar",previous:{title:"Input DTO",permalink:"/jimmer-doc/docs/mutation/save-command/input-dto/"},next:{title:"Lonely Form",permalink:"/jimmer-doc/docs/mutation/save-command/input-dto/lonely"}},u={},d=[{value:"Problem of Dynamic Entities Parameters",id:"problem-of-dynamic-entities-parameters",level:2},{value:"Security Issue",id:"security-issue",level:3},{value:"API Ambiguity",id:"api-ambiguity",level:3},{value:"Solutions",id:"solutions",level:2},{value:"Comparison with GraphQLInput",id:"comparison-with-graphqlinput",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In this article we discuss:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The problem of using dynamic entities as method parameters"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Solutions"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Comparison with ",(0,i.jsx)(n.a,{href:"https://graphql.org/graphql-js/mutations-and-input-types/",children:"GraphQLInput"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"problem-of-dynamic-entities-parameters",children:"Problem of Dynamic Entities Parameters"}),"\n",(0,i.jsx)(n.p,{children:"Up to this point, we have systematically explained all the capabilities of save command."}),"\n",(0,i.jsx)(n.p,{children:"Now we know that no matter what shape the data structure to be saved is, we can persist it to the database in one line of code calling save command, with all internal details hidden. This is a very convenient low-level capability."}),"\n",(0,i.jsxs)(n.p,{children:["However, how should the upper layer APIs of business systems be designed? Should we directly accept dynamic objects via ",(0,i.jsx)(n.code,{children:"@RequestBody"}),"?"]}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@PutMapping("/book")\npublic void saveBook(\n    // highlight-next-line\n    @RequestBody Book book\n) {\n    bookRepository.save(book);\n}\n'})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'@PutMapping("/book")\nfun saveBook(\n    // highlight-next-line\n    @RequestBody book: Book\n) {\n    bookRepository.save(book)\n} \n'})})})]}),"\n",(0,i.jsx)(n.p,{children:"This code can work, allowing HTTP clients to submit data structures of arbitrary shapes. This seems to be an extremely powerful capability."}),"\n",(0,i.jsx)(n.p,{children:"However, this approach has two problems:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Security issue"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"API ambiguity"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"security-issue",children:"Security Issue"}),"\n",(0,i.jsx)(n.p,{children:"The client is granted too much power, being able to submit very deep and wide tree-shaped data structures that far exceed its allowed scope of modification under current security policies. This is a huge security vulnerability."}),"\n",(0,i.jsx)(n.p,{children:"For example, the client can totally submit data like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "name": "SQL in Motion", \n    "edition": 1,\n    "price": 41.99,\n    "store":{\n        "name": "MANNING",\n        "location": {\n            "city": "Vancouver",\n            "country": "Canada",\n            ...\n        }\n    },\n    "authors":[\n        {\n            "firstName": "Ben",\n            "lastName": "Brumm", \n            "job":{\n                "company": {\n                    "name": "IBM"\n                },\n                "title": "Senior HR Manager",\n                ...\n            }\n            ...\n        }\n    ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Assume your intention in providing this HTTP API is that only the ",(0,i.jsx)(n.code,{children:"BOOK"}),", ",(0,i.jsx)(n.code,{children:"BOOK_STORE"}),", ",(0,i.jsx)(n.code,{children:"AUTHOR"})," and ",(0,i.jsx)(n.code,{children:"BOOK_AUTHOR_MAPPING"})," tables can be affected."]}),"\n",(0,i.jsx)(n.p,{children:"However, now the scope of data submitted by the client is too large, with far greater destructive power than you anticipated. In the above example, there are at least 4 unexpected destructions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<root>.store.location.city"})," is modified from ",(0,i.jsx)(n.code,{children:"New York"})," to ",(0,i.jsx)(n.code,{children:"Vancouver"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<root>.store.location.country"})," is modified from ",(0,i.jsx)(n.code,{children:"USA"})," to ",(0,i.jsx)(n.code,{children:"Canada"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<root>.authors[0].job.company"})," is modified from ",(0,i.jsx)(n.code,{children:"NAB"})," to ",(0,i.jsx)(n.code,{children:"IBM"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<root>.authors[0].job.title"})," is modified from ",(0,i.jsx)(n.code,{children:"Senior Business Analyst"})," to ",(0,i.jsx)(n.code,{children:"Senior HR Manager"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["Using ",(0,i.jsx)(n.code,{children:"@RequestBody"})," to directly accept dynamic objects as input parameters in external APIs is very dangerous and will lead to serious security issues."]}),(0,i.jsx)(n.p,{children:"Therefore, save commands must be sealed internally as a low-level capability, and their raw capabilities must absolutely not be directly exposed through HTTP APIs."})]}),"\n",(0,i.jsx)(n.h3,{id:"api-ambiguity",children:"API Ambiguity"}),"\n",(0,i.jsx)(n.p,{children:"Using dynamic objects as parameters leads to ambiguity in the API. Client developers do not know which fields are decided automatically by the business system and which must be specified by themselves, so they do not know how to invoke the API properly."}),"\n",(0,i.jsx)(n.p,{children:"This issue is especially obvious for insert operations. Unlike update operations which can modify just a few properties, insert operations often need to specify many properties, otherwise exceptions will occur. Client developers are unclear about exactly which properties must be specified to avoid errors."}),"\n",(0,i.jsx)(n.h2,{id:"solutions",children:"Solutions"}),"\n",(0,i.jsx)(n.p,{children:"To resolve this issue, Jimmer provides three solutions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"./lonely",children:"Lonely Form"})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"This is a very crude solution, only for learning or very simple projects."})}),"\n",(0,i.jsx)(n.p,{children:"This solution only handles data persistence operations on a single table, and only resolves the security issue rather than the API ambiguity issue."}),"\n",(0,i.jsx)(n.p,{children:"It is also the only solution that does not require defining Input DTOs."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"./dto-lang",children:"Auto-Generated Input DTOs via DTO Language"})}),"\n",(0,i.jsx)(n.p,{children:"This solution quickly auto-generates Input DTOs with very little cost."}),"\n",(0,i.jsx)(n.p,{children:"It is a complete and extremely convenient solution, so is the recommended approach. Its huge convenience advantage will be introduced later."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"All built-in examples use this solution."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"./mapstruct",children:"Manual Input DTOs via MapStruct"})}),"\n",(0,i.jsx)(n.p,{children:"This solution requires developers to manually create Input DTOs and handle conversion to dynamic objects."}),"\n",(0,i.jsx)(n.p,{children:"It is absolutely flexible, but requires a lot of work from developers."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"comparison-with-graphqlinput",children:"Comparison with GraphQLInput"}),"\n",(0,i.jsx)(n.p,{children:"The above introduces three solutions. Among them, although the latter two solutions differ greatly, they share one commonality - relying on Input DTOs."}),"\n",(0,i.jsxs)(n.p,{children:["Comparing Jimmer's Input DTOs with ",(0,i.jsx)(n.a,{href:"https://graphql.org/graphql-js/mutations-and-input-types/",children:"GraphQLInput"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Similarities"}),"\n",(0,i.jsx)(n.p,{children:"In GraphQL, query results are GraphQLObjects, i.e. dynamic objects of arbitrary shapes. However, if mutation operations accept object parameters, they must be GraphQLInputs, i.e. static objects of fixed shapes."}),"\n",(0,i.jsx)(n.p,{children:"GraphQLInput has exactly the same idea as InputDTO here, which is the inevitable design to resolve security issues - different routes leading to the same destination."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Differences"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"GraphQLInput is just a protocol, merely constraining that object parameters for modification operations must be static objects of fixed shapes."}),"\n",(0,i.jsx)(n.p,{children:"The benefit is not limiting specific implementation technologies, but the downside is the persistence business logic needs to be implemented by developers for every specific GraphQLInput shape. Tedious work still exists objectively, and developers can truly feel the pain of Input DTO explosion."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Jimmer's InputDTO is just an alternative representation of the dynamic entity to address security issues. Once the user finishes converting Input DTO to dynamic entity, the huge convenience of persisting arbitrary shaped data structures in one line of code via save commands can still be enjoyed."}),"\n",(0,i.jsxs)(n.p,{children:["If developers adopt the ",(0,i.jsx)(n.a,{href:"./dto-lang",children:"Auto-Generated Input DTOs via DTO Language"})," solution, Input DTO classes will be auto-generated, and the conversion logic between Input DTOs and dynamic entities will also be auto-generated. Thus the pain of Input DTO explosion no longer exists. So this is the recommended solution."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var i=t(18215);const s={tabItem:"tabItem_Ymn6"};var r=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(96540),s=t(18215),r=t(23104),o=t(56347),a=t(205),l=t(57485),c=t(31682),u=t(89466);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:s}}=e;return{value:n,label:t,attributes:i,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,d]=m({queryString:t,groupId:s}),[b,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,u.Dv)(t);return[s,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),j=(()=>{const e=c??b;return p({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{j&&l(j)}),[j]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,r]),tabValues:r}}var x=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function y(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=a[t].value;s!==i&&(c(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function g(e){const n=b(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,f.jsx)(y,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,f.jsx)(g,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);