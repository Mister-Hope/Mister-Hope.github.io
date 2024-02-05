import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as i,c as r,d as s,e as n,a as t,w as p,b as a}from"./app-S62fdHqc.js";const u={},d=a(`<h2 id="用途" tabindex="-1"><a class="header-anchor" href="#用途"><span>用途</span></a></h2><ul><li>将页面内的功能模块抽象成自定义组件，以便在不同的页面中重复使用</li><li>将复杂的页面拆分成多个低耦合的模块，有助于代码维护。</li></ul><h2 id="创建自定义组件" tabindex="-1"><a class="header-anchor" href="#创建自定义组件"><span>创建自定义组件</span></a></h2><p>类似于页面，一个自定义组件由 <code>json</code> <code>wxml</code> <code>wxss</code> <code>js</code> 4 个文件组成。</p><p>要编写一个自定义组件，首先需要在 json 文件中进行自定义组件声明(将 <code>component</code> 字段设为 <code>true</code> 可将这一组文件设为自定义组件):</p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),m=s("code",null,"wxml",-1),k=s("code",null,"wxss",-1),g=a(`<details class="hint-container details"><summary>代码示例</summary><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 这是自定义组件的内部WXML结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{innerText}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token comment">/*这里的样式只应用于这个自定义组件*/</span>
<span class="token selector">.inner</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></details><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在组件 <code>wxss</code> 中不应使用 ID 选择器、属性选择器和标签名选择器。</p></div><p>在自定义组件的 js 文件中，需要使用 <code>Component()</code> 来注册组件，并提供组件的属性定义、内部数据和自定义方法。</p>`,3),h=s("code",null,"wxml",-1),v=a(`<details class="hint-container details"><summary>代码示例</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里定义了innerText属性，属性值可以在组件使用时指定</span>
    <span class="token literal-property property">innerText</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;default value&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里是一些组件内部数据</span>
    <span class="token literal-property property">someData</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里是一个自定义方法</span>
    <span class="token function">customMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="使用自定义组件" tabindex="-1"><a class="header-anchor" href="#使用自定义组件"><span>使用自定义组件</span></a></h2><p>自定义组件在使用时与基础组件非常相似。</p><p>使用已注册的自定义组件前，首先要在页面的 json 文件中进行引用声明。此时需要提供每个自定义组件的标签名和对应的自定义组件文件路径:</p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;component-tag-name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;path/to/the/custom/component&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这样，在页面的 <code>wxml</code> 中就可以像使用基础组件一样使用自定义组件。节点名即自定义组件的标签名，节点属性即传递给组件的属性值。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>在 app.json 中也可以声明 <code>usingComponents</code> 字段，在此处声明的自定义组件视为全局自定义组件，在小程序内的页面或自定义组件中可以直接使用而无需再声明。</p></div>`,7),x={class:"hint-container details"},_=s("summary",null,"代码示例",-1),y={href:"https://developers.weixin.qq.com/s/OMfVAKmZ6KZT",target:"_blank",rel:"noopener noreferrer"},b=a(`<div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 以下是对一个自定义组件的引用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component-tag-name</span> <span class="token attr-name">inner-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Some text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),f=a('<p>自定义组件的 <code>wxml</code> 节点结构在与数据结合之后，将被插入到引用位置内。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>因为 WXML 节点标签名只能是小写字母、中划线和下划线的组合，所以自定义组件的标签名也只能包含这些字符。</li><li>自定义组件也是可以引用自定义组件的，引用方法类似于页面引用自定义组件的方式(使用 <code>usingComponents</code> 字段)。</li><li>自定义组件和页面所在项目根目录名不能以 <code>wx-</code> 为前缀，否则会报错。</li></ul></div><p>注意，是否在页面文件中使用 <code>usingComponents</code> 会使得页面的 <code>this</code> 对象的原型稍有差异，包括:</p><ul><li>使用 <code>usingComponents</code> 页面的原型与不使用时不一致，即 <code>Object.getPrototypeOf(this)</code> 结果不同。</li><li>使用 <code>usingComponents</code> 时会多一些方法，如 <code>selectComponent</code> 。</li><li>出于性能考虑，使用 <code>usingComponents</code> 时， <code>setData</code> 内容不会被直接深复制，即 <code>this.setData({ field: obj })</code> 后 <code>this.data.field === obj</code>。(深复制会在这个值被组件间传递时发生。)</li></ul><p>如果页面比较复杂，新增或删除 <code>usingComponents</code> 定义段时建议重新测试一下。</p>',5);function j(w,q){const e=o("RouteLink"),c=o("ExternalLinkIcon");return i(),r("div",null,[d,s("p",null,[n("同时，还要在 "),m,n(" 文件中编写组件模板，在 "),k,n(" 文件中加入组件样式，它们的写法与页面的写法类似。具体细节和注意事项参见 "),t(e,{to:"/code/mini-app/guide/custom-component/style.html"},{default:p(()=>[n("组件模板和样式")]),_:1}),n(" 。")]),g,s("p",null,[n("组件的属性值和内部数据将被用于组件 "),h,n(" 的渲染，其中，属性值是可由组件外部传入的。更多细节参见 "),t(e,{to:"/code/mini-app/guide/custom-component/component.html"},{default:p(()=>[n("Component 构造器")]),_:1}),n(" 。")]),v,s("details",x,[_,s("p",null,[s("a",y,[n("在开发者工具中预览效果"),t(c)])]),b]),f])}const M=l(u,[["render",j],["__file","intro.html.vue"]]),H=JSON.parse('{"path":"/code/mini-app/guide/custom-component/intro.html","title":"自定义组件","lang":"zh-CN","frontmatter":{"date":"2020-12-19T00:00:00.000Z","title":"自定义组件","icon":"info","category":"小程序","description":"用途 将页面内的功能模块抽象成自定义组件，以便在不同的页面中重复使用 将复杂的页面拆分成多个低耦合的模块，有助于代码维护。 创建自定义组件 类似于页面，一个自定义组件由 json wxml wxss js 4 个文件组成。 要编写一个自定义组件，首先需要在 json 文件中进行自定义组件声明(将 component 字段设为 true 可将这一组文件设...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/mini-app/guide/custom-component/intro.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"自定义组件"}],["meta",{"property":"og:description","content":"用途 将页面内的功能模块抽象成自定义组件，以便在不同的页面中重复使用 将复杂的页面拆分成多个低耦合的模块，有助于代码维护。 创建自定义组件 类似于页面，一个自定义组件由 json wxml wxss js 4 个文件组成。 要编写一个自定义组件，首先需要在 json 文件中进行自定义组件声明(将 component 字段设为 true 可将这一组文件设..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-12-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自定义组件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"用途","slug":"用途","link":"#用途","children":[]},{"level":2,"title":"创建自定义组件","slug":"创建自定义组件","link":"#创建自定义组件","children":[]},{"level":2,"title":"使用自定义组件","slug":"使用自定义组件","link":"#使用自定义组件","children":[]}],"git":{"createdTime":1611059957000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":3.21,"words":964},"filePathRelative":"code/mini-app/guide/custom-component/intro.md","localizedDate":"2020年12月19日","excerpt":"","autoDesc":true}');export{M as comp,H as data};
