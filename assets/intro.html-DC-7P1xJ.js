import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o,c as a,d as n,e,f as s,b as l}from"./app-DHOHoluL.js";const r={},p=e("p",null,"jQuery 是 JavaScript 世界中使用最广泛的一个库。鼎盛时期全世界大约有 80~90%的网站直接或间接地使用了 jQuery。",-1),c=e("p",null,"jQuery 能帮我们干这些事情:",-1),i=e("ul",null,[e("li",null,"消除浏览器差异: 您不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写 Ajax 等代码；"),e("li",null,[s("简洁的操作 DOM 的方法: 写 "),e("code",null,"$('#test')"),s(" 肯定比 "),e("code",null,"document.getElementById('test')"),s(" 来得简洁；")]),e("li",null,"轻松实现动画、修改 CSS 等各种操作。"),e("li",null,"jQuery 的理念 “Write Less, Do More“，让您写更少的代码，完成更多的工作!")],-1),d=l(`<h2 id="jquery-版本" tabindex="-1"><a class="header-anchor" href="#jquery-版本"><span>jQuery 版本</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>jQuery 的 <code>1.x</code> 版本 兼容 ie678，<code>2.x</code> 为了精简代码体积移除了 ie678 的兼容。<code>3.x</code> 只兼容最新的一批浏览器，是官方还在更新维护的把呢不能</p><p>由于已经 2023 年了，直接选用 jQuery<code>3.x</code> 版本即可。</p></div><p>从 jQuery 官网可以下载最新版本。jQuery 只是一个 jquery-xxx.js 文件，但您会看到有 compressed(已压缩)和 uncompressed(未压缩)两种版本，使用时完全一样，但如果您想深入研究 jQuery 源码，那就用 uncompressed 版本。</p><h2 id="使用-jquery" tabindex="-1"><a class="header-anchor" href="#使用-jquery"><span>使用 jQuery</span></a></h2><p>使用 jQuery 只需要在页面的 <code>&lt;head&gt;</code> 引入 jQuery 文件即可:</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;head&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">    &lt;script</span><span style="color:#8FBCBB;"> src</span><span style="color:#ECEFF4;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">//code.jquery.com/jquery-3.4.1.min.js</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    ...</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;/head&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;body&gt;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    ...</span></span>
<span class="line"><span style="color:#81A1C1;">  &lt;/body&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;/html&gt;</span></span></code></pre></div><h2 id="符号" tabindex="-1"><a class="header-anchor" href="#符号"><span>$ 符号</span></a></h2><p><code>$</code> 是著名的 jQuery 符号。实际上，jQuery 把所有功能全部封装在一个全局变量 jQuery 中，而 <code>$</code> 也是一个合法的变量名，它是变量 jQuery 的别名:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9;">window</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">jQuery</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // jQuery(selector, context)</span></span>
<span class="line"><span style="color:#D8DEE9;">window</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">$</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // jQuery(selector, context)</span></span>
<span class="line"><span style="color:#D8DEE9;">$</span><span style="color:#81A1C1;"> ===</span><span style="color:#D8DEE9;"> jQuery</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // true</span></span>
<span class="line"><span style="color:#81A1C1;">typeof</span><span style="color:#D8DEE9;"> $</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // &#39;function&#39;</span></span></code></pre></div><p><code>$</code> 本质上就是一个函数，但是函数也是对象，于是 <code>$</code> 除了可以直接调用外，也可以有很多其他属性。</p><p>注意，您看到的 <code>$</code> 函数名可能不是 <code>jQuery(selector, context)</code>，因为很多 JavaScript 压缩工具可以对函数名和参数改名，所以压缩过的 jQuery 源码 <code>$</code> 函数可能变成 <code>a(b, c)</code>。</p><p>绝大多数时候，我们都直接用 <code>$</code> (因为写起来更简单嘛)。但是，如果 <code>$</code> 这个变量不幸地被占用了，而且还不能改，那我们就只能让 jQuery 把 <code>$</code> 变量交出来，然后就只能使用 <code>jQuery</code> 这个变量:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9;">$</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // jQuery(selector, context)</span></span>
<span class="line"><span style="color:#D8DEE9;">jQuery</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">noConflict</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">$</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // undefined</span></span>
<span class="line"><span style="color:#D8DEE9;">jQuery</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // jQuery(selector, context)</span></span></code></pre></div><p>这种黑魔法的原理是 jQuery 在占用<code>$</code>之前，先在内部保存了原来的<code>$</code>,调用 <code>jQuery.noConflict()</code> 时会把原来保存的变量还原。</p>`,14);function y(u,m){return o(),a("div",null,[p,c,i,n(" more "),d])}const E=t(r,[["render",y],["__file","intro.html.vue"]]),Q=JSON.parse(`{"path":"/code/website/jQuery/intro.html","title":"jQuery 介绍","lang":"zh-CN","frontmatter":{"title":"jQuery 介绍","icon":"creative","category":"jQuery","date":"2019-11-02T00:00:00.000Z","tag":["介绍"],"description":"jQuery 是 JavaScript 世界中使用最广泛的一个库。鼎盛时期全世界大约有 80~90%的网站直接或间接地使用了 jQuery。 jQuery 能帮我们干这些事情: 消除浏览器差异: 您不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写 Ajax 等代码； 简洁的操作 DOM 的方法: 写 $('#test') 肯定比 documen...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/website/jQuery/intro.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"jQuery 介绍"}],["meta",{"property":"og:description","content":"jQuery 是 JavaScript 世界中使用最广泛的一个库。鼎盛时期全世界大约有 80~90%的网站直接或间接地使用了 jQuery。 jQuery 能帮我们干这些事情: 消除浏览器差异: 您不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写 Ajax 等代码； 简洁的操作 DOM 的方法: 写 $('#test') 肯定比 documen..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-12T09:46:14.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"介绍"}],["meta",{"property":"article:published_time","content":"2019-11-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-12T09:46:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"jQuery 介绍\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-11-02T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-12T09:46:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"jQuery 版本","slug":"jquery-版本","link":"#jquery-版本","children":[]},{"level":2,"title":"使用 jQuery","slug":"使用-jquery","link":"#使用-jquery","children":[]},{"level":2,"title":"$ 符号","slug":"符号","link":"#符号","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1678614374000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":6},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":2.04,"words":613},"filePathRelative":"code/website/jQuery/intro.md","localizedDate":"2019年11月2日","excerpt":"<p>jQuery 是 JavaScript 世界中使用最广泛的一个库。鼎盛时期全世界大约有 80~90%的网站直接或间接地使用了 jQuery。</p>\\n<p>jQuery 能帮我们干这些事情:</p>\\n<ul>\\n<li>消除浏览器差异: 您不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写 Ajax 等代码；</li>\\n<li>简洁的操作 DOM 的方法: 写 <code>$('#test')</code> 肯定比 <code>document.getElementById('test')</code> 来得简洁；</li>\\n<li>轻松实现动画、修改 CSS 等各种操作。</li>\\n<li>jQuery 的理念 “Write Less, Do More“，让您写更少的代码，完成更多的工作!</li>\\n</ul>\\n","autoDesc":true}`);export{E as comp,Q as data};
