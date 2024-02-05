import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as l,f as i,d as a,e as n,a as t,b as e}from"./app-S62fdHqc.js";const u={},r=e(`<h2 id="优缺点比较" tabindex="-1"><a class="header-anchor" href="#优缺点比较"><span>优缺点比较</span></a></h2><table><thead><tr><th></th><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>小程序</td><td>小程序底层由微信框架驱动，每个界面是单独的 JS 文件，页面切换以及全局生命周期丰富完善。小程序具有相当完备的 API。</td><td>小程序是由 JSCore 驱动逻辑层，视图层采用 Webview，故没有 DOM 节点的概念，只有渲染出的虚拟节点，所以无法动态删除或添加节点，无法使用一切 DOM 相关 API。小程序组件生命周期不够强大。小程序的 Webview 渲染存在一定的性能问题。小程序视图层与逻辑层通过 Jsbridge 连接，数据传输及渲染有延时。</td></tr><tr><td>vue</td><td>Vue 的实质是动态监测并托管 DOM 节点。由于 Vue 是网页开发，拥有 DOM 树，可以使用 DOM 相关 API。Vue 组件拥有更全面的生命周期，同时可以动态渲染组件。Vue 的组件传递数据方式默认为单向绑定</td><td>由于 Vue 的组件本质是监测 DOM 树，故其组件只能有一个根节点。同时 Vue 的界面路由依赖于 History API，其界面切换周期与逻辑不够强大。</td></tr></tbody></table><h2 id="代码区别" tabindex="-1"><a class="header-anchor" href="#代码区别"><span>代码区别</span></a></h2><p>小程序与 Vue 在代码写法上极其相似，但稍有不同。</p><h3 id="数据绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定"><span>数据绑定</span></a></h3><h4 id="小程序数据绑定" tabindex="-1"><a class="header-anchor" href="#小程序数据绑定"><span>小程序数据绑定</span></a></h4><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text1 {{a}} {{b?:&#39;b为真&#39;:&#39;b为假&#39;}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{text}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,7),d=a("div",null,[a("p",null,[n("小程序在所有内容上都使用 Muscle 语法 ("),a("code",{"v-pre":""},"{{Javascript表达式}}"),n(") 的写法。")])],-1),k=e(`<h4 id="vue-数据绑定" tabindex="-1"><a class="header-anchor" href="#vue-数据绑定"><span>Vue 数据绑定</span></a></h4><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a+&#39; &#39;+ b?:&#39;b为真&#39;:&#39;b为假&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{text}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Vue 在标签名属性用 <code>v-bind:prop=&quot;Javascript表达式&quot;</code> 的写法、其简写为 <code>:prop=&quot;&quot;</code>，在标签内容处使用 Muscle 语法。</p></div><h3 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染"><span>条件渲染</span></a></h3><h4 id="小程序条件渲染" tabindex="-1"><a class="header-anchor" href="#小程序条件渲染"><span>小程序条件渲染</span></a></h4><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{condition1}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>板块只有 condition1 为 true 时才会渲染<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>block</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{condition2}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>内容1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>内容2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>内容3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>内容4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
    这是一个拥有很多兄弟标签的代码块.
    虚拟标签 block 会把其当作一个整体用作条件渲染。
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>block</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),g={class:"hint-container info"},h=a("p",{class:"hint-container-title"},"相关信息",-1),v={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/conditional.html",target:"_blank",rel:"noopener noreferrer"},m=e(`<h4 id="vue-条件渲染" tabindex="-1"><a class="header-anchor" href="#vue-条件渲染"><span>Vue 条件渲染</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>condition<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>板块只有 condition 为 true 时才会渲染<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{condition2}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>内容1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>内容2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>内容3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>内容4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    Vue 没有相关虚拟标签，且只能监听一个标签。所以只能建立一个没有样式的 div
    标签将多个并列标签抱起来。这样 Vue 就会因监听最外层 div
    会把其当作一个整体用作条件渲染。
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),b={class:"hint-container info"},x=a("p",{class:"hint-container-title"},"相关信息",-1),_={href:"https://cn.vuejs.org/v2/guide/#%E6%9D%A1%E4%BB%B6%E4%B8%8E%E5%BE%AA%E7%8E%AF",target:"_blank",rel:"noopener noreferrer"},f=e(`<h3 id="循环渲染" tabindex="-1"><a class="header-anchor" href="#循环渲染"><span>循环渲染</span></a></h3><h4 id="小程序循环渲染" tabindex="-1"><a class="header-anchor" href="#小程序循环渲染"><span>小程序循环渲染</span></a></h4><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{array}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for-item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{index}} is {{element}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>实际渲染结果为:</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,5),w={class:"hint-container info"},q=a("p",{class:"hint-container-title"},"相关信息",-1),V={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/list.html",target:"_blank",rel:"noopener noreferrer"},y=e(`<h4 id="vue-循环渲染" tabindex="-1"><a class="header-anchor" href="#vue-循环渲染"><span>Vue 循环渲染</span></a></h4><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(element,index) in array<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
       {{index}} is {{ element }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),E={class:"hint-container info"},M=a("p",{class:"hint-container-title"},"相关信息",-1),A={href:"https://cn.vuejs.org/v2/guide/#%E6%9D%A1%E4%BB%B6%E4%B8%8E%E5%BE%AA%E7%8E%AF",target:"_blank",rel:"noopener noreferrer"},B=e('<h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期"><span>生命周期</span></a></h2><h3 id="页面生命周期" tabindex="-1"><a class="header-anchor" href="#页面生命周期"><span>页面生命周期</span></a></h3><h4 id="小程序生命周期" tabindex="-1"><a class="header-anchor" href="#小程序生命周期"><span>小程序生命周期</span></a></h4><figure><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/page-lifecycle.2e646c86.png" alt="小程序页面生命周期" tabindex="0" loading="lazy"><figcaption>小程序页面生命周期</figcaption></figure><h4 id="vue-页面生命周期" tabindex="-1"><a class="header-anchor" href="#vue-页面生命周期"><span>Vue 页面生命周期</span></a></h4>',5),J={href:"https://router.vuejs.org/guide/advanced/navigation-guards.html",target:"_blank",rel:"noopener noreferrer"},D=a("h3",{id:"组件生命周期",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#组件生命周期"},[a("span",null,"组件生命周期")])],-1),T=a("h4",{id:"小程序组件生命周期",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#小程序组件生命周期"},[a("span",null,"小程序组件生命周期")])],-1),H={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html",target:"_blank",rel:"noopener noreferrer"},N=a("h4",{id:"vue-组件生命周期",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#vue-组件生命周期"},[a("span",null,"Vue 组件生命周期")])],-1),O={href:"https://cn.vuejs.org/guide/essentials/lifecycle.html",target:"_blank",rel:"noopener noreferrer"};function j(P,S){const s=o("ExternalLinkIcon");return c(),l("div",null,[i(" more "),r,d,k,a("div",g,[h,a("p",null,[n("更多详情请见 "),a("a",v,[n("小程序条件渲染文档"),t(s)])])]),m,a("div",b,[x,a("p",null,[n("更多相关请见 "),a("a",_,[n("Vue 条件渲染文档"),t(s)])])]),f,a("div",w,[q,a("p",null,[n("更多详情请见 "),a("a",V,[n("小程序循环渲染文档"),t(s)])])]),y,a("div",E,[M,a("p",null,[n("更多相关请见 "),a("a",A,[n("Vue 循环渲染文档"),t(s)])])]),B,a("p",null,[a("a",J,[n("Vue 页面生命周期"),t(s)])]),D,T,a("p",null,[a("a",H,[n("小程序组件生命周期"),t(s)])]),N,a("p",null,[a("a",O,[n("Vue 组件生命周期"),t(s)])])])}const z=p(u,[["render",j],["__file","compare.html.vue"]]),C=JSON.parse('{"path":"/code/vue/compare.html","title":"Vue 与小程序的异同","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"Vue 与小程序的异同","icon":"compare","category":"Vue","tag":["Vue","小程序","对比"],"description":" 优缺点比较 代码区别 小程序与 Vue 在代码写法上极其相似，但稍有不同。 数据绑定 小程序数据绑定 小程序在所有内容上都使用 Muscle 语法 ({{Javascript表达式}}) 的写法。 Vue 数据绑定 提示 Vue 在标签名属性用 v-bind:prop=\\"Javascript表达式\\" 的写法、其简写为 :prop=\\"\\"，在标签内容处使...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/vue/compare.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Vue 与小程序的异同"}],["meta",{"property":"og:description","content":" 优缺点比较 代码区别 小程序与 Vue 在代码写法上极其相似，但稍有不同。 数据绑定 小程序数据绑定 小程序在所有内容上都使用 Muscle 语法 ({{Javascript表达式}}) 的写法。 Vue 数据绑定 提示 Vue 在标签名属性用 v-bind:prop=\\"Javascript表达式\\" 的写法、其简写为 :prop=\\"\\"，在标签内容处使..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://res.wx.qq.com/wxdoc/dist/assets/img/page-lifecycle.2e646c86.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Vue 与小程序的异同"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:tag","content":"小程序"}],["meta",{"property":"article:tag","content":"对比"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue 与小程序的异同\\",\\"image\\":[\\"https://res.wx.qq.com/wxdoc/dist/assets/img/page-lifecycle.2e646c86.png\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"优缺点比较","slug":"优缺点比较","link":"#优缺点比较","children":[]},{"level":2,"title":"代码区别","slug":"代码区别","link":"#代码区别","children":[{"level":3,"title":"数据绑定","slug":"数据绑定","link":"#数据绑定","children":[]},{"level":3,"title":"条件渲染","slug":"条件渲染","link":"#条件渲染","children":[]},{"level":3,"title":"循环渲染","slug":"循环渲染","link":"#循环渲染","children":[]}]},{"level":2,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[{"level":3,"title":"页面生命周期","slug":"页面生命周期","link":"#页面生命周期","children":[]},{"level":3,"title":"组件生命周期","slug":"组件生命周期","link":"#组件生命周期","children":[]}]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":6},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":3.11,"words":932},"filePathRelative":"code/vue/compare.md","localizedDate":"2020年5月4日","excerpt":"","autoDesc":true}');export{z as comp,C as data};
