import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as t,b as s}from"./app-S62fdHqc.js";const e={},p=s(`<h2 id="wx-if" tabindex="-1"><a class="header-anchor" href="#wx-if"><span>wx:if</span></a></h2><p>在框架中，使用 <code>wx:if=&quot;&quot;</code> 来判断是否需要渲染该代码块:</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{condition}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> True <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>也可以用 <code>wx:elif</code> 和 <code>wx:else</code> 来添加一个 <code>else</code> 块:</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{length &gt; 5}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 1 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>elif</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{length &gt; 2}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 2 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>else</span><span class="token punctuation">&gt;</span></span> 3 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="block-wx-if" tabindex="-1"><a class="header-anchor" href="#block-wx-if"><span>block wx:if</span></a></h2><p>因为 <code>wx:if</code> 是一个控制属性，需要将它添加到一个标签上。如果要一次性判断多个组件标签，可以使用一个 <code>&lt;block /&gt;</code> 标签将多个组件包装起来，并在上边使用 <code>wx:if</code> 控制属性。</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>block</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{true}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> view1 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> view2 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>block</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>&lt;block /&gt;</code> 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。</p></div><h2 id="wx-if-vs-hidden" tabindex="-1"><a class="header-anchor" href="#wx-if-vs-hidden"><span>wx:if vs hidden</span></a></h2><p>因为 <code>wx:if</code> 之中的模板也可能包含数据绑定，所以当 <code>wx:if</code> 的条件值切换时，框架有一个局部渲染的过程，因为它会确保条件块在切换时销毁或重新渲染。</p><p>同时 <code>wx:if</code> 也是惰性的，如果在初始渲染条件为 <code>false</code>，框架什么也不做，在条件第一次变成真的时候才开始局部渲染。</p><p>相比之下，<code>hidden</code> 就简单的多，组件始终会被渲染，只是简单的控制显示与隐藏。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>一般来说，<code>wx:if</code> 有更高的切换消耗而 <code>hidden</code> 有更高的初始渲染消耗。因此，如果需要频繁切换的情景下，用 <code>hidden</code> 更好，如果在运行时条件不大可能改变则 <code>wx:if</code> 较好。</p></div>`,14),o=[p];function c(l,i){return n(),t("div",null,o)}const u=a(e,[["render",c],["__file","condition-render.html.vue"]]),k=JSON.parse('{"path":"/code/mini-app/guide/view/condition-render.html","title":"条件渲染","lang":"zh-CN","frontmatter":{"date":"2020-12-19T00:00:00.000Z","title":"条件渲染","icon":"condition","category":"小程序","description":"wx:if 在框架中，使用 wx:if=\\"\\" 来判断是否需要渲染该代码块: 也可以用 wx:elif 和 wx:else 来添加一个 else 块: block wx:if 因为 wx:if 是一个控制属性，需要将它添加到一个标签上。如果要一次性判断多个组件标签，可以使用一个 <block /> 标签将多个组件包装起来，并在上边使用 wx:if 控制属...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/mini-app/guide/view/condition-render.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"条件渲染"}],["meta",{"property":"og:description","content":"wx:if 在框架中，使用 wx:if=\\"\\" 来判断是否需要渲染该代码块: 也可以用 wx:elif 和 wx:else 来添加一个 else 块: block wx:if 因为 wx:if 是一个控制属性，需要将它添加到一个标签上。如果要一次性判断多个组件标签，可以使用一个 <block /> 标签将多个组件包装起来，并在上边使用 wx:if 控制属..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-12-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"条件渲染\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"wx:if","slug":"wx-if","link":"#wx-if","children":[]},{"level":2,"title":"block wx:if","slug":"block-wx-if","link":"#block-wx-if","children":[]},{"level":2,"title":"wx:if vs hidden","slug":"wx-if-vs-hidden","link":"#wx-if-vs-hidden","children":[]}],"git":{"createdTime":1611033126000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":1.36,"words":408},"filePathRelative":"code/mini-app/guide/view/condition-render.md","localizedDate":"2020年12月19日","excerpt":"","autoDesc":true}');export{u as comp,k as data};
