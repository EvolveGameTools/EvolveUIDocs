"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||c;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<c;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},12073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const c={},a="Code Blocks",l={unversionedId:"Topics/BodyBlock/code_blocks",id:"Topics/BodyBlock/code_blocks",title:"Code Blocks",description:"...and in the render scope",source:"@site/docs/Topics/BodyBlock/code_blocks.md",sourceDirName:"Topics/BodyBlock",slug:"/Topics/BodyBlock/code_blocks",permalink:"/EvolveUIDocs/docs/Topics/BodyBlock/code_blocks",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"conceptual",previous:{title:"Match",permalink:"/EvolveUIDocs/docs/Topics/BodyBlock/ControlFlow/switch"},next:{title:"Render Block",permalink:"/EvolveUIDocs/docs/Topics/BodyBlock/entities"}},i={},s=[{value:"...and in the <code>render</code> scope",id:"and-in-the-render-scope",level:2},{value:"Outside of the <code>render</code> scope",id:"outside-of-the-render-scope",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"code-blocks"},"Code Blocks"),(0,r.kt)("h2",{id:"and-in-the-render-scope"},"...and in the ",(0,r.kt)("a",{parentName:"h2",href:"./entities"},(0,r.kt)("inlineCode",{parentName:"a"},"render"))," scope"),(0,r.kt)("p",null,"As templates are executed it can be helpful to inject C# logic in some places, directly in the template. This\ncan be easily achieved using a code block in a template. "),(0,r.kt)("p",null,"There are three types of code block "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"run")," which is executed every frame"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"create")," which is executed in the frame the containing scope was created"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enable")," which is executed in the frame the containing scope was enabled")),(0,r.kt)("p",null,"All blocks have the same syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'template BlockSample render {\n\n    run Debug.Log("As a statement without a block");\n    run {\n        int x = 4;\n        x *= 10;\n        Debug.Log("with a block multiple statements will be executed");\n    }\n\n    create Debug.Log("Runs when the scope gets created");\n    create {\n        Debug.Log("Runs when the scope gets created");\n        Debug.Log("Runs when the scope gets created");\n    }\n    \n    enable Debug.Log("Runs when the scope gets enabled");\n    enable {\n        Debug.Log("Runs when the scope gets enabled");\n        Debug.Log("Runs when the scope gets enabled");\n    }\n    \n}\n\n')),(0,r.kt)("p",null,"There are no ",(0,r.kt)("inlineCode",{parentName:"p"},"disable")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"destroy")," blocks because destruction is handled asynchronously."),(0,r.kt)("h2",{id:"outside-of-the-render-scope"},"Outside of the ",(0,r.kt)("inlineCode",{parentName:"h2"},"render")," scope"),(0,r.kt)("p",null,"There are no code blocks outside of the render scope. Instead you'll be able to define\nlife cycle and other local methods. Be sure not to confuse the ",(0,r.kt)("inlineCode",{parentName:"p"},"enable")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," code\nblock with the similarly named life cycle methods. Read more about those in the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/Topics/TopLevelDeclarations/Entities/Members/lifecycle"},"life cycle documentation")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'template BlockSample {\n\n    // parameters, attributes, styles and life cycle methods go here\n    \n    before:enable => Debug.Log("this runs before the enable code block runs");\n\n    render {\n        enable {\n            // ...\n        }\n    }        \n}\n')))}d.isMDXComponent=!0}}]);