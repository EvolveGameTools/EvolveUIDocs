"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},l="Render Block",i={unversionedId:"Topics/BodyBlock/entities",id:"Topics/BodyBlock/entities",title:"Render Block",description:"Within a render block you declare the structure of your UI elements and optionally run inline logic.",source:"@site/docs/Topics/BodyBlock/entities.md",sourceDirName:"Topics/BodyBlock",slug:"/Topics/BodyBlock/entities",permalink:"/EvolveUIDocs/docs/Topics/BodyBlock/entities",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"conceptual",previous:{title:"Code Blocks",permalink:"/EvolveUIDocs/docs/Topics/BodyBlock/code_blocks"},next:{title:"Markers",permalink:"/EvolveUIDocs/docs/Topics/BodyBlock/markers"}},s={},c=[{value:"Parameter",id:"parameter",level:2},{value:"Const",id:"const",level:2},{value:"Decorators",id:"decorators",level:2},{value:"Input Handlers",id:"input-handlers",level:2},{value:"Lifecycle Handlers",id:"lifecycle-handlers",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"render-block"},"Render Block"),(0,a.kt)("p",null,"Within a ",(0,a.kt)("inlineCode",{parentName:"p"},"render")," block you declare the structure of your UI elements and optionally run inline logic. "),(0,a.kt)("p",null,"There are four basic entity types that are usable inside a ",(0,a.kt)("inlineCode",{parentName:"p"},"render"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"template"),(0,a.kt)("li",{parentName:"ul"},"typography"),(0,a.kt)("li",{parentName:"ul"},"function"),(0,a.kt)("li",{parentName:"ul"},"decorators")),(0,a.kt)("p",null,"A template is the bread and butter of Evolve, it is by far the most used entity type. "),(0,a.kt)("p",null,"To render a template, all you need to do is refer to it by name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"render {\n    SomeTemplate();\n    \n    AnotherTemplate();\n}\n\n")),(0,a.kt)("p",null,"Just like you can add custom behavior while declaring a template, you can also add custom behavior when rendering. "),(0,a.kt)("p",null,"Here are the things you can customize"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"parameters"),(0,a.kt)("li",{parentName:"ul"},"attributes"),(0,a.kt)("li",{parentName:"ul"},"styles"),(0,a.kt)("li",{parentName:"ul"},"instance styles"),(0,a.kt)("li",{parentName:"ul"},"lifecycle handlers"),(0,a.kt)("li",{parentName:"ul"},"input handlers"),(0,a.kt)("li",{parentName:"ul"},"onChange handlers"),(0,a.kt)("li",{parentName:"ul"},"decorators")),(0,a.kt)("h2",{id:"parameter"},"Parameter"),(0,a.kt)("p",null,"Passing a parameter to an entity is simple: just provide an expression and optionally a key. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"render {\n    NumberInput<int>(value = 10);\n}\n")),(0,a.kt)("p",null,"Parameters are passed following the same methodology as C# named arguments. "),(0,a.kt)("p",null,"Sometimes you want to pass a value into an entity and then later read that same value back out.\nOne easy way to do this is with a ",(0,a.kt)("inlineCode",{parentName:"p"},"sync")," modifier. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"render {\n    state int someValue = 10;\n    NumberInput<int>(sync:value = someValue);\n    // after the NumberInput completes its update, `someValue` will be set to the same value as the NumberInput's `value` parameter\n    run Debug.Log(someValue);\n}\n")),(0,a.kt)("h2",{id:"const"},"Const"),(0,a.kt)("p",null,"Because Evolve re-executes your templates every frame, there are cases where you need to allocate memory\nor perform some other expensive operation, but only want to do it once. In these cases you can apply a\n",(0,a.kt)("inlineCode",{parentName:"p"},"const")," modifier to your parameter, attribute, or instance style expression."),(0,a.kt)("p",null,"Note that when you pass in a lambda expression as a parameter, Evolve automatically adds a ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," for you. "),(0,a.kt)("p",null,"Const cannot be used when ",(0,a.kt)("inlineCode",{parentName:"p"},"sync")," is present."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"render {\n\n    SomeElementA(const value = SomeExpensiveOperation());\n    \n    // const is implicitly added for you because of the lambda declaration\n    SomeElementB(action = () => SomeExpensiveOperation());\n    \n    // adding const yourself is not an error but is not nessessary\n    SomeElementB(const action = () => SomeExpensiveOperation());\n    \n}\n")),(0,a.kt)("h2",{id:"decorators"},"Decorators"),(0,a.kt)("h2",{id:"input-handlers"},"Input Handlers"),(0,a.kt)("h2",{id:"lifecycle-handlers"},"Lifecycle Handlers"))}u.isMDXComponent=!0}}]);