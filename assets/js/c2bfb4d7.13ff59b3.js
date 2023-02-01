"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58714],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},i="Repeat",l={unversionedId:"Topics/BodyBlock/ControlFlow/repeat",id:"Topics/BodyBlock/ControlFlow/repeat",title:"Repeat",description:"Very often you need to display a list of things or the same thing multiple times.",source:"@site/docs/Topics/BodyBlock/ControlFlow/repeat.md",sourceDirName:"Topics/BodyBlock/ControlFlow",slug:"/Topics/BodyBlock/ControlFlow/repeat",permalink:"/EvolveUIDocs/docs/Topics/BodyBlock/ControlFlow/repeat",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"conceptual",previous:{title:"If / Else",permalink:"/EvolveUIDocs/docs/Topics/BodyBlock/ControlFlow/if_else"},next:{title:"Match",permalink:"/EvolveUIDocs/docs/Topics/BodyBlock/ControlFlow/switch"}},s={},p=[{value:"Count based repeat",id:"count-based-repeat",level:2},{value:"List based repeat",id:"list-based-repeat",level:2},{value:"Key Functions",id:"key-functions",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"repeat"},"Repeat"),(0,r.kt)("p",null,"Very often you need to display a list of things or the same thing multiple times. "),(0,r.kt)("p",null,"This can be easily achieved with a ",(0,r.kt)("inlineCode",{parentName:"p"},"repeat")," statement. "),(0,r.kt)("p",null,"The basic syntax for a ",(0,r.kt)("inlineCode",{parentName:"p"},"repeat")," is: ",(0,r.kt)("inlineCode",{parentName:"p"},"repeat(VARIABLE_NAME in EXPRESSION)")),(0,r.kt)("h2",{id:"count-based-repeat"},"Count based repeat"),(0,r.kt)("p",null,"To repeat a fixed number of times, just supply an expression that evaluates to an integer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'template RepeatSample render {\n\n    int count = 100;\n    \n    repeat(i in count) {\n        Text($"Showing {i}");\n    }\n    \n    repeat(i in count / 2) {\n        Text($"Showing {i}");\n    }\n    \n    repeat(i in 400) {\n        Text($"Showing {i}");\n    }\n    \n}\n\n')),(0,r.kt)("h2",{id:"list-based-repeat"},"List based repeat"),(0,r.kt)("p",null,"Usually you have a list of data that you want to repeat over. The basic syntax is the same as a count\nbased repeat. Additionally you can extrude the current index with ",(0,r.kt)("inlineCode",{parentName:"p"},"[index]"),". The list expression\ncan be anything conforming to ",(0,r.kt)("inlineCode",{parentName:"p"},"IEnumerable")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"IList"),". Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"IEnumerable")," is significantly slower due\nto a. possibly boxing a ",(0,r.kt)("inlineCode",{parentName:"p"},"IEnumerator")," instance and b. often requiring multiple enumeration to find a count.\nRepeating over ",(0,r.kt)("inlineCode",{parentName:"p"},"IList")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Array")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"IEnumerable")," is strongly encouraged! "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'template RepeatSample render {\n\n    int[] items = new int[] { 1, 2, 3 };\n    \n    repeat(item in items) [index] {\n        Text($"Showing {item} at {index}");\n    }\n        \n}\n\n')),(0,r.kt)("h2",{id:"key-functions"},"Key Functions"),(0,r.kt)("p",null,"Repeat also participates in Structural Identity which generally means that the indices in your list dictate\nthe scopes their items belong to. Most of the time this fine, but sometimes you need to make that one scope\nis always tied to one value in your list. If you have data that will be sorted or mutated, you need to make sure\nthe same UI elements are representing the same data every frame. You can ensure this by providing a ",(0,r.kt)("inlineCode",{parentName:"p"},"keyFn")," argument\nto your repeat. "),(0,r.kt)("p",null,"A key function is any function or lambda with the signature ",(0,r.kt)("inlineCode",{parentName:"p"},"int Fn<T>(T item)")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," is the type of the data in your list."),(0,r.kt)("p",null,"An example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"}," \n// some C# file\npublic static class Shuffle {\n\n    private static Random rnd = new Random();\n\n    public static int[] GetArray() {\n        return Enumerable.Range(0, 10).OrderBy(c => rnd.Next()).ToArray();\n    }\n\n}\n\n// some .ui file\ntemplate KeyFnSample render {\n    \n    // not a 'state', we get a new array one every time\n    // but the data is the same random sorting of integers 0-10\n    int[] ints = Shuffle.GetArray(); \n\n    // items will stay red by index when clicked on.\n    repeat(val in ints) {\n        state bool clicked = false;\n        Text(style:BackgroundColor = clicked ? `red` : `blue`, mouse:click = clicked = !clicked);\n    }\n    \n    // items will stay red by value.\n    repeat(val in ints, keyFn = (i) => i) { // identity key fn\n        state bool clicked = false;\n        Text(style:BackgroundColor = clicked ? `red` : `blue`, mouse:click = clicked = !clicked);\n    }\n    \n}\n\n")))}u.isMDXComponent=!0}}]);