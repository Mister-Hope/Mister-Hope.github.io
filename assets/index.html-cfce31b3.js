import{ac as r,M as s,N as l,L as o,$ as e,W as t,ad as d,ae as a,a1 as c}from"./framework-6fc096bd.js";const h={},p=a('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>in 东师小程序的大部分页面都均由 YAML 文件生成。开发者只需要使用编辑器编辑 YAML，即可增添或修改小程序页面。</p><div class="custom-container info"><p class="custom-container-title">YAML</p><p>YAML 是专门用来写配置文件的语言，非常简洁和强大，其设计目标，就是方便人类读写。</p></div><h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h2>',4),u={class:"custom-container tip"},_=o("p",{class:"custom-container-title"},"更多参考",-1),f={href:"https://github.com/Hope-Studio/innenu-res/blob/main/res/",target:"_blank",rel:"noopener noreferrer"},m=a('<h2 id="开发注意事项" tabindex="-1"><a class="header-anchor" href="#开发注意事项" aria-hidden="true">#</a> 开发注意事项</h2><p>下面是开发中需要注意的一些问题。</p><h3 id="文件命名" tabindex="-1"><a class="header-anchor" href="#文件命名" aria-hidden="true">#</a> 文件命名</h3><p>由于小程序的访问是通过网址进行的，需要避免中文。页面 YAML 和媒体文件的文件名，请遵守以下命名规则:</p><ol><li>文件名只包含英文与数字和 <code>-</code>，不要包含特殊符号、空格或者中文字符。由多个单词组成的文件名建议使用 <code>-</code> 链接。如 <code>厚普公益学校</code> 可以表示为 <code>hope-good-school</code>。</li><li>尽可能使用简短的单词，必要时可缩写，比如使用 <code>intro</code> <code>desc</code> <code>guide</code> 而不是 <code>introduction</code> <code>description</code>，<code>handbook</code>。</li><li>表达相同或相近内容的多个媒体文件用 &quot;短词组+编号&quot; 的形式即可，不要试图用很长的文字命名。</li></ol><h3 id="文本排版" tabindex="-1"><a class="header-anchor" href="#文本排版" aria-hidden="true">#</a> 文本排版</h3><ol><li>中文和英文之间最好使用空格隔开</li><li>尽量使用英文的括号</li></ol><h3 id="注意高亮" tabindex="-1"><a class="header-anchor" href="#注意高亮" aria-hidden="true">#</a> 注意高亮</h3><p>如果您在使用 VSCode 进行编辑，您可能会注意到，数字和布尔值、字符串、对象的键名使用三种不同的颜色进行高亮。</p><p>如果您编写的文件出现“红色波浪线”，或您编写的内容的高亮颜色，和其类型不符，那么说明您编写的格式出现了错误。</p><h3 id="图片压缩" tabindex="-1"><a class="header-anchor" href="#图片压缩" aria-hidden="true">#</a> 图片压缩</h3>',11),b={href:"https://squoosh.app/",target:"_blank",rel:"noopener noreferrer"},x=a('<ul><li>含有透明区域的图片需要压缩至 Brower PNG 格式</li><li>Gif 无需压缩</li><li>其他图片压缩到 MozJpeg</li></ul><p>不含有文字、不需要细节的图片保持 4 万左右分辨率即可，如果图片使用后置摄像机拍摄，即 12 万或 20 万像素，压缩时可酌情考虑 50%缩放。</p><h3 id="文件转码" tabindex="-1"><a class="header-anchor" href="#文件转码" aria-hidden="true">#</a> 文件转码</h3><p>由于 QQ 小程序对 2003 版本 Office 格式支持极差，即 <code>.doc</code> <code>.xls</code> <code>.ppt</code>。如遇到此类文件，请尝试用 Office 打开，并转换为最新版格式 (<code>docx</code>、<code>xlsx</code>、<code>pptx</code>)。具体方式为 “文件” - “信息” - “转换”。</p><h3 id="媒体文件存放" tabindex="-1"><a class="header-anchor" href="#媒体文件存放" aria-hidden="true">#</a> 媒体文件存放</h3><p>由于 YAML 是纯文本文件，所有的图片、文件等需单独列出，并在对应的配置项处填入对应的网址。</p><p>如:</p><ul><li><strong>img</strong> 组件的 <code>src</code></li><li><strong>doc</strong> 组件的 <code>url</code></li></ul><p>in 东师服务器文件结构如下:</p><ul><li>文件存放在 <code>https://mp.innenu.com/file/</code> 下</li><li>图片存放在 <code>https://mp.innenu.com/img/</code> 下</li><li>页面 YAML 存放在 <code>https://mp.innenu.com/res/</code> 下</li><li>图标存放在 <code>https://mp.innenu.com/res/icon/</code> 下</li></ul>',10),g={class:"custom-container info"},L=o("p",{class:"custom-container-title"},"相关信息",-1),k={href:"https://github.com/Hope-Studio/innenu-res",target:"_blank",rel:"noopener noreferrer"},M=o("h3",{id:"点位获取",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#点位获取","aria-hidden":"true"},"#"),e(" 点位获取")],-1),A={href:"https://lbs.qq.com/getPoint/",target:"_blank",rel:"noopener noreferrer"};function S(Y,v){const n=c("RouterLink"),i=c("ExternalLinkIcon");return s(),l("div",null,[p,o("ol",null,[o("li",null,[e("为了编写小程序页面配置文件，您需要先学习 "),t(n,{to:"/note/innenu/yaml.html"},{default:d(()=>[e("YAML 的规则")]),_:1}),e("，同时简单浏览一下一款编辑器 "),t(n,{to:"/software/vscode/simple.html"},{default:d(()=>[e("VSCode 的介绍")]),_:1})]),o("li",null,[e("掌握上述两个内容之后，您就可以尝试对照 "),t(n,{to:"/note/innenu/tag-list.html"},{default:d(()=>[e("小程序简易参数表")]),_:1}),e(" 通过 VSCode 编写页面 YAML 文件了，如果您觉得直接上手太难，您可以参阅 "),t(n,{to:"/note/innenu/get-started.html"},{default:d(()=>[e("交互式教程")]),_:1}),e(" 来体验一个示例。")])]),o("div",u,[_,o("p",null,[e("所有的小程序页面都在 "),o("a",f,[e("https://github.com/Hope-Studio/innenu-res/blob/main/res/"),t(i)]),e(" 下，您可以尽情的进行参考。")])]),m,o("p",null,[e("图片在拍摄需使用 "),o("a",b,[e("Squoosh"),t(i)]),e(" 进行压缩。")]),x,o("div",g,[L,o("p",null,[e("关于完整的服务器文件结构，请访问 "),o("a",k,[e("https://github.com/Hope-Studio/innenu-res"),t(i)])])]),M,o("p",null,[e("如需获取地理点位，请使用 "),o("a",A,[e("腾讯地图选点工具"),t(i)]),e("。")])])}const q=r(h,[["render",S],["__file","index.html.vue"]]);export{q as default};
