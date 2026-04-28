import{t as e}from"./chunk-VELTKBKT-C6zNj372.js";import"./chunk-JIN56HTB-CLFyMSls.js";import"./chunk-QU3B7NT4-COh2_rW0.js";import"./chunk-H3VCZNTA-VosDFNX4.js";import"./chunk-GAX3EE6F-qtAfglAo.js";import"./chunk-SYGLAQYM-Btixewnk.js";import{t}from"./chunk-AEOMTBSW-C5cntHVe.js";import{t as n}from"./chunk-TJ4WWVTA-fkOm5sQs.js";import"./chunk-AHTCUU5T-CKE9Eu7E.js";import"./chunk-JVPIJFVP-Bxznt_8w.js";import"./chunk-NHJX6F6M-CxSpJN92.js";import"./chunk-F3E5R7LK-D_Ky3lgp.js";import"./chunk-ZX4KS3OZ-Cm36zxKv.js";import{W as r,c as i,p as a,q as o}from"./chunk-MGPAVIPZ-rkhDAOmD.js";import{D as s,E as c,j as l,n as u,nt as d,t as f,u as p,x as m,y as h,z as g}from"./chunk-3UWU4A3N-DSg7qNjk.js";import{t as _}from"./chunk-D4HHKWPY-zj4OZJHg.js";import"./chunk-XBXGYYE5-CmtKFQKT.js";import{a as v,t as y}from"./chunk-Q3CC2MQB-hrd2c_y3.js";import"./chunk-MFSPT3DZ-m57xmVYn.js";var b=f.pie,x={sections:new Map,showData:!1,config:b},S=x.sections,C=x.showData,w=structuredClone(b),T={getConfig:e(()=>structuredClone(w),`getConfig`),clear:e(()=>{S=new Map,C=x.showData,u()},`clear`),setDiagramTitle:p,getDiagramTitle:l,setAccTitle:g,getAccTitle:m,setAccDescription:s,getAccDescription:c,addSection:e(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);S.has(e)||(S.set(e,t),o.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:e(()=>S,`getSections`),setShowData:e(e=>{C=e},`setShowData`),getShowData:e(()=>C,`getShowData`)},E=e((e,n)=>{t(e,n),n.setShowData(e.showData),e.sections.map(n.addSection)},`populateDb`),D={parse:e(async e=>{let t=await n(`pie`,e);o.debug(t),E(t,T)},`parse`)},O=e(e=>`
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
`,`getStyles`),k=e(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1).sort((e,t)=>t.value-e.value);return i().value(e=>e.value)(n)},`createPieArcs`),A={parser:D,db:T,renderer:{draw:e((e,t,n,i)=>{o.debug(`rendering pie chart
`+e);let s=i.db,c=d(),l=v(s.getConfig(),c.pie),u=_(t),f=u.append(`g`);f.attr(`transform`,`translate(225,225)`);let{themeVariables:p}=c,[m]=y(p.pieOuterStrokeWidth);m??=2;let g=l.textPosition,b=r().innerRadius(0).outerRadius(185),x=r().innerRadius(185*g).outerRadius(185*g);f.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+m/2).attr(`class`,`pieOuterCircle`);let S=s.getSections(),C=k(S),w=[p.pie1,p.pie2,p.pie3,p.pie4,p.pie5,p.pie6,p.pie7,p.pie8,p.pie9,p.pie10,p.pie11,p.pie12],T=0;S.forEach(e=>{T+=e});let E=C.filter(e=>(e.data.value/T*100).toFixed(0)!==`0`),D=a(w);f.selectAll(`mySlices`).data(E).enter().append(`path`).attr(`d`,b).attr(`fill`,e=>D(e.data.label)).attr(`class`,`pieCircle`),f.selectAll(`mySlices`).data(E).enter().append(`text`).text(e=>(e.data.value/T*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+x.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`),f.append(`text`).text(s.getDiagramTitle()).attr(`x`,0).attr(`y`,-400/2).attr(`class`,`pieTitleText`);let O=[...S.entries()].map(([e,t])=>({label:e,value:t})),A=f.selectAll(`.legend`).data(O).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*O.length/2;return`translate(216,`+(t*22-n)+`)`});A.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>D(e.label)).style(`stroke`,e=>D(e.label)),A.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>s.getShowData()?`${e.label} [${e.value}]`:e.label);let j=512+Math.max(...A.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0));u.attr(`viewBox`,`0 0 ${j} 450`),h(u,450,j,l.useMaxWidth)},`draw`)},styles:O};export{A as diagram};