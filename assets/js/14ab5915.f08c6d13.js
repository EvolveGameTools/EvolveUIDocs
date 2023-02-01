"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44570],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=i(r),m=l,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||n;return r?a.createElement(g,o(o({ref:t},d),{},{components:r})):a.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,o=new Array(n);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:l,o[1]=s;for(var i=2;i<n;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83861:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>i});var a=r(87462),l=(r(67294),r(3905));const n={},o="ListAllocatorSized",s={unversionedId:"api_generated/uncategorized_generated/ListAllocatorSized",id:"api_generated/uncategorized_generated/ListAllocatorSized",title:"ListAllocatorSized",description:"struct in EvolveUI.Unsafe",source:"@site/docs/api_generated/uncategorized_generated/ListAllocatorSized.mdx",sourceDirName:"api_generated/uncategorized_generated",slug:"/api_generated/uncategorized_generated/ListAllocatorSized",permalink:"/EvolveUIDocs/docs/api_generated/uncategorized_generated/ListAllocatorSized",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"conceptual",previous:{title:"LineInfo",permalink:"/EvolveUIDocs/docs/api_generated/uncategorized_generated/LineInfo"},next:{title:"LongBoolMap",permalink:"/EvolveUIDocs/docs/api_generated/uncategorized_generated/LongBoolMap"}},c={},i=[],d={toc:i};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"listallocatorsized"},"ListAllocatorSized"),(0,l.kt)("p",null,"struct in EvolveUI.Unsafe"),(0,l.kt)("p",null,"A simple pool allocator intended to be used to allocate lists of unmanaged types.Memory returned is NOT cleared, user must clear it if desired.Uses a set of fixed block allocators but doesn't commit memory into the block sizesuntil it actually needs to, which should reduce memory waste dramatically."),(0,l.kt)("p",null,"This will not recycle blocks between sizes because I don't want to pay the price of coalescingneighboring blocks that are free. (a-la Buddy allocator)"),(0,l.kt)("p",null,"Fields"),(0,l.kt)("table",{class:"list"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{className:"label"},"minAllocSize"),(0,l.kt)("td",{className:"desc"},"Description goes here")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"label"},"maxAllocSize"),(0,l.kt)("td",{className:"desc"},"Description goes here")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"label"},"pageSize"),(0,l.kt)("td",{className:"desc"},"Description goes here")))),"# Methods",(0,l.kt)("table",{className:"list"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{className:"label"},(0,l.kt)("a",null,"Clear")),(0,l.kt)("td",{className:"desc"},"Description goes here")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"label"},(0,l.kt)("a",null,"Dispose")),(0,l.kt)("td",{className:"desc"},"Description goes here")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"label"},(0,l.kt)("a",null,"Allocate")),(0,l.kt)("td",{className:"desc"},"Description goes here")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"label"},(0,l.kt)("a",null,"Free")),(0,l.kt)("td",{className:"desc"},"Description goes here")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"label"},(0,l.kt)("a",null,"GetPageCount")),(0,l.kt)("td",{className:"desc"},"Description goes here")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"label"},(0,l.kt)("a",null,"DumpPageStats")),(0,l.kt)("td",{className:"desc"},"Description goes here")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"label"},(0,l.kt)("a",null,"Reallocate")),(0,l.kt)("td",{className:"desc"},"Description goes here")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"label"},(0,l.kt)("a",null,"GetCapacityFromSize")),(0,l.kt)("td",{className:"desc"},"Description goes here")))))}u.isMDXComponent=!0}}]);