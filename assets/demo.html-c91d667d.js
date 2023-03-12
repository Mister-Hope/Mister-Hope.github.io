import{_ as s,X as n,Y as a,a1 as e,$ as t,a3 as p}from"./framework-a91f7991.js";const o={},c=t("p",null,"本案例展示了 Mr.Hope 个人编写的 screen 相关的 Vuex 模块。",-1),i=p(`<h2 id="sreen-ts" tabindex="-1"><a class="header-anchor" href="#sreen-ts" aria-hidden="true">#</a> Sreen.ts</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Module <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../state&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">SWState</span> <span class="token punctuation">{</span>
  status<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// service-worker 状态</span>
  error<span class="token operator">?</span><span class="token operator">:</span> Error<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> swState<span class="token operator">:</span> SWState <span class="token operator">=</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> swModule<span class="token operator">:</span> Module<span class="token operator">&lt;</span>SWState<span class="token punctuation">,</span> BaseState<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  state<span class="token operator">:</span> swState<span class="token punctuation">,</span>
  mutations<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@description</span>: 设置 Service Worker 状态
     *
     * <span class="token keyword">@param</span> <span class="token parameter">state</span> swState
     * <span class="token keyword">@param</span> <span class="token parameter">status</span> ServiceWorker状态
     */</span>
    <span class="token function">swState</span><span class="token punctuation">(</span>state<span class="token operator">:</span> SWState<span class="token punctuation">,</span> status<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>status <span class="token operator">=</span> status<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@description</span>: 设置 Service Worker 错误
     *
     * <span class="token keyword">@param</span> <span class="token parameter">state</span> imagestate
     * <span class="token keyword">@param</span> <span class="token parameter">error</span> 遇到的错误
     */</span>
    <span class="token function">swError</span><span class="token punctuation">(</span>state<span class="token operator">:</span> SWState<span class="token punctuation">,</span> error<span class="token operator">:</span> Error<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">;</span>
      state<span class="token punctuation">.</span>error <span class="token operator">=</span> error<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> swModule<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本文件包含了完整的一份 state、数个 mutation 和一个 action。</p>`,3);function l(r,u){return n(),a("div",null,[c,e(" more "),i])}const k=s(o,[["render",l],["__file","demo.html.vue"]]);export{k as default};
