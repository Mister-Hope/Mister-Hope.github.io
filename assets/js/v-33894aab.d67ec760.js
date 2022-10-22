"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[35201],{11071:(n,s,a)=>{a.r(s),a.d(s,{default:()=>c});var e=a(71534);const t=(0,e._)("p",null,"本案例展示了 Mr.Hope 个人编写的 screen 相关的 Vuex 模块。",-1),p=(0,e.uE)('<h2 id="sreen-ts" tabindex="-1"><a class="header-anchor" href="#sreen-ts" aria-hidden="true">#</a> Sreen.ts</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Module <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../state&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">SWState</span> <span class="token punctuation">{</span>\n  status<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// service-worker 状态</span>\n  error<span class="token operator">?</span><span class="token operator">:</span> Error<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> swState<span class="token operator">:</span> SWState <span class="token operator">=</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> swModule<span class="token operator">:</span> Module<span class="token operator">&lt;</span>SWState<span class="token punctuation">,</span> BaseState<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  state<span class="token operator">:</span> swState<span class="token punctuation">,</span>\n  mutations<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token doc-comment comment">/**\n     * <span class="token keyword">@description</span>: 设置 Service Worker 状态\n     *\n     * <span class="token keyword">@param</span> <span class="token parameter">state</span> swState\n     * <span class="token keyword">@param</span> <span class="token parameter">status</span> ServiceWorker状态\n     */</span>\n    <span class="token function">swState</span><span class="token punctuation">(</span>state<span class="token operator">:</span> SWState<span class="token punctuation">,</span> status<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n      state<span class="token punctuation">.</span>status <span class="token operator">=</span> status<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token doc-comment comment">/**\n     * <span class="token keyword">@description</span>: 设置 Service Worker 错误\n     *\n     * <span class="token keyword">@param</span> <span class="token parameter">state</span> imagestate\n     * <span class="token keyword">@param</span> <span class="token parameter">error</span> 遇到的错误\n     */</span>\n    <span class="token function">swError</span><span class="token punctuation">(</span>state<span class="token operator">:</span> SWState<span class="token punctuation">,</span> error<span class="token operator">:</span> Error<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n      state<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">;</span>\n      state<span class="token punctuation">.</span>error <span class="token operator">=</span> error<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> swModule<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本文件包含了完整的一份 state、数个 mutation 和一个 action。</p>',3),o={},c=(0,a(61935).Z)(o,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)("div",null,[t,(0,e.kq)(" more "),p])}]])},61935:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},49777:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-33894aab","path":"/code/vue/vuex/demo.html","title":"模块案例","lang":"zh-CN","frontmatter":{"title":"模块案例","icon":"discover","category":["Vue"],"tag":["Vuex","Demo"],"summary":"本案例展示了 Mr.Hope 个人编写的 screen 相关的 Vuex 模块。\\n","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/vue/vuex/demo.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"模块案例"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Vuex"}],["meta",{"property":"article:tag","content":"Demo"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"<p>本案例展示了 Mr.Hope 个人编写的 screen 相关的 Vuex 模块。</p>\\n","headers":[{"level":2,"title":"Sreen.ts","slug":"sreen-ts","link":"#sreen-ts","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3}]},"readingTime":{"minutes":0.47,"words":141},"filePathRelative":"code/vue/vuex/demo.md","localizedDate":"2020年6月3日"}')}}]);