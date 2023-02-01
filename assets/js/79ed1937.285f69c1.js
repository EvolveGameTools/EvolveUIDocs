"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1,sidebar_label:"Getting Started",sidebar_class_name:"green"},l="Installation",i={unversionedId:"getting_started/index",id:"getting_started/index",title:"Installation",description:"Unity",source:"@site/docs/getting_started/index.md",sourceDirName:"getting_started",slug:"/getting_started/",permalink:"/EvolveUIDocs/docs/getting_started/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Getting Started",sidebar_class_name:"green"},sidebar:"conceptual",previous:{title:"Introduction",permalink:"/EvolveUIDocs/docs/Introduction"},next:{title:"If / Else",permalink:"/EvolveUIDocs/docs/Topics/BodyBlock/ControlFlow/if_else"}},s={},c=[{value:"Unity",id:"unity",level:2},{value:"Package Manager",id:"package-manager",level:3},{value:"Manual",id:"manual",level:3},{value:"Rider",id:"rider",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"unity"},"Unity"),(0,a.kt)("h3",{id:"package-manager"},"Package Manager"),(0,a.kt)("p",null,"Evolve can be installed via Unity's Package Manager by:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"})),(0,a.kt)("h3",{id:"manual"},"Manual"),(0,a.kt)("p",null,"You can download the latest version of Evolve from here. {Instructions for extraction}"),(0,a.kt)("h2",{id:"rider"},"Rider"),(0,a.kt)("p",null,"Evolve comes with a plugin for Rider that enables intellisense and styling for easier development."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Steps here")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The below contains text pulled out of the QuestLog tutorial. This article should transform to describe the point of the UI Reloader script")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Camera")," sets the camera that will render the UI. This property will automatically default to the Main camera when not set."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Job Threads")," specifies how many threads the Burst compiler can use for running the UI. The default is set to 4 because allowing Burst to use all the system threads can lead to a slower update time."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DPI Scale")," lets you override the default dots per inch (DPI) that the monitor has - which effectively allows you to scale the UI up or down."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Disable Batching")," is for debugging only and tells the render system not to optimize draw calls. It should be used with the frame debugger to see how things render.")),(0,a.kt)("p",null,"---- DELETE"),(0,a.kt)("p",null,"Add two more ",(0,a.kt)("strong",{parentName:"p"},"Colors"),", which will be used by the font assets later:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Name"),": PrimaryAccentColor and ",(0,a.kt)("strong",{parentName:"li"},"Color"),": #77E2C7"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Name"),": SecondaryAccentColor and **Co")))}p.isMDXComponent=!0}}]);