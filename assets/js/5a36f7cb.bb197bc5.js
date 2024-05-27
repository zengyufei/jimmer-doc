"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4980],{56664:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var i=t(74848),l=t(28453),a=t(11470),r=t(19365),o=t(74400);const s={sidebar_position:5,title:"Final Usage"},c=void 0,d={id:"quick-view/get-started/usage",title:"Final Usage",description:"Jimmer's Two Usages",source:"@site/docs/quick-view/get-started/usage.mdx",sourceDirName:"quick-view/get-started",slug:"/quick-view/get-started/usage",permalink:"/jimmer-doc/docs/quick-view/get-started/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/quick-view/get-started/usage.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Final Usage"},sidebar:"tutorialSidebar",previous:{title:"Generate Code",permalink:"/jimmer-doc/docs/quick-view/get-started/generate-code"},next:{title:"Standard Examples",permalink:"/jimmer-doc/docs/quick-view/standard-demo"}},u={},h=[{value:"SqlClient",id:"sqlclient",level:2},{value:"Query",id:"query",level:2},{value:"Save",id:"save",level:2},{value:"Save Short Associations",id:"save-short-associations",level:3},{value:"Save Long Associations",id:"save-long-associations",level:3},{value:"Delete",id:"delete",level:2}];function m(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Jimmer's Two Usages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Use Jimmer's Spring Boot Starter"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Directly use the underlying SqlClient"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Jimmer has complete sample projects. For how to use Jimmer's Spring Boot Starter, please refer to the examples. This article discusses using the underlying sqlClient directly without Spring."}),"\n",(0,i.jsx)(n.h2,{id:"sqlclient",children:"SqlClient"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"SqlClient"})," is the lowest-level API in Jimmer"]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Java"}),(0,i.jsx)("td",{children:"org.babyfish.jimmer.sql.JSqlClient"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Kotlin"}),(0,i.jsx)("td",{children:"org.babyfish.jimmer.sql.kt.KSqlClient"})]})]}),"\n",(0,i.jsx)(n.p,{children:"You need to create a global object of this type, which is the API entry point for all ORM behaviors of Jimmer."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"../../configuration/multi-datasources",children:"Multiple data sources"})," require creating multiple global objects.\nHowever, here we discuss the most common case of a single data source, where one global object is sufficient."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Since we are using the Jimmer Spring Boot Starter, in this case, please specify the following configuration in ",(0,i.jsx)(n.code,{children:"application.yml"})," ",(0,i.jsxs)(n.em,{children:["(or ",(0,i.jsx)(n.code,{children:"application.properties"}),")"]})]}),"\n",(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(r.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"spring:\n    datasource:\n        driver-class-name: com.mysql.cj.jdbc.Driver\n        url: jdbc:mysql://localhost:3306/jimmer_demo\n        username: root\n        password: 123456\njimmer:\n    dialect: org.babyfish.jimmer.sql.dialect.MySqlDialect\n    show-sql: true\n    pretty-sql: true\n    database-validation-mode: ERROR\n"})})}),(0,i.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"spring:\n    datasource:\n        driver-class-name: com.mysql.cj.jdbc.Driver\n        url: jdbc:mysql://localhost:3306/jimmer_demo\n        username: root\n        password: 123456\njimmer:\n    #highlight-next-line\n    language: kotlin // This is important for kotlin\n    dialect: org.babyfish.jimmer.sql.dialect.MySqlDialect\n    show-sql: true\n    pretty-sql: true\n    database-validation-mode: ERROR\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"The Jimmer Spring Boot Starter will automatically create this global object"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note that for Kotlin, in order to create ",(0,i.jsx)(n.code,{children:"KSqlClient"})," instead of ",(0,i.jsx)(n.code,{children:"JSqlClient"}),", you need to configure ",(0,i.jsx)(n.code,{children:"jimmer.language = kotlin"})," in ",(0,i.jsx)(n.code,{children:"application.yml"}),"/",(0,i.jsx)(n.code,{children:"application.properties"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["Therefore, you can directly inject an object of type ",(0,i.jsx)(n.code,{children:"JSqlClient"}),"/",(0,i.jsx)(n.code,{children:"KSqlClient"})," anywhere."]}),(0,i.jsxs)(n.p,{children:["The subsequent code in this article will assume there is a ",(0,i.jsx)(n.code,{children:"sqlClient"})," variable and use it, but it will not provide an explanation, as a detailed explanation has already been given here."]})]}),"\n",(0,i.jsx)(n.h2,{id:"query",children:"Query"}),"\n",(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(r.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'package com.example.model.repository;  \n\nimport org.babyfish.jimmer.sql.JSqlClient;\nimport org.babyfish.jimmer.sql.fetcher.Fetcher;\nimport org.babyfish.jimmer.Page;  \n\nimport com.example.model.Book;\nimport com.example.model.BookTable;  \n\npublic class BookRepository {\n\n    private static final BookTable T = BookTable.$;\n\n    public Page<Book> findBooks(  \n\n            int pageIndex, // Starts from 0\n            int pageSize,\n            \n            @Nullable Fetcher<Book> fetcher,\n\n            // e.g. "name asc, edtion desc"\n            @Nullable String sortCode, \n            \n            @Nullable String name,\n            @Nullable BigDecimal minPrice,\n            @Nullable BigDecimal maxPrice, \n            @Nullable String storeName,\n            @Nullable String storeWebsite,\n            @Nullable String authorName\n    ) {\n        return sqlClient\n                .createQuery(T)\n                .where(T.name().ilikeIf(name)) \n                .where(T.price().betweenIf(minPrice, maxPrice))\n                .where(T.store().name().ilikeIf(storeName))\n                .where(T.store().website().ilikeIf(storeWebsite))\n                .where(\n                        T.authors(author -> \n                                Predicate.or(\n                                        author.firstName().ilikeIf(authorName),  \n                                        author.lastName().ilikeIf(authorName)\n                                )\n                        )\n                )\n                .where(T.authors(author -> author.gender().eqIf(authorGender)))\n                .orderBy(\n                        Order.makeOrders(\n                                T,\n                                sortCode != null ?  \n                                        sortCode :  \n                                        "name asc, edition desc"\n                        )\n                )\n                .select(\n                    T.fetch(fetcher)\n                )\n                .fetchPage(pageIndex, pageSize);\n    }\n} \n'})})}),(0,i.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'package com.example.model.repository  \n\nimport org.babyfish.jimmer.sql.kt.KSqlClient\nimport org.babyfish.jimmer.sql.fetcher.Fetcher \nimport org.babyfish.jimmer.Page  \n\nimport com.example.model.*  \n\nclass BookRepository {\n\n    fun findBooks(\n        \n        pageIndex: Int, // Starts from 0 \n        pageSize: Int = 10, \n\n        fetcher: Fetcher<Book>? = null,\n\n        sortCode: String = "name asc, edition desc", \n\n        name: String? = null,\n        minPrice: BigDecimal? = null, \n        maxPrice: BigDecimal? = null,\n        storeName: String? = null, \n        storeWebsite: String? = null,\n        authorName: String? = null, \n        authorGender: Gender? = null  \n    ): Page<Book> =\n        sqlClient\n            .createQuery(Book::class) {\n                where(table.name `ilike?` name)\n                where(table.price.`between?`(minPrice, maxPrice))\n                where(table.store.name `ilike?` storeName)\n                where(table.store.website `ilike?` storeWebsite)\n                where += table.authors {  \n                    or(  \n                        firstName `ilike?` authorName,  \n                        lastName `ilike?` authorName  \n                    )\n                }\n                where += table.authors { gender `eq?` authorGender } \n                orderBy(table.makeOrders(sortCode))\n                select( \n                    table.fetch(fetcher)\n                )\n            }\n            .fetchPage(pageIndex, pageSize) \n}\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Users can create ",(0,i.jsx)(n.code,{children:"BookRepository"})," objects and combine the parameters in various ways to test:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Dynamic queries ",(0,i.jsx)(n.em,{children:"(including dynamic joins, implicit subqueries)"})]}),"\n",(0,i.jsx)(n.li,{children:"Dynamic sorting"}),"\n",(0,i.jsx)(n.li,{children:"Paged queries"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Details omitted here."}),"\n",(0,i.jsx)(n.h2,{id:"save",children:"Save"}),"\n",(0,i.jsx)(n.h3,{id:"save-short-associations",children:"Save Short Associations"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"src/main/dto"})," directory, create any file with extension ",(0,i.jsx)(n.code,{children:"dto"})," and edit its code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"export com.example.model.Book\n    -> package com.example.model.dto  \n\ninput BookInput {\n    #allScalars(this) \n    id(store) // as storeId\n    id(authors) as authorIds  \n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Compile to generate the Java/Kotlin DTO type ",(0,i.jsx)(n.code,{children:"com.example.model.dto.BookInput"}),":"]}),"\n",(0,i.jsxs)(o.l,{buttonText:"View Generated Code",title:"Generated BookInput",children:[(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(r.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"package package com.example.model.dto;  \n\npublic class BookInput implements Input<Book> {  \n\n    @Nullable\n    private Long id;\n\n    private String name;   \n\n    private int edition;\n\n    private BigDecimal price;\n\n    @Nullable  \n    private Long storeId;\n\n    private List<Long> authorIds;  \n\n    ...other members omitted...\n}\n"})})}),(0,i.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"class BookInput(\n    val id: Long? = null, \n    val name: String,\n    val edition: Int,\n    val price: BigDecimal,\n    val storeId: Long? = null,\n    val authorIds: List<Long> = emptyList()  \n) : Input<Book> {\n    ...other members omitted... \n}\n"})})})]}),(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Book.id"})," on entities cannot be null, but ",(0,i.jsx)(n.code,{children:"BookInput.id"})," on DTOs here is allowed to be null.",(0,i.jsx)(n.br,{}),"\n","See ",(0,i.jsx)(n.a,{href:"../../object/view/dto-language#32-input-specific-functionalities",children:"DTO Language/3.2. Input-specific functionalities"})]})})]}),"\n",(0,i.jsxs)(n.p,{children:["Then modify the ",(0,i.jsx)(n.code,{children:"BookRepository"}),":"]}),"\n",(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(r.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public class BookRepository {\n\n    ...other members omitted...\n\n    public long saveBook(BookInput input) {\n        return sqlClient\n            .save(input) \n            .execute()\n            .getModifiedEntity()  \n            // Return auto-generated id if `input.id` is null\n            .getId(); \n    }  \n}\n"})})}),(0,i.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"class BookRepository {\n\n    ...other members omitted...  \n\n    fun saveBook(input: BookInput): Long =  \n        sqlClient \n            .save(input)\n            .execute() \n            .modifiedEntity\n            // Return auto-generated id if `input.id` is null\n            .id\n}\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"save-long-associations",children:"Save Long Associations"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"src/main/dto"})," directory, create any file with extension ",(0,i.jsx)(n.code,{children:"dto"})," and edit its code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"export com.example.model.BookStore \n    -> package com.example.model.dto  \n\ninput CompositeBookStoreInput {\n    #allScalars(this)\n    books { \n        #allScalars(this)\n        -id\n    }  \n} \n"})}),"\n",(0,i.jsxs)(n.p,{children:["Compile to generate the Java/Kotlin DTO type ",(0,i.jsx)(n.code,{children:"com.example.model.dto.CompositeBookStoreInput"}),":"]}),"\n",(0,i.jsxs)(o.l,{buttonText:"View Generated Code",title:"Generated CompositeBookStoreInput",children:[(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(r.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"package package com.example.model.dto;\n\npublic class CompositeBookStoreInput implements Input<BookStore> {\n\n    @Nullable\n    private Long id;\n\n    private String name;  \n\n    @Nullable\n    private String website;\n\n    private List<TargetOf_books> books;\n\n    ...other members omitted...\n\n    public static class TargetOf_books implements Input<Book> {\n\n        private String name;\n\n        private int edition;\n\n        private BigPrice price;  \n\n        ...other members omitted...\n    }\n}\n"})})}),(0,i.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"class CompositeBookStoreInput(\n    val id: Long? = null,\n    val name: String, \n    val website: String? = null,\n    val books: List<TargetOf_books> = emptyList() \n) : Input<BookStore> {\n    ...other members omitted...\n\n    class TargetOf_books(\n        val name: String,\n        val edition: Int, \n        val price: BigDecimal \n    ) : Input<Book> {\n        ...other members omitted...\n    }\n}\n"})})})]}),(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"BookStore.id"})," on entities cannot be null, but ",(0,i.jsx)(n.code,{children:"CompositeBookStoreInput.id"})," on DTOs here is allowed to be null.",(0,i.jsx)(n.br,{}),"\n","See ",(0,i.jsx)(n.a,{href:"../../object/view/dto-language#32-input-specific-functionalities",children:"DTO Language/3.2. Input-specific functionalities"})]})})]}),"\n",(0,i.jsxs)(n.p,{children:["Then create the ",(0,i.jsx)(n.code,{children:"BookStoreRepository"}),":"]}),"\n",(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(r.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public class BookStoreRepository {\n\n    public long saveBookStore(CompositeBookStoreInput input) {\n        return sqlClient\n            .save(input)\n            .execute()\n            .getModifiedEntity()  \n            // Return auto-generated id if `input.id` is null\n            .getId();\n    }\n} \n"})})}),(0,i.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"class BookStoreRepository {\n\n    fun saveBookStore(input: CompositeBookStoreInput): Long =\n        sqlClient\n            .save(input) \n            .execute()\n            .modifiedEntity  \n            // Return auto-generated id if `input.id` is null\n            .id  \n}\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"delete",children:"Delete"}),"\n",(0,i.jsxs)(n.p,{children:["Modify the ",(0,i.jsx)(n.code,{children:"BookRepository"}),":"]}),"\n",(0,i.jsxs)(a.A,{groupId:"language",children:[(0,i.jsx)(r.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public class BookRepository {\n\n    ...other members omitted...\n\n    public void deleteBook(long id) {\n        sqlClient.deleteById(Book.class, id);\n    }\n}\n"})})}),(0,i.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"class BookRepository {\n\n    ...other members omitted...\n\n    fun deleteBook(id: Long) {\n        sqlClient.deleteById(Book::class, id) \n    }  \n}\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var i=t(18215);const l={tabItem:"tabItem_Ymn6"};var a=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(l.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var i=t(96540),l=t(18215),a=t(23104),r=t(56347),o=t(205),s=t(57485),c=t(31682),d=t(89466);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:l}}=e;return{value:n,label:t,attributes:i,default:l}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const l=(0,r.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(l.location.search);n.set(a,e),l.replace({...l.location,search:n.toString()})}),[a,l])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,a=h(e),[r,s]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[c,u]=p({queryString:t,groupId:l}),[g,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,a]=(0,d.Dv)(t);return[l,(0,i.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:l}),b=(()=>{const e=c??g;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&s(b)}),[b]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=s.indexOf(n),l=o[t].value;l!==i&&(c(n),r(l))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>s.push(e),onKeyDown:u,onClick:d,...a,className:(0,l.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:l}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===l));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function k(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,l.A)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(f,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,j.jsx)(k,{...e,children:u(e.children)},String(n))}},66971:(e,n,t)=>{t.d(n,{a:()=>g});var i=t(96540),l=t(72774),a=t(63051),r=t(28968),o=t(48875),s=t(44676),c=t(47859),d=t(4671),u=t(99343),h=t(7324),m=t(39781),p=t(74848);const g=(0,i.memo)((e=>{let{open:n,fullScreen:t=!1,title:o,maxWidth:g="md",onClose:b,children:j}=e;const[v,f]=(0,i.useState)(t),k=(0,i.useCallback)((()=>{f((e=>!e))}),[]);return(0,p.jsxs)(a.A,{open:n,onClose:b,fullScreen:v,TransitionComponent:x,maxWidth:g,children:[(0,p.jsx)(l.A,{sx:{position:"relative"},children:(0,p.jsxs)(s.A,{children:[(0,p.jsx)(c.A,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:o}),(0,p.jsx)(d.A,{onClick:k,style:{color:"white"},children:v?(0,p.jsx)(h.A,{}):(0,p.jsx)(u.A,{})}),(0,p.jsx)(d.A,{"aria-label":"close",onClick:b,style:{color:"white"},children:(0,p.jsx)(m.A,{})})]})}),(0,p.jsx)(r.A,{children:j})]})})),x=i.forwardRef((function(e,n){return(0,p.jsx)(o.A,{direction:"up",ref:n,...e})}))},74400:(e,n,t)=>{t.d(n,{l:()=>o});var i=t(96540),l=t(67512),a=t(66971),r=t(74848);const o=(0,i.memo)((e=>{let{buttonText:n,fullScreen:t=!1,title:o=n,variant:s="outlined",maxWidth:c,useOriginalText:d=!0,children:u}=e;const[h,m]=(0,i.useState)(!1),p=(0,i.useCallback)((e=>{m(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),g=(0,i.useCallback)((()=>{m(!1)}),[]),x=d?{textTransform:"none"}:{};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.A,{"data-is-view-more-button":"true",onClick:p,variant:s,size:"small",style:x,children:n}),(0,r.jsx)(a.a,{open:h,onClose:g,title:o,maxWidth:c,fullScreen:t,children:u})]})}))},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const l={},a=i.createContext(l);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);