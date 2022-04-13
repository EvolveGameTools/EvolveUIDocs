"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63716],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return y}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=p(n),y=o,f=m["".concat(u,".").concat(y)]||m[y]||c[y]||a;return n?r.createElement(f,s(s({ref:t},i),{},{components:n})):r.createElement(f,s({ref:t},i))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88840:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],l={},u="Enum",p={unversionedId:"styles/property_syntax/enum",id:"styles/property_syntax/enum",title:"Enum",description:"There are two flavors of enum values, normal enums and flags enums.",source:"@site/docs/styles/property_syntax/enum.mdx",sourceDirName:"styles/property_syntax",slug:"/styles/property_syntax/enum",permalink:"/EvolveUIDocs/docs/styles/property_syntax/enum",tags:[],version:"current",frontMatter:{},sidebar:"conceptual",previous:{title:"Color",permalink:"/EvolveUIDocs/docs/styles/property_syntax/color"},next:{title:"Grid Item",permalink:"/EvolveUIDocs/docs/styles/property_syntax/grid_item"}},i={},c=[],m={toc:c};function y(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"enum"},"Enum"),(0,a.kt)("p",null,"There are two flavors of enum values, normal enums and ",(0,a.kt)("inlineCode",{parentName:"p"},"flags")," enums. "),(0,a.kt)("p",null,"Normal enum syntax is simple the name of the value to provide."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"style enums {\n    LayoutType = Horizontal;\n}\n")),(0,a.kt)("p",null,"Flag enum values can be combined with the pipe ",(0,a.kt)("inlineCode",{parentName:"p"},"|")," operator. If no pipe operator is provided this behaves identically to normal enums."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"style enums {\n    TextWhitespaceMode = CollapseWhitespace | Trim;\n}\n")))}y.isMDXComponent=!0}}]);