import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as t,e as n,b as e,o as p}from"./app-BhobZtDO.js";const h={};function l(k,s){return p(),a("div",null,[s[0]||(s[0]=t("p",null,"在函数内部，可以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是递归函数。",-1)),n(" more "),s[1]||(s[1]=e(`<p>举个例子，我们来计算阶乘 $n! = 1 \\times 2 \\times 3 \\times \\cdots \\times n$ ，用函数 <code>fact(n)</code> 表示，可以看出:</p><p>$$ fact(n)= n! =1 \\times 2 \\times 3 \\times \\cdots \\times (n -1 ) \\times n \\ = (n - 1)! \\times n = fact(n - 1) \\times n $$</p><p>所以，<code>fact(n)</code> 可以表示为 $n \\times fact(n-1)$，只有 n=1 时需要特殊处理。</p><p>于是，<code>fact(n)</code> 用递归的方式写出来就是:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> fact</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> fact</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(n </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><p>上面就是一个递归函数。可以试试:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> fact</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> fact</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">120</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> fact</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000</span></span></code></pre></div><p>如果我们计算 <code>fact(5)</code>，可以根据函数定义看到计算过程如下:</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>===&gt; fact(5)</span></span>
<span class="line"><span>===&gt; 5 *fact(4)</span></span>
<span class="line"><span>===&gt; 5* (4 *fact(3))</span></span>
<span class="line"><span>===&gt; 5* (4 *(3* fact(2)))</span></span>
<span class="line"><span>===&gt; 5 *(4* (3 *(2* fact(1))))</span></span>
<span class="line"><span>===&gt; 5 *(4* (3 *(2* 1)))</span></span>
<span class="line"><span>===&gt; 5 *(4* (3 *2))</span></span>
<span class="line"><span>===&gt; 5* (4 *6)</span></span>
<span class="line"><span>===&gt; 5* 24</span></span>
<span class="line"><span>===&gt; 120</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递归函数的优点是定义简单，逻辑清晰。理论上，所有的递归函数都可以写成循环的方式，但循环的逻辑不如递归清晰。</p><p>使用递归函数需要注意防止栈溢出。在计算机中，函数调用是通过栈(stack)这种数据结构实现的，每当进入一个函数调用，栈就会加一层栈帧，每当函数返回，栈就会减一层栈帧。由于栈的大小不是无限的，所以，递归调用的次数过多，会导致栈溢出。可以试试 <code>fact(1000)</code>:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&gt;&gt; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">fact(1000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Traceback</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (most </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">recent</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> call</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> last</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  File</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&lt;stdin&gt;&quot;,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> line</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 1,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">modul</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  File</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&lt;stdin&gt;&quot;,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> line</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 4,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fact</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">  ...</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  File</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&lt;stdin&gt;&quot;,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> line</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 4,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fact</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RuntimeError:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> maximum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> recursion</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> depth</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exceeded</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> comparison</span></span></code></pre></div><p>解决递归调用栈溢出的方法是通过尾递归优化，事实上尾递归和循环的效果是一样的，所以，把循环看成是一种特殊的尾递归函数也是可以的。</p><p>尾递归是指，在函数返回的时候，调用自身本身，并且，return 语句不能包含表达式。这样，编译器或者解释器就可以把尾递归做优化，使递归本身无论调用多少次，都只占用一个栈帧，不会出现栈溢出的情况。</p><p>上面的 <code>fact(n)</code> 函数由于 <code>return n * fact(n - 1)</code> 引入了乘法表达式，所以就不是尾递归了。要改成尾递归方式，需要多一点代码，主要是要把每一步的乘积传入到递归函数中:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> fact</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> fact_iter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(n, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> fact_iter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;">num</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> product</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> num </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> product</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> fact_iter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(num </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, num </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">product)</span></span></code></pre></div><p>可以看到，<code>return fact_iter(num - 1, num* product)</code> 仅返回递归函数本身，<code>num - 1</code> 和 <code>num * product</code> 在函数调用前就会被计算，不影响函数调用。</p><p><code>fact(5)</code> 对应的 <code>fact_iter(5, 1)</code> 的调用如下:</p><div class="language-text" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>===&gt; fact_iter(5, 1)</span></span>
<span class="line"><span>===&gt; fact_iter(4, 5)</span></span>
<span class="line"><span>===&gt; fact_iter(3, 20)</span></span>
<span class="line"><span>===&gt; fact_iter(2, 60)</span></span>
<span class="line"><span>===&gt; fact_iter(1, 120)</span></span>
<span class="line"><span>===&gt; 120</span></span></code></pre></div><p>尾递归调用时，如果做了优化，栈不会增长，因此，无论多少次调用也不会导致栈溢出。</p><p>遗憾的是，大多数编程语言没有针对尾递归做优化，Python 解释器也没有做优化，所以，即使把上面的 <code>fact(n)</code> 函数改成尾递归方式，也会导致栈溢出。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>使用递归函数的优点是逻辑简单清晰，缺点是过深的调用会导致栈溢出。</p><p>针对尾递归优化的语言可以通过尾递归防止栈溢出。尾递归事实上和循环是等价的，没有循环语句的编程语言只能通过尾递归实现循环。</p><p>Python 标准的解释器没有针对尾递归做优化，任何递归函数都存在栈溢出的问题。</p>`,25))])}const c=i(h,[["render",l],["__file","recursive.html.vue"]]),g=JSON.parse('{"path":"/code/language/python/function/recursive.html","title":"递归函数","lang":"zh-CN","frontmatter":{"title":"递归函数","icon":"refresh","author":"廖雪峰","date":"2020-05-27T00:00:00.000Z","category":"Python","description":"在函数内部，可以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是递归函数。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/python/function/recursive.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"递归函数"}],["meta",{"property":"og:description","content":"在函数内部，可以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是递归函数。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"递归函数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-27T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-06T16:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","username":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5,"url":"https://github.com/Mr.Hope"},{"name":"Mister-Hope","username":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1,"url":"https://github.com/Mister-Hope"}]},"readingTime":{"minutes":3.16,"words":948},"filePathRelative":"code/language/python/function/recursive.md","localizedDate":"2020年5月27日","excerpt":"<p>在函数内部，可以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是递归函数。</p>\\n","autoDesc":true}');export{c as comp,g as data};
