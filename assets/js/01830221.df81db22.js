"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?s.createElement(m,o(o({ref:t},c),{},{components:n})):s.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},31806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var s=n(87462),a=(n(67294),n(3905));const r={},o="Show the Quest Details",i={unversionedId:"Tutorials/QuestLog/showQuestDetails",id:"Tutorials/QuestLog/showQuestDetails",title:"Show the Quest Details",description:"The last piece of this tutorial is to show the player the details of the quest that they've selected. This is easy to setup and by the end, you'll have a layout that looks like this:",source:"@site/docs/Tutorials/QuestLog/showQuestDetails.mdx",sourceDirName:"Tutorials/QuestLog",slug:"/Tutorials/QuestLog/showQuestDetails",permalink:"/EvolveUIDocs/docs/Tutorials/QuestLog/showQuestDetails",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorials",previous:{title:"Populate the Quest List",permalink:"/EvolveUIDocs/docs/Tutorials/QuestLog/populateQuestList"}},l={},u=[{value:"Refactor AppRoot",id:"refactor-approot",level:2},{value:"Create the QuestDetails template",id:"create-the-questdetails-template",level:2},{value:"Refactor QuestList",id:"refactor-questlist",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,s.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"show-the-quest-details"},"Show the Quest Details"),(0,a.kt)("p",null,"The last piece of this tutorial is to show the player the details of the quest that they've selected. This is easy to setup and by the end, you'll have a layout that looks like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"no animation",src:n(83747).Z,width:"1403",height:"868"})),(0,a.kt)("h2",{id:"refactor-approot"},"Refactor AppRoot"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SelectionManager")," will be used to determine whether the quest details should be shown. Open ",(0,a.kt)("inlineCode",{parentName:"p"},"AppRoot.ui")," and add a new if statement to the last div:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"template AppRoot : AppRoot() {\n    //Original code above\n\n   Div(style = [@master-detail-container])\n   {\n        QuestList(selectionManager, questList = allQuests);\n        \n        //highlight-start\n        if(selectionManager.selectedQuest != null) {\n            QuestDetails(selectionManager.selectedQuest);\n        }\n        //highlight-end\n   }\n}\n")),(0,a.kt)("h2",{id:"create-the-questdetails-template"},"Create the QuestDetails template"),(0,a.kt)("p",null,"There's one final template to create! Create new UI and Style Files named ",(0,a.kt)("strong",{parentName:"p"},"QuestDetails"),". Open ",(0,a.kt)("inlineCode",{parentName:"p"},"QuestDetails.ui")," and add the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using QuestLog;\n\nelement QuestDetails {\n    implicit Quest quest;\n}\n\ntemplate QuestDetails : element QuestDetails() {\n\n     run {\n        if (quest.Objectives != null) { \n            System.Array.Sort(quest.Objectives); \n        }\n     }\n     \n    Text(quest.Title, style = [@quest-detail-title]);\n    Text(quest.Description, style = [@quest-detail-description]);\n    \n    Group(style = [@quest-rewards-objectives-container]) {\n        \n        Group(style = [@quest-objectives]) {\n            \n            Text_H3("Objective Log");\n                         \n            foreach(objective in quest.Objectives) {\n                \n                Group(style = [@quest-objective-line]) {\n                    \n                    var string questText = $"<color #25FFC4>{objective.DestroyedObjects}/{objective.DestroyRequirement}<color white> Objects Destroyed";\n\n                    Checkbox(attr:checked = objective.Completed, attr:colorized);\n                    Text(questText, style = [@quest-objective-text]);\n                }\n            }\n        }\n        \n        Group() {\n            Text_H3("Rewards");\n             \n            Group(style = [@reward-list]) {\n\n               foreach(reward in quest.Rewards) {\n                    Div(style = [@reward-frame]) {\n                        Image(src = reward.Asset, style = [@reward-image]);                                       \n                    }\n               } \n            }\n        }\n    }\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Run")," block is sorting all of the ",(0,a.kt)("inlineCode",{parentName:"p"},"quest.Objectives")," be completed state. The rest of the code is creating text and container elements that are organizing the quest data into relevant blocks for proper formatting. "),(0,a.kt)("p",null,"The last thing to do is add the missing styles. Open ",(0,a.kt)("inlineCode",{parentName:"p"},"QuestDetails.style")," and add the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'style <QuestDetails> {\n    PreferredSize = 1s;\n    PaddingTop = 48px;\n}\n\nstyle quest-objective-line {\n    LayoutType = Horizontal;\n    SpaceBetweenHorizontal = 10px;\n    PaddingTop = 1s;\n    PaddingBottom = 1s;\n}\n\nstyle quest-detail-title {\n    TextColor = @PrimaryAccentColor;\n    TextFontAsset = @H1_Font;\n    TextFontSize = 60px;\n    MarginBottom = 20px;\n}\n\nstyle quest-rewards-objectives-container {\n    PreferredWidth = 1s;\n    Padding = 100px 25px;\n    LayoutType = Horizontal;\n}\n\nstyle quest-detail-description {\n    PreferredWidth = 1s;\n    TextColor = @SecondaryAccentColor;\n    TextFontAsset = @Normal_Font;\n    TextFontSize = 24px;\n}\n\nstyle quest-objective-text {\n    TextFontSize = 28px;\n    TextColor = #979698;\n    TextFontAsset = @Normal_Font;\n}\n\nstyle quest-objectives {\n    PreferredSize = 1s;\n    SpaceBetweenVertical = 20px;\n}\n\nstyle reward-list {\n    LayoutType = Horizontal;\n    SpaceBetweenHorizontal = 8px;\n    AlignmentOffsetX = -4px;\n}\n\nstyle reward-frame {\n    PreferredSize = 1bw 1bh;\n    BackgroundImage = "quest_reward_frame";\n    Padding = 1s;\n}\n\nstyle reward-image {\n    PreferredSize = 1bw 1bh;\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"See ","[INSERT DOC]"," if you would like to dig into any of the style properties.")),(0,a.kt)("p",null,"Run or reload the project and select any of the quests to see the details."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"no animation",src:n(83747).Z,width:"1403",height:"868"})),(0,a.kt)("h2",{id:"refactor-questlist"},"Refactor QuestList"),(0,a.kt)("p",null,"There's one final issue to fix. QuestDetails element is being redrawn every frame since ",(0,a.kt)("inlineCode",{parentName:"p"},"SelectionManager")," always has a quest listed as selected. This adds unncessary overhead but is easy to fix with just one line of code in the ",(0,a.kt)("inlineCode",{parentName:"p"},"QuestFilter_OnClick")," action located in ",(0,a.kt)("inlineCode",{parentName:"p"},"QuestList.UI"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"    state Action<UIElement, QuestStatus> QuestFilter_OnClick = (el, newStatus) => {\n        //Original code above\n       \n       //highlight-start\n        selectionManager.Deselect();\n       //highlight-end\n    };\n")))}p.isMDXComponent=!0},83747:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/showQuestDetails_Finished-65aefd8934d75263902e440dc927edc9.png"}}]);