"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3279],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(h,p(p({ref:n},d),{},{components:t})):a.createElement(h,p({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},24896:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),p=["components"],i={},l="Shorthands",s={unversionedId:"styles/property_syntax/shorthands",id:"styles/property_syntax/shorthands",title:"Shorthands",description:"Often it is helpful to set multiple property values using one style declration. For example if you'd like to set padding",source:"@site/docs/styles/property_syntax/shorthands.mdx",sourceDirName:"styles/property_syntax",slug:"/styles/property_syntax/shorthands",permalink:"/EvolveUIDocs/docs/styles/property_syntax/shorthands",tags:[],version:"current",frontMatter:{},sidebar:"conceptual",previous:{title:"Scalars",permalink:"/EvolveUIDocs/docs/styles/property_syntax/scalars"},next:{title:"ValueUnit",permalink:"/EvolveUIDocs/docs/styles/property_syntax/value_unit"}},d={},c=[{value:"2 Component Shorthands",id:"2-component-shorthands",level:2},{value:"4 Component Shorthands",id:"4-component-shorthands",level:2}],u={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shorthands"},"Shorthands"),(0,o.kt)("p",null,"Often it is helpful to set multiple property values using one style declration. For example if you'd like to set padding\non all four sizes of an element it can be annoying to type "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"style padded {\n    PaddingLeft = 10px;\n    PaddingRight = 10px;\n    PaddingBottom = 10px;\n    PaddingTop = 10px;\n}\n")),(0,o.kt)("p",null,"Instead you can use a shorthand for this. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"style padded {\n    Padding = 10px;\n}    \n")),(0,o.kt)("p",null,"Shorthands come in two flavors: 2 component and 4 component. "),(0,o.kt)("h2",{id:"2-component-shorthands"},"2 Component Shorthands"),(0,o.kt)("p",null,"A two component short hand has the following behavior"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if only one value is provided, it sets both components to that value"),(0,o.kt)("li",{parentName:"ul"},"if two values are provided, the components are assigned in order")),(0,o.kt)("p",null,"This sets both ",(0,o.kt)("inlineCode",{parentName:"p"},"PreferredWidth")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PreferredHeight")," to 100px"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"style size {\n    PreferredSize = 100px; \n}\n")),(0,o.kt)("p",null,"This sets ",(0,o.kt)("inlineCode",{parentName:"p"},"PreferredWidth")," to 100px and ",(0,o.kt)("inlineCode",{parentName:"p"},"PreferredHeight")," to 2cnt"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"style size {\n    PreferredSize = 100px 2cnt; \n}\n")),(0,o.kt)("h2",{id:"4-component-shorthands"},"4 Component Shorthands"),(0,o.kt)("p",null,"A four component short hand has the following behavior (assuming a 0 based index). It follows the ",(0,o.kt)("inlineCode",{parentName:"p"},"TRBL (top, right, bottom, left)")," assignment order. "),(0,o.kt)("p",null,"If only one value is provided, it all components to that value. In this case all four padding values are assigned ",(0,o.kt)("inlineCode",{parentName:"p"},"10px")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"style padding {\n    Padding = 10px; \n}\n")),(0,o.kt)("p",null,"If two values are provided, the vertical components get value 0 and the horizontal components get value 1.\nIn this example ",(0,o.kt)("inlineCode",{parentName:"p"},"PaddingTop")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PaddingBottom")," are assigned ",(0,o.kt)("inlineCode",{parentName:"p"},"10px")," while ",(0,o.kt)("inlineCode",{parentName:"p"},"PaddingLeft")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PaddingRight")," are assigned ",(0,o.kt)("inlineCode",{parentName:"p"},"20px")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"style padding {\n    Padding = 10px 20px; \n}\n")),(0,o.kt)("p",null,"If three values are provided, the top component gets value 0, the horizontal components get value 1, and bottom component gets value 2.\nIn this example ",(0,o.kt)("inlineCode",{parentName:"p"},"PaddingTop")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"10px"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PaddingLeft")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PaddingRight")," are assigned ",(0,o.kt)("inlineCode",{parentName:"p"},"20px")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PaddingBottom")," is assigned ",(0,o.kt)("inlineCode",{parentName:"p"},"15px")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"style padding {\n    Padding = 10px 20px 15px; \n}\n")),(0,o.kt)("p",null,"If four values are provided, each component is assigned the corresponding value index in order from ",(0,o.kt)("inlineCode",{parentName:"p"},"TRBL"),"(top, right, bottom, left).\nIn this example ",(0,o.kt)("inlineCode",{parentName:"p"},"PaddingTop")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"10px"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PaddingRight")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"20px"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PaddingBottom")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"15px")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PaddingLeft")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"1s")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"style padding {\n    Padding = 10px 20px 15px 1s;\n}\n")))}m.isMDXComponent=!0}}]);