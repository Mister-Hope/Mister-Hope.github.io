import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as p,c as i,d as a,a as e,e as s,b as t}from"./app-BBDjrnAY.js";const l={},r=a("h1",{id:"awk",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#awk"},[a("span",null,"awk")])],-1),d={href:"https://en.wikipedia.org/wiki/AWK",target:"_blank",rel:"noopener noreferrer"},h=a("code",null,"awk",-1),k=t(`<p>它依次处理文件的每一行，并读取里面的每一个字段。对于日志、CSV 那样的每行格式相同的文本文件，<code>awk</code> 可能是最方便的工具。</p><figure><img src="https://www.wangbase.com/blogimg/asset/201811/bg2018110702.jpg" alt="Book" tabindex="0" loading="lazy"><figcaption>Book</figcaption></figure><p><code>awk</code> 其实不仅仅是工具软件，还是一种编程语言。不过，这里只介绍它的命令行用法，对于大多数场合，应该足够用了。</p><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h2><p><code>awk</code> 的基本用法就是下面的形式。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 格式</span>
$ <span class="token function">awk</span> 动作 文件名

<span class="token comment"># 示例</span>
$ <span class="token function">awk</span> <span class="token string">&#39;{print $0}&#39;</span> demo.txt
</code></pre></div><p>上面示例中，<code>demo.txt</code> 是 <code>awk</code> 所要处理的文本文件。前面单引号内部有一个大括号，里面就是每一行的处理动作 <code>print $0</code>。其中，<code>print</code> 是打印命令，<code>$0</code> 代表当前行，因此上面命令的执行结果，就是把每一行原样打印出来。</p><p>下面，我们先用标准输入(stdin)演示上面这个例子。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;this is a test&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $0}&#39;</span>
this is a <span class="token builtin class-name">test</span>
</code></pre></div><p>上面代码中，<code>print $0</code> 就是把标准输入 <code>this is a test</code>，重新打印了一遍。</p><p><code>awk</code> 会根据空格和制表符，将每一行分成若干字段，依次用<code>$1</code>、<code>$2</code>、<code>$3</code> 代表第一个字段、第二个字段、第三个字段等等。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;this is a test&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span>
a
</code></pre></div><p>上面代码中，<code>$3</code> 代表 <code>this is a test</code> 的第三个字段 <code>a</code>。</p><p>下面，为了便于举例，我们把<code>/etc/passwd</code> 文件保存成 <code>demo.txt</code>。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root:x:0:0:root:/root:/usr/bin/zsh
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
</code></pre></div><p>这个文件的字段分隔符是冒号(<code>:</code>)，所以要用 <code>-F</code> 参数指定分隔符为冒号。然后，才能提取到它的第一个字段。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;{ print $1 }&#39;</span> demo.txt
root
daemon
bin
sys
<span class="token function">sync</span>
</code></pre></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2><p>除了<code>$ + 数字</code>表示某个字段，<code>awk</code> 还提供其他一些变量。</p><p>变量 <code>NF</code> 表示当前行有多少个字段，因此<code>$NF</code> 就代表最后一个字段。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;this is a test&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $NF}&#39;</span>
<span class="token builtin class-name">test</span>
</code></pre></div><p><code>$(NF-1)</code> 代表倒数第二个字段。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;{print $1, $(NF-1)}&#39;</span> demo.txt
root /root
daemon /usr/sbin
bin /bin
sys /dev
<span class="token function">sync</span> /bin
</code></pre></div><p>上面代码中，<code>print</code> 命令里面的逗号，表示输出的时候，两个部分之间使用空格分隔。</p><p>变量 <code>NR</code> 表示当前处理的是第几行。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;{print NR &quot;) &quot; $1}&#39;</span> demo.txt
<span class="token number">1</span><span class="token punctuation">)</span> root
<span class="token number">2</span><span class="token punctuation">)</span> daemon
<span class="token number">3</span><span class="token punctuation">)</span> bin
<span class="token number">4</span><span class="token punctuation">)</span> sys
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token function">sync</span>
</code></pre></div><p>上面代码中，<code>print</code> 命令里面，如果原样输出字符，要放在双引号里面。</p><p><code>awk</code> 的其他内置变量如下。</p><blockquote><ul><li><code>FILENAME</code>: 当前文件名</li><li><code>FS</code>: 字段分隔符，默认是空格和制表符。</li><li><code>RS</code>: 行分隔符，用于分割每一行，默认是换行符。</li><li><code>OFS</code>: 输出字段的分隔符，用于打印时分隔字段，默认为空格。</li><li><code>ORS</code>: 输出记录的分隔符，用于打印时分隔记录，默认为换行符。</li><li><code>OFMT</code>: 数字输出的格式，默认为<code>％.6g</code>。</li></ul></blockquote><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2><p><code>awk</code> 还提供了一些内置函数，方便对原始数据的处理。</p><p>函数 <code>toupper()</code> 用于将字符转为大写。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;{ print toupper($1) }&#39;</span> demo.txt
ROOT
DAEMON
BIN
SYS
SYNC
</code></pre></div><p>上面代码中，第一个字段输出时都变成了大写。</p><p>其他常用函数如下。</p><blockquote><ul><li><code>tolower()</code>: 字符转为小写。</li><li><code>length()</code>: 返回字符串长度。</li><li><code>substr()</code>: 返回子字符串。</li><li><code>sin()</code>: 正弦。</li><li><code>cos()</code>: 余弦。</li><li><code>sqrt()</code>: 平方根。</li><li><code>rand()</code>: 随机数。</li></ul></blockquote>`,36),u=a("code",null,"awk",-1),m={href:"https://www.gnu.org/software/gawk/manual/html_node/Built_002din.html#Built_002din",target:"_blank",rel:"noopener noreferrer"},g=t(`<h2 id="条件" tabindex="-1"><a class="header-anchor" href="#条件"><span>条件</span></a></h2><p><code>awk</code> 允许指定输出条件，只输出符合条件的行。</p><p>输出条件要写在动作的前面。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">&#39;条件 动作&#39;</span> 文件名
</code></pre></div><p>请看下面的例子。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;/usr/ {print $1}&#39;</span> demo.txt
root
daemon
bin
sys
</code></pre></div><p>上面代码中，<code>print</code> 命令前面是一个正则表达式，只输出包含 <code>usr</code> 的行。</p><p>下面的例子只输出奇数行，以及输出第三行以后的行。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 输出奇数行</span>
$ <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;NR % 2 == 1 {print $1}&#39;</span> demo.txt
root
bin
<span class="token function">sync</span>

<span class="token comment"># 输出第三行以后的行</span>
$ <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;NR &gt;3 {print $1}&#39;</span> demo.txt
sys
<span class="token function">sync</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的例子输出第一个字段等于指定值的行。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;$1 == &quot;root&quot; {print $1}&#39;</span> demo.txt
root

$ <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;$1 == &quot;root&quot; || $1 == &quot;bin&quot; {print $1}&#39;</span> demo.txt
root
bin
</code></pre></div><h2 id="if-语句" tabindex="-1"><a class="header-anchor" href="#if-语句"><span>if 语句</span></a></h2><p><code>awk</code> 提供了 <code>if</code> 结构，用于编写复杂的条件。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;{if ($1 &gt; &quot;m&quot;) print $1}&#39;</span> demo.txt
root
sys
<span class="token function">sync</span>
</code></pre></div><p>上面代码输出第一个字段的第一个字符大于 <code>m</code> 的行。</p><p><code>if</code> 结构还可以指定 <code>else</code> 部分。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;:&#39;</span> <span class="token string">&#39;{if ($1 &gt; &quot;m&quot;) print $1; else print &quot;---&quot;}&#39;</span> demo.txt
root
---
---
sys
<span class="token function">sync</span>
</code></pre></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2>`,18),b={href:"https://gregable.com/2010/09/why-you-should-know-just-little-awk.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://likegeeks.com/awk-command/",target:"_blank",rel:"noopener noreferrer"};function w(f,x){const n=c("ExternalLinkIcon");return p(),i("div",null,[r,a("p",null,[a("a",d,[h,e(n)]),s("是处理文本文件的一个应用程序，几乎所有 Linux 系统都自带这个程序。")]),k,a("p",null,[u,s(" 内置函数的完整列表，可以查看"),a("a",m,[s("手册"),e(n)]),s("。")]),g,a("ul",null,[a("li",null,[a("a",b,[s("An Awk tutorial by Example"),e(n)]),s(", Greg Grothaus")]),a("li",null,[a("a",v,[s("30 Examples for Awk Command in Text Processing"),e(n)]),s(", Mokhtar Ebrahim")])])])}const y=o(l,[["render",w],["__file","awk.html.vue"]]),F=JSON.parse('{"path":"/linux/bash/archives/commands/awk.html","title":"awk","lang":"zh-CN","frontmatter":{"date":"2020-06-04T00:00:00.000Z","description":"awk awk是处理文本文件的一个应用程序，几乎所有 Linux 系统都自带这个程序。 它依次处理文件的每一行，并读取里面的每一个字段。对于日志、CSV 那样的每行格式相同的文本文件，awk 可能是最方便的工具。 BookBook awk 其实不仅仅是工具软件，还是一种编程语言。不过，这里只介绍它的命令行用法，对于大多数场合，应该足够用了。 基本用法 ...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/bash/archives/commands/awk.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"awk"}],["meta",{"property":"og:description","content":"awk awk是处理文本文件的一个应用程序，几乎所有 Linux 系统都自带这个程序。 它依次处理文件的每一行，并读取里面的每一个字段。对于日志、CSV 那样的每行格式相同的文本文件，awk 可能是最方便的工具。 BookBook awk 其实不仅仅是工具软件，还是一种编程语言。不过，这里只介绍它的命令行用法，对于大多数场合，应该足够用了。 基本用法 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.wangbase.com/blogimg/asset/201811/bg2018110702.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-07T05:21:25.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-06-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-07T05:21:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"awk\\",\\"image\\":[\\"https://www.wangbase.com/blogimg/asset/201811/bg2018110702.jpg\\"],\\"datePublished\\":\\"2020-06-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-07T05:21:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[]},{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[]},{"level":2,"title":"条件","slug":"条件","link":"#条件","children":[]},{"level":2,"title":"if 语句","slug":"if-语句","link":"#if-语句","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1712467285000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":3.97,"words":1191},"filePathRelative":"linux/bash/archives/commands/awk.md","localizedDate":"2020年6月4日","excerpt":"","autoDesc":true}');export{y as comp,F as data};
