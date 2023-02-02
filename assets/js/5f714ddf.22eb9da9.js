"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31260],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),h=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=h(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=h(t),p=i,m=d["".concat(s,".").concat(p)]||d[p]||u[p]||r;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var h=2;h<r;h++)l[h]=t[h];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},78017:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var a=t(87462),i=(t(67294),t(3905));const r={},l="Style Queries",o={unversionedId:"styles/style_queries",id:"styles/style_queries",title:"Style Queries",description:"Basic State Queries",source:"@site/docs/styles/style_queries.mdx",sourceDirName:"styles",slug:"/styles/style_queries",permalink:"/EvolveUIDocs/docs/styles/style_queries",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"conceptual",previous:{title:"Style Properties",permalink:"/EvolveUIDocs/docs/styles/style_properties_generated"},next:{title:"Style Syntax",permalink:"/EvolveUIDocs/docs/styles/style_syntax"}},s={},h=[{value:"Basic State Queries",id:"basic-state-queries",level:2},{value:"Hover",id:"hover",level:3},{value:"Focus",id:"focus",level:3},{value:"Active",id:"active",level:3},{value:"Init",id:"init",level:3},{value:"Hierarchy State Queries",id:"hierarchy-state-queries",level:2},{value:"Attribute Queries",id:"attribute-queries",level:2},{value:"Hierarchy Attribute Queries",id:"hierarchy-attribute-queries",level:2},{value:"Child Count Queries",id:"child-count-queries",level:2},{value:"Child Index Queries",id:"child-index-queries",level:2},{value:"Only Child",id:"only-child",level:3},{value:"First and Last Child",id:"first-and-last-child",level:3},{value:"Nth-Child",id:"nth-child",level:3},{value:"Even and Odd Children",id:"even-and-odd-children",level:3},{value:"Tag Queries",id:"tag-queries",level:2},{value:"Condition Queries",id:"condition-queries",level:2}],c={toc:h};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"style-queries"},"Style Queries"),(0,i.kt)("h2",{id:"basic-state-queries"},"Basic State Queries"),(0,i.kt)("h3",{id:"hover"},"Hover"),(0,i.kt)("p",null,"Hover is active on elements that the mouse or other non-touch pointing device is currently over.\nIt works by finding the deepest element in the list of all elements that intersect or contain the point\nand then all elements that are ancestors of that element are also marked as hovered."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"style hover-me {\n    [hover] {\n        BackgroundColor = hotpink;\n    }\n}\n")),(0,i.kt)("h3",{id:"focus"},"Focus"),(0,i.kt)("p",null,"Focus is set explicitly by the runtime when an element becomes focused. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"style focus-me {\n    [focus] {\n        TextFontSize = 100px;\n    }\n}\n")),(0,i.kt)("h3",{id:"active"},"Active"),(0,i.kt)("p",null,"Active is triggered on the element that the mouse was down on (following the same hierarchy rules as ",(0,i.kt)("inlineCode",{parentName:"p"},"[hover]"),") and continues to apply until\nthe mouse is up."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"style handle-active {\n    [active] {\n        CornerRadiusTopLeft = 50%;\n    }\n}\n")),(0,i.kt)("h3",{id:"init"},"Init"),(0,i.kt)("p",null,"Init is set on elements for only the frame in which they were first created or became enabled. This is useful for tracking animations values or transitons."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"On the first frame set opacity to 0 and then transition it the default value (100%) \nstyle handle-init {\n\n    transition spring(default) = Opacity;\n\n    [init] {\n        Opacity = 0%;\n    }\n}\n\n")),(0,i.kt)("h2",{id:"hierarchy-state-queries"},"Hierarchy State Queries"),(0,i.kt)("p",null,"States within an element's hierarchy can be queried using a more advanced form of the state selectors.\nThe examples below will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"focus")," state but the same behavior applies to ",(0,i.kt)("inlineCode",{parentName:"p"},"hover"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"active")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," as well"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nstyle fade-when-ancestor-focused {\n\n    [focus ancestor] {\n        Opacity = 50%;\n    }\n\n}\n\nstyle turn-blue-when-child-focused {\n\n   [focus child] {\n        BackgroundColor = blue;\n   }\n\n}\n\nstyle round-corners-when-parent-focused {\n\n    [focus parent] {\n        CornerRadius = 25%;\n    }\n\n}\n\nstyle padd-left-when-descendant-focused {\n    \n    [focus descendant] {\n        PaddingLeft = 25px;\n    }\n\n}\n")),(0,i.kt)("h2",{id:"attribute-queries"},"Attribute Queries"),(0,i.kt)("p",null,"Elements can also be styled based on the presence or lack of attributes that were set either in a ",(0,i.kt)("inlineCode",{parentName:"p"},"ui")," file or from C#.\nStyling can be done by either checking if the attribute key exists and matching any value, or by specifically matching\nonly certain values. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"style handle-selected {\n    // no value defined so as long as the element has a 'selected' \n    // attribute the text will be yellow\n    [attr:selected] {\n        TextColor = yellow;\n    }\n\n    // this will only match when the element has the attribute 'selected' \n    // and the value of that attribute is 'selection1'\n    [attr:selected=\"selection1\"] {\n        BackgroundColor = blue;\n    }\n\n}\n")),(0,i.kt)("p",null,"We can also style based on the lack of an attribute match"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"style handle-selected {\n\n    // if the element doesn't have a 'selected' attribute, make the text red\n    [unless attr:selected] {\n        TextColor = red;\n    }\n\n    // this will match if the element either doesn't have the attribute 'selected', \n    // or it has the 'selected' attribute but the value is NOT equal to 'selection1'\n    [unless attr:selected=\"selection1\"] {\n        BackgroundColor = blue;\n    }\n\n}\n")),(0,i.kt)("h2",{id:"hierarchy-attribute-queries"},"Hierarchy Attribute Queries"),(0,i.kt)("p",null,"Similar to how states can be queried across the hierarchy, attributes can also be queried."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'style check-ancestor-attribute {\n\n    [when ancestor attr:key] {\n    }\n\n    [when ancestor attr:key = "SomeValue"] {\n    }\n}\n \nstyle check-children-attribute {\n    [when child attr:key] {}\n\n    [when child attr:key = "SomeValue"] {}\n}\n\nstyle check-descendant-attribute {\n\n    [when child attr:key] {}\n\n    [when child attr:key = "SomeValue"] {}\n\n}\n\nstyle check-parent-attribute {\n\n   [when parent attr:key] {}\n\n   [when parent attr:key = "SomeValue"] {}\n}\n\n')),(0,i.kt)("h2",{id:"child-count-queries"},"Child Count Queries"),(0,i.kt)("p",null,"You can also style an element based on how many children it has and even pass in a comparison expression.\nThe numeric comparison value must be a positive integer constant. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"style red-when-empty {\n    \n    // no children \n    [when empty] {\n        BackgroundColor = red;\n    }\n\n    // same as [when empty] above\n    [when child-count(0)] {\n        BackgroundColor = red;\n    }\n\n}\n\nstyle child-count {\n\n    [when child-count(== 2)] {}\n\n    [when child-count(!= 2)] {}\n\n    [when child-count(<= 10)] {}\n\n    [when child-count(>= 10)] {}\n\n    [when child-count(> 5)] {}\n\n    [when child-count(< 5)] {}\n}\n\n")),(0,i.kt)("h2",{id:"child-index-queries"},"Child Index Queries"),(0,i.kt)("p",null,"It is often helpful to know if an element you are styling is the first child, or the last child or at some other index.\nChild Index Queries exist for exactly this purpose and are quite powerful! "),(0,i.kt)("h3",{id:"only-child"},"Only Child"),(0,i.kt)("p",null,"Matches when the element is the ony child within a parent"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"style blue-text-when-lonely {\n    [when only-child] {\n        TextColor = blue;\n    }\n}\n")),(0,i.kt)("h3",{id:"first-and-last-child"},"First and Last Child"),(0,i.kt)("p",null,"Matches when the element is the first child of its parent or the last child respectively"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"style first-child-turns-orange-last-child-turns-green {\n\n    [when first-child] {\n        BackgroundColor = orange;\n    }\n\n    [when last-child] {\n        BackgroundColor = green;\n    }\n\n}\n")),(0,i.kt)("h3",{id:"nth-child"},"Nth-Child"),(0,i.kt)("p",null,"Takes a function expression that describes how children will be matched by this query in a 1-based indexing scheme.\nWorks identically to n-th child expression in ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child"},"css")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"style fancy-matching {\n\n    // turn the element outline white if it is the second child \n    [when nth-child(2)] {\n        OutlineColor = white;\n    }\n\n    // turn every fourth element pink\n    [when nth-child(4n)] {\n        BackgroundColor = pink;\n    }\n\n    // turn the first three element blue\n    [when nth-child(-n + 3)] {\n        BackgroundColor = blue;\n    }\n\n    // turns all elements except the first three yellow\n    [when nth-child(n + 3)] {\n        BackgroundColor = yellow;\n    }\n\n    // Turns elements 4 [=(3\xd70)+4], 7 [=(3\xd71)+4], 10 [=(3\xd72)+4], 13 [=(3\xd73)+4], etc black\n    [when nth-child(3n + 4) {\n        BackgroundColor = black;\n    }\n\n}\n")),(0,i.kt)("h3",{id:"even-and-odd-children"},"Even and Odd Children"),(0,i.kt)("p",null,"Matches when the element is at an even or odd child index"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\nstyle alternate-fonts {\n\n    [when nth-child(odd)] {\n        TextFontAsset = "Font1";\n    }\n\n    [when nth-child(even)] {\n        TextFontAsset = "Font2";\n    }\n\n}\n\n')),(0,i.kt)("h2",{id:"tag-queries"},"Tag Queries"),(0,i.kt)("p",null,"Elements can also be styled based on their tag name with relational filtering. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"style tag-based-styling {\n\n   [when tag(TagName)] \n   [when tag(ModuleName::TagName)] \n     \n   [when root-tag(TagName)] \n   [when root-tag(ModuleName::TagName)]\n   \n   [when parent-tag(TagName)]\n   [when parent-tag(ModuleName::TagName)]\n \n   [when ancestor-tag(TagName)]\n   [when ancestor-tag(ModuleName::TagName)]\n   \n   [when child-with-tag(TagName)]\n   [when child-with-tag(ModuleName::TagName)]\n   \n   [when descendant-with-tag(TagName)]\n   [when descendant-with-tag(ModuleName::TagName)]\n   \n   [when first-with-tag(TagName)]\n   [when first-with-tag(ModuleName::TagName)]\n   \n   [when last-with-tag(TagName)]\n   [when last-with-tag(ModuleName::TagName)]\n   \n   [when only-with-tag(TagName)]\n   [when only-with-tag(ModuleName::TagName)]\n\n}\n\n")),(0,i.kt)("h2",{id:"condition-queries"},"Condition Queries"),(0,i.kt)("p",null,"Sometimes you just need more power. Maybe you're implementing a resposive design or maybe you\nhave a game that enters a certain state and you want to change the look of some elements based\non game state. With condition queries you can make up your own query logic and have the style\nsystem respond to it. Unlike the other query types listed so far, condition queries require\nsome C# code to work. "),(0,i.kt)("p",null,"Here is how to define them. First we need to make callback that matches the delegate type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ndelegate bool StyleConditionEvaluator(UIView view, DeviceInfo deviceInfo);\n\n// DeviceInfo has the following interface:\n\nstruct DeviceInfo {\n    float dpiScale;\n    float GetScaledScreenWidth();\n    float GetScaledScreenHeight();\n}\n\n")),(0,i.kt)("p",null,"This example will style an element differently depending on the aspect ratio of our screen.\nSo let's provide conditions callbacks to check if width is larger than height and vice versa;\nWhile this example is super simple, you can run any code you want in this function. Maybe you\nwant to check if your player is injured, or possesses some item, or if the internet connection got\ninterrupted in an MMO game... you can make this do whatever you like. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"StyleConditionEvaluator widthLarger = (UIView view, DeviceInfo deviceInfo) => {\n    return Screen.width > Screen.height;\n};\n\nStyleConditionEvaluator heightLarger = (UIView view, DeviceInfo deviceInfo) => {\n    return Screen.height > Screen.width;\n};\n\n")),(0,i.kt)("p",null,"Now we need to register these functions with our UIApplication using the ",(0,i.kt)("inlineCode",{parentName:"p"},"SetStyleCondition")," api. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'UIApplication application; // assume you set this somehow, probably from your UIRoot.\n\napplication.SetStyleCondition("WidthIsLarger", widthLarger);\napplication.SetStyleCondition("HeightIsLarger", heightLarger);\n\n')),(0,i.kt)("p",null,"The evaluator functions are called every frame and are invoked once per active view in the application\n(Hence the ",(0,i.kt)("inlineCode",{parentName:"p"},"UIView")," argument in the ",(0,i.kt)("inlineCode",{parentName:"p"},"StyleConditionEvaluator")," delegate). Now that our functions are\nsetup, let's write a style that can use them. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'style size-based-on-screen-aspect {\n\n    // if the screen width is larger than height, make our width 500px\n    [when "WidthIsLarger"] {\n        PreferredWidth = 500px;                \n    }\n\n    // if the screen width is smaller than height, make our width 250px\n    [when "HeightIsLarger"] {\n        PreferredWidth = 250px;                \n    }\n\n}\n\n')))}d.isMDXComponent=!0}}]);