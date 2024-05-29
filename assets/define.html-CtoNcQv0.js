import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as p,c as r,d as o,e as a,f as s,a as t,w as d,b as n}from"./app-C6d_tW6U.js";const c={},k=a("p",null,[s("在 Python 中，定义一个函数要使用 "),a("code",null,"def"),s(" 语句，依次写出函数名、括号、括号中的参数和冒号 "),a("code",null,":"),s("，然后，在缩进块中编写函数体，函数的返回值用 "),a("code",null,"return"),s(" 语句返回。")],-1),h=n(`<p>我们以自定义一个求绝对值的 <code>my_abs</code> 函数为例:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># -*- coding: utf-8 -*-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">def</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> my_abs</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#24292E;--shiki-dark:#D19A66;font-style:inherit;--shiki-dark-font-style:italic;">x</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> x </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;=</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> x</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    else</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">x</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#24292E;--shiki-dark:#61AFEF;">my_abs</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="color:#005CC5;--shiki-dark:#D19A66;">99</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">))</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请自行测试并调用 <code>my_abs</code> 看看返回结果是否正确。</p><p>请注意，函数体内部的语句在执行时，一旦执行到 <code>return</code> 时，函数就执行完毕，并将结果返回。因此，函数内部通过条件判断和循环可以实现非常复杂的逻辑。</p><p>如果没有 <code>return</code> 语句，函数执行完毕后也会返回结果，只是结果为 <code>None</code>。<code>return None</code> 可以简写为 <code>return</code>。</p><p>在 Python 交互环境中定义函数时，注意 Python 会出现 <code>...</code> 的提示。函数定义结束后需要按两次回车重新回到<code>&gt;&gt;&gt;</code> 提示符下:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>┌────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│Command Prompt - python                           - □ x │</span></span>
<span class="line"><span>├────────────────────────────────────────────────────────┤</span></span>
<span class="line"><span>│&gt;&gt;&gt; def my_abs(x):                                      │</span></span>
<span class="line"><span>│...     if x &gt;= 0:                                      │</span></span>
<span class="line"><span>│...         return x                                    │</span></span>
<span class="line"><span>│...     else:                                           │</span></span>
<span class="line"><span>│...         return -x                                   │</span></span>
<span class="line"><span>│...                                                     │</span></span>
<span class="line"><span>│&gt;&gt;&gt; my_abs(-9)                                          │</span></span>
<span class="line"><span>│9                                                       │</span></span>
<span class="line"><span>│&gt;&gt;&gt; _                                                   │</span></span>
<span class="line"><span>│                                                        │</span></span>
<span class="line"><span>│                                                        │</span></span>
<span class="line"><span>└────────────────────────────────────────────────────────┘</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您已经把 <code>my_abs()</code> 的函数定义保存为 <code>abstest.py</code> 文件了，那么，可以在该文件的当前目录下启动 Python 解释器，用 <code>from abstest import my_abs</code> 来导入 <code>my_abs()</code> 函数，注意 <code>abstest</code> 是文件名(不含 .py 扩展名):</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>┌────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│Command Prompt - python                           - □ x │</span></span>
<span class="line"><span>├────────────────────────────────────────────────────────┤</span></span>
<span class="line"><span>│&gt;&gt;&gt; from abstest import my_abs                          │</span></span>
<span class="line"><span>│&gt;&gt;&gt; my_abs(-9)                                          │</span></span>
<span class="line"><span>│9                                                       │</span></span>
<span class="line"><span>│&gt;&gt;&gt; _                                                   │</span></span>
<span class="line"><span>│                                                        │</span></span>
<span class="line"><span>│                                                        │</span></span>
<span class="line"><span>│                                                        │</span></span>
<span class="line"><span>│                                                        │</span></span>
<span class="line"><span>│                                                        │</span></span>
<span class="line"><span>│                                                        │</span></span>
<span class="line"><span>│                                                        │</span></span>
<span class="line"><span>└────────────────────────────────────────────────────────┘</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),y=a("code",null,"import",-1),B=n(`<h2 id="空函数" tabindex="-1"><a class="header-anchor" href="#空函数"><span>空函数</span></a></h2><p>如果想定义一个什么事也不做的空函数，可以用 pass 语句:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">def</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> nop</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    pass</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>pass 语句什么都不做，那有什么用? 实际上 pass 可以用来作为占位符，比如现在还没想好怎么写函数的代码，就可以先放一个 pass，让代码能运行起来。</p><p>pass 还可以用在其他语句里，比如:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">if</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> age </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;=</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 18</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    pass</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>缺少了 pass，代码运行就会有语法错误。</p><h2 id="参数检查" tabindex="-1"><a class="header-anchor" href="#参数检查"><span>参数检查</span></a></h2><p>调用函数时，如果参数个数不对，Python 解释器会自动检查出来，并抛出 <code>TypeError</code>:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;&gt;&gt; </span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">my_abs(1,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Traceback</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (most </span><span style="color:#032F62;--shiki-dark:#98C379;">recent</span><span style="color:#032F62;--shiki-dark:#98C379;"> call</span><span style="color:#032F62;--shiki-dark:#98C379;"> last</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  File</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;&lt;stdin&gt;&quot;,</span><span style="color:#032F62;--shiki-dark:#98C379;"> line</span><span style="color:#032F62;--shiki-dark:#98C379;"> 1,</span><span style="color:#032F62;--shiki-dark:#98C379;"> in</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#032F62;--shiki-dark:#98C379;">modul</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">e</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">TypeError:</span><span style="color:#032F62;--shiki-dark:#98C379;"> my_abs</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">() </span><span style="color:#032F62;--shiki-dark:#98C379;">takes</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="color:#032F62;--shiki-dark:#98C379;"> positional</span><span style="color:#032F62;--shiki-dark:#98C379;"> argument</span><span style="color:#032F62;--shiki-dark:#98C379;"> but</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="color:#032F62;--shiki-dark:#98C379;"> were</span><span style="color:#032F62;--shiki-dark:#98C379;"> given</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是如果参数类型不对，Python 解释器就无法帮我们检查。试试 <code>my_abs</code> 和内置函数 abs 的差别:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;&gt;&gt; </span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">my_abs(</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">&#39;A&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Traceback</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (most </span><span style="color:#032F62;--shiki-dark:#98C379;">recent</span><span style="color:#032F62;--shiki-dark:#98C379;"> call</span><span style="color:#032F62;--shiki-dark:#98C379;"> last</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  File</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;&lt;stdin&gt;&quot;,</span><span style="color:#032F62;--shiki-dark:#98C379;"> line</span><span style="color:#032F62;--shiki-dark:#98C379;"> 1,</span><span style="color:#032F62;--shiki-dark:#98C379;"> in</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#032F62;--shiki-dark:#98C379;">modul</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">e</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  File</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;&lt;stdin&gt;&quot;,</span><span style="color:#032F62;--shiki-dark:#98C379;"> line</span><span style="color:#032F62;--shiki-dark:#98C379;"> 2,</span><span style="color:#032F62;--shiki-dark:#98C379;"> in</span><span style="color:#032F62;--shiki-dark:#98C379;"> my_abs</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">TypeError:</span><span style="color:#032F62;--shiki-dark:#98C379;"> unorderable</span><span style="color:#032F62;--shiki-dark:#98C379;"> types:</span><span style="color:#032F62;--shiki-dark:#98C379;"> str</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">() </span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#032F62;--shiki-dark:#98C379;">=</span><span style="color:#032F62;--shiki-dark:#98C379;"> int</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;&gt;&gt; </span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">abs(</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">&#39;A&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Traceback</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (most </span><span style="color:#032F62;--shiki-dark:#98C379;">recent</span><span style="color:#032F62;--shiki-dark:#98C379;"> call</span><span style="color:#032F62;--shiki-dark:#98C379;"> last</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  File</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;&lt;stdin&gt;&quot;,</span><span style="color:#032F62;--shiki-dark:#98C379;"> line</span><span style="color:#032F62;--shiki-dark:#98C379;"> 1,</span><span style="color:#032F62;--shiki-dark:#98C379;"> in</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#032F62;--shiki-dark:#98C379;">modul</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">e</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">TypeError:</span><span style="color:#032F62;--shiki-dark:#98C379;"> bad</span><span style="color:#032F62;--shiki-dark:#98C379;"> operand</span><span style="color:#032F62;--shiki-dark:#98C379;"> type</span><span style="color:#032F62;--shiki-dark:#98C379;"> for</span><span style="color:#032F62;--shiki-dark:#98C379;"> abs</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">()</span><span style="color:#032F62;--shiki-dark:#98C379;">:</span><span style="color:#032F62;--shiki-dark:#98C379;"> &#39;str&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当传入了不恰当的参数时，内置函数 <code>abs</code> 会检查出参数错误，而我们定义的 <code>my_abs</code> 没有参数检查，会导致 <code>if</code> 语句出错，出错信息和 <code>abs</code> 不一样。所以，这个函数定义不够完善。</p><p>让我们修改一下 <code>my_abs</code> 的定义，对参数类型做检查，只允许整数和浮点数类型的参数。数据类型检查可以用内置函数 <code>isinstance()</code> 实现:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">def</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> my_abs</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#24292E;--shiki-dark:#D19A66;font-style:inherit;--shiki-dark-font-style:italic;">x</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> not</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> isinstance</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(x, (</span><span style="color:#005CC5;--shiki-dark:#56B6C2;">int</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#005CC5;--shiki-dark:#56B6C2;">float</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)):</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">        raise</span><span style="color:#005CC5;--shiki-dark:#ABB2BF;"> TypeError</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;bad operand type&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> x </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;=</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> x</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    else</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">x</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加了参数检查后，如果传入错误的参数类型，函数就可以抛出一个错误:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;&gt;&gt; </span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">my_abs(</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">&#39;A&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Traceback</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (most </span><span style="color:#032F62;--shiki-dark:#98C379;">recent</span><span style="color:#032F62;--shiki-dark:#98C379;"> call</span><span style="color:#032F62;--shiki-dark:#98C379;"> last</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  File</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;&lt;stdin&gt;&quot;,</span><span style="color:#032F62;--shiki-dark:#98C379;"> line</span><span style="color:#032F62;--shiki-dark:#98C379;"> 1,</span><span style="color:#032F62;--shiki-dark:#98C379;"> in</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#032F62;--shiki-dark:#98C379;">modul</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">e</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  File</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;&lt;stdin&gt;&quot;,</span><span style="color:#032F62;--shiki-dark:#98C379;"> line</span><span style="color:#032F62;--shiki-dark:#98C379;"> 3,</span><span style="color:#032F62;--shiki-dark:#98C379;"> in</span><span style="color:#032F62;--shiki-dark:#98C379;"> my_abs</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">TypeError:</span><span style="color:#032F62;--shiki-dark:#98C379;"> bad</span><span style="color:#032F62;--shiki-dark:#98C379;"> operand</span><span style="color:#032F62;--shiki-dark:#98C379;"> type</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>错误和异常处理将在后续讲到。</p><h2 id="返回多个值" tabindex="-1"><a class="header-anchor" href="#返回多个值"><span>返回多个值</span></a></h2><p>函数可以返回多个值吗? 答案是肯定的。</p><p>比如在游戏中经常需要从一个点移动到另一个点，给出坐标、位移和角度，就可以计算出新的坐标:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">import</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> math</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">def</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> move</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#24292E;--shiki-dark:#D19A66;font-style:inherit;--shiki-dark-font-style:italic;">x</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#24292E;--shiki-dark:#D19A66;font-style:inherit;--shiki-dark-font-style:italic;">y</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#24292E;--shiki-dark:#D19A66;font-style:inherit;--shiki-dark-font-style:italic;">step</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#24292E;--shiki-dark:#D19A66;font-style:inherit;--shiki-dark-font-style:italic;">angle</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">=</span><span style="color:#005CC5;--shiki-dark:#D19A66;">0</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    nx </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> x </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> step </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">*</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">math.</span><span style="color:#24292E;--shiki-dark:#61AFEF;">cos</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(angle)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">ny </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> y </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> step</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">*</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> math.</span><span style="color:#24292E;--shiki-dark:#61AFEF;">sin</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(angle)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> nx, ny</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>import math</code> 语句表示导入 <code>math</code> 包，并允许后续代码引用 <code>math</code> 包里的 <code>sin</code>、<code>cos</code> 等函数。</p><p>然后，我们就可以同时获得返回值:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> x, y </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#24292E;--shiki-dark:#61AFEF;"> move</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#005CC5;--shiki-dark:#D19A66;">100</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#005CC5;--shiki-dark:#D19A66;">100</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#005CC5;--shiki-dark:#D19A66;">60</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, math.pi </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 6</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(x, y)</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#D19A66;">151.96152422706632</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 70.0</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但其实这只是一种假象，Python 函数返回的仍然是单一值:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> r </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#24292E;--shiki-dark:#61AFEF;"> move</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#005CC5;--shiki-dark:#D19A66;">100</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#005CC5;--shiki-dark:#D19A66;">100</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#005CC5;--shiki-dark:#D19A66;">60</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, math.pi </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 6</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(r)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#005CC5;--shiki-dark:#D19A66;">151.96152422706632</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#005CC5;--shiki-dark:#D19A66;">70.0</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原来返回值是一个 tuple! 但是，在语法上，返回一个 tuple 可以省略括号，而多个变量可以同时接收一个 tuple，按位置赋给对应的值，所以，Python 的函数返回多值其实就是返回一个 tuple，但写起来更方便。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>定义函数时，需要确定函数名和参数个数；</p><p>如果有必要，可以先对参数的数据类型做检查；</p><p>函数体内部可以用 <code>return</code> 随时返回函数结果；</p><p>函数执行完毕也没有 <code>return</code> 语句时，自动 <code>return None</code>。</p><p>函数可以同时返回多个值，但其实就是一个 tuple。</p>`,34);function F(m,b){const i=l("RouteLink");return p(),r("div",null,[k,o(" more "),h,a("p",null,[y,s(" 的用法在后续 "),t(i,{to:"/code/language/python/module/"},{default:d(()=>[s("模块")]),_:1}),s(" 一节中会详细介绍。")]),B])}const A=e(c,[["render",F],["__file","define.html.vue"]]),C=JSON.parse('{"path":"/code/language/python/function/define.html","title":"定义函数","lang":"zh-CN","frontmatter":{"title":"定义函数","icon":"define","author":"廖雪峰","date":"2020-05-26T00:00:00.000Z","category":"Python","description":"在 Python 中，定义一个函数要使用 def 语句，依次写出函数名、括号、括号中的参数和冒号 :，然后，在缩进块中编写函数体，函数的返回值用 return 语句返回。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/python/function/define.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"定义函数"}],["meta",{"property":"og:description","content":"在 Python 中，定义一个函数要使用 def 语句，依次写出函数名、括号、括号中的参数和冒号 :，然后，在缩进块中编写函数体，函数的返回值用 return 语句返回。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"定义函数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-26T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-06T16:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"空函数","slug":"空函数","link":"#空函数","children":[]},{"level":2,"title":"参数检查","slug":"参数检查","link":"#参数检查","children":[]},{"level":2,"title":"返回多个值","slug":"返回多个值","link":"#返回多个值","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":7},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":3.97,"words":1192},"filePathRelative":"code/language/python/function/define.md","localizedDate":"2020年5月26日","excerpt":"<p>在 Python 中，定义一个函数要使用 <code>def</code> 语句，依次写出函数名、括号、括号中的参数和冒号 <code>:</code>，然后，在缩进块中编写函数体，函数的返回值用 <code>return</code> 语句返回。</p>\\n","autoDesc":true}');export{A as comp,C as data};
