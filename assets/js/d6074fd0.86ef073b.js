"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||r;return n?l.createElement(h,o(o({ref:t},m),{},{components:n})):l.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var l=n(87462),a=(n(67294),n(3905));const r={},o="Slots",i={unversionedId:"templates/top_level_declarations/members/slots",id:"templates/top_level_declarations/members/slots",title:"Slots",description:"Slots are a way of accepting template blocks from a calling context and displaying them inside another template.",source:"@site/docs/templates/top_level_declarations/members/slots.md",sourceDirName:"templates/top_level_declarations/members",slug:"/templates/top_level_declarations/members/slots",permalink:"/EvolveUIDocs/docs/templates/top_level_declarations/members/slots",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"conceptual",previous:{title:"Parameters",permalink:"/EvolveUIDocs/docs/templates/top_level_declarations/members/parameters"},next:{title:"Spawns",permalink:"/EvolveUIDocs/docs/templates/top_level_declarations/members/spawns"}},s={},c=[{value:"Implicit Slots",id:"implicit-slots",level:2},{value:"Default slot bodies",id:"default-slot-bodies",level:3},{value:"Trivial Containers",id:"trivial-containers",level:3},{value:"Named Slots",id:"named-slots",level:2},{value:"Dynamic Slots",id:"dynamic-slots",level:2},{value:"Multiple rendering",id:"multiple-rendering",level:2}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"slots"},"Slots"),(0,a.kt)("p",null,"Slots are a way of accepting template blocks from a calling context and displaying them inside another template. "),(0,a.kt)("p",null,"There are three types of slots"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"implicit"),(0,a.kt)("li",{parentName:"ul"},"named"),(0,a.kt)("li",{parentName:"ul"},"dynamic")),(0,a.kt)("h2",{id:"implicit-slots"},"Implicit Slots"),(0,a.kt)("p",null,"These are by far the most commonly used slots. This is the slot that is used whenever an element has children\nsuch as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'template Example render {\n\n    SomeSlottedElement() {\n        Text("This is inside the implicit slot");\n    }\n    \n}\n')),(0,a.kt)("p",null,"When overriding an implicit slot, you don't have to do anything special, just declare a block and use it.\nSome elements do not expose an implicit slot, the most common of which is ",(0,a.kt)("inlineCode",{parentName:"p"},"typography")," elements. "),(0,a.kt)("p",null,"To declare an implicit slot you need to use a declaration member as shown below. Addtionally you must actually\nrender the slot somewhere inside the render block of your template or the compiler will throw an error. This is\ndone to make an element's interface very clear. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'template ThingWithImplicitSlot {\n    \n    slot implicit; // declare that this element has an implicit slot\n    \n    render {\n        Text("Before Slot");\n        render slot->implicit; // render the slot\n        Text("After Slot");\n    }\n    \n}\n')),(0,a.kt)("h3",{id:"default-slot-bodies"},"Default slot bodies"),(0,a.kt)("p",null,"If a slot is not overridden, you can optionally provide a default block to render instead."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'template ThingWithImplicitSlot {\n    \n    slot implicit; // declare that this element has an implicit slot\n    \n    render {\n        Text("Before Slot");\n        \n        render slot->implicit {\n            Text("Rendered if the slot is not overridden");\n        }\n        \n        Text("After Slot");\n    }\n    \n}\n')),(0,a.kt)("h3",{id:"trivial-containers"},"Trivial Containers"),(0,a.kt)("p",null,"A trivial container is a template that does not define a render block. In these cases an\nimplicit slot is generated automatically, as it is assumed that is the intention of the element.\nIf you want to opt-out of the implicit slot generation, you can define a empty render block. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'\ntemplate Trivial;\n\ntemplate DoesNotAcceptChidren render {}\n\ntemplate UsingTrivial render {\n\n    Trivial() {\n        Text("Inside the implicit slot");\n    }\n    \n    DoesNotAcceptChildren(); // fine\n    \n    DoesNotAcceptChildren() {\n        // error, you cannot use the implicit slot because it is not defined\n        Text("Compile error!");\n    }\n    \n}\n')),(0,a.kt)("h2",{id:"named-slots"},"Named Slots"),(0,a.kt)("p",null,"A named slot is a named container that users of your template can optionally override. Unlike an implicit slot,\na named slot must be explicitly overridden. It can also accept parameters. Named slots can accept a default block."),(0,a.kt)("p",null,"A named slot is declared like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'template ThingWithNamedSlots {\n    \n    slot title(string s); // declare a named slot \'title\' that accepts a string\n    \n    slot content(int i, float f); // declare a named slot \'content\' that accepts an int and a float\n    \n    render {\n        Text("Before Slot");\n        \n        // when rendering the slot, the parameters must be passed in\n        render slot->title("Some Title");\n        \n        render slot->content(10, 100f) {\n            Text("Default slot body");\n        }\n        \n        Text("After Slot");\n    }\n    \n}\n\n// when overriding a slot, you can give the parameters whatever names you want, it is the order\n// that matters. When overriding slots, the implicit slot must be last. \ntemplate NamedSlotExample render {\n\n    ThingWithNamedSlots() {\n    \n        slot->title(str) {\n            Text($"The title is {str}");\n        }\n        \n        Text("Part of implicit slot");\n    }\n    \n}\n\n')),(0,a.kt)("h2",{id:"dynamic-slots"},"Dynamic Slots"),(0,a.kt)("p",null,"A dynamic slot is similar to a named slot in that it can accept arguments. There are two main differences:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A dynamic slot can only be declared once"),(0,a.kt)("li",{parentName:"ul"},"A dynamic slot can have a name provided by an expression not known at compile time")),(0,a.kt)("p",null,"Dynamic slots don't have a strict naming requirement, any string will do and there is not guarantee that\nthe slot will actually render, it is up to the declaring template to manage which dynamic slots get rendered."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'template ThingWithDynamicSlot {\n    \n    slot dynamic(string s); // declare a dynamic slot that accepts a string\n    \n    render {\n        Text("Before Slot");\n        \n        // when rendering the slot, the parameters must be passed in\n        // the [] \n        render slot->["one"]("Some string");\n        \n        render slot->[SomeExpressionReturningAString()]("Some string");\n        \n        render slot->["three"]("Some string") {\n            Text("Default slot body");\n        }\n        \n        Text("After Slot");\n    }\n    \n}\n\ntemplate SlotExample render {\n\n    ThingWithDynamicSlot() {\n    \n        slot->["one"](value) {\n            Text("Slot 1");\n        }\n        \n        slot->["two"](value) {\n            Text("Slot 2");\n        }\n        \n        slot->["three"](value) {\n            Text("Slot 3");\n        }\n        \n    }\n}\n\n')),(0,a.kt)("h2",{id:"multiple-rendering"},"Multiple rendering"),(0,a.kt)("p",null,"A slot can be rendered as many times as you like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'template ThingWithSlot {\n    \n    slot implicit;\n    \n    render {\n        Text("Before Slot");\n        \n        render slot->implicit;\n        render slot->implicit;\n        render slot->implicit;\n        render slot->implicit;\n        render slot->implicit;\n        \n        Text("After Slot");\n    }\n    \n}\n')))}p.isMDXComponent=!0}}]);