"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[19688],{5579:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(78e3),a=n(81395),s=n(48320);const r=(0,o.aZ)({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(t){const e=(0,s.yj)(),n=(0,a.iH)();(0,o.YP)((()=>e.path),(()=>n.value.focus()));const r=({target:t})=>{const e=document.querySelector(t.hash);if(e){const t=()=>{e.removeAttribute("tabindex"),e.removeEventListener("blur",t)};e.setAttribute("tabindex","-1"),e.addEventListener("blur",t),e.focus(),window.scrollTo(0,0)}};return()=>[(0,o.h)("span",{ref:n,tabindex:"-1"}),(0,o.h)("a",{href:`#${t.content}`,class:"skip-link sr-only",onClick:r},"Skip to content")]}})},19688:(t,e,n)=>{n.r(e),n.d(e,{default:()=>l});var o=n(78e3),a=n(48320),s=n(8392),r=n(5579),u=n(71090),c=n(87875);const l=(0,o.aZ)({name:"404",setup(){const t=(0,s.I)(),e=(0,c.X6)(),n=()=>{const t=e.value.routeLocales["404msg"];return t[Math.floor(Math.random()*t.length)]},{navigate:l}=(0,a.nB)({to:e.value.home??t.value});return()=>[(0,o.h)(r.Z),(0,o.h)((0,o.up)("CommonWrapper"),{sidebar:!1},(()=>(0,o.h)("main",{class:"page not-found",id:"main-content"},[(0,o.h)(u.u),(0,o.h)("blockquote",n()),(0,o.h)("button",{class:"action-button",onClick:()=>{window.history.go(-1)}},e.value.routeLocales.back),(0,o.h)("button",{class:"action-button",onClick:()=>l()},e.value.routeLocales.home)])))]}})}}]);