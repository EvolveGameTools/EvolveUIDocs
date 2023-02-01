"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65376],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return r?a.createElement(f,i(i({ref:t},m),{},{components:r})):a.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30773:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={},i="Texture Reference",o={unversionedId:"styles/property_syntax/texture_reference",id:"styles/property_syntax/texture_reference",title:"Texture Reference",description:"Texture references are similar to Asset References, the difference is that a texture reference can optionally accept a sample mode operator.",source:"@site/docs/styles/property_syntax/texture_reference.mdx",sourceDirName:"styles/property_syntax",slug:"/styles/property_syntax/texture_reference",permalink:"/EvolveUIDocs/docs/styles/property_syntax/texture_reference",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"conceptual",previous:{title:"Shorthands",permalink:"/EvolveUIDocs/docs/styles/property_syntax/shorthands"},next:{title:"ValueUnit",permalink:"/EvolveUIDocs/docs/styles/property_syntax/value_unit"}},s={},p=[{value:"Examples",id:"examples",level:3}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"texture-reference"},"Texture Reference"),(0,n.kt)("p",null,"Texture references are similar to Asset References, the difference is that a texture reference can optionally accept a ",(0,n.kt)("inlineCode",{parentName:"p"},"sample mode")," operator. "),(0,n.kt)("p",null,"As with Asset References, omitting the module name will resolve the texture against the current style file's module. "),(0,n.kt)("p",null,"Sample modes define how the engine should treat the texture."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"NineSlice")," Apply border slicing to the image"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"LinearGradient")," sample as linear gradient"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"RadialGradient")," sample as radial gradient"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"EllipticalGradient")," sample as an elliptical gradient"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ConicGradient")," sample as a conic gradient"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SoftMask")," use this texture as a soft mask that handle partially transparent masking"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"HardMask")," use this texture as hard mask where any pixel value less than 1f will mask away that value"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SoftMaskInverse")," same as ",(0,n.kt)("inlineCode",{parentName:"li"},"SoftMask")," but applies an invert operation before rendering"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"HardMaskInverse")," same as ",(0,n.kt)("inlineCode",{parentName:"li"},"HardMask")," but applies an invert operation before rendering")),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},'style sample-textures {\n    BackgroundImage = linear-gradient("gradientName");\n    BackgroundImage = linear-gradient("moduleName::gradientName");\n    BackgroundImage = radial-gradient("moduleName::gradientName");\n    BackgroundImage = ellipitcal-gradient("moduleName::gradientName");\n    BackgroundImage = conic-gradient("moduleName::gradientName");\n    BackgroundImage = soft-mask("moduleName::maskName");\n    BackgroundImage = soft-mask-inverse("moduleName::maskName");\n    BackgroundImage = hard-mask("maskName");\n    BackgroundImage = hard-mask-inverse("maskName");\n    BackgroundImage = nine-slice("moduleName::textureName");\n    BackgroundImage = "moduleName::textureName";\n    BackgroundImage = "textureName";\n}\n')))}c.isMDXComponent=!0}}]);