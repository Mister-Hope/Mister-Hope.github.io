import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as k,c as r,a as l,w as e,b as h,e as i,f as s}from"./app-r406UCC8.js";const d={},p=h('<h2 id="替换元素" tabindex="-1"><a class="header-anchor" href="#替换元素"><span>替换元素</span></a></h2><p>图像和视频被描述为替换元素。 这意味着 CSS 不能影响这些元素的内部布局，仅影响它们在页面上于其他元素中的位置。</p><div class="hint-container info"><p class="hint-container-title">可替换元素</p><p>在 CSS 中，可替换元素(replaced element)的展现效果不是由 CSS 来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于 CSS 的。</p><p>简单来说，它们的内容不受当前文档的样式的影响。CSS 可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。某些可替换元素，例如 <code>&lt;iframe&gt;</code> 元素，可能具有自己的样式表，但它们不会继承父文档的样式。</p><p>CSS 能对可替换元素产生的唯一影响在于，部分属性支持控制元素内容在其框中的位置或定位方式。</p></div><p>某些替换元素(例如图像和视频)也被描述为具有宽高比。这意味着它在水平(x)和垂直(y)尺寸上均具有大小，并且默认情况下将使用文件的固有尺寸进行显示。</p><h2 id="调整图像大小" tabindex="-1"><a class="header-anchor" href="#调整图像大小"><span>调整图像大小</span></a></h2><p>一个常用的技术是将一张图片的 <code>max-width</code> 设为 100%。这将会允许图片尺寸上小于但不大于盒子。这个技术也会对其他替换元素(例如 <code>&lt;video&gt;</code>，或者 <code>&lt;iframe&gt;</code>)起作用。</p><p>为了把一张图像调整到能够完全盖住一个盒子的大小，您可以使用 <code>object-fit</code> 属性。使用 <code>object-fit</code> 时，替换元素可以以多种方式被调整到合乎盒子的大小。</p><ul><li><code>cover</code> 会缩小图像，维持图像的比例。图像可以整齐地充满盒子，同时由于比例保持不变，图像的一部分将会被盒子裁切掉。</li><li><code>contain</code> 会缩放图片到足以放到盒子里面的大小。如果它和盒子的比例不同，会在某侧留白。</li><li><code>fill</code> 可以让图像充满盒子，但是不会维持比例。</li></ul>',8),B=i("div",{class:"language-html line-numbers-mode","data-highlighter":"shiki","data-ext":"html","data-title":"html",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"div"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"wrapper"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"div"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"box"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"img"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," src"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"/assets/img/balloons.jpg"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," alt"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"balloons"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"cover"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"  </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"div"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"box"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"img"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," src"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"/assets/img/balloons.jpg"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," alt"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"balloons"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"contain"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"  </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),c=i("div",{class:"language-css line-numbers-mode","data-highlighter":"shiki","data-ext":"css","data-title":"css",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}},".box"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"  width"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"200"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#E06C75"}},"px"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"  height"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"200"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#E06C75"}},"px"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"img"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"  height"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"100"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#E06C75"}},"%"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"  width"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"100"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#E06C75"}},"%"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}},".cover"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"  object-fit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"cover"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}},".contain"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"  object-fit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"contain"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"}")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),g=i("h2",{id:"布局中的替换元素",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#布局中的替换元素"},[i("span",null,"布局中的替换元素")])],-1),o=i("p",null,"替换元素使用各式 CSS 布局技巧时，他们的展现略微与其他元素不同。",-1),y=i("p",null,"在一个 flex 或者 grid 布局中，元素默认会把拉伸到充满整块区域。图像不会拉伸，而是会被对齐到网格区域或者弹性容器的起始处。",-1),m=i("div",{class:"language-html line-numbers-mode","data-highlighter":"shiki","data-ext":"html","data-title":"html",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"div"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"wrapper"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"img"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," src"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"/assets/img/star.png"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," alt"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"star"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"div"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-dark":"#FFFFFF","--shiki-light-font-style":"italic","--shiki-dark-font-style":"inherit"}}," /"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"div"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-dark":"#FFFFFF","--shiki-light-font-style":"italic","--shiki-dark-font-style":"inherit"}}," /"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"div"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-dark":"#FFFFFF","--shiki-light-font-style":"italic","--shiki-dark-font-style":"inherit"}}," /"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),A=i("div",{class:"language-css line-numbers-mode","data-highlighter":"shiki","data-ext":"css","data-title":"css",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}},".wrapper"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"  display"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"grid"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"  grid-template-columns"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"1"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#E06C75"}},"fr"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," 1"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#E06C75"}},"fr"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"  grid-template-rows"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"200"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#E06C75"}},"px"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," 200"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#E06C75"}},"px"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"  gap"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"20"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#E06C75"}},"px"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}},".wrapper"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#ABB2BF"}}," >"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}}," div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"  background-color"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"rebeccapurple"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"  border-radius"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"0.5"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#E06C75"}},"em"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"}")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),F=h(`<h2 id="form-元素" tabindex="-1"><a class="header-anchor" href="#form-元素"><span>form 元素</span></a></h2><h3 id="表单元素的继承" tabindex="-1"><a class="header-anchor" href="#表单元素的继承"><span>表单元素的继承</span></a></h3><p>在一些浏览器中，表单元素默认不会继承字体样式，因此如果您想要确保您的表单填入区域使用 body 中或者一个父元素中定义的字体，您需要向您的 CSS 中加入这条规则。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">textarea</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">inherit</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="form-的-box-sizing" tabindex="-1"><a class="header-anchor" href="#form-的-box-sizing"><span>form 的 box-sizing</span></a></h3><p>form 元素可能会针对不同元素使用不同的盒子约束规则。</p><p>为了保证统一，将所有元素的内外边距均设为 0 是个好主意，然后在单独进行样式化控制的时候将这些加回来。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">textarea</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  box-sizing</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">border-box</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  padding</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  margin</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他有用的设置" tabindex="-1"><a class="header-anchor" href="#其他有用的设置"><span>其他有用的设置</span></a></h3><p>除了上面提到的规则以外，您也应该在 <code>&lt;textarea&gt;</code> 上设置 <code>overflow: auto</code> 以避免 IE 在不需要滚动条的时候显示滚动条:</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">textarea</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  overflow</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">auto</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function C(b,u){const a=n("CodeDemo");return k(),r("div",null,[p,l(a,{id:"code-demo-46",type:"normal",title:"%E8%B0%83%E6%95%B4%E5%9B%BE%E5%83%8F%E5%A4%A7%E5%B0%8F",code:"eJy1kEsOgyAURbdCXtJZK7bD/lbCBNEqBoEIURPj3vtATNu0044I557HBWZofKfgDNdSDkQo7tyNwdhza6uewZ1pQj6iwkwJYyC7mrheIKaYVt5RJLTgShmjXdbamgHhyoe5BBFsRwkzhA5C1xaKNX/u055L/dW4rbAH4Rz+RYalZA7KKEvfnMkpz+10CaCpZN34F1mYZjpcK+pbeszzXdTTfNpHOYvPXn1TtJXwh4fEmYjfpHjXX1oMVhGWJ0JzlYs="},{default:e(()=>[B,c]),_:1}),g,o,l(a,{id:"code-demo-56",type:"normal",title:"%E5%B8%83%E5%B1%80%E4%B8%AD%E7%9A%84%E6%9B%BF%E6%8D%A2%E5%85%83%E7%B4%A0",code:"eJx1jc1uwyAQhF8Fca6NW6kX182TcMGwdVH50y5OWkV59y4hyik5ALszw3xn+V1jkLNcnD8KGwzRp5YnNKUAannQSYjFx00QWjYU+1BJsaKoGhxL2rQUJlQ2m8CL6p9a3/NxUTzxK1+kJWL+eGOKc8s5TyWYv1ls6N1HU9owVIgsVxhsDntMNIvXL2znQQTzif23aSq//e4ZU5p43S466XTnHhh67PTV2J8N855cA2WcBcIK1pqyYwlwLVozOsABjfM7c6bxHWLvlJd/QBZyaQ=="},{default:e(()=>[y,m,A]),_:1}),F])}const f=t(d,[["render",C],["__file","replaced.html.vue"]]),D=JSON.parse('{"path":"/code/website/css/intro/replaced.html","title":"可替换元素","lang":"zh-CN","frontmatter":{"title":"可替换元素","icon":"change","date":"2019-09-06T00:00:00.000Z","order":9,"category":"CSS","description":"替换元素 图像和视频被描述为替换元素。 这意味着 CSS 不能影响这些元素的内部布局，仅影响它们在页面上于其他元素中的位置。 可替换元素 在 CSS 中，可替换元素(replaced element)的展现效果不是由 CSS 来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于 CSS 的。 简单来说，它们的内容不受当前文档的样式的影响。CSS ...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/website/css/intro/replaced.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"可替换元素"}],["meta",{"property":"og:description","content":"替换元素 图像和视频被描述为替换元素。 这意味着 CSS 不能影响这些元素的内部布局，仅影响它们在页面上于其他元素中的位置。 可替换元素 在 CSS 中，可替换元素(replaced element)的展现效果不是由 CSS 来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于 CSS 的。 简单来说，它们的内容不受当前文档的样式的影响。CSS ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2019-09-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"可替换元素\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"替换元素","slug":"替换元素","link":"#替换元素","children":[]},{"level":2,"title":"调整图像大小","slug":"调整图像大小","link":"#调整图像大小","children":[]},{"level":2,"title":"布局中的替换元素","slug":"布局中的替换元素","link":"#布局中的替换元素","children":[]},{"level":2,"title":"form 元素","slug":"form-元素","link":"#form-元素","children":[{"level":3,"title":"表单元素的继承","slug":"表单元素的继承","link":"#表单元素的继承","children":[]},{"level":3,"title":"form 的 box-sizing","slug":"form-的-box-sizing","link":"#form-的-box-sizing","children":[]},{"level":3,"title":"其他有用的设置","slug":"其他有用的设置","link":"#其他有用的设置","children":[]}]}],"git":{"createdTime":1605516411000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":12},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":3.2,"words":961},"filePathRelative":"code/website/css/intro/replaced.md","localizedDate":"2019年9月6日","excerpt":"","autoDesc":true}');export{f as comp,D as data};
