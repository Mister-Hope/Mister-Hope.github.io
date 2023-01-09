import{ac as c,G as i,H as h,L as d,E as e,N as t,ad as s,S as l,W as r}from"./framework-931f0218.js";const u={},_=e("p",null,[l("CSS 指层叠样式表 ("),e("strong",null,"C"),l("ascading "),e("strong",null,"S"),l("tyle "),e("strong",null,"S"),l("heets)，它负责描述网页元素的具体样式。")],-1),S=e("p",null,'CSS3 是最新的 CSS 标准，被拆分为"模块"。模块包括: 选择器、盒模型、背景和边框、文字特效、2D/3D 转换、动画、多列布局、用户界面。',-1),p=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),l(" 目录")],-1),f={href:"https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/CSS%E5%A6%82%E4%BD%95%E8%BF%90%E8%A1%8C",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"css-参考",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#css-参考","aria-hidden":"true"},"#"),l(" CSS 参考")],-1),w={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS",target:"_blank",rel:"noopener noreferrer"},b={id:"其他文档",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#其他文档","aria-hidden":"true"},"#",-1),C=e("p",null,"CSS",-1),x={href:"https://www.w3cschool.cn/css/",target:"_blank",rel:"noopener noreferrer"},k={href:"http://www.w3school.com.cn/css/index.asp",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.runoob.com/css/css-tutorial.html",target:"_blank",rel:"noopener noreferrer"},E=e("p",null,"CSS3",-1),N={href:"https://www.w3cschool.cn/css3/",target:"_blank",rel:"noopener noreferrer"},B={href:"http://www.w3school.com.cn/css3/index.asp",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.runoob.com/css3/css3-tutorial.html",target:"_blank",rel:"noopener noreferrer"},L=e("h2",{id:"在线练习网址",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在线练习网址","aria-hidden":"true"},"#"),l(" 在线练习网址")],-1),W={href:"https://c.runoob.com/front-end/61",target:"_blank",rel:"noopener noreferrer"},z={href:"https://jsfiddle.net/",target:"_blank",rel:"noopener noreferrer"},D=e("h2",{id:"css-的超集",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#css-的超集","aria-hidden":"true"},"#"),l(" CSS 的超集")],-1),V=e("p",null,"Stylus",-1),j=e("p",null,"带来更简单的写法，支持变量、函数等功能。",-1),q={href:"https://www.zhangxinxu.com/jq/stylus/",target:"_blank",rel:"noopener noreferrer"},A={href:"http://stylus-lang.com/",target:"_blank",rel:"noopener noreferrer"},F=e("p",null,"Sass",-1),I=e("p",null,"Sass 是世界上最成熟、稳定、强大的专业级 CSS 扩展语言。",-1),R=e("blockquote",null,[e("p",null,"注: 官网说的，不是我说的 😂")],-1),G=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,"SCSS 是 Sass3 版本当中引入的新语法特性,完全兼容 CSS3 的同时继承了 Sass 强大的动态功能。")],-1),H={href:"https://sass.bootcss.com/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"};function T(J,K){const o=r("RouterLink"),n=r("ExternalLinkIcon"),a=r("Badge");return i(),h("div",null,[_,S,d(" more "),p,e("ul",null,[e("li",null,[e("p",null,[t(o,{to:"/code/website/css/guide/"},{default:s(()=>[l("快速上手")]),_:1})]),e("ul",null,[e("li",null,[t(o,{to:"/code/website/css/guide/selector.html"},{default:s(()=>[l("CSS 选择器")]),_:1})]),e("li",null,[t(o,{to:"/code/website/css/guide/declaration.html"},{default:s(()=>[l("CSS 声明")]),_:1})]),e("li",null,[t(o,{to:"/code/website/css/guide/import.html"},{default:s(()=>[l("CSS 引入")]),_:1})]),e("li",null,[t(o,{to:"/code/website/css/guide/common.html"},{default:s(()=>[l("CSS 常用属性介绍")]),_:1})]),e("li",null,[t(o,{to:"/code/website/css/guide/box.html"},{default:s(()=>[l("CSS 盒模型")]),_:1})])])]),e("li",null,[e("p",null,[t(o,{to:"/code/website/css/layout/"},{default:s(()=>[l("CSS 布局介绍")]),_:1})]),e("ul",null,[e("li",null,[t(o,{to:"/code/website/css/layout/flex.html"},{default:s(()=>[l("CSS 弹性模型")]),_:1})]),e("li",null,[t(o,{to:"/code/website/css/layout/exercise.html"},{default:s(()=>[l("CSS 布局实战")]),_:1})]),e("li",null,[t(o,{to:"/code/website/css/layout/grid.html"},{default:s(()=>[l("CSS 网格模型")]),_:1})])])]),e("li",null,[e("p",null,[e("a",f,[l("CSS 工作原理"),t(n)])])])]),m,e("ul",null,[e("li",null,[e("a",w,[l("MDN 教程"),t(n)])])]),e("h2",b,[g,l(" 其他文档 "),t(a,{text:"不建议",type:"warn"})]),e("ul",null,[e("li",null,[C,e("ul",null,[e("li",null,[e("a",x,[l("W3CSchool 教程"),t(n)])]),e("li",null,[e("a",k,[l("W3School 教程"),t(n)])]),e("li",null,[e("a",y,[l("菜鸟教程"),t(n)])])])]),e("li",null,[E,e("ul",null,[e("li",null,[e("a",N,[l("W3CSchool 教程"),t(n)])]),e("li",null,[e("a",B,[l("W3School 教程"),t(n)])]),e("li",null,[e("a",v,[l("菜鸟教程"),t(n)])])])])]),L,e("ul",null,[e("li",null,[e("a",W,[l("菜鸟教程在线工具"),t(n)])]),e("li",null,[e("a",z,[l("jsfiddle"),t(n)])])]),D,e("ul",null,[e("li",null,[V,j,e("ul",null,[e("li",null,[e("a",q,[l("中文文档"),t(n)])]),e("li",null,[e("a",A,[l("官方文档"),t(n)])])])]),e("li",null,[F,I,R,G,e("ul",null,[e("li",null,[e("a",H,[l("中文文档"),t(n)])]),e("li",null,[e("a",M,[l("官方文档"),t(n)])])])])])])}const P=c(u,[["render",T],["__file","index.html.vue"]]);export{P as default};
