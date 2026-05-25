import{t as e}from"./chunk-AQ6EADP3-DgwpnIeu.js";import"./chunk-4R4BOZG6-BrmTOnxP.js";import"./chunk-RERM46MO-BcSEfYxD.js";import{t}from"./chunk-JQRUD6KW-DU7FgGLf.js";import{t as n}from"./chunk-2T2R6R2M-pBg2eRlb.js";import"./chunk-UP6H54XL-CqrBqyMI.js";import"./chunk-UXSXWOXI-GaMNo8EC.js";import"./chunk-C62D2QBJ-Ce5UCxx8.js";import"./chunk-CEXFNPSA-DetyQLdH.js";import"./chunk-J5EP6P6S-B77xCQKB.js";import"./chunk-RLI5ZMPA-Do7aA46i.js";import"./chunk-2UTLFMKG-DQ2g3Rel.js";import"./chunk-RKZBBQEN-Bn7puyVs.js";import{W as r,c as i,p as a,q as o}from"./chunk-7W6UQGC5-BIVYr840.js";import{F as s,H as c,I as l,K as u,N as d,S as f,Y as p,Z as m,j as h,tt as g}from"./chunk-67TQ5CYL-DgYG-3Cn.js";import{t as _}from"./chunk-LRIF4GLE-DVabEgGp.js";import"./chunk-KNLZD3CH-IYn0lwk0.js";import{a as v,p as y}from"./chunk-QA3QBVWF-DWq7p_yB.js";import"./chunk-KGYTTC2M-CREEbQkK.js";var b=h.pie,x={sections:new Map,showData:!1,config:b},S=x.sections,C=x.showData,w=structuredClone(b),T={getConfig:e(()=>structuredClone(w),`getConfig`),clear:e(()=>{S=new Map,C=x.showData,p()},`clear`),setDiagramTitle:s,getDiagramTitle:u,setAccTitle:d,getAccTitle:g,setAccDescription:c,getAccDescription:f,addSection:e(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);S.has(e)||(S.set(e,t),o.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:e(()=>S,`getSections`),setShowData:e(e=>{C=e},`setShowData`),getShowData:e(()=>C,`getShowData`)},E=e((e,n)=>{t(e,n),n.setShowData(e.showData),e.sections.map(n.addSection)},`populateDb`),D={parse:e(async e=>{let t=await n(`pie`,e);o.debug(t),E(t,T)},`parse`)},O=e(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),k=e(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return i().value(e=>e.value).sort(null)(n)},`createPieArcs`),A={parser:D,db:T,renderer:{draw:e((e,t,n,i)=>{o.debug(`rendering pie chart
`+e);let s=i.db,c=m(),u=v(s.getConfig(),c.pie),d=_(t),f=d.append(`g`);f.attr(`transform`,`translate(225,225)`);let{themeVariables:p}=c,[h]=y(p.pieOuterStrokeWidth);h??=2;let g=u.textPosition,b=r().innerRadius(0).outerRadius(185),x=r().innerRadius(185*g).outerRadius(185*g);f.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+h/2).attr(`class`,`pieOuterCircle`);let S=s.getSections(),C=k(S),w=[p.pie1,p.pie2,p.pie3,p.pie4,p.pie5,p.pie6,p.pie7,p.pie8,p.pie9,p.pie10,p.pie11,p.pie12],T=0;S.forEach(e=>{T+=e});let E=C.filter(e=>(e.data.value/T*100).toFixed(0)!==`0`),D=a(w).domain([...S.keys()]);f.selectAll(`mySlices`).data(E).enter().append(`path`).attr(`d`,b).attr(`fill`,e=>D(e.data.label)).attr(`class`,`pieCircle`),f.selectAll(`mySlices`).data(E).enter().append(`text`).text(e=>(e.data.value/T*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+x.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`);let O=f.append(`text`).text(s.getDiagramTitle()).attr(`x`,0).attr(`y`,-400/2).attr(`class`,`pieTitleText`),A=[...S.entries()].map(([e,t])=>({label:e,value:t})),j=f.selectAll(`.legend`).data(A).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*A.length/2;return`translate(216,`+(t*22-n)+`)`});j.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>D(e.label)).style(`stroke`,e=>D(e.label)),j.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>s.getShowData()?`${e.label} [${e.value}]`:e.label);let M=512+Math.max(...j.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0)),N=O.node()?.getBoundingClientRect().width??0,P=450/2-N/2,F=450/2+N/2,I=Math.min(0,P),L=Math.max(M,F)-I;d.attr(`viewBox`,`${I} 0 ${L} 450`),l(d,450,L,u.useMaxWidth)},`draw`)},styles:O};export{A as diagram};