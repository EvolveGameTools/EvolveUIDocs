"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68591],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},52712:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i="Variables",l={unversionedId:"Topics/BodyBlock/variables",id:"Topics/BodyBlock/variables",title:"Variables",description:"Variables can declared using the standard C# notation of typename variableName (= initializingexpression)?",source:"@site/docs/Topics/BodyBlock/variables.md",sourceDirName:"Topics/BodyBlock",slug:"/Topics/BodyBlock/variables",permalink:"/EvolveUIDocs/docs/Topics/BodyBlock/variables",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"conceptual",previous:{title:"Portals & Teleportation",permalink:"/EvolveUIDocs/docs/Topics/BodyBlock/teleportation"},next:{title:"Modules",permalink:"/EvolveUIDocs/docs/Topics/Modules/"}},s={},c=[{value:"State",id:"state",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"variables"},"Variables"),(0,a.kt)("p",null,"Variables can declared using the standard C# notation of ",(0,a.kt)("inlineCode",{parentName:"p"},"type_name variableName (= initializing_expression)?")),(0,a.kt)("p",null,"Just like C#, a variable's lifespan is the block it is declared in and its value is re-evaluated every frame. "),(0,a.kt)("p",null,"Not initializing a variable will implicit assign it to ",(0,a.kt)("inlineCode",{parentName:"p"},"default"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"\ntemplate VariableSample render {\n\n    float a = 10f;\n    float x;\n    Color r = Color.red;\n    var g = Color.green;\n    \n}\n\n")),(0,a.kt)("h2",{id:"state"},"State"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," variable will be initialized once and then its value will be remembered every frame until its parent\nscope is destroyed. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"template StateSample render {\n\n    state float a = 10f;\n    state float x;\n    state Color r = Color.red;\n    state var g = Color.green;\n    \n}\n")))}u.isMDXComponent=!0}}]);