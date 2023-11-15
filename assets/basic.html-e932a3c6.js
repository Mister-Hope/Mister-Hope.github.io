import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,f as p,d as a,e as n,b as o}from"./app-0f8c396e.js";const c={},d=a("p",null,"Python 是一种计算机编程语言。计算机编程语言和我们日常使用的自然语言有所不同，最大的区别就是，自然语言在不同的语境下有不同的理解，而计算机要根据编程语言执行任务，就必须保证编程语言写出的程序决不能有歧义，所以，任何一种编程语言都有自己的一套语法，编译器或者解释器就是负责把符合语法的程序代码转换成 CPU 能够执行的机器码，然后执行。Python 也不例外。",-1),l=o(`<p>Python 的语法比较简单，采用缩进方式，写出来的代码就像下面的样子:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># print absolute value of an integer:</span>
a <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">if</span> a <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token operator">-</span>a<span class="token punctuation">)</span>
</code></pre></div><p>以 <code>#</code> 开头的语句是注释，注释是给人看的，可以是任意内容，解释器会忽略掉注释。其他每一行都是一个语句，当语句以冒号 <code>:</code> 结尾时，缩进的语句视为代码块。</p><div class="hint-container tip"><p class="hint-container-title">Python 中的缩进</p><p>缩进有利有弊。好处是强迫您写出格式化的代码，但没有规定缩进是几个空格还是 Tab。按照约定俗成的惯例，应该始终坚持使用 4 个空格的缩进。</p><p>缩进的另一个好处是强迫您写出缩进较少的代码，您会倾向于把一段很长的代码拆分成若干函数，从而得到缩进较少的代码。</p><p>缩进的坏处就是“复制－粘贴”功能失效了，这是最坑爹的地方。当您重构代码时，粘贴过去的代码必须重新检查缩进是否正确。此外，IDE 很难像格式化 Java 代码那样格式化 Python 代码。</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>Python 程序是大小写敏感的，如果写错了大小写，程序会报错。</p></div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><p>计算机顾名思义就是可以做数学计算的机器，因此，计算机程序理所当然地可以处理各种数值。但是，计算机能处理的远不止数值，还可以处理文本、图形、音频、视频、网页等各种各样的数据，不同的数据，需要定义不同的数据类型。在 Python 中，能够直接处理的数据类型有以下几种:</p><h3 id="整数" tabindex="-1"><a class="header-anchor" href="#整数" aria-hidden="true">#</a> 整数</h3><p>Python 可以处理任意大小的整数，当然包括负整数，在程序中的表示方法和数学上的写法一模一样，例如: <code>1</code>，<code>100</code>，<code>-8080</code>，<code>0</code>，等等。</p><p>计算机由于使用二进制，所以，有时候用十六进制表示整数比较方便，十六进制用 <code>0x</code> 前缀和 <code>0-9</code>，<code>a-f</code> 表示，例如: <code>0xff00</code>，<code>0xa5b4c3d2</code>，等等。</p><h3 id="浮点数" tabindex="-1"><a class="header-anchor" href="#浮点数" aria-hidden="true">#</a> 浮点数</h3><p>浮点数也就是小数，之所以称为浮点数，是因为按照科学记数法表示时，一个浮点数的小数点位置是可变的，比如，1.23x10<sup>9</sup> 和 <code>12.3x108</code> 是完全相等的。浮点数可以用数学写法，如 <code>1.23</code>，<code>3.14</code>，<code>-9.01</code>，等等。但是对于很大或很小的浮点数，就必须用科学计数法表示，把 <code>10</code> 用 <code>e</code> 替代，1.23x10<sup>9</sup> 就是 <code>1.23e9</code>，或者 <code>12.3e8</code>，<code>0.000012</code> 可以写成 <code>1.2e-5</code>，等等。</p><p>整数和浮点数在计算机内部存储的方式是不同的，整数运算永远是精确的(除法难道也是精确的? 是的! )，而浮点数运算则可能会有四舍五入的误差。</p><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h3><h4 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h4><p>字符串是以单引号 <code>&#39;</code> 或双引号 <code>&quot;</code> 括起来的任意文本，比如 <code>&#39;abc&#39;</code>，<code>&quot;xyz&quot;</code> 等等。请注意，<code>&#39;&#39;</code> 或 <code>&quot;&quot;</code> 本身只是一种表示方式，不是字符串的一部分，因此，字符串 <code>&#39;abc&#39;</code> 只有 <code>a</code>，<code>b</code>，<code>c</code> 这 3 个字符。如果 <code>&#39;</code> 本身也是一个字符，那就可以用 <code>&quot;&quot;</code> 括起来，比如 <code>&quot;I&#39;m OK&quot;</code> 包含的字符是 <code>I</code>，<code>&#39;</code>，<code>m</code>，空格，<code>O</code>，<code>K</code> 这 6 个字符。</p><h4 id="转义" tabindex="-1"><a class="header-anchor" href="#转义" aria-hidden="true">#</a> 转义</h4><p>如果字符串内部既包含 <code>&#39;</code> 又包含 <code>&quot;</code> 怎么办? 可以用转义字符 <code>\\</code> 来标识，比如:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token string">&#39;I\\&#39;m \\&quot;OK\\&quot;!&#39;</span>
</code></pre></div><p>表示的字符串内容是:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>I&#39;m &quot;OK&quot;!
</code></pre></div><p>转义字符 <code>\\</code> 可以转义很多字符，比如 <code>\\n</code> 表示换行，<code>\\t</code> 表示制表符，字符 <code>\\</code> 本身也要转义，所以 <code>\\\\</code> 表示的字符就是 <code>\\</code>，可以在 Python 的交互式命令行用 <code>print()</code> 打印字符串看看:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;I\\&#39;m ok.&#39;</span><span class="token punctuation">)</span>
I&#39;m ok<span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;I\\&#39;m learning\\nPython.&#39;</span><span class="token punctuation">)</span>
I&#39;m learning
Python<span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\\\\\n\\\\&#39;</span><span class="token punctuation">)</span>
\\
\\
</code></pre></div><h3 id="非转义字符串" tabindex="-1"><a class="header-anchor" href="#非转义字符串" aria-hidden="true">#</a> 非转义字符串</h3><p>如果字符串里面有很多字符都需要转义，就需要加很多 <code>\\</code>，为了简化，Python 还允许用 <code>r&#39;&#39;</code> 表示 <code>&#39;&#39;</code> 内部的字符串默认不转义，可以自己试试:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\\\\\t\\\\&#39;</span><span class="token punctuation">)</span>
\\       \\
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">r&#39;\\\\\\t\\\\&#39;</span><span class="token punctuation">)</span>
\\\\\\t\\\\
</code></pre></div><h3 id="多行字符串" tabindex="-1"><a class="header-anchor" href="#多行字符串" aria-hidden="true">#</a> 多行字符串</h3><p>如果字符串内部有很多换行，用 <code>\\n</code> 写在一行里不好阅读，为了简化，Python 允许用 <code>&#39;&#39;&#39;...&#39;&#39;&#39;</code> 的格式表示多行内容，可以自己试试:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token triple-quoted-string string">&#39;&#39;&#39;line1
... line2
... line3&#39;&#39;&#39;</span><span class="token punctuation">)</span>
line1
line2
line3
</code></pre></div><p>上面是在交互式命令行内输入，注意在输入多行内容时，提示符由 <code>&gt;&gt;&gt;</code> 变为 <code>...</code>，提示您可以接着上一行输入，注意 <code>...</code> 是提示符，不是代码的一部分:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>┌────────────────────────────────────────────────────────┐
│Command Prompt - python                           _ □ x │
├────────────────────────────────────────────────────────┤
│&gt;&gt;&gt; print(&#39;&#39;&#39;line1                                      │
│... line2                                               │
│... line3&#39;&#39;&#39;)                                           │
│line1                                                   │
│line2                                                   │
│line3                                                   │
│                                                        │
│&gt;&gt;&gt;_                                                    │
│                                                        │
└────────────────────────────────────────────────────────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当输入完结束符 <code>\`\`\`</code> 和括号 <code>)</code> 后，执行该语句并打印结果。</p><p>如果写成程序并存为 <code>.py</code> 文件，就是:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token triple-quoted-string string">&#39;&#39;&#39;line1
line2
line3&#39;&#39;&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>多行字符串 <code>&#39;&#39;&#39;...&#39;&#39;&#39;</code> 还可以在前面加上 <code>r</code> 使用，请自行测试:</p><h3 id="布尔值" tabindex="-1"><a class="header-anchor" href="#布尔值" aria-hidden="true">#</a> 布尔值</h3><p>布尔值和布尔代数的表示完全一致，一个布尔值只有 <code>True</code>、<code>False</code> 两种值，在 Python 中，可以直接用 <code>True</code>、<code>False</code> 表示布尔值(请注意大小写)，也可以通过布尔运算计算出来:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token boolean">True</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token boolean">False</span>
<span class="token boolean">False</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">3</span> <span class="token operator">&gt;</span> <span class="token number">2</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">3</span> <span class="token operator">&gt;</span> <span class="token number">5</span>
<span class="token boolean">False</span>
</code></pre></div><p>布尔值可以用 <code>and</code>、<code>or</code> 和 <code>not</code> 运算。</p><p><code>and</code> 运算是与运算，只有所有都为 <code>True</code>，<code>and</code> 运算结果才是 <code>True</code>:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token boolean">True</span> <span class="token keyword">and</span> <span class="token boolean">True</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token boolean">True</span> <span class="token keyword">and</span> <span class="token boolean">False</span>
<span class="token boolean">False</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token boolean">False</span> <span class="token keyword">and</span> <span class="token boolean">False</span>
<span class="token boolean">False</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token operator">&gt;</span> <span class="token number">3</span> <span class="token keyword">and</span> <span class="token number">3</span> <span class="token operator">&gt;</span> <span class="token number">1</span>
<span class="token boolean">True</span>
</code></pre></div><p><code>or</code> 运算是或运算，只要其中有一个为 <code>True</code>，<code>or</code> 运算结果就是 <code>True</code>:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token boolean">True</span> <span class="token keyword">or</span> <span class="token boolean">True</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token boolean">True</span> <span class="token keyword">or</span> <span class="token boolean">False</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token boolean">False</span> <span class="token keyword">or</span> <span class="token boolean">False</span>
<span class="token boolean">False</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token operator">&gt;</span> <span class="token number">3</span> <span class="token keyword">or</span> <span class="token number">1</span> <span class="token operator">&gt;</span> <span class="token number">3</span>
<span class="token boolean">True</span>
</code></pre></div><p><code>not</code> 运算是非运算，它是一个单目运算符，把 <code>True</code> 变成 <code>False</code>，<code>False</code> 变成 <code>True</code>:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">not</span> <span class="token boolean">True</span>
<span class="token boolean">False</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">not</span> <span class="token boolean">False</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">not</span> <span class="token number">1</span> <span class="token operator">&gt;</span> <span class="token number">2</span>
<span class="token boolean">True</span>
</code></pre></div><p>布尔值经常用在条件判断中，比如:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;adult&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;teenager&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="空值" tabindex="-1"><a class="header-anchor" href="#空值" aria-hidden="true">#</a> 空值</h3><p>空值是 Python 里一个特殊的值，用 <code>None</code> 表示。<code>None</code> 不能理解为 <code>0</code>，因为 <code>0</code> 是有意义的，而 <code>None</code> 是一个特殊的空值。</p><p>此外，Python 还提供了列表、字典等多种数据类型，还允许创建自定义数据类型，我们后面会继续讲到。</p><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p>变量的概念基本上和初中代数的方程变量是一致的，只是在计算机程序中，变量不仅可以是数字，还可以是任意数据类型。</p><p>变量在程序中就是用一个变量名表示了，变量名必须是大小写英文、数字和 <code>_</code> 的组合，且不能用数字开头，比如:</p><div class="language-python" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
</code></pre></div><p>变量 <code>a</code> 是一个整数。</p><div class="language-python" data-ext="py"><pre class="language-python"><code>t_007 <span class="token operator">=</span> <span class="token string">&#39;T007&#39;</span>
</code></pre></div><p>变量 <code>t_007</code> 是一个字符串。</p><div class="language-python" data-ext="py"><pre class="language-python"><code>Answer <span class="token operator">=</span> <span class="token boolean">True</span>
</code></pre></div><p>变量 <code>Answer</code> 是一个布尔值 <code>True</code>。</p><p>在 Python 中，等号 <code>=</code> 是赋值语句，可以把任意数据类型赋值给变量，同一个变量可以反复赋值，而且可以是不同类型的变量，例如:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>

a <span class="token operator">=</span> <span class="token number">123</span> <span class="token comment"># a是整数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
a <span class="token operator">=</span> <span class="token string">&#39;ABC&#39;</span> <span class="token comment"># a变为字符串</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
</code></pre></div><p>这种变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。例如 Java 是静态语言，赋值语句如下(<code>//</code> 表示注释):</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// a是整数类型变量</span>
a <span class="token operator">=</span> <span class="token string">&quot;ABC&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 错误:不能把字符串赋给整型变量</span>
</code></pre></div><p>和静态语言相比，动态语言更灵活，就是这个原因。</p><p>请不要把赋值语句的等号等同于数学的等号。比如下面的代码:</p><div class="language-python" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token number">10</span>
x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">2</span>
</code></pre></div><p>如果从数学上理解 <code>x = x + 2</code> 那无论如何是不成立的，在程序中，赋值语句先计算右侧的表达式 <code>x + 2</code>，得到结果 <code>12</code>，再赋给变量 <code>x</code>。由于 <code>x</code> 之前的值是 <code>10</code>，重新赋值后，<code>x</code> 的值变成 <code>12</code>。</p><p>最后，理解变量在计算机内存中的表示也非常重要。当我们写:</p><div class="language-python" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token string">&#39;ABC&#39;</span>
</code></pre></div><p>时，Python 解释器干了两件事情:</p><ol><li><p>在内存中创建了一个 <code>&#39;ABC&#39;</code> 的字符串；</p></li><li><p>在内存中创建了一个名为 a 的变量，并把它指向 <code>&#39;ABC&#39;</code>。</p></li></ol><p>也可以把一个变量 a 赋值给另一个变量 b，这个操作实际上是把变量 b 指向变量 a 所指向的数据，例如下面的代码:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>

a <span class="token operator">=</span> <span class="token string">&#39;ABC&#39;</span>
b <span class="token operator">=</span> a
a <span class="token operator">=</span> <span class="token string">&#39;XYZ&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
</code></pre></div><p>最后一行打印出变量 b 的内容到底是 <code>&#39;ABC&#39;</code> 呢还是 <code>&#39;XYZ&#39;</code>? 如果从数学意义上理解，就会错误地得出 b 和 a 相同，也应该是 <code>&#39;XYZ&#39;</code>，但实际上 b 的值是 <code>&#39;ABC&#39;</code>，让我们一行一行地执行代码，就可以看到到底发生了什么事:</p><ol><li><p>执行 <code>a = &#39;ABC</code>&#39;，解释器创建了字符串 <code>&#39;ABC&#39;</code> 和变量 a，并把 a 指向 <code>&#39;ABC&#39;</code></p></li><li><p>执行 <code>b = a</code>，解释器创建了变量 b，并把 b 指向 a 指向的字符串 <code>&#39;ABC&#39;</code></p></li><li><p>执行 <code>a = &#39;XYZ&#39;</code>，解释器创建了字符串 <code>&#39;XYZ&#39;</code>，并把 a 的指向改为 <code>&#39;XYZ&#39;</code>，但 b 并没有更改</p></li><li><p>所以，最后打印变量 b 的结果自然是 <code>&#39;ABC&#39;</code> 了。</p></li></ol><h3 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h3><p>所谓常量就是不能变的变量，比如常用的数学常数 π 就是一个常量。在 Python 中，通常用全部大写的变量名表示常量:</p><div class="language-python" data-ext="py"><pre class="language-python"><code>PI <span class="token operator">=</span> <span class="token number">3.14159265359</span>
</code></pre></div><p>但事实上 PI 仍然是一个变量，Python 根本没有任何机制保证 PI 不会被改变，所以，用全部大写的变量名表示常量只是一个习惯上的用法，如果您一定要改变变量 PI 的值，也没人能拦住您。</p><p>最后解释一下整数的除法为什么也是精确的。在 Python 中，有两种除法，一种除法是 <code>/</code>:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">3</span>
<span class="token number">3.3333333333333335</span>
</code></pre></div><p><code>/</code> 除法计算结果是浮点数，即使是两个整数恰好整除，结果也是浮点数:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">9</span> <span class="token operator">/</span> <span class="token number">3</span>
<span class="token number">3.0</span>
</code></pre></div><p>还有一种除法是 <code>//</code>，称为地板除，两个整数的除法仍然是整数:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token operator">//</span> <span class="token number">3</span>
<span class="token number">3</span>
</code></pre></div><p>您没有看错，整数的地板除 <code>//</code> 永远是整数，即使除不尽。要做精确的除法，使用 <code>/</code> 就可以。</p><p>因为 <code>//</code> 除法只取结果的整数部分，所以 Python 还提供一个余数运算 <code>%</code>，可以得到两个整数相除的余数:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token operator">%</span> <span class="token number">3</span>
<span class="token number">1</span>
</code></pre></div><p>无论整数做 <code>//</code> 除法还是取余数，结果永远是整数，所以，整数运算结果永远是精确的。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>Python 支持多种数据类型，在计算机内部，可以把任何数据都看成一个“对象”，而变量就是在程序中用来指向这些数据对象的，对变量赋值就是把数据和变量给关联起来。</p><p>对变量赋值 <code>x = y</code> 是把变量 x 指向真正的对象，该对象是变量 y 所指向的。随后对变量 y 的赋值不影响变量 x 的指向。</p>`,92),r={class:"MathJax",jax:"SVG",style:{position:"relative"}},T={style:{"vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"13.072ex",height:"1.717ex",role:"img",focusable:"false",viewBox:"0 -677 5778 759","aria-hidden":"true"},i=o('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path></g><g data-mml-node="mn" transform="translate(778,0)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" transform="translate(500,0)"></path><path data-c="34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z" transform="translate(1000,0)"></path><path data-c="37" d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z" transform="translate(1500,0)"></path><path data-c="34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z" transform="translate(2000,0)"></path><path data-c="38" d="M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z" transform="translate(2500,0)"></path><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" transform="translate(3000,0)"></path><path data-c="36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z" transform="translate(3500,0)"></path><path data-c="34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z" transform="translate(4000,0)"></path><path data-c="38" d="M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z" transform="translate(4500,0)"></path></g></g></g>',1),Q=[i],k=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mo",null,"−"),a("mn",null,"2147483648")])],-1),u={class:"MathJax",jax:"SVG",style:{position:"relative"}},g={style:{"vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"11.312ex",height:"1.581ex",role:"img",focusable:"false",viewBox:"0 -677 5000 699","aria-hidden":"true"},h=o('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" transform="translate(500,0)"></path><path data-c="34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z" transform="translate(1000,0)"></path><path data-c="37" d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z" transform="translate(1500,0)"></path><path data-c="34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z" transform="translate(2000,0)"></path><path data-c="38" d="M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z" transform="translate(2500,0)"></path><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" transform="translate(3000,0)"></path><path data-c="36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z" transform="translate(3500,0)"></path><path data-c="34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z" transform="translate(4000,0)"></path><path data-c="37" d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z" transform="translate(4500,0)"></path></g></g></g>',1),m=[h],y=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mn",null,"2147483647")])],-1),b=a("p",null,[n("Python 的浮点数也没有大小限制，但是超出一定范围就直接表示为 "),a("code",null,"inf"),n("(无限大)。")],-1);function v(V,x){return s(),e("div",null,[d,p(" more "),l,a("p",null,[n("Python 的整数没有大小限制，而某些语言的整数根据其存储长度是有大小限制的，例如 Java 对 32 位整数的范围限制在 "),a("mjx-container",r,[(s(),e("svg",T,Q)),k]),n(" ~ "),a("mjx-container",u,[(s(),e("svg",g,m)),y]),n("。")]),b])}const f=t(c,[["render",v],["__file","basic.html.vue"]]);export{f as default};
