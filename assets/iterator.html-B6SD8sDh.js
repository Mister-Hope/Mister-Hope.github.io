import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as t,o as e}from"./app-D_3IGtdL.js";const n={};function l(h,i){return e(),a("div",null,i[0]||(i[0]=[t(`<p>我们已经知道，可以直接作用于 for 循环的数据类型有以下几种:</p><p>一类是集合数据类型，如 list、tuple、dict、set、str 等；</p><p>一类是 generator，包括生成器和带 yield 的 generator function。</p><p>这些可以直接作用于 for 循环的对象统称为可迭代对象: Iterable。</p><p>可以使用 isinstance()判断一个对象是否是 Iterable 对象:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" data-title="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> collections.abc </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Iterable</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> isinstance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">([], Iterable)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">True</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> isinstance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({}, Iterable)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">True</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> isinstance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;abc&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, Iterable)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">True</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> isinstance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((x </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> x </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)), Iterable)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">True</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> isinstance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, Iterable)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">False</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而生成器不但可以作用于 for 循环，还可以被 <code>next()</code> 函数不断调用并返回下一个值，直到最后抛出 <code>StopIteration</code> 错误表示无法继续返回下一个值了。</p><p>可以被 <code>next()</code> 函数调用并不断返回下一个值的对象称为迭代器: <code>Iterator</code>。</p><p>可以使用 <code>isinstance()</code> 判断一个对象是否是 <code>Iterator</code> 对象:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> collections.abc </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Iterator</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> isinstance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((x </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> x </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> range</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)), Iterator)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">True</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> isinstance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">([], Iterator)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">False</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> isinstance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({}, Iterator)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">False</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> isinstance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;abc&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, Iterator)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">False</span></span></code></pre></div><p>生成器都是 <code>Iterator</code> 对象，但 list、dict、str 虽然是 <code>Iterable</code>，却不是 <code>Iterator</code>。</p><p>把 list、dict、str 等 <code>Iterable</code> 变成 <code>Iterator</code> 可以使用 <code>iter()</code> 函数:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> isinstance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">iter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">([]), Iterator)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">True</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> isinstance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">iter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;abc&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">), Iterator)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">True</span></span></code></pre></div><p>您可能会问，为什么 list、dict、str 等数据类型不是 <code>Iterator</code>?</p><p>这是因为 Python 的 Iterator 对象表示的是一个数据流，Iterator 对象可以被 <code>next()</code> 函数调用并不断返回下一个数据，直到没有数据时抛出 StopIteration 错误。可以把这个数据流看做是一个有序序列，但我们却不能提前知道序列的长度，只能不断通过 next()函数实现按需计算下一个数据，所以 Iterator 的计算是惰性的，只有在需要返回下一个数据时它才会计算。</p><p>Iterator 甚至可以表示一个无限大的数据流，例如全体自然数。而使用 list 是永远不可能存储全体自然数的。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>凡是可作用于 for 循环的对象都是 <code>Iterable</code> 类型；</p><p>凡是可作用于 <code>next()</code> 函数的对象都是 <code>Iterator</code> 类型，它们表示一个惰性计算的序列；</p><p>集合数据类型如 list、dict、str 等是 <code>Iterable</code> 但不是 <code>Iterator</code>，不过可以通过 <code>iter()</code> 函数获得一个 <code>Iterator</code> 对象。</p><p>Python 的 for 循环本质上就是通过不断调用 <code>next()</code> 函数实现的，例如:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> x </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    pass</span></span></code></pre></div><p>实际上完全等价于:</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" data-title="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 首先获得Iterator对象</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">it </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> iter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">([</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 循环</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">while</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> True</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 获得下一个值:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(it)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    except</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> StopIteration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 遇到StopIteration就退出循环</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        break</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24)]))}const r=s(n,[["render",l],["__file","iterator.html.vue"]]),d=JSON.parse('{"path":"/code/language/python/advance/iterator.html","title":"迭代器","lang":"zh-CN","frontmatter":{"title":"迭代器","icon":"refresh","author":"廖雪峰","date":"2020-05-29T00:00:00.000Z","category":"Python","description":"我们已经知道，可以直接作用于 for 循环的数据类型有以下几种: 一类是集合数据类型，如 list、tuple、dict、set、str 等； 一类是 generator，包括生成器和带 yield 的 generator function。 这些可以直接作用于 for 循环的对象统称为可迭代对象: Iterable。 可以使用 isinstance(...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/python/advance/iterator.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"迭代器"}],["meta",{"property":"og:description","content":"我们已经知道，可以直接作用于 for 循环的数据类型有以下几种: 一类是集合数据类型，如 list、tuple、dict、set、str 等； 一类是 generator，包括生成器和带 yield 的 generator function。 这些可以直接作用于 for 循环的对象统称为可迭代对象: Iterable。 可以使用 isinstance(..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-29T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"迭代器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-29T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"readingTime":{"minutes":2.21,"words":664},"filePathRelative":"code/language/python/advance/iterator.md","localizedDate":"2020年5月29日","excerpt":"","autoDesc":true}');export{r as comp,d as data};
