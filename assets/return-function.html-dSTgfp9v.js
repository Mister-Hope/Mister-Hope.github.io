import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,b as t}from"./app-S62fdHqc.js";const p={},e=t(`<h2 id="函数作为返回值" tabindex="-1"><a class="header-anchor" href="#函数作为返回值"><span>函数作为返回值</span></a></h2><p>高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回。</p><p>我们来实现一个可变参数的求和。通常情况下，求和的函数是这样定义的:</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">calc_sum</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
    ax <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> n <span class="token keyword">in</span> args<span class="token punctuation">:</span>
        ax <span class="token operator">=</span> ax <span class="token operator">+</span> n
    <span class="token keyword">return</span> ax
</code></pre></div><p>但是，如果不需要立刻求和，而是在后面的代码中，根据需要再计算怎么办? 可以不返回求和的结果，而是返回求和的函数:</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">lazy_sum</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        ax <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">for</span> n <span class="token keyword">in</span> args<span class="token punctuation">:</span>
            ax <span class="token operator">=</span> ax <span class="token operator">+</span> n
        <span class="token keyword">return</span> ax
    <span class="token keyword">return</span> <span class="token builtin">sum</span>
</code></pre></div><p>当我们调用 <code>lazy_sum()</code> 时，返回的并不是求和结果，而是求和函数:</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f <span class="token operator">=</span> lazy_sum<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f
<span class="token operator">&lt;</span>function lazy_sum<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token builtin">locals</span><span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token builtin">sum</span> at <span class="token number">0x101c6ed90</span><span class="token operator">&gt;</span>
</code></pre></div><p>调用函数 <code>f</code> 时，才真正计算求和的结果:</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">25</span>
</code></pre></div><p>在这个例子中，我们在函数 <code>lazy_sum</code> 中又定义了函数 <code>sum</code>，并且，内部函数 <code>sum</code> 可以引用外部函数 <code>lazy_sum</code> 的参数和局部变量，当 <code>lazy_sum</code> 返回函数 sum 时，相关参数和变量都保存在返回的函数中，这种称为“闭包(Closure)”的程序结构拥有极大的威力。</p><p>请再注意一点，当我们调用 <code>lazy_sum()</code> 时，每次调用都会返回一个新的函数，即使传入相同的参数:</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f1 <span class="token operator">=</span> lazy_sum<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f2 <span class="token operator">=</span> lazy_sum<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f1<span class="token operator">==</span>f2
<span class="token boolean">False</span>
</code></pre></div><p><code>f1()</code> 和 <code>f2()</code> 的调用结果互不影响。</p><h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包"><span>闭包</span></a></h2><p>注意到返回的函数在其定义内部引用了局部变量 <code>args</code>，所以，当一个函数返回了一个函数后，其内部的局部变量还被新函数引用，所以，闭包用起来简单，实现起来可不容易。</p><p>另一个需要注意的问题是，返回的函数并没有立刻执行，而是直到调用了 <code>f()</code> 才执行。我们来看一个例子:</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    fs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
             <span class="token keyword">return</span> i<span class="token operator">*</span>i
        fs<span class="token punctuation">.</span>append<span class="token punctuation">(</span>f<span class="token punctuation">)</span>
    <span class="token keyword">return</span> fs

f1<span class="token punctuation">,</span> f2<span class="token punctuation">,</span> f3 <span class="token operator">=</span> count<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>在上面的例子中，每次循环，都创建了一个新的函数，然后，把创建的 3 个函数都返回了。</p><p>您可能认为调用 <code>f1()</code>，<code>f2()</code> 和 <code>f3()</code> 结果应该是 <code>1</code>，<code>4</code>，<code>9</code>，但实际结果是:</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f1<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">9</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f2<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">9</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f3<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">9</span>
</code></pre></div><p>全部都是 <code>9</code>! 原因就在于返回的函数引用了变量 <code>i</code>，但它并非立刻执行。等到 3 个函数都返回时，它们所引用的变量 <code>i</code> 已经变成了 <code>3</code>，因此最终结果为 <code>9</code>。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>返回闭包时牢记一点:返回函数不要引用任何循环变量，或者后续会发生变化的变量。</p></div><p>如果一定要引用循环变量怎么办? 方法是再创建一个函数，用该函数的参数绑定循环变量当前的值，无论该循环变量后续如何更改，已绑定到函数参数的值不变:</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> j<span class="token operator">*</span>j
        <span class="token keyword">return</span> g
    fs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        fs<span class="token punctuation">.</span>append<span class="token punctuation">(</span>f<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># f(i)立刻被执行，因此i的当前值被传入f()</span>
    <span class="token keyword">return</span> fs
</code></pre></div><p>再看看结果:</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f1<span class="token punctuation">,</span> f2<span class="token punctuation">,</span> f3 <span class="token operator">=</span> count<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f1<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">1</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f2<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">4</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f3<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">9</span>
</code></pre></div><p>缺点是代码较长，可利用 lambda 函数缩短代码。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>一个函数可以返回一个计算结果，也可以返回一个函数。</p><p>返回一个函数时，牢记该函数并未执行，返回函数中不要引用任何可能会变化的变量。</p>`,31),o=[e];function c(l,r){return a(),s("div",null,o)}const k=n(p,[["render",c],["__file","return-function.html.vue"]]),d=JSON.parse('{"path":"/code/language/python/functional-programming/return-function.html","title":"返回函数","lang":"zh-CN","frontmatter":{"title":"返回函数","icon":"return","author":"廖雪峰","date":"2020-06-02T00:00:00.000Z","category":"Python","description":"函数作为返回值 高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回。 我们来实现一个可变参数的求和。通常情况下，求和的函数是这样定义的: 但是，如果不需要立刻求和，而是在后面的代码中，根据需要再计算怎么办? 可以不返回求和的结果，而是返回求和的函数: 当我们调用 lazy_sum() 时，返回的并不是求和结果，而是求和函数: 调用函数 f ...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/python/functional-programming/return-function.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"返回函数"}],["meta",{"property":"og:description","content":"函数作为返回值 高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回。 我们来实现一个可变参数的求和。通常情况下，求和的函数是这样定义的: 但是，如果不需要立刻求和，而是在后面的代码中，根据需要再计算怎么办? 可以不返回求和的结果，而是返回求和的函数: 当我们调用 lazy_sum() 时，返回的并不是求和结果，而是求和函数: 调用函数 f ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-06-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"返回函数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-02T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-06T16:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"函数作为返回值","slug":"函数作为返回值","link":"#函数作为返回值","children":[]},{"level":2,"title":"闭包","slug":"闭包","link":"#闭包","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":6},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":2.94,"words":881},"filePathRelative":"code/language/python/functional-programming/return-function.md","localizedDate":"2020年6月2日","excerpt":"","autoDesc":true}');export{k as comp,d as data};
