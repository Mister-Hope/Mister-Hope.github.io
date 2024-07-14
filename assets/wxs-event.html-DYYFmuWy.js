import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as t,b as n}from"./app-DHOHoluL.js";const o="/assets/interative-model-Ds_przS5.png",a={},l=n('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>此部分在初步学习小程序的时候直接略过即可。</p></div><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>有频繁用户交互的效果在小程序上表现是比较卡顿的，例如页面有 2 个元素 A 和 B，用户在 A 上做 <code>touchmove</code> 手势，要求 B 也跟随移动，<a href="https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html" target="_blank" rel="noopener noreferrer">movable-view</a> 就是一个典型的例子。一次 <code>touchmove</code> 事件的响应过程为:</p><ol><li><p>touchmove 事件从视图层(Webview)抛到逻辑层(App Service)</p></li><li><p>逻辑层(App Service)处理 touchmove 事件，再通过 setData 来改变 B 的位置</p></li></ol><p>一次 touchmove 的响应需要经过 2 次的逻辑层和渲染层的通信以及一次渲染，通信的耗时比较大。此外 <code>setData</code> 渲染也会阻塞其它脚本执行，导致了整个用户交互的动画过程会有延迟。</p><h2 id="实现方案" tabindex="-1"><a class="header-anchor" href="#实现方案"><span>实现方案</span></a></h2><p>本方案基本的思路是减少通信的次数，让事件在视图层(Webview)响应。小程序的框架分为视图层(Webview)和逻辑层(App Service)，这样分层的目的是管控，开发者的代码只能运行在逻辑层(App Service)，而这个思路就必须要让开发者的代码运行在视图层(Webview)，如下图所示的流程:</p><figure><img src="'+o+`" alt="流程演示" tabindex="0" loading="lazy"><figcaption>流程演示</figcaption></figure><p>使用 WXS 函数用来响应小程序事件，目前只能响应内置组件的事件，不支持自定义组件事件。WXS 函数的除了纯逻辑的运算，还可以通过封装好的 <code>ComponentDescriptor</code> 实例来访问以及设置组件的 class 和样式，对于交互动画，设置 style 和 class 足够了。</p><p>WXS 函数的例子如下:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">var</span><span style="color:#88C0D0;"> wxsFunction</span><span style="color:#81A1C1;"> =</span><span style="color:#81A1C1;"> function</span><span style="color:#ECEFF4;"> (</span><span style="color:#D8DEE9;">event</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> ownerInstance</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  var</span><span style="color:#D8DEE9;"> instance</span><span style="color:#81A1C1;"> =</span><span style="color:#D8DEE9;"> ownerInstance</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">selectComponent</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">.classSelector</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 返回组件的实例</span></span>
<span class="line"><span style="color:#D8DEE9;">  instance</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">setStyle</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#ECEFF4;">    &quot;</span><span style="color:#A3BE8C;">font-size</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">14px</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#616E88;"> // 支持 rpx</span></span>
<span class="line"><span style="color:#ECEFF4;">  }</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">  instance</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getDataset</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">  instance</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">setClass</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">className</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#616E88;">  // ...</span></span>
<span class="line"><span style="color:#81A1C1;">  return</span><span style="color:#81A1C1;"> false;</span><span style="color:#616E88;"> // 不往上冒泡，相当于调用了同时调用了 stopPropagation 和 preventDefault</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中入参 <code>event</code> 是小程序事件对象基础上多了 <code>event.instance</code> 来表示触发事件的组件的 <code>ComponentDescriptor</code> 实例。<code>ownerInstance</code> 表示的是触发事件的组件所在的组件的 <code>ComponentDescriptor</code> 实例，如果触发事件的组件是在页面内的，<code>ownerInstance</code> 表示的是页面实例。</p><h2 id="componentdescriptor" tabindex="-1"><a class="header-anchor" href="#componentdescriptor"><span>ComponentDescriptor</span></a></h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h3><table><thead><tr><th>方法</th><th>参数</th><th>描述</th><th>最低版本</th></tr></thead><tbody><tr><td>selectComponent</td><td>selector 对象</td><td>返回组件的 ComponentDescriptor 实例。</td><td></td></tr><tr><td>selectAllComponents</td><td>selector 对象数组</td><td>返回组件的 ComponentDescriptor 实例数组。</td><td></td></tr><tr><td>setStyle</td><td>Object/string</td><td>设置组件样式，支持 rpx。设置的样式优先级比组件 wxml 里面定义的样式高。不能设置最顶层页面的样式。</td><td></td></tr><tr><td>addClass/removeClass/ hasClass</td><td>string</td><td>设置组件的 class。设置的 class 优先级比组件 wxml 里面定义的 class 高。不能设置最顶层页面的 class。</td><td></td></tr><tr><td>getDataset</td><td>无</td><td>返回当前组件/页面的 dataset 对象</td><td></td></tr><tr><td>callMethod</td><td>(funcName:string, args:object)</td><td>调用当前组件/页面在逻辑层(App Service)定义的函数。funcName 表示函数名称，args 表示函数的参数。</td><td></td></tr><tr><td>requestAnimationFrame</td><td>Function</td><td>和原生 requestAnimationFrame 一样。用于设置动画。</td><td></td></tr><tr><td>getState</td><td>无</td><td>返回一个 object 对象，当有局部变量需要存储起来后续使用的时候用这个方法。</td><td></td></tr><tr><td>triggerEvent</td><td>(eventName, detail)</td><td>和组件的 triggerEvent 一致。</td><td></td></tr><tr><td>getComputedStyle</td><td>string[]</td><td>参数与 SelectorQuery 的 computedStyle 一致。</td><td>2.11.2</td></tr></tbody></table><h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h3><p>WXML 定义事件:</p><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">&lt;wxs</span><span style="color:#8FBCBB;"> module</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">test</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;"> src</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">./test.wxs</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;view</span><span style="color:#8FBCBB;"> change</span><span style="color:#ECEFF4;">:</span><span style="color:#8FBCBB;">prop</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{test.propObserver}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;"> prop</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{propValue}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;"> bindtouchmove</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">{{test.touchmove}}</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;"> class</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">movable</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> /&gt;</span></span></code></pre></div><p>上面的 <code>change:prop</code>(属性前面带 <code>change:</code> 前缀)是在 prop 属性被设置的时候触发 WXS 函数，值必须用 <code>{{}}</code> 括起来。类似 <code>Component</code> 定义的 <code>properties</code> 里面的 <code>observer</code> 属性，在 <code>setData({propValue: newValue})</code> 调用之后会触发。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>WXS 函数必须用 <code>{{}}</code> 括起来。当 <code>prop</code> 的值被设置 WXS 函数就会触发，而不只是值发生改变，所以在页面初始化的时候会调用一次 WxsPropObserver 的函数。</p></div><p>WXS 文件 test.wxs 里面定义并导出事件处理函数和属性改变触发的函数:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#8FBCBB;">module</span><span style="color:#ECEFF4;">.</span><span style="color:#8FBCBB;">exports</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  touchmove</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;"> function</span><span style="color:#ECEFF4;"> (</span><span style="color:#D8DEE9;">event</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> instance</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">    console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">log event</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> JSON</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">stringify</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">event</span><span style="color:#D8DEE9FF;">))</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#88C0D0;">  propObserver</span><span style="color:#ECEFF4;">:</span><span style="color:#81A1C1;"> function</span><span style="color:#ECEFF4;"> (</span><span style="color:#D8DEE9;">newValue</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> oldValue</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> ownerInstance</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> instance</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9;">    console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">prop observer</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> newValue</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> oldValue</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span></code></pre></div><p>更多示例请 <a href="https://developers.weixin.qq.com/s/L1G0Dkmc7G8a" target="_blank" rel="noopener noreferrer">在开发者工具中预览效果</a></p><h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span>Tips</span></a></h2><ol><li>目前还不支持原生组件的事件、input 和 textarea 组件的 bindinput 事件</li><li>目前在 WXS 函数里面仅支持 <code>console.log</code> 方式打日志定位问题，注意连续的重复日志会被过滤掉。</li></ol>`,25),p=[l];function r(c,i){return e(),t("div",null,p)}const y=s(a,[["render",r],["__file","wxs-event.html.vue"]]),F=JSON.parse('{"path":"/code/mini-app/guide/view/wxs-event.html","title":"WXS 事件","lang":"zh-CN","frontmatter":{"date":"2020-12-18T00:00:00.000Z","title":"WXS 事件","icon":"activity","category":"小程序","description":"提示 此部分在初步学习小程序的时候直接略过即可。 背景 有频繁用户交互的效果在小程序上表现是比较卡顿的，例如页面有 2 个元素 A 和 B，用户在 A 上做 touchmove 手势，要求 B 也跟随移动，movable-view 就是一个典型的例子。一次 touchmove 事件的响应过程为: touchmove 事件从视图层(Webview)抛到逻...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/mini-app/guide/view/wxs-event.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"WXS 事件"}],["meta",{"property":"og:description","content":"提示 此部分在初步学习小程序的时候直接略过即可。 背景 有频繁用户交互的效果在小程序上表现是比较卡顿的，例如页面有 2 个元素 A 和 B，用户在 A 上做 touchmove 手势，要求 B 也跟随移动，movable-view 就是一个典型的例子。一次 touchmove 事件的响应过程为: touchmove 事件从视图层(Webview)抛到逻..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T18:01:12.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-12-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T18:01:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WXS 事件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T18:01:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"实现方案","slug":"实现方案","link":"#实现方案","children":[]},{"level":2,"title":"ComponentDescriptor","slug":"componentdescriptor","link":"#componentdescriptor","children":[{"level":3,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":3,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]}]},{"level":2,"title":"Tips","slug":"tips","link":"#tips","children":[]}],"git":{"createdTime":1610980523000,"updatedTime":1706205672000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":3.58,"words":1073},"filePathRelative":"code/mini-app/guide/view/wxs-event.md","localizedDate":"2020年12月18日","excerpt":"","autoDesc":true}');export{y as comp,F as data};
