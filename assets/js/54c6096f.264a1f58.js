"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),y=o,m=c["".concat(s,".").concat(y)]||c[y]||h[y]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},20005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={},i="Set the Base Styles",l={unversionedId:"Tutorials/QuestLog/setBaseStyles",id:"Tutorials/QuestLog/setBaseStyles",title:"Set the Base Styles",description:"Stylesheets are incredibly powerful and provide a lot of intelligent solutions to drive flexibility in your designs.  There are over 100 different properties that you can use, and among other things, Evolve also comes with the ability to do queries, constants, and in-style variables. Stylesheets are scoped to modules which means that any styles the same level or lower in your module asset will be made available to all assets in the same module.",source:"@site/docs/Tutorials/QuestLog/setBaseStyles.mdx",sourceDirName:"Tutorials/QuestLog",slug:"/Tutorials/QuestLog/setBaseStyles",permalink:"/EvolveUIDocs/docs/Tutorials/QuestLog/setBaseStyles",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorials",previous:{title:"Define the Typography Elements",permalink:"/EvolveUIDocs/docs/Tutorials/QuestLog/definetypography"},next:{title:"Create the Main Screen",permalink:"/EvolveUIDocs/docs/Tutorials/QuestLog/createMainScreen"}},s={},p=[{value:"Typography styles",id:"typography-styles",level:2},{value:"Root styles",id:"root-styles",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-the-base-styles"},"Set the Base Styles"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"www.google.com"},"Stylesheets"))," are incredibly powerful and provide a lot of intelligent solutions to drive flexibility in your designs.  There are over 100 different properties that you can use, and among other things, Evolve also comes with the ability to do ",(0,o.kt)("a",{parentName:"p",href:"www.google.com"},"queries"),", ",(0,o.kt)("a",{parentName:"p",href:"www.google.com"},"constants"),", and ",(0,o.kt)("a",{parentName:"p",href:"www.google.com"},"in-style variables"),". Stylesheets are scoped to modules which means that any styles the same level or lower in your module asset will be made available to all assets in the same module."),(0,o.kt)("h2",{id:"typography-styles"},"Typography styles"),(0,o.kt)("p",null,"The first thing you will do is define the Title typography style. Create a new ",(0,o.kt)("strong",{parentName:"p"},"Style File")," and name it ",(0,o.kt)("strong",{parentName:"p"},"Typography"),". Open the file and add the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},'const H1_Font = "H1";\nconst H2_Font = "H2";\nconst Normal_Font = "Normal";\n\nconst PrimaryAccentColor = #77E2C7;\nconst SecondaryAccentColor = #BACED4;\n')),(0,o.kt)("p",null,"Evolve stylesheets can create a ",(0,o.kt)("strong",{parentName:"p"},"constant variable"),", which can be ",(0,o.kt)("strong",{parentName:"p"},"referenced by any style property"),". This is very handy for creating reusable values that you only need to change in one location. Constant variables require the ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," keyword, a ",(0,o.kt)("inlineCode",{parentName:"p"},"string id")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,o.kt)("p",null,"In the example above, a new constant is created called ",(0,o.kt)("inlineCode",{parentName:"p"},"H1_Font")," with the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"H1"),", which points to the font asset reference you defined in QuestLogModule earlier."),(0,o.kt)("p",null,"Next, add the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"style <Text_H1> {\n   TextColor = white;\n   TextTransform = UpperCase;\n   TextFontAsset = @H1_Font;\n   TextFontSize = 48px;\n}\n")),(0,o.kt)("p",null,"Styles require the ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," keyword, a ",(0,o.kt)("inlineCode",{parentName:"p"},"string Id"),", and curly braces (",(0,o.kt)("inlineCode",{parentName:"p"},"{ }"),"). All properties are defined within the curly braces.Surrounding a String Id with angle brackets ( ",(0,o.kt)("inlineCode",{parentName:"p"},"< >")," ) indicates that you want the style applied to any element that matches the tag type. Leaving the brackets off is the equivalent of a class style, which you must reference on an element. (You'll do this shortly.)"),(0,o.kt)("p",null,"In the code above, the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Text_H1>")," style will automatically be applied to any Typography element that has the same tag. The style has typical font properties, such as the font color and size. The ",(0,o.kt)("inlineCode",{parentName:"p"},"TextTransform")," property is used to ensure every character is uppercase. The ",(0,o.kt)("inlineCode",{parentName:"p"},"TextFontAsset")," property points to the ",(0,o.kt)("inlineCode",{parentName:"p"},"H1_Font")," constant defined at the top."),(0,o.kt)("p",null,"Add the rest of the typography styles in now:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"style <Text_H2> {\n    TextColor = white;\n    TextFontSize = 24px;\n    TextFontAsset = @H2_Font;\n\n    [attr:uppercase] {\n        TextTransform = UpperCase;\n    }\n}\n\nstyle <Text_H3> {\n    TextTransform = UpperCase;\n    TextFontAsset = @H1_Font;\n    TextFontSize = 48px;\n    TextColor = @PrimaryAccentColor;\n}\n")),(0,o.kt)("p",null,"Attributes are a way to extend your style to cover more scenarios. For example, when referencing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Text_H2")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Text_H3")," style, you can include the uppercase attribute to turn all character\u2019s upper case. Leave it off and they'll show up exactly how you entered them. You'll explore attributes in more depth shortly."),(0,o.kt)("h2",{id:"root-styles"},"Root styles"),(0,o.kt)("p",null,"The entry point for the QuestLog will be via an AppRoot template and will have a stylesheet. Create a new ",(0,o.kt)("strong",{parentName:"p"},"UI File"),", name it ",(0,o.kt)("strong",{parentName:"p"},"AppRoot"),", and check the ",(0,o.kt)("strong",{parentName:"p"},"Include Style File")," box. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"module",src:n(94031).Z,width:"320",height:"119"})),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"AppRoot.style")," and add the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},'style <AppRoot> {\n   BackgroundImage = "quest_log_background";\n   PaddingTop = 64px;\n   PaddingBottom = 64px;\n   PaddingLeft = 83px;\n   PaddingRight = 150px;\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<AppRoot>")," will automatically apply to the AppRoot template. The style properties set the background image to ",(0,o.kt)("inlineCode",{parentName:"p"},"quest_log_background"),", which was defined in the module asset earlier. It also sets the padding so that the children are brought in a bit."),(0,o.kt)("p",null,"Add two more styles:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},'style header-row {\n   PreferredWidth = 1s;\n   PaddingLeft = 1s;\n   PaddingRight = 1s;\n   LayoutType = Horizontal;\n   SpaceBetweenHorizontal = 18px;\n   MarginBottom = 75px;\n}\n\nstyle gradient-line {\n   MarginTop = 12px;\n   BackgroundImage = linear-gradient("GeneralModule::quest_gradient");\n   PreferredSize = 300px 4px;\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"header-row")," is a class style that will be set on the topmost div in AppRoot and is where all the title elements will sit."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PreferredWidth")," is set to 1s, which makes the element stretch the entire width of the div."),(0,o.kt)("li",{parentName:"ul"},"Setting ",(0,o.kt)("inlineCode",{parentName:"li"},"PaddingLeft")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"PaddingRight")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"1s")," tells the engine to center the content. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LayoutType")," specifies the direction that children should appear. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SpaceBetweenHorizontal")," adds an ",(0,o.kt)("inlineCode",{parentName:"li"},"18px")," gap between each element.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gradient-line")," introduces a new property, ",(0,o.kt)("inlineCode",{parentName:"p"},"BackgroundImage"),", which in this case is set to a ",(0,o.kt)("inlineCode",{parentName:"p"},"linear-gradient")," rather than an image. ",(0,o.kt)("inlineCode",{parentName:"p"},"Linear-gradient")," takes one property, which is a string id that points to a gradient in ",(0,o.kt)("inlineCode",{parentName:"p"},"GeneralModule"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"quest_gradient")," was defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"GeneralModule")," that was included in the starter project. References in other modules must be prefixed with the scope operator ",(0,o.kt)("inlineCode",{parentName:"p"},"::"),". See this ",(0,o.kt)("a",{parentName:"p",href:"www.google.com"},"article")," for more information.")),(0,o.kt)("p",null,"There are two UI Measurement types being used, ",(0,o.kt)("a",{parentName:"p",href:"www.google.com"},"pixel")," (",(0,o.kt)("inlineCode",{parentName:"p"},"px"),") and ",(0,o.kt)("a",{parentName:"p",href:"www.google.com"},"stretch")," (",(0,o.kt)("inlineCode",{parentName:"p"},"s"),"). Use pixel if you want to define the fixed pixel value that accounts for DPI scaling. Use stretch to tell Evolve to apply a portion of the \u2018remaining space\u2019 that the element has."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Another way to think about Stretch is that it is the equivalent of FlexGrow, which is used by the FlexBox CSS system and UI Toolkit. Read more about ",(0,o.kt)("a",{parentName:"p",href:"www.google.com"},"UIMeasurements")," here.")))}c.isMDXComponent=!0},94031:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);