/*! For license information please see components-Table-table-stories.70d6c9dc.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkwood_ui=self.webpackChunkwood_ui||[]).push([[902],{"./src/components/Table/table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BaseTable:()=>BaseTable,ScrollTable:()=>ScrollTable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>table_stories});var react=__webpack_require__("./node_modules/react/index.js");function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}const clsx_m=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n};const getUUid=()=>((size=21)=>crypto.getRandomValues(new Uint8Array(size)).reduce(((id,byte)=>id+((byte&=63)<36?byte.toString(36):byte<62?(byte-26).toString(36).toUpperCase():byte>62?"-":"_")),""))();var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Table(props){const{bordered,headerWidth,dataSource=[],columns,className,scroll,tableLayout}=props,baseColumns=react.useMemo((()=>columns),[columns]),horizonScroll=scroll&&function validateValue(val){return null!=val}(scroll.x),fixColumn=horizonScroll&&columns.some((({fixed})=>fixed)),mergedTableLayout=react.useMemo((()=>tableLayout||(fixColumn?"max-content"===scroll?.x?"auto":"fixed":"auto")),[fixColumn]);let scrollXStyle={},scrollTableStyle={};horizonScroll&&(scrollXStyle={overflowX:"auto"},scrollTableStyle={width:!0===scroll?.x?"auto":scroll?.x,minWidth:"100%"});return(0,jsx_runtime.jsx)("div",{className:clsx_m(className,"wd-table-wrap",{"wd-table-wrap-bordered":bordered}),children:(0,jsx_runtime.jsx)("div",{className:"wd-table-container",children:(0,jsx_runtime.jsx)("div",{className:"wd-table-content",style:{...scrollXStyle},children:(0,jsx_runtime.jsxs)("table",{className:"wd-table",style:{...scrollTableStyle,tableLayout:mergedTableLayout},children:[(0,jsx_runtime.jsxs)("colgroup",{children:[headerWidth?(0,jsx_runtime.jsx)("col",{style:{width:headerWidth}},getUUid()):null,dataSource.map((dataItem=>(0,jsx_runtime.jsx)("col",{style:{width:dataItem.width||"auto"}},dataItem.key)))]}),(0,jsx_runtime.jsx)("tbody",{className:"wd-table-tbody",children:baseColumns?.map(((col,columnIndex)=>{const dataIndex=`${col.dataIndex}`;return(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{className:"wd-th",children:col.title}),dataSource?.map(((rowData,rowIndex)=>(0,jsx_runtime.jsx)("td",{className:"wd-table-cell",children:col.render?col.render(rowData[dataIndex],rowData,rowIndex):rowData[dataIndex]},getUUid())))]},dataIndex)}))})]})})})})}Table.displayName="Table";const table=Table;try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},dataSource:{defaultValue:null,description:"",name:"dataSource",required:!1,type:{name:"readonly RecordType[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ColumnsType<RecordType>"}},rowKey:{defaultValue:null,description:"",name:"rowKey",required:!1,type:{name:"string"}},headerWidth:{defaultValue:null,description:"",name:"headerWidth",required:!1,type:{name:"string"}},tableLayout:{defaultValue:null,description:"",name:"tableLayout",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"auto"'}]}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"",name:"scroll",required:!1,type:{name:"{ x?: string | number | true; y?: string | number; } | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"src/components/Table/table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}const table_stories={title:"Table",component:table},dataSource=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园1号"}],scrollDataSource=[{key:"1",name:"杨幂",age:28,address:"上海市徐汇区漕溪北路888号"},{key:"2",name:"刘亦菲",age:34,address:"北京市朝阳区三里屯路5号"},{key:"3",name:"周杰伦",age:42,address:"台北市信义区松山路20号"},{key:"4",name:"迪丽热巴",age:30,address:"乌鲁木齐市天山区解放南路66号"},{key:"5",name:"吴亦凡",age:28,address:"广州市天河区珠江新城花城大道1号"},{key:"6",name:"范冰冰",age:39,address:"北京市朝阳区工体北路11号"},{key:"7",name:"王思聪",age:34,address:"北京市海淀区西四环北路32号"},{key:"8",name:"张艺兴",age:29,address:"重庆市渝中区解放碑步行街99号"},{key:"9",name:"杨颖",age:32,address:"上海市静安区南京西路100号"},{key:"10",name:"鹿晗",age:31,address:"北京市海淀区中关村大街18号"}],columns=[{title:"姓名",dataIndex:"name",key:"name",fixed:!0},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}],BaseTable=()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(table,{headerWidth:"100px",bordered:!0,columns,dataSource})});BaseTable.storyName="纵向-基本表格";const ScrollTable=()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(table,{headerWidth:"100px",scroll:{x:1300},bordered:!0,columns,dataSource:scrollDataSource})});ScrollTable.storyName="纵向-滚动的表格",BaseTable.parameters={...BaseTable.parameters,docs:{...BaseTable.parameters?.docs,source:{originalSource:'() => <>\n    <Table headerWidth="100px" bordered columns={columns} dataSource={dataSource} />\n  </>',...BaseTable.parameters?.docs?.source}}},ScrollTable.parameters={...ScrollTable.parameters,docs:{...ScrollTable.parameters?.docs,source:{originalSource:'() => <>\n    <Table headerWidth="100px" scroll={{\n    x: 1300\n  }} bordered columns={columns} dataSource={scrollDataSource} />\n  </>',...ScrollTable.parameters?.docs?.source}}};const __namedExportsOrder=["BaseTable","ScrollTable"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);