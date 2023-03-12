import{_ as e,X as p,Y as o,a1 as c,$ as s,a0 as n,Z as l,a2 as r,a3 as a,C as u}from"./framework-a91f7991.js";const i={},d=s("p",null,[n("在 Python 中，定义一个函数要使用 "),s("code",null,"def"),n(" 语句，依次写出函数名、括号、括号中的参数和冒号 "),s("code",null,":"),n("，然后，在缩进块中编写函数体，函数的返回值用 "),s("code",null,"return"),n(" 语句返回。")],-1),k=a(`<p>我们以自定义一个求绝对值的 <code>my_abs</code> 函数为例:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token keyword">def</span> <span class="token function">my_abs</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> x <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> x
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token operator">-</span>x

<span class="token keyword">print</span><span class="token punctuation">(</span>my_abs<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p>请自行测试并调用 <code>my_abs</code> 看看返回结果是否正确。</p><p>请注意，函数体内部的语句在执行时，一旦执行到 <code>return</code> 时，函数就执行完毕，并将结果返回。因此，函数内部通过条件判断和循环可以实现非常复杂的逻辑。</p><p>如果没有 <code>return</code> 语句，函数执行完毕后也会返回结果，只是结果为 <code>None</code>。<code>return None</code> 可以简写为 <code>return</code>。</p><p>在 Python 交互环境中定义函数时，注意 Python 会出现 <code>...</code> 的提示。函数定义结束后需要按两次回车重新回到<code>&gt;&gt;&gt;</code> 提示符下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>┌────────────────────────────────────────────────────────┐
│Command Prompt - python                           - □ x │
├────────────────────────────────────────────────────────┤
│&gt;&gt;&gt; def my_abs(x):                                      │
│...     if x &gt;= 0:                                      │
│...         return x                                    │
│...     else:                                           │
│...         return -x                                   │
│...                                                     │
│&gt;&gt;&gt; my_abs(-9)                                          │
│9                                                       │
│&gt;&gt;&gt; _                                                   │
│                                                        │
│                                                        │
└────────────────────────────────────────────────────────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您已经把 <code>my_abs()</code> 的函数定义保存为 <code>abstest.py</code> 文件了，那么，可以在该文件的当前目录下启动 Python 解释器，用 <code>from abstest import my_abs</code> 来导入 <code>my_abs()</code> 函数，注意 <code>abstest</code> 是文件名(不含 .py 扩展名):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>┌────────────────────────────────────────────────────────┐
│Command Prompt - python                           - □ x │
├────────────────────────────────────────────────────────┤
│&gt;&gt;&gt; from abstest import my_abs                          │
│&gt;&gt;&gt; my_abs(-9)                                          │
│9                                                       │
│&gt;&gt;&gt; _                                                   │
│                                                        │
│                                                        │
│                                                        │
│                                                        │
│                                                        │
│                                                        │
│                                                        │
└────────────────────────────────────────────────────────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),m=s("code",null,"import",-1),g=a(`<h2 id="空函数" tabindex="-1"><a class="header-anchor" href="#空函数" aria-hidden="true">#</a> 空函数</h2><p>如果想定义一个什么事也不做的空函数，可以用 pass 语句:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">nop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre></div><p>pass 语句什么都不做，那有什么用? 实际上 pass 可以用来作为占位符，比如现在还没想好怎么写函数的代码，就可以先放一个 pass，让代码能运行起来。</p><p>pass 还可以用在其他语句里，比如:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre></div><p>缺少了 pass，代码运行就会有语法错误。</p><h2 id="参数检查" tabindex="-1"><a class="header-anchor" href="#参数检查" aria-hidden="true">#</a> 参数检查</h2><p>调用函数时，如果参数个数不对，Python 解释器会自动检查出来，并抛出 <code>TypeError</code>:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_abs<span class="token punctuation">(</span><span class="token number">1</span>, <span class="token number">2</span><span class="token punctuation">)</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
TypeError: my_abs<span class="token punctuation">(</span><span class="token punctuation">)</span> takes <span class="token number">1</span> positional argument but <span class="token number">2</span> were given
</code></pre></div><p>但是如果参数类型不对，Python 解释器就无法帮我们检查。试试 <code>my_abs</code> 和内置函数 abs 的差别:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_abs<span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">2</span>, <span class="token keyword">in</span> my_abs
TypeError: unorderable types: str<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> int<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> abs<span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
TypeError: bad operand <span class="token builtin class-name">type</span> <span class="token keyword">for</span> abs<span class="token punctuation">(</span><span class="token punctuation">)</span>: <span class="token string">&#39;str&#39;</span>
</code></pre></div><p>当传入了不恰当的参数时，内置函数 <code>abs</code> 会检查出参数错误，而我们定义的 <code>my_abs</code> 没有参数检查，会导致 <code>if</code> 语句出错，出错信息和 <code>abs</code> 不一样。所以，这个函数定义不够完善。</p><p>让我们修改一下 <code>my_abs</code> 的定义，对参数类型做检查，只允许整数和浮点数类型的参数。数据类型检查可以用内置函数 <code>isinstance()</code> 实现:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">my_abs</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">float</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> TypeError<span class="token punctuation">(</span><span class="token string">&#39;bad operand type&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> x <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> x
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token operator">-</span>x
</code></pre></div><p>添加了参数检查后，如果传入错误的参数类型，函数就可以抛出一个错误:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_abs<span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">3</span>, <span class="token keyword">in</span> my_abs
TypeError: bad operand <span class="token builtin class-name">type</span>
</code></pre></div><p>错误和异常处理将在后续讲到。</p><h2 id="返回多个值" tabindex="-1"><a class="header-anchor" href="#返回多个值" aria-hidden="true">#</a> 返回多个值</h2><p>函数可以返回多个值吗? 答案是肯定的。</p><p>比如在游戏中经常需要从一个点移动到另一个点，给出坐标、位移和角度，就可以计算出新的坐标:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> math

<span class="token keyword">def</span> <span class="token function">move</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> step<span class="token punctuation">,</span> angle<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    nx <span class="token operator">=</span> x <span class="token operator">+</span> step <span class="token operator">*</span>math<span class="token punctuation">.</span>cos<span class="token punctuation">(</span>angle<span class="token punctuation">)</span>
ny <span class="token operator">=</span> y <span class="token operator">-</span> step<span class="token operator">*</span> math<span class="token punctuation">.</span>sin<span class="token punctuation">(</span>angle<span class="token punctuation">)</span>
    <span class="token keyword">return</span> nx<span class="token punctuation">,</span> ny
</code></pre></div><p><code>import math</code> 语句表示导入 <code>math</code> 包，并允许后续代码引用 <code>math</code> 包里的 <code>sin</code>、<code>cos</code> 等函数。</p><p>然后，我们就可以同时获得返回值:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> x<span class="token punctuation">,</span> y <span class="token operator">=</span> move<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> math<span class="token punctuation">.</span>pi <span class="token operator">/</span> <span class="token number">6</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
<span class="token number">151.96152422706632</span> <span class="token number">70.0</span>
</code></pre></div><p>但其实这只是一种假象，Python 函数返回的仍然是单一值:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> r <span class="token operator">=</span> move<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> math<span class="token punctuation">.</span>pi <span class="token operator">/</span> <span class="token number">6</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">151.96152422706632</span><span class="token punctuation">,</span> <span class="token number">70.0</span><span class="token punctuation">)</span>
</code></pre></div><p>原来返回值是一个 tuple! 但是，在语法上，返回一个 tuple 可以省略括号，而多个变量可以同时接收一个 tuple，按位置赋给对应的值，所以，Python 的函数返回多值其实就是返回一个 tuple，但写起来更方便。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>定义函数时，需要确定函数名和参数个数；</p><p>如果有必要，可以先对参数的数据类型做检查；</p><p>函数体内部可以用 <code>return</code> 随时返回函数结果；</p><p>函数执行完毕也没有 <code>return</code> 语句时，自动 <code>return None</code>。</p><p>函数可以同时返回多个值，但其实就是一个 tuple。</p>`,34);function b(y,v){const t=u("RouterLink");return p(),o("div",null,[d,c(" more "),k,s("p",null,[m,n(" 的用法在后续 "),l(t,{to:"/code/language/python/module/"},{default:r(()=>[n("模块")]),_:1}),n(" 一节中会详细介绍。")]),g])}const x=e(i,[["render",b],["__file","define.html.vue"]]);export{x as default};
