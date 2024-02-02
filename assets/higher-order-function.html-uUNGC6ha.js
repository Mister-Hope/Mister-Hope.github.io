import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as t,f as p,d as n,b as o}from"./app-odku2cZ-.js";const c={},e=n("p",null,"高阶函数英文叫 Higher-order function。",-1),u=n("p",null,"JavaScript 的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。",-1),l=o(`<p>一个最简单的高阶函数:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> f</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">f</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>或者写作</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">f</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>当我们调用 <code>add(-5, 6, Math.abs)</code> 时，参数 <code>x</code>，<code>y</code> 和 <code>f</code> 分别接收 <code>-5</code>，<code>6</code> 和函数 <code>Math.abs</code>，根据函数定义，我们可以推导计算过程为:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code>x <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">;</span>
y <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
f <span class="token operator">=</span> Math<span class="token punctuation">.</span>abs<span class="token punctuation">;</span>
<span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">f</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">&gt;</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">11</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">11</span><span class="token punctuation">;</span>
</code></pre></div><p>用代码验证一下:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> f</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">f</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span>abs<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 11</span>
</code></pre></div><p>编写高阶函数，就是让函数的参数能够接收别的函数。</p>`,9);function k(i,r){return s(),t("div",null,[e,u,p(" more "),l])}const g=a(c,[["render",k],["__file","higher-order-function.html.vue"]]);export{g as default};
