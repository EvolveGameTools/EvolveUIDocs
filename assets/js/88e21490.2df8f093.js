"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},l=void 0,i={unversionedId:"ResolvingIds",id:"ResolvingIds",title:"ResolvingIds",description:"Resolving Styles & Templates at runtime",source:"@site/docs/ResolvingIds.md",sourceDirName:".",slug:"/ResolvingIds",permalink:"/EvolveUIDocs/docs/ResolvingIds",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"conceptual",previous:{title:"Property Types",permalink:"/EvolveUIDocs/docs/styles/style_types_generated"},next:{title:"Create the Main Screen",permalink:"/EvolveUIDocs/docs/Tutorials/QuestLog/createMainScreen"}},s={},p=[{value:"Resolving Styles &amp; Templates at runtime",id:"resolving-styles--templates-at-runtime",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"resolving-styles--templates-at-runtime"},"Resolving Styles & Templates at runtime"),(0,o.kt)("p",null,"You can resolve a style by declaring a variable of type ",(0,o.kt)("inlineCode",{parentName:"p"},"StyleId")," and assigning it using the identifier resolution syntax ",(0,o.kt)("inlineCode",{parentName:"p"},"@moduleName::styleName")," "),(0,o.kt)("p",null,"You can do the same thing to resolve a template via ",(0,o.kt)("inlineCode",{parentName:"p"},"TemplateId")," typed variables. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"\ntemplate ResolutionExample {\n \n    render {\n        \n        TemplateId templateId = @EvolveDemo;\n        StyleId styleId = @box;\n        \n        // toggle the given style\n        run $root.style.Toggle(styleId);\n        \n        create {\n            // spawn a window with your template\n            $runtime.CreateWindowView(templateId, new Rect(0, 0, 800, 600));\n        }\n       \n    }\n    \n}\n\n")))}u.isMDXComponent=!0}}]);