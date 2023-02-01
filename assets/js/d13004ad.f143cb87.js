"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=l,d=m["".concat(a,".").concat(u)]||m[u]||y[u]||o;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[m]="string"==typeof e?e:l,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const o={},s="Styles",i={unversionedId:"Topics/TopLevelDeclarations/Entities/Members/style_list",id:"Topics/TopLevelDeclarations/Entities/Members/style_list",title:"Styles",description:"Styles get applied to elements either with a style = [..] member or with the C# api.",source:"@site/docs/Topics/TopLevelDeclarations/Entities/Members/style_list.md",sourceDirName:"Topics/TopLevelDeclarations/Entities/Members",slug:"/Topics/TopLevelDeclarations/Entities/Members/style_list",permalink:"/EvolveUIDocs/docs/Topics/TopLevelDeclarations/Entities/Members/style_list",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"conceptual",previous:{title:"Top level state",permalink:"/EvolveUIDocs/docs/Topics/TopLevelDeclarations/Entities/Members/state"},next:{title:"Companion Types",permalink:"/EvolveUIDocs/docs/Topics/TopLevelDeclarations/Entities/companions"}},a={},c=[{value:"C# Api",id:"c-api",level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"styles"},"Styles"),(0,l.kt)("p",null,"Styles get applied to elements either with a ",(0,l.kt)("inlineCode",{parentName:"p"},"style = [..]")," member or with the C# api. "),(0,l.kt)("p",null,"When used as a template member, styles are referenced via the @ symbol. Referring a style that\ndoes not exist is a compiler error. "),(0,l.kt)("p",null,"Even when supplying only 1 style, you still need to use brackets ",(0,l.kt)("inlineCode",{parentName:"p"},"[@styleName]")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"\ntemplate StyledThing {\n\n    style = [@style1, @style2, @SomeModule::StyleName];\n    \n    render {\n        // or as an invocation memember\n        SomeElement(style = [@style1]);\n    }\n    \n}\n\n")),(0,l.kt)("h3",{id:"c-api"},"C# Api"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'ElementReference elementRef = SomeHowGetAnElementReference();\nStyleId styleId = uiRuntime.GetStyle("ModuleName", "StyleName");\nelementRef.styleList.Add(styleId);\nelementRef.styleList.Remove(styleId);\nelementRef.styleList.Toggle(styleId);\n')))}m.isMDXComponent=!0}}]);