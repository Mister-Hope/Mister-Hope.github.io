import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as o,d as e,e as s,f as a,b as p}from"./app-DHOHoluL.js";const c={},t=s("p",null,[a("Bash 提供三种循环语法 "),s("code",null,"for"),a("、"),s("code",null,"while"),a(" 和 "),s("code",null,"until"),a("。")],-1),r=p(`<h2 id="while-循环" tabindex="-1"><a class="header-anchor" href="#while-循环"><span>while 循环</span></a></h2><p><code>while</code> 循环有一个判断条件，只要符合条件，就不断循环执行指定的语句。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">while</span><span style="color:#88C0D0;"> condition</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> do</span></span>
<span class="line"><span style="color:#88C0D0;">  commands</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre></div><p>上面代码中，只要满足条件 <code>condition</code>，就会执行命令 <code>commands</code>。然后，再次判断是否满足条件 <code>condition</code>，只要满足，就会一直执行下去。只有不满足条件，才会退出循环。</p><p>循环条件 <code>condition</code> 可以使用 <code>test</code> 命令，跟 <code>if</code> 结构的判断条件写法一致。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">number</span><span style="color:#81A1C1;">=</span><span style="color:#A3BE8C;">0</span></span>
<span class="line"><span style="color:#81A1C1;">while</span><span style="color:#ECEFF4;"> [</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#D8DEE9;">$number</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> -lt</span><span style="color:#B48EAD;"> 10</span><span style="color:#ECEFF4;"> ]</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> do</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Number = </span><span style="color:#D8DEE9;">$number</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#D8DEE9;">  number</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">$((</span><span style="color:#88C0D0;">number</span><span style="color:#A3BE8C;"> +</span><span style="color:#B48EAD;"> 1</span><span style="color:#ECEFF4;">))</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre></div><p>上面例子中，只要变量 <code>$number</code> 小于 10，就会不断加 1，直到 <code>$number</code> 等于 10，然后退出循环。</p><p>关键字 <code>do</code> 可以跟 <code>while</code> 不在同一行，这时两者之间不需要使用分号分隔。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">while</span><span style="color:#88C0D0;"> true</span></span>
<span class="line"><span style="color:#81A1C1;">do</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">Hi, while looping ...</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre></div><p>上面的例子会无限循环，可以按下 <code>Ctrl + c</code> 停止。</p><p><code>while</code> 循环写成一行，也是可以的。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">while</span><span style="color:#88C0D0;"> true</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> do</span><span style="color:#88C0D0;"> echo</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">Hi, while looping ...</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> done</span></span></code></pre></div><p><code>while</code> 的条件部分也可以是执行一个命令。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">while</span><span style="color:#88C0D0;"> echo</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">ECHO</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> do</span><span style="color:#88C0D0;"> echo</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">Hi, while looping ...</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> done</span></span></code></pre></div><p>上面例子中，判断条件是 <code>echo &#39;ECHO&#39;</code>。由于这个命令总是执行成功，所以上面命令会产生无限循环。</p><p><code>while</code> 的条件部分可以执行任意数量的命令，但是执行结果的真伪只看最后一个命令的执行结果。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">while</span><span style="color:#88C0D0;"> true</span><span style="color:#81A1C1;">;</span><span style="color:#88C0D0;"> false</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> do</span><span style="color:#88C0D0;"> echo</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">Hi, looping ...</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> done</span></span></code></pre></div><p>上面代码运行后，不会有任何输出，因为 <code>while</code> 的最后一个命令是 <code>false</code>。</p><h2 id="until-循环" tabindex="-1"><a class="header-anchor" href="#until-循环"><span>until 循环</span></a></h2><p><code>until</code> 循环与 <code>while</code> 循环恰好相反，只要不符合判断条件(判断条件失败)，就不断循环执行指定的语句。一旦符合判断条件，就退出循环。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">until</span><span style="color:#88C0D0;"> condition</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> do</span></span>
<span class="line"><span style="color:#88C0D0;">  commands</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre></div><p>关键字 <code>do</code> 可以与 <code>until</code> 不写在同一行，这时两者之间不需要分号分隔。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">until</span><span style="color:#88C0D0;"> condition</span></span>
<span class="line"><span style="color:#81A1C1;">do</span></span>
<span class="line"><span style="color:#88C0D0;">  commands</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre></div><p>下面是一个例子。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> until</span><span style="color:#81A1C1;"> false</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> do</span><span style="color:#88C0D0;"> echo</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">Hi, until looping ...</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> done</span></span>
<span class="line"><span style="color:#88C0D0;">Hi,</span><span style="color:#A3BE8C;"> until</span><span style="color:#A3BE8C;"> looping</span><span style="color:#A3BE8C;"> ...</span></span>
<span class="line"><span style="color:#88C0D0;">Hi,</span><span style="color:#A3BE8C;"> until</span><span style="color:#A3BE8C;"> looping</span><span style="color:#A3BE8C;"> ...</span></span>
<span class="line"><span style="color:#88C0D0;">Hi,</span><span style="color:#A3BE8C;"> until</span><span style="color:#A3BE8C;"> looping</span><span style="color:#A3BE8C;"> ...</span></span>
<span class="line"><span style="color:#88C0D0;">^C</span></span></code></pre></div><p>上面代码中，<code>until</code> 的部分一直为 <code>false</code>，导致命令无限运行，必须按下 <code>Ctrl + c</code> 终止。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">number</span><span style="color:#81A1C1;">=</span><span style="color:#A3BE8C;">0</span></span>
<span class="line"><span style="color:#81A1C1;">until</span><span style="color:#ECEFF4;"> [</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#D8DEE9;">$number</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> -ge</span><span style="color:#B48EAD;"> 10</span><span style="color:#ECEFF4;"> ]</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> do</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Number = </span><span style="color:#D8DEE9;">$number</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#D8DEE9;">  number</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">$((</span><span style="color:#88C0D0;">number</span><span style="color:#A3BE8C;"> +</span><span style="color:#B48EAD;"> 1</span><span style="color:#ECEFF4;">))</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre></div><p>上面例子中，只要变量 <code>number</code> 小于 10，就会不断加 1，直到 <code>number</code> 大于等于 10，就退出循环。</p><p><code>until</code> 的条件部分也可以是一个命令，表示在这个命令执行成功之前，不断重复尝试。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">until</span><span style="color:#88C0D0;"> cp</span><span style="color:#D8DEE9;"> $1</span><span style="color:#D8DEE9;"> $2</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> do</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">Attempt to copy failed. waiting...</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#88C0D0;">  sleep</span><span style="color:#B48EAD;"> 5</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre></div><p>上面例子表示，只要 <code>cp $1 $2</code> 这个命令执行不成功，就 5 秒钟后再尝试一次，直到成功为止。</p><p><code>until</code> 循环都可以转为 <code>while</code> 循环，只要把条件设为否定即可。上面这个例子可以改写如下。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">while</span><span style="color:#81A1C1;"> !</span><span style="color:#88C0D0;"> cp</span><span style="color:#D8DEE9;"> $1</span><span style="color:#D8DEE9;"> $2</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> do</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">Attempt to copy failed. waiting...</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#88C0D0;">  sleep</span><span style="color:#B48EAD;"> 5</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre></div><p>一般来说，<code>until</code> 用得比较少，完全可以统一都使用 <code>while</code>。</p><h2 id="for-in-循环" tabindex="-1"><a class="header-anchor" href="#for-in-循环"><span><code>for...in</code> 循环</span></a></h2><p><code>for...in</code> 循环用于遍历列表的每一项。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9;"> variable</span><span style="color:#81A1C1;"> in</span><span style="color:#A3BE8C;"> list</span></span>
<span class="line"><span style="color:#81A1C1;">do</span></span>
<span class="line"><span style="color:#88C0D0;">  commands</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre></div><p>上面语法中，<code>for</code> 循环会依次从 <code>list</code> 列表中取出一项，作为变量 <code>variable</code>，然后在循环体中进行处理。</p><p>关键词 <code>do</code> 可以跟 <code>for</code> 写在同一行，两者使用分号分隔。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9;"> variable</span><span style="color:#81A1C1;"> in</span><span style="color:#A3BE8C;"> list</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> do</span></span>
<span class="line"><span style="color:#88C0D0;">  commands</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre></div><p>下面是一个例子。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9;"> i</span><span style="color:#81A1C1;"> in</span><span style="color:#A3BE8C;"> word1</span><span style="color:#A3BE8C;"> word2</span><span style="color:#A3BE8C;"> word3</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> do</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#D8DEE9;"> $i</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre></div><p>上面例子中，<code>word1 word2 word3</code> 是一个包含三个单词的列表，变量 <code>i</code> 依次等于 <code>word1</code>、<code>word2</code>、<code>word3</code>，命令 <code>echo $i</code> 则会相应地执行三次。</p><p>列表可以由通配符产生。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9;"> i</span><span style="color:#81A1C1;"> in</span><span style="color:#A3BE8C;"> *.png</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> do</span></span>
<span class="line"><span style="color:#88C0D0;">  ls</span><span style="color:#A3BE8C;"> -l</span><span style="color:#D8DEE9;"> $i</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre></div><p>上面例子中，<code>*.png</code> 会替换成当前目录中所有 PNG 图片文件，变量 <code>i</code> 会依次等于每一个文件。</p><p>列表也可以通过子命令产生。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">count</span><span style="color:#81A1C1;">=</span><span style="color:#A3BE8C;">0</span></span>
<span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9;"> i</span><span style="color:#81A1C1;"> in</span><span style="color:#ECEFF4;"> $(</span><span style="color:#88C0D0;">cat</span><span style="color:#A3BE8C;"> ~/.bash_profile</span><span style="color:#ECEFF4;">)</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> do</span></span>
<span class="line"><span style="color:#D8DEE9;">  count</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">$((</span><span style="color:#88C0D0;">count</span><span style="color:#A3BE8C;"> +</span><span style="color:#B48EAD;"> 1</span><span style="color:#ECEFF4;">))</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Word </span><span style="color:#D8DEE9;">$count</span><span style="color:#A3BE8C;"> (</span><span style="color:#D8DEE9;">$i</span><span style="color:#A3BE8C;">) contains </span><span style="color:#ECEFF4;">$(</span><span style="color:#88C0D0;">echo</span><span style="color:#A3BE8C;"> -n </span><span style="color:#D8DEE9;">$i</span><span style="color:#81A1C1;"> |</span><span style="color:#88C0D0;"> wc</span><span style="color:#A3BE8C;"> -c</span><span style="color:#ECEFF4;">)</span><span style="color:#A3BE8C;"> characters</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre></div><p>上面例子中，<code>cat ~/.bash_profile</code> 命令会输出 <code>~/.bash_profile</code> 文件的内容，然后通过遍历每一个词，计算该文件一共包含多少个词，以及每个词有多少个字符。</p><p><code>in list</code> 的部分可以省略，这时 <code>list</code> 默认等于脚本的所有参数 <code>$@</code>。但是，为了可读性，最好还是不要省略，参考下面的例子。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> filename</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> do</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#D8DEE9;">$filename</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;"># 等同于</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9;"> filename</span><span style="color:#81A1C1;"> in</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#D8DEE9;">$@</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> ;</span><span style="color:#81A1C1;"> do</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#D8DEE9;">$filename</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre></div><p>在函数体中也是一样的，<code>for...in</code> 循环省略 <code>in list</code> 的部分，则 <code>list</code> 默认等于函数的所有参数。</p><h2 id="for-循环" tabindex="-1"><a class="header-anchor" href="#for-循环"><span>for 循环</span></a></h2><p><code>for</code> 循环还支持 C 语言的循环语法。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">for</span><span style="color:#ECEFF4;"> ((</span><span style="color:#D8DEE9;"> expression1</span><span style="color:#ECEFF4;">;</span><span style="color:#D8DEE9;"> expression2</span><span style="color:#ECEFF4;">;</span><span style="color:#D8DEE9;"> expression3</span><span style="color:#ECEFF4;"> ))</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> do</span></span>
<span class="line"><span style="color:#88C0D0;">  commands</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre></div><p>上面代码中，<code>expression1</code> 用来初始化循环条件，<code>expression2</code> 用来决定循环结束的条件，<code>expression3</code> 在每次循环迭代的末尾执行，用于更新值。</p><p>注意，循环条件放在双重圆括号之中。另外，圆括号之中使用变量，不必加上美元符号 <code>$</code>。</p><p>它等同于下面的 <code>while</code> 循环。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">((</span><span style="color:#D8DEE9;"> expression1</span><span style="color:#ECEFF4;"> ))</span></span>
<span class="line"><span style="color:#81A1C1;">while</span><span style="color:#ECEFF4;"> ((</span><span style="color:#D8DEE9;"> expression2</span><span style="color:#ECEFF4;"> ))</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> do</span></span>
<span class="line"><span style="color:#88C0D0;">  commands</span></span>
<span class="line"><span style="color:#ECEFF4;">  ((</span><span style="color:#D8DEE9;"> expression3</span><span style="color:#ECEFF4;"> ))</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre></div><p>下面是一个例子。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">for</span><span style="color:#ECEFF4;"> ((</span><span style="color:#D8DEE9;"> i</span><span style="color:#81A1C1;">=</span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">;</span><span style="color:#D8DEE9;"> i</span><span style="color:#81A1C1;">&lt;</span><span style="color:#B48EAD;">5</span><span style="color:#ECEFF4;">;</span><span style="color:#D8DEE9;"> i</span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9;">i</span><span style="color:#81A1C1;">+</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;"> ))</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> do</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#D8DEE9;"> $i</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre></div><p>上面代码中，初始化变量 <code>i</code> 的值为 0，循环执行的条件是 <code>i</code> 小于 5。每次循环迭代结束时，<code>i</code> 的值加 1。</p><p><code>for</code> 条件部分的三个语句，都可以省略。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">for</span><span style="color:#ECEFF4;"> ((;;))</span></span>
<span class="line"><span style="color:#81A1C1;">do</span></span>
<span class="line"><span style="color:#88C0D0;">  read</span><span style="color:#A3BE8C;"> var</span></span>
<span class="line"><span style="color:#81A1C1;">  if</span><span style="color:#ECEFF4;"> [</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#D8DEE9;">$var</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">.</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;"> ]</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> then</span></span>
<span class="line"><span style="color:#81A1C1;">    break</span></span>
<span class="line"><span style="color:#81A1C1;">  fi</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre></div><p>上面脚本会反复读取命令行输入，直到用户输入了一个点(<code>.</code>)位为止，才会跳出循环。</p><h2 id="break-continue" tabindex="-1"><a class="header-anchor" href="#break-continue"><span>break，continue</span></a></h2><p>Bash 提供了两个内部命令 <code>break</code> 和 <code>continue</code>，用来在循环内部跳出循环。</p><p><code>break</code> 命令立即终止循环，程序继续执行循环块之后的语句，即不再执行剩下的循环。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9;"> number</span><span style="color:#81A1C1;"> in</span><span style="color:#A3BE8C;"> 1</span><span style="color:#A3BE8C;"> 2</span><span style="color:#A3BE8C;"> 3</span><span style="color:#A3BE8C;"> 4</span><span style="color:#A3BE8C;"> 5</span><span style="color:#A3BE8C;"> 6</span></span>
<span class="line"><span style="color:#81A1C1;">do</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">number is </span><span style="color:#D8DEE9;">$number</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">  if</span><span style="color:#ECEFF4;"> [</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#D8DEE9;">$number</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">3</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;"> ]</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> then</span></span>
<span class="line"><span style="color:#81A1C1;">    break</span></span>
<span class="line"><span style="color:#81A1C1;">  fi</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre></div><p>上面例子只会打印 3 行结果。一旦变量 <code>$number</code> 等于 3，就会跳出循环，不再继续执行。</p><p><code>continue</code> 命令立即终止本轮循环，开始执行下一轮循环。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">while</span><span style="color:#88C0D0;"> read</span><span style="color:#A3BE8C;"> -p</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">What file do you want to test?</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;"> filename</span></span>
<span class="line"><span style="color:#81A1C1;">do</span></span>
<span class="line"><span style="color:#81A1C1;">  if</span><span style="color:#ECEFF4;"> [</span><span style="color:#81A1C1;"> !</span><span style="color:#81A1C1;"> -e</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#D8DEE9;">$filename</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;"> ]</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> then</span></span>
<span class="line"><span style="color:#88C0D0;">    echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">The file does not exist.</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">    continue</span></span>
<span class="line"><span style="color:#81A1C1;">  fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">You entered a valid file..</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，只要用户输入的文件不存在，<code>continue</code> 命令就会生效，直接进入下一轮循环(让用户重新输入文件名)，不再执行后面的打印语句。</p><h2 id="select-结构" tabindex="-1"><a class="header-anchor" href="#select-结构"><span>select 结构</span></a></h2><p><code>select</code> 结构主要用来生成简单的菜单。它的语法与 <code>for...in</code> 循环基本一致。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">select</span><span style="color:#D8DEE9;"> name</span></span>
<span class="line"><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">in list</span><span style="color:#ECEFF4;">]</span></span>
<span class="line"><span style="color:#81A1C1;">do</span></span>
<span class="line"><span style="color:#88C0D0;">  commands</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre></div><p>Bash 会对 <code>select</code> 依次进行下面的处理。</p><ol><li><code>select</code> 生成一个菜单，内容是列表 <code>list</code> 的每一项，并且每一项前面还有一个数字编号。</li><li>Bash 提示用户选择一项，输入它的编号。</li><li>用户输入以后，Bash 会将该项的内容存在变量 <code>name</code>，该项的编号存入环境变量 <code>REPLY</code>。如果用户没有输入，就按回车键，Bash 会重新输出菜单，让用户选择。</li><li>执行命令体 <code>commands</code>。</li><li>执行结束后，回到第一步，重复这个过程。</li></ol><p>下面是一个例子。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#!/bin/bash</span></span>
<span class="line"><span style="color:#616E88;"># select.sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">select</span><span style="color:#D8DEE9;"> brand</span><span style="color:#D8DEE9FF;"> in Samsung Sony iphone symphony Walton</span></span>
<span class="line"><span style="color:#81A1C1;">do</span></span>
<span class="line"><span style="color:#88C0D0;">  echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">You have chosen </span><span style="color:#D8DEE9;">$brand</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre></div><p>执行上面的脚本，Bash 会输出一个品牌的列表，让用户选择。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> ./select.sh</span></span>
<span class="line"><span style="color:#88C0D0;">1</span><span style="color:#D8DEE9FF;">) Samsung</span></span>
<span class="line"><span style="color:#88C0D0;">2</span><span style="color:#D8DEE9FF;">) Sony</span></span>
<span class="line"><span style="color:#88C0D0;">3</span><span style="color:#D8DEE9FF;">) iphone</span></span>
<span class="line"><span style="color:#88C0D0;">4</span><span style="color:#D8DEE9FF;">) symphony</span></span>
<span class="line"><span style="color:#88C0D0;">5</span><span style="color:#D8DEE9FF;">) Walton</span></span>
<span class="line"><span style="color:#616E88;">#?</span></span></code></pre></div><p>如果用户没有输入编号，直接按回车键。Bash 就会重新输出一遍这个菜单，直到用户按下 <code>Ctrl + c</code>，退出执行。</p><p><code>select</code> 可以与 <code>case</code> 结合，针对不同项，执行不同的命令。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Which Operating System do you like?</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">select</span><span style="color:#D8DEE9;"> os</span><span style="color:#D8DEE9FF;"> in Ubuntu LinuxMint Windows8 Windows7 WindowsXP</span></span>
<span class="line"><span style="color:#81A1C1;">do</span></span>
<span class="line"><span style="color:#81A1C1;">  case</span><span style="color:#D8DEE9;"> $os</span><span style="color:#81A1C1;"> in</span></span>
<span class="line"><span style="color:#ECEFF4;">    &quot;</span><span style="color:#A3BE8C;">Ubuntu</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">|</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">LinuxMint</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">)</span></span>
<span class="line"><span style="color:#88C0D0;">      echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">I also use </span><span style="color:#D8DEE9;">$os</span><span style="color:#A3BE8C;">.</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">    ;;</span></span>
<span class="line"><span style="color:#ECEFF4;">    &quot;</span><span style="color:#A3BE8C;">Windows8</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;"> |</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Windows10</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;"> |</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">WindowsXP</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">)</span></span>
<span class="line"><span style="color:#88C0D0;">      echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Why don&#39;t you try Linux?</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">    ;;</span></span>
<span class="line"><span style="color:#81A1C1;">    *)</span></span>
<span class="line"><span style="color:#88C0D0;">      echo</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Invalid entry.</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#81A1C1;">      break</span></span>
<span class="line"><span style="color:#81A1C1;">    ;;</span></span>
<span class="line"><span style="color:#81A1C1;">  esac</span></span>
<span class="line"><span style="color:#81A1C1;">done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code>case</code> 针对用户选择的不同项，执行不同的命令。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2><ul><li><a href="https://linuxhint.com/bash_select_command/" target="_blank" rel="noopener noreferrer">Bash Select Command</a>, Fahmida Yesmin</li></ul>`,88);function i(d,y){return l(),o("div",null,[t,e(" more "),r])}const C=n(c,[["render",i],["__file","loop.html.vue"]]),u=JSON.parse('{"path":"/linux/bash/loop.html","title":"循环","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"循环","icon":"loop","author":"阮一峰","category":"Linux","tag":["Bash"],"copyright":"本教程采用<a href=\\"https://creativecommons.org/licenses/by-sa/3.0/deed.zh\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">知识共享 署名-相同方式共享 3.0协议</a>","description":"Bash 提供三种循环语法 for、while 和 until。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/bash/loop.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"循环"}],["meta",{"property":"og:description","content":"Bash 提供三种循环语法 for、while 和 until。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:tag","content":"Bash"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"循环\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"阮一峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"while 循环","slug":"while-循环","link":"#while-循环","children":[]},{"level":2,"title":"until 循环","slug":"until-循环","link":"#until-循环","children":[]},{"level":2,"title":"for...in 循环","slug":"for-in-循环","link":"#for-in-循环","children":[]},{"level":2,"title":"for 循环","slug":"for-循环","link":"#for-循环","children":[]},{"level":2,"title":"break，continue","slug":"break-continue","link":"#break-continue","children":[]},{"level":2,"title":"select 结构","slug":"select-结构","link":"#select-结构","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":6.78,"words":2035},"filePathRelative":"linux/bash/loop.md","localizedDate":"2020年5月4日","excerpt":"<p>Bash 提供三种循环语法 <code>for</code>、<code>while</code> 和 <code>until</code>。</p>\\n","autoDesc":true}');export{C as comp,u as data};
