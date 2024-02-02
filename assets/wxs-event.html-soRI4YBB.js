import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as p,c,d as n,e as s,a as t,b as l}from"./app-odku2cZ-.js";const u="/assets/interative-model-7P6a80uY.png",i={},r=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"此部分在初步学习小程序的时候直接略过即可。")],-1),d=n("h2",{id:"背景",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#背景"},[n("span",null,"背景")])],-1),k=n("code",null,"touchmove",-1),v={href:"https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"touchmove",-1),h=l('<ol><li><p>touchmove 事件从视图层(Webview)抛到逻辑层(App Service)</p></li><li><p>逻辑层(App Service)处理 touchmove 事件，再通过 setData 来改变 B 的位置</p></li></ol><p>一次 touchmove 的响应需要经过 2 次的逻辑层和渲染层的通信以及一次渲染，通信的耗时比较大。此外 <code>setData</code> 渲染也会阻塞其它脚本执行，导致了整个用户交互的动画过程会有延迟。</p><h2 id="实现方案" tabindex="-1"><a class="header-anchor" href="#实现方案"><span>实现方案</span></a></h2><p>本方案基本的思路是减少通信的次数，让事件在视图层(Webview)响应。小程序的框架分为视图层(Webview)和逻辑层(App Service)，这样分层的目的是管控，开发者的代码只能运行在逻辑层(App Service)，而这个思路就必须要让开发者的代码运行在视图层(Webview)，如下图所示的流程:</p><figure><img src="'+u+`" alt="流程演示" tabindex="0" loading="lazy"><figcaption>流程演示</figcaption></figure><p>使用 WXS 函数用来响应小程序事件，目前只能响应内置组件的事件，不支持自定义组件事件。WXS 函数的除了纯逻辑的运算，还可以通过封装好的 <code>ComponentDescriptor</code> 实例来访问以及设置组件的 class 和样式，对于交互动画，设置 style 和 class 足够了。</p><p>WXS 函数的例子如下:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">wxsFunction</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> ownerInstance</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> instance <span class="token operator">=</span> ownerInstance<span class="token punctuation">.</span><span class="token function">selectComponent</span><span class="token punctuation">(</span><span class="token string">&quot;.classSelector&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回组件的实例</span>
  instance<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;font-size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;14px&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 支持 rpx</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  instance<span class="token punctuation">.</span><span class="token function">getDataset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  instance<span class="token punctuation">.</span><span class="token function">setClass</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 不往上冒泡，相当于调用了同时调用了 stopPropagation 和 preventDefault</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中入参 <code>event</code> 是小程序事件对象基础上多了 <code>event.instance</code> 来表示触发事件的组件的 <code>ComponentDescriptor</code> 实例。<code>ownerInstance</code> 表示的是触发事件的组件所在的组件的 <code>ComponentDescriptor</code> 实例，如果触发事件的组件是在页面内的，<code>ownerInstance</code> 表示的是页面实例。</p><h2 id="componentdescriptor" tabindex="-1"><a class="header-anchor" href="#componentdescriptor"><span>ComponentDescriptor</span></a></h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h3><table><thead><tr><th>方法</th><th>参数</th><th>描述</th><th>最低版本</th></tr></thead><tbody><tr><td>selectComponent</td><td>selector 对象</td><td>返回组件的 ComponentDescriptor 实例。</td><td></td></tr><tr><td>selectAllComponents</td><td>selector 对象数组</td><td>返回组件的 ComponentDescriptor 实例数组。</td><td></td></tr><tr><td>setStyle</td><td>Object/string</td><td>设置组件样式，支持 rpx。设置的样式优先级比组件 wxml 里面定义的样式高。不能设置最顶层页面的样式。</td><td></td></tr><tr><td>addClass/removeClass/ hasClass</td><td>string</td><td>设置组件的 class。设置的 class 优先级比组件 wxml 里面定义的 class 高。不能设置最顶层页面的 class。</td><td></td></tr><tr><td>getDataset</td><td>无</td><td>返回当前组件/页面的 dataset 对象</td><td></td></tr><tr><td>callMethod</td><td>(funcName:string, args:object)</td><td>调用当前组件/页面在逻辑层(App Service)定义的函数。funcName 表示函数名称，args 表示函数的参数。</td><td></td></tr><tr><td>requestAnimationFrame</td><td>Function</td><td>和原生 requestAnimationFrame 一样。用于设置动画。</td><td></td></tr><tr><td>getState</td><td>无</td><td>返回一个 object 对象，当有局部变量需要存储起来后续使用的时候用这个方法。</td><td></td></tr><tr><td>triggerEvent</td><td>(eventName, detail)</td><td>和组件的 triggerEvent 一致。</td><td></td></tr><tr><td>getComputedStyle</td><td>string[]</td><td>参数与 SelectorQuery 的 computedStyle 一致。</td><td>2.11.2</td></tr></tbody></table><h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h3><p>WXML 定义事件:</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wxs</span> <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./test.wxs<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">change:</span>prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{test.propObserver}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{propValue}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">bindtouchmove</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{test.touchmove}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>movable<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>上面的 <code>change:prop</code>(属性前面带 <code>change:</code> 前缀)是在 prop 属性被设置的时候触发 WXS 函数，值必须用 <code>{{}}</code> 括起来。类似 <code>Component</code> 定义的 <code>properties</code> 里面的 <code>observer</code> 属性，在 <code>setData({propValue: newValue})</code> 调用之后会触发。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>WXS 函数必须用 <code>{{}}</code> 括起来。当 <code>prop</code> 的值被设置 WXS 函数就会触发，而不只是值发生改变，所以在页面初始化的时候会调用一次 WxsPropObserver 的函数。</p></div><p>WXS 文件 test.wxs 里面定义并导出事件处理函数和属性改变触发的函数:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">touchmove</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> instance</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;log event&quot;</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">propObserver</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> ownerInstance<span class="token punctuation">,</span> instance</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;prop observer&quot;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,19),g={href:"https://developers.weixin.qq.com/s/L1G0Dkmc7G8a",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"tips",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tips"},[n("span",null,"Tips")])],-1),f=n("ol",null,[n("li",null,"目前还不支持原生组件的事件、input 和 textarea 组件的 bindinput 事件"),n("li",null,[s("目前在 WXS 函数里面仅支持 "),n("code",null,"console.log"),s(" 方式打日志定位问题，注意连续的重复日志会被过滤掉。")])],-1);function x(_,q){const a=o("ExternalLinkIcon");return p(),c("div",null,[r,d,n("p",null,[s("有频繁用户交互的效果在小程序上表现是比较卡顿的，例如页面有 2 个元素 A 和 B，用户在 A 上做 "),k,s(" 手势，要求 B 也跟随移动，"),n("a",v,[s("movable-view"),t(a)]),s(" 就是一个典型的例子。一次 "),m,s(" 事件的响应过程为:")]),h,n("p",null,[s("更多示例请 "),n("a",g,[s("在开发者工具中预览效果"),t(a)])]),b,f])}const y=e(i,[["render",x],["__file","wxs-event.html.vue"]]);export{y as default};
