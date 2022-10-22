"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[49753],{72942:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(71534);const e=[(0,t.uE)('<p>我们已经知道，可以直接作用于 for 循环的数据类型有以下几种:</p><p>一类是集合数据类型，如 list、tuple、dict、set、str 等；</p><p>一类是 generator，包括生成器和带 yield 的 generator function。</p><p>这些可以直接作用于 for 循环的对象统称为可迭代对象: Iterable。</p><p>可以使用 isinstance()判断一个对象是否是 Iterable 对象:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Iterable\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span>\n<span class="token boolean">True</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span>\n<span class="token boolean">True</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span>\n<span class="token boolean">True</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span>\n<span class="token boolean">True</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span>\n<span class="token boolean">False</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而生成器不但可以作用于 for 循环，还可以被 <code>next()</code> 函数不断调用并返回下一个值，直到最后抛出 <code>StopIteration</code> 错误表示无法继续返回下一个值了。</p><p>可以被 <code>next()</code> 函数调用并不断返回下一个值的对象称为迭代器: <code>Iterator</code>。</p><p>可以使用 <code>isinstance()</code> 判断一个对象是否是 <code>Iterator</code> 对象:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Iterator\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Iterator<span class="token punctuation">)</span>\n<span class="token boolean">True</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Iterator<span class="token punctuation">)</span>\n<span class="token boolean">False</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Iterator<span class="token punctuation">)</span>\n<span class="token boolean">False</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> Iterator<span class="token punctuation">)</span>\n<span class="token boolean">False</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成器都是 <code>Iterator</code> 对象，但 list、dict、str 虽然是 <code>Iterable</code>，却不是 <code>Iterator</code>。</p><p>把 list、dict、str 等 <code>Iterable</code> 变成 <code>Iterator</code> 可以使用 <code>iter()</code> 函数:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token builtin">iter</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Iterator<span class="token punctuation">)</span>\n<span class="token boolean">True</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token builtin">iter</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Iterator<span class="token punctuation">)</span>\n<span class="token boolean">True</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您可能会问，为什么 list、dict、str 等数据类型不是 <code>Iterator</code>?</p><p>这是因为 Python 的 Iterator 对象表示的是一个数据流，Iterator 对象可以被 <code>next()</code> 函数调用并不断返回下一个数据，直到没有数据时抛出 StopIteration 错误。可以把这个数据流看做是一个有序序列，但我们却不能提前知道序列的长度，只能不断通过 next()函数实现按需计算下一个数据，所以 Iterator 的计算是惰性的，只有在需要返回下一个数据时它才会计算。</p><p>Iterator 甚至可以表示一个无限大的数据流，例如全体自然数。而使用 list 是永远不可能存储全体自然数的。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>凡是可作用于 for 循环的对象都是 <code>Iterable</code> 类型；</p><p>凡是可作用于 <code>next()</code> 函数的对象都是 <code>Iterator</code> 类型，它们表示一个惰性计算的序列；</p><p>集合数据类型如 list、dict、str 等是 <code>Iterable</code> 但不是 <code>Iterator</code>，不过可以通过 <code>iter()</code> 函数获得一个 <code>Iterator</code> 对象。</p><p>Python 的 for 循环本质上就是通过不断调用 <code>next()</code> 函数实现的，例如:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">:</span>\n    <span class="token keyword">pass</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上完全等价于:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 首先获得Iterator对象</span>\n\nit <span class="token operator">=</span> <span class="token builtin">iter</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token comment"># 循环</span>\n\n<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n    <span class="token keyword">try</span><span class="token punctuation">:</span>\n        <span class="token comment"># 获得下一个值:</span>\n        x <span class="token operator">=</span> <span class="token builtin">next</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span>\n    <span class="token keyword">except</span> StopIteration<span class="token punctuation">:</span>\n        <span class="token comment"># 遇到StopIteration就退出循环</span>\n        <span class="token keyword">break</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',24)],p={},o=(0,a(61935).Z)(p,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,e)}]])},61935:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},33360:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-002015d9","path":"/code/language/python/advance/iterator.html","title":"迭代器","lang":"zh-CN","frontmatter":{"title":"迭代器","icon":"refresh","author":"廖雪峰","date":"2020-05-29T00:00:00.000Z","category":["Python"],"summary":"我们已经知道，可以直接作用于 for 循环的数据类型有以下几种: 一类是集合数据类型，如 list、tuple、dict、set、str 等； 一类是 generator，包括生成器和带 yield 的 generator function。 这些可以直接作用于 for 循环的对象统称为可迭代对象: Iterable。 可以使用 isinstance()判断","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/python/advance/iterator.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"迭代器"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":2.25,"words":674},"filePathRelative":"code/language/python/advance/iterator.md","localizedDate":"2020年5月29日"}')}}]);