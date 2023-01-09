import{ac as c,G as l,H as u,E as s,S as n,N as t,ae as a,W as o}from"./framework-931f0218.js";const i={},k=s("p",null,"类似于页面，自定义组件拥有自己的 wxml 模板和 wxss 样式。",-1),r=s("h2",{id:"组件模板",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#组件模板","aria-hidden":"true"},"#"),n(" 组件模板")],-1),d=s("p",null,"组件模板的写法与页面模板相同。组件模板与组件数据结合后生成的节点树，将被插入到组件的引用位置上。",-1),g=s("p",null,[n("在组件模板中可以提供一个 "),s("code",null,"<slot>"),n(" 节点，用于承载组件引用时提供的子节点。")],-1),m={class:"hint-container details"},v=s("summary",null,"代码示例",-1),x={href:"https://developers.weixin.qq.com/s/1udXLnmi6KY2",target:"_blank",rel:"noopener noreferrer"},h=a(`<div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 组件模板 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>这里是组件的内部节点<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 引用组件的页面模板 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component-tag-name</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 这部分内容将被放置在组件 &lt;slot&gt; 的位置上 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>这里是插入到组件slot中的内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component-tag-name</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),q=a(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>在模板中引用到的自定义组件及其对应的节点名需要在 json 文件中显式定义，否则会被当作一个无意义的节点。除此以外，节点名也可以被声明为抽象节点。</p></div><h2 id="模板数据绑定" tabindex="-1"><a class="header-anchor" href="#模板数据绑定" aria-hidden="true">#</a> 模板数据绑定</h2><p>与普通的 WXML 模板类似，可以使用数据绑定，这样就可以向子组件的属性传递动态数据。</p><details class="hint-container details"><summary>代码示例</summary><p>在开发者工具中预览效果</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 引用组件的页面模板 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component-tag-name</span> <span class="token attr-name">prop-a</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{dataFieldA}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop-b</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{dataFieldB}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 这部分内容将被放置在组件 &lt;slot&gt; 的位置上 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>这里是插入到组件slot中的内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component-tag-name</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>在以上例子中，组件的属性 <code>propA</code> 和 <code>propB</code> 将收到页面传递的数据。页面可以通过 <code>setData</code> 来改变绑定的数据字段。</p></details><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这样的数据绑定只能传递 JSON 兼容数据或函数(但这些函数不能在 WXML 中直接调用，只能传递给子组件)。</p></div><h2 id="组件-wxml-的-slot" tabindex="-1"><a class="header-anchor" href="#组件-wxml-的-slot" aria-hidden="true">#</a> 组件 wxml 的 slot</h2><p>在组件的 wxml 中可以包含 <code>slot</code> 节点，用于承载组件使用者提供的 wxml 结构。</p><p>默认情况下，一个组件的 wxml 中只能有一个 <code>slot</code> 。需要使用多 <code>slot</code> 时，可以在组件 js 中声明启用。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/*...*/</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/*...*/</span> <span class="token punctuation">}</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">multipleSlots</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 在组件定义时的选项中启用多 slot 支持</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>此时，可以在这个组件的 wxml 中使用多个 slot ，以不同的 name 来区分。</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 组件模板 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>before<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>这里是组件的内部细节<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>after<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>使用时，用 <code>slot</code> 属性来将节点插入到不同的 slot 上。</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 引用组件的页面模板 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component-tag-name</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 这部分内容将被放置在组件 &lt;slot name=&quot;before&quot;&gt; 的位置上 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>before<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>这里是插入到组件slot name=&quot;before&quot;中的内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 这部分内容将被放置在组件 &lt;slot name=&quot;after&quot;&gt; 的位置上 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>after<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>这里是插入到组件slot name=&quot;after&quot;中的内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component-tag-name</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="组件样式" tabindex="-1"><a class="header-anchor" href="#组件样式" aria-hidden="true">#</a> 组件样式</h2><p>组件对应 wxss 文件的样式，只对组件 wxml 内的节点生效。编写组件样式时，需要注意以下几点:</p><ul><li>组件和引用组件的页面不能使用 id 选择器(<code>#a</code>)、属性选择器(<code>[a]</code>)和标签名选择器，请改用 class 选择器。</li><li>组件和引用组件的页面中使用后代选择器(<code>.a .b</code>)在一些极端情况下会有非预期的表现，如遇，请避免使用。</li><li>子元素选择器(<code>.a&gt;.b</code>)只能用于 view 组件与其子节点之间，用于其他组件可能导致非预期的情况。</li><li>继承样式，如 <code>font</code> 、 <code>color</code> ，会从组件外继承到组件内。</li><li>除继承样式外， app.wxss 中的样式、组件所在页面的的样式对自定义组件无效(除非更改组件样式隔离选项)。</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 在组件中不能使用 */</span>
<span class="token selector"># a</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 在组件中不能使用 */</span>
<span class="token selector">[a]</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 在组件中不能使用 */</span>
<span class="token selector">button</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 除非 .a 是 view 组件节点，否则不一定会生效 */</span>
<span class="token selector">.a &gt; .b</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除此以外，组件可以指定它所在节点的默认样式，使用 <code>:host</code> 选择器。</p>`,18),y={class:"hint-container details"},_=s("summary",null,"代码示例",-1),w={href:"https://developers.weixin.qq.com/s/jAgvwKm16bZD",target:"_blank",rel:"noopener noreferrer"},b=a(`<div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">:host</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 页面的 WXML --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-component</span><span class="token punctuation">&gt;</span></span>这段文本是黄色的<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>custom-component</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),f=a(`<h2 id="组件样式隔离" tabindex="-1"><a class="header-anchor" href="#组件样式隔离" aria-hidden="true">#</a> 组件样式隔离</h2><p>默认情况下，自定义组件的样式只受到自定义组件 wxss 的影响。除非以下两种情况:</p><ul><li>app.wxss 或页面的 wxss 中使用了标签名选择器(或一些其他特殊选择器)来直接指定样式，这些选择器会影响到页面和全部组件。通常情况下这是不推荐的做法。</li><li>指定特殊的样式隔离选项 <code>styleIsolation</code>。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">styleIsolation</span><span class="token operator">:</span> <span class="token string">&quot;isolated&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,4),j={href:"https://developers.weixin.qq.com/s/xPQhJcm37e7h",target:"_blank",rel:"noopener noreferrer"},C=a(`<h3 id="styleisolation" tabindex="-1"><a class="header-anchor" href="#styleisolation" aria-hidden="true">#</a> styleIsolation</h3><p><code>styleIsolation</code> 选项从基础库版本 2.6.5 开始支持。它支持以下取值:</p><ul><li><code>isolated</code> 表示启用样式隔离，在自定义组件内外，使用 class 指定的样式将不会相互影响(一般情况下的默认值)；</li><li><code>apply-shared</code> 表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面；</li><li><code>shared</code> 表示页面 wxss 样式将影响到自定义组件，自定义组件 wxss 中指定的样式也会影响页面和其他设置了 <code>apply-shared</code> 或 <code>shared</code> 的自定义组件。(这个选项在插件中不可用。)</li></ul><p>使用后两者时，请务必注意组件间样式的相互影响。</p><p>如果这个 Component 构造器用于构造页面 ，则默认值为 <code>shared</code> ，且还有以下几个额外的样式隔离选项可用:</p><ul><li><code>page-isolated</code> 表示在这个页面禁用 app.wxss ，同时，页面的 wxss 不会影响到其他自定义组件；</li><li><code>page-apply-shared</code> 表示在这个页面禁用 app.wxss ，同时，页面 wxss 样式不会影响到其他自定义组件，但设为 <code>shared</code> 的自定义组件会影响到页面；</li><li><code>page-shared</code> 表示在这个页面禁用 app.wxss ，同时，页面 wxss 样式会影响到其他设为 <code>apply-shared</code> 或 <code>shared</code> 的自定义组件，也会受到设为 <code>shared</code> 的自定义组件的影响。</li></ul><p>从小程序基础库版本 2.10.1 开始，也可以在页面或自定义组件的 json 文件中配置 <code>styleIsolation</code> (这样就不需在 js 文件的 <code>options</code> 中再配置)。例如:</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;styleIsolation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;isolated&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8),I={class:"hint-container tip"},L=s("p",{class:"hint-container-title"},"历史方式",-1),B=s("p",null,[n("小程序基础库版本 2.2.3 以上支持 "),s("code",null,"addGlobalClass"),n(" 选项，即在 Component 的 "),s("code",null,"options"),n(" 中设置 "),s("code",null,"addGlobalClass: true"),n("。 这个选项等价于设置 "),s("code",null,"styleIsolation: apply-shared"),n(" ，但设置了 "),s("code",null,"styleIsolation"),n(" 选项后这个选项会失效。")],-1),W={class:"hint-container details"},X=s("summary",null,"代码示例",-1),M={href:"https://developers.weixin.qq.com/s/VkTd7Fm37ggl",target:"_blank",rel:"noopener noreferrer"},N=a(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">addGlobalClass</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>这段文本的颜色由 \`app.wxss\` 和页面 \`wxss\` 中的样式定义来决定<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/*app.wxss*/</span>
<span class="token selector">.red-text</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),V={id:"外部样式类",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#外部样式类","aria-hidden":"true"},"#",-1),S=a(`<p>有时，组件希望接受外部传入的样式类。此时可以在 Component 中用 <code>externalClasses</code> 定义段定义若干个外部样式类。</p><p>这个特性可以用于实现类似于 view 组件的 hover-class 属性: 页面可以提供一个样式类，赋予 view 的 hover-class ，这个样式类本身写在页面中而非 view 组件的实现中。</p><p>注意: 在同一个节点上使用普通样式类和外部样式类时，两个类的优先级是未定义的，因此最好避免这种情况。</p><details class="hint-container details"><summary>代码示例</summary><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*组件 custom-component.js*/</span>
<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">externalClasses</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;my-class&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 组件 custom-component.wxml --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-component</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-class<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>这段文本的颜色由组件外的 class 决定<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>custom-component</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><p>这样，组件的使用者可以指定这个样式类对应的 class ，就像使用普通属性一样。在 2.7.1 之后，可以指定多个对应的 class 。</p><details class="hint-container details"><summary>代码示例</summary><p>在开发者工具中预览效果</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 页面的 WXML --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-component</span> <span class="token attr-name">my-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red-text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-component</span> <span class="token attr-name">my-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>large-text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!-- 以下写法需要基础库版本 2.7.1 以上 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-component</span> <span class="token attr-name">my-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red-text large-text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.red-text</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.large-text</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></details>`,6),A={id:"引用页面或父组件的样式",tabindex:"-1"},F=s("a",{class:"header-anchor",href:"#引用页面或父组件的样式","aria-hidden":"true"},"#",-1),G=a(`<blockquote><p>基础库 2.9.2 开始支持</p></blockquote><p>即使启用了样式隔离 <code>isolated</code> ，组件仍然可以在局部引用组件所在页面的样式或父组件的样式。</p><p>例如，如果在页面 wxss 中定义了:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.blue-text</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>在这个组件中可以使用 <code>~</code> 来引用这个类的样式:</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>~blue-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 这段文本是蓝色的 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>如果在一个组件的父组件 wxss 中定义了:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.red-text</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>在这个组件中可以使用 <code>^</code> 来引用这个类的样式:</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>^red-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 这段文本是红色的 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>也可以连续使用多个 <code>^</code> 来引用祖先组件中的样式。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果组件是比较独立、通用的组件，请优先使用外部样式类的方式，而非直接引用父组件或页面的样式。</p></div>`,12),D={id:"虚拟化组件节点",tabindex:"-1"},H=s("a",{class:"header-anchor",href:"#虚拟化组件节点","aria-hidden":"true"},"#",-1),J=a(`<blockquote><p>基础库 2.11.2 开始支持</p></blockquote><p>默认情况下，自定义组件本身的那个节点是一个“普通”的节点，使用时可以在这个节点上设置 class style 、动画、 flex 布局等，就如同普通的 view 组件节点一样。</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 页面的 WXML --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>display: flex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 默认情况下，这是一个普通的节点 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-component</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color: blue; flex: 1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>蓝色、满宽的<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>custom-component</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>但有些时候，自定义组件并不希望这个节点本身可以设置样式、响应 flex 布局等，而是希望自定义组件内部的第一层节点能够响应 flex 布局或者样式由自定义组件本身完全决定。</p><p>这种情况下，可以将这个自定义组件设置为“虚拟的”:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 定义 style 属性可以拿到 style 属性上设置的值</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">virtualHost</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">externalClasses</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;class&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 可以将 class 设为 externalClasses</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，可以将 flex 放入自定义组件内:</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 页面的 WXML --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>display: flex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 如果设置了 virtualHost ，节点上的样式将失效 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-component</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color: blue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>不是蓝色的<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>custom-component</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- custom-component.wxml --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex: 1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  满宽的
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>需要注意的是，自定义组件节点上的 class style 和动画将不再生效，但仍可以:</p><ul><li>将 style 定义成 <code>properties</code> 属性来获取 style 上设置的值；</li><li>将 class 定义成 <code>externalClasses</code> 外部样式类使得自定义组件 wxml 可以使用 class 值。</li></ul>`,11),K={href:"https://developers.weixin.qq.com/s/AlV9fEmF7Dh8",target:"_blank",rel:"noopener noreferrer"};function T(z,O){const p=o("ExternalLinkIcon"),e=o("Badge");return l(),u("div",null,[k,r,d,g,s("details",m,[v,s("p",null,[s("a",x,[n("在开发者工具中预览效果"),t(p)])]),h]),q,s("details",y,[_,s("p",null,[s("a",w,[n("在开发者工具中预览效果"),t(p)])]),b]),f,s("blockquote",null,[s("p",null,[s("a",j,[n("在开发者工具中预览效果"),t(p)])])]),C,s("div",I,[L,B,s("details",W,[X,s("p",null,[s("a",M,[n("在开发者工具中预览效果"),t(p)])]),N])]),s("h2",V,[E,n(" 外部样式类 "),t(e,{type:"grey",text:"高级"})]),S,s("h2",A,[F,n(" 引用页面或父组件的样式 "),t(e,{type:"grey",text:"高级"})]),G,s("h2",D,[H,n(" 虚拟化组件节点 "),t(e,{type:"grey",text:"高级"})]),J,s("p",null,[n("代码示例: "),s("a",K,[n("在开发者工具中预览效果"),t(p)])])])}const Q=c(i,[["render",T],["__file","style.html.vue"]]);export{Q as default};
