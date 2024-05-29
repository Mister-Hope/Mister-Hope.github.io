import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as d,c as p,d as c,a as t,w as a,e as s,f as e,b as i}from"./app-C6d_tW6U.js";const h={},k=s("p",null,"本章能让您快速了解 HTML 并学会编写它。",-1),m=i('<h2 id="html-简介" tabindex="-1"><a class="header-anchor" href="#html-简介"><span>HTML 简介</span></a></h2><p>HTML 指的是超文本标记语言: <strong>H</strong>yper<strong>T</strong>ext <strong>M</strong>arkup <strong>L</strong>anguage。它是一种用来结构化 Web 网页及其内容的标记语言。</p><p>HTML 不是一门编程语言，而是一种用于定义内容结构的<strong>标记语言</strong> (markup language)。HTML 由一系列的元素(elements)组成，这些元素可以用来包围不同部分的内容，使其以某种方式呈现或者工作。<strong>标记标签</strong> (markup tag) 是 HTML 的基本语法。一对标签 (tags) 可以为一段文字或者一张图片添加超链接，将文字设置为斜体，改变字号，等等。</p><div class="hint-container tip"><p class="hint-container-title">特点</p><ul><li>HTML 使用标记标签来<strong>描述</strong>网页。</li><li>HTML 文档包含了 <strong>HTML 标签</strong>及<strong>文本</strong>内容。</li><li>HTML 文档也叫做 <strong>Web 页面</strong>。</li></ul></div><h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h3><p>对于一段文字</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>Mr.Hope is handsome.</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>HTML 可以将这行文字封装成一个段落(<strong>p</strong>aragraph)元素来使其在单独一行呈现:</p>',8),u=s("div",{class:"language-html line-numbers-mode","data-ext":"html","data-title":"html"},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",style:{"background-color":"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E","--shiki-dark":"#ABB2BF"}},"<"),s("span",{style:{color:"#22863A","--shiki-dark":"#E06C75"}},"p"),s("span",{style:{color:"#24292E","--shiki-dark":"#ABB2BF"}},">Mr.Hope 很帅！</"),s("span",{style:{color:"#22863A","--shiki-dark":"#E06C75"}},"p"),s("span",{style:{color:"#24292E","--shiki-dark":"#ABB2BF"}},">")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),B=i('<div class="hint-container tip"><p class="hint-container-title">深入理解</p><p>HTML 中，除了<strong>语义</strong>，其他什么都没有。</p><p>HTML 是一个纯文本文件，用一些标签来描述文字的语义，这些标签在浏览器里面是看不到的，所以称为“超文本”，所以就是“超文本标记语言”了。</p><p>比如，面试的时候问您，<code>h1</code> 标签有什么作用?</p><ul><li><p>给文本增加主标题的语义。✔️</p></li><li><p>给文字加粗、加黑、变大。❌</p></li></ul></div><h2 id="html-元素语法" tabindex="-1"><a class="header-anchor" href="#html-元素语法"><span>HTML 元素语法</span></a></h2><p>一个元素是:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#B31D28;--shiki-dark:#E06C75;font-style:italic;--shiki-dark-font-style:inherit;">标签名称</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> 属性1</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;值1&quot;</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> 属性2</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;值2&quot;</span><span style="color:#6F42C1;--shiki-dark:#D19A66;">...</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;内容&lt;/</span><span style="color:#B31D28;--shiki-dark:#E06C75;font-style:italic;--shiki-dark-font-style:inherit;">标签名称</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>An element is:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#B31D28;--shiki-dark:#E06C75;font-style:italic;--shiki-dark-font-style:inherit;">tagname</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> attribution1</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;value1&quot;</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> attribution2</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;value2&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;content&lt;/</span><span style="color:#B31D28;--shiki-dark:#E06C75;font-style:italic;--shiki-dark-font-style:inherit;">tagname</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',6),g=s("div",{class:"language-html line-numbers-mode","data-ext":"html","data-title":"html"},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",style:{"background-color":"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E","--shiki-dark":"#ABB2BF"}},"<"),s("span",{style:{color:"#22863A","--shiki-dark":"#E06C75"}},"p"),s("span",{style:{color:"#24292E","--shiki-dark":"#ABB2BF"}},">Mr.Hope 很帅！</"),s("span",{style:{color:"#22863A","--shiki-dark":"#E06C75"}},"p"),s("span",{style:{color:"#24292E","--shiki-dark":"#ABB2BF"}},">")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),y=i(`<p>元素的主要部分有:</p><ul><li><p><strong>开始标签</strong>(Opening tag): 包含元素的名称(本例为 p)，被 <code>&lt;</code>、<code>&gt;</code> 所包围。表示元素从这里开始或者开始起作用 —— 在本例中即段落由此开始。</p></li><li><p><strong>结束标签</strong>(Closing tag): 与开始标签相似，只是其在元素名之前包含了一个 <code>/</code>。这表示着元素的结尾 —— 在本例中即段落在此结束。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>忘记包含结束标签可能会产生一些奇怪的结果。</p></div></li><li><p><strong>内容</strong>(Content): 元素的内容，本例中就是所输入的文本本身。</p></li><li><p><strong>元素</strong>(Element): 开始标签、结束标签与内容相结合，便是一个完整的元素。</p></li></ul><h3 id="标签" tabindex="-1"><a class="header-anchor" href="#标签"><span>标签</span></a></h3><p><code>&lt;tagname ...&gt;</code> 是开始标签，<code>&lt;/tagname&gt;</code> 是结束标签。</p><p>案例中起始标签为 <code>&lt;p&gt;</code> 内容为 <code>Mr.Hope is handsome.</code> 闭合标签为 <code>&lt;/p&gt;</code>。</p><p>开始标签常被称为 <strong>起始标签(Opening tag)</strong>，结束标签常称为 <strong>闭合标签(Closing tag)</strong></p><h3 id="自闭合标签" tabindex="-1"><a class="header-anchor" href="#自闭合标签"><span>自闭合标签</span></a></h3><p>如果标签内部没有内容，可以直接使用一个特殊的写法完成自身的闭合，即为自闭合标签。</p><p>格式:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#B31D28;--shiki-dark:#E06C75;font-style:italic;--shiki-dark-font-style:inherit;">tagname</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> attribution1</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;value1&quot;</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> attribution2</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;value2&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>即:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#B31D28;--shiki-dark:#E06C75;font-style:italic;--shiki-dark-font-style:inherit;">标签名称</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> 属性1</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;值1&quot;</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> 属性2</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;值2&quot;</span><span style="color:#6F42C1;--shiki-dark:#D19A66;">...</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例子:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">input</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;text&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">&lt;!--  属性=&quot;值&quot;  --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">div</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> style</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;height:100px&quot;</span><span style="color:#B31D28;--shiki-dark:#FFFFFF;font-style:italic;--shiki-dark-font-style:inherit;"> /</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">&lt;!--这里空的 div 用于占位置，“撑起”一块空间--&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">空标签</p><p>由于历史原因，一些 HTML 标签在设计时就不包含内容(例如: 图片 <code>&lt;img&gt;</code>，折行 <code>&lt;br&gt;</code>，分割线 <code>&lt;hr&gt;</code>，输入框 <code>&lt;input&gt;</code> 等)，这些标签被称为空标签。</p><p>在空标签内部添加内容是没有任何作用的，同时，空标签在初始时没有结束标签，以自身结束。</p><p>常见的空标签有 <code>br</code>、<code>hr</code>、<code>img</code>，不过还是建议写作 <code>&lt;br /&gt;</code>、<code>&lt;hr /&gt;</code>、<code>&lt;img /&gt;</code>。</p></div><h3 id="标签的嵌套" tabindex="-1"><a class="header-anchor" href="#标签的嵌套"><span>标签的嵌套</span></a></h3><p>除了并列放置标签以外，标签的内容也可以放置其他标签，这就构成了标签的嵌套。比如您想强调 Mr.Hope 的帅:</p>`,17),b=s("div",{class:"language-html line-numbers-mode","data-ext":"html","data-title":"html"},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",style:{"background-color":"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E","--shiki-dark":"#ABB2BF"}},"<"),s("span",{style:{color:"#22863A","--shiki-dark":"#E06C75"}},"p"),s("span",{style:{color:"#24292E","--shiki-dark":"#ABB2BF"}},">Mr.Hope<"),s("span",{style:{color:"#22863A","--shiki-dark":"#E06C75"}},"strong"),s("span",{style:{color:"#24292E","--shiki-dark":"#ABB2BF"}},">十分</"),s("span",{style:{color:"#22863A","--shiki-dark":"#E06C75"}},"strong"),s("span",{style:{color:"#24292E","--shiki-dark":"#ABB2BF"}},">帅！</"),s("span",{style:{color:"#22863A","--shiki-dark":"#E06C75"}},"p"),s("span",{style:{color:"#24292E","--shiki-dark":"#ABB2BF"}},">")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),v=i('<div class="hint-container tip"><p class="hint-container-title">总结</p><ul><li>HTML 元素以 <strong>开始标签</strong> 起始</li><li>HTML 元素以 <strong>结束标签</strong> 终止</li><li><strong>元素的内容</strong> 是开始标签与结束标签之间的内容</li><li>某些 HTML 元素具有 <strong>空内容 (empty content)</strong></li><li>空元素 <strong>在开始标签中进行关闭</strong> (以开始标签的结束使用 <code>/</code> 而结束)</li><li>大多数 HTML 元素可拥有<strong>属性</strong></li></ul></div><h2 id="html-属性" tabindex="-1"><a class="header-anchor" href="#html-属性"><span>HTML 属性</span></a></h2><p>属性包含元素的额外信息，这些信息不会出现在实际的内容中。</p><p>一个属性必须包含如下内容:</p><ol><li>在属性与元素名称 (或上一个属性，如果有超过一个属性的话) 之间的空格符。</li><li>属性名称，后面跟着一个等于号。</li><li>一个属性值，由一对引号 <code>&quot; &quot;</code> 引起来。</li></ol><p>比如 <code>&lt;img src=&quot;/logo.svg&quot; /&gt;</code>，<code>attribute</code> 为 <code>src</code>，<code>value</code> 是 <code>/logo.svg</code></p><p>属性值应该始终被包括在引号内。双引号是最常用的，不过使用单引号也没有问题。</p><p>在某些个别的情况下，比如属性值本身就含有双引号，那么您必须使用单引号，例如: <code>name=&#39;John &quot;ShotGun&quot; Nelson&#39;</code></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>尽管不包含 ASCII 空格(以及 <code>&quot;</code> <code>&#39;</code> <code>`</code> <code>=</code> <code>&lt;</code> <code>&gt;</code> )的简单属性值可以不使用引号，但是建议将所有属性值用双引号(除必须使用单引号的情况)括起来，这样的代码一致性更佳，更易于阅读。</p></div><h3 id="适用于大多数-html-元素的属性" tabindex="-1"><a class="header-anchor" href="#适用于大多数-html-元素的属性"><span>适用于大多数 HTML 元素的属性</span></a></h3><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>class</td><td>为 HTML 元素定义一个或多个类名 (class name)</td></tr><tr><td>id</td><td>定义元素的唯一 id</td></tr><tr><td>style</td><td>规定元素的行内样式 (inline style)</td></tr><tr><td>title</td><td>描述了元素的额外信息</td></tr></tbody></table><h3 id="布尔属性" tabindex="-1"><a class="header-anchor" href="#布尔属性"><span>布尔属性</span></a></h3><p>有时您会看到没有值的属性，它是合法的。这些属性被称为布尔属性，他们只能有跟它的属性名一样的属性值。例如 <code>disabled</code> 属性，他们可以标记表单输入使之变为不可用(变灰色)，此时用户不能向他们输入任何数据。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">input</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;text&quot;</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> disabled</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;disabled&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>方便起见，我们完全可以将其写成以下形式:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">&lt;!-- 使用disabled属性来防止终端用户输入文本到输入框中 --&gt;</span></span>\n<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">input</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;text&quot;</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> disabled</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="后缀名" tabindex="-1"><a class="header-anchor" href="#后缀名"><span>后缀名</span></a></h2><p>HTML 文档的后缀名是 <code>.html</code>。</p>',18),A={class:"hint-container warning"},E=s("p",{class:"hint-container-title"},"新手误区",-1),F=s("p",null,[e("文件名应该为 "),s("code",null,"xx.html"),e("，不应该是 "),s("code",null,"html"),e("。")],-1),f=s("p",null,[s("code",null,"html"),e(" 是一个没有后缀名称，文件名字叫做 "),s("code",null,"html"),e(" 的文件。")],-1),C=i(`<h2 id="html-结构" tabindex="-1"><a class="header-anchor" href="#html-结构"><span>HTML 结构</span></a></h2><p>一个符合最新标准的 HTML 文件，应该满足如下结构:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;!</span><span style="color:#22863A;--shiki-dark:#E06C75;">doctype</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> html</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">html</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> lang</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;en&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">head</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">meta</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> charset</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;UTF-8&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">meta</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> name</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;viewport&quot;</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> content</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">meta</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> http-equiv</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;X-UA-Compatible&quot;</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> content</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;ie=edge&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    &lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">title</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;Document&lt;/</span><span style="color:#22863A;--shiki-dark:#E06C75;">title</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="color:#22863A;--shiki-dark:#E06C75;">head</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">body</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#22863A;--shiki-dark:#E06C75;">body</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#22863A;--shiki-dark:#E06C75;">html</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中:</p><p><code>&lt;!DOCTYPE html&gt;</code> 是在 HTML5 标准下要求的，必须放在每个 HTML 文件的首行。对文档类型的声明。</p><blockquote><p><code>DOCTYPE</code> 可小写，此处无特殊要求。</p></blockquote><p>每个网页应该在 HTML 里包含一个唯一的 <code>&lt;html&gt;</code> 标签。在 <code>&lt;html&gt;</code> 标签中，应该按照顺序包含 <code>&lt;head&gt;</code> 和 <code>&lt;body&gt;</code> 标签。</p>`,7),_=s("p",null,[s("code",null,"<head>"),e(" 标签中，应该包含 "),s("code",null,"<title>"),e(" 标签注明文档的标题。")],-1),x=s("p",null,[s("code",null,"<head>"),e(" 元素是一个容器，它包含了所有您想包含在 HTML 页面中但不想在 HTML 页面中显示的内容。这些内容包括您想在搜索结果中出现的关键字和页面描述，CSS 样式，字符集声明等等。")],-1),H=s("p",null,[s("code",null,'<meta charset="UTF-8" />'),e(" 元素设置文档使用 utf-8 字符集编码。")],-1),M={class:"hint-container tip"},T=s("p",{class:"hint-container-title"},"提示",-1),L=s("div",{class:"hint-container info"},[s("p",{class:"hint-container-title"},"UTF-8"),s("p",null,"utf-8 字符集包含了人类大部分的文字。基本上它能识别您输入的所有文本内容。使用它可以避免很多其他问题。"),s("p",null,"W3C 也将 UTF-8 标记为推荐的字符编码，所以建议在任何 HTML 文件中都添加此标签。")],-1),q=s("li",null,[s("p",null,[s("code",null,"<body>"),e(" 标签包含了您访问页面时所有显示在页面上的内容，文本，图片，音频，游戏等等。")])],-1),D=s("h2",{id:"html-空白",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#html-空白"},[s("span",null,"HTML 空白")])],-1),w=s("p",null,"您可能已经注意到了在代码中包含了很多的空格——这是没有必要的。",-1),S=s("div",{class:"language-html line-numbers-mode","data-ext":"html","data-title":"html"},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",style:{"background-color":"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E","--shiki-dark":"#ABB2BF"}},"<"),s("span",{style:{color:"#22863A","--shiki-dark":"#E06C75"}},"p"),s("span",{style:{color:"#24292E","--shiki-dark":"#ABB2BF"}},">狗 狗 很 呆 萌。</"),s("span",{style:{color:"#22863A","--shiki-dark":"#E06C75"}},"p"),s("span",{style:{color:"#24292E","--shiki-dark":"#ABB2BF"}},">")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E","--shiki-dark":"#ABB2BF"}},"<"),s("span",{style:{color:"#22863A","--shiki-dark":"#E06C75"}},"p"),s("span",{style:{color:"#24292E","--shiki-dark":"#ABB2BF"}},">狗 狗 很 呆 萌。</"),s("span",{style:{color:"#22863A","--shiki-dark":"#E06C75"}},"p"),s("span",{style:{color:"#24292E","--shiki-dark":"#ABB2BF"}},">")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),K=i('<p>无论您在 HTML 元素的内容中使用多少空格(包括空白字符，包括换行)，当渲染这些代码的时候，HTML 解释器会将连续出现的空白字符减少为一个单独的空格符。</p><p>那么为什么我们会在 HTML 元素的嵌套中使用那么多的空白呢? 答案就是为了可读性 —— 如果您的代码被很好地进行格式化，那么就很容易理解您的代码是怎么回事，反之就只有聚做一团的混乱。在 HTML 代码中，通常让每一个嵌套的元素以两个空格缩进。</p><h2 id="特殊字符" tabindex="-1"><a class="header-anchor" href="#特殊字符"><span>特殊字符</span></a></h2><p>在 HTML 中，字符 <code>&lt;</code>, <code>&gt;</code>,<code>&quot;</code>,<code>&#39;</code> 和 <code>&amp;</code> 是特殊字符. 它们是 HTML 语法自身的一部分, 那么您如何将这些字符包含进您的文本中呢, 比如说如果您真的想要在文本中使用符号 <code>&amp;</code> 或者 <code>&lt;</code> 号, 而不想让它们被浏览器视为代码并被解释?</p><p>我们必须使用字符引用 —— 表示字符的特殊编码, 它们可以在那些情况下使用. 每个字符引用以符号 <code>&amp;</code> 开始, 以分号 (<code>;</code>) 结束。</p><table><thead><tr><th>原义字符</th><th>等价字符引用</th></tr></thead><tbody><tr><td>&lt;</td><td>&amp;lt;</td></tr><tr><td>&gt;</td><td>&amp;gt;</td></tr><tr><td>&quot;</td><td>&amp;quot;</td></tr><tr><td>&#39;</td><td>&amp;apos;</td></tr><tr><td>&amp;</td><td>&amp;amp;</td></tr></tbody></table>',6);function P(N,U){const l=n("CodeDemo"),o=n("RouteLink");return d(),p("div",null,[k,c(" more "),m,t(l,{id:"code-demo-42",type:"normal",title:"HTML%20%E6%AE%B5%E8%90%BD",code:"eJyrVsooyc1RslKyKbDzLdLzyC9IVXi6r+Ppjtb3expt9AvsYvKUagEPSA9P"},{default:a(()=>[u]),_:1}),B,t(l,{id:"code-demo-79",type:"normal",title:"%E6%A1%88%E4%BE%8B",code:"eJyrVsooyc1RslKyKbDzLdLzyC9IVXi6r+Ppjtb3expt9AvsYvKUagEPSA9P"},{default:a(()=>[g]),_:1}),y,t(l,{id:"code-demo-159",type:"normal",title:"%E6%A0%87%E7%AD%BE%E7%9A%84%E5%B5%8C%E5%A5%97",code:"eJyrVsooyc1RslKyKbDzLdLzyC9ItSkuKcrPS7d72tv4tKPNRh/G3dH6fk+jjX6BXUyeUi0AbS0XRw=="},{default:a(()=>[b]),_:1}),v,s("div",A,[E,F,f,s("p",null,[e("更多详情，请见 "),t(o,{to:"/code/basic/file-extension.html"},{default:a(()=>[e("基础 → 文件后缀名")]),_:1}),e("。")])]),C,s("ul",null,[s("li",null,[_,x,H,s("div",M,[T,s("p",null,[e("更多详情，请见 "),t(o,{to:"/code/website/html/intro/head.html"},{default:a(()=>[e("介绍 → head 标签")]),_:1}),e("。")])]),L]),q]),D,w,t(l,{id:"code-demo-371",type:"normal",title:"%E4%B8%A4%E4%B8%AA%E5%AE%8C%E5%85%A8%E7%AD%89%E4%BB%B7%E7%9A%84%E6%AE%B5%E8%90%BD",code:"eJyrVsooyc1RslKyKbB73j1dAYSf7utQeDqxTeHFhJ7HDU02+gV2MXkxeQQUKNUCAB70Ixg="},{default:a(()=>[S]),_:1}),K])}const z=r(h,[["render",P],["__file","index.html.vue"]]),J=JSON.parse('{"path":"/code/website/html/guide/","title":"快速上手","lang":"zh-CN","frontmatter":{"title":"快速上手","icon":"creative","date":"2019-09-01T00:00:00.000Z","category":"HTML","tag":["快速上手"],"dir":{"collapsible":false,"order":1},"prev":"../","description":"本章能让您快速了解 HTML 并学会编写它。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/website/html/guide/"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"快速上手"}],["meta",{"property":"og:description","content":"本章能让您快速了解 HTML 并学会编写它。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"快速上手"}],["meta",{"property":"article:published_time","content":"2019-09-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"快速上手\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"HTML 简介","slug":"html-简介","link":"#html-简介","children":[{"level":3,"title":"例子","slug":"例子","link":"#例子","children":[]}]},{"level":2,"title":"HTML 元素语法","slug":"html-元素语法","link":"#html-元素语法","children":[{"level":3,"title":"标签","slug":"标签","link":"#标签","children":[]},{"level":3,"title":"自闭合标签","slug":"自闭合标签","link":"#自闭合标签","children":[]},{"level":3,"title":"标签的嵌套","slug":"标签的嵌套","link":"#标签的嵌套","children":[]}]},{"level":2,"title":"HTML 属性","slug":"html-属性","link":"#html-属性","children":[{"level":3,"title":"适用于大多数 HTML 元素的属性","slug":"适用于大多数-html-元素的属性","link":"#适用于大多数-html-元素的属性","children":[]},{"level":3,"title":"布尔属性","slug":"布尔属性","link":"#布尔属性","children":[]}]},{"level":2,"title":"后缀名","slug":"后缀名","link":"#后缀名","children":[]},{"level":2,"title":"HTML 结构","slug":"html-结构","link":"#html-结构","children":[]},{"level":2,"title":"HTML 空白","slug":"html-空白","link":"#html-空白","children":[]},{"level":2,"title":"特殊字符","slug":"特殊字符","link":"#特殊字符","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3},{"name":"Jellower","email":"99652489+Jellower@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":7.79,"words":2338},"filePathRelative":"code/website/html/guide/README.md","localizedDate":"2019年9月1日","excerpt":"<p>本章能让您快速了解 HTML 并学会编写它。</p>\\n","autoDesc":true}');export{z as comp,J as data};
