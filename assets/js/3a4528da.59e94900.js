"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70587],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,u=m["".concat(s,".").concat(h)]||m[h]||c[h]||r;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73276:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={},s="Set the Base Styles",p={unversionedId:"Tutorials/QuestLog/createRootStylesheet",id:"Tutorials/QuestLog/createRootStylesheet",title:"Set the Base Styles",description:"Stylesheets are incredibly powerful and provide a lot of intelligent solutions to drive flexibility in your designs. Evolve stylesheets are scoped to modules which means that any styles the same level or lower in your .uimodule asset will be made available to all .ui assets in the same module. You can reference cross module templates & styles with the scope operator ::. See  for more information.",source:"@site/docs/Tutorials/QuestLog/createRootStylesheet.mdx",sourceDirName:"Tutorials/QuestLog",slug:"/Tutorials/QuestLog/createRootStylesheet",permalink:"/EvolveUIDocs/docs/Tutorials/QuestLog/createRootStylesheet",tags:[],version:"current",frontMatter:{},sidebar:"tutorials",previous:{title:"Define the Typography Elements",permalink:"/EvolveUIDocs/docs/Tutorials/QuestLog/definetypography"},next:{title:"Create the Main Screen",permalink:"/EvolveUIDocs/docs/Tutorials/QuestLog/defineRootTemplate"}},d={},c=[{value:"Typography styles",id:"typography-styles",level:2},{value:"Root styles",id:"root-styles",level:2}],m={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"set-the-base-styles"},"Set the Base Styles"),(0,r.kt)("p",null,"Stylesheets are incredibly powerful and provide a lot of intelligent solutions to drive flexibility in your designs. Evolve stylesheets are scoped to modules which means that any styles the same level or lower in your .uimodule asset will be made available to all .ui assets in the same module. You can reference cross module templates & styles with the scope operator ::. See {INSERT} for more information."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There are over 100 different properties that you can use, and among other things, Evolve also comes with the ability to do queries, constants, and in-style variables! You\u2019ll dig into each of these more throughout the tutorial."))),(0,r.kt)("h2",{id:"typography-styles"},"Typography styles"),(0,r.kt)("p",null,"The first thing you will do is define the Title typography style. Open ",(0,r.kt)("strong",{parentName:"p"},"Typography.style")," and add the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'const H1_Font = "H1";\nconst H2_Font = "H2";\nconst Normal_Font = "Normal";\n\nconst PrimaryAccentColor = "PrimaryAccentColor";\nconst SecondaryAccentColor = "SecondaryAccentColor";\n')),(0,r.kt)("p",null,"Evolve stylesheets have the ability to create a ",(0,r.kt)("strong",{parentName:"p"},"constant variable"),", which can be ",(0,r.kt)("strong",{parentName:"p"},"referenced by any style property"),". This is very handy for creating reusable values that you only need to change in one location. Constant variables require the ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," keyword, a ",(0,r.kt)("inlineCode",{parentName:"p"},"string id")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,r.kt)("p",null,"In the example above, a new constant is created called ",(0,r.kt)("inlineCode",{parentName:"p"},"titleFont")," with the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"H1"),", which points to the asset you defined in Compilation earlier."),(0,r.kt)("p",null,"Next, add the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"style <Text_H1> {\n   TextColor = white;\n   TextTransform = UpperCase;\n   TextFontAsset = @H1_Font;\n   TextFontSize = 48px;\n}\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Styles require the ",(0,r.kt)("inlineCode",{parentName:"p"},"style")," keyword, a ",(0,r.kt)("inlineCode",{parentName:"p"},"string Id"),", and curly braces (",(0,r.kt)("inlineCode",{parentName:"p"},"{ }"),"). All properties are defined within the curly braces. "),(0,r.kt)("p",{parentName:"div"},"String Id's that are surrounded by angle brackets ( ",(0,r.kt)("inlineCode",{parentName:"p"},"< >")," ) tell Evolve that you want the style applied to any element that matches the tag type. Leaving the brackets off is the equivalent of a class style, which you have to specifically reference on an element."))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Text_H1>")," style will automatically be applied to any Typography element that has the same tag. The style has typical font properties, such as the font color and size. The ",(0,r.kt)("inlineCode",{parentName:"p"},"TextTransform")," property is used to ensure every character is uppercase. The ",(0,r.kt)("inlineCode",{parentName:"p"},"TextFontAsset")," property points to the ",(0,r.kt)("inlineCode",{parentName:"p"},"H1_Font")," constant defined at the top."),(0,r.kt)("p",null,"Lets save you some time and add the rest of the typography styles in now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"style <Text_H2> {\n    TextColor = white;\n    TextFontSize = 24px;\n    TextFontAsset = @H2_Font;\n\n    [attr:uppercase] {\n        TextTransform = UpperCase;\n    }\n}\n\nstyle <Text_H3> {\n    TextTransform = UpperCase;\n    TextFontAsset = @H1_Font;\n    TextFontSize = 48px;\n    TextColor = @PrimaryAccentColor;\n}\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Attributes are a way to extend your style to cover more scenarios. For example, when referencing the Text_H2 or Text_H3 style, you can include the uppercase attribute to turn all characters upper case. Leave it off and they'll show up exactly how you entered them. You'll explore attributes in more depth shortly."))),(0,r.kt)("h2",{id:"root-styles"},"Root styles"),(0,r.kt)("p",null,"The root styles will go in a different style file. Right click on the ",(0,r.kt)("strong",{parentName:"p"},"UserInterface")," folder and select ",(0,r.kt)("strong",{parentName:"p"},"Create")," > ",(0,r.kt)("strong",{parentName:"p"},"Evolve")," > ",(0,r.kt)("strong",{parentName:"p"},"UI File"),". Name it ",(0,r.kt)("strong",{parentName:"p"},"AppRoot")," and check ",(0,r.kt)("strong",{parentName:"p"},"Create Style"),". Add the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'style <AppRoot> {\n   BackgroundImage = "quest_log_background";\n   PaddingTop = 64px;\n   PaddingBottom = 64px;\n   PaddingLeft = 83px;\n   PaddingRight = 150px;\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<AppRoot>")," will automatically apply to the AppRoot template. The style properties set the background image to ",(0,r.kt)("inlineCode",{parentName:"p"},"quest_log_background"),", which was defined in the module asset earlier. It also sets the padding so that the children are brought in a bit."),(0,r.kt)("p",null,"Add two more styles:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'style header-row {\n   PreferredWidth = 1s;\n   PaddingLeft = 1s;\n   PaddingRight = 1s;\n   LayoutType = Horizontal;\n   SpaceBetweenHorizontal = 18px;\n   MarginBottom = 75px;\n}\n\nstyle gradient-line {\n   MarginTop = 12px;\n   BackgroundImage = linear-gradient("quest_gradient");\n   PreferredSize = 300px 4px;\n}\n')),(0,r.kt)("p",null,"There are two UI Measurement types being used, pixel (",(0,r.kt)("inlineCode",{parentName:"p"},"px"),") and stretch (",(0,r.kt)("inlineCode",{parentName:"p"},"s"),"). Use pixel if you want to define the fixed pixel value that accounts for DPI scaling. Use stretch to tell Evolve to apply a portion of the \u2018remaining space\u2019 that the element has."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Another way to think about Stretch is that it\u2019s the equivalent of FlexGrow, which is used by the FlexBox CSS system and UI Toolkit. Read more about UIMeasurements here."))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"header-row")," is a class style that will be set on the top most div in AppRoot and is where all the title elements will sit."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PreferredWidth")," is set to 1s, which makes the element **stretch the entire width of the div."),(0,r.kt)("li",{parentName:"ul"},"Setting ",(0,r.kt)("inlineCode",{parentName:"li"},"PaddingLeft")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"PaddingRight")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"1s")," tells the engine to center the content. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LayoutType")," specifies the direction that children should appear. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SpaceBetweenHorizontal")," adds an ",(0,r.kt)("inlineCode",{parentName:"li"},"18px")," gap between each element.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gradient-line")," introduces a new property, ",(0,r.kt)("inlineCode",{parentName:"p"},"BackgroundImage"),", which in this case is set to a ",(0,r.kt)("inlineCode",{parentName:"p"},"linear-gradient")," rather than an image. ",(0,r.kt)("inlineCode",{parentName:"p"},"Linear-gradient")," takes one property, which is a string id that points to a gradient in the module asset."))}h.isMDXComponent=!0}}]);