"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1970],{47102:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"query/object-fetcher/props","title":"\u666e\u901a\u5c5e\u6027","description":"\u6293\u53d6\u6807\u91cf\u5b57\u6bb5","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/object-fetcher/props.mdx","sourceDirName":"query/object-fetcher","slug":"/query/object-fetcher/props","permalink":"/jimmer-doc/zh/docs/query/object-fetcher/props","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/query/object-fetcher/props.mdx","tags":[],"version":"current","lastUpdatedAt":1704100403000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"\u666e\u901a\u5c5e\u6027"},"sidebar":"tutorialSidebar","previous":{"title":"\u57fa\u672c\u7528\u6cd5","permalink":"/jimmer-doc/zh/docs/query/object-fetcher/usage"},"next":{"title":"\u5173\u8054\u5c5e\u6027","permalink":"/jimmer-doc/zh/docs/query/object-fetcher/association"}}');var r=l(74848),a=l(28453),i=l(11470),s=l(19365);const c={sidebar_position:2,title:"\u666e\u901a\u5c5e\u6027"},o=void 0,d={},h=[{value:"\u6293\u53d6\u6807\u91cf\u5b57\u6bb5",id:"\u6293\u53d6\u6807\u91cf\u5b57\u6bb5",level:2},{value:"\u6293\u53d6\u591a\u4e2a\u5b57\u6bb5",id:"\u6293\u53d6\u591a\u4e2a\u5b57\u6bb5",level:2},{value:"\u6293\u53d6\u6240\u6709\u6807\u91cf\u5b57\u6bb5",id:"\u6293\u53d6\u6240\u6709\u6807\u91cf\u5b57\u6bb5",level:2},{value:"\u8d1f\u5c5e\u6027(\u6392\u9664\u4e0d\u9700\u8981\u7684\u5c5e\u6027)",id:"\u8d1f\u5c5e\u6027\u6392\u9664\u4e0d\u9700\u8981\u7684\u5c5e\u6027",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u6293\u53d6\u6807\u91cf\u5b57\u6bb5",children:"\u6293\u53d6\u6807\u91cf\u5b57\u6bb5"}),"\n",(0,r.jsx)(n.p,{children:"\u6807\u91cf\u5b57\u6bb5\u5373\u6570\u636e\u5e93\u8868\u4e2d\u6240\u6709\u975e\u5173\u8054\u5b57\u6bb5\u3002\u4ee5\u6293\u53d6\u4e66\u7c4d\u540d\u79f0\u4e3a\u4f8b\uff1a"}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"\nBookTable book = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(\n        book.fetch(\n            // highlight-next-line\n            Fetchers.BOOK_FETCHER.name()\n        )\n    )\n    .execute();\n\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"\nval books = sqlClient\n    .createQuery(Book::class) {\n        where(table.edition.eq(3))\n        select(\n            table.fetchBy { \n                // highlight-next-line\n                name()\n            }\n        )\n    }\n    .execute()\n\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u5bf9Java\u800c\u8a00\uff0cAnnotation processor\u4f1a\u4e3a\u6bcf\u4e00\u4e2a\u5b9e\u4f53\u63a5\u53e3\u81ea\u52a8\u751f\u6210\u4e00\u4e2aFetcher\u7c7b\uff0c\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5c31\u662f",(0,r.jsx)(n.code,{children:"BookFetcher"})]})}),"\n",(0,r.jsx)(n.p,{children:"\u751f\u6210\u7684SQL\u5982\u4e0b:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, \n    /* highlight-next-line */\n    tb_1_.NAME \nfrom BOOK as tb_1_ \nwhere tb_1_.EDITION = ?\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["Java\u4ee3\u7801\u6ca1\u6709\u8c03\u7528BookFetcher\u7684",(0,r.jsx)(n.code,{children:"id()"}),"\u65b9\u6cd5\uff0c\u4f46\u662f\uff0c\u6211\u4eec\u770b\u5230SQL\u8bed\u53e5\u4ecd\u7136\u67e5\u8be2\u4e86\u5bf9\u8c61\u7684id\u5c5e\u6027\u3002"]}),(0,r.jsx)(n.p,{children:"id\u5c5e\u6027\u88ab\u7279\u6b8a\u5bf9\u5f85\uff0c\u603b\u662f\u4f1a\u88ab\u67e5\u8be2\uff0c\u5e76\u4e0d\u53d7\u5bf9\u8c61\u6293\u53d6\u5668\u7684\u63a7\u5236\u3002"}),(0,r.jsxs)(n.p,{children:["\u4e8b\u5b9e\u4e0a\uff0c\u81ea\u52a8\u751f\u6210BookFetcher\u7c7b\u4e2d\u4e5f\u6ca1\u6709",(0,r.jsx)(n.code,{children:"id()"}),"\u65b9\u6cd5\uff0c\u56e0\u4e3a\u4e0d\u9700\u8981\u3002"]})]}),"\n",(0,r.jsx)(n.p,{children:"\u6253\u5370\u7684\u7ed3\u679c\u5982\u4e0b\uff08\u539f\u8f93\u51fa\u662f\u7d27\u51d1\u7684\uff0c\u4e3a\u4e86\u65b9\u4fbf\u9605\u8bfb\uff0c\u8fd9\u91cc\u8fdb\u884c\u4e86\u683c\u5f0f\u5316\uff09:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "id":3,\n        // highlight-next-line\n        "name":"Learning GraphQL"\n    },\n    ...\u7701\u7565\u5176\u4ed6\u5bf9\u8c61...\n]\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u6293\u53d6\u591a\u4e2a\u5b57\u6bb5",children:"\u6293\u53d6\u591a\u4e2a\u5b57\u6bb5"}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(\n        book.fetch(\n            Fetchers.BOOK_FETCHER\n                // highlight-next-line\n                .name()\n                // highlight-next-line\n                .edition()\n        )\n    )\n    .execute();\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.edition.eq(3))\n        select(\n            table.fetchBy {\n                // highlight-next-line\n                name()\n                // highlight-next-line\n                edition()\n            }\n        )\n    }\n    .execute()\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"\u5bf9\u8c61\u6293\u53d6\u5668\u662f\u4e0d\u53ef\u53d8\u5bf9\u8c61\uff0c\u6bcf\u4e00\u6b21\u94fe\u5f0f\u8c03\u7528\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\u6293\u53d6\u5668\u3002"}),(0,r.jsxs)(n.p,{children:["\u5373\uff0c\u4e0a\u8ff0",(0,r.jsx)(n.strong,{children:"Java"}),"\u4ee3\u7801\u4e2d"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Fetchers.BOOK_FETCHER"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Fetchers.BOOK_FETCHER.name()"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Fetchers.BOOK_FETCHER.name().edition()"})}),"\n"]}),(0,r.jsx)(n.p,{children:"\u662f\u4e09\u4e2a\u4e0d\u540c\u7684\u5bf9\u8c61\u6293\u53d6\u5668\uff0c\u6bcf\u4e00\u4e2a\u90fd\u662f\u4e0d\u53ef\u53d8\u7684\u3002"}),(0,r.jsx)(n.p,{children:"\u5bf9\u8c61\u6293\u53d6\u5668\u662f\u4e0d\u53ef\u53d8\u5bf9\u8c61\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u501f\u52a9\u9759\u6001\u53d8\u91cf\u968f\u610f\u5171\u4eab\u5bf9\u8c61\u6293\u53d6\u5668\u3002"})]}),"\n",(0,r.jsx)(n.p,{children:"\u751f\u6210\u7684SQL\u5982\u4e0b:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, \n    /* highlight-next-line */\n    tb_1_.NAME,\n    /* highlight-next-line */\n    tb_1_.EDITION  \nfrom BOOK as tb_1_ \nwhere tb_1_.EDITION = ?\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6253\u5370\u7684\u7ed3\u679c\u5982\u4e0b\uff08\u539f\u8f93\u51fa\u662f\u7d27\u51d1\u7684\uff0c\u4e3a\u4e86\u65b9\u4fbf\u9605\u8bfb\uff0c\u8fd9\u91cc\u8fdb\u884c\u4e86\u683c\u5f0f\u5316\uff09:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "id":3,\n        // highlight-next-line\n        "name":"Learning GraphQL",\n        // highlight-next-line\n        "edition":1\n    },\n    ...\u7701\u7565\u5176\u4ed6\u5bf9\u8c61...\n]\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u6293\u53d6\u6240\u6709\u6807\u91cf\u5b57\u6bb5",children:"\u6293\u53d6\u6240\u6709\u6807\u91cf\u5b57\u6bb5"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4e00\u4e9b\u573a\u666f\u4e0b\uff0c\u6293\u53d6\u6240\u6709\u975e\u5173\u8054\u5b57\u6bb5\u662f\u975e\u5e38\u5e38\u7528\u7684\u64cd\u4f5c\uff0c\u56e0\u6b64\u63d0\u4f9b\u4e86",(0,r.jsx)(n.code,{children:"allScalarFields()"}),"\u7528\u4e8e\u52a0\u8f7d\u6240\u6709\u975e\u5173\u8054\u5b57\u6bb5\u3002"]}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(\n        book.fetch(\n            // highlight-next-line\n            Fetchers.BOOK_FETCHER.allScalarFields()\n        )\n    )\n    .execute();\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.edition.eq(3))\n        select(\n            table.fetchBy {\n                // highlight-next-line\n                allScalarFields()\n            }\n        )\n    }\n    .execute()\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"\u751f\u6210\u7684SQL\u5982\u4e0b:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, \n    // highlight-start\n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE\n    // highlight-end\nfrom BOOK as tb_1_ \nwhere tb_1_.EDITION = ?\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6253\u5370\u7684\u7ed3\u679c\u5982\u4e0b\uff08\u539f\u8f93\u51fa\u662f\u7d27\u51d1\u7684\uff0c\u4e3a\u4e86\u65b9\u4fbf\u9605\u8bfb\uff0c\u8fd9\u91cc\u8fdb\u884c\u4e86\u683c\u5f0f\u5316\uff09:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "id":3,\n    // highlight-start\n    "name":"Learning GraphQL",\n    "edition":3,\n    "price":51.00\n    // highlight-end\n}\n// \u7701\u7565\u5176\u4ed6\u5bf9\u8c61\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"allScalarFields()"}),"\u53ea\u4f1a\u52a0\u8f7d\u975e\u5173\u8054\u5b57\u6bb5\uff0c\u793a\u4f8b\u4e2d\u53ef\u4ee5\u770b\u5230\u67e5\u8be2\u4e86",(0,r.jsx)(n.code,{children:"id"}),", ",(0,r.jsx)(n.code,{children:"name"}),", ",(0,r.jsx)(n.code,{children:"edition"}),", ",(0,r.jsx)(n.code,{children:"price"}),"\uff0c\u4f46\u662f\u5e76\u6ca1\u6709\u67e5\u8be2",(0,r.jsx)(n.code,{children:"store"}),"\u548c",(0,r.jsx)(n.code,{children:"authors"}),"\u8fd9\u4e24\u4e2a\u5173\u8054\u5c5e\u6027\u3002"]}),(0,r.jsxs)(n.p,{children:["\u6293\u53d6\u5173\u8054\u5c5e\u6027\u5c06\u5728",(0,r.jsx)(n.a,{href:"./association",children:"\u4e0b\u4e00\u7bc7\u6587\u6863"}),"\u4e2d\u4ecb\u7ecd\u3002"]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8d1f\u5c5e\u6027\u6392\u9664\u4e0d\u9700\u8981\u7684\u5c5e\u6027",children:"\u8d1f\u5c5e\u6027(\u6392\u9664\u4e0d\u9700\u8981\u7684\u5c5e\u6027)"}),"\n",(0,r.jsx)(n.p,{children:"\u524d\u9762\u8bb2\u8fc7\u7684\u5c5e\u6027\u90fd\u662f\u6b63\u5c5e\u6027\uff0c\u4e0d\u65ad\u65b0\u589e\u8981\u67e5\u8be2\u7684\u5b57\u6bb5\u3002\u4f46\u4e00\u4e9b\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u53ea\u9700\u8981\u6392\u9664\u4e00\u4e9b\u6307\u5b9a\u5b57\u6bb5\uff0c\u5176\u4ed6\u7684\u5b57\u6bb5\u5219\u90fd\u8981\u67e5\u8be2\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u65f6\u5019\u5c31\u53ef\u4ee5\u7528\u8d1f\u5c5e\u6027\u53bb\u6392\u9664\u4e0d\u9700\u8981\u7684\u5b57\u6bb5\u3002"}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(\n        book.fetch(\n            Fetchers.BOOK_FETCHER\n            .allScalarFields()\n            // highlight-next-line\n            .edition(false)\n        )\n    )\n    .execute();\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.edition.eq(3))\n        select(\n            table.fetchBy {\n                allScalarFields()\n                // highlight-next-line\n                edition(false)\n            }\n        )\n    }\n    .execute()\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"edition(false)"}),"\u4f7f\u7528\u53c2\u6570false\uff0c\u8fd9\u5c31\u662f\u8d1f\u5c5e\u6027\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"allScalarFields()"}),"\u7684\u5c5e\u6027\u662f",(0,r.jsx)(n.code,{children:"id + name + edition + price"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"edition(false)"}),"\u8868\u793a",(0,r.jsx)(n.code,{children:"-edition"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6240\u4ee5\uff0c\u6700\u7ec8\u5e76\u5728\u4e00\u8d77\uff0c\u6700\u7ec8\u88ab\u6293\u53d6\u7684\u5c5e\u6027\u662f",(0,r.jsx)(n.code,{children:"id + name + price"})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5bf9\u4e8e\u6b63\u5c5e\u6027\u800c\u8a00\uff0c",(0,r.jsx)(n.code,{children:"edition()"}),"\u548c",(0,r.jsx)(n.code,{children:"edition(true)"}),"\u7b49\u4ef7"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5f53\u5927\u90e8\u5206\u5c5e\u6027\u9700\u8981\u6293\u53d6\uff0c\u53ea\u6709\u5c11\u90e8\u5206\u5c5e\u6027\u4e0d\u9700\u8981\u6293\u53d6\u65f6\uff0c",(0,r.jsx)(n.code,{children:"allScalarFields"}),"\u548c\u8d1f\u5c5e\u6027\u7ed3\u5408\u4f7f\u7528\u4f1a\u975e\u5e38\u6709\u7528"]}),"\n"]})}),"\n",(0,r.jsx)(n.p,{children:"\u751f\u6210\u7684SQL\u5982\u4e0b:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.PRICE   \nfrom BOOK as tb_1_ \nwhere tb_1_.EDITION = ?\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6253\u5370\u7684\u7ed3\u679c\u5982\u4e0b\uff08\u539f\u8f93\u51fa\u662f\u7d27\u51d1\u7684\uff0c\u4e3a\u4e86\u65b9\u4fbf\u9605\u8bfb\uff0c\u8fd9\u91cc\u8fdb\u884c\u4e86\u683c\u5f0f\u5316\uff09:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "id":3,\n        "name":"Learning GraphQL",\n        "price":51.00\n        // \u8fd9\u91cc\u6ca1\u6709`edition`\n    },\n    ...\u7701\u7565\u5176\u4ed6\u5bf9\u8c61...\n]\n'})})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,l)=>{l.d(n,{A:()=>i});l(96540);var t=l(18215);const r={tabItem:"tabItem_Ymn6"};var a=l(74848);function i(e){let{children:n,hidden:l,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:l,children:n})}},11470:(e,n,l)=>{l.d(n,{A:()=>k});var t=l(96540),r=l(18215),a=l(23104),i=l(56347),s=l(205),c=l(57485),o=l(31682),d=l(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:l}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:l,attributes:t,default:r}}=e;return{value:n,label:l,attributes:t,default:r}}))}(l);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function x(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:l}=e;const r=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,c.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function p(e){const{defaultValue:n,queryString:l=!1,groupId:r}=e,a=u(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=l.find((e=>e.default))??l[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[o,h]=j({queryString:l,groupId:r}),[p,b]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Dv)(l);return[r,(0,t.useCallback)((e=>{l&&a.set(e)}),[l,a])]}({groupId:r}),g=(()=>{const e=o??p;return x({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{g&&c(g)}),[g]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),b(e)}),[h,b,a]),tabValues:a}}var b=l(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=l(74848);function f(e){let{className:n,block:l,selectedValue:t,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),d=e=>{const n=e.currentTarget,l=c.indexOf(n),r=s[l].value;r!==t&&(o(n),i(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const l=c.indexOf(e.currentTarget)+1;n=c[l]??c[0];break}case"ArrowLeft":{const l=c.indexOf(e.currentTarget)-1;n=c[l]??c[c.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":l},n),children:s.map((e=>{let{value:n,label:l,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...a,className:(0,r.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":t===n}),children:l??n},n)}))})}function v(e){let{lazy:n,children:l,selectedValue:a}=e;const i=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function _(e){const n=p(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,m.jsx)(f,{...n,...e}),(0,m.jsx)(v,{...n,...e})]})}function k(e){const n=(0,b.A)();return(0,m.jsx)(_,{...e,children:h(e.children)},String(n))}},28453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>s});var t=l(96540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);