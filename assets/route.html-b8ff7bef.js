import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as o,b as n,d as c,a as i,f as a}from"./app-27839578.js";const l={},d=a('<h1 id="路由-api" tabindex="-1"><a class="header-anchor" href="#路由-api" aria-hidden="true">#</a> 路由 API</h1><p>本页面介绍的一系列 API 都是和小程序路由(导航)相关的 API。</p><p>可以通过这些 API，自定义小程序的页面导航逻辑。</p><div class="hint-container tip"><p class="hint-container-title">概要</p><p>最常用的两个:</p><ul><li><code>wx.navigateTo</code>: 导航到一个新页面</li><li><code>wx.navigateBack</code>: 返回上一层(上 n 层)页面</li></ul><p>不太常用的三个:</p><ul><li><code>wx.redirectTo</code>: 将当前页面重定向到一个新的页面</li><li><code>wx.switchTab</code>: 到转到 Tabbar 的页面并关闭其他页面</li><li><code>wx.reLaunch</code>: 关闭小程序所有页面，并打开指定页面</li></ul></div><h2 id="wx-navigateto-object-object" tabindex="-1"><a class="header-anchor" href="#wx-navigateto-object-object" aria-hidden="true">#</a> wx.navigateTo(Object object)</h2><p>保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 <code>wx.navigateBack</code> 可以返回到原页面。小程序中页面栈最多十层。</p><h3 id="navigateto-参数" tabindex="-1"><a class="header-anchor" href="#navigateto-参数" aria-hidden="true">#</a> navigateTo 参数</h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>是</td><td>需要跳转的应用内非 tabBar 的页面的路径, 路径后可以带参数。参数与路径之间使用 <code>?</code> 分隔，参数键与参数值用 <code>=</code> 相连，不同参数用 <code>&amp;</code> 分隔；如 <code>&#39;path?key=value&amp;key2=value2&#39;</code></td></tr><tr><td>events</td><td>Object</td><td>否</td><td>页面间通信接口，用于监听被打开页面发送到当前页面的数据。<br>基础库 2.7.3 开始支持</td></tr><tr><td>success</td><td>function</td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table>',9),u={id:"navigatetoobject-success",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#navigatetoobject-success","aria-hidden":"true"},"#",-1),k=a(`<p>参数</p><p>Object res</p><table><thead><tr><th>属性</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>eventChannel</td><td>EventChannel</td><td>和被打开页面进行通信</td></tr></tbody></table><p>示例代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;test?id=1&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">events</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据</span>
    <span class="token function">acceptDataFromOpenedPage</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">someEvent</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 通过 eventChannel 向被打开页面传送数据</span>
    res<span class="token punctuation">.</span>eventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;acceptDataFromOpenerPage&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//test.js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>option<span class="token punctuation">.</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> eventChannel <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getOpenerEventChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    eventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;acceptDataFromOpenedPage&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    eventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;someEvent&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 监听a cceptDataFromOpenerPage 事件，获取上一页面通过 eventChannel 传送到当前页面的数据</span>
    eventChannel<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;acceptDataFromOpenerPage&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-navigateback-object-object" tabindex="-1"><a class="header-anchor" href="#wx-navigateback-object-object" aria-hidden="true">#</a> wx.navigateBack(Object object)</h2><p>关闭当前页面，返回上一页面或多级页面。可通过 <code>getCurrentPages</code> 获取当前的页面栈，决定需要返回几层。</p><h3 id="navigateback-参数" tabindex="-1"><a class="header-anchor" href="#navigateback-参数" aria-hidden="true">#</a> navigateBack 参数</h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>delta</td><td>number</td><td>1</td><td>否</td><td>返回的页面数，如果 delta 大于现有页面数，则返回到首页。</td></tr><tr><td>success</td><td>function</td><td></td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td></td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td></td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table><p>示例代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 注意: 调用 navigateTo 跳转时，调用该方法的页面会被加入堆栈，而 redirectTo 方法则不会。见下方示例代码</span>

<span class="token comment">// 此处是A页面</span>
wx<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;B?id=1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 此处是B页面</span>
wx<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;C?id=1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 在C页面内 navigateBack，将返回A页面</span>
wx<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">delta</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-redirectto-object-object" tabindex="-1"><a class="header-anchor" href="#wx-redirectto-object-object" aria-hidden="true">#</a> wx.redirectTo(Object object)</h2><p>关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。</p><h3 id="redirectto-参数" tabindex="-1"><a class="header-anchor" href="#redirectto-参数" aria-hidden="true">#</a> redirectTo 参数</h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>是</td><td>需要跳转的应用内非 tabBar 的页面的路径, 路径后可以带参数。参数与路径之间使用 <code>?</code> 分隔，参数键与参数值用 <code>=</code> 相连，不同参数用 <code>&amp;</code> 分隔；如 <code>&#39;path?key=value&amp;key2=value2&#39;</code></td></tr><tr><td>success</td><td>function</td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table><p>示例代码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">redirectTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;test?id=1&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="wx-switchtab-object-object" tabindex="-1"><a class="header-anchor" href="#wx-switchtab-object-object" aria-hidden="true">#</a> wx.switchTab(Object object)</h2><p>跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面</p><h3 id="switchtab-参数" tabindex="-1"><a class="header-anchor" href="#switchtab-参数" aria-hidden="true">#</a> switchTab 参数</h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>url</td><td>string</td><td></td><td>是</td><td>需要跳转的 tabBar 页面的路径(需在 app.json 的 tabBar 字段定义的页面)，路径后不能带参数。</td></tr><tr><td>success</td><td>function</td><td></td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td></td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td></td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table><p>示例代码</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tabBar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;首页&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;其他&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;/index&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="wx-relaunch-object-object" tabindex="-1"><a class="header-anchor" href="#wx-relaunch-object-object" aria-hidden="true">#</a> wx.reLaunch(Object object)</h2><p>关闭所有页面，打开到应用内的某个页面</p><h3 id="relaunch-参数" tabindex="-1"><a class="header-anchor" href="#relaunch-参数" aria-hidden="true">#</a> reLaunch 参数</h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>是</td><td>需要跳转的应用内页面路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&amp;分隔；如 <code>&#39;path?key=value&amp;key2=value2&#39;</code></td></tr><tr><td>success</td><td>function</td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table><p>示例代码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">reLaunch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;test?id=1&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// test</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>option<span class="token punctuation">.</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,36);function v(h,b){const t=e("Badge");return p(),o("div",null,[d,n("h3",u,[r,c(" navigateToObject.success "),i(t,{text:"初学无需掌握",type:"grey"})]),k])}const j=s(l,[["render",v],["__file","route.html.vue"]]);export{j as default};
