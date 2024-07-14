import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as r,c,e,f as n,a as o,d,w as i,b as a}from"./app-DHOHoluL.js";const h={},b=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"注意"),e("p",null,"App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。")],-1),m=a('<h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><h3 id="object-object" tabindex="-1"><a class="header-anchor" href="#object-object"><span>Object object</span></a></h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>onLaunch</td><td>function</td><td></td><td>否</td><td>生命周期回调——监听小程序初始化。</td><td></td></tr><tr><td>onShow</td><td>function</td><td></td><td>否</td><td>生命周期回调——监听小程序启动或切前台。</td><td></td></tr><tr><td>onHide</td><td>function</td><td></td><td>否</td><td>生命周期回调——监听小程序切后台。</td><td></td></tr><tr><td>onError</td><td>function</td><td></td><td>否</td><td>错误监听函数。</td><td></td></tr><tr><td>onPageNotFound</td><td>function</td><td></td><td>否</td><td>页面不存在监听函数。</td><td>1.9.90</td></tr><tr><td>onUnhandledRejection</td><td>function</td><td></td><td>否</td><td>未处理的 Promise 拒绝事件监听函数。</td><td>2.10.0</td></tr><tr><td>onThemeChange</td><td>function</td><td></td><td>否</td><td>监听系统主题变化</td><td>2.11.0</td></tr></tbody></table><p>| 其他 | any | | 否 | 开发者可以添加任意的函数或数据变量到 <code>Object</code> 参数中，用 <code>this</code> 可以访问 |</p>',4),g=a(`<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">App</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
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
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="onlaunch-object-object" tabindex="-1"><a class="header-anchor" href="#onlaunch-object-object"><span>onLaunch(Object object)</span></a></h3><p>小程序初始化完成时触发，全局只触发一次。参数也可以使用 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html" target="_blank" rel="noopener noreferrer"><code>wx.getLaunchOptionsSync</code></a> 获取。</p><p>参数: 与 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html" target="_blank" rel="noopener noreferrer"><code>wx.getLaunchOptionsSync</code></a> 一致</p><h3 id="onshow-object-object" tabindex="-1"><a class="header-anchor" href="#onshow-object-object"><span>onShow(Object object)</span></a></h3><p>小程序启动，或从后台进入前台显示时触发。也可以使用 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html" target="_blank" rel="noopener noreferrer"><code>wx.onAppShow</code></a> 绑定监听。</p><p>参数: 与 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html" target="_blank" rel="noopener noreferrer"><code>wx.onAppShow</code></a> 一致</p><h2 id="onhide" tabindex="-1"><a class="header-anchor" href="#onhide"><span>onHide()</span></a></h2><p>小程序从前台进入后台时触发。也可以使用 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppHide.html" target="_blank" rel="noopener noreferrer"><code>wx.onAppHide</code></a> 绑定监听。</p><h2 id="onerror-string-error" tabindex="-1"><a class="header-anchor" href="#onerror-string-error"><span>onError(String error)</span></a></h2><p>小程序发生脚本错误或 API 调用报错时触发。也可以使用 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html" target="_blank" rel="noopener noreferrer"><code>wx.onError</code></a> 绑定监听。</p><p>参数: 与 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html" target="_blank" rel="noopener noreferrer"><code>wx.onError</code></a> 一致</p><h2 id="onpagenotfound-object-object" tabindex="-1"><a class="header-anchor" href="#onpagenotfound-object-object"><span>onPageNotFound(Object object)</span></a></h2><p>小程序要打开的页面不存在时触发。也可以使用 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html" target="_blank" rel="noopener noreferrer"><code>wx.onPageNotFound</code></a> 绑定监听。注意事项请参考 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html" target="_blank" rel="noopener noreferrer"><code>wx.onPageNotFound</code></a>。</p><p>参数: 与 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html" target="_blank" rel="noopener noreferrer"><code>wx.onPageNotFound</code></a> 一致</p><p>示例代码:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">App</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  onPageNotFound</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">res</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">    wx</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">redirectTo</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">      url</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">pages/...</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">    }</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 如果是 tabbar 页面，请使用 wx.switchTab</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre></div><h2 id="onunhandledrejection-object-object" tabindex="-1"><a class="header-anchor" href="#onunhandledrejection-object-object"><span>onUnhandledRejection(Object object)</span></a></h2><blockquote><p>基础库 2.10.0 开始支持</p></blockquote><p>小程序有未处理的 Promise 拒绝时触发。也可以使用 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html" target="_blank" rel="noopener noreferrer"><code>wx.onUnhandledRejection</code></a> 绑定监听。注意事项请参考 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html" target="_blank" rel="noopener noreferrer"><code>wx.onUnhandledRejection</code></a>。</p><p>参数: 与 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html" target="_blank" rel="noopener noreferrer"><code>wx.onUnhandledRejection</code></a> 一致</p><h2 id="onthemechange-object-object" tabindex="-1"><a class="header-anchor" href="#onthemechange-object-object"><span>onThemeChange(Object object)</span></a></h2><blockquote><p>基础库 2.11.0 开始支持</p></blockquote><p>系统切换主题时触发。也可以使用 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html" target="_blank" rel="noopener noreferrer"><code>wx.onThemeChange</code></a> 绑定监听。</p><p>参数: 与 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html" target="_blank" rel="noopener noreferrer"><code>wx.onThemeChange</code></a> 一致</p><h2 id="appobject-getapp-object-object" tabindex="-1"><a class="header-anchor" href="#appobject-getapp-object-object"><span>AppObject getApp(Object object)</span></a></h2><p>获取到小程序全局唯一的 App 实例。</p><h3 id="getapp-参数" tabindex="-1"><a class="header-anchor" href="#getapp-参数"><span>getApp 参数</span></a></h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>allowDefault</td><td>boolean</td><td>false</td><td>否</td><td>在 <code>App</code> 未定义时返回默认实现。当 <code>App</code> 被调用时，默认实现中定义的属性会被覆盖合并到 App 中。一般用于独立分包</td><td>2.2.4</td></tr></tbody></table><p>示例代码:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">// other.js</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> appInstance</span><span style="color:#81A1C1;"> =</span><span style="color:#88C0D0;"> getApp</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">appInstance</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">globalData</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // I am global data</span></span></code></pre></div><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li>不要在定义于 <code>App()</code> 内的函数中，或调用 <code>App</code> 前调用 <code>getApp()</code> ，使用 <code>this</code> 就可以拿到 app 实例。</li><li>通过 <code>getApp()</code> 获取实例之后，不要私自调用生命周期函数。</li></ul></div>`,33);function E(j,y){const s=t("Badge"),p=t("RouteLink");return r(),c("div",null,[e("p",null,[n("注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。 "),o(s,{text:"重要",type:"error"})]),b,d(" more "),m,e("p",null,[n("关于小程序前后台的定义和小程序的运行机制，请参考 "),o(p,{to:"/code/mini-app/guide/service/run.html"},{default:i(()=>[n("运行机制")]),_:1}),n("。")]),g])}const v=l(h,[["render",E],["__file","app.html.vue"]]),f=JSON.parse('{"path":"/code/mini-app/guide/service/app.html","title":"App","lang":"zh-CN","frontmatter":{"date":"2020-10-09T00:00:00.000Z","title":"App","icon":"app","category":"小程序","description":"注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。 注意 App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/mini-app/guide/service/app.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"App"}],["meta",{"property":"og:description","content":"注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。 注意 App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T18:01:12.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-10-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T18:01:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"App\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-10-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T18:01:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[{"level":3,"title":"Object object","slug":"object-object","link":"#object-object","children":[]},{"level":3,"title":"onLaunch(Object object)","slug":"onlaunch-object-object","link":"#onlaunch-object-object","children":[]},{"level":3,"title":"onShow(Object object)","slug":"onshow-object-object","link":"#onshow-object-object","children":[]}]},{"level":2,"title":"onHide()","slug":"onhide","link":"#onhide","children":[]},{"level":2,"title":"onError(String error)","slug":"onerror-string-error","link":"#onerror-string-error","children":[]},{"level":2,"title":"onPageNotFound(Object object)","slug":"onpagenotfound-object-object","link":"#onpagenotfound-object-object","children":[]},{"level":2,"title":"onUnhandledRejection(Object object)","slug":"onunhandledrejection-object-object","link":"#onunhandledrejection-object-object","children":[]},{"level":2,"title":"onThemeChange(Object object)","slug":"onthemechange-object-object","link":"#onthemechange-object-object","children":[]},{"level":2,"title":"AppObject getApp(Object object)","slug":"appobject-getapp-object-object","link":"#appobject-getapp-object-object","children":[{"level":3,"title":"getApp 参数","slug":"getapp-参数","link":"#getapp-参数","children":[]}]}],"git":{"createdTime":1591204114000,"updatedTime":1706205672000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":7},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":2.6,"words":781},"filePathRelative":"code/mini-app/guide/service/app.md","localizedDate":"2020年10月9日","excerpt":"<p>注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。 </p>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。</p>\\n</div>\\n","autoDesc":true}');export{v as comp,f as data};
