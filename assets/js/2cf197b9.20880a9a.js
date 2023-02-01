"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63581],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>v});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),p=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},i=function(e){var r=p(e.components);return o.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},y=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(t),y=n,v=u["".concat(c,".").concat(y)]||u[y]||d[y]||a;return t?o.createElement(v,l(l({ref:r},i),{},{components:t})):o.createElement(v,l({ref:r},i))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=y;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<a;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},13433:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=t(87462),n=(t(67294),t(3905));const a={},l="Color",s={unversionedId:"styles/property_syntax/color",id:"styles/property_syntax/color",title:"Color",description:"Colors are defined either as keywords, hex values, rgb values or with an operator.",source:"@site/docs/styles/property_syntax/color.mdx",sourceDirName:"styles/property_syntax",slug:"/styles/property_syntax/color",permalink:"/EvolveUIDocs/docs/styles/property_syntax/color",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"conceptual",previous:{title:"Asset Reference",permalink:"/EvolveUIDocs/docs/styles/property_syntax/asset_reference"},next:{title:"Enum",permalink:"/EvolveUIDocs/docs/styles/property_syntax/enum"}},c={},p=[{value:"RGB values",id:"rgb-values",level:2},{value:"RGBA values",id:"rgba-values",level:2},{value:"Hex values",id:"hex-values",level:2},{value:"Color keywords",id:"color-keywords",level:2},{value:"Color operators",id:"color-operators",level:2}],i={toc:p};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"color"},"Color"),(0,n.kt)("p",null,"Colors are defined either as keywords, hex values, rgb values or with an operator."),(0,n.kt)("h2",{id:"rgb-values"},"RGB values"),(0,n.kt)("p",null,"Provide three values between 0 and 255, alpha is assumed to be 255."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"style color {\n    BackgroundColor = rgb(128, 255, 255);\n}\n")),(0,n.kt)("h2",{id:"rgba-values"},"RGBA values"),(0,n.kt)("p",null,"Provide four values between 0 and 255"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"style color {\n    BackgroundColor = rgba(128, 255, 255, 32);\n}\n")),(0,n.kt)("h2",{id:"hex-values"},"Hex values"),(0,n.kt)("p",null,"If 8 values are provided the color is derived from decoding the hex pairs into r, g, b, and a components. "),(0,n.kt)("p",null,"If only 6 values are provided, the alpha is assumed to be equal to ",(0,n.kt)("inlineCode",{parentName:"p"},"ff")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"255")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"style color {\n    BackgroundColor = #ff0000ff;\n    BackgroundTint = #aabb99;\n}\n")),(0,n.kt)("h2",{id:"color-keywords"},"Color keywords"),(0,n.kt)("p",null,"The list of accepted color keywords is ",(0,n.kt)("a",{parentName:"p",href:"/EvolveUIDocs/docs/styles/colors"},"here")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"style color {\n    BackgroundColor = red;\n    BackgroundTint = cornflowerblue;\n}\n")),(0,n.kt)("h2",{id:"color-operators"},"Color operators"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"opacity(color, Range01)")," replaces the alpha component of the input ",(0,n.kt)("inlineCode",{parentName:"li"},"color")," with the ",(0,n.kt)("inlineCode",{parentName:"li"},"range")," argument")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"style color {\n    BackgroundColor = opacity(red, 50%);\n    BackgroundTint = opacity(#aabbcc, 0.1);\n}\n")))}u.isMDXComponent=!0}}]);