"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8229],{78421:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var l=i(74848),s=i(28453);const r={sidebar_position:1,title:"\u53ef\u7a7a\u6027"},c=void 0,d={id:"mapping/base/nullity",title:"\u53ef\u7a7a\u6027",description:"\u5b9e\u4f53\u5bf9\u8c61\u5c5e\u6027\u662f\u5426\u5141\u8bb8\u4e3anull\u8fd9\u4e2a\u95ee\u9898\uff0cJimmer\u7528\u975e\u5e38\u4e25\u683c\u7684\u65b9\u5f0f\u5904\u7406\u3002\u5373\u4fbf\u5bf9Java\u5f00\u53d1\u8005\u800c\u8a00\uff0c\u4e5f\u8981\u6c42\u5982\u540ckotlin\u5f00\u53d1\u8005\u4e00\u6837\u8ba4\u77e5\u8003\u8651\u601d\u8003\u6bcf\u4e2a\u5c5e\u6027\u662f\u5426\u5141\u8bb8\u4e3anull\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/base/nullity.mdx",sourceDirName:"mapping/base",slug:"/mapping/base/nullity",permalink:"/jimmer-doc/zh/docs/mapping/base/nullity",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/base/nullity.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u53ef\u7a7a\u6027"},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840\u6620\u5c04",permalink:"/jimmer-doc/zh/docs/mapping/base/"},next:{title:"\u7b80\u5355\u6620\u5c04",permalink:"/jimmer-doc/zh/docs/mapping/base/basic"}},t={},o=[{value:"\u5b9a\u4e49\u5c5e\u6027\u7684\u53ef\u7a7a\u6027",id:"\u5b9a\u4e49\u5c5e\u6027\u7684\u53ef\u7a7a\u6027",level:2},{value:"Kotlin",id:"kotlin",level:3},{value:"Java",id:"java",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"inputNotNull",id:"inputnotnull",level:2}];function a(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"\u5b9e\u4f53\u5bf9\u8c61\u5c5e\u6027\u662f\u5426\u5141\u8bb8\u4e3anull\u8fd9\u4e2a\u95ee\u9898\uff0cJimmer\u7528\u975e\u5e38\u4e25\u683c\u7684\u65b9\u5f0f\u5904\u7406\u3002\u5373\u4fbf\u5bf9Java\u5f00\u53d1\u8005\u800c\u8a00\uff0c\u4e5f\u8981\u6c42\u5982\u540ckotlin\u5f00\u53d1\u8005\u4e00\u6837\u8ba4\u77e5\u8003\u8651\u601d\u8003\u6bcf\u4e2a\u5c5e\u6027\u662f\u5426\u5141\u8bb8\u4e3anull\u3002"}),"\n",(0,l.jsx)(e.admonition,{type:"caution",children:(0,l.jsx)(e.p,{children:"\u660e\u786e\u8bf4\u660e\u5b9e\u4f53\u5bf9\u8c61\u7684\u6bcf\u4e2a\u5c5e\u6027\u662f\u5426\u5141\u8bb8\u4e3anull\uff0c\u5bf9Jimmer\u800c\u8a00\u975e\u5e38\u91cd\u8981\uff0c\u5f88\u591a\u529f\u80fd\u90fd\u4f1a\u53d7\u5176\u5f71\u54cd\u3002"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5b9a\u4e49\u5c5e\u6027\u7684\u53ef\u7a7a\u6027",children:"\u5b9a\u4e49\u5c5e\u6027\u7684\u53ef\u7a7a\u6027"}),"\n",(0,l.jsx)(e.h3,{id:"kotlin",children:"Kotlin"}),"\n",(0,l.jsxs)(e.p,{children:["Kotlin\u652f\u6301\u7a7a\u5b89\u5168\uff0c",(0,l.jsx)(e.code,{children:"T"})," \u8868\u793a\u975e\u7a7a\uff0c",(0,l.jsx)(e.code,{children:"T?"})," \u8868\u793a\u53ef\u4e3a\u7a7a\uff0c\u6309\u7167kotlin\u7684\u672c\u8eab\u7684\u65b9\u5f0f\u58f0\u660e\u5b9e\u4f53\u5c5e\u6027\u5373\u53ef\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"java",children:"Java"}),"\n",(0,l.jsx)(e.p,{children:"Java\u4e0b\u5c5e\u6027\u662f\u5426\u4e3anull\uff0c\u9760\u4ee5\u4e0b\u89c4\u5219\u5236\u5b9a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u5c5e\u6027\u7c7b\u578b\u4e3aboolean\u3001char\u3001byte\u3001short\u3001int\u3001long\u3001float\u6216double\uff0c\u5219\u975enull"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u5c5e\u6027\u7c7b\u578b\u4e3aBoolean\u3001Character\u3001Byte\u3001Short\u3001Integer\u3001Long\u3001Float\u6216Double\uff0c\u5219\u53efnull"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5426\u5219"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5982\u679c\u5c5e\u6027\u88ab\u4efb\u4f55\u7b80\u540d\u4e3a",(0,l.jsx)(e.code,{children:"Nullable"}),"\u6216",(0,l.jsx)(e.code,{children:"Null"}),"\u7684annotation\u4fee\u9970\uff0c\u5219\u53efnull"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5426\u5219\uff0c\u9ed8\u8ba4\u975enull"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.admonition,{type:"note",children:[(0,l.jsxs)(e.p,{children:["\u63a8\u8350\u4f7f\u7528",(0,l.jsx)(e.code,{children:"org.jetbrains.annotations.Nullable"}),"\uff0c\u56e0\u4e3a"]}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u867d\u7136\u53ef\u8bc6\u522b\u7684annotation\u4e0d\u53d7\u9650\u5236\uff0c\u4f46\u662f\u5982\u679c\u4f7f\u7528\u4e86\u672a\u88abJimmer annotation processor\u9ed8\u8ba4\u5305\u542b\u7684annotation\uff0c\u9700\u8981\u5c06\u5176\u4f9d\u8d56\u6dfb\u52a0\u5230annotation processor\u4e2d\uff0c\u8fd9\u7ec8\u5f52\u662f\u9ebb\u70e6\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"org.jetbrains.annotations.Nullable"}),"\u53d7Intellij\u652f\u6301"]}),"\n"]}),"\n"]})]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,l.jsxs)(e.admonition,{type:"info",children:[(0,l.jsx)(e.p,{children:"\u8fd9\u91cc\u4f1a\u51fa\u73b0\u4e00\u7cfb\u5217\u73b0\u5728\u6ca1\u8bb2\u89e3\u7684\u6982\u5ff5\uff0c\u5b83\u4eec\u90fd\u4f1a\u5728\u540e\u7eed\u6587\u6863\u4e2d\u8bb2\u89e3\u3002"}),(0,l.jsx)(e.p,{children:"\u8fd9\u91cc\u4ec5\u4ec5\u505a\u4e00\u4e2a\u6ce8\u610f\u4e8b\u9879\u7684\u7b80\u5355\u7f57\u5217\uff0c\u8bf7\u8bfb\u8005\u5148\u5ffd\u7565\u8fd9\u4e9b\u540d\u8bcd\uff0c\u672c\u6587\u4e5f\u4e0d\u63d0\u4f9b\u76f8\u5173\u4f8b\u5b50\uff0c\u8bfb\u8005\u4e86\u89e3\u6240\u6709\u540e\u7eed\u6982\u5ff5\u540e\u518d\u56de\u6765\u67e5\u770b\u3002"})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"@Id"}),"\u5c5e\u6027\u5fc5\u987b\u975enull"]}),"\n",(0,l.jsx)(e.p,{children:"\u548cJPA/Hibernate\u6709\u5f88\u5927\u4e0d\u540c"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["JPA/Hibernate\u63a8\u8350\u5c06id\u5c5e\u6027\u58f0\u660e\u4e3a\u53ef\u7a7a\u7c7b\u578b\uff0c\u6bd4\u5982\uff0c\u5bf9Java\u800c\u8a00\uff0c\u5c31\u662f",(0,l.jsx)(e.code,{children:"Long"}),"\u800c\u975e",(0,l.jsx)(e.code,{children:"long"}),"\uff0c\u8fd9\u6837\uff0c\u4fdd\u5b58\u6570\u636e\u65f6\u53ef\u8868\u8fbe\u6ca1\u6709id\u800c\u9700\u8981\u81ea\u52a8\u5206\u914d\u7684\u60c5\u51b5\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Jimmer\u5fc5\u987b\u5c06id\u5c5e\u6027\u58f0\u660e\u4e3a\u975e\u7a7a\u7c7b\u578b\uff0c\u6bd4\u5982\uff0c\u5bf9Java\u800c\u8a00\uff0c\u5c31\u662f",(0,l.jsx)(e.code,{children:"long"}),"\u800c\u975e",(0,l.jsx)(e.code,{children:"Long"}),"\u3002Jimmer\u9760\u5b9e\u4f53\u5bf9\u8c61\u672c\u8eab\u7684\u52a8\u6001\u6027\u6765\u8868\u8fbeid\u5c5e\u6027\u7684\u7f3a\u5931\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4e00\u5bf9\u591a\u548c\u591a\u5bf9\u591a\u5c5e\u6027\u5fc5\u987b\u975enull"}),"\n",(0,l.jsx)(e.p,{children:"\u4e00\u5bf9\u591a\u548c\u591a\u5bf9\u591a\u5c5e\u6027\u7528\u957f\u5ea6\u4e3a0\u7684\u96c6\u5408\u8868\u793a\u6ca1\u6570\u636e\uff0c\u800c\u975enull\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5f53\u4ee5\u4e0b\u4efb\u4f55\u4e00\u79cd\u60c5\u51b5\u6ee1\u8db3\u65f6\uff0c\u4e00\u5bf9\u4e00\u548c\u591a\u5bf9\u4e00\u5c5e\u6027\u5fc5\u987b\u53efnull"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u57fa\u4e8e\u4e2d\u95f4\u8868\u6620\u5c04\uff0c\u800c\u975e\u5916\u952e"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u57fa\u4e8e\u4f2a\u5916\u952e\uff0c\u800c\u975e\u771f\u5b9e\u5916\u952e"}),"\n",(0,l.jsx)(e.admonition,{type:"info",children:(0,l.jsx)(e.p,{children:"\u6240\u8c13\u201c\u4f2a\u5916\u952e\u201d\uff0c\u6307\u5728\u5f00\u53d1\u4eba\u5458\u610f\u8bc6\u4e2d\u662f\u5916\u952e\uff0c\u4f46\u662f\u6570\u636e\u5e93\u4e2d\u5e76\u6ca1\u6709\u5bf9\u5e94\u7684\u5916\u952e\u7ea6\u675f\u3002"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u8fdc\u7a0b\u5173\u8054"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4f5c\u4e3a\u955c\u50cf\u7aef\u7684@OneToOne\u5173\u8054"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5982\u679c\u5173\u8054\u5b9e\u4f53\u88ab\u65bd\u52a0\u4e86",(0,l.jsx)(e.a,{href:"../../query/global-filter",children:"\u5168\u5c40\u8fc7\u6ee4\u5668"}),"\uff0c\u90a3\u4e48\uff0c\u5bf9\u4e8e\u4e00\u5bf9\u591a/\u591a\u5bf9\u4e00\u5173\u8054\u800c\u8a00\uff0c\u5373\u4f7f\u76f4\u63a5\u57fa\u4e8e\u5916\u952e\u4e5f\u5fc5\u987b\u53efnull\uff0c\u9664\u975e\u4ee5\u4e0b\u6761\u4ef6\u5168\u90e8\u6ee1\u8db3\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u6240\u6709\u88ab\u65bd\u52a0\u4e8e\u5173\u8054\u5b9e\u4f53\u7684\u5168\u5c40\u8fc7\u6ee4\u5668\u90fd\u5b9e\u73b0\u4e86",(0,l.jsx)(e.code,{children:"AssociationIntegrityAssuranceFilter"}),"/",(0,l.jsx)(e.code,{children:"KAssociationIntegrityAssuranceFilter"}),"\u63a5\u53e3\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u6240\u6709\u88ab\u65bd\u52a0\u4e8e\u5173\u8054\u5b9e\u4f53\u7684\u5168\u5c40\u8fc7\u6ee4\u5668\u4e5f\u88ab\u65bd\u52a0\u4e8e\u5f53\u524d\u5b9e\u4f53\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"inputnotnull",children:"inputNotNull"}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u524d\u6587\u6240\u8a00\uff0c\u7531\u4e8e\u67d0\u4e9b\u7279\u6709\u7684\u67e5\u8be2\u573a\u666f\uff0c\u57fa\u4e8e\u5916\u952e\u7684\u4e00\u5bf9\u4e00\u548c\u591a\u5bf9\u4e00\u5c5e\u6027\u5fc5\u987b\u88ab\u58f0\u660e\u4e3a\u53ef\u7a7a\u7684\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u7136\u800c\uff0c\u5728\u4fdd\u5b58\u6570\u636e\u65f6\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u80fd\u4e0d\u671f\u671b\u7528\u6237\u5c06\u6570\u636e\u5e93\u7684\u5916\u952e\u5b57\u6bb5\u4fee\u6539\u4e3anull\u3002\u8fd9\u65f6\uff0c\u53ef\u4ee5\u5c06",(0,l.jsx)(e.code,{children:"@OneToOne"}),"\u6216",(0,l.jsx)(e.code,{children:"@ManyToOne"}),"\u7684",(0,l.jsx)(e.code,{children:"inputNotNull"}),"\u8bbe\u7f6e\u4e3atrue\uff0c\u4f8b\u5982"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"@OneToOne(inputNotNull = true)"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"@ManyToOne(inputNotNull = true)"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5982\u679c\u67d0\u4e2a\u5173\u8054\u5c5e\u6027\u914d\u7f6e\u4e86",(0,l.jsx)(e.code,{children:"inputNotNull"}),"\uff0c\u5728",(0,l.jsx)(e.a,{href:"../../configuration/database-validation",children:"\u6570\u636e\u5e93\u9a8c\u8bc1"}),"\u4e2d\u4f1a\u88ab\u4f18\u5148\u8003\u8651\uff0c\u4ece\u800c\u9a8c\u8bc1\u6570\u636e\u5e93\u4e2d\u5916\u952e\u5b57\u6bb5\u4e0d\u80fd\u4e3anull\u3002"]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>d});var l=i(96540);const s={},r=l.createContext(s);function c(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);