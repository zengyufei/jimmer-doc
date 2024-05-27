"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[569],{84243:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=t(74848),i=t(28453),s=t(11470),r=t(19365);const o={sidebar_position:8,title:"Non-Structural Mapping"},l=void 0,c={id:"mapping/advanced/join-sql",title:"Non-Structural Mapping",description:"Non-Structural Design Example",source:"@site/docs/mapping/advanced/join-sql.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/join-sql",permalink:"/jimmer-doc/docs/mapping/advanced/join-sql",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/advanced/join-sql.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Non-Structural Mapping"},sidebar:"tutorialSidebar",previous:{title:"JSON Mapping",permalink:"/jimmer-doc/docs/mapping/advanced/json"},next:{title:"Join Table Filter",permalink:"/jimmer-doc/docs/mapping/advanced/join-table-filter"}},d={},u=[{value:"Non-Structural Design Example",id:"non-structural-design-example",level:2},{value:"Non-Structural Association",id:"non-structural-association",level:2},{value:"Precautions",id:"precautions",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"non-structural-design-example",children:"Non-Structural Design Example"}),"\n",(0,a.jsxs)(n.p,{children:["Through the content related to ",(0,a.jsx)(n.a,{href:"../base/association",children:"Association Mapping"}),", it is not difficult to find that all associations are based on ",(0,a.jsx)(n.code,{children:"@JoinColumn"})," and ",(0,a.jsx)(n.code,{children:"@JoinTable"})," ",(0,a.jsx)(n.em,{children:"(may be omitted)"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Although Jimmer supports fake foreign keys ",(0,a.jsx)(n.em,{children:"(foreign keys in the developer's mind but without corresponding foreign key constraints in the database)"}),", all the association mappings we have discussed so far are based on 3NF design of relational databases."]}),"\n",(0,a.jsx)(n.p,{children:"However, you may be handed over a legacy database containing non-normalized database designs, such as:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"create table book(\n    id bigint unsigned not null auto_increment primary key,\n    // highlight-next-line \n    author_ids varchar(100),\n    ...Omit other columns...\n) engine=innodb;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Here, ",(0,a.jsx)(n.code,{children:"author_ids"})," is a string column whose data is the ids of all ",(0,a.jsx)(n.code,{children:"Author"})," objects associated with the current ",(0,a.jsx)(n.code,{children:"Book"})," concatenated together with commas, e.g. ",(0,a.jsx)(n.code,{children:"1, 5, 100, 206"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Obviously, this is a non-structural design that does not satisfy 3NF of relational databases."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"For Postgres that supports array types, using arrays would be a better choice, but for better generality of this example, string concatenation is still used here without utilizing database-specific features."})}),"\n",(0,a.jsx)(n.h2,{id:"non-structural-association",children:"Non-Structural Association"}),"\n",(0,a.jsxs)(n.p,{children:["To support such non-structural designs, Jimmer provides the ",(0,a.jsx)(n.code,{children:"@org.babyfish.jimmer.sql.JoinSql"})," annotation."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@JoinSql"})," must and can only be used together with ",(0,a.jsx)(n.code,{children:"@ManyToMany"}),"."]})}),"\n",(0,a.jsxs)(n.p,{children:["Next, create an SQL function ",(0,a.jsx)(n.em,{children:"(MySQL is used as example here)"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"create function concatenation_string_contains(\n\tself varchar(100),\n\tid bigint  \n) returns boolean\nbegin\n\tif self is null then\n\t\treturn false;\n\tend if;\n\treturn self regexp concat('(^|\\\\,)\\\\s*', id, '\\\\s*(\\\\,|$)'); \nend;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This function assumes that the parameter ",(0,a.jsx)(n.code,{children:"self"})," is in the format of multiple numbers concatenated by commas, and determines whether it contains the parameter ",(0,a.jsx)(n.code,{children:"id"}),". For example:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"concatenation_string_contains('100, 200, 300', 200)"})," returns true"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"concatenation_string_contains('100, 200, 300', 201)"})," returns false"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Now we can map the non-structural many-to-many association:"}),"\n",(0,a.jsxs)(s.A,{groupId:"language",children:[(0,a.jsx)(r.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Book.java" ',children:'@Entity\npublic interface Book {\n\n    @ManyToMany\n    // highlight-next-line\n    @JoinSql(\n        "concatenation_string_contains(" +\n        "    %alias.author_ids, " +\n        "    %target_alias.id" + \n        ")"\n    )\n    List<Author> authors();\n\n    ...Omit other code...\n}\n'})})}),(0,a.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:'@Entity\ninterface Book {\n\n    @ManyToMany\n    // highlight-next-line\n    @JoinSql(\n        "concatenation_string_contains(" +\n        "    %alias.author_ids, " + \n        "    %target_alias.id" +\n        ")"\n    )\n    val authors: List<Author>\n\n    ...Omit other code...\n}\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The SQL expression used in ",(0,a.jsx)(n.code,{children:"@JsonSql"})," represents the join condition, where:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"concatenation_string_contains"}),": The SQL function we defined earlier"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"%alias"}),": A special token defined by Jimmer representing the alias of the current table ",(0,a.jsxs)(n.em,{children:["(",(0,a.jsx)(n.code,{children:"book"})," table in this example)"]})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"%target_alias"}),": A special token defined by Jimmer representing the alias of the target table ",(0,a.jsxs)(n.em,{children:["(",(0,a.jsx)(n.code,{children:"author"})," table in this example)"]})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsxs)(n.p,{children:["ORM automatically generates SQL ",(0,a.jsxs)(n.em,{children:["(which is very important for dynamic queries, especially for ORMs like Jimmer that first proposed the ",(0,a.jsx)(n.a,{href:"../../query/dynamic-join",children:"Dynamic Join"})," concept)"]}),", and users cannot interfere with the aliases of tables in the final SQL."]}),(0,a.jsxs)(n.p,{children:["So using ",(0,a.jsx)(n.code,{children:"%alias"})," and ",(0,a.jsx)(n.code,{children:"%target_alias"})," here is the only way."]})]}),"\n",(0,a.jsxs)(n.p,{children:["It is worth mentioning that if you want to define a bidirectional many-to-many association, since ",(0,a.jsx)(n.code,{children:"Book.authors"})," has already used ",(0,a.jsx)(n.code,{children:"@JoinSql"}),", the other end ",(0,a.jsx)(n.code,{children:"Author.books"})," does not need to use ",(0,a.jsx)(n.code,{children:"@JoinSql"})," again. As before, use ",(0,a.jsx)(n.code,{children:"mappedBy"})," to indicate that it is the inverse property."]}),"\n",(0,a.jsxs)(s.A,{groupId:"language",children:[(0,a.jsx)(r.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Author.java"',children:'@Entity\npublic interface Author {\n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    List<Book> books();\n\n    ...Omit other code... \n}\n'})})}),(0,a.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Author.kt"',children:'@Entity\ninterface Author {\n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n\n    ...Omit other code...\n}\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"precautions",children:"Precautions"}),"\n",(0,a.jsxs)(n.admonition,{type:"warning",children:[(0,a.jsxs)(n.p,{children:["Unless legacy database compatibility is required, do not perform non-structural design and map it with ",(0,a.jsx)(n.code,{children:"@JoinSql"}),", because non-structural many-to-many associations have many limitations:"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Cannot be used as ",(0,a.jsx)(n.a,{href:"./remote",children:"Remote Association"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Cannot participate in ",(0,a.jsx)(n.a,{href:"../../query/dynamic-join/optimization",children:"Dynmaic Join Optimization"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Cannot use ",(0,a.jsx)(n.a,{href:"../../cache/cache-type/association",children:"Association Cache"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Cannot be saved as part of data structure by ",(0,a.jsx)(n.a,{href:"../../mutation/save-command",children:"Save Command"}),". In fact, if the data structure to be saved contains non-structural associations, it will cause exceptions."]}),"\n"]}),"\n"]})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var a=t(18215);const i={tabItem:"tabItem_Ymn6"};var s=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var a=t(96540),i=t(18215),s=t(23104),r=t(56347),o=t(205),l=t(57485),c=t(31682),d=t(89466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=h(e),[r,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:t,groupId:i}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),f=(()=>{const e=c??x;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,s]),tabValues:s}}var j=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function b(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==a&&(c(n),r(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,i.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(y,{...n,...e})]})}function k(e){const n=(0,j.A)();return(0,g.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(96540);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);