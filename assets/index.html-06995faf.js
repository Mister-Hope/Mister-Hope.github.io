import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c,e as u,b as l,a as e,w as n,d as o}from"./app-27839578.js";const p={},h=l("p",null,"这里是一些 Comsol 的学习资料整理与学习心得。",-1),m=l("div",{class:"hint-container tip"},[l("p",{class:"hint-container-title"},"写在前面"),l("p",null,"本教程只适用于从未接触过仿真的人员，内容比较基础。"),l("p",null,"我本人主要活跃在计算机相关领域，本科专业是物理学，并没有学过系统的工程原理、数值分析、模型建构以及相关的误差分析。COMSOL 是我本科制作毕设的软件，在毕设前，我也使用 COMSOL 构建了几个模型，完成了一些装置的模拟与优化。"),l("p",null,"本篇教程，是根据我对 COMSOL 以及有限元仿真的理解书写的，一定会有一些疏漏与理解错误之处，还望大家指出。另外我主要研究过的方向是传热与流体流动，在本教程的举例中，也大多以这两方面为主。对其他的方向与模块，我是不熟悉的。")],-1),_=l("h2",{id:"文档",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#文档","aria-hidden":"true"},"#"),o(" 文档")],-1),d={href:"https://mister-hope.com/file/comsol/IntroductionToCOMSOLMultiphysics.zh_CN.pdf",target:"_blank",rel:"noopener noreferrer"},f={href:"https://mister-hope.com/file/comsol/App%E5%BC%80%E5%8F%91%E5%99%A8%E7%AE%80%E4%BB%8B.pdf",target:"_blank",rel:"noopener noreferrer"},O={href:"https://mister-hope.com/file/comsol/ApplicationProgrammingGuide.zh_CN.pdf",target:"_blank",rel:"noopener noreferrer"},g={href:"http://cn.comsol.com/multiphysics/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://cn.comsol.com/videos",target:"_blank",rel:"noopener noreferrer"},C={href:"https://cn.comsol.com/video-training",target:"_blank",rel:"noopener noreferrer"},b={href:"https://cn.comsol.com/papers-presentations",target:"_blank",rel:"noopener noreferrer"},w=l("h2",{id:"其他杂项",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#其他杂项","aria-hidden":"true"},"#"),o(" 其他杂项")],-1),L={href:"https://cn.comsol.com/blogs/how-to-make-boundary-conditions-conditional-in-your-simulation/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://cn.comsol.com/blogs/how-to-customize-the-comsol-desktop-and-use-keyboard-shortcuts/",target:"_blank",rel:"noopener noreferrer"},S=l("sup",null,"®",-1),x={href:"https://cn.comsol.com/blogs/how-to-use-the-find-and-auto-completion-tools-for-faster-model-setup/",target:"_blank",rel:"noopener noreferrer"};function y(E,v){const t=s("RouterLink"),r=s("ExternalLinkIcon");return i(),c("div",null,[h,u(" more "),m,l("ul",null,[l("li",null,[l("p",null,[e(t,{to:"/software/comsol/install.html"},{default:n(()=>[o("软件下载与安装")]),_:1})])]),l("li",null,[l("p",null,[e(t,{to:"/software/comsol/intro.html"},{default:n(()=>[o("有限元分析软件介绍")]),_:1})])]),l("li",null,[l("p",null,[e(t,{to:"/software/comsol/get-started.html"},{default:n(()=>[o("快速上手 COMSOL")]),_:1})])]),l("li",null,[l("p",null,[e(t,{to:"/software/comsol/geometry/"},{default:n(()=>[o("几何")]),_:1})]),l("ul",null,[l("li",null,[l("p",null,[e(t,{to:"/software/comsol/geometry/view.html"},{default:n(()=>[o("浏览几何")]),_:1})])]),l("li",null,[l("p",null,[e(t,{to:"/software/comsol/geometry/build.html"},{default:n(()=>[o("构建几何")]),_:1})])])])]),l("li",null,[l("p",null,[e(t,{to:"/software/comsol/select.html"},{default:n(()=>[o("选择")]),_:1})])]),l("li",null,[l("p",null,[e(t,{to:"/software/comsol/material.html"},{default:n(()=>[o("材料")]),_:1})])]),l("li",null,[l("p",null,[e(t,{to:"/software/comsol/physic-field.html"},{default:n(()=>[o("物理场")]),_:1})])]),l("li",null,[l("p",null,[e(t,{to:"/software/comsol/mesh/"},{default:n(()=>[o("网格")]),_:1})])]),l("li",null,[l("p",null,[e(t,{to:"/software/comsol/study.html"},{default:n(()=>[o("研究")]),_:1})])]),l("li",null,[l("p",null,[e(t,{to:"/software/comsol/result.html"},{default:n(()=>[o("结果")]),_:1})])]),l("li",null,[l("p",null,[e(t,{to:"/software/comsol/app.html"},{default:n(()=>[o("APP")]),_:1})])])]),_,l("ul",null,[l("li",null,[l("p",null,[l("a",d,[o("COMSOL 新手指南"),e(r)])])]),l("li",null,[l("p",null,[l("a",f,[o("COMSOL App 开发器简介"),e(r)])])]),l("li",null,[l("p",null,[l("a",O,[o("COMSOL Multiphysics 应用程序编程指南"),e(r)])])]),l("li",null,[l("p",null,[l("a",g,[o("COMSOL 多物理场仿真百科"),e(r)])])]),l("li",null,[l("p",null,[l("a",k,[o("COMSOL 视频中心"),e(r)])])]),l("li",null,[l("p",null,[l("a",C,[o("COMSOL 在线课程回放"),e(r)]),o(" (应该是在疫情期间限时开放)")])]),l("li",null,[l("p",null,[l("a",b,[o("基于 COMSOL 的论文"),e(r)])])])]),w,l("ul",null,[l("li",null,[l("p",null,[l("a",L,[o("如何设置特殊边界条件"),e(r)])])]),l("li",null,[l("p",null,[l("a",M,[o("如何定制 COMSOL Desktop"),S,o(" 和使用键盘快捷键"),e(r)])])]),l("li",null,[l("p",null,[l("a",x,[o("使用查找工具和自动完成工具加快建模过程"),e(r)])])])])])}const N=a(p,[["render",y],["__file","index.html.vue"]]);export{N as default};
