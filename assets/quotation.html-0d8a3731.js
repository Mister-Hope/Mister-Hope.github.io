import{_ as s,X as a,Y as n,a1 as e,$ as l,a3 as c}from"./framework-a91f7991.js";const t={},o=l("p",null,"Bash 只有一种数据类型，就是字符串。不管用户输入什么数据，Bash 都视为字符串。因此，字符串相关的引号和转义，对 Bash 来说就非常重要。",-1),p=c(`<h2 id="转义" tabindex="-1"><a class="header-anchor" href="#转义" aria-hidden="true">#</a> 转义</h2><p>某些字符在 Bash 里面有特殊含义(比如<code>$</code>、<code>&amp;</code>、<code>*</code>)。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable">$date</span>

$
</code></pre></div><p>上面例子中，输出 <code>$date</code> 不会有任何结果，因为 <code>$</code> 是一个特殊字符。</p><p>如果想要原样输出这些特殊字符，就必须在它们前面加上反斜杠，使其变成普通字符。这就叫做“转义”(escape)。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span><span class="token variable">$date</span>
<span class="token variable">$date</span>
</code></pre></div><p>上面命令中，只有在特殊字符 <code>$</code> 前面加反斜杠，才能原样输出。</p><p>反斜杠本身也是特殊字符，如果想要原样输出反斜杠，就需要对它自身转义，连续使用两个反斜线 (<code>\\\\</code>)。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span><span class="token punctuation">\\</span>
<span class="token punctuation">\\</span>
</code></pre></div><p>上面例子输出了反斜杠本身。</p><p>反斜杠除了用于转义，还可以表示一些不可打印的字符。</p><ul><li><code>\\a</code>: 响铃</li><li><code>\\b</code>: 退格</li><li><code>\\n</code>: 换行</li><li><code>\\r</code>: 回车</li><li><code>\\t</code>: 制表符</li></ul><p>如果想要在命令行使用这些不可打印的字符，可以把它们放在引号里面，然后使用 <code>echo</code> 命令的 <code>-e</code> 参数。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> a<span class="token punctuation">\\</span>tb
atb

$ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;a<span class="token entity" title="\\t">\\t</span>b&quot;</span>
a        b
</code></pre></div><p>上面例子中，命令行直接输出不可打印字符，Bash 不能正确解释。必须把它们放在引号之中，然后使用 <code>echo</code> 命令的 <code>-e</code> 参数。</p><p>由于反斜杠可以对换行符转义，使得 Bash 认为换行符是一个普通字符，从而可以将一行命令写成多行。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">mv</span> <span class="token punctuation">\\</span>
/path/to/foo <span class="token punctuation">\\</span>
/path/to/bar

<span class="token comment"># 等同于</span>
$ <span class="token function">mv</span> /path/to/foo /path/to/bar
</code></pre></div><p>上面例子中，如果一条命令过长，就可以在行尾使用反斜杠，将其改写成多行。这是常见的多行命令的写法。</p><h2 id="单引号" tabindex="-1"><a class="header-anchor" href="#单引号" aria-hidden="true">#</a> 单引号</h2><p>Bash 允许字符串放在单引号或双引号之中，加以引用。</p><p>单引号用于保留字符的字面含义，各种特殊字符在单引号里面，都会变为普通字符，比如星号 (<code>*</code>)、美元符号( <code>$</code>)、反斜杠 (<code>\\</code>)等。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;*&#39;</span>
*

$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;$USER&#39;</span>
<span class="token environment constant">$USER</span>

$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;$((2+2))&#39;</span>
<span class="token variable"><span class="token variable">$((</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">2</span><span class="token variable">))</span></span>

$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;$(echo foo)&#39;</span>
<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> foo<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令中，单引号使得 Bash 扩展、变量引用、算术运算和子命令，都失效了。如果不使用单引号，它们都会被 Bash 自动扩展。</p><p>由于反斜杠在单引号里面变成了普通字符，所以如果单引号之中，还要使用单引号，不能使用转义，需要在外层的单引号前面加上一个美元符号 (<code>$</code>)，然后再对里层的单引号转义。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 不正确</span>
$ <span class="token builtin class-name">echo</span> it<span class="token string">&#39;s

# 不正确
$ echo &#39;</span>it<span class="token punctuation">\\</span>&#39;s<span class="token string">&#39;

# 正确
$ echo $&#39;</span>it<span class="token punctuation">\\</span>&#39;s&#39;
</code></pre></div><p>不过，更合理的方法是改在双引号之中使用单引号。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;it&#39;s&quot;</span>
it&#39;s
</code></pre></div><h2 id="双引号" tabindex="-1"><a class="header-anchor" href="#双引号" aria-hidden="true">#</a> 双引号</h2><p>双引号比单引号宽松，可以保留大部分特殊字符的本来含义，但是三个字符除外: 美元符号(<code>$</code>)、反引号(<code>\`</code>)和反斜杠(<code>\\</code>)。也就是说，这三个字符在双引号之中，会被 Bash 自动扩展。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;*&quot;</span>
*
</code></pre></div><p>上面例子中，通配符 <code>*</code> 放在双引号之中，就变成了普通字符，会原样输出。这一点需要特别留意，双引号里面不会进行文件名扩展。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token environment constant">$SHELL</span>&quot;</span>
/bin/bash

$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span><span class="token variable">\`</span></span>&quot;</span>
Mon Jan <span class="token number">27</span> <span class="token number">13</span>:33:18 CST <span class="token number">2020</span>
</code></pre></div><p>上面例子中，美元符号和反引号在双引号中，都保持特殊含义。美元符号用来引用变量，反引号则是执行子命令。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;I&#39;d say: <span class="token entity" title="\\&quot;">\\&quot;</span>hello!<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
I&#39;d say: <span class="token string">&quot;hello!&quot;</span>

$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\\\">\\\\</span>&quot;</span>
<span class="token punctuation">\\</span>
</code></pre></div><p>上面例子中，反斜杠在双引号之中保持特殊含义，用来转义。所以，可以使用反斜杠，在双引号之中插入双引号，或者插入反斜杠本身。</p><p>由于双引号将换行符解释为普通字符，所以可以利用双引号，在命令行输入多行文本。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello
world&quot;</span>
hello
world
</code></pre></div><p>上面命令中，Bash 正常情况下会将换行符解释为命令结束，但是换行符在双引号之中就是普通字符，所以可以输入多行。<code>echo</code> 命令会将换行符原样输出，显示的时候正常解释为换行。</p><p>双引号的另一个常见的使用场合是，文件名包含空格。这时就必须使用双引号，将文件名放在里面。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token string">&quot;two words.txt&quot;</span>
</code></pre></div><p>上面命令中，<code>two words.txt</code> 是一个包含空格的文件名，否则就会被 Bash 当作两个文件。</p><p>双引号会原样保存多余的空格。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;this is a     test&quot;</span>
this is a     <span class="token builtin class-name">test</span>
</code></pre></div><p>双引号还有一个作用，就是保存原始命令的输出格式。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 单行输出</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cal</span><span class="token variable">)</span></span>
一月 <span class="token number">2020</span> 日 一 二 三 四 五 六 <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token punctuation">..</span>. <span class="token number">31</span>

<span class="token comment"># 原始格式输出</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">cal</span><span class="token variable">)</span></span>&quot;</span>
      一月 <span class="token number">2020</span>
日 一 二 三 四 五 六
          <span class="token number">1</span>  <span class="token number">2</span>  <span class="token number">3</span>  <span class="token number">4</span>
 <span class="token number">5</span>  <span class="token number">6</span>  <span class="token number">7</span>  <span class="token number">8</span>  <span class="token number">9</span> <span class="token number">10</span> <span class="token number">11</span>
<span class="token number">12</span> <span class="token number">13</span> <span class="token number">14</span> <span class="token number">15</span> <span class="token number">16</span> <span class="token number">17</span> <span class="token number">18</span>
<span class="token number">19</span> <span class="token number">20</span> <span class="token number">21</span> <span class="token number">22</span> <span class="token number">23</span> <span class="token number">24</span> <span class="token number">25</span>
<span class="token number">26</span> <span class="token number">27</span> <span class="token number">28</span> <span class="token number">29</span> <span class="token number">30</span> <span class="token number">31</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，如果 <code>$(cal)</code> 不放在双引号之中，<code>echo</code> 就会将所有结果以单行输出，丢弃了所有原始的格式。</p><h2 id="here-文档" tabindex="-1"><a class="header-anchor" href="#here-文档" aria-hidden="true">#</a> Here 文档</h2><p>Here 文档(here document)是一种输入多行字符串的方法，格式如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;&lt;</span> <span class="token string">token
text
token</span>
</code></pre></div><p>它的格式分成开始标记(<code>&lt;&lt; token</code>)和结束标记(<code>token</code>)。开始标记是两个小于号 + Here 文档的名称，名称可以随意取，后面必须是一个换行符；结束标记是单独一行顶格写的 Here 文档名称，如果不是顶格，结束标记不起作用。两者之间就是多行字符串的内容。</p><p>下面是一个通过 Here 文档输出 HTML 代码的例子。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">_EOF_
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;
    The title of your page
    &lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
    Your page content goes here.
&lt;/body&gt;
&lt;/html&gt;
_EOF_</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here 文档内部会发生变量替换，同时支持反斜杠转义，但是不支持通配符扩展，双引号和单引号也失去语法作用，变成了普通字符。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token string">&#39;hello world&#39;</span>
$ <span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">_example_
<span class="token variable">$foo</span>
&quot;<span class="token variable">$foo</span>&quot;
&#39;<span class="token variable">$foo</span>&#39;
_example_</span>

hello world
<span class="token string">&quot;hello world&quot;</span>
<span class="token string">&#39;hello world&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，变量 <code>$foo</code> 发生了替换，但是双引号和单引号都原样输出了，表明它们已经失去了引用的功能。</p><p>如果不希望发生变量替换，可以把 Here 文档的开始标记放在单引号之中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token string">&#39;hello world&#39;</span>
$ <span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;_example_&#39;
$foo
&quot;$foo&quot;
&#39;$foo&#39;
_example_</span>

<span class="token variable">$foo</span>
<span class="token string">&quot;<span class="token variable">$foo</span>&quot;</span>
<span class="token string">&#39;$foo&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，Here 文档的开始标记(<code>_example_</code>)放在单引号之中，导致变量替换失效了。</p><p>Here 文档的本质是重定向，它将字符串重定向输出给某个命令，相当于包含了 <code>echo</code> 命令。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">command</span> <span class="token operator">&lt;&lt;</span> <span class="token string">token
  string
token</span>

<span class="token comment"># 等同于</span>

$ <span class="token builtin class-name">echo</span> string <span class="token operator">|</span> <span class="token builtin class-name">command</span>
</code></pre></div><p>上面代码中，Here 文档相当于 <code>echo</code> 命令的重定向。</p><p>所以，Here 字符串只适合那些可以接受标准输入作为参数的命令，对于其他命令无效，比如 <code>echo</code> 命令就不能用 Here 文档作为参数。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token operator">&lt;&lt;</span> <span class="token string">_example_
hello
_example_</span>
</code></pre></div><p>上面例子不会有任何输出，因为 Here 文档对于 <code>echo</code> 命令无效。</p><p>此外，Here 文档也不能作为变量的值，只能用于命令的参数。</p><h2 id="here-字符串" tabindex="-1"><a class="header-anchor" href="#here-字符串" aria-hidden="true">#</a> Here 字符串</h2><p>Here 文档还有一个变体，叫做 Here 字符串(Here string)，使用三个小于号(<code>&lt;&lt;&lt;</code>)表示。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;&lt;&lt;</span> string
</code></pre></div><p>它的作用是将字符串通过标准输入，传递给命令。</p><p>有些命令直接接受给定的参数，与通过标准输入接受参数，结果是不一样的。所以才有了这个语法，使得将字符串通过标准输入传递给命令更方便，比如 <code>cat</code> 命令只接受标准输入传入的字符串。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> <span class="token operator">&lt;&lt;&lt;</span> <span class="token string">&#39;hi there&#39;</span>
<span class="token comment"># 等同于</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;hi there&#39;</span> <span class="token operator">|</span> <span class="token function">cat</span>
</code></pre></div><p>上面的第一种语法使用了 Here 字符串，要比第二种语法看上去语义更好，也更简洁。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ md5sum <span class="token operator">&lt;&lt;&lt;</span> <span class="token string">&#39;ddd&#39;</span>
<span class="token comment"># 等同于</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;ddd&#39;</span> <span class="token operator">|</span> md5sum
</code></pre></div><p>上面例子中，<code>md5sum</code> 命令只能接受标准输入作为参数，不能直接将字符串放在命令后面，会被当作文件名，即 <code>md5sum ddd</code> 里面的 <code>ddd</code> 会被解释成文件名。这时就可以用 Here 字符串，将字符串传给 <code>md5sum</code> 命令。</p>`,74);function i(d,r){return a(),n("div",null,[o,e(" more "),p])}const b=s(t,[["render",i],["__file","quotation.html.vue"]]);export{b as default};
