import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c,d as a,e as n,a as l,b as s}from"./app-0f8c396e.js";const u={},i=s(`<h2 id="元素创建" tabindex="-1"><a class="header-anchor" href="#元素创建" aria-hidden="true">#</a> 元素创建</h2><ol><li>在编辑器中输入元素名称之后按下 tab 即可自动补全生成 HTML 标签，即使不是标准的 HTML 标签。</li></ol><div class="hint-container tip"><p class="hint-container-title">创建文档</p><p>输入: <code>!</code> 或者 <code>html:5</code> 将创建 HTML 基本结构。</p></div><h2 id="结构操作" tabindex="-1"><a class="header-anchor" href="#结构操作" aria-hidden="true">#</a> 结构操作</h2><h3 id="子元素" tabindex="-1"><a class="header-anchor" href="#子元素" aria-hidden="true">#</a> 子元素</h3><p>使用 <code>&gt;</code> 生成子元素</p><details class="hint-container details"><summary>案例</summary><p><code>div&gt;ul&gt;li</code>:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><h3 id="兄弟元素" tabindex="-1"><a class="header-anchor" href="#兄弟元素" aria-hidden="true">#</a> 兄弟元素</h3><p>使用 <code>+</code> 生成兄弟元素</p><details class="hint-container details"><summary>案例</summary><p><code>div+p+bq</code>:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blockquote</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blockquote</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><h3 id="上移" tabindex="-1"><a class="header-anchor" href="#上移" aria-hidden="true">#</a> 上移</h3><p>使用 <code>^</code> 上移一级</p><details class="hint-container details"><summary>案例</summary><p><code>div+div&gt;p&gt;span+em^bq</code>:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blockquote</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blockquote</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><h3 id="重复" tabindex="-1"><a class="header-anchor" href="#重复" aria-hidden="true">#</a> 重复</h3><p>使用 <code>*</code> 生成多个相同元素。</p><details class="hint-container details"><summary>案例</summary><p><code>div&gt;ul&gt;li*5</code>:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><h3 id="分组" tabindex="-1"><a class="header-anchor" href="#分组" aria-hidden="true">#</a> 分组</h3><p>使用 <code>()</code> 将元素分组</p><details class="hint-container details"><summary>案例</summary><p><code>+</code> 后面的元素与括号中的第一个元素属于兄弟关系</p><p><code>div&gt;(header&gt;ul&gt;li*2)+footer&gt;p</code>:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="属性操作" tabindex="-1"><a class="header-anchor" href="#属性操作" aria-hidden="true">#</a> 属性操作</h2><h3 id="id-与-class" tabindex="-1"><a class="header-anchor" href="#id-与-class" aria-hidden="true">#</a> ID 与 class</h3><p>元素与 <code>id</code> 属性值之间用 <code>#</code> 分隔，与 <code>class</code> 属性值之间用 <code>.</code> 分隔</p><details class="hint-container details"><summary>案例</summary><p><code>div#header+div.page+div#footer.class1.class2.class3</code>:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>class1 class2 class3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><h3 id="自定义属性" tabindex="-1"><a class="header-anchor" href="#自定义属性" aria-hidden="true">#</a> 自定义属性</h3><p>在 Emmet 中，使用 <code>[]</code> 标记其他属性。</p><p>您无需输入引号，直接使用 <code>[属性1=值1 属性2=值2 ... ]</code> 即可。</p><ul><li><p>您可以在方括号内放置任意数量的属性。</p></li><li><p>您不必指定属性值: <code>td[colspan title]</code> 会生成 <code>&lt;td colspan=&quot;&quot; title=&quot;&quot;&gt;</code>。</p><p>接下来您可以通过按下 tab 将光标顺序移动至每个空属性内，这会让您很方便的输入内容。</p></li><li><p>您可以使用单引号或双引号来引用属性值。如果值不包含空格，则无需引用它们。如: <code>td[title=hello colspan=3]</code></p></li></ul><details class="hint-container details"><summary>案例</summary><p><code>td[title=&quot;Hello world!&quot; colspan=3]</code>:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Hello world!<span class="token punctuation">&quot;</span></span> <span class="token attr-name">colspan</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><h3 id="项目编号" tabindex="-1"><a class="header-anchor" href="#项目编号" aria-hidden="true">#</a> 项目编号</h3><p>用 <code>$</code> 符号实现 <code>1</code> 到 <code>n</code> 的自动编号 (<code>*</code> 实现多个元素)</p><details class="hint-container details"><summary>案例</summary><p><code>li.item$*3</code>:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><p>可在 <code>$</code> 后添加 <code>@n</code> 修改编号的起始值为 <code>n</code>。</p><details class="hint-container details"><summary>案例</summary><p><code>li.item$@3*3</code>:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><p>可在 “<code>$</code>” 后添加 “<code>@-</code>” 修改编号的方向。</p><details class="hint-container details"><summary>案例</summary><p><code>li.item$@-3*3</code>:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><p>您可以连续使用多个 <code>$</code> 以零填充数字。</p><details class="hint-container details"><summary>案例</summary><p><code>ul&gt;li.item$$$*5</code>:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item001<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item002<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item003<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item004<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item005<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><h3 id="文本" tabindex="-1"><a class="header-anchor" href="#文本" aria-hidden="true">#</a> 文本</h3><p>使用 <code>{}</code> 添加文本内容</p><details class="hint-container details"><summary>案例</summary><p><code>a[href=me.html]{click me}</code>:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>me.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>click me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><div class="hint-container warning"><p class="hint-container-title">注意</p><p>请注意，<code>{text}</code> 是作为一个单独的元素使用和解析的。</p><p>请理解以下案例:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- a{click}+b{here} --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>click<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- a&gt;{click}+b{here} --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>click<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- p&gt;{Click }+a{here}+{ to continue} --&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Click <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> to continue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></div><h2 id="隐式标签名称" tabindex="-1"><a class="header-anchor" href="#隐式标签名称" aria-hidden="true">#</a> 隐式标签名称</h2><p>即使使用功能强大的缩写引擎(可以从短缩写扩展大型 HTML 结构)，编写标签名称也可能非常繁琐。</p><p>在许多情况下，您可以跳过键入标签名称的操作，而 Emmet 会自动为您生成一个。例如，您可以简单地将 <code>div.content</code> 写为 <code>.content</code>，Emmet 将自动扩展为 <code>&lt;div class=&quot;content&quot;&gt;&lt;/div&gt;</code>。</p><h3 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理" aria-hidden="true">#</a> 工作原理</h3><p>扩展缩写词时，Emmet 会尝试在其内部扩展缩写词的地方获取上下文进行推断。如果成功捕获了上下文，Emmet 将使用其名称来解析隐式名称。</p><details class="hint-container details"><summary>案例</summary><table><thead><tr><th>Emmet 缩写</th><th>Emmet 实际输出</th></tr></thead><tbody><tr><td><code>.wrap&gt;.content</code></td><td><code>div.wrap&gt;div.content</code></td></tr><tr><td><code>em&gt;.info</code></td><td><code>em&gt;span.info</code></td></tr><tr><td><code>ul&gt;.item*3</code></td><td><code>ul&gt;li.item*3</code></td></tr><tr><td><code>table&gt;#row$*4&gt;[colspan=2]</code></td><td><code>table&gt;tr#row$*4&gt;td[colspan=2]</code></td></tr></tbody></table></details><h2 id="lorem-ipsum-生成" tabindex="-1"><a class="header-anchor" href="#lorem-ipsum-生成" aria-hidden="true">#</a> Lorem Ipsum 生成</h2><p><code>lorem</code> 是一个示例词的生成器，您可以很方便的生成一些预设文字查看效果。它会自动根据标签调整文字数量，并在重复时轮换输出。</p><details class="hint-container details"><summary>案例</summary><p><code>p*4&gt;lorem</code>:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
  molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias
  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
  Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore
  recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at
  neque quos facere sequi unde optio aliquam!
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
  Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro
  quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio
  nam nulla unde amet odit pariatur at!
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
  Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil
  explicabo perferendis quos provident delectus ducimus necessitatibus
  reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel
  odio?
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ul.generic-list&gt;lorem10.item*4</code>:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>generic-list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Laboriosam quaerat sapiente minima nam minus similique illum architecto et!
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Incidunt vitae quae facere ducimus nostrum aliquid dolorum veritatis dicta!
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Tenetur laborum quod cum excepturi recusandae porro sint quas soluta!
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="其他内容" tabindex="-1"><a class="header-anchor" href="#其他内容" aria-hidden="true">#</a> 其他内容</h2><p>某些元素(例如 a 或)img 会转换为具有预定义属性的元素: <code>&lt;a href=&quot;&quot;&gt;&lt;/a&gt;</code> 和 <code>&lt;img src=&quot;&quot; alt=&quot;&quot; /&gt;</code>。</p><p>同时 emmet 还包含了一些常用缩写，如 <code>bq</code> 会输出 <code>&lt;blockquote&gt;&lt;/blockquote&gt;</code>。</p><p>这些功能是通过预置的 snippets 实现的。</p>`,54),k={class:"hint-container info"},d=s(`<p class="hint-container-title">相关信息</p><p>部分 snippets 内容:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>...
<span class="token punctuation">{</span>
  <span class="token property">&quot;a&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a[href]&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;img[src alt]/&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;bq&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blockquote&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;fig&quot;</span><span class="token operator">:</span> <span class="token string">&quot;figure&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;cap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;caption&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;picture&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;mn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;!!!&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{&lt;!DOCTYPE html&gt;}&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html[lang=\${lang}]&gt;(head&gt;meta[charset=\${charset}]+meta:vp+title{\${1:Document}})+body&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;!|html:5&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!!!+doc&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r={href:"https://github.com/emmetio/emmet/blob/master/snippets/html.json",target:"_blank",rel:"noopener noreferrer"};function g(m,v){const t=e("ExternalLinkIcon");return o(),c("div",null,[i,a("div",k,[d,a("p",null,[n("完整的 HTML snippets 请见 "),a("a",r,[n("Emmet Repo"),l(t)])])])])}const b=p(u,[["render",g],["__file","html.html.vue"]]);export{b as default};
