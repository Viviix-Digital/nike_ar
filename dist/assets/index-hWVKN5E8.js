import{r as a,j as t}from"./index-c1ZkOYFF.js";import{I as p,a as x}from"./index-xfD8H7BG.js";import{B as f}from"./index-ZdHE9W7a.js";import d from"./index-VI7SdD6Q.js";import"./images-MgIwYcRR.js";import"./useTimeoutClick-piB9F24k.js";const E=({targetId:r,score:n,images:c,onCollect:e,isCollected:i,setIsCollected:s})=>{const[o,m]=a.useState(!1);a.useEffect(()=>{if(!o||i)return;const u=setTimeout(()=>{s(!0),e(r)},500);return()=>{clearTimeout(u)}},[o,i,e,s,r]);const l=()=>{m(!0)};return t.jsxs("div",{className:"collection-container",children:[t.jsx("div",{className:`${o?"move-to-top-right":""}`,children:t.jsx(p,{images:c,variant:x.Loop})}),t.jsx("div",{className:"collect-button",children:t.jsx(f,{onClick:l,children:"Thu thập"})}),t.jsx(d,{score:n})]})};export{E as default};
