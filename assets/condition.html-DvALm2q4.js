import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,d as l,e as s,f as a,b as o}from"./app-C6d_tW6U.js";const r={},p=s("p",null,"计算机之所以能做很多自动化的任务，因为它可以自己做条件判断。",-1),d=s("p",null,[a("比如，输入用户年龄，根据年龄打印不同的内容，在 Python 程序中，用 "),s("code",null,"if"),a(" 语句实现:")],-1),t=o(`<div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">age </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 20</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">if</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> age </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;=</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 18</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;your age is&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, age)</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;adult&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据 Python 的缩进规则，如果 <code>if</code> 语句判断是 <code>True</code>，就把缩进的两行 <code>print</code> 语句执行了，否则，什么也不做。</p><p>也可以给 <code>if</code> 添加一个 <code>else</code> 语句，意思是，如果 <code>if</code> 判断是 <code>False</code>，不要执行 <code>if</code> 的内容，去把 <code>else</code> 执行了:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">age </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 3</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">if</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> age </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;=</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 18</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;your age is&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, age)</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;adult&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">else</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;your age is&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, age)</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;teenager&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意不要少写了冒号 <code>:</code>。</p><p>当然上面的判断是很粗略的，完全可以用 <code>elif</code> 做更细致的判断:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">age </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 3</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">if</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> age </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;=</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 18</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;adult&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">elif</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> age </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;=</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 6</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;teenager&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">else</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;kid&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>elif</code> 是 <code>else if</code> 的缩写，完全可以有多个 <code>elif</code>，所以 <code>if</code> 语句的完整形式就是:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">if</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> &lt;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">条件判断1</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">    &lt;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">执行1</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">elif</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> &lt;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">条件判断2</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">    &lt;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">执行2</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">elif</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> &lt;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">条件判断3</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">    &lt;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">执行3</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">else</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">    &lt;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">执行4</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>if</code> 语句执行有个特点，它是从上往下判断，如果在某个判断上是 <code>True</code>，把该判断对应的语句执行后，就忽略掉剩下的 <code>elif</code> 和 <code>else</code>，所以，请测试并解释为什么下面的程序打印的是 <code>teenager</code>:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">age </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 20</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">if</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> age </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;=</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 6</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;teenager&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">elif</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> age </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;=</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 18</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;adult&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">else</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;kid&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>if</code> 判断条件还可以简写，比如写:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">if</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> x:</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;True&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>只要 <code>x</code> 是非零数值、非空字符串、非空 list 等，就判断为 <code>True</code>，否则为 <code>False</code>。</p><h2 id="再议-input" tabindex="-1"><a class="header-anchor" href="#再议-input"><span>再议 input</span></a></h2><p>最后看一个有问题的条件判断。很多同学会用 <code>input()</code> 读取用户的输入，这样可以自己输入，程序运行得更有意思:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">birth </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> input</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;birth: &#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">if</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> birth </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 2000</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;00前&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">else</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;00后&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入 1982，结果报错:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Traceback</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (most </span><span style="color:#032F62;--shiki-dark:#98C379;">recent</span><span style="color:#032F62;--shiki-dark:#98C379;"> call</span><span style="color:#032F62;--shiki-dark:#98C379;"> last</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  File</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;&lt;stdin&gt;&quot;,</span><span style="color:#032F62;--shiki-dark:#98C379;"> line</span><span style="color:#032F62;--shiki-dark:#98C379;"> 1,</span><span style="color:#032F62;--shiki-dark:#98C379;"> in</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#032F62;--shiki-dark:#98C379;">modul</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">e</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">TypeError:</span><span style="color:#032F62;--shiki-dark:#98C379;"> unorderable</span><span style="color:#032F62;--shiki-dark:#98C379;"> types:</span><span style="color:#032F62;--shiki-dark:#98C379;"> str</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">() </span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#032F62;--shiki-dark:#98C379;"> int</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为 <code>input()</code> 返回的数据类型是 <code>str</code>，<code>str</code> 不能直接和整数比较，必须先把 <code>str</code> 转换成整数。Python 提供了 <code>int()</code> 函数来完成这件事情:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">s </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> input</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;birth: &#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">birth </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> int</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(s)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">if</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> birth </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 2000</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;00前&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">else</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;00后&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次运行，就可以得到正确地结果。但是，如果输入 <code>abc</code> 呢? 又会得到一个错误信息:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Traceback</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (most </span><span style="color:#032F62;--shiki-dark:#98C379;">recent</span><span style="color:#032F62;--shiki-dark:#98C379;"> call</span><span style="color:#032F62;--shiki-dark:#98C379;"> last</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  File</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;&lt;stdin&gt;&quot;,</span><span style="color:#032F62;--shiki-dark:#98C379;"> line</span><span style="color:#032F62;--shiki-dark:#98C379;"> 1,</span><span style="color:#032F62;--shiki-dark:#98C379;"> in</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#032F62;--shiki-dark:#98C379;">modul</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">e</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">ValueError:</span><span style="color:#032F62;--shiki-dark:#98C379;"> invalid</span><span style="color:#032F62;--shiki-dark:#98C379;"> literal</span><span style="color:#032F62;--shiki-dark:#98C379;"> for</span><span style="color:#032F62;--shiki-dark:#98C379;"> int</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">() </span><span style="color:#032F62;--shiki-dark:#98C379;">with</span><span style="color:#032F62;--shiki-dark:#98C379;"> base</span><span style="color:#032F62;--shiki-dark:#98C379;"> 10:</span><span style="color:#032F62;--shiki-dark:#98C379;"> &#39;abc&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原来 <code>int()</code> 函数发现一个字符串并不是合法的数字时就会报错，程序就退出了。</p><p>如何检查并捕获程序运行期的错误呢? 后面的错误和调试会讲到。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>条件判断可以让计算机自己做选择，Python 的 <code>if...elif...else</code> 很灵活。</p><p>条件判断从上向下匹配，当满足条件时执行对应的块内语句，后续的 <code>elif</code> 和 <code>else</code> 都不再执行。</p>`,28);function c(k,h){return n(),e("div",null,[p,d,l(" more "),t])}const C=i(r,[["render",c],["__file","condition.html.vue"]]),u=JSON.parse('{"path":"/code/language/python/guide/condition.html","title":"条件判断","lang":"zh-CN","frontmatter":{"title":"条件判断","icon":"condition","author":"廖雪峰","date":"2020-05-24T00:00:00.000Z","category":"Python","description":"计算机之所以能做很多自动化的任务，因为它可以自己做条件判断。 比如，输入用户年龄，根据年龄打印不同的内容，在 Python 程序中，用 if 语句实现:","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/python/guide/condition.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"条件判断"}],["meta",{"property":"og:description","content":"计算机之所以能做很多自动化的任务，因为它可以自己做条件判断。 比如，输入用户年龄，根据年龄打印不同的内容，在 Python 程序中，用 if 语句实现:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"条件判断\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-24T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-06T16:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"再议 input","slug":"再议-input","link":"#再议-input","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":2.47,"words":742},"filePathRelative":"code/language/python/guide/condition.md","localizedDate":"2020年5月24日","excerpt":"<p>计算机之所以能做很多自动化的任务，因为它可以自己做条件判断。</p>\\n<p>比如，输入用户年龄，根据年龄打印不同的内容，在 Python 程序中，用 <code>if</code> 语句实现:</p>\\n","autoDesc":true}');export{C as comp,u as data};
