import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as t,c as r,e as s,f as n,a,w as c,b as e}from"./app-DHOHoluL.js";const d={},E={id:"注册小程序",tabindex:"-1"},F={class:"header-anchor",href:"#注册小程序"},y=s("p",null,[n("每个小程序都需要在 "),s("code",null,"app.js"),n(" 中调用 "),s("code",null,"App"),n(" 方法注册小程序示例，绑定生命周期回调函数、错误监听和页面不存在监听函数等。")],-1),v=e(`<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">// app.js</span></span>
<span class="line"><span style="color:#88C0D0;">App</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  onLaunch</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">options</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">    // Do something initial when launch.</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#88C0D0;">  onShow</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">options</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">    // Do something when show.</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#88C0D0;">  onHide</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">    // Do something when hide.</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#88C0D0;">  onError</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">msg</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">    console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">msg</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#88C0D0;">  globalData</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">I am global data</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整个小程序只有一个 App 实例，是全部页面共享的。</p><p>通过 <code>getApp</code> 方法获取到全局唯一的 App 示例，获取 App 上的数据或调用注册在 App 上的函数。</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">// xxx.js</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> appInstance</span><span style="color:#81A1C1;"> =</span><span style="color:#88C0D0;"> getApp</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">appInstance</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">globalData</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // I am global data</span></span></code></pre></div><h2 id="注册页面" tabindex="-1"><a class="header-anchor" href="#注册页面"><span>注册页面</span></a></h2><p>对于小程序中的每个页面，都需要在页面对应的 js 文件中进行注册，指定页面的初始数据、生命周期回调、事件处理函数等。</p>`,6),m={id:"使用-page-构造器注册页面",tabindex:"-1"},C={class:"header-anchor",href:"#使用-page-构造器注册页面"},u=e(`<p>简单的页面可以使用 <code>Page()</code> 进行构造。</p><p>代码示例:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">//index.js</span></span>
<span class="line"><span style="color:#88C0D0;">Page</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  data</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    text</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">This is page data.</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#88C0D0;">  onLoad</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">options</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">    // 页面创建时执行</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#88C0D0;">  onShow</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">    // 页面出现在前台时执行</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#88C0D0;">  onReady</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">    // 页面首次渲染完毕时执行</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#88C0D0;">  onHide</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">    // 页面从前台变为后台时执行</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#88C0D0;">  onUnload</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">    // 页面销毁时执行</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#88C0D0;">  onPullDownRefresh</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">    // 触发下拉刷新时执行</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#88C0D0;">  onReachBottom</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">    // 页面触底时执行</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#88C0D0;">  onShareAppMessage</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">    // 页面被用户分享时执行</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#88C0D0;">  onPageScroll</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">    // 页面滚动时执行</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#88C0D0;">  onResize</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">    // 页面尺寸变化时执行</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#88C0D0;">  onTabItemTap</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">    // tab 点击时执行</span></span>
<span class="line"><span style="color:#D8DEE9;">    console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">index</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">    console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">pagePath</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">    console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">text</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#616E88;">  // 事件响应函数</span></span>
<span class="line"><span style="color:#88C0D0;">  viewTap</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">    this</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">setData</span><span style="color:#D8DEE9FF;">(</span></span>
<span class="line"><span style="color:#ECEFF4;">      {</span></span>
<span class="line"><span style="color:#88C0D0;">        text</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Set some data for updating view.</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">      },</span></span>
<span class="line"><span style="color:#ECEFF4;">      ()</span><span style="color:#81A1C1;"> =&gt;</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">        // this is setData callback</span></span>
<span class="line"><span style="color:#ECEFF4;">      },</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    )</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#616E88;">  // 自由数据</span></span>
<span class="line"><span style="color:#88C0D0;">  customData</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    hi</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">MINA</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),D={id:"使用-component-构造器构造页面",tabindex:"-1"},b={class:"header-anchor",href:"#使用-component-构造器构造页面"},h=e(`<p><code>Page</code> 构造器适用于简单的页面。但对于复杂的页面， <code>Page</code> 构造器可能并不好用。</p><p>此时，可以使用 <code>Component</code> 构造器来构造页面。<code>Component</code> 构造器的主要区别是: 方法需要放在 <code>methods: { }</code> 里面。</p><p>代码示例:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">Component</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  data</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    text</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">This is page data.</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#88C0D0;">  methods</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">    onLoad</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">options</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">      // 页面创建时执行</span></span>
<span class="line"><span style="color:#ECEFF4;">    },</span></span>
<span class="line"><span style="color:#88C0D0;">    onPullDownRefresh</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">      // 下拉刷新时执行</span></span>
<span class="line"><span style="color:#ECEFF4;">    },</span></span>
<span class="line"><span style="color:#616E88;">    // 事件响应函数</span></span>
<span class="line"><span style="color:#88C0D0;">    viewTap</span><span style="color:#ECEFF4;">()</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">      // ...</span></span>
<span class="line"><span style="color:#ECEFF4;">    },</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种创建方式非常类似于 自定义组件 ，可以像自定义组件一样使用 <code>behaviors</code> 等高级特性。</p><p>具体细节请阅读 <code>Component</code> 构造器 章节。</p>`,6);function g(A,f){const l=o("Badge"),p=o("RouteLink");return t(),r("div",null,[s("h2",E,[s("a",F,[s("span",null,[n("注册小程序 "),a(l,{text:"重要",type:"error"})])])]),y,s("p",null,[n("详细的参数含义和使用请参考 "),a(p,{to:"/code/mini-app/guide/service/app.html"},{default:c(()=>[n("App 参考文档")]),_:1}),n("。")]),v,s("h3",m,[s("a",C,[s("span",null,[n("使用 Page 构造器注册页面 "),a(l,{text:"重要",type:"error"})])])]),u,s("p",null,[n("详细的参数含义和使用请参考 "),a(p,{to:"/code/mini-app/guide/service/page.html"},{default:c(()=>[n("Page 参考文档")]),_:1}),n("。")]),s("h3",D,[s("a",b,[s("span",null,[n("使用 Component 构造器构造页面 "),a(l,{text:"初学无需了解",type:"grey"})])])]),h])}const k=i(d,[["render",g],["__file","register.html.vue"]]),j=JSON.parse('{"path":"/code/mini-app/guide/service/register.html","title":"注册","lang":"zh-CN","frontmatter":{"date":"2020-10-09T00:00:00.000Z","title":"注册","icon":"config","category":"小程序","description":"注册小程序 每个小程序都需要在 app.js 中调用 App 方法注册小程序示例，绑定生命周期回调函数、错误监听和页面不存在监听函数等。 详细的参数含义和使用请参考 。 整个小程序只有一个 App 实例，是全部页面共享的。 通过 getApp 方法获取到全局唯一的 App 示例，获取 App 上的数据或调用注册在 App 上的函数。 注册页面 对于小程...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/mini-app/guide/service/register.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"注册"}],["meta",{"property":"og:description","content":"注册小程序 每个小程序都需要在 app.js 中调用 App 方法注册小程序示例，绑定生命周期回调函数、错误监听和页面不存在监听函数等。 详细的参数含义和使用请参考 。 整个小程序只有一个 App 实例，是全部页面共享的。 通过 getApp 方法获取到全局唯一的 App 示例，获取 App 上的数据或调用注册在 App 上的函数。 注册页面 对于小程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-10-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"注册\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-10-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"注册小程序","slug":"注册小程序","link":"#注册小程序","children":[]},{"level":2,"title":"注册页面","slug":"注册页面","link":"#注册页面","children":[{"level":3,"title":"使用 Page 构造器注册页面","slug":"使用-page-构造器注册页面","link":"#使用-page-构造器注册页面","children":[]},{"level":3,"title":"使用 Component 构造器构造页面","slug":"使用-component-构造器构造页面","link":"#使用-component-构造器构造页面","children":[]}]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":2.13,"words":638},"filePathRelative":"code/mini-app/guide/service/register.md","localizedDate":"2020年10月9日","excerpt":"","autoDesc":true}');export{k as comp,j as data};
