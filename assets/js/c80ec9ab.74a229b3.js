"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,m=d["".concat(s,".").concat(u)]||d[u]||f[u]||l;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const l={},a="If / Else",i={unversionedId:"templates/body_block/control_flow/if_else",id:"templates/body_block/control_flow/if_else",title:"If / Else",description:"If else works identically to how it does in C#, the added optional ability to be declared as destructive",source:"@site/docs/templates/body_block/control_flow/if_else.md",sourceDirName:"templates/body_block/control_flow",slug:"/templates/body_block/control_flow/if_else",permalink:"/EvolveUIDocs/docs/templates/body_block/control_flow/if_else",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"conceptual",previous:{title:"SRP Setup",permalink:"/EvolveUIDocs/docs/getting_started/srp_setup"},next:{title:"Repeat",permalink:"/EvolveUIDocs/docs/templates/body_block/control_flow/repeat"}},s={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"if--else"},"If / Else"),(0,o.kt)("p",null,"If else works identically to how it does in C#, the added optional ability to be declared as ",(0,o.kt)("a",{parentName:"p",href:"/docs/templates/destructive"},(0,o.kt)("inlineCode",{parentName:"a"},"destructive"))),(0,o.kt)("p",null,"A scope in Evolve is both lexical (so starts/ends with ",(0,o.kt)("inlineCode",{parentName:"p"},"{")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"}"),"). Scopes within ",(0,o.kt)("inlineCode",{parentName:"p"},"render"),"\nhave a lifetime and any ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," defined in a lexical scope will be remembered from frame to frame.\nA ",(0,o.kt)("inlineCode",{parentName:"p"},"destructive")," scope will be cleaned up if it does not render for a frame. This can be useful\nwhen you have some state that is only valid while its part of the UI on screen or if you have a large\ntree of elements that are rarely used, it can be good practice to cleanup the tree when its not\nin use to release memory and other resources. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'template IfElseSample(required bool someCondition, required bool someOtherCondition) render {\n\n    if(someCondition) {\n        Text("one");\n    }\n    else if(someOtherCondition) {\n        Text("two");\n    }\n    else {\n        Text("three");\n    }\n    \n}\n\ntemplate IfElseSampleDestructive(required bool someCondition, required bool someOtherCondition) render {\n\n    if:destructive(someCondition) {\n        Text("one");\n    }\n    else if(someOtherCondition) {\n        Text("two");\n    }\n    else {\n        Text("three");\n    }\n    \n}\n')))}d.isMDXComponent=!0}}]);