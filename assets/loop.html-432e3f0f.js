import{_ as e,X as o,Y as p,a1 as c,$ as s,a0 as n,Z as t,a3 as l,C as i}from"./framework-a91f7991.js";const d={},r=s("p",null,[n("Bash 提供三种循环语法 "),s("code",null,"for"),n("、"),s("code",null,"while"),n(" 和 "),s("code",null,"until"),n("。")],-1),k=l(`<h2 id="while-循环" tabindex="-1"><a class="header-anchor" href="#while-循环" aria-hidden="true">#</a> while 循环</h2><p><code>while</code> 循环有一个判断条件，只要符合条件，就不断循环执行指定的语句。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> condition<span class="token punctuation">;</span> <span class="token keyword">do</span>
  commands
<span class="token keyword">done</span>
</code></pre></div><p>上面代码中，只要满足条件 <code>condition</code>，就会执行命令 <code>commands</code>。然后，再次判断是否满足条件 <code>condition</code>，只要满足，就会一直执行下去。只有不满足条件，才会退出循环。</p><p>循环条件 <code>condition</code> 可以使用 <code>test</code> 命令，跟 <code>if</code> 结构的判断条件写法一致。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$number</span>&quot;</span> <span class="token parameter variable">-lt</span> <span class="token number">10</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Number = <span class="token variable">$number</span>&quot;</span>
  <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>number <span class="token operator">+</span> <span class="token number">1</span><span class="token variable">))</span></span>
<span class="token keyword">done</span>
</code></pre></div><p>上面例子中，只要变量 <code>$number</code> 小于 10，就会不断加 1，直到 <code>$number</code> 等于 10，然后退出循环。</p><p>关键字 <code>do</code> 可以跟 <code>while</code> 不在同一行，这时两者之间不需要使用分号分隔。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token boolean">true</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hi, while looping ...&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">done</span>
</code></pre></div><p>上面的例子会无限循环，可以按下 <code>Ctrl + c</code> 停止。</p><p><code>while</code> 循环写成一行，也是可以的。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hi, while looping ...&#39;</span><span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre></div><p><code>while</code> 的条件部分也可以是执行一个命令。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;ECHO&#39;</span><span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hi, while looping ...&#39;</span><span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre></div><p>上面例子中，判断条件是 <code>echo &#39;ECHO&#39;</code>。由于这个命令总是执行成功，所以上面命令会产生无限循环。</p><p><code>while</code> 的条件部分可以执行任意数量的命令，但是执行结果的真伪只看最后一个命令的执行结果。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hi, looping ...&#39;</span><span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre></div><p>上面代码运行后，不会有任何输出，因为 <code>while</code> 的最后一个命令是 <code>false</code>。</p><h2 id="until-循环" tabindex="-1"><a class="header-anchor" href="#until-循环" aria-hidden="true">#</a> until 循环</h2><p><code>until</code> 循环与 <code>while</code> 循环恰好相反，只要不符合判断条件(判断条件失败)，就不断循环执行指定的语句。一旦符合判断条件，就退出循环。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">until</span> condition<span class="token punctuation">;</span> <span class="token keyword">do</span>
  commands
<span class="token keyword">done</span>
</code></pre></div><p>关键字 <code>do</code> 可以与 <code>until</code> 不写在同一行，这时两者之间不需要分号分隔。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">until</span> condition
<span class="token keyword">do</span>
  commands
<span class="token keyword">done</span>
</code></pre></div><p>下面是一个例子。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token keyword">until</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hi, until looping ...&#39;</span><span class="token punctuation">;</span> <span class="token keyword">done</span>
Hi, <span class="token keyword">until</span> looping <span class="token punctuation">..</span>.
Hi, <span class="token keyword">until</span> looping <span class="token punctuation">..</span>.
Hi, <span class="token keyword">until</span> looping <span class="token punctuation">..</span>.
^C
</code></pre></div><p>上面代码中，<code>until</code> 的部分一直为 <code>false</code>，导致命令无限运行，必须按下 <code>Ctrl + c</code> 终止。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">until</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$number</span>&quot;</span> <span class="token parameter variable">-ge</span> <span class="token number">10</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Number = <span class="token variable">$number</span>&quot;</span>
  <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>number <span class="token operator">+</span> <span class="token number">1</span><span class="token variable">))</span></span>
<span class="token keyword">done</span>
</code></pre></div><p>上面例子中，只要变量 <code>number</code> 小于 10，就会不断加 1，直到 <code>number</code> 大于等于 10，就退出循环。</p><p><code>until</code> 的条件部分也可以是一个命令，表示在这个命令执行成功之前，不断重复尝试。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">until</span> <span class="token function">cp</span> <span class="token variable">$1</span> <span class="token variable">$2</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&#39;Attempt to copy failed. waiting...&#39;</span>
  <span class="token function">sleep</span> <span class="token number">5</span>
<span class="token keyword">done</span>
</code></pre></div><p>上面例子表示，只要 <code>cp $1 $2</code> 这个命令执行不成功，就 5 秒钟后再尝试一次，直到成功为止。</p><p><code>until</code> 循环都可以转为 <code>while</code> 循环，只要把条件设为否定即可。上面这个例子可以改写如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token operator">!</span> <span class="token function">cp</span> <span class="token variable">$1</span> <span class="token variable">$2</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&#39;Attempt to copy failed. waiting...&#39;</span>
  <span class="token function">sleep</span> <span class="token number">5</span>
<span class="token keyword">done</span>
</code></pre></div><p>一般来说，<code>until</code> 用得比较少，完全可以统一都使用 <code>while</code>。</p><h2 id="for-in-循环" tabindex="-1"><a class="header-anchor" href="#for-in-循环" aria-hidden="true">#</a> <code>for...in</code> 循环</h2><p><code>for...in</code> 循环用于遍历列表的每一项。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">variable</span> <span class="token keyword">in</span> list
<span class="token keyword">do</span>
  commands
<span class="token keyword">done</span>
</code></pre></div><p>上面语法中，<code>for</code> 循环会依次从 <code>list</code> 列表中取出一项，作为变量 <code>variable</code>，然后在循环体中进行处理。</p><p>关键词 <code>do</code> 可以跟 <code>for</code> 写在同一行，两者使用分号分隔。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">variable</span> <span class="token keyword">in</span> list<span class="token punctuation">;</span> <span class="token keyword">do</span>
  commands
<span class="token keyword">done</span>
</code></pre></div><p>下面是一个例子。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> word1 word2 word3<span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>
</code></pre></div><p>上面例子中，<code>word1 word2 word3</code> 是一个包含三个单词的列表，变量 <code>i</code> 依次等于 <code>word1</code>、<code>word2</code>、<code>word3</code>，命令 <code>echo $i</code> 则会相应地执行三次。</p><p>列表可以由通配符产生。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> *.png<span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>
</code></pre></div><p>上面例子中，<code>*.png</code> 会替换成当前目录中所有 PNG 图片文件，变量 <code>i</code> 会依次等于每一个文件。</p><p>列表也可以通过子命令产生。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> ~/.bash_profile<span class="token variable">)</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token variable">))</span></span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Word <span class="token variable">$count</span> (<span class="token variable">$i</span>) contains <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> $i <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-c</span><span class="token variable">)</span></span> characters&quot;</span>
<span class="token keyword">done</span>
</code></pre></div><p>上面例子中，<code>cat ~/.bash_profile</code> 命令会输出 <code>~/.bash_profile</code> 文件的内容，然后通过遍历每一个词，计算该文件一共包含多少个词，以及每个词有多少个字符。</p><p><code>in list</code> 的部分可以省略，这时 <code>list</code> 默认等于脚本的所有参数 <code>$@</code>。但是，为了可读性，最好还是不要省略，参考下面的例子。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> filename<span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$filename</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token comment"># 等同于</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">filename</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span> <span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$filename</span>&quot;</span>
<span class="token keyword">done</span>
</code></pre></div><p>在函数体中也是一样的，<code>for...in</code> 循环省略 <code>in list</code> 的部分，则 <code>list</code> 默认等于函数的所有参数。</p><h2 id="for-循环" tabindex="-1"><a class="header-anchor" href="#for-循环" aria-hidden="true">#</a> for 循环</h2><p><code>for</code> 循环还支持 C 语言的循环语法。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> expression1<span class="token punctuation">;</span> expression2<span class="token punctuation">;</span> expression3 <span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  commands
<span class="token keyword">done</span>
</code></pre></div><p>上面代码中，<code>expression1</code> 用来初始化循环条件，<code>expression2</code> 用来决定循环结束的条件，<code>expression3</code> 在每次循环迭代的末尾执行，用于更新值。</p><p>注意，循环条件放在双重圆括号之中。另外，圆括号之中使用变量，不必加上美元符号 <code>$</code>。</p><p>它等同于下面的 <code>while</code> 循环。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token variable"><span class="token punctuation">((</span> expression1 <span class="token punctuation">))</span></span>
<span class="token keyword">while</span> <span class="token variable"><span class="token punctuation">((</span> expression2 <span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  commands
  <span class="token variable"><span class="token punctuation">((</span> expression3 <span class="token punctuation">))</span></span>
<span class="token keyword">done</span>
</code></pre></div><p>下面是一个例子。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span> <span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>
</code></pre></div><p>上面代码中，初始化变量 <code>i</code> 的值为 0，循环执行的条件是 <code>i</code> 小于 5。每次循环迭代结束时，<code>i</code> 的值加 1。</p><p><code>for</code> 条件部分的三个语句，都可以省略。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">read</span> var
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;.&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">break</span>
  <span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre></div><p>上面脚本会反复读取命令行输入，直到用户输入了一个点(<code>.</code>)位为止，才会跳出循环。</p><h2 id="break-continue" tabindex="-1"><a class="header-anchor" href="#break-continue" aria-hidden="true">#</a> break，continue</h2><p>Bash 提供了两个内部命令 <code>break</code> 和 <code>continue</code>，用来在循环内部跳出循环。</p><p><code>break</code> 命令立即终止循环，程序继续执行循环块之后的语句，即不再执行剩下的循环。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">number</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;number is <span class="token variable">$number</span>&quot;</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$number</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;3&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">break</span>
  <span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre></div><p>上面例子只会打印 3 行结果。一旦变量 <code>$number</code> 等于 3，就会跳出循环，不再继续执行。</p><p><code>continue</code> 命令立即终止本轮循环，开始执行下一轮循环。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">while</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;What file do you want to test?&quot;</span> filename
<span class="token keyword">do</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token variable">$filename</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;The file does not exist.&quot;</span>
    <span class="token builtin class-name">continue</span>
  <span class="token keyword">fi</span>

  <span class="token builtin class-name">echo</span> <span class="token string">&quot;You entered a valid file..&quot;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，只要用户输入的文件不存在，<code>continue</code> 命令就会生效，直接进入下一轮循环(让用户重新输入文件名)，不再执行后面的打印语句。</p><h2 id="select-结构" tabindex="-1"><a class="header-anchor" href="#select-结构" aria-hidden="true">#</a> select 结构</h2><p><code>select</code> 结构主要用来生成简单的菜单。它的语法与 <code>for...in</code> 循环基本一致。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">select</span> name
<span class="token punctuation">[</span>in list<span class="token punctuation">]</span>
<span class="token keyword">do</span>
  commands
<span class="token keyword">done</span>
</code></pre></div><p>Bash 会对 <code>select</code> 依次进行下面的处理。</p><ol><li><code>select</code> 生成一个菜单，内容是列表 <code>list</code> 的每一项，并且每一项前面还有一个数字编号。</li><li>Bash 提示用户选择一项，输入它的编号。</li><li>用户输入以后，Bash 会将该项的内容存在变量 <code>name</code>，该项的编号存入环境变量 <code>REPLY</code>。如果用户没有输入，就按回车键，Bash 会重新输出菜单，让用户选择。</li><li>执行命令体 <code>commands</code>。</li><li>执行结束后，回到第一步，重复这个过程。</li></ol><p>下面是一个例子。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># select.sh</span>

<span class="token keyword">select</span> <span class="token for-or-select variable">brand</span> <span class="token keyword">in</span> Samsung Sony iphone symphony Walton
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;You have chosen <span class="token variable">$brand</span>&quot;</span>
<span class="token keyword">done</span>
</code></pre></div><p>执行上面的脚本，Bash 会输出一个品牌的列表，让用户选择。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ ./select.sh
<span class="token number">1</span><span class="token punctuation">)</span> Samsung
<span class="token number">2</span><span class="token punctuation">)</span> Sony
<span class="token number">3</span><span class="token punctuation">)</span> iphone
<span class="token number">4</span><span class="token punctuation">)</span> symphony
<span class="token number">5</span><span class="token punctuation">)</span> Walton
<span class="token comment">#?</span>
</code></pre></div><p>如果用户没有输入编号，直接按回车键。Bash 就会重新输出一遍这个菜单，直到用户按下 <code>Ctrl + c</code>，退出执行。</p><p><code>select</code> 可以与 <code>case</code> 结合，针对不同项，执行不同的命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Which Operating System do you like?&quot;</span>

<span class="token keyword">select</span> <span class="token for-or-select variable">os</span> <span class="token keyword">in</span> Ubuntu LinuxMint Windows8 Windows7 WindowsXP
<span class="token keyword">do</span>
  <span class="token keyword">case</span> <span class="token variable">$os</span> <span class="token keyword">in</span>
    <span class="token string">&quot;Ubuntu&quot;</span><span class="token operator">|</span><span class="token string">&quot;LinuxMint&quot;</span><span class="token punctuation">)</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;I also use <span class="token variable">$os</span>.&quot;</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">&quot;Windows8&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;Windows10&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;WindowsXP&quot;</span><span class="token punctuation">)</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;Why don&#39;t you try Linux?&quot;</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;Invalid entry.&quot;</span>
      <span class="token builtin class-name">break</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code>case</code> 针对用户选择的不同项，执行不同的命令。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,87),u={href:"https://linuxhint.com/bash_select_command/",target:"_blank",rel:"noopener noreferrer"};function b(h,v){const a=i("ExternalLinkIcon");return o(),p("div",null,[r,c(" more "),k,s("ul",null,[s("li",null,[s("a",u,[n("Bash Select Command"),t(a)]),n(", Fahmida Yesmin")])])])}const g=e(d,[["render",b],["__file","loop.html.vue"]]);export{g as default};
