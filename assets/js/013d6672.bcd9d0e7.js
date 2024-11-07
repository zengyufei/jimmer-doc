"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3908],{52411:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>j,frontMatter:()=>o,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"mapping/advanced/logical-deleted/join-table","title":"Join Table","description":"To enable logical deletion for the middle table, the property needs to be specified for the org.babyfish.jimmer.sql.JoinTable annotation to indicate whether the data is normal or has been deleted.","source":"@site/docs/mapping/advanced/logical-deleted/join-table.mdx","sourceDirName":"mapping/advanced/logical-deleted","slug":"/mapping/advanced/logical-deleted/join-table","permalink":"/jimmer-doc/docs/mapping/advanced/logical-deleted/join-table","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/advanced/logical-deleted/join-table.mdx","tags":[],"version":"current","lastUpdatedAt":1710161015000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Join Table"},"sidebar":"tutorialSidebar","previous":{"title":"Entity Table","permalink":"/jimmer-doc/docs/mapping/advanced/logical-deleted/entity"},"next":{"title":"View Properites","permalink":"/jimmer-doc/docs/mapping/advanced/view/"}}');var t=l(74848),i=l(28453),r=l(11470),s=l(19365);const o={sidebar_position:2,title:"Join Table"},d=void 0,c={},u=[{value:"Usage",id:"usage",level:2},{value:"Multi-Version Data",id:"multi-version-data",level:2}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["To enable logical deletion for the middle table, the property needs to be specified for the ",(0,t.jsx)(n.code,{children:"org.babyfish.jimmer.sql.JoinTable"})," annotation to indicate whether the data is normal or has been deleted."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Once a logical deletion attribute is configured for the middle table, when any entity on either end is logically deleted, all related middle table records will be logically deleted."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["All JOIN operations for the current association will be automatically added with the condition ",(0,t.jsx)(n.code,{children:"and logical deletion flag <> already deleted"})," to give the illusion that some associations have been deleted."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"The logical deletion flag attribute can be one of the following types:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"boolean: must be non-null"}),"\n",(0,t.jsx)(n.li,{children:"int: must be non-null"}),"\n",(0,t.jsx)(n.li,{children:"enum: must be non-null"}),"\n",(0,t.jsx)(n.li,{children:"long/Long: can be null or non-null"}),"\n",(0,t.jsx)(n.li,{children:"UUID: must be non-null"}),"\n",(0,t.jsx)(n.li,{children:"Date: must be nullable"}),"\n"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Type"}),(0,t.jsx)("th",{children:"Code"}),(0,t.jsx)("th",{children:"Deleted State"}),(0,t.jsx)("th",{children:"Initialized State"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"2",children:"boolean"}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...Omit other arguments...,\n    logicalDeletedFilter = \n        @JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED",\n            type = boolean.class,\n            value = "true"\n        )\n)\nList<Author> authors();\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...Omit other arguments...,\n    logicalDeletedFilter = \n        JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED",\n            type = boolean.class,\n            value = "true"\n        )\n)\nval authors: List<Author>\n'})})})]})}),(0,t.jsx)("td",{children:"true"}),(0,t.jsx)("td",{children:"false"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...Omit other arguments...,\n    logicalDeletedFilter = \n        @JoinTable.LogicalDeletedFilter(\n            columnName = "ACTIVE",\n            type = boolean.class,\n            value = "false"\n        )\n)\nList<Author> authors();\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...Omit other arguments...,\n    logicalDeletedFilter = \n        JoinTable.LogicalDeletedFilter(\n            columnName = "ACTIVE",\n            type = boolean.class,\n            value = "false"\n        )\n)\nval authors: List<Author>\n'})})})]})}),(0,t.jsx)("td",{children:"false"}),(0,t.jsx)("td",{children:"true"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"int"}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...Omit other arguments...,\n    logicalDeletedFilter = \n        @JoinTable.LogicalDeletedFilter(\n            columnName = "STATE",\n            type = int.class,\n            value = "1",\n            intializedValue = "0"\n        )\n)\nList<Author> authors();\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...Omit other arguments...,\n    logicalDeletedFilter = \n        JoinTable.LogicalDeletedFilter(\n            columnName = "STATE",\n            type = int.class,\n            value = "1",\n            intializedValue = "0"\n        )\n)\nval authors: List<Author>\n'})})})]})}),(0,t.jsx)("td",{children:"1"}),(0,t.jsx)("td",{children:"0"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Enum"}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...Omit other arguments...,\n    logicalDeletedFilter = \n        @JoinTable.LogicalDeletedFilter(\n            columnName = "STATE",\n            type = State.class,\n            value = "DELETED",\n            intializedValue = "INITIALIZED"\n        )\n)\nList<Author> authors();\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...Omit other arguments...,\n    logicalDeletedFilter = \n        JoinTable.LogicalDeletedFilter(\n            columnName = "STATE",\n            type = State.class,\n            value = "DELETED",\n            intializedValue = "INITIALIZED"\n        )\n)\nval authors: List<Author>\n'})})})]})}),(0,t.jsx)("td",{children:"DELETED"}),(0,t.jsx)("td",{children:"INITIALIZED"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)(n.p,{children:"\u2729"}),(0,t.jsx)(n.p,{children:"long"})]}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...Omit other arguments...,\n    logicalDeletedFilter = \n        @JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_MILLIS",\n            type = long.class\n        )\n)\nList<Author> authors();\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...Omit other arguments...,\n    logicalDeletedFilter = \n        JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_MILLIS",\n            type = long.class\n        )\n)\nval authors: List<Author>\n'})})})]})}),(0,t.jsx)("td",{children:"Current milliseconds"}),(0,t.jsx)("td",{children:"0L"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)(n.p,{children:"\u2729"}),(0,t.jsx)(n.p,{children:"Nullable Long"})]}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...Omit other arguments...,\n    logicalDeletedFilter = \n        @JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_MILLIS",\n            type = Long.class,\n            nullable = true\n        )\n)\nList<Author> authors();\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...Omit other arguments...,\n    logicalDeletedFilter = \n        JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_MILLIS",\n            type = Long.class,\n            nullable = true\n        )\n)\nval authors: List<Author>\n'})})})]})}),(0,t.jsx)("td",{children:"Current milliseconds"}),(0,t.jsx)("td",{children:"null"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)(n.p,{children:"\u2729"}),(0,t.jsx)(n.p,{children:"UUID"})]}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...Omit other arguments...,\n    logicalDeletedFilter = \n        @JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_DATA",\n            type = UUID.class\n        )\n)\nList<Author> authors();\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...Omit other arguments...,\n    logicalDeletedFilter = \n        @JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_DATA",\n            type = UUID.class\n        )\n)\nval authors: List<Author>\n'})})})]})}),(0,t.jsx)("td",{children:"Random UUID"}),(0,t.jsx)("td",{children:"UUID with all bytes as 0"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)(n.p,{children:"\u2729"}),(0,t.jsx)(n.p,{children:"Nullable UUID"})]}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...Omit other arguments...,\n    logicalDeletedFilter = \n        @JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_DATA",\n            type = UUID.class,\n            nullable = true\n        )\n)\nList<Author> authors();\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...Omit other arguments...,\n    logicalDeletedFilter = \n        JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_DATA",\n            type = UUID.class,\n            nullable = true\n        )\n)\nval authors: List<Author>\n'})})})]})}),(0,t.jsx)("td",{children:"Random UUID"}),(0,t.jsx)("td",{children:"null"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"2",children:(0,t.jsx)(n.p,{children:"Nullable LocalDateTime"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.p,{children:"\u2729"}),(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...Omit other arguments...,\n    logicalDeletedFilter = \n        @JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_TIME",\n            type = LocalDateTime.class,\n            nullable = true,\n            value = "now"\n        )\n)\nList<Author> authors();\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...Omit other arguments...,\n    logicalDeletedFilter = \n        JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_TIME",\n            type = LocalDateTime.class,\n            nullable = true,\n            value = "now"\n        )\n)\nval authors: List<Author>\n'})})})]})]}),(0,t.jsx)("td",{children:"Current Time"}),(0,t.jsx)("td",{children:"null"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...Omit other arguments...,\n    logicalDeletedFilter = \n        @JoinTable.LogicalDeletedFilter(\n            columnName = "CREATED_TIME",\n            type = LocalDateTime.class,\n            nullable = true,\n            value = "null"\n        )\n)\nList<Author> authors();\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...Omit other arguments...,\n    logicalDeletedFilter = \n        JoinTable.LogicalDeletedFilter(\n            columnName = "CREATED_TIME",\n            type = LocalDateTime.class,\n            nullable = true,\n            value = "null"\n        )\n)\nval authors: List<Author>\n'})})})]})}),(0,t.jsx)("td",{children:"null"}),(0,t.jsx)("td",{children:"Current Time"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Where"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u2729 in the first or second column indicates that the current configuration method supports multi-version data to be discussed in the next section."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Supporting logical deletion without considering multi-version data issues is less mature. Therefore, it is recommended to use the logical deletion configuration that supports multi-version data."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Current milliseconds"}),", the default behavior is ",(0,t.jsx)(n.code,{children:"System.currentMillis()"}),", which is the behavior of the default ",(0,t.jsx)(n.code,{children:"org.babyfish.jimmer.sql.meta.LogicalDeletedLongGenerator"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If this behavior is unsatisfactory, a custom class can be implemented that implements the ",(0,t.jsx)(n.code,{children:"LogicalDeletedValueGenerator<Long>"})," interface, and configured with:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"@JoinTable.LogicalDeletedFilter(generatedType = YourGenerator.class)"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@JoinTable.LogicalDeletedFilter(generatedRef = YourGenerator.class)"}),", where ",(0,t.jsx)(n.code,{children:"generatorRef"})," indicates the name of the object in the IOC container management framework"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Random UUID"}),", the default behavior is ",(0,t.jsx)(n.code,{children:"UUID.randomUUID()"}),", which is the behavior of the default ",(0,t.jsx)(n.code,{children:"org.babyfish.jimmer.sql.meta.LogicalDeletedUUIDGenerator"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If this behavior is unsatisfactory, a custom class can be implemented that implements the ",(0,t.jsx)(n.code,{children:"LogicalDeletedValueGenerator<UUID>"})," interface, and configured with:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"@JoinTable.LogicalDeletedFilter(generatedType = YourGenerator.class)"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@JoinTable.LogicalDeletedFilter(generatedRef = YourGenerator.class)"}),", where ",(0,t.jsx)(n.code,{children:"generatorRef"})," indicates the name of the object in the IOC container management framework"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"multi-version-data",children:"Multi-Version Data"}),"\n",(0,t.jsx)(n.p,{children:"Logical deletion does not actually delete data, it only hides it. This means that data appears in multiple versions."}),"\n",(0,t.jsx)(n.p,{children:"Take the configuration that supports multi-version data as an example:"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    name = "BOOK_AUTHOR_MAPPING",\n    joinColumnName = "BOOK_ID",\n    inverseJoinColumnName = "AUTHOR_ID", \n    logicalDeletedFilter = \n        @JoinTable.LogicalDeletedFilter(\n            columnName = "DELETED_MILLIS",\n            type = long.class  \n        )  \n)  \nList<Author> authors(); \n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    name = "BOOK_AUTHOR_MAPPING",  \n    joinColumnName = "BOOK_ID",\n    inverseJoinColumnName = "AUTHOR_ID",|\n    logicalDeletedFilter =  \n        @JoinTable.LogicalDeletedFilter(  \n            columnName = "DELETED_MILLIS",\n            type = long.class  \n        )\n)  \nval authors: List<Author>  \n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["For example, the ",(0,t.jsx)(n.code,{children:"BOOK_AUTHOR_MAPPING"})," table has three columns, all as part of the primary key"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"alter table BOOK_AUTHOR_MAPPING\n    add pk_BOOK_AUTHOR_MAPPING  \n        primary key(  \n            BOOK_ID,   \n            AUTHOR_ID,  \n            DELETED_MILLIS\n        );  \n"})}),"\n",(0,t.jsx)(n.p,{children:"If the table input is as follows:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"BOOK_ID"}),(0,t.jsx)(n.th,{children:"AUTHOR_ID"}),(0,t.jsx)(n.th,{children:"DELETED_MILLIS"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"97"}),(0,t.jsx)(n.td,{children:"23"}),(0,t.jsx)(n.td,{children:"0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"97"}),(0,t.jsx)(n.td,{children:"23"}),(0,t.jsx)(n.td,{children:"1708796420956"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"97"}),(0,t.jsx)(n.td,{children:"23"}),(0,t.jsx)(n.td,{children:"1708234681901"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"249"}),(0,t.jsx)(n.td,{children:"11"}),(0,t.jsx)(n.td,{children:"0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"249"}),(0,t.jsx)(n.td,{children:"11"}),(0,t.jsx)(n.td,{children:"1708722582793"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"249"}),(0,t.jsx)(n.td,{children:"11"}),(0,t.jsx)(n.td,{children:"1708664484823"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"There are 4 associated data records hidden, leaving only two valid data records:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"BOOK_ID"}),(0,t.jsx)(n.th,{children:"AUTHOR_ID"}),(0,t.jsx)(n.th,{children:"DELETED_MILLIS"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"97"}),(0,t.jsx)(n.td,{children:"23"}),(0,t.jsx)(n.td,{children:"0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"249"}),(0,t.jsx)(n.td,{children:"11"}),(0,t.jsx)(n.td,{children:"0"})]})]})]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,l)=>{l.d(n,{A:()=>r});l(96540);var a=l(18215);const t={tabItem:"tabItem_Ymn6"};var i=l(74848);function r(e){let{children:n,hidden:l,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,r),hidden:l,children:n})}},11470:(e,n,l)=>{l.d(n,{A:()=>y});var a=l(96540),t=l(18215),i=l(23104),r=l(56347),s=l(205),o=l(57485),d=l(31682),c=l(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:l}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:l,attributes:a,default:t}}=e;return{value:n,label:l,attributes:a,default:t}}))}(l);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function j(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:l}=e;const t=(0,r.W6)(),i=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,o.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function m(e){const{defaultValue:n,queryString:l=!1,groupId:t}=e,i=h(e),[r,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=l.find((e=>e.default))??l[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[d,u]=x({queryString:l,groupId:t}),[m,g]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,c.Dv)(l);return[t,(0,a.useCallback)((e=>{l&&i.set(e)}),[l,i])]}({groupId:t}),b=(()=>{const e=d??m;return j({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{b&&o(b)}),[b]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!j({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=l(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var p=l(74848);function T(e){let{className:n,block:l,selectedValue:a,selectValue:r,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const n=e.currentTarget,l=o.indexOf(n),t=s[l].value;t!==a&&(d(n),r(t))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const l=o.indexOf(e.currentTarget)+1;n=o[l]??o[0];break}case"ArrowLeft":{const l=o.indexOf(e.currentTarget)-1;n=o[l]??o[o.length-1];break}}n?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":l},n),children:s.map((e=>{let{value:n,label:l,attributes:i}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...i,className:(0,t.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":a===n}),children:l??n},n)}))})}function v(e){let{lazy:n,children:l,selectedValue:i}=e;const r=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function D(e){const n=m(e);return(0,p.jsxs)("div",{className:(0,t.A)("tabs-container",b.tabList),children:[(0,p.jsx)(T,{...n,...e}),(0,p.jsx)(v,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,p.jsx)(D,{...e,children:u(e.children)},String(n))}},28453:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>s});var a=l(96540);const t={},i=a.createContext(t);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);