"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7522],{1128:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var t=i(74848),a=i(28453),o=i(11470),s=i(19365);const r={sidebar_position:4,title:"Many To Many"},l=void 0,c={id:"mapping/base/association/many-to-many",title:"Many To Many",description:"This chapter introduces how to use the @org.babyfish.jimmer.sql.ManyToMany annotation to declare many-to-many association properties.",source:"@site/docs/mapping/base/association/many-to-many.mdx",sourceDirName:"mapping/base/association",slug:"/mapping/base/association/many-to-many",permalink:"/jimmer-doc/docs/mapping/base/association/many-to-many",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/base/association/many-to-many.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Many To Many"},sidebar:"tutorialSidebar",previous:{title:"One To Many",permalink:"/jimmer-doc/docs/mapping/base/association/one-to-many"},next:{title:"Naming Strategy",permalink:"/jimmer-doc/docs/mapping/base/naming-strategy"}},d={},u=[{value:"Owning Side",id:"owning-side",level:2},{value:"Inverse Side",id:"inverse-side",level:2},{value:"If business fields need to be added to the join table",id:"if-business-fields-need-to-be-added-to-the-join-table",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This chapter introduces how to use the ",(0,t.jsx)(n.code,{children:"@org.babyfish.jimmer.sql.ManyToMany"})," annotation to declare many-to-many association properties."]}),"\n",(0,t.jsx)(n.p,{children:"Many-to-many supports bidirectional association. For bidirectional associations, one side must be the owning side, and the other side must be the inverse side."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Owning side (required): The actual mapping between the database and association properties to implement unidirectional many-to-many association."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Inverse side (optional): If a unidirectional association already exists, the inverse side can be configured as a mirror of the owning side to form a bidirectional association."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Let's assume there are two entity types Book and Author, and establish a bidirectional many-to-many association between them."}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"Different from JPA/Hibernate, the owning side and inverse side can be chosen arbitrarily. Both can be used to persist associations."}),(0,t.jsx)(n.p,{children:"The example in this article chooses:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Owning side (required): ",(0,t.jsx)(n.code,{children:"Book.authors"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Inverse side (optional): ",(0,t.jsx)(n.code,{children:"Author.books"})]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"owning-side",children:"Owning Side"}),"\n",(0,t.jsxs)(o.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity\npublic interface Book {\n\n    @ManyToMany  \n    List<Author> authors();\n\n    ...Omit other code...\n}\n"})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt" ',children:"@Entity\ninterface Book {\n\n    @ManyToMany\n    val authors: List<Author>\n\n    ...Omit other code...\n}\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Many-to-many associations must be implemented based on a join table, even if the ",(0,t.jsx)(n.code,{children:"@JoinTable"})," annotation is not used in the above code, it is actually equivalent to using the annotation."]}),"\n",(0,t.jsxs)(n.p,{children:["If no properties are specified for ",(0,t.jsx)(n.code,{children:"@JoinTable"}),", and even ",(0,t.jsx)(n.code,{children:"@JoinTable"})," itself is omitted (like the previous code), Jimmer will deduce the column names corresponding to the ",(0,t.jsx)(n.code,{children:"authors"})," property based on the ",(0,t.jsx)(n.a,{href:"../naming-strategy",children:"naming strategy"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If the default ",(0,t.jsx)(n.a,{href:"../naming-strategy",children:"naming strategy"})," is not overridden by the user, the deduced join table information is:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Join table name: BOOK_AUTHOR_MAPPING"}),"\n",(0,t.jsx)(n.li,{children:"Join table foreign key column pointing to current entity: BOOK_ID"}),"\n",(0,t.jsx)(n.li,{children:"Join table foreign key column pointing to associated entity: AUTHOR_ID"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"So the previous code is equivalent to:"}),"\n",(0,t.jsxs)(o.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:'@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID", \n        inverseJoinColumnName = "AUTHOR_ID"\n    )\n    List<Author> authors();\n\n    ...Omit other code...\n}\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:'@Entity\ninterface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID"\n    )\n    val authors: List<Author>\n\n    ...Omit other code...\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["The join table ",(0,t.jsx)(n.code,{children:"BOOK_AUTHOR_MAPPING"})," is defined as:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"create table BOOK_AUTHOR_MAPPING(\n    BOOK_ID bigint not null,\n    AUTHOR_ID bigint not null\n);\n\nalter table AUTHOR_MAPPING\n    add constraint PK_AUTHOR_MAPPING\n        primary(BOOK_ID, AUTHOR_ID);\n\n// If foreign key pointing to current entity is real, \n// create foreign key constraint  \nalter table BOOK_AUTHOR_MAPPING\n    add constraint FK_BOOK_AUTHOR_MAPPING__BOOK\n        foreign key(BOOK_ID)\n            references BOOK(ID);\n\n// If foreign key pointing to associated entity is real, \n// create foreign key constraint\nalter table BOOK_AUTHOR_MAPPING\n    add constraint FK_BOOK_AUTHOR_MAPPING__AUTHOR\n        foreign key(AUTHOR_ID)\n            references AUTHOR(ID);\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The join table has only two foreign keys, both non-null. The join table maintains the association by inserting and deleting data, never storing null data itself."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The join table has no corresponding ORM entity and does not need an independent primary key. The two foreign keys combined can serve as the primary key."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsx)(n.p,{children:"Note"}),(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"@ManyToMany"})," association property must be non-null. If an object requires fetching its many-to-many association properties, then for the current object that has no corresponding associated object, the value of this property is a collection of length 0 rather than null."]})]}),"\n",(0,t.jsx)(n.h2,{id:"inverse-side",children:"Inverse Side"}),"\n",(0,t.jsxs)(n.p,{children:["The configuration of the inverse side is very simple, just specify that ",(0,t.jsx)(n.code,{children:"Author.books"})," is the mirror of ",(0,t.jsx)(n.code,{children:"Book.authors"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"In the following code:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Left: The owning side discussed in the previous section"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Right: The inverse side association ",(0,t.jsx)(n.code,{children:"Author.books"})," introduced in this section, which is the mirror of ",(0,t.jsx)(n.code,{children:"Book.authors"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Here, ",(0,t.jsx)(n.code,{children:'@ManyToMany(mappedBy = "store")'})," indicates that the current property ",(0,t.jsx)(n.code,{children:"BookStore.books"})," is the mirror of ",(0,t.jsx)(n.code,{children:"Book.store"}),"."]}),"\n",(0,t.jsxs)("div",{style:{display:"flex",alignItems:"start"},children:[(0,t.jsx)("div",{children:(0,t.jsxs)(o.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"  ',children:'@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID" \n    )\n    List<Author> authors();\n\n    ...Omit other code...\n}\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:'@Entity\ninterface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID"\n    )\n    val authors: List<Author>\n\n    ...Omit other code...\n}\n'})})})]})}),(0,t.jsx)("div",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"mirror",src:i(34439).A+"",width:"130",height:"239"})})}),(0,t.jsx)("div",{children:(0,t.jsxs)(o.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Author.java"  ',children:'@Entity\npublic interface Author {\n\n    // `mappedBy` indicates `Author.books`\n    // is the mirror of `Book.authors`\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors") \n    List<Book> books();\n\n    ...Omit other code...\n}\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Author.kt"',children:'@Entity\ninterface Author {\n\n    // `mappedBy` indicates `Author.books` \n    // is the mirror of `Book.authors`\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n\n    ...Omit other code...\n}\n'})})})]})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsx)(n.p,{children:"Note:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Once the ",(0,t.jsx)(n.code,{children:"mappedBy"})," property of ",(0,t.jsx)(n.code,{children:"@ManyToMany"})," is specified, ",(0,t.jsx)(n.code,{children:"@JoinTable"})," must not be used."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Like the ",(0,t.jsx)(n.code,{children:"@ManyToMany"})," association property on the owning side, the ",(0,t.jsx)(n.code,{children:"@ManyToMany"})," association on the inverse side must also be non-null for the same reason."]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"if-business-fields-need-to-be-added-to-the-join-table",children:"If business fields need to be added to the join table"}),"\n",(0,t.jsx)(n.p,{children:"For the many-to-many association discussed in this article, no business fields other than the two foreign keys can be defined on the join table."}),"\n",(0,t.jsxs)(n.p,{children:["If you want to define more other business fields in the join table of the many-to-many association, please refer to ",(0,t.jsx)(n.a,{href:"../../advanced/view/many-to-many-view",children:"ManyToManyView"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,i)=>{i.d(n,{A:()=>s});i(96540);var t=i(18215);const a={tabItem:"tabItem_Ymn6"};var o=i(74848);function s(e){let{children:n,hidden:i,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:i,children:n})}},11470:(e,n,i)=>{i.d(n,{A:()=>M});var t=i(96540),a=i(18215),o=i(23104),s=i(56347),r=i(205),l=i(57485),c=i(31682),d=i(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:a}}=e;return{value:n,label:i,attributes:t,default:a}}))}(i);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function m(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:i}=e;const a=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function b(e){const{defaultValue:n,queryString:i=!1,groupId:a}=e,o=h(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[c,u]=p({queryString:i,groupId:a}),[b,j]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,d.Dv)(i);return[a,(0,t.useCallback)((e=>{i&&o.set(e)}),[i,o])]}({groupId:a}),I=(()=>{const e=c??b;return m({value:e,tabValues:o})?e:null})();(0,r.A)((()=>{I&&l(I)}),[I]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,o]),tabValues:o}}var j=i(92303);const I={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=i(74848);function y(e){let{className:n,block:i,selectedValue:t,selectValue:s,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,i=l.indexOf(n),a=r[i].value;a!==t&&(c(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;n=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;n=l[i]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":i},n),children:r.map((e=>{let{value:n,label:i,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.A)("tabs__item",I.tabItem,o?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function g(e){let{lazy:n,children:i,selectedValue:a}=e;const o=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function f(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",I.tabList),children:[(0,x.jsx)(y,{...n,...e}),(0,x.jsx)(g,{...n,...e})]})}function M(e){const n=(0,j.A)();return(0,x.jsx)(f,{...e,children:u(e.children)},String(n))}},34439:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDAxIiB3aWR0aD0iMTI5LjUiIGhlaWdodD0iMjM5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIj48ZGVmcyBpZD0iU3ZnanNEZWZzMTAwMiI+PC9kZWZzPjxnIGlkPSJTdmdqc0cxMDA4Ij48cGF0aCBpZD0iU3ZnanNQYXRoMTAwOSIgZD0iTTY1IDI1TDY1IDExOS41TDY1IDExOS41TDY1IDIxNCIgc3Ryb2tlPSIjMzIzMjMyIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiPjwvcGF0aD48L2c+PGcgaWQ9IlN2Z2pzRzEwMTAiIHRyYW5zZm9ybT0ibWF0cml4KDYuMTIzMjMzOTk1NzM2NzY2ZS0xNywxLC0xLDYuMTIzMjMzOTk1NzM2NzY2ZS0xNywxMDUsMjcpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAxMSIgZD0iTSAwIDBMIDE4NCAwTCAxNzQgMjBMIDEwIDIwTCAwIDBaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTIiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDEzIiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIxNDhweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSItMC42MjUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAxNCIgdHJhbnNmb3JtPSJtYXRyaXgoLTEuODM2OTcwMTk4NzIxMDI5N2UtMTYsLTEsMSwtMS44MzY5NzAxOTg3MjEwMjk3ZS0xNiwyNS41MDAwMDAwMDAwMDAwMTgsMjEzLjUpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAxNSIgZD0iTSAwIDBMIDE4NyAwTCAxNzcgMjBMIDEwIDIwTCAwIDBaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTYiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDE3IiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIxNTBweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSItMC42MjUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48L3RleHQ+PC9nPjwvZz48L3N2Zz4="},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var t=i(96540);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);