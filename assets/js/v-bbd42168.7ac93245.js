"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4269],{21761:(a,n,s)=>{s.r(n),s.d(n,{default:()=>c});var t=s(16492);const e=(0,t.uE)('<blockquote><p>基础库 2.9.3 开始支持</p></blockquote><div class="custom-container tip"><p class="custom-container-title">提示</p><p>此部分在初步学习小程序的时候直接略过即可。</p></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><p>在 WXML 中，普通的属性的绑定是单向的。例如:</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{value}}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><p>如果使用 <code>this.setData({ value: &#39;leaf&#39; })</code> 来更新 value ，<code>this.data.value</code> 和输入框的中显示的值都会被更新为 <code>leaf</code> ；但如果用户修改了输入框里的值，却不会同时改变 <code>this.data.value</code> 。</p><p>如果需要在用户输入的同时改变 <code>this.data.value</code> ，需要借助简易双向绑定机制。此时，可以在对应项目之前加入 <code>model:</code> 前缀:</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{value}}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><p>这样，如果输入框的值被改变了， <code>this.data.value</code> 也会同时改变。同时， WXML 中所有绑定了 value 的位置也会被一同更新， 数据监听器 也会被正常触发。</p>',9),p={href:"https://developers.weixin.qq.com/s/8jXvobmV7vcj",target:"_blank",rel:"noopener noreferrer"},o=(0,t.uE)('<h2 id="限制" tabindex="-1"><a class="header-anchor" href="#限制" aria-hidden="true">#</a> 限制</h2><p>用于双向绑定的表达式有如下限制:</p><ol><li><p>只能是一个单一字段的绑定，如</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>值为 {{value}}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ a + b }}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><p>都是非法的；</p></li><li><p>目前，尚不能 <code>data</code> 路径，如</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ a.b }}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><p>这样的表达式目前暂不支持。</p></li></ol><h2 id="在自定义组件中使用" tabindex="-1"><a class="header-anchor" href="#在自定义组件中使用" aria-hidden="true">#</a> 在自定义组件中使用</h2><h3 id="传递双向绑定" tabindex="-1"><a class="header-anchor" href="#传递双向绑定" aria-hidden="true">#</a> 传递双向绑定</h3><p>双向绑定同样可以使用在自定义组件上。</p><p>如下的自定义组件:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// custom-component.js</span>\n<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">myValue</span><span class="token operator">:</span> String<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- custom-component.wxml --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{myValue}}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><p>这个自定义组件将自身的 <code>myValue</code> 属性双向绑定到了组件内输入框的 <code>value</code> 属性上。这样，如果页面这样使用这个组件:</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-component</span> <span class="token attr-name"><span class="token namespace">model:</span>my-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{pageValue}}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><p>当输入框的值变更时，自定义组件的 <code>myValue</code> 属性会同时变更，这样，页面的 <code>this.data.pageValue</code> 也会同时变更，页面 WXML 中所有绑定了 <code>pageValue</code> 的位置也会被一同更新。</p><h3 id="触发双向绑定更新" tabindex="-1"><a class="header-anchor" href="#触发双向绑定更新" aria-hidden="true">#</a> 触发双向绑定更新</h3><p>自定义组件还可以自己触发双向绑定更新，做法就是: 使用 <code>setData</code> 设置自身的属性。例如:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// custom-component.js</span>\n<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">myValue</span><span class="token operator">:</span> String<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 更新 myValue</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token literal-property property">myValue</span><span class="token operator">:</span> <span class="token string">&quot;leaf&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果页面这样使用这个组件:</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-component</span> <span class="token attr-name"><span class="token namespace">model:</span>my-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{pageValue}}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><p>当组件使用 <code>setData</code> 更新 <code>myValue</code> 时，页面的 <code>this.data.pageValue</code> 也会同时变更，页面 WXML 中所有绑定了 <code>pageValue</code> 的位置也会被一同更新。</p>',18),l={},c=(0,s(11164).Z)(l,[["render",function(a,n){const s=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[e,(0,t._)("blockquote",null,[(0,t._)("p",null,[(0,t._)("a",p,[(0,t.Uk)("在开发者工具中预览效果"),(0,t.Wm)(s)])])]),o])}]])},11164:(a,n)=>{n.Z=(a,n)=>{const s=a.__vccOpts||a;for(const[a,t]of n)s[a]=t;return s}},20048:(a,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t=JSON.parse('{"key":"v-bbd42168","path":"/code/mini-app/guide/view/model.html","title":"简易双向绑定","lang":"zh-CN","frontmatter":{"title":"简易双向绑定","icon":"async","category":["小程序"],"description":"基础库 2.9.3 开始支持 提示 此部分在初步学习小程序的时候直接略过即可。 语法 在 WXML 中，普通的属性的绑定是单向的。例如: &lt;input value=\\"{{value}}\\" /&gt;","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/mini-app/guide/view/model.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"简易双向绑定"}],["meta",{"property":"og:description","content":"基础库 2.9.3 开始支持 提示 此部分在初步学习小程序的时候直接略过即可。 语法 在 WXML 中，普通的属性的绑定是单向的。例如: &lt;input value=\\"{{value}}\\" /&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2021-01-27T06:58:54.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2021-01-27T06:58:54.000Z"}]]},"excerpt":"<blockquote>\\n<p>基础库 2.9.3 开始支持</p>\\n</blockquote>\\n<div class=\\"custom-container tip\\">\\n<p class=\\"custom-container-title\\">提示</p>\\n<p>此部分在初步学习小程序的时候直接略过即可。</p>\\n</div>\\n<h2> 语法</h2>\\n<p>在 WXML 中，普通的属性的绑定是单向的。例如:</p>\\n<div class=\\"language-xml\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>{{value}}<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span>\\n</code></pre></div>","headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"限制","slug":"限制","link":"#限制","children":[]},{"level":2,"title":"在自定义组件中使用","slug":"在自定义组件中使用","link":"#在自定义组件中使用","children":[{"level":3,"title":"传递双向绑定","slug":"传递双向绑定","link":"#传递双向绑定","children":[]},{"level":3,"title":"触发双向绑定更新","slug":"触发双向绑定更新","link":"#触发双向绑定更新","children":[]}]}],"git":{"createdTime":1610980523000,"updatedTime":1611730734000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5}]},"readingTime":{"minutes":1.96,"words":588},"localizedDate":"2021年1月18日","filePathRelative":"code/mini-app/guide/view/model.md","autoDesc":true}')}}]);