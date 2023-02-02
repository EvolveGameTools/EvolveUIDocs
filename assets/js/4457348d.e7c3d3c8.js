"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,g=u["".concat(p,".").concat(c)]||u[c]||s[c]||l;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},97500:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Mapping Method Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"focus:gain")),(0,r.kt)("td",{parentName:"tr",align:null},"OnFocusGained(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/FocusChangeEvent"},"FocusChangeEvent"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"focus:lost")),(0,r.kt)("td",{parentName:"tr",align:null},"OnFocusLost(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/FocusChangeEvent"},"FocusChangeEvent"),")")))))}o.isMDXComponent=!0},70242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),l=n(97500);const o={},i="Companion Types",p={unversionedId:"templates/top_level_declarations/companions",id:"templates/top_level_declarations/companions",title:"Companion Types",description:"",source:"@site/docs/templates/top_level_declarations/companions.md",sourceDirName:"templates/top_level_declarations",slug:"/templates/top_level_declarations/companions",permalink:"/EvolveUIDocs/docs/templates/top_level_declarations/companions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"conceptual",previous:{title:"Styles",permalink:"/EvolveUIDocs/docs/templates/top_level_declarations/members/style_list"},next:{title:"Decorators",permalink:"/EvolveUIDocs/docs/templates/top_level_declarations/decorator"}},d={},m=[{value:"Mapping values from companions",id:"mapping-values-from-companions",level:2},{value:"Mapping event and life cycle handlers from companions",id:"mapping-event-and-life-cycle-handlers-from-companions",level:2}],u={toc:m};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"companion-types"},"Companion Types"),(0,r.kt)("p",null,"A companion is any type that is declared in C# that is bound to your ",(0,r.kt)("inlineCode",{parentName:"p"},"template"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"typography"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"function")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"decorator"),"\ndeclaration. The purpose of a companion is to provide a generic way to integrate C# code with a template."),(0,r.kt)("p",null,"A type is valid as a companion as long as it is public and defines a parameterless constructor or is a struct."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// C# type somewhere in your project\n\npublic struct SomeCompanion {\n    \n    public int hitPoints;\n    \n    public string currentLevelName;\n    \n    public void ReloadWeapon() {\n        // assume this does work in your game\n    }\n    \n}\n\n// ... some template file ...\n\n// : typeName syntax declares a companion type binding for this template\n// there can only be 1 companion per template. When declaring a companion type,\n// a new built-in variable becomes available in the template: $companion. \n// this refers to the companion instance for this template. From this reference\n// you can use any public field, method, property, or event that the type exposes. \ntemplate ThingWithCompanion : SomeCompanion {\n\n    render {\n    \n        Text($"Current Level is {$companion.currentLevelName}")\n        \n        HealthBar($companion.hitPoints);\n        \n        // you can call methods exposed on the companion instance\n        Button("Reload", mouse:click => $companion.ReloadWeapon());\n        \n    }\n    \n}\n\n')),(0,r.kt)("h2",{id:"mapping-values-from-companions"},"Mapping values from companions"),(0,r.kt)("p",null,"You can map values from a companion in the same way you could map them from ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// c# file \npublic class Inventory {\n    \n    public int selectedItemIndex;\n    \n    public string[] GetItemNames() { ... }\n    \n    public string GetEquippedItemName(int itemIndex) { ... }\n    \n}\n\n// template file \ntemplate InventoryUI : Inventory {\n\n    // we alias the selectedItemIndex parameter from the selectedItemIndex field on the companion\n    required int selectedItemIndex from $companion.selectedItemIndex;\n    \n    // when mapping from a companion, if the companion's field name matches the template's declared name\n    // then you can omit the field name. This line is the same as the one above but shorter. \n    required int selectedItemIndex from $companion;\n    \n    method string[] GetItemNames() from $companion; // when mapping a method, the signatures must match exactly.\n    \n    // you can pick a different name for the template value if you specify the source explicitly;\n    method string GetItemName(int itemIndex) from $companion.GetEquippedItemName;\n}\n\n")),(0,r.kt)("h2",{id:"mapping-event-and-life-cycle-handlers-from-companions"},"Mapping event and life cycle handlers from companions"),(0,r.kt)("p",null,"An event or life cycle can also be mapped from the companion. As long as the signatures match\nbetween the event you are mapping and the method on the companion instance, the mapping is valid."),(0,r.kt)("p",null,"There is also a shorthand for mapping both input event names and life cycle handlers. For lifecycle events\nthe return type is ignored and can be anything as long as your mapping method defines no parameters."),(0,r.kt)("p",null,"The name mapping table for lifecycle events is below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Method Mapping Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"before:create")),(0,r.kt)("td",{parentName:"tr",align:null},"OnBeforeCreate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"after:create")),(0,r.kt)("td",{parentName:"tr",align:null},"OnAfterCreate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"before:enable")),(0,r.kt)("td",{parentName:"tr",align:null},"OnBeforeEnable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"after:enable")),(0,r.kt)("td",{parentName:"tr",align:null},"OnAfterEnable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"before:update")),(0,r.kt)("td",{parentName:"tr",align:null},"OnBeforeUpdate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"after:update")),(0,r.kt)("td",{parentName:"tr",align:null},"OnAfterUpdate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"before:input")),(0,r.kt)("td",{parentName:"tr",align:null},"OnBeforeInput")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"after:input")),(0,r.kt)("td",{parentName:"tr",align:null},"OnAfterInput")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"before:finish")),(0,r.kt)("td",{parentName:"tr",align:null},"OnBeforeFinish")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"after:finish")),(0,r.kt)("td",{parentName:"tr",align:null},"OnAfterFinish")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"before:disable")),(0,r.kt)("td",{parentName:"tr",align:null},"OnBeforeDisable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"after:disable")),(0,r.kt)("td",{parentName:"tr",align:null},"OnAfterDisable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"before:destroy")),(0,r.kt)("td",{parentName:"tr",align:null},"OnBeforeDestroy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"after:destroy")),(0,r.kt)("td",{parentName:"tr",align:null},"OnAfterDestroy")))),(0,r.kt)("p",null,"There is a similar mapping table for input event names, however with the added caveat that signature of your method must also match"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Method Mapping Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mouse:enter")),(0,r.kt)("td",{parentName:"tr",align:null},"OnMouseEnter(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/MouseInputEvent"},"MouseInputEvent"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mouse:exit")),(0,r.kt)("td",{parentName:"tr",align:null},"OnMouseExit(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/MouseInputEvent"},"MouseInputEvent"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mouse:up")),(0,r.kt)("td",{parentName:"tr",align:null},"OnMouseUp(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/MouseInputEvent"},"MouseInputEvent"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mouse:down")),(0,r.kt)("td",{parentName:"tr",align:null},"OnMouseDown(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/MouseInputEvent"},"MouseInputEvent"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mouse:heldDown")),(0,r.kt)("td",{parentName:"tr",align:null},"OnMouseHeldDown(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/MouseInputEvent"},"MouseInputEvent"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mouse:move")),(0,r.kt)("td",{parentName:"tr",align:null},"OnMouseMove(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/MouseInputEvent"},"MouseInputEvent"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mouse:hover")),(0,r.kt)("td",{parentName:"tr",align:null},"OnMouseHover(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/MouseInputEvent"},"MouseInputEvent"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mouse:context")),(0,r.kt)("td",{parentName:"tr",align:null},"OnMouseContext(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/MouseInputEvent"},"MouseInputEvent"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mouse:scroll")),(0,r.kt)("td",{parentName:"tr",align:null},"OnMouseScroll(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/MouseInputEvent"},"MouseInputEvent"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mouse:click")),(0,r.kt)("td",{parentName:"tr",align:null},"OnMouseClick(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/MouseInputEvent"},"MouseInputEvent"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mouse:update")),(0,r.kt)("td",{parentName:"tr",align:null},"OnMouseUpdate(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/MouseInputEvent"},"MouseInputEvent"),")")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Mapping Method Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"key:down")),(0,r.kt)("td",{parentName:"tr",align:null},"OnKeyDown(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/KeyboardInputEvent"},"KeyboardInputEvent"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"key:heldDown")),(0,r.kt)("td",{parentName:"tr",align:null},"OnKeyHeldDown(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/KeyboardInputEvent"},"KeyboardInputEvent"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"key:up")),(0,r.kt)("td",{parentName:"tr",align:null},"OnKeyUp(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/KeyboardInputEvent"},"KeyboardInputEvent"),")")))),(0,r.kt)(l.ZP,{mdxType:"FocusEventTable"}),(0,r.kt)("p",null,"Drag create is a special snowflake because it accepts a ",(0,r.kt)("inlineCode",{parentName:"p"},"MouseInputEvent")," and expects to return an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"DragEvent"),".\nAll other drag handlers conform to the same signature requirements."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Mapping Method Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"drag:create")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/DragEvent"},"DragEvent")," OnDragCreate(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/MouseInputEvent"},"MouseInputEvent)"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Fires when a drag could begin. Returning null will not start a drag. Returning any other subclass of ",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/DragEvent"},"DragEvent")," will being a drag.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"drag:move<T>")),(0,r.kt)("td",{parentName:"tr",align:null},"OnDragMove(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/DragEvent"},"DragEvent"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Fires when a drag of type ",(0,r.kt)("inlineCode",{parentName:"td"},"T")," moves across this element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"drag:hover<T>")),(0,r.kt)("td",{parentName:"tr",align:null},"OnDragHover(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/DragEvent"},"DragEvent"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Fires when a drag of type ",(0,r.kt)("inlineCode",{parentName:"td"},"T")," hovers over this element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"drag:update<T>")),(0,r.kt)("td",{parentName:"tr",align:null},"OnDragUpdate(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/DragEvent"},"DragEvent"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Fires when a drag of type ",(0,r.kt)("inlineCode",{parentName:"td"},"T")," moves or hovers over this element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"drag:enter<T>")),(0,r.kt)("td",{parentName:"tr",align:null},"OnDragEnter(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/DragEvent"},"DragEvent"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Fires when a drag of type ",(0,r.kt)("inlineCode",{parentName:"td"},"T")," enters this element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"drag:exit<T>")),(0,r.kt)("td",{parentName:"tr",align:null},"OnDragExit(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/DragEvent"},"DragEvent"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Fires when a drag of type ",(0,r.kt)("inlineCode",{parentName:"td"},"T")," exits this element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"drag:drop<T>")),(0,r.kt)("td",{parentName:"tr",align:null},"OnDragDrop(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/DragEvent"},"DragEvent"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Fires when a drop event of type ",(0,r.kt)("inlineCode",{parentName:"td"},"T")," occurs on this element")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"drag:cancel<T>")),(0,r.kt)("td",{parentName:"tr",align:null},"OnDragCancel(",(0,r.kt)("a",{parentName:"td",href:"/docs/api_generated/uncategorized_generated/DragEvent"},"DragEvent"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Fires when a drag event of type ",(0,r.kt)("inlineCode",{parentName:"td"},"T")," is canceled on this element")))))}s.isMDXComponent=!0}}]);