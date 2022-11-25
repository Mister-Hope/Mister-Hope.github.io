"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[72601],{67798:(n,a,s)=>{s.r(a),s.d(a,{default:()=>o});var t=s(16492);const p=[(0,t.uE)('<blockquote><p>基础库 2.11.1 开始支持</p></blockquote><div class="custom-container tip"><p class="custom-container-title">提示</p><p>此部分在初步学习小程序的时候直接略过即可。</p></div><h2 id="初始渲染缓存工作原理" tabindex="-1"><a class="header-anchor" href="#初始渲染缓存工作原理" aria-hidden="true">#</a> 初始渲染缓存工作原理</h2><p>小程序页面的初始化分为两个部分。</p><ul><li>逻辑层初始化: 载入必需的小程序代码、初始化页面 <code>this</code> 对象(也包括它涉及到的所有自定义组件的 this 对象)、将相关数据发送给视图层。</li><li>视图层初始化: 载入必需的小程序代码，然后等待逻辑层初始化完毕并接收逻辑层发送的数据，最后渲染页面。</li></ul><p>在启动页面时，尤其是小程序冷启动、进入第一个页面时，逻辑层初始化的时间较长。在页面初始化过程中，用户将看到小程序的标准载入画面(冷启动时)或可能看到轻微的白屏现象(页面跳转过程中)。</p><p>启用初始渲染缓存，可以使视图层不需要等待逻辑层初始化完毕，而直接提前将页面初始 data 的渲染结果展示给用户，这可以使得页面对用户可见的时间大大提前。它的工作原理如下:</p><ul><li>在小程序页面第一次被打开后，将页面初始数据渲染结果记录下来，写入一个持久化的缓存区域(缓存可长时间保留，但可能因为小程序更新、基础库更新、储存空间回收等原因被清除)；</li><li>在这个页面被第二次打开时，检查缓存中是否还存有这个页面上一次初始数据的渲染结果，如果有，就直接将渲染结果展示出来；</li><li>如果展示了缓存中的渲染结果，这个页面暂时还不能响应用户事件，等到逻辑层初始化完毕后才能响应用户事件。</li></ul><p>利用初始渲染缓存，可以:</p><ul><li>快速展示出页面中永远不会变的部分，如导航栏；</li><li>预先展示一个骨架页，提升用户体验；</li><li>展示自定义的加载提示；</li><li>提前展示广告，等等。</li></ul><h2 id="支持的组件" tabindex="-1"><a class="header-anchor" href="#支持的组件" aria-hidden="true">#</a> 支持的组件</h2><p>在初始渲染缓存阶段中，复杂组件不能被展示或不能响应交互。</p><p>目前支持的内置组件:</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scroll-view</span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rich-text</span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><p>自定义组件本身可以被展示(但它们里面用到的内置组件也遵循上述限制)。</p><h2 id="静态初始渲染缓存" tabindex="-1"><a class="header-anchor" href="#静态初始渲染缓存" aria-hidden="true">#</a> 静态初始渲染缓存</h2><p>若想启用初始渲染缓存，最简单的方法是在页面的 json 文件中添加配置项 <code>&quot;initialRenderingCache&quot;: &quot;static&quot;</code>。</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;initialRenderingCache&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>如果想要对所有页面启用，可以在 app.json 的 <code>window</code> 配置段中添加这个配置:</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;window&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;initialRenderingCache&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>添加这个配置项之后，在手机中预览小程序首页，然后杀死小程序再次进入，就会通过初始渲染缓存来渲染首页。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>这种情况下，初始渲染缓存记录的是页面 data 应用在页面 WXML 上的结果，不包含任何 setData 的结果。</p><p>换而言之，这种做法只包含页面 data 的渲染结果，即页面的纯静态成分。</p></div><details class="custom-container details"><summary>例子</summary><p>例如，如果想要在页面中展示出“正在加载”几个字，这几个字受到 loading 数据字段控制:</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{loading}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>正在加载<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>这种情况下， <code>loading</code> 应当在 <code>data</code> 中指定为 <code>true</code> ，如</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 正确的做法</span>\n<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>而不能通过 <code>setData</code> 将 <code>loading</code> 置为 <code>true</code>:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 错误的做法! 不要这么做!</span>\n<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details><h2 id="在初始渲染缓存中添加动态内容" tabindex="-1"><a class="header-anchor" href="#在初始渲染缓存中添加动态内容" aria-hidden="true">#</a> 在初始渲染缓存中添加动态内容</h2><p>有些场景中，只是页面 data 的渲染结果会比较局限。有时会想要额外展示一些可变的内容，如展示的广告图片 URL 等。</p><p>这种情况下可以使用“动态”初始渲染缓存的方式。首先，配置 <code>&quot;initialRenderingCache&quot;: &quot;dynamic&quot;</code>:</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;initialRenderingCache&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dynamic&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>此时，初始渲染缓存不会被自动启用，还需要在页面中调用 <code>this.setInitialRenderingCache(dynamicData)</code> 才能启用。其中， <code>dynamicData</code> 是一组数据，与 data 一起参与页面 WXML 渲染。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setInitialRenderingCache</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token literal-property property">loadingHint</span><span class="token operator">:</span> <span class="token string">&quot;正在加载&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 这一部分数据将被应用于界面上，相当于在初始 data 基础上额外进行一次 setData</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{loading}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{loadingHint}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>从原理上说，在动态生成初始渲染缓存的方式下，页面会在后台使用动态数据重新渲染一次，因而开销相对较大。因而要尽量避免频繁调用 <code>this.setInitialRenderingCache</code>，如果在一个页面内多次调用，仅最后一次调用生效。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p><code>this.setInitialRenderingCache</code> 调用时机不能早于 Page 的 <code>onReady</code> 或 Component 的 <code>ready</code> 生命周期，否则可能对性能有负面影响。 如果想禁用初始渲染缓存，调用 <code>this.setInitialRenderingCache(null)</code>。</p></div>',32)],e={},o=(0,s(11164).Z)(e,[["render",function(n,a){return(0,t.wg)(),(0,t.iD)("div",null,p)}]])},11164:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,t]of a)s[n]=t;return s}},58458:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t=JSON.parse('{"key":"v-f0611518","path":"/code/mini-app/guide/view/rendering-cache.html","title":"初始渲染缓存","lang":"zh-CN","frontmatter":{"title":"初始渲染缓存","icon":"cache","category":["小程序"],"description":"基础库 2.11.1 开始支持 此部分在初步学习小程序的时候直接略过即可。 初始渲染缓存工作原理 小程序页面的初始化分为两个部分。 逻辑层初始化: 载入必需的小程序代码、初始化页面 this 对象(也包括它涉及到的所有自定义组件的 this 对象)、将相关数据发送给视图层。; 视图层初始化: 载入必需的小程序代码，然后等待逻辑层初始化完毕并接收逻辑层发...","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/mini-app/guide/view/rendering-cache.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"初始渲染缓存"}],["meta",{"property":"og:description","content":"基础库 2.11.1 开始支持 此部分在初步学习小程序的时候直接略过即可。 初始渲染缓存工作原理 小程序页面的初始化分为两个部分。 逻辑层初始化: 载入必需的小程序代码、初始化页面 this 对象(也包括它涉及到的所有自定义组件的 this 对象)、将相关数据发送给视图层。; 视图层初始化: 载入必需的小程序代码，然后等待逻辑层初始化完毕并接收逻辑层发..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2021-03-28T15:22:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2021-03-28T15:22:50.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"初始渲染缓存工作原理","slug":"初始渲染缓存工作原理","link":"#初始渲染缓存工作原理","children":[]},{"level":2,"title":"支持的组件","slug":"支持的组件","link":"#支持的组件","children":[]},{"level":2,"title":"静态初始渲染缓存","slug":"静态初始渲染缓存","link":"#静态初始渲染缓存","children":[]},{"level":2,"title":"在初始渲染缓存中添加动态内容","slug":"在初始渲染缓存中添加动态内容","link":"#在初始渲染缓存中添加动态内容","children":[]}],"git":{"createdTime":1611033126000,"updatedTime":1616944970000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":4.16,"words":1247},"filePathRelative":"code/mini-app/guide/view/rendering-cache.md","localizedDate":"2021年1月19日"}')}}]);