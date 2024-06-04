import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as t,d as a,e as s,b as n}from"./app-r406UCC8.js";const l={},h=s("p",null,"本页面介绍的一系列 API 都是和小程序数据缓存(数据存储)相关的 API。",-1),r=s("p",null,"可以利用数据缓存存储一些不重要的信息，比如用户的设置、用户的操作历史记录等。",-1),d=n(`<div class="hint-container tip"><p class="hint-container-title">概要</p><p><strong>最常用的三个</strong>:</p><p>异步:</p><ul><li><code>wx.setStorage</code>: 存储某个 <code>value</code> 到某个 <code>key</code></li><li><code>wx.getStorage</code>: 读取某个 <code>key</code> 的 <code>value</code></li><li><code>wx.removeStorage</code>: 删除某个 <code>key</code> 及其对应的 <code>value</code></li></ul><p>它们还有对应的同步 API 版本:</p><ul><li><code>wx.setStorageSync</code></li><li><code>wx.getStorageSync</code></li><li><code>wx.removeStorageSync</code></li></ul><p>清除缓存</p><ul><li><code>wx.clearStorage</code>: 清除全部数据缓存</li><li><code>wx.clearStorageSync</code>: 上方 API 的同步版本</li></ul></div><h2 id="相关注意事项" tabindex="-1"><a class="header-anchor" href="#相关注意事项"><span>相关注意事项</span></a></h2><ul><li><p>除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>当系统空间不足或用户长时间不使用小程序时，数据缓存可能被清理。</p><p>所以要做好数据缓存丢失的逻辑。</p></div></li><li><p>单个 <code>key</code> 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。</p></li></ul><h2 id="wx-setstorage-object-object" tabindex="-1"><a class="header-anchor" href="#wx-setstorage-object-object"><span>wx.setStorage(Object object)</span></a></h2><p>将数据存储在本地缓存中指定的 <code>key</code> 中。会覆盖掉原来该 <code>key</code> 对应的内容。</p><h3 id="setstorage-参数" tabindex="-1"><a class="header-anchor" href="#setstorage-参数"><span>setStorage 参数</span></a></h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>是</td><td>本地缓存中指定的 key</td></tr><tr><td>data</td><td>any</td><td>是</td><td>需要存储的内容。只支持原生类型、Date、及能够通过 <code>JSON.stringify</code> 序列化的对象。</td></tr><tr><td>success</td><td>function</td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table><p>示例代码</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">wx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">setStorage</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  key</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-setstoragesync-string-key-any-data" tabindex="-1"><a class="header-anchor" href="#wx-setstoragesync-string-key-any-data"><span>wx.setStorageSync(string key, any data)</span></a></h2><p><code>wx.setStorage</code> 的同步版本</p><h3 id="setstoragesync-参数" tabindex="-1"><a class="header-anchor" href="#setstoragesync-参数"><span>setStorageSync 参数</span></a></h3><ul><li><p>string key</p><p>本地缓存中指定的 key</p></li><li><p>any data</p><p>需要存储的内容。只支持原生类型、Date、及能够通过 <code>JSON.stringify</code> 序列化的对象。</p></li></ul><p>示例代码</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  wx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">setStorageSync</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-getstorage-object-object" tabindex="-1"><a class="header-anchor" href="#wx-getstorage-object-object"><span>wx.getStorage(Object object)</span></a></h2><p>从本地缓存中异步获取指定 key 的内容</p><h3 id="getstorage-参数" tabindex="-1"><a class="header-anchor" href="#getstorage-参数"><span>getStorage 参数</span></a></h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>是</td><td>本地缓存中指定的 key</td></tr><tr><td>success</td><td>function</td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table><p>Object.success 回调函数</p><p>参数</p><p>Object res</p><table><thead><tr><th>属性</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>data</td><td>any</td><td>key 对应的内容</td></tr></tbody></table><p>示例代码</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">wx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getStorage</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  key</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  success</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    console</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-getstoragesync-string-key" tabindex="-1"><a class="header-anchor" href="#wx-getstoragesync-string-key"><span>wx.getStorageSync(string key)</span></a></h2><p><code>wx.getStorage</code> 的同步版本</p><h3 id="getstoragesync-参数" tabindex="-1"><a class="header-anchor" href="#getstoragesync-参数"><span>getStorageSync 参数</span></a></h3><ul><li>string key: 本地缓存中指定的 <code>key</code></li></ul><h3 id="getstoragesync-返回值" tabindex="-1"><a class="header-anchor" href="#getstoragesync-返回值"><span>getStorageSync 返回值</span></a></h3><ul><li>any data : <code>key</code> 对应的内容</li></ul><p>示例代码</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> value</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> wx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getStorageSync</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // Do something with return value</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // Do something when catch error</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-removestorage-object-object" tabindex="-1"><a class="header-anchor" href="#wx-removestorage-object-object"><span>wx.removeStorage(Object object)</span></a></h2><p>从本地缓存中移除指定 key</p><h3 id="removestorage-参数" tabindex="-1"><a class="header-anchor" href="#removestorage-参数"><span>removeStorage 参数</span></a></h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>是</td><td>本地缓存中指定的 key</td></tr><tr><td>success</td><td>function</td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table><p>示例代码</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">wx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">removeStorage</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  key</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  success</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    console</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-removestoragesync-string-key" tabindex="-1"><a class="header-anchor" href="#wx-removestoragesync-string-key"><span>wx.removeStorageSync(string key)</span></a></h2><p><code>wx.removeStorage</code> 的同步版本</p><h3 id="removestoragesync-参数" tabindex="-1"><a class="header-anchor" href="#removestoragesync-参数"><span>removeStorageSync 参数</span></a></h3><ul><li>string key: 本地缓存中指定的 <code>key</code></li></ul><p>示例代码</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  wx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">removeStorageSync</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // Do something when catch error</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wx-clearstorage-object-object" tabindex="-1"><a class="header-anchor" href="#wx-clearstorage-object-object"><span>wx.clearStorage(Object object)</span></a></h2><p>清理本地数据缓存</p><h3 id="clearstorage-参数" tabindex="-1"><a class="header-anchor" href="#clearstorage-参数"><span>clearStorage 参数</span></a></h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>success</td><td>function</td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table><p>示例代码</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">wx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">clearStorage</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="wx-clearstoragesync" tabindex="-1"><a class="header-anchor" href="#wx-clearstoragesync"><span>wx.clearStorageSync()</span></a></h2><p><code>wx.clearStorage</code> 的同步版本</p><p>示例代码</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  wx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">clearStorageSync</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // Do something when catch error</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,59);function p(k,c){return e(),t("div",null,[h,r,a(" more "),d])}const y=i(l,[["render",p],["__file","storage.html.vue"]]),B=JSON.parse('{"path":"/code/mini-app/guide/service/api/storage.html","title":"数据缓存 API","lang":"zh-CN","frontmatter":{"date":"2020-10-09T00:00:00.000Z","title":"数据缓存 API","icon":"storage","category":"小程序","description":"本页面介绍的一系列 API 都是和小程序数据缓存(数据存储)相关的 API。 可以利用数据缓存存储一些不重要的信息，比如用户的设置、用户的操作历史记录等。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/mini-app/guide/service/api/storage.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"数据缓存 API"}],["meta",{"property":"og:description","content":"本页面介绍的一系列 API 都是和小程序数据缓存(数据存储)相关的 API。 可以利用数据缓存存储一些不重要的信息，比如用户的设置、用户的操作历史记录等。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-10-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据缓存 API\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-10-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"相关注意事项","slug":"相关注意事项","link":"#相关注意事项","children":[]},{"level":2,"title":"wx.setStorage(Object object)","slug":"wx-setstorage-object-object","link":"#wx-setstorage-object-object","children":[{"level":3,"title":"setStorage 参数","slug":"setstorage-参数","link":"#setstorage-参数","children":[]}]},{"level":2,"title":"wx.setStorageSync(string key, any data)","slug":"wx-setstoragesync-string-key-any-data","link":"#wx-setstoragesync-string-key-any-data","children":[{"level":3,"title":"setStorageSync 参数","slug":"setstoragesync-参数","link":"#setstoragesync-参数","children":[]}]},{"level":2,"title":"wx.getStorage(Object object)","slug":"wx-getstorage-object-object","link":"#wx-getstorage-object-object","children":[{"level":3,"title":"getStorage 参数","slug":"getstorage-参数","link":"#getstorage-参数","children":[]}]},{"level":2,"title":"wx.getStorageSync(string key)","slug":"wx-getstoragesync-string-key","link":"#wx-getstoragesync-string-key","children":[{"level":3,"title":"getStorageSync 参数","slug":"getstoragesync-参数","link":"#getstoragesync-参数","children":[]},{"level":3,"title":"getStorageSync 返回值","slug":"getstoragesync-返回值","link":"#getstoragesync-返回值","children":[]}]},{"level":2,"title":"wx.removeStorage(Object object)","slug":"wx-removestorage-object-object","link":"#wx-removestorage-object-object","children":[{"level":3,"title":"removeStorage 参数","slug":"removestorage-参数","link":"#removestorage-参数","children":[]}]},{"level":2,"title":"wx.removeStorageSync(string key)","slug":"wx-removestoragesync-string-key","link":"#wx-removestoragesync-string-key","children":[{"level":3,"title":"removeStorageSync 参数","slug":"removestoragesync-参数","link":"#removestoragesync-参数","children":[]}]},{"level":2,"title":"wx.clearStorage(Object object)","slug":"wx-clearstorage-object-object","link":"#wx-clearstorage-object-object","children":[{"level":3,"title":"clearStorage 参数","slug":"clearstorage-参数","link":"#clearstorage-参数","children":[]}]},{"level":2,"title":"wx.clearStorageSync()","slug":"wx-clearstoragesync","link":"#wx-clearstoragesync","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":3.05,"words":916},"filePathRelative":"code/mini-app/guide/service/api/storage.md","localizedDate":"2020年10月9日","excerpt":"<p>本页面介绍的一系列 API 都是和小程序数据缓存(数据存储)相关的 API。</p>\\n<p>可以利用数据缓存存储一些不重要的信息，比如用户的设置、用户的操作历史记录等。</p>\\n","autoDesc":true}');export{y as comp,B as data};
