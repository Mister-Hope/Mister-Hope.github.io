"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[63499],{5579:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(78e3),o=n(81395),s=n(48320);const r=(0,a.aZ)({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const t=(0,s.yj)(),n=(0,o.iH)();(0,a.YP)((()=>t.path),(()=>n.value.focus()));const r=({target:e})=>{const t=document.querySelector(e.hash);if(t){const e=()=>{t.removeAttribute("tabindex"),t.removeEventListener("blur",e)};t.setAttribute("tabindex","-1"),t.addEventListener("blur",e),t.focus(),window.scrollTo(0,0)}};return()=>[(0,a.h)("span",{ref:n,tabindex:"-1"}),(0,a.h)("a",{href:`#${e.content}`,class:"skip-link sr-only",onClick:r},"Skip to content")]}})},63499:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(8392),o=n(78e3),s=n(47944),r=n(29639),c=n(14411),i=n(76886),l=n(73805),u=n(41184),h=n(5579),p=n(87875);const d=(0,o.aZ)({name:"Blog",setup(){const e=(0,a.I2)(),t=(0,p.XA)();return()=>[(0,o.h)(h.Z),(0,o.h)((0,o.up)("CommonWrapper"),{sidebar:!1},{default:()=>e.value.home?(0,o.h)(s.Z):(0,o.h)("main",{class:"page blog",id:"main-content"},(0,o.h)("div",{class:"blog-page-wrapper"},[(0,o.h)(r.Z),(0,o.h)(u.Z,{delay:.16},(()=>(0,o.h)(l.Z)))])),navScreenBottom:()=>(0,o.h)(c.Z),...t.value?{sidebar:()=>(0,o.h)(i.Z)}:{}})]}})}}]);