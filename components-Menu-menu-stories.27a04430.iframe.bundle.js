"use strict";(self.webpackChunkwood_ui=self.webpackChunkwood_ui||[]).push([[234],{"./src/components/Menu/menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ADefaultMenu:()=>ADefaultMenu,BClickMenu:()=>BClickMenu,COpenedMenu:()=>COpenedMenu,__namedExportsOrder:()=>__namedExportsOrder,default:()=>menu_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuContext=(0,react.createContext)({index:"0"}),Menu=props=>{const{className,mode,style,children,defaultIndex,onSelect,defaultOpenSubMenus}=props,[currentActive,setActive]=(0,react.useState)(defaultIndex),classes=classnames_default()("wd-menu",className,{"menu-vertical":"vertical"===mode,"menu-horizontal":"vertical"!==mode}),passedContext={index:currentActive||"0",onSelect:index=>{setActive(index),onSelect&&onSelect(index)},mode,defaultOpenSubMenus};return(0,jsx_runtime.jsx)("ul",{className:classes,style,"data-testid":"test-menu",children:(0,jsx_runtime.jsx)(MenuContext.Provider,{value:passedContext,children:react.Children.map(children,((child,index)=>{const childElement=child,{displayName}=childElement.type;if("MenuItem"===displayName||"SubMenu"===displayName)return react.cloneElement(childElement,{index:index.toString()});console.error("Warning: Menu has a child which is not a MenuItem component")}))})})};Menu.displayName="Menu",Menu.defaultProps={defaultIndex:"0",mode:"horizontal",defaultOpenSubMenus:[]};const Menu_menu=Menu;try{Menu.displayName="Menu",Menu.__docgenInfo={description:"为网站提供导航功能的菜单。支持横向纵向两种模式，支持下拉菜单。\n\n```javascript\nimport { Menu } from 'wood-ui'\n\n//然后可以使用 Menu.Item 和 Menu.Submenu 访问选项和子下拉菜单组件\n```",displayName:"Menu",props:{defaultIndex:{defaultValue:{value:"0"},description:"默认 active 的菜单项的索引值",name:"defaultIndex",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"菜单类型 横向或者纵向",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onSelect:{defaultValue:null,description:"点击菜单项触发的回掉函数",name:"onSelect",required:!1,type:{name:"((selectedIndex: string) => void)"}},defaultOpenSubMenus:{defaultValue:{value:"[]"},description:"设置子菜单的默认打开 只在纵向模式下生效",name:"defaultOpenSubMenus",required:!1,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menu.tsx#Menu"]={docgenInfo:Menu.__docgenInfo,name:"Menu",path:"src/components/Menu/menu.tsx#Menu"})}catch(__react_docgen_typescript_loader_error){}try{menu.displayName="menu",menu.__docgenInfo={description:"为网站提供导航功能的菜单。支持横向纵向两种模式，支持下拉菜单。\n\n```javascript\nimport { Menu } from 'wood-ui'\n\n//然后可以使用 Menu.Item 和 Menu.Submenu 访问选项和子下拉菜单组件\n```",displayName:"menu",props:{defaultIndex:{defaultValue:{value:"0"},description:"默认 active 的菜单项的索引值",name:"defaultIndex",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"菜单类型 横向或者纵向",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onSelect:{defaultValue:null,description:"点击菜单项触发的回掉函数",name:"onSelect",required:!1,type:{name:"((selectedIndex: string) => void)"}},defaultOpenSubMenus:{defaultValue:{value:"[]"},description:"设置子菜单的默认打开 只在纵向模式下生效",name:"defaultOpenSubMenus",required:!1,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menu.tsx#menu"]={docgenInfo:menu.__docgenInfo,name:"menu",path:"src/components/Menu/menu.tsx#menu"})}catch(__react_docgen_typescript_loader_error){}var icon=__webpack_require__("./src/components/Icon/icon.tsx"),transition=__webpack_require__("./src/components/Transition/transition.tsx");const SubMenu=({index,title,children,className})=>{const context=(0,react.useContext)(MenuContext),openedSubMenus=context.defaultOpenSubMenus,isOpend=!(!index||"vertical"!==context.mode)&&openedSubMenus.includes(index),[menuOpen,setOpen]=(0,react.useState)(isOpend),classes=classnames_default()("menu-item submenu-item",className,{"is-active":context.index===index,"is-opened":menuOpen,"is-vertical":"vertical"===context.mode});let timer;const handleMouse=(e,toggle)=>{clearTimeout(timer),e.preventDefault(),timer=setTimeout((()=>{setOpen(toggle)}),300)},clickEvents="vertical"===context.mode?{onClick:e=>{e.preventDefault(),setOpen(!menuOpen)}}:{},hoverEvents="vertical"!==context.mode?{onMouseEnter:e=>{handleMouse(e,!0)},onMouseLeave:e=>{handleMouse(e,!1)}}:{};return(0,jsx_runtime.jsxs)("li",{className:classes,...hoverEvents,children:[(0,jsx_runtime.jsxs)("div",{className:"submenu-title",...clickEvents,children:[title,(0,jsx_runtime.jsx)(icon.Z,{icon:"angle-down",className:"arrow-icon"})]}),(()=>{const subMenuClasses=classnames_default()("wd-submenu",{"menu-opened":menuOpen}),childrenComponent=react.Children.map(children,((child,i)=>{const childElement=child;if("MenuItem"===childElement.type.displayName)return react.cloneElement(childElement,{index:`${index}-${i}`});console.error("Warning: SubMenu has a child which is not a MenuItem component")}));return(0,jsx_runtime.jsx)(transition.Z,{in:menuOpen,timeout:300,animation:"zoom-in-top",children:(0,jsx_runtime.jsx)("ul",{className:subMenuClasses,children:childrenComponent})})})()]},index)};SubMenu.displayName="SubMenu",SubMenu.displayName="SubMenu";const subMenu=SubMenu;try{SubMenu.displayName="SubMenu",SubMenu.__docgenInfo={description:"",displayName:"SubMenu",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"下拉菜单选项的文字",name:"title",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"下拉菜单选型的扩展类名",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/subMenu.tsx#SubMenu"]={docgenInfo:SubMenu.__docgenInfo,name:"SubMenu",path:"src/components/Menu/subMenu.tsx#SubMenu"})}catch(__react_docgen_typescript_loader_error){}const MenuItem=props=>{const{index,disabled,className,style,children}=props,context=(0,react.useContext)(MenuContext),classes=classnames_default()("menu-item",className,{"is-disabled":disabled,"is-active":context.index===index});return(0,jsx_runtime.jsx)("li",{className:classes,style,onClick:()=>{context.onSelect&&!disabled&&"string"==typeof index&&context.onSelect(index)},children})};MenuItem.displayName="MenuItem",MenuItem.displayName="MenuItem";const menuItem=MenuItem;try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"",displayName:"MenuItem",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"选项是否被禁用",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"选项扩展的 className",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"选项的自定义 style",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menuItem.tsx#MenuItem"]={docgenInfo:MenuItem.__docgenInfo,name:"MenuItem",path:"src/components/Menu/menuItem.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}const TransMenu=Menu_menu;TransMenu.Item=menuItem,TransMenu.SubMenu=subMenu;const components_Menu=TransMenu,menu_stories={title:"Menu",id:"Menu",component:components_Menu},ADefaultMenu=args=>(0,jsx_runtime.jsxs)(components_Menu,{defaultIndex:"0",...args,children:[(0,jsx_runtime.jsx)(components_Menu.Item,{children:"cool link"}),(0,jsx_runtime.jsx)(components_Menu.Item,{children:"cool link 2"}),(0,jsx_runtime.jsx)(components_Menu.Item,{disabled:!0,children:"disabled"}),(0,jsx_runtime.jsxs)(components_Menu.SubMenu,{title:"下拉选项",children:[(0,jsx_runtime.jsx)(components_Menu.Item,{children:"下拉选项一"}),(0,jsx_runtime.jsx)(components_Menu.Item,{children:"下拉选项二"})]})]});ADefaultMenu.displayName="ADefaultMenu",ADefaultMenu.storyName="默认Menu";const BClickMenu=args=>(0,jsx_runtime.jsxs)(components_Menu,{...args,defaultIndex:"0",mode:"vertical",children:[(0,jsx_runtime.jsx)(components_Menu.Item,{children:"cool link"}),(0,jsx_runtime.jsx)(components_Menu.Item,{children:"cool link 2"}),(0,jsx_runtime.jsxs)(components_Menu.SubMenu,{title:"点击下拉选项",children:[(0,jsx_runtime.jsx)(components_Menu.Item,{children:"下拉选项一"}),(0,jsx_runtime.jsx)(components_Menu.Item,{children:"下拉选项二"})]})]});BClickMenu.displayName="BClickMenu",BClickMenu.storyName="纵向的 Menu";const COpenedMenu=args=>(0,jsx_runtime.jsxs)(components_Menu,{...args,defaultIndex:"0",mode:"vertical",defaultOpenSubMenus:["2"],children:[(0,jsx_runtime.jsx)(components_Menu.Item,{children:"cool link"}),(0,jsx_runtime.jsx)(components_Menu.Item,{children:"cool link 2"}),(0,jsx_runtime.jsxs)(components_Menu.SubMenu,{title:"默认展开下拉选项",children:[(0,jsx_runtime.jsx)(components_Menu.Item,{children:"下拉选项一"}),(0,jsx_runtime.jsx)(components_Menu.Item,{children:"下拉选项二"})]})]});COpenedMenu.displayName="COpenedMenu",COpenedMenu.storyName="默认展开的纵向 Menu",ADefaultMenu.parameters={...ADefaultMenu.parameters,docs:{...ADefaultMenu.parameters?.docs,source:{originalSource:'(args: any) => <Menu defaultIndex="0" {...args}>\n    <Menu.Item>cool link</Menu.Item>\n    <Menu.Item>cool link 2</Menu.Item>\n    <Menu.Item disabled>disabled</Menu.Item>\n    <Menu.SubMenu title="下拉选项">\n      <Menu.Item>下拉选项一</Menu.Item>\n      <Menu.Item>下拉选项二</Menu.Item>\n    </Menu.SubMenu>\n  </Menu>',...ADefaultMenu.parameters?.docs?.source}}},BClickMenu.parameters={...BClickMenu.parameters,docs:{...BClickMenu.parameters?.docs,source:{originalSource:'(args: any) => <Menu {...args} defaultIndex="0" mode="vertical">\n    <Menu.Item>cool link</Menu.Item>\n    <Menu.Item>cool link 2</Menu.Item>\n    <Menu.SubMenu title="点击下拉选项">\n      <Menu.Item>下拉选项一</Menu.Item>\n      <Menu.Item>下拉选项二</Menu.Item>\n    </Menu.SubMenu>\n  </Menu>',...BClickMenu.parameters?.docs?.source}}},COpenedMenu.parameters={...COpenedMenu.parameters,docs:{...COpenedMenu.parameters?.docs,source:{originalSource:'(args: any) => <Menu {...args} defaultIndex="0" mode="vertical" defaultOpenSubMenus={["2"]}>\n    <Menu.Item>cool link</Menu.Item>\n    <Menu.Item>cool link 2</Menu.Item>\n    <Menu.SubMenu title="默认展开下拉选项">\n      <Menu.Item>下拉选项一</Menu.Item>\n      <Menu.Item>下拉选项二</Menu.Item>\n    </Menu.SubMenu>\n  </Menu>',...COpenedMenu.parameters?.docs?.source}}};const __namedExportsOrder=["ADefaultMenu","BClickMenu","COpenedMenu"];try{ADefaultMenu.displayName="ADefaultMenu",ADefaultMenu.__docgenInfo={description:"",displayName:"ADefaultMenu",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menu.stories.tsx#ADefaultMenu"]={docgenInfo:ADefaultMenu.__docgenInfo,name:"ADefaultMenu",path:"src/components/Menu/menu.stories.tsx#ADefaultMenu"})}catch(__react_docgen_typescript_loader_error){}try{BClickMenu.displayName="BClickMenu",BClickMenu.__docgenInfo={description:"",displayName:"BClickMenu",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menu.stories.tsx#BClickMenu"]={docgenInfo:BClickMenu.__docgenInfo,name:"BClickMenu",path:"src/components/Menu/menu.stories.tsx#BClickMenu"})}catch(__react_docgen_typescript_loader_error){}try{COpenedMenu.displayName="COpenedMenu",COpenedMenu.__docgenInfo={description:"",displayName:"COpenedMenu",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menu.stories.tsx#COpenedMenu"]={docgenInfo:COpenedMenu.__docgenInfo,name:"COpenedMenu",path:"src/components/Menu/menu.stories.tsx#COpenedMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Icon/icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Icon=props=>{const{className,theme,...restProps}=props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("wd-icon",className,{[`icon-${theme}`]:theme});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.G,{className:classes,...restProps})};Icon.displayName="Icon";const __WEBPACK_DEFAULT_EXPORT__=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"提供了一套常用的图标集合 基于 react-fontawesome。\n\n支持 react-fontawesome的所有属性 可以在这里查询 https://github.com/FortAwesome/react-fontawesome#basic\n\n支持 fontawesome 所有 free-solid-icons，可以在这里查看所有图标 https://fontawesome.com/icons?d=gallery&s=solid&m=free\n### 引用方法\n\n~~~js\nimport { Icon } from 'wood-ui'\n~~~",displayName:"Icon",props:{theme:{defaultValue:null,description:"支持框架主题 根据主题显示不同的颜色",name:"theme",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/Icon/icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}try{icon.displayName="icon",icon.__docgenInfo={description:"提供了一套常用的图标集合 基于 react-fontawesome。\n\n支持 react-fontawesome的所有属性 可以在这里查询 https://github.com/FortAwesome/react-fontawesome#basic\n\n支持 fontawesome 所有 free-solid-icons，可以在这里查看所有图标 https://fontawesome.com/icons?d=gallery&s=solid&m=free\n### 引用方法\n\n~~~js\nimport { Icon } from 'wood-ui'\n~~~",displayName:"icon",props:{theme:{defaultValue:null,description:"支持框架主题 根据主题显示不同的颜色",name:"theme",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/icon.tsx#icon"]={docgenInfo:icon.__docgenInfo,name:"icon",path:"src/components/Icon/icon.tsx#icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Transition/transition.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_transition_group__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Transition=props=>{const{children,classNames,animation,wrapper,...restProps}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.Z,{classNames:classNames||animation,...restProps,children:wrapper?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children}):children})};Transition.displayName="Transition",Transition.defaultProps={unmountOnExit:!0,appear:!0};const __WEBPACK_DEFAULT_EXPORT__=Transition;try{transition.displayName="transition",transition.__docgenInfo={description:"",displayName:"transition",props:{classNames:{defaultValue:null,description:"The animation `classNames` applied to the component as it enters or exits.\nA single name can be provided and it will be suffixed for each stage: e.g.\n\n`classNames=\"fade\"` applies `fade-enter`, `fade-enter-active`,\n`fade-exit`, `fade-exit-active`, `fade-appear`, and `fade-appear-active`.\n\nEach individual classNames can also be specified independently like:\n\n```js\nclassNames={{\n  appear: 'my-appear',\n  appearActive: 'my-appear-active',\n  appearDone: 'my-appear-done',\n  enter: 'my-enter',\n  enterActive: 'my-enter-active',\n  enterDone: 'my-enter-done',\n  exit: 'my-exit',\n  exitActive: 'my-exit-active',\n  exitDone: 'my-exit-done'\n}}\n```",name:"classNames",required:!1,type:{name:"string | CSSTransitionClassNames"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"enum",value:[{value:'"zoom-in-top"'},{value:'"zoom-in-left"'},{value:'"zoom-in-bottom"'},{value:'"zoom-in-right"'}]}},wrapper:{defaultValue:null,description:"",name:"wrapper",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Transition/transition.tsx#transition"]={docgenInfo:transition.__docgenInfo,name:"transition",path:"src/components/Transition/transition.tsx#transition"})}catch(__react_docgen_typescript_loader_error){}}}]);