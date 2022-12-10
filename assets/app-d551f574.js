import{d as a,r as k,a as S,b as j,c as y,i as v,e as Z,f as C,g as M,o as w,h as r,j as b,k as B,l as J,m as h,n as H,R as G,p as N,q as F,S as W,u as q,w as z,s as U,t as Q,v as X}from"./framework-6fc096bd.js";const $="modulepreload",Y=function(n){return"/"+n},T={},e=function(t,p,s){if(!p||p.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(p.map(o=>{if(o=Y(o),o in T)return;T[o]=!0;const l=o.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(!!s)for(let g=i.length-1;g>=0;g--){const f=i[g];if(f.href===o&&(!l||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":$,l||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),l)return new Promise((g,f)=>{d.addEventListener("load",g),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},K={"v-8daa1a0e":()=>e(()=>import("./index.html-bb2e7fee.js"),[]).then(({data:n})=>n),"v-74bc627b":()=>e(()=>import("./index.html-fe62ed0a.js"),[]).then(({data:n})=>n),"v-008c1322":()=>e(()=>import("./donate.html-32dcb4d8.js"),[]).then(({data:n})=>n),"v-78da0dd7":()=>e(()=>import("./site.html-2c595ae5.js"),[]).then(({data:n})=>n),"v-146a1089":()=>e(()=>import("./index.html-87773fd1.js"),[]).then(({data:n})=>n),"v-32bda6e0":()=>e(()=>import("./APP.html-bab8d83f.js"),[]).then(({data:n})=>n),"v-72582dd0":()=>e(()=>import("./index.html-1553672d.js"),[]).then(({data:n})=>n),"v-2d0a870d":()=>e(()=>import("./index.html-01306237.js"),[]).then(({data:n})=>n),"v-fd97f502":()=>e(()=>import("./HDD.html-b0e75c0a.js"),[]).then(({data:n})=>n),"v-530da724":()=>e(()=>import("./index.html-6bfa8910.js"),[]).then(({data:n})=>n),"v-43d15734":()=>e(()=>import("./structure.html-abd723b8.js"),[]).then(({data:n})=>n),"v-f0383c18":()=>e(()=>import("./index.html-8d3058ec.js"),[]).then(({data:n})=>n),"v-6441b3dd":()=>e(()=>import("./WSL.html-baaac220.js"),[]).then(({data:n})=>n),"v-b0e7af4e":()=>e(()=>import("./centos.html-8c55630c.js"),[]).then(({data:n})=>n),"v-e51c9476":()=>e(()=>import("./ssh.html-7c8976ee.js"),[]).then(({data:n})=>n),"v-1b231b89":()=>e(()=>import("./differential-equation.html-7c438586.js"),[]).then(({data:n})=>n),"v-15054f24":()=>e(()=>import("./index.html-76f8c4ef.js"),[]).then(({data:n})=>n),"v-c896667e":()=>e(()=>import("./index.html-3551324d.js"),[]).then(({data:n})=>n),"v-f785aee2":()=>e(()=>import("./index.html-ab85a52a.js"),[]).then(({data:n})=>n),"v-431ba45c":()=>e(()=>import("./apache.html-68bf663b.js"),[]).then(({data:n})=>n),"v-eb9bbaa0":()=>e(()=>import("./chrome.html-7f5dbd5a.js"),[]).then(({data:n})=>n),"v-33cf339d":()=>e(()=>import("./editor.html-c9e06598.js"),[]).then(({data:n})=>n),"v-6eec2164":()=>e(()=>import("./nginx.html-deaf1d00.js"),[]).then(({data:n})=>n),"v-bb42b324":()=>e(()=>import("./postman.html-906f44be.js"),[]).then(({data:n})=>n),"v-76327349":()=>e(()=>import("./index.html-7399231a.js"),[]).then(({data:n})=>n),"v-cc57f902":()=>e(()=>import("./base.html-62b626f9.js"),[]).then(({data:n})=>n),"v-26ea7e3c":()=>e(()=>import("./resource.html-b1ace795.js"),[]).then(({data:n})=>n),"v-779f6616":()=>e(()=>import("./index.html-e3474d0b.js"),[]).then(({data:n})=>n),"v-3bf9bd1e":()=>e(()=>import("./index.html-b12e33ce.js"),[]).then(({data:n})=>n),"v-06c910ec":()=>e(()=>import("./index.html-3178f685.js"),[]).then(({data:n})=>n),"v-f59c452e":()=>e(()=>import("./ci.html-3aef9a00.js"),[]).then(({data:n})=>n),"v-79b2d958":()=>e(()=>import("./computer.html-67055ff1.js"),[]).then(({data:n})=>n),"v-58d3b970":()=>e(()=>import("./debug.html-b03e7084.js"),[]).then(({data:n})=>n),"v-4d5d081c":()=>e(()=>import("./encoding.html-6d536035.js"),[]).then(({data:n})=>n),"v-690f86be":()=>e(()=>import("./file-extension.html-7d9002a7.js"),[]).then(({data:n})=>n),"v-2d7e4bd2":()=>e(()=>import("./glob.html-9ff835b1.js"),[]).then(({data:n})=>n),"v-77ae947c":()=>e(()=>import("./license.html-516be569.js"),[]).then(({data:n})=>n),"v-78befac4":()=>e(()=>import("./open-source-and-free.html-524aa3d1.js"),[]).then(({data:n})=>n),"v-110d1aab":()=>e(()=>import("./os.html-4b09ee33.js"),[]).then(({data:n})=>n),"v-888fe0ec":()=>e(()=>import("./path.html-a5015371.js"),[]).then(({data:n})=>n),"v-a5f157fa":()=>e(()=>import("./index.html-7cbd9e32.js"),[]).then(({data:n})=>n),"v-1637646f":()=>e(()=>import("./deploy.html-e0c05a80.js"),[]).then(({data:n})=>n),"v-61d56a30":()=>e(()=>import("./intro.html-55057ea4.js"),[]).then(({data:n})=>n),"v-cdde1050":()=>e(()=>import("./pages.html-6bcb64e9.js"),[]).then(({data:n})=>n),"v-1d1d5298":()=>e(()=>import("./pr.html-e38cf038.js"),[]).then(({data:n})=>n),"v-aa6ff0a0":()=>e(()=>import("./semantic.html-bf7fa1ed.js"),[]).then(({data:n})=>n),"v-200df47a":()=>e(()=>import("./speedup.html-a4aa2635.js"),[]).then(({data:n})=>n),"v-1cf146c3":()=>e(()=>import("./token.html-2f773901.js"),[]).then(({data:n})=>n),"v-20955d24":()=>e(()=>import("./index.html-42396ff4.js"),[]).then(({data:n})=>n),"v-5b2dfc66":()=>e(()=>import("./learning.html-440f0f6f.js"),[]).then(({data:n})=>n),"v-7b13410a":()=>e(()=>import("./index.html-a213593a.js"),[]).then(({data:n})=>n),"v-5819b95b":()=>e(()=>import("./qr-code.html-c45230c7.js"),[]).then(({data:n})=>n),"v-264f3578":()=>e(()=>import("./index.html-562d0491.js"),[]).then(({data:n})=>n),"v-5d9f569e":()=>e(()=>import("./cjs.html-e2c9ca9d.js"),[]).then(({data:n})=>n),"v-647e802c":()=>e(()=>import("./environment.html-e7227391.js"),[]).then(({data:n})=>n),"v-285ff93c":()=>e(()=>import("./install.html-0fb0abd0.js"),[]).then(({data:n})=>n),"v-6352c39e":()=>e(()=>import("./intro.html-7701207b.js"),[]).then(({data:n})=>n),"v-833997ce":()=>e(()=>import("./program.html-86ac58cb.js"),[]).then(({data:n})=>n),"v-18191c59":()=>e(()=>import("./index.html-1fb1a418.js"),[]).then(({data:n})=>n),"v-8eb7e91c":()=>e(()=>import("./index.html-8dbb1d4b.js"),[]).then(({data:n})=>n),"v-837c88f4":()=>e(()=>import("./compare.html-dde2f9a8.js"),[]).then(({data:n})=>n),"v-ec405424":()=>e(()=>import("./component.html-e56d5ecc.js"),[]).then(({data:n})=>n),"v-76da7cfe":()=>e(()=>import("./get-started.html-da8a6c0f.js"),[]).then(({data:n})=>n),"v-30ddd490":()=>e(()=>import("./install.html-8da3788b.js"),[]).then(({data:n})=>n),"v-ec0e16f6":()=>e(()=>import("./vue.html-3d0b14eb.js"),[]).then(({data:n})=>n),"v-ff88ab06":()=>e(()=>import("./index.html-6d8e907f.js"),[]).then(({data:n})=>n),"v-a128f5ea":()=>e(()=>import("./https.html-5d58ca03.js"),[]).then(({data:n})=>n),"v-7321cfda":()=>e(()=>import("./js.html-1c536bdf.js"),[]).then(({data:n})=>n),"v-677e2595":()=>e(()=>import("./index.html-3a70b5b9.js"),[]).then(({data:n})=>n),"v-ce519718":()=>e(()=>import("./cmd.html-31a678a9.js"),[]).then(({data:n})=>n),"v-6eab0a08":()=>e(()=>import("./env-variable.html-a84b3ed2.js"),[]).then(({data:n})=>n),"v-9ac8afe2":()=>e(()=>import("./hidden-file.html-20f58027.js"),[]).then(({data:n})=>n),"v-1595002d":()=>e(()=>import("./notepad.html-fba1ae62.js"),[]).then(({data:n})=>n),"v-b9441ae8":()=>e(()=>import("./shortcut-key.html-51699f51.js"),[]).then(({data:n})=>n),"v-16be477a":()=>e(()=>import("./index.html-ea3995ea.js"),[]).then(({data:n})=>n),"v-31bd837a":()=>e(()=>import("./gestalt-principle.html-3261e8f0.js"),[]).then(({data:n})=>n),"v-e4adfaa4":()=>e(()=>import("./infomation-flow.html-71ce5b22.js"),[]).then(({data:n})=>n),"v-2255681b":()=>e(()=>import("./left-or-right.html-87b43068.js"),[]).then(({data:n})=>n),"v-4d2058be":()=>e(()=>import("./index.html-ad676b2b.js"),[]).then(({data:n})=>n),"v-f228952e":()=>e(()=>import("./apply.html-09adf82a.js"),[]).then(({data:n})=>n),"v-40ea6a4a":()=>e(()=>import("./decorative.html-fc55f0c4.js"),[]).then(({data:n})=>n),"v-0a4c5b17":()=>e(()=>import("./draw.html-d0f6a8a3.js"),[]).then(({data:n})=>n),"v-638e2b11":()=>e(()=>import("./flour.html-5826024a.js"),[]).then(({data:n})=>n),"v-f500f2ca":()=>e(()=>import("./guide.html-ba4533e4.js"),[]).then(({data:n})=>n),"v-66effdaa":()=>e(()=>import("./intro.html-6a4bdc4e.js"),[]).then(({data:n})=>n),"v-d301f332":()=>e(()=>import("./line.html-6ab3f071.js"),[]).then(({data:n})=>n),"v-f6497742":()=>e(()=>import("./rule.html-7a7b885c.js"),[]).then(({data:n})=>n),"v-3d2f7734":()=>e(()=>import("./skill.html-2feea4a7.js"),[]).then(({data:n})=>n),"v-2863c8d8":()=>e(()=>import("./software.html-04b635ab.js"),[]).then(({data:n})=>n),"v-23d2ecf5":()=>e(()=>import("./start.html-ea475e4f.js"),[]).then(({data:n})=>n),"v-2081c2e1":()=>e(()=>import("./type.html-27610d0f.js"),[]).then(({data:n})=>n),"v-135802a1":()=>e(()=>import("./index.html-f0382a28.js"),[]).then(({data:n})=>n),"v-06603a20":()=>e(()=>import("./search.html-9ae34cec.js"),[]).then(({data:n})=>n),"v-3bd48bfe":()=>e(()=>import("./text-field.html-b0a51979.js"),[]).then(({data:n})=>n),"v-bd999efa":()=>e(()=>import("./index.html-c40f271f.js"),[]).then(({data:n})=>n),"v-5837a6b0":()=>e(()=>import("./intro.html-70dd64ac.js"),[]).then(({data:n})=>n),"v-5e53b161":()=>e(()=>import("./navbar-design.html-c65b948d.js"),[]).then(({data:n})=>n),"v-662b9e66":()=>e(()=>import("./navbar.html-e3a3bf01.js"),[]).then(({data:n})=>n),"v-ca9d9698":()=>e(()=>import("./sidebar-navigate.html-4fd42b93.js"),[]).then(({data:n})=>n),"v-5a59a8af":()=>e(()=>import("./tabbar-design.html-ad92158b.js"),[]).then(({data:n})=>n),"v-4e2f22d8":()=>e(()=>import("./tabbar.html-5f7f2a7e.js"),[]).then(({data:n})=>n),"v-fcccd0e2":()=>e(()=>import("./index.html-000eed3b.js"),[]).then(({data:n})=>n),"v-4275617a":()=>e(()=>import("./site.html-130171b3.js"),[]).then(({data:n})=>n),"v-39702e16":()=>e(()=>import("./index.html-eb67a2dc.js"),[]).then(({data:n})=>n),"v-3839b0e0":()=>e(()=>import("./index.html-fc6b8c71.js"),[]).then(({data:n})=>n),"v-f33e2a0a":()=>e(()=>import("./index.html-da8b5177.js"),[]).then(({data:n})=>n),"v-4a42ca8c":()=>e(()=>import("./nginx.html-63d6f22f.js"),[]).then(({data:n})=>n),"v-f35beb32":()=>e(()=>import("./index.html-ad9a56af.js"),[]).then(({data:n})=>n),"v-bf8c45b0":()=>e(()=>import("./arithmetic.html-c84e26c2.js"),[]).then(({data:n})=>n),"v-58565872":()=>e(()=>import("./array.html-8c2a721b.js"),[]).then(({data:n})=>n),"v-a381d276":()=>e(()=>import("./condition.html-8c9ff774.js"),[]).then(({data:n})=>n),"v-a32bc7e6":()=>e(()=>import("./debug.html-3151bd75.js"),[]).then(({data:n})=>n),"v-5675dda1":()=>e(()=>import("./expansion.html-a88ac6d8.js"),[]).then(({data:n})=>n),"v-5e8a6e0c":()=>e(()=>import("./function.html-65d2e4b3.js"),[]).then(({data:n})=>n),"v-5a1d9d0e":()=>e(()=>import("./grammar.html-9004a8e2.js"),[]).then(({data:n})=>n),"v-670a7394":()=>e(()=>import("./intro.html-ae74296d.js"),[]).then(({data:n})=>n),"v-31da8ba4":()=>e(()=>import("./loop.html-211f81c4.js"),[]).then(({data:n})=>n),"v-a3b03640":()=>e(()=>import("./mktemp.html-7c66b632.js"),[]).then(({data:n})=>n),"v-1a11652e":()=>e(()=>import("./prompt.html-f97a8629.js"),[]).then(({data:n})=>n),"v-53238cf4":()=>e(()=>import("./quotation.html-7846ffee.js"),[]).then(({data:n})=>n),"v-58d02e7c":()=>e(()=>import("./read.html-dc2f572a.js"),[]).then(({data:n})=>n),"v-020bcd88":()=>e(()=>import("./readline.html-81edb7f7.js"),[]).then(({data:n})=>n),"v-b48b13b2":()=>e(()=>import("./script.html-34a4518b.js"),[]).then(({data:n})=>n),"v-8c4eb5c4":()=>e(()=>import("./set.html-e255d847.js"),[]).then(({data:n})=>n),"v-d5076e10":()=>e(()=>import("./stack.html-6d363022.js"),[]).then(({data:n})=>n),"v-341fac63":()=>e(()=>import("./startup.html-2eeeaf68.js"),[]).then(({data:n})=>n),"v-5e9f82a1":()=>e(()=>import("./string.html-df5647c9.js"),[]).then(({data:n})=>n),"v-b3ea1e54":()=>e(()=>import("./variable.html-0a3c5501.js"),[]).then(({data:n})=>n),"v-47c2b838":()=>e(()=>import("./index.html-a78f6189.js"),[]).then(({data:n})=>n),"v-8fbbf5e0":()=>e(()=>import("./add.html-2f9adf63.js"),[]).then(({data:n})=>n),"v-7ffa5ca6":()=>e(()=>import("./command.html-fe42f882.js"),[]).then(({data:n})=>n),"v-10288ca4":()=>e(()=>import("./dir.html-4c604561.js"),[]).then(({data:n})=>n),"v-0859f348":()=>e(()=>import("./excu.html-cc9a75fa.js"),[]).then(({data:n})=>n),"v-3ab05fa5":()=>e(()=>import("./file.html-4fdacf14.js"),[]).then(({data:n})=>n),"v-7b0f6d5f":()=>e(()=>import("./ln.html-eb850c87.js"),[]).then(({data:n})=>n),"v-3ba103fe":()=>e(()=>import("./other.html-ca5c02a6.js"),[]).then(({data:n})=>n),"v-72a3b29c":()=>e(()=>import("./path.html-ab1cf112.js"),[]).then(({data:n})=>n),"v-02d56f66":()=>e(()=>import("./temp.html-f244be27.js"),[]).then(({data:n})=>n),"v-f2e41e82":()=>e(()=>import("./index.html-08836523.js"),[]).then(({data:n})=>n),"v-7c524e2b":()=>e(()=>import("./dir.html-c3231f34.js"),[]).then(({data:n})=>n),"v-53becefe":()=>e(()=>import("./file.html-4ab3619a.js"),[]).then(({data:n})=>n),"v-42f6fa5f":()=>e(()=>import("./mount.html-77e62618.js"),[]).then(({data:n})=>n),"v-50990237":()=>e(()=>import("./index.html-ce322866.js"),[]).then(({data:n})=>n),"v-072ab185":()=>e(()=>import("./advantage.html-d5c25144.js"),[]).then(({data:n})=>n),"v-9f906c18":()=>e(()=>import("./desktop.html-763a337d.js"),[]).then(({data:n})=>n),"v-00bcff08":()=>e(()=>import("./history.html-4754d2f2.js"),[]).then(({data:n})=>n),"v-3419e764":()=>e(()=>import("./intro.html-60b90a23.js"),[]).then(({data:n})=>n),"v-56f593aa":()=>e(()=>import("./language.html-a258b5a0.js"),[]).then(({data:n})=>n),"v-09bd279a":()=>e(()=>import("./startup.html-d8c942bb.js"),[]).then(({data:n})=>n),"v-28e445b4":()=>e(()=>import("./index.html-2cb35d95.js"),[]).then(({data:n})=>n),"v-40785b1a":()=>e(()=>import("./debug.html-570040ea.js"),[]).then(({data:n})=>n),"v-7d579877":()=>e(()=>import("./lang.html-b99a41c9.js"),[]).then(({data:n})=>n),"v-69b91c60":()=>e(()=>import("./manage.html-09877bc1.js"),[]).then(({data:n})=>n),"v-14aa1354":()=>e(()=>import("./webserver.html-c56c1f2a.js"),[]).then(({data:n})=>n),"v-8a029292":()=>e(()=>import("./index.html-61313a74.js"),[]).then(({data:n})=>n),"v-3c4b02b8":()=>e(()=>import("./1.html-1a3f380f.js"),[]).then(({data:n})=>n),"v-4d4858aa":()=>e(()=>import("./10.html-eabfee07.js"),[]).then(({data:n})=>n),"v-4efd3149":()=>e(()=>import("./11.html-2c3b1039.js"),[]).then(({data:n})=>n),"v-50b209e8":()=>e(()=>import("./12.html-c16ed2e1.js"),[]).then(({data:n})=>n),"v-5266e287":()=>e(()=>import("./13.html-0991e3a8.js"),[]).then(({data:n})=>n),"v-541bbb26":()=>e(()=>import("./14.html-40efe57e.js"),[]).then(({data:n})=>n),"v-55d093c5":()=>e(()=>import("./15.html-ebd75437.js"),[]).then(({data:n})=>n),"v-57856c64":()=>e(()=>import("./16.html-fa2d19e6.js"),[]).then(({data:n})=>n),"v-593a4503":()=>e(()=>import("./17.html-aa251171.js"),[]).then(({data:n})=>n),"v-5aef1da2":()=>e(()=>import("./18.html-6c03692d.js"),[]).then(({data:n})=>n),"v-5ca3f641":()=>e(()=>import("./19.html-b72c590f.js"),[]).then(({data:n})=>n),"v-3dffdb57":()=>e(()=>import("./2.html-b9c03aa0.js"),[]).then(({data:n})=>n),"v-fba2d82a":()=>e(()=>import("./20.html-d202b33f.js"),[]).then(({data:n})=>n),"v-f83926ec":()=>e(()=>import("./21.html-43b6237d.js"),[]).then(({data:n})=>n),"v-f4cf75ae":()=>e(()=>import("./22.html-8ac341b7.js"),[]).then(({data:n})=>n),"v-f165c470":()=>e(()=>import("./23.html-05b7487f.js"),[]).then(({data:n})=>n),"v-edfc1332":()=>e(()=>import("./24.html-d9e221e3.js"),[]).then(({data:n})=>n),"v-ea9261f4":()=>e(()=>import("./25.html-1612a853.js"),[]).then(({data:n})=>n),"v-e728b0b6":()=>e(()=>import("./26.html-2d3d6eac.js"),[]).then(({data:n})=>n),"v-3fb4b3f6":()=>e(()=>import("./3.html-d17685f5.js"),[]).then(({data:n})=>n),"v-41698c95":()=>e(()=>import("./4.html-b0581c33.js"),[]).then(({data:n})=>n),"v-431e6534":()=>e(()=>import("./5.html-fa421333.js"),[]).then(({data:n})=>n),"v-44d33dd3":()=>e(()=>import("./6.html-0b03e299.js"),[]).then(({data:n})=>n),"v-46881672":()=>e(()=>import("./7.html-68707518.js"),[]).then(({data:n})=>n),"v-483cef11":()=>e(()=>import("./8.html-1827089f.js"),[]).then(({data:n})=>n),"v-49f1c7b0":()=>e(()=>import("./9.html-b38cddcc.js"),[]).then(({data:n})=>n),"v-582d9f70":()=>e(()=>import("./index.html-399567ca.js"),[]).then(({data:n})=>n),"v-202e0060":()=>e(()=>import("./catalog.html-8bfa239f.js"),[]).then(({data:n})=>n),"v-c39d8f64":()=>e(()=>import("./end.html-2c1afd20.js"),[]).then(({data:n})=>n),"v-0dbea3bb":()=>e(()=>import("./middle-autumn.html-398e0057.js"),[]).then(({data:n})=>n),"v-eb7b7a98":()=>e(()=>import("./miss1.html-095515a7.js"),[]).then(({data:n})=>n),"v-e811c95a":()=>e(()=>import("./miss2.html-59366c91.js"),[]).then(({data:n})=>n),"v-5bd900f9":()=>e(()=>import("./moon1.html-7a78f556.js"),[]).then(({data:n})=>n),"v-5d8dd998":()=>e(()=>import("./moon2.html-330b7c4a.js"),[]).then(({data:n})=>n),"v-2e1af9a0":()=>e(()=>import("./special.html-1ebb19ab.js"),[]).then(({data:n})=>n),"v-8f819ef0":()=>e(()=>import("./index.html-e61e908b.js"),[]).then(({data:n})=>n),"v-ac460ad2":()=>e(()=>import("./get-started.html-17912f1c.js"),[]).then(({data:n})=>n),"v-04af9900":()=>e(()=>import("./tag-list.html-823eafca.js"),[]).then(({data:n})=>n),"v-5c913f0a":()=>e(()=>import("./yaml.html-01708cda.js"),[]).then(({data:n})=>n),"v-0b2fe817":()=>e(()=>import("./1.html-9c4cf1d6.js"),[]).then(({data:n})=>n),"v-0ce4c0b6":()=>e(()=>import("./2.html-19a9a9dc.js"),[]).then(({data:n})=>n),"v-0e999955":()=>e(()=>import("./3.html-802ef362.js"),[]).then(({data:n})=>n),"v-104e71f4":()=>e(()=>import("./4.html-4726e834.js"),[]).then(({data:n})=>n),"v-12034a93":()=>e(()=>import("./5.html-bcce013d.js"),[]).then(({data:n})=>n),"v-13b82332":()=>e(()=>import("./6.html-05f5c0d5.js"),[]).then(({data:n})=>n),"v-156cfbd1":()=>e(()=>import("./7.html-c9d7c932.js"),[]).then(({data:n})=>n),"v-1721d470":()=>e(()=>import("./8.html-5b7da2e1.js"),[]).then(({data:n})=>n),"v-18d6ad0f":()=>e(()=>import("./9.html-9f8a3748.js"),[]).then(({data:n})=>n),"v-5885b80f":()=>e(()=>import("./index.html-ebf0cc61.js"),[]).then(({data:n})=>n),"v-2ddafccd":()=>e(()=>import("./birthday.html-1112e40b.js"),[]).then(({data:n})=>n),"v-475a52ab":()=>e(()=>import("./calm.html-614ce9f1.js"),[]).then(({data:n})=>n),"v-dfeb8f2e":()=>e(()=>import("./choice.html-0bfba23d.js"),[]).then(({data:n})=>n),"v-9b658a26":()=>e(()=>import("./emotion.html-e36bcab4.js"),[]).then(({data:n})=>n),"v-76665c86":()=>e(()=>import("./family.html-aab15d61.js"),[]).then(({data:n})=>n),"v-37528960":()=>e(()=>import("./friendship.html-edef942a.js"),[]).then(({data:n})=>n),"v-0b60e298":()=>e(()=>import("./indifferent.html-a1c218f0.js"),[]).then(({data:n})=>n),"v-71bf782e":()=>e(()=>import("./life.html-c5fa9fe2.js"),[]).then(({data:n})=>n),"v-2f6a3978":()=>e(()=>import("./love.html-3602351d.js"),[]).then(({data:n})=>n),"v-1c2a15b2":()=>e(()=>import("./pure.html-5a893c27.js"),[]).then(({data:n})=>n),"v-506d1e8a":()=>e(()=>import("./road.html-afed0baf.js"),[]).then(({data:n})=>n),"v-57aafb44":()=>e(()=>import("./step.html-66bdf4fc.js"),[]).then(({data:n})=>n),"v-67643f8d":()=>e(()=>import("./year.html-7d0d6b12.js"),[]).then(({data:n})=>n),"v-7ac4d8df":()=>e(()=>import("./index.html-2ed49bfc.js"),[]).then(({data:n})=>n),"v-5e74acfe":()=>e(()=>import("./current-path.html-dcc3fd38.js"),[]).then(({data:n})=>n),"v-797f5c68":()=>e(()=>import("./1.html-bc64aa92.js"),[]).then(({data:n})=>n),"v-b60627d4":()=>e(()=>import("./10.html-3a643e7f.js"),[]).then(({data:n})=>n),"v-2df59090":()=>e(()=>import("./11-11.html-e4778e77.js"),[]).then(({data:n})=>n),"v-b29c7696":()=>e(()=>import("./11.html-1d2b123e.js"),[]).then(({data:n})=>n),"v-af32c558":()=>e(()=>import("./12.html-5346ec6f.js"),[]).then(({data:n})=>n),"v-abc9141a":()=>e(()=>import("./13.html-b5f93c89.js"),[]).then(({data:n})=>n),"v-a85f62dc":()=>e(()=>import("./14.html-3993fd26.js"),[]).then(({data:n})=>n),"v-7615ab2a":()=>e(()=>import("./2.html-880a7435.js"),[]).then(({data:n})=>n),"v-72abf9ec":()=>e(()=>import("./3.html-8b0148e2.js"),[]).then(({data:n})=>n),"v-6f4248ae":()=>e(()=>import("./4.html-3f5130b5.js"),[]).then(({data:n})=>n),"v-6bd89770":()=>e(()=>import("./5.html-e6b3f8d7.js"),[]).then(({data:n})=>n),"v-686ee632":()=>e(()=>import("./6.html-ad8c360d.js"),[]).then(({data:n})=>n),"v-650534f4":()=>e(()=>import("./7.html-99ac2160.js"),[]).then(({data:n})=>n),"v-619b83b6":()=>e(()=>import("./8.html-8f77692f.js"),[]).then(({data:n})=>n),"v-5e31d278":()=>e(()=>import("./9.html-7cf86e56.js"),[]).then(({data:n})=>n),"v-58c0cd84":()=>e(()=>import("./index.html-0c6df399.js"),[]).then(({data:n})=>n),"v-3d36eb16":()=>e(()=>import("./exam.html-735724e7.js"),[]).then(({data:n})=>n),"v-3bae8447":()=>e(()=>import("./sad.html-512d7bec.js"),[]).then(({data:n})=>n),"v-80a9ee34":()=>e(()=>import("./1.html-722878f4.js"),[]).then(({data:n})=>n),"v-7d403cf6":()=>e(()=>import("./2.html-54f2ab69.js"),[]).then(({data:n})=>n),"v-79d68bb8":()=>e(()=>import("./3.html-31fbef9a.js"),[]).then(({data:n})=>n),"v-663d3fc4":()=>e(()=>import("./index.html-2305f794.js"),[]).then(({data:n})=>n),"v-520b2b7e":()=>e(()=>import("./catalog.html-cd6e68e5.js"),[]).then(({data:n})=>n),"v-0f169104":()=>e(()=>import("./1.html-3834ece0.js"),[]).then(({data:n})=>n),"v-10cb69a3":()=>e(()=>import("./2.html-a46ffb2c.js"),[]).then(({data:n})=>n),"v-12804242":()=>e(()=>import("./3.html-330b6e92.js"),[]).then(({data:n})=>n),"v-55b65288":()=>e(()=>import("./index.html-8fbc1618.js"),[]).then(({data:n})=>n),"v-a09495a4":()=>e(()=>import("./1.html-f9dc1a73.js"),[]).then(({data:n})=>n),"v-4733f4f4":()=>e(()=>import("./10.html-49b8557c.js"),[]).then(({data:n})=>n),"v-48e8cd93":()=>e(()=>import("./11.html-c9c9b441.js"),[]).then(({data:n})=>n),"v-4a9da632":()=>e(()=>import("./12.html-f13c1c27.js"),[]).then(({data:n})=>n),"v-9d2ae466":()=>e(()=>import("./2.html-0da745cf.js"),[]).then(({data:n})=>n),"v-99c13328":()=>e(()=>import("./3.html-f084d63d.js"),[]).then(({data:n})=>n),"v-965781ea":()=>e(()=>import("./4.html-921ae158.js"),[]).then(({data:n})=>n),"v-92edd0ac":()=>e(()=>import("./5.html-144b9610.js"),[]).then(({data:n})=>n),"v-8f841f6e":()=>e(()=>import("./6.html-00c579a8.js"),[]).then(({data:n})=>n),"v-8c1a6e30":()=>e(()=>import("./7.html-9a956cc2.js"),[]).then(({data:n})=>n),"v-88b0bcf2":()=>e(()=>import("./8.html-95c9954a.js"),[]).then(({data:n})=>n),"v-85470bb4":()=>e(()=>import("./9.html-52350f9f.js"),[]).then(({data:n})=>n),"v-d7563b34":()=>e(()=>import("./index.html-21834b68.js"),[]).then(({data:n})=>n),"v-34b20afc":()=>e(()=>import("./newyear.html-2702c8fd.js"),[]).then(({data:n})=>n),"v-5a55e944":()=>e(()=>import("./newyear2.html-04668f42.js"),[]).then(({data:n})=>n),"v-c687aefe":()=>e(()=>import("./note.html-73916f8d.js"),[]).then(({data:n})=>n),"v-65f8f0ee":()=>e(()=>import("./index.html-74c8513e.js"),[]).then(({data:n})=>n),"v-65f8f243":()=>e(()=>import("./index.html-c1cb5c06.js"),[]).then(({data:n})=>n),"v-7827ace1":()=>e(()=>import("./index.html-d18a69f9.js"),[]).then(({data:n})=>n),"v-73218730":()=>e(()=>import("./charpter1.html-f3e44f1d.js"),[]).then(({data:n})=>n),"v-74d65fcf":()=>e(()=>import("./charpter2.html-c417c91b.js"),[]).then(({data:n})=>n),"v-07d71d5e":()=>e(()=>import("./index.html-2901291d.js"),[]).then(({data:n})=>n),"v-432fd8ed":()=>e(()=>import("./charpter1.html-dcc7b5ae.js"),[]).then(({data:n})=>n),"v-792517ff":()=>e(()=>import("./index.html-4927665c.js"),[]).then(({data:n})=>n),"v-9b03b464":()=>e(()=>import("./charpter1.html-34fe54a3.js"),[]).then(({data:n})=>n),"v-31760682":()=>e(()=>import("./index.html-501b0828.js"),[]).then(({data:n})=>n),"v-4d8eba8e":()=>e(()=>import("./charpter1.html-d6d97a5b.js"),[]).then(({data:n})=>n),"v-4f43932d":()=>e(()=>import("./charpter2.html-26e218cd.js"),[]).then(({data:n})=>n),"v-50f86bcc":()=>e(()=>import("./charpter3.html-081de78d.js"),[]).then(({data:n})=>n),"v-15c374c7":()=>e(()=>import("./definition.html-d6990abe.js"),[]).then(({data:n})=>n),"v-1b96b631":()=>e(()=>import("./index.html-b85ac83d.js"),[]).then(({data:n})=>n),"v-707de889":()=>e(()=>import("./app.html-ebbd6e13.js"),[]).then(({data:n})=>n),"v-e1cde2e8":()=>e(()=>import("./create.html-a0809cfb.js"),[]).then(({data:n})=>n),"v-00a3e380":()=>e(()=>import("./get-started.html-f8d947ac.js"),[]).then(({data:n})=>n),"v-a2394e62":()=>e(()=>import("./install.html-ac67ccad.js"),[]).then(({data:n})=>n),"v-772a6ade":()=>e(()=>import("./intro.html-24014a72.js"),[]).then(({data:n})=>n),"v-ec82c4fe":()=>e(()=>import("./material.html-8dd6d7a5.js"),[]).then(({data:n})=>n),"v-e67bbff4":()=>e(()=>import("./model-tree.html-016de8d9.js"),[]).then(({data:n})=>n),"v-101096cf":()=>e(()=>import("./physic-field.html-6a4ada03.js"),[]).then(({data:n})=>n),"v-e6fd97ea":()=>e(()=>import("./result.html-4e752959.js"),[]).then(({data:n})=>n),"v-8d480ae8":()=>e(()=>import("./select.html-8ad7636a.js"),[]).then(({data:n})=>n),"v-0ffdd5a1":()=>e(()=>import("./study.html-9128b2f3.js"),[]).then(({data:n})=>n),"v-5978b3ac":()=>e(()=>import("./index.html-8dea9d4c.js"),[]).then(({data:n})=>n),"v-a0a24d6a":()=>e(()=>import("./branch.html-9db95395.js"),[]).then(({data:n})=>n),"v-efa0f806":()=>e(()=>import("./change.html-1706fabf.js"),[]).then(({data:n})=>n),"v-2fe790c2":()=>e(()=>import("./create-repo.html-3d4efd13.js"),[]).then(({data:n})=>n),"v-fe4c8648":()=>e(()=>import("./custom.html-2fede6ef.js"),[]).then(({data:n})=>n),"v-14d32906":()=>e(()=>import("./gitLFS.html-274e0bf3.js"),[]).then(({data:n})=>n),"v-46819f1b":()=>e(()=>import("./ignore.html-223864f9.js"),[]).then(({data:n})=>n),"v-39a5f5ca":()=>e(()=>import("./install.html-543784cb.js"),[]).then(({data:n})=>n),"v-1e560a99":()=>e(()=>import("./intro.html-67fbc108.js"),[]).then(({data:n})=>n),"v-db46e766":()=>e(()=>import("./merge.html-721493ac.js"),[]).then(({data:n})=>n),"v-6479d7d7":()=>e(()=>import("./proxy.html-a7bfe476.js"),[]).then(({data:n})=>n),"v-5b44553c":()=>e(()=>import("./recall.html-c061bda8.js"),[]).then(({data:n})=>n),"v-6f810d27":()=>e(()=>import("./remote.html-00e5d2e0.js"),[]).then(({data:n})=>n),"v-6f792996":()=>e(()=>import("./reset.html-eb8d1614.js"),[]).then(({data:n})=>n),"v-84d4a76c":()=>e(()=>import("./server.html-d13fe043.js"),[]).then(({data:n})=>n),"v-94a3be0a":()=>e(()=>import("./status.html-d5b4ad9a.js"),[]).then(({data:n})=>n),"v-ae5d0daa":()=>e(()=>import("./tag.html-d47c9a3d.js"),[]).then(({data:n})=>n),"v-33492354":()=>e(()=>import("./working-directory.html-abdc3bc2.js"),[]).then(({data:n})=>n),"v-a0440418":()=>e(()=>import("./working.html-787286eb.js"),[]).then(({data:n})=>n),"v-2d8cd5c8":()=>e(()=>import("./index.html-705aa2fc.js"),[]).then(({data:n})=>n),"v-38d41630":()=>e(()=>import("./compare.html-cfc38b94.js"),[]).then(({data:n})=>n),"v-233fe009":()=>e(()=>import("./intro.html-97253b94.js"),[]).then(({data:n})=>n),"v-5350bb30":()=>e(()=>import("./index.html-715a3215.js"),[]).then(({data:n})=>n),"v-29c73cf4":()=>e(()=>import("./power-toys.html-8608fc83.js"),[]).then(({data:n})=>n),"v-38384806":()=>e(()=>import("./powershell.html-b486ec31.js"),[]).then(({data:n})=>n),"v-0ef197d6":()=>e(()=>import("./index.html-2f238cee.js"),[]).then(({data:n})=>n),"v-1ed71d50":()=>e(()=>import("./extension.html-3dd80c9e.js"),[]).then(({data:n})=>n),"v-48a305e5":()=>e(()=>import("./get-started.html-39098e42.js"),[]).then(({data:n})=>n),"v-4e67eaf4":()=>e(()=>import("./install.html-94d6c3fd.js"),[]).then(({data:n})=>n),"v-09701300":()=>e(()=>import("./settings.html-a56e3e98.js"),[]).then(({data:n})=>n),"v-50072a6b":()=>e(()=>import("./shortcut-key.html-339563cb.js"),[]).then(({data:n})=>n),"v-7f9ed65e":()=>e(()=>import("./simple.html-dbf22184.js"),[]).then(({data:n})=>n),"v-0a7d8ba2":()=>e(()=>import("./ui.html-659a7e23.js"),[]).then(({data:n})=>n),"v-fe0b1ba4":()=>e(()=>import("./index.html-6b44a659.js"),[]).then(({data:n})=>n),"v-7e6ee7bc":()=>e(()=>import("./activity.html-087f19dc.js"),[]).then(({data:n})=>n),"v-5c32e26f":()=>e(()=>import("./create.html-0cef937d.js"),[]).then(({data:n})=>n),"v-54c78e24":()=>e(()=>import("./interface.html-ac6d730e.js"),[]).then(({data:n})=>n),"v-1d35e2ca":()=>e(()=>import("./intro.html-e1fd6d8b.js"),[]).then(({data:n})=>n),"v-32a1c95c":()=>e(()=>import("./run.html-fb4d732c.js"),[]).then(({data:n})=>n),"v-f6ed1056":()=>e(()=>import("./index.html-dd468f2d.js"),[]).then(({data:n})=>n),"v-5dad642c":()=>e(()=>import("./cache.html-09df0108.js"),[]).then(({data:n})=>n),"v-74f1f99e":()=>e(()=>import("./checkout.html-1eebc35c.js"),[]).then(({data:n})=>n),"v-74d837e2":()=>e(()=>import("./config.html-0ca774dc.js"),[]).then(({data:n})=>n),"v-4a20b532":()=>e(()=>import("./gh-pages-deploy.html-600a39e3.js"),[]).then(({data:n})=>n),"v-b23b20fc":()=>e(()=>import("./intro.html-1c81ba7d.js"),[]).then(({data:n})=>n),"v-50b2938c":()=>e(()=>import("./index.html-5fb446d9.js"),[]).then(({data:n})=>n),"v-ee5a60cc":()=>e(()=>import("./index.html-cfbab007.js"),[]).then(({data:n})=>n),"v-d94d383c":()=>e(()=>import("./index.html-01b4410d.js"),[]).then(({data:n})=>n),"v-d8a404c2":()=>e(()=>import("./index.html-b23696dd.js"),[]).then(({data:n})=>n),"v-1d30abd8":()=>e(()=>import("./index.html-9a1976eb.js"),[]).then(({data:n})=>n),"v-245c31a9":()=>e(()=>import("./error.html-230d823d.js"),[]).then(({data:n})=>n),"v-d893d8ce":()=>e(()=>import("./index.html-6ebb4e69.js"),[]).then(({data:n})=>n),"v-519de5de":()=>e(()=>import("./index.html-80ad9d15.js"),[]).then(({data:n})=>n),"v-3e216956":()=>e(()=>import("./clang-format.html-3917d19b.js"),[]).then(({data:n})=>n),"v-2ee7e91c":()=>e(()=>import("./index.html-dda71e5a.js"),[]).then(({data:n})=>n),"v-1509315e":()=>e(()=>import("./block.html-6973301a.js"),[]).then(({data:n})=>n),"v-12412da4":()=>e(()=>import("./demo.html-d19aa421.js"),[]).then(({data:n})=>n),"v-6af69b4d":()=>e(()=>import("./extend.html-c79f60df.js"),[]).then(({data:n})=>n),"v-32c10f2e":()=>e(()=>import("./inline.html-43eb1a37.js"),[]).then(({data:n})=>n),"v-134ae2df":()=>e(()=>import("./intro.html-6b35918f.js"),[]).then(({data:n})=>n),"v-ee312fb6":()=>e(()=>import("./index.html-517bd60a.js"),[]).then(({data:n})=>n),"v-73327cb6":()=>e(()=>import("./index.html-03f9e323.js"),[]).then(({data:n})=>n),"v-5bc6221c":()=>e(()=>import("./index.html-6819fd76.js"),[]).then(({data:n})=>n),"v-d6fd848c":()=>e(()=>import("./index.html-28b471b7.js"),[]).then(({data:n})=>n),"v-005dcfac":()=>e(()=>import("./index.html-9b0edcef.js"),[]).then(({data:n})=>n),"v-6e60eaac":()=>e(()=>import("./demo.html-ce1cf027.js"),[]).then(({data:n})=>n),"v-63eb9d04":()=>e(()=>import("./page.html-371833cd.js"),[]).then(({data:n})=>n),"v-65de3b35":()=>e(()=>import("./simple-debug.html-b3046ea7.js"),[]).then(({data:n})=>n),"v-3e889748":()=>e(()=>import("./tag-list.html-7d312628.js"),[]).then(({data:n})=>n),"v-22f6bbee":()=>e(()=>import("./index.html-ebd1bd91.js"),[]).then(({data:n})=>n),"v-248431fa":()=>e(()=>import("./env.html-cac9ceb0.js"),[]).then(({data:n})=>n),"v-193675ee":()=>e(()=>import("./file-structure.html-9a96468b.js"),[]).then(({data:n})=>n),"v-38d408ef":()=>e(()=>import("./index.html-859cd22e.js"),[]).then(({data:n})=>n),"v-6dd27fe6":()=>e(()=>import("./audit.html-58f806ac.js"),[]).then(({data:n})=>n),"v-12f4ded6":()=>e(()=>import("./debug.html-5a263cff.js"),[]).then(({data:n})=>n),"v-a73b2c22":()=>e(()=>import("./interface.html-05bc110a.js"),[]).then(({data:n})=>n),"v-38645abd":()=>e(()=>import("./npm.html-038175ef.js"),[]).then(({data:n})=>n),"v-7ac59094":()=>e(()=>import("./score.html-1aaa322b.js"),[]).then(({data:n})=>n),"v-239235ed":()=>e(()=>import("./index.html-8defee23.js"),[]).then(({data:n})=>n),"v-19bca984":()=>e(()=>import("./axois.html-4ccb08e7.js"),[]).then(({data:n})=>n),"v-681ba581":()=>e(()=>import("./index.html-916efb1d.js"),[]).then(({data:n})=>n),"v-48fc6d3c":()=>e(()=>import("./create.html-1d6a9f34.js"),[]).then(({data:n})=>n),"v-b7f95708":()=>e(()=>import("./file.html-da6c5306.js"),[]).then(({data:n})=>n),"v-0def13a4":()=>e(()=>import("./intro.html-d511893c.js"),[]).then(({data:n})=>n),"v-2a972985":()=>e(()=>import("./quick-dev.html-0dcd737f.js"),[]).then(({data:n})=>n),"v-48a6e254":()=>e(()=>import("./index.html-8c5df9ce.js"),[]).then(({data:n})=>n),"v-3cccf502":()=>e(()=>import("./demo.html-64d01f6b.js"),[]).then(({data:n})=>n),"v-461f9463":()=>e(()=>import("./get-started.html-b9e25468.js"),[]).then(({data:n})=>n),"v-c72e4aea":()=>e(()=>import("./index.html-fd00cc5e.js"),[]).then(({data:n})=>n),"v-33894aab":()=>e(()=>import("./demo.html-6a160f15.js"),[]).then(({data:n})=>n),"v-491f82cc":()=>e(()=>import("./get-started.html-399d1c99.js"),[]).then(({data:n})=>n),"v-4d66e289":()=>e(()=>import("./index.html-ba805d8e.js"),[]).then(({data:n})=>n),"v-db68b190":()=>e(()=>import("./index.html-0c140270.js"),[]).then(({data:n})=>n),"v-3db71024":()=>e(()=>import("./css.html-196b45de.js"),[]).then(({data:n})=>n),"v-8c5b7854":()=>e(()=>import("./html.html-ab9243b7.js"),[]).then(({data:n})=>n),"v-5fbc4987":()=>e(()=>import("./index.html-5fcfdca8.js"),[]).then(({data:n})=>n),"v-df5d1758":()=>e(()=>import("./index.html-63f2039e.js"),[]).then(({data:n})=>n),"v-93dfe636":()=>e(()=>import("./ajax.html-00195d2f.js"),[]).then(({data:n})=>n),"v-8487edae":()=>e(()=>import("./animation.html-3ab8fc55.js"),[]).then(({data:n})=>n),"v-59e10c5a":()=>e(()=>import("./event.html-8b25c4ba.js"),[]).then(({data:n})=>n),"v-c7d79daa":()=>e(()=>import("./extend.html-59011c35.js"),[]).then(({data:n})=>n),"v-3957cd7e":()=>e(()=>import("./intro.html-57c40257.js"),[]).then(({data:n})=>n),"v-5ef6c9b6":()=>e(()=>import("./modify-dom.html-0113cddb.js"),[]).then(({data:n})=>n),"v-799c2158":()=>e(()=>import("./operate-dom.html-fc76e64e.js"),[]).then(({data:n})=>n),"v-546d1486":()=>e(()=>import("./selector.html-59f1d7a5.js"),[]).then(({data:n})=>n),"v-60432ed1":()=>e(()=>import("./archiving.html-25b6e401.js"),[]).then(({data:n})=>n),"v-8aa16a18":()=>e(()=>import("./async.html-61dc2eba.js"),[]).then(({data:n})=>n),"v-4180a476":()=>e(()=>import("./command.html-e0a0117f.js"),[]).then(({data:n})=>n),"v-fb2b21e8":()=>e(()=>import("./file-operation.html-ba25674a.js"),[]).then(({data:n})=>n),"v-2db28a34":()=>e(()=>import("./file.html-be2b914f.js"),[]).then(({data:n})=>n),"v-4e1e017a":()=>e(()=>import("./hardware.html-a0be21dd.js"),[]).then(({data:n})=>n),"v-0cdaf63a":()=>e(()=>import("./host.html-7ddebd5e.js"),[]).then(({data:n})=>n),"v-1e6259a0":()=>e(()=>import("./named-pipe.html-a75afa5d.js"),[]).then(({data:n})=>n),"v-3d1375be":()=>e(()=>import("./process.html-d313567c.js"),[]).then(({data:n})=>n),"v-04b088f8":()=>e(()=>import("./redirection.html-52e88faa.js"),[]).then(({data:n})=>n),"v-5c8b77ee":()=>e(()=>import("./regex.html-b7e3b7d6.js"),[]).then(({data:n})=>n),"v-d66a505a":()=>e(()=>import("./system.html-67abebd2.js"),[]).then(({data:n})=>n),"v-0c78dc56":()=>e(()=>import("./text.html-5d68b09f.js"),[]).then(({data:n})=>n),"v-39cb0835":()=>e(()=>import("./time.html-cc1c2d17.js"),[]).then(({data:n})=>n),"v-4bd85df7":()=>e(()=>import("./user.html-7eb43bca.js"),[]).then(({data:n})=>n),"v-4ec49228":()=>e(()=>import("./index.html-90e483a3.js"),[]).then(({data:n})=>n),"v-33854f17":()=>e(()=>import("./build.html-685f3770.js"),[]).then(({data:n})=>n),"v-dcad9030":()=>e(()=>import("./view.html-5958b5bf.js"),[]).then(({data:n})=>n),"v-c40faf5e":()=>e(()=>import("./index.html-e2e1d13b.js"),[]).then(({data:n})=>n),"v-af089604":()=>e(()=>import("./intro.html-e46f68b8.js"),[]).then(({data:n})=>n),"v-e761606a":()=>e(()=>import("./index.html-459df0f8.js"),[]).then(({data:n})=>n),"v-0c4433da":()=>e(()=>import("./get-started.html-2169aaa8.js"),[]).then(({data:n})=>n),"v-dd24d6aa":()=>e(()=>import("./settings.html-111d57bc.js"),[]).then(({data:n})=>n),"v-11ff0409":()=>e(()=>import("./index.html-a07bbe5f.js"),[]).then(({data:n})=>n),"v-685e2634":()=>e(()=>import("./basic.html-0cb13295.js"),[]).then(({data:n})=>n),"v-27d31212":()=>e(()=>import("./command.html-f3e44514.js"),[]).then(({data:n})=>n),"v-b5f60ea2":()=>e(()=>import("./customization.html-995d9151.js"),[]).then(({data:n})=>n),"v-3dacf32f":()=>e(()=>import("./debug.html-a8079bfe.js"),[]).then(({data:n})=>n),"v-07497f26":()=>e(()=>import("./edit.html-2f7a51d4.js"),[]).then(({data:n})=>n),"v-82a4977a":()=>e(()=>import("./extension.html-6b0295ec.js"),[]).then(({data:n})=>n),"v-280dcef4":()=>e(()=>import("./file.html-19906adb.js"),[]).then(({data:n})=>n),"v-31d5af50":()=>e(()=>import("./git.html-60670747.js"),[]).then(({data:n})=>n),"v-d7d6dbd6":()=>e(()=>import("./intellisense.html-fa09f329.js"),[]).then(({data:n})=>n),"v-fd69a6ea":()=>e(()=>import("./task.html-6cfdbaa5.js"),[]).then(({data:n})=>n),"v-091db9b0":()=>e(()=>import("./index.html-70d86faf.js"),[]).then(({data:n})=>n),"v-5e47c7c5":()=>e(()=>import("./cheatsheet.html-0f13f985.js"),[]).then(({data:n})=>n),"v-4ae7b17f":()=>e(()=>import("./iterable.html-10c7828b.js"),[]).then(({data:n})=>n),"v-7c7974d0":()=>e(()=>import("./samples.html-620e8e17.js"),[]).then(({data:n})=>n),"v-580ce442":()=>e(()=>import("./index.html-688449b6.js"),[]).then(({data:n})=>n),"v-4157008c":()=>e(()=>import("./ajax.html-3d797e21.js"),[]).then(({data:n})=>n),"v-e636c4d4":()=>e(()=>import("./browser-object.html-e8162168.js"),[]).then(({data:n})=>n),"v-3fe5c342":()=>e(()=>import("./canvas.html-85d232b0.js"),[]).then(({data:n})=>n),"v-37881894":()=>e(()=>import("./dom.html-e1e921d6.js"),[]).then(({data:n})=>n),"v-fb7c1444":()=>e(()=>import("./file.html-1be791b5.js"),[]).then(({data:n})=>n),"v-3c952b96":()=>e(()=>import("./form.html-d5a8e7b0.js"),[]).then(({data:n})=>n),"v-3ac3fde8":()=>e(()=>import("./intro.html-6ab60b7b.js"),[]).then(({data:n})=>n),"v-5b96b7fd":()=>e(()=>import("./promise.html-23c899c2.js"),[]).then(({data:n})=>n),"v-7af69fbf":()=>e(()=>import("./index.html-817d281a.js"),[]).then(({data:n})=>n),"v-d3bec9c2":()=>e(()=>import("./array.html-0e33d475.js"),[]).then(({data:n})=>n),"v-5220625f":()=>e(()=>import("./arraybuffer.html-104dcaff.js"),[]).then(({data:n})=>n),"v-e898ae48":()=>e(()=>import("./async.html-08107da9.js"),[]).then(({data:n})=>n),"v-e7d0ffd8":()=>e(()=>import("./class-extends.html-8152ca8b.js"),[]).then(({data:n})=>n),"v-65d00140":()=>e(()=>import("./class.html-4f9ae92d.js"),[]).then(({data:n})=>n),"v-01199afd":()=>e(()=>import("./decorator.html-a5aa098d.js"),[]).then(({data:n})=>n),"v-d9eeb42e":()=>e(()=>import("./destructuring.html-07cb57a5.js"),[]).then(({data:n})=>n),"v-d486c4a0":()=>e(()=>import("./fp.html-17db683f.js"),[]).then(({data:n})=>n),"v-412da2a2":()=>e(()=>import("./function.html-fcac7d1b.js"),[]).then(({data:n})=>n),"v-1e32d554":()=>e(()=>import("./generator-async.html-118c57b7.js"),[]).then(({data:n})=>n),"v-2a661765":()=>e(()=>import("./generator.html-95b35930.js"),[]).then(({data:n})=>n),"v-29563aec":()=>e(()=>import("./intro.html-09789580.js"),[]).then(({data:n})=>n),"v-d4970868":()=>e(()=>import("./iterator.html-67160a47.js"),[]).then(({data:n})=>n),"v-8113af46":()=>e(()=>import("./let.html-d350b1c4.js"),[]).then(({data:n})=>n),"v-5244cc12":()=>e(()=>import("./mixin.html-ee3125c5.js"),[]).then(({data:n})=>n),"v-2fc52e78":()=>e(()=>import("./module-loader.html-ec3ea495.js"),[]).then(({data:n})=>n),"v-0ec9be64":()=>e(()=>import("./module.html-a0827f67.js"),[]).then(({data:n})=>n),"v-6bcd6e11":()=>e(()=>import("./number.html-22b8f092.js"),[]).then(({data:n})=>n),"v-189ba04a":()=>e(()=>import("./object.html-87d025d8.js"),[]).then(({data:n})=>n),"v-55b00c46":()=>e(()=>import("./promise.html-f64db3a7.js"),[]).then(({data:n})=>n),"v-3ac3b992":()=>e(()=>import("./proposals.html-6ed135a8.js"),[]).then(({data:n})=>n),"v-6f7a082a":()=>e(()=>import("./proxy.html-08b10246.js"),[]).then(({data:n})=>n),"v-1b9d0426":()=>e(()=>import("./reference.html-6a7d1a6d.js"),[]).then(({data:n})=>n),"v-55c5117b":()=>e(()=>import("./reflect.html-26083616.js"),[]).then(({data:n})=>n),"v-ba82bc1e":()=>e(()=>import("./regex.html-4f50a186.js"),[]).then(({data:n})=>n),"v-0b0d2347":()=>e(()=>import("./set-map.html-5c585e37.js"),[]).then(({data:n})=>n),"v-7953f4a6":()=>e(()=>import("./simd.html-4ab79765.js"),[]).then(({data:n})=>n),"v-1cd0e5c2":()=>e(()=>import("./spec.html-b909916e.js"),[]).then(({data:n})=>n),"v-3466b36e":()=>e(()=>import("./string.html-643e33b0.js"),[]).then(({data:n})=>n),"v-32817272":()=>e(()=>import("./style.html-a9bb67ca.js"),[]).then(({data:n})=>n),"v-2c2bed22":()=>e(()=>import("./symbol.html-ef2f5372.js"),[]).then(({data:n})=>n),"v-4613a302":()=>e(()=>import("./index.html-a3450f94.js"),[]).then(({data:n})=>n),"v-7ba4ff44":()=>e(()=>import("./arrow-function.html-0c4a1eec.js"),[]).then(({data:n})=>n),"v-797b419c":()=>e(()=>import("./call.html-26c74310.js"),[]).then(({data:n})=>n),"v-02684b7d":()=>e(()=>import("./closure.html-006e07eb.js"),[]).then(({data:n})=>n),"v-58f135ae":()=>e(()=>import("./declare.html-75a44edd.js"),[]).then(({data:n})=>n),"v-556bf6ae":()=>e(()=>import("./destructuring.html-1501303b.js"),[]).then(({data:n})=>n),"v-88b653b6":()=>e(()=>import("./generator.html-9f26b499.js"),[]).then(({data:n})=>n),"v-43034483":()=>e(()=>import("./higher-order-function.html-a150a83a.js"),[]).then(({data:n})=>n),"v-417b4ca8":()=>e(()=>import("./intro.html-822374c5.js"),[]).then(({data:n})=>n),"v-754a14ed":()=>e(()=>import("./map-and-reduce.html-6f55f169.js"),[]).then(({data:n})=>n),"v-1029f0b9":()=>e(()=>import("./method.html-63531c33.js"),[]).then(({data:n})=>n),"v-ee259a78":()=>e(()=>import("./scope.html-b98301b5.js"),[]).then(({data:n})=>n),"v-d323d548":()=>e(()=>import("./this.html-b403f586.js"),[]).then(({data:n})=>n),"v-c928e2ea":()=>e(()=>import("./index.html-9c5fd653.js"),[]).then(({data:n})=>n),"v-0bfb0a2a":()=>e(()=>import("./array.html-6ab6c275.js"),[]).then(({data:n})=>n),"v-7de37888":()=>e(()=>import("./boolean.html-e07d47ed.js"),[]).then(({data:n})=>n),"v-293c8be9":()=>e(()=>import("./condition.html-6c82e236.js"),[]).then(({data:n})=>n),"v-a4a26144":()=>e(()=>import("./data-structure.html-6dcf96a2.js"),[]).then(({data:n})=>n),"v-58215d54":()=>e(()=>import("./exercise.html-5e669760.js"),[]).then(({data:n})=>n),"v-a92fc154":()=>e(()=>import("./function.html-73689a40.js"),[]).then(({data:n})=>n),"v-068af29a":()=>e(()=>import("./get-started.html-160c0fd8.js"),[]).then(({data:n})=>n),"v-24519f9d":()=>e(()=>import("./grammar.html-35b3fc33.js"),[]).then(({data:n})=>n),"v-058fc208":()=>e(()=>import("./iterable.html-e2c68f0a.js"),[]).then(({data:n})=>n),"v-927cc2ec":()=>e(()=>import("./loop.html-5a536f4c.js"),[]).then(({data:n})=>n),"v-19e36b6e":()=>e(()=>import("./map-and-set.html-a6459238.js"),[]).then(({data:n})=>n),"v-0c0c498f":()=>e(()=>import("./object.html-21ee610c.js"),[]).then(({data:n})=>n),"v-03b28006":()=>e(()=>import("./string.html-faa4fb3d.js"),[]).then(({data:n})=>n),"v-fe8f719c":()=>e(()=>import("./variable.html-e8eaa363.js"),[]).then(({data:n})=>n),"v-c3105dca":()=>e(()=>import("./index.html-a85b2ee6.js"),[]).then(({data:n})=>n),"v-4c6d1960":()=>e(()=>import("./history.html-53461314.js"),[]).then(({data:n})=>n),"v-71e8640e":()=>e(()=>import("./JSON.html-c714f07f.js"),[]).then(({data:n})=>n),"v-58da95f8":()=>e(()=>import("./index.html-d466b5ea.js"),[]).then(({data:n})=>n),"v-54277b4e":()=>e(()=>import("./class.html-d536a016.js"),[]).then(({data:n})=>n),"v-341b5c65":()=>e(()=>import("./create.html-59c7495d.js"),[]).then(({data:n})=>n),"v-50d58ef3":()=>e(()=>import("./date.html-6fd756f4.js"),[]).then(({data:n})=>n),"v-280a6107":()=>e(()=>import("./extend.html-243d01e8.js"),[]).then(({data:n})=>n),"v-322a7de5":()=>e(()=>import("./intro.html-4739be11.js"),[]).then(({data:n})=>n),"v-380d4898":()=>e(()=>import("./regExp.html-14227166.js"),[]).then(({data:n})=>n),"v-5d8cafd7":()=>e(()=>import("./wrap.html-8993f341.js"),[]).then(({data:n})=>n),"v-745f48d0":()=>e(()=>import("./index.html-e6775567.js"),[]).then(({data:n})=>n),"v-091ae3d7":()=>e(()=>import("./arithmetic.html-11c04724.js"),[]).then(({data:n})=>n),"v-dd97b0f8":()=>e(()=>import("./bit.html-25c67a07.js"),[]).then(({data:n})=>n),"v-7e4ee549":()=>e(()=>import("./boolean.html-9bb9d9f5.js"),[]).then(({data:n})=>n),"v-c1f11850":()=>e(()=>import("./comparison.html-0629b4ba.js"),[]).then(({data:n})=>n),"v-4dfa691d":()=>e(()=>import("./priority.html-b03635be.js"),[]).then(({data:n})=>n),"v-9c53bea4":()=>e(()=>import("./index.html-349089cc.js"),[]).then(({data:n})=>n),"v-5d22fd4e":()=>e(()=>import("./array.html-1526cf46.js"),[]).then(({data:n})=>n),"v-43d08d42":()=>e(()=>import("./boolean.html-b230ba11.js"),[]).then(({data:n})=>n),"v-2f8d5e13":()=>e(()=>import("./function.html-073d8823.js"),[]).then(({data:n})=>n),"v-747e149f":()=>e(()=>import("./general.html-ba7aaafa.js"),[]).then(({data:n})=>n),"v-eb21e1be":()=>e(()=>import("./null-undefined.html-9148709e.js"),[]).then(({data:n})=>n),"v-f5d15c7c":()=>e(()=>import("./number.html-b467d81e.js"),[]).then(({data:n})=>n),"v-0cfc138c":()=>e(()=>import("./object.html-b8bf823c.js"),[]).then(({data:n})=>n),"v-01d2ec0c":()=>e(()=>import("./string.html-2373997a.js"),[]).then(({data:n})=>n),"v-752bb69b":()=>e(()=>import("./index.html-7e6600b9.js"),[]).then(({data:n})=>n),"v-d29981d2":()=>e(()=>import("./nature.html-22c2869f.js"),[]).then(({data:n})=>n),"v-51851102":()=>e(()=>import("./object.html-18921315.js"),[]).then(({data:n})=>n),"v-6780fa2f":()=>e(()=>import("./people.html-ff8e1535.js"),[]).then(({data:n})=>n),"v-333335e6":()=>e(()=>import("./place.html-75114726.js"),[]).then(({data:n})=>n),"v-0fb734c6":()=>e(()=>import("./symbol.html-46a25bb7.js"),[]).then(({data:n})=>n),"v-054e96dc":()=>e(()=>import("./index.html-ee699be6.js"),[]).then(({data:n})=>n),"v-0d6dbef8":()=>e(()=>import("./generator.html-a8f45af1.js"),[]).then(({data:n})=>n),"v-5fe8612e":()=>e(()=>import("./iteration.html-c9a9a2de.js"),[]).then(({data:n})=>n),"v-002015d9":()=>e(()=>import("./iterator.html-decda76f.js"),[]).then(({data:n})=>n),"v-578855ad":()=>e(()=>import("./list-comprehensions.html-88e759c5.js"),[]).then(({data:n})=>n),"v-1e6d56ce":()=>e(()=>import("./slice.html-9a3e8ed1.js"),[]).then(({data:n})=>n),"v-54d1615c":()=>e(()=>import("./index.html-79f51710.js"),[]).then(({data:n})=>n),"v-061793ac":()=>e(()=>import("./argument.html-5fb4d28e.js"),[]).then(({data:n})=>n),"v-2ca65e29":()=>e(()=>import("./call.html-aa5524e3.js"),[]).then(({data:n})=>n),"v-fc30e528":()=>e(()=>import("./define.html-da2126d6.js"),[]).then(({data:n})=>n),"v-dd0a6282":()=>e(()=>import("./intro.html-219dd8d3.js"),[]).then(({data:n})=>n),"v-0416c3b9":()=>e(()=>import("./recursive.html-031cff6e.js"),[]).then(({data:n})=>n),"v-4f81c6bb":()=>e(()=>import("./index.html-1cfb1ff1.js"),[]).then(({data:n})=>n),"v-f95524f4":()=>e(()=>import("./anonymous-function.html-d785ad3c.js"),[]).then(({data:n})=>n),"v-e7b24e0e":()=>e(()=>import("./decorator.html-6ed0a749.js"),[]).then(({data:n})=>n),"v-63939790":()=>e(()=>import("./parital-function.html-57489e59.js"),[]).then(({data:n})=>n),"v-7b8e695f":()=>e(()=>import("./return-function.html-84ac9acc.js"),[]).then(({data:n})=>n),"v-435b5698":()=>e(()=>import("./index.html-fc13fffb.js"),[]).then(({data:n})=>n),"v-03bbd203":()=>e(()=>import("./basic.html-c3da53ea.js"),[]).then(({data:n})=>n),"v-83da8d94":()=>e(()=>import("./condition.html-521a954d.js"),[]).then(({data:n})=>n),"v-13c3cbe8":()=>e(()=>import("./dict-and-set.html-0b1bf251.js"),[]).then(({data:n})=>n),"v-f3b0732e":()=>e(()=>import("./exercise.html-f30fe544.js"),[]).then(({data:n})=>n),"v-159c09db":()=>e(()=>import("./io.html-62b788d3.js"),[]).then(({data:n})=>n),"v-8278a984":()=>e(()=>import("./list-and-tuple.html-33dbf028.js"),[]).then(({data:n})=>n),"v-53cd951d":()=>e(()=>import("./loop.html-791dd3f8.js"),[]).then(({data:n})=>n),"v-efe14460":()=>e(()=>import("./string.html-9b6411d4.js"),[]).then(({data:n})=>n),"v-20cff4f2":()=>e(()=>import("./write.html-b6cb2d79.js"),[]).then(({data:n})=>n),"v-46679928":()=>e(()=>import("./index.html-549ffe22.js"),[]).then(({data:n})=>n),"v-2446fd74":()=>e(()=>import("./install.html-a44c2f06.js"),[]).then(({data:n})=>n),"v-4a2b6072":()=>e(()=>import("./interpreter.html-ba9b6c68.js"),[]).then(({data:n})=>n),"v-271d75d6":()=>e(()=>import("./intro.html-b365bd2e.js"),[]).then(({data:n})=>n),"v-5af931fe":()=>e(()=>import("./index.html-5ac27922.js"),[]).then(({data:n})=>n),"v-435cedc8":()=>e(()=>import("./install.html-6f019f06.js"),[]).then(({data:n})=>n),"v-fddb6b2a":()=>e(()=>import("./intro.html-3260b712.js"),[]).then(({data:n})=>n),"v-65a32754":()=>e(()=>import("./usage.html-90c2b7d2.js"),[]).then(({data:n})=>n),"v-6730ea78":()=>e(()=>import("./index.html-37d369cb.js"),[]).then(({data:n})=>n),"v-73a24a3a":()=>e(()=>import("./customize.html-ff46d5ff.js"),[]).then(({data:n})=>n),"v-8fa6968a":()=>e(()=>import("./extend.html-55b0f63c.js"),[]).then(({data:n})=>n),"v-1d5feaa7":()=>e(()=>import("./info.html-9a930bf1.js"),[]).then(({data:n})=>n),"v-0b4f55c0":()=>e(()=>import("./instance.html-f7353cd2.js"),[]).then(({data:n})=>n),"v-4754e3b1":()=>e(()=>import("./intro.html-5736e4f1.js"),[]).then(({data:n})=>n),"v-0ffcd3e0":()=>e(()=>import("./property.html-dc89be16.js"),[]).then(({data:n})=>n),"v-59a21084":()=>e(()=>import("./special.html-d53ba785.js"),[]).then(({data:n})=>n),"v-6863cc9e":()=>e(()=>import("./index.html-e5f468f3.js"),[]).then(({data:n})=>n),"v-f0d4733a":()=>e(()=>import("./class-and-interfaces.html-40313983.js"),[]).then(({data:n})=>n),"v-15dd32d2":()=>e(()=>import("./class.html-462d4d04.js"),[]).then(({data:n})=>n),"v-40c17b28":()=>e(()=>import("./declaration-merging.html-f8df0615.js"),[]).then(({data:n})=>n),"v-8b0e3c32":()=>e(()=>import("./enum.html-e4b2857f.js"),[]).then(({data:n})=>n),"v-251c5e07":()=>e(()=>import("./further-reading.html-a3a45554.js"),[]).then(({data:n})=>n),"v-5edb8acc":()=>e(()=>import("./generics.html-fb92baad.js"),[]).then(({data:n})=>n),"v-6ed22e89":()=>e(()=>import("./string-literal-types.html-92cd279a.js"),[]).then(({data:n})=>n),"v-1127c682":()=>e(()=>import("./tuple.html-f1262707.js"),[]).then(({data:n})=>n),"v-bdbcba86":()=>e(()=>import("./type-aliases.html-b7685092.js"),[]).then(({data:n})=>n),"v-2a3f152e":()=>e(()=>import("./index.html-17a83de8.js"),[]).then(({data:n})=>n),"v-b5cdbcca":()=>e(()=>import("./any.html-f0cbae6d.js"),[]).then(({data:n})=>n),"v-0eb38230":()=>e(()=>import("./built-in-objects.html-a0a18070.js"),[]).then(({data:n})=>n),"v-6193fda3":()=>e(()=>import("./declaration-files.html-db49f2ad.js"),[]).then(({data:n})=>n),"v-85f3d8a2":()=>e(()=>import("./primitive-data-types.html-ffaddfaa.js"),[]).then(({data:n})=>n),"v-cc37e3c8":()=>e(()=>import("./type-assertion.html-6c4bf8bc.js"),[]).then(({data:n})=>n),"v-697acf65":()=>e(()=>import("./type-inference.html-80e970e7.js"),[]).then(({data:n})=>n),"v-0db2b831":()=>e(()=>import("./type-of-array.html-f30dfb25.js"),[]).then(({data:n})=>n),"v-54dad760":()=>e(()=>import("./type-of-function.html-789690e5.js"),[]).then(({data:n})=>n),"v-76bd067c":()=>e(()=>import("./type-of-object-interfaces.html-7c5b41fc.js"),[]).then(({data:n})=>n),"v-552c52ec":()=>e(()=>import("./union-types.html-b94fb5e5.js"),[]).then(({data:n})=>n),"v-9d4e28d0":()=>e(()=>import("./index.html-44bed781.js"),[]).then(({data:n})=>n),"v-73edba1e":()=>e(()=>import("./lint.html-6fe5f1c5.js"),[]).then(({data:n})=>n),"v-05c4845f":()=>e(()=>import("./index.html-28d13f0e.js"),[]).then(({data:n})=>n),"v-abdb2784":()=>e(()=>import("./get-typescript.html-747971f3.js"),[]).then(({data:n})=>n),"v-7552317a":()=>e(()=>import("./hello-typescript.html-9eb886a3.js"),[]).then(({data:n})=>n),"v-5e699f3b":()=>e(()=>import("./what-is-typescript.html-7697a425.js"),[]).then(({data:n})=>n),"v-1120439a":()=>e(()=>import("./index.html-e8fc91db.js"),[]).then(({data:n})=>n),"v-44daa0d9":()=>e(()=>import("./debug.html-07e889ec.js"),[]).then(({data:n})=>n),"v-97a6cd28":()=>e(()=>import("./file-system.html-05424a0b.js"),[]).then(({data:n})=>n),"v-68cc3d1e":()=>e(()=>import("./network.html-be01d2c0.js"),[]).then(({data:n})=>n),"v-c119061e":()=>e(()=>import("./storage.html-84ec4cc2.js"),[]).then(({data:n})=>n),"v-0419817f":()=>e(()=>import("./index.html-9ebfc0d7.js"),[]).then(({data:n})=>n),"v-1dfd49cc":()=>e(()=>import("./app-config.html-38ffac3b.js"),[]).then(({data:n})=>n),"v-5dac3018":()=>e(()=>import("./page-config.html-bcd5c001.js"),[]).then(({data:n})=>n),"v-0c5df440":()=>e(()=>import("./sitemap-config.html-d5aa1f88.js"),[]).then(({data:n})=>n),"v-79fd6080":()=>e(()=>import("./index.html-34dbac7a.js"),[]).then(({data:n})=>n),"v-e0cabd72":()=>e(()=>import("./behavior.html-809cfcb8.js"),[]).then(({data:n})=>n),"v-3fc03a7c":()=>e(()=>import("./component.html-f83e7514.js"),[]).then(({data:n})=>n),"v-5f57be6d":()=>e(()=>import("./intro.html-45776102.js"),[]).then(({data:n})=>n),"v-1cc0ca48":()=>e(()=>import("./style.html-7ffb9b8e.js"),[]).then(({data:n})=>n),"v-bb67d460":()=>e(()=>import("./index.html-e0853a68.js"),[]).then(({data:n})=>n),"v-2dda89dc":()=>e(()=>import("./env.html-fda344cc.js"),[]).then(({data:n})=>n),"v-38000fbd":()=>e(()=>import("./intro.html-bd5f5f0b.js"),[]).then(({data:n})=>n),"v-73a8909e":()=>e(()=>import("./js-support.html-d7ece091.js"),[]).then(({data:n})=>n),"v-687a9220":()=>e(()=>import("./mechanism.html-0499a8f2.js"),[]).then(({data:n})=>n),"v-6912b19d":()=>e(()=>import("./scene.html-4972b999.js"),[]).then(({data:n})=>n),"v-37957440":()=>e(()=>import("./update.html-206864fb.js"),[]).then(({data:n})=>n),"v-184003f0":()=>e(()=>import("./index.html-c1ae9af0.js"),[]).then(({data:n})=>n),"v-70096960":()=>e(()=>import("./app.html-d897b131.js"),[]).then(({data:n})=>n),"v-262f21a8":()=>e(()=>import("./lifetime.html-7127e816.js"),[]).then(({data:n})=>n),"v-70732ae5":()=>e(()=>import("./module.html-6fc6e894.js"),[]).then(({data:n})=>n),"v-acff2abc":()=>e(()=>import("./page.html-ec880a0e.js"),[]).then(({data:n})=>n),"v-55eacf0e":()=>e(()=>import("./register.html-f8fe4f29.js"),[]).then(({data:n})=>n),"v-a560af90":()=>e(()=>import("./route.html-2a3f65ca.js"),[]).then(({data:n})=>n),"v-5b12db36":()=>e(()=>import("./run.html-3b15d088.js"),[]).then(({data:n})=>n),"v-0450ba08":()=>e(()=>import("./index.html-7555028a.js"),[]).then(({data:n})=>n),"v-6dd771d1":()=>e(()=>import("./animation.html-21e2cc9f.js"),[]).then(({data:n})=>n),"v-15c673f8":()=>e(()=>import("./component.html-badfe227.js"),[]).then(({data:n})=>n),"v-2cf6e456":()=>e(()=>import("./condition-render.html-38168d74.js"),[]).then(({data:n})=>n),"v-01fc8b56":()=>e(()=>import("./data-bind.html-5b191d6a.js"),[]).then(({data:n})=>n),"v-5f49767b":()=>e(()=>import("./event.html-ae6fee7d.js"),[]).then(({data:n})=>n),"v-4adb0560":()=>e(()=>import("./list-render.html-0ae07064.js"),[]).then(({data:n})=>n),"v-bbd42168":()=>e(()=>import("./model.html-663a49d1.js"),[]).then(({data:n})=>n),"v-f0611518":()=>e(()=>import("./rendering-cache.html-7f92d082.js"),[]).then(({data:n})=>n),"v-59358b0a":()=>e(()=>import("./resizable.html-1016f029.js"),[]).then(({data:n})=>n),"v-b7241244":()=>e(()=>import("./selector.html-806d045d.js"),[]).then(({data:n})=>n),"v-19ff4723":()=>e(()=>import("./template.html-17564696.js"),[]).then(({data:n})=>n),"v-7452791d":()=>e(()=>import("./wxml.html-3726bb12.js"),[]).then(({data:n})=>n),"v-6b499376":()=>e(()=>import("./wxs-event.html-5e404923.js"),[]).then(({data:n})=>n),"v-55011963":()=>e(()=>import("./wxs.html-e4f2dd62.js"),[]).then(({data:n})=>n),"v-84ac6e08":()=>e(()=>import("./wxss.html-4414cfc2.js"),[]).then(({data:n})=>n),"v-6ed03c7c":()=>e(()=>import("./index.html-990aeaf3.js"),[]).then(({data:n})=>n),"v-0500ab2c":()=>e(()=>import("./box.html-506f76ed.js"),[]).then(({data:n})=>n),"v-20f0ad21":()=>e(()=>import("./cascade.html-4a748c65.js"),[]).then(({data:n})=>n),"v-168cefd2":()=>e(()=>import("./common.html-d071efb1.js"),[]).then(({data:n})=>n),"v-7a51ec1b":()=>e(()=>import("./declaration.html-b99d71e6.js"),[]).then(({data:n})=>n),"v-3e54ab50":()=>e(()=>import("./import.html-348eb375.js"),[]).then(({data:n})=>n),"v-02dacd5e":()=>e(()=>import("./selector.html-5fd745ad.js"),[]).then(({data:n})=>n),"v-71dc7f0c":()=>e(()=>import("./index.html-1a724262.js"),[]).then(({data:n})=>n),"v-5333caa4":()=>e(()=>import("./background-and-border.html-95098921.js"),[]).then(({data:n})=>n),"v-3fa85cfa":()=>e(()=>import("./box.html-9611fbac.js"),[]).then(({data:n})=>n),"v-69b33c5e":()=>e(()=>import("./font.html-95d77cbb.js"),[]).then(({data:n})=>n),"v-a1ab80fe":()=>e(()=>import("./media.html-4df0c343.js"),[]).then(({data:n})=>n),"v-3291128b":()=>e(()=>import("./overflow.html-59a52e3c.js"),[]).then(({data:n})=>n),"v-69be0f1d":()=>e(()=>import("./replaced.html-1ca63d73.js"),[]).then(({data:n})=>n),"v-e3e99664":()=>e(()=>import("./selector.html-4c6819db.js"),[]).then(({data:n})=>n),"v-503fc08f":()=>e(()=>import("./sizing.html-96cf3a64.js"),[]).then(({data:n})=>n),"v-085d06ce":()=>e(()=>import("./text-direction.html-5a587364.js"),[]).then(({data:n})=>n),"v-9555e3d8":()=>e(()=>import("./value.html-ffe5732e.js"),[]).then(({data:n})=>n),"v-527c4b9c":()=>e(()=>import("./index.html-b802a919.js"),[]).then(({data:n})=>n),"v-5717d036":()=>e(()=>import("./exercise.html-d53e0c8c.js"),[]).then(({data:n})=>n),"v-a2ff4f38":()=>e(()=>import("./flex.html-fcb5767c.js"),[]).then(({data:n})=>n),"v-38389ece":()=>e(()=>import("./float.html-b31d7329.js"),[]).then(({data:n})=>n),"v-846c5f62":()=>e(()=>import("./flow.html-a9f728d6.js"),[]).then(({data:n})=>n),"v-6383d537":()=>e(()=>import("./grid.html-d046e155.js"),[]).then(({data:n})=>n),"v-6b707689":()=>e(()=>import("./intro.html-eede2a5f.js"),[]).then(({data:n})=>n),"v-1737c155":()=>e(()=>import("./index.html-f0df3a75.js"),[]).then(({data:n})=>n),"v-fa26e920":()=>e(()=>import("./mime.html-cf3b25f2.js"),[]).then(({data:n})=>n),"v-0bbf52f1":()=>e(()=>import("./seo.html-be395633.js"),[]).then(({data:n})=>n),"v-fe14c97c":()=>e(()=>import("./uri.html-fef87599.js"),[]).then(({data:n})=>n),"v-f3d7b5c2":()=>e(()=>import("./url.html-33276905.js"),[]).then(({data:n})=>n),"v-3520260c":()=>e(()=>import("./index.html-9e0054c6.js"),[]).then(({data:n})=>n),"v-914cf70e":()=>e(()=>import("./tag.html-8405033d.js"),[]).then(({data:n})=>n),"v-2f07a0ec":()=>e(()=>import("./index.html-97e62791.js"),[]).then(({data:n})=>n),"v-77dfa475":()=>e(()=>import("./basic.html-0814f7cc.js"),[]).then(({data:n})=>n),"v-dfcdc6ac":()=>e(()=>import("./embed.html-3bcb6d15.js"),[]).then(({data:n})=>n),"v-495c4178":()=>e(()=>import("./format.html-9a9ca3a6.js"),[]).then(({data:n})=>n),"v-02c46aa2":()=>e(()=>import("./head.html-10349d54.js"),[]).then(({data:n})=>n),"v-37a4494f":()=>e(()=>import("./history.html-7e1780ae.js"),[]).then(({data:n})=>n),"v-64df0368":()=>e(()=>import("./image.html-add4755f.js"),[]).then(({data:n})=>n),"v-6a524625":()=>e(()=>import("./layout.html-c5197b36.js"),[]).then(({data:n})=>n),"v-aa51ae56":()=>e(()=>import("./link.html-c098b7d5.js"),[]).then(({data:n})=>n),"v-2e7dea7f":()=>e(()=>import("./media.html-5072c797.js"),[]).then(({data:n})=>n),"v-2ef83302":()=>e(()=>import("./svg.html-d34206ff.js"),[]).then(({data:n})=>n),"v-613200d5":()=>e(()=>import("./table.html-194347ed.js"),[]).then(({data:n})=>n),"v-3848a939":()=>e(()=>import("./alias.html-dda5b1aa.js"),[]).then(({data:n})=>n),"v-f0eb6098":()=>e(()=>import("./awk.html-82321c47.js"),[]).then(({data:n})=>n),"v-658f2b0a":()=>e(()=>import("./cal.html-561ef508.js"),[]).then(({data:n})=>n),"v-4a41a11a":()=>e(()=>import("./cat.html-76497a3c.js"),[]).then(({data:n})=>n),"v-7fa1ff5c":()=>e(()=>import("./clear.html-733069d6.js"),[]).then(({data:n})=>n),"v-0c6421dc":()=>e(()=>import("./cp.html-22f6cf9b.js"),[]).then(({data:n})=>n),"v-06485ef2":()=>e(()=>import("./cut.html-37125b19.js"),[]).then(({data:n})=>n),"v-6fef0b3b":()=>e(()=>import("./date.html-ba2b1ca2.js"),[]).then(({data:n})=>n),"v-2cd035a9":()=>e(()=>import("./dd.html-a4568f2d.js"),[]).then(({data:n})=>n),"v-3039e6e7":()=>e(()=>import("./df.html-f0538db0.js"),[]).then(({data:n})=>n),"v-49d29838":()=>e(()=>import("./du.html-1a7ab29f.js"),[]).then(({data:n})=>n),"v-cd058ca4":()=>e(()=>import("./egrep.html-258ce22b.js"),[]).then(({data:n})=>n),"v-d9533216":()=>e(()=>import("./export.html-69c47d0a.js"),[]).then(({data:n})=>n),"v-304f762d":()=>e(()=>import("./file.html-034fbd68.js"),[]).then(({data:n})=>n),"v-cf31d7e0":()=>e(()=>import("./find.html-5c60abb8.js"),[]).then(({data:n})=>n),"v-e56505c8":()=>e(()=>import("./fmt.html-4e77b2b1.js"),[]).then(({data:n})=>n),"v-0bf82913":()=>e(()=>import("./grep.html-b39bf2e0.js"),[]).then(({data:n})=>n),"v-4b7c10e8":()=>e(()=>import("./gunzip.html-2b7f7966.js"),[]).then(({data:n})=>n),"v-bfa5a534":()=>e(()=>import("./gzcat.html-8faaaa54.js"),[]).then(({data:n})=>n),"v-1e9a7d0f":()=>e(()=>import("./gzip.html-913365ae.js"),[]).then(({data:n})=>n),"v-21978d8b":()=>e(()=>import("./kill.html-a23e0f49.js"),[]).then(({data:n})=>n),"v-d0927c34":()=>e(()=>import("./killall.html-4c563a41.js"),[]).then(({data:n})=>n),"v-12760d5a":()=>e(()=>import("./last.html-e0da37f0.js"),[]).then(({data:n})=>n),"v-d3ae9b88":()=>e(()=>import("./lpq.html-1b0beb09.js"),[]).then(({data:n})=>n),"v-d044ea4a":()=>e(()=>import("./lpr.html-5fb85eb4.js"),[]).then(({data:n})=>n),"v-24ca7dfc":()=>e(()=>import("./ls.html-83df4548.js"),[]).then(({data:n})=>n),"v-4b754b2b":()=>e(()=>import("./nl.html-c550aa3e.js"),[]).then(({data:n})=>n),"v-7d98a3f4":()=>e(()=>import("./ps.html-f7d64fa1.js"),[]).then(({data:n})=>n),"v-8829dd2e":()=>e(()=>import("./scp.html-12295389.js"),[]).then(({data:n})=>n),"v-113d6077":()=>e(()=>import("./sed.html-292e5b43.js"),[]).then(({data:n})=>n),"v-7e0e3b4b":()=>e(()=>import("./sort.html-65ede259.js"),[]).then(({data:n})=>n),"v-d9d07b2a":()=>e(()=>import("./tr.html-1f7658a8.js"),[]).then(({data:n})=>n),"v-cb2835ee":()=>e(()=>import("./uname.html-bab2ac8c.js"),[]).then(({data:n})=>n),"v-5d7f4d48":()=>e(()=>import("./uniq.html-518be7f0.js"),[]).then(({data:n})=>n),"v-01ee417e":()=>e(()=>import("./uptime.html-0587afe7.js"),[]).then(({data:n})=>n),"v-2519511c":()=>e(()=>import("./w.html-fb4ccb19.js"),[]).then(({data:n})=>n),"v-1831c2dd":()=>e(()=>import("./wc.html-0bcb67e3.js"),[]).then(({data:n})=>n),"v-37823fd8":()=>e(()=>import("./whereis.html-4c14e049.js"),[]).then(({data:n})=>n),"v-3c8dcd8c":()=>e(()=>import("./which.html-07d7f09b.js"),[]).then(({data:n})=>n),"v-623a148b":()=>e(()=>import("./who.html-4eb84950.js"),[]).then(({data:n})=>n),"v-5c24bfbd":()=>e(()=>import("./stdio.html-0ad7793e.js"),[]).then(({data:n})=>n),"v-39354ab9":()=>e(()=>import("./filter.html-be5f5add.js"),[]).then(({data:n})=>n),"v-4bdde895":()=>e(()=>import("./intro.html-786a2216.js"),[]).then(({data:n})=>n),"v-1aa63c24":()=>e(()=>import("./map-and-reduce.html-b4b26a12.js"),[]).then(({data:n})=>n),"v-19bac6b0":()=>e(()=>import("./index.html-dee227b7.js"),[]).then(({data:n})=>n),"v-377c72d8":()=>e(()=>import("./sorted.html-9b7569f8.js"),[]).then(({data:n})=>n),"v-2f60f946":()=>e(()=>import("./index.html-874b8e4d.js"),[]).then(({data:n})=>n),"v-76fcb826":()=>e(()=>import("./interact.html-6581595c.js"),[]).then(({data:n})=>n),"v-d0491970":()=>e(()=>import("./network.html-27b130ed.js"),[]).then(({data:n})=>n),"v-63cc474d":()=>e(()=>import("./route.html-507561fa.js"),[]).then(({data:n})=>n),"v-62fa99ca":()=>e(()=>import("./storage.html-e523d973.js"),[]).then(({data:n})=>n),"v-7541848d":()=>e(()=>import("./system.html-2735a009.js"),[]).then(({data:n})=>n),"v-3706649a":()=>e(()=>import("./404.html-d0e22b83.js"),[]).then(({data:n})=>n),"v-5bc93818":()=>e(()=>import("./index.html-0daf3730.js"),[]).then(({data:n})=>n),"v-744d024e":()=>e(()=>import("./index.html-a3ae08a7.js"),[]).then(({data:n})=>n),"v-e52c881c":()=>e(()=>import("./index.html-d4584bab.js"),[]).then(({data:n})=>n),"v-75ed4ea4":()=>e(()=>import("./index.html-479f37bc.js"),[]).then(({data:n})=>n),"v-d804e652":()=>e(()=>import("./index.html-93c2da59.js"),[]).then(({data:n})=>n),"v-154dc4c4":()=>e(()=>import("./index.html-f99f8e77.js"),[]).then(({data:n})=>n),"v-01560935":()=>e(()=>import("./index.html-9f027f7a.js"),[]).then(({data:n})=>n),"v-f3d31dec":()=>e(()=>import("./index.html-886e6395.js"),[]).then(({data:n})=>n),"v-b99e3274":()=>e(()=>import("./index.html-4fbe1693.js"),[]).then(({data:n})=>n),"v-506407f4":()=>e(()=>import("./index.html-de1fcc23.js"),[]).then(({data:n})=>n),"v-8f7c4c90":()=>e(()=>import("./index.html-c2985e82.js"),[]).then(({data:n})=>n),"v-be4a7c2a":()=>e(()=>import("./index.html-e14d9e5d.js"),[]).then(({data:n})=>n),"v-37a8c5a0":()=>e(()=>import("./index.html-ddc86669.js"),[]).then(({data:n})=>n),"v-0379cba1":()=>e(()=>import("./index.html-c068e5a8.js"),[]).then(({data:n})=>n),"v-7eb8aa90":()=>e(()=>import("./index.html-a23c5927.js"),[]).then(({data:n})=>n),"v-0da0f70d":()=>e(()=>import("./index.html-6463959e.js"),[]).then(({data:n})=>n),"v-9c48d85a":()=>e(()=>import("./index.html-dc377298.js"),[]).then(({data:n})=>n),"v-24cacd4b":()=>e(()=>import("./index.html-45c9a555.js"),[]).then(({data:n})=>n),"v-2ae54282":()=>e(()=>import("./index.html-0ccc50cc.js"),[]).then(({data:n})=>n),"v-1daa6b4d":()=>e(()=>import("./index.html-e4345e67.js"),[]).then(({data:n})=>n),"v-60649a06":()=>e(()=>import("./index.html-58272a53.js"),[]).then(({data:n})=>n),"v-5aaac2db":()=>e(()=>import("./index.html-cce9d7a1.js"),[]).then(({data:n})=>n),"v-05934772":()=>e(()=>import("./index.html-b45fecb9.js"),[]).then(({data:n})=>n),"v-b310d42a":()=>e(()=>import("./index.html-f9903a00.js"),[]).then(({data:n})=>n),"v-5f7f7ebf":()=>e(()=>import("./index.html-a383f076.js"),[]).then(({data:n})=>n),"v-50ae161a":()=>e(()=>import("./index.html-713babdb.js"),[]).then(({data:n})=>n),"v-2565fbec":()=>e(()=>import("./index.html-c45261d7.js"),[]).then(({data:n})=>n),"v-a0ba2788":()=>e(()=>import("./index.html-efd7e8c9.js"),[]).then(({data:n})=>n),"v-29da37b8":()=>e(()=>import("./index.html-8ead5527.js"),[]).then(({data:n})=>n),"v-60379330":()=>e(()=>import("./index.html-90fb47c2.js"),[]).then(({data:n})=>n),"v-e9c7e408":()=>e(()=>import("./index.html-b9e6a0db.js"),[]).then(({data:n})=>n),"v-17343014":()=>e(()=>import("./index.html-999bd483.js"),[]).then(({data:n})=>n),"v-eddfd732":()=>e(()=>import("./index.html-2e9945c3.js"),[]).then(({data:n})=>n),"v-755965f0":()=>e(()=>import("./index.html-9b91cfa1.js"),[]).then(({data:n})=>n),"v-fd3344d8":()=>e(()=>import("./index.html-4c437e32.js"),[]).then(({data:n})=>n),"v-56fbf552":()=>e(()=>import("./index.html-d2224926.js"),[]).then(({data:n})=>n),"v-4f7b1987":()=>e(()=>import("./index.html-26b969b3.js"),[]).then(({data:n})=>n),"v-0d223344":()=>e(()=>import("./index.html-b5a8fbbc.js"),[]).then(({data:n})=>n),"v-0e452818":()=>e(()=>import("./index.html-db682341.js"),[]).then(({data:n})=>n),"v-b302da92":()=>e(()=>import("./index.html-797a4547.js"),[]).then(({data:n})=>n),"v-b749fb9c":()=>e(()=>import("./index.html-48ccc489.js"),[]).then(({data:n})=>n),"v-551fb564":()=>e(()=>import("./index.html-a6bbbf88.js"),[]).then(({data:n})=>n),"v-65f6d381":()=>e(()=>import("./index.html-49278c9a.js"),[]).then(({data:n})=>n),"v-551de488":()=>e(()=>import("./index.html-f6bcd564.js"),[]).then(({data:n})=>n),"v-e2bac56c":()=>e(()=>import("./index.html-010b4291.js"),[]).then(({data:n})=>n),"v-7cfd563e":()=>e(()=>import("./index.html-6ab25a0a.js"),[]).then(({data:n})=>n),"v-65efd6b5":()=>e(()=>import("./index.html-523bf2bd.js"),[]).then(({data:n})=>n),"v-14748cc9":()=>e(()=>import("./index.html-7492d228.js"),[]).then(({data:n})=>n),"v-592410ea":()=>e(()=>import("./index.html-e0d7f6ad.js"),[]).then(({data:n})=>n),"v-0234a462":()=>e(()=>import("./index.html-ad0ea5fe.js"),[]).then(({data:n})=>n),"v-594aebc3":()=>e(()=>import("./index.html-a422a882.js"),[]).then(({data:n})=>n),"v-c7bf80f0":()=>e(()=>import("./index.html-0d9df6eb.js"),[]).then(({data:n})=>n),"v-e348c378":()=>e(()=>import("./index.html-a4c207cc.js"),[]).then(({data:n})=>n),"v-28949148":()=>e(()=>import("./index.html-f8f63fb9.js"),[]).then(({data:n})=>n),"v-65eddd24":()=>e(()=>import("./index.html-1bd828e6.js"),[]).then(({data:n})=>n),"v-66019bfa":()=>e(()=>import("./index.html-7a62d284.js"),[]).then(({data:n})=>n),"v-57dd1778":()=>e(()=>import("./index.html-847d22fa.js"),[]).then(({data:n})=>n),"v-5b28d011":()=>e(()=>import("./index.html-fc0236fa.js"),[]).then(({data:n})=>n),"v-5831b135":()=>e(()=>import("./index.html-c6c509d6.js"),[]).then(({data:n})=>n),"v-cc0796be":()=>e(()=>import("./index.html-65cdca02.js"),[]).then(({data:n})=>n),"v-5839c72f":()=>e(()=>import("./index.html-fccc4e7e.js"),[]).then(({data:n})=>n),"v-d11744fa":()=>e(()=>import("./index.html-f43fd789.js"),[]).then(({data:n})=>n),"v-d37ff7f0":()=>e(()=>import("./index.html-8830d8e1.js"),[]).then(({data:n})=>n),"v-2831124d":()=>e(()=>import("./index.html-d805fab5.js"),[]).then(({data:n})=>n),"v-65f3e9cf":()=>e(()=>import("./index.html-654bc34d.js"),[]).then(({data:n})=>n),"v-34dc4f20":()=>e(()=>import("./index.html-c3ca57e8.js"),[]).then(({data:n})=>n),"v-78cbe7bb":()=>e(()=>import("./index.html-7f718e0d.js"),[]).then(({data:n})=>n),"v-51e0cde2":()=>e(()=>import("./index.html-63e1d530.js"),[]).then(({data:n})=>n),"v-6c5e4d32":()=>e(()=>import("./index.html-30cac4c1.js"),[]).then(({data:n})=>n),"v-8f2bef46":()=>e(()=>import("./index.html-2a66db57.js"),[]).then(({data:n})=>n),"v-5904f150":()=>e(()=>import("./index.html-dc423c50.js"),[]).then(({data:n})=>n),"v-474b3db0":()=>e(()=>import("./index.html-d703ae4e.js"),[]).then(({data:n})=>n),"v-65ee2aa4":()=>e(()=>import("./index.html-c1b72cf6.js"),[]).then(({data:n})=>n),"v-9b71a094":()=>e(()=>import("./index.html-5f476691.js"),[]).then(({data:n})=>n),"v-b3bd56da":()=>e(()=>import("./index.html-d992fd9b.js"),[]).then(({data:n})=>n),"v-1613b516":()=>e(()=>import("./index.html-8dfa41f7.js"),[]).then(({data:n})=>n),"v-581e04cc":()=>e(()=>import("./index.html-6e41fb65.js"),[]).then(({data:n})=>n),"v-17f37776":()=>e(()=>import("./index.html-62c59191.js"),[]).then(({data:n})=>n),"v-2dcc8639":()=>e(()=>import("./index.html-8ba419a7.js"),[]).then(({data:n})=>n),"v-0fdb8ada":()=>e(()=>import("./index.html-33370a52.js"),[]).then(({data:n})=>n),"v-5decfa84":()=>e(()=>import("./index.html-ccdbf9f4.js"),[]).then(({data:n})=>n),"v-2f29ddae":()=>e(()=>import("./index.html-649c1b8a.js"),[]).then(({data:n})=>n),"v-5217c93c":()=>e(()=>import("./index.html-d68d4922.js"),[]).then(({data:n})=>n),"v-40d8aadf":()=>e(()=>import("./index.html-22384768.js"),[]).then(({data:n})=>n),"v-2cb13792":()=>e(()=>import("./index.html-b5575a0f.js"),[]).then(({data:n})=>n),"v-f6a575c0":()=>e(()=>import("./index.html-e431c678.js"),[]).then(({data:n})=>n),"v-a26e9aaa":()=>e(()=>import("./index.html-38716299.js"),[]).then(({data:n})=>n),"v-54f4d5c2":()=>e(()=>import("./index.html-bb2b5a8c.js"),[]).then(({data:n})=>n),"v-02cabf9e":()=>e(()=>import("./index.html-558e7b8f.js"),[]).then(({data:n})=>n),"v-484552dc":()=>e(()=>import("./index.html-07893079.js"),[]).then(({data:n})=>n),"v-4b0ad344":()=>e(()=>import("./index.html-4ee57f74.js"),[]).then(({data:n})=>n),"v-12cb3644":()=>e(()=>import("./index.html-8eaa5297.js"),[]).then(({data:n})=>n),"v-3fb58c9e":()=>e(()=>import("./index.html-ecfdf133.js"),[]).then(({data:n})=>n),"v-284efd1e":()=>e(()=>import("./index.html-0a7f82f6.js"),[]).then(({data:n})=>n),"v-2953cd2f":()=>e(()=>import("./index.html-2f3a7988.js"),[]).then(({data:n})=>n),"v-288e2c56":()=>e(()=>import("./index.html-169102df.js"),[]).then(({data:n})=>n),"v-3891cf12":()=>e(()=>import("./index.html-8f61b550.js"),[]).then(({data:n})=>n),"v-b3142c4c":()=>e(()=>import("./index.html-6c8d69ef.js"),[]).then(({data:n})=>n),"v-075c6c62":()=>e(()=>import("./index.html-ac0bfa9e.js"),[]).then(({data:n})=>n),"v-5dc926ce":()=>e(()=>import("./index.html-f0691c9f.js"),[]).then(({data:n})=>n)},nn=JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[["meta",{"name":"baidu-site-verification","content":"4H7tszevS8"}],["meta",{"name":"baidu-site-verification","content":"nGf5yi0Gec"}],["link",{"rel":"mask-icon","href":"/assets/safari-pinned-tab.svg","color":"#5c92d1"}],["link",{"rel":"icon","href":"/favicon.ico"}],["link",{"rel":"icon","href":"/assets/icon/chrome-192.png","type":"image/png","sizes":"192x192"}],["link",{"rel":"icon","href":"/assets/icon/chrome-512.png","type":"image/png","sizes":"512x512"}],["link",{"rel":"icon","href":"/assets/icon/chrome-mask-192.png","type":"image/png","sizes":"192x192"}],["link",{"rel":"icon","href":"/assets/icon/chrome-mask-512.png","type":"image/png","sizes":"512x512"}],["link",{"rel":"manifest","href":"/manifest.webmanifest","crossorigin":"use-credentials"}],["meta",{"name":"theme-color","content":"#5c92d1"}],["link",{"rel":"apple-touch-icon","href":"/assets/icon/apple-touch-icon.png"}],["meta",{"name":"apple-mobile-web-app-capable","content":"yes"}],["meta",{"name":"apple-mobile-web-app-status-bar-style","content":"white"}],["meta",{"name":"msapplication-TileImage","content":"/assets/icon/ms-icon-144.png"}],["meta",{"name":"msapplication-TileColor","content":"#ffffff"}],["meta",{"name":"viewport","content":"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"}]],"locales":{"/":{"lang":"zh-CN","title":"Mr.Hope","description":"Where there is light, there is hope."},"/en/":{"title":"My name is Mr.Hope","description":"Mr.Hope personal blog"}}}'),A={"v-8daa1a0e":a(()=>e(()=>import("./index.html-50556713.js"),["assets/index.html-50556713.js","assets/framework-6fc096bd.js"])),"v-74bc627b":a(()=>e(()=>import("./index.html-75fe2404.js"),["assets/index.html-75fe2404.js","assets/framework-6fc096bd.js"])),"v-008c1322":a(()=>e(()=>import("./donate.html-21cb02f5.js"),["assets/donate.html-21cb02f5.js","assets/framework-6fc096bd.js"])),"v-78da0dd7":a(()=>e(()=>import("./site.html-523f9182.js"),["assets/site.html-523f9182.js","assets/framework-6fc096bd.js"])),"v-146a1089":a(()=>e(()=>import("./index.html-e9965501.js"),["assets/index.html-e9965501.js","assets/framework-6fc096bd.js"])),"v-32bda6e0":a(()=>e(()=>import("./APP.html-e83619cf.js"),["assets/APP.html-e83619cf.js","assets/framework-6fc096bd.js"])),"v-72582dd0":a(()=>e(()=>import("./index.html-0197c1a3.js"),["assets/index.html-0197c1a3.js","assets/framework-6fc096bd.js"])),"v-2d0a870d":a(()=>e(()=>import("./index.html-c4b3127a.js"),["assets/index.html-c4b3127a.js","assets/framework-6fc096bd.js"])),"v-fd97f502":a(()=>e(()=>import("./HDD.html-71716c76.js"),["assets/HDD.html-71716c76.js","assets/framework-6fc096bd.js"])),"v-530da724":a(()=>e(()=>import("./index.html-fa934666.js"),["assets/index.html-fa934666.js","assets/framework-6fc096bd.js"])),"v-43d15734":a(()=>e(()=>import("./structure.html-2a148896.js"),["assets/structure.html-2a148896.js","assets/framework-6fc096bd.js"])),"v-f0383c18":a(()=>e(()=>import("./index.html-aeaa07fe.js"),["assets/index.html-aeaa07fe.js","assets/framework-6fc096bd.js"])),"v-6441b3dd":a(()=>e(()=>import("./WSL.html-32a8e747.js"),["assets/WSL.html-32a8e747.js","assets/framework-6fc096bd.js"])),"v-b0e7af4e":a(()=>e(()=>import("./centos.html-b5a8ef96.js"),["assets/centos.html-b5a8ef96.js","assets/framework-6fc096bd.js"])),"v-e51c9476":a(()=>e(()=>import("./ssh.html-81398822.js"),["assets/ssh.html-81398822.js","assets/framework-6fc096bd.js"])),"v-1b231b89":a(()=>e(()=>import("./differential-equation.html-06a45d1a.js"),["assets/differential-equation.html-06a45d1a.js","assets/framework-6fc096bd.js"])),"v-15054f24":a(()=>e(()=>import("./index.html-06a3465b.js"),["assets/index.html-06a3465b.js","assets/framework-6fc096bd.js"])),"v-c896667e":a(()=>e(()=>import("./index.html-29c821ff.js"),["assets/index.html-29c821ff.js","assets/framework-6fc096bd.js"])),"v-f785aee2":a(()=>e(()=>import("./index.html-6bc09584.js"),["assets/index.html-6bc09584.js","assets/framework-6fc096bd.js"])),"v-431ba45c":a(()=>e(()=>import("./apache.html-8ac7883f.js"),["assets/apache.html-8ac7883f.js","assets/framework-6fc096bd.js"])),"v-eb9bbaa0":a(()=>e(()=>import("./chrome.html-6e06b732.js"),["assets/chrome.html-6e06b732.js","assets/framework-6fc096bd.js"])),"v-33cf339d":a(()=>e(()=>import("./editor.html-96883f68.js"),["assets/editor.html-96883f68.js","assets/framework-6fc096bd.js"])),"v-6eec2164":a(()=>e(()=>import("./nginx.html-834b99ef.js"),["assets/nginx.html-834b99ef.js","assets/framework-6fc096bd.js"])),"v-bb42b324":a(()=>e(()=>import("./postman.html-0c7f1eb6.js"),["assets/postman.html-0c7f1eb6.js","assets/framework-6fc096bd.js"])),"v-76327349":a(()=>e(()=>import("./index.html-757ba211.js"),["assets/index.html-757ba211.js","assets/framework-6fc096bd.js"])),"v-cc57f902":a(()=>e(()=>import("./base.html-54ce364b.js"),["assets/base.html-54ce364b.js","assets/framework-6fc096bd.js"])),"v-26ea7e3c":a(()=>e(()=>import("./resource.html-85c26b56.js"),["assets/resource.html-85c26b56.js","assets/framework-6fc096bd.js"])),"v-779f6616":a(()=>e(()=>import("./index.html-f477832e.js"),["assets/index.html-f477832e.js","assets/framework-6fc096bd.js"])),"v-3bf9bd1e":a(()=>e(()=>import("./index.html-ac137b8b.js"),["assets/index.html-ac137b8b.js","assets/framework-6fc096bd.js"])),"v-06c910ec":a(()=>e(()=>import("./index.html-8820d035.js"),["assets/index.html-8820d035.js","assets/framework-6fc096bd.js"])),"v-f59c452e":a(()=>e(()=>import("./ci.html-7f2119e0.js"),["assets/ci.html-7f2119e0.js","assets/framework-6fc096bd.js"])),"v-79b2d958":a(()=>e(()=>import("./computer.html-b6e69576.js"),["assets/computer.html-b6e69576.js","assets/framework-6fc096bd.js"])),"v-58d3b970":a(()=>e(()=>import("./debug.html-e5ef3786.js"),["assets/debug.html-e5ef3786.js","assets/framework-6fc096bd.js"])),"v-4d5d081c":a(()=>e(()=>import("./encoding.html-a42d320e.js"),["assets/encoding.html-a42d320e.js","assets/framework-6fc096bd.js"])),"v-690f86be":a(()=>e(()=>import("./file-extension.html-d8143982.js"),["assets/file-extension.html-d8143982.js","assets/framework-6fc096bd.js"])),"v-2d7e4bd2":a(()=>e(()=>import("./glob.html-18ddeb7e.js"),["assets/glob.html-18ddeb7e.js","assets/framework-6fc096bd.js"])),"v-77ae947c":a(()=>e(()=>import("./license.html-186f1f4c.js"),["assets/license.html-186f1f4c.js","assets/framework-6fc096bd.js"])),"v-78befac4":a(()=>e(()=>import("./open-source-and-free.html-04ebc22c.js"),["assets/open-source-and-free.html-04ebc22c.js","assets/framework-6fc096bd.js"])),"v-110d1aab":a(()=>e(()=>import("./os.html-9f58f158.js"),["assets/os.html-9f58f158.js","assets/framework-6fc096bd.js"])),"v-888fe0ec":a(()=>e(()=>import("./path.html-51c57ac0.js"),["assets/path.html-51c57ac0.js","assets/framework-6fc096bd.js"])),"v-a5f157fa":a(()=>e(()=>import("./index.html-cc034bb1.js"),["assets/index.html-cc034bb1.js","assets/framework-6fc096bd.js"])),"v-1637646f":a(()=>e(()=>import("./deploy.html-9af6c486.js"),["assets/deploy.html-9af6c486.js","assets/framework-6fc096bd.js"])),"v-61d56a30":a(()=>e(()=>import("./intro.html-e51c9506.js"),["assets/intro.html-e51c9506.js","assets/framework-6fc096bd.js"])),"v-cdde1050":a(()=>e(()=>import("./pages.html-791d26d9.js"),["assets/pages.html-791d26d9.js","assets/framework-6fc096bd.js"])),"v-1d1d5298":a(()=>e(()=>import("./pr.html-57e1df6e.js"),["assets/pr.html-57e1df6e.js","assets/framework-6fc096bd.js"])),"v-aa6ff0a0":a(()=>e(()=>import("./semantic.html-d04970ec.js"),["assets/semantic.html-d04970ec.js","assets/framework-6fc096bd.js"])),"v-200df47a":a(()=>e(()=>import("./speedup.html-f91516bb.js"),["assets/speedup.html-f91516bb.js","assets/framework-6fc096bd.js"])),"v-1cf146c3":a(()=>e(()=>import("./token.html-94bb7e0d.js"),["assets/token.html-94bb7e0d.js","assets/framework-6fc096bd.js"])),"v-20955d24":a(()=>e(()=>import("./index.html-a8525eeb.js"),["assets/index.html-a8525eeb.js","assets/framework-6fc096bd.js"])),"v-5b2dfc66":a(()=>e(()=>import("./learning.html-9eefa5fb.js"),["assets/learning.html-9eefa5fb.js","assets/framework-6fc096bd.js"])),"v-7b13410a":a(()=>e(()=>import("./index.html-ee6c509f.js"),["assets/index.html-ee6c509f.js","assets/framework-6fc096bd.js"])),"v-5819b95b":a(()=>e(()=>import("./qr-code.html-48ac7f17.js"),["assets/qr-code.html-48ac7f17.js","assets/framework-6fc096bd.js"])),"v-264f3578":a(()=>e(()=>import("./index.html-0b55f743.js"),["assets/index.html-0b55f743.js","assets/framework-6fc096bd.js"])),"v-5d9f569e":a(()=>e(()=>import("./cjs.html-54a9ac4a.js"),["assets/cjs.html-54a9ac4a.js","assets/framework-6fc096bd.js"])),"v-647e802c":a(()=>e(()=>import("./environment.html-f8f24b5a.js"),["assets/environment.html-f8f24b5a.js","assets/framework-6fc096bd.js"])),"v-285ff93c":a(()=>e(()=>import("./install.html-94e57cde.js"),["assets/install.html-94e57cde.js","assets/framework-6fc096bd.js"])),"v-6352c39e":a(()=>e(()=>import("./intro.html-8fbb9803.js"),["assets/intro.html-8fbb9803.js","assets/framework-6fc096bd.js"])),"v-833997ce":a(()=>e(()=>import("./program.html-ac1f68be.js"),["assets/program.html-ac1f68be.js","assets/framework-6fc096bd.js"])),"v-18191c59":a(()=>e(()=>import("./index.html-c1d5c8d0.js"),["assets/index.html-c1d5c8d0.js","assets/framework-6fc096bd.js"])),"v-8eb7e91c":a(()=>e(()=>import("./index.html-ce383bbb.js"),["assets/index.html-ce383bbb.js","assets/framework-6fc096bd.js"])),"v-837c88f4":a(()=>e(()=>import("./compare.html-f584222d.js"),["assets/compare.html-f584222d.js","assets/framework-6fc096bd.js"])),"v-ec405424":a(()=>e(()=>import("./component.html-07368371.js"),["assets/component.html-07368371.js","assets/framework-6fc096bd.js"])),"v-76da7cfe":a(()=>e(()=>import("./get-started.html-dd46ffb4.js"),["assets/get-started.html-dd46ffb4.js","assets/framework-6fc096bd.js"])),"v-30ddd490":a(()=>e(()=>import("./install.html-41df5704.js"),["assets/install.html-41df5704.js","assets/framework-6fc096bd.js"])),"v-ec0e16f6":a(()=>e(()=>import("./vue.html-2e1ef074.js"),["assets/vue.html-2e1ef074.js","assets/framework-6fc096bd.js"])),"v-ff88ab06":a(()=>e(()=>import("./index.html-6a4463f3.js"),["assets/index.html-6a4463f3.js","assets/framework-6fc096bd.js"])),"v-a128f5ea":a(()=>e(()=>import("./https.html-d4e308bb.js"),["assets/https.html-d4e308bb.js","assets/framework-6fc096bd.js"])),"v-7321cfda":a(()=>e(()=>import("./js.html-3ef7ad21.js"),["assets/js.html-3ef7ad21.js","assets/framework-6fc096bd.js"])),"v-677e2595":a(()=>e(()=>import("./index.html-900dd23a.js"),["assets/index.html-900dd23a.js","assets/framework-6fc096bd.js"])),"v-ce519718":a(()=>e(()=>import("./cmd.html-b31b58ed.js"),["assets/cmd.html-b31b58ed.js","assets/framework-6fc096bd.js"])),"v-6eab0a08":a(()=>e(()=>import("./env-variable.html-54245815.js"),["assets/env-variable.html-54245815.js","assets/framework-6fc096bd.js"])),"v-9ac8afe2":a(()=>e(()=>import("./hidden-file.html-59da1cd8.js"),["assets/hidden-file.html-59da1cd8.js","assets/framework-6fc096bd.js"])),"v-1595002d":a(()=>e(()=>import("./notepad.html-e7f0479e.js"),["assets/notepad.html-e7f0479e.js","assets/framework-6fc096bd.js"])),"v-b9441ae8":a(()=>e(()=>import("./shortcut-key.html-4385e3d0.js"),["assets/shortcut-key.html-4385e3d0.js","assets/framework-6fc096bd.js"])),"v-16be477a":a(()=>e(()=>import("./index.html-1f5e3e32.js"),["assets/index.html-1f5e3e32.js","assets/framework-6fc096bd.js"])),"v-31bd837a":a(()=>e(()=>import("./gestalt-principle.html-9b4b3093.js"),["assets/gestalt-principle.html-9b4b3093.js","assets/framework-6fc096bd.js"])),"v-e4adfaa4":a(()=>e(()=>import("./infomation-flow.html-fb02e612.js"),["assets/infomation-flow.html-fb02e612.js","assets/framework-6fc096bd.js"])),"v-2255681b":a(()=>e(()=>import("./left-or-right.html-f85a9a68.js"),["assets/left-or-right.html-f85a9a68.js","assets/framework-6fc096bd.js"])),"v-4d2058be":a(()=>e(()=>import("./index.html-1b6ff1c2.js"),["assets/index.html-1b6ff1c2.js","assets/framework-6fc096bd.js"])),"v-f228952e":a(()=>e(()=>import("./apply.html-e6b80d42.js"),["assets/apply.html-e6b80d42.js","assets/framework-6fc096bd.js"])),"v-40ea6a4a":a(()=>e(()=>import("./decorative.html-31d158f2.js"),["assets/decorative.html-31d158f2.js","assets/framework-6fc096bd.js"])),"v-0a4c5b17":a(()=>e(()=>import("./draw.html-b17c9b74.js"),["assets/draw.html-b17c9b74.js","assets/framework-6fc096bd.js"])),"v-638e2b11":a(()=>e(()=>import("./flour.html-bd3f8f71.js"),["assets/flour.html-bd3f8f71.js","assets/framework-6fc096bd.js"])),"v-f500f2ca":a(()=>e(()=>import("./guide.html-db4fc586.js"),["assets/guide.html-db4fc586.js","assets/layout-5a3fca24.js","assets/framework-6fc096bd.js"])),"v-66effdaa":a(()=>e(()=>import("./intro.html-ab0d177c.js"),["assets/intro.html-ab0d177c.js","assets/framework-6fc096bd.js"])),"v-d301f332":a(()=>e(()=>import("./line.html-d178c5de.js"),["assets/line.html-d178c5de.js","assets/framework-6fc096bd.js"])),"v-f6497742":a(()=>e(()=>import("./rule.html-7d9d9456.js"),["assets/rule.html-7d9d9456.js","assets/framework-6fc096bd.js"])),"v-3d2f7734":a(()=>e(()=>import("./skill.html-c9064369.js"),["assets/skill.html-c9064369.js","assets/layout-5a3fca24.js","assets/framework-6fc096bd.js"])),"v-2863c8d8":a(()=>e(()=>import("./software.html-6ef1ce0b.js"),["assets/software.html-6ef1ce0b.js","assets/framework-6fc096bd.js"])),"v-23d2ecf5":a(()=>e(()=>import("./start.html-814ac840.js"),["assets/start.html-814ac840.js","assets/framework-6fc096bd.js"])),"v-2081c2e1":a(()=>e(()=>import("./type.html-1458e1ab.js"),["assets/type.html-1458e1ab.js","assets/framework-6fc096bd.js"])),"v-135802a1":a(()=>e(()=>import("./index.html-dc92f180.js"),["assets/index.html-dc92f180.js","assets/framework-6fc096bd.js"])),"v-06603a20":a(()=>e(()=>import("./search.html-f074acf3.js"),["assets/search.html-f074acf3.js","assets/framework-6fc096bd.js"])),"v-3bd48bfe":a(()=>e(()=>import("./text-field.html-8adb2ecd.js"),["assets/text-field.html-8adb2ecd.js","assets/framework-6fc096bd.js"])),"v-bd999efa":a(()=>e(()=>import("./index.html-d6e9a0d7.js"),["assets/index.html-d6e9a0d7.js","assets/framework-6fc096bd.js"])),"v-5837a6b0":a(()=>e(()=>import("./intro.html-3ce3fc2c.js"),["assets/intro.html-3ce3fc2c.js","assets/framework-6fc096bd.js"])),"v-5e53b161":a(()=>e(()=>import("./navbar-design.html-c20c3a58.js"),["assets/navbar-design.html-c20c3a58.js","assets/framework-6fc096bd.js"])),"v-662b9e66":a(()=>e(()=>import("./navbar.html-d833e370.js"),["assets/navbar.html-d833e370.js","assets/framework-6fc096bd.js"])),"v-ca9d9698":a(()=>e(()=>import("./sidebar-navigate.html-4e67bb44.js"),["assets/sidebar-navigate.html-4e67bb44.js","assets/framework-6fc096bd.js"])),"v-5a59a8af":a(()=>e(()=>import("./tabbar-design.html-81c7cbb5.js"),["assets/tabbar-design.html-81c7cbb5.js","assets/framework-6fc096bd.js"])),"v-4e2f22d8":a(()=>e(()=>import("./tabbar.html-11bbc9e1.js"),["assets/tabbar.html-11bbc9e1.js","assets/framework-6fc096bd.js"])),"v-fcccd0e2":a(()=>e(()=>import("./index.html-7ae8dff1.js"),["assets/index.html-7ae8dff1.js","assets/framework-6fc096bd.js"])),"v-4275617a":a(()=>e(()=>import("./site.html-efd4dd97.js"),["assets/site.html-efd4dd97.js","assets/framework-6fc096bd.js"])),"v-39702e16":a(()=>e(()=>import("./index.html-79b716dc.js"),["assets/index.html-79b716dc.js","assets/framework-6fc096bd.js"])),"v-3839b0e0":a(()=>e(()=>import("./index.html-7f295271.js"),["assets/index.html-7f295271.js","assets/framework-6fc096bd.js"])),"v-f33e2a0a":a(()=>e(()=>import("./index.html-88f770d6.js"),["assets/index.html-88f770d6.js","assets/framework-6fc096bd.js"])),"v-4a42ca8c":a(()=>e(()=>import("./nginx.html-b9786cf4.js"),["assets/nginx.html-b9786cf4.js","assets/framework-6fc096bd.js"])),"v-f35beb32":a(()=>e(()=>import("./index.html-520c18c8.js"),["assets/index.html-520c18c8.js","assets/framework-6fc096bd.js"])),"v-bf8c45b0":a(()=>e(()=>import("./arithmetic.html-33396053.js"),["assets/arithmetic.html-33396053.js","assets/framework-6fc096bd.js"])),"v-58565872":a(()=>e(()=>import("./array.html-bd264a4a.js"),["assets/array.html-bd264a4a.js","assets/framework-6fc096bd.js"])),"v-a381d276":a(()=>e(()=>import("./condition.html-ce80961a.js"),["assets/condition.html-ce80961a.js","assets/framework-6fc096bd.js"])),"v-a32bc7e6":a(()=>e(()=>import("./debug.html-22e0c67f.js"),["assets/debug.html-22e0c67f.js","assets/framework-6fc096bd.js"])),"v-5675dda1":a(()=>e(()=>import("./expansion.html-4ede4dfa.js"),["assets/expansion.html-4ede4dfa.js","assets/framework-6fc096bd.js"])),"v-5e8a6e0c":a(()=>e(()=>import("./function.html-b608a31b.js"),["assets/function.html-b608a31b.js","assets/framework-6fc096bd.js"])),"v-5a1d9d0e":a(()=>e(()=>import("./grammar.html-23cad599.js"),["assets/grammar.html-23cad599.js","assets/framework-6fc096bd.js"])),"v-670a7394":a(()=>e(()=>import("./intro.html-6d660c41.js"),["assets/intro.html-6d660c41.js","assets/framework-6fc096bd.js"])),"v-31da8ba4":a(()=>e(()=>import("./loop.html-f8d5f06f.js"),["assets/loop.html-f8d5f06f.js","assets/framework-6fc096bd.js"])),"v-a3b03640":a(()=>e(()=>import("./mktemp.html-2a3b08da.js"),["assets/mktemp.html-2a3b08da.js","assets/framework-6fc096bd.js"])),"v-1a11652e":a(()=>e(()=>import("./prompt.html-52e07073.js"),["assets/prompt.html-52e07073.js","assets/framework-6fc096bd.js"])),"v-53238cf4":a(()=>e(()=>import("./quotation.html-6c982466.js"),["assets/quotation.html-6c982466.js","assets/framework-6fc096bd.js"])),"v-58d02e7c":a(()=>e(()=>import("./read.html-8f34d107.js"),["assets/read.html-8f34d107.js","assets/framework-6fc096bd.js"])),"v-020bcd88":a(()=>e(()=>import("./readline.html-ad3d69b3.js"),["assets/readline.html-ad3d69b3.js","assets/framework-6fc096bd.js"])),"v-b48b13b2":a(()=>e(()=>import("./script.html-a6b5d940.js"),["assets/script.html-a6b5d940.js","assets/framework-6fc096bd.js"])),"v-8c4eb5c4":a(()=>e(()=>import("./set.html-ae5b449c.js"),["assets/set.html-ae5b449c.js","assets/framework-6fc096bd.js"])),"v-d5076e10":a(()=>e(()=>import("./stack.html-ce700939.js"),["assets/stack.html-ce700939.js","assets/framework-6fc096bd.js"])),"v-341fac63":a(()=>e(()=>import("./startup.html-01e95f4a.js"),["assets/startup.html-01e95f4a.js","assets/framework-6fc096bd.js"])),"v-5e9f82a1":a(()=>e(()=>import("./string.html-fca9de19.js"),["assets/string.html-fca9de19.js","assets/framework-6fc096bd.js"])),"v-b3ea1e54":a(()=>e(()=>import("./variable.html-788796c2.js"),["assets/variable.html-788796c2.js","assets/framework-6fc096bd.js"])),"v-47c2b838":a(()=>e(()=>import("./index.html-54fc437f.js"),["assets/index.html-54fc437f.js","assets/framework-6fc096bd.js"])),"v-8fbbf5e0":a(()=>e(()=>import("./add.html-af265c71.js"),["assets/add.html-af265c71.js","assets/framework-6fc096bd.js"])),"v-7ffa5ca6":a(()=>e(()=>import("./command.html-cf47f9dd.js"),["assets/command.html-cf47f9dd.js","assets/framework-6fc096bd.js"])),"v-10288ca4":a(()=>e(()=>import("./dir.html-3488613b.js"),["assets/dir.html-3488613b.js","assets/framework-6fc096bd.js"])),"v-0859f348":a(()=>e(()=>import("./excu.html-ce8813f8.js"),["assets/excu.html-ce8813f8.js","assets/framework-6fc096bd.js"])),"v-3ab05fa5":a(()=>e(()=>import("./file.html-f022f3c2.js"),["assets/file.html-f022f3c2.js","assets/framework-6fc096bd.js"])),"v-7b0f6d5f":a(()=>e(()=>import("./ln.html-17ab3a2f.js"),["assets/ln.html-17ab3a2f.js","assets/framework-6fc096bd.js"])),"v-3ba103fe":a(()=>e(()=>import("./other.html-f3d9e18e.js"),["assets/other.html-f3d9e18e.js","assets/framework-6fc096bd.js"])),"v-72a3b29c":a(()=>e(()=>import("./path.html-11a0195d.js"),["assets/path.html-11a0195d.js","assets/framework-6fc096bd.js"])),"v-02d56f66":a(()=>e(()=>import("./temp.html-ecfcb099.js"),["assets/temp.html-ecfcb099.js","assets/framework-6fc096bd.js"])),"v-f2e41e82":a(()=>e(()=>import("./index.html-6dea3ae4.js"),["assets/index.html-6dea3ae4.js","assets/framework-6fc096bd.js"])),"v-7c524e2b":a(()=>e(()=>import("./dir.html-73cc9fef.js"),["assets/dir.html-73cc9fef.js","assets/framework-6fc096bd.js"])),"v-53becefe":a(()=>e(()=>import("./file.html-6a57434a.js"),["assets/file.html-6a57434a.js","assets/framework-6fc096bd.js"])),"v-42f6fa5f":a(()=>e(()=>import("./mount.html-3fb97e3e.js"),["assets/mount.html-3fb97e3e.js","assets/framework-6fc096bd.js"])),"v-50990237":a(()=>e(()=>import("./index.html-559c04c0.js"),["assets/index.html-559c04c0.js","assets/framework-6fc096bd.js"])),"v-072ab185":a(()=>e(()=>import("./advantage.html-2726fc1d.js"),["assets/advantage.html-2726fc1d.js","assets/framework-6fc096bd.js"])),"v-9f906c18":a(()=>e(()=>import("./desktop.html-9d1ba69b.js"),["assets/desktop.html-9d1ba69b.js","assets/framework-6fc096bd.js"])),"v-00bcff08":a(()=>e(()=>import("./history.html-202453cc.js"),["assets/history.html-202453cc.js","assets/framework-6fc096bd.js"])),"v-3419e764":a(()=>e(()=>import("./intro.html-bfbd10e1.js"),["assets/intro.html-bfbd10e1.js","assets/framework-6fc096bd.js"])),"v-56f593aa":a(()=>e(()=>import("./language.html-d23908e1.js"),["assets/language.html-d23908e1.js","assets/framework-6fc096bd.js"])),"v-09bd279a":a(()=>e(()=>import("./startup.html-3656b219.js"),["assets/startup.html-3656b219.js","assets/framework-6fc096bd.js"])),"v-28e445b4":a(()=>e(()=>import("./index.html-54aec78b.js"),["assets/index.html-54aec78b.js","assets/framework-6fc096bd.js"])),"v-40785b1a":a(()=>e(()=>import("./debug.html-2bfed841.js"),["assets/debug.html-2bfed841.js","assets/framework-6fc096bd.js"])),"v-7d579877":a(()=>e(()=>import("./lang.html-6350301c.js"),["assets/lang.html-6350301c.js","assets/framework-6fc096bd.js"])),"v-69b91c60":a(()=>e(()=>import("./manage.html-f99aa510.js"),["assets/manage.html-f99aa510.js","assets/framework-6fc096bd.js"])),"v-14aa1354":a(()=>e(()=>import("./webserver.html-f70ccfb8.js"),["assets/webserver.html-f70ccfb8.js","assets/framework-6fc096bd.js"])),"v-8a029292":a(()=>e(()=>import("./index.html-c880bcc2.js"),["assets/index.html-c880bcc2.js","assets/framework-6fc096bd.js"])),"v-3c4b02b8":a(()=>e(()=>import("./1.html-0bdef9a5.js"),["assets/1.html-0bdef9a5.js","assets/framework-6fc096bd.js"])),"v-4d4858aa":a(()=>e(()=>import("./10.html-02ae444e.js"),["assets/10.html-02ae444e.js","assets/framework-6fc096bd.js"])),"v-4efd3149":a(()=>e(()=>import("./11.html-437be90d.js"),["assets/11.html-437be90d.js","assets/framework-6fc096bd.js"])),"v-50b209e8":a(()=>e(()=>import("./12.html-5c23c1d1.js"),["assets/12.html-5c23c1d1.js","assets/framework-6fc096bd.js"])),"v-5266e287":a(()=>e(()=>import("./13.html-f3827d9a.js"),["assets/13.html-f3827d9a.js","assets/framework-6fc096bd.js"])),"v-541bbb26":a(()=>e(()=>import("./14.html-f3a5dde2.js"),["assets/14.html-f3a5dde2.js","assets/framework-6fc096bd.js"])),"v-55d093c5":a(()=>e(()=>import("./15.html-02418f84.js"),["assets/15.html-02418f84.js","assets/framework-6fc096bd.js"])),"v-57856c64":a(()=>e(()=>import("./16.html-9f23ae95.js"),["assets/16.html-9f23ae95.js","assets/framework-6fc096bd.js"])),"v-593a4503":a(()=>e(()=>import("./17.html-8ffd78d6.js"),["assets/17.html-8ffd78d6.js","assets/framework-6fc096bd.js"])),"v-5aef1da2":a(()=>e(()=>import("./18.html-accea5af.js"),["assets/18.html-accea5af.js","assets/framework-6fc096bd.js"])),"v-5ca3f641":a(()=>e(()=>import("./19.html-17099674.js"),["assets/19.html-17099674.js","assets/framework-6fc096bd.js"])),"v-3dffdb57":a(()=>e(()=>import("./2.html-8ef76bee.js"),["assets/2.html-8ef76bee.js","assets/framework-6fc096bd.js"])),"v-fba2d82a":a(()=>e(()=>import("./20.html-92e4f88c.js"),["assets/20.html-92e4f88c.js","assets/framework-6fc096bd.js"])),"v-f83926ec":a(()=>e(()=>import("./21.html-ff0fad80.js"),["assets/21.html-ff0fad80.js","assets/framework-6fc096bd.js"])),"v-f4cf75ae":a(()=>e(()=>import("./22.html-22f131e1.js"),["assets/22.html-22f131e1.js","assets/framework-6fc096bd.js"])),"v-f165c470":a(()=>e(()=>import("./23.html-6d4530b7.js"),["assets/23.html-6d4530b7.js","assets/framework-6fc096bd.js"])),"v-edfc1332":a(()=>e(()=>import("./24.html-18e971de.js"),["assets/24.html-18e971de.js","assets/framework-6fc096bd.js"])),"v-ea9261f4":a(()=>e(()=>import("./25.html-e3f49467.js"),["assets/25.html-e3f49467.js","assets/framework-6fc096bd.js"])),"v-e728b0b6":a(()=>e(()=>import("./26.html-fdc35567.js"),["assets/26.html-fdc35567.js","assets/framework-6fc096bd.js"])),"v-3fb4b3f6":a(()=>e(()=>import("./3.html-46c03420.js"),["assets/3.html-46c03420.js","assets/framework-6fc096bd.js"])),"v-41698c95":a(()=>e(()=>import("./4.html-a865b67e.js"),["assets/4.html-a865b67e.js","assets/framework-6fc096bd.js"])),"v-431e6534":a(()=>e(()=>import("./5.html-1d28f087.js"),["assets/5.html-1d28f087.js","assets/framework-6fc096bd.js"])),"v-44d33dd3":a(()=>e(()=>import("./6.html-22e2a220.js"),["assets/6.html-22e2a220.js","assets/framework-6fc096bd.js"])),"v-46881672":a(()=>e(()=>import("./7.html-47f7d433.js"),["assets/7.html-47f7d433.js","assets/framework-6fc096bd.js"])),"v-483cef11":a(()=>e(()=>import("./8.html-f1487ed9.js"),["assets/8.html-f1487ed9.js","assets/framework-6fc096bd.js"])),"v-49f1c7b0":a(()=>e(()=>import("./9.html-3b18ab32.js"),["assets/9.html-3b18ab32.js","assets/framework-6fc096bd.js"])),"v-582d9f70":a(()=>e(()=>import("./index.html-b3e4f94d.js"),["assets/index.html-b3e4f94d.js","assets/framework-6fc096bd.js"])),"v-202e0060":a(()=>e(()=>import("./catalog.html-2679f8f2.js"),["assets/catalog.html-2679f8f2.js","assets/framework-6fc096bd.js"])),"v-c39d8f64":a(()=>e(()=>import("./end.html-a7462091.js"),["assets/end.html-a7462091.js","assets/framework-6fc096bd.js"])),"v-0dbea3bb":a(()=>e(()=>import("./middle-autumn.html-c26a0052.js"),["assets/middle-autumn.html-c26a0052.js","assets/framework-6fc096bd.js"])),"v-eb7b7a98":a(()=>e(()=>import("./miss1.html-f94cc547.js"),["assets/miss1.html-f94cc547.js","assets/framework-6fc096bd.js"])),"v-e811c95a":a(()=>e(()=>import("./miss2.html-635fd635.js"),["assets/miss2.html-635fd635.js","assets/framework-6fc096bd.js"])),"v-5bd900f9":a(()=>e(()=>import("./moon1.html-80ba8d1a.js"),["assets/moon1.html-80ba8d1a.js","assets/framework-6fc096bd.js"])),"v-5d8dd998":a(()=>e(()=>import("./moon2.html-5e467c38.js"),["assets/moon2.html-5e467c38.js","assets/framework-6fc096bd.js"])),"v-2e1af9a0":a(()=>e(()=>import("./special.html-0c0a1617.js"),["assets/special.html-0c0a1617.js","assets/framework-6fc096bd.js"])),"v-8f819ef0":a(()=>e(()=>import("./index.html-cfce31b3.js"),["assets/index.html-cfce31b3.js","assets/framework-6fc096bd.js"])),"v-ac460ad2":a(()=>e(()=>import("./get-started.html-12d37a18.js"),["assets/get-started.html-12d37a18.js","assets/framework-6fc096bd.js"])),"v-04af9900":a(()=>e(()=>import("./tag-list.html-5aa3459c.js"),["assets/tag-list.html-5aa3459c.js","assets/framework-6fc096bd.js"])),"v-5c913f0a":a(()=>e(()=>import("./yaml.html-af2b22b5.js"),["assets/yaml.html-af2b22b5.js","assets/framework-6fc096bd.js"])),"v-0b2fe817":a(()=>e(()=>import("./1.html-1a54930a.js"),["assets/1.html-1a54930a.js","assets/framework-6fc096bd.js"])),"v-0ce4c0b6":a(()=>e(()=>import("./2.html-aae5aa6e.js"),["assets/2.html-aae5aa6e.js","assets/framework-6fc096bd.js"])),"v-0e999955":a(()=>e(()=>import("./3.html-a8262eae.js"),["assets/3.html-a8262eae.js","assets/framework-6fc096bd.js"])),"v-104e71f4":a(()=>e(()=>import("./4.html-0e54ff59.js"),["assets/4.html-0e54ff59.js","assets/framework-6fc096bd.js"])),"v-12034a93":a(()=>e(()=>import("./5.html-10e7d4e8.js"),["assets/5.html-10e7d4e8.js","assets/framework-6fc096bd.js"])),"v-13b82332":a(()=>e(()=>import("./6.html-0b69f125.js"),["assets/6.html-0b69f125.js","assets/framework-6fc096bd.js"])),"v-156cfbd1":a(()=>e(()=>import("./7.html-9b64c7a6.js"),["assets/7.html-9b64c7a6.js","assets/framework-6fc096bd.js"])),"v-1721d470":a(()=>e(()=>import("./8.html-5821350a.js"),["assets/8.html-5821350a.js","assets/framework-6fc096bd.js"])),"v-18d6ad0f":a(()=>e(()=>import("./9.html-355444a1.js"),["assets/9.html-355444a1.js","assets/framework-6fc096bd.js"])),"v-5885b80f":a(()=>e(()=>import("./index.html-17a79e0f.js"),["assets/index.html-17a79e0f.js","assets/framework-6fc096bd.js"])),"v-2ddafccd":a(()=>e(()=>import("./birthday.html-62ecf1c0.js"),["assets/birthday.html-62ecf1c0.js","assets/framework-6fc096bd.js"])),"v-475a52ab":a(()=>e(()=>import("./calm.html-cc6a4306.js"),["assets/calm.html-cc6a4306.js","assets/framework-6fc096bd.js"])),"v-dfeb8f2e":a(()=>e(()=>import("./choice.html-bf759656.js"),["assets/choice.html-bf759656.js","assets/framework-6fc096bd.js"])),"v-9b658a26":a(()=>e(()=>import("./emotion.html-0819cd9b.js"),["assets/emotion.html-0819cd9b.js","assets/framework-6fc096bd.js"])),"v-76665c86":a(()=>e(()=>import("./family.html-dc85630c.js"),["assets/family.html-dc85630c.js","assets/framework-6fc096bd.js"])),"v-37528960":a(()=>e(()=>import("./friendship.html-f7536313.js"),["assets/friendship.html-f7536313.js","assets/framework-6fc096bd.js"])),"v-0b60e298":a(()=>e(()=>import("./indifferent.html-aa9246c5.js"),["assets/indifferent.html-aa9246c5.js","assets/framework-6fc096bd.js"])),"v-71bf782e":a(()=>e(()=>import("./life.html-5cd6906e.js"),["assets/life.html-5cd6906e.js","assets/framework-6fc096bd.js"])),"v-2f6a3978":a(()=>e(()=>import("./love.html-5431faa2.js"),["assets/love.html-5431faa2.js","assets/framework-6fc096bd.js"])),"v-1c2a15b2":a(()=>e(()=>import("./pure.html-67d50faa.js"),["assets/pure.html-67d50faa.js","assets/framework-6fc096bd.js"])),"v-506d1e8a":a(()=>e(()=>import("./road.html-eb54b120.js"),["assets/road.html-eb54b120.js","assets/framework-6fc096bd.js"])),"v-57aafb44":a(()=>e(()=>import("./step.html-55954826.js"),["assets/step.html-55954826.js","assets/framework-6fc096bd.js"])),"v-67643f8d":a(()=>e(()=>import("./year.html-6e9c550c.js"),["assets/year.html-6e9c550c.js","assets/framework-6fc096bd.js"])),"v-7ac4d8df":a(()=>e(()=>import("./index.html-c2018fb3.js"),["assets/index.html-c2018fb3.js","assets/framework-6fc096bd.js"])),"v-5e74acfe":a(()=>e(()=>import("./current-path.html-6e1470f7.js"),["assets/current-path.html-6e1470f7.js","assets/framework-6fc096bd.js"])),"v-797f5c68":a(()=>e(()=>import("./1.html-4e67c274.js"),["assets/1.html-4e67c274.js","assets/framework-6fc096bd.js"])),"v-b60627d4":a(()=>e(()=>import("./10.html-77fb6ed0.js"),["assets/10.html-77fb6ed0.js","assets/framework-6fc096bd.js"])),"v-2df59090":a(()=>e(()=>import("./11-11.html-6b8ce886.js"),["assets/11-11.html-6b8ce886.js","assets/framework-6fc096bd.js"])),"v-b29c7696":a(()=>e(()=>import("./11.html-77b8d2cb.js"),["assets/11.html-77b8d2cb.js","assets/framework-6fc096bd.js"])),"v-af32c558":a(()=>e(()=>import("./12.html-754c792d.js"),["assets/12.html-754c792d.js","assets/framework-6fc096bd.js"])),"v-abc9141a":a(()=>e(()=>import("./13.html-3f9b40cb.js"),["assets/13.html-3f9b40cb.js","assets/framework-6fc096bd.js"])),"v-a85f62dc":a(()=>e(()=>import("./14.html-de4194ff.js"),["assets/14.html-de4194ff.js","assets/framework-6fc096bd.js"])),"v-7615ab2a":a(()=>e(()=>import("./2.html-3364d24f.js"),["assets/2.html-3364d24f.js","assets/framework-6fc096bd.js"])),"v-72abf9ec":a(()=>e(()=>import("./3.html-3ad470a4.js"),["assets/3.html-3ad470a4.js","assets/framework-6fc096bd.js"])),"v-6f4248ae":a(()=>e(()=>import("./4.html-62cdc885.js"),["assets/4.html-62cdc885.js","assets/framework-6fc096bd.js"])),"v-6bd89770":a(()=>e(()=>import("./5.html-e9314c7d.js"),["assets/5.html-e9314c7d.js","assets/framework-6fc096bd.js"])),"v-686ee632":a(()=>e(()=>import("./6.html-faf180d2.js"),["assets/6.html-faf180d2.js","assets/framework-6fc096bd.js"])),"v-650534f4":a(()=>e(()=>import("./7.html-43b7c4e7.js"),["assets/7.html-43b7c4e7.js","assets/framework-6fc096bd.js"])),"v-619b83b6":a(()=>e(()=>import("./8.html-9efa732e.js"),["assets/8.html-9efa732e.js","assets/framework-6fc096bd.js"])),"v-5e31d278":a(()=>e(()=>import("./9.html-46685363.js"),["assets/9.html-46685363.js","assets/framework-6fc096bd.js"])),"v-58c0cd84":a(()=>e(()=>import("./index.html-959db936.js"),["assets/index.html-959db936.js","assets/framework-6fc096bd.js"])),"v-3d36eb16":a(()=>e(()=>import("./exam.html-95d4a0bc.js"),["assets/exam.html-95d4a0bc.js","assets/framework-6fc096bd.js"])),"v-3bae8447":a(()=>e(()=>import("./sad.html-42d3b55f.js"),["assets/sad.html-42d3b55f.js","assets/framework-6fc096bd.js"])),"v-80a9ee34":a(()=>e(()=>import("./1.html-899fd354.js"),["assets/1.html-899fd354.js","assets/framework-6fc096bd.js"])),"v-7d403cf6":a(()=>e(()=>import("./2.html-8f918029.js"),["assets/2.html-8f918029.js","assets/framework-6fc096bd.js"])),"v-79d68bb8":a(()=>e(()=>import("./3.html-9401114d.js"),["assets/3.html-9401114d.js","assets/framework-6fc096bd.js"])),"v-663d3fc4":a(()=>e(()=>import("./index.html-0901af63.js"),["assets/index.html-0901af63.js","assets/framework-6fc096bd.js"])),"v-520b2b7e":a(()=>e(()=>import("./catalog.html-90f6924d.js"),["assets/catalog.html-90f6924d.js","assets/framework-6fc096bd.js"])),"v-0f169104":a(()=>e(()=>import("./1.html-241046a0.js"),["assets/1.html-241046a0.js","assets/framework-6fc096bd.js"])),"v-10cb69a3":a(()=>e(()=>import("./2.html-0e717ba3.js"),["assets/2.html-0e717ba3.js","assets/framework-6fc096bd.js"])),"v-12804242":a(()=>e(()=>import("./3.html-c4470177.js"),["assets/3.html-c4470177.js","assets/framework-6fc096bd.js"])),"v-55b65288":a(()=>e(()=>import("./index.html-69ff1f4d.js"),["assets/index.html-69ff1f4d.js","assets/framework-6fc096bd.js"])),"v-a09495a4":a(()=>e(()=>import("./1.html-190cc933.js"),["assets/1.html-190cc933.js","assets/framework-6fc096bd.js"])),"v-4733f4f4":a(()=>e(()=>import("./10.html-f312a3ca.js"),["assets/10.html-f312a3ca.js","assets/framework-6fc096bd.js"])),"v-48e8cd93":a(()=>e(()=>import("./11.html-348a44f3.js"),["assets/11.html-348a44f3.js","assets/framework-6fc096bd.js"])),"v-4a9da632":a(()=>e(()=>import("./12.html-ae006903.js"),["assets/12.html-ae006903.js","assets/framework-6fc096bd.js"])),"v-9d2ae466":a(()=>e(()=>import("./2.html-7f032ea7.js"),["assets/2.html-7f032ea7.js","assets/framework-6fc096bd.js"])),"v-99c13328":a(()=>e(()=>import("./3.html-c155a747.js"),["assets/3.html-c155a747.js","assets/framework-6fc096bd.js"])),"v-965781ea":a(()=>e(()=>import("./4.html-afe415b4.js"),["assets/4.html-afe415b4.js","assets/framework-6fc096bd.js"])),"v-92edd0ac":a(()=>e(()=>import("./5.html-359c468f.js"),["assets/5.html-359c468f.js","assets/framework-6fc096bd.js"])),"v-8f841f6e":a(()=>e(()=>import("./6.html-8291b9e0.js"),["assets/6.html-8291b9e0.js","assets/framework-6fc096bd.js"])),"v-8c1a6e30":a(()=>e(()=>import("./7.html-0fdc2f22.js"),["assets/7.html-0fdc2f22.js","assets/framework-6fc096bd.js"])),"v-88b0bcf2":a(()=>e(()=>import("./8.html-0206d6c5.js"),["assets/8.html-0206d6c5.js","assets/framework-6fc096bd.js"])),"v-85470bb4":a(()=>e(()=>import("./9.html-9e311db3.js"),["assets/9.html-9e311db3.js","assets/framework-6fc096bd.js"])),"v-d7563b34":a(()=>e(()=>import("./index.html-8ae28457.js"),["assets/index.html-8ae28457.js","assets/framework-6fc096bd.js"])),"v-34b20afc":a(()=>e(()=>import("./newyear.html-59340255.js"),["assets/newyear.html-59340255.js","assets/framework-6fc096bd.js"])),"v-5a55e944":a(()=>e(()=>import("./newyear2.html-9d63aabe.js"),["assets/newyear2.html-9d63aabe.js","assets/framework-6fc096bd.js"])),"v-c687aefe":a(()=>e(()=>import("./note.html-0c083078.js"),["assets/note.html-0c083078.js","assets/framework-6fc096bd.js"])),"v-65f8f0ee":a(()=>e(()=>import("./index.html-ae5d6f37.js"),["assets/index.html-ae5d6f37.js","assets/framework-6fc096bd.js"])),"v-65f8f243":a(()=>e(()=>import("./index.html-3d49b245.js"),["assets/index.html-3d49b245.js","assets/framework-6fc096bd.js"])),"v-7827ace1":a(()=>e(()=>import("./index.html-c392553e.js"),["assets/index.html-c392553e.js","assets/framework-6fc096bd.js"])),"v-73218730":a(()=>e(()=>import("./charpter1.html-3892c67e.js"),["assets/charpter1.html-3892c67e.js","assets/framework-6fc096bd.js"])),"v-74d65fcf":a(()=>e(()=>import("./charpter2.html-45614840.js"),["assets/charpter2.html-45614840.js","assets/framework-6fc096bd.js"])),"v-07d71d5e":a(()=>e(()=>import("./index.html-986dd327.js"),["assets/index.html-986dd327.js","assets/framework-6fc096bd.js"])),"v-432fd8ed":a(()=>e(()=>import("./charpter1.html-b2d2f5e5.js"),["assets/charpter1.html-b2d2f5e5.js","assets/framework-6fc096bd.js"])),"v-792517ff":a(()=>e(()=>import("./index.html-a438eae1.js"),["assets/index.html-a438eae1.js","assets/framework-6fc096bd.js"])),"v-9b03b464":a(()=>e(()=>import("./charpter1.html-45845542.js"),["assets/charpter1.html-45845542.js","assets/framework-6fc096bd.js"])),"v-31760682":a(()=>e(()=>import("./index.html-aacaf7fb.js"),["assets/index.html-aacaf7fb.js","assets/framework-6fc096bd.js"])),"v-4d8eba8e":a(()=>e(()=>import("./charpter1.html-6ddeae72.js"),["assets/charpter1.html-6ddeae72.js","assets/framework-6fc096bd.js"])),"v-4f43932d":a(()=>e(()=>import("./charpter2.html-1b3ea40f.js"),["assets/charpter2.html-1b3ea40f.js","assets/framework-6fc096bd.js"])),"v-50f86bcc":a(()=>e(()=>import("./charpter3.html-378abec2.js"),["assets/charpter3.html-378abec2.js","assets/framework-6fc096bd.js"])),"v-15c374c7":a(()=>e(()=>import("./definition.html-44021f27.js"),["assets/definition.html-44021f27.js","assets/framework-6fc096bd.js"])),"v-1b96b631":a(()=>e(()=>import("./index.html-7c93f080.js"),["assets/index.html-7c93f080.js","assets/framework-6fc096bd.js"])),"v-707de889":a(()=>e(()=>import("./app.html-3c50402d.js"),["assets/app.html-3c50402d.js","assets/framework-6fc096bd.js"])),"v-e1cde2e8":a(()=>e(()=>import("./create.html-47fd1913.js"),["assets/create.html-47fd1913.js","assets/framework-6fc096bd.js"])),"v-00a3e380":a(()=>e(()=>import("./get-started.html-eb77f534.js"),["assets/get-started.html-eb77f534.js","assets/framework-6fc096bd.js"])),"v-a2394e62":a(()=>e(()=>import("./install.html-6ca93f12.js"),["assets/install.html-6ca93f12.js","assets/framework-6fc096bd.js"])),"v-772a6ade":a(()=>e(()=>import("./intro.html-201f4132.js"),["assets/intro.html-201f4132.js","assets/framework-6fc096bd.js"])),"v-ec82c4fe":a(()=>e(()=>import("./material.html-b5ef6ba9.js"),["assets/material.html-b5ef6ba9.js","assets/framework-6fc096bd.js"])),"v-e67bbff4":a(()=>e(()=>import("./model-tree.html-53d4a9aa.js"),["assets/model-tree.html-53d4a9aa.js","assets/framework-6fc096bd.js"])),"v-101096cf":a(()=>e(()=>import("./physic-field.html-877d8ee1.js"),["assets/physic-field.html-877d8ee1.js","assets/framework-6fc096bd.js"])),"v-e6fd97ea":a(()=>e(()=>import("./result.html-fe1beefd.js"),["assets/result.html-fe1beefd.js","assets/framework-6fc096bd.js"])),"v-8d480ae8":a(()=>e(()=>import("./select.html-aa97468a.js"),["assets/select.html-aa97468a.js","assets/framework-6fc096bd.js"])),"v-0ffdd5a1":a(()=>e(()=>import("./study.html-63cdda34.js"),["assets/study.html-63cdda34.js","assets/framework-6fc096bd.js"])),"v-5978b3ac":a(()=>e(()=>import("./index.html-344de75a.js"),["assets/index.html-344de75a.js","assets/framework-6fc096bd.js"])),"v-a0a24d6a":a(()=>e(()=>import("./branch.html-9bfcaa07.js"),["assets/branch.html-9bfcaa07.js","assets/framework-6fc096bd.js"])),"v-efa0f806":a(()=>e(()=>import("./change.html-b37e059c.js"),["assets/change.html-b37e059c.js","assets/framework-6fc096bd.js"])),"v-2fe790c2":a(()=>e(()=>import("./create-repo.html-e2de4804.js"),["assets/create-repo.html-e2de4804.js","assets/framework-6fc096bd.js"])),"v-fe4c8648":a(()=>e(()=>import("./custom.html-1453b7a2.js"),["assets/custom.html-1453b7a2.js","assets/framework-6fc096bd.js"])),"v-14d32906":a(()=>e(()=>import("./gitLFS.html-9d39d2ac.js"),["assets/gitLFS.html-9d39d2ac.js","assets/framework-6fc096bd.js"])),"v-46819f1b":a(()=>e(()=>import("./ignore.html-f9eb9d6d.js"),["assets/ignore.html-f9eb9d6d.js","assets/framework-6fc096bd.js"])),"v-39a5f5ca":a(()=>e(()=>import("./install.html-46442f50.js"),["assets/install.html-46442f50.js","assets/framework-6fc096bd.js"])),"v-1e560a99":a(()=>e(()=>import("./intro.html-d2272081.js"),["assets/intro.html-d2272081.js","assets/framework-6fc096bd.js"])),"v-db46e766":a(()=>e(()=>import("./merge.html-ec52802b.js"),["assets/merge.html-ec52802b.js","assets/framework-6fc096bd.js"])),"v-6479d7d7":a(()=>e(()=>import("./proxy.html-857484e6.js"),["assets/proxy.html-857484e6.js","assets/framework-6fc096bd.js"])),"v-5b44553c":a(()=>e(()=>import("./recall.html-54ebf347.js"),["assets/recall.html-54ebf347.js","assets/framework-6fc096bd.js"])),"v-6f810d27":a(()=>e(()=>import("./remote.html-ac70482a.js"),["assets/remote.html-ac70482a.js","assets/framework-6fc096bd.js"])),"v-6f792996":a(()=>e(()=>import("./reset.html-65a7aa49.js"),["assets/reset.html-65a7aa49.js","assets/framework-6fc096bd.js"])),"v-84d4a76c":a(()=>e(()=>import("./server.html-c89c362e.js"),["assets/server.html-c89c362e.js","assets/framework-6fc096bd.js"])),"v-94a3be0a":a(()=>e(()=>import("./status.html-b8c671b2.js"),["assets/status.html-b8c671b2.js","assets/framework-6fc096bd.js"])),"v-ae5d0daa":a(()=>e(()=>import("./tag.html-860aa8e2.js"),["assets/tag.html-860aa8e2.js","assets/framework-6fc096bd.js"])),"v-33492354":a(()=>e(()=>import("./working-directory.html-99cc9035.js"),["assets/working-directory.html-99cc9035.js","assets/framework-6fc096bd.js"])),"v-a0440418":a(()=>e(()=>import("./working.html-2d593f6d.js"),["assets/working.html-2d593f6d.js","assets/framework-6fc096bd.js"])),"v-2d8cd5c8":a(()=>e(()=>import("./index.html-65d31659.js"),["assets/index.html-65d31659.js","assets/framework-6fc096bd.js"])),"v-38d41630":a(()=>e(()=>import("./compare.html-7fd0f170.js"),["assets/compare.html-7fd0f170.js","assets/framework-6fc096bd.js"])),"v-233fe009":a(()=>e(()=>import("./intro.html-a2b4a46a.js"),["assets/intro.html-a2b4a46a.js","assets/framework-6fc096bd.js"])),"v-5350bb30":a(()=>e(()=>import("./index.html-83cf19fc.js"),["assets/index.html-83cf19fc.js","assets/framework-6fc096bd.js"])),"v-29c73cf4":a(()=>e(()=>import("./power-toys.html-ffe198a3.js"),["assets/power-toys.html-ffe198a3.js","assets/framework-6fc096bd.js"])),"v-38384806":a(()=>e(()=>import("./powershell.html-2eccbf94.js"),["assets/powershell.html-2eccbf94.js","assets/framework-6fc096bd.js"])),"v-0ef197d6":a(()=>e(()=>import("./index.html-9fa1ee56.js"),["assets/index.html-9fa1ee56.js","assets/framework-6fc096bd.js"])),"v-1ed71d50":a(()=>e(()=>import("./extension.html-d505c84f.js"),["assets/extension.html-d505c84f.js","assets/framework-6fc096bd.js"])),"v-48a305e5":a(()=>e(()=>import("./get-started.html-2d399ce5.js"),["assets/get-started.html-2d399ce5.js","assets/framework-6fc096bd.js"])),"v-4e67eaf4":a(()=>e(()=>import("./install.html-013ccaef.js"),["assets/install.html-013ccaef.js","assets/framework-6fc096bd.js"])),"v-09701300":a(()=>e(()=>import("./settings.html-56872718.js"),["assets/settings.html-56872718.js","assets/framework-6fc096bd.js"])),"v-50072a6b":a(()=>e(()=>import("./shortcut-key.html-1c5de9b8.js"),["assets/shortcut-key.html-1c5de9b8.js","assets/framework-6fc096bd.js"])),"v-7f9ed65e":a(()=>e(()=>import("./simple.html-66a2961e.js"),["assets/simple.html-66a2961e.js","assets/framework-6fc096bd.js"])),"v-0a7d8ba2":a(()=>e(()=>import("./ui.html-fd303ce3.js"),["assets/ui.html-fd303ce3.js","assets/framework-6fc096bd.js"])),"v-fe0b1ba4":a(()=>e(()=>import("./index.html-83a4aeed.js"),["assets/index.html-83a4aeed.js","assets/framework-6fc096bd.js"])),"v-7e6ee7bc":a(()=>e(()=>import("./activity.html-6223e248.js"),["assets/activity.html-6223e248.js","assets/framework-6fc096bd.js"])),"v-5c32e26f":a(()=>e(()=>import("./create.html-0b432a84.js"),["assets/create.html-0b432a84.js","assets/framework-6fc096bd.js"])),"v-54c78e24":a(()=>e(()=>import("./interface.html-4fb43458.js"),["assets/interface.html-4fb43458.js","assets/framework-6fc096bd.js"])),"v-1d35e2ca":a(()=>e(()=>import("./intro.html-b332be5e.js"),["assets/intro.html-b332be5e.js","assets/framework-6fc096bd.js"])),"v-32a1c95c":a(()=>e(()=>import("./run.html-d48fd1c5.js"),["assets/run.html-d48fd1c5.js","assets/framework-6fc096bd.js"])),"v-f6ed1056":a(()=>e(()=>import("./index.html-9ca41e14.js"),["assets/index.html-9ca41e14.js","assets/framework-6fc096bd.js"])),"v-5dad642c":a(()=>e(()=>import("./cache.html-24541231.js"),["assets/cache.html-24541231.js","assets/framework-6fc096bd.js"])),"v-74f1f99e":a(()=>e(()=>import("./checkout.html-17e4ac05.js"),["assets/checkout.html-17e4ac05.js","assets/framework-6fc096bd.js"])),"v-74d837e2":a(()=>e(()=>import("./config.html-a865ee34.js"),["assets/config.html-a865ee34.js","assets/framework-6fc096bd.js"])),"v-4a20b532":a(()=>e(()=>import("./gh-pages-deploy.html-a94db1e2.js"),["assets/gh-pages-deploy.html-a94db1e2.js","assets/framework-6fc096bd.js"])),"v-b23b20fc":a(()=>e(()=>import("./intro.html-88de51f7.js"),["assets/intro.html-88de51f7.js","assets/framework-6fc096bd.js"])),"v-50b2938c":a(()=>e(()=>import("./index.html-e591a295.js"),["assets/index.html-e591a295.js","assets/framework-6fc096bd.js"])),"v-ee5a60cc":a(()=>e(()=>import("./index.html-b20fb0f6.js"),["assets/index.html-b20fb0f6.js","assets/framework-6fc096bd.js"])),"v-d94d383c":a(()=>e(()=>import("./index.html-39e5ddb4.js"),["assets/index.html-39e5ddb4.js","assets/framework-6fc096bd.js"])),"v-d8a404c2":a(()=>e(()=>import("./index.html-5846f7ba.js"),["assets/index.html-5846f7ba.js","assets/framework-6fc096bd.js"])),"v-1d30abd8":a(()=>e(()=>import("./index.html-abf5ce72.js"),["assets/index.html-abf5ce72.js","assets/framework-6fc096bd.js"])),"v-245c31a9":a(()=>e(()=>import("./error.html-78afda3c.js"),["assets/error.html-78afda3c.js","assets/framework-6fc096bd.js"])),"v-d893d8ce":a(()=>e(()=>import("./index.html-b735c66c.js"),["assets/index.html-b735c66c.js","assets/framework-6fc096bd.js"])),"v-519de5de":a(()=>e(()=>import("./index.html-77d64630.js"),["assets/index.html-77d64630.js","assets/framework-6fc096bd.js"])),"v-3e216956":a(()=>e(()=>import("./clang-format.html-208c17ab.js"),["assets/clang-format.html-208c17ab.js","assets/framework-6fc096bd.js"])),"v-2ee7e91c":a(()=>e(()=>import("./index.html-3c54f8f1.js"),["assets/index.html-3c54f8f1.js","assets/framework-6fc096bd.js"])),"v-1509315e":a(()=>e(()=>import("./block.html-1cff740c.js"),["assets/block.html-1cff740c.js","assets/framework-6fc096bd.js"])),"v-12412da4":a(()=>e(()=>import("./demo.html-4e2450d3.js"),["assets/demo.html-4e2450d3.js","assets/framework-6fc096bd.js"])),"v-6af69b4d":a(()=>e(()=>import("./extend.html-fadb65ce.js"),["assets/extend.html-fadb65ce.js","assets/framework-6fc096bd.js"])),"v-32c10f2e":a(()=>e(()=>import("./inline.html-9c16eb6f.js"),["assets/inline.html-9c16eb6f.js","assets/framework-6fc096bd.js"])),"v-134ae2df":a(()=>e(()=>import("./intro.html-8d4f6d2c.js"),["assets/intro.html-8d4f6d2c.js","assets/framework-6fc096bd.js"])),"v-ee312fb6":a(()=>e(()=>import("./index.html-747cad6b.js"),["assets/index.html-747cad6b.js","assets/framework-6fc096bd.js"])),"v-73327cb6":a(()=>e(()=>import("./index.html-5390c424.js"),["assets/index.html-5390c424.js","assets/framework-6fc096bd.js"])),"v-5bc6221c":a(()=>e(()=>import("./index.html-e745ce11.js"),["assets/index.html-e745ce11.js","assets/framework-6fc096bd.js"])),"v-d6fd848c":a(()=>e(()=>import("./index.html-7f33b3bc.js"),["assets/index.html-7f33b3bc.js","assets/framework-6fc096bd.js"])),"v-005dcfac":a(()=>e(()=>import("./index.html-edc82b82.js"),["assets/index.html-edc82b82.js","assets/framework-6fc096bd.js"])),"v-6e60eaac":a(()=>e(()=>import("./demo.html-d240a751.js"),["assets/demo.html-d240a751.js","assets/framework-6fc096bd.js"])),"v-63eb9d04":a(()=>e(()=>import("./page.html-8d58405b.js"),["assets/page.html-8d58405b.js","assets/framework-6fc096bd.js"])),"v-65de3b35":a(()=>e(()=>import("./simple-debug.html-4d734023.js"),["assets/simple-debug.html-4d734023.js","assets/framework-6fc096bd.js"])),"v-3e889748":a(()=>e(()=>import("./tag-list.html-c06044a0.js"),["assets/tag-list.html-c06044a0.js","assets/framework-6fc096bd.js"])),"v-22f6bbee":a(()=>e(()=>import("./index.html-caa2456f.js"),["assets/index.html-caa2456f.js","assets/framework-6fc096bd.js"])),"v-248431fa":a(()=>e(()=>import("./env.html-4d6e8ee1.js"),["assets/env.html-4d6e8ee1.js","assets/framework-6fc096bd.js"])),"v-193675ee":a(()=>e(()=>import("./file-structure.html-5e086984.js"),["assets/file-structure.html-5e086984.js","assets/framework-6fc096bd.js"])),"v-38d408ef":a(()=>e(()=>import("./index.html-037b308a.js"),["assets/index.html-037b308a.js","assets/framework-6fc096bd.js"])),"v-6dd27fe6":a(()=>e(()=>import("./audit.html-232c0e6e.js"),["assets/audit.html-232c0e6e.js","assets/framework-6fc096bd.js"])),"v-12f4ded6":a(()=>e(()=>import("./debug.html-2d63988f.js"),["assets/debug.html-2d63988f.js","assets/framework-6fc096bd.js"])),"v-a73b2c22":a(()=>e(()=>import("./interface.html-082654cf.js"),["assets/interface.html-082654cf.js","assets/framework-6fc096bd.js"])),"v-38645abd":a(()=>e(()=>import("./npm.html-0b9b8830.js"),["assets/npm.html-0b9b8830.js","assets/framework-6fc096bd.js"])),"v-7ac59094":a(()=>e(()=>import("./score.html-efaca438.js"),["assets/score.html-efaca438.js","assets/framework-6fc096bd.js"])),"v-239235ed":a(()=>e(()=>import("./index.html-6caae6b0.js"),["assets/index.html-6caae6b0.js","assets/framework-6fc096bd.js"])),"v-19bca984":a(()=>e(()=>import("./axois.html-3512ab08.js"),["assets/axois.html-3512ab08.js","assets/framework-6fc096bd.js"])),"v-681ba581":a(()=>e(()=>import("./index.html-e1fe0a4f.js"),["assets/index.html-e1fe0a4f.js","assets/framework-6fc096bd.js"])),"v-48fc6d3c":a(()=>e(()=>import("./create.html-67c576e5.js"),["assets/create.html-67c576e5.js","assets/framework-6fc096bd.js"])),"v-b7f95708":a(()=>e(()=>import("./file.html-ccd63207.js"),["assets/file.html-ccd63207.js","assets/framework-6fc096bd.js"])),"v-0def13a4":a(()=>e(()=>import("./intro.html-dacc6c73.js"),["assets/intro.html-dacc6c73.js","assets/framework-6fc096bd.js"])),"v-2a972985":a(()=>e(()=>import("./quick-dev.html-64a01299.js"),["assets/quick-dev.html-64a01299.js","assets/framework-6fc096bd.js"])),"v-48a6e254":a(()=>e(()=>import("./index.html-14e69841.js"),["assets/index.html-14e69841.js","assets/framework-6fc096bd.js"])),"v-3cccf502":a(()=>e(()=>import("./demo.html-a01b9502.js"),["assets/demo.html-a01b9502.js","assets/framework-6fc096bd.js"])),"v-461f9463":a(()=>e(()=>import("./get-started.html-1db40156.js"),["assets/get-started.html-1db40156.js","assets/framework-6fc096bd.js"])),"v-c72e4aea":a(()=>e(()=>import("./index.html-0d466e72.js"),["assets/index.html-0d466e72.js","assets/framework-6fc096bd.js"])),"v-33894aab":a(()=>e(()=>import("./demo.html-ff9bd3f4.js"),["assets/demo.html-ff9bd3f4.js","assets/framework-6fc096bd.js"])),"v-491f82cc":a(()=>e(()=>import("./get-started.html-6514a8e0.js"),["assets/get-started.html-6514a8e0.js","assets/framework-6fc096bd.js"])),"v-4d66e289":a(()=>e(()=>import("./index.html-170766e3.js"),["assets/index.html-170766e3.js","assets/framework-6fc096bd.js"])),"v-db68b190":a(()=>e(()=>import("./index.html-b8416561.js"),["assets/index.html-b8416561.js","assets/framework-6fc096bd.js"])),"v-3db71024":a(()=>e(()=>import("./css.html-63f33220.js"),["assets/css.html-63f33220.js","assets/framework-6fc096bd.js"])),"v-8c5b7854":a(()=>e(()=>import("./html.html-6ccc5d71.js"),["assets/html.html-6ccc5d71.js","assets/framework-6fc096bd.js"])),"v-5fbc4987":a(()=>e(()=>import("./index.html-b3d84064.js"),["assets/index.html-b3d84064.js","assets/framework-6fc096bd.js"])),"v-df5d1758":a(()=>e(()=>import("./index.html-c07027e8.js"),["assets/index.html-c07027e8.js","assets/framework-6fc096bd.js"])),"v-93dfe636":a(()=>e(()=>import("./ajax.html-b1b37044.js"),["assets/ajax.html-b1b37044.js","assets/framework-6fc096bd.js"])),"v-8487edae":a(()=>e(()=>import("./animation.html-8208da5f.js"),["assets/animation.html-8208da5f.js","assets/framework-6fc096bd.js"])),"v-59e10c5a":a(()=>e(()=>import("./event.html-b94f060e.js"),["assets/event.html-b94f060e.js","assets/framework-6fc096bd.js"])),"v-c7d79daa":a(()=>e(()=>import("./extend.html-c5d7e8f5.js"),["assets/extend.html-c5d7e8f5.js","assets/framework-6fc096bd.js"])),"v-3957cd7e":a(()=>e(()=>import("./intro.html-26915c91.js"),["assets/intro.html-26915c91.js","assets/framework-6fc096bd.js"])),"v-5ef6c9b6":a(()=>e(()=>import("./modify-dom.html-176a4fd1.js"),["assets/modify-dom.html-176a4fd1.js","assets/framework-6fc096bd.js"])),"v-799c2158":a(()=>e(()=>import("./operate-dom.html-8838366c.js"),["assets/operate-dom.html-8838366c.js","assets/framework-6fc096bd.js"])),"v-546d1486":a(()=>e(()=>import("./selector.html-4c5286f5.js"),["assets/selector.html-4c5286f5.js","assets/framework-6fc096bd.js"])),"v-60432ed1":a(()=>e(()=>import("./archiving.html-873c6554.js"),["assets/archiving.html-873c6554.js","assets/framework-6fc096bd.js"])),"v-8aa16a18":a(()=>e(()=>import("./async.html-eb9db3c2.js"),["assets/async.html-eb9db3c2.js","assets/framework-6fc096bd.js"])),"v-4180a476":a(()=>e(()=>import("./command.html-0dabac6a.js"),["assets/command.html-0dabac6a.js","assets/framework-6fc096bd.js"])),"v-fb2b21e8":a(()=>e(()=>import("./file-operation.html-1d75542f.js"),["assets/file-operation.html-1d75542f.js","assets/framework-6fc096bd.js"])),"v-2db28a34":a(()=>e(()=>import("./file.html-d782db1d.js"),["assets/file.html-d782db1d.js","assets/framework-6fc096bd.js"])),"v-4e1e017a":a(()=>e(()=>import("./hardware.html-f87e6e27.js"),["assets/hardware.html-f87e6e27.js","assets/framework-6fc096bd.js"])),"v-0cdaf63a":a(()=>e(()=>import("./host.html-e827eadb.js"),["assets/host.html-e827eadb.js","assets/framework-6fc096bd.js"])),"v-1e6259a0":a(()=>e(()=>import("./named-pipe.html-ec653e37.js"),["assets/named-pipe.html-ec653e37.js","assets/framework-6fc096bd.js"])),"v-3d1375be":a(()=>e(()=>import("./process.html-1b398893.js"),["assets/process.html-1b398893.js","assets/framework-6fc096bd.js"])),"v-04b088f8":a(()=>e(()=>import("./redirection.html-2f21c291.js"),["assets/redirection.html-2f21c291.js","assets/framework-6fc096bd.js"])),"v-5c8b77ee":a(()=>e(()=>import("./regex.html-35db0336.js"),["assets/regex.html-35db0336.js","assets/framework-6fc096bd.js"])),"v-d66a505a":a(()=>e(()=>import("./system.html-599b2f5c.js"),["assets/system.html-599b2f5c.js","assets/framework-6fc096bd.js"])),"v-0c78dc56":a(()=>e(()=>import("./text.html-fcab5813.js"),["assets/text.html-fcab5813.js","assets/framework-6fc096bd.js"])),"v-39cb0835":a(()=>e(()=>import("./time.html-936613d2.js"),["assets/time.html-936613d2.js","assets/framework-6fc096bd.js"])),"v-4bd85df7":a(()=>e(()=>import("./user.html-96e493c7.js"),["assets/user.html-96e493c7.js","assets/framework-6fc096bd.js"])),"v-4ec49228":a(()=>e(()=>import("./index.html-6df88063.js"),["assets/index.html-6df88063.js","assets/framework-6fc096bd.js"])),"v-33854f17":a(()=>e(()=>import("./build.html-f92e89b3.js"),["assets/build.html-f92e89b3.js","assets/framework-6fc096bd.js"])),"v-dcad9030":a(()=>e(()=>import("./view.html-b23df89b.js"),["assets/view.html-b23df89b.js","assets/framework-6fc096bd.js"])),"v-c40faf5e":a(()=>e(()=>import("./index.html-8286b544.js"),["assets/index.html-8286b544.js","assets/framework-6fc096bd.js"])),"v-af089604":a(()=>e(()=>import("./intro.html-b3ad1e6f.js"),["assets/intro.html-b3ad1e6f.js","assets/framework-6fc096bd.js"])),"v-e761606a":a(()=>e(()=>import("./index.html-4896b0d0.js"),["assets/index.html-4896b0d0.js","assets/framework-6fc096bd.js"])),"v-0c4433da":a(()=>e(()=>import("./get-started.html-74107205.js"),["assets/get-started.html-74107205.js","assets/framework-6fc096bd.js"])),"v-dd24d6aa":a(()=>e(()=>import("./settings.html-90fbd100.js"),["assets/settings.html-90fbd100.js","assets/framework-6fc096bd.js"])),"v-11ff0409":a(()=>e(()=>import("./index.html-36c02d55.js"),["assets/index.html-36c02d55.js","assets/framework-6fc096bd.js"])),"v-685e2634":a(()=>e(()=>import("./basic.html-959ecbc7.js"),["assets/basic.html-959ecbc7.js","assets/framework-6fc096bd.js"])),"v-27d31212":a(()=>e(()=>import("./command.html-329af2e8.js"),["assets/command.html-329af2e8.js","assets/framework-6fc096bd.js"])),"v-b5f60ea2":a(()=>e(()=>import("./customization.html-9d771e9b.js"),["assets/customization.html-9d771e9b.js","assets/framework-6fc096bd.js"])),"v-3dacf32f":a(()=>e(()=>import("./debug.html-42e24d75.js"),["assets/debug.html-42e24d75.js","assets/framework-6fc096bd.js"])),"v-07497f26":a(()=>e(()=>import("./edit.html-865a5bde.js"),["assets/edit.html-865a5bde.js","assets/framework-6fc096bd.js"])),"v-82a4977a":a(()=>e(()=>import("./extension.html-7eb8f2c7.js"),["assets/extension.html-7eb8f2c7.js","assets/framework-6fc096bd.js"])),"v-280dcef4":a(()=>e(()=>import("./file.html-0d252540.js"),["assets/file.html-0d252540.js","assets/framework-6fc096bd.js"])),"v-31d5af50":a(()=>e(()=>import("./git.html-8ad5d3b0.js"),["assets/git.html-8ad5d3b0.js","assets/framework-6fc096bd.js"])),"v-d7d6dbd6":a(()=>e(()=>import("./intellisense.html-4cfbd8eb.js"),["assets/intellisense.html-4cfbd8eb.js","assets/framework-6fc096bd.js"])),"v-fd69a6ea":a(()=>e(()=>import("./task.html-384a1c2e.js"),["assets/task.html-384a1c2e.js","assets/framework-6fc096bd.js"])),"v-091db9b0":a(()=>e(()=>import("./index.html-c6777f43.js"),["assets/index.html-c6777f43.js","assets/framework-6fc096bd.js"])),"v-5e47c7c5":a(()=>e(()=>import("./cheatsheet.html-0360dd9b.js"),["assets/cheatsheet.html-0360dd9b.js","assets/framework-6fc096bd.js"])),"v-4ae7b17f":a(()=>e(()=>import("./iterable.html-59ad30ab.js"),["assets/iterable.html-59ad30ab.js","assets/framework-6fc096bd.js"])),"v-7c7974d0":a(()=>e(()=>import("./samples.html-8a3cb9dc.js"),["assets/samples.html-8a3cb9dc.js","assets/framework-6fc096bd.js"])),"v-580ce442":a(()=>e(()=>import("./index.html-00aa75be.js"),["assets/index.html-00aa75be.js","assets/framework-6fc096bd.js"])),"v-4157008c":a(()=>e(()=>import("./ajax.html-3ff08ab3.js"),["assets/ajax.html-3ff08ab3.js","assets/framework-6fc096bd.js"])),"v-e636c4d4":a(()=>e(()=>import("./browser-object.html-6a75a945.js"),["assets/browser-object.html-6a75a945.js","assets/framework-6fc096bd.js"])),"v-3fe5c342":a(()=>e(()=>import("./canvas.html-aad30df9.js"),["assets/canvas.html-aad30df9.js","assets/promise-dba4943a.js","assets/framework-6fc096bd.js"])),"v-37881894":a(()=>e(()=>import("./dom.html-d810e27b.js"),["assets/dom.html-d810e27b.js","assets/framework-6fc096bd.js"])),"v-fb7c1444":a(()=>e(()=>import("./file.html-d5c6f096.js"),["assets/file.html-d5c6f096.js","assets/framework-6fc096bd.js"])),"v-3c952b96":a(()=>e(()=>import("./form.html-cc3db8e3.js"),["assets/form.html-cc3db8e3.js","assets/framework-6fc096bd.js"])),"v-3ac3fde8":a(()=>e(()=>import("./intro.html-79c596a4.js"),["assets/intro.html-79c596a4.js","assets/framework-6fc096bd.js"])),"v-5b96b7fd":a(()=>e(()=>import("./promise.html-a84aa90d.js"),["assets/promise.html-a84aa90d.js","assets/promise-dba4943a.js","assets/framework-6fc096bd.js"])),"v-7af69fbf":a(()=>e(()=>import("./index.html-9ae1a792.js"),["assets/index.html-9ae1a792.js","assets/framework-6fc096bd.js"])),"v-d3bec9c2":a(()=>e(()=>import("./array.html-618ed2f4.js"),["assets/array.html-618ed2f4.js","assets/framework-6fc096bd.js"])),"v-5220625f":a(()=>e(()=>import("./arraybuffer.html-d749eca5.js"),["assets/arraybuffer.html-d749eca5.js","assets/framework-6fc096bd.js"])),"v-e898ae48":a(()=>e(()=>import("./async.html-774b5a4a.js"),["assets/async.html-774b5a4a.js","assets/framework-6fc096bd.js"])),"v-e7d0ffd8":a(()=>e(()=>import("./class-extends.html-e6c9b3f3.js"),["assets/class-extends.html-e6c9b3f3.js","assets/framework-6fc096bd.js"])),"v-65d00140":a(()=>e(()=>import("./class.html-d191eec8.js"),["assets/class.html-d191eec8.js","assets/framework-6fc096bd.js"])),"v-01199afd":a(()=>e(()=>import("./decorator.html-d4690ca4.js"),["assets/decorator.html-d4690ca4.js","assets/framework-6fc096bd.js"])),"v-d9eeb42e":a(()=>e(()=>import("./destructuring.html-79f7c0b5.js"),["assets/destructuring.html-79f7c0b5.js","assets/framework-6fc096bd.js"])),"v-d486c4a0":a(()=>e(()=>import("./fp.html-9a303006.js"),["assets/fp.html-9a303006.js","assets/framework-6fc096bd.js"])),"v-412da2a2":a(()=>e(()=>import("./function.html-e5a0e490.js"),["assets/function.html-e5a0e490.js","assets/framework-6fc096bd.js"])),"v-1e32d554":a(()=>e(()=>import("./generator-async.html-a5c3965e.js"),["assets/generator-async.html-a5c3965e.js","assets/framework-6fc096bd.js"])),"v-2a661765":a(()=>e(()=>import("./generator.html-21ff9927.js"),["assets/generator.html-21ff9927.js","assets/framework-6fc096bd.js"])),"v-29563aec":a(()=>e(()=>import("./intro.html-4448d7ad.js"),["assets/intro.html-4448d7ad.js","assets/framework-6fc096bd.js"])),"v-d4970868":a(()=>e(()=>import("./iterator.html-809cdabc.js"),["assets/iterator.html-809cdabc.js","assets/framework-6fc096bd.js"])),"v-8113af46":a(()=>e(()=>import("./let.html-13f793ee.js"),["assets/let.html-13f793ee.js","assets/framework-6fc096bd.js"])),"v-5244cc12":a(()=>e(()=>import("./mixin.html-7d75df6c.js"),["assets/mixin.html-7d75df6c.js","assets/framework-6fc096bd.js"])),"v-2fc52e78":a(()=>e(()=>import("./module-loader.html-3d2839d6.js"),["assets/module-loader.html-3d2839d6.js","assets/framework-6fc096bd.js"])),"v-0ec9be64":a(()=>e(()=>import("./module.html-b8b4b74e.js"),["assets/module.html-b8b4b74e.js","assets/framework-6fc096bd.js"])),"v-6bcd6e11":a(()=>e(()=>import("./number.html-15869bc4.js"),["assets/number.html-15869bc4.js","assets/framework-6fc096bd.js"])),"v-189ba04a":a(()=>e(()=>import("./object.html-5e09da27.js"),["assets/object.html-5e09da27.js","assets/framework-6fc096bd.js"])),"v-55b00c46":a(()=>e(()=>import("./promise.html-925ce966.js"),["assets/promise.html-925ce966.js","assets/framework-6fc096bd.js"])),"v-3ac3b992":a(()=>e(()=>import("./proposals.html-712c7f65.js"),["assets/proposals.html-712c7f65.js","assets/framework-6fc096bd.js"])),"v-6f7a082a":a(()=>e(()=>import("./proxy.html-b1385a4e.js"),["assets/proxy.html-b1385a4e.js","assets/framework-6fc096bd.js"])),"v-1b9d0426":a(()=>e(()=>import("./reference.html-03f52698.js"),["assets/reference.html-03f52698.js","assets/framework-6fc096bd.js"])),"v-55c5117b":a(()=>e(()=>import("./reflect.html-8d7380a8.js"),["assets/reflect.html-8d7380a8.js","assets/framework-6fc096bd.js"])),"v-ba82bc1e":a(()=>e(()=>import("./regex.html-9f4dcaba.js"),["assets/regex.html-9f4dcaba.js","assets/framework-6fc096bd.js"])),"v-0b0d2347":a(()=>e(()=>import("./set-map.html-c5d2d9cd.js"),["assets/set-map.html-c5d2d9cd.js","assets/framework-6fc096bd.js"])),"v-7953f4a6":a(()=>e(()=>import("./simd.html-468c621c.js"),["assets/simd.html-468c621c.js","assets/framework-6fc096bd.js"])),"v-1cd0e5c2":a(()=>e(()=>import("./spec.html-2c8c4626.js"),["assets/spec.html-2c8c4626.js","assets/framework-6fc096bd.js"])),"v-3466b36e":a(()=>e(()=>import("./string.html-5b0739f4.js"),["assets/string.html-5b0739f4.js","assets/framework-6fc096bd.js"])),"v-32817272":a(()=>e(()=>import("./style.html-e4ac073d.js"),["assets/style.html-e4ac073d.js","assets/framework-6fc096bd.js"])),"v-2c2bed22":a(()=>e(()=>import("./symbol.html-da8cc456.js"),["assets/symbol.html-da8cc456.js","assets/framework-6fc096bd.js"])),"v-4613a302":a(()=>e(()=>import("./index.html-b155d6ec.js"),["assets/index.html-b155d6ec.js","assets/framework-6fc096bd.js"])),"v-7ba4ff44":a(()=>e(()=>import("./arrow-function.html-bed5dd7b.js"),["assets/arrow-function.html-bed5dd7b.js","assets/framework-6fc096bd.js"])),"v-797b419c":a(()=>e(()=>import("./call.html-792730ab.js"),["assets/call.html-792730ab.js","assets/framework-6fc096bd.js"])),"v-02684b7d":a(()=>e(()=>import("./closure.html-24bfe0df.js"),["assets/closure.html-24bfe0df.js","assets/framework-6fc096bd.js"])),"v-58f135ae":a(()=>e(()=>import("./declare.html-d8e4acf5.js"),["assets/declare.html-d8e4acf5.js","assets/framework-6fc096bd.js"])),"v-556bf6ae":a(()=>e(()=>import("./destructuring.html-0f7d507c.js"),["assets/destructuring.html-0f7d507c.js","assets/framework-6fc096bd.js"])),"v-88b653b6":a(()=>e(()=>import("./generator.html-62f0a156.js"),["assets/generator.html-62f0a156.js","assets/framework-6fc096bd.js"])),"v-43034483":a(()=>e(()=>import("./higher-order-function.html-20012ed6.js"),["assets/higher-order-function.html-20012ed6.js","assets/framework-6fc096bd.js"])),"v-417b4ca8":a(()=>e(()=>import("./intro.html-a48e1a7f.js"),["assets/intro.html-a48e1a7f.js","assets/framework-6fc096bd.js"])),"v-754a14ed":a(()=>e(()=>import("./map-and-reduce.html-25c67a30.js"),["assets/map-and-reduce.html-25c67a30.js","assets/framework-6fc096bd.js"])),"v-1029f0b9":a(()=>e(()=>import("./method.html-fdbc7213.js"),["assets/method.html-fdbc7213.js","assets/framework-6fc096bd.js"])),"v-ee259a78":a(()=>e(()=>import("./scope.html-ec5be643.js"),["assets/scope.html-ec5be643.js","assets/framework-6fc096bd.js"])),"v-d323d548":a(()=>e(()=>import("./this.html-66ff66dc.js"),["assets/this.html-66ff66dc.js","assets/framework-6fc096bd.js"])),"v-c928e2ea":a(()=>e(()=>import("./index.html-5f82b5b0.js"),["assets/index.html-5f82b5b0.js","assets/framework-6fc096bd.js"])),"v-0bfb0a2a":a(()=>e(()=>import("./array.html-81f254e7.js"),["assets/array.html-81f254e7.js","assets/framework-6fc096bd.js"])),"v-7de37888":a(()=>e(()=>import("./boolean.html-29b0d616.js"),["assets/boolean.html-29b0d616.js","assets/framework-6fc096bd.js"])),"v-293c8be9":a(()=>e(()=>import("./condition.html-584d013b.js"),["assets/condition.html-584d013b.js","assets/framework-6fc096bd.js"])),"v-a4a26144":a(()=>e(()=>import("./data-structure.html-78ec6d10.js"),["assets/data-structure.html-78ec6d10.js","assets/framework-6fc096bd.js"])),"v-58215d54":a(()=>e(()=>import("./exercise.html-7da44ec0.js"),["assets/exercise.html-7da44ec0.js","assets/framework-6fc096bd.js"])),"v-a92fc154":a(()=>e(()=>import("./function.html-dd542b55.js"),["assets/function.html-dd542b55.js","assets/framework-6fc096bd.js"])),"v-068af29a":a(()=>e(()=>import("./get-started.html-04cd7a89.js"),["assets/get-started.html-04cd7a89.js","assets/framework-6fc096bd.js"])),"v-24519f9d":a(()=>e(()=>import("./grammar.html-bd286c8c.js"),["assets/grammar.html-bd286c8c.js","assets/framework-6fc096bd.js"])),"v-058fc208":a(()=>e(()=>import("./iterable.html-da146afc.js"),["assets/iterable.html-da146afc.js","assets/framework-6fc096bd.js"])),"v-927cc2ec":a(()=>e(()=>import("./loop.html-cd743279.js"),["assets/loop.html-cd743279.js","assets/framework-6fc096bd.js"])),"v-19e36b6e":a(()=>e(()=>import("./map-and-set.html-d881d201.js"),["assets/map-and-set.html-d881d201.js","assets/framework-6fc096bd.js"])),"v-0c0c498f":a(()=>e(()=>import("./object.html-7be90385.js"),["assets/object.html-7be90385.js","assets/framework-6fc096bd.js"])),"v-03b28006":a(()=>e(()=>import("./string.html-4a4c160b.js"),["assets/string.html-4a4c160b.js","assets/framework-6fc096bd.js"])),"v-fe8f719c":a(()=>e(()=>import("./variable.html-6b5e8956.js"),["assets/variable.html-6b5e8956.js","assets/framework-6fc096bd.js"])),"v-c3105dca":a(()=>e(()=>import("./index.html-1b9e73ce.js"),["assets/index.html-1b9e73ce.js","assets/framework-6fc096bd.js"])),"v-4c6d1960":a(()=>e(()=>import("./history.html-70615bb6.js"),["assets/history.html-70615bb6.js","assets/framework-6fc096bd.js"])),"v-71e8640e":a(()=>e(()=>import("./JSON.html-52752291.js"),["assets/JSON.html-52752291.js","assets/framework-6fc096bd.js"])),"v-58da95f8":a(()=>e(()=>import("./index.html-b8bde99d.js"),["assets/index.html-b8bde99d.js","assets/framework-6fc096bd.js"])),"v-54277b4e":a(()=>e(()=>import("./class.html-90593bbf.js"),["assets/class.html-90593bbf.js","assets/framework-6fc096bd.js"])),"v-341b5c65":a(()=>e(()=>import("./create.html-be8a3007.js"),["assets/create.html-be8a3007.js","assets/framework-6fc096bd.js"])),"v-50d58ef3":a(()=>e(()=>import("./date.html-88f7a05b.js"),["assets/date.html-88f7a05b.js","assets/framework-6fc096bd.js"])),"v-280a6107":a(()=>e(()=>import("./extend.html-5fcef379.js"),["assets/extend.html-5fcef379.js","assets/framework-6fc096bd.js"])),"v-322a7de5":a(()=>e(()=>import("./intro.html-1ded80dc.js"),["assets/intro.html-1ded80dc.js","assets/framework-6fc096bd.js"])),"v-380d4898":a(()=>e(()=>import("./regExp.html-ead0dd82.js"),["assets/regExp.html-ead0dd82.js","assets/framework-6fc096bd.js"])),"v-5d8cafd7":a(()=>e(()=>import("./wrap.html-2fff0d0f.js"),["assets/wrap.html-2fff0d0f.js","assets/framework-6fc096bd.js"])),"v-745f48d0":a(()=>e(()=>import("./index.html-fd3bed1c.js"),["assets/index.html-fd3bed1c.js","assets/framework-6fc096bd.js"])),"v-091ae3d7":a(()=>e(()=>import("./arithmetic.html-1148fbe9.js"),["assets/arithmetic.html-1148fbe9.js","assets/framework-6fc096bd.js"])),"v-dd97b0f8":a(()=>e(()=>import("./bit.html-f2417227.js"),["assets/bit.html-f2417227.js","assets/framework-6fc096bd.js"])),"v-7e4ee549":a(()=>e(()=>import("./boolean.html-abfd5221.js"),["assets/boolean.html-abfd5221.js","assets/framework-6fc096bd.js"])),"v-c1f11850":a(()=>e(()=>import("./comparison.html-39b6f4de.js"),["assets/comparison.html-39b6f4de.js","assets/framework-6fc096bd.js"])),"v-4dfa691d":a(()=>e(()=>import("./priority.html-3f2ce0dc.js"),["assets/priority.html-3f2ce0dc.js","assets/framework-6fc096bd.js"])),"v-9c53bea4":a(()=>e(()=>import("./index.html-846733b9.js"),["assets/index.html-846733b9.js","assets/framework-6fc096bd.js"])),"v-5d22fd4e":a(()=>e(()=>import("./array.html-b015dcff.js"),["assets/array.html-b015dcff.js","assets/framework-6fc096bd.js"])),"v-43d08d42":a(()=>e(()=>import("./boolean.html-1b5b222b.js"),["assets/boolean.html-1b5b222b.js","assets/framework-6fc096bd.js"])),"v-2f8d5e13":a(()=>e(()=>import("./function.html-a8990942.js"),["assets/function.html-a8990942.js","assets/framework-6fc096bd.js"])),"v-747e149f":a(()=>e(()=>import("./general.html-a2fea79b.js"),["assets/general.html-a2fea79b.js","assets/framework-6fc096bd.js"])),"v-eb21e1be":a(()=>e(()=>import("./null-undefined.html-9b2b3a49.js"),["assets/null-undefined.html-9b2b3a49.js","assets/framework-6fc096bd.js"])),"v-f5d15c7c":a(()=>e(()=>import("./number.html-5f239cd6.js"),["assets/number.html-5f239cd6.js","assets/framework-6fc096bd.js"])),"v-0cfc138c":a(()=>e(()=>import("./object.html-3582a245.js"),["assets/object.html-3582a245.js","assets/framework-6fc096bd.js"])),"v-01d2ec0c":a(()=>e(()=>import("./string.html-6721d5e3.js"),["assets/string.html-6721d5e3.js","assets/framework-6fc096bd.js"])),"v-752bb69b":a(()=>e(()=>import("./index.html-0b611f9a.js"),["assets/index.html-0b611f9a.js","assets/framework-6fc096bd.js"])),"v-d29981d2":a(()=>e(()=>import("./nature.html-7e32f130.js"),["assets/nature.html-7e32f130.js","assets/framework-6fc096bd.js"])),"v-51851102":a(()=>e(()=>import("./object.html-84a5f6e7.js"),["assets/object.html-84a5f6e7.js","assets/framework-6fc096bd.js"])),"v-6780fa2f":a(()=>e(()=>import("./people.html-aee29cc9.js"),["assets/people.html-aee29cc9.js","assets/framework-6fc096bd.js"])),"v-333335e6":a(()=>e(()=>import("./place.html-e4e093ea.js"),["assets/place.html-e4e093ea.js","assets/framework-6fc096bd.js"])),"v-0fb734c6":a(()=>e(()=>import("./symbol.html-f360dcec.js"),["assets/symbol.html-f360dcec.js","assets/framework-6fc096bd.js"])),"v-054e96dc":a(()=>e(()=>import("./index.html-7b7b441a.js"),["assets/index.html-7b7b441a.js","assets/framework-6fc096bd.js"])),"v-0d6dbef8":a(()=>e(()=>import("./generator.html-e927bbbd.js"),["assets/generator.html-e927bbbd.js","assets/framework-6fc096bd.js"])),"v-5fe8612e":a(()=>e(()=>import("./iteration.html-e52eb990.js"),["assets/iteration.html-e52eb990.js","assets/framework-6fc096bd.js"])),"v-002015d9":a(()=>e(()=>import("./iterator.html-8ff73872.js"),["assets/iterator.html-8ff73872.js","assets/framework-6fc096bd.js"])),"v-578855ad":a(()=>e(()=>import("./list-comprehensions.html-6bfdc48a.js"),["assets/list-comprehensions.html-6bfdc48a.js","assets/framework-6fc096bd.js"])),"v-1e6d56ce":a(()=>e(()=>import("./slice.html-96acd2c4.js"),["assets/slice.html-96acd2c4.js","assets/framework-6fc096bd.js"])),"v-54d1615c":a(()=>e(()=>import("./index.html-8c4a11ab.js"),["assets/index.html-8c4a11ab.js","assets/framework-6fc096bd.js"])),"v-061793ac":a(()=>e(()=>import("./argument.html-fb44cb2d.js"),["assets/argument.html-fb44cb2d.js","assets/framework-6fc096bd.js"])),"v-2ca65e29":a(()=>e(()=>import("./call.html-2078fc0a.js"),["assets/call.html-2078fc0a.js","assets/framework-6fc096bd.js"])),"v-fc30e528":a(()=>e(()=>import("./define.html-fb0d76a5.js"),["assets/define.html-fb0d76a5.js","assets/framework-6fc096bd.js"])),"v-dd0a6282":a(()=>e(()=>import("./intro.html-36194e6e.js"),["assets/intro.html-36194e6e.js","assets/framework-6fc096bd.js"])),"v-0416c3b9":a(()=>e(()=>import("./recursive.html-98aaaa9a.js"),["assets/recursive.html-98aaaa9a.js","assets/framework-6fc096bd.js"])),"v-4f81c6bb":a(()=>e(()=>import("./index.html-f5ea43e4.js"),["assets/index.html-f5ea43e4.js","assets/framework-6fc096bd.js"])),"v-f95524f4":a(()=>e(()=>import("./anonymous-function.html-e9bd9948.js"),["assets/anonymous-function.html-e9bd9948.js","assets/framework-6fc096bd.js"])),"v-e7b24e0e":a(()=>e(()=>import("./decorator.html-9fcef780.js"),["assets/decorator.html-9fcef780.js","assets/framework-6fc096bd.js"])),"v-63939790":a(()=>e(()=>import("./parital-function.html-03209900.js"),["assets/parital-function.html-03209900.js","assets/framework-6fc096bd.js"])),"v-7b8e695f":a(()=>e(()=>import("./return-function.html-642a0e39.js"),["assets/return-function.html-642a0e39.js","assets/framework-6fc096bd.js"])),"v-435b5698":a(()=>e(()=>import("./index.html-10cbbadc.js"),["assets/index.html-10cbbadc.js","assets/framework-6fc096bd.js"])),"v-03bbd203":a(()=>e(()=>import("./basic.html-8a07fce7.js"),["assets/basic.html-8a07fce7.js","assets/framework-6fc096bd.js"])),"v-83da8d94":a(()=>e(()=>import("./condition.html-b23ac152.js"),["assets/condition.html-b23ac152.js","assets/framework-6fc096bd.js"])),"v-13c3cbe8":a(()=>e(()=>import("./dict-and-set.html-16614a5a.js"),["assets/dict-and-set.html-16614a5a.js","assets/framework-6fc096bd.js"])),"v-f3b0732e":a(()=>e(()=>import("./exercise.html-2931fc10.js"),["assets/exercise.html-2931fc10.js","assets/framework-6fc096bd.js"])),"v-159c09db":a(()=>e(()=>import("./io.html-3389e099.js"),["assets/io.html-3389e099.js","assets/framework-6fc096bd.js"])),"v-8278a984":a(()=>e(()=>import("./list-and-tuple.html-85c88b33.js"),["assets/list-and-tuple.html-85c88b33.js","assets/framework-6fc096bd.js"])),"v-53cd951d":a(()=>e(()=>import("./loop.html-8560dad6.js"),["assets/loop.html-8560dad6.js","assets/framework-6fc096bd.js"])),"v-efe14460":a(()=>e(()=>import("./string.html-e49840ab.js"),["assets/string.html-e49840ab.js","assets/framework-6fc096bd.js"])),"v-20cff4f2":a(()=>e(()=>import("./write.html-aa4158e6.js"),["assets/write.html-aa4158e6.js","assets/framework-6fc096bd.js"])),"v-46679928":a(()=>e(()=>import("./index.html-4e821f10.js"),["assets/index.html-4e821f10.js","assets/framework-6fc096bd.js"])),"v-2446fd74":a(()=>e(()=>import("./install.html-6a45b38e.js"),["assets/install.html-6a45b38e.js","assets/framework-6fc096bd.js"])),"v-4a2b6072":a(()=>e(()=>import("./interpreter.html-87846fa2.js"),["assets/interpreter.html-87846fa2.js","assets/framework-6fc096bd.js"])),"v-271d75d6":a(()=>e(()=>import("./intro.html-47f367b9.js"),["assets/intro.html-47f367b9.js","assets/framework-6fc096bd.js"])),"v-5af931fe":a(()=>e(()=>import("./index.html-51f4692f.js"),["assets/index.html-51f4692f.js","assets/framework-6fc096bd.js"])),"v-435cedc8":a(()=>e(()=>import("./install.html-0c975d19.js"),["assets/install.html-0c975d19.js","assets/framework-6fc096bd.js"])),"v-fddb6b2a":a(()=>e(()=>import("./intro.html-e5edf12d.js"),["assets/intro.html-e5edf12d.js","assets/framework-6fc096bd.js"])),"v-65a32754":a(()=>e(()=>import("./usage.html-f43431fc.js"),["assets/usage.html-f43431fc.js","assets/framework-6fc096bd.js"])),"v-6730ea78":a(()=>e(()=>import("./index.html-d985053c.js"),["assets/index.html-d985053c.js","assets/framework-6fc096bd.js"])),"v-73a24a3a":a(()=>e(()=>import("./customize.html-823e73b6.js"),["assets/customize.html-823e73b6.js","assets/framework-6fc096bd.js"])),"v-8fa6968a":a(()=>e(()=>import("./extend.html-1859623d.js"),["assets/extend.html-1859623d.js","assets/framework-6fc096bd.js"])),"v-1d5feaa7":a(()=>e(()=>import("./info.html-346fa736.js"),["assets/info.html-346fa736.js","assets/framework-6fc096bd.js"])),"v-0b4f55c0":a(()=>e(()=>import("./instance.html-35ec20ee.js"),["assets/instance.html-35ec20ee.js","assets/framework-6fc096bd.js"])),"v-4754e3b1":a(()=>e(()=>import("./intro.html-66ccdbb2.js"),["assets/intro.html-66ccdbb2.js","assets/framework-6fc096bd.js"])),"v-0ffcd3e0":a(()=>e(()=>import("./property.html-96b8d98b.js"),["assets/property.html-96b8d98b.js","assets/framework-6fc096bd.js"])),"v-59a21084":a(()=>e(()=>import("./special.html-0786b4cd.js"),["assets/special.html-0786b4cd.js","assets/framework-6fc096bd.js"])),"v-6863cc9e":a(()=>e(()=>import("./index.html-01a05946.js"),["assets/index.html-01a05946.js","assets/framework-6fc096bd.js"])),"v-f0d4733a":a(()=>e(()=>import("./class-and-interfaces.html-ed7a3f62.js"),["assets/class-and-interfaces.html-ed7a3f62.js","assets/framework-6fc096bd.js"])),"v-15dd32d2":a(()=>e(()=>import("./class.html-9701ba7b.js"),["assets/class.html-9701ba7b.js","assets/framework-6fc096bd.js"])),"v-40c17b28":a(()=>e(()=>import("./declaration-merging.html-301e1bbb.js"),["assets/declaration-merging.html-301e1bbb.js","assets/framework-6fc096bd.js"])),"v-8b0e3c32":a(()=>e(()=>import("./enum.html-b8b082f5.js"),["assets/enum.html-b8b082f5.js","assets/framework-6fc096bd.js"])),"v-251c5e07":a(()=>e(()=>import("./further-reading.html-4c3b4e9c.js"),["assets/further-reading.html-4c3b4e9c.js","assets/framework-6fc096bd.js"])),"v-5edb8acc":a(()=>e(()=>import("./generics.html-c310965c.js"),["assets/generics.html-c310965c.js","assets/framework-6fc096bd.js"])),"v-6ed22e89":a(()=>e(()=>import("./string-literal-types.html-0c743129.js"),["assets/string-literal-types.html-0c743129.js","assets/framework-6fc096bd.js"])),"v-1127c682":a(()=>e(()=>import("./tuple.html-65cad7f7.js"),["assets/tuple.html-65cad7f7.js","assets/framework-6fc096bd.js"])),"v-bdbcba86":a(()=>e(()=>import("./type-aliases.html-a12a866c.js"),["assets/type-aliases.html-a12a866c.js","assets/framework-6fc096bd.js"])),"v-2a3f152e":a(()=>e(()=>import("./index.html-79846f46.js"),["assets/index.html-79846f46.js","assets/framework-6fc096bd.js"])),"v-b5cdbcca":a(()=>e(()=>import("./any.html-4f04dfd3.js"),["assets/any.html-4f04dfd3.js","assets/framework-6fc096bd.js"])),"v-0eb38230":a(()=>e(()=>import("./built-in-objects.html-e2131b87.js"),["assets/built-in-objects.html-e2131b87.js","assets/framework-6fc096bd.js"])),"v-6193fda3":a(()=>e(()=>import("./declaration-files.html-c8f2f8cd.js"),["assets/declaration-files.html-c8f2f8cd.js","assets/framework-6fc096bd.js"])),"v-85f3d8a2":a(()=>e(()=>import("./primitive-data-types.html-2056a608.js"),["assets/primitive-data-types.html-2056a608.js","assets/framework-6fc096bd.js"])),"v-cc37e3c8":a(()=>e(()=>import("./type-assertion.html-0bcfbedd.js"),["assets/type-assertion.html-0bcfbedd.js","assets/framework-6fc096bd.js"])),"v-697acf65":a(()=>e(()=>import("./type-inference.html-f39a842a.js"),["assets/type-inference.html-f39a842a.js","assets/framework-6fc096bd.js"])),"v-0db2b831":a(()=>e(()=>import("./type-of-array.html-e44e21c3.js"),["assets/type-of-array.html-e44e21c3.js","assets/framework-6fc096bd.js"])),"v-54dad760":a(()=>e(()=>import("./type-of-function.html-438da1e8.js"),["assets/type-of-function.html-438da1e8.js","assets/framework-6fc096bd.js"])),"v-76bd067c":a(()=>e(()=>import("./type-of-object-interfaces.html-4e683390.js"),["assets/type-of-object-interfaces.html-4e683390.js","assets/framework-6fc096bd.js"])),"v-552c52ec":a(()=>e(()=>import("./union-types.html-08d60cb1.js"),["assets/union-types.html-08d60cb1.js","assets/framework-6fc096bd.js"])),"v-9d4e28d0":a(()=>e(()=>import("./index.html-aa2c5bf6.js"),["assets/index.html-aa2c5bf6.js","assets/framework-6fc096bd.js"])),"v-73edba1e":a(()=>e(()=>import("./lint.html-bc26bd9c.js"),["assets/lint.html-bc26bd9c.js","assets/framework-6fc096bd.js"])),"v-05c4845f":a(()=>e(()=>import("./index.html-783efdc4.js"),["assets/index.html-783efdc4.js","assets/framework-6fc096bd.js"])),"v-abdb2784":a(()=>e(()=>import("./get-typescript.html-c06732f5.js"),["assets/get-typescript.html-c06732f5.js","assets/framework-6fc096bd.js"])),"v-7552317a":a(()=>e(()=>import("./hello-typescript.html-5aa0b1fc.js"),["assets/hello-typescript.html-5aa0b1fc.js","assets/framework-6fc096bd.js"])),"v-5e699f3b":a(()=>e(()=>import("./what-is-typescript.html-37f1f1d0.js"),["assets/what-is-typescript.html-37f1f1d0.js","assets/framework-6fc096bd.js"])),"v-1120439a":a(()=>e(()=>import("./index.html-d19d5b46.js"),["assets/index.html-d19d5b46.js","assets/framework-6fc096bd.js"])),"v-44daa0d9":a(()=>e(()=>import("./debug.html-d75878f1.js"),["assets/debug.html-d75878f1.js","assets/framework-6fc096bd.js"])),"v-97a6cd28":a(()=>e(()=>import("./file-system.html-4dd0b8a3.js"),["assets/file-system.html-4dd0b8a3.js","assets/framework-6fc096bd.js"])),"v-68cc3d1e":a(()=>e(()=>import("./network.html-618f7d3d.js"),["assets/network.html-618f7d3d.js","assets/framework-6fc096bd.js"])),"v-c119061e":a(()=>e(()=>import("./storage.html-3a7ca6c1.js"),["assets/storage.html-3a7ca6c1.js","assets/framework-6fc096bd.js"])),"v-0419817f":a(()=>e(()=>import("./index.html-42d7e813.js"),["assets/index.html-42d7e813.js","assets/framework-6fc096bd.js"])),"v-1dfd49cc":a(()=>e(()=>import("./app-config.html-795a5685.js"),["assets/app-config.html-795a5685.js","assets/framework-6fc096bd.js"])),"v-5dac3018":a(()=>e(()=>import("./page-config.html-167bfc7e.js"),["assets/page-config.html-167bfc7e.js","assets/framework-6fc096bd.js"])),"v-0c5df440":a(()=>e(()=>import("./sitemap-config.html-d07d2d2c.js"),["assets/sitemap-config.html-d07d2d2c.js","assets/framework-6fc096bd.js"])),"v-79fd6080":a(()=>e(()=>import("./index.html-ff0dad9d.js"),["assets/index.html-ff0dad9d.js","assets/framework-6fc096bd.js"])),"v-e0cabd72":a(()=>e(()=>import("./behavior.html-8dc80fa4.js"),["assets/behavior.html-8dc80fa4.js","assets/framework-6fc096bd.js"])),"v-3fc03a7c":a(()=>e(()=>import("./component.html-5b3a6499.js"),["assets/component.html-5b3a6499.js","assets/framework-6fc096bd.js"])),"v-5f57be6d":a(()=>e(()=>import("./intro.html-0a910705.js"),["assets/intro.html-0a910705.js","assets/framework-6fc096bd.js"])),"v-1cc0ca48":a(()=>e(()=>import("./style.html-15622cc4.js"),["assets/style.html-15622cc4.js","assets/framework-6fc096bd.js"])),"v-bb67d460":a(()=>e(()=>import("./index.html-1869d22f.js"),["assets/index.html-1869d22f.js","assets/framework-6fc096bd.js"])),"v-2dda89dc":a(()=>e(()=>import("./env.html-9dfc76c0.js"),["assets/env.html-9dfc76c0.js","assets/framework-6fc096bd.js"])),"v-38000fbd":a(()=>e(()=>import("./intro.html-82706d19.js"),["assets/intro.html-82706d19.js","assets/framework-6fc096bd.js"])),"v-73a8909e":a(()=>e(()=>import("./js-support.html-d9ca7373.js"),["assets/js-support.html-d9ca7373.js","assets/framework-6fc096bd.js"])),"v-687a9220":a(()=>e(()=>import("./mechanism.html-cfc1bb49.js"),["assets/mechanism.html-cfc1bb49.js","assets/framework-6fc096bd.js"])),"v-6912b19d":a(()=>e(()=>import("./scene.html-d41d6656.js"),["assets/scene.html-d41d6656.js","assets/framework-6fc096bd.js"])),"v-37957440":a(()=>e(()=>import("./update.html-4ecb4cd9.js"),["assets/update.html-4ecb4cd9.js","assets/framework-6fc096bd.js"])),"v-184003f0":a(()=>e(()=>import("./index.html-6f2fc7d9.js"),["assets/index.html-6f2fc7d9.js","assets/framework-6fc096bd.js"])),"v-70096960":a(()=>e(()=>import("./app.html-ab0033c8.js"),["assets/app.html-ab0033c8.js","assets/framework-6fc096bd.js"])),"v-262f21a8":a(()=>e(()=>import("./lifetime.html-0a1e0037.js"),["assets/lifetime.html-0a1e0037.js","assets/framework-6fc096bd.js"])),"v-70732ae5":a(()=>e(()=>import("./module.html-ef1aed14.js"),["assets/module.html-ef1aed14.js","assets/framework-6fc096bd.js"])),"v-acff2abc":a(()=>e(()=>import("./page.html-86ce5df8.js"),["assets/page.html-86ce5df8.js","assets/framework-6fc096bd.js"])),"v-55eacf0e":a(()=>e(()=>import("./register.html-6e879db1.js"),["assets/register.html-6e879db1.js","assets/framework-6fc096bd.js"])),"v-a560af90":a(()=>e(()=>import("./route.html-b6c6f53b.js"),["assets/route.html-b6c6f53b.js","assets/framework-6fc096bd.js"])),"v-5b12db36":a(()=>e(()=>import("./run.html-b644d957.js"),["assets/run.html-b644d957.js","assets/framework-6fc096bd.js"])),"v-0450ba08":a(()=>e(()=>import("./index.html-f80cbb3b.js"),["assets/index.html-f80cbb3b.js","assets/framework-6fc096bd.js"])),"v-6dd771d1":a(()=>e(()=>import("./animation.html-26914f61.js"),["assets/animation.html-26914f61.js","assets/framework-6fc096bd.js"])),"v-15c673f8":a(()=>e(()=>import("./component.html-45f84254.js"),["assets/component.html-45f84254.js","assets/framework-6fc096bd.js"])),"v-2cf6e456":a(()=>e(()=>import("./condition-render.html-05b6154a.js"),["assets/condition-render.html-05b6154a.js","assets/framework-6fc096bd.js"])),"v-01fc8b56":a(()=>e(()=>import("./data-bind.html-a767adb2.js"),["assets/data-bind.html-a767adb2.js","assets/framework-6fc096bd.js"])),"v-5f49767b":a(()=>e(()=>import("./event.html-ff990afd.js"),["assets/event.html-ff990afd.js","assets/framework-6fc096bd.js"])),"v-4adb0560":a(()=>e(()=>import("./list-render.html-69204159.js"),["assets/list-render.html-69204159.js","assets/framework-6fc096bd.js"])),"v-bbd42168":a(()=>e(()=>import("./model.html-aae6e138.js"),["assets/model.html-aae6e138.js","assets/framework-6fc096bd.js"])),"v-f0611518":a(()=>e(()=>import("./rendering-cache.html-c5dfc14a.js"),["assets/rendering-cache.html-c5dfc14a.js","assets/framework-6fc096bd.js"])),"v-59358b0a":a(()=>e(()=>import("./resizable.html-6cf1caf1.js"),["assets/resizable.html-6cf1caf1.js","assets/framework-6fc096bd.js"])),"v-b7241244":a(()=>e(()=>import("./selector.html-bdcf5da4.js"),["assets/selector.html-bdcf5da4.js","assets/framework-6fc096bd.js"])),"v-19ff4723":a(()=>e(()=>import("./template.html-5570f10e.js"),["assets/template.html-5570f10e.js","assets/framework-6fc096bd.js"])),"v-7452791d":a(()=>e(()=>import("./wxml.html-dea33482.js"),["assets/wxml.html-dea33482.js","assets/framework-6fc096bd.js"])),"v-6b499376":a(()=>e(()=>import("./wxs-event.html-8af0328a.js"),["assets/wxs-event.html-8af0328a.js","assets/framework-6fc096bd.js"])),"v-55011963":a(()=>e(()=>import("./wxs.html-58e2ec83.js"),["assets/wxs.html-58e2ec83.js","assets/framework-6fc096bd.js"])),"v-84ac6e08":a(()=>e(()=>import("./wxss.html-f2505e2c.js"),["assets/wxss.html-f2505e2c.js","assets/framework-6fc096bd.js"])),"v-6ed03c7c":a(()=>e(()=>import("./index.html-62eadb10.js"),["assets/index.html-62eadb10.js","assets/framework-6fc096bd.js"])),"v-0500ab2c":a(()=>e(()=>import("./box.html-ffe41527.js"),["assets/box.html-ffe41527.js","assets/framework-6fc096bd.js"])),"v-20f0ad21":a(()=>e(()=>import("./cascade.html-7f3e7d27.js"),["assets/cascade.html-7f3e7d27.js","assets/framework-6fc096bd.js"])),"v-168cefd2":a(()=>e(()=>import("./common.html-a1cc055c.js"),["assets/common.html-a1cc055c.js","assets/framework-6fc096bd.js"])),"v-7a51ec1b":a(()=>e(()=>import("./declaration.html-d5b579ab.js"),["assets/declaration.html-d5b579ab.js","assets/framework-6fc096bd.js"])),"v-3e54ab50":a(()=>e(()=>import("./import.html-d866124d.js"),["assets/import.html-d866124d.js","assets/framework-6fc096bd.js"])),"v-02dacd5e":a(()=>e(()=>import("./selector.html-bcac7c2b.js"),["assets/selector.html-bcac7c2b.js","assets/framework-6fc096bd.js"])),"v-71dc7f0c":a(()=>e(()=>import("./index.html-7f4e2d2b.js"),["assets/index.html-7f4e2d2b.js","assets/framework-6fc096bd.js"])),"v-5333caa4":a(()=>e(()=>import("./background-and-border.html-ce83b97d.js"),["assets/background-and-border.html-ce83b97d.js","assets/framework-6fc096bd.js"])),"v-3fa85cfa":a(()=>e(()=>import("./box.html-db82f589.js"),["assets/box.html-db82f589.js","assets/framework-6fc096bd.js"])),"v-69b33c5e":a(()=>e(()=>import("./font.html-274c675d.js"),["assets/font.html-274c675d.js","assets/framework-6fc096bd.js"])),"v-a1ab80fe":a(()=>e(()=>import("./media.html-9d4e0a3b.js"),["assets/media.html-9d4e0a3b.js","assets/framework-6fc096bd.js"])),"v-3291128b":a(()=>e(()=>import("./overflow.html-46ccee3b.js"),["assets/overflow.html-46ccee3b.js","assets/framework-6fc096bd.js"])),"v-69be0f1d":a(()=>e(()=>import("./replaced.html-e77c5043.js"),["assets/replaced.html-e77c5043.js","assets/framework-6fc096bd.js"])),"v-e3e99664":a(()=>e(()=>import("./selector.html-1602bcbe.js"),["assets/selector.html-1602bcbe.js","assets/framework-6fc096bd.js"])),"v-503fc08f":a(()=>e(()=>import("./sizing.html-c4639a5a.js"),["assets/sizing.html-c4639a5a.js","assets/framework-6fc096bd.js"])),"v-085d06ce":a(()=>e(()=>import("./text-direction.html-8abbe96a.js"),["assets/text-direction.html-8abbe96a.js","assets/framework-6fc096bd.js"])),"v-9555e3d8":a(()=>e(()=>import("./value.html-406f05a9.js"),["assets/value.html-406f05a9.js","assets/framework-6fc096bd.js"])),"v-527c4b9c":a(()=>e(()=>import("./index.html-c76a29d0.js"),["assets/index.html-c76a29d0.js","assets/framework-6fc096bd.js"])),"v-5717d036":a(()=>e(()=>import("./exercise.html-73b75fb4.js"),["assets/exercise.html-73b75fb4.js","assets/framework-6fc096bd.js"])),"v-a2ff4f38":a(()=>e(()=>import("./flex.html-2fc17f48.js"),["assets/flex.html-2fc17f48.js","assets/framework-6fc096bd.js"])),"v-38389ece":a(()=>e(()=>import("./float.html-83362291.js"),["assets/float.html-83362291.js","assets/framework-6fc096bd.js"])),"v-846c5f62":a(()=>e(()=>import("./flow.html-a497ffc8.js"),["assets/flow.html-a497ffc8.js","assets/framework-6fc096bd.js"])),"v-6383d537":a(()=>e(()=>import("./grid.html-7a5437b3.js"),["assets/grid.html-7a5437b3.js","assets/framework-6fc096bd.js"])),"v-6b707689":a(()=>e(()=>import("./intro.html-d6b12179.js"),["assets/intro.html-d6b12179.js","assets/framework-6fc096bd.js"])),"v-1737c155":a(()=>e(()=>import("./index.html-6e1a81a3.js"),["assets/index.html-6e1a81a3.js","assets/framework-6fc096bd.js"])),"v-fa26e920":a(()=>e(()=>import("./mime.html-ad45c202.js"),["assets/mime.html-ad45c202.js","assets/framework-6fc096bd.js"])),"v-0bbf52f1":a(()=>e(()=>import("./seo.html-8fe56d4d.js"),["assets/seo.html-8fe56d4d.js","assets/framework-6fc096bd.js"])),"v-fe14c97c":a(()=>e(()=>import("./uri.html-8b861f4f.js"),["assets/uri.html-8b861f4f.js","assets/framework-6fc096bd.js"])),"v-f3d7b5c2":a(()=>e(()=>import("./url.html-f277d300.js"),["assets/url.html-f277d300.js","assets/framework-6fc096bd.js"])),"v-3520260c":a(()=>e(()=>import("./index.html-dfb6c8d0.js"),["assets/index.html-dfb6c8d0.js","assets/framework-6fc096bd.js"])),"v-914cf70e":a(()=>e(()=>import("./tag.html-89c05a59.js"),["assets/tag.html-89c05a59.js","assets/framework-6fc096bd.js"])),"v-2f07a0ec":a(()=>e(()=>import("./index.html-a39c307e.js"),["assets/index.html-a39c307e.js","assets/framework-6fc096bd.js"])),"v-77dfa475":a(()=>e(()=>import("./basic.html-222db0eb.js"),["assets/basic.html-222db0eb.js","assets/framework-6fc096bd.js"])),"v-dfcdc6ac":a(()=>e(()=>import("./embed.html-a28dc996.js"),["assets/embed.html-a28dc996.js","assets/framework-6fc096bd.js"])),"v-495c4178":a(()=>e(()=>import("./format.html-ce30a95b.js"),["assets/format.html-ce30a95b.js","assets/framework-6fc096bd.js"])),"v-02c46aa2":a(()=>e(()=>import("./head.html-e952c344.js"),["assets/head.html-e952c344.js","assets/framework-6fc096bd.js"])),"v-37a4494f":a(()=>e(()=>import("./history.html-43edd53d.js"),["assets/history.html-43edd53d.js","assets/framework-6fc096bd.js"])),"v-64df0368":a(()=>e(()=>import("./image.html-b2ce5e87.js"),["assets/image.html-b2ce5e87.js","assets/framework-6fc096bd.js"])),"v-6a524625":a(()=>e(()=>import("./layout.html-22807f71.js"),["assets/layout.html-22807f71.js","assets/framework-6fc096bd.js"])),"v-aa51ae56":a(()=>e(()=>import("./link.html-3638fa22.js"),["assets/link.html-3638fa22.js","assets/framework-6fc096bd.js"])),"v-2e7dea7f":a(()=>e(()=>import("./media.html-a628d393.js"),["assets/media.html-a628d393.js","assets/framework-6fc096bd.js"])),"v-2ef83302":a(()=>e(()=>import("./svg.html-6a1ba917.js"),["assets/svg.html-6a1ba917.js","assets/framework-6fc096bd.js"])),"v-613200d5":a(()=>e(()=>import("./table.html-8a73d659.js"),["assets/table.html-8a73d659.js","assets/framework-6fc096bd.js"])),"v-3848a939":a(()=>e(()=>import("./alias.html-d55753bb.js"),["assets/alias.html-d55753bb.js","assets/framework-6fc096bd.js"])),"v-f0eb6098":a(()=>e(()=>import("./awk.html-ae1a4067.js"),["assets/awk.html-ae1a4067.js","assets/framework-6fc096bd.js"])),"v-658f2b0a":a(()=>e(()=>import("./cal.html-2a46ecc8.js"),["assets/cal.html-2a46ecc8.js","assets/framework-6fc096bd.js"])),"v-4a41a11a":a(()=>e(()=>import("./cat.html-25f23abd.js"),["assets/cat.html-25f23abd.js","assets/framework-6fc096bd.js"])),"v-7fa1ff5c":a(()=>e(()=>import("./clear.html-e9eda9cb.js"),["assets/clear.html-e9eda9cb.js","assets/framework-6fc096bd.js"])),"v-0c6421dc":a(()=>e(()=>import("./cp.html-e1bcebcc.js"),["assets/cp.html-e1bcebcc.js","assets/framework-6fc096bd.js"])),"v-06485ef2":a(()=>e(()=>import("./cut.html-be2248e1.js"),["assets/cut.html-be2248e1.js","assets/framework-6fc096bd.js"])),"v-6fef0b3b":a(()=>e(()=>import("./date.html-04224375.js"),["assets/date.html-04224375.js","assets/framework-6fc096bd.js"])),"v-2cd035a9":a(()=>e(()=>import("./dd.html-916b5dc1.js"),["assets/dd.html-916b5dc1.js","assets/framework-6fc096bd.js"])),"v-3039e6e7":a(()=>e(()=>import("./df.html-84b12b14.js"),["assets/df.html-84b12b14.js","assets/framework-6fc096bd.js"])),"v-49d29838":a(()=>e(()=>import("./du.html-868c8752.js"),["assets/du.html-868c8752.js","assets/framework-6fc096bd.js"])),"v-cd058ca4":a(()=>e(()=>import("./egrep.html-e32dac81.js"),["assets/egrep.html-e32dac81.js","assets/framework-6fc096bd.js"])),"v-d9533216":a(()=>e(()=>import("./export.html-7a98cabf.js"),["assets/export.html-7a98cabf.js","assets/framework-6fc096bd.js"])),"v-304f762d":a(()=>e(()=>import("./file.html-f2a2930c.js"),["assets/file.html-f2a2930c.js","assets/framework-6fc096bd.js"])),"v-cf31d7e0":a(()=>e(()=>import("./find.html-f4384993.js"),["assets/find.html-f4384993.js","assets/framework-6fc096bd.js"])),"v-e56505c8":a(()=>e(()=>import("./fmt.html-29884632.js"),["assets/fmt.html-29884632.js","assets/framework-6fc096bd.js"])),"v-0bf82913":a(()=>e(()=>import("./grep.html-ebb4f16a.js"),["assets/grep.html-ebb4f16a.js","assets/framework-6fc096bd.js"])),"v-4b7c10e8":a(()=>e(()=>import("./gunzip.html-666288e4.js"),["assets/gunzip.html-666288e4.js","assets/framework-6fc096bd.js"])),"v-bfa5a534":a(()=>e(()=>import("./gzcat.html-1d1d6f64.js"),["assets/gzcat.html-1d1d6f64.js","assets/framework-6fc096bd.js"])),"v-1e9a7d0f":a(()=>e(()=>import("./gzip.html-e2be1ee3.js"),["assets/gzip.html-e2be1ee3.js","assets/framework-6fc096bd.js"])),"v-21978d8b":a(()=>e(()=>import("./kill.html-75613efe.js"),["assets/kill.html-75613efe.js","assets/framework-6fc096bd.js"])),"v-d0927c34":a(()=>e(()=>import("./killall.html-91d20431.js"),["assets/killall.html-91d20431.js","assets/framework-6fc096bd.js"])),"v-12760d5a":a(()=>e(()=>import("./last.html-b93abfd1.js"),["assets/last.html-b93abfd1.js","assets/framework-6fc096bd.js"])),"v-d3ae9b88":a(()=>e(()=>import("./lpq.html-62127b2c.js"),["assets/lpq.html-62127b2c.js","assets/framework-6fc096bd.js"])),"v-d044ea4a":a(()=>e(()=>import("./lpr.html-773c1960.js"),["assets/lpr.html-773c1960.js","assets/framework-6fc096bd.js"])),"v-24ca7dfc":a(()=>e(()=>import("./ls.html-77346fb8.js"),["assets/ls.html-77346fb8.js","assets/framework-6fc096bd.js"])),"v-4b754b2b":a(()=>e(()=>import("./nl.html-fe818435.js"),["assets/nl.html-fe818435.js","assets/framework-6fc096bd.js"])),"v-7d98a3f4":a(()=>e(()=>import("./ps.html-fc2c9c84.js"),["assets/ps.html-fc2c9c84.js","assets/framework-6fc096bd.js"])),"v-8829dd2e":a(()=>e(()=>import("./scp.html-589a6ca1.js"),["assets/scp.html-589a6ca1.js","assets/framework-6fc096bd.js"])),"v-113d6077":a(()=>e(()=>import("./sed.html-bd260e1a.js"),["assets/sed.html-bd260e1a.js","assets/framework-6fc096bd.js"])),"v-7e0e3b4b":a(()=>e(()=>import("./sort.html-95489493.js"),["assets/sort.html-95489493.js","assets/framework-6fc096bd.js"])),"v-d9d07b2a":a(()=>e(()=>import("./tr.html-21987f6a.js"),["assets/tr.html-21987f6a.js","assets/framework-6fc096bd.js"])),"v-cb2835ee":a(()=>e(()=>import("./uname.html-233feb4d.js"),["assets/uname.html-233feb4d.js","assets/framework-6fc096bd.js"])),"v-5d7f4d48":a(()=>e(()=>import("./uniq.html-066da21c.js"),["assets/uniq.html-066da21c.js","assets/framework-6fc096bd.js"])),"v-01ee417e":a(()=>e(()=>import("./uptime.html-61414f73.js"),["assets/uptime.html-61414f73.js","assets/framework-6fc096bd.js"])),"v-2519511c":a(()=>e(()=>import("./w.html-3a5831b7.js"),["assets/w.html-3a5831b7.js","assets/framework-6fc096bd.js"])),"v-1831c2dd":a(()=>e(()=>import("./wc.html-b517c8e6.js"),["assets/wc.html-b517c8e6.js","assets/framework-6fc096bd.js"])),"v-37823fd8":a(()=>e(()=>import("./whereis.html-debfd780.js"),["assets/whereis.html-debfd780.js","assets/framework-6fc096bd.js"])),"v-3c8dcd8c":a(()=>e(()=>import("./which.html-dfe13f8e.js"),["assets/which.html-dfe13f8e.js","assets/framework-6fc096bd.js"])),"v-623a148b":a(()=>e(()=>import("./who.html-d492adb0.js"),["assets/who.html-d492adb0.js","assets/framework-6fc096bd.js"])),"v-5c24bfbd":a(()=>e(()=>import("./stdio.html-c5825338.js"),["assets/stdio.html-c5825338.js","assets/framework-6fc096bd.js"])),"v-39354ab9":a(()=>e(()=>import("./filter.html-81384e9d.js"),["assets/filter.html-81384e9d.js","assets/framework-6fc096bd.js"])),"v-4bdde895":a(()=>e(()=>import("./intro.html-2384a7e4.js"),["assets/intro.html-2384a7e4.js","assets/framework-6fc096bd.js"])),"v-1aa63c24":a(()=>e(()=>import("./map-and-reduce.html-44003641.js"),["assets/map-and-reduce.html-44003641.js","assets/framework-6fc096bd.js"])),"v-19bac6b0":a(()=>e(()=>import("./index.html-25ed1453.js"),["assets/index.html-25ed1453.js","assets/framework-6fc096bd.js"])),"v-377c72d8":a(()=>e(()=>import("./sorted.html-b40bff7e.js"),["assets/sorted.html-b40bff7e.js","assets/framework-6fc096bd.js"])),"v-2f60f946":a(()=>e(()=>import("./index.html-dcf8c492.js"),["assets/index.html-dcf8c492.js","assets/framework-6fc096bd.js"])),"v-76fcb826":a(()=>e(()=>import("./interact.html-633dd856.js"),["assets/interact.html-633dd856.js","assets/framework-6fc096bd.js"])),"v-d0491970":a(()=>e(()=>import("./network.html-6e30845b.js"),["assets/network.html-6e30845b.js","assets/framework-6fc096bd.js"])),"v-63cc474d":a(()=>e(()=>import("./route.html-a8e87588.js"),["assets/route.html-a8e87588.js","assets/framework-6fc096bd.js"])),"v-62fa99ca":a(()=>e(()=>import("./storage.html-bf697690.js"),["assets/storage.html-bf697690.js","assets/framework-6fc096bd.js"])),"v-7541848d":a(()=>e(()=>import("./system.html-abc69a80.js"),["assets/system.html-abc69a80.js","assets/framework-6fc096bd.js"])),"v-3706649a":a(()=>e(()=>import("./404.html-777f37af.js"),["assets/404.html-777f37af.js","assets/framework-6fc096bd.js"])),"v-5bc93818":a(()=>e(()=>import("./index.html-f7d15efd.js"),["assets/index.html-f7d15efd.js","assets/framework-6fc096bd.js"])),"v-744d024e":a(()=>e(()=>import("./index.html-501337fb.js"),["assets/index.html-501337fb.js","assets/framework-6fc096bd.js"])),"v-e52c881c":a(()=>e(()=>import("./index.html-d64b22a8.js"),["assets/index.html-d64b22a8.js","assets/framework-6fc096bd.js"])),"v-75ed4ea4":a(()=>e(()=>import("./index.html-39eb9acd.js"),["assets/index.html-39eb9acd.js","assets/framework-6fc096bd.js"])),"v-d804e652":a(()=>e(()=>import("./index.html-7daae46f.js"),["assets/index.html-7daae46f.js","assets/framework-6fc096bd.js"])),"v-154dc4c4":a(()=>e(()=>import("./index.html-ac24e946.js"),["assets/index.html-ac24e946.js","assets/framework-6fc096bd.js"])),"v-01560935":a(()=>e(()=>import("./index.html-08df69a1.js"),["assets/index.html-08df69a1.js","assets/framework-6fc096bd.js"])),"v-f3d31dec":a(()=>e(()=>import("./index.html-27f0d543.js"),["assets/index.html-27f0d543.js","assets/framework-6fc096bd.js"])),"v-b99e3274":a(()=>e(()=>import("./index.html-4c8a1567.js"),["assets/index.html-4c8a1567.js","assets/framework-6fc096bd.js"])),"v-506407f4":a(()=>e(()=>import("./index.html-e9827da0.js"),["assets/index.html-e9827da0.js","assets/framework-6fc096bd.js"])),"v-8f7c4c90":a(()=>e(()=>import("./index.html-ba930b8d.js"),["assets/index.html-ba930b8d.js","assets/framework-6fc096bd.js"])),"v-be4a7c2a":a(()=>e(()=>import("./index.html-d48da78f.js"),["assets/index.html-d48da78f.js","assets/framework-6fc096bd.js"])),"v-37a8c5a0":a(()=>e(()=>import("./index.html-de095ed0.js"),["assets/index.html-de095ed0.js","assets/framework-6fc096bd.js"])),"v-0379cba1":a(()=>e(()=>import("./index.html-abfb2cf8.js"),["assets/index.html-abfb2cf8.js","assets/framework-6fc096bd.js"])),"v-7eb8aa90":a(()=>e(()=>import("./index.html-1e9495e5.js"),["assets/index.html-1e9495e5.js","assets/framework-6fc096bd.js"])),"v-0da0f70d":a(()=>e(()=>import("./index.html-94412456.js"),["assets/index.html-94412456.js","assets/framework-6fc096bd.js"])),"v-9c48d85a":a(()=>e(()=>import("./index.html-d57c6ff5.js"),["assets/index.html-d57c6ff5.js","assets/framework-6fc096bd.js"])),"v-24cacd4b":a(()=>e(()=>import("./index.html-e5380ff1.js"),["assets/index.html-e5380ff1.js","assets/framework-6fc096bd.js"])),"v-2ae54282":a(()=>e(()=>import("./index.html-dec6b90a.js"),["assets/index.html-dec6b90a.js","assets/framework-6fc096bd.js"])),"v-1daa6b4d":a(()=>e(()=>import("./index.html-076faacd.js"),["assets/index.html-076faacd.js","assets/framework-6fc096bd.js"])),"v-60649a06":a(()=>e(()=>import("./index.html-5f42c537.js"),["assets/index.html-5f42c537.js","assets/framework-6fc096bd.js"])),"v-5aaac2db":a(()=>e(()=>import("./index.html-94c2279f.js"),["assets/index.html-94c2279f.js","assets/framework-6fc096bd.js"])),"v-05934772":a(()=>e(()=>import("./index.html-a248187e.js"),["assets/index.html-a248187e.js","assets/framework-6fc096bd.js"])),"v-b310d42a":a(()=>e(()=>import("./index.html-7b7b7234.js"),["assets/index.html-7b7b7234.js","assets/framework-6fc096bd.js"])),"v-5f7f7ebf":a(()=>e(()=>import("./index.html-38f6f27c.js"),["assets/index.html-38f6f27c.js","assets/framework-6fc096bd.js"])),"v-50ae161a":a(()=>e(()=>import("./index.html-b8be5f48.js"),["assets/index.html-b8be5f48.js","assets/framework-6fc096bd.js"])),"v-2565fbec":a(()=>e(()=>import("./index.html-23416778.js"),["assets/index.html-23416778.js","assets/framework-6fc096bd.js"])),"v-a0ba2788":a(()=>e(()=>import("./index.html-523d9335.js"),["assets/index.html-523d9335.js","assets/framework-6fc096bd.js"])),"v-29da37b8":a(()=>e(()=>import("./index.html-d8161948.js"),["assets/index.html-d8161948.js","assets/framework-6fc096bd.js"])),"v-60379330":a(()=>e(()=>import("./index.html-a1c13d89.js"),["assets/index.html-a1c13d89.js","assets/framework-6fc096bd.js"])),"v-e9c7e408":a(()=>e(()=>import("./index.html-d70af257.js"),["assets/index.html-d70af257.js","assets/framework-6fc096bd.js"])),"v-17343014":a(()=>e(()=>import("./index.html-42ee7fd6.js"),["assets/index.html-42ee7fd6.js","assets/framework-6fc096bd.js"])),"v-eddfd732":a(()=>e(()=>import("./index.html-3919d228.js"),["assets/index.html-3919d228.js","assets/framework-6fc096bd.js"])),"v-755965f0":a(()=>e(()=>import("./index.html-d19cfd4d.js"),["assets/index.html-d19cfd4d.js","assets/framework-6fc096bd.js"])),"v-fd3344d8":a(()=>e(()=>import("./index.html-4bd89f91.js"),["assets/index.html-4bd89f91.js","assets/framework-6fc096bd.js"])),"v-56fbf552":a(()=>e(()=>import("./index.html-9ebc6ee7.js"),["assets/index.html-9ebc6ee7.js","assets/framework-6fc096bd.js"])),"v-4f7b1987":a(()=>e(()=>import("./index.html-e6c31b53.js"),["assets/index.html-e6c31b53.js","assets/framework-6fc096bd.js"])),"v-0d223344":a(()=>e(()=>import("./index.html-42e4dbf2.js"),["assets/index.html-42e4dbf2.js","assets/framework-6fc096bd.js"])),"v-0e452818":a(()=>e(()=>import("./index.html-ff91805d.js"),["assets/index.html-ff91805d.js","assets/framework-6fc096bd.js"])),"v-b302da92":a(()=>e(()=>import("./index.html-32939ccc.js"),["assets/index.html-32939ccc.js","assets/framework-6fc096bd.js"])),"v-b749fb9c":a(()=>e(()=>import("./index.html-6a073afc.js"),["assets/index.html-6a073afc.js","assets/framework-6fc096bd.js"])),"v-551fb564":a(()=>e(()=>import("./index.html-3633622d.js"),["assets/index.html-3633622d.js","assets/framework-6fc096bd.js"])),"v-65f6d381":a(()=>e(()=>import("./index.html-d5220ea9.js"),["assets/index.html-d5220ea9.js","assets/framework-6fc096bd.js"])),"v-551de488":a(()=>e(()=>import("./index.html-5143067b.js"),["assets/index.html-5143067b.js","assets/framework-6fc096bd.js"])),"v-e2bac56c":a(()=>e(()=>import("./index.html-7d573b37.js"),["assets/index.html-7d573b37.js","assets/framework-6fc096bd.js"])),"v-7cfd563e":a(()=>e(()=>import("./index.html-bcb467c0.js"),["assets/index.html-bcb467c0.js","assets/framework-6fc096bd.js"])),"v-65efd6b5":a(()=>e(()=>import("./index.html-0035610a.js"),["assets/index.html-0035610a.js","assets/framework-6fc096bd.js"])),"v-14748cc9":a(()=>e(()=>import("./index.html-72e0e9c7.js"),["assets/index.html-72e0e9c7.js","assets/framework-6fc096bd.js"])),"v-592410ea":a(()=>e(()=>import("./index.html-695df90f.js"),["assets/index.html-695df90f.js","assets/framework-6fc096bd.js"])),"v-0234a462":a(()=>e(()=>import("./index.html-cd31a810.js"),["assets/index.html-cd31a810.js","assets/framework-6fc096bd.js"])),"v-594aebc3":a(()=>e(()=>import("./index.html-0644685e.js"),["assets/index.html-0644685e.js","assets/framework-6fc096bd.js"])),"v-c7bf80f0":a(()=>e(()=>import("./index.html-5ce1c9be.js"),["assets/index.html-5ce1c9be.js","assets/framework-6fc096bd.js"])),"v-e348c378":a(()=>e(()=>import("./index.html-9fc94418.js"),["assets/index.html-9fc94418.js","assets/framework-6fc096bd.js"])),"v-28949148":a(()=>e(()=>import("./index.html-78e10395.js"),["assets/index.html-78e10395.js","assets/framework-6fc096bd.js"])),"v-65eddd24":a(()=>e(()=>import("./index.html-c19e47be.js"),["assets/index.html-c19e47be.js","assets/framework-6fc096bd.js"])),"v-66019bfa":a(()=>e(()=>import("./index.html-1967e3ea.js"),["assets/index.html-1967e3ea.js","assets/framework-6fc096bd.js"])),"v-57dd1778":a(()=>e(()=>import("./index.html-e6830013.js"),["assets/index.html-e6830013.js","assets/framework-6fc096bd.js"])),"v-5b28d011":a(()=>e(()=>import("./index.html-76a76f5d.js"),["assets/index.html-76a76f5d.js","assets/framework-6fc096bd.js"])),"v-5831b135":a(()=>e(()=>import("./index.html-c9ef6dde.js"),["assets/index.html-c9ef6dde.js","assets/framework-6fc096bd.js"])),"v-cc0796be":a(()=>e(()=>import("./index.html-7a899fed.js"),["assets/index.html-7a899fed.js","assets/framework-6fc096bd.js"])),"v-5839c72f":a(()=>e(()=>import("./index.html-a2d10ecf.js"),["assets/index.html-a2d10ecf.js","assets/framework-6fc096bd.js"])),"v-d11744fa":a(()=>e(()=>import("./index.html-8297fab8.js"),["assets/index.html-8297fab8.js","assets/framework-6fc096bd.js"])),"v-d37ff7f0":a(()=>e(()=>import("./index.html-77b269cd.js"),["assets/index.html-77b269cd.js","assets/framework-6fc096bd.js"])),"v-2831124d":a(()=>e(()=>import("./index.html-ba342e9d.js"),["assets/index.html-ba342e9d.js","assets/framework-6fc096bd.js"])),"v-65f3e9cf":a(()=>e(()=>import("./index.html-9d05b3d9.js"),["assets/index.html-9d05b3d9.js","assets/framework-6fc096bd.js"])),"v-34dc4f20":a(()=>e(()=>import("./index.html-a0674ca8.js"),["assets/index.html-a0674ca8.js","assets/framework-6fc096bd.js"])),"v-78cbe7bb":a(()=>e(()=>import("./index.html-5c92a6a1.js"),["assets/index.html-5c92a6a1.js","assets/framework-6fc096bd.js"])),"v-51e0cde2":a(()=>e(()=>import("./index.html-b4eef980.js"),["assets/index.html-b4eef980.js","assets/framework-6fc096bd.js"])),"v-6c5e4d32":a(()=>e(()=>import("./index.html-d6a463fe.js"),["assets/index.html-d6a463fe.js","assets/framework-6fc096bd.js"])),"v-8f2bef46":a(()=>e(()=>import("./index.html-5b6a5d4e.js"),["assets/index.html-5b6a5d4e.js","assets/framework-6fc096bd.js"])),"v-5904f150":a(()=>e(()=>import("./index.html-c9a84934.js"),["assets/index.html-c9a84934.js","assets/framework-6fc096bd.js"])),"v-474b3db0":a(()=>e(()=>import("./index.html-d2e1fc22.js"),["assets/index.html-d2e1fc22.js","assets/framework-6fc096bd.js"])),"v-65ee2aa4":a(()=>e(()=>import("./index.html-90100867.js"),["assets/index.html-90100867.js","assets/framework-6fc096bd.js"])),"v-9b71a094":a(()=>e(()=>import("./index.html-fcb6b115.js"),["assets/index.html-fcb6b115.js","assets/framework-6fc096bd.js"])),"v-b3bd56da":a(()=>e(()=>import("./index.html-44ee5cc9.js"),["assets/index.html-44ee5cc9.js","assets/framework-6fc096bd.js"])),"v-1613b516":a(()=>e(()=>import("./index.html-56dc4bdf.js"),["assets/index.html-56dc4bdf.js","assets/framework-6fc096bd.js"])),"v-581e04cc":a(()=>e(()=>import("./index.html-33c21633.js"),["assets/index.html-33c21633.js","assets/framework-6fc096bd.js"])),"v-17f37776":a(()=>e(()=>import("./index.html-865a764c.js"),["assets/index.html-865a764c.js","assets/framework-6fc096bd.js"])),"v-2dcc8639":a(()=>e(()=>import("./index.html-503310ee.js"),["assets/index.html-503310ee.js","assets/framework-6fc096bd.js"])),"v-0fdb8ada":a(()=>e(()=>import("./index.html-c499a48c.js"),["assets/index.html-c499a48c.js","assets/framework-6fc096bd.js"])),"v-5decfa84":a(()=>e(()=>import("./index.html-368a8d79.js"),["assets/index.html-368a8d79.js","assets/framework-6fc096bd.js"])),"v-2f29ddae":a(()=>e(()=>import("./index.html-b6851b12.js"),["assets/index.html-b6851b12.js","assets/framework-6fc096bd.js"])),"v-5217c93c":a(()=>e(()=>import("./index.html-048af2c5.js"),["assets/index.html-048af2c5.js","assets/framework-6fc096bd.js"])),"v-40d8aadf":a(()=>e(()=>import("./index.html-f9ae1814.js"),["assets/index.html-f9ae1814.js","assets/framework-6fc096bd.js"])),"v-2cb13792":a(()=>e(()=>import("./index.html-4dc0f461.js"),["assets/index.html-4dc0f461.js","assets/framework-6fc096bd.js"])),"v-f6a575c0":a(()=>e(()=>import("./index.html-6db814d4.js"),["assets/index.html-6db814d4.js","assets/framework-6fc096bd.js"])),"v-a26e9aaa":a(()=>e(()=>import("./index.html-7e89f5de.js"),["assets/index.html-7e89f5de.js","assets/framework-6fc096bd.js"])),"v-54f4d5c2":a(()=>e(()=>import("./index.html-922e9b27.js"),["assets/index.html-922e9b27.js","assets/framework-6fc096bd.js"])),"v-02cabf9e":a(()=>e(()=>import("./index.html-88a274e2.js"),["assets/index.html-88a274e2.js","assets/framework-6fc096bd.js"])),"v-484552dc":a(()=>e(()=>import("./index.html-0ace602e.js"),["assets/index.html-0ace602e.js","assets/framework-6fc096bd.js"])),"v-4b0ad344":a(()=>e(()=>import("./index.html-90bdd371.js"),["assets/index.html-90bdd371.js","assets/framework-6fc096bd.js"])),"v-12cb3644":a(()=>e(()=>import("./index.html-6fd4ea8e.js"),["assets/index.html-6fd4ea8e.js","assets/framework-6fc096bd.js"])),"v-3fb58c9e":a(()=>e(()=>import("./index.html-faf2be39.js"),["assets/index.html-faf2be39.js","assets/framework-6fc096bd.js"])),"v-284efd1e":a(()=>e(()=>import("./index.html-e15c259d.js"),["assets/index.html-e15c259d.js","assets/framework-6fc096bd.js"])),"v-2953cd2f":a(()=>e(()=>import("./index.html-f1f1a2b7.js"),["assets/index.html-f1f1a2b7.js","assets/framework-6fc096bd.js"])),"v-288e2c56":a(()=>e(()=>import("./index.html-d9f36f7f.js"),["assets/index.html-d9f36f7f.js","assets/framework-6fc096bd.js"])),"v-3891cf12":a(()=>e(()=>import("./index.html-06f715df.js"),["assets/index.html-06f715df.js","assets/framework-6fc096bd.js"])),"v-b3142c4c":a(()=>e(()=>import("./index.html-19c3f525.js"),["assets/index.html-19c3f525.js","assets/framework-6fc096bd.js"])),"v-075c6c62":a(()=>e(()=>import("./index.html-cbc7eb25.js"),["assets/index.html-cbc7eb25.js","assets/framework-6fc096bd.js"])),"v-5dc926ce":a(()=>e(()=>import("./index.html-e8b8c678.js"),["assets/index.html-e8b8c678.js","assets/framework-6fc096bd.js"]))};var en=k(K),L=S({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),m=k(L),P=()=>m,D=Symbol(""),wn=()=>{const n=h(D);if(!n)throw new Error("usePageFrontmatter() is called without provider.");return n},O=Symbol(""),an=()=>{const n=h(O);if(!n)throw new Error("usePageHead() is called without provider.");return n},R=Symbol(""),An=()=>{const n=h(R);if(!n)throw new Error("usePageHeadTitle() is called without provider.");return n},I=Symbol(""),tn=()=>{const n=h(I);if(!n)throw new Error("usePageLang() is called without provider.");return n},V=Symbol(""),Ln=()=>{const n=h(V);if(!n)throw new Error("useRouteLocale() is called without provider.");return n},_=k(nn),Pn=()=>_,x=Symbol(""),Dn=()=>{const n=h(x);if(!n)throw new Error("useSiteLocaleData() is called without provider.");return n},sn=Symbol(""),u=j({resolvePageData:async n=>{const t=en.value[n];return await(t==null?void 0:t())??L},resolvePageFrontmatter:n=>n.frontmatter,resolvePageHead:(n,t,p)=>{const s=v(t.description)?t.description:p.description,i=[...Z(t.head)?t.head:[],...p.head,["title",{},n],["meta",{name:"description",content:s}]];return C(i)},resolvePageHeadTitle:(n,t)=>`${n.title?`${n.title}`:""}${t.title?` | ${t.title}`:""}`,resolvePageLang:n=>n.lang||"en",resolveRouteLocale:(n,t)=>M(n,t),resolveSiteLocaleData:(n,t)=>({...n,...n.locales[t]})}),pn=y({name:"ClientOnly",setup(n,t){const p=k(!1);return w(()=>{p.value=!0}),()=>{var s,i;return p.value?(i=(s=t.slots).default)==null?void 0:i.call(s):null}}}),on=y({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(n){const t=P(),p=r(()=>A[n.pageKey||t.value.key]);return()=>p.value?b(p.value):b("div","404 Not Found")}}),On=(n={})=>n,ln=n=>B(n)?n:`/${J(n)}`;const cn=[["v-8daa1a0e","/",{y:"h",d:"2022-02-06T16:01:38.000Z",r:{minutes:.86,words:258},title:"主页",i:"home"},["/index.html","/README.md"]],["v-74bc627b","/about/",{y:"s",d:"2022-02-06T16:01:38.000Z",g:["个人介绍"],r:{minutes:.57,words:170},title:"Mr.Hope 介绍",i:"people"},["/about/index.html","/about/README.md"]],["v-008c1322","/about/donate.html",{title:"捐赠",i:"support"},["/about/donate","/about/donate.md"]],["v-78da0dd7","/about/site.html",{title:"关于网站",i:"info"},["/about/site","/about/site.md"]],["v-146a1089","/code/",{y:"a",d:"2022-02-06T16:01:38.000Z",u:20,e:`<p>此处是 Mr.Hope 存放的一些代码笔记。</p>
`,r:{minutes:.87,words:260},title:"代码笔记",i:"code"},["/code/index.html","/code/README.md"]],["v-32bda6e0","/design/APP.html",{y:"a",d:"2019-11-24T00:00:00.000Z",l:"2019年11月24日",c:["设计"],g:["UI"],e:`<p>本文对应用程序设计中常见的组件及其作用进行了介绍。</p>
`,r:{minutes:3.23,words:970},title:"APP 组件设计规范",i:"app"},["/design/APP","/design/APP.md"]],["v-72582dd0","/design/",{y:"a",d:"2019-11-24T00:00:00.000Z",l:"2019年11月24日",c:["设计"],u:8,e:`<p>本文列出了一些 UI 设计相关的资源。</p>
`,r:{minutes:.44,words:132},title:"UI 设计",i:"skin"},["/design/index.html","/design/README.md"]],["v-2d0a870d","/en/",{y:"h",d:"2022-02-06T16:01:38.000Z",r:{minutes:.63,words:188},title:"Home",i:"home"},["/en/index.html","/en/README.md"]],["v-fd97f502","/hardware/HDD.html",{y:"a",d:"2020-06-05T00:00:00.000Z",l:"2020年6月5日",c:["硬件"],e:`<p>现代计算机大部分文件存储功能都是由机械硬盘这种设备提供的。(现在的 SSD 和闪存从概念和逻辑上都部分继承自机械硬盘，所以使用机械硬盘来进行理解也是没有问题的)</p>
<p>机械硬盘能实现信息存储的功能基于: 磁性存储介质能够被磁化，且磁化后会长久保留被磁化的状态，这种被磁化状态能够被读取出来，同时这种磁化状态还能够不断被修改，磁化正好有两个方向，所以可以表示 0 和 1。
于是硬盘就是把这种磁性存储介质做成一个个盘片，每一个盘片上都分布着数量巨大的磁性存储单位，使用磁性读写头对盘片进行写入和读取(从原理上类似黑胶唱片的播放)。</p>
<p>一个硬盘中的磁性存储单位数以亿计(1T 硬盘就有约 80 亿个)，所以需要一套规则来规划信息如何存取(比如一本存储信息的书我们还会分为页，每一页从上到下从左到右读取，同时还有章节目录)
于是就有了这些物理、逻辑概念:</p>`,r:{minutes:2.24,words:671},title:"机械硬盘"},["/hardware/HDD","/hardware/HDD.md"]],["v-530da724","/hardware/",{y:"a",d:"2022-02-06T16:01:38.000Z",e:`<h1> 硬件相关</h1>
<p>这里是一些常见的硬件相关的问题总结，供访客查阅。</p>
`,r:{minutes:.09,words:27},title:"硬件相关"},["/hardware/index.html","/hardware/README.md"]],["v-43d15734","/hardware/structure.html",{y:"a",d:"2020-06-05T00:00:00.000Z",l:"2020年6月5日",c:["硬件"],e:`<p>CPU 内部已经含有一些微指令，我们所使用的软件都要经过 CPU 内部的微指令集来达成才行。那这些指令集的设计主要又被分为两种设计理念，这就是目前世界上常见到的两种主要 CPU 架构，分别是: 精简指令集(RISC)与复杂指令集(CISC) 系统。</p>
<h2> 精简指令集</h2>
<p>精简指令集，(Reduced Instruction Set Computer, RISC) 的设计中，微指令集较为精简。每个指令的执行时间都很短，完成的动作也很单纯，指令的执行性能较佳；但是若要做复杂的事情，就要由多个指令来完成。常见的 RISC 微指令集 CPU 主要例如甲骨文(Oracle) 公司的 SPARC 系列、IBM 公司的 Power Architecture (包括 PowerPC) 系列、与 ARM 公司(ARM Holdings) 的 ARM CPU 系列等。</p>`,r:{minutes:3.07,words:921},title:"CPU 的架构"},["/hardware/structure","/hardware/structure.md"]],["v-f0383c18","/linux/",{y:"a",d:"2019-11-15T00:00:00.000Z",l:"2019年11月15日",c:["Linux"],e:`<h2> Linux 教程</h2>
<ul>
<li>
<p><a href="/linux/intro/" target="blank">Linux 介绍</a></p>
<ul>
<li>
<p><a href="/linux/intro/intro.html" target="blank">Linux 介绍</a></p>
</li>
<li>
<p><a href="/linux/intro/history.html" target="blank">Linux 历史</a></p>
</li>
<li>
<p><a href="/linux/intro/language.html" target="blank">Linux 编写语言</a></p>
</li>
<li>
<p><a href="/linux/intro/advantage.html" target="blank">Linux 优势</a></p>
</li>
<li>
<p><a href="/linux/intro/desktop.html" target="blank">Linux 桌面环境</a></p>
</li>
</ul>
</li>
<li>
<p><a href="/linux/file/" target="blank">Linux 文件</a></p>
<ul>
<li>
<p><a href="/linux/file/file.html" target="blank">Linux 文件</a></p>
</li>
<li>
<p><a href="/linux/file/dir.html" target="blank">Linux 目录</a></p>
</li>
<li>
<p><a href="/linux/file/mount.html" target="blank">挂载</a></p>
</li>
</ul>
</li>
<li>
<p><a href="/linux/command/" target="blank">Linux 命令</a></p>
<ul>
<li>
<p><a href="/linux/command/command.html" target="blank">命令格式简介</a></p>
</li>
<li>
<p><a href="/linux/command/dir.html" target="blank">目录相关</a></p>
</li>
<li>
<p><a href="/linux/command/file.html" target="blank">文件相关</a></p>
</li>
<li>
<p><a href="/linux/command/other.html" target="blank">其他命令</a></p>
</li>
<li>
<p><a href="/linux/command/add.html" target="blank">命令的自动补全</a></p>
</li>
<li>
<p><a href="/linux/command/excu.html" target="blank">命令的执行</a></p>
</li>
<li>
<p><a href="/linux/command/path.html" target="blank">环境变量</a></p>
</li>
<li>
<p><a href="/linux/command/ln.html" target="blank">创建链接</a></p>
</li>
</ul>
</li>
</ul>`,r:{minutes:.49,words:146},title:"Linux",i:"linux"},["/linux/index.html","/linux/README.md"]],["v-6441b3dd","/linux/WSL.html",{y:"a",d:"2019-11-23T00:00:00.000Z",l:"2019年11月23日",c:["Linux"],e:`<p>WSL 可以直接在 Windows 系统上安装并运行 Linux。目前最新的版本是 WSL2。</p>
`,r:{minutes:.27,words:82},title:"WSL",i:"api"},["/linux/WSL","/linux/WSL.md"]],["v-b0e7af4e","/linux/centos.html",{y:"a",d:"2019-11-23T00:00:00.000Z",l:"2019年11月23日",c:["Linux"],e:`<h2> 管理工具</h2>
<ul>
<li>yum (Centos 7)</li>
<li>dnf (Centos 8)</li>
</ul>
<h2> yarn</h2>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--silent</span> <span class="token parameter variable">--location</span> https://dl.yarnpkg.com/rpm/yarn.repo <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/yum.repos.d/yarn.repo

<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token function">yarn</span>
<span class="token comment">## OR ##</span>
<span class="token function">sudo</span> dnf <span class="token function">install</span> <span class="token function">yarn</span>
</code></pre></div>`,r:{minutes:.19,words:56},title:"CentOS 教程",i:"centos"},["/linux/centos","/linux/centos.md"]],["v-e51c9476","/linux/ssh.html",{y:"a",d:"2019-11-23T00:00:00.000Z",l:"2019年11月23日",c:["基础"],e:`<h2> 使用密码登录</h2>
<ol>
<li>
<p>执行以下命令，连接 Linux 云服务器。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>@<span class="token operator">&lt;</span>hostname or IP address<span class="token operator">&gt;</span>
</code></pre></div><ul>
<li>username 即为前提条件中获得的默认帐号。</li>
<li>hostname or IP address 为您的 Linux 实例公网 IP 或自定义域名。</li>
</ul>
</li>
<li>
<p>输入已获取的密码，按 Enter，即可完成登录。</p>
</li>
</ol>`,r:{minutes:.8,words:240},title:"ssh",i:"mount"},["/linux/ssh","/linux/ssh.md"]],["v-1b231b89","/math/differential-equation.html",{y:"a",d:"2021-05-19T00:27:40.000Z",e:`<h2> 概念</h2>
<ul>
<li>
<p>微分方程表示未知函数，未知函数的导数与自变量之间的关系的方程。</p>
</li>
<li>
<p>阶: 未知函数的最高阶的导数叫阶数</p>
</li>
<li>
<p>一般形式: <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.138em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7519em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">…</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mathnormal mtight">n</span><span class="mclose mtight">)</span></span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></p>
<p>如果最高阶导数可以被解出，则有 <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0824em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mathnormal mtight">n</span><span class="mclose mtight">)</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.138em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7519em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">…</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></p>
</li>
<li>
<p>解: 找到令方程变为恒等式的函数</p>
</li>
<li>
<p>通解: 解中含有任意常数，且常数的个数与阶数相同</p>
</li>
<li>
<p>初值条件: 给出特定 <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 下， <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0824em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7519em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">…</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mathnormal mtight">n</span><span class="mclose mtight">)</span></span></span></span></span></span></span></span></span></span></span></span> 的值，此时求出的解为该条件下的特解。</p>
</li>
<li>
<p>可分离变量: 形如 <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mord mathnormal">d</span><span class="mord mathnormal">x</span></span></span></span> 的形式</p>
<p>如果 <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span>, <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span></span></span></span> 连续，且有 <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel"><span class="mord vbox"><span class="thinbox"><span class="rlap"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="inner"><span class="mord"><span class="mrel"></span></span></span><span class="fix"></span></span></span></span></span></span><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>，则可以积分出 <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">G</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span></span></span></span></p>
<p>令 <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathit">Φ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.526em;vertical-align:-0.936em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.59em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">G</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6779em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.74em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7519em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.936em;"><span></span></span></span></span></span><span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.526em;vertical-align:-0.936em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.59em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.74em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.936em;"><span></span></span></span></span></span><span></span></span></span></span></span>，则 <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathit">Φ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span> 即为通解。</p>
</li>
<li>
<p>齐次方程: 可化为</p>
</li>
</ul>`,r:{minutes:.72,words:217},title:"微分方程"},["/math/differential-equation","/math/differential-equation.md"]],["v-15054f24","/note/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["随笔"],u:9,e:`<p>这里是 Mr.Hope 的一些随笔，后续被整理进博客中。</p>
<h2> 四季</h2>
<div class="custom-container tip">
<p class="custom-container-title">介绍</p>
<p>这是我在高一写的散文诗集，最初发表在空间日志上。</p>
<p>后续也写了一些诗补充了进去，其中以 “秋之思” 篇幅最多</p>
<p>近日将其作为少年回忆，整理在博客中。</p>
</div>
<ul>
<li>
<p><a href="/note/fall/catalog.html" target="blank">秋之思</a></p>
</li>
<li>
<p><a href="/note/winter/note.html" target="blank">冬之语</a></p>
</li>
<li>
<p><a href="/note/spring/1.html" target="blank">春之诗</a></p>
</li>
<li>
<p><a href="/note/summer/1.html" target="blank">夏之歌</a></p>
</li>
</ul>`,r:{minutes:.83,words:250},title:"Mr.Hope 的随笔",i:"note"},["/note/index.html","/note/README.md"]],["v-c896667e","/physics/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["物理"],u:4,e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/physics/electromagnetism/" target="blank">电磁学</a></p>
</li>
<li>
<p><a href="/physics/optism/" target="blank">光学</a></p>
</li>
<li>
<p><a href="/physics/tsp/" target="blank">热力学与统计物理</a></p>
</li>
<li>
<p><a href="/physics/quatum/" target="blank">量子力学</a></p>
</li>
</ul>`,r:{minutes:.13,words:39},title:"物理笔记"},["/physics/index.html","/physics/README.md"]],["v-f785aee2","/software/",{y:"a",d:"2022-02-06T16:01:38.000Z",u:9,e:`<h2> 代码编辑器</h2>
<ul>
<li><a href="/software/editor.html" target="blank">编辑器介绍</a></li>
</ul>
<h2> 团队协作</h2>
<p>开发项目的代码版本管理以及多人协作使用 Git 软件</p>
<ul>
<li>
<p><a href="/software/git/" target="blank">Git 教程</a></p>
</li>
<li>
<p><a href="/code/github/" target="blank">GitHub 介绍</a></p>
</li>
</ul>
<h2> 浏览器</h2>`,r:{minutes:.83,words:250},title:"软件教程",i:"software"},["/software/index.html","/software/README.md"]],["v-431ba45c","/software/apache.html",{y:"a",d:"2019-12-12T00:00:00.000Z",l:"2019年12月12日",c:["服务器"],e:`<p>Apache 是世界使用排名第一的 Web 服务器软件。它可以运行在几乎所有广泛使用的计算机平台上，由于其跨平台和安全性被广泛使用，是最流行的 Web 服务器端软件之一。它快速、可靠并且可通过简单的 API 扩充，将 Perl/Python 等解释器编译到服务器中。</p>
`,r:{minutes:2.39,words:716},title:"Apache",i:"Apache"},["/software/apache","/software/apache.md"]],["v-eb9bbaa0","/software/chrome.html",{y:"a",d:"2019-12-13T00:00:00.000Z",l:"2019年12月13日",c:["软件"],e:`<p>Chrome 是谷歌出品的浏览器。其内核使用 Chromium，基于 JavaScript V8，是全球比例最大的浏览器内核。</p>
`,r:{minutes:1.87,words:561},title:"Chrome",i:"chrome"},["/software/chrome","/software/chrome.md"]],["v-33cf339d","/software/editor.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["软件"],g:["编辑器"],e:`<ul>
<li>
<p><a href="/software/vscode/" target="blank">VS Code</a></p>
<p>VS Code 的全称是 Visual Studio Code，是一款开源的、免费的、跨平台的、高性能的、轻量级的代码编辑器。它在性能、语言支持、开源社区方面，都做的很不错。</p>
<p>VS Code 具有最大的编辑器社区，插件是所有编辑器里最全的。可以通过安装扩展实现几乎所有的功能，但扩展设置界面对新手不够友好，适合有一定经验的开发者。</p>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>推荐使用轻量的 Visual Studio Code。</p>
</div>
</li>
<li>
<p>其他代码编辑器</p>
<p>在不同领域的开发者可能会偏向不同种类的开发工具。下面列举其他常见的代码编辑器。</p>
<ul>
<li>WebStorm 是专业的 web 开发工具，提供格式化、代码补全等选项。</li>
<li>PhpStorm 是专业的 php 开发工具，提供格式化、代码补全等选项。</li>
<li><a href="https://notepad-plus-plus.org/" target="_blank" rel="noopener noreferrer">notepad++</a></li>
<li><a href="https://atom.io/" target="_blank" rel="noopener noreferrer">atom</a></li>
<li><a href="https://www.sublimetext.com/3" target="_blank" rel="noopener noreferrer">sublime text</a></li>
</ul>
</li>
</ul>`,r:{minutes:1.38,words:415},title:"代码编辑器",i:"editor"},["/software/editor","/software/editor.md"]],["v-6eec2164","/software/nginx.html",{y:"a",d:"2019-12-13T00:00:00.000Z",l:"2019年12月13日",c:["服务器"],e:`<p>Nginx 是一个高性能的 HTTP 和反向代理服务器，也是一个 IMAP / POP3 / SMTP 代理服务器。其特点是占有内存少，并发能力强，稳定性高，并且 Nginx 也拥有友好灵活的配置。</p>
`,r:{minutes:6.99,words:2097},title:"Nginx",i:"nginx"},["/software/nginx","/software/nginx.md"]],["v-bb42b324","/software/postman.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> Postman</h1>
<p>Postman 是一个强大的抓包与网络调试工具。</p>
`,r:{minutes:.06,words:17},title:"Postman"},["/software/postman","/software/postman.md"]],["v-76327349","/code/Android/",{title:"Android 开发",i:"android"},["/code/Android/index.html","/code/Android/README.md"]],["v-cc57f902","/code/Android/base.html",{y:"a",d:"2020-04-08T00:00:00.000Z",l:"2020年4月8日",c:["Android"],g:["快速上手"],e:`<p>本章包含了一些关于 Android 开发的基础内容。</p>
`,r:{minutes:20.04,words:6013},title:"应用基础知识",i:"creative"},["/code/Android/base","/code/Android/base.md"]],["v-26ea7e3c","/code/Android/resource.html",{y:"a",d:"2020-04-09T00:00:00.000Z",l:"2020年4月9日",c:["Android"],e:`<p>资源是指代码使用的附加文件和静态内容，例如位图、布局定义、界面字符串、动画说明等。</p>
`,r:{minutes:3.9,words:1171},title:"应用资源概览",i:"tree"},["/code/Android/resource","/code/Android/resource.md"]],["v-779f6616","/code/angular/",{y:"a",d:"2020-05-06T00:00:00.000Z",l:"2020年5月6日",c:["前端"],g:["Angular"],e:`<p>Angular 是 Google 官方在 2016 年 9 月出品的一款框架。</p>
<p>框架强制 Typescript，更倾向于大型项目。</p>
`,r:{minutes:1.44,words:433},title:"Angular",i:"angular"},["/code/angular/index.html","/code/angular/README.md"]],["v-3bf9bd1e","/code/back-end/",{y:"a",d:"2019-09-10T00:00:00.000Z",l:"2019年9月10日",c:["后端"],e:`<h2> 后端入门</h2>
<h3> PHP</h3>
<p>PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言，免费，并且使用非常广泛。PHP (全称 Hypertext Preprocessor，即超文本预处理器)是一种通用开源脚本语言。</p>
<p>PHP 手册:</p>
<ul>
<li>
<p><a href="http://www.w3school.com.cn/php/index.asp" target="_blank" rel="noopener noreferrer">W3School 教程</a></p>
</li>
<li>
<p><a href="https://www.runoob.com/php/php-tutorial.html" target="_blank" rel="noopener noreferrer">菜鸟教程</a></p>
</li>
</ul>`,r:{minutes:.75,words:226},title:"后端开发",i:"back-stage"},["/code/back-end/index.html","/code/back-end/README.md"]],["v-06c910ec","/code/basic/",{y:"a",d:"2019-12-26T00:00:00.000Z",l:"2019年12月26日",c:["基础"],e:`<p>这些是一些最为基础的内容，是后来补充进博客中的，供访客查阅。</p>
`,r:{minutes:.33,words:100},title:"基础介绍",i:"module"},["/code/basic/index.html","/code/basic/README.md"]],["v-f59c452e","/code/basic/ci.html",{y:"a",d:"2021-02-18T00:00:00.000Z",l:"2021年2月18日",c:["基础"],e:`<p>持续集成 (Continuous Integration) 指的是，频繁地 (一天多次) 将代码集成到主干，每次集成都通过自动化的构建 (包括编译，发布，自动化测试) 来验证，从而尽早地发现集成错误。</p>
<p>持续集成的目的让产品可以快速迭代，同时还能保持高质量。就是说每完成一个完整的部分，就向下个环节交付，发现问题可以马上调整，使得问题不会放大到其他部分和后面的环节。</p>
`,r:{minutes:4.58,words:1375},title:"持续集成",i:"ci"},["/code/basic/ci","/code/basic/ci.md"]],["v-79b2d958","/code/basic/computer.html",{y:"a",d:"2019-12-26T00:00:00.000Z",l:"2019年12月26日",c:["基础"],e:`<p>计算机是一台机器，它按照用户的要求接收信息、存储数据、处理数据，然后再将处理结果输出(文字、图片、音频、视频等)。</p>
<p>计算机的核心就是: 接受使用者输入指令与资料，经由中央处理器的数学与逻辑单元运算处理后，以产生或储存成有用的资讯。</p>
`,r:{minutes:2.07,words:622},title:"计算机",i:"computer"},["/code/basic/computer","/code/basic/computer.md"]],["v-58d3b970","/code/basic/debug.html",{y:"a",d:"2019-12-27T00:00:00.000Z",l:"2019年12月27日",c:["基础"],e:`<p>开发是根据用户要求建造出合理程序的过程。过程一般是用某种程序设计语言来实现的。通常采用开发工具可以进行开发。</p>
`,r:{minutes:3.59,words:1078},title:"开发简介",i:"debug"},["/code/basic/debug","/code/basic/debug.md"]],["v-4d5d081c","/code/basic/encoding.html",{y:"a",d:"2019-12-27T00:00:00.000Z",l:"2019年12月27日",c:["基础"],e:`<p>计算机，不能直接存储文字，存储的是编码。</p>
<p>计算机只能处理二进制的数据，也就是说计算机只能处理数字。如果要处理文本，比如: <code>0-9</code>、<code>a-z</code>、<code>A-Z</code>，就必须先把文本转换为数字才能处理。对于这些字符，可以定义一套规则来显示，比如: <code>A</code> 用 <code>110</code> 表示，<code>B</code> 用 <code>111</code> 表示等。</p>
`,r:{minutes:5.77,words:1732},title:"计算机编码介绍",i:"number"},["/code/basic/encoding","/code/basic/encoding.md"]],["v-690f86be","/code/basic/file-extension.html",{y:"a",d:"2019-12-26T00:00:00.000Z",l:"2019年12月26日",c:["基础"],e:`<h2> 文件名</h2>
<p>文件名就是文件的名称，是为了方便人们区分计算机中的不同文件，而给每个文件设定一个指定的名称。</p>
<p>文件名不能包含控制字符: <code>&lt;</code> <code>&gt;</code> <code>/</code> <code>\\</code> <code>|</code> <code>:</code> <code>"</code> <code>*</code> <code>?</code></p>
<h2> 文件扩展名</h2>
<p>文件扩展名 (filename extension) 也称为文件的延伸文件名、后缀名，是操作系统用来标记文件类型的一种机制。通常来说，一个扩展名是跟在主文件名后面的，由一个分隔符分隔。</p>`,r:{minutes:1.41,words:423},title:"文件名与文件扩展名",i:"file"},["/code/basic/file-extension","/code/basic/file-extension.md"]],["v-2d7e4bd2","/code/basic/glob.html",{y:"a",a:"陈慧玲",d:"2021-02-18T00:00:00.000Z",l:"2021年2月18日",c:["基础"],e:`<p>本文介绍 Glob 匹配。</p>
`,r:{minutes:1.66,words:497},title:"Glob",i:"regexp"},["/code/basic/glob","/code/basic/glob.md"]],["v-77ae947c","/code/basic/license.html",{y:"a",d:"2019-12-27T00:00:00.000Z",l:"2019年12月27日",c:["基础"],e:`<p>开源软件在追求“自由”的同时，不能牺牲程序员的利益，否则将会影响程序员的创造激情，因此世界上现在有 60 多种被开源促进组织 (Open Source Initiative) 认可的开源许可协议来保证开源工作者的权益。</p>
<p>开源协议规定了您在使用开源软件时的权利和责任，也就是规定了您可以做什么，不可以做什么。</p>
<p>开源协议虽然不一定具备法律效力，但是当涉及软件版权纠纷时，开源协议也是非常重要的证据之一。</p>
`,r:{minutes:5.26,words:1578},title:"开源协议",i:"license"},["/code/basic/license","/code/basic/license.md"]],["v-78befac4","/code/basic/open-source-and-free.html",{y:"a",d:"2020-06-05T00:00:00.000Z",l:"2020年6月5日",c:["基础"],e:`<p>开源软件和免费软件是两个概念:</p>
<ul>
<li>
<p>开源软件是指公开源代码的软件。开源软件在发行的时候会附上软件的源代码，并授权允许用户更改、传播或者二次开发。</p>
</li>
<li>
<p>免费软件就是免费提供给用户使用的软件，但是在免费的同时，通常也会有一些限制，比如源代码不公开，用户不能随意修改、不能二次发布等。</p>
</li>
</ul>
`,r:{minutes:5.53,words:1660},title:"开源与免费",i:"compare"},["/code/basic/open-source-and-free","/code/basic/open-source-and-free.md"]],["v-110d1aab","/code/basic/os.html",{y:"a",d:"2019-12-26T00:00:00.000Z",l:"2019年12月26日",c:["基础"],e:`<p>操作系统 (Operating System，OS) 是软件的一部分，它是硬件基础上的第一层软件，是硬件和其它软件沟通的桥梁(或者说接口、中间人、中介等)。</p>
`,r:{minutes:1.76,words:527},title:"操作系统",i:"OS"},["/code/basic/os","/code/basic/os.md"]],["v-888fe0ec","/code/basic/path.html",{y:"a",d:"2019-09-20T00:00:00.000Z",l:"2019年9月20日",c:["基础"],e:`<p>无论是我们想直接访问一个文件，还是在一个文件中希望访问另一个文件，都涉及到一个获取文件的操作。而无论是在 Windows 中还是在 Linux 中，文件的具体位置都用文档的路径标注。</p>
<p>路径常常涉及到物理路径，相对路径，绝对路径，根目录的概念，现加以说明。</p>
`,r:{minutes:2.98,words:895},title:"路径",i:"navigation"},["/code/basic/path","/code/basic/path.md"]],["v-a5f157fa","/code/github/",{y:"a",d:"2019-11-20T00:00:00.000Z",l:"2019年11月20日",c:["GitHub"],e:`<h2> 快速上手</h2>
<ul>
<li>
<p><a href="/code/github/intro.html" target="blank">GitHub 介绍</a></p>
</li>
<li>
<p><a href="/code/github/pr.html" target="blank">Pull Request</a></p>
</li>
<li>
<p><a href="/code/github/semantic.html" target="blank">语义化提交</a></p>
</li>
<li>
<p><a href="/code/github/pages.html" target="blank">GitHub Pages</a></p>
</li>
<li>
<p><a href="/code/github/speedup.html" target="blank">利用 Gitee 加速 GitHub 克隆</a></p>
</li>
</ul>`,r:{minutes:2.51,words:753},title:"GitHub",i:"github"},["/code/github/index.html","/code/github/README.md"]],["v-1637646f","/code/github/deploy.html",{y:"a",d:"2021-02-18T11:00:54.000Z",c:["GitHub"],g:["Git","deploy"],e:`<p>本文介绍如何利用 Git 和 GitHub Action，自动部署代码到服务器。</p>
`,r:{minutes:4.25,words:1276},title:"自动部署",i:"network"},["/code/github/deploy","/code/github/deploy.md"]],["v-61d56a30","/code/github/intro.html",{y:"a",d:"2019-11-20T00:00:00.000Z",l:"2019年11月20日",c:["GitHub"],g:["介绍"],e:`<h2> <s>Gayhub</s> GitHub 是世界上最大的 <s>同性交友</s> 代码托管网站</h2>
<p>😋当然在上面交友也是极好的(这是重点，圈起来要考的😎)。</p>
<h2> 基本概念</h2>
<h3> Repository</h3>
<p>仓库。一个仓库即是一个项目。仓库是 GitHub 上的主要内容。每当您新建一个项目并想要在 GitHub。</p>
<h3> Star</h3>
<p>收藏。在每一个仓库主页的上方可以看到 star 按钮。其上的数值为收藏该项目的人数。点击星星即可将当前仓库收藏到您的账号上。您可以收藏一些您比较喜欢，或者项目对您来说有很大价值的项目。同时，点击数字可以看到哪些人收藏了这个项目。</p>`,r:{minutes:5.41,words:1624},title:"GitHub 简介",i:"info"},["/code/github/intro","/code/github/intro.md"]],["v-cdde1050","/code/github/pages.html",{y:"a",d:"2021-02-20T00:00:00.000Z",l:"2021年2月20日",c:["GitHub"],e:`<p>GitHub Pages 是静态站点托管服务，可直接从 GitHub 上的存储库中获取 HTML，CSS 和 JavaScript 文件，还可以选择在构建过程中运行这些文件并发布网站。</p>
<p>您可以将站点托管在 GitHub 的 <code>github.io</code> 域名或您自己的自定义域名上。</p>
`,r:{minutes:3.07,words:920},title:"GitHub Pages",i:"page"},["/code/github/pages","/code/github/pages.md"]],["v-1d1d5298","/code/github/pr.html",{y:"a",d:"2021-02-18T00:00:00.000Z",l:"2021年2月18日",c:["GitHub"],e:`<h2> 简介</h2>
<p>对于一个用户的公开仓库，在默认情况下虽然其他用户可以拉取该库的代码，但是他们并不能够直接向这个库进行推送。</p>
<p>GitHub 是一个代码社区，这意味着鼓励大家互相提交与贡献代码。所以这就是 Fork 和 Pull Request 出现的意义。没有人会给一个陌生人添加访问自己仓库的权限，所以我们需要一种方式，能够让大家向仓库所有者发起贡献代码的请求。这就是 pull request 的由来。</p>
<h2> 提交自己贡献的代码</h2>
<p>对于代码贡献者来说，他需要用一种方法将自己贡献的代码推送到远程库上，以便发起请求，最好的办法就是 fork 原仓库。</p>`,r:{minutes:3.3,words:989},title:"Pull Request",i:"merge"},["/code/github/pr","/code/github/pr.md"]],["v-aa6ff0a0","/code/github/semantic.html",{y:"a",d:"2021-02-18T11:00:54.000Z",c:["GitHub"],e:`<h2> Semantic</h2>
<p>对于一个大型项目，几千个 commit 是很常见的，这些 commit 部分是项目维护者提交的 commit，部分是一些热心的开发者通过 PR 贡献的。</p>
<p>无论是对于项目维护者，还是想要贡献代码的热心开发者来说，一个简洁明了的 commit 描述都是必不可少的。也就是说我们需要用尽可能简短的备注信息，备注每一个 commit 的作用，以便大家查看。所以我们需要一种规范的，语义化的备注格式，很快由知名项目牵头，全球接收并统一了一种语义化的备注格式，这就是 semantic 规范的来源。</p>
<h2> 优势</h2>
<p>当一个仓库所有的 commit 信息都是用标准的 semantic 格式时，用户可以很方便的理解每一个 commit 的作用。</p>`,r:{minutes:2.64,words:793},title:"语义化提交",i:"semantic"},["/code/github/semantic","/code/github/semantic.md"]],["v-200df47a","/code/github/speedup.html",{y:"a",d:"2021-02-18T00:00:00.000Z",l:"2021年2月18日",c:["GitHub"],e:`<p>由于天朝墙的存在，GitHub 的访问速度在大部分国内地区都很慢。如果需要克隆体积比较大的项目，可能需要很长时间，也很大概率会在中途因为网络波动、终端问题导致克隆失败。</p>
<p>本文介绍如何使用 Gitee 加快 GitHub 项目克隆。</p>
<h2> Gitee</h2>
<p>Gitee 又称码云，是一个国内的代码托管商，国内访问 Gitee 的速度是十分 Amazing 的。</p>
<h3> 注册</h3>
<p>Gitee 账户可以很方便的通过 GitHub 账户 + 绑定手机号注册。</p>
<h3> 添加公钥</h3>
<p>完成注册后，您需要上传本地公钥，以保证可以从 Gitee 上拉取或克隆，其步骤与 GitHub 大致相同。</p>`,r:{minutes:1.73,words:519},title:"加速 GitHub 克隆",i:"speed"},["/code/github/speedup","/code/github/speedup.md"]],["v-1cf146c3","/code/github/token.html",{y:"a",d:"2021-02-18T11:00:54.000Z",c:["GitHub"],e:`<p>Personal Access Token (PAT)，又称个人访问令牌，是一种代替密码进行 GitHub 身份认证的方式。</p>
`,r:{minutes:.51,words:154},title:"GitHub Token",i:"token"},["/code/github/token","/code/github/token.md"]],["v-20955d24","/code/language/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["教程"],e:`<ul>
<li><a href="/code/language/learning.html" target="blank">如何学习一门语言</a></li>
</ul>
<h2> 教程目录</h2>
<ul>
<li>
<p><a href="/code/language/js/" target="blank">JavaScript 教程</a></p>
</li>
<li>
<p><a href="/code/language/typescript/" target="blank">TypeScript 教程</a></p>
</li>
<li>
<p><a href="/code/language/python/" target="blank">Python 教程</a> (编写中...)</p>
</li>
<li>
<p><a href="https://www.liaoxuefeng.com/wiki/1252599548343744" target="_blank" rel="noopener noreferrer">Java 教程</a>(廖雪峰的博客)</p>
</li>
<li>
<p><a href="/code/language/markdown/" target="blank">Markdown 教程</a></p>
</li>
<li>
<p><a href="/code/language/yaml/" target="blank">YAML 教程</a></p>
</li>
<li>
<p><a href="/code/language/json/" target="blank">JSON 教程</a></p>
</li>
</ul>`,r:{minutes:.3,words:91},title:"代码学习教程",i:"read"},["/code/language/index.html","/code/language/README.md"]],["v-5b2dfc66","/code/language/learning.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["教程"],g:["快速上手"],e:`<h1> 如何学习一门计算机语言</h1>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>学习一门语言的基本顺序是:</p>
<ul>
<li>了解数据结构</li>
<li>了解变量声明与赋值</li>
<li>了解判断和循环体结构</li>
<li>了解函数声明</li>
<li>了解输入输出</li>
</ul>
<p>本部分将以 JS 作为示例，展示什么是一门计算机语言，应该如何学习它们。</p>
</div>
<h2> 基础</h2>
<p>首先，任何语言都是由一些基本结构组成的，下面介绍几乎所有语言共有的一些概念:</p>`,r:{minutes:4.86,words:1457},title:"如何学习一门计算机语言",i:"ask"},["/code/language/learning","/code/language/learning.md"]],["v-7b13410a","/code/mini-app/",{y:"a",d:"2019-11-25T00:00:00.000Z",l:"2019年11月25日",c:["小程序"],e:`<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>在开发小程序之前。应当掌握 <a href="/code/website/html/" target="blank">HTML</a>、<a href="/code/website/css/" target="blank">CSS</a>、<a href="/code/language/js/guide/" target="blank">JavaScript 基础</a> 以及 <a href="/code/language/js/es6/" target="blank">ES6</a>。</p>
</div>
`,r:{minutes:3.04,words:912},title:"小程序",i:"mini-app"},["/code/mini-app/index.html","/code/mini-app/README.md"]],["v-5819b95b","/code/mini-app/qr-code.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<h2> 二维码生成</h2>
<p>目前小程序二维码生成选用的是<a href="https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.getUnlimited.html" target="_blank" rel="noopener noreferrer">无限制生成二维码</a>。</p>
<p>我们使用 Postman 软件进行二维码的获取。</p>
<h3> 调用凭据获取</h3>
<p>获取任何二维码都需要先获取 <code>access_token</code>，这是小程序全局唯一后台接口调用凭据。<a href="https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html" target="_blank" rel="noopener noreferrer">文档地址</a></p>`,r:{minutes:1.19,words:358},title:"小程序分享",i:"share"},["/code/mini-app/qr-code","/code/mini-app/qr-code.md"]],["v-264f3578","/code/node-js/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["Node.js"],g:["Node.js","软件"],e:`<p>Node.js 是一款全球使用广泛的框架，可以用在前端与后端上，拥有大量的模块。Node.js 主要以其丰富并及其容易导入的 Node.js package，以及其方便管理 npm (Node.js Package Manager)闻名。</p>
`,r:{minutes:1.21,words:363},title:"Node.js",i:"nodeJS"},["/code/node-js/index.html","/code/node-js/README.md"]],["v-5d9f569e","/code/node-js/cjs.html",{y:"a",d:"2022-06-14T04:47:46.000Z",c:["Node.js"],g:["Node.js","软件"],e:`<p>在计算机程序的开发过程中，随着程序代码越写越多，在一个文件里代码就会越来越长，越来越不容易维护。</p>
<p>为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里，这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。在 Node.js 环境中，一个 <code>.js</code> 文件就称之为一个模块(module)。</p>
<p>使用模块有什么好处?</p>
<p>最大的好处是大大提高了代码的可维护性。其次，编写代码不必从零开始。当一个模块编写完毕，就可以被其他地方引用。我们在编写程序的时候，也经常引用其他模块，包括 Node.js 内置的模块和来自第三方的模块。</p>
<p>使用模块还可以避免函数名和变量名冲突。相同名字的函数和变量完全可以分别存在不同的模块中，因此，我们自己在编写模块时，不必考虑名字会与其他模块冲突。</p>
`,r:{minutes:7.39,words:2218},title:"模块",i:"module"},["/code/node-js/cjs","/code/node-js/cjs.md"]],["v-647e802c","/code/node-js/environment.html",{y:"a",d:"2021-01-27T11:33:27.000Z",c:["Node.js"],g:["Node.js","软件"],e:`<p>由于 Node.js 需要编码、运行、调试，我们需要一个 IDE 集成开发环境，这样就可以大大提升开发效率。综合考察后，Mr.Hope 隆重向大家推荐 Node.js 集成开发环境: <strong>Visual Studio Code</strong>。它启动速度快，执行简单，调试方便这三点上。当然，免费使用是一个加分项。</p>
`,r:{minutes:1.21,words:362},title:"搭建 Node 开发环境",i:"leaf"},["/code/node-js/environment","/code/node-js/environment.md"]],["v-285ff93c","/code/node-js/install.html",{y:"a",d:"2021-01-27T11:33:27.000Z",c:["Node.js"],g:["Node.js","软件","安装"],e:`<p>由于 Node.js 平台是在后端运行 JavaScript 代码，所以，必须首先在本机安装 Node.js 环境。</p>
`,r:{minutes:4.15,words:1244},title:"安装 Node.js",i:"install"},["/code/node-js/install","/code/node-js/install.md"]],["v-6352c39e","/code/node-js/intro.html",{y:"a",d:"2021-01-27T11:33:27.000Z",c:["Node.js"],g:["Node.js","软件","介绍"],e:`<p>从本章开始，我们就正式开启 JavaScript 的后端开发之旅。</p>
<p>Node.js 是目前非常火热的技术，但是它的诞生经历却很奇特。</p>
`,r:{minutes:4.21,words:1263},title:"Node.js",i:"creative"},["/code/node-js/intro","/code/node-js/intro.md"]],["v-833997ce","/code/node-js/program.html",{y:"a",d:"2021-01-27T11:33:27.000Z",c:["Node.js"],g:["Node.js","软件"],e:`<p>在前面的所有章节中，我们编写的 JavaScript 代码都是在浏览器中运行的，因此，我们可以直接在浏览器中敲代码，然后直接运行。</p>
<p>从本章开始，我们编写的 JavaScript 代码将不能在浏览器环境中执行了，而是在 Node.js 环境中执行，因此，JavaScript 代码将直接在您的计算机上以命令行的方式运行，所以，我们要先选择一个文本编辑器来编写 JavaScript 代码，并且把它保存到本地硬盘的某个目录，才能够执行。</p>
`,r:{minutes:3.96,words:1188},title:"第一个 Node 程序",i:"shell"},["/code/node-js/program","/code/node-js/program.md"]],["v-18191c59","/code/react/",{y:"a",d:"2020-05-08T00:00:00.000Z",l:"2020年5月8日",c:["前端"],g:["网页","React"],e:`<h2> 创建 React 项目</h2>
<p>使用 <code>create-react-app</code> 工具。</p>
<p>创建普通模板:</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx create-react-app xxx
</code></pre></div><p>创建 TS 模板:</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx create-react-app xxx <span class="token parameter variable">--template</span> typescript
</code></pre></div>`,r:{minutes:.24,words:73},title:"React",i:"react"},["/code/react/index.html","/code/react/README.md"]],["v-8eb7e91c","/code/vue/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["基础"],e:`<p>Vue.js 是世界上主流的前端框架。</p>
<p>官方介绍为：渐近式 JavaScript 框架。一款用于构建 Web 界面，易学易用，性能出色且功能丰富的框架。</p>
<h2> Vue.js 教程目录</h2>
<ul>
<li>
<p><a href="/code/vue/install.html" target="blank">开发环境安装</a></p>
</li>
<li>
<p><a href="/code/vue/get-started.html" target="blank">起步上手</a></p>
</li>
<li>
<p><a href="/code/vue/vue.html" target="blank">Vue 单文件组件说明</a></p>
</li>
</ul>`,r:{minutes:1.34,words:402},title:"Vue.js",i:"vue"},["/code/vue/index.html","/code/vue/README.md"]],["v-837c88f4","/code/vue/compare.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["Vue"],g:["Vue","小程序","对比"],e:`<p>Vue-cli 提供的 vue 单文件语法与小程序基本相似，甚至可以说小程序是改变自 Vue 与 React 框架的。</p>
`,r:{minutes:3.32,words:995},title:"Vue 与小程序的异同",i:"compare"},["/code/vue/compare","/code/vue/compare.md"]],["v-ec405424","/code/vue/component.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["Vue"],g:["文档"],e:`<p>Mr.Hope 已为 inNENU Website 开发了一些常规组件。本文介绍了这些组件的配置。</p>
`,r:{minutes:4.89,words:1468},title:"组件使用说明",i:"plugin"},["/code/vue/component","/code/vue/component.md"]],["v-76da7cfe","/code/vue/get-started.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["Vue"],g:["快速上手","基础"],e:`<h2> Vue.js 是什么</h2>
<h2> 起步</h2>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>您应当已了解关于 HTML、CSS 和 JavaScript 的中级知识。</p>
</div>
<p><a href="https://cn.vuejs.org/guide/quick-start.html" target="_blank" rel="noopener noreferrer">安装</a></p>
<p>尝试 Vue.js 最简单的方法是使用 <a href="https://sfc.vuejs.org/" target="_blank" rel="noopener noreferrer">SFC Playground</a>。您可以在浏览器新标签页中打开它，跟着例子自己进行一些尝试。</p>`,r:{minutes:.7,words:209},title:"快速上手 Vue.js",i:"creative"},["/code/vue/get-started","/code/vue/get-started.md"]],["v-30ddd490","/code/vue/install.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["Vue"],g:["安装","基础"],e:`<h2> 环境准备</h2>
<h3> VS Code 安装</h3>
<ul>
<li><a href="/software/vscode/install.html" target="blank">安装 VS Code</a></li>
</ul>
<h4> 开发指南</h4>
<ol>
<li>
<p>使用 VS Code 打开项目文件夹。</p>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>请打开 VS Code 选择菜单栏中的 “文件-打开文件夹”，或在文件夹上 “右键——使用 VS Code 打开” 或在文件夹内部空白处 “右键——使用 VS Code 打开”。</p>
</div>
</li>
<li>
<p>打开终端(快捷键 <code>Ctrl + \`</code> )。</p>
</li>
<li>
<p>在终端中输入相关指令即可执行相关功能。</p>
</li>
</ol>`,r:{minutes:1.12,words:337},title:"开发环境安装",i:"install"},["/code/vue/install","/code/vue/install.md"]],["v-ec0e16f6","/code/vue/vue.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["Vue"],e:`<h2> 介绍</h2>
<p>Vue 的单文件组件 (即 <code>*.vue</code> 文件，简称 <strong>SFC</strong>) 是一种特殊的文件格式，使我们能够将一个 Vue 组件的模板、逻辑与样式封装在单个文件中。下面是一个单文件组件的示例：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">greeting</span><span class="token operator">:</span> <span class="token string">"Hello World!"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>greeting<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>{{ greeting }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.greeting</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.18,words:1255},title:"Vue 单文件组件",i:"vue"},["/code/vue/vue","/code/vue/vue.md"]],["v-ff88ab06","/code/website/",{y:"a",d:"2019-09-01T00:00:00.000Z",l:"2019年9月1日",c:["前端"],g:["网页","介绍"],e:`<p>网页需要三件套: <strong>HTML</strong>、<strong>CSS</strong> 和 <strong>JavaScript</strong>。</p>
<ol>
<li>HTML 定义了网页的内容</li>
<li>CSS 描述了网页的样式</li>
<li>JavaScript 编写网页的行为</li>
</ol>
`,r:{minutes:2.76,words:829},title:"网页入门",i:"network"},["/code/website/index.html","/code/website/README.md"]],["v-a128f5ea","/code/website/https.html",{y:"a",a:"小灰",d:"2019-11-03T00:00:00.000Z",l:"2019年11月3日",e:`<h2> 什么是 HTTP 协议</h2>
<p>HTTP 协议全称 Hyper Text Transfer Protocol，翻译过来就是超文本传输协议，位于 TCP/IP 四层模型当中的应用层。</p>
<p></p>
<p>HTTP 协议通过 <strong>请求/响应</strong> 的方式，在客户端和服务端之间进行通信。</p>
<p></p>
<p>这一切看起来很美好，但是 HTTP 协议有一个致命的缺点: <strong>不够安全</strong>。</p>
<p>HTTP 协议的信息传输完全以明文方式，不做任何加密，相当于是在网络上“裸奔”。这样会导致什么问题呢? 让我们打一个比方:</p>`,r:{minutes:5.73,words:1718},title:"Http 与 Https 介绍",i:"http"},["/code/website/https","/code/website/https.md"]],["v-7321cfda","/code/website/js.html",{y:"a",d:"2019-09-01T00:00:00.000Z",l:"2019年9月1日",c:["JavaScript"],e:`<h2> 初学者教程</h2>
<ul>
<li><a href="/code/language/js/guide/" target="blank">快速上手</a></li>
</ul>
<h3> JavaScript 手册</h3>
<ul>
<li><a href="/code/language/js/" target="blank">JavaScript 学习教程</a></li>
</ul>
<h3> 在线教程</h3>
<ul>
<li>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">MDN 教程</a></p>
</li>
<li>
<p><a href="http://www.w3school.com.cn/js/index.asp" target="_blank" rel="noopener noreferrer">W3School 教程</a></p>
</li>
<li>
<p><a href="https://www.runoob.com/js/js-tutorial.html" target="_blank" rel="noopener noreferrer">菜鸟教程</a></p>
</li>
</ul>`,r:{minutes:.59,words:177},title:"JavaScript 教程",i:"javascript"},["/code/website/js","/code/website/js.md"]],["v-677e2595","/code/windows/",{y:"a",d:"2019-09-07T00:00:00.000Z",l:"2019年9月7日",c:["基础"],g:["Win10"],e:`<p>以下是有关于 Windows 10 系统的一些基础知识。</p>
`,r:{minutes:.25,words:75},title:"基础知识",i:"windows"},["/code/windows/index.html","/code/windows/README.md"]],["v-ce519718","/code/windows/cmd.html",{y:"a",d:"2019-09-08T00:00:00.000Z",l:"2019年9月8日",c:["基础"],g:["Win10"],e:`<p>打开命令行 (命令提示符) 有多种方式。</p>
<ol>
<li>运行 - cmd: <code>Win + R</code> 打开运行，然后敲入 <code>cmd</code> 后回车。</li>
<li>搜索 - cmd: 点击左下角搜索，输入 cmd，然后单击命令提示符。</li>
<li>开始菜单 - Windows 系统 - 命令提示符。</li>
</ol>
<p>如果想要快速打开特定路径的 cmd，请打开对应的文件夹，在地址栏直接输入 <code>cmd</code> 并回车。</p>
`,r:{minutes:.51,words:154},title:"打开命令行",i:"shell"},["/code/windows/cmd","/code/windows/cmd.md"]],["v-6eab0a08","/code/windows/env-variable.html",{y:"a",d:"2019-09-08T00:00:00.000Z",l:"2019年9月8日",c:["基础"],g:["Win10"],e:`<p>以 Windows 10 系统为例，直接在左下角搜索栏中输入“系统变量”</p>
<p></p>
<p>在弹出的框中点击环境变量</p>
<p></p>
<p>如果你需要添加环境变量，直接添加即可。</p>
<p>如果你只是希望添加到 Path，在弹出的新窗口中找到 path，选中并点击编辑</p>
<p></p>
<p>点击添加输入想要添加到 path 的路径或者执行文件名即可</p>
<p></p>
`,r:{minutes:.49,words:147},title:"环境变量",i:"shell"},["/code/windows/env-variable","/code/windows/env-variable.md"]],["v-9ac8afe2","/code/windows/hidden-file.html",{y:"a",d:"2020-09-15T00:00:00.000Z",l:"2020年9月15日",c:["基础"],g:["Win10"],e:`<p>显示文件后缀名与隐藏文件</p>
<p></p>
`,r:{minutes:.18,words:53},title:"显示文件后缀名与隐藏文件",i:"eye"},["/code/windows/hidden-file","/code/windows/hidden-file.md"]],["v-1595002d","/code/windows/notepad.html",{y:"a",d:"2019-09-07T00:00:00.000Z",l:"2019年9月7日",g:["Win10"],e:`<p>在编写代码的时候，临时的软件选择需要注意。</p>
<p>请注意，绝对不能用 Word 和写字板。Word 和写字板保存的不是纯文本文件。</p>
<p>千万不要使用 Windows 自带的记事本编辑任何文本文件。</p>
<p>原因是 Microsoft 开发记事本的团队使用了一个非常弱智的行为来保存 UTF-8 编码的文件，他们自作聪明地在每个文件开头添加了几个特殊字符(UTF-8 BOM，即 0xefbbbf)，您会遇到很多不可思议的问题，比如，网页第一行可能会显示一个“?”，明明正确的程序一编译就报语法错误，等等，都是由记事本的弱智行为带来的。</p>
<p>这个弱智行为从 Windows XP 影响到 Windows 10，在最新的 Windows 10 版本(20H2) 中，才得到解决。</p>`,r:{minutes:.95,words:286},title:"记事本的遗留问题",i:"warn"},["/code/windows/notepad","/code/windows/notepad.md"]],["v-b9441ae8","/code/windows/shortcut-key.html",{y:"a",d:"2019-09-07T00:00:00.000Z",l:"2019年9月7日",c:["基础"],g:["快捷键","Win10"],e:`<p>熟练掌握各种 Windows 快捷键，能够更加高效的使用 Windows。</p>
`,r:{minutes:3.69,words:1107},title:"常用快捷键",i:"keyboard"},["/code/windows/shortcut-key","/code/windows/shortcut-key.md"]],["v-16be477a","/design/articles/",{y:"a",d:"2020-09-26T00:00:00.000Z",l:"2020年9月26日",c:["设计"],g:["UI"],e:`<h2> 文章列表</h2>
<ul>
<li>
<p><a href="/design/articles/gestalt-principle.html" target="blank">格式塔原则</a></p>
</li>
<li>
<p><a href="/design/articles/left-or-right.html" target="blank">布局中的左和右</a></p>
</li>
<li>
<p><a href="/design/articles/infomation-flow.html" target="blank">信息流介绍</a></p>
</li>
</ul>`,r:{minutes:.15,words:44},title:"设计文章",i:"note"},["/design/articles/index.html","/design/articles/README.md"]],["v-31bd837a","/design/articles/gestalt-principle.html",{y:"a",a:"印迹",d:"2020-09-26T00:00:00.000Z",l:"2020年9月26日",c:["设计"],g:["UI"],e:`<p>好的设计师理解心理学在视觉感知中的强大作用。当别人的目光与您的设计创作相遇时，会发生什么? 他们对您分享的信息有什么反应?</p>
<h2> 格式塔原理概述</h2>
<h3> 前言</h3>
<p>举一个场景化的栗子，大家平时逛街的时候能记住哪些广告呢? 我们虽然每天看到那么多的信息，但是真正记住的却不多。还有当我们看到复杂的事物的时候，心里会涌现不舒服的奇怪感受，有时候这种感受没有办法用语言来描述。那么为什么会有这些感受呢?</p>
<p></p>
<p>其实道理很简单，我们做的东西是给人用的。人是动物不是一台机器，人的认知和记忆能力是有限的。视觉设计和心理是相互联系的，并且可以相互影响。格式塔原则可以帮助我们理解和控制这些联系。</p>`,r:{minutes:29.05,words:8716},title:"格式塔原则",i:"note"},["/design/articles/gestalt-principle","/design/articles/gestalt-principle.md"]],["v-e4adfaa4","/design/articles/infomation-flow.html",{y:"a",d:"2020-09-26T00:00:00.000Z",l:"2020年9月26日",c:["设计"],g:["UI"],e:`<p>今日头条的出现颠覆了传统新闻产品(如网易、新浪和搜狐新闻)。</p>
<p>传统新闻依靠着编辑人员的推荐，将新闻触达给用户，而今日头条则依靠着新闻算法，抛弃传统人工分发的思路，使分发效率数以万计的提升，其迅速崛起，成为头部新闻资讯产品。</p>
<p>今日头条作为新闻信息流的头部产品，里面的设计细节和设计逻辑值得我们思考和分析。</p>
<h2> 信息流样式</h2>
<p>什么是信息流? 信息流由两部分组成，信息流=信息+流。</p>
<p>信息指的是内容，这些内容可以是新闻、视频、图片等，所呈现的样式多为列表或卡片。</p>
<p>流指的是瀑布流，可以无限滑动浏览。</p>
<p>所以信息流就是可以无限滑动浏览内容信息。</p>`,r:{minutes:7.07,words:2120},title:"信息流介绍",i:"note"},["/design/articles/infomation-flow","/design/articles/infomation-flow.md"]],["v-2255681b","/design/articles/left-or-right.html",{y:"a",d:"2020-09-26T00:00:00.000Z",l:"2020年9月26日",c:["设计"],g:["UI"],e:`<h2> 左右横跳的泳道</h2>
<p>最近经常在人人视频上看电视剧，发现人人视频在设计上有个很有意思的点。</p>
<p>它的电影页中有很多推荐电影片单，每个片单里有 5-12 部电影；碍于手机尺寸，用户只能看到 3 部电影；如果您对这个片单里的电影比较感兴趣，可以滑动查看更多的电影——这种横向滑动的设计又被称之为“泳道”。</p>
<p></p>
<p>那么问题来了，究竟向哪个方向滑动呢?</p>
<p>或许您会觉得这是一个送分题，肯定是左滑啊；没错，您去查看 100 个 APP，这种水平横滑的泳道，99 个都是左滑的；但是人人视频就是那唯一的特例，它是左滑和右滑相互组合的。</p>
<p></p>`,r:{minutes:6.9,words:2069},title:"布局中的左和右",i:"note"},["/design/articles/left-or-right","/design/articles/left-or-right.md"]],["v-4d2058be","/design/icon/",{y:"a",d:"2020-09-13T00:00:00.000Z",l:"2020年9月13日",c:["设计"],g:["Icon"],e:`<p>本文介绍了 UI 设计中图标的相关介绍与技巧。</p>
`,r:{minutes:1.4,words:419},title:"图标",i:"discover"},["/design/icon/index.html","/design/icon/README.md"]],["v-f228952e","/design/icon/apply.html",{y:"a",d:"2020-09-14T00:00:00.000Z",l:"2020年9月14日",c:["设计"],g:["Icon"],e:`<p>在 UI 设计中，图标不是孤立存在的。我们学习图标的设计，不是为了画一组套图，然后上传到设计平台中分享或求赞，而是要在真实的项目中发挥作用。如果不了解图标应用到项目中的知识点，那么真实的图标设计水平就会在项目设计过程中被损耗。</p>
<p>所以，本章讲述工具图标在项目中应用的方法。</p>
`,r:{minutes:10.16,words:3049},title:"图标应用",i:"tool"},["/design/icon/apply","/design/icon/apply.md"]],["v-40ea6a4a","/design/icon/decorative.html",{y:"a",d:"2020-09-14T00:00:00.000Z",l:"2020年9月14日",c:["设计"],g:["Icon"],e:`<p>装饰图标最主要的应用区域，集中在首页的快速入口上，也是今天多数应用中会使用的组件。下面，我们会讲解国内主流应用中的几种装饰图标的设计。</p>
`,r:{minutes:6.63,words:1990},title:"装饰性图标设计",i:"decorate"},["/design/icon/decorative","/design/icon/decorative.md"]],["v-0a4c5b17","/design/icon/draw.html",{y:"a",d:"2020-09-15T00:00:00.000Z",l:"2020年9月15日",c:["设计"],g:["Icon"],e:`<h2> 情绪板</h2>
<p>情绪板是在执行一项设计操作之前非常重要的一个步骤，情绪板并不是像设计平台展示作品集里那样放几张图片，几个关键词，而是一套对接下来设计的一个风格走向定位。根据不同的用户人群，不同颜色的色彩情绪，不同产品的业务，将用户调研的结果，产品的背景进行总结与思考，定位接下来的设计风格。</p>
<h2> 绘制流程</h2>
<h3> 选取照片</h3>
<p>观察生活，对想画的图标进行照片实物造型的提取。图标是对生活中事物的精简概括。利用现实照片作为设计参考可以让绘制出的图标更真实，辨识度更高，还可以做到差异化设计。</p>
<h3> 造型勾勒</h3>
<p>使用矢量软件的基本图形与钢笔工具描着照片进行轮廓的绘制。</p>`,r:{minutes:2.22,words:665},title:"图标绘制流程",i:"skin"},["/design/icon/draw","/design/icon/draw.md"]],["v-638e2b11","/design/icon/flour.html",{y:"a",d:"2020-09-13T00:00:00.000Z",l:"2020年9月13日",c:["设计"],g:["Icon"],e:`<p>面性图标在操作中和线性图标的最大差别就在于描边和填充模式，我们知道为了满足像素对齐的要求，线性描边会在操作中产生很多不可控的因素，要用很多额外的操作步骤去弥补。在面性图标中，就不需要使用描边，并且使用相同的图标模板即可。</p>
<p></p>
<p>下面就进入本篇的具体案例演示。</p>
<h2> 基本面性风格</h2>
<p></p>
<p>如图所示，我们使用线性图标中的样式，设计成面性效果。具体的操作步骤就不需要再完整演示了，只需要将所有线性风格演示中的描边替换成填充，再使用对应的路径查找器功能即可。</p>
<p>需要注意的是，可能我们会习惯于使用线条工具绘制很多 1pt 宽的直线，这是错误的做法。我们需要使用矩形工具画出一个完整的闭合图形，再使用路径查找器工具或者对图形进行批量操作，这样才能保证统一。</p>`,r:{minutes:5.3,words:1591},title:"面性图标设计",i:"emoji"},["/design/icon/flour","/design/icon/flour.md"]],["v-f500f2ca","/design/icon/guide.html",{y:"a",d:"2020-09-13T00:00:00.000Z",l:"2020年9月13日",c:["设计"],g:["Icon"],e:`<h2> 图标的可用性</h2>
<p>图标可用性，顾名思义就是图标绘制出来是否能被用户所看懂并快速识别，是否可以为业务赋能。以下是总结的四条图标绘制的评判标准。</p>
<p></p>
<h3> 凸显性</h3>
<p>用户是否能在某页面上迅速找到该图标，凸显性的目的是可以快速查找，帮助用户做选择。图标在识别的速度上远远大于文字，所以在一些页面中的重要功能使用图标的目的是为了吸引用户的注意力，让重要功能得到凸显，提高重要功能的点击率。</p>
<h3> 可识别性</h3>
<p>图标的目的是要让用户猜出他看到的图标所表达的意义，有什么作用，以及点击后会出现什么样的场景，发生什么样的事情。所以一个图标的好与坏最重要的因素就体现在这里: 图标的可识别性与可预知性。</p>`,r:{minutes:13.09,words:3928},title:"图标设计指南",i:"guide"},["/design/icon/guide","/design/icon/guide.md"]],["v-66effdaa","/design/icon/intro.html",{y:"a",d:"2020-09-13T00:00:00.000Z",l:"2020年9月13日",c:["设计"],g:["Icon"],e:`<h2> 图标的基本认识</h2>
<p>图标，是一种图形化的标识，它有广义和狭义两种概念，广义指的是所有现实中有明确指向含义的图形符号，狭义主要指在计算机设备界面中的图形符号，有非常大的覆盖范围。</p>
<p>对于 UI 设计师而言，主要针对的就是狭义的概念，它是 UI 界面视觉组成的关键元素之一。</p>
<p>在当下最常见的扁平化设计风格中，界面的实际视觉组成只有 4 种元素，图片、文字、几何图形、图标。</p>
<p></p>
<p>可以说，图片、文字、几何图形的运用，都只用到排版的技巧，而图标，是 UI 设计中除了插画元素以外唯一需要「绘制」、「创作」的元素，一涉及到这两件事，难度就直线上升了。</p>`,r:{minutes:2.3,words:689},title:"图标介绍",i:"info"},["/design/icon/intro","/design/icon/intro.md"]],["v-d301f332","/design/icon/line.html",{y:"a",d:"2020-09-13T00:00:00.000Z",l:"2020年9月13日",c:["设计"],g:["Icon"],e:`<p>线性图标是所有图标中最基础的设计形式，也是最简单的入门。在我们后续设计其它的风格图标前，首先要通过练习线性图标来打下坚实的基础。</p>
`,r:{minutes:10.14,words:3042},title:"线性图标设计",i:"exercise"},["/design/icon/line","/design/icon/line.md"]],["v-f6497742","/design/icon/rule.html",{y:"a",d:"2020-09-15T00:00:00.000Z",l:"2020年9月15日",c:["设计"],g:["Icon"],e:`<p>规范是图标设计的重点。</p>
`,r:{minutes:13.07,words:3920},title:"图标设计准则",i:"notice"},["/design/icon/rule","/design/icon/rule.md"]],["v-3d2f7734","/design/icon/skill.html",{y:"a",d:"2020-09-14T00:00:00.000Z",l:"2020年9月14日",c:["设计"],g:["Icon"],e:`<p>图标是 UI 设计中最基础也是很重要的部分，辅助人们更好的理解功能内容。随着扁平化设计风格的普及，图标的风格越来越简约，看似简单的图形，实际要准确的表达含义，也是需要注意一些方法的。下面是是图标设计的实用技巧。</p>
<h2> 简单</h2>
<p>一个图标一个非写实的表现。不需要担心图标不够真实，消除不必要的细节，用基本的形状只保留最基础的部分，让这个图标更容易被理解。</p>
<p></p>
<p>有时候图标会因为有更多细节而传达了更复杂的意思，这反而是样式问题!</p>
<h2> 一致性</h2>
<p>在整个图标系统中，您的图标要保持同一种样式来确保图标完美协调。比如同样的形状，填充，描边粗细，尺寸等。要制定好可以被复用的栅格，规范和样式。</p>`,r:{minutes:2.05,words:614},title:"图标设计技巧",i:"creative"},["/design/icon/skill","/design/icon/skill.md"]],["v-2863c8d8","/design/icon/software.html",{y:"a",d:"2020-09-13T00:00:00.000Z",l:"2020年9月13日",c:["设计"],g:["Icon"],e:`<p>了解了图标的类型，就要开始了解做出这些图标应该使用哪些软件了。通常，UI 主要使用的设计软件包含 PS、AI、Sketch、XD 四款，理论上，它们都包含了图标绘制的功能，下面介绍这四款软件对于图标设计的优劣，以及需要掌握的部分。</p>
`,r:{minutes:2.65,words:795},title:"学习图标所需的软件",i:"software"},["/design/icon/software","/design/icon/software.md"]],["v-23d2ecf5","/design/icon/start.html",{y:"a",d:"2020-09-14T00:00:00.000Z",l:"2020年9月14日",c:["设计"],g:["Icon"],e:`<p>想要在启动图标设计上入门，就要先从规范开始学习，然后了解不同的风格以及对应风格的设计过程。</p>
<h2> 启动图标的设计规范</h2>
<p>说到启动图标的规范，首先会想到的，就是 iOS 提供的图标栅格。通过这个栅格，会规范图形的尺寸，以及所处的位置。</p>
<p></p>
<p>这个模板和工具图标的使用方法类似，我们在后面的案例进一步讲解。接着，来说明一个更重要的问题，就是启动图标画布的尺寸。</p>
<p>默认的情况下，我们使用 1024×1024 尺寸来设计启动图标，这个参数在 iOS 和 Android 中都适用。</p>
<p>之所以使用这么大的尺寸，是由屏幕分辨率的差异和使用场景导致的。</p>`,r:{minutes:6.46,words:1937},title:"启动图标设计指南",i:"launch"},["/design/icon/start","/design/icon/start.md"]],["v-2081c2e1","/design/icon/type.html",{y:"a",d:"2020-09-13T00:00:00.000Z",l:"2020年9月13日",c:["设计"],g:["Icon"],e:`<p>设计图标可以划分成三种大类:</p>
<ul>
<li>工具图标</li>
<li>装饰图标</li>
<li>主体图标</li>
</ul>
<p>下面将对它们分别进行介绍，以及展示相关的设计类型。</p>
`,r:{minutes:6.32,words:1896},title:"图标种类",i:"type"},["/design/icon/type","/design/icon/type.md"]],["v-135802a1","/design/interact/",{y:"a",d:"2020-09-26T00:00:00.000Z",l:"2020年9月26日",c:["设计"],g:["UI"],e:`<h2> 文章列表</h2>
<ul>
<li>
<p><a href="/design/interact/search.html" target="blank">搜索框</a></p>
</li>
<li>
<p><a href="/design/interact/text-field.html" target="blank">文本框</a></p>
</li>
</ul>
`,r:{minutes:.1,words:29},title:"交互设计",i:"interact"},["/design/interact/index.html","/design/interact/README.md"]],["v-06603a20","/design/interact/search.html",{y:"a",d:"2020-09-15T00:00:00.000Z",l:"2020年9月15日",c:["设计"],g:["UI"],e:`<p>搜索框是我们最常用到的 UI 控件之一，它几乎存在于所有的网站和 APP 当中。许多人认为搜索框不需要设计，因为它似乎就是由两个最简单的元素构成的。在以内容为导向的网站中，搜索框的重要性会相对更明显，用户需要快速又无痛地找到他们想要的内容。而对于设计相对负责的网站而言，这个需求尤其明显。搜索框的可用性设计，是整个设计的关键，也就是如何让用户尽量节省时间，搜到他们想要的内容。</p>
<h2> 使用放大镜图标</h2>
<p>时至今日，搜索的概念和放大镜图标之间的关系已经深入人心，根深蒂固了。在日常最常用、最易于识别的几个图标当中，放大镜所带代表的搜索图标就是其中之一。</p>
<p></p>`,r:{minutes:6.89,words:2066},title:"搜索框设计",i:"search"},["/design/interact/search","/design/interact/search.md"]],["v-3bd48bfe","/design/interact/text-field.html",{y:"a",d:"2020-09-26T00:00:00.000Z",l:"2020年9月26日",c:["设计"],g:["UI"],e:`<p>文本框的出现几乎可以追溯到可视化交互诞生的源头，是一个再经典不过的「鼻祖」控件了。我们每天都在和文本框打交道，不论您是产品设计者还是用户。</p>
<h2> 文本框的拆解</h2>
<p>文本框(Text Fields)根据 Material Design 指导规范，被拆解为七个部分。分别是:</p>
<p></p>
<ul>
<li>容器(Container)</li>
<li>前导图标(Leading icon)</li>
<li>标签文本(Label text)</li>
<li>输入文本(Input text)</li>
<li>尾随图标(Trailing icon)</li>
<li>激活指示器(Activation indicator)</li>
<li>帮助文本(Helper text)</li>
</ul>`,r:{minutes:7.07,words:2122},title:"文本框设计",i:"input"},["/design/interact/text-field","/design/interact/text-field.md"]],["v-bd999efa","/design/navigation/",{y:"a",d:"2020-09-15T00:00:00.000Z",l:"2020年9月15日",c:["设计"],g:["导航"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/design/navigation/intro.html" target="blank">导航设计介绍</a></p>
</li>
<li>
<p><a href="/design/navigation/navbar.html" target="blank">导航栏概述与设计方式</a></p>
</li>
<li>
<p><a href="/design/navigation/navbar-design.html" target="blank">导航栏设计技巧</a></p>
</li>
<li>
<p><a href="/design/navigation/sidebar-navigate.html" target="blank">侧边导航设计</a></p>
</li>
<li>
<p><a href="/design/navigation/tabbar.html" target="blank">标签导航设计</a></p>
</li>
<li>
<p><a href="/design/navigation/tabbar-design.html" target="blank">标签导航设计技巧</a></p>
</li>
</ul>`,r:{minutes:.24,words:73},title:"导航设计教程",i:"navigate"},["/design/navigation/index.html","/design/navigation/README.md"]],["v-5837a6b0","/design/navigation/intro.html",{y:"a",d:"2020-09-15T00:00:00.000Z",l:"2020年9月15日",c:["设计"],g:["导航"],e:`<p>其实网页或者 App 中的导航(Navigation)这个概念远不止我们熟悉的导航栏，而是一个更加广的交互概念: 引导用户和产品进行有效的交互，实现用户的目标。本文将详细地介绍界面的导航设计。</p>
<p>一个网页或 App 产品要想有很好的可用性(usability)，需要做好的最基本的一点是导航的设计或者说引导用户的设计。如果用户在使用一个网站或者 App 的时候找不到自己的处在什么位置或者该怎么去到想要的页面，那么视觉效果再怎么有创意或者抓人眼球都无法弥补产品的缺陷。无论您的产品想满足用户什么需求，让用户知道产品当下的状态和每一步操作之后的结果是对用户最基本的尊重。</p>
<h2> 导航</h2>`,r:{minutes:17.64,words:5293},title:"导航设计介绍",i:"info"},["/design/navigation/intro","/design/navigation/intro.md"]],["v-5e53b161","/design/navigation/navbar-design.html",{y:"a",d:"2020-09-15T00:00:00.000Z",l:"2020年9月15日",c:["设计"],g:["导航","Navbar"],e:`<p>评判导航菜单的设计好坏有多种不同的维度，由于它太过常用，它的好坏并没有得到更多重视。实际上，导航作为网站设计的一个基础组成部分，对于可用性的要求并不低。以下是一些常见的设计技巧。</p>
<h2> 超大菜单栏</h2>
<p></p>
<p>即使许多设计师不喜欢这样的设计，而且从美学的角度上它也是反智的，但是对于许多客户而言，它依然是一个客户反响很好的设计方案。但是这样的设计对于用户可能还是有一些困扰，并且没有提供真正有用的功能。</p>
<p>只有极少数的电商类网站能够真正适合使用超大导航栏的，因为他们确实需要足够的空间来承载大量的导航栏目。不过过大的导航栏可能还是存在一些可用性问题的。</p>`,r:{minutes:6.17,words:1851},title:"导航栏设计技巧",i:"navbar"},["/design/navigation/navbar-design","/design/navigation/navbar-design.md"]],["v-662b9e66","/design/navigation/navbar.html",{y:"a",d:"2020-09-15T00:00:00.000Z",l:"2020年9月15日",c:["设计"],g:["导航","Navbar"],e:`<p>其实网页或者 App 中的导航(Navigation)这个概念远不止我们熟悉的导航栏，而是一个更加广的交互概念: 引导用户和产品进行有效的交互，实现用户的目标。</p>
<h2> 导航栏究竟在哪里</h2>
<p>导航栏 Navigation Bar，也简称为 Navbar。一定会有不少刚入门的 UI 新人，在诸多的 Bar 控件中，难以区分它所指代的区域。</p>
<p>在 iOS 上，导航栏是指显示在应用程序顶部，位于状态栏下方的容器区域，层级应高于当前页面内容。</p>
<p>在安卓上，Google 公司在 Material Design 中也赋予了它同样的定义，但是却给了它另一个名称，顶部应用栏(Top App Bar)。</p>`,r:{minutes:7.62,words:2287},title:"导航栏设计",i:"footer"},["/design/navigation/navbar","/design/navigation/navbar.md"]],["v-ca9d9698","/design/navigation/sidebar-navigate.html",{y:"a",d:"2020-09-15T00:00:00.000Z",l:"2020年9月15日",c:["设计"],g:["导航","Sidebar"],e:`<p>厌倦了传统顶部导航的设计师，越来越偏爱侧边栏导航了。这种常见于页面左侧的侧边栏设计，已经成了许多独树一帜的设计师的选择了。</p>
<h2> 无处不在的侧边栏导航</h2>
<p>侧边栏导航和菜单设计的演变有着密不可分的关系。响应式设计的流行使得向移动端偏移的网页设计，不得不采用菜单栏来替代传统的导航模式，其直接的影响就是催生了汉堡图标。</p>
<p></p>
<p>随着汉堡图标的流行，弹出式的菜单也越发的常见。其中有些菜单是完全开放式的，而有的菜单则带着下拉框，还有一部分直接是弹出的菜单界面。而为了兼容大量的移动端界面，下拉和弹出式的菜单大多采用的是纵向布局——而这和侧边栏的设计，是如此的相似。换句话来说，这种垂直的导航就是一种弹出式的侧边栏导航。</p>`,r:{minutes:5.47,words:1640},title:"侧边栏导航",i:"sidebar"},["/design/navigation/sidebar-navigate","/design/navigation/sidebar-navigate.md"]],["v-5a59a8af","/design/navigation/tabbar-design.html",{y:"a",d:"2020-09-15T00:00:00.000Z",l:"2020年9月15日",c:["设计"],g:["导航","Tabbar"],e:`<h2> 底部导航栏图标重要性及维度</h2>
<h3> 重要性</h3>
<p>底部导航栏的图标是路牌，承担着指路的作用，给用户指明进入产品后可以分别通往什么页面。早期的底部导航栏是单一的指路功能，经过多年的交互设计迭代后，附加了「信息展示」和「引导操作」的作用，这点会在下文中详细阐述。</p>
<h3> 三个重要评估维度</h3>
<h4> 品牌调性</h4>
<p>品牌调性决定了图标的体量感、差异化和创意延展。怎样评估图标设计能够体现出品牌调性呢? 最简单直接的方法: 截屏首页，不看顶部栏，仅从底部导航栏能看出来这是什么产品，就算成功体现了品牌调性。</p>
<p></p>
<h4> 识别度</h4>`,r:{minutes:5.47,words:1641},title:"标签导航设计技巧",i:"footer"},["/design/navigation/tabbar-design","/design/navigation/tabbar-design.md"]],["v-4e2f22d8","/design/navigation/tabbar.html",{y:"a",d:"2020-09-15T00:00:00.000Z",l:"2020年9月15日",c:["设计"],g:["导航","Tabbar"],e:`<p>导航分很多类别，如标签导航、抽屉式导航、九宫格导航、混合组合导航、列表式导航、Tab 导航、平铺导航等等。</p>
<p>现在用到更多的导航其实是标签导航(tabbar)，它随处可见，相信目前大部分的 App 用的导航都是标签形式的。</p>
<h2> 理清产品框架</h2>
<p>相信很多设计师在设计导航时，一上来就开始 YY 自己的导航要放什么，因为这个时候他已经被标签形式的导航洗脑了，认为自己的 App 就应该用标签导航。然后继续 YY 产品的功能，自己理出个最适合的，放上去就好了。</p>
<p>其实不然。做好一个导航要考虑的问题其实非常多，还要考虑产品后期发展的延展性。必须定好整个产品的框架，把最核心的功能放在第一层页面，再根据产品的深度来设计导航的模式。</p>`,r:{minutes:3.07,words:921},title:"标签导航设计",i:"footer"},["/design/navigation/tabbar","/design/navigation/tabbar.md"]],["v-fcccd0e2","/en/about/",{y:"s",d:"2022-02-06T16:01:38.000Z",g:["Personal Intro"],r:{minutes:.16,words:49},title:"Mr.Hope Intro",i:"people"},["/en/about/index.html","/en/about/README.md"]],["v-4275617a","/en/about/site.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> About site</h1>
<div class="custom-container tip">
<p class="custom-container-title">building</p>
<p>This site is built with <a href="https://v1.vuepress.vuejs.org/guide/" target="_blank" rel="noopener noreferrer">VuePress</a>.</p>
</div>
<h2> Repository Link</h2>
<ul>
<li><a href="https://github.com/Mister-Hope/blog" target="_blank" rel="noopener noreferrer"><strong>Mr.Hope’s Personal Blog</strong></a></li>
</ul>`,r:{minutes:.17,words:50},title:"About site",i:"info"},["/en/about/site","/en/about/site.md"]],["v-39702e16","/en/code/",{y:"a",d:"2022-02-06T16:01:38.000Z",e:`<div class="custom-container info">
<p class="custom-container-title">Info</p>
<p>Code notes only contains <strong>Chinese</strong> version.</p>
</div>
`,r:{minutes:.04,words:12},title:"Code Note",i:"code"},["/en/code/index.html","/en/code/README.md"]],["v-3839b0e0","/en/note/",{y:"a",d:"2022-02-06T16:01:38.000Z",e:`<div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>Note, all the notes only contains <strong>Chinese</strong> version.</p>
</div>
<h2> Seasons</h2>
<div class="custom-container tip">
<p class="custom-container-title">Introduction</p>
<p>This is a collection of prose poems I wrote in Senior 1, originally published in the qzone dairy.</p>
<p>Later I also wrote some poems to add in, among which "Autumn Thought" has most poems.</p>
<p>Recently, I moved it as a teenager’s memory in my blog.</p>
</div>`,r:{minutes:.58,words:175},title:"Notes",i:"note"},["/en/note/index.html","/en/note/README.md"]],["v-f33e2a0a","/en/software/",{y:"a",d:"2022-02-06T16:01:38.000Z",e:`<div class="custom-container info">
<p class="custom-container-title">Info</p>
<p>Most of the software guide only contains <strong>Chinese</strong> version.</p>
</div>
<h2> Http Server</h2>
<ul>
<li><a href="/en/software/nginx.html" target="blank">Nginx</a></li>
</ul>
`,r:{minutes:.06,words:18},title:"Software",i:"software"},["/en/software/index.html","/en/software/README.md"]],["v-4a42ca8c","/en/software/nginx.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> Nginx</h1>
<h2> Intro</h2>
<p>Nginx is a high performance HTTP and reverse proxy server and an IMAP / POP3 / SMTP proxy server. It features low memory, high concurrency, high stability, and Nginx’s friendly and flexible configuration.</p>
<h2> Starting, Stopping, and Reloading Configuration</h2>`,r:{minutes:4.81,words:1444},title:"Nginx",i:"nginx"},["/en/software/nginx","/en/software/nginx.md"]],["v-f35beb32","/linux/bash/",{y:"a",a:"阮一峰",d:"2022-02-06T16:01:38.000Z",c:["Linux"],g:["Bash"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/linux/bash/intro.html" target="blank">简介</a></p>
</li>
<li>
<p><a href="/linux/bash/grammar.html" target="blank">基本语法</a></p>
</li>
<li>
<p><a href="/linux/bash/expansion.html" target="blank">模式扩展</a></p>
</li>
<li>
<p><a href="/linux/bash/quotation.html" target="blank">引号和转义</a></p>
</li>
<li>
<p><a href="/linux/bash/variable.html" target="blank">变量</a></p>
</li>
<li>
<p><a href="/linux/bash/string.html" target="blank">字符串操作</a></p>
</li>
<li>
<p><a href="/linux/bash/arithmetic.html" target="blank">算术运算</a></p>
</li>
<li>
<p><a href="/linux/bash/readline.html" target="blank">行操作</a></p>
</li>
<li>
<p><a href="/linux/bash/stack.html" target="blank">目录堆栈</a></p>
</li>
<li>
<p><a href="/linux/bash/script.html" target="blank">脚本入门</a></p>
</li>
<li>
<p><a href="/linux/bash/read.html" target="blank">read 命令</a></p>
</li>
<li>
<p><a href="/linux/bash/condition.html" target="blank">条件判断</a></p>
</li>
<li>
<p><a href="/linux/bash/loop.html" target="blank">循环</a></p>
</li>
<li>
<p><a href="/linux/bash/function.html" target="blank">函数</a></p>
</li>
<li>
<p><a href="/linux/bash/array.html" target="blank">数组</a></p>
</li>
<li>
<p><a href="/linux/bash/set.html" target="blank">set 命令</a></p>
</li>
<li>
<p><a href="/linux/bash/debug.html" target="blank">脚本除错</a></p>
</li>
<li>
<p><a href="/linux/bash/mktemp.html" target="blank">mktemp 命令，trap 命令</a></p>
</li>
<li>
<p><a href="/linux/bash/startup.html" target="blank">启动环境</a></p>
</li>
<li>
<p><a href="/linux/bash/prompt.html" target="blank">命令提示符</a></p>
</li>
</ul>`,r:{minutes:.48,words:144},title:"Bash 教程",i:"shell"},["/linux/bash/index.html","/linux/bash/README.md"]],["v-bf8c45b0","/linux/bash/arithmetic.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["Linux"],g:["Bash"],e:`<h2> 算术表达式</h2>
<p><code>((...))</code> 语法可以进行整数的算术运算。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token variable"><span class="token punctuation">((</span>foo <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">))</span></span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">$foo</span>
<span class="token number">10</span>
</code></pre></div>`,r:{minutes:5.87,words:1762},title:"Bash 的算术运算",i:"calculate"},["/linux/bash/arithmetic","/linux/bash/arithmetic.md"]],["v-58565872","/linux/bash/array.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["Linux"],g:["Bash"],e:`<p>数组(array)是一个包含多个值的变量。成员的编号从 0 开始，数量没有上限，也没有要求成员被连续索引。</p>
`,r:{minutes:6.65,words:1995},title:"数组",i:"array"},["/linux/bash/array","/linux/bash/array.md"]],["v-a381d276","/linux/bash/condition.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["Linux"],g:["Bash"],e:`<p>本章介绍 Bash 脚本的条件判断语法。</p>
`,r:{minutes:13.99,words:4197},title:"条件判断",i:"condition"},["/linux/bash/condition","/linux/bash/condition.md"]],["v-a32bc7e6","/linux/bash/debug.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["Linux"],g:["Bash"],e:`<p>本章介绍如何对 Shell 脚本除错。</p>
`,r:{minutes:4.44,words:1332},title:"脚本除错",i:"debug"},["/linux/bash/debug","/linux/bash/debug.md"]],["v-5675dda1","/linux/bash/expansion.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["Linux"],g:["Bash"],e:`<h2> 简介</h2>
<p>Shell 接收到用户输入的命令以后，会根据空格将用户的输入，拆分成一个个词元(token)。然后，Shell 会扩展词元里面的特殊字符，扩展完成后才会调用相应的命令。</p>
<p>这种特殊字符的扩展，称为模式扩展(globbing)。其中有些用到通配符，又称为通配符扩展(wildcard expansion)。Bash 一共提供八种扩展。</p>
<ul>
<li>波浪线扩展</li>
<li><code>?</code> 字符扩展</li>
<li><code>*</code> 字符扩展</li>
<li>方括号扩展</li>
<li>大括号扩展</li>
<li>变量扩展</li>
<li>子命令扩展</li>
<li>算术扩展</li>
</ul>`,r:{minutes:16.32,words:4896},title:"Bash 的模式扩展",i:"expansion"},["/linux/bash/expansion","/linux/bash/expansion.md"]],["v-5e8a6e0c","/linux/bash/function.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["Linux"],g:["Bash"],e:`<p>本章介绍 Bash 函数的用法。</p>
`,r:{minutes:3.9,words:1170},title:"Bash 函数",i:"function"},["/linux/bash/function","/linux/bash/function.md"]],["v-5a1d9d0e","/linux/bash/grammar.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["Linux"],g:["Bash"],e:`<p>本章介绍 Bash 的最基本语法。</p>
`,r:{minutes:5.91,words:1773},title:"Bash 的基本语法",i:"quote"},["/linux/bash/grammar","/linux/bash/grammar.md"]],["v-670a7394","/linux/bash/intro.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["Linux"],g:["Bash"],e:`<p>Bash 是 Unix 系统和 Linux 系统的一种 Shell(命令行环境)，是目前绝大多数 Linux 发行版的默认 Shell。</p>
`,r:{minutes:5.76,words:1729},title:"Bash 简介",i:"info"},["/linux/bash/intro","/linux/bash/intro.md"]],["v-31da8ba4","/linux/bash/loop.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["Linux"],g:["Bash"],e:`<p>Bash 提供三种循环语法 <code>for</code>、<code>while</code> 和 <code>until</code>。</p>
`,r:{minutes:6.81,words:2044},title:"循环",i:"loop"},["/linux/bash/loop","/linux/bash/loop.md"]],["v-a3b03640","/linux/bash/mktemp.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["Linux"],g:["Bash"],e:`<p>Bash 脚本有时需要创建临时文件或临时目录。常见的做法是，在 <code>/tmp</code> 目录里面创建文件或目录，这样做有很多弊端，使用 <code>mktemp</code> 命令是最安全的做法。</p>
`,r:{minutes:4.96,words:1489},title:"mktemp 命令，trap 命令",i:"shell"},["/linux/bash/mktemp","/linux/bash/mktemp.md"]],["v-1a11652e","/linux/bash/prompt.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["Linux"],g:["Bash"],e:`<p>用户进入 Bash 以后，Bash 会显示一个命令提示符，用来提示用户在该位置后面输入命令。</p>
`,r:{minutes:3.88,words:1163},title:"命令提示符",i:"shell"},["/linux/bash/prompt","/linux/bash/prompt.md"]],["v-53238cf4","/linux/bash/quotation.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["Linux"],g:["Bash"],e:`<p>Bash 只有一种数据类型，就是字符串。不管用户输入什么数据，Bash 都视为字符串。因此，字符串相关的引号和转义，对 Bash 来说就非常重要。</p>
`,r:{minutes:7.06,words:2119},title:"引号和转义",i:"quote"},["/linux/bash/quotation","/linux/bash/quotation.md"]],["v-58d02e7c","/linux/bash/read.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["Linux"],g:["Bash"],e:`<h2> 用法</h2>
<p>有时，脚本需要在执行过程中，由用户提供一部分数据，这时可以使用 <code>read</code> 命令。它将用户的输入存入一个变量，方便后面的代码使用。用户按下回车键，就表示输入结束。</p>
<p><code>read</code> 命令的格式如下。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token punctuation">[</span>-options<span class="token punctuation">]</span> <span class="token punctuation">[</span>variable<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre></div>`,r:{minutes:5.23,words:1569},title:"read 命令",i:"read"},["/linux/bash/read","/linux/bash/read.md"]],["v-020bcd88","/linux/bash/readline.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["Linux"],g:["Bash"],e:`<h2> 简介</h2>
<p>Bash 内置了 Readline 库，具有这个库提供的很多“行操作”功能，比如命令的自动补全，可以大大加快操作速度。</p>
<p>这个库默认采用 Emacs 快捷键，也可以改成 Vi 快捷键。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> <span class="token parameter variable">-o</span> <span class="token function">vi</span>
</code></pre></div>`,r:{minutes:7.23,words:2170},title:"Bash 行操作",i:"line"},["/linux/bash/readline","/linux/bash/readline.md"]],["v-b48b13b2","/linux/bash/script.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["Linux"],g:["Bash"],e:`<p>脚本(script)就是包含一系列命令的一个文本文件。Shell 读取这个文件，依次执行里面的所有命令，就好像这些命令直接输入到命令行一样。所有能够在命令行完成的任务，都能够用脚本完成。</p>
<p>脚本的好处是可以重复使用，也可以指定在特定场合自动调用，比如系统启动或关闭时自动执行脚本。</p>
`,r:{minutes:12.59,words:3776},title:"Bash 脚本入门",i:"code"},["/linux/bash/script","/linux/bash/script.md"]],["v-8c4eb5c4","/linux/bash/set.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["Linux"],g:["Bash"],e:`<p><code>set</code> 命令是 Bash 脚本的重要环节，却常常被忽视，导致脚本的安全性和可维护性出问题。本章介绍 <code>set</code> 的基本用法，帮助您写出更安全的 Bash 脚本。</p>
`,r:{minutes:7.49,words:2248},title:"set 命令",i:"set"},["/linux/bash/set","/linux/bash/set.md"]],["v-d5076e10","/linux/bash/stack.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["Linux"],g:["Bash"],e:`<p>为了方便用户在不同目录之间切换，Bash 提供了目录堆栈功能。</p>
`,r:{minutes:3.06,words:917},title:"目录堆栈",i:"stack"},["/linux/bash/stack","/linux/bash/stack.md"]],["v-341fac63","/linux/bash/startup.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["Linux"],g:["Bash"],e:`<h2> Session</h2>
<p>用户每次使用 Shell，都会开启一个与 Shell 的 Session(对话)。</p>
<p>Session 有两种类型: 登录 Session 和非登录 Session，也可以叫做 login shell 和 non-login shell。</p>
<h3> 登录 Session</h3>
<p>登录 Session 是用户登录系统以后，系统为用户开启的原始 Session，通常需要用户输入用户名和密码进行登录。</p>
<p>登录 Session 一般进行整个系统环境的初始化，启动的初始化脚本依次如下。</p>
<ul>
<li><code>/etc/profile</code>: 所有用户的全局配置脚本。</li>
<li><code>/etc/profile.d</code> 目录里面所有 <code>.sh</code> 文件</li>
<li><code>~/.bash_profile</code>: 用户的个人配置脚本。如果该脚本存在，则执行完就不再往下执行。</li>
<li><code>~/.bash_login</code>: 如果 <code>~/.bash_profile</code> 没找到，则尝试执行这个脚本(C shell 的初始化脚本)。如果该脚本存在，则执行完就不再往下执行。</li>
<li><code>~/.profile</code>: 如果<code>~/.bash_profile</code> 和 <code>~/.bash_login</code> 都没找到，则尝试读取这个脚本(Bourne shell 和 Korn shell 的初始化脚本)。</li>
</ul>`,r:{minutes:3.34,words:1003},title:"Bash 启动环境",i:"leaf"},["/linux/bash/startup","/linux/bash/startup.md"]],["v-5e9f82a1","/linux/bash/string.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["Linux"],g:["Bash"],e:`<p>本章介绍 Bash 字符串操作的语法。</p>
`,r:{minutes:6.52,words:1955},title:"字符串操作",i:"string"},["/linux/bash/string","/linux/bash/string.md"]],["v-b3ea1e54","/linux/bash/variable.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["Linux"],g:["Bash"],e:`<p>Bash 变量分成环境变量和自定义变量两类。</p>
`,r:{minutes:11.47,words:3442},title:"Bash 变量",i:"variable"},["/linux/bash/variable","/linux/bash/variable.md"]],["v-47c2b838","/linux/command/",{y:"a",d:"2019-11-18T00:00:00.000Z",l:"2019年11月18日",c:["Linux"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/linux/command/command.html" target="blank">命令格式简介</a></p>
</li>
<li>
<p><a href="/linux/command/dir.html" target="blank">目录相关</a></p>
</li>
<li>
<p><a href="/linux/command/file.html" target="blank">文件相关</a></p>
</li>
<li>
<p><a href="/linux/command/other.html" target="blank">其他命令</a></p>
</li>
<li>
<p><a href="/linux/command/add.html" target="blank">命令的自动补全</a></p>
</li>
<li>
<p><a href="/linux/command/excu.html" target="blank">命令的执行</a></p>
</li>
<li>
<p><a href="/linux/command/path.html" target="blank">环境变量</a></p>
</li>
<li>
<p><a href="/linux/command/ln.html" target="blank">创建链接</a></p>
</li>
</ul>`,r:{minutes:.21,words:62},title:"Linux 命令格式",i:"shell"},["/linux/command/index.html","/linux/command/README.md"]],["v-8fbbf5e0","/linux/command/add.html",{y:"a",d:"2019-11-20T00:00:00.000Z",l:"2019年11月20日",c:["Linux"],e:`<p>文件名(或者目录名)是执行 Linux 命令中最常见的参数，例如前面介绍的 <code>cd</code>、<code>mkdir</code>、<code>cp</code> 等命令，都涉及到了文件名。然而对初学者来说，输入完整的文件名感觉很麻烦，尤其面临文件名(目录名)特别长的时候。</p>
<p>考虑到这种情况，Shell (Bash) 提供了一种称为“命令行自动补全”的功能，即在输入文件名的时候，只需要输入该文件名的前几个字符，然后按 Tab 键，Shell 就可以自动将文件名补全。</p>
`,r:{minutes:3.91,words:1173},title:"命令补全",i:"square-check"},["/linux/command/add","/linux/command/add.md"]],["v-7ffa5ca6","/linux/command/command.html",{y:"a",d:"2019-11-18T00:00:00.000Z",l:"2019年11月18日",c:["Linux"],e:`<h2> 命令提示符</h2>
<p>登录系统后，第一眼看到的内容是:</p>
<div class="language-shell-session" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token output">[root@localhost ~]#
</span></code></pre></div><p>这就是 Linux 系统的命令提示符。那么，这个提示符的含义是什么呢?</p>
<ul>
<li><code>[]</code>: 这是提示符的分隔符号，没有特殊含义。</li>
<li><code>root</code>: 显示的是当前的登录用户，笔者现在使用的是 root 用户登录。</li>
<li><code>@</code>: 分隔符号，没有特殊含义。</li>
<li><code>localhost</code>: 当前系统的简写主机名(完整主机名是 <code>localhost.localdomain</code>)。</li>
<li><code>~</code>: 代表用户当前所在的目录，此例中用户当前所在的目录是家目录。</li>
<li><code>#</code>: 命令提示符，Linux 用这个符号标识登录的用户权限等级。如果是超级用户，提示符就是 <code>#</code>；如果是普通用户，提示符就是 <code>$</code>。</li>
</ul>`,r:{minutes:3.26,words:978},title:"基本格式",i:"shell"},["/linux/command/command","/linux/command/command.md"]],["v-10288ca4","/linux/command/dir.html",{y:"a",d:"2019-11-18T00:00:00.000Z",l:"2019年11月18日",c:["Linux"],e:`<h2> pwd 命令</h2>
<p>由于 Linux 文件系统中有许多目录，当用户执行一条 Linux 命令又没有指定该命令或参数所在的目录时，Linux 系统就会首先在当前目录(目前的工作目录)搜寻这个命令或它的参数。因此，用户在执行命令之前，常常需要确定目前所在的工作目录，即当前目录。</p>
<p>当用户登陆 Linux 系统之后，其当前目录就是它的主目录。那么，如何确定当前目录呢? 可以使用 Linux 系统的 pwd 命令来显示当前目录的绝对路径。</p>
<p>pwd 命令，是 Print Working Directory (打印工作目录)的缩写，功能是显示用户当前所处的工作目录。该命令的基本格式为:</p>`,r:{minutes:5.31,words:1593},title:"文件夹",i:"tree"},["/linux/command/dir","/linux/command/dir.md"]],["v-0859f348","/linux/command/excu.html",{y:"a",d:"2019-11-20T00:00:00.000Z",l:"2019年11月20日",c:["Linux"],e:`<p>前面讲过，在 Linux 系统中“一切皆文件”，Linux 命令也不例外。那么，当编辑完成 Linux 命令并回车后，系统底层到底发生了什么事情呢?</p>
<p>简单来说，Linux 命令的执行过程分为如下 4 个步骤。</p>
<ol>
<li>
<p>判断路径</p>
<p>判断用户是否以绝对路径或相对路径的方式输入命令(如 <code>/bin/ls</code>)，如果是的话直接执行。</p>
</li>
<li>
<p>检查别名</p>
<p>Linux 系统会检查用户输入的命令是否为 “别名命令”。要知道，通过 alias 命令是可以给现有命令自定义别名的，即用一个自定义的命令名称来替换原本的命令名称。</p>
<p>例如，我们经常使用的 <code>rm</code> 命令，其实就是 <code>rm -i</code> 这个整体的别名:</p>
<div class="language-shell-session" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">alias</span> <span class="token function">rm</span></span></span>
<span class="token output">alias rm='rm -i'
</span></code></pre></div><p>这使得当使用 rm 命令删除指定文件时，Linux 系统会要求我们再次确认是否执行删除操作。例如:</p>
<div class="language-shell-session" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">rm</span> a.txt <span class="token operator">&lt;</span>-- 假定当前目录中已经存在 a.txt 文件</span></span>
<span class="token output">rm: remove regular file 'a.txt'? y  &lt;-- 手动输入 y，即确定删除
[root@localhost ~]#
</span></code></pre></div><p>这里可以使用 <code>unalias</code> 命令，将 Linux 系统设置的 <code>rm</code> 别名删除掉，执行命令如下:</p>
<div class="language-shell-session" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">alias</span> <span class="token function">rm</span></span></span>
<span class="token output">alias rm='rm -i'
</span><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">unalias</span> <span class="token function">rm</span></span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">rm</span> a.txt</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span>  <span class="token bash language-bash"><span class="token operator">&lt;</span>--直接删除，不再询问</span></span>
</code></pre></div></li>
<li>
<p>判断是内部命令还是外部命令</p>
<p>Linux 命令行解释器 (又称为 Shell) 会判断用户输入的命令是内部命令还是外部命令。其中，内部命令指的是解释器内部的命令，会被直接执行；而用户通常输入的命令都是外部命令，这些命令交给步骤四继续处理。
内部命令由 Shell 自带，会随着系统启动，可以直接从内存中读取；而外部命令仅是在系统中有对应的可执行文件，执行时需要读取该文件。</p>
<p>判断一个命令属于内部命令还是外部命令，可以使用 <code>type</code> 命令实现。例如:</p>
<div class="language-shell-session" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">type</span> <span class="token builtin class-name">pwd</span></span></span>
<span class="token output">pwd is a shell builtin  &lt;-- pwd是内部命令
</span><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">type</span> <span class="token function">top</span></span></span>
<span class="token output">top is /usr/bin/top  &lt;-- top是外部命令
</span></code></pre></div></li>
<li>
<p>查找外部命令对应的可执行文件</p>
<p>当用户执行的是外部命令时，系统会在指定的多个路径中查找该命令的可执行文件，而定义这些路径的变量，就称为 PATH 环境变量，其作用就是告诉 Shell 待执行命令的可执行文件可能存放的位置，也就是说，Shell 会在 PATH 变量包含的多个路径中逐个查找，直到找到为止(如果找不到，Shell 会提供用户“找不到此命令”)。</p>
</li>
</ol>`,r:{minutes:2.37,words:711},title:"命令执行",i:"play"},["/linux/command/excu","/linux/command/excu.md"]],["v-3ab05fa5","/linux/command/file.html",{y:"a",d:"2019-11-19T00:00:00.000Z",l:"2019年11月19日",c:["Linux"],e:`<h2> touch 命令</h2>
<p>需要注意的是，touch 命令不光可以用来创建文件(当指定操作文件不存在时，该命令会在当前位置建立一个空文件)，此命令更重要的功能是修改文件的时间参数(但当文件存在时，会修改此文件的时间参数)。</p>
<p>Linux 系统中，每个文件主要拥有 3 个时间参数(通过 stat 命令进行查看)，分别是文件的访问时间、数据修改时间以及状态修改时间:</p>
<ul>
<li>访问时间 (Access Time，简称 atime): 只要文件的内容被读取，访问时间就会更新。例如，使用 <code>cat</code> 命令可以查看文件的内容，此时文件的访问时间就会发生改变。</li>
<li>数据修改时间 (Modify Time，简称 mtime): 当文件的内容数据发生改变，此文件的数据修改时间就会跟着相应改变。</li>
<li>状态修改时间 (Change Time，简称 ctime): 当文件的状态发生变化，就会相应改变这个时间。比如说，如果文件的权限或者属性发生改变，此时间就会相应改变。</li>
</ul>`,r:{minutes:4.3,words:1291},title:"文件",i:"file"},["/linux/command/file","/linux/command/file.md"]],["v-7b0f6d5f","/linux/command/ln.html",{y:"a",d:"2019-11-20T00:00:00.000Z",l:"2019年11月20日",c:["Linux"],e:`<p>建立硬链接和软链接非常简单，那这两种链接有什么区别? 它们都有什么作用? 这才是链接文件最不容易理解的地方，我们分别来讲讲。</p>
`,r:{minutes:7.56,words:2267},title:"链接",i:"ask"},["/linux/command/ln","/linux/command/ln.md"]],["v-3ba103fe","/linux/command/other.html",{y:"a",d:"2019-11-19T00:00:00.000Z",l:"2019年11月19日",c:["Linux"],e:`<h2> cp 命令</h2>
<p>cp 命令，主要用来复制文件和目录，同时借助某些选项，还可以实现复制整个目录，以及比对两文件的新旧而予以升级等功能。</p>
<p>cp 命令的基本格式如下:</p>
<div class="language-shell-session" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">cp</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> 源文件 目标文件</span></span>
</code></pre></div>`,r:{minutes:10.93,words:3279},title:"其他文件命令",i:"sort"},["/linux/command/other","/linux/command/other.md"]],["v-72a3b29c","/linux/command/path.html",{y:"a",d:"2019-11-20T00:00:00.000Z",l:"2019年11月20日",c:["Linux"],e:`<h1> 环境变量</h1>
<h2> 变量</h2>
<p>变量是计算机系统用于保存可变值的数据类型，我们可以直接通过变量名称来提取到对应的变量值。在 Linux 系统中，环境变量是用来定义系统运行环境的一些参数，比如每个用户不同的家目录 (HOME)、邮件存放位置 (MAIL)等。
值得一提的是，Linux 系统中环境变量的名称一般都是大写的，这是一种约定俗成的规范。</p>
<p>我们可以使用 env 命令来查看到 Linux 系统中所有的环境变量，执行命令如下:</p>
<div class="language-shell-session" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">env</span></span></span>
<span class="token output">ORBIT_SOCKETDIR=/tmp/orbit-root
HOSTNAME=livecd.centos
GIO_LAUNCHED_DESKTOP_FILE_PID=2065
TERM=xterm
SHELL=/bin/bash
......
</span></code></pre></div>`,r:{minutes:5.03,words:1509},title:"环境变量",i:"shell"},["/linux/command/path","/linux/command/path.md"]],["v-02d56f66","/linux/command/temp.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["Linux"],e:`<h1> 其他指令</h1>
<h2> 文件</h2>
<h3> 创建文件</h3>
<ul>
<li>touch</li>
<li>vi</li>
</ul>
<h3> 编辑文件</h3>
<ul>
<li>vi</li>
</ul>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>使用 vi 命令后，默认进入浏览模式。</p>
<p>按 <code>i</code> 进入 insert 模式， 按 <code>ESC</code> 退出。</p>
<ol>
<li>
<p>命令模式下，输入: <code>/</code> 字符串</p>
<p>比如搜索 user, 输入 <code>/user</code></p>
<p>按下回车之后，可以看到 vim 已经把光标移动到该字符处和高亮了匹配的字符串</p>
</li>
<li>
<p>查看下一个匹配，按下 n(小写 n)</p>
</li>
<li>
<p>跳转到上一个匹配，按下 N(大写 N)</p>
</li>
<li>
<p>搜索后，我们打开别的文件，发现也被高亮了，怎么关闭高亮?</p>
</li>
</ol>
<p>命令模式下，输入 <code>:nohlsearch</code> 也可以 <code>:set nohlsearch</code>；当然，可以简写，<code>noh</code> 或者 <code>set noh</code>。</p>
</div>`,r:{minutes:3.66,words:1098},title:"其他指令"},["/linux/command/temp","/linux/command/temp.md"]],["v-f2e41e82","/linux/file/",{y:"a",d:"2019-11-17T00:00:00.000Z",l:"2019年11月17日",c:["Linux"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/linux/file/file.html" target="blank">Linux 文件</a></p>
</li>
<li>
<p><a href="/linux/file/dir.html" target="blank">Linux 目录</a></p>
</li>
<li>
<p><a href="/linux/file/mount.html" target="blank">挂载</a></p>
</li>
</ul>
`,r:{minutes:.08,words:24},title:"文件",i:"file"},["/linux/file/index.html","/linux/file/README.md"]],["v-7c524e2b","/linux/file/dir.html",{y:"a",d:"2019-11-17T00:00:00.000Z",l:"2019年11月17日",c:["Linux"],e:`<h2> Linux 文件目录结构</h2>
<p>学习 Linux，不仅限于学习各种命令，了解整个 Linux 文件系统的目录结构以及各个目录的功能同样至关重要。</p>
<p>使用 Linux 时，通过命令行输入 <code>ls -l /</code> 可以看到，在 Linux 根目录 (/) 下包含很多的子目录(称为一级目录)，例如 <code>bin</code>、<code>boot</code>、<code>dev</code> 等。同时，各一级目录下还含有很多子目录(称为二级目录)，比如 <code>/bin/bash</code>、<code>/bin/ed</code> 等。Linux 文件系统目录总体呈现树形结构，<code>/</code> 根目录就相当于树根。</p>`,r:{minutes:8.67,words:2600},title:"目录",i:"tree"},["/linux/file/dir","/linux/file/dir.md"]],["v-53becefe","/linux/file/file.html",{y:"a",d:"2019-11-17T00:00:00.000Z",l:"2019年11月17日",c:["Linux"],e:`<h2> 文件系统</h2>
<p>目录就相当于 Windows 中的文件夹，目录中存放的既可以是文件，也可以是其他的子目录，而文件中存储的是真正的信息。</p>
<p>文件系统的最顶层是由根目录开始的，系统使用“<code>/</code>”来表示根目录，在根目录之下的既可以是目录，也可以是文件，而每一个目录中又可以包含(子)目录或文件。如此反复就可以构成一个庞大的文件系统。
其实，使用这种树状、具有层次的文件结构主要目的是方便文件系统的管理和维护，想象一下，如果所有的文件都放在一个目录下，其文件系统的管理和维护将变成一场噩梦。</p>
<p>现实中也有许多类似的例子，例如在整个行政管理体制中，村民就相当于文件，他们住在一个村庄中，村庄就是存储村民的目录。许多村又组成了个乡，这个乡就相当于存储村的目录，依此类推，最终就构建出了一个庞大的行政区域管理结构图。</p>`,r:{minutes:5.2,words:1560},title:"文件",i:"file"},["/linux/file/file","/linux/file/file.md"]],["v-42f6fa5f","/linux/file/mount.html",{y:"a",d:"2019-11-17T00:00:00.000Z",l:"2019年11月17日",c:["Linux"],e:`<h1> Linux 挂载</h1>
<p>前面讲过，Linux 系统中“一切皆文件”，所有文件都放置在以根目录为树根的树形目录结构中。在 Linux 看来，任何硬件设备也都是文件，它们各有自己的一套文件系统(文件目录结构)。</p>
<p>因此产生的问题是，当在 Linux 系统中使用这些硬件设备时，只有将 Linux 本身的文件目录与硬件设备的文件目录合二为一，硬件设备才能为我们所用。合二为一的过程称为“挂载”。</p>
<p>如果不挂载，通过 Linux 系统中的图形界面系统可以查看找到硬件设备，但命令行方式无法找到。</p>
<p>挂载，指的就是将设备文件中的顶级目录连接到 Linux 根目录下的某一目录(最好是空目录)，访问此目录就等同于访问设备文件。</p>`,r:{minutes:2.13,words:639},title:"Linux 挂载",i:"mount"},["/linux/file/mount","/linux/file/mount.md"]],["v-50990237","/linux/intro/",{y:"a",d:"2019-11-15T00:00:00.000Z",l:"2019年11月15日",c:["Linux"],e:`<h1> Linux 简介</h1>
<ul>
<li>
<p><a href="/linux/intro/intro.html" target="blank">Linux 介绍</a></p>
</li>
<li>
<p><a href="/linux/intro/history.html" target="blank">Linux 历史</a></p>
</li>
<li>
<p><a href="/linux/intro/language.html" target="blank">Linux 编写语言</a></p>
</li>
<li>
<p><a href="/linux/intro/advantage.html" target="blank">Linux 优势</a></p>
</li>
<li>
<p><a href="/linux/intro/desktop.html" target="blank">Linux 桌面环境</a></p>
</li>
</ul>`,r:{minutes:.12,words:35},title:"Linux 简介",i:"info"},["/linux/intro/index.html","/linux/intro/README.md"]],["v-072ab185","/linux/intro/advantage.html",{y:"a",d:"2019-11-16T00:00:00.000Z",l:"2019年11月16日",c:["Linux"],e:`<h1> Linux 的优点</h1>
<p>相比 Windows 系统，Linux 系统有更好的稳定性。此外，Linux 还有如下优点:</p>
<ol>
<li>
<p>大量的可用软件及免费软件</p>
<p>Linux 系统上有着大量的可用软件，且绝大多数是免费的，比如声名赫赫的 Apache、Samba、PHP、MySQL 等，构建成本低廉，是 Linux 被众多企业青睐的原因之一。当然，这和 Linux 出色的性能是分不开的，否则，节约成本就没有任何意义。</p>
<p>但不可否认的是，Linux 在办公应用和游戏娱乐方面的软件相比 Windows 系统还很匮乏，所以，即便打游戏、看影片用的也是 Windows，至于 Linux，就把它用在擅长的服务器领域吧。</p>
</li>
<li>
<p>良好的可移植性及灵活注
Linux 系统有良好的可移植性，它几乎支持所有的 CPU 平台，这使得它便于裁剪和定制。我们可以把 Linux 放在 U 盘、光盘等存储介质中，也可以在嵌入式领域广泛应用。</p>
<p>如果读者希望不进行安装就体验 Linux 系统，则可以在网上下载一个 Live DVD 版的 Linux 镜像，刻成光盘放入光驱或者用虚拟机软件直接载入镜像文件，设置 CMOS/BIOS 为光盘启动，系统就会自动载入光盘文件，启动进入 Linux 系统。</p>
</li>
<li>
<p>优良的稳定性和安全性</p>
<p>著名的黑客埃里克•雷蒙德(EricS.Raymond)有一句名言: “足够多的眼睛，就可让所有问题浮现”。举个例子，假如笔者在演讲，台下人山人海，明哥中午吃饭不小心，有几个饭粒粘在衣领上了，分分钟就会被大家发现，因为看的人太多了；如果台下就稀稀落落两三个人且离得很远，那就算明哥衣领上有一大块油渍也不会被发现。</p>
<p>Linux 开放源代码，将所有代码放在网上，全世界的程序员都看得到，有什么缺陷和漏洞，很快就会被发现，从而成就了它的稳定性和安全注。</p>
</li>
<li>
<p>支持几乎所有的网络协议及开发语言</p>
<p>经常有初学的朋友问我，Linux 是不是对 TCP/IP 协议支持不好、是不是 Java 开发环境不灵之类的问题。前面在 UNIX 发展史中已经介绍了，UNIX 系统是与 C 语言、TCP/IP 协议一同发展起来的，而 Linux 是 UNIX 的一种，C 语言又衍生出了现今主流的语言 PHP、Java、C++ 等，而哪一个网络协议与 TCP/IP 无关呢? 所以，Linux 对网络协议和开发语言的支持很好。</p>
</li>
</ol>`,r:{minutes:2.31,words:693},title:"Linux 的优点",i:"compare"},["/linux/intro/advantage","/linux/intro/advantage.md"]],["v-9f906c18","/linux/intro/desktop.html",{y:"a",d:"2019-11-16T00:00:00.000Z",l:"2019年11月16日",c:["Linux"],e:`<h1> 桌面系统</h1>
<h2> KDE 桌面系统</h2>
<p>KDE 是 K Desktop Environment 的缩写，中文译为“K 桌面环境”。</p>
<p>KDE 是基于大名鼎鼎的 Qt 的，最初于 1996 年作为开源项目公布，并在 1998 年发布了第一个版本，现在 KDE 几乎是排名第一的桌面环境了。</p>
<p>许多流行的 Linux 发行版都提供了 KDE 桌面环境，比如 Ubuntu、Linux Mint、OpenSUSE、Fedora、Kubuntu、PC Linux OS 等。</p>
<p>KDE 和 Windows 比较类似，各位初学者相信都是 Windows 的用户，所以切换到 KDE 也不会有太大的障碍。</p>`,r:{minutes:6.53,words:1960},title:"桌面系统",i:"computer"},["/linux/intro/desktop","/linux/intro/desktop.md"]],["v-00bcff08","/linux/intro/history.html",{y:"a",d:"2019-11-15T00:00:00.000Z",l:"2019年11月15日",c:["Linux"],g:["介绍"],e:`<h1> Linux 和 UNIX</h1>
<p>UNIX 与 Linux 之间的关系是一个很有意思的话题。在目前主流的服务器端操作系统中，UNIX 诞生于 20 世纪 60 年代末，Windows 诞生于 20 世纪 80 年代中期，Linux 诞生于 20 世纪 90 年代初，可以说 UNIX 是操作系统中的"老大哥"，后来的 Windows 和 Linux 都参考了 UNIX。</p>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>现代的 Windows 系统已经朝着“图形界面”的方向发展了，和 UNIX 系统有了巨大的差异，从表面上甚至看不出两者的关联。</p>
</div>`,r:{minutes:12.49,words:3748},title:"Linux 和 UNIX",i:"time"},["/linux/intro/history","/linux/intro/history.md"]],["v-3419e764","/linux/intro/intro.html",{y:"a",d:"2019-11-15T00:00:00.000Z",l:"2019年11月15日",c:["Linux"],g:["介绍"],e:`<h1> Linux 简介</h1>
<p>Linux 内核最初只是由芬兰人林纳斯·托瓦兹 (Linus Torvalds) 在赫尔辛基大学上学时出于个人爱好而编写的。</p>
<p>Linux 是一套免费使用和自由传播的类 Unix 操作系统，是一个基于 POSIX 和 UNIX 的多用户、多任务、支持多线程和多 CPU 的操作系统。</p>
<p>Linux 能运行主要的 UNIX 工具软件、应用程序和网络协议。它支持 32 位和 64 位硬件。Linux 继承了 Unix 以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。</p>
<p>Linux 让开展各种实际有用且具有创造性的事情成为可能。例如，您可以在一个 U 盘上装载 Linux 的自生系统引导映像 (live boot image)，启动一台硬盘已经崩溃的计算机，之后査找并解决该问题。或者，因为 Linux 是一个真正的多用户操作系统，它具有非常好的私密性和稳定性，整个团队可以同时从本地或远程登录进行工作。</p>`,r:{minutes:6.48,words:1943},title:"Linux 简介",i:"info"},["/linux/intro/intro","/linux/intro/intro.md"]],["v-56f593aa","/linux/intro/language.html",{y:"a",d:"2019-11-16T00:00:00.000Z",l:"2019年11月16日",c:["Linux"],e:`<p>Linux 中大量使用脚本语言，而不是 C 语言!</p>
`,r:{minutes:7.31,words:2194},title:"语言",i:"language"},["/linux/intro/language","/linux/intro/language.md"]],["v-09bd279a","/linux/intro/startup.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> Linux 系统启动过程</h1>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>本篇教程以 CentOS 为例介绍系统的启动过程。</p>
</div>
<p>Linux 启动时我们会看到许多启动信息。</p>
<p>Linux 系统的启动过程并不是大家想象中的那么复杂，其过程可以分为 5 个阶段:</p>
<ul>
<li>内核的引导。</li>
<li>运行 init。</li>
<li>系统初始化。</li>
<li>建立终端 。</li>
<li>用户登录系统。</li>
</ul>`,r:{minutes:3.48,words:1045},title:"Linux 系统启动过程"},["/linux/intro/startup","/linux/intro/startup.md"]],["v-28e445b4","/linux/ubuntu/",{y:"a",d:"2019-11-21T00:00:00.000Z",l:"2019年11月21日",c:["Linux"],e:`<h1> ubuntu</h1>
<ul>
<li>
<p><a href="/linux/ubuntu/manage.html" target="blank">管理包</a></p>
</li>
<li>
<p><a href="/linux/ubuntu/debug.html" target="blank">开发软件</a></p>
</li>
<li>
<p><a href="/linux/ubuntu/webserver.html" target="blank">网络服务器相关</a></p>
</li>
<li>
<p><a href="/linux/ubuntu/lang.html" target="blank">语言切换</a></p>
</li>
</ul>`,r:{minutes:.1,words:31},title:"ubuntu",i:"ubuntu"},["/linux/ubuntu/index.html","/linux/ubuntu/README.md"]],["v-40785b1a","/linux/ubuntu/debug.html",{y:"a",d:"2019-11-21T00:00:00.000Z",l:"2019年11月21日",c:["Linux"],e:`<h1> 开发软件</h1>
<h2> 安装 VS Code</h2>
<ul>
<li>
<p>使用 snap</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> snap <span class="token function">install</span> <span class="token parameter variable">--classic</span> code
</code></pre></div></li>
<li>
<p>在 WSL 环境下 snap 无法使用，则使用以下命令安装 code 库。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://packages.microsoft.com/keys/microsoft.asc <span class="token operator">|</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token operator">&gt;</span> packages.microsoft.gpg
<span class="token function">sudo</span> <span class="token function">install</span> <span class="token parameter variable">-o</span> root <span class="token parameter variable">-g</span> root <span class="token parameter variable">-m</span> <span class="token number">644</span> packages.microsoft.gpg /usr/share/keyrings/
<span class="token function">sudo</span> <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" &gt; /etc/apt/sources.list.d/vscode.list'</span>
</code></pre></div><p>然后正常安装:</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> apt-transport-https
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> code <span class="token comment"># or code-insiders</span>
</code></pre></div></li>
</ul>`,r:{minutes:.91,words:273},title:"开发软件",i:"debug"},["/linux/ubuntu/debug","/linux/ubuntu/debug.md"]],["v-7d579877","/linux/ubuntu/lang.html",{y:"a",d:"2019-11-22T00:00:00.000Z",l:"2019年11月22日",c:["Linux"],e:`<h1> 语言切换</h1>
<p>查看当前语言包: <code>locale -a</code></p>
<p>中文语言是: <code>zh_CN.utf8</code></p>
<h2> 安装中文语言包</h2>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> language-pack-zh-hans
</code></pre></div>`,r:{minutes:.18,words:55},title:"语言切换",i:"language"},["/linux/ubuntu/lang","/linux/ubuntu/lang.md"]],["v-69b91c60","/linux/ubuntu/manage.html",{y:"a",d:"2019-11-21T00:00:00.000Z",l:"2019年11月21日",c:["Linux"],e:`<h1> 管理工具</h1>
<h2> apt-get</h2>
<p><code>apt-get</code> 命令默认的源在国内访问很慢，可以考虑换源。</p>
<ul>
<li>
<p>获取软件包更新:</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update
</code></pre></div></li>
<li>
<p>更新软件包:</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update
</code></pre></div></li>
<li>
<p>其他命令<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><a class="footnote-anchor" id="footnote-ref1">
</a></li><a class="footnote-anchor" id="footnote-ref1">
</a></ul>`,r:{minutes:1.15,words:344},title:"管理工具",i:"tool"},["/linux/ubuntu/manage","/linux/ubuntu/manage.md"]],["v-14aa1354","/linux/ubuntu/webserver.html",{y:"a",d:"2019-11-22T00:00:00.000Z",l:"2019年11月22日",e:`<h1> 网络服务器相关</h1>
<h2> ftp</h2>
<h3> vsftpd</h3>
<ul>
<li>
<p>安装</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> <span class="token function">install</span> vsftpd <span class="token function">ftp</span>
</code></pre></div></li>
<li>
<p>配置</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/vsftpd.conf
</code></pre></div><p>至少要更改:</p>
<div class="language-ini" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">write_enable</span><span class="token punctuation">=</span><span class="token value attr-value">YES</span>
<span class="token key attr-name">utf8_filesystem</span><span class="token punctuation">=</span><span class="token value attr-value">YES</span>
</code></pre></div></li>
</ul>`,r:{minutes:1.18,words:355},title:"网络服务器相关",i:"network"},["/linux/ubuntu/webserver","/linux/ubuntu/webserver.md"]],["v-8a029292","/note/flutter/",{y:"a",d:"2022-12-06T14:18:22.000Z",e:`<h1> Update Flutter Project Deps</h1>
<h2> Gradle</h2>
<p>Versions can be found here: <a href="https://gradle.org/releases/" target="_blank" rel="noopener noreferrer">https://gradle.org/releases/</a></p>
<h2> Kotlin Plugin</h2>
<p>Versions can be found here: <a href="https://plugins.gradle.org/plugin/org.jetbrains.kotlin.jvm" target="_blank" rel="noopener noreferrer">https://plugins.gradle.org/plugin/org.jetbrains.kotlin.jvm</a></p>`,r:{minutes:.16,words:49},title:"Update Flutter Project Deps"},["/note/flutter/index.html","/note/flutter/README.md"]],["v-3c4b02b8","/note/fall/1.html",{y:"a",d:"2014-08-18T00:00:00.000Z",l:"2014年8月18日",c:["随笔"],g:["秋之思"],e:`<div style="text-align:center">
<p>毕竟已是秋了，早晚有了些许凉意，</p>
<p>但正午的阳光还有些强烈，</p>
<p>仿佛夏的余热还没有散去。</p>
<p>八月桂花香馨远，</p>
<p>那丝丝缕缕的香沁人心脾，</p>
<p>那浅浅淡雅能瞬间饱满单薄的心，</p>
<p>让内心喜悦如莲。</p>
<p>燥热了一夏，</p>
<p>时光终于慢了下来，</p>
<p>慢得仿佛能抓住岁月的脚步;</p>
<p>日子终于静了下来，</p>
<p>静的仿佛能听见花开的声音。</p>
<p>喜欢这样安恬的静好，</p>
<p>可以坐下来喝一杯茶，</p>
<p>品一些文字，</p>
<p>让一颗浮躁的心在喧嚣中沉淀，</p>
<p>回眸，凝视，闭眼，</p>
<p>纵有万千思绪，</p>
<p>都已风轻云淡。</p>
</div>`,r:{minutes:.64,words:193},title:"秋之思【一】",i:"autumn"},["/note/fall/1","/note/fall/1.md"]],["v-4d4858aa","/note/fall/10.html",{y:"a",d:"2014-08-30T00:00:00.000Z",l:"2014年8月30日",c:["随笔"],e:`<h1> 秋之思【十】</h1>
<div style="text-align:center">
<p>我曾假如</p>
<p>我是一片落叶，</p>
<p>但我不会停留</p>
<p>于你的窗前，</p>
<p>我会落于月下</p>
<p>你常走的曲径，</p>
<p>凝视你的容颜，</p>
<p>记下你的足迹，</p>
<p>数着你的流年，</p>
<p>伴着阵阵夜风，</p>
<p>紧跟你的影子，</p>
<p>流离于你的梦，</p>
<p>释一季情怀，</p>
<p>解一程寂寞，</p>
<p>诗意地迷恋于</p>
<p>你的红尘。</p>
</div>
`,r:{minutes:.36,words:107},title:"秋之思【十】",i:"autumn"},["/note/fall/10","/note/fall/10.md"]],["v-4efd3149","/note/fall/11.html",{y:"a",d:"2014-08-31T00:00:00.000Z",l:"2014年8月31日",c:["随笔"],e:`<h1> 秋之思【十一】</h1>
<div style="text-align:center">
<p>寂寂芸窗，</p>
<p>魂系南天流芳。</p>
<p>记初见怡情烂漫且将忧忘，</p>
<p>浮萍随去，落叶纷飞数斜阳。</p>
<p>♢</p>
<p>露湿衣裳，</p>
<p>香彻惹乱柔肠。</p>
<p>玉阶前暗渡冰心魂画琳琅，</p>
<p>独行云间，漫舞风情韵幽香。</p>
<p>♢</p>
<p>青山苍茫，</p>
<p>无非阡繁道长。</p>
<p>看今朝恬淡从容背起行囊，</p>
<p>抽丝破茧，化蝶方能见阳光。</p>
</div>
`,r:{minutes:.38,words:115},title:"秋之思【十一】",i:"autumn"},["/note/fall/11","/note/fall/11.md"]],["v-50b209e8","/note/fall/12.html",{y:"a",d:"2014-09-01T00:00:00.000Z",l:"2014年9月1日",c:["随笔"],e:`<h1> 秋之思【十二】</h1>
<p>月满西楼，几多愁? 苍穹无语，谁解心曲?</p>
<p>几多相思染双眉，年华无悔!</p>
<div style="text-align:center">
<p>♢</p>
</div>
<p>孤月清冷，群山失色，望银河，相思成灾。</p>
<p>罢，罢，罢! 空留佳话，冷落芳华!</p>
<div style="text-align:center">
<p>♢</p>
</div>
<p>闲依小窗，对月独酌。</p>
<p>万种心事，千种相思，都付与花草树木。</p>
`,r:{minutes:.32,words:95},title:"秋之思【十二】",i:"autumn"},["/note/fall/12","/note/fall/12.md"]],["v-5266e287","/note/fall/13.html",{y:"a",d:"2014-09-02T00:00:00.000Z",l:"2014年9月2日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思【十三】</h1>
<p>桃园恋，山水相依遥相盼，余恨绵绵。</p>
<div style="text-align:center">
<p>♢</p>
</div>
<p>常相思，空负，桃花堪折枝，情待何时?</p>
<div style="text-align:center">
<p>♢</p>
</div>
<p>碧云天，苍穹高远，今昔别梦寒，琵琶私语泪涟涟，往事随云烟!</p>
`,r:{minutes:.24,words:72},title:"秋之思【十三】",i:"autumn"},["/note/fall/13","/note/fall/13.md"]],["v-541bbb26","/note/fall/14.html",{y:"a",d:"2014-09-03T00:00:00.000Z",l:"2014年9月3日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思【十四】</h1>
<p>肩上蝶，袖底清风，如烟归去，散落天涯。</p>
<div style="text-align:center">
<p>♢</p>
</div>
<p>碧波亭，繁花似锦，翘首天涯何为暖?</p>
<p>羽翼化蝶，衣袂飘飘，怎能红尘恋?</p>
<div style="text-align:center">
<p>♢</p>
</div>
<p>惜别，痴念，月残上弦!</p>
`,r:{minutes:.23,words:70},title:"秋之思【十四】",i:"autumn"},["/note/fall/14","/note/fall/14.md"]],["v-55d093c5","/note/fall/15.html",{y:"a",d:"2014-09-04T00:00:00.000Z",l:"2014年9月4日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思【十五】</h1>
<p>红尘恋，清欢浅浅，梦不相连。转朱阁，低绮户，风尘无路。</p>
<div style="text-align:center">
<p>♢</p>
</div>
<p>淡相思，深深怨，浮华尽散，何处觅尘缘?</p>
<div style="text-align:center">
<p>♢</p>
</div>
<p>春花秋月，几度寒暑。</p>
<p>关山万座情难阻，一片冰心在玉壶。</p>
`,r:{minutes:.26,words:78},title:"秋之思【十五】",i:"autumn"},["/note/fall/15","/note/fall/15.md"]],["v-57856c64","/note/fall/16.html",{y:"a",d:"2014-09-06T00:00:00.000Z",l:"2014年9月6日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思【十六】</h1>
<div style="text-align:center">
<p>萧瑟的风穿过枝头累累硕果</p>
<p>把秋渲染，</p>
<p>飘零的落叶夹着一笺心语</p>
<p>悠然地呢喃，</p>
<p>惆怅的心裹着一种情愫</p>
<p>静静地缠绵，</p>
<p>是谁触动了那根相思的心弦，</p>
<p>让感动滚烫的泪泛滥，</p>
<p>让紧锁的黛眉舒展?</p>
<p>每当秋叶飘零前，</p>
<p>我便抽出那长长的牵念，</p>
<p>拾起一地相思，</p>
<p>染尽枫红菊黄苍天蓝；</p>
<p>铺开一张秋笺</p>
<p>书尽绕指柔情，</p>
<p>让你我的心语共舞，</p>
<p>让你我的心灵永远缠绵。</p>
<p>一笺一语一飘香，</p>
<p>两心一意话情长，</p>
<p>即使望断天涯又何妨?</p>
<p>♢</p>
<p>一笺一悠扬，</p>
<p>一砚一寒凉，</p>
<p>一墨一凝香，</p>
<p>一笔一牵肠，</p>
<p>一言一语寄相思，</p>
<p>一字一句荡心房。</p>
<p>你给我的心空带来了一片敞亮，</p>
<p>给我的生命带来了永久的芬芳。</p>
<p>无论世态怎么炎凉，</p>
<p>我都会沉醉于秋阳</p>
<p>坐看云起，嫣然浅唱，</p>
<p>让美好永驻，让情感激昂。</p>
</div>`,r:{minutes:.91,words:274},title:"秋之思【十六】",i:"autumn"},["/note/fall/16","/note/fall/16.md"]],["v-593a4503","/note/fall/17.html",{y:"a",d:"2014-09-09T00:00:00.000Z",l:"2014年9月9日",c:["随笔"],e:`<h1> 秋之思【十七】</h1>
<div style="text-align:center">
<p>喜欢独自一人，</p>
<p>去收集那一朵朵云的白，</p>
<p>去采集秋日阳光的融暖。</p>
<p>沿着这一份青翠找来。</p>
<p>安放了光阴的青藤，</p>
<p>听那风铃的细微声响，</p>
<p>看那正合时宜的花草。</p>
<p>如果可以，</p>
<p>我想牵着岁月的手，</p>
<p>一起走过安之若素的浅秋。</p>
<p>或许，会多了些烟火的味道。</p>
<p>然而，琐碎的时光，</p>
<p>终寻不到些许烟火存留的气息，</p>
<p>只有寸寸重叠的光阴，</p>
<p>在岁月的花篮中繁花锦簇，</p>
<p>唯美，而忧伤。</p>
</div>`,r:{minutes:.53,words:159},title:"秋之思【十七】",i:"autumn"},["/note/fall/17","/note/fall/17.md"]],["v-5aef1da2","/note/fall/18.html",{y:"a",d:"2015-09-08T00:00:00.000Z",l:"2015年9月8日",c:["随笔"],e:`<h1> 秋之思【十八】</h1>
<div style="text-align:center">
<p>又是一年匆匆，</p>
<p>走过了春的明媚，</p>
<p>走过了夏的繁盛，</p>
<p>还没来得及多想，</p>
<p>刚一转身，</p>
<p>便又与秋不期而遇。</p>
<p>不知不觉间，</p>
<p>时光婉转，岁月安然；</p>
<p>与高二分别，和高三见面。</p>
<p>是的，</p>
<p>累了，忙了，压力也大了，</p>
<p>但仍我仍然渴望，</p>
<p>那些在学习的空余间，</p>
<p>用自己的笔尖，</p>
<p>将生活的诗意书写于纸面，</p>
<p>寄托对逝去的同窗时光的思念。</p>
<p>面对婉约的春，活泼的夏，</p>
<p>也许我并没有太多感触，</p>
<p>笔，总是拿起而又放下。</p>
<p>而每每遇见秋，</p>
<p>就犹如故人归，</p>
<p>不需要过多的寒喧，</p>
<p>而就像有些喜欢，</p>
<p>只是一眼，便会妥帖在心里。</p>
<p>静静端坐于时光的门槛，</p>
<p>看一片落叶点缀了秋色，</p>
<p>见一畦清露渲染了秋凉，</p>
<p>一季落花飘进秋的门扉，</p>
<p>那被吹散在风中的落叶，</p>
<p>还在与何人，喃喃私语?</p>
<p>终是沉寂了，</p>
<p>经过了夏的盛放，</p>
<p>走进了秋的萧索，</p>
<p>有些遇见是繁华的，</p>
<p>而有些碰面亦会有寂寥。</p>
<p>时光给予我们一个姹紫嫣红的相逢，</p>
<p>却为我们留下一个风轻云淡的背影，</p>
<p>也许唯有那些花开的记忆，</p>
<p>才是永恒不变的芬芳。</p>
<p>以前写文，</p>
<p>喜欢用些华丽的词语，</p>
<p>来装饰要写的人或事，</p>
<p>注重美感与诗意。</p>
<p>而现在，</p>
<p>我只想用平实的语言，</p>
<p>去书写一份简单。</p>
<p>其实生活也是同样，</p>
<p>无论曾经多么繁华，</p>
<p>都会回归简单的，</p>
<p>就如这安静的秋，</p>
<p>虽没有了姹紫嫣红的艳丽，</p>
<p>却有着成熟的况味和美感。</p>
</div>`,r:{minutes:1.5,words:451},title:"秋之思【十八】",i:"autumn"},["/note/fall/18","/note/fall/18.md"]],["v-5ca3f641","/note/fall/19.html",{y:"a",d:"2015-09-09T00:00:00.000Z",l:"2015年9月9日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思【十九】</h1>
<div style="text-align:center">
<p>我爱秋的明媚，</p>
<p>也爱秋的静美，</p>
<p>秋是温婉的，</p>
<p>如院子里桂花的芬芳；</p>
<p>秋是明净的，</p>
<p>如白云悠悠的天空；</p>
<p>秋是深邃的，</p>
<p>如清晨波光淡影的湖面。</p>
<p>抬头，</p>
<p>于秋阳中仰望天空，</p>
<p>一朵悄然而过的流云，</p>
<p>遮住暖暖的光线，</p>
<p>远处，山，水，云，树</p>
<p>仿佛重叠在视线中，</p>
<p>天高，云淡，</p>
<p>伴着我一颗纯净无尘的秋心。</p>
<p>秋风中，</p>
<p>校园里银杏树的叶子</p>
<p>在秋风中刚刚泛黄，</p>
<p>比起那些枝繁叶茂的深绿，</p>
<p>更显得有韵味。</p>
<p>其实我觉得，</p>
<p>一树风景足以影映四季，</p>
<p>从萌芽到初绽，</p>
<p>再到繁盛和枯落，</p>
<p>途经的是从荣到枯的过程，</p>
<p>也是一种生命沉淀的美丽。</p>
<p>喜欢那句:</p>
<p>生活不是浮在纸上的华丽，而是沉在书中的寂静，谁能数载春风不落? 终是要收敛的，相信能够隐忍的种种都是生命的花朵，给花一份温柔，又何尝不是给自己一
缕明媚?</p>
<p>一直以低温的姿态，</p>
<p>前行于尘世间，</p>
<p>听风轻吟，</p>
<p>观雨潇潇，</p>
<p>不求热烈，</p>
<p>只求安恬。</p>
<p>读书，</p>
<p>书里含香，</p>
<p>字里有情，</p>
<p>喝茶，</p>
<p>半杯是安暖，</p>
<p>半杯是清凉。</p>
<p>总是以为，</p>
<p>最好的懂得会在文字间，</p>
<p>于是喜欢将那些</p>
<p>打马而过的往事，</p>
<p>曾经的山长水阔，</p>
<p>于文字中倾诉。</p>
<p>可终有一天，</p>
<p>素笺上的小字会旧，</p>
<p>豆蒄上的相思会开老，</p>
<p>唯剩下一朵寂寞的字符，</p>
<p>就如经过一场盛大的狂欢之后，</p>
<p>便是长长的寂廖。</p>
</div>`,r:{minutes:1.44,words:433},title:"秋之思【十九】",i:"autumn"},["/note/fall/19","/note/fall/19.md"]],["v-3dffdb57","/note/fall/2.html",{y:"a",d:"2014-08-19T00:00:00.000Z",l:"2014年8月19日",c:["随笔"],g:["秋之思"],e:`<div style="text-align:center">
<p>浅秋八月，晨暮微凉。</p>
<p>采集最后一抹微温，</p>
<p>收在时光深处，</p>
<p>与夏末作别，</p>
<p>与初秋浅欢，</p>
<p>与天涯对望。</p>
<p>忧伤的不是这个夏天，</p>
<p>而是没有你的夏天。</p>
<p>你我终是佛经里的那朵彼岸花，</p>
<p>我是叶，你是花，</p>
<p>花开千年、花落千年，</p>
<p>叶凋千年、叶生千年，</p>
<p>花叶永不见。</p>
<p>如今，见与不见已不重要，</p>
<p>只要心依情守，相念不忘，</p>
<p>足矣!</p>
</div>`,r:{minutes:.45,words:135},title:"秋之思【二】",i:"autumn"},["/note/fall/2","/note/fall/2.md"]],["v-fba2d82a","/note/fall/20.html",{y:"a",d:"2015-09-15T00:00:00.000Z",l:"2015年9月15日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思【二十】</h1>
<div style="text-align:center">
<p>今日醒的很早，</p>
<p>站在浅秋清晨的薄雾中，</p>
<p>不禁想起了那句——</p>
<p>谁念西风独自凉!</p>
<p>心中，便有些寂寂然。</p>
<p>秋，</p>
<p>终是有些薄凉的季节，</p>
<p>盛夏的热情也沉了下来。</p>
<p>有时候，一些东西，</p>
<p>由热转凉，辗转过了一季，</p>
<p>却更有一番独特风味。</p>
<p>夏的繁盛，</p>
<p>从那片绿色中滑落，</p>
<p>走进了秋的诗行。</p>
<p>秋的微风，</p>
<p>漫过了小草的清露，</p>
<p>在林间流淌。</p>
<p>连那些路边的小花儿，</p>
<p>开的也不再张扬，</p>
<p>却变得含蓄和丰盈起来，</p>
<p>仿佛经过了夏的喧嚣，</p>
<p>走过了那片繁华，</p>
<p>学会了何为沉稳，</p>
<p>理解了暗香盈袖。</p>
<p>夏的画卷，</p>
<p>总显得太妩媚，</p>
<p>而秋的素描，</p>
<p>就多了份内涵。</p>
<p>那一抹有些厚重的色彩，</p>
<p>便是季节书写的美感。</p>
<p>走在秋的路上，</p>
<p>凉风细细，时光走笔，</p>
<p>夏已变成回忆了，</p>
<p>慢慢的身边的风景</p>
<p>都会变成秋天的模样，</p>
<p>那又有什么关系，</p>
<p>总有一天，</p>
<p>我们说过的话，</p>
<p>做过的事，</p>
<p>走过的路，</p>
<p>都会变成过往的风景，</p>
<p>但那些曾入眼入心的美好，</p>
<p>却会一直停留在心底。</p>
<p>季节辗转间，</p>
<p>没有为谁许下永远。</p>
<p>但却因为懂得，所以心安。</p>
<p>每个季节</p>
<p>都有属于自己的美丽。</p>
<p>也许人生碌碌，</p>
<p>听几声鸟呜，</p>
<p>闻几处花香，</p>
<p>就能与一处风景不期而遇，</p>
<p>与一缕清风温柔相待，</p>
<p>这，</p>
<p>也许便是慈悲和圆满罢。</p>
</div>`,r:{minutes:1.37,words:410},title:"秋之思【二十】",i:"autumn"},["/note/fall/20","/note/fall/20.md"]],["v-f83926ec","/note/fall/21.html",{y:"a",d:"2016-09-04T00:00:00.000Z",l:"2016年9月4日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思【二十一】</h1>
<div style="text-align:center">
<p>夏的燥热还未褪去，</p>
<p>秋天便来了。</p>
<p>那些关于此夏的文字，</p>
<p>还没来得及整理，</p>
<p>就将被遗忘在秋天里;</p>
<p>那些关于此夏的回忆，</p>
<p>还未来得及敛拾，</p>
<p>就将被吹散在秋天里。</p>
<p>♢</p>
<p>其实人的一生中，</p>
<p>也总会有来不及，</p>
<p>有些风景，还来不及欣赏，便已远去;</p>
<p>有些爱意，还来不及说出，便已逝去;</p>
<p>有些故事，还来不及开始，便是结局。</p>
<p>就像席慕容在多年前的诗中写道，</p>
<p>“其实我们一直都在错过，</p>
<p>错过了昨天，又错过了今朝。”</p>
<p>♢</p>
<p>许久心中无字，</p>
<p>也许是随着年龄增长，</p>
<p>内心趋于平和了，</p>
<p>对爱情的浪漫没有那么多期待，</p>
<p>对友情的来去也渐渐变得淡然，</p>
<p>对生活的起起落落也学会承受。</p>
<p>光阴，终是一把刻刀，</p>
<p>刻就了我的波澜不惊。</p>
<p>也许是高中学路上走得太忙碌，</p>
<p>匆忙间都来不及触摸光阴的脉落，</p>
<p>只好期待着这个秋天，</p>
<p>放慢脚步，欣赏风景。</p>
<p>♢</p>
<p>人就是要学会接受。</p>
<p>如果你无法改变，</p>
<p>唯有调整自己的心情，</p>
<p>忘记该忘记的，</p>
<p>妥贴该收藏的。</p>
<p>♢</p>
<p>站在有些凉意的秋风中，</p>
<p>看远山依旧葱绿，</p>
<p>想像着这个秋天，</p>
<p>会遇见怎样的人，</p>
<p>经历怎样的故事。</p>
<p>也许会遇见一朵夕颜花正开，</p>
<p>也许能在松树下恰逢一支松鼠；</p>
<p>也许能在一轮初升明月下，</p>
<p>遇见携手看花的那个人；</p>
<p>也许能在枫红的时候，</p>
<p>收集温暖，以备秋凉。</p>
</div>`,r:{minutes:1.44,words:433},title:"秋之思【二十一】",i:"autumn"},["/note/fall/21","/note/fall/21.md"]],["v-f4cf75ae","/note/fall/22.html",{y:"a",d:"2016-09-07T00:00:00.000Z",l:"2016年9月7日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思【二十二】</h1>
<p>刚刚勉励了自己不要悲秋，可是动起笔来，还是不可避免的黯然神伤，秋天，承载了我太多太多的回忆，也结束了数个让我无数个夜晚落寞的故事。思绪又回到了那些失落的过往，于是，拾起了刚放下的笔，写了大学中的这第二首诗，献给自己的悲凉的过往</p>
<div style="text-align:right">
<p>——引子</p>
</div>
<div style="text-align:center">
<p>时光，</p>
<p>将季节的脉络生生分散，</p>
<p>也把那么多的来不及，</p>
<p>于岁月的深谷里埋葬。</p>
<p>♢</p>
<p>或许我们每一个人，</p>
<p>都是光阴的过客。</p>
<p>深厚的友谊默契，</p>
<p>也会在季节更替的烟尘中渐行渐远。</p>
<p>所以我在才会秋水长天里，</p>
<p>守着寂寞，独自写诗，</p>
<p>将那些念，折叠妥贴，</p>
<p>不让心在散尽离别的忧伤后，</p>
<p>忘了自己的归期。</p>
<p>♢</p>
<p>晨曦里的清露，</p>
<p>伴着月华和星光点点，</p>
<p>将一颗初心，</p>
<p>染上季节的清寒。</p>
<p>披一件相思的衣衫，</p>
<p>驻足在宿舍的窗前，</p>
<p>回忆那些落在心中的</p>
<p>千回百转;</p>
<p>沉淀那些短短淡薄的</p>
<p>丝丝缘份。</p>
<p>♢</p>
<p>是不是一地落花，</p>
<p>弄疼了一笺心事，</p>
<p>是不是落花的泪，</p>
<p>化作这一周的阵雨，</p>
<p>一直淅淅沥沥，</p>
<p>涟漪着离人的心澜。</p>
<p>♢</p>
<p>不渴望花的美丽，</p>
<p>只愿做一片叶子，</p>
<p>依风而眠，</p>
<p>沐雨而浴，</p>
<p>也许终有一天，</p>
<p>我会看惯流水和落花的聚散，</p>
<p>那颗悸动而感伤心，</p>
<p>也就学会了与俗世相安。</p>
</div>`,r:{minutes:1.36,words:409},title:"秋之思【二十二】",i:"autumn"},["/note/fall/22","/note/fall/22.md"]],["v-f165c470","/note/fall/23.html",{y:"a",d:"2016-09-07T00:00:00.000Z",l:"2016年9月7日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思【二十三】</h1>
<div style="text-align:center">
<p>为何秋天使人惆怅?</p>
<p>只要心中敞亮，</p>
<p>再黯淡的日子也可将幸福畅想，</p>
<p>再无奈的日子也有清新的供养。</p>
<p>♢</p>
<p>也许寂寞会把人捆绑，</p>
<p>但无论怎样，</p>
<p>挺起胸膛，</p>
<p>笑对沧桑，</p>
<p>心，就能变成宽阔的海洋。</p>
<p>♢</p>
<p>秋舟的桅杆挂一串无忧铃铛，</p>
<p>紧握住秋天的橹桨，</p>
<p>携带起秋梦的希望，</p>
<p>去迎接未来的风浪。</p>
<p>♢</p>
<p>只要你学会坚强，</p>
<p>一切都无法阻挡，</p>
<p>就算花残花谢也不会绝望，</p>
<p>若携一路菊香，</p>
<p>秋日的私语便能化成美丽的诗行。</p>
<p>♢</p>
<p>树叶终会变黄，</p>
<p>可那又怎样?</p>
<p>凄也无妨，</p>
<p>黯也无伤。</p>
<p>种一缕念想</p>
<p>在秋的土壤，</p>
<p>赏着旖旎阳光，</p>
<p>等待幸福下一次叩访。</p>
<p>♢</p>
<p>迷离时向着远方，</p>
<p>煮酒论诗行，</p>
<p>追忆美好时光，</p>
<p>轻轻道一声“别来无恙”，</p>
<p>让秋的忧伤随着落叶入土安葬。</p>
<p>然后，靠着菱窗，</p>
<p>静静看红尘过往……</p>
</div>`,r:{minutes:.9,words:270},title:"秋之思【二十三】",i:"autumn"},["/note/fall/23","/note/fall/23.md"]],["v-edfc1332","/note/fall/24.html",{y:"a",d:"2016-09-12T00:00:00.000Z",l:"2016年9月12日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思【二十四】</h1>
<div style="text-align:center">
<p>下了晚自习，</p>
<p>一个人行走在陌上，</p>
<p>晚风扑面吹迎，</p>
<p>已有些凉意。</p>
<p>秋毕竟是来了，</p>
<p>吹得校园的小径，</p>
<p>落叶缤纷。</p>
<p>无论你适不适应，</p>
<p>身边的一切，</p>
<p>都已换了装，</p>
<p>卸了妆，</p>
<p>改了景。</p>
<p>♢</p>
<p>人生山水，</p>
<p>山重水复，</p>
<p>总会有聚散离合，</p>
<p>又何必去问——</p>
<p>是叶的零落，</p>
<p>是树的冷漠，</p>
<p>还是风的不挽留?</p>
</div>`,r:{minutes:.4,words:121},title:"秋之思【二十四】",i:"autumn"},["/note/fall/24","/note/fall/24.md"]],["v-ea9261f4","/note/fall/25.html",{y:"a",d:"2016-09-13T00:00:00.000Z",l:"2016年9月13日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思【二十五】</h1>
<div style="text-align:center">
<p>红尘多枝蔓，</p>
<p>要走过多少的路，</p>
<p>赏过多少的景，</p>
<p>方能和那个懂得的人，</p>
<p>笑看春山，静享秋月?</p>
<p>我曾爱过，在那绚烂的夏，</p>
<p>我期待着邂逅，在这多情的秋。</p>
<p>♢</p>
<p>生命中，</p>
<p>无论遇见谁，</p>
<p>都是该有的缘份，</p>
<p>无论会有怎样的结局，</p>
<p>都是上天最好的安排，</p>
<p>都该珍惜，</p>
<p>就像——</p>
<p>与秋重逢，</p>
<p>与你遇见。</p>
<p>♢</p>
<p>榈庭多落叶，</p>
<p>慨然知已秋，</p>
<p>岁月风烟处，</p>
<p>一半似温暖，</p>
<p>一半恰薄凉，</p>
<p>在此秋景中，</p>
<p>唯愿你安好。</p>
</div>`,r:{minutes:.53,words:159},title:"秋之思【二十五】",i:"autumn"},["/note/fall/25","/note/fall/25.md"]],["v-e728b0b6","/note/fall/26.html",{y:"a",d:"2016-11-04T00:00:00.000Z",l:"2016年11月4日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思【二十六】</h1>
<div style="text-align:center">
<p>来不及体会收获的喜悦，</p>
<p>秋便于我们挥手告别了。</p>
<p>风起风落，叶落满肩;</p>
<p>风声渐远，绿渐消散。</p>
<p>秋去树枯，诠释凋零;</p>
<p>冬来叶落，昭示冷寂。</p>
<p>秋雨淋漓，</p>
<p>一纸素笺，写下往事云烟;</p>
<p>秋风薄凉，</p>
<p>晚秋暮风，吹过微白发梢。</p>
<p>树影斑驳，枯叶落纷纷;</p>
<p>长风浩荡，薄衣不胜寒。</p>
<p>一路繁华，消瘦秋风里。</p>
<p>那年说过的不悔，</p>
<p>隔着散落的光阴，</p>
<p>风烟俱散。</p>
<p>似这凋零的叶，</p>
<p>从树上落下，</p>
<p>凋零盛放，唯有己知。</p>
<p>曾怀抱着一份执着入怀，</p>
<p>细数光阴——</p>
<p>看桃花落，见杏花开，</p>
<p>直至如今——</p>
<p>菊花渐谢，初雪莅临，</p>
<p>究竟是自己忘了回眸，</p>
<p>还是时光苍老了初心?</p>
</div>`,r:{minutes:.72,words:216},title:"秋之思【二十六】",i:"autumn"},["/note/fall/26","/note/fall/26.md"]],["v-3fb4b3f6","/note/fall/3.html",{y:"a",d:"2014-08-19T00:00:00.000Z",l:"2014年8月19日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思【三】</h1>
<div style="text-align:center">
<p>推开窗，</p>
<p>吹进的风里已带有丝丝的清凉，</p>
<p>窗外的景色还似与昨天一样，</p>
<p>改变的只是时间已八月未央，</p>
<p>季节悄然间走进了浅秋的诗行。</p>
<p>围墙角的爬山虎藤上黄绿相间，</p>
<p>随风飘然而下的叶片黏在地上，</p>
<p>变成岁月里一抹挥不去的苍凉。</p>
<p>这半是明媚、半是忧伤的季节，</p>
<p>好似那些缠缠绕绕的旧日彷徨，</p>
<p>在薄凉里有那点点升温的迷茫，</p>
<p>在繁杂易逝的岁月里静静流淌。</p>
</div>`,r:{minutes:.54,words:161},title:"秋之思【三】",i:"autumn"},["/note/fall/3","/note/fall/3.md"]],["v-41698c95","/note/fall/4.html",{y:"a",d:"2014-08-20T00:00:00.000Z",l:"2014年8月20日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思【四】</h1>
<div style="text-align:center">
<p>浅秋若作画，落叶既为诗。</p>
<p>在这万物飘零的季节，</p>
<p>并不是一种夜凉如水，</p>
<p>也不是一抹淡淡忧伤，</p>
<p>而是在</p>
<p>那几片唱着离歌的黄叶里，</p>
<p>懂得了从容而洒脱的悠然，</p>
<p>还有从那片空寂的群山里，</p>
<p>读得了隐逸与豪迈的沧桑。</p>
<p>那里有走不尽的落叶小径，</p>
<p>还有漫天遍野的黄叶飘飘，</p>
<p>双脚旁是窸窸窣窣的声响，</p>
<p>空气中还有叶脉里的清香。</p>
<p>静听秋风过耳，任衣袂飞扬，</p>
<p>丝丝的发拂过脸庞，</p>
<p>清欢恬淡，浅笑眉弯，</p>
<p>在这空灵的世界里寻缕幽玄，</p>
<p>在这飘渺的云烟里一笑如禅。</p>
</div>`,r:{minutes:.66,words:197},title:"秋之思【四】",i:"autumn"},["/note/fall/4","/note/fall/4.md"]],["v-431e6534","/note/fall/5.html",{y:"a",d:"2014-08-21T00:00:00.000Z",l:"2014年8月21日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思【五】</h1>
<div style="text-align:center">
<p>浅秋，静守时间的光年。</p>
<p>我在季节的暖光里，</p>
<p>追逐那蝶翼的翕动，</p>
<p>捻一瓣细微的花语，</p>
<p>颤醒了一萝青藤的呢喃。</p>
<p>依着情绪的彩铅，</p>
<p>在心事上抹下了</p>
<p>紫色的薰衣草，</p>
<p>火红的枫叶，</p>
<p>金黄的麦田，</p>
<p>含着馨香宁好，</p>
<p>于安逸岁月里面，</p>
<p>留下了静默无言。</p>
<p>♢</p>
<p>阳光，踮起脚尖，</p>
<p>轻盈的亲吻眼睑，</p>
<p>清幽了风的暖意，</p>
<p>吹散了雨丝连绵。</p>
<p>于是我便把秋的诗篇</p>
<p>叙述在这份安宁间。</p>
<p>那细微的欢喜，</p>
<p>你可听见?</p>
</div>`,r:{minutes:.55,words:165},title:"秋之思【五】",i:"autumn"},["/note/fall/5","/note/fall/5.md"]],["v-44d33dd3","/note/fall/6.html",{y:"a",d:"2014-08-25T00:00:00.000Z",l:"2014年8月25日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思【六】</h1>
<div style="text-align:center">
<p>每当踏入秋凉的季节，</p>
<p>我总会心怀感想。</p>
<p>看着渐渐泛黄的小草，</p>
<p>注视略带红晕的枫叶，</p>
<p>总会觉得有些许感伤。</p>
<p>一切一切的转变</p>
<p>都提示了别离的预期。</p>
<p>生命总是以繁花开始，以浅淡落幕。</p>
<p>而秋的到来</p>
<p>也预示着大地即将走向荒芜，</p>
<p>在这轮回的季节里，</p>
<p>总会带着一种沧桑感。</p>
<p>生命从繁华到落幕，</p>
<p>验证了岁月的无情。</p>
<p>时光悄无声息流转，永不停歇，</p>
<p>生命却承受着年轮叠加的圈。</p>
<p>一个个季节的交叠</p>
<p>掩埋了太多属于风尘的故事。</p>
<p>一念，会有百感交集，</p>
<p>回眸，却是山高水远。</p>
<p>♢</p>
<p>花开花谢，人来人往;</p>
<p>无声的时光，</p>
<p>足以让多少回忆老去，</p>
<p>也足以让多少人老去，</p>
<p>可我们</p>
<p>总能在某个时间</p>
<p>总能在某个方向，</p>
<p>穿越心灵的迷惘，</p>
<p>直达那些内心深处</p>
<p>最柔软的地方，</p>
<p>去寻一方慰藉，</p>
<p>去找一方回忆，</p>
<p>去觅一段过往。</p>
<p>在人生中，可能会遇到荆棘坎坷，</p>
<p>也终有一天我们会走到路的尽头，</p>
<p>但是我们也要</p>
<p>怀着一丝信念，</p>
<p>携这一缕希望，</p>
<p>休整一番之后，</p>
<p>继续勇敢前行!</p>
</div>`,r:{minutes:1.15,words:345},title:"秋之思【六】",i:"autumn"},["/note/fall/6","/note/fall/6.md"]],["v-46881672","/note/fall/7.html",{y:"a",d:"2014-08-26T00:00:00.000Z",l:"2014年8月26日",c:["随笔"],e:`<h1> 秋之思【七】</h1>
<div style="text-align:center">
<p>用一份释然让心空</p>
<p>沁染着金色的余晖，</p>
<p>也让这清秋的美好</p>
<p>入诗入画，安暖天涯。</p>
<p>♢</p>
<p>如今虽然肃杀悲凉的秋风</p>
<p>吹黄了草木，褪去了花影，</p>
<p>可心田里已播撒下了</p>
<p>那些颗颗素洁种子，</p>
<p>让那些经年的况味里拥有，</p>
<p>秦时的日、汉时的月、</p>
<p>唐时的风、宋时的云、</p>
<p>明时的云、清时的雪，</p>
<p>盈润这一帧帧的古意；</p>
<p>用一行行文字的清芬，</p>
<p>开成满树诗意的繁花。</p>
</div>`,r:{minutes:.5,words:150},title:"秋之思【七】",i:"autumn"},["/note/fall/7","/note/fall/7.md"]],["v-483cef11","/note/fall/8.html",{y:"a",d:"2014-08-27T00:00:00.000Z",l:"2014年8月27日",c:["随笔"],e:`<h1> 秋之思【八】</h1>
<div style="text-align:center">
<p>窗外，</p>
<p>秋风瑟瑟、潇雨淋漓;</p>
<p>心中，</p>
<p>草木葳蕤、花开淡雅;</p>
<p>美文，</p>
<p>如同走在平仄韵律的诗行，</p>
<p>让人生在这馨暖中静静生香。</p>
<p>虽然这些青涩的墨色诗篇，</p>
<p>拢不起时光中的句句点点，</p>
<p>但我要怀着</p>
<p>一丝香息的思念，</p>
<p>一份草木的情怀，</p>
<p>在薄薄的岁月里，</p>
<p>让那些细碎清痕，</p>
<p>在生活的点滴里，</p>
<p>盈一份悠然诗意。</p>
<p>再把清秋的容颜</p>
<p>于光阴中清喜展现。</p>
<p>希望它还是</p>
<p>一样的天高云淡，</p>
<p>一样的朴实安素，</p>
<p>一样的岁月嫣然。</p>
</div>`,r:{minutes:.58,words:173},title:"秋之思【八】",i:"autumn"},["/note/fall/8","/note/fall/8.md"]],["v-49f1c7b0","/note/fall/9.html",{y:"a",d:"2014-08-28T00:00:00.000Z",l:"2014年8月28日",c:["随笔"],e:`<h1> 秋之思【九】</h1>
<div style="text-align:center">
<p>淡淡哀，丝丝愁，</p>
<p>轻轻念，碎碎想，</p>
<p>那些梦里熟悉的风景，</p>
<p>却是不曾到过的地方，</p>
<p>也许那就是梦之天堂。</p>
<p>♢</p>
<p>云笺回望，掠流光藏。</p>
<p>满目秋蓬挥不去心的凄凉，</p>
<p>凋零记忆，思已成伤。</p>
<p>谁人陪我疏狂?</p>
<p>哪去寻高山流水的音响?</p>
<p>凡尘思量，</p>
<p>蓬莱梦断成烟，</p>
<p>吟飞绪鬓成霜。</p>
</div>
`,r:{minutes:.39,words:116},title:"秋之思【九】",i:"autumn"},["/note/fall/9","/note/fall/9.md"]],["v-582d9f70","/note/fall/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["随笔"],g:["秋之思"],e:`<div class="custom-container tip">
<p class="custom-container-title">介绍</p>
<p>这是我在高一写的一个散文诗集，最初发表在空间日志上。</p>
<p>近日将其作为少年回忆，整理在博客中。</p>
</div>
`,r:{minutes:.29,words:87},title:"秋之思",i:"autumn"},["/note/fall/index.html","/note/fall/README.md"]],["v-202e0060","/note/fall/catalog.html",{y:"a",d:"2014-08-17T00:00:00.000Z",l:"2014年8月17日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思—题记</h1>
<div style="text-align:center">
<p>秋空，纯净；</p>
<p>秋风，入怀。</p>
<p>蘸墨提笔，画一幅秋，</p>
<p>小池，残荷，乱石，秋雨，</p>
<p>残荷叶上，一点朱砂，</p>
<p>萧杀中便有了一点暖意。</p>
<p>天地太小，时光太快;</p>
<p>一眼心动，一念相思，</p>
<p>却要用一生来忘记。</p>
<p>月满西楼，水瘦山寒，</p>
<p>孤影更比岁月长，</p>
<p>谁念西风独自凉?</p>
</div>
<div style="text-align:right">
<p>——题记</p>
</div>`,r:{minutes:.37,words:110},title:"秋之思—题记",i:"autumn"},["/note/fall/catalog","/note/fall/catalog.md"]],["v-c39d8f64","/note/fall/end.html",{y:"a",d:"2014-10-31T00:00:00.000Z",l:"2014年10月31日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思【结束语】</h1>
<div style="text-align:center">
<p>花落谁言芳草疏，</p>
<p>等闲秋色梧桐雨。</p>
<p>转眼，秋临几许，</p>
<p>有一江春水的浪漫，</p>
<p>也有落叶满地般的惆怅。</p>
<p>又转眼，秋将尽，</p>
<p>踏上秋的征程，</p>
<p>人心又何尝不是</p>
<p>一次次经历岁月的打磨，</p>
<p>心思渐渐，</p>
<p>若落于幽径般的清宁，</p>
<p>若风雨中浮浮沉沉的一叶小舟。</p>
<p>一程旧事，过往浮烟，</p>
<p>伴随素色流年渐行渐远。</p>
<p>回眸点滴，</p>
<p>那风轻云淡后的天涯，</p>
<p>缤纷何处?</p>
<p>一份领悟，几丝浮雨，</p>
<p>在萧瑟中提炼升华成长。</p>
<p>心底的存盘，</p>
<p>是一段过时的剧，</p>
<p>而情节悲喜的回放，</p>
<p>是搁浅后的一点点淡然。</p>
<p>阳光依旧朝南，</p>
<p>明媚还剩几许，</p>
<p>暖意自给自盈，</p>
<p>岁月渐行渐远。</p>
<p>一路的风景，</p>
<p>流连也好，不舍也罢，</p>
<p>一程山，一程水，</p>
<p>都会画上一段的句点。</p>
<p>而我们的句点中，</p>
<p>凝望来时路，凝望回忆。</p>
<p>倘若懂得慈悲为怀，</p>
<p>不管时光如何丈量，</p>
<p>在自己的心底，</p>
<p>自然会珍藏一份美好，</p>
<p>将秋意的一缕素然，安于掌心。</p>
<p>平日里，</p>
<p>用一笺一语，回赠给岁月。</p>
<p>当品过了春，遇到了风；</p>
<p>途经了夏，又经历了雨；</p>
<p>于秋中领悟渐次厚重，</p>
<p>剪一段过往，</p>
<p>凝聚一脉心香，</p>
<p>雕刻在水墨里，</p>
<p>便成了荡气回肠。</p>
<p>可便是:</p>
<p>疏眉半卷红尘墨，</p>
<p>蝶彩诗风婉约歌。</p>
<p>暗隐灵台伸远近，</p>
<p>淡含竹影共婆娑。</p>
<p>浓篇粉谢兰亭剪，</p>
<p>瘦笔花开菊意拖。</p>
<p>两片云裳清袖底，</p>
<p>一朝秋色素心磨。</p>
</div>`,r:{minutes:1.43,words:430},title:"秋之思【结束语】",i:"autumn"},["/note/fall/end","/note/fall/end.md"]],["v-0dbea3bb","/note/fall/middle-autumn.html",{y:"a",d:"2017-10-04T00:00:00.000Z",l:"2017年10月4日",c:["随笔"],g:["秋之思"],e:`<h1> 叶落又中秋</h1>
<div style="text-align:center">
<p>云卷漫天秋风骤，</p>
<p>盈溢清晖卷帘透。</p>
<p>莺啼渐觉当聚首，</p>
<p>闲窗对启泛闲愁。</p>
<p>杯溢皎华又中秋，</p>
<p>碧落玉轮挂西楼。</p>
<p>月磨蟾光萤火流，</p>
<p>笔洒桂影去烦忧。</p>
<p>情比峯巘曾记否，</p>
<p>绘勒穹庐赠旧友。</p>
<p>♢</p>
<p>丝丝秋风送秋凉；</p>
<p>缕缕月光温情亮；</p>
<p>块块月饼携手尝;</p>
<p>缕缕祝福声嘹亮—</p>
<p>中秋快乐!</p>
</div>`,r:{minutes:.4,words:121},title:"叶落又中秋",i:"autumn"},["/note/fall/middle-autumn","/note/fall/middle-autumn.md"]],["v-eb7b7a98","/note/fall/miss1.html",{y:"a",d:"2016-09-15T00:00:00.000Z",l:"2016年9月15日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思【中秋念 ①】</h1>
<div style="text-align:center">
<p>零点已过，中秋来临。</p>
<p>今日中秋佳节，</p>
<p>初次远离故乡，</p>
<p>独自一人度过，</p>
<p>虽然此刻的自己</p>
<p>还在击打着键盘，</p>
<p>内心那种孤独感</p>
<p>让我如何去遏制?</p>
<p>♢</p>
<p>中秋月，故乡明。</p>
<p>明月是同一轮明月，</p>
<p>中秋也是同一个中秋;</p>
<p>一切都没有什么差别，</p>
<p>只因那月下身旁的人不在</p>
<p>有差别的唯有自己的心。</p>
<p>♢</p>
<p>浅秋八月，长乐未央。</p>
<p>我曾背负起自己行囊，</p>
<p>头也不回地走向远方，</p>
<p>走向内心中认为的天堂。</p>
<p>可今天蓦然回首，</p>
<p>我却发现——</p>
<p>踏破铁鞋无觅处，</p>
<p>那乐土就在灯火阑珊处!</p>
<p>天堂就在心中，</p>
<p>乐土就是故乡。</p>
<p>转了一圈又回到原地，</p>
<p>突然了悟——</p>
<p>人生原来如此。</p>
<p>♢</p>
<p>月是故乡明，人是故乡亲。</p>
<p>在今天每人都会思乡，</p>
<p>每人都会发出这样的慨叹。</p>
<p>第一次孤身在外的中秋，</p>
<p>对家乡的思念格外地浓。</p>
<p>♢</p>
<p>但愿人长久，千里共婵娟。</p>
<p>可能你此刻因追剧网游还没睡，</p>
<p>而你家中的父母也许同样没睡。</p>
<p>这个中秋，</p>
<p>也许是你离家在外的第一个中秋;</p>
<p>那么对于你父母，</p>
<p>同样也是没你陪伴的第一个中秋。</p>
<p>待今夜华灯初上;</p>
<p>待今夜晚会散场;</p>
<p>待今夜明月高悬;</p>
<p>拨通父母的电话，</p>
<p>给他们一声问候，</p>
<p>可好?</p>
</div>`,r:{minutes:1.28,words:384},title:"秋之思【中秋念 ①】",i:"autumn"},["/note/fall/miss1","/note/fall/miss1.md"]],["v-e811c95a","/note/fall/miss2.html",{y:"a",d:"2016-09-15T00:00:00.000Z",l:"2016年9月15日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思【中秋念 ②】</h1>
<div style="text-align:center">
<p>中秋晚会上，</p>
<p>有——</p>
<p>激情游戏的欢乐，</p>
<p>相聚一堂的喜悦，</p>
<p>友谊情谊的绽放，</p>
<p>也同样有——</p>
<p>凄凉孤独的哀愁，</p>
<p>身在异乡的思念;</p>
<p>学生会的月饼里，</p>
<p>有学长的祈祷，</p>
<p>有学姐的祝福，</p>
<p>也有教师的寄托；</p>
<p>也同样有忧伤和思念，</p>
<p>也有冷寂与怀旧。</p>
<p>无论何种情绪，</p>
<p>都因中秋而迸发。</p>
<p>♢</p>
<p>曾几何时，策马扬鞭;</p>
<p>奔腾万里，只为逐梦。</p>
<p>今夜此时，夜深人静，</p>
<p>雷声暗涌，唯有思念。</p>
<p>♢</p>
<p>遥相思，</p>
<p>多少次欢聚与离别，</p>
<p>兰舟催发，</p>
<p>来不及尽述惆怅；</p>
<p>下午故知相遇，</p>
<p>叙不尽悲欢迷途。</p>
<p>回到宿舍，</p>
<p>只得一遍又一遍地念叨</p>
<p>“人有悲欢离别，月有阴晴圆缺”，</p>
<p>期盼着，遥望着，</p>
<p>旧事不能忘怀，</p>
<p>就无法“但愿人长久，千里共婵娟”。</p>
<p>♢</p>
<p>一场晚会，</p>
<p>一曲歌尽，</p>
<p>多少声笑语，</p>
<p>终尽散去，</p>
<p>为我带来</p>
<p>一个又一个失落，</p>
<p>一丝又一丝乡愁。</p>
<p>如这般</p>
<p>“汽笛一声肠已断，从此天涯孤旅”，</p>
<p>可这又何必?</p>
<p>大可默默祈祷、等待，</p>
<p>任岁月冲洗漫漫愁绪，</p>
<p>淡化夜以继日的煎熬，</p>
<p>如此便好，</p>
<p>只是苦了中秋，</p>
<p>苦了青春年华。</p>
<p>♢</p>
<p>明月露面，</p>
<p>便隐在了云层后，</p>
<p>远离了尘世的喧嚣，</p>
<p>远离了纸醉金迷，灯红酒绿，</p>
<p>任凭寒气充斥着。</p>
<p>今夜此时，</p>
<p>多少位古代骚人</p>
<p>曾为之倾倒，</p>
<p>望月兴叹，</p>
<p>狂歌痛饮，</p>
<p>留下千古绝句，</p>
<p>可是此刻，</p>
<p>不也正是倾诉的好时机吗?</p>
<p>“月出皎兮，佼人僚兮。</p>
<p>舒窈纠兮。劳心悄兮。</p>
<p>月出皓兮，佼人懰兮，</p>
<p>舒忧受兮。劳心慅兮。</p>
<p>月出照兮，佼人燎兮，</p>
<p>舒夭绍兮。劳心惨兮”</p>
<p>这是首位被这唯美夜景驯服的人，</p>
<p>而后子键，太白，东坡，</p>
<p>也都为之相继倾倒，</p>
<p>或痛哭，或惆怅，</p>
<p>或狂放，或悲戚。</p>
<p>总之，</p>
<p>此夜，</p>
<p>无论是否有月，</p>
<p>都注定是诗人们的夜。</p>
<p>这一夜，属于他们;</p>
<p>这一夜，属于我。</p>
</div>`,r:{minutes:1.8,words:540},title:"秋之思【中秋念 ②】",i:"autumn"},["/note/fall/miss2","/note/fall/miss2.md"]],["v-5bd900f9","/note/fall/moon1.html",{y:"a",d:"2014-09-08T00:00:00.000Z",l:"2014年9月8日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思【中秋月 ①】</h1>
<div style="text-align:center">
<p>今夜，月上树梢</p>
<p>我行走在桂花树下</p>
<p>披一身月华</p>
<p>袭一身桂花</p>
<p>摘一串祝福</p>
<p>让你牵挂</p>
<p>♢</p>
<p>隔山的霓虹，如潮</p>
<p>荡起我的思念</p>
<p>沉落的溪水，如丝</p>
<p>牵引你的白发</p>
<p>你在远方的平原</p>
<p>走一段静默的身影</p>
<p>我在幽静的山顶</p>
<p>迈一缕清淡的步伐</p>
<p>♢</p>
<p>多年前的儿歌</p>
<p>你在轻轻地哼吟</p>
<p>无声的桂花树</p>
<p>罩我缓缓地溜达</p>
<p>我不想溜达，只是</p>
<p>山月邀我，如纱</p>
<p>池塘里藕香盈袖</p>
<p>山野中清风飒飒</p>
<p>♢</p>
<p>那一年无月的中秋</p>
<p>是谁在我碟中搁上月饼</p>
<p>那一年无风的夜里</p>
<p>是谁帮我摘一支桂花</p>
<p>你说，天上有嫦娥张望</p>
<p>你说，天上有吴刚砍伐</p>
<p>你说，云里有寒兔跳舞</p>
<p>你说，云里有蟾蜍戏蛙</p>
<p>我睁大迷茫的双眼</p>
<p>在云里寻找，在天际搜查</p>
<p>♢</p>
<p>今夜，有清风轻吹</p>
<p>今夜，有圆月高挂</p>
<p>桌上的碗碟里</p>
<p>不见你手压的月饼</p>
<p>家中的青花瓶</p>
<p>没有了清香的桂花</p>
<p>我不信月宫里住着嫦娥</p>
<p>也不信荒凉的星球活着蛤蟆</p>
<p>我只信那清冷的窗口有人把我牵挂</p>
<p>♢</p>
<p>今夜我依然行走在桂花树下</p>
<p>山野里残留着月华</p>
<p>沟谷里弥漫着桂花</p>
<p>而我的心里，装着一腔牵挂</p>
</div>`,r:{minutes:1.23,words:369},title:"秋之思【中秋月 ①】",i:"autumn"},["/note/fall/moon1","/note/fall/moon1.md"]],["v-5d8dd998","/note/fall/moon2.html",{y:"a",d:"2014-09-08T00:00:00.000Z",l:"2014年9月8日",c:["随笔"],g:["秋之思"],e:`<h1> 秋之思【中秋月 ②】</h1>
<div style="text-align:center">
<p>夕阳西下，鸦雀归巢，</p>
<p>天地间，那张巨幅油彩渐渐淡去；</p>
<p>暮色降临，晚风轻拂，</p>
<p>朝夕间，一幅泼墨山水瞬间而成。</p>
<p>虽没有了光鲜耀眼的五彩斑斓，</p>
<p>但更多了几分含蓄凝练与深沉。</p>
<p>♢</p>
<p>钢筋混凝土逐渐隐匿，</p>
<p>垃圾塑料袋也悄悄隐身，</p>
<p>勾心斗角的丑态</p>
<p>更是羞于人前，嘈杂退去。</p>
<p>红尘远离，</p>
<p>一切得以返璞归真，</p>
<p>大自然又恢复了她的真面目。</p>
<p>♢</p>
<p>夜来临了，华灯初上。</p>
<p>此时，月出东山，晓风伴随。</p>
<p>静谧的世界里，</p>
<p>只有月儿在散步，留下款款的足迹;</p>
<p>只有风儿在散步，仍是古典的步子。</p>
<p>微微的风，微微的月，</p>
<p>微微的一切，微微的我，</p>
<p>多清新舒适的意境，</p>
<p>多惬意陶醉的心情!</p>
<p>♢</p>
<p>今夜的舞台上，</p>
<p>月儿是主角。</p>
<p>那聪慧的月儿，</p>
<p>早已看尽世间的假丑恶，</p>
<p>于是只出于夜，</p>
<p>倾尽一片真情，</p>
<p>带来一切美好。</p>
<p>♢</p>
<p>她轻轻地来，</p>
<p>绝不惊醒鸟儿的酣梦；</p>
<p>她淡淡地笑，</p>
<p>用蒙娜丽莎的神秘，</p>
<p>留给世人永恒的眷恋</p>
<p>与无尽的思考；</p>
<p>她柔柔的照，</p>
<p>更给万物朦胧的美好。</p>
<p>♢</p>
<p>看，</p>
<p>她掠过村庄，村庄更有诗意；</p>
<p>她轻拂玫瑰，玫瑰更加多情；</p>
<p>她照进池塘，小鱼进入梦乡；</p>
<p>她拨动心弦，那孤傲的心变得柔软，</p>
<p>心灵的坚冰逐渐消失不见。</p>
<p>♢</p>
<p>人熟睡了，</p>
<p>鸟熟睡了，</p>
<p>风也熟睡了，</p>
<p>一切都熟睡了，</p>
<p>但那亭亭的白莲没睡，</p>
<p>对月含笑，临风而舞。</p>
<p>不羡慕光鲜耀眼，</p>
<p>更讨厌哗众取宠，</p>
<p>映日别样红不是她的追求，</p>
<p>妖娆的池塘不是她的舞台。</p>
<p>在无人注意的角落，</p>
<p>在别人沉睡的时刻，</p>
<p>她默默展示着自己。</p>
<p>不需要谁来欣赏，</p>
<p>有晓月做观众即可；</p>
<p>不需要谁来鼓掌，</p>
<p>有清风陪伴正适合。</p>
<p>♢</p>
<p>月光轻轻洒下，</p>
<p>像在牛乳中洗过一般，</p>
<p>满身舒服，有暗香盈袖。</p>
<p>微风轻拂，</p>
<p>如泉水缓缓流淌，</p>
<p>吹到人心里，</p>
<p>心儿跟着簌簌地颤。</p>
<p>♢</p>
<p>穿上月光纱衣，</p>
<p>自己似乎成了</p>
<p>世上最纯情的人。</p>
<p>这件纱衣，月丝绵绵，</p>
<p>用无数根月光丝线织成。</p>
<p>经线上织的是月光的悠长，</p>
<p>纬线上织的是月儿的亮泽，</p>
<p>这经经纬纬，</p>
<p>织满了可人的脉脉诗意。</p>
<p>♢</p>
<p>月华如水，</p>
<p>袭一身白色的纱衣，</p>
<p>和着晓月的韵致，</p>
<p>伴着清风的旋律，</p>
<p>舞动起来，</p>
<p>用飘逸的舞姿，</p>
<p>尽情挥洒自己。</p>
<p>当摆脱凡尘的沉重束缚后，</p>
<p>剩下的是超脱自己的空灵，</p>
<p>是那份向往已久的静与净!</p>
<p>♢</p>
<p>披一身晓月，</p>
<p>藏两袖轻风，</p>
<p>抛万千烦杂，</p>
<p>美好我心情!</p>
</div>`,r:{minutes:2.45,words:736},title:"秋之思【中秋月 ②】",i:"autumn"},["/note/fall/moon2","/note/fall/moon2.md"]],["v-2e1af9a0","/note/fall/special.html",{y:"a",d:"2014-09-07T00:00:00.000Z",l:"2014年9月7日",c:["随笔"],g:["秋之思"],e:`<h1> Autumn Recollection</h1>
<div style="text-align:center">
<p>I believe，</p>
<p>there is always someone,</p>
<p>or something,</p>
<p>which can hold in heart,</p>
<p>Worthy to be memorized the whole life</p>
<p>But sometimes,</p>
<p>people need to suffer lies,</p>
<p>to stand beguilement,</p>
<p>to forget promises,</p>
<p>and then they gradually know that:</p>
<p>Holding on does not mean Victory,</p>
<p>and Oblivion does not mean Apathy.</p>
</div>`,r:{minutes:.22,words:67},title:"Autumn Recollection",i:"autumn"},["/note/fall/special","/note/fall/special.md"]],["v-8f819ef0","/note/innenu/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["小程序"],e:`<h2> 简介</h2>
<p>in 东师小程序的大部分页面都均由 YAML 文件生成。开发者只需要使用编辑器编辑 YAML，即可增添或修改小程序页面。</p>
<div class="custom-container info">
<p class="custom-container-title">YAML</p>
<p>YAML 是专门用来写配置文件的语言，非常简洁和强大，其设计目标，就是方便人类读写。</p>
</div>
<h2> 快速上手</h2>
<ol>
<li>为了编写小程序页面配置文件，您需要先学习 <a href="/note/innenu/yaml.html" target="blank">YAML 的规则</a>，同时简单浏览一下一款编辑器 <a href="/software/vscode/simple.html" target="blank">VSCode 的介绍</a></li>
<li>掌握上述两个内容之后，您就可以尝试对照 <a href="/note/innenu/tag-list.html" target="blank">小程序简易参数表</a> 通过 VSCode 编写页面 YAML 文件了，如果您觉得直接上手太难，您可以参阅 <a href="/note/innenu/get-started.html" target="blank">交互式教程</a> 来体验一个示例。</li>
</ol>`,r:{minutes:3.02,words:907},title:"in东师小程序贡献指南",i:"info"},["/note/innenu/index.html","/note/innenu/README.md"]],["v-ac460ad2","/note/innenu/get-started.html",{y:"a",d:"2021-11-15T11:11:41.000Z",c:["小程序"],e:`<p>本部分将手把手引领您完成一个页面的制作，其中会涉及最常见的组件。</p>
`,r:{minutes:10.79,words:3238},title:"in东师小程序快速上手",i:"creative"},["/note/innenu/get-started","/note/innenu/get-started.md"]],["v-04af9900","/note/innenu/tag-list.html",{y:"a",d:"2021-11-15T12:46:44.000Z",c:["小程序"],e:`<p><img src="https://img.shields.io/badge/版本-V5-blue.svg?style=for-the-badge" alt="版本: V5"></p>
<h2> 总体结构</h2>
<table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center">必填</th>
<th style="text-align:center">值类型</th>
<th>内容</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">title</td>
<td style="text-align:center">是</td>
<td style="text-align:center"><code>string</code></td>
<td>导航栏标题</td>
<td>一般不超过八个字，六字及以下为佳</td>
</tr>
<tr>
<td style="text-align:center">desc</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>string</code></td>
<td>页面描述</td>
<td>会显示在页脚</td>
</tr>
<tr>
<td style="text-align:center">author</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>string</code></td>
<td>页面的作者</td>
<td>会显示在页脚</td>
</tr>
<tr>
<td style="text-align:center">time</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>string</code></td>
<td>页面更新时间</td>
<td>会显示在页脚</td>
</tr>
<tr>
<td style="text-align:center">grey</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>boolean</code></td>
<td>使用灰色背景</td>
<td>默认为白色背景</td>
</tr>
<tr>
<td style="text-align:center">cite</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>string | string[]</code></td>
<td>页面引用链接</td>
<td></td>
</tr>
<tr>
<td style="text-align:center">content</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>ComponentConfig[]</code></td>
<td>页面的内容</td>
<td>数组的每个对象会最终渲染为一个组件</td>
</tr>
<tr>
<td style="text-align:center">outdated</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>boolean</code></td>
<td>是否已过时</td>
<td>可展示一条“页面过时”提示</td>
</tr>
<tr>
<td style="text-align:center">shareable</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>boolean</code></td>
<td>是否可被分享</td>
<td>是否可以使用小程序的界面分享，默认为 <code>false</code></td>
</tr>
</tbody>
</table>`,r:{minutes:7.53,words:2259},title:"小程序页面简易参数表",i:"list"},["/note/innenu/tag-list","/note/innenu/tag-list.md"]],["v-5c913f0a","/note/innenu/yaml.html",{y:"a",d:"2021-11-15T11:11:41.000Z",c:["小程序"],e:`<p>YAML 是专门用来写配置文件的语言，非常简洁和强大。</p>
<h2> yaml 介绍</h2>
<p>YAML 语言(发音 /ˈjæməl/ )的设计目标，就是方便人类读写。</p>
<p>它的基本语法规则如下。</p>
<ul>
<li>大小写敏感</li>
<li>使用缩进表示层级关系</li>
<li>缩进时不允许使用 Tab 键，只允许使用空格。</li>
<li>缩进的空格数目不重要，只要相同层级的元素左侧对齐即可</li>
</ul>
<h2> yaml 中的值</h2>
<p>在编写小程序页面时，用到的值类型一共有五种:</p>
<ul>
<li><strong>string</strong>(字符串)</li>
<li><strong>number</strong>(数字)</li>
<li><strong>boolean</strong>(布尔值)</li>
<li><strong>array</strong>(数组)</li>
<li><strong>object</strong>(对象)</li>
</ul>`,r:{minutes:4.67,words:1400},title:"如何编写 YAML",i:"yaml"},["/note/innenu/yaml","/note/innenu/yaml.md"]],["v-0b2fe817","/note/life/1.html",{y:"a",d:"2014-08-18T00:00:00.000Z",l:"2014年8月18日",c:["随笔"],g:["笑谈人生"],e:`<h1> 笑谈人生【一】</h1>
<div style="text-align:center">
<p>精打细算你失去了多少，</p>
<p>求而不得你烦恼了多少，</p>
<p>斤斤计较你结怨了多少，</p>
<p>贪心不灭你造恶了多少，</p>
<p>日复一日你能放下多少，</p>
<p>千方百计你能得到多少，</p>
<p>人生在世你能享受多少，</p>
<p>临命终时你能带走多少?</p>
<p>唯大肚能容，</p>
<p>容天下难容之事，</p>
<p>只开口一笑，</p>
<p>笑世上可笑之人。</p>
</div>
`,r:{minutes:.41,words:124},title:"笑谈人生【一】",i:"form"},["/note/life/1","/note/life/1.md"]],["v-0ce4c0b6","/note/life/2.html",{y:"a",d:"2014-08-19T00:00:00.000Z",l:"2014年8月19日",c:["随笔"],g:["笑谈人生"],e:`<h1> 笑谈人生【二】</h1>
<div style="text-align:center">
<p>梦，不能做得太深，深了，难以清醒；</p>
<p>话，不能说得太满，满了，难以相通；</p>
<p>调，不能定得太高，高了，难以合声；</p>
<p>事，不能做得太绝，绝了，难以进退；</p>
<p>情，不能陷得太深，深了，难以自拔；</p>
<p>利，不能看得太重，重了，难以明志；</p>
<p>人，不能做得太假，假了，难以交心。</p>
</div>
`,r:{minutes:.37,words:111},title:"笑谈人生【二】",i:"form"},["/note/life/2","/note/life/2.md"]],["v-0e999955","/note/life/3.html",{y:"a",d:"2014-08-17T00:00:00.000Z",l:"2014年8月17日",c:["随笔"],g:["笑谈人生"],e:`<h1> 笑谈人生【三】</h1>
<div style="text-align:center">
<p>人生就是一阵风，起了，没了。</p>
<p>理想就是一盏灯，燃了，灭了。</p>
<p>人情就是一阵雨，下了，干了。</p>
<p>朋友就是一层云，聚了，散了。</p>
<p>闲愁就是一壶酒，醉了，醒了。</p>
<p>寂寞就是一颗星，闪了，灭了。</p>
<p>孤独就是一轮月，升了，落了。</p>
<p>死亡就是一场梦，累了，睡了。</p>
</div>
`,r:{minutes:.36,words:108},title:"笑谈人生【三】",i:"form"},["/note/life/3","/note/life/3.md"]],["v-104e71f4","/note/life/4.html",{y:"a",d:"2014-08-26T00:00:00.000Z",l:"2014年8月26日",c:["随笔"],g:["笑谈人生"],e:`<h1> 笑谈人生【四】</h1>
<div style="text-align:center">
<p>只有淡然的心态，</p>
<p>才是人生的成熟。</p>
<p>越长大就越孤单，</p>
<p>越长大就越无奈。</p>
<p>曾经我们可以</p>
<p>肆无忌惮说的话，</p>
<p>不计后果做的事，</p>
<p>在长大的那一天，</p>
<p>终于被硬生生地</p>
<p>压回到了心底。</p>
<p>长大了，懂事了，</p>
<p>心却复杂起来了。</p>
<p>还是觉得淡然最好，</p>
<p>简单心态最快乐。</p>
<p>人生之事，计较越多，烦恼越多。</p>
<p>淡然，才是一种彻悟。</p>
<p>怀着淡然，笑看人生。</p>
</div>`,r:{minutes:.48,words:144},title:"笑谈人生【四】",i:"form"},["/note/life/4","/note/life/4.md"]],["v-12034a93","/note/life/5.html",{y:"a",d:"2014-08-29T00:00:00.000Z",l:"2014年8月29日",c:["随笔"],g:["笑谈人生"],e:`<h1> 笑谈人生【五】</h1>
<div style="text-align:center">
<p>人生犹如一首歌，</p>
<p>音调高低起伏，</p>
<p>旋律抑扬顿挫；</p>
<p>人生仿佛一本书，</p>
<p>写满酸甜苦辣，</p>
<p>记录喜怒哀乐；</p>
<p>人生就像一局棋，</p>
<p>处处布满危险，</p>
<p>也撒遍了机遇；</p>
<p>人生恰似一条路，</p>
<p>有山重水复的坎坷，</p>
<p>也有柳暗花明的坦途；</p>
<p>人生如同一条河，</p>
<p>有时九曲回肠，</p>
<p>有时一泻千里。</p>
<p>成败自清醒，</p>
<p>是非一笑过。</p>
</div>`,r:{minutes:.43,words:130},title:"笑谈人生【五】",i:"form"},["/note/life/5","/note/life/5.md"]],["v-13b82332","/note/life/6.html",{y:"a",d:"2014-08-30T00:00:00.000Z",l:"2014年8月30日",c:["随笔"],e:`<h1> 笑谈人生【六】</h1>
<div style="text-align:center">
<p>人之所以会烦恼，就是记性太好。</p>
<p>人之所以会痛苦，就是追求太多。</p>
<p>人之所以不快乐，就是计较太多。</p>
<p>人之所以不幸福，就是不会知足。</p>
<p>人之所以活的累，就是想的太多。</p>
<p>人，永远是矛盾的主体，</p>
<p>经常处在困惑中，</p>
<p>夹在世俗的单行道上，</p>
<p>走不远，也回不去。</p>
</div>
`,r:{minutes:.39,words:117},title:"笑谈人生【六】",i:"form"},["/note/life/6","/note/life/6.md"]],["v-156cfbd1","/note/life/7.html",{y:"a",d:"2014-08-31T00:00:00.000Z",l:"2014年8月31日",c:["随笔"],g:["笑谈人生"],e:`<h1> 笑谈人生【七】</h1>
<div style="text-align:center">
<p>当你成长跟不上知识更新时，</p>
<p>你的学习会出问题；</p>
<p>当你成长跟不上恋人配偶时，</p>
<p>你的感情会出问题；</p>
<p>当你成长跟不上朋友时，</p>
<p>你的友谊会出问题；</p>
<p>当你成长跟不上公司节奏时，</p>
<p>你的工作会出问题；</p>
<p>当你成长跟不上孩子思维时，</p>
<p>你的沟通会出问题!</p>
<p>我们一生努力的结果，</p>
<p>不过是配得起身边的人，</p>
<p>大家彼此欣赏，</p>
<p>相依相伴，</p>
<p>携手一生。</p>
</div>`,r:{minutes:.5,words:151},title:"笑谈人生【七】",i:"form"},["/note/life/7","/note/life/7.md"]],["v-1721d470","/note/life/8.html",{y:"a",d:"2014-08-31T00:00:00.000Z",l:"2014年8月31日",c:["随笔"],g:["笑谈人生"],e:`<h1> 笑谈人生【八】</h1>
<p>人生不易，且行且珍惜。</p>
<div style="text-align:center">
<p>♢</p>
</div>
<p>幸福不在于拥有很多，而在于拥有很少也已满足，所谓知足常乐亦如此。浮躁的人们，总是习惯等待一段时光沉淀后，掸去风尘，才会感叹当时的美好；总是欢在一段光阴中回忆另一段光阴里的故事。可是流水里洒落的光阴，一路向东，不会停留，多少年的走过，也只能给彼此留下一份淡淡的回忆。</p>
<div style="text-align:center">
<p>♢</p>
</div>
<p>与其华丽撞墙，不如优雅转身，给自己一个迂回的空间，学会思索，慢慢调整。人生最曼妙的风景，不是追名逐利，风光无限，而是内心的淡定与从容。</p>`,r:{minutes:.69,words:207},title:"笑谈人生【八】",i:"form"},["/note/life/8","/note/life/8.md"]],["v-18d6ad0f","/note/life/9.html",{y:"a",d:"2014-09-02T00:00:00.000Z",l:"2014年9月2日",c:["随笔"],g:["笑谈人生"],e:`<h1> 笑谈人生【九】</h1>
<div style="text-align:center">
<p>不打扰别人，</p>
<p>不怠慢自己，</p>
<p>不挥霍信任，</p>
<p>不讨好，不盲从，</p>
<p>不做道德上的英雄，</p>
<p>足矣!</p>
<p>人生有许多的如果，</p>
<p>却只有一个结果。</p>
</div>
`,r:{minutes:.22,words:66},title:"笑谈人生【九】",i:"form"},["/note/life/9","/note/life/9.md"]],["v-5885b80f","/note/life/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["随笔"],g:["笑谈人生"],e:`<div class="custom-container tip">
<p class="custom-container-title">介绍</p>
<p>这是我在高一写的人生感悟，最初发表在空间日志上。</p>
<p>近日将其作为少年回忆，整理在博客中。</p>
</div>
<ul>
<li><a href="https://h5.qzone.qq.com/ugc/share/?sharetag=126FDE98906EB067815B0EEA0F72BEC0&amp;subtype=3&amp;ciphertext=&amp;sid=&amp;blog_photo=&amp;g=&amp;res_uin=1178522294&amp;cellid=V10JYlHT49u8Sd&amp;subid=&amp;bp1=&amp;bp2=&amp;bp7=&amp;appid=4&amp;g_f=2000000103" target="_blank" rel="noopener noreferrer"><strong>空间相册链接</strong></a></li>
</ul>`,r:{minutes:.29,words:86},title:"笑谈人生",i:"form"},["/note/life/index.html","/note/life/README.md"]],["v-2ddafccd","/note/life/birthday.html",{y:"a",d:"2017-02-11T00:00:00.000Z",l:"2017年2月11日",c:["随笔"],g:["笑谈人生"],e:`<h1> 19 周岁生日有感</h1>
<div style="text-align:center">
<p>古往今来，</p>
<p>无数人把人生比作路，</p>
<p>那成长必是</p>
<p>路上的一段灿烂旅程。</p>
<p>♢</p>
<p>我的故乡啊，</p>
<p>承载了多少成长过往，</p>
<p>一颦一蹙，亦喜亦嗔。</p>
<p>成长注定是孤独的旅程，</p>
<p>纵一世繁华，尘埃亦会落定，</p>
<p>物是人非，只待须臾。</p>
<p>正如这故乡胜利广场上的花吧，</p>
<p>年年岁岁花相似，</p>
<p>却不知是哪朵曾让我青睐。</p>
<p>每年近元宵之时唯白雪皑皑，</p>
<p>不知在哪一秒间烟花绽放;</p>
<p>不知几秒后唯有空寂。</p>
<p>烟花虽易冷，</p>
<p>却在我脑海中，</p>
<p>留下了灿烂的回忆。</p>
<p>♢</p>
<p>分离，</p>
<p>是成长的必经之路</p>
<p>当我们翻开相册，</p>
<p>昔日熟悉的面孔历历在目，</p>
<p>可是当真聚会时，</p>
<p>却发现曾经熟悉的人，</p>
<p>已然逐渐陌生。</p>
<p>成长的孤独</p>
<p>也正体现于此。</p>
<p>昔日成群结队的挚友</p>
<p>如今三三两两，</p>
<p>曾经咫尺之间的兄弟</p>
<p>现在天各一方。</p>
<p>或许每个人</p>
<p>都对情分天长地久有所幻想，</p>
<p>只可惜路好长，</p>
<p>终会选择不同方向。</p>
<p>♢</p>
<p>唯有淡忘了曾经的灿烂与辉煌，</p>
<p>才能更好地把握今后的方向。</p>
<p>成长不是分离时伤心绝望，</p>
<p>而是在逆境中愈加坚强，</p>
<p>零点已过，钟声回响，</p>
<p>标志了我新的成长，</p>
<p>新岁定英勇而上，</p>
<p>吾必乘风破浪!</p>
</div>`,r:{minutes:1.26,words:379},title:"19 周岁生日有感",i:"form"},["/note/life/birthday","/note/life/birthday.md"]],["v-475a52ab","/note/life/calm.html",{y:"a",d:"2015-01-17T00:00:00.000Z",l:"2015年1月17日",c:["随笔"],g:["笑谈人生"],e:`<h1> 笑谈人生【谈坦然】</h1>
<p>人生旅程中，顺畅也好，低谷也罢，都应该坦然面对。因为在这世界上，本不存在极乐天堂，无人能从世俗的羁绊中解脱出来，我们所能做的，只是爬起来比倒下去多一次，用汗水代替口水而已；</p>
<p>也唯有如此，方能让生命在磨难中得到升华。</p>
<p>我们要坚信人生没有过不去的坎，以勇敢的姿态迎接命运的挑战。</p>
`,r:{minutes:.47,words:142},title:"笑谈人生【谈坦然】",i:"form"},["/note/life/calm","/note/life/calm.md"]],["v-dfeb8f2e","/note/life/choice.html",{y:"a",d:"2014-09-18T00:00:00.000Z",l:"2014年9月18日",c:["随笔"],g:["笑谈人生"],e:`<h1> 笑谈人生【谈选择】</h1>
<p>生活中有太多的选择，时刻考验着我们的心智。我们在一次次选择中成长。经历让我们承受太多无奈，些许的沧桑也被岁月刻在脸上。点点滴滴琐碎的融入，伴着侵入骨髓的苦楚，在崎岖不平的路上使我们跌跌撞撞，在断续的跌倒爬起中变得坚强。心中有所选择，有份属于自己的坚持，是件令人高兴的事。心中有梦，就不怕前路茫茫。有所追求，心灵就不会迷失，不会沉沦。即使面对凄风冷雨，也会默默的坚持。有时候一种选择，就是一种力量。这种强大的支撑，让我们不惧怕冷言冷语，即使没人理解，也固执的给自己力量，告诉自己: 风雨过后，会有不一样的风景，风雨冲洗过的天空，空气更好。</p>
`,r:{minutes:.86,words:258},title:"笑谈人生【谈选择】",i:"form"},["/note/life/choice","/note/life/choice.md"]],["v-9b658a26","/note/life/emotion.html",{y:"a",d:"2014-09-07T00:00:00.000Z",l:"2014年9月7日",c:["随笔"],g:["笑谈人生"],e:`<h1> 笑谈人生【谈感情】</h1>
<p>并不是所有的感情都会久远，比如爱情，又比如友情。</p>
<p>有些人，也许从未想过会有交集，可是冥冥中注定的一样，就走在了一起；有些人，曾经同甘共苦、患难与共，一起走过了数年或数十年，却渐渐地淡却了。可能是双方同时的，也可能是有一方在先，而另一方自然就放弃了。回忆总是美好的，无论回忆里有哭、有笑，想起那些朋友，会由衷的觉得，生命中曾经有你，真好! 可是依然无法改变现实，有些人确实疏远了。</p>
<p>我相信，没有人会毫无原因就疏远谁，也更不会因为时间和距离刻意去忘记谁。冷漠的背后，必然有让人伤心的事，那些事无法轻易忘记。这样的决绝是否会让人费解，甚至会让人误解?</p>`,r:{minutes:1.47,words:440},title:"笑谈人生【谈感情】",i:"form"},["/note/life/emotion","/note/life/emotion.md"]],["v-76665c86","/note/life/family.html",{y:"a",d:"2014-09-04T00:00:00.000Z",l:"2014年9月4日",c:["随笔"],g:["笑谈人生"],e:`<h1> 笑谈人生【谈亲情】</h1>
<div style="text-align:center">
<p>成长中的亲情，</p>
<p>不像爱情那样多情，</p>
<p>不像友情那样述说，</p>
<p>却是最长久的感情。</p>
<p>我们每天</p>
<p>都在亲人的关怀下，</p>
<p>幸福的生活着。</p>
<p>♢</p>
<p>亲情，</p>
<p>不像爱情那样浓烈，</p>
<p>不像友情那样欢笑，</p>
<p>却能在平淡日子里</p>
<p>默默的温暖着我们，</p>
<p>平淡得</p>
<p>让我们有所忽略。</p>
<p>♢</p>
<p>青春年少的叛逆，</p>
<p>是我们最难回首的曾经，</p>
<p>是否还记得，</p>
<p>你因为父母的一声责骂就摔门而出，</p>
<p>许多天不说一句话；</p>
<p>是否还记得，</p>
<p>你出了远门，</p>
<p>好久也不打个电话回去，</p>
<p>父母是有多么的牵挂；</p>
<p>是否还记得，</p>
<p>你每次被人欺负，</p>
<p>父母是有多么的心疼?</p>
<p>♢</p>
<p>亲情，</p>
<p>虽然只占了生命的一部分，</p>
<p>只是一生中的一个片段，</p>
<p>但是，</p>
<p>他们确实是</p>
<p>值得一生去珍惜和留念的那些人。</p>
<p>那些渐渐老去的亲人，</p>
<p>那些渐渐模糊的背影，</p>
<p>是我们一生需要珍藏的最美时光。</p>
</div>`,r:{minutes:.95,words:285},title:"笑谈人生【谈亲情】",i:"form"},["/note/life/family","/note/life/family.md"]],["v-37528960","/note/life/friendship.html",{y:"a",d:"2014-09-07T00:00:00.000Z",l:"2014年9月7日",c:["随笔"],g:["笑谈人生"],e:`<h1> 笑谈人生【谈友情】</h1>
<div style="text-align:center">
<p>成长中的友情，</p>
<p>或许没有爱情那样一见倾心，</p>
<p>却是日久生情最好的写照。</p>
<p>也许爱情是眼泪，</p>
<p>友情是纸巾，</p>
<p>爱情是那个会让你流泪的东西，</p>
<p>而友情就是帮你擦泪的东西。</p>
<p>在如今高中的那些朋友，</p>
<p>是对整个人生影响最大的人群之一，</p>
<p>如今的我们不需也不应谈恋爱，</p>
<p>但我们必须会有一些朋友，</p>
<p>来充实自己的生活。</p>
<p>♢</p>
<p>你还记得吗?</p>
<p>当你考试失利，</p>
<p>萎靡不振的时候，</p>
<p>是谁在你耳边说些安慰的话，</p>
<p>帮你走出学习的压力；</p>
<p>当你感情受挫，</p>
<p>恋爱不顺的时候，</p>
<p>是谁充当你的心理导师，</p>
<p>帮你走出情感的阴影；</p>
<p>当你陷入流言蜚语，</p>
<p>遭遇他人误解的时候，</p>
<p>是谁不顾别人的冷眼，</p>
<p>帮你澄清难解的误会?</p>
<p>♢</p>
<p>友情，</p>
<p>像一股涓涓细流，</p>
<p>是一点一滴的累积起来的情感，</p>
<p>不会一涌而出，</p>
<p>却能在最需要的时候</p>
<p>给你一口救命的甘甜。</p>
<p>友情，就是这样。</p>
<p>你一路前行，</p>
<p>他一路跟随，</p>
<p>只要彼此相惜，</p>
<p>一定不会走丢。</p>
<p>我的朋友们，</p>
<p>一路上有你们，真好!</p>
<p>这份最美的时光，</p>
<p>我一定藏在心底。</p>
</div>`,r:{minutes:1.17,words:352},title:"笑谈人生【谈友情】",i:"form"},["/note/life/friendship","/note/life/friendship.md"]],["v-0b60e298","/note/life/indifferent.html",{y:"a",d:"2014-09-07T00:00:00.000Z",l:"2014年9月7日",c:["随笔"],g:["笑谈人生"],e:`<h1> 笑谈人生【谈淡泊】</h1>
<div style="text-align:center">
<p>何为淡泊?</p>
<p>淡泊就是</p>
<p>对世间事洞明后的淡然，</p>
<p>不争，不辩，</p>
<p>不急，不燥，</p>
<p>以平常心态</p>
<p>去面对生活。</p>
<p>淡中出真味，</p>
<p>常中识英奇。</p>
<p>淡泊的人处事低调，</p>
<p>得也不喜，失也不悲。</p>
<p>淡泊的人，</p>
<p>是识尽愁滋味后的</p>
<p>不知愁滋味。</p>
</div>
`,r:{minutes:.34,words:101},title:"笑谈人生【谈淡泊】",i:"form"},["/note/life/indifferent","/note/life/indifferent.md"]],["v-71bf782e","/note/life/life.html",{y:"a",d:"2014-09-04T00:00:00.000Z",l:"2014年9月4日",c:["随笔"],g:["笑谈人生"],e:`<h1> 笑谈人生【谈生命】</h1>
<div style="text-align:center">
<p>生命的美丽，</p>
<p>永远展现在她无时无刻无处不在的进取中；</p>
<p>就像大树的美丽，</p>
<p>是展现在它负势向上高耸入云蓬勃生机中；</p>
<p>就像雄鹰的美丽，</p>
<p>是展现在它搏风击雨如苍天之魂的翱翔中；</p>
<p>就像江河的美丽，</p>
<p>是展现在它波涛汹涌承载船只的奔腾之中。</p>
</div>
`,r:{minutes:.4,words:120},title:"笑谈人生【谈生命】",i:"form"},["/note/life/life","/note/life/life.md"]],["v-2f6a3978","/note/life/love.html",{y:"a",d:"2014-09-07T00:00:00.000Z",l:"2014年9月7日",c:["随笔"],g:["笑谈人生"],e:`<h1> 笑谈人生【谈爱情】</h1>
<div style="text-align:center">
<p>成长中的爱情，</p>
<p>伴随着淡淡苦涩，</p>
<p>却是永远的珍藏。</p>
<p>没有人知道</p>
<p>什么时候的遇见是对的遇见，</p>
<p>什么时候遇到的人是对的人，</p>
<p>即使相爱的两人最终分开，</p>
<p>也只不过是命运</p>
<p>和我们说了一个幸福的谎言。</p>
<p>当这个谎言被戳破时，</p>
<p>每个人似乎都理性了一截，</p>
<p>这就是所谓的成长。</p>
<p>♢</p>
<p>初恋，</p>
<p>一直是很多人无法绕过的心结，</p>
<p>也是青春年少最深刻的记忆，</p>
<p>或许最初的恋爱给人们一个共识，</p>
<p>那是不掺带任何杂质的恋爱，</p>
<p>也是最纯净的爱情。</p>
<p>♢</p>
<p>喜欢的人不一定非要相交，</p>
<p>相交过后是远远的相离，</p>
<p>而相互平行，</p>
<p>却能看到彼此的生活轨迹，</p>
<p>默默的相望，</p>
<p>胜过一切千言万语。</p>
<p>逝去的爱情，</p>
<p>虽没能走到最后，</p>
<p>却是短短一生里的最美时光。</p>
</div>`,r:{minutes:.88,words:264},title:"笑谈人生【谈爱情】",i:"form"},["/note/life/love","/note/life/love.md"]],["v-1c2a15b2","/note/life/pure.html",{y:"a",d:"2014-09-03T00:00:00.000Z",l:"2014年9月3日",c:["随笔"],g:["笑谈人生"],e:`<h1> 笑谈人生【谈纯真】</h1>
<div style="text-align:center">
<p>我喜欢简单的人、简单的事，</p>
<p>傻傻的，</p>
<p>每天简简单单的过日子。</p>
<p>我也想像曾经那样，</p>
<p>几个人围在一起，</p>
<p>总有说不完的话，</p>
<p>不耍心计，</p>
<p>不挖苦，</p>
<p>不讽刺，</p>
<p>都真诚的去对待每一个人。</p>
<p>可是那逝去的时光，</p>
<p>真的能得以复返么?</p>
</div>
`,r:{minutes:.35,words:105},title:"笑谈人生【谈纯真】",i:"form"},["/note/life/pure","/note/life/pure.md"]],["v-506d1e8a","/note/life/road.html",{y:"a",d:"2014-10-31T00:00:00.000Z",l:"2014年10月31日",c:["随笔"],g:["笑谈人生"],e:`<h1> 笑谈人生【谈路】</h1>
<p>人，不应该总选择轻松的路，而应该选择正确的道路，无论路途多么遥远，永远不要放弃，坚持走下去，肯定会有意想不到的风景。也许不在你本来想走的路上，也不是你本来想登临的山顶，可另一条路也有另一条路的风景，不同的山顶也一样会有美丽的日出，所以更多时候，不如试着静下心来，走上一条新路。</p>
`,r:{minutes:.48,words:144},title:"笑谈人生【谈路】",i:"form"},["/note/life/road","/note/life/road.md"]],["v-57aafb44","/note/life/step.html",{y:"a",d:"2014-09-03T00:00:00.000Z",l:"2014年9月3日",c:["随笔"],g:["笑谈人生"],e:`<h1> 笑谈人生【谈一步】</h1>
<div style="text-align:center">
<p>一步很短，一生很长。</p>
<p>一步近在脚下，一生漫远无边。</p>
<p>一步易于修饰，一生难于描画。</p>
<p>一步短暂瞬间，一生烛照永恒。</p>
<p>每一步都刻满一生的选择，</p>
<p>每一步都关及一生的希望，</p>
<p>每一步都镶了时间的密码，</p>
<p>每一步都相扣一生的成败。</p>
<p>走对一步人生会光明一片，</p>
<p>走错一步人生会惨淡黑暗。</p>
<p>关键时一步，决定着一生。</p>
</div>
`,r:{minutes:.47,words:142},title:"笑谈人生【谈一步】",i:"form"},["/note/life/step","/note/life/step.md"]],["v-67643f8d","/note/life/year.html",{y:"a",d:"2014-09-04T00:00:00.000Z",l:"2014年9月4日",c:["随笔"],g:["笑谈人生"],e:`<h1> 笑谈人生【谈岁月】</h1>
<div style="text-align:center">
<p>岁月，当真无情。</p>
<p>任凭沧海桑田，世事变迁，</p>
<p>它都冷眼旁观，</p>
<p>绝不会为任何一个人，</p>
<p>放慢脚步，停留驻足。</p>
<p>时光的流逝，</p>
<p>仿佛一双苍老又温柔的手，</p>
<p>不停的推着我们向前、再向前。</p>
<p>不论我们多么急于向前，</p>
<p>抑或渴望停留，</p>
<p>时间它都会不紧不慢，</p>
<p>遵循着它的轨迹与速度，</p>
<p>一刻不停地向前进行着。</p>
</div>
`,r:{minutes:.45,words:134},title:"笑谈人生【谈岁月】",i:"form"},["/note/life/year","/note/life/year.md"]],["v-7ac4d8df","/note/node-js/",{y:"a",d:"2022-02-06T16:01:38.000Z",g:["Node.js"],e:`<h2> 目录</h2>
<ul>
<li><a href="/note/node-js/current-path.html" target="blank">current-path 相关</a></li>
</ul>
`,r:{minutes:.05,words:14},title:"NodeJS",i:"nodeJS"},["/note/node-js/index.html","/note/node-js/README.md"]],["v-5e74acfe","/note/node-js/current-path.html",{y:"a",d:"2019-09-10T00:00:00.000Z",l:"2019年9月10日",g:["Node.js"],e:`<h1> <code>__dirname</code>、<code>__filename</code> 和 <code>process.cwd()</code> 三者的区别</h1>
<ol>
<li>
<p><code>process.cwd()</code> 方法返回 Node.js 进程当前工作的目录</p>
<p>例: 我在 <code>F:\\自己的文件\\自己在网上学习的知识点\\node学习\\node-API\\process</code> 这个文件加下面创建了一个 test.js 在该 js 文件中写下下面的代码，然后右键 <code>run test.js</code></p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> cwd <span class="token operator">=</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cwd<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>输出如下 <code>F:\\自己的文件\\自己在网上学习的知识点\\node学习\\node-API\\process</code></p>
</li>
<li>
<p><code>__dirname</code> 是 Node.js 的一个全局变量，获得当前文件所在目录的完整目录名</p>
<p>还在上面的 js 文件中输入一下代码</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>输出如下 <code>F:\\自己的文件\\自己在网上学习的知识点\\node学习\\node-API\\process</code></p>
<p>现在一看感觉上面两个方法是一样的，其实不是。node.js 进程当前工作的目录有可能不是该文件所在目录的完整目录。例如: 我用 <code>node webpack ..</code> 打包了一个应用程序，
我用这个应用程序可以生产出一套完整的页面架构，在应用程序的配置文件中 console.log(cwd)
在完整的这个页面架构中执行启动这个项目的命令，则对应的 cwd 就是当前项目所在的绝对路径,而不是应用程序的路径</p>
</li>
<li>
<p><code>__filename</code> 也是 Node.js 的全局变量 Node.js 中，在任何模块文件内部，可以使用 <code>__filename</code> 变量获取当前模块文件的带有完整绝对路径的文件名</p>
</li>
</ol>`,r:{minutes:1.41,words:423},title:"__dirname、__filename 和 process.cwd() 三者的区别",i:"nodeJS"},["/note/node-js/current-path","/note/node-js/current-path.md"]],["v-797f5c68","/note/poem/1.html",{y:"a",d:"2014-10-02T00:00:00.000Z",l:"2014年10月2日",c:["随笔"],g:["轻言细语"],e:`<h1> 轻言细语【一】</h1>
<div style="text-align:center">
<p>雨是云的诺，</p>
<p>湿了心丢了情，</p>
<p>化作滴滴雨滴；</p>
<p>落在谁的指尖?</p>
<p>♢</p>
<p>泪是眼的诺，</p>
<p>欲语还休泪涟漪，</p>
<p>一点朱砂，</p>
<p>落在谁的心上?</p>
<p>♢</p>
<p>谁又是我的诺，</p>
<p>海誓山盟真情在，</p>
<p>执子之手，</p>
<p>比翼齐飞?</p>
<p>♢</p>
<p>这个季节，</p>
<p>是落叶对秋的诺，</p>
<p>所有的依恋，</p>
<p>所有的不舍，</p>
<p>都化作一撮泥土，</p>
<p>守候着最后的深情。</p>
</div>`,r:{minutes:.41,words:122},title:"轻言细语【一】",i:"like"},["/note/poem/1","/note/poem/1.md"]],["v-b60627d4","/note/poem/10.html",{y:"a",d:"2015-12-07T00:00:00.000Z",l:"2015年12月7日",c:["随笔"],g:["轻言细语"],e:`<h1> 轻言细语【十】</h1>
<div style="text-align:center">
<p>并不是聊得来，</p>
<p>就适合在一起；</p>
<p>并不是适合，</p>
<p>就能够在一起；</p>
<p>并不是能够在一起</p>
<p>就会永远在一起；</p>
<p>并不是永远在一起</p>
<p>就会得到幸福的。</p>
<p>一切，</p>
<p>随缘。</p>
<p>既然如此，</p>
<p>为何急躁?</p>
<p>为何烦恼?</p>
</div>
`,r:{minutes:.3,words:89},title:"轻言细语【十】",i:"like"},["/note/poem/10","/note/poem/10.md"]],["v-2df59090","/note/poem/11-11.html",{y:"a",d:"2016-11-11T00:00:00.000Z",l:"2016年11月11日",c:["随笔"],g:["轻言细语"],e:`<h1> 11 月 11 日有感</h1>
<div style="text-align:center">
<p>曾一个人走过，</p>
<p>一个人上学，一个人回家;</p>
<p>一个人思索，一个人彷徨;</p>
<p>在汹涌人潮中，</p>
<p>迷失在下一个街口的转角。</p>
<p>曾以为一腔热血挥洒至今，</p>
<p>就能赢得荣耀与辉煌。</p>
<p>曾背负着太沉重的梦想，</p>
<p>直到某天输给了现实，</p>
<p>任凭自己再怎么努力，</p>
<p>都无法向着梦想的彼岸前进一步。</p>
<p>♢</p>
<p>这些年，</p>
<p>一个人花开，一个人花败，</p>
<p>不曾对谁诉说这一路走过的艰辛，</p>
<p>也从未被问起自己内心的孤寂。</p>
<p>反正，总是一个人过，</p>
<p>少了纷扰，倒也省心。</p>
<p>♢</p>
<p>一个人行走的时光，</p>
<p>或明媚，或悲伤，</p>
<p>或平凡无奇，或惊天动地，</p>
<p>但无论将来的我们</p>
<p>是以何种形式存在于这个世界，</p>
<p>到最后，</p>
<p>那些曾经自己一个人走过的路</p>
<p>终将成为内心最美的风景。</p>
<p>♢</p>
<p>或许，</p>
<p>最后时光还是没有改变残酷的现实，</p>
<p>我还是会输得一败涂地;</p>
<p>可是至少，</p>
<p>我也曾轰轰烈烈走过属于自己一个人的青春。</p>
<p>成功也好，失败也罢，</p>
<p>这些都不是青春的定义。</p>
<p>从没有人可以给我们的青春下定义，</p>
<p>除了我们自己。</p>
<p>不知不觉，</p>
<p>一个人也走过了很长的一段路，</p>
<p>偶尔转过身回头看看，</p>
<p>一个人也并没有什么不好，</p>
<p>简单，快乐，自由，</p>
<p>亦可以勇敢去追求自己想要的生活。</p>
<p>不用对谁虚伪讨好，</p>
<p>亦不必在乎别人的眼光，</p>
<p>并不是我们矫情做作，</p>
<p>只是用自己的形式去追逐内心的渴望。</p>
<p>努力地去尝试过自己向往的生活，</p>
<p>虽然有时孤独，</p>
<p>亦会感到无助，</p>
<p>但人生何尝不是一种孤独?</p>
<p>而这无助又何尝不是一种成长?</p>
<p>♢</p>
<p>虽曾经历着迷茫和彷徨，</p>
<p>却也肆意地在自己青春里，</p>
<p>享受着</p>
<p>一个人的狂欢，</p>
<p>一个人的放浪，</p>
<p>和那独自行走的时光，</p>
<p>一个人孤独看海，</p>
<p>一个人寂寞听风，</p>
<p>一个人肆意奔跑，</p>
<p>一个人涅槃重生。</p>
<p>避开了俗世的纷扰，</p>
<p>倒也落得个悠闲自在。</p>
<p>在风轻云淡的日子里，</p>
<p>读书，写字，看风景，感悟人生。</p>
<p>手捧着一本书，认真地读，</p>
<p>用心写下一些感悟的文字，</p>
<p>偶尔回头看看</p>
<p>这一路走过的风景和见过的人，</p>
<p>或许，日子久了，</p>
<p>有些俗事，就看淡了；</p>
<p>有些偏执，就放下了。</p>
<p>而我也终可以</p>
<p>在这错综复杂的现实世界里</p>
<p>不为现实之乱所烦，</p>
<p>为世俗之事所困。</p>
<p>一个人行走的日子，</p>
<p>是被安静下来的时光，</p>
<p>是自己跟内心对话的时刻</p>
<p>让自己有时间读懂内心的独白，</p>
<p>清楚追求的彼岸在何处，</p>
<p>未来的人生路又如何走……</p>
<p>♢</p>
<p>一个人行走的旅程，</p>
<p>注定是孤独的，</p>
<p>所有的风雨都要一个人挡，</p>
<p>所有的困难都要一个人扛。</p>
<p>或许，拼到最后，</p>
<p>还是会败北，</p>
<p>还是会一无所有，</p>
<p>甚至还会失去原本的样子，</p>
<p>但这都无所谓，</p>
<p>至少我在追求有价值的东西，</p>
<p>也没有过自己不想过的生活。</p>
<p>♢</p>
<p>一个人，一颗心，</p>
<p>背起梦想，说走就走，</p>
<p>管它路还有多长，</p>
<p>管它梦还有多远，</p>
<p>一直往前奔跑，</p>
<p>终会找到属于自己的风景。</p>
<p>既然选择一个人孤独行走，</p>
<p>哪怕最后只剩下影子，</p>
<p>也要义无返顾地向前冲，</p>
<p>直到有一天，</p>
<p>能够与一切梦想的阻力抗衡。</p>
<p>♢</p>
<p>如果，</p>
<p>到最后我还是没有变得更好，</p>
<p>那么我也仍要</p>
<p>活得更像当初想要成为的样子:</p>
<p>独立，坚强，自信，亦不害怕孤独。</p>
</div>`,r:{minutes:3.31,words:992},title:"11 月 11 日有感",i:"like"},["/note/poem/11-11","/note/poem/11-11.md"]],["v-b29c7696","/note/poem/11.html",{y:"a",d:"2016-01-18T00:00:00.000Z",l:"2016年1月18日",c:["随笔"],g:["轻言细语"],e:`<h1> 轻言细语【十一】</h1>
<div style="text-align:center">
<p>如今才知，</p>
<p>总有场场遇见，</p>
<p>开始惊艳，</p>
<p>结局悲怜。</p>
<p>♢</p>
<p>当爱情搁浅，</p>
<p>只有孤星残月共我赴约。</p>
<p>风里，雨里，</p>
<p>我只能独自拥抱黑夜。</p>
<p>♢</p>
<p>思念，躲在角落的尘埃里面，</p>
<p>从不肯走远。</p>
<p>柳湖岸边的衰草上，</p>
<p>满满都是如泣如诉的幽怨。</p>
<p>♢</p>
<p>我努力踮起脚尖，</p>
<p>却得不到幸福的召见。</p>
<p>那倾城的花海里，</p>
<p>瞳孔找不到</p>
<p>曾让我聚焦的</p>
<p>那抹亮点。</p>
<p>♢</p>
<p>那枚刻满誓言的情签，</p>
<p>不知飘向了哪个山谷水涧；</p>
<p>隔世离空的飞吻，</p>
<p>不知埋在了哪个沙漠荒原。</p>
<p>♢</p>
<p>原以为，</p>
<p>会有人和我永远相伴在伊甸园，</p>
<p>琴声拨起的恋曲，</p>
<p>不会在烟雨深处呜咽。</p>
<p>可如今我们之间，</p>
<p>再没有了剧情关联，</p>
<p>那一叠厚厚词阙，</p>
<p>都化作片片雪花，</p>
<p>落寞而又蹁跹。</p>
<p>♢</p>
<p>落雪缤纷的夜晚，</p>
<p>你的名字是我唯一的牵念。</p>
<p>那一滴相思泪，</p>
<p>潮湿了纸片，</p>
<p>滋润了钢笔，</p>
<p>也播种了春天。</p>
<p>♢</p>
<p>卷不起记忆的重帘，</p>
<p>所以，只好以凄美转身，</p>
<p>把悲情锁在眉眼。</p>
<p>从此，陷在独角戏里，</p>
<p>兀自回忆、独自成眠。</p>
</div>`,r:{minutes:1.08,words:325},title:"轻言细语【十一】",i:"like"},["/note/poem/11","/note/poem/11.md"]],["v-af32c558","/note/poem/12.html",{y:"a",d:"2016-11-09T00:00:00.000Z",l:"2016年11月9日",c:["随笔"],g:["轻言细语"],e:`<h1> 轻言细语【十二】</h1>
<div style="text-align:center">
<p>时间在走，年龄在长。</p>
<p>懂得多了，看透多了，</p>
<p>可快乐却越来越少了。</p>
<p>怀念生命中的那些年，</p>
<p>未来遥远的没有形状，</p>
<p>我们单纯得没有烦恼。</p>
<p>如今是不是一种悲哀，</p>
<p>有时因为说了真话，</p>
<p>反而要和别人道歉，</p>
<p>只因为戳穿了事实。</p>
<p>想要活得舒心顺畅，</p>
<p>只得时刻打起精神，</p>
<p>用起那颗疲惫的心。</p>
</div>
`,r:{minutes:.43,words:130},title:"轻言细语【十二】",i:"like"},["/note/poem/12","/note/poem/12.md"]],["v-abc9141a","/note/poem/13.html",{y:"a",d:"2016-11-09T00:00:00.000Z",l:"2016年11月9日",c:["随笔"],g:["轻言细语"],e:`<h1> 轻言细语【十三】</h1>
<p>孤窗外，夜色朦胧，镰月如勾，寒夜添寂寞，我将心事摘落，化作相思梧桐，拂一抹诗意在浅冬的诗笺上，寄给白雪素影里。</p>
<div style="text-align:right">
<p>——题记</p>
</div>
<p>今晚，在雾霾之下，没有清凉凉的月光，也没有耀眼的繁星。可即使没有明月，仍可以在音乐和文字里享受一个人的幸福，享受这孤独的美丽。南森曾说: 人生的第一件大事是发现自己，因此人们需要不时孤独和沉思。是的，只有敢于承受孤独的人，才会发现自我。依着夜色的隽然，泡一杯清茶，(再泡一袋方便面)，在吊椅上呆呆的小坐，不予喧嚣奔跑，只与宁静轻握。夜幕里，习惯了与音乐，文字，清茶(还有方便面)为伴，是知音，是情人，是朋友。</p>`,r:{minutes:2.09,words:626},title:"轻言细语【十三】",i:"like"},["/note/poem/13","/note/poem/13.md"]],["v-a85f62dc","/note/poem/14.html",{y:"a",d:"2016-12-09T00:00:00.000Z",l:"2016年12月9日",c:["随笔"],g:["轻言细语"],e:`<h1> 轻言细语【十四】</h1>
<div style="text-align:center">
<p>刚烈的冬风敲打着车窗，</p>
<p>和着淡淡的薄凉，</p>
<p>飘洒在飞驰的列车旁。</p>
<p>窗外景色飞退，</p>
<p>心微凉，情慵懒，</p>
<p>一缕倦意心头堆，</p>
<p>劳累此般又为谁?</p>
<p>寒寂渐深，心乱纷沓，</p>
<p>犹如一片孤寂的小雪花—</p>
<p>没有目的地却有牵挂，</p>
<p>飘荡在虚空中渐渐升华</p>
</div>
`,r:{minutes:.37,words:110},title:"轻言细语【十四】",i:"like"},["/note/poem/14","/note/poem/14.md"]],["v-7615ab2a","/note/poem/2.html",{y:"a",d:"2014-10-04T00:00:00.000Z",l:"2014年10月4日",c:["随笔"],g:["轻言细语"],e:`<h1> 轻言细语【二】</h1>
<div style="text-align:center">
<p>遇见，是幸;</p>
<p>留下，是缘;</p>
<p>一起走便是命中注定。</p>
<p>遵从内心的召唤，</p>
<p>走在人生的平凡路上，</p>
<p>只要认认真真地活着，</p>
<p>每一个日子就有希望。</p>
<p>♢</p>
<p>人生路上，</p>
<p>一路艰辛，一路风景。</p>
<p>如果你不相信前进</p>
<p>是通向幸福的唯一途经</p>
<p>那停滞更不会是答案。</p>
</div>
`,r:{minutes:.37,words:110},title:"轻言细语【二】",i:"like"},["/note/poem/2","/note/poem/2.md"]],["v-72abf9ec","/note/poem/3.html",{y:"a",d:"2014-10-08T00:00:00.000Z",l:"2014年10月8日",c:["随笔"],g:["轻言细语"],e:`<h1> 轻言细语【三】</h1>
<div style="text-align:center">
<p>一卷诗书。</p>
<p>人半旧，心半旧，物半旧;</p>
<p>月半旧，花半旧，风半旧。</p>
<p>会在旧时光里</p>
<p>偶尔翻出</p>
<p>一滴旧时的泪，</p>
<p>一点旧时的雨，</p>
<p>甚至</p>
<p>一朵旧时的花儿，</p>
<p>一幅旧时的墨迹，</p>
<p>一段旧时的心情，</p>
<p>可有莫名的感动，</p>
<p>丝丝的温暖。</p>
<p>善待生命，善待自己；</p>
<p>热爱生活，热爱自己；</p>
<p>拥抱明天，拥抱自己。</p>
<p>♢</p>
<p>人生是条漫长的旅途，</p>
<p>有平坦的大道，</p>
<p>也有崎岖的小路；</p>
<p>有鲜花，也有荆棘，</p>
<p>但无论顺境还是逆境，</p>
<p>都要从容面对。</p>
<p>♢</p>
<p>许多事情的答案都不是只有一个，</p>
<p>即使切都在变，</p>
<p>唯一不变的就是我们依旧在前行。</p>
<p>那些藏在过去，埋葬的碎梦，</p>
<p>在时间流过的瞬间，</p>
<p>早已相隔千里，</p>
<p>岁月摇曳的长河里，</p>
<p>注定有明媚的忧伤。</p>
</div>`,r:{minutes:.81,words:242},title:"轻言细语【三】",i:"like"},["/note/poem/3","/note/poem/3.md"]],["v-6f4248ae","/note/poem/4.html",{y:"a",d:"2014-10-12T00:00:00.000Z",l:"2014年10月12日",c:["随笔"],g:["轻言细语"],e:`<h1> 轻言细语【四】</h1>
<div style="text-align:center">
<p>有一种情，叫做思念;</p>
<p>有一种爱，叫做动心;</p>
<p>有一一种念，叫牵挂;</p>
<p>有一种想，叫暧昧;</p>
<p>爱了，小气了;</p>
<p>心动了， 在乎了。</p>
<p>因为爱得深，所以会痛;</p>
<p>因为爱得真，所以会疼:</p>
<p>因为疼痛，所以难舍:</p>
<p>因为懂得，所以慈悲。</p>
<p>花也有爱?</p>
<p>风也有情?</p>
<p>心动了，就会看见红尘，</p>
<p>见色是色，见情是情。</p>
<p>因爱故生憎，</p>
<p>因憎故生怖。</p>
<p>♢</p>
<p>也罢，因为，</p>
<p>所有的相遇，都是前世的缘;</p>
<p>所有的离别，都是今生的果。</p>
<p>世界上总会有值得-爱的人，</p>
<p>亦必有可以掏心掏肺的知己。</p>
<p>♢</p>
<p>既然</p>
<p>所有的擦肩，</p>
<p>要有五百次的回首;</p>
<p>所有的相遇，</p>
<p>要有一千年的缘。</p>
<p>轻轻问一句:</p>
<p>我的心，你懂。</p>
<p>又何必在乎地久天长?</p>
</div>`,r:{minutes:.75,words:226},title:"轻言细语【四】",i:"like"},["/note/poem/4","/note/poem/4.md"]],["v-6bd89770","/note/poem/5.html",{y:"a",d:"2014-10-16T00:00:00.000Z",l:"2014年10月16日",c:["随笔"],g:["轻言细语"],e:`<h1> 轻言细语【五】</h1>
<div style="text-align:center">
<p>去收集那一朵朵云的白，</p>
<p>去采集秋日阳光的融暖，</p>
<p>便沿着这份青翠找来。</p>
<p>挑开了帘，</p>
<p>安放了光阴的青藤，</p>
<p>听那风铃的细微声响，</p>
<p>和那正合时宜的花草鸟木。</p>
<p>如果可以，</p>
<p>就牵着岁月的手，</p>
<p>一起走过安之若素的浅秋。</p>
<p>或许，便会多了些烟火的味道。</p>
<p>然而，琐碎的时光，</p>
<p>终寻不到些许烟火存留的气息，</p>
<p>只有寸寸重叠的光阴，</p>
<p>在岁月的花篮中繁花锦簇，</p>
<p>唯美,忧伤。</p>
<p>♢</p>
<p>爱了，小气了，</p>
<p>眼里只有一个人，</p>
<p>心里只有一个人。</p>
<p>心为你跳，</p>
<p>情为你动，</p>
<p>是蛊?</p>
<p>是毒?</p>
<p>没了你就是万箭穿心，</p>
<p>毒瘾发作，生不如死。</p>
<p>倾情了，在乎了，</p>
<p>一举一动，</p>
<p>都牵着肠，挂着肚，</p>
<p>眼里是情火，</p>
<p>心中是暧昧。</p>
<p>相聚，欢畅；</p>
<p>离别，肠断。</p>
</div>`,r:{minutes:.81,words:243},title:"轻言细语【五】",i:"like"},["/note/poem/5","/note/poem/5.md"]],["v-686ee632","/note/poem/6.html",{y:"a",d:"2014-10-19T00:00:00.000Z",l:"2014年10月19日",c:["随笔"],g:["轻言细语"],e:`<h1> 轻言细语【六】</h1>
<div style="text-align:center">
<p>在时光的夹缝中不停的辗转，</p>
<p>数一程过往，</p>
<p>看一路云烟，</p>
<p>留不住的美丽，</p>
<p>定格在某一个角落，</p>
<p>不曾提及却频频忆起。</p>
<p>或许，</p>
<p>在美丽的繁华，</p>
<p>也经不起轮回的践踏，</p>
<p>沾花一笑的音容，</p>
<p>回首已是落寞。</p>
<p>都说放下就是一个新的开始，</p>
<p>但又有几人</p>
<p>能够放下的如此洒脱!</p>
</div>
`,r:{minutes:.4,words:121},title:"轻言细语【六】",i:"like"},["/note/poem/6","/note/poem/6.md"]],["v-650534f4","/note/poem/7.html",{y:"a",d:"2014-10-21T00:00:00.000Z",l:"2014年10月21日",c:["随笔"],g:["轻言细语"],e:`<h1> 轻言细语【七】</h1>
<div style="text-align:center">
<p>岁月流逝，</p>
<p>也总会有</p>
<p>那淡淡的心伤抹，</p>
<p>徘徊在经年的路口上。</p>
<p>时光并没有亏欠，</p>
<p>不是谁不解风尘，</p>
<p>只因季节的错落，</p>
<p>分割那一站琉璃。</p>
<p>秋风不解秋水寒，</p>
<p>秋水难懂落花语，</p>
<p>一程过往难断两两相牵，</p>
<p>一世尘缘迷离几许无言。</p>
<p>时光走过，</p>
<p>散落在风尘中的碎片，</p>
<p>堆积成了岁月的箴言，</p>
<p>随流年默默。</p>
</div>`,r:{minutes:.44,words:133},title:"轻言细语【七】",i:"like"},["/note/poem/7","/note/poem/7.md"]],["v-619b83b6","/note/poem/8.html",{y:"a",d:"2014-10-25T00:00:00.000Z",l:"2014年10月25日",c:["随笔"],g:["轻言细语"],e:`<h1> 轻言细语【八】</h1>
<div style="text-align:center">
<p>鹰，</p>
<p>不需鼓掌也在飞翔。</p>
<p>小草，</p>
<p>没人心疼也在成长。</p>
<p>深山的野花，</p>
<p>没人欣赏也在芬芳。</p>
<p>做事，</p>
<p>不需人人都理解，</p>
<p>只需尽心尽力；</p>
<p>做人，</p>
<p>不需人人都喜欢，</p>
<p>只需坦坦荡荡。</p>
<p>坚持，</p>
<p>注定有孤独彷徨，</p>
<p>质疑嘲笑，</p>
<p>也都无妨。</p>
<p>就算遍体鳞伤，</p>
<p>也要撑起坚强；</p>
<p>就算人生短暂，</p>
<p>也要活得漂亮!</p>
</div>`,r:{minutes:.41,words:123},title:"轻言细语【八】",i:"like"},["/note/poem/8","/note/poem/8.md"]],["v-5e31d278","/note/poem/9.html",{y:"a",d:"2015-12-06T00:00:00.000Z",l:"2015年12月6日",c:["随笔"],g:["轻言细语"],e:`<h1> 轻言细语【九】</h1>
<div style="text-align:center">
<p>年少的我们，</p>
<p>总是喜欢，</p>
<p>不停地揣测对方心情，</p>
<p>不停地猜忌对方想法，</p>
<p>然后开始惶恐不安，</p>
<p>开始患得患失，</p>
<p>开始责怪自己哪里不够好。</p>
<p>人生的经历终会告诉你，</p>
<p>太过在乎就是失去的开始。</p>
</div>
`,r:{minutes:.31,words:93},title:"轻言细语【九】",i:"like"},["/note/poem/9","/note/poem/9.md"]],["v-58c0cd84","/note/poem/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["随笔"],g:["轻言细语"],e:`<div class="custom-container tip">
<p class="custom-container-title">介绍</p>
<p>这是我在高一写的一些小的散文诗，最初发表在空间日志上。</p>
<p>近日将其作为少年回忆，整理在博客中。</p>
</div>
`,r:{minutes:.32,words:96},title:"轻言细语",i:"like"},["/note/poem/index.html","/note/poem/README.md"]],["v-3d36eb16","/note/poem/exam.html",{y:"a",d:"2016-06-08T00:00:00.000Z",l:"2016年6月8日",c:["随笔"],g:["轻言细语"],e:`<h1> 江城子·高考</h1>
<p>丙申六月六日午凭窗远望，闻林中歌扬，有感，故作此篇。</p>
<p>十年苦读月相望，夜沧茫，内彷徨。一盏孤灯，无处话凄凉。明日一举定成败，虽抱恙，又何妨?</p>
<p>如闻鸦啼肠断况，尘满面，自难忘。相顾无言，惟有泪千行。若榜题名成栋梁，心飞扬，愿得偿!</p>
`,r:{minutes:.37,words:111},title:"江城子·高考",i:"like"},["/note/poem/exam","/note/poem/exam.md"]],["v-3bae8447","/note/poem/sad.html",{y:"a",d:"2016-06-27T00:00:00.000Z",l:"2016年6月27日",c:["随笔"],g:["轻言细语"],e:`<h1> 醉落魄·夏夜抒怀</h1>
<div style="text-align:center">
<p>兄长难做。</p>
<p>相留舍妹责吾过。</p>
<p>针入子胸撑心破。</p>
<p>心仅情谊，反却遭人唾。</p>
<p>♢</p>
<p>士帼唯爱安非错?</p>
<p>厚谊更比苍天阔。</p>
<p>忆追尘事徒萧索。</p>
<p>辗转寻眠，愁溢又生惑。</p>
</div>
`,r:{minutes:.26,words:79},title:"醉落魄·夏夜抒怀",i:"like"},["/note/poem/sad","/note/poem/sad.md"]],["v-80a9ee34","/note/spring/1.html",{y:"a",d:"2015-04-12T00:00:00.000Z",l:"2015年4月12日",c:["随笔"],g:["春之诗"],e:`<div style="text-align:center">
<p>春风送暖入屠苏，</p>
<p>一窗的明媚，</p>
<p>满心的期待，</p>
<p>已在不远处娉婷于陌上诗笺。</p>
<p>转眼，</p>
<p>冬已过，</p>
<p>春已来。</p>
<p>时间如白驹，</p>
<p>岁月如水逝，</p>
<p>冬日的雪韵，梅魂，</p>
<p>似乎还没赏够，品够，悟够，</p>
<p>春天的裙摆</p>
<p>已悄然拂过大地山川与河流。</p>
<p>万物正缓缓苏醒，</p>
<p>冰雪则日渐消融，</p>
<p>睡在轮回的春意，</p>
<p>缀满了岁月的枝头，活色生香。</p>
</div>`,r:{minutes:.44,words:133},title:"春之诗【一】",i:"flower"},["/note/spring/1","/note/spring/1.md"]],["v-7d403cf6","/note/spring/2.html",{y:"a",d:"2016-04-03T00:00:00.000Z",l:"2016年4月3日",c:["随笔"],g:["春之诗"],e:`<div style="text-align:center">
<p>三月的春光，还在臼臼流淌;</p>
<p>四月的门楣，已露暖的端详。</p>
<p>南国一幕幕落花飘荡，</p>
<p>北国却仍在延续那一片片桃绛。</p>
<p>风起，丛丛嫩芽飘扬，</p>
<p>风落，一枝桃花馨香!</p>
<p>♢</p>
<p>踏着晨曦，沐着夕阳，</p>
<p>指尖轻弹岁月的殇。</p>
<p>一枝桃花，开在心上，</p>
<p>摇曳着落寞时光，</p>
<p>让流年的瞳孔，染上诗意的花香。</p>
<p>♢</p>
<p>漫过岁月的廊坊，</p>
<p>那一抹沉香依然闪亮。</p>
<p>不知，清浅中有多少诗行，</p>
<p>延续着一枝桃花的芬芳，</p>
<p>而又遥寄于烟雨朦胧的远方?</p>
<p>♢</p>
<p>天青色等烟雨的怀想，</p>
<p>褴褛于黑白相间的陌上。</p>
<p>撒下一指千千心语，</p>
<p>一笔一笔，凌乱成殇，</p>
<p>任心潮跌宕，墨染心香。</p>
<p>♢</p>
<p>小心翼翼，数着时光——</p>
<p>总有一些山高情长</p>
<p>途径你的城，</p>
<p>嫣然盛放。</p>
<p>任思念成冢，</p>
<p>拔节的希望，</p>
<p>长满了岁月的长廊。</p>
<p>♢</p>
<p>抖落，岁月的惆怅，</p>
<p>不再一路滋长爱的彷徨。</p>
<p>储存执念的沧桑，</p>
<p>滋润生命的诗行。</p>
<p>让那一笔笔醉人的馨香，</p>
<p>暖了心房，</p>
<p>潮湿了眸光。</p>
<p>♢</p>
<p>悉数收藏，</p>
<p>那些指尖上——</p>
<p>我纵横的过往。</p>
<p>任春风作恶，桃花乱雨坠窗。</p>
<p>笔笔染香，</p>
<p>字字清扬。</p>
<p>一袭古旧平仄，琉璃了春的守望。</p>
<p>♢</p>
<p>倘若春风再度悠扬，</p>
<p>一枝桃花妖娆陌上。</p>
<p>若可再赐你我一场惊鸿，</p>
<p>我定会在你来的路上。</p>
<p>种下盈盈花香，</p>
<p>研出悠悠墨香，</p>
<p>作一曲千年霓裳。</p>
</div>`,r:{minutes:1.36,words:409},title:"春之诗【二】",i:"flower"},["/note/spring/2","/note/spring/2.md"]],["v-79d68bb8","/note/spring/3.html",{y:"a",d:"2016-05-26T00:00:00.000Z",l:"2016年5月26日",c:["随笔"],g:["春之诗"],e:`<div style="text-align:center">
<p>花初开，</p>
<p>桂花树下勇敢告白，</p>
<p>为那份悸动死去活来；</p>
<p>花惜败，</p>
<p>情感种子亲手掩埋，</p>
<p>蓦然回首却心潮澎湃。</p>
<p>当光阴不再，</p>
<p>当你我不爱，</p>
<p>唯有伤痛被遗留下来。</p>
<p>♢</p>
<p>时光沉淀情意，</p>
<p>暖阳锁上记忆，</p>
<p>只得暗自相思，</p>
<p>唯有追忆往昔。</p>
<p>时光悄然流逝，</p>
<p>只是，</p>
<p>你的样子还充满着回忆，</p>
<p>绵绵情思还遗留在心里。</p>
<p>♢</p>
<p>滚滚红尘碾梦碎，</p>
<p>烟雨朦胧缠人醉，</p>
<p>缱绻流年，何处花拾?</p>
<p>隔岸楼台空相思，</p>
<p>有缘人家今何地，</p>
<p>儿女情长，登栏追忆。</p>
<p>不堪回首过往事，</p>
<p>待他朝邂逅相识，</p>
<p>光阴流年，明媚春风里。</p>
</div>`,r:{minutes:.66,words:197},title:"春之诗【三】",i:"flower"},["/note/spring/3","/note/spring/3.md"]],["v-663d3fc4","/note/spring/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["随笔"],g:["春之诗"],e:`<div class="custom-container tip">
<p class="custom-container-title">介绍</p>
<p>这是我在高一写的第三篇散文诗集，最初发表在空间日志上。</p>
<p>近日将其作为少年回忆，整理在博客中。</p>
</div>
`,r:{minutes:.19,words:58},title:"春之诗",i:"flower"},["/note/spring/index.html","/note/spring/README.md"]],["v-520b2b7e","/note/spring/catalog.html",{y:"a",d:"2015-04-12T00:00:00.000Z",l:"2015年4月12日",c:["随笔"],g:["春之诗"],e:`<div style="text-align:center">
<p>冬去春来，</p>
<p>化解思念。</p>
<p>岁月的轮回，</p>
<p>自然的碾转，</p>
<p>时光不觉间忽已远。</p>
<p>荒芜的季节</p>
<p>慢慢长出新绿，</p>
<p>相应了心灵的墨香花开，</p>
<p>于是，</p>
<p>收集阳光，清风与雨露，</p>
<p>精心煮制一壶春意，</p>
<p>聆听鸟语花香，</p>
<p>笑饮人世浮华。</p>
</div>
<div style="text-align:right">
<p>—— 题记</p>
</div>
`,r:{minutes:.34,words:101},title:"春之诗【题记】",i:"flower"},["/note/spring/catalog","/note/spring/catalog.md"]],["v-0f169104","/note/summer/1.html",{y:"a",d:"2015-06-05T00:00:00.000Z",l:"2015年6月5日",c:["随笔"],g:["夏之歌"],e:`<div style="text-align:center">
<p>浅夏时光，</p>
<p>曾经那些桃红梨白的事，</p>
<p>已然不觉在心怀里开成</p>
<p>缤纷与绚烂的青涩记忆。</p>
<p>那水月良辰的诗意吟咏，</p>
<p>于足音跫然中销声匿迹；</p>
<p>一帘光阴静好，就不必回首</p>
<p>那些早已被季风吹凉的旧梦。</p>
<p>一种应季而生的深情，</p>
<p>生在流光飞扬的路上，花落幽香。</p>
<p>心念的原乡，</p>
<p>一程山水避不开的重逢，犹如故人归，</p>
<p>一枚温柔而舒展的思绪，鲜嫩如花枝。</p>
</div>
`,r:{minutes:.51,words:153},title:"夏之歌【一】",i:"leaf"},["/note/summer/1","/note/summer/1.md"]],["v-10cb69a3","/note/summer/2.html",{y:"a",d:"2015-06-08T00:00:00.000Z",l:"2015年6月8日",c:["随笔"],g:["夏之歌"],e:`<div style="text-align:center">
<p>雨在檐下滴落，</p>
<p>风在窗外穿行，</p>
<p>树在风雨中摇曳轻舞。</p>
<p>听温馨的音乐，</p>
<p>把车水马龙的喧嚣关在门外，</p>
<p>把心中万千心事放逐到远方，</p>
<p>陌上红尘细雨烟云轻留眉间，</p>
<p>听雨敲窗，</p>
<p>一曲大自然的天籁之音，</p>
<p>或悠闲或高昂，</p>
<p>或活跃或舒缓，</p>
<p>叮咚之声如山泉，</p>
<p>淌过心间。</p>
<p>♢</p>
<p>屋外，雨滴有声；</p>
<p>屋内，无风无雨，</p>
<p>心便</p>
<p>在一盏茶中安暖，</p>
<p>在一卷书中平静。</p>
<p>茶叶在水中缓缓舒展，</p>
<p>指尖在卷边缓缓滑动，</p>
<p>氤氲的水汽里弥漫着清淡的茶香，</p>
<p>行行的字句中充斥着暖人的感悟，</p>
<p>袅袅茶香在室内缓缓升腾，</p>
<p>冉冉墨香在屋内满满充盈。</p>
<p>心如茶水般澄澈清透。</p>
<p>品一盏茶，需要的是一份闲情，</p>
<p>阅一卷书，需要的是一份淡然，</p>
<p>不急不躁，才会品出茶的味道；</p>
<p>不紧不慢，才会悟出书中真谛，</p>
<p>不温不火，将日子过得有滋有味；</p>
<p>才会等来阳光总在风雨后。</p>
</div>`,r:{minutes:.99,words:296},title:"夏之歌【二】",i:"leaf"},["/note/summer/2","/note/summer/2.md"]],["v-12804242","/note/summer/3.html",{y:"a",d:"2015-06-08T00:00:00.000Z",l:"2015年6月8日",c:["随笔"],g:["夏之歌"],e:`<div style="text-align:center">
<p>雨后初晴，</p>
<p>阳光疏淡，</p>
<p>蛙声如潮，</p>
<p>蝶舞芳菲，</p>
<p>明媚总在</p>
<p>山水之间。</p>
<p>聚神凝眸，</p>
<p>欢喜终是</p>
<p>抵达了</p>
<p>心底的那处柔软。</p>
<p>一路逢迎，</p>
<p>翠绿撞满怀，</p>
<p>浅蓝惹心醉，</p>
<p>嫣红入眉眼，</p>
<p>清幽如画；</p>
<p>一路遇见，</p>
<p>花儿轻语，</p>
<p>风儿呢喃，</p>
<p>鸟儿高歌，</p>
<p>蝶儿缠绵。</p>
<p>浪漫成诗；</p>
<p>一路行走，</p>
<p>带上阳光，</p>
<p>打点行囊，</p>
<p>让心飞翔；</p>
<p>一路山水，</p>
<p>曲径通幽，</p>
<p>流水叮咚，</p>
<p>心有桃源，</p>
<p>何处不是花香满径?</p>
</div>`,r:{minutes:.49,words:148},title:"夏之歌【三】",i:"leaf"},["/note/summer/3","/note/summer/3.md"]],["v-55b65288","/note/summer/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["随笔"],g:["夏之歌"],e:`<div class="custom-container tip">
<p class="custom-container-title">介绍</p>
<p>这是我在高一写的第四篇散文诗集，最初发表在空间日志上。</p>
<p>近日将其作为少年回忆，整理在博客中。</p>
</div>
`,r:{minutes:.19,words:58},title:"夏之歌",i:"leaf"},["/note/summer/index.html","/note/summer/README.md"]],["v-a09495a4","/note/winter/1.html",{y:"a",d:"2015-01-17T00:00:00.000Z",l:"2015年1月17日",c:["随笔"],g:["冬之语"],e:`<h1> 冬之语【一】</h1>
<div style="text-align:center">
<p>倚冬兀自静坐，</p>
<p>低眉举笔伏案，</p>
<p>于流年里静好，</p>
<p>于岁月里安然，</p>
<p>指尖绽放一朵温暖，</p>
<p>与你我诉说着</p>
<p>一抹最温柔的心愿。</p>
<p>♢</p>
<p>一剪闲云，</p>
<p>承载天的思念；</p>
<p>一程山水，</p>
<p>遥寄风的衣钵；</p>
<p>一场冬雪，</p>
<p>洁白心的斑驳。</p>
<p>提笔风轻，落笔云淡，</p>
<p>描一处幽幽，</p>
<p>绘一程山水，</p>
<p>看汤河水上雪飘，</p>
<p>觅一处心灵桃花源。</p>
<p>♢</p>
<p>静坐一纸光阴，</p>
<p>瞭望寂寂心海，</p>
<p>在皑皑冬雪中，</p>
<p>悟红尘的风雪从容，</p>
<p>品流年的交织冷暖，</p>
<p>写人生的美如初见。</p>
<p>♢</p>
<p>一世一刹那，</p>
<p>一水映烟霞。</p>
<p>季节，更替；</p>
<p>岁月，流转。</p>
<p>在这悲凉的寒冬里，</p>
<p>研墨，沾墨，</p>
<p>提笔，落笔，</p>
<p>许身一份暖，</p>
<p>许心一份暖。</p>
</div>`,r:{minutes:.71,words:213},title:"冬之语【一】",i:"snow"},["/note/winter/1","/note/winter/1.md"]],["v-4733f4f4","/note/winter/10.html",{y:"a",d:"2016-02-10T00:00:00.000Z",l:"2016年2月10日",c:["随笔"],g:["冬之语"],e:`<h1> 冬之语【十】</h1>
<div style="text-align:center">
<p>深秋萧瑟晚冬更凉，</p>
<p>瘦枝浅草不堪寒霜。</p>
<p>枫林卸红妆，</p>
<p>蒹葭覆苍苍，</p>
<p>残朵落英满地殇。</p>
<p>♢</p>
<p>依稀旧榭笛声飞扬，</p>
<p>何觅白衣子见疏狂?</p>
<p>眉锁景一方，</p>
<p>眸拆泪两行，</p>
<p>千结心似双丝网。</p>
<p>♢</p>
<p>陌上似曾牵手醉春光?</p>
<p>花下几许寒衣徒自香?</p>
<p>冷夜倚梦长，</p>
<p>冰晨空怅惘，</p>
<p>山水迢迢两茫茫。</p>
<p>♢</p>
<p>旧时光景不忍回头望，</p>
<p>何日与子重逢不敢想。</p>
<p>花语指尖芳，</p>
<p>心事弦上淌，</p>
<p>万般愁绪费思量。</p>
<p>♢</p>
<p>当梅雪飘香，</p>
<p>北风无觅梦里荒唐，</p>
<p>卷帘影成双；</p>
<p>当候鸟鸣唱，</p>
<p>煮酒高歌迷离远方，</p>
<p>我为你守望。</p>
</div>`,r:{minutes:.63,words:190},title:"冬之语【十】",i:"snow"},["/note/winter/10","/note/winter/10.md"]],["v-48e8cd93","/note/winter/11.html",{y:"a",d:"2016-02-29T00:00:00.000Z",l:"2016年2月29日",c:["随笔"],g:["冬之语"],e:`<h1> 冬之语【十一】</h1>
<div style="text-align:center">
<p>一阙梅与情，</p>
<p>一笺感而叹，</p>
<p>思念的泪水悄然间</p>
<p>滑落我的指尖，</p>
<p>瞬间便氤氲成一帧</p>
<p>悠远的时光画卷。</p>
<p>画意阑珊，</p>
<p>谁的身影在风雪中若隐若现?</p>
<p>情思缱绻，</p>
<p>又是谁在旧榭亭台颦眸顾盼?</p>
<p>雪舞风弦，</p>
<p>梅韵悠婉；</p>
<p>雪霁风偃，</p>
<p>暗香依然。</p>
<p>这一季的梅情仍如那一季的浓挚，</p>
<p>这一季的雪意也似那一季的缠绵，</p>
<p>而斯人远去，</p>
<p>且归期杳然，</p>
<p>这一季的冬寒，</p>
<p>又瘦了几层香寒?</p>
</div>`,r:{minutes:.52,words:157},title:"冬之语【十一】",i:"snow"},["/note/winter/11","/note/winter/11.md"]],["v-4a9da632","/note/winter/12.html",{y:"a",d:"2016-11-09T00:00:00.000Z",l:"2016年11月9日",c:["随笔"],g:["冬之语"],e:`<h1> 冬之语【十二】</h1>
<div style="text-align:center">
<p>浅冬夜里，万籁俱静，</p>
<p>草木沉睡，北风拂绕，</p>
<p>唯有些许的寒意，</p>
<p>从秋末那</p>
<p>蒹葭水岸的诗经里，</p>
<p>奔赴而来。</p>
<p>不知不觉间，</p>
<p>秋真的是远去了，</p>
<p>不得不挥手与秋道别。</p>
<p>只是秋末的这一场霾，</p>
<p>迷离了所有的眸光，</p>
<p>阳光悄然收起微笑，</p>
<p>大地在烟雾翩跹里，</p>
<p>无情掩埋。</p>
<p>吃过了立冬的饺子，</p>
<p>也便预示着</p>
<p>收获的季节已经结束，</p>
<p>峻峭的寒冬俨然到来，</p>
<p>在北国的寒冬里，</p>
<p>是否有人愿意，</p>
<p>温暖我的心?</p>
</div>`,r:{minutes:.55,words:165},title:"冬之语【十二】",i:"snow"},["/note/winter/12","/note/winter/12.md"]],["v-9d2ae466","/note/winter/2.html",{y:"a",d:"2015-01-18T00:00:00.000Z",l:"2015年1月18日",c:["随笔"],g:["冬之语"],e:`<h1> 冬之语【二】</h1>
<div style="text-align:center">
<p>一眼凝眸，冬雪盈梅，</p>
<p>怎么看也看不够它的容颜，</p>
<p>干净，素雅与洁白；</p>
<p>怎么描也描不透它的风骨，</p>
<p>超脱，洒然与灵动；</p>
<p>怎么画也画不出它的美韵，</p>
<p>静雅，怡人与怡心，</p>
<p>就犹如那美丽的初见，</p>
<p>只有默默的诉说，</p>
<p>心里的一份惬意。</p>
<p>春的韵在于生机勃勃，万物复苏；</p>
<p>夏的韵在于柳绿花红，万枝妖娆；</p>
<p>秋的韵在于硕果累累，叶落枫红；</p>
<p>而冬的韵不是那么一目了然，</p>
<p>而是要</p>
<p>深深的感悟，</p>
<p>慢慢的彻悟，</p>
<p>静静地领悟其中的曼妙旋律……</p>
<p>掀开时光深处的美，</p>
<p>那是心与心遇见的暖，</p>
<p>那是魂与魂相拥的暖，</p>
<p>那是内心的丰盈，</p>
<p>那是沧桑的阅历，</p>
<p>是山水的晶莹剔透，</p>
<p>更是天宫的玉树琼花。</p>
<p>喜用最纯静最恬淡的人生底色，</p>
<p>去感悟一段繁华过后的宁静，</p>
<p>去领悟一场风雪之后，</p>
<p>新鲜清朗的气息，</p>
<p>和天空的美丽。</p>
<p>若心有如此的清澈素白，多好!</p>
<p>若人生永如美好的初见，多好!</p>
<p>若生命的旅途有如此的坦然，多好!</p>
</div>`,r:{minutes:1.07,words:321},title:"冬之语【二】",i:"snow"},["/note/winter/2","/note/winter/2.md"]],["v-99c13328","/note/winter/3.html",{y:"a",d:"2015-01-22T00:00:00.000Z",l:"2015年1月22日",c:["随笔"],g:["冬之语"],e:`<h1> 冬之语【三】</h1>
<div style="text-align:center">
<p>时光的年轮，</p>
<p>永远在时光里</p>
<p>兜兜转转，</p>
<p>简单纯净的初心，</p>
<p>却于流年的浸染下，</p>
<p>披上尘沙。</p>
<p>♢</p>
<p>笑，</p>
<p>仅仅是个表情符号，</p>
<p>你不会得知笑颜下</p>
<p>掩埋了汩汩泪飘；</p>
<p>哭，</p>
<p>却是极其难得的表露，</p>
<p>如何不到濒临崩溃，</p>
<p>珍珠怎会滑落。</p>
<p>你看得到敲打的字，</p>
<p>却看不见心底的伤与痛；</p>
<p>你看得到脸上的微笑，</p>
<p>却看不透心底於结的累累伤痕。</p>
<p>生活靠演技，全在表情里，</p>
<p>强装的开心，强装的坚强，</p>
<p>强装的洒脱，强装成生活的强者，</p>
<p>早已成为我们的生活习惯，</p>
<p>试问谁能逃得开</p>
<p>这一人生宿命的拘囿?</p>
<p>♢</p>
<p>滴泪成伤，</p>
<p>染指凄凉。</p>
<p>一缕心酸，</p>
<p>一度微寒，</p>
<p>一丝无法倾诉的苦不堪言，</p>
<p>一种无法言说的无奈心碎，</p>
<p>一道无法诠释的深沉情愫，</p>
<p>全部凝结成一颗晶莹珍珠，</p>
<p>悄然滑落。</p>
<p>♢</p>
<p>最难过的时候，</p>
<p>心中涌动着千言万语，</p>
<p>却止于唇齿之内，</p>
<p>不会说出半个字；</p>
<p>最伤心的时候，</p>
<p>眼框盈满泪水，</p>
<p>却睁开眼尽力容纳，</p>
<p>绝不会洒下半滴泪。</p>
<p>生活教会我们在风雨中奔跑，</p>
<p>人生将我们磨炼成强者，</p>
<p>含着眼泪依然笑对生活。</p>
<p>♢</p>
<p>时常将微笑挂在脸上，</p>
<p>其实是想将开心快乐带给身边，</p>
<p>不忍心让自己的伤悲影响周围。</p>
<p>可心底的悲伤与苦痛，</p>
<p>又有谁能看得到呢?</p>
<p>或许，</p>
<p>爱笑的人的伤痛，</p>
<p>真的没人会去理会吧。</p>
<p>♢</p>
<p>一个爱笑的人，</p>
<p>忽然悲痛不已，</p>
<p>是因为他再也无法承受</p>
<p>心底的那份苦痛，</p>
<p>已到达崩溃的边缘；</p>
<p>一个执著坚守的人，</p>
<p>忽然决定放弃，</p>
<p>不会是因为别的，</p>
<p>而是事情已经到了</p>
<p>他无法忍受的底线。</p>
<p>若是你觉得一个人性情大变，</p>
<p>其实不是变了，</p>
<p>而是真的再也无法承受</p>
<p>所有强加于身的一切。</p>
</div>`,r:{minutes:1.78,words:534},title:"冬之语【三】",i:"snow"},["/note/winter/3","/note/winter/3.md"]],["v-965781ea","/note/winter/4.html",{y:"a",d:"2015-01-26T00:00:00.000Z",l:"2015年1月26日",c:["随笔"],g:["冬之语"],e:`<h1> 冬之语【四】</h1>
<div style="text-align:center">
<p>隆冬岁末，</p>
<p>寒梅花开；</p>
<p>一个人的静默世界，</p>
<p>一个人的寡淡清欢，</p>
<p>独自依窗而眺，</p>
<p>见千里萧瑟，</p>
<p>寒烟微漫，</p>
<p>大雪纷飞，</p>
<p>万里如绵。</p>
<p>盼了一季的翩翩飞雪如期而至，</p>
<p>烟消雾散时，却于新元教室</p>
<p>拾得一抹越窗而入的冬日暖阳，</p>
<p>坐于一米阳光的温软里，</p>
<p>揽暗香盈袖，阅墨香书卷，</p>
<p>侧耳由远至近的春天脚步。</p>
</div>`,r:{minutes:.44,words:133},title:"冬之语【四】",i:"snow"},["/note/winter/4","/note/winter/4.md"]],["v-92edd0ac","/note/winter/5.html",{y:"a",d:"2015-02-03T00:00:00.000Z",l:"2015年2月3日",c:["随笔"],g:["冬之语"],e:`<h1> 冬之语【五】</h1>
<div style="text-align:center">
<p>这个冬天，是暖的，</p>
<p>少了暖流与寒流的交汇，</p>
<p>期盼的雪，始终在天上羞涩；</p>
<p>挚爱雪的我也只能在，</p>
<p>恬淡的情怀中，</p>
<p>与雪亲和，</p>
<p>与雪温故。</p>
<p>希望我能用手中的笔，</p>
<p>沾满浓情，沾满思绪，</p>
<p>一次次准确把思想中</p>
<p>那些幻美无尘的景致，</p>
<p>那些变幻万千的思绪，</p>
<p>用心勾勒，印染成画。</p>
<p>驻足季节的深处，</p>
<p>在蔚蓝的天空下，</p>
<p>与光阴深情相拥。</p>
<p>雪的香气沁透心骨，</p>
<p>素淡简单静雅情怀，</p>
<p>此时却又格外丰盈。</p>
<p>充溢静怡的心怀，</p>
<p>与雪白相映，</p>
<p>与冰清相结，</p>
<p>不觉想起一个已在</p>
<p>文章中绝尘的词汇:</p>
<p>玉洁冰清</p>
<p>却原来是一份</p>
<p>无比冷艳的懿美。</p>
<p>此际，</p>
<p>怀一颗温柔的心，</p>
<p>看一天东风曼舞，</p>
<p>绘一笺恬淡心语。</p>
</div>`,r:{minutes:.8,words:239},title:"冬之语【五】",i:"snow"},["/note/winter/5","/note/winter/5.md"]],["v-8f841f6e","/note/winter/6.html",{y:"a",d:"2015-02-03T00:00:00.000Z",l:"2015年2月3日",c:["随笔"],g:["冬之语"],e:`<h1> 冬之语【六】</h1>
<div style="text-align:center">
<p>走过一段无悔无憾的光阴，</p>
<p>或妖娆，或缄默，</p>
<p>情思优柔间，看一场花事，</p>
<p>从蓓蕾到零落，</p>
<p>都是命运的恩慈。</p>
<p>我们还是太小，太年轻，</p>
<p>情为何物，我们又怎能懂得?</p>
<p>经历曾经风雨，</p>
<p>心上一片彩虹的天。</p>
<p>梦语依然温柔，</p>
<p>心绪依旧芬芳。</p>
<p>轻捻一瓣年华的余香，</p>
<p>盈润在唇边，</p>
<p>浪漫，温雅，</p>
<p>是一首情怀里</p>
<p>一生唱不完的歌。</p>
<p>清凉的一卷光阴，</p>
<p>初见的美丽，</p>
<p>灿若琉璃，</p>
<p>散发着永不褪色的光华。</p>
<p>一帘落花微雨处的诗意相逢，</p>
<p>合着心弦，丝丝入扣，</p>
<p>扣开尘封已久的心门。</p>
<p>感念文字中的知遇，</p>
<p>云水柔润的相依，</p>
<p>一曲高山流水的韵，</p>
<p>是简宁的日子里</p>
<p>最动心的一溪清涓</p>
</div>`,r:{minutes:.76,words:228},title:"冬之语【六】",i:"snow"},["/note/winter/6","/note/winter/6.md"]],["v-8c1a6e30","/note/winter/7.html",{y:"a",d:"2015-02-04T00:00:00.000Z",l:"2015年2月4日",c:["随笔"],g:["冬之语"],e:`<h1> 冬之语【七】</h1>
<div style="text-align:center">
<p>期待邂逅一片雪花，</p>
<p>将心的温度降到冰点；</p>
<p>这样就可以飘落</p>
<p>飘落曾经许下的诺言。</p>
<p>期待邂逅一片雪花，</p>
<p>邂逅曾经邂逅的画面；</p>
<p>那些流光已走远</p>
<p>走远了你的衣袂翩翩；</p>
<p>就像一只蝴蝶—</p>
<p>吸食花蜜的日子不再留恋，</p>
<p>你早已经栖息在新的花园。</p>
<p>期待邂逅一片雪花，</p>
<p>不再艳羡俗世的缠绵；</p>
<p>倘若我可以剃度为僧，</p>
<p>愿此生守候在青灯之前，</p>
<p>和着一盏木鱼，</p>
<p>木鱼轻叩我无欲的心田；</p>
<p>只愿天晴的日子，</p>
<p>融化贮藏于我心间的诺言。</p>
<p>期待邂逅一片雪花，</p>
<p>不再自己把自己欺骗；</p>
<p>从此，我将彻底弃笔，</p>
<p>只与我的灵魂共眠；</p>
<p>也许，</p>
<p>我会在梦里死去，</p>
<p>死在一个落雪的冬天…</p>
</div>`,r:{minutes:.78,words:233},title:"冬之语【七】",i:"snow"},["/note/winter/7","/note/winter/7.md"]],["v-88b0bcf2","/note/winter/8.html",{y:"a",d:"2015-02-06T00:00:00.000Z",l:"2015年2月6日",c:["随笔"],g:["冬之语"],e:`<h1> 冬之语【八】</h1>
<div style="text-align:center">
<p>人生旅途，</p>
<p>时光如白驹过隙，</p>
<p>那些</p>
<p>曾经交集的缘份，</p>
<p>亦或随往事成烟，</p>
<p>没入时光的倒影。</p>
<p>落花一样的往事，</p>
<p>飘散在旧光阴里。</p>
<p>一回头，</p>
<p>发现许多细节，</p>
<p>疼痛的，伤感的，</p>
<p>温暖的，惆怅的，</p>
<p>都静静地在那里。</p>
<p>不论你走出多远，</p>
<p>它永远在你身旁。</p>
</div>
<p>节气进入深冬，却没了前些日子的寒冷了，尽管时不时有冷风拂过发梢，可暖暖的阳光依旧每天如约而来，顽固的鼻炎也远离了我，弱不禁风的身体、不堪一击的心脏终究没有辜负这晴好的天气，脸色也渐渐温润了起来。很长时间，内心不再起波澜，看着那些渲染在纸上的情愫，字里行间写满了理解，相知与期许，隔着山长水阔的遥远，这样被懂得，被惦念。心，突然浸满了淡淡的温热，柔软得再也承载不起任何惆怅。满满的都是牵念，是相惜的温暖，思念叠叠重重，却无以言说。</p>`,r:{minutes:1,words:299},title:"冬之语【八】",i:"snow"},["/note/winter/8","/note/winter/8.md"]],["v-85470bb4","/note/winter/9.html",{y:"a",d:"2016-02-09T00:00:00.000Z",l:"2016年2月9日",c:["随笔"],g:["冬之语"],e:`<h1> 冬之语【九】</h1>
<div style="text-align:center">
<p>梅花梦里几度寻，眸极天涯，不见归人。</p>
<p>月从东起日西沉，怕是黄昏，又近黄昏。</p>
<p>独饮寒香思远今。花落清肩，愁绪盈樽。</p>
<p>谁言冬雪过无痕? 瓣瓣残红，朵朵冰心。</p>
</div>
`,r:{minutes:.26,words:78},title:"冬之语【九】",i:"snow"},["/note/winter/9","/note/winter/9.md"]],["v-d7563b34","/note/winter/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["随笔"],g:["冬之语"],e:`<div class="custom-container tip">
<p class="custom-container-title">介绍</p>
<p>这是我在高一写的第二篇散文诗集，最初发表在空间日志上。</p>
<p>近日将其作为少年回忆，整理在博客中。</p>
</div>
`,r:{minutes:.29,words:88},title:"冬之语",i:"snow"},["/note/winter/index.html","/note/winter/README.md"]],["v-34b20afc","/note/winter/newyear.html",{y:"a",d:"2016-01-04T00:00:00.000Z",l:"2016年1月4日",c:["随笔"],g:["冬之语"],e:`<h1> 新年——元旦有感</h1>
<p>这一季无约而至的雪花，于风中优雅飘落，义无反顾地拥吻大地，最终，无声无息地化为尘泥，便完成了自己美丽而短暂的迂世使命。依依雪情，若一场年华的花期，从开到落，都在自己的视线中温婉呈现。两年半过去了，我们就这样，情愿或不情愿地，承载了一段流光记忆的鉴证，迎来了 16 年，迎来了我们这一届人命运的转折点。我们终是，无法逃出光阴之外。@16 届全体同学——题记</p>
<p>谁不向往那种没有时间，年龄，地域，季节，家庭，责任所约束的生活方式呢? ! 只是对于现在的我们，太不切实际，太不合乎常情。此时，已是奋力拼搏的最后一刻了。常常以为，做不到的就不要想了，省的反受其累。不好不坏，随遇而安地生活最是安妥。至于恰到好处的孤独与深情，偶尔品味，倒也无妨。但是现在，面对人生命运的转折点，我还是想改一下自己随遇而安的性子，争取在五个月后，创造出属于自己的奇迹。——给自己的寄语 @.</p>`,r:{minutes:8.37,words:2510},title:"新年——元旦有感",i:"snow"},["/note/winter/newyear","/note/winter/newyear.md"]],["v-5a55e944","/note/winter/newyear2.html",{y:"a",d:"2017-01-28T00:00:00.000Z",l:"2017年1月28日",c:["随笔"],g:["冬之语"],e:`<h1> 鸡年新春有感</h1>
<p>每当辞旧迎新盘点往事，都是一次思索和总结。人生是一个过程，春秋冬夏，光阴荏苒，一日日，一月月，一年年，从岁首眨眼间就来到了岁尾。岁月不居，逝者如斯，就像天空中的浮云，遥远却清晰，清晰的就像是镶嵌在岁月中的一串串脚印。</p>
<p>收拾整理好心间的琐事，已是子夜，在这一刻我收到了来自我青的祝福。寥寥数语，暖在心头。悄悄出门。当我亲手引燃那一长串爆竹的时候，远去天国的奶奶——你听到了吗? 那是孙儿一声声亲切的问候!</p>
<p>听着窗外由稀疏到稠密的爆竹声声，我心有思绪万千感慨! 烟花、爆竹将这个夜晚扮靓有声有色炫目多彩。这，是千家万户燃放出了他们对于新年的期盼和幸福新生活的一种向往与祝福。</p>`,r:{minutes:2.57,words:772},title:"鸡年新春有感",i:"snow"},["/note/winter/newyear2","/note/winter/newyear2.md"]],["v-c687aefe","/note/winter/note.html",{y:"a",d:"2015-01-17T00:00:00.000Z",l:"2015年1月17日",c:["随笔"],g:["冬之语"],e:`<h1> 冬之语【开篇语】</h1>
<div style="text-align:center">
<p>曾经的我，</p>
<p>将那么多的心绪</p>
<p>都赋予给了秋。</p>
<p>用——</p>
<p>浓墨晕染的文字</p>
<p>写——</p>
<p>秋的静美，</p>
<p>秋的萧瑟，</p>
<p>秋的多情，</p>
<p>秋的恬淡。</p>
<p>而那些禅风流韵的字迹，</p>
<p>自纤细的笔尖奔泻而出，</p>
<p>无一不是袒露着</p>
<p>秋的清喜，秋的憔悴。</p>
<p>如今我说:</p>
<p>我要留一些情意</p>
<p>给冬的白雪，</p>
<p>冬的寒风，</p>
<p>冬的寂静，</p>
<p>冬的沉醉。</p>
<p>于初冬幽凉的早晨，</p>
<p>听风动寒枝的瑟瑟，</p>
<p>听暖意温窗的静寂，</p>
<p>然后，</p>
<p>只在万物清宁的时候，</p>
<p>等一场梅开，</p>
<p>等一幅优美画卷缓缓展现，</p>
<p>一个人，</p>
<p>静静地，静静地，</p>
<p>诉说着冬之语……</p>
</div>`,r:{minutes:.64,words:191},title:"冬之语【开篇语】",i:"snow"},["/note/winter/note","/note/winter/note.md"]],["v-65f8f0ee","/note/wsa/",{y:"a",d:"2022-12-06T14:18:22.000Z",r:{minutes:.01,words:2},title:"WSA"},["/note/wsa/index.html","/note/wsa/README.md"]],["v-65f8f243","/note/wsl/",{y:"a",d:"2022-12-06T14:18:22.000Z",e:`<p>目前使用的系统是 WSL2。</p>
<p>其中以下操作可能需要在新机器上进行相同操作:</p>
<h2> Windows 侧</h2>
<p>Windows 侧可以在用户目录下创建 <code>.wslconfig</code> 文件，用于配置 WSL2。</p>
<div class="language-conf" data-ext="conf"><pre class="language-conf"><code>[wsl2]
# Limits VM memory in WSL 2 to 8 GB
memory=8GB
</code></pre></div><h2> WSL 侧</h2>`,r:{minutes:1.37,words:411},title:"WSL"},["/note/wsl/index.html","/note/wsl/README.md"]],["v-7827ace1","/physics/electromagnetism/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["物理"],g:["电磁学"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/physics/electromagnetism/charpter1.html" target="blank">第一章</a></p>
</li>
<li>
<p><a href="/physics/electromagnetism/charpter2.html" target="blank">第二章</a></p>
</li>
</ul>
`,r:{minutes:.08,words:23},title:"电磁学笔记"},["/physics/electromagnetism/index.html","/physics/electromagnetism/README.md"]],["v-73218730","/physics/electromagnetism/charpter1.html",{y:"a",d:"2020-12-27T00:00:00.000Z",l:"2020年12月27日",c:["物理"],g:["电磁学"],e:`<h2> 电场与电势</h2>
<p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.1574em;vertical-align:-0.836em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">4</span><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="mord"><span class="mord mathnormal">ε</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.836em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.7936em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.1076em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">4</span><span class="mord mathnormal" style="margin-right:0.03588em;">π</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">μ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>`,r:{minutes:1.2,words:361},title:"第一章"},["/physics/electromagnetism/charpter1","/physics/electromagnetism/charpter1.md"]],["v-74d65fcf","/physics/electromagnetism/charpter2.html",{y:"a",d:"2020-12-28T02:20:05.000Z",c:["物理"],g:["电磁学"],e:`<h2> 导体</h2>
<p>导体表面为等势面。</p>
<p>对于孤立导体，空腔内表面无电荷、无电场。</p>
<p>若内部含有其他带电体，则内表面会感应出相反的电荷量。</p>
<h2> 电容</h2>
<p><span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.2694em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9244em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">U</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.4461em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">Q</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span>，单位符号为 <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">F</span></span></span></span>，单位名称法拉。</p>`,r:{minutes:.68,words:205},title:"第二章"},["/physics/electromagnetism/charpter2","/physics/electromagnetism/charpter2.md"]],["v-07d71d5e","/physics/optism/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["物理"],g:["光学"],e:`<h1> 光学笔记</h1>
<ul>
<li><a href="/physics/optism/charpter1.html" target="blank">第一章</a></li>
</ul>
`,r:{minutes:.05,words:14},title:"光学笔记"},["/physics/optism/index.html","/physics/optism/README.md"]],["v-432fd8ed","/physics/optism/charpter1.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["物理"],g:["光学"],e:`<h2> <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord text"><span class="mord">§1.1</span></span></span></span></span></h2>
<p>电磁波速度</p>
`,r:{minutes:.5,words:151},title:"第一章"},["/physics/optism/charpter1","/physics/optism/charpter1.md"]],["v-792517ff","/physics/quatum/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["物理"],g:["量子力学"],e:`<h1> 量子力学笔记</h1>
<ul>
<li><a href="/physics/quatum/charpter1.html" target="blank">第一章</a></li>
</ul>
`,r:{minutes:.06,words:18},title:"量子力学笔记"},["/physics/quatum/index.html","/physics/quatum/README.md"]],["v-9b03b464","/physics/quatum/charpter1.html",{y:"a",d:"2020-07-19T16:57:30.000Z",c:["物理"],g:["量子力学"],e:`<h1> 第一章</h1>
<ul>
<li>薛定谔方程的形式</li>
<li>归一化的证明</li>
<li>动量算符的推导</li>
</ul>
`,r:{minutes:.11,words:32},title:"第一章"},["/physics/quatum/charpter1","/physics/quatum/charpter1.md"]],["v-31760682","/physics/tsp/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["物理"],g:["热统"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/physics/tsp/definition.html" target="blank">定义</a></p>
</li>
<li>
<p><a href="/physics/tsp/charpter1.html" target="blank">第一章</a></p>
</li>
<li>
<p><a href="/physics/tsp/charpter2.html" target="blank">第二章</a></p>
</li>
<li>
<p><a href="/physics/tsp/charpter3.html" target="blank">第三章</a></p>
</li>
</ul>`,r:{minutes:.11,words:34},title:"热力学与统计物理笔记"},["/physics/tsp/index.html","/physics/tsp/README.md"]],["v-4d8eba8e","/physics/tsp/charpter1.html",{y:"a",d:"2020-12-28T00:00:00.000Z",l:"2020年12月28日",c:["物理"],g:["热统"],e:`<h2> 概念</h2>
<ul>
<li>孤立系: 与其他物体既没有物质交换也没有能量交换的系统。</li>
<li>闭系: 与外界没有物质交换，但有能量交换的系统</li>
<li>开系: 与外界既有物质交换，又有能量交换的系统</li>
</ul>
<p>热力学平衡态: 系统的各种宏观性质在长时间内不发生任何变化。</p>
<p>弛豫时间: 系统由其初始状态达到平衡状态所经历的时间称为弛豫时间。</p>
<p>热平衡定律 (热力学第零定律): 如果物体 A 和 物体 B 各自与处在同一状态的物体 C 达到热平衡，若令 A 与 B 进行接触，它们也将处在热平衡。</p>
<p>热力学温标: 不依赖于任何具体物质特性的温标。</p>`,r:{minutes:3.09,words:926},title:"第一章"},["/physics/tsp/charpter1","/physics/tsp/charpter1.md"]],["v-4f43932d","/physics/tsp/charpter2.html",{y:"a",d:"2020-12-28T00:00:00.000Z",l:"2020年12月28日",c:["物理"],g:["热统"],e:`<h2> 四个热力学函数</h2>
<p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:4.5em;vertical-align:-2em;"></span><span class="mord"><span class="mtable"><span class="col-align-r"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:2.5em;"><span style="top:-4.66em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span></span></span><span style="top:-3.16em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span></span></span><span style="top:-1.66em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">G</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:2em;"><span></span></span></span></span></span><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:2.5em;"><span style="top:-4.66em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">p</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span><span style="top:-3.16em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">TS</span></span></span><span style="top:-1.66em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">TS</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">p</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:2em;"><span></span></span></span></span></span></span></span></span></span></span></span></p>`,r:{minutes:1.84,words:551},title:"第二章"},["/physics/tsp/charpter2","/physics/tsp/charpter2.md"]],["v-50f86bcc","/physics/tsp/charpter3.html",{y:"a",d:"2020-12-28T00:00:00.000Z",l:"2020年12月28日",c:["物理"],g:["热统"],e:`<h2> 稳定平衡条件</h2>
<p>在等温等容的条件下，自由能 <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">F</span></span></span></span> 永不增加。在稳定状态下 <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">F</span></span></span></span> 为极小(即 <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03785em;">δ</span><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0085em;vertical-align:-0.1944em;"></span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03785em;">δ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.13889em;">F</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel amsrm">⩾</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>)</p>`,r:{minutes:.97,words:290},title:"第三章"},["/physics/tsp/charpter3","/physics/tsp/charpter3.md"]],["v-15c374c7","/physics/tsp/definition.html",{y:"a",d:"2021-04-10T00:00:00.000Z",l:"2021年4月10日",c:["物理"],g:["热统"],e:`<h2> 基本概念</h2>
<p>弛豫时间: 系统由其初始状态达到平衡状态所经历的时间。</p>
<p>平衡态: 系统的各种宏观性质长时间内不发生变化，这样的状态成为热力学平衡态。</p>
<ul>
<li>开系: 与外界既有物质交换，又有能量交换的系统</li>
<li>闭系: 与外界没有物质交换，但有能量交换的系统</li>
<li>孤立系: 与其他物体既没有物质交换又没有能量交换的系统</li>
</ul>
<p>热力学温标: 不依赖于任何具体物质特性的温标。</p>
<h2> 热力学定律</h2>
<h3> 热平衡定律(热力学第零定律)</h3>
<p>如果 <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 和 <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span> 同时与 <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span></span></span></span> 达到热平衡，则 <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 和 <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span> 也处于热平衡。</p>`,r:{minutes:2.24,words:672},title:"概念"},["/physics/tsp/definition","/physics/tsp/definition.md"]],["v-1b96b631","/software/comsol/",{y:"a",d:"2020-05-29T00:00:00.000Z",l:"2020年5月29日",c:["软件"],g:["仿真","COMSOL"],e:`<p>这里是一些 Comsol 的学习资料整理与学习心得。</p>
`,r:{minutes:1.67,words:501},title:"COMSOL",i:"app"},["/software/comsol/index.html","/software/comsol/README.md"]],["v-707de889","/software/comsol/app.html",{y:"a",d:"2020-06-01T00:00:00.000Z",l:"2020年6月1日",c:["软件"],g:["仿真","COMSOL"],e:`<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>制作中...</p>
</div>
<h2> 官方文档</h2>
<h3> APP 博客</h3>
<ul>
<li><a href="https://cn.comsol.com/blogs/part-1-tips-to-improve-simulation-app-design-and-structure/" target="_blank" rel="noopener noreferrer">第一部分: 提升仿真 App 设计与结构的技巧</a></li>
</ul>`,r:{minutes:.28,words:84},title:"APP",i:"app"},["/software/comsol/app","/software/comsol/app.md"]],["v-e1cde2e8","/software/comsol/create.html",{y:"a",d:"2020-06-01T00:00:00.000Z",l:"2020年6月1日",c:["软件"],g:["仿真","COMSOL"],e:`<p>您可以遵循模型向导的指示来建立模型，也可以使用空模型开始建模操作。</p>
`,r:{minutes:1.01,words:303},title:"创建新模型",i:"create"},["/software/comsol/create","/software/comsol/create.md"]],["v-00a3e380","/software/comsol/get-started.html",{y:"a",d:"2020-06-01T00:00:00.000Z",l:"2020年6月1日",c:["软件"],g:["快速上手","仿真","COMSOL"],e:`<p>本章简单介绍如何在 COMSOL Multiphysics<sup>®</sup> 中建立和运行有限元模型。</p>
`,r:{minutes:9.87,words:2962},title:"快速上手",i:"creative"},["/software/comsol/get-started","/software/comsol/get-started.md"]],["v-a2394e62","/software/comsol/install.html",{y:"a",d:"2020-05-29T00:00:00.000Z",l:"2020年5月29日",c:["软件"],g:["安装","仿真","COMSOL"],e:`<h2> 软件下载</h2>
<p>您可以直接从 <a href="https://cn.comsol.com/product-download" target="_blank" rel="noopener noreferrer">官网下载页面</a> 进行下载。</p>
<h2> 软件许可</h2>
<ol>
<li>
<p>可以注册一个 COMSOL 账号，积极参与并收听 COMSOL 官网上的免费 Workshop，每次参加都会附赠 15 天的免费试用许可证。</p>
<div class="custom-container tip">
<p class="custom-container-title">试用许可证</p>
<p>COMSOL 试用许可证与 COMSOL 全产品许可证的唯一区别是无法使用 COMSOL Compiler，即不能使用该许可证将 COMSOL 模型编译为各平台可用的应用程序。</p>
<p>COMSOL workshop 的频率很高，平均不到十天就有一期，在 <a href="http://cn.comsol.com/events" target="_blank" rel="noopener noreferrer">这里</a> 查看并注册。</p>
</div>
</li>
<li>
<p><s>打着学习交流的名义，科学上网在国外相关论坛上搜索 “LMCOMSOL_Multiphysics_SSQ.lic”</s> ❌</p>
<p>这是违法的，并且可能收到 COMSOL 公司的追责。</p>
</li>
</ol>`,r:{minutes:.73,words:219},title:"COMSOL 安装",i:"install"},["/software/comsol/install","/software/comsol/install.md"]],["v-772a6ade","/software/comsol/intro.html",{y:"a",d:"2020-06-02T00:00:00.000Z",l:"2020年6月2日",c:["软件"],g:["仿真"],e:`<h2> 有限元分析</h2>
<p>有限元分析(Finite Element Analysis，FEA)软件可以通过仿真减少原型测试的原型数量和测试次数。一旦建立了能够准确预测真实物理参数的有限元分析模型，就可以借助它大幅改进产品或过程的设计和运行。在此基础上，优化算法和自动控制的应用，可以进一步实现仅凭直觉完全无法达到的设计改进。目前的有限元分析软件大多已包含自动控制功能，并将这些功能嵌入数学和数值模型中，而优化算法也通常包含在求解过程中。</p>
<p>基于数学模型表示的物理定律构成了有限元分析软件的基础。对于有限元分析来说，这些定律包括各项守恒定律、经典力学定律和电磁学定律。</p>
`,r:{minutes:20.18,words:6054},title:"仿真介绍",i:"info"},["/software/comsol/intro","/software/comsol/intro.md"]],["v-ec82c4fe","/software/comsol/material.html",{y:"a",d:"2020-06-01T00:00:00.000Z",l:"2020年6月1日",c:["软件"],g:["仿真","COMSOL"],e:`<h2> 内置材料</h2>
<p>COMSOL Multiphysics<sup>®</sup> 软件提供了按应用领域分组的多种预定义材料，您可以根据需要将其添加到仿真中。</p>
<p>您可以很轻松的通过<strong>添加材料</strong>窗口或<strong>材料浏览器</strong>来添加材料。</p>
<h2> 创建材料</h2>
<p>在 COMSOL Multiphysics<sup>®</sup> 软件中，您可以根据自己的需求来创建完全定制的材料。操作步骤非常简单:</p>
<ul>
<li>在模型中添加空材料模板</li>
<li>将其指派给所需的模型几何部分</li>
<li>通过指定材料属性来详细描述材料的性能。</li>
</ul>`,r:{minutes:2.71,words:814},title:"材料",i:"material"},["/software/comsol/material","/software/comsol/material.md"]],["v-e67bbff4","/software/comsol/model-tree.html",{y:"a",d:"2020-06-01T00:00:00.000Z",l:"2020年6月1日",c:["软件"],g:["仿真","COMSOL"],e:`<p>使用“模型开发器”时，可通过以在默认的模型树中添加节点并编辑节点设置来构建模型。</p>
<p>默认模型树中的所有节点均为顶层父节点。可以右键单击这些节点以查看可在其中添加的子节点的列表。这是将节点添加到模型树的方式。</p>
<p>当您单击某个子节点时，可以在设置窗口中查看其节点设置。您可以在此编辑节点设置。</p>
`,r:{minutes:6.19,words:1857},title:"模型树",i:"tree"},["/software/comsol/model-tree","/software/comsol/model-tree.md"]],["v-101096cf","/software/comsol/physic-field.html",{y:"a",d:"2020-06-02T00:00:00.000Z",l:"2020年6月2日",c:["软件"],g:["仿真","COMSOL"],e:`<h2> 目录</h2>
<ul>
<li>
<p>关于 COMSOL 多物理场在理论上使用的公式，及其对公式进行的简化与对应计算，请见 <a href="http://cn.comsol.com/multiphysics/introduction-to-physics-pdes-and-numerical-modeling" target="_blank" rel="noopener noreferrer">物理定律、偏微分方程、数学和数值建模</a>。因个人能力不足，本教程不包含这一部分的摘录，精简与批注。</p>
</li>
<li>
<p>关于各物理定律在各模块以及模型的具体应用、简化，请移步 <a href="http://cn.comsol.com/multiphysics/" target="_blank" rel="noopener noreferrer">COMSOL 多物理场仿真百科</a>。本教程同样不做介绍。</p>
</li>
<li>
<p>关于 COMSOL 中的各个模块能够解决的领域及问题，以及各个模块的特点与优点，请查阅 <a href="https://cn.comsol.com/products" target="_blank" rel="noopener noreferrer">COMSOL<sup>®</sup> 软件产品库</a>。本教程不做摘录与列出。</p>
</li>
</ul>`,r:{minutes:1.49,words:446},title:"模型树",i:"physics"},["/software/comsol/physic-field","/software/comsol/physic-field.md"]],["v-e6fd97ea","/software/comsol/result.html",{y:"a",d:"2020-06-01T00:00:00.000Z",l:"2020年6月1日",c:["软件"],g:["仿真","COMSOL"],e:`<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>制作中...</p>
</div>
<h2> 官方文档</h2>
<h3> 结果基础</h3>
<p>博客:</p>
<ul>
<li><a href="https://cn.comsol.com/blogs/how-to-export-and-share-your-3d-result-plots-as-gltf-files/" target="_blank" rel="noopener noreferrer">如何将三维结果图导出为可共享的 glTF™ 文件</a></li>
</ul>`,r:{minutes:.71,words:213},title:"结果",i:"result"},["/software/comsol/result","/software/comsol/result.md"]],["v-8d480ae8","/software/comsol/select.html",{y:"a",d:"2020-06-01T00:00:00.000Z",l:"2020年6月1日",c:["软件"],g:["仿真","COMSOL"],e:`<h2> 显式选择</h2>
<p>COMSOL Multiphysics<sup>®</sup> 软件中的“显式选择”特征可以为单独的几何实体分别创建选择，从而帮助简化模型并优化工作流程。</p>
<p>比如您做了一个(保温层-镀层-铜)的三层管道，您可以预先创建一个显式选择，选中所有镀层的几何域。则您可以在物理场、网格和结果中，使用这个选择，来快速选中所有镀层的几何对象。</p>
<h2> 布尔选择和相邻选择</h2>
<p>在 COMSOL Multiphysics<sup>®</sup> 中，您可以使用布尔型选择和相邻选择来创建定制的几何实体组。选择的最大特点是这些几何实体组在模型几何更改时会自动更新。以下所有选择类型都使用先前定义的选择作为输入。</p>`,r:{minutes:2,words:599},title:"选择",i:"select"},["/software/comsol/select","/software/comsol/select.md"]],["v-0ffdd5a1","/software/comsol/study.html",{y:"a",d:"2020-06-01T00:00:00.000Z",l:"2020年6月1日",c:["软件"],g:["仿真","COMSOL"],e:`<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>制作中...</p>
</div>
<h2> 官方文档</h2>
<p>视频:</p>
<ul>
<li>
<p><a href="https://cn.comsol.com/video/performing-a-parameter-estimation-study-in-comsol-multiphysics" target="_blank" rel="noopener noreferrer">在 COMSOL Multiphysics<sup>®</sup> 中运行“参数估计”研究</a></p>
</li>
<li>
<p><a href="https://cn.comsol.com/video/performing-parametric-sweep-study-comsol-multiphysics" target="_blank" rel="noopener noreferrer">在 COMSOL Multiphysics 中执行参数化扫描研究</a></p>
</li>
</ul>`,r:{minutes:.24,words:72},title:"研究",i:"study"},["/software/comsol/study","/software/comsol/study.md"]],["v-5978b3ac","/software/git/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["Git"],g:["Git","软件"],e:`<p>Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。在开发中分布式文件管理系统，可以便于多人协作开发。</p>
<div class="custom-container info">
<p class="custom-container-title">交互式学习</p>
<p>如果您觉得本文太枯燥，这里有一个 <a href="http://learngitbranching.js.org/" target="_blank" rel="noopener noreferrer">交互式的分支演示与学习网站</a>。您可以在这里领略 Git 的魅力。</p>
<p>但 Mr.Hope 仍建议您操作完再系统的学习并阅读以下内容。</p>
</div>
`,r:{minutes:1.03,words:309},title:"Git",i:"git"},["/software/git/index.html","/software/git/README.md"]],["v-a0a24d6a","/software/git/branch.html",{y:"a",a:"廖雪峰",d:"2020-06-03T17:08:34.000Z",c:["Git"],g:["Git","软件"],e:`<h2> 概述</h2>
<p>分支就是科幻电影里面的平行宇宙，当您正在电脑前努力学习 Git 的时候，另一个您正在另一个平行宇宙里努力学习 SVN。</p>
<p>如果两个平行宇宙互不干扰，那对现在的您也没啥影响。不过，在某个时间点，两个平行宇宙合并了，结果，您既学会了 Git 又学会了 SVN!</p>
<p></p>
<p>分支在实际中有什么用呢? 假设您准备开发一个新功能，但是需要两周才能完成，第一周您写了 50% 的代码，如果立刻提交，由于代码还没写完，不完整的代码库会导致别人不能干活了。如果等代码全部写完再一次提交，又存在丢失每天进度的巨大风险。</p>
<p>现在有了分支，就不用怕了。您创建了一个属于您自己的分支，别人看不到，还继续在原来的分支上正常工作，而您在自己的分支上干活，想提交就提交，直到开发完毕后，再一次性合并到原来的分支上，这样，既安全，又不影响别人工作。</p>`,r:{minutes:23.23,words:6969},title:"分支管理",i:"branch"},["/software/git/branch","/software/git/branch.md"]],["v-efa0f806","/software/git/change.html",{y:"a",a:"廖雪峰",d:"2020-06-03T17:08:34.000Z",c:["Git"],g:["Git","软件"],e:`<h2> 管理修改</h2>
<p>Git 比其他版本控制系统设计得优秀，因为 Git 跟踪并管理的是修改，而非文件。</p>
<p>您会问，什么是修改? 比如您新增了一行，这就是一个修改，删除了一行，也是一个修改，更改了某些字符，也是一个修改，删了一些又加了一些，也是一个修改，甚至创建一个新文件，也算一个修改。</p>
<p>为什么说 Git 管理的是修改，而不是文件呢? 我们还是做实验。第一步，对 readme.txt 做一个修改，比如加一行内容:</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> readme.txt
Git is a distributed version control system.
Git is <span class="token function">free</span> software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes.
</code></pre></div>`,r:{minutes:7.86,words:2357},title:"修改管理",i:"change"},["/software/git/change","/software/git/change.md"]],["v-2fe790c2","/software/git/create-repo.html",{y:"a",a:"廖雪峰",d:"2020-06-04T17:22:49.000Z",c:["Git"],g:["Git","软件"],e:`<p>什么是仓库呢? 英文名<strong>repository</strong>，您可以简单理解成一个目录，这个目录里面的所有文件都可以被 Git 管理起来，每个文件的修改、删除， Git 都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。</p>
`,r:{minutes:3.92,words:1176},title:"Git 仓库",i:"repo"},["/software/git/create-repo","/software/git/create-repo.md"]],["v-fe4c8648","/software/git/custom.html",{y:"a",a:"廖雪峰",d:"2020-06-04T17:22:49.000Z",c:["Git"],g:["Git","软件"],e:`<p>在安装 Git 一节中，我们已经配置了 <code>user.name</code> 和 <code>user.email</code>，实际上，Git 还有很多可配置项。</p>
<p>比如，让 Git 显示颜色，会让命令输出看起来更醒目:</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> color.ui <span class="token boolean">true</span>
</code></pre></div>`,r:{minutes:2.6,words:780},title:"自定义 Git",i:"skin"},["/software/git/custom","/software/git/custom.md"]],["v-14d32906","/software/git/gitLFS.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["Git"],g:["Git","软件"],e:`<h1> Git Large File Storage</h1>
<p>Git Large File Storage (LFS) replaces large files such as audio samples, videos, datasets, and graphics with text pointers inside Git, while storing the file contents on a remote server like GitHub.com or GitHub Enterprise.</p>
<h2> Getting Started</h2>
<ol>
<li>
<p>Download and install the Git command-line extension. Once downloaded and installed, set up Git LFS and its respective hooks by running:</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> lfs <span class="token function">install</span>
</code></pre></div><p>You’ll need to run this in your repository directory, once per repository.</p>
</li>
<li>
<p>Select the file types you’d like Git LFS to manage (or directly edit your .gitattributes). You can configure file extensions at anytime.</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> lfs track <span class="token string">"*.psd"</span>
</code></pre></div><p>Make sure to track <code>.gitattributes</code></p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> .gitattributes
</code></pre></div></li>
</ol>`,r:{minutes:.43,words:129},title:"Git Large File Storage",i:"Github"},["/software/git/gitLFS","/software/git/gitLFS.md"]],["v-46819f1b","/software/git/ignore.html",{y:"a",a:"廖雪峰",d:"2020-06-04T17:22:49.000Z",c:["Git"],g:["Git","软件"],e:`<p>有些时候，您必须把某些文件放到 Git 工作目录中，但又不能提交它们，比如保存了数据库密码的配置文件啦，等等，每次 <code>git status</code> 都会显示 <code>Untracked files</code> ...，有强迫症的童鞋心里肯定不爽。</p>
<p>好在 Git 考虑到了大家的感受，这个问题解决起来也很简单，在 Git 工作区的根目录下创建一个特殊的 <code>.gitignore</code> 文件，然后把要忽略的文件名填进去，Git 就会自动忽略这些文件。</p>
<p>忽略文件的原则是:</p>
<ul>
<li>忽略操作系统自动生成的文件，比如缩略图等；</li>
<li>忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如 Java 编译产生的 <code>.class</code> 文件；</li>
<li>忽略您自己的带有敏感信息的配置文件，比如存放口令的配置文件。</li>
</ul>`,r:{minutes:4.23,words:1268},title:"忽略特殊文件",i:"skin"},["/software/git/ignore","/software/git/ignore.md"]],["v-39a5f5ca","/software/git/install.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["Git"],g:["Git","软件","安装"],e:`<h2> Git 下载</h2>
<p>官网在国外，网速较慢。在安装 Git 前推荐安装好 <a href="/software/vscode/" target="blank">VS Code</a>。</p>
<ul>
<li><a href="https://git-scm.com/downloads/" target="_blank" rel="noopener noreferrer">官网下载</a></li>
</ul>
<h2> Git 的安装</h2>
<ol>
<li>
<p>同意协议并选择安装位置 (不建议更改安装位置)</p>
<p></p>
<p></p>
</li>
<li>
<p>启用 LFS 支持，其他随意 (影响不大)</p>
<p></p>
</li>
<li>
<p>自行决定是否创建启动菜单</p>
<p></p>
</li>
<li>
<p>选择使用 VS Code 作为 git 的默认编辑器。</p>
<p></p>
</li>
<li>
<p>选择 Git 使用的默认分支名，GitHub 已经将默认分支名称改为 main。</p>
<p></p>
<div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<p>在 2020 年的黑人运动中，部分黑人认为 master 这个词是对它们的冒犯。</p>
</div>
</li>
<li>
<p>选择第二项，这将允许您在第三方工具中使用 Git，同时不会覆盖默认的 Windows 命令。</p>
<p></p>
</li>
<li>
<p>使用 OpenSSL Library</p>
<p></p>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>如果自己公司有 CA，或者在开发中需要 Git 承认某些自签 CA，则需要选择第二项。</p>
</div>
</li>
<li>
<p>务必选择最后一项 “原样检出与提交”</p>
<p></p>
</li>
<li>
<p>选择 Git 终端</p>
<p></p>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>如果您对 VS Code 和 PowerShell 还不熟悉，建议选择 MinTTY，以方便您接下来在学习中对 Git Bash 的临时使用。</p>
</div>
</li>
<li>
<p>选择 <code>git pull</code> 的默认行为，保持默认不要改动</p>
<p></p>
</li>
<li>
<p>选择凭据储存管理器，请选择第一个跨平台管理器</p>
<p></p>
</li>
<li>
<p>额外的选项确认，均勾选即可</p>
<p></p>
</li>
<li>
<p>一些实验性的功能，通常不太稳定或有 bug，不同 Git 版本会有差异，可根据自身情况确定</p>
<p></p>
</li>
</ol>`,r:{minutes:3.66,words:1098},title:"安装与配置",i:"install"},["/software/git/install","/software/git/install.md"]],["v-1e560a99","/software/git/intro.html",{y:"a",a:"Mr.Hope & 廖雪峰",d:"2020-06-04T17:22:49.000Z",c:["Git"],g:["Git","软件"],e:`<p>Git 是什么?</p>
<p>Git 是目前世界上最先进的分布式版本控制系统(没有之一)。</p>
`,r:{minutes:7.1,words:2129},title:"Git 介绍",i:"creative"},["/software/git/intro","/software/git/intro.md"]],["v-db46e766","/software/git/merge.html",{y:"a",d:"2022-09-07T17:18:06.000Z",c:["Git"],g:["Git","软件"],e:`<h2> Squash merge</h2>
<p>通过使用 <code>--squash</code> 选项，你可以在合并中将多个 commit 合并为一个。</p>
<p>也就是对于以下的例子</p>
<p><code>git merge feature</code> 得到的结果为:</p>
<p>而如果 <code>feature</code> 分支意在实现一个完成的特性，两个 commit 只是工作进度实际上并不重要的时候，我们可以通过 <code>git merge --squash feature</code> 得到:</p>
<h2> Cherry pick</h2>
<p>有些时候，我们可能需要提取其他分支的某个 commit，这个时候我们可以用 cherry pick 进行操作。</p>`,r:{minutes:1.36,words:407},title:"高级合并",i:"merge"},["/software/git/merge","/software/git/merge.md"]],["v-6479d7d7","/software/git/proxy.html",{y:"a",d:"2022-12-06T14:18:22.000Z",c:["Git"],g:["Git","软件"],e:`<p>由于目前 GitHub 已经在全国大部分范围内被主要运营商进行 DNS 封锁，所以如果需要配合 GitHub 使用 Git，需要进行代理设置。</p>
<h2> 代理设置</h2>
<p>通常情况下，我们可以通过设置环境变量 <code>HTTP_PROXY</code> 和 <code>HTTPS_PROXY</code> 来进行代理设置。</p>
<p>在 Windows 下，我们可以通过设置环境变量 <code>HTTP_PROXY</code> 和 <code>HTTPS_PROXY</code> 来进行代理设置。</p>
<details class="custom-container details"><summary>Windows 例子</summary>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> <span class="token assign-left variable">HTTP_PROXY</span><span class="token operator">=</span>http://127.0.0.1:1080
<span class="token builtin class-name">set</span> <span class="token assign-left variable">HTTPS_PROXY</span><span class="token operator">=</span>http://127.0.0.1:1080
</code></pre></div></details>`,r:{minutes:1.58,words:473},title:"Git 代理",i:"git"},["/software/git/proxy","/software/git/proxy.md"]],["v-5b44553c","/software/git/recall.html",{y:"a",d:"2020-06-11T07:45:22.000Z",c:["Git"],g:["Git","软件"],e:`<p>在任何一个阶段，您都有可能想要撤消某些操作。这里，我们将会学习几个撤消您所做修改的基本工具。注
意，有些撤消操作是不可逆的。这是在使用 Git 的过程中，会因为操作失误而导致之前的工作丢失的少有的几个
地方之一。</p>
<p>有时候我们提交完了才发现漏掉了几个文件没有添加，或者提交信息写错了。此时，可以运行带有 <code>--amend</code> 选
项的提交命令来重新提交:</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">--amend</span>
</code></pre></div>`,r:{minutes:1.59,words:476},title:"撤销操作",i:"return"},["/software/git/recall","/software/git/recall.md"]],["v-6f810d27","/software/git/remote.html",{y:"a",a:"廖雪峰",d:"2020-06-03T17:08:34.000Z",c:["Git"],g:["Git","软件"],e:`<h2> 什么是远程仓库</h2>
<p>Git 是分布式版本控制系统，同一个 Git 仓库，可以分布到不同的机器上。怎么分布呢? 最早，肯定只有一台机器有一个原始版本库，此后，别的机器可以“克隆”这个原始版本库，而且每台机器的版本库其实都是一样的，并没有主次之分。</p>
<p>实际情况往往是这样，找一台电脑充当服务器的角色，每天 24 小时开机，其他每个人都从这个“服务器”仓库克隆一份到自己的电脑上，并且各自把各自的提交推送到服务器仓库里，也从服务器仓库中拉取别人的提交。</p>
<p>完全可以自己搭建一台运行 Git 的服务器，不过现阶段，为了学 Git 先搭个服务器绝对是小题大作。好在这个世界上有个叫 GitHub 的神奇的网站，从名字就可以看出，这个网站就是提供 Git 仓库托管服务的，所以，只要注册一个 GitHub 账号，就可以免费获得 Git 远程仓库。</p>`,r:{minutes:10.81,words:3244},title:"远程仓库",i:"remote"},["/software/git/remote","/software/git/remote.md"]],["v-6f792996","/software/git/reset.html",{y:"a",a:"廖雪峰",d:"2020-06-04T17:22:49.000Z",c:["Git"],g:["Git","软件"],e:`<p>修改 readme.txt 文件如下:</p>
<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>Git is a distributed version control system.
Git is free software distributed under the GPL.
</code></pre></div><p>然后尝试提交:</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> readme.txt
<span class="token comment"># nothing displayed</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"append GPL"</span>
<span class="token punctuation">[</span>master 1094adb<span class="token punctuation">]</span> append GPL
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
</code></pre></div>`,r:{minutes:4.97,words:1491},title:"版本回退",i:"return"},["/software/git/reset","/software/git/reset.md"]],["v-84d4a76c","/software/git/server.html",{y:"a",d:"2020-06-04T17:22:49.000Z",c:["Git"],g:["Git","软件"],e:`<p>在远程仓库一节中，我们讲了远程仓库实际上和本地仓库没啥不同，纯粹为了 7x24 小时开机并交换大家的修改。</p>
<p>GitHub 就是一个免费托管代码的远程仓库。但是对于某些视源代码如生命的商业公司来说，不想将源代码提交给任何第三方，这种情况下，就需要搭建 Git 服务器。</p>
`,r:{minutes:2.96,words:888},title:"服务器搭建",i:"network"},["/software/git/server","/software/git/server.md"]],["v-94a3be0a","/software/git/status.html",{y:"a",a:"廖雪峰",d:"2020-06-04T17:22:49.000Z",c:["Git"],g:["Git","软件"],e:`<p>我们已经成功地添加并提交了一个 readme.txt 文件，继续修改 readme.txt 文件，改成如下内容:</p>
<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>Git is a distributed version control system.
Git is free software.
</code></pre></div><p>现在，运行 <code>git status</code> 命令看看结果:</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">"git add &lt;file&gt;..."</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">"git checkout -- &lt;file&gt;..."</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>

    modified:   readme.txt

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">"git add"</span> and/or <span class="token string">"git commit -a"</span><span class="token punctuation">)</span>
</code></pre></div>`,r:{minutes:2.69,words:806},title:"纵向查看",i:"list"},["/software/git/status","/software/git/status.md"]],["v-ae5d0daa","/software/git/tag.html",{y:"a",a:"廖雪峰",d:"2020-06-03T17:08:34.000Z",c:["Git"],g:["Git","软件"],e:`<h2> 为什么要有 tag</h2>
<p>发布一个版本时，我们通常先在版本库中打一个标签 (<code>tag</code>)，这样，就唯一确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照。</p>
<p>Git 的标签虽然是版本库的快照，但其实它就是指向某个 <code>commit</code> 的指针(跟分支很像对不对? 但是分支可以移动，标签不能移动)，所以，创建和删除标签都是瞬间完成的。</p>
<p>Git 有 <code>commit</code>，为什么还要引入 <code>tag</code>?</p>`,r:{minutes:4.03,words:1209},title:"标签管理",i:"tag"},["/software/git/tag","/software/git/tag.md"]],["v-33492354","/software/git/working-directory.html",{y:"a",a:"廖雪峰",d:"2020-06-04T17:22:49.000Z",c:["Git"],g:["Git","软件"],e:`<p>Git 和其他版本控制系统如 SVN 的一个不同之处就是有暂存区的概念。</p>
`,r:{minutes:2.22,words:667},title:"工作区和暂存区",i:"workingDirectory"},["/software/git/working-directory","/software/git/working-directory.md"]],["v-a0440418","/software/git/working.html",{y:"a",d:"2020-06-04T17:22:49.000Z",c:["Git"],g:["Git","软件"],e:`<p>Git 究竟是怎样的一个系统呢? 尽管 Git 用起来与其它的版本控制系统非常相似，但它在对信息的存储和认知方式上却有很大差异。</p>
<h2> 直接记录快照，而非差异比较</h2>
<p>Git 和其它版本控制系统(包括 Subversion 和近似工具)的主要差别在于 Git 对待数据的方法。从概念上来说，其它大部分系统以文件变更列表的方式存储信息，这类系统(CVS、Subversion、Perforce、Bazaar 等等)将它们存储的信息看作是一组基本文件和每个文件随时间逐步累积的差异 (它们通常称作 基于差异(delta-based) 的版本控制)。</p>
<p></p>
`,r:{minutes:4.9,words:1469},title:"Git 原理",i:"creative"},["/software/git/working","/software/git/working.md"]],["v-2d8cd5c8","/software/mysql/",{y:"a",a:"李欣桐",d:"2022-02-12T05:50:30.000Z",e:`<h2> 目录</h2>
<ul>
<li><a href="/software/mysql/intro.html" target="blank">介绍</a></li>
<li><a href="/software/mysql/compare.html" target="blank">5.7 版本与 8 的比较</a></li>
</ul>
`,r:{minutes:.07,words:22},title:"MySQL",i:"mysql"},["/software/mysql/index.html","/software/mysql/README.md"]],["v-38d41630","/software/mysql/compare.html",{y:"a",a:"李欣桐",d:"2021-02-18T10:52:22.000Z",e:`<h2> MySql 5.7 和 MySql 8 的区别</h2>
<ol>
<li>
<p>NoSql 存储</p>
<p>Mysql 从 5.7 版本提供了 NoSQL 的存储功能,在 8.0 中这部分得到一些修改。</p>
<ul>
<li>
<p>关系型数据库 (SQL)
通过外键关联来建立表与表之间的关系</p>
</li>
<li>
<p>非关系型数据库 (NOSQL)
通常指数据以对象的形式存储在数据库中，而对象之间的关系通过每个对象自身的属性来决定</p>
</li>
</ul>
</li>
<li>
<p>隐藏索引</p>
<p>隐藏索引的特性对于性能调试非常有用,在 8.0 中,索引可以被隐藏和显示,当一个索引隐藏时,他不会被查询优化器所使用</p>
<p>也就是说可以隐藏一个索引,然后观察对数据库的影响.如果性能下降,就说明这个索引是有效的,于是将其”恢复显示”即可;如果数据库性能看不出变化,说明这个索引是多于的,可以删掉了</p>
</li>
<li>
<p>设置持久化</p>
<p>MySQL 的设置可以在运行时通过 <code>SET GLOBAL</code> 命令来更改，但是这种更改只会临时生效，到下次启动时数据库又会从配置文件中读取。</p>
<p>MySQL 8.0 新增了 <code>SET PERSIST</code> 命令，
例如: <code>SET PERSIST max_connections = 500;</code>
MySQL 会将该命令的配置保存到数据目录下的 <code>mysqld-auto.cnf</code> 文件中，下次启动时会读取该文件，用其中的配置来覆盖缺省的配置文件。</p>
</li>
<li>
<p>UTF-8 编码</p>
<p>从 MySQL 8.0 开始，数据库的缺省编码将改为 utf8mb4，这个编码包含了所有 emoji 字符。
多少年来我们使用 MySQL 都要在编码方面小心翼翼，生怕忘了将缺省的 latin 改掉而出现乱码问题。从此以后就不用担心了。</p>
</li>
<li>
<p>通用表表达式 (Common Table Expressions)</p>
<p>看上去层次和区域都更加分明，改起来也更清晰的知道要改哪一部分。</p>
</li>
<li>
<p>窗口函数 (Window Functions)</p>
<p>从 8.0 开始，MySQL 新增了一个叫窗口函数的概念，它可以用来实现若干新的查询方式。</p>
<p>窗口函数有点像是 <code>SUM()</code>、<code>COUNT()</code> 那样的集合函数，但它并不会将多行查询结果合并为一行，而是将结果放回多行当中。也就是说，窗口函数是不需要 <code>GROUP BY</code> 的。</p>
</li>
<li>
<p>新的系统字典表</p>
<p>整合了存储有关数据库对象信息的事务数据字典，所有的元数据都用 <code>InnoDB</code> 引擎进行存储</p>
</li>
<li>
<p>安全和用户管理</p>
<p>新增 <code>caching_sha2_password</code> 认证插件，并且是默认的身份认证插件。性能和安全方面加强</p>
<p>权限支持 role</p>
<p>新增密码历史记录功能，限制重复使用以前的密码</p>
</li>
<li>
<p>innodb 增强</p>
<p>新增 <code>INFORMATION_SCHEMA.INNODB_CACHED_INDEXES</code>，查看每个索引缓存在 <code>InnoDB</code> 缓冲池中的索引页数</p>
<p>新增 <code>INFORMATION_SCHEMA.INNODB_TABLESPACES_BRIEF</code> 视图</p>
<p>新增了动态配置项 <code>innodb_deadlock_detect</code>，用来禁用死锁检查，因为在高并发系统中，当大量线程等待同一个锁时，死锁检查会大大拖慢数据库</p>
<p>支持使用 <code>innodb_directories</code> 选项在服务器脱机时将表空间文件移动或恢复到新位置</p>
<p>新增 <code>innodb_dedicated_server</code>，让 <code>InnoDB</code> 根据服务器上检测到的内存量自动配置 <code>innodb_buffer_pool_size</code>, <code>innodb_log_file_size，innodb_flush_method</code>。</p>
<p><code>innodb_dedicated_server</code>: 自动配置缓冲池大小</p>
</li>
<li>
<p>直方图</p>
<p>MySQL 8.0 版本开始支持期待已久直方图。优化器会利用 <code>column_statistics</code> 的数据，判断字段的值的分布，得到更准确的执行计划。</p>
<p>可以使用 <code>ANALYZE TABLE table_name [UPDATE HISTOGRAM on col_name with N BUCKETS |DROP HISTOGRAM ON clo_name]</code> 来收集或者删除直方图信息</p>
<p>支持会话级别 <code>SET_VAR</code> 动态调整部分参数，有利于提升语句性能。</p>
</li>
<li>
<p>InnoDB 性能提升</p>
<p>废除 <code>buffer pool mutex</code>, 将原来一个 <code>mutex</code> 拆分成多个，提高并发拆分 <code>LOCK_thd_list</code> 和 <code>LOCK_thd_remove</code> 这两个 <code>mutex</code>，大约可提高线程链接效率 5%。</p>
<ol>
<li>
<p>行缓存</p>
<p>MySQL 8.0 的优化器可以估算将要读取的行数，因此可以提供给存储引擎一个合适大小的 <code>row buffer</code> 来存储需要的数据。大批量的连续数据扫描的性能将受益于更大的 <code>record buffer</code>。</p>
</li>
<li>
<p>改进扫描性能</p>
<p>改进 <code>InnoDB</code> 范围查询的性能，可提升全表查询和范围查询 5-20%的性能。</p>
</li>
<li>
<p>成本模型</p>
<p><code>InnoDB</code> 缓冲区可以估算缓存区中的有多少表和索引，这可以让优化器选择访问方式时知道数据是否可以存储在内存中还是必须存储到磁盘上。</p>
</li>
</ol>
</li>
</ol>`,r:{minutes:5.07,words:1522},title:"5.7 与 8",i:"compare"},["/software/mysql/compare","/software/mysql/compare.md"]],["v-233fe009","/software/mysql/intro.html",{y:"a",a:"李欣桐",d:"2021-02-18T10:52:22.000Z",e:`<p>MySQL 是一个关系型数据库管理系统，由瑞典 MySQL AB 公司开发，属于 Oracle 旗下产品。</p>
<p>它是最流行的关系型数据库管理系统之一，是最好的 RDBMS 关系数据库管理系统应用软件之一</p>
<p>MySQL 使用 SQL 语言，分为社区版和商业版，由于其体积小、速度快、总体拥有成本低，尤其是开放源码这一特点，一般中小型网站都选择 MySQL 作为网站数据库。</p>
<h2> 安装</h2>
<p>下载地址: <a href="https://dev.mysql.com/downloads/" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/downloads/</a></p>`,r:{minutes:8.85,words:2656},title:"简介",i:"info"},["/software/mysql/intro","/software/mysql/intro.md"]],["v-5350bb30","/software/tool/",{y:"a",d:"2022-02-06T16:01:38.000Z",e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/software/tool/power-toys.html" target="blank">PowerToys</a>: Windows 实用工具合集</p>
</li>
<li>
<p><a href="https://github.com/huiyadanli/PasteEx" target="_blank" rel="noopener noreferrer">PasteEx</a>: Paste As File 把剪贴板的内容直接粘贴为文件</p>
</li>
<li>
<p><a href="https://www.typora.io/" target="_blank" rel="noopener noreferrer">typora</a>: 一个页面很漂亮的 Markdown 编辑器</p>
</li>
<li>
<p><a href="https://potplayer.daum.net/?lang=zh_CN" target="_blank" rel="noopener noreferrer">Potplayer</a>: 心目中最 NB 的视频播放器，没有之一</p>
</li>
<li>
<p><a href="/software/tool/terminal/" target="blank">Terminal</a>: Windows 终端</p>
</li>
<li>
<p><a href="/software/tool/powershell.html" target="blank">PowerShell</a>: Windows 的命令行外壳程序和脚本环境</p>
</li>
</ul>`,r:{minutes:.33,words:98},title:"工具软件",i:"tool"},["/software/tool/index.html","/software/tool/README.md"]],["v-29c73cf4","/software/tool/power-toys.html",{y:"a",d:"2020-11-30T07:36:04.000Z",e:`<h2> 安装</h2>
<p>您可以 <a href="https://github.com/microsoft/PowerToys/releases" target="_blank" rel="noopener noreferrer">直接下载 exe</a> 进行安装。</p>
<div class="custom-container info">
<p class="custom-container-title">系统要求</p>
<p>Win10 版本 &gt; 1803，已安装 .NET Core 3.1 Desktop Runtime</p>
</div>
<p>或者使用 WinGet:</p>`,r:{minutes:5.36,words:1607},title:"PowerToys",i:"tool"},["/software/tool/power-toys","/software/tool/power-toys.md"]],["v-38384806","/software/tool/powershell.html",{y:"a",a:"沈启民",d:"2021-01-27T10:46:41.000Z",e:`<p>Powershell (Windows Powershell)是 Microsoft 为 Windows 设计的新的命令行程序，这个 Windows 内置的命令行 shell 包括交互式提示和脚本环境，它们可以独立使用也可以交互使用。</p>
`,r:{minutes:1.72,words:517},title:"Windows PowerShell",i:"shell"},["/software/tool/powershell","/software/tool/powershell.md"]],["v-0ef197d6","/software/vscode/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["VS Code"],g:["VS Code","软件"],e:`<p>Visual Studio Code 是一个轻量级但功能强大的源代码编辑器，可在您的桌面上运行，并且可用于 Windows，macOS 和 Linux。它具有对 JavaScript，TypeScript 和 Node.js 的内置支持，并具有丰富的其他语言 (例如 C ++，C＃，Java，Python，PHP，Go) 和运行时 (例如 .NET 和 Unity) 扩展的生态系统。由微软出品，因其开源，可扩展和众多插件成为全球最受欢迎的代码编辑器。</p>
<h2> 特点</h2>
<ul>
<li>
<p>智能代码补全</p>
<p>使用 IntelliSense 可以更智能地编写代码、变量，方法和导入模块的完成。</p>
</li>
<li>
<p>热门扩展</p>
<p>启用其他语言，主题，调试器，命令等。</p>
</li>
</ul>`,r:{minutes:1.03,words:309},title:"VS Code",i:"vscode"},["/software/vscode/index.html","/software/vscode/README.md"]],["v-1ed71d50","/software/vscode/extension.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["VS Code"],g:["VS Code","软件"],e:`<p>以下是推荐的 VS Code 扩展:</p>
<h3> 语言包</h3>
<h4> Chinese (Simplified) Language Pack for Visual Studio Code</h4>
<p>VS Code 原生为英文，本插件为 VS Code 提供简体中文支持，会更改页面为简体中文。</p>
<h3> 外观</h3>
<h4> indent-rainbow</h4>
<p>为代码中的缩进上色，更容易判断缩进层数。</p>
<h4> Material Icon Theme</h4>
<p>为 VS Code 文件图标应用安卓的 Material 主题。</p>
<h4> One Dark Pro</h4>`,r:{minutes:2.56,words:767},title:"推荐扩展",i:"plugin"},["/software/vscode/extension","/software/vscode/extension.md"]],["v-48a305e5","/software/vscode/get-started.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["VS Code"],g:["VS Code","软件"],e:`<h2> VS Code 界面</h2>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>在完成 VS Code 安装并首次打开 VS Code 的时候，右下角会提示安装简体中文扩展，请点击安装。</p>
<p>如果忘记点击或没有弹窗，请到侧边栏扩展搜索找到 "Chinese (Simplified) Language Pack for Visual Studio Code" 扩展进行安装，即可将 VS Code 改为中文页面。</p>
</div>
<p></p>
<p>VS Code 最上方有一排菜单栏，其中有大量的快捷操作，对应的组合键会标于快捷操作旁。如果不能记忆快捷键可以到最上方的菜单栏处查看。</p>`,r:{minutes:2.91,words:873},title:"快速上手",i:"creative"},["/software/vscode/get-started","/software/vscode/get-started.md"]],["v-4e67eaf4","/software/vscode/install.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["VS Code"],g:["安装","VS Code","软件"],e:`<h1> VS Code 安装</h1>
<h2> 下载</h2>
<p>在 <a href="https://code.visualstudio.com/Download" target="_blank" rel="noopener noreferrer">官网下载地址</a> 下载最新版安装包(Window User 64bit, 那个大的蓝色按钮就是)。</p>
<h2> 安装</h2>
<ul>
<li>
<p>双击安装包打开</p>
</li>
<li>
<p>同意用户协议。</p>
</li>
<li>
<p>安装选项中，请务必 <strong>全选</strong> 以下选项:</p>
<p></p>
<p>勾选 <strong>添加到目录上下文菜单</strong>、<strong>添加到文件上下文菜单</strong>、<strong>将 code 注册为受支持的文件编辑器</strong>、<strong>添加到 path</strong>。</p>
</li>
<li>
<p>在 VS Code 初次启动后，若未提前安装 Git 可能会提示未找到 Git 软件，忽略即可</p>
</li>
<li>
<p>推荐立即执行简体中文扩展安装以保证界面语言为简体中文。</p>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>当您安装 VS Code 并第一次打开的时候，VS Code 会自动检测当前系统语言并在右下角推荐您安装对应语言的扩展，点击按钮即可自动安装。</p>
</div>
</li>
</ul>`,r:{minutes:2.11,words:632},title:"VS Code 安装",i:"install"},["/software/vscode/install","/software/vscode/install.md"]],["v-09701300","/software/vscode/settings.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["VS Code"],g:["VS Code","软件"],e:`<p>这是 Mr.Hope 个人使用的 VS Code 设置，部分设置是<a href="/software/vscode/extension.html" target="blank">这里</a>的插件配置</p>
<p>将下面内容拷贝至 setting.json 以更改 VS Code 设置</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// 编辑器配置</span>
  <span class="token property">"editor.accessibilitySupport"</span><span class="token operator">:</span> <span class="token string">"off"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.bracketPairColorization.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.bracketPairColorization.independentColorPoolPerBracketType"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.cursorSmoothCaretAnimation"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.detectIndentation"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"editor.fontFamily"</span><span class="token operator">:</span> <span class="token string">"'Fira Code', Consolas, 'Courier New', monospace"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.fontLigatures"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.formatOnPaste"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.formatOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.guides.bracketPairs"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.inlineSuggest.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"explorer.incrementalNaming"</span><span class="token operator">:</span> <span class="token string">"smart"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.mouseWheelZoom"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.rulers"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"editor.quickSuggestions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"comments"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"strings"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"other"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"editor.renderControlCharacters"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.renderWhitespace"</span><span class="token operator">:</span> <span class="token string">"boundary"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.smoothScrolling"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.stickyScroll.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.suggestSelection"</span><span class="token operator">:</span> <span class="token string">"first"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.tabSize"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">"editor.wordWrap"</span><span class="token operator">:</span> <span class="token string">"on"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.experimental.pasteActions.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// emmet 包含 wxml 视为 html</span>
  <span class="token property">"emmet.includeLanguages"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"wxml"</span><span class="token operator">:</span> <span class="token string">"html"</span><span class="token punctuation">,</span>
    <span class="token property">"axml"</span><span class="token operator">:</span> <span class="token string">"xml"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"emmet.variables"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"lang"</span><span class="token operator">:</span> <span class="token string">"zh-CN"</span><span class="token punctuation">,</span>
    <span class="token property">"charset"</span><span class="token operator">:</span> <span class="token string">"UTF-8"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 文件相关</span>
  <span class="token property">"explorer.confirmDelete"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"explorer.confirmDragAndDrop"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"explorer.fileNesting.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"files.associations"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"*.cjson"</span><span class="token operator">:</span> <span class="token string">"jsonc"</span><span class="token punctuation">,</span>
    <span class="token property">"*.wxss"</span><span class="token operator">:</span> <span class="token string">"css"</span><span class="token punctuation">,</span>
    <span class="token property">"*.wxs"</span><span class="token operator">:</span> <span class="token string">"javascript"</span><span class="token punctuation">,</span>
    <span class="token property">"*.wxml"</span><span class="token operator">:</span> <span class="token string">"wxml"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"files.autoSave"</span><span class="token operator">:</span> <span class="token string">"off"</span><span class="token punctuation">,</span>
  <span class="token property">"files.eol"</span><span class="token operator">:</span> <span class="token string">"\\n"</span><span class="token punctuation">,</span>
  <span class="token property">"files.exclude"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"**/.classpath"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.project"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.settings"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.factorypath"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"files.maxMemoryForLargeFilesMB"</span><span class="token operator">:</span> <span class="token number">4096</span><span class="token punctuation">,</span>
  <span class="token comment">// 编辑器窗口设置</span>
  <span class="token property">"window.closeWhenEmpty"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"window.commandCenter"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"window.dialogStyle"</span><span class="token operator">:</span> <span class="token string">"custom"</span><span class="token punctuation">,</span>
  <span class="token property">"window.newWindowDimensions"</span><span class="token operator">:</span> <span class="token string">"inherit"</span><span class="token punctuation">,</span>
  <span class="token property">"breadcrumbs.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 工作台设置</span>
  <span class="token property">"workbench.activityBar.visible"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"workbench.colorTheme"</span><span class="token operator">:</span> <span class="token string">"One Dark Pro"</span><span class="token punctuation">,</span>
  <span class="token property">"workbench.commandPalette.preserveInput"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"workbench.editor.scrollToSwitchTabs"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"workbench.iconTheme"</span><span class="token operator">:</span> <span class="token string">"material-icon-theme"</span><span class="token punctuation">,</span>
  <span class="token property">"workbench.startupEditor"</span><span class="token operator">:</span> <span class="token string">"none"</span><span class="token punctuation">,</span>
  <span class="token property">"security.workspace.trust.untrustedFiles"</span><span class="token operator">:</span> <span class="token string">"open"</span><span class="token punctuation">,</span>

  <span class="token property">"material-icon-theme.folders.associations"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"global-components"</span><span class="token operator">:</span> <span class="token string">"Global"</span><span class="token punctuation">,</span>
    <span class="token property">"node"</span><span class="token operator">:</span> <span class="token string">"Node"</span><span class="token punctuation">,</span>
    <span class="token property">"about"</span><span class="token operator">:</span> <span class="token string">"Command"</span><span class="token punctuation">,</span>
    <span class="token property">"intro"</span><span class="token operator">:</span> <span class="token string">"Command"</span><span class="token punctuation">,</span>
    <span class="token property">"file"</span><span class="token operator">:</span> <span class="token string">"Public"</span><span class="token punctuation">,</span>
    <span class="token property">"github"</span><span class="token operator">:</span> <span class="token string">"GitHub"</span><span class="token punctuation">,</span>
    <span class="token property">"composables"</span><span class="token operator">:</span> <span class="token string">"Include"</span><span class="token punctuation">,</span>
    <span class="token property">"service-worker"</span><span class="token operator">:</span> <span class="token string">"config"</span><span class="token punctuation">,</span>
    <span class="token property">"store"</span><span class="token operator">:</span> <span class="token string">"Vuex-store"</span><span class="token punctuation">,</span>
    <span class="token property">"demo"</span><span class="token operator">:</span> <span class="token string">"Examples"</span><span class="token punctuation">,</span>
    <span class="token property">"basic"</span><span class="token operator">:</span> <span class="token string">"Helper"</span><span class="token punctuation">,</span>
    <span class="token property">"vuex"</span><span class="token operator">:</span> <span class="token string">"Vuex-store"</span><span class="token punctuation">,</span>
    <span class="token property">"module"</span><span class="token operator">:</span> <span class="token string">"plugin"</span><span class="token punctuation">,</span>
    <span class="token property">"router"</span><span class="token operator">:</span> <span class="token string">"Routes"</span><span class="token punctuation">,</span>
    <span class="token property">".vuepress"</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
    <span class="token property">"vuepress"</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
    <span class="token property">"node-js"</span><span class="token operator">:</span> <span class="token string">"Node"</span><span class="token punctuation">,</span>
    <span class="token property">"react"</span><span class="token operator">:</span> <span class="token string">"React-components"</span><span class="token punctuation">,</span>
    <span class="token property">"workflows"</span><span class="token operator">:</span> <span class="token string">"Ci"</span><span class="token punctuation">,</span>
    <span class="token property">"guide"</span><span class="token operator">:</span> <span class="token string">"content"</span><span class="token punctuation">,</span>
    <span class="token property">"git"</span><span class="token operator">:</span> <span class="token string">"Git"</span><span class="token punctuation">,</span>
    <span class="token property">"mysql"</span><span class="token operator">:</span> <span class="token string">"DataBase"</span><span class="token punctuation">,</span>
    <span class="token property">"software"</span><span class="token operator">:</span> <span class="token string">"App"</span><span class="token punctuation">,</span>
    <span class="token property">"tool"</span><span class="token operator">:</span> <span class="token string">"Tools"</span><span class="token punctuation">,</span>
    <span class="token property">"vscode"</span><span class="token operator">:</span> <span class="token string">"VSCode"</span><span class="token punctuation">,</span>
    <span class="token property">"en"</span><span class="token operator">:</span> <span class="token string">"I18n"</span><span class="token punctuation">,</span>
    <span class="token property">"zh"</span><span class="token operator">:</span> <span class="token string">"I18n"</span><span class="token punctuation">,</span>
    <span class="token property">"types"</span><span class="token operator">:</span> <span class="token string">"typescript"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 提示设置</span>
  <span class="token property">"vsintellicode.modify.editor.suggestSelection"</span><span class="token operator">:</span> <span class="token string">"automaticallyOverrodeDefaultValue"</span><span class="token punctuation">,</span>
  <span class="token property">"problems.showCurrentInStatus"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 在线服务设置</span>
  <span class="token property">"telemetry.telemetryLevel"</span><span class="token operator">:</span> <span class="token string">"error"</span><span class="token punctuation">,</span>
  <span class="token comment">// 终端设置</span>
  <span class="token property">"terminal.external.linuxExec"</span><span class="token operator">:</span> <span class="token string">"bash"</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.confirmOnExit"</span><span class="token operator">:</span> <span class="token string">"hasChildProcesses"</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.copyOnSelection"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.enableBell"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.defaultProfile.windows"</span><span class="token operator">:</span> <span class="token string">"PowerShell"</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.defaultProfile.linux"</span><span class="token operator">:</span> <span class="token string">"bash"</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.env.linux"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"NODE_OPTIONS"</span><span class="token operator">:</span> <span class="token string">"--max_old_space_size=4096"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.env.windows"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"NODE_OPTIONS"</span><span class="token operator">:</span> <span class="token string">"--max_old_space_size=4096"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.profiles.windows"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"PowerShell"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"PowerShell"</span><span class="token punctuation">,</span>
      <span class="token property">"overrideName"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"icon"</span><span class="token operator">:</span> <span class="token string">"terminal-powershell"</span><span class="token punctuation">,</span>
      <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"-NoLogo"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.shellIntegration.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.smoothScrolling"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.tabs.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// git</span>
  <span class="token property">"diffEditor.ignoreTrimWhitespace"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"diffEditor.renderSideBySide"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"git.autofetch"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"git.confirmSync"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"git.enableSmartCommit"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"git.mergeEditor"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"merge-conflict.autoNavigateNextConflict.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// npm 设置</span>
  <span class="token property">"npm.enableRunFromFolder"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"npm.packageManager"</span><span class="token operator">:</span> <span class="token string">"pnpm"</span><span class="token punctuation">,</span>
  <span class="token property">"npm.scriptExplorerAction"</span><span class="token operator">:</span> <span class="token string">"run"</span><span class="token punctuation">,</span>
  <span class="token property">"npm-intellisense.importQuotes"</span><span class="token operator">:</span> <span class="token string">"\\""</span><span class="token punctuation">,</span>
  <span class="token property">"npm-intellisense.packageSubfoldersIntellisense"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"npm-intellisense.scanDevDependencies"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"npm-intellisense.showBuildInLibs"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// 特定格式文件设置</span>
  <span class="token property">"[cpp]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"ms-vscode.cpptools"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[css]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[dart]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.formatOnType"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"editor.selectionHighlight"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"editor.suggest.snippetsPreventQuickSuggestions"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"editor.suggestSelection"</span><span class="token operator">:</span> <span class="token string">"recentlyUsed"</span><span class="token punctuation">,</span>
    <span class="token property">"editor.tabCompletion"</span><span class="token operator">:</span> <span class="token string">"on"</span><span class="token punctuation">,</span>
    <span class="token property">"editor.wordBasedSuggestions"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[html]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[latex]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"James-Yu.latex-workshop"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[javascript]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[json]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[jsonc]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[matlab]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"files.encoding"</span><span class="token operator">:</span> <span class="token string">"gb2312"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[markdown]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[svelte]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"svelte.svelte-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[scss]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[typescript]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[typescriptreact]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[vue]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[xml]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"DotJoshJohnson.xml"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[yaml]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// typescript 配置</span>
  <span class="token property">"javascript.format.semicolons"</span><span class="token operator">:</span> <span class="token string">"insert"</span><span class="token punctuation">,</span>
  <span class="token property">"javascript.referencesCodeLens.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"javascript.suggest.completeFunctionCalls"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"javascript.preferences.quoteStyle"</span><span class="token operator">:</span> <span class="token string">"double"</span><span class="token punctuation">,</span>
  <span class="token property">"javascript.updateImportsOnFileMove.enabled"</span><span class="token operator">:</span> <span class="token string">"always"</span><span class="token punctuation">,</span>
  <span class="token property">"typescript.locale"</span><span class="token operator">:</span> <span class="token string">"zh-CN"</span><span class="token punctuation">,</span>
  <span class="token property">"typescript.enablePromptUseWorkspaceTsdk"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"typescript.format.semicolons"</span><span class="token operator">:</span> <span class="token string">"insert"</span><span class="token punctuation">,</span>
  <span class="token property">"typescript.preferences.quoteStyle"</span><span class="token operator">:</span> <span class="token string">"double"</span><span class="token punctuation">,</span>
  <span class="token property">"typescript.referencesCodeLens.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"typescript.suggest.completeFunctionCalls"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"typescript.updateImportsOnFileMove.enabled"</span><span class="token operator">:</span> <span class="token string">"always"</span><span class="token punctuation">,</span>

  <span class="token comment">// php 设置</span>
  <span class="token property">"php.validate.enable"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"php.validate.run"</span><span class="token operator">:</span> <span class="token string">"onType"</span><span class="token punctuation">,</span>

  <span class="token comment">// c++ 设置</span>
  <span class="token property">"C_Cpp.default.cppStandard"</span><span class="token operator">:</span> <span class="token string">"c++23"</span><span class="token punctuation">,</span>
  <span class="token comment">// 需要根据自己情况设置</span>
  <span class="token property">"C_Cpp.default.includePath"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// "C:/Program Files/mingw-w64/lib/gcc/x86_64-w64-mingw32/8.1.0/include",</span>
    <span class="token comment">// "C:/Program Files/mingw-w64/lib/gcc/x86_64-w64-mingw32/8.1.0/include-fixed",</span>
    <span class="token comment">// "C:/Program Files/mingw-w64/x86_64-w64-mingw32/include"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"C_Cpp.clang_format_fallbackStyle"</span><span class="token operator">:</span> <span class="token string">"Google"</span><span class="token punctuation">,</span>

  <span class="token comment">// dart</span>
  <span class="token property">"dart.debugSdkLibraries"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"dart.openDevTools"</span><span class="token operator">:</span> <span class="token string">"flutter"</span><span class="token punctuation">,</span>
  <span class="token property">"java.jdt.ls.java.home"</span><span class="token operator">:</span> <span class="token string">"c:\\\\Program Files\\\\Java\\\\jdk-18.0.1"</span><span class="token punctuation">,</span>
  <span class="token property">"python.languageServer"</span><span class="token operator">:</span> <span class="token string">"Pylance"</span><span class="token punctuation">,</span>

  <span class="token comment">// css颜色提示配置</span>
  <span class="token property">"colorInfo.fields"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"hex"</span><span class="token punctuation">,</span> <span class="token string">"rgb"</span><span class="token punctuation">,</span> <span class="token string">"alpha"</span><span class="token punctuation">,</span> <span class="token string">"css-color-name"</span><span class="token punctuation">,</span> <span class="token string">"preview"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"colorInfo.languages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"selector"</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span>
      <span class="token property">"colors"</span><span class="token operator">:</span> <span class="token string">"css"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"selector"</span><span class="token operator">:</span> <span class="token string">"css"</span><span class="token punctuation">,</span>
      <span class="token property">"colors"</span><span class="token operator">:</span> <span class="token string">"css"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"selector"</span><span class="token operator">:</span> <span class="token string">"sass"</span><span class="token punctuation">,</span>
      <span class="token property">"colors"</span><span class="token operator">:</span> <span class="token string">"css"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"selector"</span><span class="token operator">:</span> <span class="token string">"scss"</span><span class="token punctuation">,</span>
      <span class="token property">"colors"</span><span class="token operator">:</span> <span class="token string">"css"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"selector"</span><span class="token operator">:</span> <span class="token string">"less"</span><span class="token punctuation">,</span>
      <span class="token property">"colors"</span><span class="token operator">:</span> <span class="token string">"css"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// eslint</span>
  <span class="token property">"eslint.packageManager"</span><span class="token operator">:</span> <span class="token string">"pnpm"</span><span class="token punctuation">,</span>
  <span class="token property">"eslint.validate"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"javascript"</span><span class="token punctuation">,</span>
    <span class="token string">"javascriptreact"</span><span class="token punctuation">,</span>
    <span class="token string">"vue"</span><span class="token punctuation">,</span>
    <span class="token string">"typescript"</span><span class="token punctuation">,</span>
    <span class="token string">"typescriptreact"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// Git Lens 设置</span>
  <span class="token property">"gitlens.defaultDateFormat"</span><span class="token operator">:</span> <span class="token string">"YYYY-MM-DD HH:mm"</span><span class="token punctuation">,</span>
  <span class="token property">"gitlens.defaultDateShortFormat"</span><span class="token operator">:</span> <span class="token string">"YYYY-MM-DD"</span><span class="token punctuation">,</span>
  <span class="token property">"gitlens.defaultTimeFormat"</span><span class="token operator">:</span> <span class="token string">"HH:mm"</span><span class="token punctuation">,</span>
  <span class="token property">"gitlens.gitCommands.closeOnFocusOut"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"gitlens.views.repositories.branches.layout"</span><span class="token operator">:</span> <span class="token string">"list"</span><span class="token punctuation">,</span>
  <span class="token property">"gitlens.advanced.messages"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"suppressCommitNotFoundWarning"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"suppressRebaseSwitchToTextWarning"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// markdown 设置</span>
  <span class="token property">"markdown.extension.orderedList.marker"</span><span class="token operator">:</span> <span class="token string">"one"</span><span class="token punctuation">,</span>
  <span class="token property">"markdown.validate.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"markdown.extension.print.imgToBase64"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// markdownlint 设置</span>
  <span class="token property">"markdownlint.config"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"default"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"MD003"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"style"</span><span class="token operator">:</span> <span class="token string">"atx"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"MD004"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"style"</span><span class="token operator">:</span> <span class="token string">"dash"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"MD013"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"MD024"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"allow_different_nesting"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"MD035"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"style"</span><span class="token operator">:</span> <span class="token string">"---"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 根据自己情况设置</span>
  <span class="token property">"markdown-pdf.executablePath"</span><span class="token operator">:</span> <span class="token string">"C:/Users/mister-hope/AppData/Local/Google/Chrome/Application/chrome.exe"</span><span class="token punctuation">,</span>

  <span class="token comment">// XML工具设置</span>
  <span class="token property">"xmlTools.enforcePrettySelfClosingTagOnFormat"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"xmlTools.removeCommentsOnMinify"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 微信小程序</span>
  <span class="token property">"minapp-vscode.disableAutoConfig"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"minapp-vscode.wxmlFormatter"</span><span class="token operator">:</span> <span class="token string">"prettier"</span><span class="token punctuation">,</span>
  <span class="token property">"minapp-vscode.prettier"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"parser"</span><span class="token operator">:</span> <span class="token string">"html"</span><span class="token punctuation">,</span>
    <span class="token property">"printWidth"</span><span class="token operator">:</span> <span class="token number">80</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// liveshare 设置</span>
  <span class="token property">"liveshare.audio.joinCallBehavior"</span><span class="token operator">:</span> <span class="token string">"accept"</span><span class="token punctuation">,</span>
  <span class="token comment">// 项目管理器</span>
  <span class="token property">"projectManager.sortList"</span><span class="token operator">:</span> <span class="token string">"Saved"</span><span class="token punctuation">,</span>
  <span class="token property">"projectManager.ignoreProjectsWithinProjects"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"projectManager.any.ignoredFolders"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"dist"</span><span class="token punctuation">,</span>
    <span class="token string">"node_modules"</span><span class="token punctuation">,</span>
    <span class="token string">"out"</span><span class="token punctuation">,</span>
    <span class="token string">"typings"</span><span class="token punctuation">,</span>
    <span class="token string">"test"</span><span class="token punctuation">,</span>
    <span class="token string">"__tests__"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"projectManager.git.baseFolders"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"C:/Projects/"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// TODO Highlight 配置</span>
  <span class="token property">"todohighlight.keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"WARNING: "</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// stylelint 设置</span>
  <span class="token property">"stylelint.packageManager"</span><span class="token operator">:</span> <span class="token string">"pnpm"</span><span class="token punctuation">,</span>
  <span class="token comment">// Java</span>
  <span class="token property">"redhat.telemetry.enabled"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

  <span class="token comment">// github copilot</span>
  <span class="token property">"github.copilot.enable"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"*"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"yaml"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"plaintext"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"markdown"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.08,words:923},title:"配置 VS Code",i:"config"},["/software/vscode/settings","/software/vscode/settings.md"]],["v-50072a6b","/software/vscode/shortcut-key.html",{y:"a",d:"2020-09-17T00:00:00.000Z",l:"2020年9月17日",c:["VS Code"],g:["VS Code","软件","快捷键"],e:`<p>通过快捷键，Visual Studio Code 可让您直接从键盘执行大多数任务。</p>
<h2> 常用的快捷键</h2>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>以下这些快捷键建议大家熟练掌握，能够很大程度提高开发效率。</p>
</div>
<h3> 鼠标操作</h3>
<ul>
<li>
<p>在当前行的位置，鼠标三击，可以选中当前行。</p>
</li>
<li>
<p>用鼠标单击文件的行号，可以选中当前行。</p>
</li>
<li>
<p>在某个行号的位置，上下移动鼠标，可以选中多行。</p>
</li>
</ul>`,r:{minutes:4.95,words:1484},title:"快捷键",i:"keyboard"},["/software/vscode/shortcut-key","/software/vscode/shortcut-key.md"]],["v-7f9ed65e","/software/vscode/simple.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["VS Code"],g:["VS Code","软件"],e:`<h2> 简介</h2>
<p>这是一款微软的代码编辑器，因其开源，可扩展和众多插件成为全球最受欢迎的代码编辑器。</p>
<h2> VS Code 的安装</h2>
<p>在<a href="https://code.visualstudio.com/Download" target="_blank" rel="noopener noreferrer">官网下载地址</a>下载最新版 Win64User 安装包，双击安装包打开同意用户协议，一直下一步即可。</p>
<p>在 VS Code 初次启动后，若未提前安装 Git 可能会提示未找到 Git 软件，忽略即可；若提示安装简体中文扩展，请点击安装以保证界面语言为简体中文。</p>`,r:{minutes:2.18,words:655},title:"VS Code 的简单介绍",i:"creative"},["/software/vscode/simple","/software/vscode/simple.md"]],["v-0a7d8ba2","/software/vscode/ui.html",{y:"a",d:"2020-09-17T00:00:00.000Z",l:"2020年9月17日",c:["VS Code"],g:["VS Code","软件"],e:`<p>本质上，Visual Studio Code 是代码编辑器。像许多其他代码编辑器一样，VS Code 在左边采用通用的用户界面和资源管理器布局，以显示您有权访问的所有文件和文件夹，而在右边的编辑器则显示您已打开文件的内容。</p>
<h2> 基本布局</h2>
<p>VS Code 具有简单直观的布局，可最大程度地为编辑器提供空间，同时为浏览和访问文件夹或项目的整个上下文留出足够的空间。用户界面分为五个区域:</p>
<ul>
<li><strong>编辑器</strong>: 用于编辑文件的主要区域。您可以在垂直和水平方向上并排打开任意多个编辑器。</li>
<li><strong>侧边栏</strong>: 包含诸如资源管理器之类的不同视图，可在您处理项目时为您提供帮助。</li>
<li><strong>状态栏</strong>: 有关打开的项目和您编辑的文件的信息。</li>
<li><strong>任务栏</strong>: 位于最左侧，可让您在视图之间进行切换，并为您提供特定于上下文的其他指示符，例如启用 Git 时传出更改的数量。</li>
<li><strong>面板</strong>: 您可以在编辑器区域下方显示不同的面板，以获取输出或调试信息，错误和警告或集成终端。面板也可以向右移动以获得更多垂直空间。</li>
</ul>`,r:{minutes:16.56,words:4968},title:"用户界面",i:"layout"},["/software/vscode/ui","/software/vscode/ui.md"]],["v-fe0b1ba4","/code/Android/get-started/",{title:"Android 快速上手",i:"android"},["/code/Android/get-started/index.html","/code/Android/get-started/README.md"]],["v-7e6ee7bc","/code/Android/get-started/activity.html",{y:"a",d:"2022-04-01T00:00:00.000Z",l:"2022年4月1日",c:["Android","快速上手"],g:["快速上手"],e:`<p>在本课中，您将向 MainActivity 添加一些代码，以便在用户点按 Send 按钮时启动一个显示消息的新 activity。</p>
`,r:{minutes:6.2,words:1860},title:"启动另一个 activity",i:"info"},["/code/Android/get-started/activity","/code/Android/get-started/activity.md"]],["v-5c32e26f","/code/Android/get-started/create.html",{y:"a",d:"2022-04-01T00:00:00.000Z",l:"2022年4月1日",c:["Android","快速上手"],g:["快速上手"],e:`<p>本课将介绍如何使用 Android Studio 创建新的 Android 项目，并介绍该项目中的一些文件。</p>
<p>如需创建新的 Android 项目，请按以下步骤操作：</p>
<ol>
<li>
<p>安装最新版 Android Studio。</p>
</li>
<li>
<p>在 Welcome to Android Studio 窗口中，点击 Create New Project。</p>
<p>如果您已打开一个项目，请依次选择 File &gt; New &gt; New Project。</p>
</li>
<li>
<p>在 Select a Project Template 窗口中，选择 Empty Activity，然后点击 Next。</p>
</li>
<li>
<p>在 Configure your project 窗口中，完成以下操作：</p>
<ul>
<li>
<p>在 Name 字段中输入“My First App”。</p>
</li>
<li>
<p>在 Package name 字段中输入“com.example.myfirstapp”。</p>
</li>
<li>
<p>如果您想将项目放在其他文件夹中，请更改其 Save 位置。</p>
</li>
<li>
<p>从 Language 下拉菜单中选择 Java 或 Kotlin。</p>
</li>
<li>
<p>在 Minimum SDK 字段中选择您希望应用支持的最低 Android 版本。</p>
</li>
</ul>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>点击 Help me choose 链接可打开 Android Platform/API Version Distribution 对话框。此对话框会提供有关各 Android 版本在设备间的分布情况的信息。您需要权衡的主要因素是，您想支持的 Android 设备所占的百分比，以及在这些设备所搭载的各个不同版本上维护应用所需的工作量。例如，如果您选择让应用与多个不同 Android 版本兼容，那么维护最旧版本与最新版本之间的兼容性所需的工作量就会增大。</p>
</div>
<ul>
<li>
<p>如果您的应用需要旧版库支持，请选中 Use legacy android.support libraries 复选框。</p>
</li>
<li>
<p>其他选项保持原样。</p>
</li>
</ul>
</li>
<li>
<p>点击 Finish。</p>
</li>
</ol>`,r:{minutes:2.26,words:678},title:"创建项目",i:"info"},["/code/Android/get-started/create","/code/Android/get-started/create.md"]],["v-54c78e24","/code/Android/get-started/interface.html",{y:"a",d:"2022-04-01T00:00:00.000Z",l:"2022年4月1日",c:["Android","快速上手"],g:["快速上手"],e:`<p>在本节课中，您将学习如何使用 Android Studio 布局编辑器创建包含一个文本框和一个按钮的布局。这将为下一课打下基础，下节课将学习如何在点按该按钮时让应用将文本框的内容发送到其他 activity。</p>
`,r:{minutes:6.93,words:2079},title:"构建简单的界面",i:"info"},["/code/Android/get-started/interface","/code/Android/get-started/interface.md"]],["v-1d35e2ca","/code/Android/get-started/intro.html",{y:"a",d:"2022-04-01T00:00:00.000Z",l:"2022年4月1日",c:["Android","快速上手"],g:["快速上手"],e:`<p>本部分介绍如何构建简单的 Android 应用。首先，您将了解如何通过 Android Studio 创建“Hello, World!”项目并运行它。然后，您将为应用创建一个新界面，该界面会接受用户输入，并切换到应用中的一个新屏幕以显示用户输入内容。</p>
<p>开始之前，您需要了解有关 Android 应用的两个基本概念：它们如何提供多个入口点，以及它们如何适应不同的设备。</p>
`,r:{minutes:1.65,words:496},title:"基础知识",i:"info"},["/code/Android/get-started/intro","/code/Android/get-started/intro.md"]],["v-32a1c95c","/code/Android/get-started/run.html",{y:"a",d:"2022-04-01T00:00:00.000Z",l:"2022年4月1日",c:["Android","快速上手"],g:["快速上手"],e:`<h2> 在真实设备上运行</h2>
<p>按照以下步骤设置设备：</p>
<ol>
<li>
<p>使用一根 USB 线将设备连接到开发机器。如果您是在 Windows 上开发的，则可能需要为设备安装合适的 USB 驱动程序。</p>
</li>
<li>
<p>执行以下步骤，在开发者选项窗口中启用 USB 调试：</p>
<ol>
<li>
<p>打开设置应用。</p>
</li>
<li>
<p>如果您的设备使用 Android v8.0 或更高版本，请选择系统。否则，请继续执行下一步。</p>
</li>
<li>
<p>滚动到底部，然后选择关于手机。</p>
</li>
<li>
<p>滚动到底部，然后点按版本号七次。</p>
</li>
<li>
<p>返回上一屏幕，滚动到底部，然后点按开发者选项。</p>
</li>
<li>
<p>在开发者选项窗口中，向下滚动以查找并启用 USB 调试。</p>
</li>
</ol>
</li>
</ol>`,r:{minutes:1.57,words:472},title:"运行应用",i:"info"},["/code/Android/get-started/run","/code/Android/get-started/run.md"]],["v-f6ed1056","/code/github/actions/",{y:"a",d:"2021-02-18T00:00:00.000Z",l:"2021年2月18日",c:["GitHub"],g:["action","workflow"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/code/github/actions/intro.html" target="blank">GitHub Actions 介绍</a></p>
</li>
<li>
<p><a href="/code/github/actions/config.html" target="blank">Workflow 配置</a></p>
</li>
</ul>
<h2> 常用 GitHub Action</h2>
<ul>
<li>
<p><a href="/code/github/actions/checkout.html" target="blank">checkout</a></p>
</li>
<li>
<p><a href="/code/github/actions/cache.html" target="blank">cache</a></p>
</li>
<li>
<p><a href="/code/github/actions/gh-pages-deploy.html" target="blank">GitHub Pages 部署</a></p>
</li>
</ul>`,r:{minutes:.26,words:79},title:"GitHub Actions",i:"actions"},["/code/github/actions/index.html","/code/github/actions/README.md"]],["v-5dad642c","/code/github/actions/cache.html",{y:"a",d:"2021-02-20T00:00:00.000Z",l:"2021年2月20日",c:["GitHub"],g:["action","workflow"],e:`<p>这个 Action 允许您缓存依赖项和构建输出内容以缩短 Workflow 执行时间。</p>
<p>日常最多使用的就是缓存依赖项，在每个工作流程中，将安装后的依赖通过安装后生成的依赖版本文件的哈希值进行缓存。</p>
<p>当前工作流程的版本文件哈希值与历史缓存中的某一项完全相同时，直接载入这些依赖项缓存，这样就可以免去安装步骤。</p>
<div class="custom-container info">
<p class="custom-container-title">缓存依赖</p>
<p>关于缓存依赖的文档，详见 <a href="https://docs.github.com/cn/actions/guides/caching-dependencies-to-speed-up-workflows" target="_blank" rel="noopener noreferrer">缓存依赖项以加快工作流程</a>。</p>
</div>
`,r:{minutes:1.81,words:543},title:"cache"},["/code/github/actions/cache","/code/github/actions/cache.md"]],["v-74f1f99e","/code/github/actions/checkout.html",{y:"a",d:"2021-02-18T00:00:00.000Z",l:"2021年2月18日",c:["GitHub"],g:["action","workflow"],e:`<p>该操作将检出您的存储库 <code>$GITHUB_WORKSPACE</code>，使您的工作流可以访问它。</p>
`,r:{minutes:3.03,words:910},title:"checkout"},["/code/github/actions/checkout","/code/github/actions/checkout.md"]],["v-74d837e2","/code/github/actions/config.html",{y:"a",d:"2021-02-18T00:00:00.000Z",l:"2021年2月18日",c:["GitHub"],g:["action","workflow"],e:`<p>GitHub Actions 的配置文件叫做 <code>workflow</code> 文件，存放在代码仓库的 <code>.github/workflows</code> 目录。</p>
<p><code>workflow</code> 文件采用 <code>YAML</code> 格式，文件名可以任意取，但是后缀名统一为 <code>.yml</code>，比如<code>foo.yml</code>。</p>
<p>一个库可以有多个 <code>workflow</code> 文件。GitHub 只要发现 <code>.github/workflows</code> 目录里面有 <code>.yml</code> 文件，就会自动运行该文件。</p>
`,r:{minutes:2.4,words:721},title:"Action 配置",i:"config"},["/code/github/actions/config","/code/github/actions/config.md"]],["v-4a20b532","/code/github/actions/gh-pages-deploy.html",{y:"a",d:"2021-02-20T00:00:00.000Z",l:"2021年2月20日",c:["GitHub"],g:["action","deploy","workflow"],e:`<p>github-pages-deploy-action 用于自动将网站内容部署到 GitHub Pages。</p>
<p>您可以使用这个 Action 将代码推送到您想要的任何分支中，包括 gh-pages 和 docs, 甚至可以处理跨存储库部署。</p>
`,r:{minutes:2.43,words:729},title:"github-pages-deploy"},["/code/github/actions/gh-pages-deploy","/code/github/actions/gh-pages-deploy.md"]],["v-b23b20fc","/code/github/actions/intro.html",{y:"a",d:"2021-02-18T00:00:00.000Z",l:"2021年2月18日",c:["GitHub"],g:["action","介绍"],e:`<p>在 GitHub Actions 的仓库中自动化、自定义和执行软件开发工作流程。</p>
<p>您可以发现、创建和共享操作以执行您喜欢的任何作业 (包括 CI/CD) ，并将操作合并到完全自定义的工作流程中。</p>
`,r:{minutes:3.55,words:1065},title:"Actions 介绍",i:"info"},["/code/github/actions/intro","/code/github/actions/intro.md"]],["v-50b2938c","/code/language/C/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["C"],e:`<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>正在完善中...</p>
</div>
`,r:{minutes:.06,words:18},title:"C 语言教程",i:"c"},["/code/language/C/index.html","/code/language/C/README.md"]],["v-ee5a60cc","/code/language/C__/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["C++"],e:`<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>正在完善中...</p>
</div>
`,r:{minutes:.05,words:16},title:"C++ 教程",i:"c"},["/code/language/C__/index.html","/code/language/C++/","/code/language/C++/README.md"]],["v-d94d383c","/code/language/dart/",{y:"a",d:"2020-05-30T00:00:00.000Z",l:"2020年5月30日",c:["dart"],e:`<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>正在完善中...</p>
</div>
`,r:{minutes:.21,words:64},title:"Dart 教程",i:"dart"},["/code/language/dart/index.html","/code/language/dart/README.md"]],["v-d8a404c2","/code/language/java/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["Java"],e:`<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>正在完善中...</p>
</div>
`,r:{minutes:.05,words:16},title:"Java 教程",i:"java"},["/code/language/java/index.html","/code/language/java/README.md"]],["v-1d30abd8","/code/language/js/",{y:"a",d:"2019-09-12T00:00:00.000Z",l:"2019年9月12日",c:["JavaScript"],e:`<div class="custom-container note">
<p class="custom-container-title">注</p>
<p>部分内容参考/来自廖雪峰、阮一峰书籍与博客</p>
</div>
`,r:{minutes:1.2,words:361},title:"JavaScript 教程",i:"javascript"},["/code/language/js/index.html","/code/language/js/README.md"]],["v-245c31a9","/code/language/js/error.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["JavaScript"],e:`<h1> 错误处理</h1>
<p>在执行 JavaScript 代码的时候，有些情况下会发生错误。</p>
<p>错误分两种，一种是程序写的逻辑不对，导致代码执行异常。例如:</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// TypeError: null 变量没有 length 属性</span>
</code></pre></div>`,r:{minutes:6.08,words:1824},title:"错误处理",i:"warn"},["/code/language/js/error","/code/language/js/error.md"]],["v-d893d8ce","/code/language/json/",{y:"a",d:"2020-07-25T00:00:00.000Z",l:"2020年7月25日",c:["JSON"],e:`<p>JSON: JavaScript Object Notation(JavaScript 对象表示法)</p>
<ul>
<li>
<p>JSON 是存储和交换文本信息的语法。类似 XML。</p>
</li>
<li>
<p>JSON 比 XML 更小、更快，更易解析。</p>
</li>
<li>
<p>JSON 是轻量级的文本数据交换格式</p>
</li>
<li>
<p>JSON 独立于语言: JSON 使用 JavaScript 语法来描述数据对象，但是 JSON 仍然独立于语言和平台。JSON 解析器和 JSON 库支持许多不同的编程语言。目前非常多的动态(PHP，JSP，.NET)编程语言都支持 JSON。</p>
</li>
<li>
<p>JSON 具有自我描述性，更易理解</p>
</li>
</ul>
`,r:{minutes:1.23,words:368},title:"JSON 教程",i:"json"},["/code/language/json/index.html","/code/language/json/README.md"]],["v-519de5de","/code/language/linter/",{y:"a",d:"2020-10-21T00:00:00.000Z",l:"2020年10月21日",g:["linter"],e:`<p>linter 用来检查程序的语法错误，并即时标注和指出来 (例如，把声明了但没使用的多余变量指出来，向错误语句添加红色波浪线)，是程序开发的辅助工具。同时，linter 也有统一规范代码书写方式的功能。</p>
<p>在大型项目中，编码需要统一的风格，比如在 JavaScript 中使用单引号还是双引号包裹字符串，在何时进行折行等。目前各种语言基本都有自己的出色 linter，能够确保相同的使用不同换行方式、缩进、标记代码会最终格式化为相同的输出。</p>
`,r:{minutes:1.05,words:315},title:"linter 介绍",i:"linter"},["/code/language/linter/index.html","/code/language/linter/README.md"]],["v-3e216956","/code/language/linter/clang-format.html",{y:"a",d:"2020-10-21T00:00:00.000Z",l:"2020年10月21日",g:["linter"],e:`<p>clang-format 是一种代码格式化工具，可用于格式化(排版) C / C++ / Java / JavaScript / Objective-C / Protobuf / C# 的代码。它支持多种预设代码风格与自定义风格 (通过编写 <code>.clang-format</code> 文件)。</p>
`,r:{minutes:2.53,words:759},title:"clang-format",i:"linter"},["/code/language/linter/clang-format","/code/language/linter/clang-format.md"]],["v-2ee7e91c","/code/language/markdown/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["Markdown"],g:["Markdown"],e:`<p>Markdown 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。</p>
<p>Markdown 的目标是实现「易读易写」。</p>
<p>Markdown 的主要目的是用来作为一种网络内容的<strong>写作用语言</strong>。</p>
`,r:{minutes:.41,words:123},title:"Markdown",i:"markdown"},["/code/language/markdown/index.html","/code/language/markdown/README.md"]],["v-1509315e","/code/language/markdown/block.html",{y:"a",d:"2021-03-21T09:22:34.000Z",c:["Markdown"],g:["Markdown"],e:`<h2> 段落和换行</h2>
<p>一个段落由一个及以上相连接的行句组成。</p>
<p>一个即以上的空行则会切分出不同的段落，一般的段落不需要用空白或断行缩进。</p>
<div class="custom-container tip">
<p class="custom-container-title">空行</p>
<p>空行的定义是显示上看起来像是空行，便会被视为空行。</p>
<p>也就是若某一行只包含空白和 tab，则该行也会被视为空行。</p>
</div>
<p>「一个及以上相连接的行句组成」这句话其实暗示了 Markdown 允许段落内的强迫断行，其它的格式会把每个断行都转成 <code>&lt;br /&gt;</code> 标签。</p>`,r:{minutes:9.71,words:2912},title:"Markdown 块元素",i:"markdown"},["/code/language/markdown/block","/code/language/markdown/block.md"]],["v-12412da4","/code/language/markdown/demo.html",{y:"a",d:"2021-03-16T06:39:58.000Z",c:["Markdown"],g:["Markdown"],e:`<!-- markdownlint-disable -->
<h1> 一级标题</h1>
<!-- markdownlint-restore -->
<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 一级标题</span>
</code></pre></div><h2> 二级标题</h2>
<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> 二级标题</span>
</code></pre></div>`,r:{minutes:2.81,words:844},title:"Markdown示例",i:"markdown"},["/code/language/markdown/demo","/code/language/markdown/demo.md"]],["v-6af69b4d","/code/language/markdown/extend.html",{y:"a",d:"2021-03-21T09:22:34.000Z",c:["Markdown"],g:["Markdown"],e:`<h2> 其他特性</h2>
<h3> 自动链接</h3>
<p>Markdown 支持比较简短的自动链接形式来处理网址和电子邮件信箱，只要是用尖括号包起来， Markdown 就会自动把它转成链接，链接的文字就和链接位置一样，例如:</p>
<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>&lt;http://example.com/&gt;
</code></pre></div><p>Markdown 会转为:</p>
<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://example.com/<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>http://example.com/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,r:{minutes:4.68,words:1405},title:"Markdown 扩展",i:"plugin"},["/code/language/markdown/extend","/code/language/markdown/extend.md"]],["v-32c10f2e","/code/language/markdown/inline.html",{y:"a",d:"2021-03-21T09:22:34.000Z",c:["Markdown"],g:["Markdown"],e:`<h2> 链接</h2>
<p>Markdown 支持两种形式的链接语法: <em>行内</em>和<em>参考</em>。</p>
<p>不管是哪一种，链接的文字都是用 <code>[方括号]</code> 来标记。</p>
<h3> 行内链接</h3>
<p>要建立一个行内形式的链接，只要在方块括号后输入圆括号并插入网址链接即可，如果您还想要加上链接的 title 文字，只要在网址后面，用双引号把 title 文字包起来即可。</p>
<details class="custom-container details"><summary>例子</summary>
<p><strong>输入</strong>:</p>
<div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>This is <span class="token url">[<span class="token content">an example</span>](<span class="token url">http://example.com/</span> <span class="token string">"Title"</span>)</span> inline link.

<span class="token url">[<span class="token content">This link</span>](<span class="token url">http://example.net/</span>)</span> has no title attribute.
</code></pre></div><p><strong>渲染结果</strong>:</p>
<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
  This is <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://example.com/<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Title<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> an example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> inline
  link.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://example.net/<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>This link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> has no title attribute.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><strong>输出</strong>:</p>
<p>This is <a href="http://example.com/" title="Title" target="_blank" rel="noopener noreferrer">an example</a> inline link.</p>
<p><a href="http://example.net/" target="_blank" rel="noopener noreferrer">This link</a> has no title attribute.</p>
</details>`,r:{minutes:6.94,words:2082},title:"Markdown 行内元素",i:"markdown"},["/code/language/markdown/inline","/code/language/markdown/inline.md"]],["v-134ae2df","/code/language/markdown/intro.html",{y:"a",d:"2021-03-21T09:22:34.000Z",c:["Markdown"],g:["Markdown"],e:`<p>Markdown 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。</p>
<p>Markdown 的目标是实现「易读易写」。它的扩展名为 <code>.md</code>。</p>
`,r:{minutes:4.86,words:1457},title:"Markdown 介绍",i:"info"},["/code/language/markdown/intro","/code/language/markdown/intro.md"]],["v-ee312fb6","/code/language/php/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["PHP"],e:`<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>正在完善中...</p>
</div>
`,r:{minutes:.06,words:17},title:"PHP 语言教程",i:"php"},["/code/language/php/index.html","/code/language/php/README.md"]],["v-73327cb6","/code/language/python/",{y:"a",a:"廖雪峰",d:"2020-05-18T00:00:00.000Z",l:"2020年5月18日",c:["Python"],e:`<ul>
<li>优点: Python 是一种高级语言，它可以用更少的代码量完成相同工作。</li>
<li>缺点: Python 是一种脚本语言，它的执行效率不是很高。</li>
</ul>
`,r:{minutes:1.05,words:314},title:"Python 语言教程",i:"python"},["/code/language/python/index.html","/code/language/python/README.md"]],["v-5bc6221c","/code/language/typescript/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["TypeScript"],e:`<p>TypeScript 是一种由微软开发的自由和开源的编程语言，它是 JavaScript 的一个超集，扩展了 JavaScript 的语法。</p>
`,r:{minutes:1.3,words:390},title:"TypeScript 教程",i:"typescript"},["/code/language/typescript/index.html","/code/language/typescript/README.md"]],["v-d6fd848c","/code/language/yaml/",{y:"a",d:"2020-07-26T00:00:00.000Z",l:"2020年7月26日",c:["YAML"],e:`<p>编程免不了要写配置文件，怎么写配置也是一门学问。</p>
<p>YAML 是专门用来写配置文件的语言，非常简洁和强大。</p>
<h2> yaml 介绍</h2>
<p>YAML 语言(发音 /ˈjæməl/ )的设计目标，就是方便人类读写。它实质上是一种通用的数据串行化格式。</p>
<p>YAML 的全称是 YAML Ain’t Markup Language。</p>
<p>它的基本语法规则如下。</p>
<ul>
<li>大小写敏感</li>
<li>使用缩进表示层级关系</li>
<li>缩进时不允许使用 Tab 键，只允许使用空格。</li>
<li>缩进的空格数目不重要，只要相同层级的元素左侧对齐即可</li>
</ul>`,r:{minutes:4.47,words:1341},title:"YAML 教程",i:"yaml"},["/code/language/yaml/index.html","/code/language/yaml/README.md"]],["v-005dcfac","/code/mini-app/framework/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["小程序"],e:`<h2> 开发框架优点</h2>
<ol>
<li>
<p>将界面开发的复杂过程转换为编写简单的 yaml 文件。开发门槛低，</p>
</li>
<li>
<p>拥有详细的开发文档说明，简单易懂，页面文件自述性高，没有开发基础的人也可以经过简单阅读后看懂页面文件大体描述内容。<a href="/code/mini-app/framework/demo.html" target="blank">查看例子点这里</a></p>
</li>
<li>
<p>开发者无需着眼于界面样式或是功能的实现，只需着眼于在 yaml 文件中添加渲染界面所需参数并赋值，即可完成界面编写。开发者只需在开发过程中按照开发说明录入参数，并注意格式即可。</p>
</li>
</ol>`,r:{minutes:.63,words:188},title:"小程序框架说明",i:"info"},["/code/mini-app/framework/index.html","/code/mini-app/framework/README.md"]],["v-6e60eaac","/code/mini-app/framework/demo.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<h2> 账户页面</h2>
<p></p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">title</span><span class="token punctuation">:</span> 统一身份认证
<span class="token key atrule">grey</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">content</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> text
    <span class="token key atrule">type</span><span class="token punctuation">:</span> p
    <span class="token key atrule">heading</span><span class="token punctuation">:</span> 统一身份认证介绍
    <span class="token key atrule">text</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 学校为每个人分配了一个统一身份，这个身份就是您的邮箱账号和密码。
      <span class="token punctuation">-</span> 无论您登录校园网、进入内网查看通知、查看是否欠书未还、查看校园卡余额以及消费记录、进入本科生或研究生选课平台、查成绩、查课表、访问 BB 平台、本科教学服务系统等等，各种与信息查询提交的有关的操作都需要这个统一身份。

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> list
    <span class="token key atrule">header</span><span class="token punctuation">:</span> 了解更多
    <span class="token key atrule">content</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 统一身份认证
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> apply
        <span class="token key atrule">path</span><span class="token punctuation">:</span> authorize

      <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 校园邮箱
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> email
        <span class="token key atrule">path</span><span class="token punctuation">:</span> mail

  <span class="token punctuation">-</span> <span class="token key atrule">tag</span><span class="token punctuation">:</span> footer
    <span class="token key atrule">author</span><span class="token punctuation">:</span> Mr.Hope
    <span class="token key atrule">time</span><span class="token punctuation">:</span> 2020年7月17日

<span class="token key atrule">shareable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.28,words:683},title:"YAML 文件案例",i:"discover"},["/code/mini-app/framework/demo","/code/mini-app/framework/demo.md"]],["v-63eb9d04","/code/mini-app/framework/page.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p><code>page.ts</code> 用于小程序页面渲染。</p>
</div>
`,r:{minutes:1.6,words:480},title:"Page 插件",i:"page"},["/code/mini-app/framework/page","/code/mini-app/framework/page.md"]],["v-65de3b35","/code/mini-app/framework/simple-debug.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>这里是开发前应当了解的内容，阅读时长大约为五分钟。</p>
<h2> json 文件中合法的值有哪些</h2>
<p>合法的值大家编辑用到的一共有五种:
<strong>number</strong>(数字)、<strong>boolean</strong>(布尔值)、<strong>string</strong>(字符串)、<strong>array</strong>(数组)和<strong>object</strong>(对象)。</p>
<h2> json 介绍</h2>
<h3> 对象</h3>
<p>对象的一组键值对，使用冒号结构表示。</p>
<div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">animal</span><span class="token punctuation">:</span> pets
</code></pre></div>`,r:{minutes:4.35,words:1304},title:"小程序简易开发指南",i:"creative"},["/code/mini-app/framework/simple-debug","/code/mini-app/framework/simple-debug.md"]],["v-3e889748","/code/mini-app/framework/tag-list.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p><img src="https://img.shields.io/badge/版本-V5-blue.svg?style=for-the-badge" alt="版本: V5"></p>
<h2> 总体结构</h2>
<table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th style="text-align:center">必填</th>
<th style="text-align:center">值类型</th>
<th>内容</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">title</td>
<td style="text-align:center">是</td>
<td style="text-align:center"><code>string</code></td>
<td>导航栏标题</td>
<td>一般不超过八个字，六字及以下为佳</td>
</tr>
<tr>
<td style="text-align:center">desc</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>string</code></td>
<td>页面描述</td>
<td>会显示在页脚</td>
</tr>
<tr>
<td style="text-align:center">author</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>string</code></td>
<td>页面的作者</td>
<td>会显示在页脚</td>
</tr>
<tr>
<td style="text-align:center">time</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>string</code></td>
<td>页面更新时间</td>
<td>会显示在页脚</td>
</tr>
<tr>
<td style="text-align:center">grey</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>boolean</code></td>
<td>使用灰色背景</td>
<td>默认为白色背景</td>
</tr>
<tr>
<td style="text-align:center">cite</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>string | string[]</code></td>
<td>页面引用链接</td>
<td></td>
</tr>
<tr>
<td style="text-align:center">content</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>ComponentConfig[]</code></td>
<td>页面的内容</td>
<td>数组的每个对象会最终渲染为一个组件</td>
</tr>
<tr>
<td style="text-align:center">from</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>string</code></td>
<td>左上角返回按钮文字</td>
<td>设置左上角文字，默认为上一级页面标题</td>
</tr>
<tr>
<td style="text-align:center">outdated</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>boolean</code></td>
<td>是否已过时</td>
<td>可展示一条“页面过时”提示</td>
</tr>
<tr>
<td style="text-align:center">shareable</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>boolean</code></td>
<td>是否可被分享</td>
<td>是否可以使用小程序的界面分享，默认为 <code>false</code></td>
</tr>
<tr>
<td style="text-align:center">contact</td>
<td style="text-align:center">否</td>
<td style="text-align:center"><code>boolean</code></td>
<td>“联系开发者”按钮</td>
<td>是否在分享菜单中显示“联系开发者”，默认为 <code>true</code></td>
</tr>
</tbody>
</table>`,r:{minutes:14.01,words:4202},title:"小程序页面参数表",i:"list"},["/code/mini-app/framework/tag-list","/code/mini-app/framework/tag-list.md"]],["v-22f6bbee","/code/mini-app/guide/",{y:"a",d:"2019-11-25T00:00:00.000Z",l:"2019年11月25日",c:["小程序"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/code/mini-app/guide/file-structure.html" target="blank">文件结构</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/env.html" target="blank">运行环境</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/config/" target="blank">小程序配置</a></p>
<ul>
<li>
<p><a href="/code/mini-app/guide/config/app-config.html" target="blank">全局配置</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/config/page-config.html" target="blank">页面配置</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/config/sitemap-config.html" target="blank">sitemap 配置</a></p>
</li>
</ul>
</li>
<li>
<p><a href="/code/mini-app/guide/frame/" target="blank">小程序框架</a></p>
<ul>
<li>
<p><a href="/code/mini-app/guide/frame/intro.html" target="blank">框架介绍</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/frame/scene.html" target="blank">场景值</a> </p>
</li>
<li>
<p><a href="/code/mini-app/guide/frame/env.html" target="blank">运行环境</a> </p>
</li>
<li>
<p><a href="/code/mini-app/guide/frame/mechanism.html" target="blank">运行机制</a> </p>
</li>
<li>
<p><a href="/code/mini-app/guide/frame/update.html" target="blank">更新机制</a> </p>
</li>
</ul>
</li>
<li>
<p><a href="/code/mini-app/guide/service/" target="blank">逻辑层</a></p>
<ul>
<li>
<p><a href="/code/mini-app/guide/service/lifetime.html" target="blank">生命周期</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/service/route.html" target="blank">路由</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/service/register.html" target="blank">注册</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/service/app.html" target="blank">App()</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/service/page.html" target="blank">Page()</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/service/run.html" target="blank">运行</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/service/module.html" target="blank">模块化</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/service/api/" target="blank">API</a></p>
</li>
</ul>
</li>
<li>
<p><a href="/code/mini-app/guide/view/" target="blank">视图层</a></p>
<ul>
<li>
<p><a href="/code/mini-app/guide/view/wxml.html" target="blank">WXML</a></p>
<ul>
<li>
<p><a href="/code/mini-app/guide/view/data-bind.html" target="blank">数据绑定</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/view/condition-render.html" target="blank">条件渲染</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/view/list-render.html" target="blank">列表渲染</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/view/template.html" target="blank">模板</a></p>
</li>
</ul>
</li>
<li>
<p><a href="/code/mini-app/guide/view/wxss.html" target="blank">WXSS</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/view/wxs.html" target="blank">WXS</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/view/event.html" target="blank">事件</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/view/component.html" target="blank">基础组件</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/view/animation.html" target="blank">动画</a> </p>
</li>
<li>
<p><a href="/code/mini-app/guide/view/wxs.html" target="blank">WXS</a> </p>
</li>
<li>
<p><a href="/code/mini-app/guide/view/wxs-event.html" target="blank">WXS 事件</a> </p>
</li>
<li>
<p><a href="/code/mini-app/guide/view/model.html" target="blank">建议双向绑定</a> </p>
</li>
<li>
<p><a href="/code/mini-app/guide/view/selector.html" target="blank">获取界面上的节点信息</a> </p>
</li>
<li>
<p><a href="/code/mini-app/guide/view/selector.html" target="blank">相应显示区域变化</a> </p>
</li>
<li>
<p><a href="/code/mini-app/guide/view/rendering-cache.html" target="blank">初始渲染缓存</a> </p>
</li>
</ul>
</li>
<li>
<p><a href="/code/mini-app/guide/ability/" target="blank">小程序能力</a></p>
<ul>
<li>
<p><a href="/code/mini-app/guide/ability/network.html" target="blank">网络请求</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/ability/storage.html" target="blank">存储</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/ability/file-system.html" target="blank">文件系统</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/ability/debug.html" target="blank">调试</a></p>
</li>
</ul>
</li>
</ul>`,r:{minutes:1.08,words:325},title:"小程序指南",i:"creative"},["/code/mini-app/guide/index.html","/code/mini-app/guide/README.md"]],["v-248431fa","/code/mini-app/guide/env.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>宿主环境是微信客户端给小程序所提供的环境。小程序借助宿主环境提供的能力，可以完成许多普通网页无法完成的功能。</p>
`,r:{minutes:4.03,words:1210},title:"宿主环境",i:"leaf"},["/code/mini-app/guide/env","/code/mini-app/guide/env.md"]],["v-193675ee","/code/mini-app/guide/file-structure.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<h2> 文件组成 </h2>
<p>小程序的代码由四种文件组成:</p>
<ul>
<li><code>.json</code> 后缀的 JSON 配置文件，主要用作小程序配置</li>
<li><code>.wxml</code> 后缀的 WXML 模板文件，为视图层，相当于 HTML</li>
<li><code>.wxss</code> 后缀的 WXSS 样式文件，为样式部分，相当于 CSS</li>
<li><code>.js</code> 后缀的 JS 脚本逻辑文件，为脚本部分，处理小程序逻辑与行为</li>
</ul>
<h2> 目录结构 </h2>
<p>小程序包含一个描述整体程序的 app 和多个描述各自页面的 page。</p>`,r:{minutes:6.64,words:1993},title:"代码构成",i:"tree"},["/code/mini-app/guide/file-structure","/code/mini-app/guide/file-structure.md"]],["v-38d408ef","/code/mini-app/tools/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["小程序"],e:`<h2> 工具</h2>
<ul>
<li>
<p><a href="/code/mini-app/tools/interface.html" target="blank">工具页面简介</a></p>
</li>
<li>
<p><a href="/code/mini-app/tools/debug.html" target="blank">调试</a></p>
</li>
<li>
<p><a href="/code/mini-app/tools/npm.html" target="blank">npm</a></p>
</li>
<li>
<p><a href="/code/mini-app/tools/audit.html" target="blank">体验评分</a></p>
</li>
</ul>`,r:{minutes:.1,words:30},title:"工具使用",i:"tool"},["/code/mini-app/tools/index.html","/code/mini-app/tools/README.md"]],["v-6dd27fe6","/code/mini-app/tools/audit.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>这是一项给小程序的体验好坏打分的功能，它会在小程序运行过程中实时检查，分析出一些可能导致体验不好的地方，并且定位出哪里有问题，以及给出一些优化建议。</p>
`,r:{minutes:1.56,words:468},title:"体验评分",i:"tool"},["/code/mini-app/tools/audit","/code/mini-app/tools/audit.md"]],["v-12f4ded6","/code/mini-app/tools/debug.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>程序调试主要有三大功能区: 模拟器、调试工具和小程序操作区</p>
`,r:{minutes:10.95,words:3286},title:"调试",i:"debug"},["/code/mini-app/tools/debug","/code/mini-app/tools/debug.md"]],["v-a73b2c22","/code/mini-app/tools/interface.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<h2> 启动页</h2>
<h2> 登录页</h2>
<p>在登录页，可以使用微信扫码登陆开发者工具，开发者工具将使用这个微信帐号的信息进行小程序的开发和调试。</p>
<p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/login.b4162666.png" alt="login"></p>
<h2> 项目列表</h2>
<p>登录成功后，会看到已经存在的项目列表和代码片段列表，</p>
<p>在项目列表可以选择公众号网页调试，进入到公众号网页调试模式。</p>
<p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/projectlist.aae3a02e.png" alt="project list"></p>`,r:{minutes:4.55,words:1365},title:"界面",i:"layout"},["/code/mini-app/tools/interface","/code/mini-app/tools/interface.md"]],["v-38645abd","/code/mini-app/tools/npm.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>从小程序基础库版本 2.2.1 或以上、及开发者工具 1.02.1808300 或以上开始，小程序支持使用 npm 安装第三方包。</p>
<p>此文档要求开发者们对 npm 有一定的了解，因此不会再去介绍 npm 的基本功能。如若之前未接触过 npm，请翻阅官方 npm 文档进行学习。</p>
`,r:{minutes:4.47,words:1341},title:"npm 支持",i:"npm"},["/code/mini-app/tools/npm","/code/mini-app/tools/npm.md"]],["v-7ac59094","/code/mini-app/tools/score.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>目前体验评分共有 27 条规则，共分为三类: 性能、体验、最佳实践，满足规则要求得分(100 分)，否则不得分(0 分)，最后根据各规则权重和公式计算出总得分。</p>
`,r:{minutes:7.26,words:2178},title:"评分方法",i:"rank"},["/code/mini-app/tools/score","/code/mini-app/tools/score.md"]],["v-239235ed","/code/node-js/package/",{title:"常见 Node 库"},["/code/node-js/package/index.html","/code/node-js/package/README.md"]],["v-19bca984","/code/node-js/package/axois.html",{y:"a",d:"2021-01-27T11:33:27.000Z",c:["Node.js"],g:["Node.js"],e:`<blockquote>
<p>GitHub 地址: <a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">https://github.com/axios/axios</a></p>
</blockquote>
<p>axois 是一个基于 Promise 的 HTTP 客户端，用于浏览器和 node.js</p>
`,r:{minutes:9.59,words:2878},title:"axios"},["/code/node-js/package/axois","/code/node-js/package/axois.md"]],["v-681ba581","/code/vue/cli/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["Vue"],g:["Vue Cli"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/code/vue/cli/intro.html" target="blank">Vue Cli 介绍</a></p>
</li>
<li>
<p><a href="/code/vue/cli/quick-dev.html" target="blank">快速简单开发</a></p>
</li>
<li>
<p><a href="/code/vue/cli/create.html" target="blank">创建项目</a></p>
</li>
<li>
<p><a href="/code/vue/cli/file.html" target="blank">文件处理</a></p>
</li>
</ul>`,r:{minutes:.12,words:35},title:"Vue-cli",i:"vue"},["/code/vue/cli/index.html","/code/vue/cli/README.md"]],["v-48fc6d3c","/code/vue/cli/create.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["Vue"],g:["Vue Cli","指令"],e:`<h2> 创建一个项目</h2>
<p>在尝试了单文件的快速开发后，我们就可以开始真正创建一个项目。</p>
<h3> vue create</h3>
<p>运行以下命令来创建一个新项目:</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>vue create hello-world
</code></pre></div><h3> 使用图形化界面</h3>
<p>您也可以通过 <code>vue ui</code> 命令以图形化界面创建和管理项目:</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>vue ui
</code></pre></div>`,r:{minutes:2.05,words:616},title:"相关指令",i:"add"},["/code/vue/cli/create","/code/vue/cli/create.md"]],["v-b7f95708","/code/vue/cli/file.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["Vue"],g:["Vue Cli"],e:`<h2> Index 文件</h2>
<p><code>public/index.html</code> 文件是一个会被处理的模板。在构建过程中，资源链接会被自动注入。另外，Vue CLI 也会自动注入打包好的 JavaScript 和 CSS 文件的资源链接。它会最终成为 Vue 应用的页面。</p>
<h2> 处理静态资源</h2>
<p>静态资源可以通过两种方式进行处理:</p>
<ul>
<li>
<p>在 JavaScript 被导入或在 template/CSS 中通过相对路径被引用。这类引用会被 webpack 处理。</p>
</li>
<li>
<p>放置在 <code>public</code> 目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过 webpack 的处理。</p>
</li>
</ul>`,r:{minutes:2.84,words:852},title:"文件处理原则",i:"file"},["/code/vue/cli/file","/code/vue/cli/file.md"]],["v-0def13a4","/code/vue/cli/intro.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["Vue"],g:["Vue Cli","快速上手"],e:`<p>Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统，提供:</p>
<ul>
<li>通过 <code>@vue/cli</code> 搭建交互式的项目脚手架。</li>
<li>通过 <code>@vue/cli</code> + <code>@vue/cli-service-global</code> 快速开始零配置原型开发。</li>
<li>一个运行时依赖 (<code>@vue/cli-service</code>)，该依赖:
<ul>
<li>可升级；</li>
<li>基于 webpack 构建，并带有合理的默认配置；</li>
<li>可以通过项目内的配置文件进行配置；</li>
<li>可以通过插件进行扩展。</li>
</ul>
</li>
<li>一个丰富的官方插件集合，集成了前端生态中最好的工具。</li>
<li>一套完全图形化的创建和管理 Vue.js 项目的用户界面。</li>
</ul>
`,r:{minutes:1.49,words:446},title:"Vue-cli 介绍",i:"creative"},["/code/vue/cli/intro","/code/vue/cli/intro.md"]],["v-2a972985","/code/vue/cli/quick-dev.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["Vue"],g:["Vue Cli"],e:`<p>您可以使用 <code>vue serve</code> 和 <code>vue build</code> 命令对单个 <code>*.vue</code> 文件进行快速原型开发，不过这需要先额外安装一个全局的扩展:</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli-service-global
</code></pre></div>`,r:{minutes:1.29,words:387},title:"快速原型开发",i:"create"},["/code/vue/cli/quick-dev","/code/vue/cli/quick-dev.md"]],["v-48a6e254","/code/vue/router/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["Vue"],g:["Vue Router"],e:`<p>Vue Router 是 Vue 官方出品的路由组件，托管整个 Vue 项目路由。</p>
`,r:{minutes:.25,words:76},title:"Vue Router",i:"router"},["/code/vue/router/index.html","/code/vue/router/README.md"]],["v-3cccf502","/code/vue/router/demo.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["Vue"],g:["Vue Router","Demo"],e:`<p>用 Vue.js + Vue Router 创建单页应用，是非常简单的。使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，当您要把 Vue Router 添加进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router 在哪里渲染它们。</p>
`,r:{minutes:1.95,words:586},title:"案例",i:"discover"},["/code/vue/router/demo","/code/vue/router/demo.md"]],["v-461f9463","/code/vue/router/get-started.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["Vue"],g:["Vue Router","快速上手"],e:`<h2> 介绍</h2>
<p>Vue Router 是 Vue 官方出品的路由组件，托管整个 Vue 项目路由。</p>
<h2> 配置文件说明</h2>
<p>配置文件会引入 Node.js 模块 <code>vue-router</code>，并配置信息，最终向外暴露一个添加了配置信息的 <code>Router对象</code>。</p>
<p>在日常开发中，我们只需要关注默认暴露对象的 <code>route</code> 属性。(其他属性已经在下方用注释简要说明)</p>
<p>在 inNENU Website 项目中，其配置文件位于 <code>src/routes</code> 文件夹下，名称为 <code>router.ts</code>。</p>`,r:{minutes:5.36,words:1609},title:"快速上手",i:"router"},["/code/vue/router/get-started","/code/vue/router/get-started.md"]],["v-c72e4aea","/code/vue/vuex/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["Vue"],g:["Vuex"],e:`<p>Vuex 是 Vue 官方出品的状态管理组件，是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。</p>
`,r:{minutes:.41,words:123},title:"Vuex",i:"state"},["/code/vue/vuex/index.html","/code/vue/vuex/README.md"]],["v-33894aab","/code/vue/vuex/demo.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["Vue"],g:["Vuex","Demo"],e:`<p>本案例展示了 Mr.Hope 个人编写的 screen 相关的 Vuex 模块。</p>
`,r:{minutes:.47,words:141},title:"模块案例",i:"discover"},["/code/vue/vuex/demo","/code/vue/vuex/demo.md"]],["v-491f82cc","/code/vue/vuex/get-started.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["Vue"],g:["Vuex","快速上手"],e:`<p>Vuex 是 Vue 官方出品的状态管理组件，是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。</p>
`,r:{minutes:6.09,words:1827},title:"快速上手",i:"state"},["/code/vue/vuex/get-started","/code/vue/vuex/get-started.md"]],["v-4d66e289","/code/website/css/",{y:"a",d:"2019-09-05T00:00:00.000Z",l:"2019年9月5日",c:["CSS"],g:["介绍"],e:`<p>CSS 指层叠样式表 (<strong>C</strong>ascading <strong>S</strong>tyle <strong>S</strong>heets)，它负责描述网页元素的具体样式。</p>
<p>CSS3 是最新的 CSS 标准，被拆分为"模块"。模块包括: 选择器、盒模型、背景和边框、文字特效、2D/3D 转换、动画、多列布局、用户界面。</p>
`,r:{minutes:1.31,words:394},title:"CSS",i:"css"},["/code/website/css/index.html","/code/website/css/README.md"]],["v-db68b190","/code/website/emmet/",{y:"a",d:"2019-09-03T00:00:00.000Z",l:"2019年9月3日",c:["Emmet"],g:["快捷键"],e:`<div class="custom-container tip">
<p class="custom-container-title">简介</p>
<p>所有操作按下 “tab” 键即可瞬间完成</p>
</div>
<p>Emmet 是一个快速创建 HTML 和 CSS 的方式，如果您想要成为一个高级 Web 开发者，为了工作效率，您应该掌握 Emmet 语法。</p>
`,r:{minutes:.47,words:142},title:"Emmet 语法",i:"emmet"},["/code/website/emmet/index.html","/code/website/emmet/README.md"]],["v-3db71024","/code/website/emmet/css.html",{y:"a",d:"2019-09-03T00:00:00.000Z",l:"2019年9月3日",c:["Emmet"],g:["快捷键","HTML"],e:`<p>对于 CSS 语法，Emmet 为属性提供了许多预定义的代码段。</p>
<h2> 添加属性</h2>
<p>您可以使用缩写来生成 CSS 属性。如 <code>m</code> 会生成 <code>margin: ;</code>，同时光标会自动置于值处。</p>
<h2> 同时添加属性与值值</h2>
<p>您可以将值直接输入缩写的后面，如果有多个值，您需要用 <code>-</code> 将它们分开，多余的 <code>-</code> 将会被理解为负值。</p>
<div class="custom-container tip">
<p class="custom-container-title">案例</p>
<ul>
<li><code>m10</code>: <code>margin: 10px;</code></li>
<li><code>m10-20</code>: <code>margin: 10px 20px;</code></li>
<li><code>m-10--20</code>: <code>margin: -10px -20px;</code></li>
</ul>
</div>`,r:{minutes:1.77,words:532},title:"CSS Emmet",i:"css"},["/code/website/emmet/css","/code/website/emmet/css.md"]],["v-8c5b7854","/code/website/emmet/html.html",{y:"a",d:"2019-09-03T00:00:00.000Z",l:"2019年9月3日",c:["Emmet"],g:["快捷键","HTML"],e:`<h2> 元素创建</h2>
<ol>
<li>在编辑器中输入元素名称之后按下 tab 即可自动补全生成 HTML 标签，即使不是标准的 HTML 标签。</li>
</ol>
<div class="custom-container tip">
<p class="custom-container-title">创建文档</p>
<p>输入: <code>!</code> 或者 <code>html:5</code> 将创建 HTML 基本结构。</p>
</div>
<h2> 结构操作</h2>
<h3> 子元素</h3>
<p>使用 <code>&gt;</code> 生成子元素</p>`,r:{minutes:4.35,words:1305},title:"HTML Emmet",i:"html"},["/code/website/emmet/html","/code/website/emmet/html.md"]],["v-5fbc4987","/code/website/html/",{y:"a",d:"2019-09-01T00:00:00.000Z",l:"2019年9月1日",c:["HTML"],g:["介绍"],e:`<p>HTML 指的是超文本标记语言 (Hyper Text Markup Language)，它不是一种编程语言，而是一种标记语言 (markup language)，它使用标记标签来描述网页。HTML5 是 HTML 最新的修订版本。</p>
`,r:{minutes:1.22,words:365},title:"HTML",i:"html"},["/code/website/html/index.html","/code/website/html/README.md"]],["v-df5d1758","/code/website/jQuery/",{y:"a",d:"2019-11-02T00:00:00.000Z",l:"2019年11月2日",c:["jQuery"],e:`<p>jQuery 是一款能够方便快捷的操作 DOM，并兼容所有主流浏览器的框架，目前最新版本是 3.5.1。</p>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>由于目前前端应用的愈加复杂，前端开发者大多数转向 MVVM 框架，目前世界比较流行的三大 MVVM 框架是 Vue React Angular。可以说，在 2020 年，<strong>jQuery 已经过时了</strong>!</p>
<p>不过 jQuery 无论说从代码实现还是从写法上，到今天都是值得借鉴的。</p>
<p>所以如果您只想简单了解并掌握前端开发，而不是深入地从事相关行业，您可以直接 <a href="/code/vue/" target="blank">跳过本章节</a>。</p>
<p>本章节应以理解写法与思路为主，无需刻意记忆。</p>
</div>
`,r:{minutes:.76,words:229},title:"jQuery",i:"jQuery"},["/code/website/jQuery/index.html","/code/website/jQuery/README.md"]],["v-93dfe636","/code/website/jQuery/ajax.html",{y:"a",d:"2019-11-05T00:00:00.000Z",l:"2019年11月5日",c:["jQuery"],e:`<div class="custom-container tip">
<p class="custom-container-title">章节过时</p>
<p>目前，一套代码已经可以在多个浏览器上运行良好了，所以 jQuery 的意义并不大。在 Node.js 中，我们使用 <a href="/code/node-js/package/axois.html" target="blank">axios</a> 来进行请求。</p>
</div>
`,r:{minutes:2.84,words:853},title:"AJAX",i:"ajax"},["/code/website/jQuery/ajax","/code/website/jQuery/ajax.md"]],["v-8487edae","/code/website/jQuery/animation.html",{y:"a",d:"2019-11-04T00:00:00.000Z",l:"2019年11月4日",c:["jQuery"],e:`<div class="custom-container tip">
<p class="custom-container-title">章节过时</p>
<p>大部分动画都能够通过 CSS3 的 transition 实现，且 CSS3 开销更小。在复杂动画下，jQuery 更容易触发性能瓶颈。</p>
<p>2020 年浏览器对 CSS3 已经支持的特别良好，所以目前大多数的动画都直接使用 CSS3 的动画库。本章以学习思路为主即可。</p>
</div>
`,r:{minutes:3.52,words:1055},title:"动画",i:"animation"},["/code/website/jQuery/animation","/code/website/jQuery/animation.md"]],["v-59e10c5a","/code/website/jQuery/event.html",{y:"a",d:"2019-11-04T00:00:00.000Z",l:"2019年11月4日",c:["jQuery"],e:`<div class="custom-container tip">
<p class="custom-container-title">章节过时</p>
<p>由于目前各浏览器 API 已经基本统一，无需使用 jQuery 绑定事件了。</p>
</div>
`,r:{minutes:5.13,words:1538},title:"事件",i:"activity"},["/code/website/jQuery/event","/code/website/jQuery/event.md"]],["v-c7d79daa","/code/website/jQuery/extend.html",{y:"a",d:"2019-11-05T00:00:00.000Z",l:"2019年11月5日",c:["jQuery"],e:`<p>当我们使用 jQuery 对象的方法时，由于 jQuery 对象可以操作一组 DOM，而且支持链式操作，所以用起来非常方便。</p>
<p>但是 jQuery 内置的方法永远不可能满足所有的需求。比如，我们想要高亮显示某些 DOM 元素，用 jQuery 可以这么实现:</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"span.hl"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"backgroundColor"</span><span class="token punctuation">,</span> <span class="token string">"#fffceb"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"color"</span><span class="token punctuation">,</span> <span class="token string">"#d85030"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"p a.hl"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"backgroundColor"</span><span class="token punctuation">,</span> <span class="token string">"#fffceb"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">"color"</span><span class="token punctuation">,</span> <span class="token string">"#d85030"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,r:{minutes:5.18,words:1554},title:"扩展",i:"plugin"},["/code/website/jQuery/extend","/code/website/jQuery/extend.md"]],["v-3957cd7e","/code/website/jQuery/intro.html",{y:"a",d:"2019-11-02T00:00:00.000Z",l:"2019年11月2日",c:["jQuery"],g:["介绍"],e:`<p>jQuery 是 JavaScript 世界中使用最广泛的一个库。鼎盛时期全世界大约有 80~90%的网站直接或间接地使用了 jQuery。</p>
<p>jQuery 能帮我们干这些事情:</p>
<ul>
<li>消除浏览器差异: 您不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写 Ajax 等代码；</li>
<li>简洁的操作 DOM 的方法: 写 <code>$('#test')</code> 肯定比 <code>document.getElementById('test')</code> 来得简洁；</li>
<li>轻松实现动画、修改 CSS 等各种操作。</li>
<li>jQuery 的理念 “Write Less, Do More“，让您写更少的代码，完成更多的工作!</li>
</ul>
`,r:{minutes:2.03,words:608},title:"jQuery 介绍",i:"creative"},["/code/website/jQuery/intro","/code/website/jQuery/intro.md"]],["v-5ef6c9b6","/code/website/jQuery/modify-dom.html",{y:"a",d:"2019-11-03T00:00:00.000Z",l:"2019年11月3日",c:["jQuery"],e:`<div class="custom-container tip">
<p class="custom-container-title">章节过时</p>
<p>而且目前浏览器 API 已经基本统一，除非兼容旧版本 IE，否则无需针对不同浏览器写不同的代码。</p>
</div>
`,r:{minutes:1.92,words:575},title:"修改 DOM 结构",i:"edit"},["/code/website/jQuery/modify-dom","/code/website/jQuery/modify-dom.md"]],["v-799c2158","/code/website/jQuery/operate-dom.html",{y:"a",d:"2019-11-03T00:00:00.000Z",l:"2019年11月3日",c:["jQuery"],e:`<div class="custom-container tip">
<p class="custom-container-title">章节过时</p>
<p>目前，新型的框架大多遵循 MVVM 逻辑，及把逻辑层的数据绑定到视图层去显示。这种思路下，无需也不应操作 DOM。</p>
</div>
`,r:{minutes:4.9,words:1471},title:"操作 DOM",i:"operate"},["/code/website/jQuery/operate-dom","/code/website/jQuery/operate-dom.md"]],["v-546d1486","/code/website/jQuery/selector.html",{y:"a",d:"2019-11-03T00:00:00.000Z",l:"2019年11月3日",c:["jQuery"],e:`<p>选择器是 jQuery 的核心。一个选择器写出来类似 <code>$('#dom-id')</code>。</p>
`,r:{minutes:8.37,words:2510},title:"选择器",i:"list"},["/code/website/jQuery/selector","/code/website/jQuery/selector.md"]],["v-60432ed1","/linux/bash/archives/archiving.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> 归档和备份</h1>
<h2> gzip</h2>
<p>gzip 程序用来压缩文件，原文件的压缩版(添加 <code>gz</code> 后缀名)会替代原文件。gunzip 程序用来还原压缩版本。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">gzip</span> foo.txt
gunzip foo.txt.gz
</code></pre></div><p><code>gzip</code> 的参数如下。</p>`,r:{minutes:5.25,words:1574},title:"归档和备份"},["/linux/bash/archives/archiving","/linux/bash/archives/archiving.md"]],["v-8aa16a18","/linux/bash/archives/async.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> 异步任务</h1>
<p>Bash 脚本有时候需要同时执行多个任务。通常这涉及到启动一个脚本，依次，启动一个或多个子脚本来执行额外的任务，而父脚本继续运行。然而，当一系列脚本 以这种方式运行时，要保持父子脚本之间协调工作，会有一些问题。也就是说，若父脚本或子脚本依赖于另一方，并且 一个脚本必须等待另一个脚本结束任务之后，才能完成它自己的任务，这应该怎么办?</p>
<p>bash 有一个内置命令，能帮助管理诸如此类的异步执行的任务。wait 命令导致一个父脚本暂停运行，直到一个 特定的进程(例如，子脚本)运行结束。</p>
<p>首先我们将演示一下 wait 命令的用法。为此，我们需要两个脚本，一个父脚本:</p>`,r:{minutes:1.75,words:526},title:"异步任务"},["/linux/bash/archives/async","/linux/bash/archives/async.md"]],["v-4180a476","/linux/bash/archives/command.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> Shell 的命令</h1>
<h2> 命令的类别</h2>
<p>Bash 可以使用的命令分成四类。</p>
<ul>
<li>可执行程序</li>
<li>Shell 提供的命令</li>
<li>Shell 函数</li>
<li>前三类命令的别名</li>
</ul>
<h2> type, whatis</h2>
<p><code>type</code> 命令可以显示命令类型。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">type</span> <span class="token builtin class-name">command</span>
</code></pre></div>`,r:{minutes:5.29,words:1588},title:"Shell 的命令"},["/linux/bash/archives/command","/linux/bash/archives/command.md"]],["v-fb2b21e8","/linux/bash/archives/file-operation.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> 文件操作</h1>
<h2> cp</h2>
<p><code>cp</code> 命令用于将文件(或目录)拷贝到目的地。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 拷贝单个文件</span>
$ <span class="token function">cp</span> <span class="token builtin class-name">source</span> dest

<span class="token comment"># 拷贝多个文件</span>
$ <span class="token function">cp</span> source1 source2 source3 dest

<span class="token comment"># -i 目的地有同名文件时会提示确认</span>
$ <span class="token function">cp</span> <span class="token parameter variable">-i</span> file1 file2

<span class="token comment"># -r 递归拷贝，将dir1拷贝到dir2，完成后dir2生成一个子目录dir1</span>
<span class="token comment"># dir2如果不存在，将被创建</span>
<span class="token comment"># 拷贝目录时，该参数是必需的</span>
$ <span class="token function">cp</span> <span class="token parameter variable">-r</span> dir1 dir2

<span class="token comment"># -u --update 只拷贝目的地没有的文件，或者比目的地同名文件更新的文件</span>
$ <span class="token function">cp</span> <span class="token parameter variable">-u</span> *.html destination
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.31,words:394},title:"文件操作"},["/linux/bash/archives/file-operation","/linux/bash/archives/file-operation.md"]],["v-2db28a34","/linux/bash/archives/file.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> 文件系统</h1>
<h2> pwd</h2>
<p><code>pwd</code> 命令显示列出当前所在的目录。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">pwd</span>
</code></pre></div><h2> cd</h2>
<p><code>cd</code> 命令用来改变用户所在的目录。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入用户的主目录</span>
$ <span class="token builtin class-name">cd</span>

<span class="token comment"># 进入前一个工作目录</span>
$ <span class="token builtin class-name">cd</span> -

<span class="token comment"># 进入指定用户的主目录</span>
$ <span class="token builtin class-name">cd</span> ~user_name
</code></pre></div>`,r:{minutes:12.22,words:3665},title:"文件系统"},["/linux/bash/archives/file","/linux/bash/archives/file.md"]],["v-4e1e017a","/linux/bash/archives/hardware.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> 硬件操作</h1>
<h2> df</h2>
<p><code>df</code> 命令查看硬盘信息。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">df</span>
Filesystem 1K-blocks Used Available Use% Mounted on
/dev/sda2 <span class="token number">15115452</span> <span class="token number">5012392</span> <span class="token number">9949716</span> <span class="token number">34</span>% /
/dev/sda5 <span class="token number">59631908</span> <span class="token number">26545424</span> <span class="token number">30008432</span> <span class="token number">47</span>% /home
/dev/sda1 <span class="token number">147764</span> <span class="token number">17370</span> <span class="token number">122765</span> <span class="token number">13</span>% /boot
</code></pre></div>`,r:{minutes:4.11,words:1234},title:"硬件操作"},["/linux/bash/archives/hardware","/linux/bash/archives/hardware.md"]],["v-0cdaf63a","/linux/bash/archives/host.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> 主机管理</h1>
<h2> hostname 命令</h2>
<p><code>hostname</code> 命令返回当前服务器的主机名。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">hostname</span>
</code></pre></div>`,r:{minutes:.08,words:23},title:"主机管理"},["/linux/bash/archives/host","/linux/bash/archives/host.md"]],["v-1e6259a0","/linux/bash/archives/named-pipe.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> 命名管道</h1>
<p>在大多数类似 Unix 的操作系统中，有可能创建一种特殊类型的文件，叫做命名管道。命名管道用来在 两个进程之间建立连接，也可以像其它类型的文件一样使用。</p>
<p>命令管道的行为类似于文件，但实际上形成了先入先出(FIFO)的缓冲。和普通(未命令的)管道一样， 数据从一端进入，然后从另一端出现。通过命令管道，有可能像这样设置一些东西:</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>process1 <span class="token operator">&gt;</span> named_pipe
</code></pre></div>`,r:{minutes:1.7,words:509},title:"命名管道"},["/linux/bash/archives/named-pipe","/linux/bash/archives/named-pipe.md"]],["v-3d1375be","/linux/bash/archives/process.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> 进程管理</h1>
<h2> ps</h2>
<p><code>ps</code> 命令用来列出进程信息。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ps</span>
PID TTY           TIME CMD
<span class="token number">5198</span> pts/1    00:00:00 <span class="token function">bash</span>
<span class="token number">10129</span> pts/1   00:00:00 <span class="token function">ps</span>
</code></pre></div>`,r:{minutes:5.28,words:1583},title:"进程管理"},["/linux/bash/archives/process","/linux/bash/archives/process.md"]],["v-04b088f8","/linux/bash/archives/redirection.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> 重定向</h1>
<p>重定向指的是将命令行输出写入指定位置。</p>
<ul>
<li><code>cmd1 | cmd2</code>: Pipe; take standard output of cmd1 as standard input to cmd2.</li>
<li><code>&gt; file</code>: Direct standard output to file.</li>
<li><code>&lt; file</code>: Take standard input from file.</li>
<li><code>&gt;&gt; file</code>: Direct standard output to file; append to file if it already exists.</li>
<li><code>&gt;| file</code>: Force standard output to file even if noclobber is set.</li>
<li><code>n&gt;| file</code>: Force output to file from file descriptor n even if noclobber is set.</li>
<li><code>&lt;&gt; file</code>: Use file as both standard input and standard output.</li>
<li><code>n&lt;&gt; file</code>: Use file as both input and output for file descriptor n.</li>
<li><code>&lt;&lt; label</code>: Here-document; see text.</li>
<li><code>n &gt; file</code>: Direct file descriptor n to file.</li>
<li><code>n &lt; file</code>: Take file descriptor n from file.</li>
<li><code>n &gt;&gt; file</code>: Direct file descriptor n to file; append to file if it already exists.</li>
<li><code>n&gt;&amp;</code>: Duplicate standard output to file descriptor n.</li>
<li><code>n&lt;&amp;</code>: Duplicate standard input from file descriptor n.</li>
<li><code>n&gt;&amp;m</code>: File descriptor &nbsp;n is made to be a copy of the output file descriptor.</li>
<li><code>n&lt;&amp;m</code>: File descriptor &nbsp;n is made to be a copy of the input file descriptor.</li>
<li><code>&amp;&gt;file</code>: Directs standard output and standard error to file.</li>
<li><code>&lt;&amp;-</code>: Close the standard input.</li>
<li><code>&gt;&amp;-</code>: Close the standard output.</li>
<li><code>n&gt;&amp;-</code>: Close the output from file descriptor &nbsp;n.</li>
<li><code>n&lt;&amp;-</code>: Close the input from file descriptor &nbsp;n.</li>
<li><code>n&gt;&amp;word</code>: If &nbsp;n is not specified, the standard output (file descriptor 1) is used. If the digits in word do not specify a file descriptor open for output, a redirection error occurs. As a special case, if n is omitted, and word does not expand to one or more digits, the standard output and standard error are redirected as described previously.</li>
<li><code>n&lt;&amp;word</code>: If word expands to one or more digits, the file descriptor denoted by &nbsp;n is made to be a copy of that file descriptor. If the digits in word do not specify a file descriptor open for input, a redirection error occurs. If word evaluates to -, file descriptor n is closed. If n is not specified, the standard input (file descriptor 0) is used.</li>
<li><code>n&gt;&amp;digit-</code>: Moves the file descriptor digit to file descriptor &nbsp;n, or the standard output (file descriptor 1) if n is not specified.</li>
<li><code>n&lt;&amp;digit-</code>: Moves the file descriptor digit to file descriptor &nbsp;n, or the standard input (file descriptor 0) if n is not specified. digit is closed after being duplicated to n.</li>
</ul>`,r:{minutes:3.05,words:915},title:"重定向"},["/linux/bash/archives/redirection","/linux/bash/archives/redirection.md"]],["v-5c8b77ee","/linux/bash/archives/regex.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> 正则表达式</h1>
<p><code>正则表达式</code>是表达文本模式的方法。</p>
<ul>
<li><code>.</code>: 匹配任何单个字符。</li>
<li><code>?</code>: 上一项是可选的，最多匹配一次。</li>
<li><code>*</code>: 前一项将被匹配零次或多次。</li>
<li><code>+</code>: 前一项将被匹配一次或多次。</li>
<li><code>{N}</code>: 上一项完全匹配 N 次。</li>
<li><code>{N，}</code>: 前一项匹配 N 次或多次。</li>
<li><code>{N，M}</code>: 前一项至少匹配 N 次，但不超过 M 次。</li>
<li><code>--</code>: 表示范围，如果它不是列表中的第一个或最后一个，也不是列表中某个范围的终点。</li>
<li><code>^</code>: 匹配行首的空字符串；也代表不在列表范围内的字符。</li>
<li><code>$</code>: 匹配行尾的空字符串。</li>
<li><code>\\b</code>: 匹配单词边缘的空字符串。</li>
<li><code>\\B</code>: 匹配空字符串，前提是它不在单词的边缘。</li>
<li><code>\\&lt;</code>: 匹配单词开头的空字符串。</li>
<li><code>\\&gt;</code>: 匹配单词末尾的空字符串。</li>
</ul>`,r:{minutes:4.52,words:1355},title:"正则表达式"},["/linux/bash/archives/regex","/linux/bash/archives/regex.md"]],["v-d66a505a","/linux/bash/archives/system.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> 系统信息</h1>
<h2> uname</h2>
<p><code>uname</code> 命令返回当前机器的信息。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 内核的版本</span>
$ <span class="token function">uname</span> <span class="token parameter variable">-r</span>
<span class="token number">3.2</span>.0-24-virtual

<span class="token comment"># CPU 架构</span>
$ <span class="token function">uname</span> <span class="token parameter variable">-m</span>
x86_64
</code></pre></div>`,r:{minutes:.39,words:117},title:"系统信息"},["/linux/bash/archives/system","/linux/bash/archives/system.md"]],["v-0c78dc56","/linux/bash/archives/text.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> 文本处理</h1>
<h2> cat</h2>
<p><code>cat</code> 可以文件的内容，显示在标准输出。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> text1
<span class="token number">1</span> apple
<span class="token number">2</span> pear
<span class="token number">3</span> banana
</code></pre></div>`,r:{minutes:5.9,words:1769},title:"文本处理"},["/linux/bash/archives/text","/linux/bash/archives/text.md"]],["v-39cb0835","/linux/bash/archives/time.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> 时间管理</h1>
<h2> date 命令</h2>
<p><code>date</code> 命令用于输出当前时间</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">date</span>
<span class="token number">2016</span>年 03月 <span class="token number">14</span>日 星期一 <span class="token number">17</span>:32:35 CST
</code></pre></div>`,r:{minutes:1.61,words:482},title:"时间管理"},["/linux/bash/archives/time","/linux/bash/archives/time.md"]],["v-4bd85df7","/linux/bash/archives/user.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> 用户管理</h1>
<h2> id</h2>
<p><code>id</code> 命令用于查看指定用户的用户名和组名。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">id</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">(</span>me<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">(</span>me<span class="token punctuation">)</span> <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">(</span>me<span class="token punctuation">)</span>
</code></pre></div>`,r:{minutes:2.83,words:848},title:"用户管理"},["/linux/bash/archives/user","/linux/bash/archives/user.md"]],["v-4ec49228","/software/comsol/geometry/",{y:"a",d:"2020-05-29T00:00:00.000Z",l:"2020年5月29日",c:["软件"],g:["仿真","COMSOL"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/software/comsol/geometry/view.html" target="blank">浏览几何</a></p>
</li>
<li>
<p><a href="/software/comsol/geometry/build.html" target="blank">构建几何</a></p>
</li>
</ul>
<h2> 官方文档</h2>
<p>视频教程:</p>
<ul>
<li>
<p><a href="https://cn.comsol.com/video/introductory-video-series-on-how-to-build-geometries-in-comsol" target="_blank" rel="noopener noreferrer">入门视频合集: 如何在 COMSOL® 中创建几何结构</a></p>
</li>
<li>
<p><a href="https://cn.comsol.com/video/importing-geometry-files-comsol-multiphysics" target="_blank" rel="noopener noreferrer">在 COMSOL Multiphysics 中导入几何文件</a></p>
</li>
<li>
<p><a href="https://cn.comsol.com/video/identify-geometric-entities-model-selection-list" target="_blank" rel="noopener noreferrer">使用“选择列表”对模型几何实体进行标识</a></p>
</li>
<li>
<p><a href="https://cn.comsol.com/video/form-union-form-assembly-geometry-finalization-methods" target="_blank" rel="noopener noreferrer">几何定型方法: “形成联合体”与“形成装配”</a></p>
</li>
</ul>`,r:{minutes:.77,words:230},title:"几何",i:"geometry"},["/software/comsol/geometry/index.html","/software/comsol/geometry/README.md"]],["v-33854f17","/software/comsol/geometry/build.html",{y:"a",d:"2020-05-29T00:00:00.000Z",l:"2020年5月29日",c:["软件"],g:["仿真","COMSOL"],e:`<h2> 2D 几何</h2>
<p>COMSOL Multiphysics<sup>®</sup> 软件提供了大量的几何操作、工具或功能来创建二维几何结构。软件中内置了可用于模拟常见形状的几何体，用于定义几何尺寸和位置的参数设置，以及可用于构建复杂几何结构的布尔运算、变换与分割几何操作。</p>
<ul>
<li>您可以很轻松的添加圆和矩形对象，也可以使用参数曲线或多边形很轻松的创建您需要的形状。</li>
<li>使用并集和差集这两种布尔运算来创建如圆环形、葫芦的几何结构。</li>
<li>执行复制、阵列和镜像变换等操作来快速创建相同或相似的结合结构。</li>
</ul>
<h2> 将二维图形扩展到三维</h2>`,r:{minutes:5.15,words:1546},title:"几何构建",i:"build"},["/software/comsol/geometry/build","/software/comsol/geometry/build.md"]],["v-dcad9030","/software/comsol/geometry/view.html",{y:"a",d:"2020-05-29T00:00:00.000Z",l:"2020年5月29日",c:["软件"],g:["仿真","COMSOL"],e:`<p>在 COMSOL Multiphysics 中，“图形” 窗口可供您对几何、网格和结果进行可视化。为此，我们需要认识可用于制定模型视图的众多工具和选项。并了解如何使用 “图形” 窗口工具栏按钮。</p>
<p>本节将介绍如何更改视图、在窗口内移动几何、隐藏部分几何元素、以及如何选择几何实体。</p>
`,r:{minutes:3.91,words:1173},title:"几何浏览",i:"view"},["/software/comsol/geometry/view","/software/comsol/geometry/view.md"]],["v-c40faf5e","/software/comsol/mesh/",{y:"a",d:"2020-06-02T00:00:00.000Z",l:"2020年6月2日",c:["软件"],g:["仿真","COMSOL"],e:`<h2> 网格基础</h2>
<ul>
<li><a href="/software/comsol/mesh/intro.html" target="blank">网格划分和细化介绍</a></li>
</ul>
<h3> 内容</h3>
<h4> 剖分方法</h4>
<ul>
<li>物理场控制</li>
<li>用户控制</li>
</ul>
<h4> 剖分程度</h4>
<p>从极粗化到极细化一共九个级别。</p>
<h4> 其他</h4>
<p>可以进行定制。</p>
<h3> 基础</h3>
<p>教程视频:</p>
<ul>
<li>
<p><a href="https://cn.comsol.com/video/building-the-mesh-for-a-model-geometry-in-comsol-multiphysics" target="_blank" rel="noopener noreferrer">在 COMSOL Multiphysics<sup>®</sup> 中为几何模型构建网格</a></p>
</li>
<li>
<p><a href="https://cn.comsol.com/video/meshing-in-comsol-multiphysics-tutorial-cn" target="_blank" rel="noopener noreferrer">在 COMSOL Multiphysics<sup>®</sup> 中剖分网格</a></p>
</li>
</ul>`,r:{minutes:.95,words:284},title:"网格",i:"mesh"},["/software/comsol/mesh/index.html","/software/comsol/mesh/README.md"]],["v-af089604","/software/comsol/mesh/intro.html",{y:"a",d:"2020-06-02T00:00:00.000Z",l:"2020年6月2日",c:["软件"],g:["仿真","COMSOL"],e:`<h2> 有限元网格划分和细化</h2>
<p>基于任何有限元分析模型得到的精度都与所用的有限元网格直接相关。有限元网格用于将 CAD 模型分割为很多较小的域，我们称之为单元，然后在这些单元上求解一组方程，这些方程通过在每个单元上定义的一组多项式函数来近似表示所需的控制方程。随着网格的不断细化，这些单元变得越来越小，从而使求解的结果越来越接近真实解。</p>
<p>网格细化过程是我们验证有限元模型，并对软件、模型和计算结果建立信心的关键步骤。</p>
<h2> 网格细化过程</h2>
<p>通常，我们首先需要了解所研究的物理系统，以及完整描述这一系统的几何结构，才能成功地进行有限元分析。几何结构可以通过 CAD 模型来表示。典型的 CAD 模型能够准确描述研究对象的形状和结构，但通常也包含一些修饰特征或制造细节；事实证明，这些信息往往与有限元建模无关。仿真分析人员应该对 CAD 模型进行一些工程判断，并决定是否可以在网格划分之前移除或简化这些特征和细节。从简单模型开始并逐渐增加复杂性的做法，往往比从复杂模型开始然后进行简化的做法要容易得多。</p>`,r:{minutes:12.93,words:3879},title:"有限元网格划分和细化",i:"creative"},["/software/comsol/mesh/intro","/software/comsol/mesh/intro.md"]],["v-e761606a","/software/tool/terminal/",{y:"a",d:"2021-01-27T00:00:00.000Z",l:"2021年1月27日",e:`<p>Windows Terminal 是一个面向命令行工具和 shell(如命令提示符、PowerShell 和适用于 Linux 的 Windows 子系统 (WSL))用户的新式终端应用程序。</p>
`,r:{minutes:1.16,words:348},title:"Windows Terminal",i:"shell"},["/software/tool/terminal/index.html","/software/tool/terminal/README.md"]],["v-0c4433da","/software/tool/terminal/get-started.html",{y:"a",d:"2021-01-27T00:00:00.000Z",l:"2021年1月27日",e:`<h2> 安装</h2>
<p>您可以通过 <a href="https://aka.ms/terminal" target="_blank" rel="noopener noreferrer">Microsoft Store</a> 进行安装，同样您可以访问 <a href="https://github.com/microsoft/terminal/releases/" target="_blank" rel="noopener noreferrer">GitHub release</a> 下载任意版本可执行文件。</p>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>从 GitHub 安装，终端将不会自动更新为新版本。</p>
</div>`,r:{minutes:5.15,words:1546},title:"快速上手",i:"creative"},["/software/tool/terminal/get-started","/software/tool/terminal/get-started.md"]],["v-dd24d6aa","/software/tool/terminal/settings.html",{y:"a",d:"2021-01-27T00:00:00.000Z",l:"2021年1月27日",e:`<p>配置文件代表着您可以在 Windows Terminal 中配置的不同的命令行环境。默认情况下，每个配置文件使用不同的命令行可执行程序，但是您可以根据自己的喜好，创建任意数量的使用同一可执行程序的配置文件。每个配置文件可以有自己的定制项以帮助您区分它们，并可以自由定制。</p>
<p>可以使用快捷键 <code>Ctrl + Shift + *</code> 来打开对应的配置文件，可使用 <code>Ctrl + ,</code> 打开 settings.json 文件，来进行个性化调整和默认设置更改等设置。</p>
`,r:{minutes:4.01,words:1203},title:"自定义设置",i:"config"},["/software/tool/terminal/settings","/software/tool/terminal/settings.md"]],["v-11ff0409","/software/vscode/guide/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["VS Code"],g:["VS Code","软件"],e:`<ul>
<li>
<p><a href="/software/vscode/guide/basic.html" target="blank">基础介绍</a></p>
</li>
<li>
<p><a href="/software/vscode/guide/customization.html" target="blank">个性化介绍</a></p>
</li>
<li>
<p><a href="/software/vscode/guide/extension.html" target="blank">扩展介绍</a></p>
</li>
<li>
<p><a href="/software/vscode/guide/file.html" target="blank">文件介绍</a></p>
</li>
<li>
<p><a href="/software/vscode/guide/edit.html" target="blank">编辑技巧</a></p>
</li>
<li>
<p><a href="/software/vscode/guide/intellisense.html" target="blank">智能补全</a></p>
</li>
<li>
<p><a href="/software/vscode/guide/git.html" target="blank">Git 支持</a></p>
</li>
<li>
<p><a href="/software/vscode/guide/debug.html" target="blank">调试介绍</a></p>
</li>
<li>
<p><a href="/software/vscode/guide/task.html" target="blank">任务介绍</a></p>
</li>
<li>
<p><a href="/software/vscode/guide/command.html" target="blank">命令行介绍</a></p>
</li>
</ul>`,r:{minutes:.22,words:66},title:"VS Code 指南",i:"guide"},["/software/vscode/guide/index.html","/software/vscode/guide/README.md"]],["v-685e2634","/software/vscode/guide/basic.html",{y:"a",d:"2020-09-18T15:57:02.000Z",c:["VS Code"],g:["VS Code","软件"],e:`<h2> 入门</h2>
<p>打开 <strong>欢迎使用</strong> 页面，开始使用 VS Code 的基础知识。<strong>帮助 &gt; 欢迎</strong></p>
<p></p>
<p>在 <strong>欢迎</strong> 页面的右下角，有一个指向 <strong>交互式游乐场</strong> 的链接，您可以在其中交互式地试用 VS Code 的功能。<strong>帮助 &gt; 交互式游乐场</strong></p>
<p></p>
<h2> 命令面板</h2>
<p>根据您的当前上下文访问所有可用命令。</p>
<p>键盘快捷键: <code>Ctrl + Shift + P</code></p>`,r:{minutes:2.18,words:654},title:"基础内容介绍",i:"module"},["/software/vscode/guide/basic","/software/vscode/guide/basic.md"]],["v-27d31212","/software/vscode/guide/command.html",{y:"a",d:"2020-09-18T15:57:02.000Z",c:["VS Code"],g:["VS Code","软件"],e:`<p>VS Code 具有强大的命令行界面(CLI)，可让您自定义启动编辑器以支持各种情况的方式。</p>
<p>确保 VS Code 可执行文件已经添加到您的环境变量。只需键入 <code>code</code> 即可启动 VS Code。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用 code 打开当前文件夹</span>
code <span class="token builtin class-name">.</span>

<span class="token comment"># 在最近使用面板</span>
code <span class="token parameter variable">-r</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 打开新窗口</span>
code <span class="token parameter variable">-n</span>

<span class="token comment"># 改编当前语言</span>
code <span class="token parameter variable">--locale</span><span class="token operator">=</span>es

<span class="token comment"># 打开文件比较器</span>
code <span class="token parameter variable">--diff</span> <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>

<span class="token comment"># 打开文件并跳转到指定的行(和列)</span>
code <span class="token parameter variable">--goto</span> package.json:10:5

<span class="token comment"># 查看帮助选项</span>
code <span class="token parameter variable">--help</span>

<span class="token comment"># 禁用所有扩展</span>
code --disable-extensions <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.7,words:210},title:"命令行",i:"shell"},["/software/vscode/guide/command","/software/vscode/guide/command.md"]],["v-b5f60ea2","/software/vscode/guide/customization.html",{y:"a",d:"2020-09-18T15:57:02.000Z",c:["VS Code"],g:["VS Code","软件"],e:`<p>您可以做很多事情来个性化 VS Code。</p>
<ul>
<li>改变您的主题</li>
<li>改变您的文件图标</li>
<li>更改键盘快捷键</li>
<li>调整设置</li>
<li>安装扩展</li>
</ul>
<h2> 更改主题</h2>
<p>键盘快捷键: <code>Ctrl + K Ctrl + T</code></p>
<p>您可以从 VS Code 扩展市场中安装更多主题。</p>
<p>此外，您可以安装和更改文件图标主题。</p>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>Mr.Hope 个人推荐 <code>One Dark Pro</code> 主题和 <code>Material Icon Theme</code> 文件图标主题。</p>
<p>您需要从扩展应用应用商店中安装它们。</p>
</div>`,r:{minutes:1.97,words:591},title:"个性化",i:"decorate"},["/software/vscode/guide/customization","/software/vscode/guide/customization.md"]],["v-3dacf32f","/software/vscode/guide/debug.html",{y:"a",d:"2020-09-18T15:57:02.000Z",c:["VS Code"],g:["VS Code","软件"],e:`<h2> 配置调试器</h2>
<p>打开命令面板(<code>Ctrl + Shift + P</code>)，然后选择 <strong>调试: 打开 launch.json</strong>，这将提示您选择与项目(Node.js，Python，C ++等)匹配的环境。这将生成一个 <code>launch.json</code> 文件。Node.js 支持是内置的，其他环境要求安装适当的语言扩展。有关更多详细信息，请参见 <a href="https://code.visualstudio.com/docs/editor/debugging" target="_blank" rel="noopener noreferrer">调试文档</a>。</p>`,r:{minutes:1.19,words:356},title:"调试",i:"debug"},["/software/vscode/guide/debug","/software/vscode/guide/debug.md"]],["v-07497f26","/software/vscode/guide/edit.html",{y:"a",d:"2020-09-18T15:57:02.000Z",c:["VS Code"],g:["VS Code","软件"],e:`<p>这是编辑代码的一些常用功能。如果您不喜欢键盘快捷键，请考虑为旧的编辑器安装键盘映射扩展名。</p>
<h2> 多光标选择</h2>
<p>要在任意位置添加光标，请用鼠标选择一个位置，然后使用 <code>Alt + Click</code>。</p>
<p>要将光标设置在当前位置之上或之下，请使用:</p>
<p>键盘快捷键: <code>Ctrl + Alt + ↑</code> 或 <code>Ctrl + Alt + ↓</code></p>
<p>您可以使用 <code>Ctrl + Shift + L</code> 将附加光标添加到当前选择的所有实例中。</p>
<p>如果不想添加所有当前选中项，则可以使用 <code>Ctrl + D</code> 代替。这只会选择您选择的选中项之后的下一个选中项，因此您可以一个一个地添加选择。</p>`,r:{minutes:3,words:899},title:"编辑技巧",i:"edit"},["/software/vscode/guide/edit","/software/vscode/guide/edit.md"]],["v-82a4977a","/software/vscode/guide/extension.html",{y:"a",d:"2020-09-18T15:57:02.000Z",c:["VS Code"],g:["VS Code","软件"],e:`<p>键盘快捷键: <code>Ctrl + Shift + X</code></p>
<h2> 查找扩展</h2>
<ol>
<li>在 VS Code 应用商店</li>
<li>在 VS Code 侧边栏中的 <strong>扩展</strong> 选项卡</li>
<li>查看扩展建议</li>
<li>社区策划的扩展列表，例如 awesome-vscode。</li>
</ol>
<p></p>
<h2> 安装扩展</h2>
<p>在扩展视图中，您可以通过搜索栏进行搜索，或单击 <strong>更多(...)</strong> 按钮以按安装数量进行过滤和排序。</p>
<h2> 扩展建议</h2>`,r:{minutes:.49,words:147},title:"扩展",i:"plugin"},["/software/vscode/guide/extension","/software/vscode/guide/extension.md"]],["v-280dcef4","/software/vscode/guide/file.html",{y:"a",d:"2020-09-18T15:57:02.000Z",c:["VS Code"],g:["VS Code","软件"],e:`<h2> 切换侧边栏</h2>
<p>键盘快捷键: <code>Ctrl + B</code></p>
<h2> 切换面板</h2>
<p>键盘快捷键: <code>Ctrl + J</code></p>
<h2> Zen 模式</h2>
<p>键盘快捷键: <code>Ctrl + K Z</code></p>
<p>进入无干扰禅宗模式。</p>
<p>按两次 <code>Esc</code> 键退出 Zen 模式。</p>
<h2> 并排编辑</h2>
<p>键盘快捷键: <code>Ctrl + \\</code></p>
<p>您还可以拖放编辑器以创建新的编辑器组，并在组之间移动编辑器。</p>`,r:{minutes:1.66,words:499},title:"文件",i:"folder"},["/software/vscode/guide/file","/software/vscode/guide/file.md"]],["v-31d5af50","/software/vscode/guide/git.html",{y:"a",d:"2020-09-18T15:57:02.000Z",c:["VS Code"],g:["VS Code","软件"],e:`<p>键盘快捷键: <code>Ctrl + Shift + G</code></p>
<p>VS Code 有开箱即用的 Git 集成。您可以从扩展市场中安装其他 SCM 提供程序。本节描述了 Git 集成。</p>
<h2> 差异</h2>
<p>从 <strong>源代码管理</strong> 视图中，选择一个文件以打开差异。</p>
<p></p>
<h3> 视图布局</h3>
<p>差异的默认视图是并排视图。</p>
<p>切换内嵌视图: 点击更多操作右上角(...)按钮，然后选择切换内嵌视图。</p>
<p>如果您喜欢嵌入式视图，可以设置 <code>"diffEditor.renderSideBySide": false</code>。</p>`,r:{minutes:1.8,words:540},title:"Git 集成",i:"git"},["/software/vscode/guide/git","/software/vscode/guide/git.md"]],["v-d7d6dbd6","/software/vscode/guide/intellisense.html",{y:"a",d:"2020-09-18T15:57:02.000Z",c:["VS Code"],g:["VS Code","软件"],e:`<p>使用 <code>Ctrl + Space</code> 触发智能提示组件。</p>
<p></p>
<p>您可以查看可用的方法，参数提示，简短文档等。</p>
<h2> 跳转</h2>
<p>选择一个符号然后输入 <code>Alt + F12</code>，您就可以使用上下文菜单了。</p>
<p></p>
<h2> 跳转到定义</h2>
<p>选择一个符号然后输入 <code>F12</code>，您也可以使用上下文菜单或 <code>Ctrl + Click</code></p>
<p></p>
<p>您可以使用 <strong>转到 &gt; 返回</strong> 命令或快捷键 <code>Alt + ←</code> 来返回您的上个位置。</p>`,r:{minutes:1.8,words:539},title:"智能提示",i:"creative"},["/software/vscode/guide/intellisense","/software/vscode/guide/intellisense.md"]],["v-fd69a6ea","/software/vscode/guide/task.html",{y:"a",d:"2020-09-18T15:57:02.000Z",c:["VS Code"],g:["VS Code","软件"],e:`<h2> 自动检测任务</h2>
<p>从顶层菜单中选择<strong>终端</strong>，运行命令<strong>配置任务</strong>，然后选择您要运行的任务类型。这将生成一个 <code>tasks.json</code> 文件。有关更多详细信息，请参见 <a href="https://code.visualstudio.com/docs/editor/debugging" target="_blank" rel="noopener noreferrer">任务文档</a>。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// See &lt;https://go.microsoft.com/fwlink/?LinkId=733558&gt;</span>
  <span class="token comment">// for the documentation about the tasks.json format</span>
  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"2.0.0"</span><span class="token punctuation">,</span>
  <span class="token property">"tasks"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"npm"</span><span class="token punctuation">,</span>
      <span class="token property">"script"</span><span class="token operator">:</span> <span class="token string">"install"</span><span class="token punctuation">,</span>
      <span class="token property">"group"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"kind"</span><span class="token operator">:</span> <span class="token string">"build"</span><span class="token punctuation">,</span>
        <span class="token property">"isDefault"</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.85,words:556},title:"任务执行器",i:"operate"},["/software/vscode/guide/task","/software/vscode/guide/task.md"]],["v-091db9b0","/code/language/dart/samples/",{y:"a",d:"2020-05-30T00:00:00.000Z",l:"2020年5月30日",c:["dart"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/code/language/dart/samples/samples.html" target="blank">案例</a></p>
</li>
<li>
<p><a href="/code/language/dart/samples/cheatsheet.html" target="blank">概要介绍</a></p>
</li>
<li>
<p><a href="/code/language/dart/samples/iterable.html" target="blank">遍历</a></p>
</li>
</ul>`,r:{minutes:.09,words:27},title:"dart 快速入门",i:"creative"},["/code/language/dart/samples/index.html","/code/language/dart/samples/README.md"]],["v-5e47c7c5","/code/language/dart/samples/cheatsheet.html",{y:"a",d:"2020-05-30T00:00:00.000Z",l:"2020年5月30日",c:["dart"],e:`<p>Dart 语言旨在让其他语言的编码人员易于学习，但具有一些独特功能。</p>
`,r:{minutes:6.88,words:2063},title:"dart 概要",i:"form"},["/code/language/dart/samples/cheatsheet","/code/language/dart/samples/cheatsheet.md"]],["v-4ae7b17f","/code/language/dart/samples/iterable.html",{y:"a",d:"2020-05-30T00:00:00.000Z",l:"2020年5月30日",c:["dart"],e:`<p>本节教您如何使用实现 <a href="https://api.dart.dev/stable/dart-core/Iterable-class.html" target="_blank" rel="noopener noreferrer">Iterable</a> 类的集合 - 例如 <a href="https://api.dart.dev/stable/dart-core/List-class.html" target="_blank" rel="noopener noreferrer">List</a> 和 <a href="https://api.dart.dev/stable/dart-core/Set-class.html" target="_blank" rel="noopener noreferrer">Set</a>。可迭代对象是各种 Dart 应用程序的基本构建块，即使您没有注意到，您可能已经在使用它们。</p>
<p>本节包含以下内容:</p>
<ul>
<li>如何读取 Iterable 的元素。</li>
<li>如何检查 Iterable 的元素是否满足条件。</li>
<li>如何过滤 Iterable 的内容。</li>
<li>如何将 Iterable 的内容映射到其他值。</li>
</ul>
`,r:{minutes:8.64,words:2591},title:"可迭代的集合",i:"refresh"},["/code/language/dart/samples/iterable","/code/language/dart/samples/iterable.md"]],["v-7c7974d0","/code/language/dart/samples/samples.html",{y:"a",d:"2020-05-30T00:00:00.000Z",l:"2020年5月30日",c:["dart"],e:`<p>该章内容并不全面，只是为喜欢通过示例学习的人们简要介绍了该语言。您可能还需要查看语言和库导览，或 <a href="/code/language/dart/samples/cheatsheet.html" target="blank">Dart 概要</a>。</p>
`,r:{minutes:5.12,words:1535},title:"dart 语言范例",i:"discover"},["/code/language/dart/samples/samples","/code/language/dart/samples/samples.md"]],["v-580ce442","/code/language/js/browser/",{y:"a",d:"2019-10-15T00:00:00.000Z",l:"2019年10月15日",c:["JavaScript"],e:`<h2> 相关文档</h2>
<ul>
<li>
<p><a href="/code/language/js/browser/intro.html" target="blank">浏览器介绍</a></p>
</li>
<li>
<p><a href="/code/language/js/browser/browser-object.html" target="blank">浏览器对象</a></p>
</li>
<li>
<p><a href="/code/language/js/browser/dom.html" target="blank">操作 DOM</a></p>
</li>
<li>
<p><a href="/code/language/js/browser/form.html" target="blank">操作表单</a></p>
</li>
<li>
<p><a href="/code/language/js/browser/file.html" target="blank">操作文件</a></p>
</li>
<li>
<p><a href="/code/language/js/browser/ajax.html" target="blank">Ajax</a></p>
</li>
<li>
<p><a href="/code/language/js/browser/promise.html" target="blank">Promise</a></p>
</li>
<li>
<p><a href="/code/language/js/browser/canvas.html" target="blank">Canvas</a></p>
</li>
</ul>`,r:{minutes:.16,words:49},title:"浏览器",i:"chrome"},["/code/language/js/browser/index.html","/code/language/js/browser/README.md"]],["v-4157008c","/code/language/js/browser/ajax.html",{y:"a",d:"2019-10-18T00:00:00.000Z",l:"2019年10月18日",c:["JavaScript"],e:`<p>Ajax 不是 JavaScript 的规范，它只是一个哥们“发明”的缩写: Asynchronous JavaScript and XML，意思就是用 JavaScript 执行异步网络请求。</p>
`,r:{minutes:7.42,words:2227},title:"AJAX",i:"ajax"},["/code/language/js/browser/ajax","/code/language/js/browser/ajax.md"]],["v-e636c4d4","/code/language/js/browser/browser-object.html",{y:"a",d:"2019-10-16T00:00:00.000Z",l:"2019年10月16日",c:["JavaScript"],e:`<p>JavaScript 可以获取浏览器提供的很多对象，并进行操作。</p>
`,r:{minutes:4.56,words:1369},title:"浏览器对象",i:"object"},["/code/language/js/browser/browser-object","/code/language/js/browser/browser-object.md"]],["v-3fe5c342","/code/language/js/browser/canvas.html",{y:"a",d:"2019-10-19T00:00:00.000Z",l:"2019年10月19日",c:["JavaScript"],e:`<p><code>Canvas</code> 是 HTML5 新增的组件，它就像一块幕布，可以用 JavaScript 在上面绘制各种图表、动画等。</p>
`,r:{minutes:2.76,words:829},title:"Canvas",i:"stack"},["/code/language/js/browser/canvas","/code/language/js/browser/canvas.md"]],["v-37881894","/code/language/js/browser/dom.html",{y:"a",d:"2019-10-16T00:00:00.000Z",l:"2019年10月16日",c:["JavaScript"],e:`<p>由于 HTML 文档被浏览器解析后就是一棵 DOM 树，要改变 HTML 的结构，就需要通过 JavaScript 来操作 DOM。</p>
<p>始终记住 DOM 是一个树形结构。操作一个 DOM 节点实际上就是这么几个操作:</p>
<ul>
<li>
<p>更新: 更新该 DOM 节点的内容，相当于更新了该 DOM 节点表示的 HTML 的内容；</p>
</li>
<li>
<p>遍历: 遍历该 DOM 节点下的子节点，以便进行进一步操作；</p>
</li>
<li>
<p>添加: 在该 DOM 节点下新增一个子节点，相当于动态增加了一个 HTML 节点；</p>
</li>
<li>
<p>删除: 将该节点从 HTML 中删除，相当于删掉了该 DOM 节点的内容以及它包含的所有子节点。</p>
</li>
</ul>
`,r:{minutes:6.8,words:2040},title:"操作 DOM",i:"tree"},["/code/language/js/browser/dom","/code/language/js/browser/dom.md"]],["v-fb7c1444","/code/language/js/browser/file.html",{y:"a",d:"2019-10-17T00:00:00.000Z",l:"2019年10月17日",c:["JavaScript"],e:`<p>在 HTML 表单中，可以上传文件的唯一控件就是 <code>&lt;input type="file"&gt;</code>。</p>
`,r:{minutes:3,words:900},title:"操作文件",i:"file"},["/code/language/js/browser/file","/code/language/js/browser/file.md"]],["v-3c952b96","/code/language/js/browser/form.html",{y:"a",d:"2019-10-17T00:00:00.000Z",l:"2019年10月17日",c:["JavaScript"],e:`<p>用 JavaScript 操作表单和操作 DOM 是类似的，因为表单本身也是 DOM 树。</p>
<p>不过表单的输入框、下拉框等可以接收用户输入，所以用 JavaScript 来操作表单，可以获得用户输入的内容，或者对一个输入框设置新的内容。</p>
`,r:{minutes:3.99,words:1198},title:"操作表单",i:"form"},["/code/language/js/browser/form","/code/language/js/browser/form.md"]],["v-3ac3fde8","/code/language/js/browser/intro.html",{y:"a",d:"2019-10-15T00:00:00.000Z",l:"2019年10月15日",c:["JavaScript"],e:`<p>由于 JavaScript 的出现就是为了能在浏览器中运行，所以，浏览器自然是 JavaScript 开发者必须要关注的。</p>
`,r:{minutes:1.95,words:584},title:"浏览器介绍",i:"info"},["/code/language/js/browser/intro","/code/language/js/browser/intro.md"]],["v-5b96b7fd","/code/language/js/browser/promise.html",{y:"a",d:"2019-10-18T00:00:00.000Z",l:"2019年10月18日",c:["JavaScript"],e:`<p>在 JavaScript 的世界中，所有代码都是单线程执行的。</p>
<p>由于这个“缺陷”，导致 JavaScript 的所有网络操作，浏览器事件，都必须是异步执行。异步执行可以用回调函数实现:</p>
`,r:{minutes:5.16,words:1548},title:"Promise",i:"any"},["/code/language/js/browser/promise","/code/language/js/browser/promise.md"]],["v-7af69fbf","/code/language/js/es6/",{y:"a",a:"阮一峰",d:"2019-10-20T00:00:00.000Z",l:"2019年10月20日",c:["JavaScript"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/code/language/js/es6/intro.html" target="blank">ECMAScript 6 简介</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/let.html" target="blank">let 和 const 命令</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/destructuring.html" target="blank">变量的解构赋值</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/string.html" target="blank">字符串的扩展</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/regex.html" target="blank">正则的扩展</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/number.html" target="blank">数值的扩展</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/function.html" target="blank">函数的扩展</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/array.html" target="blank">数组的扩展</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/object.html" target="blank">对象的扩展</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/symbol.html" target="blank">Symbol</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/set-map.html" target="blank">Set 和 Map 数据结构</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/proxy.html" target="blank">Proxy</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/reflect.html" target="blank">Reflect</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/promise.html" target="blank">Promise 对象</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/iterator.html" target="blank">Iterator 和 for...of 循</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/generator.html" target="blank">Generator 函数的语法</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/generator-async.html" target="blank">Generator 函数的异步应用</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/async.html" target="blank">async 函数</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/class.html" target="blank">Class 的基本语法</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/class-extends.html" target="blank">Class 的继承</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/decorator.html" target="blank">Decorator</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/module.html" target="blank">Module 的语法</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/module-loader.html" target="blank">Module 的加载实现</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/style.html" target="blank">编程风格</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/spec.html" target="blank">读懂规格</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/arraybuffer.html" target="blank">ArrayBuffer</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/proposals.html" target="blank">最新提案</a></p>
</li>
<li>
<p><a href="/code/language/js/es6/reference.html" target="blank">参考链接</a></p>
</li>
</ul>`,r:{minutes:.69,words:206},title:"es6 入门",i:"es6"},["/code/language/js/es6/index.html","/code/language/js/es6/README.md"]],["v-d3bec9c2","/code/language/js/es6/array.html",{y:"a",a:"阮一峰",d:"2019-10-21T00:00:00.000Z",l:"2019年10月21日",c:["JavaScript"],e:`<h2> 扩展运算符</h2>
<h3> 含义</h3>
<p>扩展运算符(spread)是三个点(<code>...</code>)。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// 1 2 3</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// 1 2 3 4 5</span>

<span class="token punctuation">[</span><span class="token operator">...</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token comment">// [&lt;div&gt;, &lt;div&gt;, &lt;div&gt;]</span>
</code></pre></div>`,r:{minutes:19.31,words:5792},title:"数组的扩展",i:"array"},["/code/language/js/es6/array","/code/language/js/es6/array.md"]],["v-5220625f","/code/language/js/es6/arraybuffer.html",{y:"a",a:"阮一峰",d:"2019-10-25T00:00:00.000Z",l:"2019年10月25日",c:["JavaScript"],e:`<p><code>ArrayBuffer</code> 对象、<code>TypedArray</code> 视图和 <code>DataView</code> 视图是 JavaScript 操作二进制数据的一个接口。这些对象早就存在，属于独立的规格(2011 年 2 月发布)，ES6 将它们纳入了 ECMAScript 规格，并且增加了新的方法。它们都是以数组的语法处理二进制数据，所以统称为二进制数组。</p>
`,r:{minutes:36.24,words:10871},title:"ArrayBuffer",i:"rank"},["/code/language/js/es6/arraybuffer","/code/language/js/es6/arraybuffer.md"]],["v-e898ae48","/code/language/js/es6/async.html",{y:"a",a:"阮一峰",d:"2019-10-23T00:00:00.000Z",l:"2019年10月23日",c:["JavaScript"],e:`<p>ES2017 标准引入了 async 函数，使得异步操作变得更加方便。</p>
<p>Async 函数是什么? 一句话，它就是 Generator 函数的语法糖。</p>
`,r:{minutes:22.17,words:6652},title:"async 函数",i:"async"},["/code/language/js/es6/async","/code/language/js/es6/async.md"]],["v-e7d0ffd8","/code/language/js/es6/class-extends.html",{y:"a",a:"阮一峰",d:"2019-10-23T00:00:00.000Z",l:"2019年10月23日",c:["JavaScript"],e:`<h1> Class 的继承</h1>
<h2> 简介</h2>
<p>Class 可以通过 <code>extends</code> 关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ColorPoint</span> <span class="token keyword">extends</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:13.56,words:4069},title:"Class 的继承",i:"extend"},["/code/language/js/es6/class-extends","/code/language/js/es6/class-extends.md"]],["v-65d00140","/code/language/js/es6/class.html",{y:"a",a:"阮一峰",d:"2019-10-23T00:00:00.000Z",l:"2019年10月23日",c:["JavaScript"],e:`<h1> Class 的基本语法</h1>
<h2> 简介</h2>
<p>JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Point</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Point</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"("</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token string">", "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+</span> <span class="token string">")"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:16.46,words:4938},title:"Class 的基本语法",i:"class"},["/code/language/js/es6/class","/code/language/js/es6/class.md"]],["v-01199afd","/code/language/js/es6/decorator.html",{y:"a",a:"阮一峰",d:"2019-10-23T00:00:00.000Z",l:"2019年10月23日",c:["JavaScript"],e:`<h2> 类的修饰</h2>
<p>许多面向对象的语言都有修饰器(Decorator)函数，用来修改类的行为。目前，有一个<a href="https://github.com/tc39/proposal-decorators" target="_blank" rel="noopener noreferrer">提案</a>将这项功能，引入了 ECMAScript。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@testable
<span class="token keyword">class</span> <span class="token class-name">MyTestableClass</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">testable</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  target<span class="token punctuation">.</span>isTestable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

MyTestableClass<span class="token punctuation">.</span>isTestable<span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:11.35,words:3406},title:"修饰器",i:"at"},["/code/language/js/es6/decorator","/code/language/js/es6/decorator.md"]],["v-d9eeb42e","/code/language/js/es6/destructuring.html",{y:"a",a:"阮一峰",d:"2019-10-21T00:00:00.000Z",l:"2019年10月21日",c:["JavaScript"],e:`<h1> 变量的解构赋值</h1>
<h2> 数组的解构赋值</h2>
<h3> 基本用法</h3>
<p>ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构(Destructuring)。</p>
<p>以前，为变量赋值，只能直接指定值。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre></div>`,r:{minutes:13.08,words:3923},title:"变量的解构赋值",i:"structure"},["/code/language/js/es6/destructuring","/code/language/js/es6/destructuring.md"]],["v-d486c4a0","/code/language/js/es6/fp.html",{y:"a",a:"阮一峰",d:"2019-10-21T00:00:00.000Z",l:"2019年10月21日",c:["JavaScript"],e:`<h1> 函数式编程</h1>
<p>JavaScript 语言从一诞生，就具有函数式编程的烙印。它将函数作为一种独立的数据类型，与其他数据类型处于完全平等的地位。在 JavaScript 语言中，您可以采用面向对象编程，也可以采用函数式编程。有人甚至说，JavaScript 是有史以来第一种被大规模采用的函数式编程语言。</p>
<p>ES6 的种种新增功能，使得函数式编程变得更方便、更强大。本章介绍 ES6 如何进行函数式编程。</p>
<h2> 柯里化</h2>
<p>柯里化(currying)指的是将一个多参数的函数拆分成一系列函数，每个拆分后的函数都只接受一个参数(unary)。</p>`,r:{minutes:4.37,words:1312},title:"函数式编程",i:"shell"},["/code/language/js/es6/fp","/code/language/js/es6/fp.md"]],["v-412da2a2","/code/language/js/es6/function.html",{y:"a",a:"阮一峰",d:"2019-10-21T00:00:00.000Z",l:"2019年10月21日",c:["JavaScript"],e:`<h1> 函数的扩展</h1>
<h2> 函数参数的默认值</h2>
<h3> 基本用法</h3>
<p>ES6 之前，不能直接为函数的参数指定默认值，只能采用变通的方法。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  y <span class="token operator">=</span> y <span class="token operator">||</span> <span class="token string">"World"</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello World</span>
<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">,</span> <span class="token string">"China"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello China</span>
<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello World</span>
</code></pre></div>`,r:{minutes:30.39,words:9117},title:"函数的扩展",i:"function"},["/code/language/js/es6/function","/code/language/js/es6/function.md"]],["v-1e32d554","/code/language/js/es6/generator-async.html",{y:"a",a:"阮一峰",d:"2019-10-23T00:00:00.000Z",l:"2019年10月23日",c:["JavaScript"],e:`<p>异步编程对 JavaScript 语言太重要。JavaScript 语言的执行环境是“单线程”的，如果没有异步编程，根本没法用，非卡死不可。本章主要介绍 Generator 函数如何完成异步操作。</p>
<h2> 传统方法</h2>
<p>ES6 诞生以前，异步编程的方法，大概有下面四种。</p>
<ul>
<li>回调函数</li>
<li>事件监听</li>
<li>发布/订阅</li>
<li>Promise 对象</li>
</ul>
<p>Generator 函数将 JavaScript 异步编程带入了一个全新的阶段。</p>
<h2> 基本概念</h2>
<h3> 异步</h3>`,r:{minutes:19.91,words:5974},title:"Generator 异步应用",i:"asynchronous"},["/code/language/js/es6/generator-async","/code/language/js/es6/generator-async.md"]],["v-2a661765","/code/language/js/es6/generator.html",{y:"a",a:"阮一峰",d:"2019-10-23T00:00:00.000Z",l:"2019年10月23日",c:["JavaScript"],e:`<h2> 简介</h2>
<h3> 基本概念</h3>
<p>Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。本章详细介绍 Generator 函数的语法和 API，它的异步编程应用请看 <a href="/code/language/js/es6/generator-async.html" target="blank">Generator 函数的异步应用</a> 一章。</p>
<p>Generator 函数有多种理解角度。语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。</p>
<p>执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。</p>`,r:{minutes:35.34,words:10603},title:"Generator",i:"cycle"},["/code/language/js/es6/generator","/code/language/js/es6/generator.md"]],["v-29563aec","/code/language/js/es6/intro.html",{y:"a",a:"阮一峰",d:"2019-10-20T00:00:00.000Z",l:"2019年10月20日",c:["JavaScript"],e:`<p>ECMAScript 6.0(以下简称 ES6)是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。</p>
`,r:{minutes:16.67,words:5e3},title:"ES6 简介",i:"info"},["/code/language/js/es6/intro","/code/language/js/es6/intro.md"]],["v-d4970868","/code/language/js/es6/iterator.html",{y:"a",a:"阮一峰",d:"2019-10-23T00:00:00.000Z",l:"2019年10月23日",c:["JavaScript"],e:`<h1> Iterator 和 for...of 循环</h1>
<h2> Iterator(遍历器)的概念</h2>
<p>JavaScript 原有的表示“集合”的数据结构，主要是数组(<code>Array</code>)和对象(<code>Object</code>)，ES6 又添加了 <code>Map</code> 和 <code>Set</code>。这样就有了四种数据集合，用户还可以组合使用它们，定义自己的数据结构，比如数组的成员是 <code>Map</code>，<code>Map</code> 的成员是对象。这样就需要一种统一的接口机制，来处理所有不同的数据结构。</p>`,r:{minutes:18.41,words:5523},title:"Iterator 和 for...of 循环",i:"loop"},["/code/language/js/es6/iterator","/code/language/js/es6/iterator.md"]],["v-8113af46","/code/language/js/es6/let.html",{y:"a",a:"阮一峰",d:"2019-10-21T00:00:00.000Z",l:"2019年10月21日",c:["JavaScript"],e:`<h1> let 和 const 命令</h1>
<h2> let 命令</h2>
<h3> 基本用法</h3>
<p>ES6 新增了 <code>let</code> 命令，用来声明变量。它的用法类似于 <code>var</code>，但是所声明的变量，只在 <code>let</code> 命令所在的代码块内有效。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

a<span class="token punctuation">;</span> <span class="token comment">// ReferenceError: a is not defined.</span>
b<span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre></div>`,r:{minutes:17.13,words:5139},title:"let 和 const 命令",i:"notice"},["/code/language/js/es6/let","/code/language/js/es6/let.md"]],["v-5244cc12","/code/language/js/es6/mixin.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["JavaScript"],e:`<h1> Mixin</h1>
<p>JavaScript 语言的设计是单一继承，即子类只能继承一个父类，不允许继承多个父类。这种设计保证了对象继承的层次结构是树状的，而不是复杂的<a href="https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem" target="_blank" rel="noopener noreferrer">网状结构</a>。</p>
<p>但是，这大大降低了编程的灵活性。因为实际开发中，有时不可避免，子类需要继承多个父类。举例来说，“猫”可以继承“哺乳类动物”，也可以继承“宠物”。</p>`,r:{minutes:3.03,words:910},title:"Mixin",i:"merge"},["/code/language/js/es6/mixin","/code/language/js/es6/mixin.md"]],["v-2fc52e78","/code/language/js/es6/module-loader.html",{y:"a",a:"阮一峰",d:"2019-10-23T00:00:00.000Z",l:"2019年10月23日",c:["JavaScript"],e:`<p>上一章介绍了模块的语法，本章介绍如何在浏览器和 Node.js 之中加载 ES6 模块，以及实际开发中经常遇到的一些问题(比如循环加载)。</p>
<h2> 浏览器加载</h2>
<h3> 传统方法</h3>
<p>HTML 网页中，浏览器通过 <code>&lt;script&gt;</code> 标签加载 JavaScript 脚本。</p>
<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 页面内嵌的脚本 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>application/javascript<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// module code</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 外部脚本 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>application/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>path/to/myModule.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,r:{minutes:20.55,words:6164},title:"Module 的加载实现",i:"load"},["/code/language/js/es6/module-loader","/code/language/js/es6/module-loader.md"]],["v-0ec9be64","/code/language/js/es6/module.html",{y:"a",a:"阮一峰",d:"2019-10-23T00:00:00.000Z",l:"2019年10月23日",c:["JavaScript"],e:`<h2> 概述</h2>
<p>历史上，JavaScript 一直没有模块(module)体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。其他语言都有这项功能，比如 Ruby 的 <code>require</code>、Python 的 <code>import</code>，甚至就连 CSS 都有 <code>@import</code>，但是 JavaScript 任何这方面的支持都没有，这对开发大型的、复杂的项目形成了巨大障碍。</p>
<p>在 ES6 之前，社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器。ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。</p>`,r:{minutes:19.44,words:5832},title:"Module 的语法",i:"module"},["/code/language/js/es6/module","/code/language/js/es6/module.md"]],["v-6bcd6e11","/code/language/js/es6/number.html",{y:"a",a:"阮一峰",d:"2019-10-21T00:00:00.000Z",l:"2019年10月21日",c:["JavaScript"],e:`<h2> 二进制和八进制表示法</h2>
<p>ES6 提供了二进制和八进制数值的新的写法，分别用前缀 <code>0b</code> (或 <code>0B</code>) 和 <code>0o</code> (或 <code>0O</code> )表示。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">0b111110111</span> <span class="token operator">===</span> <span class="token number">503</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token number">0o767</span> <span class="token operator">===</span> <span class="token number">503</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div>`,r:{minutes:12.81,words:3842},title:"数值的扩展",i:"number"},["/code/language/js/es6/number","/code/language/js/es6/number.md"]],["v-189ba04a","/code/language/js/es6/object.html",{y:"a",a:"阮一峰",d:"2019-10-21T00:00:00.000Z",l:"2019年10月21日",c:["JavaScript"],e:`<h1> 对象的扩展</h1>
<h2> 属性的简洁表示法</h2>
<p>ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">"bar"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span><span class="token punctuation">;</span>
baz<span class="token punctuation">;</span> <span class="token comment">// {foo: "bar"}</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> foo <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,r:{minutes:26.96,words:8088},title:"对象的扩展",i:"object"},["/code/language/js/es6/object","/code/language/js/es6/object.md"]],["v-55b00c46","/code/language/js/es6/promise.html",{y:"a",a:"阮一峰",d:"2019-10-23T00:00:00.000Z",l:"2019年10月23日",c:["JavaScript"],e:`<h1> Promise 对象</h1>
<h2> Promise 的含义</h2>
<p>Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了 <code>Promise</code> 对象。</p>
<p>所谓 <code>Promise</code>，简单说就是一个容器，里面保存着某个未来才会结束的事件(通常是一个异步操作)的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。</p>`,r:{minutes:23.75,words:7124},title:"Promise 对象",i:"promise"},["/code/language/js/es6/promise","/code/language/js/es6/promise.md"]],["v-3ac3b992","/code/language/js/es6/proposals.html",{y:"a",a:"阮一峰",d:"2019-10-25T00:00:00.000Z",l:"2019年10月25日",c:["JavaScript"],e:`<p>本章介绍一些尚未进入标准、但很有希望的最新提案。</p>
`,r:{minutes:16.7,words:5009},title:"最新提案",i:"proposal"},["/code/language/js/es6/proposals","/code/language/js/es6/proposals.md"]],["v-6f7a082a","/code/language/js/es6/proxy.html",{y:"a",a:"阮一峰",d:"2019-10-23T00:00:00.000Z",l:"2019年10月23日",c:["JavaScript"],e:`<p>Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”(meta programming)，即对编程语言进行编程。</p>
<p>Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。</p>
`,r:{minutes:20.62,words:6185},title:"Proxy",i:"proxy"},["/code/language/js/es6/proxy","/code/language/js/es6/proxy.md"]],["v-1b9d0426","/code/language/js/es6/reference.html",{y:"a",a:"阮一峰",d:"2019-10-25T00:00:00.000Z",l:"2019年10月25日",c:["JavaScript"],e:`<h1> 参考链接</h1>
<h2> 官方文件</h2>
<ul>
<li><a href="https://www.ecma-international.org/ecma-262/6.0/index.html" target="_blank" rel="noopener noreferrer">ECMAScript® 2015 Language Specification</a>: ECMAScript 2015 规格</li>
<li><a href="https://www.ecma-international.org/ecma-262/7.0/" target="_blank" rel="noopener noreferrer">ECMAScript® 2016 Language Specification</a>: ECMAScript 2016 规格</li>
<li><a href="https://tc39.github.io/ecma262/" target="_blank" rel="noopener noreferrer">ECMAScript® 2017 Language Specification</a>: ECMAScript 2017 规格(草案)</li>
<li><a href="https://github.com/tc39/ecma262" target="_blank" rel="noopener noreferrer">ECMAScript Current Proposals</a>: ECMAScript 当前的所有提案</li>
<li><a href="https://github.com/tc39/proposals" target="_blank" rel="noopener noreferrer">ECMAScript Active Proposals</a>: 已经进入正式流程的提案</li>
<li><a href="https://github.com/hemanth/es-next" target="_blank" rel="noopener noreferrer">ECMAScript proposals</a>: 从阶段 0 到阶段 4 的所有提案列表</li>
<li><a href="https://github.com/tc39/agendas" target="_blank" rel="noopener noreferrer">TC39 meeting agendas</a>: TC39 委员会历年的会议记录</li>
<li><a href="https://ecmascript-daily.github.io/" target="_blank" rel="noopener noreferrer">ECMAScript Daily</a>: TC39 委员会的动态</li>
<li><a href="https://tc39.github.io/process-document/" target="_blank" rel="noopener noreferrer">The TC39 Process</a>: 提案进入正式规格的流程</li>
<li><a href="https://thefeedbackloop.xyz/tc39-a-process-sketch-stages-0-and-1/" target="_blank" rel="noopener noreferrer">TC39: A Process Sketch, Stages 0 and 1</a>: Stage 0 和 Stage 1 的含义</li>
<li><a href="https://thefeedbackloop.xyz/tc39-process-sketch-stage-2/" target="_blank" rel="noopener noreferrer">TC39 Process Sketch, Stage 2</a>: Stage 2 的含义</li>
</ul>`,r:{minutes:13.51,words:4052},title:"参考链接",i:"quote"},["/code/language/js/es6/reference","/code/language/js/es6/reference.md"]],["v-55c5117b","/code/language/js/es6/reflect.html",{y:"a",a:"阮一峰",d:"2019-10-23T00:00:00.000Z",l:"2019年10月23日",c:["JavaScript"],e:`<h2> 概述</h2>
<p><code>Reflect</code> 对象与 <code>Proxy</code> 对象一样，也是 ES6 为了操作对象而提供的新 API。<code>Reflect</code> 对象的设计目的有这样几个。</p>
<p>(1) 将 <code>Object</code> 对象的一些明显属于语言内部的方法(比如 <code>Object.defineProperty</code>)，放到 <code>Reflect</code> 对象上。现阶段，某些方法同时在 <code>Object</code> 和 <code>Reflect</code> 对象上部署，未来的新方法将只部署在 <code>Reflect</code> 对象上。也就是说，从 <code>Reflect</code> 对象上可以拿到语言内部的方法。</p>`,r:{minutes:8.72,words:2617},title:"Reflect",i:"operate"},["/code/language/js/es6/reflect","/code/language/js/es6/reflect.md"]],["v-ba82bc1e","/code/language/js/es6/regex.html",{y:"a",a:"阮一峰",d:"2019-10-21T00:00:00.000Z",l:"2019年10月21日",c:["JavaScript"],e:`<h1> 正则的扩展</h1>
<h2> <code>RegExp</code> 构造函数</h2>
<p>在 ES5 中，<code>RegExp</code> 构造函数的参数有两种情况。</p>
<p>第一种情况是，参数是字符串，这时第二个参数表示正则表达式的修饰符(flag)。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> regex <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">"xyz"</span><span class="token punctuation">,</span> <span class="token string">"i"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 等价于</span>
<span class="token keyword">var</span> regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">xyz</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">;</span>
</code></pre></div>`,r:{minutes:16.18,words:4854},title:"正则的扩展",i:"regexp"},["/code/language/js/es6/regex","/code/language/js/es6/regex.md"]],["v-0b0d2347","/code/language/js/es6/set-map.html",{y:"a",a:"阮一峰",d:"2019-10-23T00:00:00.000Z",l:"2019年10月23日",c:["JavaScript"],e:`<h1> Set 和 Map 数据结构</h1>
<h2> Set</h2>
<h3> 基本用法</h3>
<p>ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。</p>
<p>Set 本身是一个构造函数，用来生成 Set 数据结构。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 2 3 5 4</span>
</code></pre></div>`,r:{minutes:23.45,words:7035},title:"Set 和 Map 数据结构",i:"set"},["/code/language/js/es6/set-map","/code/language/js/es6/set-map.md"]],["v-7953f4a6","/code/language/js/es6/simd.html",{y:"a",a:"阮一峰",d:"2020-06-03T17:08:34.000Z",c:["JavaScript"],e:`<h1> SIMD</h1>
<h2> 概述</h2>
<p>SIMD(发音<code>/sim-dee/</code>)是“Single Instruction/Multiple Data”的缩写，意为“单指令，多数据”。它是 JavaScript 操作 CPU 对应指令的接口，您可以看做这是一种不同的运算执行模式。与它相对的是 SISD(“Single Instruction/Single Data”)，即“单指令，单数据”。</p>
<p>SIMD 的含义是使用一个指令，完成多个数据的运算；SISD 的含义是使用一个指令，完成单个数据的运算，这是 JavaScript 的默认运算模式。显而易见，SIMD 的执行效率要高于 SISD，所以被广泛用于 3D 图形运算、物理模拟等运算量超大的项目之中。</p>`,r:{minutes:17.62,words:5286},title:"SIMD",i:"process"},["/code/language/js/es6/simd","/code/language/js/es6/simd.md"]],["v-1cd0e5c2","/code/language/js/es6/spec.html",{y:"a",a:"阮一峰",d:"2019-10-25T00:00:00.000Z",l:"2019年10月25日",c:["JavaScript"],e:`<h1> 读懂 ECMAScript 规格</h1>
<h2> 概述</h2>
<p>规格文件是计算机语言的官方标准，详细描述语法规则和实现方法。</p>
<p>一般来说，没有必要阅读规格，除非您要写编译器。因为规格写得非常抽象和精炼，又缺乏实例，不容易理解，而且对于解决实际的应用问题，帮助不大。但是，如果您遇到疑难的语法问题，实在找不到答案，这时可以去查看规格文件，了解语言标准是怎么说的。规格是解决问题的“最后一招”。</p>
<p>这对 JavaScript 语言很有必要。因为它的使用场景复杂，语法规则不统一，例外很多，各种运行环境的行为不一致，导致奇怪的语法问题层出不穷，任何语法书都不可能囊括所有情况。查看规格，不失为一种解决语法问题的最可靠、最权威的终极方法。</p>`,r:{minutes:12.45,words:3734},title:"读懂 ECMAScript 规格",i:"creative"},["/code/language/js/es6/spec","/code/language/js/es6/spec.md"]],["v-3466b36e","/code/language/js/es6/string.html",{y:"a",a:"阮一峰",d:"2019-10-21T00:00:00.000Z",l:"2019年10月21日",c:["JavaScript"],e:`<p>ES6 加强了对 Unicode 的支持，并且扩展了字符串对象。</p>
`,r:{minutes:19.09,words:5727},title:"字符串的扩展",i:"string"},["/code/language/js/es6/string","/code/language/js/es6/string.md"]],["v-32817272","/code/language/js/es6/style.html",{y:"a",a:"阮一峰",d:"2019-10-23T00:00:00.000Z",l:"2019年10月23日",c:["JavaScript"],e:`<h1> 编程风格</h1>
<p>本章探讨如何将 ES6 的新语法，运用到编码实践之中，与传统的 JavaScript 语法结合在一起，写出合理的、易于阅读和维护的代码。</p>
<p>多家公司和组织已经公开了它们的风格规范，下面的内容主要参考了 <a href="https://github.com/airbnb/javascript" target="_blank" rel="noopener noreferrer">Airbnb</a> 公司的 JavaScript 风格规范。</p>
<h2> 块级作用域</h2>
<ol>
<li>
<p><code>let</code> 取代 <code>var</code></p>
<p>ES6 提出了两个新的声明变量的命令: <code>let</code> 和 <code>const</code>。其中，<code>let</code> 完全可以取代 <code>var</code>，因为两者语义相同，而且 <code>let</code> 没有副作用。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">"use strict"</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面代码如果用 <code>var</code> 替代 <code>let</code>，实际上就声明了两个全局变量，这显然不是本意。变量应该只在其声明的代码块内有效，<code>var</code> 命令做不到这一点。</p>
<p><code>var</code> 命令存在变量提升效用，<code>let</code> 命令没有这个问题。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">"use strict"</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>
  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面代码如果使用 <code>var</code> 替代 <code>let</code>，<code>console.log</code> 那一行就不会报错，而是会输出 <code>undefined</code>，因为变量声明提升到代码块的头部。这违反了变量先声明后使用的原则。</p>
<p>所以，建议不再使用 <code>var</code> 命令，而是使用 <code>let</code> 命令取代。</p>
</li>
<li>
<p>全局常量和线程安全</p>
<p>在 <code>let</code> 和 <code>const</code> 之间，建议优先使用 <code>const</code>，尤其是在全局环境，不应该设置变量，只应设置常量。</p>
<p><code>const</code> 优于 <code>let</code> 有几个原因。一个是 <code>const</code> 可以提醒阅读程序的人，这个变量不应该改变；另一个是 <code>const</code> 比较符合函数式编程思想，运算不改变值，只是新建值，而且这样也有利于将来的分布式运算；最后一个原因是 JavaScript 编译器会对 <code>const</code> 进行优化，所以多使用 <code>const</code>，有利于提高程序的运行效率，也就是说 <code>let</code> 和 <code>const</code> 的本质区别，其实是编译器内部的处理不同。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
  c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token comment">// best</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>const</code> 声明常量还有两个好处，一是阅读代码的人立刻会意识到不应该修改这个值，二是防止了无意间修改变量值所导致的错误。</p>
<p>所有的函数都应该设置为常量。</p>
<p>长远来看，JavaScript 可能会有多线程的实现(比如 Intel 公司的 River Trail 那一类的项目)，这时 <code>let</code> 表示的变量，只应出现在单线程运行的代码中，不能是多线程共享的，这样有利于保证线程安全。</p>
</li>
</ol>`,r:{minutes:8.08,words:2424},title:"编程风格",i:"style"},["/code/language/js/es6/style","/code/language/js/es6/style.md"]],["v-2c2bed22","/code/language/js/es6/symbol.html",{y:"a",a:"阮一峰",d:"2019-10-21T00:00:00.000Z",l:"2019年10月21日",c:["JavaScript"],e:`<h1> Symbol</h1>
<h2> 概述</h2>
<p>ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，您使用了一个他人提供的对象，但又想为这个对象添加新的方法(mixin 模式)，新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入 <code>Symbol</code> 的原因。</p>
<p>ES6 引入了一种新的原始数据类型 <code>Symbol</code>，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是: <code>undefined</code>、<code>null</code>、布尔值(Boolean)、字符串(String)、数值(Number)、对象(Object)。</p>`,r:{minutes:16.65,words:4995},title:"Symbol",i:"symbol"},["/code/language/js/es6/symbol","/code/language/js/es6/symbol.md"]],["v-4613a302","/code/language/js/function/",{y:"a",d:"2019-10-01T00:00:00.000Z",l:"2019年10月1日",c:["JavaScript"],e:`<h2> 基础部分</h2>
<ul>
<li>
<p><a href="/code/language/js/function/intro.html" target="blank">函数介绍</a></p>
</li>
<li>
<p><a href="/code/language/js/function/declare.html" target="blank">函数声明</a></p>
</li>
<li>
<p><a href="/code/language/js/function/call.html" target="blank">函数调用</a></p>
</li>
<li>
<p><a href="/code/language/js/function/scope.html" target="blank">函数作用域</a></p>
</li>
<li>
<p><a href="/code/language/js/function/destructuring.html" target="blank">解构赋值</a></p>
</li>
<li>
<p><a href="/code/language/js/function/this.html" target="blank">this 的指向</a></p>
</li>
<li>
<p><a href="/code/language/js/function/arrow-function.html" target="blank">箭头函数</a></p>
</li>
</ul>`,r:{minutes:.24,words:73},title:"函数",i:"function"},["/code/language/js/function/index.html","/code/language/js/function/README.md"]],["v-7ba4ff44","/code/language/js/function/arrow-function.html",{y:"a",d:"2019-10-03T00:00:00.000Z",l:"2019年10月3日",c:["JavaScript"],e:`<p>ES6 标准新增了一种新的函数: Arrow Function (箭头函数)。</p>
<p>为什么叫 Arrow Function ? 因为它的定义用的就是一个箭头:</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
</code></pre></div>`,r:{minutes:1.89,words:567},title:"箭头函数",i:"arrow"},["/code/language/js/function/arrow-function","/code/language/js/function/arrow-function.md"]],["v-797b419c","/code/language/js/function/call.html",{y:"a",d:"2019-10-02T00:00:00.000Z",l:"2019年10月2日",c:["JavaScript"],e:`<p>调用函数时，要使用圆括号运算符。圆括号之中，可以加入函数的参数。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">abs</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 10</span>
<span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 9</span>
</code></pre></div>`,r:{minutes:.97,words:290},title:"函数的调用",i:"call"},["/code/language/js/function/call","/code/language/js/function/call.md"]],["v-02684b7d","/code/language/js/function/closure.html",{y:"a",d:"2019-10-07T00:00:00.000Z",l:"2019年10月7日",c:["JavaScript"],e:`<h2> 函数作为返回值</h2>
<p>高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回。</p>
<p>我们来实现一个对 Array 的求和。通常情况下，求和的函数是这样定义的:</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 15</span>
</code></pre></div>`,r:{minutes:5.62,words:1687},title:"闭包",i:"lock"},["/code/language/js/function/closure","/code/language/js/function/closure.md"]],["v-58f135ae","/code/language/js/function/declare.html",{y:"a",d:"2019-10-01T00:00:00.000Z",l:"2019年10月1日",c:["JavaScript"],e:`<p>JavaScript 有三种声明函数的方法。</p>
`,r:{minutes:11.74,words:3523},title:"函数的声明",i:"notice"},["/code/language/js/function/declare","/code/language/js/function/declare.md"]],["v-556bf6ae","/code/language/js/function/destructuring.html",{y:"a",d:"2019-10-03T00:00:00.000Z",l:"2019年10月3日",c:["JavaScript"],e:`<p>从 ES6 开始，JavaScript 引入了解构赋值，可以同时对一组变量进行赋值。</p>
`,r:{minutes:3.78,words:1135},title:"解构赋值",i:"structure"},["/code/language/js/function/destructuring","/code/language/js/function/destructuring.md"]],["v-88b653b6","/code/language/js/function/generator.html",{y:"a",d:"2019-10-07T00:00:00.000Z",l:"2019年10月7日",c:["JavaScript"],e:`<p><code>generator</code> (生成器)是 ES6 标准引入的新的数据类型。一个 <code>generator</code> 看上去像一个函数，但可以返回多次。</p>
<p>ES6 定义 <code>generator</code> 标准的哥们借鉴了 Python 的 generator 的概念和语法，如果您对 Python 的 generator 很熟悉，那么 ES6 的 generator 就是小菜一碟了。</p>
`,r:{minutes:3.55,words:1065},title:"generator",i:"cycle"},["/code/language/js/function/generator","/code/language/js/function/generator.md"]],["v-43034483","/code/language/js/function/higher-order-function.html",{y:"a",d:"2019-10-05T00:00:00.000Z",l:"2019年10月5日",c:["JavaScript"],e:`<p>高阶函数英文叫 Higher-order function。</p>
<p>JavaScript 的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。</p>
`,r:{minutes:.78,words:235},title:"高阶函数",i:"advance"},["/code/language/js/function/higher-order-function","/code/language/js/function/higher-order-function.md"]],["v-417b4ca8","/code/language/js/function/intro.html",{y:"a",d:"2019-10-01T00:00:00.000Z",l:"2019年10月1日",c:["JavaScript"],e:`<p>函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。</p>
`,r:{minutes:1.7,words:511},title:"函数介绍",i:"info"},["/code/language/js/function/intro","/code/language/js/function/intro.md"]],["v-754a14ed","/code/language/js/function/map-and-reduce.html",{y:"a",d:"2019-10-05T00:00:00.000Z",l:"2019年10月5日",c:["JavaScript"],e:`<p>如果您读过 Google 的那篇大名鼎鼎的论文 <a href="https://research.google.com/archive/mapreduce.html" target="_blank" rel="noopener noreferrer">“MapReduce: Simplified Data Processing on Large Clusters”</a>(要翻墙)，您就能大概明白 map/reduce 的概念。</p>
`,r:{minutes:5.96,words:1789},title:"map & reduce",i:"map"},["/code/language/js/function/map-and-reduce","/code/language/js/function/map-and-reduce.md"]],["v-1029f0b9","/code/language/js/function/method.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["JavaScript"],e:`<h2> name 属性</h2>
<p>函数的 <code>name</code> 属性返回函数的名字。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
f1<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// "f1"</span>
</code></pre></div>`,r:{minutes:1.78,words:535},title:"函数的属性和方法",i:"list"},["/code/language/js/function/method","/code/language/js/function/method.md"]],["v-ee259a78","/code/language/js/function/scope.html",{y:"a",d:"2019-10-02T00:00:00.000Z",l:"2019年10月2日",c:["JavaScript"],e:`<h2> 变量作用域</h2>
<p>请看 <a href="/code/language/js/es6/let.html" target="blank">let 命令</a></p>
<h2> 函数作用域</h2>
<h3> 定义</h3>
<p>作用域(scope)指的是变量存在的范围。在 ES5 的规范中，JavaScript 只有两种作用域: 一种是全局作用域，变量在整个程序中一直存在，所有地方都可以读取；另一种是函数作用域，变量只在函数内部存在。ES6 又新增了块级作用域，本教程不涉及。</p>
<p>对于顶层函数来说，函数外部声明的变量就是全局变量(global variable)，它可以在函数内部读取。</p>`,r:{minutes:3.65,words:1094},title:"函数作用域",i:"locate"},["/code/language/js/function/scope","/code/language/js/function/scope.md"]],["v-d323d548","/code/language/js/function/this.html",{y:"a",d:"2019-10-03T00:00:00.000Z",l:"2019年10月3日",c:["JavaScript"],e:`<p>在一个对象中绑定函数，称为这个对象的方法。</p>
<p>在 JavaScript 中，对象的定义是这样的:</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"小明"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1990</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,r:{minutes:3.89,words:1168},title:"this 的指向",i:"context"},["/code/language/js/function/this","/code/language/js/function/this.md"]],["v-c928e2ea","/code/language/js/guide/",{y:"a",d:"2019-09-14T00:00:00.000Z",l:"2019年9月14日",c:["JavaScript"],e:`<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>本部分将带您尽快进入 JavaScript 的世界。</p>
</div>
`,r:{minutes:.4,words:120},title:"快速上手",i:"creative"},["/code/language/js/guide/index.html","/code/language/js/guide/README.md"]],["v-0bfb0a2a","/code/language/js/guide/array.html",{y:"a",d:"2019-09-16T00:00:00.000Z",l:"2019年9月16日",c:["JavaScript"],g:["快速上手"],e:`<p>本文对 JavaScript 中数组的创建、访问、操作进行了简要的介绍。</p>
`,r:{minutes:5.31,words:1592},title:"数组",i:"array"},["/code/language/js/guide/array","/code/language/js/guide/array.md"]],["v-7de37888","/code/language/js/guide/boolean.html",{y:"a",d:"2019-09-15T00:00:00.000Z",l:"2019年9月15日",c:["JavaScript"],g:["快速上手"],e:`<p>布尔值代表“真”和“假”两个状态。“真”用关键字 <code>true</code> 表示，“假”用关键字 <code>false</code> 表示。布尔值只有这两个值。</p>
`,r:{minutes:3.2,words:960},title:"布尔值",i:"boolean"},["/code/language/js/guide/boolean","/code/language/js/guide/boolean.md"]],["v-293c8be9","/code/language/js/guide/condition.html",{y:"a",d:"2019-09-16T00:00:00.000Z",l:"2019年9月16日",c:["JavaScript"],g:["快速上手"],e:`<p>JavaScript 提供 <code>if</code> 结构和 <code>switch</code> 结构，完成条件判断，即只有满足预设的条件，才会执行相应的语句。</p>
`,r:{minutes:6.04,words:1811},title:"条件判断",i:"condition"},["/code/language/js/guide/condition","/code/language/js/guide/condition.md"]],["v-a4a26144","/code/language/js/guide/data-structure.html",{y:"a",d:"2019-09-15T00:00:00.000Z",l:"2019年9月15日",c:["JavaScript"],g:["快速上手"],e:`<p>JavaScript 语言的每一个值，都属于某一种数据类型。JavaScript 的数据类型，共有六种。</p>
<ul>
<li>数值 (number): 整数和小数(比如 <code>1</code> 和 <code>3.14</code>)</li>
<li>字符串 (string): 文本(比如 <code>Hello World</code>)。</li>
<li>布尔值 (boolean): 表示真伪的两个特殊值，即 <code>true</code> (真) 和 <code>false</code> (假)</li>
<li><code>undefined</code>: 表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值</li>
<li><code>null</code>: 表示空值，即此处的值为空。</li>
<li>对象 (object): 各种值组成的集合。</li>
</ul>
`,r:{minutes:2.79,words:838},title:"数据类型",i:"type"},["/code/language/js/guide/data-structure","/code/language/js/guide/data-structure.md"]],["v-58215d54","/code/language/js/guide/exercise.html",{y:"a",d:"2019-09-18T00:00:00.000Z",l:"2019年9月18日",c:["JavaScript"],g:["快速上手"],e:`<p>在初步进入 JavaScript 的世界后，实战是十分重要的。本章是一些经典的案例，可以进行总结与测试。</p>
`,r:{minutes:9.07,words:2721},title:"实战",i:"exercise"},["/code/language/js/guide/exercise","/code/language/js/guide/exercise.md"]],["v-a92fc154","/code/language/js/guide/function.html",{y:"a",d:"2019-09-17T00:00:00.000Z",l:"2019年9月17日",c:["JavaScript"],g:["快速上手"],e:`<p>函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。</p>
<p>基本上所有的高级语言都支持函数，JavaScript 也不例外。JavaScript 的函数不但是“头等公民”，而且可以像变量一样使用，具有非常强大的抽象能力。</p>
`,r:{minutes:3.25,words:974},title:"函数",i:"info"},["/code/language/js/guide/function","/code/language/js/guide/function.md"]],["v-068af29a","/code/language/js/guide/get-started.html",{y:"a",d:"2019-09-14T00:00:00.000Z",l:"2019年9月14日",c:["JavaScript"],g:["快速上手"],e:`<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>因为 JavaScript 是一门编程语言，不再是 HTML 和 CSS 这种看得见摸得着的东西，所以我们从如何引入、运行并调试开始讲起。</p>
</div>
`,r:{minutes:4.25,words:1274},title:"快速上手",i:"creative"},["/code/language/js/guide/get-started","/code/language/js/guide/get-started.md"]],["v-24519f9d","/code/language/js/guide/grammar.html",{y:"a",d:"2019-09-14T00:00:00.000Z",l:"2019年9月14日",c:["JavaScript"],g:["快速上手"],e:`<p>本章简单介绍 JavaScript 中语句，区块和注释的概念。</p>
`,r:{minutes:4.19,words:1256},title:"基本语法",i:"quote"},["/code/language/js/guide/grammar","/code/language/js/guide/grammar.md"]],["v-058fc208","/code/language/js/guide/iterable.html",{y:"a",d:"2019-09-19T00:00:00.000Z",l:"2019年9月19日",c:["JavaScript"],e:`<p>本章对 JavaScript 的可遍历数据结构及如何遍历做一些介绍。</p>
`,r:{minutes:2.28,words:683},title:"遍历",i:"refresh"},["/code/language/js/guide/iterable","/code/language/js/guide/iterable.md"]],["v-927cc2ec","/code/language/js/guide/loop.html",{y:"a",d:"2019-09-16T00:00:00.000Z",l:"2019年9月16日",c:["JavaScript"],g:["快速上手"],e:`<p>循环语句用于重复执行某个操作，它有多种形式，JavaScript 的循环有两种: <code>while</code> 循环和 <code>for</code> 循环。</p>
`,r:{minutes:6.58,words:1974},title:"循环",i:"loop"},["/code/language/js/guide/loop","/code/language/js/guide/loop.md"]],["v-19e36b6e","/code/language/js/guide/map-and-set.html",{y:"a",d:"2019-09-19T00:00:00.000Z",l:"2019年9月19日",c:["JavaScript"],e:`<p>ES6 新引入的 Map 与 Set 是对数组和对象欠缺功能的一种补充。</p>
`,r:{minutes:2.29,words:686},title:"Map 和 Set",i:"map"},["/code/language/js/guide/map-and-set","/code/language/js/guide/map-and-set.md"]],["v-0c0c498f","/code/language/js/guide/object.html",{y:"a",d:"2019-09-17T00:00:00.000Z",l:"2019年9月17日",c:["JavaScript"],g:["快速上手"],e:`<p>JavaScript 的对象是一种无序的集合数据类型，它由若干键值对组成。</p>
<p>JavaScript 用一个 <code>{...}</code> 表示一个对象，键值对以 <code>xxx: xxx</code> 形式申明，用 <code>,</code> 隔开。</p>
`,r:{minutes:2.57,words:770},title:"对象",i:"object"},["/code/language/js/guide/object","/code/language/js/guide/object.md"]],["v-03b28006","/code/language/js/guide/string.html",{y:"a",d:"2019-09-16T00:00:00.000Z",l:"2019年9月16日",c:["JavaScript"],g:["快速上手"],e:`<p>JavaScript 的字符串就是用 <code>''</code> 或 <code>""</code> 括起来的字符表示。</p>
`,r:{minutes:2.73,words:818},title:"字符串",i:"string"},["/code/language/js/guide/string","/code/language/js/guide/string.md"]],["v-fe8f719c","/code/language/js/guide/variable.html",{y:"a",d:"2019-09-15T00:00:00.000Z",l:"2019年9月15日",c:["JavaScript"],g:["快速上手"],e:`<p>变量的概念基本上和初中代数的方程变量是一致的，只是在计算机程序中，变量不仅可以是数字，还可以是任意数据类型。</p>
`,r:{minutes:5.92,words:1777},title:"变量",i:"variable"},["/code/language/js/guide/variable","/code/language/js/guide/variable.md"]],["v-c3105dca","/code/language/js/intro/",{y:"a",d:"2019-09-13T00:00:00.000Z",l:"2019年9月13日",c:["JavaScript"],e:`<div class="custom-container info">
<p class="custom-container-title">JavaScript 语言是什么</p>
<p>JavaScript 是一种轻量级的脚本语言。所谓“脚本语言” (script language)，指的是它不具备开发操作系统的能力，而是只用来编写控制其他大型应用程序(比如浏览器)的“脚本”。</p>
<p>JavaScript 也是一种嵌入式 (embedded) 语言。它本身提供的核心语法不算很多，只能用来做一些数学和逻辑运算。JavaScript 本身不提供任何与 I/O (输入/输出)相关的 API，都要靠宿主环境(host)提供，所以 JavaScript 只合适嵌入更大型的应用程序环境，去调用宿主环境提供的底层 API。</p>
</div>
`,r:{minutes:9.34,words:2801},title:"JavaScript 简介",i:"info"},["/code/language/js/intro/index.html","/code/language/js/intro/README.md"]],["v-4c6d1960","/code/language/js/intro/history.html",{y:"a",d:"2019-09-13T00:00:00.000Z",l:"2019年9月13日",c:["JavaScript"],g:["介绍"],e:`<p>本文介绍 JavaScript 的产生原因和发展历史、</p>
`,r:{minutes:19.1,words:5730},title:"JavaScript 历史",i:"time"},["/code/language/js/intro/history","/code/language/js/intro/history.md"]],["v-71e8640e","/code/language/js/object/JSON.html",{y:"a",d:"2019-10-14T00:00:00.000Z",l:"2019年10月14日",c:["JavaScript"],e:`<p><code>JSON</code> 是 <code>JavaScript Object Notation</code> 的缩写，它是一种数据交换格式。</p>
`,r:{minutes:3.37,words:1012},title:"JSON",i:"json"},["/code/language/js/object/JSON","/code/language/js/object/JSON.md"]],["v-58da95f8","/code/language/js/object/",{y:"a",d:"2019-10-08T00:00:00.000Z",l:"2019年10月8日",c:["JavaScript"],e:`<p>在 JavaScript 的世界里，一切都是对象。</p>
`,r:{minutes:.25,words:74},title:"对象",i:"object"},["/code/language/js/object/index.html","/code/language/js/object/README.md"]],["v-54277b4e","/code/language/js/object/class.html",{y:"a",d:"2019-10-10T00:00:00.000Z",l:"2019年10月10日",c:["JavaScript"],e:`<p>在上面的章节中我们看到了 JavaScript 的对象模型是基于原型实现的，特点是简单，缺点是理解起来比传统的类－实例模型要困难，最大的缺点是继承的实现需要编写大量代码，并且需要正确实现原型链。</p>
<p>有没有更简单的写法? 有!</p>
<p>新的关键字 <code>class</code> 从 ES6 开始正式被引入到 JavaScript 中。<code>class</code> 的目的就是让定义类更简单。</p>
`,r:{minutes:1.96,words:587},title:"class 继承",i:"class"},["/code/language/js/object/class","/code/language/js/object/class.md"]],["v-341b5c65","/code/language/js/object/create.html",{y:"a",d:"2019-10-08T00:00:00.000Z",l:"2019年10月8日",c:["JavaScript"],e:`<p>JavaScript 对每个创建的对象都会设置一个原型，指向它的原型对象。</p>
`,r:{minutes:4.47,words:1342},title:"创建对象",i:"add"},["/code/language/js/object/create","/code/language/js/object/create.md"]],["v-50d58ef3","/code/language/js/object/date.html",{y:"a",d:"2019-10-11T00:00:00.000Z",l:"2019年10月11日",c:["JavaScript"],e:`<p>在 JavaScript 中，<code>Date</code> 对象用来表示日期和时间。</p>
`,r:{minutes:2.64,words:792},title:"Date",i:"date"},["/code/language/js/object/date","/code/language/js/object/date.md"]],["v-280a6107","/code/language/js/object/extend.html",{y:"a",d:"2019-10-10T00:00:00.000Z",l:"2019年10月10日",c:["JavaScript"],e:`<p>在传统的基于 Class 的语言如 Java、C++ 中，继承的本质是扩展一个已有的 Class，并生成新的 Subclass。</p>
<p>由于这类语言严格区分类和实例，继承实际上是类型的扩展。但是，JavaScript 由于采用原型继承，我们无法直接扩展一个 Class，因为根本不存在 Class 这种类型。</p>
`,r:{minutes:2.66,words:797},title:"原型继承",i:"extend"},["/code/language/js/object/extend","/code/language/js/object/extend.md"]],["v-322a7de5","/code/language/js/object/intro.html",{y:"a",d:"2019-10-08T00:00:00.000Z",l:"2019年10月8日",c:["JavaScript"],e:`<p>在 JavaScript 的世界里，一切都是对象。</p>
`,r:{minutes:3.15,words:946},title:"对象及原型简介",i:"object"},["/code/language/js/object/intro","/code/language/js/object/intro.md"]],["v-380d4898","/code/language/js/object/regExp.html",{y:"a",d:"2019-10-13T00:00:00.000Z",l:"2019年10月13日",c:["JavaScript"],e:`<p>字符串是编程时涉及到的最多的一种数据结构，对字符串进行操作的需求几乎无处不在。比如判断一个字符串是否是合法的 Email 地址，虽然可以编程提取 <code>@</code> 前后的子串，再分别判断是否是单词和域名，但这样做不但麻烦，而且代码难以复用。</p>
`,r:{minutes:7.23,words:2168},title:"RegExp",i:"regexp"},["/code/language/js/object/regExp","/code/language/js/object/regExp.md"]],["v-5d8cafd7","/code/language/js/object/wrap.html",{y:"a",d:"2019-10-11T00:00:00.000Z",l:"2019年10月11日",c:["JavaScript"],e:`<p>除了类型外，JavaScript 还提供了包装对象，熟悉 Java 就会了解 <code>int</code> 和 <code>Integer</code> 的关系。</p>
<p><code>number</code>、<code>boolean</code> 和 <code>string</code> 都有包装对象。没错，在 JavaScript 中，字符串也区分 <code>string</code> 类型和它的包装类型。包装对象用 <code>new</code> 创建:</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123,生成了新的包装类型</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true,生成了新的包装类型</span>
<span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"str"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 'str',生成了新的包装类型</span>
</code></pre></div>`,r:{minutes:1.85,words:556},title:"包装对象",i:"wrap"},["/code/language/js/object/wrap","/code/language/js/object/wrap.md"]],["v-745f48d0","/code/language/js/operators/",{y:"a",d:"2019-09-26T00:00:00.000Z",l:"2019年9月26日",c:["JavaScript"],e:`<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>二进制位运算符章节使用较少，无需阅读。</p>
</div>
<h2> 目录</h2>
<ul>
<li>
<p><a href="/code/language/js/operators/arithmetic.html" target="blank">算术运算符</a></p>
</li>
<li>
<p><a href="/code/language/js/operators/comparison.html" target="blank">比较运算符</a></p>
</li>
<li>
<p><a href="/code/language/js/operators/boolean.html" target="blank">布尔运算符</a></p>
</li>
<li>
<p><a href="/code/language/js/operators/bit.html" target="blank">二进制位运算符</a> </p>
</li>
<li>
<p><a href="/code/language/js/operators/priority.html" target="blank">其他运算符，运算顺序</a></p>
</li>
</ul>`,r:{minutes:.25,words:75},title:"运算符",i:"symbol"},["/code/language/js/operators/index.html","/code/language/js/operators/README.md"]],["v-091ae3d7","/code/language/js/operators/arithmetic.html",{y:"a",d:"2019-09-26T00:00:00.000Z",l:"2019年9月26日",c:["JavaScript"],e:`<p>运算符是处理数据的基本方法，用来从现有的值得到新的值。JavaScript 提供了多种运算符，覆盖了所有主要的运算。</p>
`,r:{minutes:7.26,words:2179},title:"算术运算符",i:"calculate"},["/code/language/js/operators/arithmetic","/code/language/js/operators/arithmetic.md"]],["v-dd97b0f8","/code/language/js/operators/bit.html",{y:"a",d:"2019-09-28T00:00:00.000Z",l:"2019年9月28日",c:["JavaScript"],e:`<p>二进制位运算符用于直接对二进制位进行计算，一共有 7 个。</p>
<ul>
<li><strong>二进制或运算符</strong>(or): 符号为 <code>|</code>，表示若两个二进制位都为 <code>0</code>，则结果为 <code>0</code>，否则为 <code>1</code>。</li>
<li><strong>二进制与运算符</strong>(and): 符号为 <code>&amp;</code>，表示若两个二进制位都为 1，则结果为 1，否则为 0。</li>
<li><strong>二进制否运算符</strong>(not): 符号为 <code>~</code>，表示对一个二进制位取反。</li>
<li><strong>异或运算符</strong>(xor): 符号为 <code>^</code>，表示若两个二进制位不相同，则结果为 1，否则为 0。</li>
<li><strong>左移运算符</strong>(left shift): 符号为 <code>&lt;&lt;</code>，详见下文解释。</li>
<li><strong>右移运算符</strong>(right shift): 符号为 <code>&gt;&gt;</code>，详见下文解释。</li>
<li><strong>头部补零的右移运算符</strong>(zero filled right shift): 符号为 <code>&gt;&gt;&gt;</code>，详见下文解释。</li>
</ul>
`,r:{minutes:9.36,words:2808},title:"二进制位运算符",i:"bit"},["/code/language/js/operators/bit","/code/language/js/operators/bit.md"]],["v-7e4ee549","/code/language/js/operators/boolean.html",{y:"a",d:"2019-09-28T00:00:00.000Z",l:"2019年9月28日",c:["JavaScript"],e:`<p>布尔运算符用于将表达式转为布尔值，一共包含四个运算符。</p>
<ul>
<li>取反运算符: <code>!</code></li>
<li>且运算符: <code>&amp;&amp;</code></li>
<li>或运算符: <code>||</code></li>
<li>三元运算符: <code>?:</code></li>
</ul>
`,r:{minutes:4.65,words:1395},title:"布尔运算符",i:"boolean"},["/code/language/js/operators/boolean","/code/language/js/operators/boolean.md"]],["v-c1f11850","/code/language/js/operators/comparison.html",{y:"a",d:"2019-09-26T00:00:00.000Z",l:"2019年9月26日",c:["JavaScript"],e:`<p>JavaScript 一共提供了 8 个比较运算符。</p>
<ul>
<li><code>&gt;</code> 大于运算符</li>
<li><code>&lt;</code> 小于运算符</li>
<li><code>&lt;=</code> 小于或等于运算符</li>
<li><code>&gt;=</code> 大于或等于运算符</li>
<li><code>==</code> 相等运算符</li>
<li><code>===</code> 严格相等运算符</li>
<li><code>!=</code> 不相等运算符</li>
<li><code>!==</code> 严格不相等运算符</li>
</ul>
<p>这八个比较运算符分成两类: 相等比较和非相等比较。两者的规则是不一样的，对于非相等的比较，算法是先看两个运算子是否都是字符串，如果是的，就按照字典顺序比较(实际上是比较 Unicode 码点)；否则，将两个运算子都转成数值，再比较数值的大小。</p>
`,r:{minutes:7.32,words:2196},title:"比较运算符",i:"compare"},["/code/language/js/operators/comparison","/code/language/js/operators/comparison.md"]],["v-4dfa691d","/code/language/js/operators/priority.html",{y:"a",d:"2019-09-30T00:00:00.000Z",l:"2019年9月30日",c:["JavaScript"],e:`<h2> void 运算符</h2>
<p><code>void</code> 运算符的作用是执行一个表达式，然后不返回任何值，或者说返回 <code>undefined</code>。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
<span class="token keyword">void</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre></div>`,r:{minutes:4.7,words:1411},title:"其他运算符与运算顺序",i:"more"},["/code/language/js/operators/priority","/code/language/js/operators/priority.md"]],["v-9c53bea4","/code/language/js/types/",{y:"a",d:"2019-09-20T00:00:00.000Z",l:"2019年9月20日",c:["JavaScript"],e:`<p>本章节是对数据类型的系统介绍。由于此章节的部分内容已经在 <a href="/code/language/js/guide/" target="blank">快速上手</a> 涉及，部分内容有重复。</p>
`,r:{minutes:.29,words:87},title:"数据类型",i:"type"},["/code/language/js/types/index.html","/code/language/js/types/README.md"]],["v-5d22fd4e","/code/language/js/types/array.html",{y:"a",d:"2019-09-25T00:00:00.000Z",l:"2019年9月25日",c:["JavaScript"],e:`<p>数组(array)是按次序排列的一组值。每个值的位置都有编号(从 0 开始)，整个数组用方括号表示。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div>`,r:{minutes:10.33,words:3099},title:"数组",i:"array"},["/code/language/js/types/array","/code/language/js/types/array.md"]],["v-43d08d42","/code/language/js/types/boolean.html",{y:"a",d:"2019-09-21T00:00:00.000Z",l:"2019年9月21日",c:["JavaScript"],e:`<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>此教程与快速上手章节中的 <a href="/code/language/js/guide/boolean.html" target="blank">布尔值介绍</a> 完全相同。</p>
</div>
`,r:{minutes:3.26,words:977},title:"布尔值",i:"boolean"},["/code/language/js/types/boolean","/code/language/js/types/boolean.md"]],["v-2f8d5e13","/code/language/js/types/function.html",{y:"a",d:"2019-09-23T00:00:00.000Z",l:"2019年9月23日",c:["JavaScript"],e:`<h2> 闭包</h2>
<p>闭包(closure)是 JavaScript 语言的一个难点，也是它的特色，很多高级应用都要依靠闭包实现。</p>
<p>理解闭包，首先必须理解变量作用域。前面提到，JavaScript 有两种作用域: 全局作用域和函数作用域。函数内部可以直接读取全局变量。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token number">999</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 999</span>
</code></pre></div>`,r:{minutes:8.66,words:2598},title:"函数",i:"function"},["/code/language/js/types/function","/code/language/js/types/function.md"]],["v-747e149f","/code/language/js/types/general.html",{y:"a",d:"2019-09-20T00:00:00.000Z",l:"2019年9月20日",c:["JavaScript"],e:`<p>JavaScript 语言的每一个值，都属于某一种数据类型。</p>
`,r:{minutes:2.89,words:866},title:"数据类型概述",i:"info"},["/code/language/js/types/general","/code/language/js/types/general.md"]],["v-eb21e1be","/code/language/js/types/null-undefined.html",{y:"a",d:"2019-09-21T00:00:00.000Z",l:"2019年9月21日",c:["JavaScript"],e:`<h2> 概述</h2>
<p><code>null</code> 与 <code>undefined</code> 都可以表示“没有”，含义非常相似。将一个变量赋值为 <code>undefined</code> 或 <code>null</code>，老实说，语法效果几乎没区别。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token comment">// 或者</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre></div>`,r:{minutes:2.18,words:655},title:"null 和 undefined",i:"null"},["/code/language/js/types/null-undefined","/code/language/js/types/null-undefined.md"]],["v-f5d15c7c","/code/language/js/types/number.html",{y:"a",d:"2019-09-21T00:00:00.000Z",l:"2019年9月21日",c:["JavaScript"],e:`<h2> 整数和浮点数</h2>
<p>JavaScript 内部，所有数字都是以 64 位浮点数形式储存，即使整数也是如此。所以，<code>1</code> 与 <code>1.0</code> 是相同的，是同一个数。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">===</span> <span class="token number">1.0</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div>`,r:{minutes:14.18,words:4255},title:"Number",i:"number"},["/code/language/js/types/number","/code/language/js/types/number.md"]],["v-0cfc138c","/code/language/js/types/object.html",{y:"a",d:"2019-09-23T00:00:00.000Z",l:"2019年9月23日",c:["JavaScript"],e:`<h2> 概述</h2>
<h3> 生成方法</h3>
<p>对象(object)是 JavaScript 语言的核心概念，也是最重要的数据类型。</p>
<p>什么是对象? 简单说，对象就是一组“键值对”(key-value)的集合，是一种无序的复合数据集合。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">"Hello"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">"World"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,r:{minutes:10.82,words:3245},title:"对象",i:"object"},["/code/language/js/types/object","/code/language/js/types/object.md"]],["v-01d2ec0c","/code/language/js/types/string.html",{y:"a",d:"2019-09-21T00:00:00.000Z",l:"2019年9月21日",c:["JavaScript"],e:`<h2> 定义</h2>
<p>字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">'abc'</span>
<span class="token string">"abc"</span>
</code></pre></div><p>单引号字符串的内部，可以使用双引号。双引号字符串的内部，可以使用单引号。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">'key = "value"'</span>
<span class="token string">"It's a long journey"</span>
</code></pre></div>`,r:{minutes:8.64,words:2592},title:"string",i:"string"},["/code/language/js/types/string","/code/language/js/types/string.md"]],["v-752bb69b","/code/language/markdown/emoji/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["Markdown"],g:["Markdown","Emoji"],e:`<h2> 人物</h2>
<ul>
<li><a href="/code/language/markdown/emoji/people.html" target="blank">点击前往</a></li>
</ul>
<h2> 自然</h2>
<ul>
<li><a href="/code/language/markdown/emoji/nature.html" target="blank">点击前往</a></li>
</ul>
<h2> 对象</h2>
<ul>
<li><a href="/code/language/markdown/emoji/object.html" target="blank">点击前往</a></li>
</ul>`,r:{minutes:.15,words:46},title:"Emoji 列表",i:"emoji"},["/code/language/markdown/emoji/index.html","/code/language/markdown/emoji/README.md"]],["v-d29981d2","/code/language/markdown/emoji/nature.html",{y:"a",d:"2021-03-16T06:39:58.000Z",c:["Markdown"],g:["Markdown","Emoji"],e:`<ul>
<li>☀️ <code>:sunny:</code></li>
<li>☔ <code>:umbrella:</code></li>
<li>☁️ <code>:cloud:</code></li>
<li>❄️ <code>:snowflake:</code></li>
<li>⛄ <code>:snowman:</code></li>
<li>⚡ <code>:zap:</code></li>
<li>🌀 <code>:cyclone:</code></li>
<li>🌁 <code>:foggy:</code></li>
<li>🌊 <code>:ocean:</code></li>
<li>🐱 <code>:cat:</code></li>
<li>🐶 <code>:dog:</code></li>
<li>🐭 <code>:mouse:</code></li>
<li>🐹 <code>:hamster:</code></li>
<li>🐰 <code>:rabbit:</code></li>
<li>🐺 <code>:wolf:</code></li>
<li>🐸 <code>:frog:</code></li>
<li>🐯 <code>:tiger:</code></li>
<li>🐨 <code>:koala:</code></li>
<li>🐻 <code>:bear:</code></li>
<li>🐷 <code>:pig:</code></li>
<li>🐽 <code>:pig_nose:</code></li>
<li>🐮 <code>:cow:</code></li>
<li>🐗 <code>:boar:</code></li>
<li>🐵 <code>:monkey_face:</code></li>
<li>🐒 <code>:monkey:</code></li>
<li>🐴 <code>:horse:</code></li>
<li>🐎 <code>:racehorse:</code></li>
<li>🐫 <code>:camel:</code></li>
<li>🐑 <code>:sheep:</code></li>
<li>🐘 <code>:elephant:</code></li>
<li>🐼 <code>:panda_face:</code></li>
<li>🐍 <code>:snake:</code></li>
<li>🐦 <code>:bird:</code></li>
<li>🐤 <code>:baby_chick:</code></li>
<li>🐥 <code>:hatched_chick:</code></li>
<li>🐣 <code>:hatching_chick:</code></li>
<li>🐔 <code>:chicken:</code></li>
<li>🐧 <code>:penguin:</code></li>
<li>🐢 <code>:turtle:</code></li>
<li>🐛 <code>:bug:</code></li>
<li>🐝 <code>:honeybee:</code></li>
<li>🐜 <code>:ant:</code></li>
<li>🪲 <code>:beetle:</code></li>
<li>🐌 <code>:snail:</code></li>
<li>🐙 <code>:octopus:</code></li>
<li>🐠 <code>:tropical_fish:</code></li>
<li>🐟 <code>:fish:</code></li>
<li>🐳 <code>:whale:</code></li>
<li>🐋 <code>:whale2:</code></li>
<li>🐬 <code>:dolphin:</code></li>
<li>🐄 <code>:cow2:</code></li>
<li>🐏 <code>:ram:</code></li>
<li>🐀 <code>:rat:</code></li>
<li>🐃 <code>:water_buffalo:</code></li>
<li>🐅 <code>:tiger2:</code></li>
<li>🐇 <code>:rabbit2:</code></li>
<li>🐉 <code>:dragon:</code></li>
<li>🐐 <code>:goat:</code></li>
<li>🐓 <code>:rooster:</code></li>
<li>🐕 <code>:dog2:</code></li>
<li>🐖 <code>:pig2:</code></li>
<li>🐁 <code>:mouse2:</code></li>
<li>🐂 <code>:ox:</code></li>
<li>🐲 <code>:dragon_face:</code></li>
<li>🐡 <code>:blowfish:</code></li>
<li>🐊 <code>:crocodile:</code></li>
<li>🐪 <code>:dromedary_camel:</code></li>
<li>🐆 <code>:leopard:</code></li>
<li>🐈 <code>:cat2:</code></li>
<li>🐩 <code>:poodle:</code></li>
<li>🐾 <code>:paw_prints:</code></li>
<li>💐 <code>:bouquet:</code></li>
<li>🌸 <code>:cherry_blossom:</code></li>
<li>🌷 <code>:tulip:</code></li>
<li>🍀 <code>:four_leaf_clover:</code></li>
<li>🌹 <code>:rose:</code></li>
<li>🌻 <code>:sunflower:</code></li>
<li>🌺 <code>:hibiscus:</code></li>
<li>🍁 <code>:maple_leaf:</code></li>
<li>🍃 <code>:leaves:</code></li>
<li>🍂 <code>:fallen_leaf:</code></li>
<li>🌿 <code>:herb:</code></li>
<li>🍄 <code>:mushroom:</code></li>
<li>🌵 <code>:cactus:</code></li>
<li>🌴 <code>:palm_tree:</code></li>
<li>🌲 <code>:evergreen_tree:</code></li>
<li>🌳 <code>:deciduous_tree:</code></li>
<li>🌰 <code>:chestnut:</code></li>
<li>🌱 <code>:seedling:</code></li>
<li>🌼 <code>:blossom:</code></li>
<li>🌾 <code>:ear_of_rice:</code></li>
<li>🐚 <code>:shell:</code></li>
<li>🌐 <code>:globe_with_meridians:</code></li>
<li>🌞 <code>:sun_with_face:</code></li>
<li>🌝 <code>:full_moon_with_face:</code></li>
<li>🌚 <code>:new_moon_with_face:</code></li>
<li>🌑 <code>:new_moon:</code></li>
<li>🌒 <code>:waxing_crescent_moon:</code></li>
<li>🌓 <code>:first_quarter_moon:</code></li>
<li>🌔 <code>:waxing_gibbous_moon:</code></li>
<li>🌕 <code>:full_moon:</code></li>
<li>🌖 <code>:waning_gibbous_moon:</code></li>
<li>🌗 <code>:last_quarter_moon:</code></li>
<li>🌘 <code>:waning_crescent_moon:</code></li>
<li>🌜 <code>:last_quarter_moon_with_face:</code></li>
<li>🌛 <code>:first_quarter_moon_with_face:</code></li>
<li>🌙 <code>:crescent_moon:</code></li>
<li>🌍 <code>:earth_africa:</code></li>
<li>🌎 <code>:earth_americas:</code></li>
<li>🌏 <code>:earth_asia:</code></li>
<li>🌋 <code>:volcano:</code></li>
<li>🌌 <code>:milky_way:</code></li>
<li>⛅ <code>:partly_sunny:</code></li>
</ul>`,r:{minutes:.79,words:236},title:"自然",i:"emoji"},["/code/language/markdown/emoji/nature","/code/language/markdown/emoji/nature.md"]],["v-51851102","/code/language/markdown/emoji/object.html",{y:"a",d:"2021-03-16T06:39:58.000Z",c:["Markdown"],g:["Markdown","Emoji"],e:`<ul>
<li>🎍 <code>:bamboo:</code></li>
<li>💝 <code>:gift_heart:</code></li>
<li>🎎 <code>:dolls:</code></li>
<li>🎒 <code>:school_satchel:</code></li>
<li>🎓 <code>:mortar_board:</code></li>
<li>🎏 <code>:flags:</code></li>
<li>🎆 <code>:fireworks:</code></li>
<li>🎇 <code>:sparkler:</code></li>
<li>🎐 <code>:wind_chime:</code></li>
<li>🎑 <code>:rice_scene:</code></li>
<li>🎃 <code>:jack_o_lantern:</code></li>
<li>👻 <code>:ghost:</code></li>
<li>🎅 <code>:santa:</code></li>
<li>🎄 <code>:christmas_tree:</code></li>
<li>🎁 <code>:gift:</code></li>
<li>🔔 <code>:bell:</code></li>
<li>🔕 <code>:no_bell:</code></li>
<li>🎋 <code>:tanabata_tree:</code></li>
<li>🎉 <code>:tada:</code></li>
<li>🎊 <code>:confetti_ball:</code></li>
<li>🎈 <code>:balloon:</code></li>
<li>🔮 <code>:crystal_ball:</code></li>
<li>💿 <code>:cd:</code></li>
<li>📀 <code>:dvd:</code></li>
<li>💾 <code>:floppy_disk:</code></li>
<li>📷 <code>:camera:</code></li>
<li>📹 <code>:video_camera:</code></li>
<li>🎥 <code>:movie_camera:</code></li>
<li>💻 <code>:computer:</code></li>
<li>📺 <code>:tv:</code></li>
<li>📱 <code>:iphone:</code></li>
<li>☎️ <code>:phone:</code></li>
<li>☎️ <code>:telephone:</code></li>
<li>📞 <code>:telephone_receiver:</code></li>
<li>📟 <code>:pager:</code></li>
<li>📠 <code>:fax:</code></li>
<li>💽 <code>:minidisc:</code></li>
<li>📼 <code>:vhs:</code></li>
<li>🔉 <code>:sound:</code></li>
<li>🔈 <code>:speaker:</code></li>
<li>🔇 <code>:mute:</code></li>
<li>📢 <code>:loudspeaker:</code></li>
<li>📣 <code>:mega:</code></li>
<li>⌛ <code>:hourglass:</code></li>
<li>⏳ <code>:hourglass_flowing_sand:</code></li>
<li>⏰ <code>:alarm_clock:</code></li>
<li>⌚ <code>:watch:</code></li>
<li>📻 <code>:radio:</code></li>
<li>📡 <code>:satellite:</code></li>
<li>➿ <code>:loop:</code></li>
<li>🔍 <code>:mag:</code></li>
<li>🔎 <code>:mag_right:</code></li>
<li>🔓 <code>:unlock:</code></li>
<li>🔒 <code>:lock:</code></li>
<li>🔏 <code>:lock_with_ink_pen:</code></li>
<li>🔐 <code>:closed_lock_with_key:</code></li>
<li>🔑 <code>:key:</code></li>
<li>💡 <code>:bulb:</code></li>
<li>🔦 <code>:flashlight:</code></li>
<li>🔆 <code>:high_brightness:</code></li>
<li>🔅 <code>:low_brightness:</code></li>
<li>🔌 <code>:electric_plug:</code></li>
<li>🔋 <code>:battery:</code></li>
<li>📲 <code>:calling:</code></li>
<li>📧 <code>:email:</code></li>
<li>📫 <code>:mailbox:</code></li>
<li>📮 <code>:postbox:</code></li>
<li>🛀 <code>:bath:</code></li>
<li>🛁 <code>:bathtub:</code></li>
<li>🚿 <code>:shower:</code></li>
<li>🚽 <code>:toilet:</code></li>
<li>🔧 <code>:wrench:</code></li>
<li>🔩 <code>:nut_and_bolt:</code></li>
<li>🔨 <code>:hammer:</code></li>
<li>💺 <code>:seat:</code></li>
<li>💰 <code>:moneybag:</code></li>
<li>💴 <code>:yen:</code></li>
<li>💵 <code>:dollar:</code></li>
<li>💷 <code>:pound:</code></li>
<li>💶 <code>:euro:</code></li>
<li>💳 <code>:credit_card:</code></li>
<li>💸 <code>:money_with_wings:</code></li>
<li>📧 <code>:e-mail:</code></li>
<li>📥 <code>:inbox_tray:</code></li>
<li>📤 <code>:outbox_tray:</code></li>
<li>✉️ <code>:envelope:</code></li>
<li>📨 <code>:incoming_envelope:</code></li>
<li>📯 <code>:postal_horn:</code></li>
<li>📪 <code>:mailbox_closed:</code></li>
<li>📬 <code>:mailbox_with_mail:</code></li>
<li>📭 <code>:mailbox_with_no_mail:</code></li>
<li>📦 <code>:package:</code></li>
<li>🚪 <code>:door:</code></li>
<li>🚬 <code>:smoking:</code></li>
<li>💣 <code>:bomb:</code></li>
<li>🔫 <code>:gun:</code></li>
<li>🔪 <code>:hocho:</code></li>
<li>💊 <code>:pill:</code></li>
<li>💉 <code>:syringe:</code></li>
<li>📄 <code>:page_facing_up:</code></li>
<li>📃 <code>:page_with_curl:</code></li>
<li>📑 <code>:bookmark_tabs:</code></li>
<li>📊 <code>:bar_chart:</code></li>
<li>📈 <code>:chart_with_upwards_trend:</code></li>
<li>📉 <code>:chart_with_downwards_trend:</code></li>
<li>📜 <code>:scroll:</code></li>
<li>📋 <code>:clipboard:</code></li>
<li>📆 <code>:calendar:</code></li>
<li>📅 <code>:date:</code></li>
<li>📇 <code>:card_index:</code></li>
<li>📁 <code>:file_folder:</code></li>
<li>📂 <code>:open_file_folder:</code></li>
<li>✂️ <code>:scissors:</code></li>
<li>📌 <code>:pushpin:</code></li>
<li>📎 <code>:paperclip:</code></li>
<li>✒️ <code>:black_nib:</code></li>
<li>✏️ <code>:pencil2:</code></li>
<li>📏 <code>:straight_ruler:</code></li>
<li>📐 <code>:triangular_ruler:</code></li>
<li>📕 <code>:closed_book:</code></li>
<li>📗 <code>:green_book:</code></li>
<li>📘 <code>:blue_book:</code></li>
<li>📙 <code>:orange_book:</code></li>
<li>📓 <code>:notebook:</code></li>
<li>📔 <code>:notebook_with_decorative_cover:</code></li>
<li>📒 <code>:ledger:</code></li>
<li>📚 <code>:books:</code></li>
<li>🔖 <code>:bookmark:</code></li>
<li>📛 <code>:name_badge:</code></li>
<li>🔬 <code>:microscope:</code></li>
<li>🔭 <code>:telescope:</code></li>
<li>📰 <code>:newspaper:</code></li>
<li>🏈 <code>:football:</code></li>
<li>🏀 <code>:basketball:</code></li>
<li>⚽ <code>:soccer:</code></li>
<li>⚾ <code>:baseball:</code></li>
<li>🎾 <code>:tennis:</code></li>
<li>🎱 <code>:8ball:</code></li>
<li>🏉 <code>:rugby_football:</code></li>
<li>🎳 <code>:bowling:</code></li>
<li>⛳ <code>:golf:</code></li>
<li>🚵 <code>:mountain_bicyclist:</code></li>
<li>🚴 <code>:bicyclist:</code></li>
<li>🏇 <code>:horse_racing:</code></li>
<li>🏂 <code>:snowboarder:</code></li>
<li>🏊 <code>:swimmer:</code></li>
<li>🏄 <code>:surfer:</code></li>
<li>🎿 <code>:ski:</code></li>
<li>♠️ <code>:spades:</code></li>
<li>♥️ <code>:hearts:</code></li>
<li>♣️ <code>:clubs:</code></li>
<li>♦️ <code>:diamonds:</code></li>
<li>💎 <code>:gem:</code></li>
<li>💍 <code>:ring:</code></li>
<li>🏆 <code>:trophy:</code></li>
<li>🎼 <code>:musical_score:</code></li>
<li>🎹 <code>:musical_keyboard:</code></li>
<li>🎻 <code>:violin:</code></li>
<li>👾 <code>:space_invader:</code></li>
<li>🎮 <code>:video_game:</code></li>
<li>🃏 <code>:black_joker:</code></li>
<li>🎴 <code>:flower_playing_cards:</code></li>
<li>🎲 <code>:game_die:</code></li>
<li>🎯 <code>:dart:</code></li>
<li>🀄 <code>:mahjong:</code></li>
<li>🎬 <code>:clapper:</code></li>
<li>📝 <code>:memo:</code></li>
<li>📝 <code>:pencil:</code></li>
<li>📖 <code>:book:</code></li>
<li>🎨 <code>:art:</code></li>
<li>🎤 <code>:microphone:</code></li>
<li>🎧 <code>:headphones:</code></li>
<li>🎺 <code>:trumpet:</code></li>
<li>🎷 <code>:saxophone:</code></li>
<li>🎸 <code>:guitar:</code></li>
<li>👞 <code>:shoe:</code></li>
<li>👡 <code>:sandal:</code></li>
<li>👠 <code>:high_heel:</code></li>
<li>💄 <code>:lipstick:</code></li>
<li>👢 <code>:boot:</code></li>
<li>👕 <code>:shirt:</code></li>
<li>👕 <code>:tshirt:</code></li>
<li>👔 <code>:necktie:</code></li>
<li>👚 <code>:womans_clothes:</code></li>
<li>👗 <code>:dress:</code></li>
<li>🎽 <code>:running_shirt_with_sash:</code></li>
<li>👖 <code>:jeans:</code></li>
<li>👘 <code>:kimono:</code></li>
<li>👙 <code>:bikini:</code></li>
<li>🎀 <code>:ribbon:</code></li>
<li>🎩 <code>:tophat:</code></li>
<li>👑 <code>:crown:</code></li>
<li>👒 <code>:womans_hat:</code></li>
<li>👞 <code>:mans_shoe:</code></li>
<li>🌂 <code>:closed_umbrella:</code></li>
<li>💼 <code>:briefcase:</code></li>
<li>👜 <code>:handbag:</code></li>
<li>👝 <code>:pouch:</code></li>
<li>👛 <code>:purse:</code></li>
<li>👓 <code>:eyeglasses:</code></li>
<li>🎣 <code>:fishing_pole_and_fish:</code></li>
<li>☕ <code>:coffee:</code></li>
<li>🍵 <code>:tea:</code></li>
<li>🍶 <code>:sake:</code></li>
<li>🍼 <code>:baby_bottle:</code></li>
<li>🍺 <code>:beer:</code></li>
<li>🍻 <code>:beers:</code></li>
<li>🍸 <code>:cocktail:</code></li>
<li>🍹 <code>:tropical_drink:</code></li>
<li>🍷 <code>:wine_glass:</code></li>
<li>🍴 <code>:fork_and_knife:</code></li>
<li>🍕 <code>:pizza:</code></li>
<li>🍔 <code>:hamburger:</code></li>
<li>🍟 <code>:fries:</code></li>
<li>🍗 <code>:poultry_leg:</code></li>
<li>🍖 <code>:meat_on_bone:</code></li>
<li>🍝 <code>:spaghetti:</code></li>
<li>🍛 <code>:curry:</code></li>
<li>🍤 <code>:fried_shrimp:</code></li>
<li>🍱 <code>:bento:</code></li>
<li>🍣 <code>:sushi:</code></li>
<li>🍥 <code>:fish_cake:</code></li>
<li>🍙 <code>:rice_ball:</code></li>
<li>🍘 <code>:rice_cracker:</code></li>
<li>🍚 <code>:rice:</code></li>
<li>🍜 <code>:ramen:</code></li>
<li>🍲 <code>:stew:</code></li>
<li>🍢 <code>:oden:</code></li>
<li>🍡 <code>:dango:</code></li>
<li>🥚 <code>:egg:</code></li>
<li>🍞 <code>:bread:</code></li>
<li>🍩 <code>:doughnut:</code></li>
<li>🍮 <code>:custard:</code></li>
<li>🍦 <code>:icecream:</code></li>
<li>🍨 <code>:ice_cream:</code></li>
<li>🍧 <code>:shaved_ice:</code></li>
<li>🎂 <code>:birthday:</code></li>
<li>🍰 <code>:cake:</code></li>
<li>🍪 <code>:cookie:</code></li>
<li>🍫 <code>:chocolate_bar:</code></li>
<li>🍬 <code>:candy:</code></li>
<li>🍭 <code>:lollipop:</code></li>
<li>🍯 <code>:honey_pot:</code></li>
<li>🍎 <code>:apple:</code></li>
<li>🍏 <code>:green_apple:</code></li>
<li>🍊 <code>:tangerine:</code></li>
<li>🍋 <code>:lemon:</code></li>
<li>🍒 <code>:cherries:</code></li>
<li>🍇 <code>:grapes:</code></li>
<li>🍉 <code>:watermelon:</code></li>
<li>🍓 <code>:strawberry:</code></li>
<li>🍑 <code>:peach:</code></li>
<li>🍈 <code>:melon:</code></li>
<li>🍌 <code>:banana:</code></li>
<li>🍐 <code>:pear:</code></li>
<li>🍍 <code>:pineapple:</code></li>
<li>🍠 <code>:sweet_potato:</code></li>
<li>🍆 <code>:eggplant:</code></li>
<li>🍅 <code>:tomato:</code></li>
<li>🌽 <code>:corn:</code></li>
</ul>`,r:{minutes:1.77,words:532},title:"对象",i:"emoji"},["/code/language/markdown/emoji/object","/code/language/markdown/emoji/object.md"]],["v-6780fa2f","/code/language/markdown/emoji/people.html",{y:"a",d:"2021-03-16T06:39:58.000Z",c:["Markdown"],g:["Markdown","Emoji"],e:`<ul>
<li>😄 <code>:smile:</code></li>
<li>😆 <code>:laughing:</code></li>
<li>😊 <code>:blush:</code></li>
<li>😃 <code>:smiley:</code></li>
<li>😏 <code>:smirk:</code></li>
<li>😍 <code>:heart_eyes:</code></li>
<li>😘 <code>:kissing_heart:</code></li>
<li>😚 <code>:kissing_closed_eyes:</code></li>
<li>😳 <code>:flushed:</code></li>
<li>😌 <code>:relieved:</code></li>
<li>😆 <code>:satisfied:</code></li>
<li>😁 <code>:grin:</code></li>
<li>😉 <code>:wink:</code></li>
<li>😜 <code>:stuck_out_tongue_winking_eye:</code></li>
<li>😝 <code>:stuck_out_tongue_closed_eyes:</code></li>
<li>😀 <code>:grinning:</code></li>
<li>😗 <code>:kissing:</code></li>
<li>😙 <code>:kissing_smiling_eyes:</code></li>
<li>😛 <code>:stuck_out_tongue:</code></li>
<li>😴 <code>:sleeping:</code></li>
<li>😟 <code>:worried:</code></li>
<li>😦 <code>:frowning:</code></li>
<li>😧 <code>:anguished:</code></li>
<li>😮 <code>:open_mouth:</code></li>
<li>😬 <code>:grimacing:</code></li>
<li>😕 <code>:confused:</code></li>
<li>😯 <code>:hushed:</code></li>
<li>😑 <code>:expressionless:</code></li>
<li>😒 <code>:unamused:</code></li>
<li>😅 <code>:sweat_smile:</code></li>
<li>😓 <code>:sweat:</code></li>
<li>😥 <code>:disappointed_relieved:</code></li>
<li>😩 <code>:weary:</code></li>
<li>😔 <code>:pensive:</code></li>
<li>😞 <code>:disappointed:</code></li>
<li>😖 <code>:confounded:</code></li>
<li>😨 <code>:fearful:</code></li>
<li>😰 <code>:cold_sweat:</code></li>
<li>😣 <code>:persevere:</code></li>
<li>😢 <code>:cry:</code></li>
<li>😭 <code>:sob:</code></li>
<li>😂 <code>:joy:</code></li>
<li>😲 <code>:astonished:</code></li>
<li>😱 <code>:scream:</code></li>
<li>😫 <code>:tired_face:</code></li>
<li>😠 <code>:angry:</code></li>
<li>😡 <code>:rage:</code></li>
<li>😤 <code>:triumph:</code></li>
<li>😪 <code>:sleepy:</code></li>
<li>😋 <code>:yum:</code></li>
<li>😷 <code>:mask:</code></li>
<li>😎 <code>:sunglasses:</code></li>
<li>😵 <code>:dizzy_face:</code></li>
<li>👿 <code>:imp:</code></li>
<li>😈 <code>:smiling_imp:</code></li>
<li>😐 <code>:neutral_face:</code></li>
<li>😶 <code>:no_mouth:</code></li>
<li>😇 <code>:innocent:</code></li>
<li>👽 <code>:alien:</code></li>
<li>💛 <code>:yellow_heart:</code></li>
<li>💙 <code>:blue_heart:</code></li>
<li>💜 <code>:purple_heart:</code></li>
<li>❤️ <code>:heart:</code></li>
<li>💚 <code>:green_heart:</code></li>
<li>💔 <code>:broken_heart:</code></li>
<li>💓 <code>:heartbeat:</code></li>
<li>💗 <code>:heartpulse:</code></li>
<li>💕 <code>:two_hearts:</code></li>
<li>💞 <code>:revolving_hearts:</code></li>
<li>💘 <code>:cupid:</code></li>
<li>💖 <code>:sparkling_heart:</code></li>
<li>✨ <code>:sparkles:</code></li>
<li>⭐ <code>:star:</code></li>
<li>🌟 <code>:star2:</code></li>
<li>💫 <code>:dizzy:</code></li>
<li>💥 <code>:boom:</code></li>
<li>💥 <code>:collision:</code></li>
<li>💢 <code>:anger:</code></li>
<li>❗ <code>:exclamation:</code></li>
<li>❓ <code>:question:</code></li>
<li>❕ <code>:grey_exclamation:</code></li>
<li>❔ <code>:grey_question:</code></li>
<li>💤 <code>:zzz:</code></li>
<li>💨 <code>:dash:</code></li>
<li>💦 <code>:sweat_drops:</code></li>
<li>🎶 <code>:notes:</code></li>
<li>🎵 <code>:musical_note:</code></li>
<li>🔥 <code>:fire:</code></li>
<li>💩 <code>:hankey:</code></li>
<li>💩 <code>:poop:</code></li>
<li>💩 <code>:shit:</code></li>
<li>👍 <code>:+1:</code></li>
<li>👍 <code>:thumbsup:</code></li>
<li>👎 <code>:-1:</code></li>
<li>👎 <code>:thumbsdown:</code></li>
<li>👌 <code>:ok_hand:</code></li>
<li>👊 <code>:punch:</code></li>
<li>👊 <code>:facepunch:</code></li>
<li>✊ <code>:fist:</code></li>
<li>✌️ <code>:v:</code></li>
<li>👋 <code>:wave:</code></li>
<li>✋ <code>:hand:</code></li>
<li>✋ <code>:raised_hand:</code></li>
<li>👐 <code>:open_hands:</code></li>
<li>☝️ <code>:point_up:</code></li>
<li>👇 <code>:point_down:</code></li>
<li>👈 <code>:point_left:</code></li>
<li>👉 <code>:point_right:</code></li>
<li>🙌 <code>:raised_hands:</code></li>
<li>🙏 <code>:pray:</code></li>
<li>👆 <code>:point_up_2:</code></li>
<li>👏 <code>:clap:</code></li>
<li>💪 <code>:muscle:</code></li>
<li>🤘 <code>:metal:</code></li>
<li>🖕 <code>:fu:</code></li>
<li>🏃 <code>:runner:</code></li>
<li>🏃 <code>:running:</code></li>
<li>👫 <code>:couple:</code></li>
<li>👪 <code>:family:</code></li>
<li>👬 <code>:two_men_holding_hands:</code></li>
<li>👭 <code>:two_women_holding_hands:</code></li>
<li>💃 <code>:dancer:</code></li>
<li>👯 <code>:dancers:</code></li>
<li>🙆‍♀️ <code>:ok_woman:</code></li>
<li>🙅 <code>:no_good:</code></li>
<li>💁 <code>:information_desk_person:</code></li>
<li>🙋 <code>:raising_hand:</code></li>
<li>👰‍♀️ <code>:bride_with_veil:</code></li>
<li>:person_with_pouting_face: <code>:person_with_pouting_face:</code></li>
<li>:person_frowning: <code>:person_frowning:</code></li>
<li>🙇 <code>:bow:</code></li>
<li>💑 <code>:couple_with_heart:</code></li>
<li>💆 <code>:massage:</code></li>
<li>💇 <code>:haircut:</code></li>
<li>💅 <code>:nail_care:</code></li>
<li>👦 <code>:boy:</code></li>
<li>👧 <code>:girl:</code></li>
<li>👩 <code>:woman:</code></li>
<li>👨 <code>:man:</code></li>
<li>👶 <code>:baby:</code></li>
<li>👵 <code>:older_woman:</code></li>
<li>👴 <code>:older_man:</code></li>
<li>:person_with_blond_hair: <code>:person_with_blond_hair:</code></li>
<li>👲 <code>:man_with_gua_pi_mao:</code></li>
<li>👳‍♂️ <code>:man_with_turban:</code></li>
<li>👷 <code>:construction_worker:</code></li>
<li>👮 <code>:cop:</code></li>
<li>👼 <code>:angel:</code></li>
<li>👸 <code>:princess:</code></li>
<li>😺 <code>:smiley_cat:</code></li>
<li>😸 <code>:smile_cat:</code></li>
<li>😻 <code>:heart_eyes_cat:</code></li>
<li>😽 <code>:kissing_cat:</code></li>
<li>😼 <code>:smirk_cat:</code></li>
<li>🙀 <code>:scream_cat:</code></li>
<li>😿 <code>:crying_cat_face:</code></li>
<li>😹 <code>:joy_cat:</code></li>
<li>😾 <code>:pouting_cat:</code></li>
<li>👹 <code>:japanese_ogre:</code></li>
<li>👺 <code>:japanese_goblin:</code></li>
<li>🙈 <code>:see_no_evil:</code></li>
<li>🙉 <code>:hear_no_evil:</code></li>
<li>🙊 <code>:speak_no_evil:</code></li>
<li>💂‍♂️ <code>:guardsman:</code></li>
<li>💀 <code>:skull:</code></li>
<li>🐾 <code>:feet:</code></li>
<li>👄 <code>:lips:</code></li>
<li>💋 <code>:kiss:</code></li>
<li>💧 <code>:droplet:</code></li>
<li>👂 <code>:ear:</code></li>
<li>👀 <code>:eyes:</code></li>
<li>👃 <code>:nose:</code></li>
<li>👅 <code>:tongue:</code></li>
<li>💌 <code>:love_letter:</code></li>
<li>👤 <code>:bust_in_silhouette:</code></li>
<li>👥 <code>:busts_in_silhouette:</code></li>
<li>💬 <code>:speech_balloon:</code></li>
<li>💭 <code>:thought_balloon:</code></li>
</ul>`,r:{minutes:1.22,words:366},title:"人物",i:"emoji"},["/code/language/markdown/emoji/people","/code/language/markdown/emoji/people.md"]],["v-333335e6","/code/language/markdown/emoji/place.html",{y:"a",d:"2021-03-16T06:39:58.000Z",c:["Markdown"],g:["Markdown","Emoji"],e:`<ul>
<li>🏠 <code>:house:</code></li>
<li>🏡 <code>:house_with_garden:</code></li>
<li>🏫 <code>:school:</code></li>
<li>🏢 <code>:office:</code></li>
<li>🏣 <code>:post_office:</code></li>
<li>🏥 <code>:hospital:</code></li>
<li>🏦 <code>:bank:</code></li>
<li>🏪 <code>:convenience_store:</code></li>
<li>🏩 <code>:love_hotel:</code></li>
<li>🏨 <code>:hotel:</code></li>
<li>💒 <code>:wedding:</code></li>
<li>⛪ <code>:church:</code></li>
<li>🏬 <code>:department_store:</code></li>
<li>🏤 <code>:european_post_office:</code></li>
<li>🌇 <code>:city_sunrise:</code></li>
<li>🌆 <code>:city_sunset:</code></li>
<li>🏯 <code>:japanese_castle:</code></li>
<li>🏰 <code>:european_castle:</code></li>
<li>⛺ <code>:tent:</code></li>
<li>🏭 <code>:factory:</code></li>
<li>🗼 <code>:tokyo_tower:</code></li>
<li>🗾 <code>:japan:</code></li>
<li>🗻 <code>:mount_fuji:</code></li>
<li>🌄 <code>:sunrise_over_mountains:</code></li>
<li>🌅 <code>:sunrise:</code></li>
<li>🌠 <code>:stars:</code></li>
<li>🗽 <code>:statue_of_liberty:</code></li>
<li>🌉 <code>:bridge_at_night:</code></li>
<li>🎠 <code>:carousel_horse:</code></li>
<li>🌈 <code>:rainbow:</code></li>
<li>🎡 <code>:ferris_wheel:</code></li>
<li>⛲ <code>:fountain:</code></li>
<li>🎢 <code>:roller_coaster:</code></li>
<li>🚢 <code>:ship:</code></li>
<li>🚤 <code>:speedboat:</code></li>
<li>⛵ <code>:boat:</code></li>
<li>⛵ <code>:sailboat:</code></li>
<li>🚣 <code>:rowboat:</code></li>
<li>⚓ <code>:anchor:</code></li>
<li>🚀 <code>:rocket:</code></li>
<li>✈️ <code>:airplane:</code></li>
<li>🚁 <code>:helicopter:</code></li>
<li>🚂 <code>:steam_locomotive:</code></li>
<li>🚊 <code>:tram:</code></li>
<li>🚞 <code>:mountain_railway:</code></li>
<li>🚲 <code>:bike:</code></li>
<li>🚡 <code>:aerial_tramway:</code></li>
<li>🚟 <code>:suspension_railway:</code></li>
<li>🚠 <code>:mountain_cableway:</code></li>
<li>🚜 <code>:tractor:</code></li>
<li>🚙 <code>:blue_car:</code></li>
<li>🚘 <code>:oncoming_automobile:</code></li>
<li>🚗 <code>:car:</code></li>
<li>🚗 <code>:red_car:</code></li>
<li>🚕 <code>:taxi:</code></li>
<li>🚖 <code>:oncoming_taxi:</code></li>
<li>🚛 <code>:articulated_lorry:</code></li>
<li>🚌 <code>:bus:</code></li>
<li>🚍 <code>:oncoming_bus:</code></li>
<li>🚨 <code>:rotating_light:</code></li>
<li>🚓 <code>:police_car:</code></li>
<li>🚔 <code>:oncoming_police_car:</code></li>
<li>🚒 <code>:fire_engine:</code></li>
<li>🚑 <code>:ambulance:</code></li>
<li>🚐 <code>:minibus:</code></li>
<li>🚚 <code>:truck:</code></li>
<li>🚋 <code>:train:</code></li>
<li>🚉 <code>:station:</code></li>
<li>🚆 <code>:train2:</code></li>
<li>🚅 <code>:bullettrain_front:</code></li>
<li>🚄 <code>:bullettrain_side:</code></li>
<li>🚈 <code>:light_rail:</code></li>
<li>🚝 <code>:monorail:</code></li>
<li>🚃 <code>:railway_car:</code></li>
<li>🚎 <code>:trolleybus:</code></li>
<li>🎫 <code>:ticket:</code></li>
<li>⛽ <code>:fuelpump:</code></li>
<li>🚦 <code>:vertical_traffic_light:</code></li>
<li>🚥 <code>:traffic_light:</code></li>
<li>⚠️ <code>:warning:</code></li>
<li>🚧 <code>:construction:</code></li>
<li>🔰 <code>:beginner:</code></li>
<li>🏧 <code>:atm:</code></li>
<li>🎰 <code>:slot_machine:</code></li>
<li>🚏 <code>:busstop:</code></li>
<li>💈 <code>:barber:</code></li>
<li>♨️ <code>:hotsprings:</code></li>
<li>🏁 <code>:checkered_flag:</code></li>
<li>🎌 <code>:crossed_flags:</code></li>
<li>🏮 <code>:izakaya_lantern:</code></li>
<li>🗿 <code>:moyai:</code></li>
<li>🎪 <code>:circus_tent:</code></li>
<li>🎭 <code>:performing_arts:</code></li>
<li>📍 <code>:round_pushpin:</code></li>
<li>🚩 <code>:triangular_flag_on_post:</code></li>
</ul>`,r:{minutes:.67,words:200},title:"地点",i:"emoji"},["/code/language/markdown/emoji/place","/code/language/markdown/emoji/place.md"]],["v-0fb734c6","/code/language/markdown/emoji/symbol.html",{y:"a",d:"2021-03-16T06:39:58.000Z",c:["Markdown"],g:["Markdown","Emoji"],e:`<ul>
<li>1️⃣ <code>:one:</code></li>
<li>2️⃣ <code>:two:</code></li>
<li>3️⃣ <code>:three:</code></li>
<li>4️⃣ <code>:four:</code></li>
<li>5️⃣ <code>:five:</code></li>
<li>6️⃣ <code>:six:</code></li>
<li>7️⃣ <code>:seven:</code></li>
<li>8️⃣ <code>:eight:</code></li>
<li>9️⃣ <code>:nine:</code></li>
<li>🔟 <code>:keycap_ten:</code></li>
<li>🔢 <code>:1234:</code></li>
<li>0️⃣ <code>:zero:</code></li>
<li>#️⃣ <code>:hash:</code></li>
<li>🔣 <code>:symbols:</code></li>
<li>◀️ <code>:arrow_backward:</code></li>
<li>⬇️ <code>:arrow_down:</code></li>
<li>▶️ <code>:arrow_forward:</code></li>
<li>⬅️ <code>:arrow_left:</code></li>
<li>🔠 <code>:capital_abcd:</code></li>
<li>🔡 <code>:abcd:</code></li>
<li>🔤 <code>:abc:</code></li>
<li>↙️ <code>:arrow_lower_left:</code></li>
<li>↘️ <code>:arrow_lower_right:</code></li>
<li>➡️ <code>:arrow_right:</code></li>
<li>⬆️ <code>:arrow_up:</code></li>
<li>↖️ <code>:arrow_upper_left:</code></li>
<li>↗️ <code>:arrow_upper_right:</code></li>
<li>⏬ <code>:arrow_double_down:</code></li>
<li>⏫ <code>:arrow_double_up:</code></li>
<li>🔽 <code>:arrow_down_small:</code></li>
<li>⤵️ <code>:arrow_heading_down:</code></li>
<li>⤴️ <code>:arrow_heading_up:</code></li>
<li>↩️ <code>:leftwards_arrow_with_hook:</code></li>
<li>↪️ <code>:arrow_right_hook:</code></li>
<li>↔️ <code>:left_right_arrow:</code></li>
<li>↕️ <code>:arrow_up_down:</code></li>
<li>🔼 <code>:arrow_up_small:</code></li>
<li>🔃 <code>:arrows_clockwise:</code></li>
<li>🔄 <code>:arrows_counterclockwise:</code></li>
<li>⏪ <code>:rewind:</code></li>
<li>⏩ <code>:fast_forward:</code></li>
<li>ℹ️ <code>:information_source:</code></li>
<li>🆗 <code>:ok:</code></li>
<li>🔀 <code>:twisted_rightwards_arrows:</code></li>
<li>🔁 <code>:repeat:</code></li>
<li>🔂 <code>:repeat_one:</code></li>
<li>🆕 <code>:new:</code></li>
<li>🔝 <code>:top:</code></li>
<li>🆙 <code>:up:</code></li>
<li>🆒 <code>:cool:</code></li>
<li>🆓 <code>:free:</code></li>
<li>🆖 <code>:ng:</code></li>
<li>🎦 <code>:cinema:</code></li>
<li>🈁 <code>:koko:</code></li>
<li>📶 <code>:signal_strength:</code></li>
<li>🈂️ <code>:sa:</code></li>
<li>🚻 <code>:restroom:</code></li>
<li>🚹 <code>:mens:</code></li>
<li>🚺 <code>:womens:</code></li>
<li>🚼 <code>:baby_symbol:</code></li>
<li>🚭 <code>:no_smoking:</code></li>
<li>🅿️ <code>:parking:</code></li>
<li>♿ <code>:wheelchair:</code></li>
<li>🚇 <code>:metro:</code></li>
<li>🛄 <code>:baggage_claim:</code></li>
<li>🉑 <code>:accept:</code></li>
<li>🚾 <code>:wc:</code></li>
<li>🚰 <code>:potable_water:</code></li>
<li>🚮 <code>:put_litter_in_its_place:</code></li>
<li>㊙️ <code>:secret:</code></li>
<li>㊗️ <code>:congratulations:</code></li>
<li>Ⓜ️ <code>:m:</code></li>
<li>🛂 <code>:passport_control:</code></li>
<li>🛅 <code>:left_luggage:</code></li>
<li>🛃 <code>:customs:</code></li>
<li>🉐 <code>:ideograph_advantage:</code></li>
<li>🆑 <code>:cl:</code></li>
<li>🆘 <code>:sos:</code></li>
<li>🆔 <code>:id:</code></li>
<li>🚫 <code>:no_entry_sign:</code></li>
<li>🔞 <code>:underage:</code></li>
<li>📵 <code>:no_mobile_phones:</code></li>
<li>🚯 <code>:do_not_litter:</code></li>
<li>🚱 <code>:non-potable_water:</code></li>
<li>🚳 <code>:no_bicycles:</code></li>
<li>🚷 <code>:no_pedestrians:</code></li>
<li>🚸 <code>:children_crossing:</code></li>
<li>⛔ <code>:no_entry:</code></li>
<li>✳️ <code>:eight_spoked_asterisk:</code></li>
<li>❇️ <code>:sparkle:</code></li>
<li>✴️ <code>:eight_pointed_black_star:</code></li>
<li>💟 <code>:heart_decoration:</code></li>
<li>🆚 <code>:vs:</code></li>
<li>📳 <code>:vibration_mode:</code></li>
<li>📴 <code>:mobile_phone_off:</code></li>
<li>💹 <code>:chart:</code></li>
<li>💱 <code>:currency_exchange:</code></li>
<li>♈ <code>:aries:</code></li>
<li>♉ <code>:taurus:</code></li>
<li>♊ <code>:gemini:</code></li>
<li>♋ <code>:cancer:</code></li>
<li>♌ <code>:leo:</code></li>
<li>♍ <code>:virgo:</code></li>
<li>♎ <code>:libra:</code></li>
<li>♏ <code>:scorpius:</code></li>
<li>♐ <code>:sagittarius:</code></li>
<li>♑ <code>:capricorn:</code></li>
<li>♒ <code>:aquarius:</code></li>
<li>♓ <code>:pisces:</code></li>
<li>⛎ <code>:ophiuchus:</code></li>
<li>🔯 <code>:six_pointed_star:</code></li>
<li>❎ <code>:negative_squared_cross_mark:</code></li>
<li>🅰️ <code>:a:</code></li>
<li>🅱️ <code>:b:</code></li>
<li>🆎 <code>:ab:</code></li>
<li>🅾️ <code>:o2:</code></li>
<li>💠 <code>:diamond_shape_with_a_dot_inside:</code></li>
<li>♻️ <code>:recycle:</code></li>
<li>🔚 <code>:end:</code></li>
<li>🔙 <code>:back:</code></li>
<li>🔛 <code>:on:</code></li>
<li>🔜 <code>:soon:</code></li>
<li>🕐 <code>:clock1:</code></li>
<li>🕜 <code>:clock130:</code></li>
<li>🕙 <code>:clock10:</code></li>
<li>🕥 <code>:clock1030:</code></li>
<li>🕚 <code>:clock11:</code></li>
<li>🕦 <code>:clock1130:</code></li>
<li>🕛 <code>:clock12:</code></li>
<li>🕧 <code>:clock1230:</code></li>
<li>🕑 <code>:clock2:</code></li>
<li>🕝 <code>:clock230:</code></li>
<li>🕒 <code>:clock3:</code></li>
<li>🕞 <code>:clock330:</code></li>
<li>🕓 <code>:clock4:</code></li>
<li>🕟 <code>:clock430:</code></li>
<li>🕔 <code>:clock5:</code></li>
<li>🕠 <code>:clock530:</code></li>
<li>🕕 <code>:clock6:</code></li>
<li>🕡 <code>:clock630:</code></li>
<li>🕖 <code>:clock7:</code></li>
<li>🕢 <code>:clock730:</code></li>
<li>🕗 <code>:clock8:</code></li>
<li>🕣 <code>:clock830:</code></li>
<li>🕘 <code>:clock9:</code></li>
<li>🕤 <code>:clock930:</code></li>
<li>💲 <code>:heavy_dollar_sign:</code></li>
<li>©️ <code>:copyright:</code></li>
<li>®️ <code>:registered:</code></li>
<li>™️ <code>:tm:</code></li>
<li>❌ <code>:x:</code></li>
<li>❗ <code>:heavy_exclamation_mark:</code></li>
<li>‼️ <code>:bangbang:</code></li>
<li>⁉️ <code>:interrobang:</code></li>
<li>⭕ <code>:o:</code></li>
<li>✖️ <code>:heavy_multiplication_x:</code></li>
<li>➕ <code>:heavy_plus_sign:</code></li>
<li>➖ <code>:heavy_minus_sign:</code></li>
<li>➗ <code>:heavy_division_sign:</code></li>
<li>💮 <code>:white_flower:</code></li>
<li>💯 <code>:100:</code></li>
<li>✔️ <code>:heavy_check_mark:</code></li>
<li>☑️ <code>:ballot_box_with_check:</code></li>
<li>🔘 <code>:radio_button:</code></li>
<li>🔗 <code>:link:</code></li>
<li>➰ <code>:curly_loop:</code></li>
<li>〰️ <code>:wavy_dash:</code></li>
<li>〽️ <code>:part_alternation_mark:</code></li>
<li>🔱 <code>:trident:</code></li>
<li>▪️ <code>:black_small_square:</code></li>
<li>▫️ <code>:white_small_square:</code></li>
<li>◾ <code>:black_medium_small_square:</code></li>
<li>◽ <code>:white_medium_small_square:</code></li>
<li>◼️ <code>:black_medium_square:</code></li>
<li>◻️ <code>:white_medium_square:</code></li>
<li>⬛ <code>:black_large_square:</code></li>
<li>⬜ <code>:white_large_square:</code></li>
<li>✅ <code>:white_check_mark:</code></li>
<li>🔲 <code>:black_square_button:</code></li>
<li>🔳 <code>:white_square_button:</code></li>
<li>⚫ <code>:black_circle:</code></li>
<li>⚪ <code>:white_circle:</code></li>
<li>🔴 <code>:red_circle:</code></li>
<li>🔵 <code>:large_blue_circle:</code></li>
<li>🔷 <code>:large_blue_diamond:</code></li>
<li>🔶 <code>:large_orange_diamond:</code></li>
<li>🔹 <code>:small_blue_diamond:</code></li>
<li>🔸 <code>:small_orange_diamond:</code></li>
<li>🔺 <code>:small_red_triangle:</code></li>
<li>🔻 <code>:small_red_triangle_down:</code></li>
</ul>`,r:{minutes:1.31,words:392},title:"符号",i:"emoji"},["/code/language/markdown/emoji/symbol","/code/language/markdown/emoji/symbol.md"]],["v-054e96dc","/code/language/python/advance/",{y:"a",a:"廖雪峰",d:"2020-05-28T00:00:00.000Z",l:"2020年5月28日",c:["Python"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/code/language/python/advance/slice.html" target="blank">切片</a></p>
</li>
<li>
<p><a href="/code/language/python/advance/iteration.html" target="blank">迭代</a></p>
</li>
<li>
<p><a href="/code/language/python/advance/list-comprehensions.html" target="blank">列表生成式</a></p>
</li>
<li>
<p><a href="/code/language/python/advance/generator.html" target="blank">生成器</a></p>
</li>
<li>
<p><a href="/code/language/python/advance/iterator.html" target="blank">迭代器</a></p>
</li>
</ul>`,r:{minutes:.14,words:43},title:"Python 高级语法",i:"advance"},["/code/language/python/advance/index.html","/code/language/python/advance/README.md"]],["v-0d6dbef8","/code/language/python/advance/generator.html",{y:"a",a:"廖雪峰",d:"2020-05-29T00:00:00.000Z",l:"2020年5月29日",c:["Python"],e:`<p>通过列表生成式，我们可以直接创建一个列表。但是，受到内存限制，列表容量肯定是有限的。而且，创建一个包含 100 万个元素的列表，不仅占用很大的存储空间，如果我们仅仅需要访问前面几个元素，那后面绝大多数元素占用的空间都白白浪费了。</p>
<p>所以，如果列表元素可以按照某种算法推算出来，那我们是否可以在循环的过程中不断推算出后续的元素呢? 这样就不必创建完整的 list，从而节省大量的空间。在 Python 中，这种一边循环一边计算的机制，称为生成器: generator。</p>
`,r:{minutes:5.51,words:1654},title:"生成器",i:"cycle"},["/code/language/python/advance/generator","/code/language/python/advance/generator.md"]],["v-5fe8612e","/code/language/python/advance/iteration.html",{y:"a",a:"廖雪峰",d:"2020-05-28T00:00:00.000Z",l:"2020年5月28日",c:["Python"],e:`<p>如果给定一个 list 或 tuple，我们可以通过 for 循环来遍历这个 list 或 tuple，这种遍历我们称为迭代(Iteration)。</p>
`,r:{minutes:2.19,words:657},title:"迭代",i:"refresh"},["/code/language/python/advance/iteration","/code/language/python/advance/iteration.md"]],["v-002015d9","/code/language/python/advance/iterator.html",{y:"a",a:"廖雪峰",d:"2020-05-29T00:00:00.000Z",l:"2020年5月29日",c:["Python"],e:`<p>我们已经知道，可以直接作用于 for 循环的数据类型有以下几种:</p>
<p>一类是集合数据类型，如 list、tuple、dict、set、str 等；</p>
<p>一类是 generator，包括生成器和带 yield 的 generator function。</p>
<p>这些可以直接作用于 for 循环的对象统称为可迭代对象: Iterable。</p>
<p>可以使用 isinstance()判断一个对象是否是 Iterable 对象:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Iterable
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.25,words:674},title:"迭代器",i:"refresh"},["/code/language/python/advance/iterator","/code/language/python/advance/iterator.md"]],["v-578855ad","/code/language/python/advance/list-comprehensions.html",{y:"a",d:"2020-05-29T00:00:00.000Z",l:"2020年5月29日",c:["Python"],e:`<p>列表生成式即 List Comprehensions，是 Python 内置的非常简单却强大的可以用来创建 list 的生成式。</p>
`,r:{minutes:3.24,words:972},title:"列表生成式",i:"list"},["/code/language/python/advance/list-comprehensions","/code/language/python/advance/list-comprehensions.md"]],["v-1e6d56ce","/code/language/python/advance/slice.html",{y:"a",a:"廖雪峰",d:"2020-05-28T00:00:00.000Z",l:"2020年5月28日",c:["Python"],e:`<p>取一个 list 或 tuple 的部分元素是非常常见的操作。比如，一个 list 如下:</p>
<div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Michael'</span><span class="token punctuation">,</span> <span class="token string">'Sarah'</span><span class="token punctuation">,</span> <span class="token string">'Tracy'</span><span class="token punctuation">,</span> <span class="token string">'Bob'</span><span class="token punctuation">,</span> <span class="token string">'Jack'</span><span class="token punctuation">]</span>
</code></pre></div>`,r:{minutes:2.54,words:762},title:"切片",i:"stack"},["/code/language/python/advance/slice","/code/language/python/advance/slice.md"]],["v-54d1615c","/code/language/python/function/",{y:"a",a:"廖雪峰",d:"2020-05-25T00:00:00.000Z",l:"2020年5月25日",c:["Python"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/code/language/python/function/intro.html" target="blank">函数介绍</a></p>
</li>
<li>
<p><a href="/code/language/python/function/define.html" target="blank">函数定义</a></p>
</li>
<li>
<p><a href="/code/language/python/function/call.html" target="blank">函数调用</a></p>
</li>
<li>
<p><a href="/code/language/python/function/argument.html" target="blank">函数参数</a></p>
</li>
<li>
<p><a href="/code/language/python/function/recursive.html" target="blank">递归调用</a></p>
</li>
</ul>`,r:{minutes:.15,words:44},title:"函数",i:"function"},["/code/language/python/function/index.html","/code/language/python/function/README.md"]],["v-061793ac","/code/language/python/function/argument.html",{y:"a",a:"廖雪峰",d:"2020-05-27T00:00:00.000Z",l:"2020年5月27日",c:["Python"],e:`<p>定义函数的时候，我们把参数的名字和位置确定下来，函数的接口定义就完成了。对于函数的调用者来说，只需要知道如何传递正确的参数，以及函数将返回什么样的值就够了，函数内部的复杂逻辑被封装起来，调用者无需了解。</p>
<p>Python 的函数定义非常简单，但灵活度却非常大。除了正常定义的必选参数外，还可以使用默认参数、可变参数和关键字参数，使得函数定义出来的接口，不但能处理复杂的参数，还可以简化调用者的代码。</p>
`,r:{minutes:13.37,words:4011},title:"函数的参数",i:"variable"},["/code/language/python/function/argument","/code/language/python/function/argument.md"]],["v-2ca65e29","/code/language/python/function/call.html",{y:"a",a:"廖雪峰",d:"2020-05-26T00:00:00.000Z",l:"2020年5月26日",c:["Python"],e:`<p>Python 内置了很多有用的函数，我们可以直接调用。</p>
<p>要调用一个函数，需要知道函数的名称和参数，比如求绝对值的函数 <code>abs</code>，只有一个参数。可以直接从 Python 的官方网站 <a href="http://docs.python.org/3/library/functions.html#abs" target="_blank" rel="noopener noreferrer">查看文档</a>:</p>
`,r:{minutes:1.65,words:496},title:"调用函数",i:"call"},["/code/language/python/function/call","/code/language/python/function/call.md"]],["v-fc30e528","/code/language/python/function/define.html",{y:"a",a:"廖雪峰",d:"2020-05-26T00:00:00.000Z",l:"2020年5月26日",c:["Python"],e:`<p>在 Python 中，定义一个函数要使用 <code>def</code> 语句，依次写出函数名、括号、括号中的参数和冒号 <code>:</code>，然后，在缩进块中编写函数体，函数的返回值用 <code>return</code> 语句返回。</p>
`,r:{minutes:3.99,words:1198},title:"定义函数",i:"define"},["/code/language/python/function/define","/code/language/python/function/define.md"]],["v-dd0a6282","/code/language/python/function/intro.html",{y:"a",a:"廖雪峰",d:"2020-05-25T00:00:00.000Z",l:"2020年5月25日",c:["Python"],e:'<p>我们知道圆的面积计算公式为: <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></p>',r:{minutes:1.73,words:519},title:"函数介绍",i:"info"},["/code/language/python/function/intro","/code/language/python/function/intro.md"]],["v-0416c3b9","/code/language/python/function/recursive.html",{y:"a",a:"廖雪峰",d:"2020-05-27T00:00:00.000Z",l:"2020年5月27日",c:["Python"],e:`<p>在函数内部，可以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是递归函数。</p>
`,r:{minutes:3.17,words:951},title:"递归函数",i:"refresh"},["/code/language/python/function/recursive","/code/language/python/function/recursive.md"]],["v-4f81c6bb","/code/language/python/functional-programming/",{y:"a",a:"廖雪峰",d:"2020-05-31T00:00:00.000Z",l:"2020年5月31日",c:["Python"],e:`<p>函数是 Python 内建支持的一种封装，我们通过把大段代码拆成函数，通过一层一层的函数调用，就可以把复杂任务分解成简单的任务，这种分解可以称之为面向过程的程序设计。函数就是面向过程的程序设计的基本单元。</p>
<p>而函数式编程(请注意多了一个“式”字)——Functional Programming，虽然也可以归结到面向过程的程序设计，但其思想更接近数学计算。</p>
<p>我们首先要搞明白计算机(Computer)和计算(Compute)的概念。</p>
<p>在计算机的层次上，CPU 执行的是加减乘除的指令代码，以及各种条件判断和跳转指令，所以，汇编语言是最贴近计算机的语言。</p>`,r:{minutes:1.89,words:568},title:"函数式编程",i:"function"},["/code/language/python/functional-programming/index.html","/code/language/python/functional-programming/README.md"]],["v-f95524f4","/code/language/python/functional-programming/anonymous-function.html",{y:"a",a:"廖雪峰",d:"2021-03-15T00:00:00.000Z",l:"2021年3月15日",c:["Python"],e:`<p>当我们在传入函数时，有些时候，不需要显式地定义函数，直接传入匿名函数更方便。</p>
<p>在 Python 中，对匿名函数提供了有限支持。还是以 <code>map()</code> 函数为例，计算 <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span> 时，除了定义一个 <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span> 的函数外，还可以直接传入匿名函数:</p>`,r:{minutes:1.18,words:354},title:"匿名函数",i:"anonymous"},["/code/language/python/functional-programming/anonymous-function","/code/language/python/functional-programming/anonymous-function.md"]],["v-e7b24e0e","/code/language/python/functional-programming/decorator.html",{y:"a",a:"廖雪峰",d:"2021-03-15T00:00:00.000Z",l:"2021年3月15日",c:["Python"],e:`<p>由于函数也是一个对象，而且函数对象可以被赋值给变量，所以，通过变量也能调用该函数。</p>
<div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'2021-3-15'</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f <span class="token operator">=</span> now
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">2021</span><span class="token operator">-</span><span class="token number">3</span><span class="token operator">-</span><span class="token number">15</span>
</code></pre></div>`,r:{minutes:3.49,words:1048},title:"装饰器",i:"decorate"},["/code/language/python/functional-programming/decorator","/code/language/python/functional-programming/decorator.md"]],["v-63939790","/code/language/python/functional-programming/parital-function.html",{y:"a",a:"廖雪峰",d:"2021-03-15T00:00:00.000Z",l:"2021年3月15日",c:["Python"],e:`<p>Python 的 <code>functools</code> 模块提供了很多有用的功能，其中一个就是偏函数 (Partial function) 。</p>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>要注意，这里的偏函数和数学意义上的偏函数不一样。</p>
</div>
<p>在介绍函数参数的时候，我们讲到，通过设定参数的默认值，可以降低函数调用的难度。而偏函数也可以做到这一点。举例如下:</p>
<p><code>int()</code> 函数可以把字符串转换为整数，当仅传入字符串时，<code>int()</code> 函数默认按十进制转换:</p>`,r:{minutes:2.06,words:619},title:"偏函数",i:"plugin"},["/code/language/python/functional-programming/parital-function","/code/language/python/functional-programming/parital-function.md"]],["v-7b8e695f","/code/language/python/functional-programming/return-function.html",{y:"a",a:"廖雪峰",d:"2020-06-02T00:00:00.000Z",l:"2020年6月2日",c:["Python"],e:`<h2> 函数作为返回值</h2>
<p>高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回。</p>
<p>我们来实现一个可变参数的求和。通常情况下，求和的函数是这样定义的:</p>
<div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">calc_sum</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
    ax <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> n <span class="token keyword">in</span> args<span class="token punctuation">:</span>
        ax <span class="token operator">=</span> ax <span class="token operator">+</span> n
    <span class="token keyword">return</span> ax
</code></pre></div>`,r:{minutes:2.94,words:881},title:"返回函数",i:"return"},["/code/language/python/functional-programming/return-function","/code/language/python/functional-programming/return-function.md"]],["v-435b5698","/code/language/python/guide/",{y:"a",a:"廖雪峰",d:"2020-05-19T00:00:00.000Z",l:"2020年5月19日",c:["Python"],e:`<p>本章节介绍 Python 的基础语法，帮助您尽快了解 Python 的基础内容</p>
`,r:{minutes:.29,words:88},title:"快速上手",i:"creative"},["/code/language/python/guide/index.html","/code/language/python/guide/README.md"]],["v-03bbd203","/code/language/python/guide/basic.html",{y:"a",a:"廖雪峰",d:"2020-05-21T00:00:00.000Z",l:"2020年5月21日",c:["Python"],e:`<p>Python 是一种计算机编程语言。计算机编程语言和我们日常使用的自然语言有所不同，最大的区别就是，自然语言在不同的语境下有不同的理解，而计算机要根据编程语言执行任务，就必须保证编程语言写出的程序决不能有歧义，所以，任何一种编程语言都有自己的一套语法，编译器或者解释器就是负责把符合语法的程序代码转换成 CPU 能够执行的机器码，然后执行。Python 也不例外。</p>
`,r:{minutes:9.92,words:2975},title:"Python 基础",i:"module"},["/code/language/python/guide/basic","/code/language/python/guide/basic.md"]],["v-83da8d94","/code/language/python/guide/condition.html",{y:"a",a:"廖雪峰",d:"2020-05-24T00:00:00.000Z",l:"2020年5月24日",c:["Python"],e:`<p>计算机之所以能做很多自动化的任务，因为它可以自己做条件判断。</p>
<p>比如，输入用户年龄，根据年龄打印不同的内容，在 Python 程序中，用 <code>if</code> 语句实现:</p>
`,r:{minutes:2.49,words:747},title:"条件判断",i:"condition"},["/code/language/python/guide/condition","/code/language/python/guide/condition.md"]],["v-13c3cbe8","/code/language/python/guide/dict-and-set.html",{y:"a",a:"廖雪峰",d:"2020-05-25T00:00:00.000Z",l:"2020年5月25日",c:["Python"],e:`<p><code>dict</code> 和 <code>set</code> 是 Python 中常用的数据结构。</p>
`,r:{minutes:9.76,words:2929},title:"dict 和 set",i:"map"},["/code/language/python/guide/dict-and-set","/code/language/python/guide/dict-and-set.md"]],["v-f3b0732e","/code/language/python/guide/exercise.html",{y:"a",a:"廖雪峰",d:"2020-06-02T00:00:00.000Z",l:"2020年6月2日",c:["Python"],e:`<h2> BMI</h2>
<p>小明的成绩从去年的 72 分提升到了今年的 85 分，请计算小明成绩提升的百分点，并用字符串格式化显示出 'xx.x%'，只保留小数点后 1 位:</p>
<p>答案<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><a class="footnote-anchor" id="footnote-ref1">
<hr class="footnotes-sep">
</a><section class="footnotes"><a class="footnote-anchor" id="footnote-ref1">
</a><ol class="footnotes-list"><a class="footnote-anchor" id="footnote-ref1">
</a><li id="footnote1" class="footnote-item"><a class="footnote-anchor" id="footnote-ref1"><div class="language-python" data-ext="py"><pre class="language-python"><code>score1 <span class="token operator">=</span> <span class="token number">72</span>

score2 <span class="token operator">=</span> <span class="token number">85</span>

result <span class="token operator">=</span> <span class="token punctuation">(</span>score2 <span class="token operator">-</span> score1<span class="token punctuation">)</span> <span class="token operator">/</span> score1 <span class="token operator">*</span> <span class="token number">100</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'小明成绩提升了%.1f%%'</span> <span class="token operator">%</span> result<span class="token punctuation">)</span>
</code></pre></div> </a><a href="#footnote-ref1" class="footnote-backref">↩︎</a></li>
</ol>
</section>`,r:{minutes:.31,words:94},title:"练习",i:"exercise"},["/code/language/python/guide/exercise","/code/language/python/guide/exercise.md"]],["v-159c09db","/code/language/python/guide/io.html",{y:"a",a:"廖雪峰",d:"2020-05-20T00:00:00.000Z",l:"2020年5月20日",c:["Python"],e:`<p>一个脚本语言少不了与用户进行交互，就一定涉及到输入输出。</p>
`,r:{minutes:3.55,words:1066},title:"输入和输出",i:"IO"},["/code/language/python/guide/io","/code/language/python/guide/io.md"]],["v-8278a984","/code/language/python/guide/list-and-tuple.html",{y:"a",a:"廖雪峰",d:"2020-05-23T00:00:00.000Z",l:"2020年5月23日",c:["Python"],e:`<p><code>list</code> 和 <code>tuple</code> 是 Python 中常用的数据结构。</p>
`,r:{minutes:4.5,words:1349},title:"list 和 tuple",i:"list"},["/code/language/python/guide/list-and-tuple","/code/language/python/guide/list-and-tuple.md"]],["v-53cd951d","/code/language/python/guide/loop.html",{y:"a",a:"廖雪峰",d:"2020-05-24T00:00:00.000Z",l:"2020年5月24日",c:["Python"],e:'<p>要计算 <span class="katex"><span class="katex-mathml"></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">3</span></span></span></span> ，我们可以直接写表达式:</p>',r:{minutes:3.43,words:1029},title:"循环",i:"loop"},["/code/language/python/guide/loop","/code/language/python/guide/loop.md"]],["v-efe14460","/code/language/python/guide/string.html",{y:"a",a:"廖雪峰",d:"2020-05-22T00:00:00.000Z",l:"2020年5月22日",c:["Python"],e:`<p>在最新的 Python 3 版本中，字符串是以 Unicode 编码的，也就是说，Python 的字符串支持多语言，例如:</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> print<span class="token punctuation">(</span><span class="token string">'包含中文的str'</span><span class="token punctuation">)</span>
包含中文的str
</code></pre></div>`,r:{minutes:5.43,words:1628},title:"字符串",i:"string"},["/code/language/python/guide/string","/code/language/python/guide/string.md"]],["v-20cff4f2","/code/language/python/guide/write.html",{y:"a",a:"廖雪峰",d:"2020-05-20T00:00:00.000Z",l:"2020年5月20日",c:["Python"],e:`<p>在正式编写第一个 Python 程序前，我们先复习一下什么是命令行模式和 Python 交互模式。</p>
`,r:{minutes:3.39,words:1017},title:"第一个 Python 程序",i:"info"},["/code/language/python/guide/write","/code/language/python/guide/write.md"]],["v-46679928","/code/language/python/intro/",{y:"a",a:"廖雪峰",d:"2020-05-25T00:00:00.000Z",l:"2020年5月25日",c:["Python"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/code/language/python/intro/intro.html" target="blank">Python 介绍</a></p>
</li>
<li>
<p><a href="/code/language/python/intro/install.html" target="blank">Python 安装</a></p>
</li>
<li>
<p><a href="/code/language/python/intro/interpreter.html" target="blank">解释器</a></p>
</li>
</ul>`,r:{minutes:.1,words:31},title:"介绍",i:"info"},["/code/language/python/intro/index.html","/code/language/python/intro/README.md"]],["v-2446fd74","/code/language/python/intro/install.html",{y:"a",a:"廖雪峰",d:"2020-05-18T00:00:00.000Z",l:"2020年5月18日",c:["Python"],g:["安装"],e:`<p>要开始学习 Python 编程，首先就得把 Python 安装到您的电脑里。安装后，您会得到 Python 解释器(就是负责运行 Python 程序的)，一个命令行交互环境，还有一个简单的集成开发环境。本节将指导您如何安装 Python。</p>
<h2> 在 Mac 上安装 Python</h2>
<p>如果您正在使用 Mac，系统是 OS X&gt;=10.9，那么系统自带的 Python 版本是 2.7。要安装最新的 Python 3.9，有两个方法:</p>
<p>方法一:从 Python 官网下载 Python 3.9 的安装程序，下载后双击运行并安装；</p>
<p>方法二:如果安装了 Homebrew，直接通过命令 brew install python3 安装即可。</p>`,r:{minutes:1.98,words:594},title:"安装 Python",i:"install"},["/code/language/python/intro/install","/code/language/python/intro/install.md"]],["v-4a2b6072","/code/language/python/intro/interpreter.html",{y:"a",a:"廖雪峰",d:"2020-05-19T00:00:00.000Z",l:"2020年5月19日",c:["Python"],e:`<p>当我们编写 Python 代码时，我们得到的是一个包含 Python 代码的以 <code>.py</code> 为扩展名的文本文件。要运行代码，就需要 Python 解释器去执行 <code>.py</code> 文件。</p>
`,r:{minutes:2.2,words:660},title:"Python 解释器",i:"back-stage"},["/code/language/python/intro/interpreter","/code/language/python/intro/interpreter.md"]],["v-271d75d6","/code/language/python/intro/intro.html",{y:"a",a:"廖雪峰",d:"2020-05-18T00:00:00.000Z",l:"2020年5月18日",c:["Python"],g:["介绍"],e:`<p>本节将简单介绍 Python 的历史。</p>
`,r:{minutes:4.31,words:1293},title:"Python 简介",i:"info"},["/code/language/python/intro/intro","/code/language/python/intro/intro.md"]],["v-5af931fe","/code/language/python/module/",{y:"a",a:"廖雪峰",d:"2021-03-27T00:00:00.000Z",l:"2021年3月27日",c:["Python"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/code/language/python/module/intro.html" target="blank">介绍</a></p>
</li>
<li>
<p><a href="/code/language/python/module/usage.html" target="blank">使用模块</a></p>
</li>
<li>
<p><a href="/code/language/python/module/install.html" target="blank">安装第三方模块</a></p>
</li>
</ul>`,r:{minutes:.12,words:35},title:"模块",i:"module"},["/code/language/python/module/index.html","/code/language/python/module/README.md"]],["v-435cedc8","/code/language/python/module/install.html",{y:"a",a:"廖雪峰",d:"2021-03-27T00:00:00.000Z",l:"2021年3月27日",c:["Python"],e:`<p>在 Python 中，安装第三方模块，是通过包管理工具 pip 完成的。</p>
<p>如果您正在使用 Mac 或 Linux，安装 pip 本身这个步骤就可以跳过了。</p>
<p>如果您正在使用 Windows，请参考 <a href="/code/language/python/intro/install.html" target="blank">安装 Python</a> 一节的内容，确保安装时勾选了 <code>pip</code> 和 <code>Add python.exe to Path</code>。</p>
<p>在命令提示符窗口下尝试运行 pip，如果 Windows 提示未找到命令，可以重新运行安装程序添加 pip。</p>`,r:{minutes:3.11,words:932},title:"安装第三方模块",i:"install"},["/code/language/python/module/install","/code/language/python/module/install.md"]],["v-fddb6b2a","/code/language/python/module/intro.html",{y:"a",a:"廖雪峰",d:"2021-03-27T00:00:00.000Z",l:"2021年3月27日",c:["Python"],e:`<p>在计算机程序的开发过程中，随着程序代码越写越多，在一个文件里代码就会越来越长，越来越不容易维护。为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里，这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。在 Python 中，一个 <code>.py</code> 文件就称之为一个模块 (Module) 。</p>
`,r:{minutes:2.8,words:841},title:"模块",i:"info"},["/code/language/python/module/intro","/code/language/python/module/intro.md"]],["v-65a32754","/code/language/python/module/usage.html",{y:"a",a:"廖雪峰",d:"2021-03-27T00:00:00.000Z",l:"2021年3月27日",c:["Python"],e:`<p>Python 本身就内置了很多非常有用的模块，只要安装完毕，这些模块就可以立刻使用。</p>
`,r:{minutes:3.62,words:1086},title:"使用模块",i:"config"},["/code/language/python/module/usage","/code/language/python/module/usage.md"]],["v-6730ea78","/code/language/python/oop/",{y:"a",a:"廖雪峰",d:"2021-03-28T00:00:00.000Z",l:"2021年3月28日",c:["Python"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/code/language/python/oop/intro.html" target="blank">介绍</a></p>
</li>
<li>
<p><a href="/code/language/python/oop/instance.html" target="blank">类和实例</a></p>
</li>
<li>
<p><a href="/code/language/python/oop/extend.html" target="blank">继承和多态</a></p>
</li>
<li>
<p><a href="/code/language/python/oop/property.html" target="blank">属性</a></p>
</li>
<li>
<p><a href="/code/language/python/oop/info.html" target="blank">获取对象信息</a></p>
</li>
<li>
<p><a href="/code/language/python/oop/customize.html" target="blank">定制类</a></p>
</li>
<li>
<p><a href="/code/language/python/oop/special.html" target="blank">特殊的 class</a></p>
</li>
</ul>`,r:{minutes:.18,words:54},title:"面向对象编程"},["/code/language/python/oop/index.html","/code/language/python/oop/README.md"]],["v-73a24a3a","/code/language/python/oop/customize.html",{y:"a",a:"廖雪峰",d:"2021-03-28T00:00:00.000Z",l:"2021年3月28日",c:["Python"],e:`<p>看到类似 <code>__slots__</code> 这种形如 <code>__xxx__</code> 的变量或者函数名就要注意，这些在 Python 中是有特殊用途的。</p>
<p><code>__slots__</code> 我们已经知道怎么用了，<code>__len__()</code> 方法我们也知道是为了能让 class 作用于 <code>len()</code> 函数。</p>
<p>除此之外，Python 的 class 中还有许多这样有特殊用途的函数，可以帮助我们定制类。</p>
<h2> <code>__str__</code></h2>
<p>我们先定义一个 Student 类，打印一个实例:</p>`,r:{minutes:7.43,words:2228},title:"定制类",i:"customize"},["/code/language/python/oop/customize","/code/language/python/oop/customize.md"]],["v-8fa6968a","/code/language/python/oop/extend.html",{y:"a",a:"廖雪峰",d:"2021-03-28T00:00:00.000Z",l:"2021年3月28日",c:["Python"],e:`<p>在 OOP 程序设计中，当我们定义一个 class 的时候，可以从某个现有的 class 继承，新的 class 称为子类 (Subclass) ，而被继承的 class 称为基类、父类或超类 (Base class、Super class) 。</p>
<p>比如，我们已经编写了一个名为 Animal 的 class，有一个 <code>run()</code> 方法可以直接打印:</p>
<div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Animal is running...'</span><span class="token punctuation">)</span>
</code></pre></div>`,r:{minutes:8.76,words:2629},title:"继承和多态",i:"extend"},["/code/language/python/oop/extend","/code/language/python/oop/extend.md"]],["v-1d5feaa7","/code/language/python/oop/info.html",{y:"a",a:"廖雪峰",d:"2021-03-28T00:00:00.000Z",l:"2021年3月28日",c:["Python"],e:`<p>当我们拿到一个对象的引用时，如何知道这个对象是什么类型、有哪些方法呢？</p>
<h2> 使用 <code>type()</code></h2>
<p>首先，我们来判断对象类型，使用 <code>type()</code> 函数:</p>
<p>基本类型都可以用 <code>type()</code> 判断:</p>
<div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'int'</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">'str'</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'str'</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">)</span> <span class="token string">'NoneType'</span><span class="token operator">&gt;</span>
</code></pre></div>`,r:{minutes:4.79,words:1436},title:"获取对象信息",i:"info"},["/code/language/python/oop/info","/code/language/python/oop/info.md"]],["v-0b4f55c0","/code/language/python/oop/instance.html",{y:"a",a:"廖雪峰",d:"2021-03-28T00:00:00.000Z",l:"2021年3月28日",c:["Python"],e:`<p>面向对象最重要的概念就是类 (Class) 和实例 (Instance) ，必须牢记类是抽象的模板，比如 <code>Student</code> 类，而实例是根据类创建出来的一个个具体的“对象”，每个对象都拥有相同的方法，但各自的数据可能不同。</p>
`,r:{minutes:6,words:1800},title:"类和实例",i:"class"},["/code/language/python/oop/instance","/code/language/python/oop/instance.md"]],["v-4754e3b1","/code/language/python/oop/intro.html",{y:"a",d:"2021-03-28T00:00:00.000Z",l:"2021年3月28日",c:["Python"],e:`<p>面向对象编程——Object Oriented Programming，简称 OOP，是一种程序设计思想。OOP 把对象作为程序的基本单元，一个对象包含了数据和操作数据的函数。</p>
<p>面向过程的程序设计把计算机程序视为一系列的命令集合，即一组函数的顺序执行。为了简化程序设计，面向过程把函数继续切分为子函数，即把大块函数通过切割成小块函数来降低系统的复杂度。</p>
<p>而面向对象的程序设计把计算机程序视为一组对象的集合，而每个对象都可以接收其他对象发过来的消息，并处理这些消息，计算机程序的执行就是一系列消息在各个对象之间传递。</p>
<p>在 Python 中，所有数据类型都可以视为对象，当然也可以自定义对象。自定义的对象数据类型就是面向对象中的类 (Class) 的概念。</p>`,r:{minutes:2.46,words:739},title:"面向对象编程",i:"info"},["/code/language/python/oop/intro","/code/language/python/oop/intro.md"]],["v-0ffcd3e0","/code/language/python/oop/property.html",{y:"a",a:"廖雪峰",d:"2021-03-28T00:00:00.000Z",l:"2021年3月28日",c:["Python"],e:`<h2> 私有属性</h2>
<p>在 Class 内部，可以有属性和方法，而外部代码可以通过直接调用实例变量的方法来操作数据，这样，就隐藏了内部的复杂逻辑。</p>
<p>但是，从前面 Student 类的定义来看，外部代码还是可以自由地修改一个实例的 <code>name</code>、<code>score</code> 属性:</p>
<div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">'Bart Simpson'</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>score
<span class="token number">59</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>score <span class="token operator">=</span> <span class="token number">99</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>score
<span class="token number">99</span>
</code></pre></div>`,r:{minutes:7.33,words:2200},title:"属性",i:"state"},["/code/language/python/oop/property","/code/language/python/oop/property.md"]],["v-59a21084","/code/language/python/oop/special.html",{y:"a",a:"廖雪峰",d:"2021-03-28T00:00:00.000Z",l:"2021年3月28日",c:["Python"],e:`<h2> <code>type()</code></h2>
<p>动态语言和静态语言最大的不同，就是函数和类的定义，不是编译时定义的，而是运行时动态创建的。</p>
<p>比方说我们要定义一个 <code>Hello</code> 的 class，就写一个 <code>hello.py</code> 模块:</p>
<div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Hello</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">'world'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Hello, %s.'</span> <span class="token operator">%</span> name<span class="token punctuation">)</span>
</code></pre></div>`,r:{minutes:9.1,words:2731},title:"特殊的 class",i:"any"},["/code/language/python/oop/special","/code/language/python/oop/special.md"]],["v-6863cc9e","/code/language/typescript/advanced/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["TypeScript"],e:`<p>本部分介绍一些高级的类型与技术。</p>
`,r:{minutes:.25,words:74},title:"进阶",i:"advance"},["/code/language/typescript/advanced/index.html","/code/language/typescript/advanced/README.md"]],["v-f0d4733a","/code/language/typescript/advanced/class-and-interfaces.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],e:`<p><a href="/code/language/typescript/basics/type-of-object-interfaces.html" target="blank">之前学习过</a>，接口(Interfaces)可以用于对「对象的形状(Shape)」进行描述。</p>
<p>这一章主要介绍接口的另一个用途，对类的一部分行为进行抽象。</p>
`,r:{minutes:1.86,words:558},title:"类与接口",i:"api"},["/code/language/typescript/advanced/class-and-interfaces","/code/language/typescript/advanced/class-and-interfaces.md"]],["v-15dd32d2","/code/language/typescript/advanced/class.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],e:`<p>传统方法中，JavaScript 通过构造函数实现类的概念，通过原型链实现继承。而在 ES6 中，我们终于迎来了 <code>class</code>。</p>
<p>TypeScript 除了实现了所有 ES6 中的类的功能以外，还添加了一些新的用法。</p>
<p>这一节主要介绍类的用法，下一节再介绍如何定义类的类型。</p>
`,r:{minutes:6.29,words:1888},title:"类",i:"class"},["/code/language/typescript/advanced/class","/code/language/typescript/advanced/class.md"]],["v-40c17b28","/code/language/typescript/advanced/declaration-merging.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],e:`<p>如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型:</p>
`,r:{minutes:1.14,words:341},title:"声明合并",i:"merge"},["/code/language/typescript/advanced/declaration-merging","/code/language/typescript/advanced/declaration-merging.md"]],["v-8b0e3c32","/code/language/typescript/advanced/enum.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],e:`<p>枚举(Enum)类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。</p>
`,r:{minutes:4.97,words:1492},title:"枚举",i:"enum"},["/code/language/typescript/advanced/enum","/code/language/typescript/advanced/enum.md"]],["v-251c5e07","/code/language/typescript/advanced/further-reading.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],e:`<p>此处记录了<a href="http://www.typescriptlang.org/docs/handbook/basic-types.html" target="_blank" rel="noopener noreferrer">官方手册</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/" target="_blank" rel="noopener noreferrer">中文版</a>)中包含，但是本书未涉及的概念。</p>
`,r:{minutes:2.66,words:797},title:"扩展阅读",i:"quote"},["/code/language/typescript/advanced/further-reading","/code/language/typescript/advanced/further-reading.md"]],["v-5edb8acc","/code/language/typescript/advanced/generics.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],e:`<p>泛型(Generics)是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。</p>
`,r:{minutes:4.12,words:1236},title:"泛型",i:"generic"},["/code/language/typescript/advanced/generics","/code/language/typescript/advanced/generics.md"]],["v-6ed22e89","/code/language/typescript/advanced/string-literal-types.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],e:`<p>字符串字面量类型用来约束取值只能是某几个字符串中的一个。</p>
`,r:{minutes:.63,words:190},title:"字符串字面量类型",i:"string"},["/code/language/typescript/advanced/string-literal-types","/code/language/typescript/advanced/string-literal-types.md"]],["v-1127c682","/code/language/typescript/advanced/tuple.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],e:`<p>数组合并了相同类型的对象，而元组(Tuple)合并了不同类型的对象。</p>
<p>元组起源于函数编程语言(如 F#)，这些语言中会频繁使用元组。</p>
`,r:{minutes:1.02,words:306},title:"元组",i:"list"},["/code/language/typescript/advanced/tuple","/code/language/typescript/advanced/tuple.md"]],["v-bdbcba86","/code/language/typescript/advanced/type-aliases.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],e:`<p>类型别名用来给一个类型起个新名字。</p>
`,r:{minutes:.37,words:111},title:"类型别名",i:"alias"},["/code/language/typescript/advanced/type-aliases","/code/language/typescript/advanced/type-aliases.md"]],["v-2a3f152e","/code/language/typescript/basics/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["TypeScript"],e:`<p>本部分介绍了 TypeScript 中的常用类型和一些基本概念，旨在让大家对 TypeScript 有个初步的理解。</p>
`,r:{minutes:.39,words:117},title:"基础",i:"module"},["/code/language/typescript/basics/index.html","/code/language/typescript/basics/README.md"]],["v-b5cdbcca","/code/language/typescript/basics/any.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],e:`<p>任意值(Any)用来表示允许赋值为任意类型。</p>
`,r:{minutes:.94,words:281},title:"任意值",i:"any"},["/code/language/typescript/basics/any","/code/language/typescript/basics/any.md"]],["v-0eb38230","/code/language/typescript/basics/built-in-objects.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],e:`<p>JavaScript 中有很多[内置对象][]，它们可以直接在 TypeScript 中当做定义好了的类型。</p>
<p>内置对象是指根据标准在全局作用域(Global)上存在的对象。这里的标准是指 ECMAScript 和其他环境(比如 DOM)的标准。</p>
`,r:{minutes:2.05,words:616},title:"内置对象",i:"object"},["/code/language/typescript/basics/built-in-objects","/code/language/typescript/basics/built-in-objects.md"]],["v-6193fda3","/code/language/typescript/basics/declaration-files.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],e:`<p>当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。</p>
<h2> 什么是声明语句</h2>
<p>假如我们想使用第三方库 jQuery，一种常见的方式是在 HTML 中通过 <code>&lt;script&gt;</code> 标签引入 jQuery，然后就可以使用全局变量 <code>$</code> 或 <code>jQuery</code> 了。</p>
<p>我们通常这样获取一个 <code>id</code> 是 <code>foo</code> 的元素:</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#foo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
<span class="token function">jQuery</span><span class="token punctuation">(</span><span class="token string">"#foo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,r:{minutes:27.52,words:8256},title:"声明文件",i:"notice"},["/code/language/typescript/basics/declaration-files","/code/language/typescript/basics/declaration-files.md"]],["v-85f3d8a2","/code/language/typescript/basics/primitive-data-types.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],e:`<p>JavaScript 的类型分为两种: 原始数据类型([Primitive data types][])和对象类型(Object types)。</p>
<p>原始数据类型包括: 布尔值、数值、字符串、<code>null</code>、<code>undefined</code> 以及 [ES6 中的新类型 <code>Symbol</code>][]。</p>
<p>本节主要介绍<strong>前五种</strong>原始数据类型在 TypeScript 中的应用。</p>
`,r:{minutes:2.77,words:832},title:"原始数据类型",i:"type"},["/code/language/typescript/basics/primitive-data-types","/code/language/typescript/basics/primitive-data-types.md"]],["v-cc37e3c8","/code/language/typescript/basics/type-assertion.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],e:`<p>类型断言(Type Assertion)可以用来手动指定一个值的类型。</p>
`,r:{minutes:1.59,words:476},title:"类型断言",i:"boolean"},["/code/language/typescript/basics/type-assertion","/code/language/typescript/basics/type-assertion.md"]],["v-697acf65","/code/language/typescript/basics/type-inference.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],e:`<p>如果没有明确的指定类型，那么 TypeScript 会依照类型推论(Type Inference)的规则推断出一个类型。</p>
`,r:{minutes:.72,words:215},title:"类型推论",i:"extend"},["/code/language/typescript/basics/type-inference","/code/language/typescript/basics/type-inference.md"]],["v-0db2b831","/code/language/typescript/basics/type-of-array.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],e:`<p>在 TypeScript 中，数组类型有多种定义方式，比较灵活。</p>
`,r:{minutes:2.3,words:689},title:"数组的类型",i:"array"},["/code/language/typescript/basics/type-of-array","/code/language/typescript/basics/type-of-array.md"]],["v-54dad760","/code/language/typescript/basics/type-of-function.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],e:`<blockquote>
<p><a href="https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch2.html" target="_blank" rel="noopener noreferrer">函数是 JavaScript 中的一等公民</a></p>
</blockquote>
`,r:{minutes:4.61,words:1382},title:"函数的类型",i:"function"},["/code/language/typescript/basics/type-of-function","/code/language/typescript/basics/type-of-function.md"]],["v-76bd067c","/code/language/typescript/basics/type-of-object-interfaces.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],e:`<p>在 TypeScript 中，我们使用接口(Interfaces)来定义对象的类型。</p>
`,r:{minutes:3.68,words:1105},title:"对象的类型——接口",i:"api"},["/code/language/typescript/basics/type-of-object-interfaces","/code/language/typescript/basics/type-of-object-interfaces.md"]],["v-552c52ec","/code/language/typescript/basics/union-types.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],e:`<p>联合类型(Union Types)表示取值可以为多种类型中的一种。</p>
`,r:{minutes:1.32,words:396},title:"联合类型",i:"structure"},["/code/language/typescript/basics/union-types","/code/language/typescript/basics/union-types.md"]],["v-9d4e28d0","/code/language/typescript/engineering/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["TypeScript"],e:`<p>掌握了 TypeScript 的语法就像学会了砌墙的工艺。</p>
<p>我们学习 TypeScript 的目的不是为了造一间小茅屋，而是为了造高楼大厦，这也正是 TypeScript 的类型系统带来的优势。</p>
<p>那么一项大工程应该如何开展呢? 本部分的内容就会介绍 TypeScript 工程化的最佳实践，具体内容包括:</p>
<ul>
<li><a href="/code/language/typescript/engineering/lint.html" target="blank">代码检查</a></li>
</ul>
`,r:{minutes:.37,words:112},title:"工程",i:"engine"},["/code/language/typescript/engineering/index.html","/code/language/typescript/engineering/README.md"]],["v-73edba1e","/code/language/typescript/engineering/lint.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],e:`<p>TypeScript 的代码检查应当使用 ESLint + <code>typescript-eslint-parser</code>。</p>
<h2> 什么是代码检查</h2>
<p>代码检查主要是用来发现代码错误、统一代码风格。</p>
<p>在 JavaScript 项目中，我们一般使用 ESLint 来进行代码检查。它通过插件化的特性极大的丰富了适用范围，搭配 <code>typescript-eslint-parser</code> 之后，甚至可以用来检查 TypeScript 代码。</p>
<h2> 为什么需要代码检查</h2>
<p>有人会觉得，JavaScript 非常灵活，所以需要代码检查。而 TypeScript 已经能够在编译阶段检查出很多问题了，为什么还需要代码检查呢?</p>`,r:{minutes:8.64,words:2591},title:"代码检查",i:"style"},["/code/language/typescript/engineering/lint","/code/language/typescript/engineering/lint.md"]],["v-05c4845f","/code/language/typescript/intro/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["TypeScript"],e:`<p>本部分介绍了在学习 TypeScript 之前需要了解的知识，具体内容包括:</p>
`,r:{minutes:.18,words:53},title:"简介",i:"info"},["/code/language/typescript/intro/index.html","/code/language/typescript/intro/README.md"]],["v-abdb2784","/code/language/typescript/intro/get-typescript.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],g:["安装"],e:`<p>TypeScript 的命令行工具安装方法如下:</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> typescript
</code></pre></div><p>以上命令会在全局环境下安装 <code>tsc</code> 命令，安装完成之后，我们就可以在任何地方执行 <code>tsc</code> 命令了。</p>
`,r:{minutes:.97,words:290},title:"安装 TypeScript",i:"install"},["/code/language/typescript/intro/get-typescript","/code/language/typescript/intro/get-typescript.md"]],["v-7552317a","/code/language/typescript/intro/hello-typescript.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],g:["快速上手"],e:`<p>我们从一个简单的例子开始。</p>
<p>将以下代码复制到 <code>hello.ts</code> 中:</p>
<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"Hello, "</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token string">"Tom"</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,r:{minutes:1.29,words:386},title:"Hello TypeScript",i:"creative"},["/code/language/typescript/intro/hello-typescript","/code/language/typescript/intro/hello-typescript.md"]],["v-5e699f3b","/code/language/typescript/intro/what-is-typescript.html",{y:"a",d:"2020-06-03T17:08:34.000Z",c:["TypeScript"],g:["介绍"],e:`<p>首先，我对 TypeScript 的理解如下:</p>
<p>[TypeScript][] 是 JavaScript 的一个超集，主要提供了<strong>类型系统</strong>和<strong>对 ES6 的支持</strong>，它由 Microsoft 开发，代码<a href="https://github.com/Microsoft/TypeScript" target="_blank" rel="noopener noreferrer">开源于 GitHub</a> 上。</p>
<p>其次引用[官网][typescript]的定义:</p>
<blockquote>
<p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.</p>
</blockquote>
<p>翻译成中文即是:</p>
<blockquote>
<p>TypeScript 是 JavaScript 的类型的超集，它可以编译成纯 JavaScript。编译出来的 JavaScript 可以运行在任何浏览器上。TypeScript 编译工具可以运行在任何服务器和任何系统上。TypeScript 是开源的。</p>
</blockquote>
`,r:{minutes:2.13,words:640},title:"什么是 TypeScript",i:"info"},["/code/language/typescript/intro/what-is-typescript","/code/language/typescript/intro/what-is-typescript.md"]],["v-1120439a","/code/mini-app/guide/ability/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["小程序"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/code/mini-app/guide/ability/network.html" target="blank">网络请求</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/ability/storage.html" target="blank">存储</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/ability/file-system.html" target="blank">文件系统</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/ability/debug.html" target="blank">调试</a></p>
</li>
</ul>`,r:{minutes:.1,words:31},title:"小程序能力",i:"ability"},["/code/mini-app/guide/ability/index.html","/code/mini-app/guide/ability/README.md"]],["v-44daa0d9","/code/mini-app/guide/ability/debug.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<h2> vConsole </h2>
<p>在真机上，如果想要查看 <code>console</code> API 输出的日志内容和额外的调试信息，需要在点击屏幕右上角的按钮打开的菜单里选择「打开调试」。此时小程序/小游戏会退出，重新打开后会右下角会出现一个 <code>vConsole</code> 按钮。点击 <code>vConsole</code> 按钮可以打开日志面板。</p>
<p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/vConsole-app.19b93c1e.jpg#width:350px" alt="Vconsole"></p>`,r:{minutes:2.16,words:647},title:"调试",i:"debug"},["/code/mini-app/guide/ability/debug","/code/mini-app/guide/ability/debug.md"]],["v-97a6cd28","/code/mini-app/guide/ability/file-system.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>文件系统是小程序提供的一套以小程序和用户维度隔离的存储以及一套相应的管理接口。通过 <code>wx.getFileSystemManager()</code> 可以获取到全局唯一的文件系统管理器，所有文件系统的管理操作通过 FileSystemManager 来调用。</p>
<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getFileSystemManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>文件主要分为两大类:</p>
<ul>
<li>代码包文件: 代码包文件指的是在项目目录中添加的文件。</li>
<li>本地文件: 通过调用接口本地产生，或通过网络下载下来，存储到本地的文件。</li>
</ul>
`,r:{minutes:4.51,words:1353},title:"文件系统",i:"file"},["/code/mini-app/guide/ability/file-system","/code/mini-app/guide/ability/file-system.md"]],["v-68cc3d1e","/code/mini-app/guide/ability/network.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>在小程序中使用网络相关的 API 时，需要注意下列问题，请开发者提前了解。</p>
<h2> 1. 服务器域名配置</h2>
<p>每个微信小程序需要事先设置一个通讯域名，小程序只可以跟指定的域名与进行网络通信。包括普通 HTTPS 请求(<code>wx.request</code>)、上传文件(<code>wx.uploadFile</code>)、下载文件(<code>wx.downloadFile</code>) 和 WebSocket 通信(<code>wx.connectSocket</code>)</p>
<h3> 配置流程</h3>
<p>服务器域名请在 「小程序后台-设置-开发设置-服务器域名」 中进行配置，配置时需要注意:</p>`,r:{minutes:3.74,words:1121},title:"网络",i:"network"},["/code/mini-app/guide/ability/network","/code/mini-app/guide/ability/network.md"]],["v-c119061e","/code/mini-app/guide/ability/storage.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>每个微信小程序都可以有自己的本地缓存，可以通过 <code>wx.setStorage</code> / <code>wx.setStorageSync</code>、<code>wx.getStorage</code> / <code>wx.getStorageSync</code>、<code>wx.clearStorage</code> / <code>wx.clearStorageSync</code>，<code>wx.removeStorage</code> / <code>wx.removeStorageSync</code> 对本地缓存进行读写和清理。</p>
<p>同一个微信用户，同一个小程序 storage 上限为 10MB。Storage 以用户维度隔离，同一台设备上，A 用户无法读取到 B 用户的数据。</p>
`,r:{minutes:.58,words:173},title:"存储",i:"storage"},["/code/mini-app/guide/ability/storage","/code/mini-app/guide/ability/storage.md"]],["v-0419817f","/code/mini-app/guide/config/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["小程序"],e:`<p>小程序使用 JSON 文件来描述自身的配置，小程序的配置主要分为全局配置、页面配置两种。</p>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>为了补充全局配置、页面配置的缺失，小程序配置还包括项目配置与 sitemap 配置。</p>
</div>
`,r:{minutes:2.04,words:611},title:"配置",i:"config"},["/code/mini-app/guide/config/index.html","/code/mini-app/guide/config/README.md"]],["v-1dfd49cc","/code/mini-app/guide/config/app-config.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>小程序根目录下的 app.json 文件用来对微信小程序进行全局配置。文件内容为一个 JSON 对象，有以下属性:</p>
`,r:{minutes:8.77,words:2630},title:"全局配置文档",i:"app"},["/code/mini-app/guide/config/app-config","/code/mini-app/guide/config/app-config.md"]],["v-5dac3018","/code/mini-app/guide/config/page-config.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>每一个小程序页面也可以使用 <code>.json</code> 文件来对本页面的窗口表现进行配置。</p>
`,r:{minutes:1.93,words:580},title:"页面配置",i:"page"},["/code/mini-app/guide/config/page-config","/code/mini-app/guide/config/page-config.md"]],["v-0c5df440","/code/mini-app/guide/config/sitemap-config.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>微信现已开放小程序内搜索，开发者可以通过 <code>sitemap.json</code> 配置，或者管理后台页面收录开关来配置其小程序页面是否允许微信索引。当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索词条触发该索引时，小程序的页面将可能展示在搜索结果中。爬虫访问小程序内页面时，会携带特定的 <code>user-agent: mpcrawler</code> 及场景值: <code>1129</code>。需要注意的是，若小程序爬虫发现的页面数据和真实用户的呈现不一致，那么该页面将不会进入索引中。</p>
<p>小程序根目录下的 sitemap.json 文件用于配置小程序及其页面是否允许被微信索引，文件内容为一个 JSON 对象，如果没有 <code>sitemap.json</code> ，则默认为所有页面都允许被索引。</p>
`,r:{minutes:3.04,words:912},title:"小程序内索引",i:"search"},["/code/mini-app/guide/config/sitemap-config","/code/mini-app/guide/config/sitemap-config.md"]],["v-79fd6080","/code/mini-app/guide/custom-component/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["小程序"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/code/mini-app/guide/custom-component/intro.html" target="blank">自定义组件介绍</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/custom-component/component.html" target="blank">构造器</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/custom-component/style.html" target="blank">组件模板和样式</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/custom-component/behavior.html" target="blank">Behavior</a> </p>
</li>
</ul>`,r:{minutes:.13,words:40},title:"自定义组件"},["/code/mini-app/guide/custom-component/index.html","/code/mini-app/guide/custom-component/README.md"]],["v-e0cabd72","/code/mini-app/guide/custom-component/behavior.html",{y:"a",d:"2021-01-19T12:39:17.000Z",c:["小程序"],e:`<p><code>Behavior</code> 注册一个 behavior，接受一个 Object 类型的参数。</p>
<h2> 参数</h2>
<table>
<thead>
<tr>
<th>定义段</th>
<th>类型</th>
<th>是否必填</th>
<th>描述</th>
<th>最低版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>properties</td>
<td>Object Map</td>
<td>否</td>
<td>同组件的属性</td>
<td></td>
</tr>
<tr>
<td>data</td>
<td>Object</td>
<td>否</td>
<td>同组件的数据</td>
<td></td>
</tr>
<tr>
<td>methods</td>
<td>Object</td>
<td>否</td>
<td>同自定义组件的方法</td>
<td></td>
</tr>
<tr>
<td>behaviors</td>
<td>String Array</td>
<td>否</td>
<td>引入其它的 behavior</td>
<td></td>
</tr>
<tr>
<td>created</td>
<td>Function</td>
<td>否</td>
<td>生命周期函数</td>
<td></td>
</tr>
<tr>
<td>attached</td>
<td>Function</td>
<td>否</td>
<td>生命周期函数</td>
<td></td>
</tr>
<tr>
<td>ready</td>
<td>Function</td>
<td>否</td>
<td>生命周期函数</td>
<td></td>
</tr>
<tr>
<td>moved</td>
<td>Function</td>
<td>否</td>
<td>生命周期函数</td>
<td></td>
</tr>
<tr>
<td>detached</td>
<td>Function</td>
<td>否</td>
<td>生命周期函数</td>
<td></td>
</tr>
</tbody>
</table>`,r:{minutes:.51,words:153},title:"Behavior"},["/code/mini-app/guide/custom-component/behavior","/code/mini-app/guide/custom-component/behavior.md"]],["v-3fc03a7c","/code/mini-app/guide/custom-component/component.html",{y:"a",d:"2021-01-19T12:39:17.000Z",c:["小程序"],e:`<p><code>Component</code> 构造器用于创建自定义组件，接受一个 Object 类型的参数。</p>
`,r:{minutes:6.26,words:1878},title:"框架接口"},["/code/mini-app/guide/custom-component/component","/code/mini-app/guide/custom-component/component.md"]],["v-5f57be6d","/code/mini-app/guide/custom-component/intro.html",{y:"a",d:"2021-01-19T12:39:17.000Z",c:["小程序"],e:`<h2> 用途</h2>
<ul>
<li>将页面内的功能模块抽象成自定义组件，以便在不同的页面中重复使用</li>
<li>将复杂的页面拆分成多个低耦合的模块，有助于代码维护。</li>
</ul>
<h2> 创建自定义组件</h2>
<p>类似于页面，一个自定义组件由 <code>json</code> <code>wxml</code> <code>wxss</code> <code>js</code> 4 个文件组成。</p>
<p>要编写一个自定义组件，首先需要在 json 文件中进行自定义组件声明(将 <code>component</code> 字段设为 <code>true</code> 可将这一组文件设为自定义组件):</p>`,r:{minutes:3.22,words:967},title:"自定义组件",i:"info"},["/code/mini-app/guide/custom-component/intro","/code/mini-app/guide/custom-component/intro.md"]],["v-1cc0ca48","/code/mini-app/guide/custom-component/style.html",{y:"a",d:"2021-01-19T12:39:17.000Z",c:["小程序"],e:`<p>类似于页面，自定义组件拥有自己的 wxml 模板和 wxss 样式。</p>
<h2> 组件模板</h2>
<p>组件模板的写法与页面模板相同。组件模板与组件数据结合后生成的节点树，将被插入到组件的引用位置上。</p>
<p>在组件模板中可以提供一个 <code>&lt;slot&gt;</code> 节点，用于承载组件引用时提供的子节点。</p>
<details class="custom-container details"><summary>代码示例</summary>
<p><a href="https://developers.weixin.qq.com/s/1udXLnmi6KY2" target="_blank" rel="noopener noreferrer">在开发者工具中预览效果</a></p>
<div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 组件模板 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrapper<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>这里是组件的内部节点<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 引用组件的页面模板 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component-tag-name</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 这部分内容将被放置在组件 &lt;slot&gt; 的位置上 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>这里是插入到组件slot中的内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component-tag-name</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details>`,r:{minutes:8.87,words:2660},title:"组件模板和样式",i:"decorate"},["/code/mini-app/guide/custom-component/style","/code/mini-app/guide/custom-component/style.md"]],["v-bb67d460","/code/mini-app/guide/frame/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["小程序"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/code/mini-app/guide/frame/intro.html" target="blank">小程序框架介绍</a></p>
</li>
<li>
<p><a href="/code/mini-app/guide/frame/scene.html" target="blank">场景值</a> </p>
</li>
<li>
<p><a href="/code/mini-app/guide/frame/env.html" target="blank">运行环境</a> </p>
</li>
<li>
<p><a href="/code/mini-app/guide/frame/mechanism.html" target="blank">运行机制</a> </p>
</li>
<li>
<p><a href="/code/mini-app/guide/frame/update.html" target="blank">更新机制</a> </p>
</li>
</ul>`,r:{minutes:.21,words:62},title:"框架",i:"frame"},["/code/mini-app/guide/frame/index.html","/code/mini-app/guide/frame/README.md"]],["v-2dda89dc","/code/mini-app/guide/frame/env.html",{y:"a",d:"2021-01-19T05:12:06.000Z",c:["小程序"],e:`<p>微信小程序运行在多种平台上: iOS(iPhone/iPad)微信客户端、Android 微信客户端、PC 微信客户端、Mac 微信客户端和用于调试的微信开发者工具。</p>
<p>各平台脚本执行环境以及用于渲染非原生组件的环境是各不相同的:</p>
<ul>
<li>
<p>在 iOS 上，小程序逻辑层的 JavaScript 代码运行在 JavaScriptCore 中，视图层是由 WKWebView 来渲染的，环境有 iOS 12、iOS 13 等；</p>
</li>
<li>
<p>在 Android 上，小程序逻辑层的 JavaScript 代码运行在 V8 中，视图层是由自研 XWeb 引擎基于 Mobile Chrome 内核来渲染的；</p>
</li>
<li>
<p>在 开发工具上，小程序逻辑层的 JavaScript 代码是运行在 NW.js 中，视图层是由 Chromium Webview 来渲染的。</p>
</li>
<li>
<p>在 PC 上，小程序逻辑层 JavaScript 和视图层 JavaScript 都是用 Chrome 内核</p>
</li>
<li>
<p>在 Mac 上，小程序逻辑层的 JavaScript 代码运行在 JavaScriptCore 中，视图层是由 WKWebView 来渲染的，与 iOS 一致</p>
</li>
</ul>`,r:{minutes:1.51,words:453},title:"小程序的运行环境",i:"leaf"},["/code/mini-app/guide/frame/env","/code/mini-app/guide/frame/env.md"]],["v-38000fbd","/code/mini-app/guide/frame/intro.html",{y:"a",d:"2021-01-12T08:20:51.000Z",c:["小程序"],e:`<p>小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。</p>
<p>整个小程序框架系统分为两部分: <a href="/code/mini-app/guide/service/" target="blank"><strong>逻辑层</strong></a> (App Service) 和 <a href="/code/mini-app/guide/view/" target="blank"><strong>视图层</strong></a> (../view)。小程序提供了自己的视图层描述语言 <a href="/code/mini-app/guide/view/wxml.html" target="blank">WXML</a> 和 <a href="/code/mini-app/guide/view/wxss.html" target="blank">WXSS</a>，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，让开发者能够专注于数据与逻辑。</p>
`,r:{minutes:2.16,words:647},title:"框架",i:"frame"},["/code/mini-app/guide/frame/intro","/code/mini-app/guide/frame/intro.md"]],["v-73a8909e","/code/mini-app/guide/frame/js-support.html",{y:"a",d:"2021-01-19T05:12:06.000Z",c:["小程序"],e:`<h2> 运行限制</h2>
<p>基于安全考虑，小程序中不支持动态执行 JS 代码，即:</p>
<ul>
<li>不支持使用 <code>eval</code> 执行 JS 代码</li>
<li>不支持使用 <code>new Function</code> 创建函数</li>
</ul>
<h2> 客户端 ES6 API 支持情况</h2>
<p>微信小程序已经支持了绝大部分的 ES6 API，已支持的 API 如下(部分 API 依赖系统版本):</p>
<table>
<thead>
<tr>
<th>String</th>
<th>iOS10+</th>
<th>Android</th>
</tr>
</thead>
<tbody>
<tr>
<td>codePointAt</td>
<td></td>
<td></td>
</tr>
<tr>
<td>normalize</td>
<td></td>
<td></td>
</tr>
<tr>
<td>includes</td>
<td></td>
<td></td>
</tr>
<tr>
<td>startsWith</td>
<td></td>
<td></td>
</tr>
<tr>
<td>endsWith</td>
<td></td>
<td></td>
</tr>
<tr>
<td>repeat</td>
<td></td>
<td></td>
</tr>
<tr>
<td>String.fromCodePoint</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>`,r:{minutes:.57,words:172},title:"JavaScript 支持情况",i:"javascript"},["/code/mini-app/guide/frame/js-support","/code/mini-app/guide/frame/js-support.md"]],["v-687a9220","/code/mini-app/guide/frame/mechanism.html",{y:"a",d:"2021-01-19T05:12:06.000Z",c:["小程序"],e:`<h2> 前台/后台状态</h2>
<p>小程序启动后，界面被展示给用户，此时小程序处于前台状态。</p>
<p>当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有完全终止运行，而是进入了后台状态，小程序还可以运行一小段时间。</p>
<p>当用户再次进入微信或再次打开小程序，小程序又会从后台进入前台。但如果用户很久没有再进入小程序，或者系统资源紧张，小程序可能被销毁，即完全终止运行。</p>
<h2> 小程序启动</h2>
<p>这样，小程序启动可以分为两种情况，一种是冷启动，一种是热启动。</p>
<ul>
<li>冷启动: 如果用户首次打开，或小程序销毁后被用户再次打开，此时小程序需要重新加载启动，即冷启动。</li>
<li>热启动: 如果用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时小程序并未被销毁，只是从后台状态进入前台状态，这个过程就是热启动。</li>
</ul>`,r:{minutes:5.85,words:1754},title:"小程序运行机制",i:"operate"},["/code/mini-app/guide/frame/mechanism","/code/mini-app/guide/frame/mechanism.md"]],["v-6912b19d","/code/mini-app/guide/frame/scene.html",{y:"a",d:"2021-01-12T08:20:51.000Z",c:["小程序"],e:`<p>场景值用来描述用户进入小程序的路径。</p>
`,r:{minutes:5.08,words:1524},title:"场景值",i:"number"},["/code/mini-app/guide/frame/scene","/code/mini-app/guide/frame/scene.md"]],["v-37957440","/code/mini-app/guide/frame/update.html",{y:"a",d:"2021-01-19T05:12:06.000Z",c:["小程序"],e:`<h2> 未启动时更新</h2>
<p>开发者在管理后台发布新版本的小程序之后，如果某个用户本地有小程序的历史版本，此时打开的可能还是旧版本。微信客户端会有若干个时机去检查本地缓存的小程序有没有更新版本，如果有则会静默更新到新版本。总的来说，开发者在后台发布新版本之后，无法立刻影响到所有现网用户，但最差情况下，也在发布之后 24 小时之内下发新版本信息到用户。用户下次打开时会先更新最新版本再打开。</p>
<h2> 启动时更新</h2>
<p>小程序每次冷启动时，都会检查是否有更新版本，如果发现有新版本，将会异步下载新版本的代码包，并同时用客户端本地的包进行启动，即新版本的小程序需要等下一次冷启动才会应用上。</p>`,r:{minutes:1.25,words:376},title:"小程序更新机制",i:"update"},["/code/mini-app/guide/frame/update","/code/mini-app/guide/frame/update.md"]],["v-184003f0","/code/mini-app/guide/service/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["小程序"],e:`<p>小程序开发框架的逻辑层 (App Service) 使用 JavaScript 引擎为小程序提供开发者 JavaScript 代码的运行环境以及微信小程序的特有功能。</p>
<p>逻辑层将数据进行处理后发送给视图层，同时接受视图层的事件反馈。</p>
<p>开发者写的所有代码最终将会打包成一份 JavaScript 文件，并在小程序启动的时候运行，直到小程序销毁。这一行为类似 ServiceWorker，所以逻辑层也称之为 App Service。</p>
`,r:{minutes:1.15,words:346},title:"逻辑层",i:"process"},["/code/mini-app/guide/service/index.html","/code/mini-app/guide/service/README.md"]],["v-70096960","/code/mini-app/guide/service/app.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。 </p>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。</p>
</div>
`,r:{minutes:2.94,words:883},title:"App",i:"app"},["/code/mini-app/guide/service/app","/code/mini-app/guide/service/app.md"]],["v-262f21a8","/code/mini-app/guide/service/lifetime.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<div class="custom-container tip">
<p class="custom-container-title">提示</p>
</div>
<p>下图说明了页面 Page 实例的生命周期。</p>
<p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/page-lifecycle.2e646c86.png" alt="lifetime"></p>
`,r:{minutes:.27,words:82},title:"生命周期",i:"state"},["/code/mini-app/guide/service/lifetime","/code/mini-app/guide/service/lifetime.md"]],["v-70732ae5","/code/mini-app/guide/service/module.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>此部分是高效复用小程序代码的方式。</p>
<p>模块化的思路是将一些公共的代码抽离成为一个单独的 js 文件，作为一个模块。</p>
<p>模块只有通过 <code>module.exports</code> 或者 <code>exports</code> 才能对外暴露接口。</p>
`,r:{minutes:1.92,words:575},title:"模块化",i:"module"},["/code/mini-app/guide/service/module","/code/mini-app/guide/service/module.md"]],["v-acff2abc","/code/mini-app/guide/service/page.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>注册小程序中的一个页面。接受一个 Object 类型参数，其指定页面的初始数据、生命周期回调、事件处理函数等。 </p>
`,r:{minutes:8.85,words:2654},title:"Page",i:"page"},["/code/mini-app/guide/service/page","/code/mini-app/guide/service/page.md"]],["v-55eacf0e","/code/mini-app/guide/service/register.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<h2> 注册小程序 </h2>
<p>每个小程序都需要在 <code>app.js</code> 中调用 <code>App</code> 方法注册小程序示例，绑定生命周期回调函数、错误监听和页面不存在监听函数等。</p>
<p>详细的参数含义和使用请参考 <a href="/code/mini-app/guide/service/app.html" target="blank">App 参考文档</a>。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app.js</span>
<span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLaunch</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something initial when launch.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something when show.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something when hide.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onError</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">globalData</span><span class="token operator">:</span> <span class="token string">"I am global data"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.12,words:636},title:"注册",i:"config"},["/code/mini-app/guide/service/register","/code/mini-app/guide/service/register.md"]],["v-a560af90","/code/mini-app/guide/service/route.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>在小程序中所有页面的路由全部由框架进行管理。</p>
`,r:{minutes:1.93,words:579},title:"页面路由",i:"router"},["/code/mini-app/guide/service/route","/code/mini-app/guide/service/route.md"]],["v-5b12db36","/code/mini-app/guide/service/run.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<h2> 小程序启动</h2>
<p>小程序启动会有两种情况，一种是「冷启动」，一种是「热启动」。</p>
<ul>
<li>热启动: 假如用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时无需重新启动，只需将后台态的小程序切换到前台，这个过程就是热启动；</li>
<li>冷启动: 用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动，即冷启动。</li>
</ul>
<p>小程序没有重启的概念。</p>
<h2> 前台/后台状态</h2>
<p>当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有直接销毁，而是进入了<strong>后台</strong>状态；</p>`,r:{minutes:1.55,words:466},title:"小程序运行机制",i:"play"},["/code/mini-app/guide/service/run","/code/mini-app/guide/service/run.md"]],["v-0450ba08","/code/mini-app/guide/view/",{y:"a",d:"2022-02-06T16:01:38.000Z",c:["小程序"],e:`<p>框架的视图层由 WXML 与 WXSS 编写，由组件来进行展示。</p>
<p>将逻辑层的数据反应成视图，同时将视图层的事件发送给逻辑层。</p>
<ul>
<li>
<p>WXML (WeiXin Markup language) 用于描述页面的结构。</p>
</li>
<li>
<p>WXS (WeiXin Script) 是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。</p>
</li>
<li>
<p>WXSS (WeiXin Style Sheet) 用于描述页面的样式。</p>
</li>
<li>
<p>组件 (Component) 是视图的基本组成单元。</p>
</li>
</ul>
`,r:{minutes:.83,words:249},title:"视图层 View",i:"layout"},["/code/mini-app/guide/view/index.html","/code/mini-app/guide/view/README.md"]],["v-6dd771d1","/code/mini-app/guide/view/animation.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>此部分在初步学习小程序的时候直接略过即可。</p>
</div>
<h2> 界面动画的常见方式</h2>
<p>在小程序中，通常可以使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions" target="_blank" rel="noopener noreferrer">CSS 渐变</a> 和 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations" target="_blank" rel="noopener noreferrer">CSS 动画</a> 来创建简易的界面动画。(这也是 Mr.Hope 主要使用的动画方式)</p>`,r:{minutes:5.59,words:1676},title:"动画",i:"animation"},["/code/mini-app/guide/view/animation","/code/mini-app/guide/view/animation.md"]],["v-15c673f8","/code/mini-app/guide/view/component.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>框架为开发者提供了一系列基础组件，开发者可以通过组合这些基础组件进行快速开发。详细介绍请参考 <a href="https://developers.weixin.qq.com/miniprogram/dev/component/" target="_blank" rel="noopener noreferrer">组件文档</a>。</p>
<p>什么是组件:</p>
<ul>
<li>
<p>组件是视图层的基本组成单元。</p>
</li>
<li>
<p>组件自带一些功能与微信风格一致的样式。</p>
</li>
<li>
<p>一个组件通常包括 <strong>开始标签</strong> 和 <strong>结束标签</strong>，属性 用来修饰这个组件，内容 在两个标签之内。</p>
<div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tagname</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
Content goes here ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tagname</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>所有组件与属性都是小写，以连字符 <code>-</code> 连接</p>
</div>
</li>
</ul>
`,r:{minutes:1.53,words:460},title:"基础组件",i:"plugin"},["/code/mini-app/guide/view/component","/code/mini-app/guide/view/component.md"]],["v-2cf6e456","/code/mini-app/guide/view/condition-render.html",{y:"a",d:"2021-01-19T05:12:06.000Z",c:["小程序"],e:`<h2> wx:if</h2>
<p>在框架中，使用 <code>wx:if=""</code> 来判断是否需要渲染该代码块:</p>
<div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{condition}}<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> True <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,r:{minutes:1.34,words:402},title:"条件渲染",i:"condition"},["/code/mini-app/guide/view/condition-render","/code/mini-app/guide/view/condition-render.md"]],["v-01fc8b56","/code/mini-app/guide/view/data-bind.html",{y:"a",d:"2021-01-19T05:12:06.000Z",c:["小程序"],e:`<p>WXML 中的动态数据均来自对应 <code>Page</code> 的 <code>data</code>。</p>
`,r:{minutes:2.09,words:626},title:"数据绑定",i:"rank"},["/code/mini-app/guide/view/data-bind","/code/mini-app/guide/view/data-bind.md"]],["v-5f49767b","/code/mini-app/guide/view/event.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<h2> 什么是事件</h2>
<ul>
<li>事件是视图层到逻辑层的通讯方式。</li>
<li>事件可以将用户的行为反馈到逻辑层进行处理。</li>
<li>事件可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数。</li>
<li>事件对象可以携带额外信息，如 <code>id</code>, <code>dataset</code>, <code>touches</code>。</li>
</ul>
<h2> 事件的使用方式</h2>
<p>在组件中绑定一个事件处理函数，如 <code>bindtap</code>，当用户点击该组件的时候会在该页面对应的 <code>Page</code> 中找到相应的事件处理函数。</p>`,r:{minutes:9.2,words:2759},title:"事件",i:"activity"},["/code/mini-app/guide/view/event","/code/mini-app/guide/view/event.md"]],["v-4adb0560","/code/mini-app/guide/view/list-render.html",{y:"a",d:"2021-01-19T05:12:06.000Z",c:["小程序"],e:`<h2> wx:for</h2>
<p>在组件上使用 <code>wx:for</code> 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。</p>
<p>默认数组的当前项的下标变量名默认为 <code>index</code>，数组当前项的变量名默认为 <code>item</code></p>
<div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{array}}<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  {{index}}: {{item.message}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,r:{minutes:2.74,words:821},title:"列表渲染",i:"loop"},["/code/mini-app/guide/view/list-render","/code/mini-app/guide/view/list-render.md"]],["v-bbd42168","/code/mini-app/guide/view/model.html",{y:"a",d:"2021-01-18T14:35:23.000Z",c:["小程序"],e:`<blockquote>
<p>基础库 2.9.3 开始支持</p>
</blockquote>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>此部分在初步学习小程序的时候直接略过即可。</p>
</div>
<h2> 语法</h2>
<p>在 WXML 中，普通的属性的绑定是单向的。例如:</p>
<div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{value}}<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,r:{minutes:1.96,words:588},title:"简易双向绑定",i:"async"},["/code/mini-app/guide/view/model","/code/mini-app/guide/view/model.md"]],["v-f0611518","/code/mini-app/guide/view/rendering-cache.html",{y:"a",d:"2021-01-19T05:12:06.000Z",c:["小程序"],e:`<blockquote>
<p>基础库 2.11.1 开始支持</p>
</blockquote>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>此部分在初步学习小程序的时候直接略过即可。</p>
</div>
<h2> 初始渲染缓存工作原理</h2>
<p>小程序页面的初始化分为两个部分。</p>
<ul>
<li>逻辑层初始化: 载入必需的小程序代码、初始化页面 <code>this</code> 对象(也包括它涉及到的所有自定义组件的 this 对象)、将相关数据发送给视图层。</li>
<li>视图层初始化: 载入必需的小程序代码，然后等待逻辑层初始化完毕并接收逻辑层发送的数据，最后渲染页面。</li>
</ul>`,r:{minutes:4.16,words:1247},title:"初始渲染缓存",i:"cache"},["/code/mini-app/guide/view/rendering-cache","/code/mini-app/guide/view/rendering-cache.md"]],["v-59358b0a","/code/mini-app/guide/view/resizable.html",{y:"a",d:"2021-01-19T05:12:06.000Z",c:["小程序"],e:`<h2> 显示区域尺寸</h2>
<p>显示区域指小程序界面中可以自由布局展示的区域。在默认情况下，小程序显示区域的尺寸自页面初始化起就不会发生变化。但以下两种方式都可以改变这一默认行为。</p>
<h3> 在手机上启用屏幕旋转支持</h3>
<p>从小程序基础库版本 2.4.0 开始，小程序在手机上支持屏幕旋转。使小程序中的页面支持屏幕旋转的方法是: 在 app.json 的 window 段中设置 <code>"pageOrientation": "auto"</code> ，或在页面 json 文件中配置 <code>"pageOrientation": "auto"</code>。</p>`,r:{minutes:2.65,words:795},title:"响应显示区域变化",i:"view"},["/code/mini-app/guide/view/resizable","/code/mini-app/guide/view/resizable.md"]],["v-b7241244","/code/mini-app/guide/view/selector.html",{y:"a",d:"2021-01-19T05:12:06.000Z",c:["小程序"],e:`<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>此部分在初步学习小程序的时候直接略过即可。</p>
</div>
<h2> WXML 节点信息</h2>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html" target="_blank" rel="noopener noreferrer">节点信息查询 API</a> 可以用于获取节点属性、样式、在界面上的位置等信息。</p>`,r:{minutes:3.13,words:940},title:"获取界面上的节点信息",i:"select"},["/code/mini-app/guide/view/selector","/code/mini-app/guide/view/selector.md"]],["v-19ff4723","/code/mini-app/guide/view/template.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>WXML 提供模板 (template)，可以在模板中定义代码片段，然后在不同的地方调用。</p>
`,r:{minutes:1.65,words:495},title:"模板",i:"template"},["/code/mini-app/guide/view/template","/code/mini-app/guide/view/template.md"]],["v-7452791d","/code/mini-app/guide/view/wxml.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>WXML (WeiXin Markup Language) 是框架设计的一套标签语言，结合基础组件、事件系统，可以构建出页面的结构。</p>
`,r:{minutes:.76,words:229},title:"WXML",i:"code"},["/code/mini-app/guide/view/wxml","/code/mini-app/guide/view/wxml.md"]],["v-6b499376","/code/mini-app/guide/view/wxs-event.html",{y:"a",d:"2021-01-18T14:35:23.000Z",c:["小程序"],e:`<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>此部分在初步学习小程序的时候直接略过即可。</p>
</div>
<h2> 背景</h2>
<p>有频繁用户交互的效果在小程序上表现是比较卡顿的，例如页面有 2 个元素 A 和 B，用户在 A 上做 <code>touchmove</code> 手势，要求 B 也跟随移动，<a href="https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html" target="_blank" rel="noopener noreferrer">movable-view</a> 就是一个典型的例子。一次 <code>touchmove</code> 事件的响应过程为:</p>`,r:{minutes:3.59,words:1077},title:"WXS 事件",i:"activity"},["/code/mini-app/guide/view/wxs-event","/code/mini-app/guide/view/wxs-event.md"]],["v-55011963","/code/mini-app/guide/view/wxs.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>此部分在初步学习小程序的时候直接略过即可。</p>
</div>
<p>WXS (WeiXin Script) 是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。</p>
<ol>
<li>WXS 不依赖于运行时的基础库版本，可以在所有版本的小程序中运行。</li>
<li>WXS 与 JavaScript 是不同的语言，有自己的语法，并不和 JavaScript 一致。</li>
<li>WXS 的运行环境和其他 JavaScript 代码是隔离的，WXS 中不能调用其他 JavaScript 文件中定义的函数，也不能调用小程序提供的 API。</li>
<li>WXS 函数不能作为组件的事件回调。</li>
<li>由于运行环境的差异，在 iOS 设备上小程序内的 WXS 会比 JavaScript 代码快 2 ~ 20 倍。在 Android 设备上二者运行效率无差异。</li>
</ol>
`,r:{minutes:1.25,words:374},title:"WXS",i:"script"},["/code/mini-app/guide/view/wxs","/code/mini-app/guide/view/wxs.md"]],["v-84ac6e08","/code/mini-app/guide/view/wxss.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>WXSS (WeiXin Style Sheets) 是一套样式语言，用于描述 WXML 的组件样式。</p>
<p>WXSS 用来决定 WXML 的组件应该怎么显示。</p>
<p>为了适应广大的前端开发者，WXSS 具有 CSS 大部分特性。同时为了更适合开发微信小程序，WXSS 对 CSS 进行了扩充以及修改。</p>
<p>与 CSS 相比，WXSS 扩展的特性有:</p>
<ul>
<li>尺寸单位</li>
<li>样式导入</li>
</ul>
<p>与 CSS 相比，WXSS 缺失的特性有:</p>
<ul>
<li>一部分高级选择器</li>
<li>一部分 CSS3 高级功能</li>
</ul>
`,r:{minutes:2.19,words:658},title:"WXSS",i:"css"},["/code/mini-app/guide/view/wxss","/code/mini-app/guide/view/wxss.md"]],["v-6ed03c7c","/code/website/css/guide/",{y:"a",d:"2019-09-05T00:00:00.000Z",l:"2019年9月5日",c:["CSS"],g:["快速上手"],e:`<p>CSS 指层叠样式表 (<strong>C</strong>ascading <strong>S</strong>tyle <strong>S</strong>heets)。</p>
`,r:{minutes:2.85,words:855},title:"快速上手",i:"creative"},["/code/website/css/guide/index.html","/code/website/css/guide/README.md"]],["v-0500ab2c","/code/website/css/guide/box.html",{y:"a",d:"2019-09-06T00:00:00.000Z",l:"2019年9月6日",c:["CSS"],g:["快速上手"],e:`<p>CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括: 边距，边框，填充，和实际内容。</p>
`,r:{minutes:1.93,words:580},title:"盒模型简介",i:"box"},["/code/website/css/guide/box","/code/website/css/guide/box.md"]],["v-20f0ad21","/code/website/css/guide/cascade.html",{y:"a",d:"2019-09-06T00:00:00.000Z",l:"2019年9月6日",c:["CSS"],g:["快速上手"],e:`<p>本文介绍 CSS 的一些最基本的概念: 层叠、优先级和继承。</p>
`,r:{minutes:6.47,words:1942},title:"优先级和继承",i:"sort"},["/code/website/css/guide/cascade","/code/website/css/guide/cascade.md"]],["v-168cefd2","/code/website/css/guide/common.html",{y:"a",d:"2019-09-06T00:00:00.000Z",l:"2019年9月6日",c:["CSS"],g:["快速上手"],e:`<p>本章节介绍 CSS 的最常见，也是最基础属性。</p>
`,r:{minutes:3.79,words:1137},title:"常见属性说明",i:"info"},["/code/website/css/guide/common","/code/website/css/guide/common.md"]],["v-7a51ec1b","/code/website/css/guide/declaration.html",{y:"a",d:"2019-09-05T00:00:00.000Z",l:"2019年9月5日",c:["CSS"],g:["快速上手"],e:`<h2> 值的专一性</h2>
<p>CSS 每个属性都会有且仅有一个值。</p>
<ul>
<li>如果您设置了多个值，最终优先级最高的值会被应用、</li>
<li>如果您没有设置值，则会应用默认值。默认值可以是 <code>unset</code>(未设置), <code>inherit</code> (继承父属性值), <code>initial</code> (初始值)。</li>
</ul>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>如果属性未知或某个值对给定属性无效，则声明被视为无效，并被浏览器的 CSS 引擎完全忽略。</p>
</div>`,r:{minutes:1.3,words:389},title:"CSS 声明",i:"object"},["/code/website/css/guide/declaration","/code/website/css/guide/declaration.md"]],["v-3e54ab50","/code/website/css/guide/import.html",{y:"a",d:"2019-09-05T00:00:00.000Z",l:"2019年9月5日",c:["CSS"],g:["快速上手"],e:`<p>有三种方式引入并应用 CSS。</p>
<h2> 外部样式表</h2>
<p>外部样式表将样式写入 CSS 文件中，在 HTML 中使用 <code>&lt;link&gt;</code> 引用，可以根据实际需要放在 <code>&lt;head&gt;</code> 标签里或 <code>&lt;body&gt;</code> 标签的末尾。比如:</p>
<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mystyle.css<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,r:{minutes:1.14,words:343},title:"引入 CSS",i:"link"},["/code/website/css/guide/import","/code/website/css/guide/import.md"]],["v-02dacd5e","/code/website/css/guide/selector.html",{y:"a",d:"2019-09-05T00:00:00.000Z",l:"2019年9月5日",c:["CSS"],g:["快速上手"],e:`<p>CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。</p>
<p>选择器所选择的元素，叫做“选择器的对象”。</p>
`,r:{minutes:2.35,words:705},title:"选择器简介",i:"select"},["/code/website/css/guide/selector","/code/website/css/guide/selector.md"]],["v-71dc7f0c","/code/website/css/intro/",{y:"a",d:"2019-09-06T00:00:00.000Z",l:"2019年9月6日",c:["CSS"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/code/website/css/intro/selector.html" target="blank">CSS 选择器</a></p>
</li>
<li>
<p><a href="/code/website/css/intro/box.html" target="blank">CSS 盒模型</a></p>
</li>
<li>
<p><a href="/code/website/css/intro/background-and-border.html" target="blank">背景与边框</a></p>
</li>
<li>
<p><a href="/code/website/css/intro/font.html" target="blank">CSS 字体</a></p>
</li>
<li>
<p><a href="/code/website/css/intro/text-direction.html" target="blank">文本方向</a></p>
</li>
<li>
<p><a href="/code/website/css/intro/overflow.html" target="blank">溢出</a></p>
</li>
<li>
<p><a href="/code/website/css/intro/value.html" target="blank">CSS 值</a></p>
</li>
<li>
<p><a href="/code/website/css/intro/replaced.html" target="blank">可替换元素</a></p>
</li>
<li>
<p><a href="/code/website/css/intro/media.html" target="blank">媒体查询</a></p>
</li>
</ul>`,r:{minutes:.44,words:132},title:"CSS 介绍",i:"info"},["/code/website/css/intro/index.html","/code/website/css/intro/README.md"]],["v-5333caa4","/code/website/css/intro/background-and-border.html",{y:"a",d:"2019-09-06T00:00:00.000Z",l:"2019年9月6日",c:["CSS"],e:`<h2> 背景样式</h2>
<h3> 背景颜色</h3>
<p><code>background-color</code> 属性定义了 CSS 中任何元素的背景颜色。属性接受任何有效的颜色值。背景色扩展到元素的内容和内边距的下面。</p>

<h3> 背景图片</h3>
<p><code>background-image</code> 属性允许在元素的背景中显示图像。</p>
<p>默认情况下，大图不会缩小以适应方框，因此我们只能看到它的一个小角，而小图则是平铺以填充方框。</p>

<p>如果除了背景图像外，还指定了背景颜色，则图像将显示在颜色的顶部。尝试向上面的示例添加一个 <code>background-color</code> 属性，看看效果如何。</p>`,r:{minutes:7.37,words:2211},title:"背景与边框",i:"frame"},["/code/website/css/intro/background-and-border","/code/website/css/intro/background-and-border.md"]],["v-3fa85cfa","/code/website/css/intro/box.html",{y:"a",d:"2019-09-06T00:00:00.000Z",l:"2019年9月6日",c:["CSS"],e:`<p>在 CSS 中，所有的元素都被一个个的“盒子(box)”包围着。</p>
`,r:{minutes:9.63,words:2888},title:"盒模型",i:"box"},["/code/website/css/intro/box","/code/website/css/intro/box.md"]],["v-69b33c5e","/code/website/css/intro/font.html",{y:"a",d:"2019-09-05T00:00:00.000Z",l:"2019年9月5日",c:["CSS"],e:`<h2> 文本</h2>
<p>元素中的文本是布置在元素的内容框中。以内容区域的左上角作为起点 (或者是右上角，是在 RTL 语言的情况下)，一直延续到行的结束部分。一旦达到行的尽头，它就会进到下一行，然后继续，再接着下一行，直到所有内容都放入了盒子中。文本内容表现地像一些内联元素，被布置到相邻的行上，除非到达了行的尽头，否则不会换行，或者您想强制地手动造成换行的话，您可以使用 <code>&lt;br&gt;</code> 元素。</p>
<p>用于样式文本的 CSS 属性通常可以分为两类:</p>
<ul>
<li><strong>字体样式</strong>: 作用于字体的属性，会直接应用到文本中，比如使用哪种字体，字体的大小是怎样的，字体是粗体还是斜体，等等。</li>
<li><strong>文本布局风格</strong>: 作用于文本的间距以及其他布局功能的属性，比如，允许操纵行与字之间的空间，以及在内容框中，文本如何对齐。</li>
</ul>`,r:{minutes:12.86,words:3859},title:"文字样式",i:"format"},["/code/website/css/intro/font","/code/website/css/intro/font.md"]],["v-a1ab80fe","/code/website/css/intro/media.html",{y:"a",d:"2019-09-05T00:00:00.000Z",l:"2019年9月5日",c:["CSS"],g:["CSS"],e:`<p><strong>媒体查询</strong> (Media queries) 非常实用，尤其是当您想要根据设备的大致类型 (如打印设备与带屏幕的设备) 或者特定的特征和设备参数 (例如屏幕分辨率和浏览器视窗宽度) 来修改网站或应用程序时。</p>
`,r:{minutes:10.65,words:3196},title:"媒体查询",i:"search"},["/code/website/css/intro/media","/code/website/css/intro/media.md"]],["v-3291128b","/code/website/css/intro/overflow.html",{y:"a",d:"2019-09-06T00:00:00.000Z",l:"2019年9月6日",c:["CSS"],e:`<p>溢出是在盒子无法容纳下太多的内容的时候发生的。</p>
<h2> 概念</h2>
<p>我们知道，CSS 中万物皆盒，因此我们可以通过给 <code>width</code> 和 <code>height</code>(或者 <code>inline-size</code> 和 <code>block-size</code>) 赋值的方式来约束盒子的尺寸。溢出是在您往盒子里面塞太多东西的时候发生的，所以盒子里面的东西也不会老老实实待着。CSS 给了您好几种工具来控制溢出。</p>
<h2> CSS 尽可能不丢弃内容</h2>
<p>在默认情况下，CSS 会将元素溢出的部分显示在和盒子外。</p>`,r:{minutes:4.13,words:1239},title:"溢出",i:"overflow"},["/code/website/css/intro/overflow","/code/website/css/intro/overflow.md"]],["v-69be0f1d","/code/website/css/intro/replaced.html",{y:"a",d:"2019-09-06T00:00:00.000Z",l:"2019年9月6日",c:["CSS"],e:`<h2> 替换元素</h2>
<p>图像和视频被描述为替换元素。 这意味着 CSS 不能影响这些元素的内部布局，仅影响它们在页面上于其他元素中的位置。</p>
<div class="custom-container info">
<p class="custom-container-title">可替换元素</p>
<p>在 CSS 中，可替换元素(replaced element)的展现效果不是由 CSS 来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于 CSS 的。</p>
<p>简单来说，它们的内容不受当前文档的样式的影响。CSS 可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。某些可替换元素，例如 <code>&lt;iframe&gt;</code> 元素，可能具有自己的样式表，但它们不会继承父文档的样式。</p>
<p>CSS 能对可替换元素产生的唯一影响在于，部分属性支持控制元素内容在其框中的位置或定位方式。</p>
</div>`,r:{minutes:3.2,words:959},title:"可替换元素",i:"change"},["/code/website/css/intro/replaced","/code/website/css/intro/replaced.md"]],["v-e3e99664","/code/website/css/intro/selector.html",{y:"a",d:"2019-09-05T00:00:00.000Z",l:"2019年9月5日",c:["CSS"],g:["CSS"],e:`<p>CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。</p>
<p>选择器所选择的元素，叫做“选择器的对象”。</p>
`,r:{minutes:4.12,words:1237},title:"选择器",i:"select"},["/code/website/css/intro/selector","/code/website/css/intro/selector.md"]],["v-503fc08f","/code/website/css/intro/sizing.html",{y:"a",d:"2019-09-06T00:00:00.000Z",l:"2019年9月6日",c:["CSS"],e:`<h2> 原始尺寸与固有尺寸</h2>
<p>在受 CSS 设置影响之前，HTML 元素有其原始的尺寸。一个直观的例子就是图像。一副图像的长和宽由这个图像文件自身确定。这个尺寸就是固有尺寸。</p>
<p>一个空的 <code>&lt;div&gt;</code> 是没有尺寸的。如果您在您的 HTML 文件中添加一个空 <code>&lt;div&gt;</code> 并给予其边框，您会在页面上看到一条线。</p>

<h2> 设置具体的尺寸</h2>
<p>当给元素指定尺寸时，我们将其称为<strong>外部尺寸</strong>。 我们可以给它一个具体的 <code>width</code> 和 <code>height</code> 值, 不论它的内容是什么，它将都是该尺寸。</p>`,r:{minutes:4.24,words:1272},title:"调整大小",i:"resize"},["/code/website/css/intro/sizing","/code/website/css/intro/sizing.md"]],["v-085d06ce","/code/website/css/intro/text-direction.html",{y:"a",d:"2019-09-06T00:00:00.000Z",l:"2019年9月6日",c:["CSS"],e:`<h2> 书写模式</h2>
<p>CSS 中的书写模式是指文本的排列方向是横向还是纵向的。<code>writing-mode</code> 属性使我们从一种模式切换到另一种模式。为此，您不必使用一种竖向的语言——您还可以更改部分文字的方向以实现创新性的布局。</p>
<p>可以使用 <code>writing-mode: vertical-rl</code> 对一个标题的显示进行设置，将标题文本变为竖向。</p>
<p>竖向文本在平面设计中很常见，也可以为您的网页设计增添更加有趣的外观。</p>

<p><code>writing-mode</code> 的三个值分别是:</p>
<ul>
<li><code>horizontal-tb</code>: 块流向从上至下。对应的文本方向是横向的。</li>
<li><code>vertical-rl</code>: 块流向从右向左。对应的文本方向是纵向的。</li>
<li><code>vertical-lr</code>: 块流向从左向右。对应的文本方向是纵向的。</li>
</ul>`,r:{minutes:4.08,words:1224},title:"文本方向",i:"direction"},["/code/website/css/intro/text-direction","/code/website/css/intro/text-direction.md"]],["v-9555e3d8","/code/website/css/intro/value.html",{y:"a",d:"2019-09-06T00:00:00.000Z",l:"2019年9月6日",c:["CSS"],e:`<h2> CSS 的值</h2>
<p>在 CSS 规范上，您将能够发现值的存在，CSS 有多种值类型，它们被尖括号包围，如 <code>&lt;color&gt;</code> 或 <code>&lt;length&gt;</code>。</p>
<p>当您看到值 <code>&lt;color&gt;</code> 对特定属性有效时，这意味着您可以使用任何有效的颜色作为该属性的值。</p>
<h3> 数字，长度和百分比</h3>
<table>
<thead>
<tr>
<th>数值类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>&lt;integer&gt;</code></td>
<td>整数。如 <code>1024</code> 或 <code>-55</code>。</td>
</tr>
<tr>
<td><code>&lt;number&gt;</code></td>
<td>小数 (也可以为整数)。如: <code>0.255</code>、<code>128</code> 或 <code>-1.2</code>。</td>
</tr>
<tr>
<td><code>&lt;dimension&gt;</code></td>
<td><code>&lt;number&gt;</code> + 附加单位。如: <code>45deg</code>、<code>5s</code> 或 <code>10px</code>。<br><code>&lt;dimension&gt;</code> 是一个大类别，包括 <code>&lt;length&gt;</code>、<code>&lt;angle&gt;</code>、<code>&lt;time&gt;</code> 和 <code>&lt;resolution&gt;</code> 类型。</td>
</tr>
<tr>
<td><code>&lt;percentage&gt;</code></td>
<td>一些其他值的一部分，例如 <code>50%</code>。<br>百分比值总是相对于另一个量，例如，一个元素的长度相对于其父元素的长度。</td>
</tr>
</tbody>
</table>`,r:{minutes:8.27,words:2482},title:"值与单位",i:"number"},["/code/website/css/intro/value","/code/website/css/intro/value.md"]],["v-527c4b9c","/code/website/css/layout/",{y:"a",d:"2019-09-06T00:00:00.000Z",l:"2019年9月6日",c:["CSS"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/code/website/css/layout/intro.html" target="blank">布局介绍</a></p>
</li>
<li>
<p><a href="/code/website/css/layout/flow.html" target="blank">正常流布局</a></p>
</li>
<li>
<p><a href="/code/website/css/layout/flex.html" target="blank">弹性布局</a></p>
</li>
<li>
<p><a href="/code/website/css/layout/exercise.html" target="blank">实战练习</a></p>
</li>
<li>
<p><a href="/code/website/css/layout/grid.html" target="blank">网格布局</a></p>
</li>
</ul>`,r:{minutes:.13,words:40},title:"CSS 布局",i:"layout"},["/code/website/css/layout/index.html","/code/website/css/layout/README.md"]],["v-5717d036","/code/website/css/layout/exercise.html",{y:"a",a:"阮一峰",d:"2020-10-20T00:00:00.000Z",l:"2020年10月20日",c:["CSS"],e:`<p>本章包括了一些经典的布局实战案例。</p>
`,r:{minutes:9.17,words:2751},title:"布局实战",i:"exercise"},["/code/website/css/layout/exercise","/code/website/css/layout/exercise.md"]],["v-a2ff4f38","/code/website/css/layout/flex.html",{y:"a",a:"阮一峰",d:"2019-09-06T00:00:00.000Z",l:"2019年9月6日",c:["CSS"],e:`<p>Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。</p>
`,r:{minutes:8.76,words:2627},title:"弹性模型",i:"flex"},["/code/website/css/layout/flex","/code/website/css/layout/flex.md"]],["v-38389ece","/code/website/css/layout/float.html",{y:"a",d:"2019-09-06T00:00:00.000Z",l:"2019年9月6日",c:["CSS"],e:`<p>在网站布局中，应当以 normal flow, flex 和 grid 布局为主。只有在需要特殊样式无法满足时，再考虑 float 布局。</p>
<h2> 简介</h2>
<p>把一个元素“浮动”(float)起来，会改变该元素本身和在正常布局流(normal flow)中跟随它的其他元素的行为。这一元素会浮动到左侧或右侧，并且从正常布局流(normal flow)中移除，这时候其他的周围内容就会在这个被设置浮动(float)的元素周围环绕。</p>
<p><code>float</code> 属性有四个可能的值:</p>
<ul>
<li><code>inherit</code>: 继承父元素的浮动属性。</li>
<li><code>left</code>: 将元素浮动到左侧。</li>
<li><code>right</code>: 将元素浮动到右侧。</li>
<li><code>none</code>: 默认值, 不浮动。</li>
</ul>`,r:{minutes:7.61,words:2282},title:"浮动",i:"float"},["/code/website/css/layout/float","/code/website/css/layout/float.md"]],["v-846c5f62","/code/website/css/layout/flow.html",{y:"a",d:"2019-09-06T00:00:00.000Z",l:"2019年9月6日",c:["CSS"],e:`<h3> 元素特性</h3>
<ul>
<li>
<p>一个块级元素的内容宽度是其父元素的 100%，其高度与其内容高度一致。</p>
</li>
<li>
<p>内联元素的 <code>width</code> <code>height</code> 与内容一致。您无法设置内联元素的 <code>width</code> <code>height</code>。</p>
</li>
<li>
<p>如果您想控制内联元素的尺寸，您需要为元素设置 <code>display: block;</code> 或 <code>display: inline-block</code>。<code>inline-block</code> 混合了 <code>inline</code> 和 <code>block</code> 的特性。</p>
</li>
</ul>`,r:{minutes:1.91,words:573},title:"正常布局流",i:"flow"},["/code/website/css/layout/flow","/code/website/css/layout/flow.md"]],["v-6383d537","/code/website/css/layout/grid.html",{y:"a",a:"阮一峰",d:"2020-10-20T00:00:00.000Z",l:"2020年10月20日",c:["CSS"],e:`<h2> 概述</h2>
<p>网格布局 (Grid) 是最强大的 CSS 布局方案。它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。</p>

<p>上图这样的布局，就是 Grid 布局的拿手好戏。</p>
<div class="custom-container tip">
<p class="custom-container-title">与 flex 的区别</p>
<p>Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别。</p>
<p>Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大。</p>
</div>`,r:{minutes:31.54,words:9463},title:"网格布局",i:"grid"},["/code/website/css/layout/grid","/code/website/css/layout/grid.md"]],["v-6b707689","/code/website/css/layout/intro.html",{y:"a",d:"2019-09-06T00:00:00.000Z",l:"2019年9月6日",c:["CSS"],e:`<h2> 正常布局流</h2>
<p>正常布局流(normal flow)是指在不对页面进行任何布局控制时，浏览器默认的 HTML 布局方式。HTML 元素完全按照源码中出现的先后次序显示。</p>

<p>出现在另一个元素下面的元素被描述为块元素，与出现在另一个元素旁边的内联元素不同，内联元素就像段落中的单个单词一样。</p>
<div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<p>关于内联元素和块元素，请见 <a href="/code/website/css/intro/box.html" target="blank">CSS 介绍 → 盒模型</a></p>
</div>`,r:{minutes:12.89,words:3867},title:"排版介绍",i:"info"},["/code/website/css/layout/intro","/code/website/css/layout/intro.md"]],["v-1737c155","/code/website/html/definition/",{y:"a",d:"2019-09-02T00:00:00.000Z",l:"2019年9月2日",c:["HTML"],e:`<h2> 定义列表</h2>
<ul>
<li>
<p><a href="/code/website/html/definition/uri.html" target="blank">URI 统一资源标识符</a></p>
</li>
<li>
<p><a href="/code/website/html/definition/url.html" target="blank">URL 统一资源定位符</a></p>
</li>
<li>
<p><a href="/code/website/html/definition/seo.html" target="blank">SEO 搜索引擎优化</a></p>
</li>
<li>
<p><a href="/code/website/html/definition/mime.html" target="blank">MIME Type 媒体类型</a></p>
</li>
</ul>`,r:{minutes:.16,words:48},title:"定义",i:"info"},["/code/website/html/definition/index.html","/code/website/html/definition/README.md"]],["v-fa26e920","/code/website/html/definition/mime.html",{y:"a",d:"2019-09-02T00:00:00.000Z",l:"2019年9月2日",c:["HTML"],e:`<p>MIME type，即媒体类型(media type) (有时是“内容类型(content type)”) 是指示文件类型的字符串，与文件一起发送。</p>
<p>例如，一个声音文件可能被标记为 <code>audio/ogg</code> ，一个图像文件可能是 <code>image/png</code>。</p>
<p>它与传统 Windows 上的文件扩展名有相同目的。</p>
`,r:{minutes:.3,words:91},title:"MIME type",i:"info"},["/code/website/html/definition/mime","/code/website/html/definition/mime.md"]],["v-0bbf52f1","/code/website/html/definition/seo.html",{y:"a",d:"2019-09-02T00:00:00.000Z",l:"2019年9月2日",c:["HTML"],e:`<h2> 简介</h2>
<p>搜索引擎优化 (<strong>S</strong>earch <strong>E</strong>ngine <strong>O</strong>ptimization)，是一种透过了解搜索引擎的运作规则来调整网站，以及提高目的网站在有关搜索引擎内排名的方式。由于不少研究发现，搜索引擎的用户往往只会留意搜索结果最前面的几个条目，所以不少网站都希望透过各种形式来影响搜索引擎的排序，让自己的网站可以有优秀的搜索排名。</p>
<p>所谓“针对搜索引擎作最优化的处理”，是指为了要让网站更容易被搜索引擎接受。搜索引擎会将网站彼此间的内容做一些相关性的资料比对，然后再由浏览器将这些内容以最快速且接近最完整的方式，呈现给搜索者。搜索引擎优化就是通过搜索引擎的规则进行优化，为用户打造更好的用户体验，最终的目的就是做好用户体验。</p>`,r:{minutes:1.38,words:414},title:"SEO",i:"info"},["/code/website/html/definition/seo","/code/website/html/definition/seo.md"]],["v-fe14c97c","/code/website/html/definition/uri.html",{y:"a",d:"2019-09-02T00:00:00.000Z",l:"2019年9月2日",c:["HTML"],e:`<h2> 简介</h2>
<p><strong>统一资源标识符</strong>(英语: Uniform Resource Identifier，缩写: URI)在电脑术语中是一个用于标识某一互联网资源名称的字符串。</p>
<p>该种标识允许用户对网络中(一般指万维网)的资源通过特定的协议进行交互操作。URI 的最常见的形式是统一资源定位符(URL)，经常指定为非正式的网址。更罕见的用法是统一资源名称(URN)，其目的是通过提供一种途径。用于在特定的名字空间资源的标识，以补充网址。</p>
<h2> 与 URL 和 URN 的关系</h2>
<h3> URN</h3>
<p><strong>统一资源名称</strong>(英语: Uniform Resource Name，缩写: URN)是统一资源标识(URI)的历史名字，它使用 <code>urn:</code> 作为 URI scheme。</p>`,r:{minutes:3.46,words:1039},title:"URI",i:"info"},["/code/website/html/definition/uri","/code/website/html/definition/uri.md"]],["v-f3d7b5c2","/code/website/html/definition/url.html",{y:"a",d:"2019-09-02T00:00:00.000Z",l:"2019年9月2日",c:["HTML"],e:`<h2> 简介</h2>
<p><strong>统一资源定位符</strong>(英语: Uniform Resource Locator，缩写: URL；或称统一资源定位器、定位地址、URL 地址，俗称网页地址或简称网址)是因特网上标准的资源的地址(Address)，如同在网络上的门牌。</p>
<p>统一资源定位符的标准格式如下:</p>
<div class="language-text" data-ext="text"><pre class="language-text"><code>[协议类型]://[服务器地址]:[端口号]/[资源层级UNIX文件路径][文件名]?[查询]#[片段ID]
</code></pre></div>`,r:{minutes:2.25,words:675},title:"URL",i:"info"},["/code/website/html/definition/url","/code/website/html/definition/url.md"]],["v-3520260c","/code/website/html/guide/",{y:"a",d:"2019-09-01T00:00:00.000Z",l:"2019年9月1日",c:["HTML"],g:["快速上手"],e:`<p>本章能让您快速了解 HTML 并学会编写它。</p>
`,r:{minutes:7.76,words:2328},title:"快速上手",i:"creative"},["/code/website/html/guide/index.html","/code/website/html/guide/README.md"]],["v-914cf70e","/code/website/html/guide/tag.html",{y:"a",d:"2019-09-01T00:00:00.000Z",l:"2019年9月1日",c:["HTML"],g:["快速上手"],e:`<h2> HTML 标题</h2>
<p>HTML 标题 (Heading) 是通过 <code>&lt;h1&gt;</code> - <code>&lt;h6&gt;</code> 标签来定义的。</p>

<h2> HTML 段落</h2>
<p>HTML 段落是通过标签 <code>&lt;p&gt;</code> 来定义的。</p>

<h2> HTML 列表</h2>
<p>文档许多内容都是列表，HTML 有一些特别的列表元素。标记列表通常包括至少两个元素。最常用的列表类型为:</p>
<ul>
<li>无序列表 (Unordered List) 中项目的顺序不重要，比如购物清单。用一个 <code>&lt;ul&gt;</code> 元素包围。</li>
<li>有序列表 (Ordered List) 中项目的顺序很重要，比如使用指南。用一个 <code>&lt;ol&gt;</code> 元素包围。</li>
</ul>`,r:{minutes:2.42,words:727},title:"常见标签",i:"code"},["/code/website/html/guide/tag","/code/website/html/guide/tag.md"]],["v-2f07a0ec","/code/website/html/intro/",{y:"a",d:"2019-09-02T00:00:00.000Z",l:"2019年9月2日",c:["HTML"],e:`<h2> HTML 介绍</h2>
<ul>
<li>
<p><a href="/code/website/html/intro/history.html" target="blank">历史</a></p>
</li>
<li>
<p><a href="/code/website/html/intro/head.html" target="blank">Head 标签</a></p>
</li>
<li>
<p><a href="/code/website/html/intro/basic.html" target="blank">基本标签</a></p>
</li>
<li>
<p><a href="/code/website/html/intro/link.html" target="blank">链接</a></p>
</li>
<li>
<p><a href="/code/website/html/intro/image.html" target="blank">图片</a></p>
</li>
<li>
<p><a href="/code/website/html/intro/svg.html" target="blank">矢量图形</a></p>
</li>
<li>
<p><a href="/code/website/html/intro/media.html" target="blank">视频与音频</a></p>
</li>
<li>
<p><a href="/code/website/html/intro/table.html" target="blank">表格</a></p>
</li>
<li>
<p><a href="/code/website/html/intro/embed.html" target="blank">嵌入</a></p>
</li>
<li>
<p><a href="/code/website/html/intro/format.html" target="blank">格式化文档</a></p>
</li>
<li>
<p><a href="/code/website/html/intro/layout.html" target="blank">网站布局</a></p>
</li>
</ul>`,r:{minutes:.2,words:61},title:"HTML 介绍",i:"info"},["/code/website/html/intro/index.html","/code/website/html/intro/README.md"]],["v-77dfa475","/code/website/html/intro/basic.html",{y:"a",d:"2019-09-02T00:00:00.000Z",l:"2019年9月2日",c:["HTML"],g:["HTML"],e:`<p>本章是最常见的的 HTML 标签介绍。</p>
`,r:{minutes:10.01,words:3003},title:"基础内容",i:"module"},["/code/website/html/intro/basic","/code/website/html/intro/basic.md"]],["v-dfcdc6ac","/code/website/html/intro/embed.html",{y:"a",d:"2019-09-02T00:00:00.000Z",l:"2019年9月2日",c:["HTML"],e:`<h2> Iframe</h2>
<p><code>&lt;iframe&gt;</code> 元素旨在允许您将其他 Web 文档嵌入到当前文档中。这很适合将第三方内容嵌入您的网站，您可能无法直接控制，也不希望实现自己的版本 - 例如来自在线视频提供商的视频，Disqus 等评论系统，在线地图提供商，广告横幅等。</p>
<div class="custom-container tip">
<p class="custom-container-title">案例</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://developer.mozilla.org/en-US/docs/Glossary<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span>
  <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
  <span class="token attr-name">allowfullscreen</span>
  <span class="token attr-name">sandbox</span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://developer.mozilla.org/en-US/docs/Glossary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      Fallback link for browsers that don't support iframes
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,r:{minutes:5.42,words:1627},title:"嵌入",i:"frame"},["/code/website/html/intro/embed","/code/website/html/intro/embed.md"]],["v-495c4178","/code/website/html/intro/format.html",{y:"a",d:"2019-09-02T00:00:00.000Z",l:"2019年9月2日",c:["HTML"],e:`<p>HTML 中有许多其他元素可以用于格式化文本。本文介绍标记引文、描述列表、计算机代码和其他相关文本、下标和上标、联系信息等。</p>
`,r:{minutes:5.79,words:1737},title:"格式化",i:"format"},["/code/website/html/intro/format","/code/website/html/intro/format.md"]],["v-02c46aa2","/code/website/html/intro/head.html",{y:"a",d:"2019-09-02T00:00:00.000Z",l:"2019年9月2日",c:["HTML"],e:`<p>在页面加载完成的时候，标签 <code>&lt;head&gt;</code> 里的内容，是不会在页面中显示出来的。</p>
<p><code>&lt;head&gt;</code> 包含了像页面的 <code>&lt;title&gt;</code>(标题) ,CSS (如果您选择用 CSS 来为 HTML 内容添加样式)，指向自定义图标的链接和其他的元数据 (描述 HTML 的数据，比如，作者，和描述文档的重要关键词)。</p>
`,r:{minutes:4.07,words:1220},title:"head 标签",i:"heading"},["/code/website/html/intro/head","/code/website/html/intro/head.md"]],["v-37a4494f","/code/website/html/intro/history.html",{y:"a",d:"2019-09-02T00:00:00.000Z",l:"2019年9月2日",c:["HTML"],g:["介绍"],e:`<p>1990 年，由于对 Web 未来发展的远见，Tim Berners-Lee 提出了 超文本 的概念，并在第二年在 SGML 的基础上将其正式定义为一个标记语言。IETF 于 1993 年正式开始制定 HTML 规范，并在经历了几个版本的草案后于 1995 年发布了 HTML 2.0 版本。1994 年，Berners-Lee 为了 Web 发展而成立了 W3C。1996 年，W3C 接管了 HTML 的标准化工作，并在 1 年后发布了 HTML 3.2 推荐标准。1999 年，HTML 4.0 发布，并在 2000 年成为 ISO 标准。</p>
<p>自那以后，W3C 几乎放弃了 HTML 而转向 XHTML，并于 2004 年成立了另一个独立的小组 WHATWG。幸运的是，WHATWG 后来又转回来参与了 HTML5 标准的制定，两个组织(译注: 即 W3C 和 WHATWG)在 2008 年发布了第一份草案，并在 2014 年发布了 HTML5 标准的最终版。</p>`,r:{minutes:.81,words:242},title:"HTML 历史",i:"time"},["/code/website/html/intro/history","/code/website/html/intro/history.md"]],["v-64df0368","/code/website/html/intro/image.html",{y:"a",d:"2019-09-02T00:00:00.000Z",l:"2019年9月2日",c:["HTML"],e:`<h2> 插入图片</h2>
<p>我们可以用 <code>&lt;img&gt;</code> 元素来把图片放到网页上。它是一个空元素(也就是无法包含内容，可以省略闭合标签)，最少只需要一个 <code>src</code> (一般读作其全称 source)来使其生效。<code>src</code> 属性包含了指向我们想要引入的图片的路径，可以是相对路径或绝对 URL，就像 <code>&lt;a&gt;</code> 元素的 <code>href</code> 属性一样。</p>
<p>如果您有一幅文件名为 dinosaur.jpg 的图片，且它与您的 HTML 页面存放在相同路径下，那么您可以这样嵌入它:</p>`,r:{minutes:10,words:3e3},title:"图片",i:"pic"},["/code/website/html/intro/image","/code/website/html/intro/image.md"]],["v-6a524625","/code/website/html/intro/layout.html",{y:"a",d:"2019-09-02T00:00:00.000Z",l:"2019年9月2日",c:["HTML"],e:`<p>HTML 不仅能够定义网页的单独部分 (例如“段落”或“图片”)，还可以使用块级元素 (例如“标题栏”、“导航菜单”、“主内容列”) 来定义网站中的复合区域。本文将探讨如何规划基本的网站结构，并根据规划的结构来编写 HTML。</p>
`,r:{minutes:7.91,words:2373},title:"网站布局",i:"layout"},["/code/website/html/intro/layout","/code/website/html/intro/layout.md"]],["v-aa51ae56","/code/website/html/intro/link.html",{y:"a",d:"2019-09-02T00:00:00.000Z",l:"2019年9月2日",c:["HTML"],e:`<p>超链接是互联网提供的最令人兴奋的创新之一，它们从一开始就一直是互联网的一个特性，使互联网成为互联的网络。超链接使我们能够将我们的文档链接到任何其他文档(或其他资源)，也可以链接到文档的指定部分，我们可以在一个简单的网址上提供应用程序(与必须先安装的本地应用程序或其他东西相比)。几乎任何网络内容都可以转换为链接，点击(或激活)超链接将使网络浏览器转到另一个网址(URL)。</p>
`,r:{minutes:9.38,words:2813},title:"超链接",i:"link"},["/code/website/html/intro/link","/code/website/html/intro/link.md"]],["v-2e7dea7f","/code/website/html/intro/media.html",{y:"a",d:"2019-09-02T00:00:00.000Z",l:"2019年9月2日",c:["HTML"],e:`<h2> 简介</h2>
<p>HTML5 标准推出了 <code>&lt;video&gt;</code> 和 <code>&lt;audio&gt;</code> 标签，以及一些 JavaScript 和 APIs 用于对其进行控制。</p>
<h2> <code>&lt;video&gt;</code> 元素</h2>
<p><code>&lt;video&gt;</code> 允许您轻松地嵌入一段视频。</p>
<div class="custom-container tip">
<p class="custom-container-title">案例</p>
<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rabbit320.webm<span class="token punctuation">"</span></span> <span class="token attr-name">controls</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    您的浏览器不支持 HTML5 视频。可点击<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rabbit320.mp4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>此链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>观看
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></div>`,r:{minutes:8.39,words:2518},title:"视频和音频",i:"play"},["/code/website/html/intro/media","/code/website/html/intro/media.md"]],["v-2ef83302","/code/website/html/intro/svg.html",{y:"a",d:"2019-09-02T00:00:00.000Z",l:"2019年9月2日",c:["HTML"],e:`<h2> 矢量图形</h2>
<p>在网上，您会和两种类型的图片打交道 — 位图和矢量图:</p>
<ul>
<li>
<p>位图使用像素网格来定义。</p>
<p>一个位图文件精确得包含了每个像素的位置和它的色彩信息。流行的位图格式包括 Bitmap (.bmp), PNG (.png), JPEG (.jpg), and GIF (.gif.)</p>
</li>
<li>
<p>矢量图使用算法来定义。</p>
<p>一个矢量图文件包含了图形和路径的定义，电脑可以根据这些定义计算出当它们在屏幕上渲染时应该呈现的样子。 SVG 格式可以让我们创造用于 Web 的精彩的矢量图形。</p>
</li>
</ul>`,r:{minutes:4.88,words:1465},title:"SVG",i:"svg"},["/code/website/html/intro/svg","/code/website/html/intro/svg.md"]],["v-613200d5","/code/website/html/intro/table.html",{y:"a",d:"2019-09-02T00:00:00.000Z",l:"2019年9月2日",c:["HTML"],e:`<p>表格是由行和列组成的结构化数据集(表格数据)，它能够使您简捷迅速地查找某个表示不同类型数据之间的某种关系的值。</p>
<p>表格的一个特点就是严格. 通过在行和列的标题之间进行视觉关联的方法，就可以让信息能够很简单地被解读出来。</p>
<h2> 常见误区</h2>
<p>HTML 表格应该用于表格数据 ，这正是 HTML 表格设计出来的用途。请不要用它来进行布局。</p>
<p>使用表格而不是 CSS 布局的缺点:</p>
<ol>
<li>
<p>表格布局减少了视觉受损的用户的可访问性:</p>
<p>屏幕阅读器, 被盲人所使用, 解析存在于 HTML 页面上的标签，然后为用户读出其中的内容。因为对于布局来说，表格不是一个正确的工具，使用的标记比使用 CSS 布局技术更复杂, 所以屏幕阅读器的输出会让他们的用户感到困惑。</p>
</li>
<li>
<p>表格会产生很多标签:</p>
<p>正如刚才提到的, 表格布局通常会比正确的布局技术涉及更复杂的标签结构，这会导致代码变得更难于编写、维护、调试.</p>
</li>
<li>
<p>表格不能自动响应:</p>
<p>当您使用正确的布局容器 (比如 <code>&lt;header&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, 或是 <code>&lt;div&gt;</code>), 它们的默认宽度是父元素的 <code>100%</code>. 而表格的的默认大小是根据其内容而定的。因此，需要采取额外的措施来获取表格布局样式，以便有效地在各种设备上工作。</p>
</li>
</ol>`,r:{minutes:8.21,words:2462},title:"表格",i:"table"},["/code/website/html/intro/table","/code/website/html/intro/table.md"]],["v-3848a939","/linux/bash/archives/commands/alias.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> alias</h1>
<p><code>alias</code> 命令用于设置别名。通常用于在 Bash 设置文件中，设置别名。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">alias</span> <span class="token assign-left variable">dockerlogin</span><span class="token operator">=</span><span class="token string">'ssh www-data@adnan.local -p2222'</span>
</code></pre></div>`,r:{minutes:.11,words:33},title:"alias"},["/linux/bash/archives/commands/alias","/linux/bash/archives/commands/alias.md"]],["v-f0eb6098","/linux/bash/archives/commands/awk.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> awk</h1>
<p><a href="https://en.wikipedia.org/wiki/AWK" target="_blank" rel="noopener noreferrer"><code>awk</code></a>是处理文本文件的一个应用程序，几乎所有 Linux 系统都自带这个程序。</p>
<p>它依次处理文件的每一行，并读取里面的每一个字段。对于日志、CSV 那样的每行格式相同的文本文件，<code>awk</code> 可能是最方便的工具。</p>
<p><img src="https://www.wangbase.com/blogimg/asset/201811/bg2018110702.jpg" alt="Book"></p>`,r:{minutes:4.05,words:1216},title:"awk"},["/linux/bash/archives/commands/awk","/linux/bash/archives/commands/awk.md"]],["v-658f2b0a","/linux/bash/archives/commands/cal.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> cal</h1>
<p><code>cal</code> 命令显示本月的日历。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cal</span>
</code></pre></div>`,r:{minutes:.04,words:13},title:"cal"},["/linux/bash/archives/commands/cal","/linux/bash/archives/commands/cal.md"]],["v-4a41a11a","/linux/bash/archives/commands/cat.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> cat</h1>
<p><code>cat</code> 命令用于显示一个文本文件的内容。</p>
<p><code>cat - &gt;&gt; filename</code> 用于向一个现有文件的尾部追加内容。</p>
`,r:{minutes:.12,words:35},title:"cat"},["/linux/bash/archives/commands/cat","/linux/bash/archives/commands/cat.md"]],["v-7fa1ff5c","/linux/bash/archives/commands/clear.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> clear</h1>
<p><code>clear</code> 命令用来清除当前屏幕的显示，运行后会只留下一个提示符。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">clear</span>
</code></pre></div>`,r:{minutes:.1,words:29},title:"clear"},["/linux/bash/archives/commands/clear","/linux/bash/archives/commands/clear.md"]],["v-0c6421dc","/linux/bash/archives/commands/cp.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> cp 命令</h1>
<p><code>cp</code> 命令用于复制文件。</p>
<h2> 参数</h2>
<p><code>-u</code> 参数只复制那些目标目录里面还不存在的文件，以及那些虽然存在、但是比源目录对应文件更陈旧的文件。</p>
`,r:{minutes:.2,words:59},title:"cp 命令"},["/linux/bash/archives/commands/cp","/linux/bash/archives/commands/cp.md"]],["v-06485ef2","/linux/bash/archives/commands/cut.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> cut</h1>
<p><code>cut</code> 命令用于在命令行输出文本文件的指定位置的内容。</p>
<p>它的使用格式如下。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cut</span> OPTION <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span>
</code></pre></div>`,r:{minutes:.76,words:229},title:"cut"},["/linux/bash/archives/commands/cut","/linux/bash/archives/commands/cut.md"]],["v-6fef0b3b","/linux/bash/archives/commands/date.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> date</h1>
<p><code>date</code> 命令显示当前的日期和时间。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">date</span>
</code></pre></div>`,r:{minutes:.05,words:16},title:"date"},["/linux/bash/archives/commands/date","/linux/bash/archives/commands/date.md"]],["v-2cd035a9","/linux/bash/archives/commands/dd.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> dd</h1>
<p><code>dd</code> 命令用于复制磁盘或文件系统。</p>
<h2> 复制磁盘</h2>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sda <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdb
</code></pre></div>`,r:{minutes:1.05,words:315},title:"dd"},["/linux/bash/archives/commands/dd","/linux/bash/archives/commands/dd.md"]],["v-3039e6e7","/linux/bash/archives/commands/df.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> df</h1>
<p><code>df</code> 命令显示磁盘信息。</p>
`,r:{minutes:.03,words:10},title:"df"},["/linux/bash/archives/commands/df","/linux/bash/archives/commands/df.md"]],["v-49d29838","/linux/bash/archives/commands/du.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> du</h1>
<p><code>du</code> 命令显示某个文件或目录的磁盘使用量。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">du</span> filename
</code></pre></div><p><code>-h</code> 参数将返回的大小显示为人类可读的格式，即显示单位为 K、M、G 等。</p>
<p><code>-s</code> 参数表示总结(summarize)。</p>
<p><code>-x</code> 参数表示不显示不在当前分区的目录，通常会忽略<code>/dev</code>、<code>/proc</code>、<code>/sys</code> 等目录。</p>`,r:{minutes:.65,words:194},title:"du"},["/linux/bash/archives/commands/du","/linux/bash/archives/commands/du.md"]],["v-cd058ca4","/linux/bash/archives/commands/egrep.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> egrep</h1>
<p><code>egrep</code> 命令用于显示匹配正则模式的行，与 <code>grep -E</code> 命令等价。</p>
<p>下面是 <code>example.txt</code> 文件的内容。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Lorem ipsum
dolor sit amet,
consetetur
sadipscing elitr,
sed diam nonumy
eirmod tempor
invidunt ut labore
et dolore magna
aliquyam erat, sed
diam voluptua. At
vero eos et
accusam et justo
duo dolores et ea
rebum. Stet clita
kasd gubergren,
no sea takimata
sanctus est Lorem
ipsum dolor sit
amet.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.42,words:125},title:"egrep"},["/linux/bash/archives/commands/egrep","/linux/bash/archives/commands/egrep.md"]],["v-d9533216","/linux/bash/archives/commands/export.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> export</h1>
<p><code>export</code> 命令用于向子 Shell 输出变量。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">hotellogs</span><span class="token operator">=</span><span class="token string">"/workspace/hotel-api/storage/logs"</span>
</code></pre></div>`,r:{minutes:.37,words:110},title:"export"},["/linux/bash/archives/commands/export","/linux/bash/archives/commands/export.md"]],["v-304f762d","/linux/bash/archives/commands/file.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> file</h1>
<p><code>file</code> 命令用来某个文件的类型。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">file</span> index.html
 index.html: HTML document, ASCII text
</code></pre></div><p>file 工具可以对所给的文件一行简短的介绍，它用文件后缀、头部信息和一些其他的线索来判断文件。您在检查一堆您不熟悉的文件时使用 find 非常方便:</p>`,r:{minutes:.42,words:127},title:"file"},["/linux/bash/archives/commands/file","/linux/bash/archives/commands/file.md"]],["v-cf31d7e0","/linux/bash/archives/commands/find.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> find</h1>
<p><code>find</code> 命令用于寻找文件，会包括当前目录的所有下级目录。</p>
<p>如果不带任何参数，<code>find</code> 文件会列出当前目录的所有文件，甚至还包括相对路径。如果把结果导入 <code>sort</code> 效果更好。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">find</span> <span class="token operator">|</span> <span class="token function">sort</span>
<span class="token builtin class-name">.</span>
./Makefile
./README
./build
./client.c
./client.h
./common.h
./project.c
./server.c
./server.h
./tests
./tests/suite1.pl
./tests/suite2.pl
./tests/suite3.pl
./tests/suite4.pl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.82,words:545},title:"find"},["/linux/bash/archives/commands/find","/linux/bash/archives/commands/find.md"]],["v-e56505c8","/linux/bash/archives/commands/fmt.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> fmt</h1>
<p><code>fmt</code> 命令用于对文本指定样式。</p>
<p>下面是 <code>example.txt</code> 的内容，是非常长的一行。</p>
<div class="language-text" data-ext="text"><pre class="language-text"><code>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</code></pre></div>`,r:{minutes:.49,words:148},title:"fmt"},["/linux/bash/archives/commands/fmt","/linux/bash/archives/commands/fmt.md"]],["v-0bf82913","/linux/bash/archives/commands/grep.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> grep</h1>
<p><code>grep</code> 命令用于文件内容的搜索，返回所有匹配的行。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> pattern filename
</code></pre></div><p>下面是一个例子。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">grep</span> admin /etc/passwd
_kadmin_admin:*:218:-2:Kerberos Admin Service:/var/empty:/usr/bin/false
_kadmin_changepw:*:219:-2:Kerberos Change Password Service:/var/empty:/usr/bin/false
_krb_kadmin:*:231:-2:Open Directory Kerberos Admin Service:/var/empty:/usr/bin/false
</code></pre></div>`,r:{minutes:1.37,words:411},title:"grep"},["/linux/bash/archives/commands/grep","/linux/bash/archives/commands/grep.md"]],["v-4b7c10e8","/linux/bash/archives/commands/gunzip.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> gunzip</h1>
<p><code>gunzip</code> 命令用于解压 <code>gzip</code> 命令压缩的文件。</p>
`,r:{minutes:.05,words:16},title:"gunzip"},["/linux/bash/archives/commands/gunzip","/linux/bash/archives/commands/gunzip.md"]],["v-bfa5a534","/linux/bash/archives/commands/gzcat.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> gzcat</h1>
<p><code>gzcat</code> 命令用于查看一个 <code>gz</code> 文件，但并不实际解压它。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>gzcat filename
</code></pre></div>`,r:{minutes:.08,words:24},title:"gzcat"},["/linux/bash/archives/commands/gzcat","/linux/bash/archives/commands/gzcat.md"]],["v-1e9a7d0f","/linux/bash/archives/commands/gzip.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> gzip</h1>
<p><code>gzip</code> 命令用于压缩文件。</p>
`,r:{minutes:.03,words:10},title:"gzip"},["/linux/bash/archives/commands/gzip","/linux/bash/archives/commands/gzip.md"]],["v-21978d8b","/linux/bash/archives/commands/kill.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> kill</h1>
<p><code>kill</code> 命令用户终止指定进程。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">kill</span> PID
</code></pre></div>`,r:{minutes:.05,words:15},title:"kill"},["/linux/bash/archives/commands/kill","/linux/bash/archives/commands/kill.md"]],["v-d0927c34","/linux/bash/archives/commands/killall.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> killall</h1>
<p><code>killall</code> 命令终止给定名字的一系列相关进程。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">killall</span> processname
</code></pre></div>`,r:{minutes:.07,words:21},title:"killall"},["/linux/bash/archives/commands/killall","/linux/bash/archives/commands/killall.md"]],["v-12760d5a","/linux/bash/archives/commands/last.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> last</h1>
<p><code>last</code> 命令显示用户登录系统的记录。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>last
</code></pre></div><p><code>last</code> 命令后面加上用户名，会显示该用户上次登录的信息。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>last yourUsername
</code></pre></div>`,r:{minutes:.14,words:43},title:"last"},["/linux/bash/archives/commands/last","/linux/bash/archives/commands/last.md"]],["v-d3ae9b88","/linux/bash/archives/commands/lpq.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> lpq</h1>
<p><code>lpq</code> 命令显示打印机队列。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ lpq
Rank    Owner   Job     File<span class="token punctuation">(</span>s<span class="token punctuation">)</span>                         Total Size
active  adnanad <span class="token number">59</span>      demo                            <span class="token number">399360</span> bytes
1st     adnanad <span class="token number">60</span>      <span class="token punctuation">(</span>stdin<span class="token punctuation">)</span>                         <span class="token number">0</span> bytes
</code></pre></div>`,r:{minutes:.11,words:32},title:"lpq"},["/linux/bash/archives/commands/lpq","/linux/bash/archives/commands/lpq.md"]],["v-d044ea4a","/linux/bash/archives/commands/lpr.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> lpr</h1>
<p><code>lpr</code> 命令用于打印文件。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">lpr</span> filename
</code></pre></div>`,r:{minutes:.04,words:13},title:"lpr"},["/linux/bash/archives/commands/lpr","/linux/bash/archives/commands/lpr.md"]],["v-24ca7dfc","/linux/bash/archives/commands/ls.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> ls</h1>
<p><code>ls</code> 命令用于列出当前目录里面的文件和子目录。</p>
<h2> 参数</h2>
<ul>
<li>a: 列出隐藏文件</li>
<li>l: 以长格式列出文件</li>
<li>t: 按最后编辑日期排序，最新的最先。这在某个大目录里找出最近修改的文件列表时很有用，比如将结果导入( pipe ) head 或者 sed 10q。或许加上 -l 会效果更好。当然如果您想获取最旧的文件列表，只要加 -r 反转列表即可。</li>
<li>X: 按文件类型分类。这在多语言或多后缀的项目中特别方便，比如头文件和源文件分开，或区分开源文件和生成文件或目录。</li>
<li>v: 按照文件名里的版本号排序。</li>
<li>S: 按文件大小排序。</li>
<li>R: 递归地列举文件。这个选项和 -l 组合使用并将结果导出到 less 效果很好。</li>
</ul>`,r:{minutes:.82,words:245},title:"ls"},["/linux/bash/archives/commands/ls","/linux/bash/archives/commands/ls.md"]],["v-4b754b2b","/linux/bash/archives/commands/nl.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> nl</h1>
<p><code>nl</code> 命令用于显示行号。</p>
<p>下面是 <code>example.txt</code> 文件的内容。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Lorem ipsum
dolor sit amet,
consetetur
sadipscing elitr,
<span class="token function">sed</span> diam nonumy
eirmod tempor
invidunt ut labore
et dolore magna
aliquyam erat, <span class="token function">sed</span>
diam voluptua. At
vero eos et
accusam et justo
duo dolores et ea
rebum. Stet clita
kasd gubergren,
no sea takimata
sanctus est Lorem
ipsum dolor sit
amet.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.56,words:168},title:"nl"},["/linux/bash/archives/commands/nl","/linux/bash/archives/commands/nl.md"]],["v-7d98a3f4","/linux/bash/archives/commands/ps.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> ps</h1>
<p><code>ps</code> 命令列出当前正在执行的进程信息。</p>
<p>由于进程很多，所以为了快速找到某个进程，一般与 <code>grep</code> 配合使用。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 找出正在运行 vim 的进程</span>
$ <span class="token function">ps</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">vi</span>
</code></pre></div>`,r:{minutes:.26,words:77},title:"ps"},["/linux/bash/archives/commands/ps","/linux/bash/archives/commands/ps.md"]],["v-8829dd2e","/linux/bash/archives/commands/scp.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> scp</h1>
<h2> 基本用法</h2>
<p><code>scp</code> 是 secure copy 的缩写，用来在两台主机之间加密传送文件。它的底层是 SSH 协议，默认端口是 22。</p>
<p>它主要用于以下三种复制操作。</p>
<ul>
<li>从本地系统到远程系统。</li>
<li>从远程系统到本地系统。</li>
<li>在本地系统的两个远程系统之间。</li>
</ul>
<p>使用 <code>scp</code> 传输数据时，文件和密码都是加密的，不会泄漏敏感信息。</p>
<p><code>scp</code> 的语法类似 <code>cp</code> 的语法。</p>`,r:{minutes:2.76,words:829},title:"scp"},["/linux/bash/archives/commands/scp","/linux/bash/archives/commands/scp.md"]],["v-113d6077","/linux/bash/archives/commands/sed.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> sed</h1>
<p><code>sed</code> 命令用于对文本进行过滤和变形处理。</p>
<p>下面是 <code>example.txt</code> 文件的内容。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Hello This is a Test <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span>
replace all spaces with hyphens
</code></pre></div>`,r:{minutes:.33,words:100},title:"sed"},["/linux/bash/archives/commands/sed","/linux/bash/archives/commands/sed.md"]],["v-7e0e3b4b","/linux/bash/archives/commands/sort.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> sort</h1>
<p><code>sort</code> 命令用于文本文件的排序。</p>
<p>下面是 <code>example.txt</code> 文件的内容。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>f
b
c
g
a
e
d
</code></pre></div><p>执行 <code>sort</code> 命令对其进行排序。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sort</span> example.txt
a
b
c
d
e
f
g
</code></pre></div>`,r:{minutes:.24,words:73},title:"sort"},["/linux/bash/archives/commands/sort","/linux/bash/archives/commands/sort.md"]],["v-d9d07b2a","/linux/bash/archives/commands/tr.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> tr</h1>
<p><code>tr</code> 命令用于按照给定模式转换文本。</p>
<p>下面是 <code>example.txt</code> 文件的内容。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Hello World Foo Bar Baz<span class="token operator">!</span>
</code></pre></div><p><code>tr</code> 命令可以将所有小写字母转换为大写字母。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> example.txt <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">'a-z'</span> <span class="token string">'A-Z'</span>
HELLO WORLD FOO BAR BAZ<span class="token operator">!</span>
</code></pre></div>`,r:{minutes:.3,words:89},title:"tr"},["/linux/bash/archives/commands/tr","/linux/bash/archives/commands/tr.md"]],["v-cb2835ee","/linux/bash/archives/commands/uname.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> uname</h1>
<p><code>uname</code> 命令用来显示内核信息。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">uname</span> <span class="token parameter variable">-a</span>
</code></pre></div>`,r:{minutes:.05,words:15},title:"uname"},["/linux/bash/archives/commands/uname","/linux/bash/archives/commands/uname.md"]],["v-5d7f4d48","/linux/bash/archives/commands/uniq.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> uniq</h1>
<p><code>uniq</code> 用于过滤掉重复的行，该命令只对排序后的文件有效。</p>
<p>下面是 <code>example.txt</code> 文件的内容。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>a
a
b
a
b
c
d
c
</code></pre></div><p>对该文件进行排序后，再过滤掉重复的行。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sort</span> example.txt <span class="token operator">|</span> <span class="token function">uniq</span>
a
b
c
d
</code></pre></div>`,r:{minutes:.33,words:98},title:"uniq"},["/linux/bash/archives/commands/uniq","/linux/bash/archives/commands/uniq.md"]],["v-01ee417e","/linux/bash/archives/commands/uptime.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> uptime</h1>
<p><code>uptime</code> 命令显示本次开机运行的时间。</p>
`,r:{minutes:.05,words:15},title:"uptime"},["/linux/bash/archives/commands/uptime","/linux/bash/archives/commands/uptime.md"]],["v-2519511c","/linux/bash/archives/commands/w.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> w</h1>
<p><code>w</code> 命令显示当期谁在线。</p>
`,r:{minutes:.04,words:11},title:"w"},["/linux/bash/archives/commands/w","/linux/bash/archives/commands/w.md"]],["v-1831c2dd","/linux/bash/archives/commands/wc.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> wc</h1>
<p><code>wc</code> 命令返回某个文件的行数、词数和字符数。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">wc</span> demo.txt
<span class="token number">7459</span>   <span class="token number">15915</span>  <span class="token number">398400</span> demo.txt
</code></pre></div>`,r:{minutes:.15,words:44},title:"wc"},["/linux/bash/archives/commands/wc","/linux/bash/archives/commands/wc.md"]],["v-37823fd8","/linux/bash/archives/commands/whereis.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> whereis</h1>
<p><code>whereis</code> 用来显示某个命令的位置。如果有多个程序符合条件，会全部列出。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">whereis</span> <span class="token function">node</span>
/usr/bin/node /usr/sbin/node
</code></pre></div>`,r:{minutes:.13,words:38},title:"whereis"},["/linux/bash/archives/commands/whereis","/linux/bash/archives/commands/whereis.md"]],["v-3c8dcd8c","/linux/bash/archives/commands/which.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> which</h1>
<p><code>which</code> 命令根据 <code>PATH</code> 环境变量指定的顺序，返回最早发现某个命令的位置。即不指定路径时，实际执行的命令的完整路径。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">which</span> <span class="token function">node</span>
/usr/bin/node
</code></pre></div>`,r:{minutes:.18,words:54},title:"which"},["/linux/bash/archives/commands/which","/linux/bash/archives/commands/which.md"]],["v-623a148b","/linux/bash/archives/commands/who.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> who</h1>
<p><code>who</code> 命令显示已经登录的用户。</p>
<h2> 参数</h2>
<p><code>-b</code> 参数显示上一次系统启动的时间。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">who</span> <span class="token parameter variable">-b</span>
system boot  <span class="token number">2017</span>-06-20 <span class="token number">17</span>:41
</code></pre></div>`,r:{minutes:.13,words:40},title:"who"},["/linux/bash/archives/commands/who","/linux/bash/archives/commands/who.md"]],["v-5c24bfbd","/linux/bash/archives/deleted/stdio.html",{y:"a",d:"2020-06-03T17:08:34.000Z",e:`<h1> 标准 I/O</h1>
<h2> echo</h2>
<p><code>echo</code> 命令用于将指定内容输出到显示屏(标准输出)。</p>
<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> this is a <span class="token builtin class-name">test</span>
this is a <span class="token builtin class-name">test</span>
</code></pre></div>`,r:{minutes:4.93,words:1478},title:"标准 I/O"},["/linux/bash/archives/deleted/stdio","/linux/bash/archives/deleted/stdio.md"]],["v-39354ab9","/code/language/python/functional-programming/high-order-function/filter.html",{y:"a",a:"廖雪峰",d:"2020-05-31T00:00:00.000Z",l:"2020年5月31日",c:["Python"],e:`<p>Python 内建的 <code>filter()</code> 函数用于过滤序列。</p>
<p>和 <code>map()</code> 类似，<code>filter()</code> 也接收一个函数和一个序列。和 <code>map()</code> 不同的是，<code>filter()</code> 把传入的函数依次作用于每个元素，然后根据返回值是 <code>True</code> 还是 <code>False</code> 决定保留还是丢弃该元素。</p>
<p>例如，在一个 list 中，删掉偶数，只保留奇数，可以这么写:</p>
<div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">is_odd</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span>

<span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">filter</span><span class="token punctuation">(</span>is_odd<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 结果: [1, 5, 9, 15]</span>
</code></pre></div>`,r:{minutes:2.73,words:818},title:"filter",i:"filter"},["/code/language/python/functional-programming/high-order-function/filter","/code/language/python/functional-programming/high-order-function/filter.md"]],["v-4bdde895","/code/language/python/functional-programming/high-order-function/intro.html",{y:"a",a:"廖雪峰",d:"2020-05-31T00:00:00.000Z",l:"2020年5月31日",c:["Python"],e:`<p>高阶函数英文叫 Higher-order function。什么是高阶函数? 把函数作为参数传入，这样的函数称为高阶函数。</p>
`,r:{minutes:2.42,words:726},title:"介绍",i:"info"},["/code/language/python/functional-programming/high-order-function/intro","/code/language/python/functional-programming/high-order-function/intro.md"]],["v-1aa63c24","/code/language/python/functional-programming/high-order-function/map-and-reduce.html",{y:"a",a:"廖雪峰",d:"2020-05-31T00:00:00.000Z",l:"2020年5月31日",c:["Python"],e:`<p>Python 内建了 <code>map()</code> 和 <code>reduce()</code> 函数。</p>
<p>如果您读过 Google 的那篇大名鼎鼎的论文 <a href="http://research.google.com/archive/mapreduce.html" target="_blank" rel="noopener noreferrer">“MapReduce: Simplified Data Processing on Large Clusters”</a>，您就能大概明白 map / reduce 的概念。</p>
<blockquote>
<p>访问需要科学上网。</p>
</blockquote>
`,r:{minutes:3.19,words:958},title:"map / reduce",i:"map"},["/code/language/python/functional-programming/high-order-function/map-and-reduce","/code/language/python/functional-programming/high-order-function/map-and-reduce.md"]],["v-19bac6b0","/code/language/python/functional-programming/high-order-function/",{y:"a",a:"廖雪峰",d:"2020-05-31T00:00:00.000Z",l:"2020年5月31日",c:["Python"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/code/language/python/functional-programming/high-order-function/intro.html" target="blank">高阶函数介绍</a></p>
</li>
<li>
<p><a href="/code/language/python/functional-programming/high-order-function/map-and-reduce.html" target="blank">map / reduce</a></p>
</li>
<li>
<p><a href="/code/language/python/functional-programming/high-order-function/filter.html" target="blank">filter</a></p>
</li>
<li>
<p><a href="/code/language/python/functional-programming/high-order-function/sorted.html" target="blank">sorted</a></p>
</li>
</ul>`,r:{minutes:.12,words:37},title:"高阶函数",i:"function"},["/code/language/python/functional-programming/high-order-function/index.html","/code/language/python/functional-programming/high-order-function/readme.md"]],["v-377c72d8","/code/language/python/functional-programming/high-order-function/sorted.html",{y:"a",a:"廖雪峰",d:"2020-05-31T00:00:00.000Z",l:"2020年5月31日",c:["Python"],e:`<h2> 排序算法</h2>
<p>排序也是在程序中经常用到的算法。无论使用冒泡排序还是快速排序，排序的核心是比较两个元素的大小。如果是数字，我们可以直接比较，但如果是字符串或者两个 dict 呢? 直接比较数学上的大小是没有意义的，因此，比较的过程必须通过函数抽象出来。</p>
<p>Python 内置的 <code>sorted()</code> 函数就可以对 list 进行排序:</p>
<div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">21</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">21</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">]</span>
</code></pre></div>`,r:{minutes:2.16,words:649},title:"sorted",i:"sort"},["/code/language/python/functional-programming/high-order-function/sorted","/code/language/python/functional-programming/high-order-function/sorted.md"]],["v-2f60f946","/code/mini-app/guide/service/api/",{y:"a",d:"2022-05-04T19:02:05.000Z",c:["小程序"],e:`<p>小程序开发框架提供丰富的微信原生 API，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等。详细介绍请参考 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/" target="_blank" rel="noopener noreferrer">API 文档</a>。 </p>
`,r:{minutes:2.19,words:657},title:"API",i:"api"},["/code/mini-app/guide/service/api/index.html","/code/mini-app/guide/service/api/README.md"]],["v-76fcb826","/code/mini-app/guide/service/api/interact.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>本页面介绍的一系列 API 都是和小程序页面交互(用户交互)相关的 API。</p>
<p>小程序与用户交互合理，并在合适的时机向用户展示相应状态可以让用户的沉浸感更强。</p>
`,r:{minutes:4.1,words:1230},title:"页面交互 API",i:"change"},["/code/mini-app/guide/service/api/interact","/code/mini-app/guide/service/api/interact.md"]],["v-d0491970","/code/mini-app/guide/service/api/network.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<h2> wx.request(Object object)</h2>
<p>发起 HTTPS 网络请求。使用前请注意阅读相关说明。</p>
<h3> request 参数</h3>
<p>Object object</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>默认值</th>
<th>必填</th>
<th>说明</th>
<th>最低版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>url</td>
<td>string</td>
<td></td>
<td>是</td>
<td>开发者服务器接口地址</td>
<td></td>
</tr>
<tr>
<td>data</td>
<td>string/object/ArrayBuffer</td>
<td></td>
<td>否</td>
<td>请求的参数</td>
<td></td>
</tr>
<tr>
<td>header</td>
<td>Object</td>
<td></td>
<td>否</td>
<td>设置请求的 header，header 中不能设置 Referer。</td>
<td></td>
</tr>
<tr>
<td>content-type 默认为 application/json</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>method</td>
<td>string</td>
<td>GET</td>
<td>否</td>
<td>HTTP 请求方法</td>
<td></td>
</tr>
<tr>
<td>dataType</td>
<td>string</td>
<td>json</td>
<td>否</td>
<td>返回的数据格式</td>
<td></td>
</tr>
<tr>
<td>responseType</td>
<td>string</td>
<td>text</td>
<td>否</td>
<td>响应的数据类型</td>
<td>1.7.0</td>
</tr>
<tr>
<td>success</td>
<td>function</td>
<td></td>
<td>否</td>
<td>接口调用成功的回调函数</td>
<td></td>
</tr>
<tr>
<td>fail</td>
<td>function</td>
<td></td>
<td>否</td>
<td>接口调用失败的回调函数</td>
<td></td>
</tr>
<tr>
<td>complete</td>
<td>function</td>
<td></td>
<td>否</td>
<td>接口调用结束的回调函数(调用成功、失败都会执行)</td>
<td></td>
</tr>
</tbody>
</table>`,r:{minutes:4.21,words:1264},title:"网络 API",i:"network"},["/code/mini-app/guide/service/api/network","/code/mini-app/guide/service/api/network.md"]],["v-63cc474d","/code/mini-app/guide/service/api/route.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<h1> 路由 API</h1>
<p>本页面介绍的一系列 API 都是和小程序路由(导航)相关的 API。</p>
<p>可以通过这些 API，自定义小程序的页面导航逻辑。</p>
<div class="custom-container tip">
<p class="custom-container-title">概要</p>
<p>最常用的两个:</p>
<ul>
<li><code>wx.navigateTo</code>: 导航到一个新页面</li>
<li><code>wx.navigateBack</code>: 返回上一层(上 n 层)页面</li>
</ul>
<p>不太常用的三个:</p>
<ul>
<li><code>wx.redirectTo</code>: 将当前页面重定向到一个新的页面</li>
<li><code>wx.switchTab</code>: 到转到 Tabbar 的页面并关闭其他页面</li>
<li><code>wx.reLaunch</code>: 关闭小程序所有页面，并打开指定页面</li>
</ul>
</div>`,r:{minutes:4,words:1199},title:"路由 API",i:"router"},["/code/mini-app/guide/service/api/route","/code/mini-app/guide/service/api/route.md"]],["v-62fa99ca","/code/mini-app/guide/service/api/storage.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<p>本页面介绍的一系列 API 都是和小程序数据缓存(数据存储)相关的 API。</p>
<p>可以利用数据缓存存储一些不重要的信息，比如用户的设置、用户的操作历史记录等。</p>
`,r:{minutes:3.05,words:915},title:"数据缓存 API",i:"storage"},["/code/mini-app/guide/service/api/storage","/code/mini-app/guide/service/api/storage.md"]],["v-7541848d","/code/mini-app/guide/service/api/system.html",{y:"a",d:"2020-11-08T17:35:34.000Z",c:["小程序"],e:`<h2> wx.getSystemInfo(Object object)</h2>
<p>获取系统信息</p>
<h3> 参数</h3>
<p>Object object</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>必填</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>success</td>
<td>function</td>
<td>否</td>
<td>接口调用成功的回调函数</td>
</tr>
<tr>
<td>fail</td>
<td>function</td>
<td>否</td>
<td>接口调用失败的回调函数</td>
</tr>
<tr>
<td>complete</td>
<td>function</td>
<td>否</td>
<td>接口调用结束的回调函数(调用成功、失败都会执行)</td>
</tr>
</tbody>
</table>`,r:{minutes:3.42,words:1025},title:"系统相关 API",i:"OS"},["/code/mini-app/guide/service/api/system","/code/mini-app/guide/service/api/system.md"]],["v-3706649a","/404.html",{title:""},["/404"]],["v-5bc93818","/category/",{title:"分类"},["/category/index.html"]],["v-744d024e","/tag/",{title:"标签"},["/tag/index.html"]],["v-e52c881c","/article/",{title:"文章"},["/article/index.html"]],["v-75ed4ea4","/encrypted/",{title:"加密"},["/encrypted/index.html"]],["v-d804e652","/slide/",{title:"幻灯片"},["/slide/index.html"]],["v-154dc4c4","/star/",{title:"收藏"},["/star/index.html"]],["v-01560935","/timeline/",{title:"时间轴"},["/timeline/index.html"]],["v-f3d31dec","/category/%E8%AE%BE%E8%AE%A1/",{title:"设计 分类"},["/category/设计/","/category/%E8%AE%BE%E8%AE%A1/index.html"]],["v-b99e3274","/tag/%E4%B8%AA%E4%BA%BA%E4%BB%8B%E7%BB%8D/",{title:"个人介绍 标签"},["/tag/个人介绍/","/tag/%E4%B8%AA%E4%BA%BA%E4%BB%8B%E7%BB%8D/index.html"]],["v-506407f4","/en/article/",{title:"Articles"},["/en/article/index.html"]],["v-8f7c4c90","/en/encrypted/",{title:"Encrypted"},["/en/encrypted/index.html"]],["v-be4a7c2a","/en/slide/",{title:"Slides"},["/en/slide/index.html"]],["v-37a8c5a0","/en/star/",{title:"Star"},["/en/star/index.html"]],["v-0379cba1","/en/timeline/",{title:"Timeline"},["/en/timeline/index.html"]],["v-7eb8aa90","/category/%E7%A1%AC%E4%BB%B6/",{title:"硬件 分类"},["/category/硬件/","/category/%E7%A1%AC%E4%BB%B6/index.html"]],["v-0da0f70d","/tag/ui/",{title:"UI 标签"},["/tag/ui/index.html"]],["v-9c48d85a","/category/linux/",{title:"Linux 分类"},["/category/linux/index.html"]],["v-24cacd4b","/tag/%E7%BC%96%E8%BE%91%E5%99%A8/",{title:"编辑器 标签"},["/tag/编辑器/","/tag/%E7%BC%96%E8%BE%91%E5%99%A8/index.html"]],["v-2ae54282","/category/%E5%9F%BA%E7%A1%80/",{title:"基础 分类"},["/category/基础/","/category/%E5%9F%BA%E7%A1%80/index.html"]],["v-1daa6b4d","/tag/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B/",{title:"快速上手 标签"},["/tag/快速上手/","/tag/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B/index.html"]],["v-60649a06","/category/%E9%9A%8F%E7%AC%94/",{title:"随笔 分类"},["/category/随笔/","/category/%E9%9A%8F%E7%AC%94/index.html"]],["v-5aaac2db","/tag/angular/",{title:"Angular 标签"},["/tag/angular/index.html"]],["v-05934772","/category/%E7%89%A9%E7%90%86/",{title:"物理 分类"},["/category/物理/","/category/%E7%89%A9%E7%90%86/index.html"]],["v-b310d42a","/tag/git/",{title:"Git 标签"},["/tag/git/index.html"]],["v-5f7f7ebf","/category/%E6%9C%8D%E5%8A%A1%E5%99%A8/",{title:"服务器 分类"},["/category/服务器/","/category/%E6%9C%8D%E5%8A%A1%E5%99%A8/index.html"]],["v-50ae161a","/tag/deploy/",{title:"deploy 标签"},["/tag/deploy/index.html"]],["v-2565fbec","/category/%E8%BD%AF%E4%BB%B6/",{title:"软件 分类"},["/category/软件/","/category/%E8%BD%AF%E4%BB%B6/index.html"]],["v-a0ba2788","/tag/%E4%BB%8B%E7%BB%8D/",{title:"介绍 标签"},["/tag/介绍/","/tag/%E4%BB%8B%E7%BB%8D/index.html"]],["v-29da37b8","/category/android/",{title:"Android 分类"},["/category/android/index.html"]],["v-60379330","/tag/node.js/",{title:"Node.js 标签"},["/tag/node.js/index.html"]],["v-e9c7e408","/category/%E5%89%8D%E7%AB%AF/",{title:"前端 分类"},["/category/前端/","/category/%E5%89%8D%E7%AB%AF/index.html"]],["v-17343014","/tag/%E8%BD%AF%E4%BB%B6/",{title:"软件 标签"},["/tag/软件/","/tag/%E8%BD%AF%E4%BB%B6/index.html"]],["v-eddfd732","/category/%E5%90%8E%E7%AB%AF/",{title:"后端 分类"},["/category/后端/","/category/%E5%90%8E%E7%AB%AF/index.html"]],["v-755965f0","/tag/%E5%AE%89%E8%A3%85/",{title:"安装 标签"},["/tag/安装/","/tag/%E5%AE%89%E8%A3%85/index.html"]],["v-fd3344d8","/category/github/",{title:"GitHub 分类"},["/category/github/index.html"]],["v-56fbf552","/tag/%E7%BD%91%E9%A1%B5/",{title:"网页 标签"},["/tag/网页/","/tag/%E7%BD%91%E9%A1%B5/index.html"]],["v-4f7b1987","/category/%E6%95%99%E7%A8%8B/",{title:"教程 分类"},["/category/教程/","/category/%E6%95%99%E7%A8%8B/index.html"]],["v-0d223344","/tag/react/",{title:"React 标签"},["/tag/react/index.html"]],["v-0e452818","/category/%E5%B0%8F%E7%A8%8B%E5%BA%8F/",{title:"小程序 分类"},["/category/小程序/","/category/%E5%B0%8F%E7%A8%8B%E5%BA%8F/index.html"]],["v-b302da92","/tag/vue/",{title:"Vue 标签"},["/tag/vue/index.html"]],["v-b749fb9c","/category/node.js/",{title:"Node.js 分类"},["/category/node.js/index.html"]],["v-551fb564","/tag/%E5%B0%8F%E7%A8%8B%E5%BA%8F/",{title:"小程序 标签"},["/tag/小程序/","/tag/%E5%B0%8F%E7%A8%8B%E5%BA%8F/index.html"]],["v-65f6d381","/category/vue/",{title:"Vue 分类"},["/category/vue/index.html"]],["v-551de488","/tag/%E5%AF%B9%E6%AF%94/",{title:"对比 标签"},["/tag/对比/","/tag/%E5%AF%B9%E6%AF%94/index.html"]],["v-e2bac56c","/category/javascript/",{title:"JavaScript 分类"},["/category/javascript/index.html"]],["v-7cfd563e","/tag/%E6%96%87%E6%A1%A3/",{title:"文档 标签"},["/tag/文档/","/tag/%E6%96%87%E6%A1%A3/index.html"]],["v-65efd6b5","/category/git/",{title:"Git 分类"},["/category/git/index.html"]],["v-14748cc9","/tag/%E5%9F%BA%E7%A1%80/",{title:"基础 标签"},["/tag/基础/","/tag/%E5%9F%BA%E7%A1%80/index.html"]],["v-592410ea","/category/vs-code/",{title:"VS Code 分类"},["/category/vs-code/index.html"]],["v-0234a462","/tag/win10/",{title:"Win10 标签"},["/tag/win10/index.html"]],["v-594aebc3","/category/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B/",{title:"快速上手 分类"},["/category/快速上手/","/category/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B/index.html"]],["v-c7bf80f0","/tag/%E5%BF%AB%E6%8D%B7%E9%94%AE/",{title:"快捷键 标签"},["/tag/快捷键/","/tag/%E5%BF%AB%E6%8D%B7%E9%94%AE/index.html"]],["v-e348c378","/category/c/",{title:"C 分类"},["/category/c/index.html"]],["v-28949148","/tag/icon/",{title:"Icon 标签"},["/tag/icon/index.html"]],["v-65eddd24","/category/c__/",{title:"C++ 分类"},["/category/c__/index.html"]],["v-66019bfa","/tag/%E5%AF%BC%E8%88%AA/",{title:"导航 标签"},["/tag/导航/","/tag/%E5%AF%BC%E8%88%AA/index.html"]],["v-57dd1778","/category/dart/",{title:"dart 分类"},["/category/dart/index.html"]],["v-5b28d011","/tag/navbar/",{title:"Navbar 标签"},["/tag/navbar/index.html"]],["v-5831b135","/category/java/",{title:"Java 分类"},["/category/java/index.html"]],["v-cc0796be","/tag/sidebar/",{title:"Sidebar 标签"},["/tag/sidebar/index.html"]],["v-5839c72f","/category/json/",{title:"JSON 分类"},["/category/json/index.html"]],["v-d11744fa","/tag/tabbar/",{title:"Tabbar 标签"},["/tag/tabbar/index.html"]],["v-d37ff7f0","/category/markdown/",{title:"Markdown 分类"},["/category/markdown/index.html"]],["v-2831124d","/tag/bash/",{title:"Bash 标签"},["/tag/bash/index.html"]],["v-65f3e9cf","/category/php/",{title:"PHP 分类"},["/category/php/index.html"]],["v-34dc4f20","/tag/%E7%A7%8B%E4%B9%8B%E6%80%9D/",{title:"秋之思 标签"},["/tag/秋之思/","/tag/%E7%A7%8B%E4%B9%8B%E6%80%9D/index.html"]],["v-78cbe7bb","/category/python/",{title:"Python 分类"},["/category/python/index.html"]],["v-51e0cde2","/tag/%E7%AC%91%E8%B0%88%E4%BA%BA%E7%94%9F/",{title:"笑谈人生 标签"},["/tag/笑谈人生/","/tag/%E7%AC%91%E8%B0%88%E4%BA%BA%E7%94%9F/index.html"]],["v-6c5e4d32","/category/typescript/",{title:"TypeScript 分类"},["/category/typescript/index.html"]],["v-8f2bef46","/tag/%E8%BD%BB%E8%A8%80%E7%BB%86%E8%AF%AD/",{title:"轻言细语 标签"},["/tag/轻言细语/","/tag/%E8%BD%BB%E8%A8%80%E7%BB%86%E8%AF%AD/index.html"]],["v-5904f150","/category/yaml/",{title:"YAML 分类"},["/category/yaml/index.html"]],["v-474b3db0","/tag/%E6%98%A5%E4%B9%8B%E8%AF%97/",{title:"春之诗 标签"},["/tag/春之诗/","/tag/%E6%98%A5%E4%B9%8B%E8%AF%97/index.html"]],["v-65ee2aa4","/category/css/",{title:"CSS 分类"},["/category/css/index.html"]],["v-9b71a094","/tag/%E5%A4%8F%E4%B9%8B%E6%AD%8C/",{title:"夏之歌 标签"},["/tag/夏之歌/","/tag/%E5%A4%8F%E4%B9%8B%E6%AD%8C/index.html"]],["v-b3bd56da","/category/emmet/",{title:"Emmet 分类"},["/category/emmet/index.html"]],["v-1613b516","/tag/%E5%86%AC%E4%B9%8B%E8%AF%AD/",{title:"冬之语 标签"},["/tag/冬之语/","/tag/%E5%86%AC%E4%B9%8B%E8%AF%AD/index.html"]],["v-581e04cc","/category/html/",{title:"HTML 分类"},["/category/html/index.html"]],["v-17f37776","/tag/%E7%94%B5%E7%A3%81%E5%AD%A6/",{title:"电磁学 标签"},["/tag/电磁学/","/tag/%E7%94%B5%E7%A3%81%E5%AD%A6/index.html"]],["v-2dcc8639","/category/jquery/",{title:"jQuery 分类"},["/category/jquery/index.html"]],["v-0fdb8ada","/tag/%E5%85%89%E5%AD%A6/",{title:"光学 标签"},["/tag/光学/","/tag/%E5%85%89%E5%AD%A6/index.html"]],["v-5decfa84","/en/category/",{title:"Category"},["/en/category/index.html"]],["v-2f29ddae","/tag/%E9%87%8F%E5%AD%90%E5%8A%9B%E5%AD%A6/",{title:"量子力学 标签"},["/tag/量子力学/","/tag/%E9%87%8F%E5%AD%90%E5%8A%9B%E5%AD%A6/index.html"]],["v-5217c93c","/tag/%E7%83%AD%E7%BB%9F/",{title:"热统 标签"},["/tag/热统/","/tag/%E7%83%AD%E7%BB%9F/index.html"]],["v-40d8aadf","/tag/%E4%BB%BF%E7%9C%9F/",{title:"仿真 标签"},["/tag/仿真/","/tag/%E4%BB%BF%E7%9C%9F/index.html"]],["v-2cb13792","/tag/comsol/",{title:"COMSOL 标签"},["/tag/comsol/index.html"]],["v-f6a575c0","/tag/vs-code/",{title:"VS Code 标签"},["/tag/vs-code/index.html"]],["v-a26e9aaa","/tag/action/",{title:"action 标签"},["/tag/action/index.html"]],["v-54f4d5c2","/tag/workflow/",{title:"workflow 标签"},["/tag/workflow/index.html"]],["v-02cabf9e","/tag/linter/",{title:"linter 标签"},["/tag/linter/index.html"]],["v-484552dc","/tag/markdown/",{title:"Markdown 标签"},["/tag/markdown/index.html"]],["v-4b0ad344","/tag/vue-cli/",{title:"Vue Cli 标签"},["/tag/vue-cli/index.html"]],["v-12cb3644","/tag/%E6%8C%87%E4%BB%A4/",{title:"指令 标签"},["/tag/指令/","/tag/%E6%8C%87%E4%BB%A4/index.html"]],["v-3fb58c9e","/tag/vue-router/",{title:"Vue Router 标签"},["/tag/vue-router/index.html"]],["v-284efd1e","/tag/demo/",{title:"Demo 标签"},["/tag/demo/index.html"]],["v-2953cd2f","/tag/vuex/",{title:"Vuex 标签"},["/tag/vuex/index.html"]],["v-288e2c56","/tag/html/",{title:"HTML 标签"},["/tag/html/index.html"]],["v-3891cf12","/tag/emoji/",{title:"Emoji 标签"},["/tag/emoji/index.html"]],["v-b3142c4c","/tag/css/",{title:"CSS 标签"},["/tag/css/index.html"]],["v-075c6c62","/en/tag/",{title:"Tag"},["/en/tag/index.html"]],["v-5dc926ce","/en/tag/personal-intro/",{title:"Personal Intro Tag"},["/en/tag/personal-intro/index.html"]]];var rn="Layout",dn="NotFound",un=async()=>{const{clientConfigs:n}=await e(()=>import("./clientConfigs-5a27f6e1.js").then(s=>s.c),["assets/clientConfigs-5a27f6e1.js","assets/framework-6fc096bd.js"]),t=n.reduce((s,i)=>({...s,...i.layouts}),{});return y({name:"Vuepress",setup(){const s=P(),i=r(()=>{let o;if(s.value.path){const l=s.value.frontmatter.layout;v(l)?o=l:o=rn}else o=dn;return t[o]});return()=>b(i.value)}})},mn=async()=>{const n=await un();return cn.reduce((t,[p,s,i,o])=>(t.push({name:p,path:s,component:n,meta:i},...o.map(l=>({path:l,redirect:s}))),t),[{name:"404",path:"/:catchAll(.*)",component:n}])},_n=U,vn=async()=>{const n=N({history:_n(F("/")),routes:await mn(),scrollBehavior:(t,p,s)=>s||(t.hash?{el:t.hash}:{top:0})});return n.beforeResolve(async(t,p)=>{var s;(t.path!==p.path||p===W)&&([m.value]=await Promise.all([u.resolvePageData(t.name),(s=A[t.name])==null?void 0:s.__asyncLoader()]))}),n},hn=n=>{n.component("ClientOnly",pn),n.component("Content",on)},gn=(n,t)=>{const p=r(()=>u.resolveRouteLocale(_.value.locales,t.currentRoute.value.path)),s=r(()=>u.resolveSiteLocaleData(_.value,p.value)),i=r(()=>u.resolvePageFrontmatter(m.value)),o=r(()=>u.resolvePageHeadTitle(m.value,s.value)),l=r(()=>u.resolvePageHead(o.value,i.value,s.value)),c=r(()=>u.resolvePageLang(m.value));return n.provide(V,p),n.provide(x,s),n.provide(D,i),n.provide(R,o),n.provide(O,l),n.provide(I,c),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get:()=>i.value},$head:{get:()=>l.value},$headTitle:{get:()=>o.value},$lang:{get:()=>c.value},$page:{get:()=>m.value},$routeLocale:{get:()=>p.value},$site:{get:()=>_.value},$siteLocale:{get:()=>s.value},$withBase:{get:()=>ln}}),{pageData:m,pageFrontmatter:i,pageHead:l,pageHeadTitle:o,pageLang:c,routeLocale:p,siteData:_,siteLocaleData:s}},bn=()=>{const n=q(),t=an(),p=tn(),s=k([]),i=()=>{t.value.forEach(l=>{const c=kn(l);c&&s.value.push(c)})},o=()=>{document.documentElement.lang=p.value,s.value.forEach(l=>{l.parentNode===document.head&&document.head.removeChild(l)}),s.value.splice(0,s.value.length),t.value.forEach(l=>{const c=En(l);c!==null&&(document.head.appendChild(c),s.value.push(c))})};X(sn,o),w(()=>{i(),o(),z(()=>n.path,()=>o())})},kn=([n,t,p=""])=>{const s=Object.entries(t).map(([c,E])=>v(E)?`[${c}=${JSON.stringify(E)}]`:E===!0?`[${c}]`:"").join(""),i=`head > ${n}${s}`;return Array.from(document.querySelectorAll(i)).find(c=>c.innerText===p)||null},En=([n,t,p])=>{if(!v(n))return null;const s=document.createElement(n);return Q(t)&&Object.entries(t).forEach(([i,o])=>{v(o)?s.setAttribute(i,o):o===!0&&s.setAttribute(i,"")}),v(p)&&s.appendChild(document.createTextNode(p)),s},fn=H,yn=async()=>{var s;const{clientConfigs:n}=await e(()=>import("./clientConfigs-5a27f6e1.js").then(i=>i.c),["assets/clientConfigs-5a27f6e1.js","assets/framework-6fc096bd.js"]),t=fn({name:"VuepressApp",setup(){var i;bn();for(const o of n)(i=o.setup)==null||i.call(o);return()=>[b(G),...n.flatMap(({rootComponents:o=[]})=>o.map(l=>b(l)))]}}),p=await vn();hn(t),gn(t,p);for(const i of n)await((s=i.enhance)==null?void 0:s.call(i,{app:t,router:p,siteData:_}));return t.use(p),{app:t,router:p}};yn().then(({app:n,router:t})=>{t.isReady().then(()=>{n.mount("#app")})});export{pn as C,e as _,wn as a,tn as b,P as c,yn as createVueApp,On as d,Pn as e,on as f,Dn as g,An as h,V as r,Ln as u,ln as w};
