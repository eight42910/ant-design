(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["P7X929FC"],{P7X929FC:function(e,a,n){n.d(a,"__esModule",{value:!0}),n.d(a,"default",{enumerable:!0,get:function(){return t;}});var r=n("8Z0rk4BW"),l=n("WyIMPUJp"),s=n("qdGieaVz");n("O82Y73GL");let d=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sydney No. 1 Lake Park"},{key:"4",name:"Jim Red",age:32,address:"London No. 2 Lake Park"}];var t=()=>{let[e,a]=(0,l.useState)({}),[n,t]=(0,l.useState)({}),o=[{title:"Name",dataIndex:"name",key:"name",filters:[{text:"Joe",value:"Joe"},{text:"Jim",value:"Jim"}],filteredValue:e.name||null,onFilter:(e,a)=>a.name.includes(e),sorter:(e,a)=>e.name.length-a.name.length,sortOrder:"name"===n.columnKey?n.order:null,ellipsis:!0},{title:"Age",dataIndex:"age",key:"age",sorter:(e,a)=>e.age-a.age,sortOrder:"age"===n.columnKey?n.order:null,ellipsis:!0},{title:"Address",dataIndex:"address",key:"address",filters:[{text:"London",value:"London"},{text:"New York",value:"New York"}],filteredValue:e.address||null,onFilter:(e,a)=>a.address.includes(e),sorter:(e,a)=>e.address.length-a.address.length,sortOrder:"address"===n.columnKey?n.order:null,ellipsis:!0}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.Space,{style:{marginBottom:16},children:[(0,r.jsx)(s.Button,{onClick:()=>{t({order:"descend",columnKey:"age"});},children:"Sort age"}),(0,r.jsx)(s.Button,{onClick:()=>{a({});},children:"Clear filters"}),(0,r.jsx)(s.Button,{onClick:()=>{a({}),t({});},children:"Clear filters and sorters"})]}),(0,r.jsx)(s.Table,{columns:o,dataSource:d,onChange:(e,n,r)=>{console.log("Various parameters",e,n,r),a(n),t(r);}})]});};}}]);
//# sourceMappingURL=P7X929FC-async.888614e6.js.map