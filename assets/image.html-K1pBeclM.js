import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as o,a,w as t,d as l,f as e,r as p,o as d}from"./app-BGIrljxn.js";const E={};function y(F,s){const n=p("CodeDemo"),i=p("RouteLink");return d(),c("div",null,[s[13]||(s[13]=o('<h2 id="插入图片" tabindex="-1"><a class="header-anchor" href="#插入图片"><span>插入图片</span></a></h2><p>我们可以用 <code>&lt;img&gt;</code> 元素来把图片放到网页上。它是一个空元素(也就是无法包含内容，可以省略闭合标签)，最少只需要一个 <code>src</code> (一般读作其全称 source)来使其生效。<code>src</code> 属性包含了指向我们想要引入的图片的路径，可以是相对路径或绝对 URL，就像 <code>&lt;a&gt;</code> 元素的 <code>href</code> 属性一样。</p><p>如果您有一幅文件名为 dinosaur.jpg 的图片，且它与您的 HTML 页面存放在相同路径下，那么您可以这样嵌入它:</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;img</span><span style="color:#8FBCBB;"> src</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">dinosaur.jpg</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span></code></pre></div><p>如果这张图片存储在和 HTML 页面同路径的 images 文件夹下(这也是 Google 推荐的做法，利于 SEO/索引)，那么您可以采用如下形式:</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;img</span><span style="color:#8FBCBB;"> src</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">images/dinosaur.jpg</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span></code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>搜索引擎也读取图像的文件名并把它们计入 SEO。因此您应该给您的图片取一个描述性的文件名: dinosaur.jpg 比 img835.png 要好。</p></div><p>您也可以像下面这样使用绝对路径:</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;img</span><span style="color:#8FBCBB;"> src</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">https://www.example.com/images/dinosaur.jpg</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span></code></pre></div><p>但是这种方式是不被推荐的，这样做只会使浏览器做更多的工作，例如重新通过 DNS 再去寻找 IP 地址。通常我们都会把图片和 HTML 放在同一个服务器上。</p><div class="hint-container caution"><p class="hint-container-title">警告</p><p>大多数图片是有版权的。不要在您的网页上使用一张图片，除非:</p><ul><li>您是图片版权所有者</li><li>您有图片版权所有者明确的、书面上的使用授权</li><li>您有充分的证据证明这张图片是公共领域内的</li></ul><p>侵犯版权是违法并且不道德的。此外，在得到授权之前永远不要把您的 <code>src</code> 属性指向其他人网站上的图片。这被称为&quot;盗链(hotlinking)&quot;。同样，盗取其他人的带宽也是违法的。而且这会降低您的页面的加载速度，而且图片可能会在不受您控制的情况下被移走或用别的令人尴尬的东西替换掉。</p></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>像 <code>&lt;img&gt;</code> 和 <code>&lt;video&gt;</code> 这样的元素有时被称之为替换元素，因为这样的元素的内容和尺寸由外部资源(像是一个图片或视频文件)所定义，而不是元素自身。</p></div><h2 id="备选文本" tabindex="-1"><a class="header-anchor" href="#备选文本"><span>备选文本</span></a></h2><p><code>alt</code> 的值应该是对图片的文字描述，用于在图片无法显示或不能被看到的情况。</p>',14)),a(n,{id:"code-demo-62",type:"normal",title:"%E6%A1%88%E4%BE%8B",code:"eJw1jEsOwjAMRK8yygHInt8pWEZCFjVxwE2q2IgF4u6kEt3OvPc+QXzWsA/HMudUAeu3UwqRzNgtjjFOpTajV7/aTKq7x5JTWElSH+RFGMI0geoEb90a2h2EzYI9WdlbPaA4hGx8Sj3/rXdxgbaaYUJ9gTO7rP14TjV8f1XTN7U="},{default:t(()=>s[0]||(s[0]=[l("div",{class:"language-html","data-highlighter":"shiki","data-ext":"html","data-title":"html",style:{"background-color":"#2e3440ff",color:"#d8dee9ff"}},[l("pre",{class:"shiki nord vp-code"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#81A1C1"}},"<img")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#8FBCBB"}},"  src"),l("span",{style:{color:"#ECEFF4"}},"="),l("span",{style:{color:"#ECEFF4"}},'"'),l("span",{style:{color:"#A3BE8C"}},"/assets/img/dinosaur_small.jpg"),l("span",{style:{color:"#ECEFF4"}},'"')]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#8FBCBB"}},"  alt"),l("span",{style:{color:"#ECEFF4"}},"="),l("span",{style:{color:"#ECEFF4"}},'"'),l("span",{style:{color:"#A3BE8C"}},"The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"),l("span",{style:{color:"#ECEFF4"}},'"')]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#81A1C1"}},"/>")])])])],-1)])),_:1}),s[14]||(s[14]=o("<p>测试 <code>alt</code> 属性最简单的方式就是故意拼错图片文件名，这样浏览器就无法找到该图片从而显示备选的文本。</p><p>设置备选文本的原因有很多:</p><ul><li>用户有视力障碍，通过屏幕阅读器来浏览网页 。事实上，给图片一个备选的描述文本对大多数用户都是很有用的。</li><li>就像上面所说的，您也许会把图片的路径或文件名拼错。</li><li>浏览器不支持该图片类型。</li><li>您会想提供一些文字描述来给搜索引擎使用，例如搜索引擎可能会将图片的文字描述和查询条件进行匹配。</li><li>用户关闭的图片显示以减少数据的传输，这之前在手机上是十分普遍的，并且在一些国家带宽有限且昂贵。</li></ul><p><code>alt</code> 中的内容取决于图片的作用:</p>",4)),l("ul",null,[l("li",null,[s[8]||(s[8]=l("p",null,"装饰:",-1)),l("p",null,[s[2]||(s[2]=e("如果图片只是用于装饰，而不是内容的一部分，可以写一个空的 ")),s[3]||(s[3]=l("code",null,'alt=""',-1)),s[4]||(s[4]=e("。例如，屏幕阅读器不会浪费时间对用户读出不是核心需要的内容。实际上装饰性图片就不应该放在 HTML 文件里， ")),a(i,{to:"/code/website/css/intro/background-and-border.html#%E8%83%8C%E6%99%AF%E5%9B%BE%E7%89%87"},{default:t(()=>s[1]||(s[1]=[e("CSS 背景图片")])),_:1}),s[5]||(s[5]=e(" 才应该用于插入装饰图片，但如果这种情况无法避免， ")),s[6]||(s[6]=l("code",null,'alt=""',-1)),s[7]||(s[7]=e(" 会是最佳处理方案。"))])]),s[9]||(s[9]=o("<li><p>内容:</p><p>如果您的图片提供了重要的信息，就要在 <code>alt</code> 文本中简要的提供相同的信息，甚至更近一步，把这些信息写在主要的文本内容里，这样所有人都能看见。不要写冗余的备选文本，如果在主要文本中已经对图片进行了充分的描述，写 <code>alt=&quot;&quot;</code> 就好。</p></li><li><p>链接:</p><p>如果您把图片嵌套在 <code>&lt;a&gt;</code> 标签里，来把图片变成链接，那您还必须提供无障碍的链接文本。在这种情况下，您可以写在同一个 <code>&lt;a&gt;</code> 元素里，或者写在图片的 <code>alt</code> 属性里，随您喜欢。</p></li><li><p>文本:</p><p>您不应该将文本放到图像里。例如，如果您的主标题需要有阴影，您可以用 CSS 来达到这个目的，而不是把文本放到图片里。如果真的必须这么做，那就把文本也放到 <code>alt</code> 里。</p></li>",3))]),s[15]||(s[15]=l("p",null,"本质上，关键在于在图片无法被看见时也提供一个可用的体验，这确保了所有人都不会错失一部分内容。",-1)),s[16]||(s[16]=l("h2",{id:"宽度和高度",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#宽度和高度"},[l("span",null,"宽度和高度")])],-1)),s[17]||(s[17]=l("p",null,"您可以用宽度和高度属性来指定您的图片的高度和宽度。",-1)),a(n,{id:"code-demo-144",type:"normal",title:"%E8%AE%BE%E7%BD%AE%E5%AE%BD%E5%BA%A6%E5%92%8C%E9%AB%98%E5%BA%A6",code:"eJyrVsooyc1RslKyycxNj8lTUCguSraNUdJPLC5OLSnWBwrqp2Tm5RcnlhbFF+cm5uToZRWkxyiBVCbmlABVPtnR8LR/1bPGCS/3zXy6ZMvL5hVPJ/W82LX+6c5Nz2e1vFy14tm8be/39Dxd1/xsTidQ8ZMdq55uX/F0yXKgLFA9UOrl1P3P5za8nNL9tGMlUPB558yXe/c/bmiC2FKemVKSAbTHxMAAIpCRmpmeAbLZ2MQQJKJvF5OnVAsAxCVkKw=="},{default:t(()=>s[10]||(s[10]=[l("div",{class:"language-html","data-highlighter":"shiki","data-ext":"html","data-title":"html",style:{"background-color":"#2e3440ff",color:"#d8dee9ff"}},[l("pre",{class:"shiki nord vp-code"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#81A1C1"}},"<img")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#8FBCBB"}},"  src"),l("span",{style:{color:"#ECEFF4"}},"="),l("span",{style:{color:"#ECEFF4"}},'"'),l("span",{style:{color:"#A3BE8C"}},"/assets/img/dinosaur_small.jpg"),l("span",{style:{color:"#ECEFF4"}},'"')]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#8FBCBB"}},"  alt"),l("span",{style:{color:"#ECEFF4"}},"="),l("span",{style:{color:"#ECEFF4"}},'"'),l("span",{style:{color:"#A3BE8C"}},"一只恐龙头部和躯干的骨架，它有一个巨大的头，长着锋利的牙齿。"),l("span",{style:{color:"#ECEFF4"}},'"')]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#8FBCBB"}},"  width"),l("span",{style:{color:"#ECEFF4"}},"="),l("span",{style:{color:"#ECEFF4"}},'"'),l("span",{style:{color:"#A3BE8C"}},"400"),l("span",{style:{color:"#ECEFF4"}},'"')]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#8FBCBB"}},"  height"),l("span",{style:{color:"#ECEFF4"}},"="),l("span",{style:{color:"#ECEFF4"}},'"'),l("span",{style:{color:"#A3BE8C"}},"341"),l("span",{style:{color:"#ECEFF4"}},'"')]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#81A1C1"}},"/>")])])])],-1)])),_:1}),s[18]||(s[18]=o('<p>在正常的情况下，这不会对显示产生很大的影响， 但是如果图片没有显示(例如用户刚刚开始浏览网页，但是图片还没有加载完成)，您会注意到浏览器会为要显示的图片留下一定的空间。这会使得页面加载更令人愉悦，而不是被跳动的内容布局所困扰。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>不应使用 HTML 属性来改变图片的大小。</p><ul><li>如果您把尺寸设定的太大，最终图片看起来会模糊；</li><li>如果太小，会在下载远远大于您需要的图片时浪费带宽；</li><li>如果您没有保持正确的宽高比，图片可能看起来会扭曲。</li></ul><p>在把图片放到您的网站页面之前，您应该使用图形编辑器使图片的尺寸正确。</p></div><h2 id="图片标题" tabindex="-1"><a class="header-anchor" href="#图片标题"><span>图片标题</span></a></h2><p>类似于超链接，您可以给图片增加 <code>title</code> 属性来提供需要更进一步的支持信息。</p>',4)),a(n,{id:"code-demo-181",type:"normal",title:"%E5%9B%BE%E7%89%87%E6%A0%87%E9%A2%98",code:"eJwljcFKw0AURX/lMXtNxa5EBT+gG9FdQIZmyIxMpiVvohYRonVhsaCILirqqmDMQkFEq6j9GDuJs/IXnJDtuYd79gnXkSRLZFlEoa8AMG6v+MSjiEyj56AXCNVBmsRbGFEp57e7oU8qk0rtzNkkNWd5cXhuv0dm/GL7mbkY/n48mffn8vrY5llx9/r3OTSP/eJm4OTZJDdvmRnfu9X5brJX0/I2tZen5uTBwXIwsl/Tn/SoruyKQHPXaTYaNeBMhLwqLzYXaqKFlsyBNdiYW2d70FEQCOxK2gOhQHMGLaranKFmMWwqscNiFLoHrQRZElUf3qqvyME/iwx8NA=="},{default:t(()=>s[11]||(s[11]=[l("div",{class:"language-html","data-highlighter":"shiki","data-ext":"html","data-title":"html",style:{"background-color":"#2e3440ff",color:"#d8dee9ff"}},[l("pre",{class:"shiki nord vp-code"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#81A1C1"}},"<img")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#8FBCBB"}},"  src"),l("span",{style:{color:"#ECEFF4"}},"="),l("span",{style:{color:"#ECEFF4"}},'"'),l("span",{style:{color:"#A3BE8C"}},"/assets/img/dinosaur_small.jpg"),l("span",{style:{color:"#ECEFF4"}},'"')]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#8FBCBB"}},"  alt"),l("span",{style:{color:"#ECEFF4"}},"="),l("span",{style:{color:"#ECEFF4"}},'"'),l("span",{style:{color:"#A3BE8C"}},"一只恐龙头部和躯干的骨架，它有一个巨大的头，长着锋利的牙齿。"),l("span",{style:{color:"#ECEFF4"}},'"')]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#8FBCBB"}},"  width"),l("span",{style:{color:"#ECEFF4"}},"="),l("span",{style:{color:"#ECEFF4"}},'"'),l("span",{style:{color:"#A3BE8C"}},"400"),l("span",{style:{color:"#ECEFF4"}},'"')]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#8FBCBB"}},"  height"),l("span",{style:{color:"#ECEFF4"}},"="),l("span",{style:{color:"#ECEFF4"}},'"'),l("span",{style:{color:"#A3BE8C"}},"341"),l("span",{style:{color:"#ECEFF4"}},'"')]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#8FBCBB"}},"  title"),l("span",{style:{color:"#ECEFF4"}},"="),l("span",{style:{color:"#ECEFF4"}},'"'),l("span",{style:{color:"#A3BE8C"}},"A T-Rex on display in the Manchester University Museum"),l("span",{style:{color:"#ECEFF4"}},'"')]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#81A1C1"}},"/>")])])])],-1)])),_:1}),s[19]||(s[19]=o('<p>这会给我们一个鼠标悬停提示，看起来就像链接标题。</p><p>图片标题并不必须要包含有意义的信息，通常来说，将这样的支持信息放到主要文本中而不是附着于图片会更好。不过，在当没有空间显示提示时这样做更有用，比如在一个图库样式的照片流中。</p><p>然而并不建议使用 <code>title</code>。<code>title</code> 会带来易访问性的问题，屏幕阅读器的支持是不可预测的，而且大多数浏览器在鼠标悬停外都不会显示它。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>您可以使用 <a href="https://github.com/kazzkiq/balloon.css" target="_blank" rel="noopener noreferrer">balloon-css</a> 库很好的解决这个问题</p></div><h2 id="搭配说明文字" tabindex="-1"><a class="header-anchor" href="#搭配说明文字"><span>搭配说明文字</span></a></h2><p>HTML5 的 <code>&lt;figure&gt;</code> 和 <code>&lt;figcaption&gt;</code> 元素为图片提供一个语义容器，在标题和图片之间建立清晰的关联。</p>',6)),a(n,{id:"code-demo-204",type:"normal",title:"HTML5%20%E8%AF%AD%E4%B9%89%E5%AE%B9%E5%99%A8",code:"eJxNkF1Kw1AQhbcS7gJMxT5J7EoCEtqYXEnSkpvigwjRihoafxBbaK36Umoa0OIPmtbWLsZOrvfJLTgxFHwa5sxhvjOzS0zPtsg6UbaoUXf1kupIkkJtI6uSxNzyhkpkjTHdYzLKcoU6VabV3U1ma5a1sl0zVJJ7NctD7yLx4TxO9y/EZwf6r6IRwWX4PRnB+Jl3D0UcpbdvP9MQHhtpL0DzIonhPYL+PU7RjyPRmvMbX1w14WSIIg86Yjb/8g+WnB1a8UwkFQuFpWTq1DAz+lpxNdfk/BA8qqzVPFp1Sun1FGYfaXvEgzHi4GEAp10eDMXgCJ5acDxBVh5e9BJ+1sT8WaSwze9eFPnfItX5a/Nnkb1fKseivQ=="},{default:t(()=>s[12]||(s[12]=[l("div",{class:"language-html","data-highlighter":"shiki","data-ext":"html","data-title":"html",style:{"background-color":"#2e3440ff",color:"#d8dee9ff"}},[l("pre",{class:"shiki nord vp-code"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#81A1C1"}},"<figure>")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#81A1C1"}},"  <img")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#8FBCBB"}},"    src"),l("span",{style:{color:"#ECEFF4"}},"="),l("span",{style:{color:"#ECEFF4"}},'"'),l("span",{style:{color:"#A3BE8C"}},"/assets/img/dinosaur_small.jpg"),l("span",{style:{color:"#ECEFF4"}},'"')]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#8FBCBB"}},"    alt"),l("span",{style:{color:"#ECEFF4"}},"="),l("span",{style:{color:"#ECEFF4"}},'"'),l("span",{style:{color:"#A3BE8C"}},"一只恐龙头部和躯干的骨架，它有一个巨大的头，长着锋利的牙齿。"),l("span",{style:{color:"#ECEFF4"}},'"')]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#8FBCBB"}},"    width"),l("span",{style:{color:"#ECEFF4"}},"="),l("span",{style:{color:"#ECEFF4"}},'"'),l("span",{style:{color:"#A3BE8C"}},"400"),l("span",{style:{color:"#ECEFF4"}},'"')]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#8FBCBB"}},"    height"),l("span",{style:{color:"#ECEFF4"}},"="),l("span",{style:{color:"#ECEFF4"}},'"'),l("span",{style:{color:"#A3BE8C"}},"341"),l("span",{style:{color:"#ECEFF4"}},'"')]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#81A1C1"}},"  />")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#81A1C1"}},"  <figcaption>"),l("span",{style:{color:"#D8DEE9FF"}},"曼彻斯特大学博物馆展出的一只霸王龙的化石"),l("span",{style:{color:"#81A1C1"}},"</figcaption>")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#81A1C1"}},"</figure>")])])])],-1)])),_:1}),s[20]||(s[20]=o(`<p>这个 <code>&lt;figcaption&gt;</code> 元素 告诉浏览器和其他辅助的技术工具这段说明文字描述了 <code>&lt;figure&gt;</code> 元素的内容。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>从无障碍的角度来说，说明文字和 alt 文本扮演着不同的角色。看得见图片的人们同样可以受益于说明文字，而 alt 文字只有在图片无法显示时才这样。</p></div><div class="hint-container tip"><p class="hint-container-title">figure 的使用</p><p><code>&lt;figure&gt;</code> 里不一定要是一张图片，只要是一个这样的独立内容单元:</p><ul><li>用简洁、易懂的方式表达意图。</li><li>可以置于页面线性流的某处。</li><li>为主要内容提供重要的补充说明。</li></ul><p><code>&lt;figure&gt;</code> 可以是几张图片、一段代码、音视频、方程、表格或别的。</p></div><h2 id="自适应的图片" tabindex="-1"><a class="header-anchor" href="#自适应的图片"><span>自适应的图片</span></a></h2><p>在这一部分中，我们将看看上面说明的两个问题，并且展示怎样用 HTML 的响应式图片来解决这些问题。</p><h3 id="分辨率切换" tabindex="-1"><a class="header-anchor" href="#分辨率切换"><span>分辨率切换</span></a></h3><p>我们想要显示相同的图片内容，仅仅依据设备来显示更大或更小的图片。标准的 <code>&lt;img&gt;</code> 元素传统上仅仅让您给浏览器指定唯一的资源文件。</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;img</span><span style="color:#8FBCBB;"> src</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">elva-fairy-800w.jpg</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;"> alt</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">Elva dressed as a fairy</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span></code></pre></div><p>但是 <code>srcset</code> 和 <code>sizes</code> 可以提供更多额外的资源图像和提示，帮助浏览器选择正确的一个资源。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;img</span></span>
<span class="line"><span style="color:#8FBCBB;">  srcset</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#A3BE8C;">    elva-fairy-320w.jpg 320w,</span></span>
<span class="line"><span style="color:#A3BE8C;">    elva-fairy-480w.jpg 480w,</span></span>
<span class="line"><span style="color:#A3BE8C;">    elva-fairy-800w.jpg 800w</span></span>
<span class="line"><span style="color:#ECEFF4;">  &quot;</span></span>
<span class="line"><span style="color:#8FBCBB;">  sizes</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">(max-width: 320px) 280px,</span></span>
<span class="line"><span style="color:#A3BE8C;">            (max-width: 480px) 440px,</span></span>
<span class="line"><span style="color:#A3BE8C;">            800px</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#8FBCBB;">  src</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">elva-fairy-800w.jpg</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#8FBCBB;">  alt</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">Elva dressed as a fairy</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>srcset</code> 和 <code>sizes</code> 属性看起来很复杂，但是他们并不难理解。每个值都包含逗号分隔的列表。</p><p><code>srcset</code> 定义了我们允许浏览器选择的图像集，以及每个图像的大小。在每个逗号之前，我们写:</p><ol><li>一个文件名 (elva-fairy-480w.jpg.)</li><li>一个空格</li><li>图像的固有宽度(以像素为单位)(480w)</li></ol><div class="hint-container warning"><p class="hint-container-title">注意</p><p>注意使用 <code>w</code> 单位，而不是您预计的 <code>px</code>。这是图像的真实大小。</p></div><p><code>sizes</code> 定义了一组媒体条件(例如屏幕宽度)并且指明当某些媒体条件为真时，什么样的图片尺寸是最佳选择—我们在之前已经讨论了一些提示。在这种情况下，在每个逗号之前，我们写:</p><ol><li>一个媒体条件((max-width:480px))——您会在 CSS topic 中学到更多的。但是现在我们仅仅讨论的是媒体条件描述了屏幕可能处于的状态。在这里，我们说“当可视窗口的宽度是 480 像素或更少”。</li><li>一个空格</li><li>当媒体条件为真时，图像将填充的槽的宽度(440px)</li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>您也许会提供宽度一个固定值 (px, em) 或者是一个相对于视口的长度(vw)。最后一个槽的宽度是没有媒体条件的，它是默认的，当没有任何一个媒体条件为真时，它就会生效。当浏览器成功匹配第一个媒体条件的时候，剩下所有的东西都会被忽略，所以要注意媒体条件的顺序。</p></div><p>所以，有了这些属性，浏览器会:</p><ol><li>查看设备宽度</li><li>检查 sizes 列表中哪个媒体条件是第一个为真</li><li>查看给予该媒体查询的槽大小</li><li>加载 srcset 列表中引用的最接近所选的槽大小的图像</li></ol><p>老旧的浏览器不支持这些特性，它会忽略这些特征。并继续正常加载 <code>src</code> 属性引用的图像文件。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在本博客 HTML 文件中的 <code>&lt;head&gt;</code> 标签里，您将会找到这一行代码 <code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width&quot;&gt;</code>。这行代码会强制地让手机浏览器采用它们真实可视窗口的宽度来加载网页。</p><p>有些手机浏览器会提供不真实的可视窗口宽度, 然后加载比浏览器真实可视窗口的宽度大的宽度的网页，然后再缩小加载的页面，这样的做法对响应式图片或其他设计，没有任何帮助。</p></div>`,21))])}const g=r(E,[["render",y],["__file","image.html.vue"]]),C=JSON.parse('{"path":"/code/website/html/intro/image.html","title":"图片","lang":"zh-CN","frontmatter":{"title":"图片","icon":"pic","date":"2019-09-02T00:00:00.000Z","category":"HTML","order":5,"description":"插入图片 我们可以用 <img> 元素来把图片放到网页上。它是一个空元素(也就是无法包含内容，可以省略闭合标签)，最少只需要一个 src (一般读作其全称 source)来使其生效。src 属性包含了指向我们想要引入的图片的路径，可以是相对路径或绝对 URL，就像 <a> 元素的 href 属性一样。 如果您有一幅文件名为 dinosaur.jpg 的...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/website/html/intro/image.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"图片"}],["meta",{"property":"og:description","content":"插入图片 我们可以用 <img> 元素来把图片放到网页上。它是一个空元素(也就是无法包含内容，可以省略闭合标签)，最少只需要一个 src (一般读作其全称 source)来使其生效。src 属性包含了指向我们想要引入的图片的路径，可以是相对路径或绝对 URL，就像 <a> 元素的 href 属性一样。 如果您有一幅文件名为 dinosaur.jpg 的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2019-09-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图片\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"插入图片","slug":"插入图片","link":"#插入图片","children":[]},{"level":2,"title":"备选文本","slug":"备选文本","link":"#备选文本","children":[]},{"level":2,"title":"宽度和高度","slug":"宽度和高度","link":"#宽度和高度","children":[]},{"level":2,"title":"图片标题","slug":"图片标题","link":"#图片标题","children":[]},{"level":2,"title":"搭配说明文字","slug":"搭配说明文字","link":"#搭配说明文字","children":[]},{"level":2,"title":"自适应的图片","slug":"自适应的图片","link":"#自适应的图片","children":[{"level":3,"title":"分辨率切换","slug":"分辨率切换","link":"#分辨率切换","children":[]}]}],"git":{"createdTime":1605457814000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":9},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4}]},"readingTime":{"minutes":9.98,"words":2993},"filePathRelative":"code/website/html/intro/image.md","localizedDate":"2019年9月2日","excerpt":"","autoDesc":true}');export{g as comp,C as data};
