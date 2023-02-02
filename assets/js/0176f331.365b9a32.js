"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92844],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i="Generics",l={unversionedId:"templates/generics",id:"templates/generics",title:"Generics",description:"Generics in Evolve are closer to the C++ concept of templates than the C# idea of generics.",source:"@site/docs/templates/generics.md",sourceDirName:"templates",slug:"/templates/generics",permalink:"/EvolveUIDocs/docs/templates/generics",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"conceptual",previous:{title:"Expression Syntax",permalink:"/EvolveUIDocs/docs/templates/expression_syntax"},next:{title:"Execution Graphs",permalink:"/EvolveUIDocs/docs/templates/graph_docs"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generics"},"Generics"),(0,a.kt)("p",null,"Generics in Evolve are closer to the C++ concept of templates than the C# idea of generics. "),(0,a.kt)("p",null,"When a template declares itself as generic, the generic parameters given act as placeholders for a type name.\nThis means that you can do things with them that C# normally does not allow. Here is an example of\na slider element that has a generic ",(0,a.kt)("inlineCode",{parentName:"p"},"<T>")," type. For this example our slider could represent T as\nany numeric value such ",(0,a.kt)("inlineCode",{parentName:"p"},"float")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"double"),". "),(0,a.kt)("p",null,"Let's say we want our slider to have default parameters where the ",(0,a.kt)("inlineCode",{parentName:"p"},"minValue")," is equal to the smallest\nnumber representable by type T. Usually in C# we'd use ",(0,a.kt)("inlineCode",{parentName:"p"},"float.MinValue")," and friends to represent this.\nWe want our template to work with different number types, not just ",(0,a.kt)("inlineCode",{parentName:"p"},"float"),". Normally in C# this wouldn't\nbe possible without a lot of trickery. In Evolve, because generics are just type name aliases, we can\nexpress this simply as ",(0,a.kt)("inlineCode",{parentName:"p"},"T.MinValue")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"T.MaxValue"),". We can even go further and call static methods  on\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," type such as ",(0,a.kt)("inlineCode",{parentName:"p"},"T.Parse()"),"."),(0,a.kt)("p",null,"Unlike in C#, Evolve's generics do no have the concept of constraints (the ",(0,a.kt)("inlineCode",{parentName:"p"},"where")," clause in C#). This means\nthat if you try to do a operation on ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," that is not defined, you'll get a compile error. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"template RangeSlider<T> {\n\n    required T value;\n    optional T minValue = T.MinValue;\n    optional T maxValue = T.MaxValue;\n    \n    render {\n        // content here, assume value is clamped between minValue and maxValue \n    }\n    \n}\n")))}u.isMDXComponent=!0}}]);