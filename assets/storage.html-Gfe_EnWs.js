import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,f as e,d as t,b as o}from"./app-50nBCNnt.js";const c={},p=t("p",null,"本页面介绍的一系列 API 都是和小程序数据缓存(数据存储)相关的 API。",-1),r=t("p",null,"可以利用数据缓存存储一些不重要的信息，比如用户的设置、用户的操作历史记录等。",-1),d=o(`<div class="hint-container tip"><p class="hint-container-title">概要</p><p><strong>最常用的三个</strong>:</p><p>异步:</p><ul><li><code>wx.setStorage</code>: 存储某个 <code>value</code> 到某个 <code>key</code></li><li><code>wx.getStorage</code>: 读取某个 <code>key</code> 的 <code>value</code></li><li><code>wx.removeStorage</code>: 删除某个 <code>key</code> 及其对应的 <code>value</code></li></ul><p>它们还有对应的同步 API 版本:</p><ul><li><code>wx.setStorageSync</code></li><li><code>wx.getStorageSync</code></li><li><code>wx.removeStorageSync</code></li></ul><p>清除缓存</p><ul><li><code>wx.clearStorage</code>: 清除全部数据缓存</li><li><code>wx.clearStorageSync</code>: 上方 API 的同步版本</li></ul></div><h2 id="相关注意事项" tabindex="-1"><a class="header-anchor" href="#相关注意事项" aria-hidden="true">#</a> 相关注意事项</h2><ul><li><p>除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>当系统空间不足或用户长时间不使用小程序时，数据缓存可能被清理。</p><p>所以要做好数据缓存丢失的逻辑。</p></div></li><li><p>单个 <code>key</code> 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。</p></li></ul><h2 id="wx-setstorage-object-object" tabindex="-1"><a class="header-anchor" href="#wx-setstorage-object-object" aria-hidden="true">#</a> wx.setStorage(Object object)</h2><p>将数据存储在本地缓存中指定的 <code>key</code> 中。会覆盖掉原来该 <code>key</code> 对应的内容。</p><h3 id="setstorage-参数" tabindex="-1"><a class="header-anchor" href="#setstorage-参数" aria-hidden="true">#</a> setStorage 参数</h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>是</td><td>本地缓存中指定的 key</td></tr><tr><td>data</td><td>any</td><td>是</td><td>需要存储的内容。只支持原生类型、Date、及能够通过 <code>JSON.stringify</code> 序列化的对象。</td></tr><tr><td>success</td><td>function</td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table><p>示例代码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">setStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="wx-setstoragesync-string-key-any-data" tabindex="-1"><a class="header-anchor" href="#wx-setstoragesync-string-key-any-data" aria-hidden="true">#</a> wx.setStorageSync(string key, any data)</h2><p><code>wx.setStorage</code> 的同步版本</p><h3 id="setstoragesync-参数" tabindex="-1"><a class="header-anchor" href="#setstoragesync-参数" aria-hidden="true">#</a> setStorageSync 参数</h3><ul><li><p>string key</p><p>本地缓存中指定的 key</p></li><li><p>any data</p><p>需要存储的内容。只支持原生类型、Date、及能够通过 <code>JSON.stringify</code> 序列化的对象。</p></li></ul><p>示例代码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><h2 id="wx-getstorage-object-object" tabindex="-1"><a class="header-anchor" href="#wx-getstorage-object-object" aria-hidden="true">#</a> wx.getStorage(Object object)</h2><p>从本地缓存中异步获取指定 key 的内容</p><h3 id="getstorage-参数" tabindex="-1"><a class="header-anchor" href="#getstorage-参数" aria-hidden="true">#</a> getStorage 参数</h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>是</td><td>本地缓存中指定的 key</td></tr><tr><td>success</td><td>function</td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table><p>Object.success 回调函数</p><p>参数</p><p>Object res</p><table><thead><tr><th>属性</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>data</td><td>any</td><td>key 对应的内容</td></tr></tbody></table><p>示例代码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">getStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="wx-getstoragesync-string-key" tabindex="-1"><a class="header-anchor" href="#wx-getstoragesync-string-key" aria-hidden="true">#</a> wx.getStorageSync(string key)</h2><p><code>wx.getStorage</code> 的同步版本</p><h3 id="getstoragesync-参数" tabindex="-1"><a class="header-anchor" href="#getstoragesync-参数" aria-hidden="true">#</a> getStorageSync 参数</h3><ul><li>string key: 本地缓存中指定的 <code>key</code></li></ul><h3 id="getstoragesync-返回值" tabindex="-1"><a class="header-anchor" href="#getstoragesync-返回值" aria-hidden="true">#</a> getStorageSync 返回值</h3><ul><li>any data : <code>key</code> 对应的内容</li></ul><p>示例代码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do something with return value</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Do something when catch error</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="wx-removestorage-object-object" tabindex="-1"><a class="header-anchor" href="#wx-removestorage-object-object" aria-hidden="true">#</a> wx.removeStorage(Object object)</h2><p>从本地缓存中移除指定 key</p><h3 id="removestorage-参数" tabindex="-1"><a class="header-anchor" href="#removestorage-参数" aria-hidden="true">#</a> removeStorage 参数</h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>是</td><td>本地缓存中指定的 key</td></tr><tr><td>success</td><td>function</td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table><p>示例代码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">removeStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="wx-removestoragesync-string-key" tabindex="-1"><a class="header-anchor" href="#wx-removestoragesync-string-key" aria-hidden="true">#</a> wx.removeStorageSync(string key)</h2><p><code>wx.removeStorage</code> 的同步版本</p><h3 id="removestoragesync-参数" tabindex="-1"><a class="header-anchor" href="#removestoragesync-参数" aria-hidden="true">#</a> removeStorageSync 参数</h3><ul><li>string key: 本地缓存中指定的 <code>key</code></li></ul><p>示例代码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">removeStorageSync</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Do something when catch error</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="wx-clearstorage-object-object" tabindex="-1"><a class="header-anchor" href="#wx-clearstorage-object-object" aria-hidden="true">#</a> wx.clearStorage(Object object)</h2><p>清理本地数据缓存</p><h3 id="clearstorage-参数" tabindex="-1"><a class="header-anchor" href="#clearstorage-参数" aria-hidden="true">#</a> clearStorage 参数</h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>success</td><td>function</td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table><p>示例代码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">clearStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="wx-clearstoragesync" tabindex="-1"><a class="header-anchor" href="#wx-clearstoragesync" aria-hidden="true">#</a> wx.clearStorageSync()</h2><p><code>wx.clearStorage</code> 的同步版本</p><p>示例代码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">clearStorageSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Do something when catch error</span>
<span class="token punctuation">}</span>
</code></pre></div>`,59);function i(l,u){return n(),s("div",null,[p,r,e(" more "),d])}const g=a(c,[["render",i],["__file","storage.html.vue"]]);export{g as default};
