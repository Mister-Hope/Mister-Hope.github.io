import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as a,o as t}from"./app-D_3IGtdL.js";const n={};function l(p,i){return t(),s("div",null,i[0]||(i[0]=[a(`<h2 id="iframe" tabindex="-1"><a class="header-anchor" href="#iframe"><span>Iframe</span></a></h2><p><code>&lt;iframe&gt;</code> 元素旨在允许您将其他 Web 文档嵌入到当前文档中。这很适合将第三方内容嵌入您的网站，您可能无法直接控制，也不希望实现自己的版本 - 例如来自在线视频提供商的视频，Disqus 等评论系统，在线地图提供商，广告横幅等。</p><div class="hint-container tip"><p class="hint-container-title">案例</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">iframe</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://developer.mozilla.org/en-US/docs/Glossary&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  width</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;100%&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  height</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;500&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  frameborder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;0&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  allowfullscreen</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  sandbox</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://developer.mozilla.org/en-US/docs/Glossary&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      Fallback link for browsers that don&#39;t support iframes</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">iframe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><ul><li><p>allowfullscreen</p><p>如果设置，<code>&lt;iframe&gt;</code> 则可以通过全屏 API 设置为全屏模式(稍微超出本文的范围)。</p></li><li><p>frameborder</p><p>如果设置为 1，则会告诉浏览器在此框架和其他框架之间绘制边框，这是默认行为。0 删除边框。不推荐这样设置，因为在 CSS 中可以更好地实现相同的效果。border: none;</p></li><li><p>src</p><p>该属性与 <code>&lt;video&gt;/&lt;img&gt;</code> 一样包含指向要嵌入文档的 URL 路径。</p></li><li><p>width 和 height</p><p>这些属性指定您想要的 iframe 的宽度和高度。</p></li><li><p>备选内容 与 <code>&lt;video&gt;</code> 等其他类似元素相同，您可以在 <code>&lt;iframe&gt;&lt;/iframe&gt;</code> 标签之间包含备选内容，如果浏览器不支持 <code>&lt;iframe&gt;</code>，将会显示备选内容，这种情况下，我们已经添加了一个到该页面的链接。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>2023 年几乎不可能遇到不支持 <code>&lt;iframe&gt;</code> 的浏览器。</p></div></li><li><p>sandbox</p><p>该属性需要在已经支持其他 <code>&lt;iframe&gt;</code> 功能(例如 IE 10 及更高版本)但稍微更现代的浏览器上才能工作，该属性可以提高安全性设置。</p></li></ul><h3 id="安全隐患" tabindex="-1"><a class="header-anchor" href="#安全隐患"><span>安全隐患</span></a></h3><p>如果黑客试图恶意修改您的网页或欺骗人们进行不想做的事情时常把 iframe 作为共同的攻击目标(官方术语: 攻击向量)，例如显示用户名和密码等敏感信息。因此，规范工程师和浏览器开发人员已经开发了各种安全机制，使 <code>&lt;iframe&gt;</code> 更加安全。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>单击劫持是一种常见的 iframe 攻击，黑客将隐藏的 iframe 嵌入到您的文档中(或将您的文档嵌入到他们自己的恶意网站)，并使用它来捕获用户的交互。这是误导用户或窃取敏感数据的常见方式。</p></div><h4 id="只有在必要时嵌入" tabindex="-1"><a class="header-anchor" href="#只有在必要时嵌入"><span>只有在必要时嵌入</span></a></h4><p>有时嵌入第三方内容(例如 YouTube 视频和地图)是有意义的，但如果您只在完全需要时嵌入第三方内容，您可以省去很多麻烦。网络安全的一个很好的经验法则是“您怎么谨慎都不为过，如果您决定要做这件事，多检查一遍；如果是别人做的，在被证明是安全的之前，都假设这是危险的。”</p><p>除了安全问题，您还应该意识到知识产权问题。无论在线内容还是离线内容，绝大部分内容都是有版权的，甚至是一些您没想到有版权的内容(例如，Wikimedia Commons 上的大多数图片)。不要在网页上展示一些不属于您的内容，除非您是所有者或所有者给了您明确的、书面的许可。对于侵犯版权的惩罚是严厉的。再说一次，您再小心也不为过。</p><p>如果内容获得许可，您必须遵守许可条款。例如，MDN 上的内容是在 CC-BY-SA 下许可的，这意味着，如果您要引用我们的内容，就必须用适当的方式注明来源，即使您对内容做了实质性的修改。</p><h4 id="使用-https" tabindex="-1"><a class="header-anchor" href="#使用-https"><span>使用 HTTPS</span></a></h4><p>HTTPS 是 HTTP 的加密版本。您应该尽可能用 HTTPS 为您的网站提供服务:</p><ul><li>HTTPS 减少了远程内容在传输过程中被篡改的机会，</li><li>HTTPS 防止嵌入式内容访问您的父文档中的内容，反之亦然。</li></ul><p>由于 HTTPS 的第二个好处，无论成本如何，您绝对不能使用 HTTP 嵌入第三方内容(在最好的情况下，您的用户的 Web 浏览器会给他们一个可怕的警告)。</p><h4 id="始终使用-sandbox-属性" tabindex="-1"><a class="header-anchor" href="#始终使用-sandbox-属性"><span>始终使用 sandbox 属性</span></a></h4><p>您应该给嵌入的内容仅能完成自己工作的权限，当然这也适用于您自己的内容。</p><p>一个允许包含在其里的代码以适当的方式执行或者用于测试，但不能对其他代码库(意外或恶意)造成任何损害的容器称为沙盒。</p><p>未沙盒化 (Unsandboxed) 内容可以做得太多，如执行 JavaScript，提交表单，弹出窗口等。默认情况下，您应该使用没有参数的 <code>sandbox</code> 属性来强制执行所有可用的限制，如我们前面的示例所示。如果真的需要关闭某些限制，您可以逐个添加权限(在 <code>sandbox=&quot;&quot;</code> 属性值内)。</p><div class="hint-container caution"><p class="hint-container-title">警告</p><p>您永远不应该同时添加 <code>allow-scripts</code> 和 <code>allow-same-origin</code> 到您的 sandbox 属性中-在这种情况下，嵌入式内容可以绕过阻止站点执行脚本的同源安全策略，并使用 JavaScript 完全关闭沙盒。</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果攻击者可以欺骗人们直接访问恶意内容(在 iframe 之外)，则沙盒无法提供保护。如果某些内容可能是恶意的(例如，用户生成的内容)，请保证其是从不同的域向您的主站点提供的。</p></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>更多沙盒相关详情，请见 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox" target="_blank" rel="noopener noreferrer">MDN sandbox</a></p></div><h4 id="配置-csp-指令" tabindex="-1"><a class="header-anchor" href="#配置-csp-指令"><span>配置 CSP 指令</span></a></h4><p>CSP 代表内容安全策略，它提供一组 HTTP 标头(由 web 服务器发送时与元数据一起发送的元数据)，旨在提高 HTML 文档的安全性。在 <code>&lt;iframe&gt;</code> 安全性方面，您可以将服务器配置为发送适当的 <code>X-Frame-Options</code> 标题。这样做可以防止其他网站在其网页中嵌入您的内容(这将导致点击和一系列其他攻击)。</p><h2 id="embed-和-object" tabindex="-1"><a class="header-anchor" href="#embed-和-object"><span><code>&lt;embed&gt;</code> 和 <code>&lt;object&gt;</code></span></a></h2><p><code>&lt;embed&gt;</code> 和 <code>&lt;object&gt;</code> 元素的功能不同于 <code>&lt;iframe&gt;</code>。这些元素是用来嵌入多种类型的外部内容的通用嵌入工具，其中包括像 Java 小程序，PDF 这样的插件技术，甚至像视频，SVG 和图像的内容。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>目前浏览器对视频，SVG，图像的支持已经很好，而且网站应该使用 JavaScript 编写，所以不建议使用这两个元素。</p></div>`,27)]))}const h=e(n,[["render",l],["__file","embed.html.vue"]]),o=JSON.parse('{"path":"/code/website/html/intro/embed.html","title":"嵌入","lang":"zh-CN","frontmatter":{"title":"嵌入","icon":"frame","date":"2019-09-02T00:00:00.000Z","category":"HTML","order":9,"description":"Iframe <iframe> 元素旨在允许您将其他 Web 文档嵌入到当前文档中。这很适合将第三方内容嵌入您的网站，您可能无法直接控制，也不希望实现自己的版本 - 例如来自在线视频提供商的视频，Disqus 等评论系统，在线地图提供商，广告横幅等。 案例 allowfullscreen 如果设置，<iframe> 则可以通过全屏 API 设置为全屏模...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/website/html/intro/embed.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"嵌入"}],["meta",{"property":"og:description","content":"Iframe <iframe> 元素旨在允许您将其他 Web 文档嵌入到当前文档中。这很适合将第三方内容嵌入您的网站，您可能无法直接控制，也不希望实现自己的版本 - 例如来自在线视频提供商的视频，Disqus 等评论系统，在线地图提供商，广告横幅等。 案例 allowfullscreen 如果设置，<iframe> 则可以通过全屏 API 设置为全屏模..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-09-02T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"嵌入\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-02T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"Iframe","slug":"iframe","link":"#iframe","children":[{"level":3,"title":"安全隐患","slug":"安全隐患","link":"#安全隐患","children":[]}]},{"level":2,"title":"<embed> 和 <object>","slug":"embed-和-object","link":"#embed-和-object","children":[]}],"readingTime":{"minutes":5.39,"words":1618},"filePathRelative":"code/website/html/intro/embed.md","localizedDate":"2019年9月2日","excerpt":"","autoDesc":true}');export{h as comp,o as data};
