import{_ as s,X as a,Y as n,a3 as e}from"./framework-a91f7991.js";const o={},t=e(`<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>有时，脚本需要在执行过程中，由用户提供一部分数据，这时可以使用 <code>read</code> 命令。它将用户的输入存入一个变量，方便后面的代码使用。用户按下回车键，就表示输入结束。</p><p><code>read</code> 命令的格式如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token punctuation">[</span>-options<span class="token punctuation">]</span> <span class="token punctuation">[</span>variable<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre></div><p>上面语法中，<code>options</code> 是参数选项，<code>variable</code> 是用来保存输入数值的一个或多个变量名。如果没有提供变量名，环境变量 <code>REPLY</code> 会包含用户输入的一整行数据。</p><p>下面是一个例子 <code>demo.sh</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;输入一些文本 &gt; &quot;</span>
<span class="token builtin class-name">read</span> text
<span class="token builtin class-name">echo</span> <span class="token string">&quot;您的输入: <span class="token variable">$text</span>&quot;</span>
</code></pre></div><p>上面例子中，先显示一行提示文本，然后会等待用户输入文本。用户输入的文本，存入变量 <code>text</code>，在下一行显示出来。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">bash</span> demo.sh
输入一些文本 <span class="token operator">&gt;</span> 您好，世界
您的输入: 您好，世界
</code></pre></div><p><code>read</code> 可以接受用户输入的多个值。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> Please, enter your firstname and lastname
<span class="token builtin class-name">read</span> FN LN
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Hi! <span class="token variable">$LN</span>, <span class="token variable">$FN</span> !&quot;</span>
</code></pre></div><p>上面例子中，<code>read</code> 根据用户的输入，同时为两个变量赋值。</p><p>如果用户的输入项少于 <code>read</code> 命令给出的变量数目，那么额外的变量值为空。如果用户的输入项多于定义的变量，那么多余的输入项会包含到最后一个变量中。</p><p>如果 <code>read</code> 命令之后没有定义变量名，那么环境变量 <code>REPLY</code> 会包含所有的输入。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># read-single: read multiple values into default variable</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;Enter one or more values &gt; &quot;</span>
<span class="token builtin class-name">read</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;REPLY = &#39;<span class="token environment constant">$REPLY</span>&#39;&quot;</span>
</code></pre></div><p>上面脚本的运行结果如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ read-single
Enter one or <span class="token function">more</span> values <span class="token operator">&gt;</span> a b c d
<span class="token environment constant">REPLY</span> <span class="token operator">=</span> <span class="token string">&#39;a b c d&#39;</span>
</code></pre></div><p><code>read</code> 命令除了读取键盘输入，可以用来读取文件。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token builtin class-name">read</span> myline
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$myline</span>&quot;</span>
<span class="token keyword">done</span> <span class="token operator">&lt;</span> <span class="token variable">$filename</span>
</code></pre></div><p>上面的例子通过 <code>read</code> 命令，读取一个文件的内容。<code>done</code> 命令后面的定向符 <code>&lt;</code>，将文件导向 <code>read</code> 命令，每次读取一行，存入变量 <code>myline</code>，直到文件读取完毕。</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p><code>read</code> 命令的参数如下。</p><ol><li><p><strong><code>-t</code> 参数</strong></p><p><code>read</code> 命令的 <code>-t</code> 参数，设置了超时的秒数。如果超过了指定时间，用户仍然没有输入，脚本将放弃等待，继续向下执行。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;输入一些文本 &gt; &quot;</span>
<span class="token keyword">if</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-t</span> <span class="token number">3</span> response<span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;用户已经输入了&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;用户没有输入&quot;</span>
<span class="token keyword">fi</span>
</code></pre></div><p>上面例子中，输入命令会等待 3 秒，如果用户超过这个时间没有输入，这个命令就会执行失败。<code>if</code> 根据命令的返回值，转入 <code>else</code> 代码块，继续往下执行。</p><p>环境变量 <code>TMOUT</code> 也可以起到同样作用，指定 <code>read</code> 命令等待用户输入的时间(单位为秒)。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">TMOUT</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token builtin class-name">read</span> response
</code></pre></div><p>上面例子也是等待 3 秒，如果用户还没有输入，就会超时。</p></li><li><p><strong><code>-p</code> 参数</strong></p><p><code>-p</code> 参数指定用户输入的提示信息。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Enter one or more values &gt; &quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;REPLY = &#39;<span class="token environment constant">$REPLY</span>&#39;&quot;</span>
</code></pre></div><p>上面例子中，先显示 <code>Enter one or more values &gt;</code>，再接受用户的输入。</p></li><li><p><strong><code>-a</code> 参数</strong></p><p><code>-a</code> 参数把用户的输入赋值给一个数组，从零号位置开始。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">read</span> <span class="token parameter variable">-a</span> people
alice duchess dodo
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${people<span class="token punctuation">[</span>2<span class="token punctuation">]</span>}</span>
dodo
</code></pre></div><p>上面例子中，用户输入被赋值给一个数组 <code>people</code>，这个数组的 2 号成员就是 <code>dodo</code>。</p></li><li><p><strong><code>-n</code> 参数</strong></p><p><code>-n</code> 参数指定只读取若干个字符作为变量值，而不是整行读取。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">read</span> <span class="token parameter variable">-n</span> <span class="token number">3</span> letter
abcdefghij
$ <span class="token builtin class-name">echo</span> <span class="token variable">$letter</span>
abc
</code></pre></div><p>上面例子中，变量 <code>letter</code> 只包含 3 个字母。</p></li><li><p><strong>-e 参数</strong></p><p><code>-e</code> 参数允许用户输入的时候，使用 <code>readline</code> 库提供的快捷键，比如自动补全。具体的快捷键可以参阅《行操作》一章。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> Please input the path to the file:

<span class="token builtin class-name">read</span> <span class="token parameter variable">-e</span> fileName

<span class="token builtin class-name">echo</span> <span class="token variable">$fileName</span>
</code></pre></div><p>上面例子中，<code>read</code> 命令接受用户输入的文件名。这时，用户可能想使用 Tab 键的文件名“自动补全”功能，但是 <code>read</code> 命令的输入默认不支持 <code>readline</code> 库的功能。<code>-e</code> 参数就可以允许用户使用自动补全。</p></li><li><p><strong>其他参数</strong></p><ul><li><code>-d delimiter</code>: 定义字符串 <code>delimiter</code> 的第一个字符作为用户输入的结束，而不是一个换行符。</li><li><code>-r</code>: raw 模式，表示不把用户输入的反斜杠字符解释为转义字符。</li><li><code>-s</code>: 使得用户的输入不显示在屏幕上，这常常用于输入密码或保密信息。</li><li><code>-u fd</code>: 使用文件描述符 <code>fd</code> 作为输入。</li></ul></li></ol><h2 id="ifs-变量" tabindex="-1"><a class="header-anchor" href="#ifs-变量" aria-hidden="true">#</a> IFS 变量</h2><p><code>read</code> 命令读取的值，默认是以空格分隔。可以通过自定义环境变量 <code>IFS</code>(内部字段分隔符，Internal Field Separator 的缩写)，修改分隔标志。</p><p><code>IFS</code> 的默认值是空格、Tab 符号、换行符号，通常取第一个(即空格)。</p><p>如果把 <code>IFS</code> 定义成冒号(<code>:</code>)或分号(<code>;</code>)，就可以分隔以这两个符号分隔的值，这对读取文件很有用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># read-ifs: read fields from a file</span>

<span class="token assign-left variable">FILE</span><span class="token operator">=</span>/etc/passwd

<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Enter a username &gt; &quot;</span> user_name
<span class="token assign-left variable">file_info</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> <span class="token string">&quot;^<span class="token variable">$user_name</span>:&quot;</span> $FILE<span class="token variable">)</span></span>&quot;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$file_info</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot;:&quot;</span> <span class="token builtin class-name">read</span> user pw uid gid name home shell <span class="token operator">&lt;&lt;&lt;</span> <span class="token string">&quot;<span class="token variable">$file_info</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;User = &#39;<span class="token variable">$user</span>&#39;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;UID = &#39;<span class="token variable">$uid</span>&#39;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;GID = &#39;<span class="token variable">$gid</span>&#39;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Full Name = &#39;<span class="token variable">$name</span>&#39;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Home Dir. = &#39;<span class="token variable">$home</span>&#39;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Shell = &#39;<span class="token variable">$shell</span>&#39;&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;No such user &#39;<span class="token variable">$user_name</span>&#39;&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code>IFS</code> 设为冒号，然后用来分解 <code>/etc/passwd</code> 文件的一行。<code>IFS</code> 的赋值命令和 <code>read</code> 命令写在一行，这样的话，<code>IFS</code> 的改变仅对后面的命令生效，该命令执行后 <code>IFS</code> 会自动恢复原来的值。如果不写在一行，就要采用下面的写法。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">OLD_IFS</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$IFS</span>&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot;:&quot;</span>
<span class="token builtin class-name">read</span> user pw uid gid name home shell <span class="token operator">&lt;&lt;&lt;</span> <span class="token string">&quot;<span class="token variable">$file_info</span>&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$OLD_IFS</span>&quot;</span>
</code></pre></div><p>另外，上面例子中，<code>&lt;&lt;&lt;</code> 是 Here 字符串，用于将变量值转为标准输入，因为 <code>read</code> 命令只能解析标准输入。</p><p>如果 <code>IFS</code> 设为空字符串，就等同于将整行读入一个变量。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">input</span><span class="token operator">=</span><span class="token string">&quot;/path/to/txt/file&quot;</span>
<span class="token keyword">while</span> <span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-r</span> line
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$line</span>&quot;</span>
<span class="token keyword">done</span> <span class="token operator">&lt;</span> <span class="token string">&quot;<span class="token variable">$input</span>&quot;</span>
</code></pre></div><p>上面的命令可以逐行读取文件，每一行存入变量 <code>line</code>，打印出来以后再读取下一行。</p>`,34),p=[t];function l(c,i){return a(),n("div",null,p)}const r=s(o,[["render",l],["__file","read.html.vue"]]);export{r as default};
