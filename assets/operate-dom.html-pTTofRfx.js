import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as t,f as p,d as n,b as o}from"./app-S62fdHqc.js";const e={},c=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"章节过时"),n("p",null,"目前，新型的框架大多遵循 MVVM 逻辑，及把逻辑层的数据绑定到视图层去显示。这种思路下，无需也不应操作 DOM。")],-1),l=o(`<p>jQuery 的选择器很强大，用起来又简单又灵活，但是搞了这么久，我拿到了 jQuery 对象，到底要干什么?</p><p>答案当然是操作对应的 DOM 节点啦!</p><p>回顾一下修改 DOM 的 CSS、文本、设置 HTML 有多么麻烦，而且有的浏览器只有 innerHTML，有的浏览器支持 innerText，有了 jQuery 对象，不需要考虑浏览器差异了，全部统一操作!</p><h2 id="修改-text-和-html" tabindex="-1"><a class="header-anchor" href="#修改-text-和-html"><span>修改 Text 和 HTML</span></a></h2><p>jQuery 对象的 <code>text()</code> 和 <code>html()</code> 方法分别获取节点的文本和原始 HTML 文本，例如，如下的 HTML 结构:</p><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token comment">&lt;!-- HTML结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test-ul<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>JavaScript<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>book<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Java <span class="token entity named-entity" title="&amp;">&amp;amp;</span> JavaScript<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>分别获取文本和 HTML:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-ul li[name=book]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;Java &amp; JavaScript&#39;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-ul li[name=book]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;Java &amp;amp; JavaScript&#39;</span>
</code></pre></div><p>如何设置文本或 HTML ? jQuery 的 API 设计非常巧妙: 无参数调用 <code>text()</code> 是获取文本，传入参数就变成设置文本，HTML 也是类似操作，自己动手试试:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> j1 <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-ul li.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> j2 <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-ul li[name=book]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

j1<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;span style=&quot;color: red&quot;&gt;JavaScript&lt;/span&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
j2<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">&quot;JavaScript &amp; ECMAScript&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>JavaScript
Java &amp; JavaScript
</code></pre></div><p>一个 jQuery 对象可以包含 0 个或任意个 DOM 对象，它的方法实际上会作用在对应的每个 DOM 节点上。在上面的例子中试试:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-ul li&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">&quot;JS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 是不是两个节点都变成了JS?</span>
</code></pre></div><p>所以 jQuery 对象的另一个好处是我们可以执行一个操作，作用在对应的一组 DOM 节点上。即使选择器没有返回任何 DOM 节点，调用 jQuery 对象的方法仍然不会报错:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 如果不存在 id 为 not-exist 的节点:</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#not-exist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 代码不报错，没有节点被设置为&#39;Hello&#39;</span>
</code></pre></div><p>这意味着 jQuery 帮您免去了许多 if 语句。</p><h2 id="修改-css" tabindex="-1"><a class="header-anchor" href="#修改-css"><span>修改 CSS</span></a></h2><p>jQuery 对象有“批量操作”的特点，这用于修改 CSS 实在是太方便了。考虑下面的 HTML 结构:</p><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token comment">&lt;!-- HTML 结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test-css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lang dy<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>JavaScript<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lang<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lang dy<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Python<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lang<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Swift<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lang dy<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Scheme<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>要高亮显示动态语言，调用 jQuery 对象的 <code>css(&#39;name&#39;, &#39;value&#39;)</code> 方法，我们用一行语句实现:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-css li.dy&gt;span&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;background-color&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#ffd351&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;color&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>JavaScript
Java
Python
Swift
Scheme
</code></pre></div><p>注意，jQuery 对象的所有方法都返回一个 jQuery 对象(可能是新的也可能是自身)，这样我们可以进行链式调用，非常方便。</p><p>jQuery 对象的 <code>css()</code> 方法可以这么用:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
div<span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;#000033&#39;, 获取CSS属性</span>
div<span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;color&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#336699&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置CSS属性</span>
div<span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;color&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 清除CSS属性</span>
</code></pre></div><p>为了和 JavaScript 保持一致，CSS 属性可以用 <code>&#39;background-color&#39;</code> 和 <code>&#39;backgroundColor&#39;</code> 两种格式。</p><p><code>css()</code> 方法将作用于 DOM 节点的 style 属性，具有最高优先级。如果要修改 class 属性，可以用 jQuery 提供的下列方法:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
div<span class="token punctuation">.</span><span class="token function">hasClass</span><span class="token punctuation">(</span><span class="token string">&quot;highlight&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false， class是否包含highlight</span>
div<span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">&quot;highlight&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 添加highlight这个class</span>
div<span class="token punctuation">.</span><span class="token function">removeClass</span><span class="token punctuation">(</span><span class="token string">&quot;highlight&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 删除highlight这个class</span>
</code></pre></div><h2 id="显示和隐藏-dom" tabindex="-1"><a class="header-anchor" href="#显示和隐藏-dom"><span>显示和隐藏 DOM</span></a></h2><p>要隐藏一个 DOM，我们可以设置 CSS 的 <code>display</code> 属性为 <code>none</code>，利用 <code>css()</code> 方法就可以实现。不过，要显示这个 DOM 就需要恢复原有的 <code>display</code> 属性，这就得先记下来原有的 <code>display</code> 属性到底是 <code>block</code> 还是 <code>inline</code> 还是别的值。</p><p>考虑到显示和隐藏 DOM 元素使用非常普遍，jQuery 直接提供 <code>show()</code> 和 <code>hide()</code> 方法，我们不用关心它是如何修改 display 属性的，总之它能正常工作:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;a[target=_blank]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 隐藏</span>
a<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 显示</span>
</code></pre></div><p>注意，隐藏 DOM 节点并未改变 DOM 树的结构，它只影响 DOM 节点的显示。这和删除 DOM 节点是不同的。</p><h2 id="获取-dom-信息" tabindex="-1"><a class="header-anchor" href="#获取-dom-信息"><span>获取 DOM 信息</span></a></h2><p>利用 jQuery 对象的若干方法，我们直接可以获取 DOM 的高宽等信息，而无需针对不同浏览器编写特定代码:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 浏览器可视窗口大小:</span>
<span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 800</span>
<span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 600</span>

<span class="token comment">// HTML 文档大小:</span>
<span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 800</span>
<span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3500</span>

<span class="token comment">// 某个 div 的大小:</span>
<span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
div<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 600</span>
div<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 300</span>
div<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置 CSS 属性 width: 400px，是否生效要看 CSS 是否有效</span>
div<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token string">&quot;200px&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置 CSS 属性 height: 200px，是否生效要看 CSS 是否有效</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>attr()</code> 和 <code>removeAttr()</code> 方法用于操作 DOM 节点的属性:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// &lt;div id=&quot;test-div&quot; name=&quot;Test&quot; start=&quot;1&quot;&gt;...&lt;/div&gt;</span>
<span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
div<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined, 属性不存在</span>
div<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;Test&#39;</span>
div<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// div 的 name 属性变为 &#39;Hello&#39;</span>
div<span class="token punctuation">.</span><span class="token function">removeAttr</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 删除 name 属性</span>
div<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre></div><p><code>prop()</code> 方法和 <code>attr()</code> 类似，但是 HTML5 规定有一种属性在 DOM 节点中可以没有值，只有出现与不出现两种，例如:</p><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test-radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span> <span class="token attr-name">checked</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>等价于:</p><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test-radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span> <span class="token attr-name">checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checked<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p><code>attr()</code> 和 <code>prop()</code> 对于属性 <code>checked</code> 处理有所不同:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> radio <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-radio&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
radio<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;checked&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;checked&#39;</span>
radio<span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">&quot;checked&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div><p><code>prop()</code> 返回值更合理一些。不过，用 <code>is()</code> 方法判断更好:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> radio <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-radio&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
radio<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token string">&quot;:checked&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div><p>类似的属性还有 <code>selected</code>，处理时最好用 <code>is(&#39;:selected&#39;)</code>。</p><h2 id="操作表单" tabindex="-1"><a class="header-anchor" href="#操作表单"><span>操作表单</span></a></h2><p>对于表单元素，jQuery 对象统一提供 <code>val()</code> 方法获取和设置对应的 <code>value</code> 属性:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/*
    &lt;input id=&quot;test-input&quot; name=&quot;email&quot; value=&quot;&quot;&gt;
    &lt;select id=&quot;test-select&quot; name=&quot;city&quot;&gt;
        &lt;option value=&quot;BJ&quot; selected&gt;Beijing&lt;/option&gt;
        &lt;option value=&quot;SH&quot;&gt;Shanghai&lt;/option&gt;
        &lt;option value=&quot;SZ&quot;&gt;Shenzhen&lt;/option&gt;
    &lt;/select&gt;
    &lt;textarea id=&quot;test-textarea&quot;&gt;Hello&lt;/textarea&gt;
*/</span>
<span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  select <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-select&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  textarea <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-textarea&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

input<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;test&#39;</span>
input<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token string">&quot;abc@example.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 文本框的内容已变为 abc@example.com</span>

select<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;BJ&#39;</span>
select<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token string">&quot;SH&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 选择框已变为 Shanghai</span>

textarea<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;Hello&#39;</span>
textarea<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token string">&quot;Hi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 文本区域已更新为 &#39;Hi&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见，一个 <code>val()</code> 就统一了各种输入框的取值和赋值的问题。</p>`,51);function u(i,k){return s(),t("div",null,[c,p(" more "),l])}const m=a(e,[["render",u],["__file","operate-dom.html.vue"]]),g=JSON.parse('{"path":"/code/website/jQuery/operate-dom.html","title":"操作 DOM","lang":"zh-CN","frontmatter":{"title":"操作 DOM","icon":"operate","date":"2019-11-03T00:00:00.000Z","category":"jQuery","description":" 章节过时 目前，新型的框架大多遵循 MVVM 逻辑，及把逻辑层的数据绑定到视图层去显示。这种思路下，无需也不应操作 DOM。 jQuery 的选择器很强大，用起来又简单又灵活，但是搞了这么久，我拿到了 jQuery 对象，到底要干什么? 答案当然是操作对应的 DOM 节点啦! 回顾一下修改 DOM 的 CSS、文本、设置 HTML 有多么麻烦，而且有...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/website/jQuery/operate-dom.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"操作 DOM"}],["meta",{"property":"og:description","content":" 章节过时 目前，新型的框架大多遵循 MVVM 逻辑，及把逻辑层的数据绑定到视图层去显示。这种思路下，无需也不应操作 DOM。 jQuery 的选择器很强大，用起来又简单又灵活，但是搞了这么久，我拿到了 jQuery 对象，到底要干什么? 答案当然是操作对应的 DOM 节点啦! 回顾一下修改 DOM 的 CSS、文本、设置 HTML 有多么麻烦，而且有..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-12T05:50:30.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2019-11-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-12T05:50:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"操作 DOM\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-11-03T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-12T05:50:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"修改 Text 和 HTML","slug":"修改-text-和-html","link":"#修改-text-和-html","children":[]},{"level":2,"title":"修改 CSS","slug":"修改-css","link":"#修改-css","children":[]},{"level":2,"title":"显示和隐藏 DOM","slug":"显示和隐藏-dom","link":"#显示和隐藏-dom","children":[]},{"level":2,"title":"获取 DOM 信息","slug":"获取-dom-信息","link":"#获取-dom-信息","children":[]},{"level":2,"title":"操作表单","slug":"操作表单","link":"#操作表单","children":[]}],"git":{"createdTime":1644645030000,"updatedTime":1644645030000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":5.01,"words":1503},"filePathRelative":"code/website/jQuery/operate-dom.md","localizedDate":"2019年11月3日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">章节过时</p>\\n<p>目前，新型的框架大多遵循 MVVM 逻辑，及把逻辑层的数据绑定到视图层去显示。这种思路下，无需也不应操作 DOM。</p>\\n</div>\\n","autoDesc":true}');export{m as comp,g as data};
