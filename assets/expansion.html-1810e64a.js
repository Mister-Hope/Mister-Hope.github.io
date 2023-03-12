import{_ as l,X as d,Y as i,$ as s,a0 as a,Z as n,a2 as o,a3 as e,C as p}from"./framework-a91f7991.js";const u={},r=e(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Shell 接收到用户输入的命令以后，会根据空格将用户的输入，拆分成一个个词元(token)。然后，Shell 会扩展词元里面的特殊字符，扩展完成后才会调用相应的命令。</p><p>这种特殊字符的扩展，称为模式扩展(globbing)。其中有些用到通配符，又称为通配符扩展(wildcard expansion)。Bash 一共提供八种扩展。</p><ul><li>波浪线扩展</li><li><code>?</code> 字符扩展</li><li><code>*</code> 字符扩展</li><li>方括号扩展</li><li>大括号扩展</li><li>变量扩展</li><li>子命令扩展</li><li>算术扩展</li></ul><p>本章介绍这八种扩展。</p><p>Bash 是先进行扩展，再执行命令。因此，扩展的结果是由 Bash 负责的，与所要执行的命令无关。命令本身并不存在参数扩展，收到什么参数就原样执行。这一点务必需要记住。</p><p><code>globbing</code> 这个词，来自于早期的 Unix 系统有一个 <code>/etc/glob</code> 文件，保存扩展的模板。后来 Bash 内置了这个功能，但是这个名字就保留了下来。</p><p>模式扩展与正则表达式的关系是，模式扩展早于正则表达式出现，可以看作是原始的正则表达式。它的功能没有正则那么强大灵活，但是优点是简单和方便。</p><p>Bash 允许用户关闭扩展。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">set</span> <span class="token parameter variable">-o</span> noglob
<span class="token comment"># 或者</span>
$ <span class="token builtin class-name">set</span> <span class="token parameter variable">-f</span>
</code></pre></div><p>下面的命令可以重新打开扩展。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">set</span> +o noglob
<span class="token comment"># 或者</span>
$ <span class="token builtin class-name">set</span> +f
</code></pre></div><h2 id="波浪线扩展" tabindex="-1"><a class="header-anchor" href="#波浪线扩展" aria-hidden="true">#</a> 波浪线扩展</h2><p>波浪线 <code>~</code> 会自动扩展成当前用户的主目录。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> ~
/home/me
</code></pre></div><p><code>~/dir</code> 表示扩展成主目录的某个子目录，<code>dir</code> 是主目录里面的一个子目录名。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入 /home/me/foo 目录</span>
$ <span class="token builtin class-name">cd</span> ~/foo
</code></pre></div><p><code>~user</code> 表示扩展成用户 <code>user</code> 的主目录。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> ~foo
/home/foo

$ <span class="token builtin class-name">echo</span> ~root
/root
</code></pre></div><p>上面例子中，Bash 会根据波浪号后面的用户名，返回该用户的主目录。</p><p>如果 <code>~user</code> 的 <code>user</code> 是不存在的用户名，则波浪号扩展不起作用。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> ~nonExistedUser
~nonExistedUser
</code></pre></div><p><code>~+</code> 会扩展成当前所在的目录，等同于 <code>pwd</code> 命令。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> ~/foo
$ <span class="token builtin class-name">echo</span> ~+
/home/me/foo
</code></pre></div><h2 id="字符扩展" tabindex="-1"><a class="header-anchor" href="#字符扩展" aria-hidden="true">#</a> <code>?</code> 字符扩展</h2><p><code>?</code> 字符代表文件路径里面的任意单个字符，不包括空字符。比如，<code>Data???</code> 匹配所有 <code>Data</code> 后面跟着三个字符的文件名。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 存在文件 a.txt 和 b.txt</span>
$ <span class="token function">ls</span> ?.txt
a.txt b.txt
</code></pre></div><p>上面命令中，<code>?</code> 表示单个字符，所以会同时匹配 <code>a.txt</code> 和 <code>b.txt</code>。</p><p>如果匹配多个字符，就需要多个 <code>?</code> 连用。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 存在文件 a.txt、b.txt 和 ab.txt</span>
$ <span class="token function">ls</span> ??.txt
ab.txt
</code></pre></div><p>上面命令中，<code>??</code> 匹配了两个字符。</p><p><code>?</code> 字符扩展属于文件名扩展，只有文件确实存在的前提下，才会发生扩展。如果文件不存在，扩展就不会发生。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 当前目录有 a.txt 文件</span>
$ <span class="token builtin class-name">echo</span> ?.txt
a.txt

<span class="token comment"># 当前目录为空目录</span>
$ <span class="token builtin class-name">echo</span> ?.txt
?.txt
</code></pre></div><p>上面例子中，如果 <code>?.txt</code> 可以扩展成文件名，<code>echo</code> 命令会输出扩展后的结果；如果不能扩展成文件名，<code>echo</code> 就会原样输出 <code>?.txt</code>。</p><h2 id="字符扩展-1" tabindex="-1"><a class="header-anchor" href="#字符扩展-1" aria-hidden="true">#</a> <code>*</code> 字符扩展</h2><p><code>*</code> 字符代表文件路径里面的任意数量的任意字符，包括零个字符。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 存在文件 a.txt、b.txt 和 ab.txt</span>
$ <span class="token function">ls</span> *.txt
a.txt b.txt ab.txt
</code></pre></div><p>上面例子中，<code>*.txt</code> 代表后缀名为 <code>.txt</code> 的所有文件。</p><p>如果想输出当前目录的所有文件，直接用 <code>*</code> 即可。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> *
</code></pre></div><p><code>*</code> 可以匹配空字符，下面是一个例子。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 存在文件 a.txt、b.txt 和 ab.txt</span>
$ <span class="token function">ls</span> a*.txt
a.txt ab.txt

$ <span class="token function">ls</span> *b*
b.txt ab.txt
</code></pre></div><p>注意，<code>*</code> 不会匹配隐藏文件(以 <code>.</code> 开头的文件)，即 <code>ls *</code> 不会输出隐藏文件。</p><p>如果要匹配隐藏文件，需要写成 <code>.*</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示所有隐藏文件</span>
$ <span class="token builtin class-name">echo</span> .*
</code></pre></div><p>如果要匹配隐藏文件，同时要排除 <code>.</code> 和 <code>..</code> 这两个特殊的隐藏文件，可以与方括号扩展结合使用，写成 <code>.[!.]*</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> .<span class="token punctuation">[</span><span class="token operator">!</span>.<span class="token punctuation">]</span>*
</code></pre></div><p>注意，<code>*</code> 字符扩展属于文件名扩展，只有文件确实存在的前提下才会扩展。如果文件不存在，就会原样输出。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 当前目录不存在 c 开头的文件</span>
$ <span class="token builtin class-name">echo</span> c*.txt
c*.txt
</code></pre></div><p>上面例子中，当前目录里面没有 <code>c</code> 开头的文件，导致 <code>c*.txt</code> 会原样输出。</p><p><code>*</code> 只匹配当前目录，不会匹配子目录。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 子目录有一个 a.txt</span>
<span class="token comment"># 无效的写法</span>
$ <span class="token function">ls</span> *.txt

<span class="token comment"># 有效的写法</span>
$ <span class="token function">ls</span> */*.txt
</code></pre></div><p>上面的例子，文本文件在子目录，<code>*.txt</code> 不会产生匹配，必须写成 <code>*/*.txt</code>。有几层子目录，就必须写几层星号。</p><p>Bash 4.0 引入了一个参数 <code>globstar</code>，当该参数打开时，允许 <code>**</code> 匹配零个或多个子目录。因此，<code>**/*.txt</code> 可以匹配顶层的文本文件和任意深度子目录的文本文件。详细介绍请看后面 <code>shopt</code> 命令的介绍。</p><h2 id="方括号扩展" tabindex="-1"><a class="header-anchor" href="#方括号扩展" aria-hidden="true">#</a> 方括号扩展</h2><p>方括号扩展的形式是 <code>[...]</code>，只有文件确实存在的前提下才会扩展。如果文件不存在，就会原样输出。括号之中的任意一个字符。比如，<code>[aeiou]</code> 可以匹配五个元音字母中的任意一个。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 存在文件 a.txt 和 b.txt</span>
$ <span class="token function">ls</span> <span class="token punctuation">[</span>ab<span class="token punctuation">]</span>.txt
a.txt b.txt

<span class="token comment"># 只存在文件 a.txt</span>
$ <span class="token function">ls</span> <span class="token punctuation">[</span>ab<span class="token punctuation">]</span>.txt
a.txt
</code></pre></div><p>上面例子中，<code>[ab]</code> 可以匹配 <code>a</code> 或 <code>b</code>，前提是确实存在相应的文件。</p><p>方括号扩展属于文件名匹配，即扩展后的结果必须符合现有的文件路径。如果不存在匹配，就会保持原样，不进行扩展。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 不存在文件 a.txt 和 b.txt</span>
$ <span class="token function">ls</span> <span class="token punctuation">[</span>ab<span class="token punctuation">]</span>.txt
ls: 无法访问<span class="token string">&#39;[ab].txt&#39;</span><span class="token builtin class-name">:</span> 没有那个文件或目录
</code></pre></div><p>上面例子中，由于扩展后的文件不存在，<code>[ab].txt</code> 就原样输出了，导致 <code>ls</code> 命名报错。</p><p>方括号扩展还有两种变体: <code>[^...]</code> 和 <code>[!...]</code>。它们表示匹配不在方括号里面的字符，这两种写法是等价的。比如，<code>[^abc]</code> 或 <code>[!abc]</code> 表示匹配除了 <code>a</code>、<code>b</code>、<code>c</code> 以外的字符。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 存在 aaa、bbb、aba 三个文件</span>
$ <span class="token function">ls</span> ?<span class="token punctuation">[</span><span class="token operator">!</span>a<span class="token punctuation">]</span>?
aba bbb
</code></pre></div><p>上面命令中，<code>[!a]</code> 表示文件名第二个字符不是 <code>a</code> 的文件名，所以返回了 <code>aba</code> 和 <code>bbb</code> 两个文件。</p><p>注意，如果需要匹配 <code>[</code> 字符，可以放在方括号内，比如 <code>[[aeiou]</code>。如果需要匹配连字号 <code>-</code>，只能放在方括号内部的开头或结尾，比如 <code>[-aeiou]</code> 或 <code>[aeiou-]</code>。</p><h2 id="start-end-扩展" tabindex="-1"><a class="header-anchor" href="#start-end-扩展" aria-hidden="true">#</a> [start-end] 扩展</h2><p>方括号扩展有一个简写形式 <code>[start-end]</code>，表示匹配一个连续的范围。比如，<code>[a-c]</code> 等同于 <code>[abc]</code>，<code>[0-9]</code> 匹配 <code>[0123456789]</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 存在文件 a.txt、b.txt 和 c.txt</span>
$ <span class="token function">ls</span> <span class="token punctuation">[</span>a-c<span class="token punctuation">]</span>.txt
a.txt
b.txt
c.txt

<span class="token comment"># 存在文件 report1.txt、report2.txt 和 report3.txt</span>
$ <span class="token function">ls</span> report<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>.txt
report1.txt
report2.txt
report3.txt
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一些常用简写的例子。</p><ul><li><code>[a-z]</code>: 所有小写字母。</li><li><code>[a-zA-Z]</code>: 所有小写字母与大写字母。</li><li><code>[a-zA-Z0-9]</code>: 所有小写字母、大写字母与数字。</li><li><code>[abc]*</code>: 所有以 <code>a</code>、<code>b</code>、<code>c</code> 字符之一开头的文件名。</li><li><code>program.[co]</code>: 文件 <code>program.c</code> 与文件 <code>program.o</code>。</li><li><code>BACKUP.[0-9][0-9][0-9]</code>: 所有以 <code>BACKUP.</code> 开头，后面是三个数字的文件名。</li></ul><p>这种简写形式有一个否定形式 <code>[!start-end]</code>，表示匹配不属于这个范围的字符。比如，<code>[!a-zA-Z]</code> 表示匹配非英文字母的字符。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> report<span class="token punctuation">[</span><span class="token operator">!</span><span class="token number">1</span>–3<span class="token punctuation">]</span>.txt
report4.txt report5.txt
</code></pre></div><p>上面代码中，<code>[!1-3]</code> 表示排除 1、2 和 3。</p><h2 id="大括号扩展" tabindex="-1"><a class="header-anchor" href="#大括号扩展" aria-hidden="true">#</a> 大括号扩展</h2><p>大括号扩展 <code>{...}</code> 表示分别扩展成大括号里面的所有值，各个值之间使用逗号分隔。比如，<code>{1,2,3}</code> 扩展成 <code>1 2 3</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span><span class="token number">1,2</span>,3<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>

$ <span class="token builtin class-name">echo</span> d<span class="token punctuation">{</span>a,e,i,u,o<span class="token punctuation">}</span>g
dag deg <span class="token function">dig</span> dug dog

$ <span class="token builtin class-name">echo</span> Front-<span class="token punctuation">{</span>A,B,C<span class="token punctuation">}</span>-Back
Front-A-Back Front-B-Back Front-C-Back
</code></pre></div><p>注意，大括号扩展不是文件名扩展。它会扩展成所有给定的值，而不管是否有对应的文件存在。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token punctuation">{</span>a,b,c<span class="token punctuation">}</span>.txt
ls: 无法访问<span class="token string">&#39;a.txt&#39;</span><span class="token builtin class-name">:</span> 没有那个文件或目录
ls: 无法访问<span class="token string">&#39;b.txt&#39;</span><span class="token builtin class-name">:</span> 没有那个文件或目录
ls: 无法访问<span class="token string">&#39;c.txt&#39;</span><span class="token builtin class-name">:</span> 没有那个文件或目录
</code></pre></div><p>上面例子中，即使不存在对应的文件，<code>{a,b,c}</code> 依然扩展成三个文件名，导致 <code>ls</code> 命令报了三个错误。</p><p>另一个需要注意的地方是，大括号内部的逗号前后不能有空格。否则，大括号扩展会失效。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span><span class="token number">1</span> , <span class="token number">2</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token number">1</span> , <span class="token number">2</span><span class="token punctuation">}</span>
</code></pre></div><p>上面例子中，逗号前后有空格，Bash 就会认为这不是大括号扩展，而是三个独立的参数。</p><p>逗号前面可以没有值，表示扩展的第一项为空。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cp</span> a.log<span class="token punctuation">{</span>,.bak<span class="token punctuation">}</span>

<span class="token comment"># 等同于</span>
<span class="token comment"># cp a.log a.log.bak</span>
</code></pre></div><p>大括号可以嵌套。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span>j<span class="token punctuation">{</span>p,pe<span class="token punctuation">}</span>g,png<span class="token punctuation">}</span>
jpg jpeg png

$ <span class="token builtin class-name">echo</span> a<span class="token punctuation">{</span>A<span class="token punctuation">{</span><span class="token number">1,2</span><span class="token punctuation">}</span>,B<span class="token punctuation">{</span><span class="token number">3,4</span><span class="token punctuation">}</span><span class="token punctuation">}</span>b
aA1b aA2b aB3b aB4b
</code></pre></div><p>大括号也可以与其他模式联用，并且总是先于其他模式进行扩展。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span>cat,d*<span class="token punctuation">}</span>
<span class="token function">cat</span> dawg dg <span class="token function">dig</span> dog doug dug
</code></pre></div><p>上面例子中，会先进行大括号扩展，然后进行 <code>*</code> 扩展。</p><p>大括号可以用于多字符的模式，方括号不行(只能匹配单字符)。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span>cat,dog<span class="token punctuation">}</span>
<span class="token function">cat</span> dog
</code></pre></div><p>由于大括号扩展 <code>{...}</code> 不是文件名扩展，所以它总是会扩展的。这与方括号扩展 <code>[...]</code> 完全不同，如果匹配的文件不存在，方括号就不会扩展。这一点要注意区分。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 不存在 a.txt 和 b.txt</span>
$ <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>ab<span class="token punctuation">]</span>.txt
<span class="token punctuation">[</span>ab<span class="token punctuation">]</span>.txt

$ <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span>a,b<span class="token punctuation">}</span>.txt
a.txt b.txt
</code></pre></div><p>上面例子中，如果不存在 <code>a.txt</code> 和 <code>b.txt</code>，那么 <code>[ab].txt</code> 就会变成一个普通的文件名，而 <code>{a,b}.txt</code> 可以照样扩展。</p><h2 id="start-end-扩展-1" tabindex="-1"><a class="header-anchor" href="#start-end-扩展-1" aria-hidden="true">#</a> {start..end} 扩展</h2><p>大括号扩展有一个简写形式 <code>{start..end}</code>，表示扩展成一个连续序列。比如，<code>{a..z}</code> 可以扩展成 26 个小写英文字母。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span>a<span class="token punctuation">..</span>c<span class="token punctuation">}</span>
a b c

$ <span class="token builtin class-name">echo</span> d<span class="token punctuation">{</span>a<span class="token punctuation">..</span>d<span class="token punctuation">}</span>g
dag dbg dcg ddg

$ <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">4</span><span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span>

$ <span class="token builtin class-name">echo</span> Number_<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">5</span><span class="token punctuation">}</span>
Number_1 Number_2 Number_3 Number_4 Number_5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种简写形式支持逆序。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span>c<span class="token punctuation">..</span>a<span class="token punctuation">}</span>
c b a

$ <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">..</span><span class="token number">1</span><span class="token punctuation">}</span>
<span class="token number">5</span> <span class="token number">4</span> <span class="token number">3</span> <span class="token number">2</span> <span class="token number">1</span>
</code></pre></div><p>注意，如果遇到无法理解的简写，大括号模式就会原样输出，不会扩展。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span>a1<span class="token punctuation">..</span>3c<span class="token punctuation">}</span>
<span class="token punctuation">{</span>a1<span class="token punctuation">..</span>3c<span class="token punctuation">}</span>
</code></pre></div><p>这种简写形式可以嵌套使用，形成复杂的扩展。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> .<span class="token punctuation">{</span>mp<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">..</span><span class="token number">4</span><span class="token punctuation">}</span>,m4<span class="token punctuation">{</span>a,b,p,v<span class="token punctuation">}</span><span class="token punctuation">}</span>
.mp3 .mp4 .m4a .m4b .m4p .m4v
</code></pre></div><p>大括号扩展的常见用途为新建一系列目录。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token punctuation">{</span><span class="token number">2007</span><span class="token punctuation">..</span><span class="token number">2009</span><span class="token punctuation">}</span>-<span class="token punctuation">{</span>01<span class="token punctuation">..</span><span class="token number">12</span><span class="token punctuation">}</span>
</code></pre></div><p>上面命令会新建 36 个子目录，每个子目录的名字都是”年份-月份“。</p><p>这个写法的另一个常见用途，是直接用于 <code>for</code> 循环。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">4</span><span class="token punctuation">}</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>
</code></pre></div><p>上面例子会循环 4 次。</p><p>如果整数前面有前导 <code>0</code>，扩展输出的每一项都有前导 <code>0</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span>01<span class="token punctuation">..</span><span class="token number">5</span><span class="token punctuation">}</span>
01 02 03 04 05

$ <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span>001<span class="token punctuation">..</span><span class="token number">5</span><span class="token punctuation">}</span>
001 002 003 004 005
</code></pre></div><p>这种简写形式还可以使用第二个双点号(<code>start..end..step</code>)，用来指定扩展的步长。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">..</span><span class="token number">8</span><span class="token punctuation">..</span><span class="token number">2</span><span class="token punctuation">}</span>
<span class="token number">0</span> <span class="token number">2</span> <span class="token number">4</span> <span class="token number">6</span> <span class="token number">8</span>
</code></pre></div><p>上面代码将 <code>0</code> 扩展到 <code>8</code>，每次递增的长度为 <code>2</code>，所以一共输出 5 个数字。</p><p>多个简写形式连用，会有循环处理的效果。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span>a<span class="token punctuation">..</span>c<span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">3</span><span class="token punctuation">}</span>
a1 a2 a3 b1 b2 b3 c1 c2 c3
</code></pre></div><h2 id="变量扩展" tabindex="-1"><a class="header-anchor" href="#变量扩展" aria-hidden="true">#</a> 变量扩展</h2>`,117),b=s("code",null,"$",-1),h=e(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span>
/bin/bash
</code></pre></div><p>变量名除了放在美元符号后面，也可以放在 <code>\${}</code> 里面。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token environment constant">SHELL</span>}</span>
/bin/bash
</code></pre></div><p><code>\${!string*}</code> 或 <code>\${!string@}</code> 返回所有匹配给定字符串 <code>string</code> 的变量名。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">!</span>S*}</span>
<span class="token environment constant">SECONDS</span> <span class="token environment constant">SHELL</span> <span class="token environment constant">SHELLOPTS</span> <span class="token environment constant">SHLVL</span> SSH_AGENT_PID <span class="token environment constant">SSH_AUTH_SOCK</span>
</code></pre></div><p>上面例子中，<code>\${!S*}</code> 扩展成所有以 <code>S</code> 开头的变量名。</p><h2 id="子命令扩展" tabindex="-1"><a class="header-anchor" href="#子命令扩展" aria-hidden="true">#</a> 子命令扩展</h2><p><code>$(...)</code> 可以扩展成另一个命令的运行结果，该命令的所有输出都会作为返回值。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span><span class="token variable">)</span></span>
Tue Jan <span class="token number">28</span> 00:01:13 CST <span class="token number">2020</span>
</code></pre></div><p>上面例子中，<code>$(date)</code> 返回 <code>date</code> 命令的运行结果。</p><p>还有另一种较老的语法，子命令放在反引号之中，也可以扩展成命令的运行结果。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">date</span><span class="token variable">\`</span></span>
Tue Jan <span class="token number">28</span> 00:01:13 CST <span class="token number">2020</span>
</code></pre></div><p><code>$(...)</code> 可以嵌套，比如 <code>$(ls $(pwd))</code>。</p><h2 id="算术扩展" tabindex="-1"><a class="header-anchor" href="#算术扩展" aria-hidden="true">#</a> 算术扩展</h2>`,14),k=s("code",null,"$((...))",-1),g=e(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token variable">))</span></span>
<span class="token number">4</span>
</code></pre></div><h2 id="字符类" tabindex="-1"><a class="header-anchor" href="#字符类" aria-hidden="true">#</a> 字符类</h2><p><code>[[:class:]]</code> 表示一个字符类，扩展成某一类特定字符之中的一个。常用的字符类如下。</p><ul><li><code>[[:alnum:]]</code>: 匹配任意英文字母与数字</li><li><code>[[:alpha:]]</code>: 匹配任意英文字母</li><li><code>[[:blank:]]</code>: 空格和 Tab 键。</li><li><code>[[:cntrl:]]</code>: ASCII 码 0-31 的不可打印字符。</li><li><code>[[:digit:]]</code>: 匹配任意数字 0-9。</li><li><code>[[:graph:]]</code>: A-Z、a-z、0-9 和标点符号。</li><li><code>[[:lower:]]</code>: 匹配任意小写字母 a-z。</li><li><code>[[:print:]]</code>: ASCII 码 32-127 的可打印字符。</li><li><code>[[:punct:]]</code>: 标点符号(除了 A-Z、a-z、0-9 的可打印字符)。</li><li><code>[[:space:]]</code>: 空格、Tab、LF(10)、VT(11)、FF(12)、CR(13)。</li><li><code>[[:upper:]]</code>: 匹配任意大写字母 A-Z。</li><li><code>[[:xdigit:]]</code>: 16 进制字符(A-F、a-f、0-9)。</li></ul><p>请看下面的例子。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>:upper:<span class="token punctuation">]</span><span class="token punctuation">]</span>*
</code></pre></div><p>上面命令输出所有大写字母开头的文件名。</p><p>字符类的第一个方括号后面，可以加上感叹号 <code>!</code>，表示否定。比如，<code>[![:digit:]]</code> 匹配所有非数字。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">[</span>:digit:<span class="token punctuation">]</span><span class="token punctuation">]</span>*
</code></pre></div><p>上面命令输出所有不以数字开头的文件名。</p><p>字符类也属于文件名扩展，如果没有匹配的文件名，字符类就会原样输出。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 不存在以大写字母开头的文件</span>
$ <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>:upper:<span class="token punctuation">]</span><span class="token punctuation">]</span>*
<span class="token punctuation">[</span><span class="token punctuation">[</span>:upper:<span class="token punctuation">]</span><span class="token punctuation">]</span>*
</code></pre></div><p>上面例子中，由于没有可匹配的文件，字符类就原样输出了。</p><h2 id="使用注意点" tabindex="-1"><a class="header-anchor" href="#使用注意点" aria-hidden="true">#</a> 使用注意点</h2><p>通配符有一些使用注意点，不可不知。</p><p>(1)<strong>通配符是先解释，再执行。</strong></p><p>Bash 接收到命令以后，发现里面有通配符，会进行通配符扩展，然后再执行命令。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> a*.txt
ab.txt
</code></pre></div><p>上面命令的执行过程是，Bash 先将 <code>a*.txt</code> 扩展成 <code>ab.txt</code>，然后再执行 <code>ls ab.txt</code>。</p><p>(2)<strong>文件名扩展在不匹配时，会原样输出。</strong></p><p>文件名扩展在没有可匹配的文件时，会原样输出。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 不存在 r 开头的文件名</span>
$ <span class="token builtin class-name">echo</span> r*
r*
</code></pre></div><p>上面代码中，由于不存在 <code>r</code> 开头的文件名，<code>r*</code> 会原样输出。</p><p>下面是另一个例子。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> *.csv
ls: *.csv: No such <span class="token function">file</span> or directory
</code></pre></div><p>另外，前面已经说过，大括号扩展 <code>{...}</code> 不是文件名扩展。</p><p>(3)<strong>只适用于单层路径。</strong></p><p>所有文件名扩展只匹配单层路径，不能跨目录匹配，即无法匹配子目录里面的文件。或者说，<code>?</code> 或 <code>*</code> 这样的通配符，不能匹配路径分隔符 (<code>/</code>)。</p><p>如果要匹配子目录里面的文件，可以写成下面这样。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> */*.txt
</code></pre></div><p>Bash 4.0 新增了一个 <code>globstar</code> 参数，允许 <code>**</code> 匹配零个或多个子目录，详见后面 <code>shopt</code> 命令的介绍。</p><p>(4)<strong>文件名可以使用通配符。</strong></p><p>Bash 允许文件名使用通配符，即文件名包括特殊字符。这时引用文件名，需要把文件名放在单引号里面。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">touch</span> <span class="token string">&#39;fo*&#39;</span>
$ <span class="token function">ls</span>
fo*
</code></pre></div><p>上面代码创建了一个 <code>fo*</code> 文件，这时 <code>*</code> 就是文件名的一部分。</p><h2 id="量词语法" tabindex="-1"><a class="header-anchor" href="#量词语法" aria-hidden="true">#</a> 量词语法</h2><p>量词语法用来控制模式匹配的次数。它只有在 Bash 的 <code>extglob</code> 参数打开的情况下才能使用，不过一般是默认打开的。下面的命令可以查询。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">shopt</span> extglob
extglob         on
</code></pre></div><p>量词语法有下面几个。</p><ul><li><code>?(pattern-list)</code>: 匹配零个或一个模式。</li><li><code>*(pattern-list)</code>: 匹配零个或多个模式。</li><li><code>+(pattern-list)</code>: 匹配一个或多个模式。</li><li><code>@(pattern-list)</code>: 只匹配一个模式。</li><li><code>!(pattern-list)</code>: 匹配零个或一个以上的模式，但不匹配单独一个的模式。</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> abc?<span class="token punctuation">(</span>.<span class="token punctuation">)</span>txt
abctxt abc.txt
</code></pre></div><p>上面例子中，<code>?(.)</code> 匹配零个或一个点。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> abc?<span class="token punctuation">(</span>def<span class="token punctuation">)</span>
abc abcdef
</code></pre></div><p>上面例子中，<code>?(def)</code> 匹配零个或一个 <code>def</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> abc+<span class="token punctuation">(</span>.txt<span class="token operator">|</span>.php<span class="token punctuation">)</span>
abc.php abc.txt
</code></pre></div><p>上面例子中，<code>+(.txt|.php)</code> 匹配文件有一个 <code>.txt</code> 或 <code>.php</code> 后缀名。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> abc+<span class="token punctuation">(</span>.txt<span class="token punctuation">)</span>
abc.txt abc.txt.txt
</code></pre></div><p>上面例子中，<code>+(.txt)</code> 匹配文件有一个或多个 <code>.txt</code> 后缀名。</p><p>量词语法也属于文件名扩展，如果不存在可匹配的文件，就会原样输出。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 没有 abc 开头的文件名</span>
$ <span class="token function">ls</span> abc?<span class="token punctuation">(</span>def<span class="token punctuation">)</span>
ls: 无法访问<span class="token string">&#39;abc?(def)&#39;</span><span class="token builtin class-name">:</span> 没有那个文件或目录
</code></pre></div><p>上面例子中，由于没有可匹配的文件，<code>abc?(def)</code> 就原样输出，导致 <code>ls</code> 命令报错。</p><h2 id="shopt-命令" tabindex="-1"><a class="header-anchor" href="#shopt-命令" aria-hidden="true">#</a> shopt 命令</h2><p><code>shopt</code> 命令可以调整 Bash 的行为。它有好几个参数跟通配符扩展有关。</p><p><code>shopt</code> 命令的使用方法如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打开某个参数</span>
$ <span class="token builtin class-name">shopt</span> <span class="token parameter variable">-s</span> <span class="token punctuation">[</span>optionname<span class="token punctuation">]</span>

<span class="token comment"># 关闭某个参数</span>
$ <span class="token builtin class-name">shopt</span> <span class="token parameter variable">-u</span> <span class="token punctuation">[</span>optionname<span class="token punctuation">]</span>

<span class="token comment"># 查询某个参数关闭还是打开</span>
$ <span class="token builtin class-name">shopt</span> <span class="token punctuation">[</span>optionname<span class="token punctuation">]</span>
</code></pre></div><ol><li><p><strong>dotglob 参数</strong></p><p><code>dotglob</code> 参数可以让扩展结果包括隐藏文件(即点开头的文件)。</p><p>正常情况下，扩展结果不包括隐藏文件。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> *
abc.txt
</code></pre></div><p>打开 <code>dotglob</code>，就会包括隐藏文件。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">shopt</span> <span class="token parameter variable">-s</span> dotglob
$ <span class="token function">ls</span> *
abc.txt .config
</code></pre></div></li><li><p><strong>nullglob 参数</strong></p><p><code>nullglob</code> 参数可以让通配符不匹配任何文件名时，返回空字符。</p><p>默认情况下，通配符不匹配任何文件名时，会保持不变。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">rm</span> b*
rm: 无法删除<span class="token string">&#39;b*&#39;</span><span class="token builtin class-name">:</span> 没有那个文件或目录
</code></pre></div><p>上面例子中，由于当前目录不包括 <code>b</code> 开头的文件名，导致 <code>b*</code> 不会发生文件名扩展，保持原样不变，所以 <code>rm</code> 命令报错没有 <code>b*</code> 这个文件。</p><p>打开 <code>nullglob</code> 参数，就可以让不匹配的通配符返回空字符串。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">shopt</span> <span class="token parameter variable">-s</span> nullglob
$ <span class="token function">rm</span> b*
rm: 缺少操作数
</code></pre></div><p>上面例子中，由于没有 <code>b*</code> 匹配的文件名，所以 <code>rm b*</code> 扩展成了 <code>rm</code>，导致报错变成了”缺少操作数“。</p></li><li><p><strong>failglob 参数</strong></p><p><code>failglob</code> 参数使得通配符不匹配任何文件名时，Bash 会直接报错，而不是让各个命令去处理。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">shopt</span> <span class="token parameter variable">-s</span> failglob
$ <span class="token function">rm</span> b*
bash: 无匹配: b*
</code></pre></div><p>上面例子中，打开 <code>failglob</code> 以后，由于 <code>b*</code> 不匹配任何文件名，Bash 直接报错了，不再让 <code>rm</code> 命令去处理。</p></li><li><p><strong>extglob 参数</strong></p><p><code>extglob</code> 参数使得 Bash 支持 ksh 的一些扩展语法。它默认应该是打开的。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">shopt</span> extglob
extglob         on
</code></pre></div><p>它的主要应用是支持量词语法。如果不希望支持量词语法，可以用下面的命令关闭。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">shopt</span> <span class="token parameter variable">-u</span> extglob
</code></pre></div></li><li><p><strong>nocaseglob 参数</strong></p><p><code>nocaseglob</code> 参数可以让通配符扩展不区分大小写。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">shopt</span> <span class="token parameter variable">-s</span> nocaseglob
$ <span class="token function">ls</span> /windows/program*
/windows/ProgramData
/windows/Program Files
/windows/Program Files <span class="token punctuation">(</span>x86<span class="token punctuation">)</span>
</code></pre></div><p>上面例子中，打开 <code>nocaseglob</code> 以后，<code>program*</code> 就不区分大小写了，可以匹配 <code>ProgramData</code> 等。</p></li><li><p><strong>globstar 参数</strong></p><p><code>globstar</code> 参数可以使得 <code>**</code> 匹配零个或多个子目录。该参数默认是关闭的。</p><p>假设有下面的文件结构。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>a.txt
sub1/b.txt
sub1/sub2/c.txt
</code></pre></div><p>上面的文件结构中，顶层目录、第一级子目录 <code>sub1</code>、第二级子目录 <code>sub1\\sub2</code> 里面各有一个文本文件。请问怎样才能使用通配符，将它们显示出来?</p><p>默认情况下，只能写成下面这样。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> *.txt */*.txt */*/*.txt
a.txt  sub1/b.txt  sub1/sub2/c.txt
</code></pre></div><p>这是因为 <code>*</code> 只匹配当前目录，如果要匹配子目录，只能一层层写出来。</p><p>打开 <code>globstar</code> 参数以后，<code>**</code> 匹配零个或多个子目录。因此，<code>**/*.txt</code> 就可以得到想要的结果。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">shopt</span> <span class="token parameter variable">-s</span> globstar
$ <span class="token function">ls</span> **/*.txt
a.txt  sub1/b.txt  sub1/sub2/c.txt
</code></pre></div></li></ol><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,57),m={href:"https://medium.com/@leedowthwaite/why-most-people-only-think-they-understand-wildcards-63bb9c2024ab",target:"_blank",rel:"noopener noreferrer"},x={href:"https://appcodelabs.com/advanced-wildcard-patterns-most-people-dont-know",target:"_blank",rel:"noopener noreferrer"};function v($,f){const c=p("RouterLink"),t=p("ExternalLinkIcon");return d(),i("div",null,[r,s("p",null,[a("Bash 将美元符号 "),b,a(" 开头的词元视为变量，将其扩展成变量值，详见"),n(c,{to:"/linux/bash/variable.html"},{default:o(()=>[a("Bash 变量")]),_:1}),a(" 一章。")]),h,s("p",null,[k,a(" 可以扩展成整数运算的结果，详见 "),n(c,{to:"/linux/bash/arithmetic.html"},{default:o(()=>[a("Bash 的算术运算")]),_:1}),a(" 一章。")]),g,s("ul",null,[s("li",null,[s("a",m,[a("Think You Understand Wildcards? Think Again"),n(t)])]),s("li",null,[s("a",x,[a("Advanced Wildcard Patterns Most People Don’t Know"),n(t)])])])])}const B=l(u,[["render",v],["__file","expansion.html.vue"]]);export{B as default};
