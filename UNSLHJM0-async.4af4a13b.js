(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["UNSLHJM0"],{UNSLHJM0:function(e,t,n){n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return s;}});var o=n("8Z0rk4BW"),l=n("WyIMPUJp"),r=n("qdGieaVz");n("h3MXykm4");let i=[{title:"First",content:"First-content"},{title:"Second",content:"Second-content"},{title:"Last",content:"Last-content"}];var s=()=>{let{token:e}=r.theme.useToken(),[t,n]=(0,l.useState)(0),s=()=>{n(t+1);},c=()=>{n(t-1);},a=i.map(e=>({key:e.title,title:e.title})),d={lineHeight:"260px",textAlign:"center",color:e.colorTextTertiary,backgroundColor:e.colorFillAlter,borderRadius:e.borderRadiusLG,border:`1px dashed ${e.colorBorder}`,marginTop:16};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Steps,{current:t,items:a}),(0,o.jsx)("div",{style:d,children:i[t].content}),(0,o.jsxs)("div",{style:{marginTop:24},children:[t<i.length-1&&(0,o.jsx)(r.Button,{type:"primary",onClick:()=>s(),children:"Next"}),t===i.length-1&&(0,o.jsx)(r.Button,{type:"primary",onClick:()=>r.message.success("Processing complete!"),children:"Done"}),t>0&&(0,o.jsx)(r.Button,{style:{margin:"0 8px"},onClick:()=>c(),children:"Previous"})]})]});};}}]);
//# sourceMappingURL=UNSLHJM0-async.4af4a13b.js.map