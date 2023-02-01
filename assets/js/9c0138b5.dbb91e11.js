"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12244],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},l="Matrix",o={unversionedId:"styles/property_syntax/matrix",id:"styles/property_syntax/matrix",title:"Matrix",description:"A matrix can be provided by defining one or more transformations that will be multiplied together to yield a result",source:"@site/docs/styles/property_syntax/matrix.mdx",sourceDirName:"styles/property_syntax",slug:"/styles/property_syntax/matrix",permalink:"/EvolveUIDocs/docs/styles/property_syntax/matrix",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"conceptual",previous:{title:"Grid Template",permalink:"/EvolveUIDocs/docs/styles/property_syntax/grid_template"},next:{title:"Range01",permalink:"/EvolveUIDocs/docs/styles/property_syntax/range_01"}},s={},p=[{value:"Identity",id:"identity",level:3},{value:"Scale",id:"scale",level:3},{value:"Translate",id:"translate",level:3},{value:"Rotation",id:"rotation",level:3},{value:"Skew",id:"skew",level:3},{value:"Combining Matrices",id:"combining-matrices",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"matrix"},"Matrix"),(0,a.kt)("p",null,"A matrix can be provided by defining one or more transformations that will be multiplied together to yield a result"),(0,a.kt)("p",null,"The transformations are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"identity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scale")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"translate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rotate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"skew"))),(0,a.kt)("h3",{id:"identity"},"Identity"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"identity()")," does not accept arguments"),(0,a.kt)("h3",{id:"scale"},"Scale"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"scale(float, float? float?)")," transformations can accept between 1 and 3 float arguments."),(0,a.kt)("h3",{id:"translate"},"Translate"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"translate(AlignmentOffset, AlignmentOffset?, AlignmentOffset?)")," transformations accept between 1 and 3 ",(0,a.kt)("inlineCode",{parentName:"p"},"AlignmentOffset")," values"),(0,a.kt)("h3",{id:"rotation"},"Rotation"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rotate(UIAngle, UIAngle?, UIAngle?)")," transformations accept between 1 and 3 ",(0,a.kt)("inlineCode",{parentName:"p"},"UIAngle")," values"),(0,a.kt)("h3",{id:"skew"},"Skew"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"skew(UIAngle, UIAngle?)")," transformations accept 1 or 2 ",(0,a.kt)("inlineCode",{parentName:"p"},"UIAngle")," values"),(0,a.kt)("h2",{id:"combining-matrices"},"Combining Matrices"),(0,a.kt)("p",null,"Matrices can be combined by placing multiple transformations together. The maximum is 7. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"style matrices {\n    RenderTransform = rotate(20deg) translate(10px, 10px, -50px) skew(19deg);\n}    \n")))}m.isMDXComponent=!0}}]);