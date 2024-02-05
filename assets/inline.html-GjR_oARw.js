import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as l,c,d as n,e as a,a as e,b as s}from"./app-S62fdHqc.js";const i={},r=s('<h2 id="链接" tabindex="-1"><a class="header-anchor" href="#链接"><span>链接</span></a></h2><p>Markdown 支持两种形式的链接语法: <em>行内</em>和<em>参考</em>。</p><p>不管是哪一种，链接的文字都是用 <code>[方括号]</code> 来标记。</p><h3 id="行内链接" tabindex="-1"><a class="header-anchor" href="#行内链接"><span>行内链接</span></a></h3><p>要建立一个行内形式的链接，只要在方块括号后输入圆括号并插入网址链接即可，如果您还想要加上链接的 title 文字，只要在网址后面，用双引号把 title 文字包起来即可。</p>',5),u={class:"hint-container details"},d=s(`<summary>例子</summary><p><strong>输入</strong>:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>This is <span class="token url">[<span class="token content">an example</span>](<span class="token url">http://example.com/</span> <span class="token string">&quot;Title&quot;</span>)</span> inline link.

<span class="token url">[<span class="token content">This link</span>](<span class="token url">http://example.net/</span>)</span> has no title attribute.
</code></pre></div><p><strong>渲染结果</strong>:</p><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
  This is <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://example.com/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> an example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> inline
  link.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://example.net/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>This link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> has no title attribute.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><strong>输出</strong>:</p>`,6),k={href:"http://example.com/",title:"Title",target:"_blank",rel:"noopener noreferrer"},g={href:"http://example.net/",target:"_blank",rel:"noopener noreferrer"},m=s(`<p>如果您是要链接到同样主机的资源，您可以使用绝对路径或相对路径:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>See my <span class="token url">[<span class="token content">About</span>](<span class="token url">/about.html</span>)</span> page for details.
</code></pre></div><h3 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h3><p>参考形式的链接使用另外一个方括号接在链接文字的括号后面，而在第二个方括号里面要填入标识链接的标签:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>This is <span class="token url">[<span class="token content">an example</span>][<span class="token variable">id</span>]</span> reference-style link.
</code></pre></div><p>之后在文件的任意地方，您都可以把这个标签的链接内容定义出来:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">id</span><span class="token punctuation">]</span><span class="token punctuation">:</span> http://example.com/ <span class="token string">&quot;Optional Title Here&quot;</span></span>
</code></pre></div><p>链接定义的形式为:</p><ul><li>方括号，输入链接的标识 ID</li><li>冒号</li><li>一个以上的空白或 tab</li><li>链接的网址</li><li>选择性地添加 title 内容，可以用单引号、双引号或是括号包括</li></ul><p>下面这三种链接的定义相同:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">foo</span><span class="token punctuation">]</span><span class="token punctuation">:</span> http://example.com/ <span class="token string">&quot;Optional Title Here&quot;</span></span>
<span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">foo</span><span class="token punctuation">]</span><span class="token punctuation">:</span> http://example.com/ <span class="token string">&quot;Optional Title Here&quot;</span></span>
<span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">foo</span><span class="token punctuation">]</span><span class="token punctuation">:</span> http://example.com/ <span class="token string">&quot;Optional Title Here&quot;</span></span>
</code></pre></div><p>链接网址也可以用方括号包起来:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">id</span><span class="token punctuation">]</span><span class="token punctuation">:</span> [http://example.com/] <span class="token string">&quot;Optional Title Here&quot;</span></span>
</code></pre></div><p>您也可以把 title 属性放到下一行，也可以加一些缩进，网址太长的话，这样会比较好看:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">id</span><span class="token punctuation">]</span><span class="token punctuation">:</span> http://example.com/longish/path/to/resource/here</span>
    &quot;Optional Title Here&quot;
</code></pre></div><p>网址定义只有在产生链接的时候用到，并不会直接出现在文件之中。</p><p>链接辨识标签可以有字母、数字、空白和标点符号，但是并<strong>不</strong>区分大小写，因此下面两个链接是一样的:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token url">[<span class="token content">link text</span>][<span class="token variable">a</span>]</span>
<span class="token url">[<span class="token content">link text</span>][<span class="token variable">A</span>]</span>
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">最佳实践</p><p>由于不区分大小写的原因，Markdown 最佳实践推荐标识标签均使用小写。</p></div><h4 id="简写" tabindex="-1"><a class="header-anchor" href="#简写"><span>简写</span></a></h4><p>您可以通过简写写法省略指定链接标签，这种情形下，链接标签和链接文字会视为相同，要用预设链接标签只要在链接文字后面加上一个空的方括号，如果您要让 &quot;Google&quot; 链接到 google.com，您可以简化成:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>[Google][]
</code></pre></div><p>然后定义链接内容:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">google</span><span class="token punctuation">]</span><span class="token punctuation">:</span> http://google.com/</span>
</code></pre></div><p>由于链接文字可能包含空白，所以这种简化的标签内也可以包含多个文字:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>Visit [Daring Fireball][] for more information.
</code></pre></div><p>然后定义链接:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">daring fireball</span><span class="token punctuation">]</span><span class="token punctuation">:</span> http://daringfireball.net/</span>
</code></pre></div><p>链接的定义可以放在文件中的任何一个地方，建议放在链接出现段落的后面或文件最后面，就像是注解一样。</p>`,29),h={class:"hint-container details"},v=s(`<summary>例子</summary><p><strong>输入</strong>:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>I get 10 times more traffic from <span class="token url">[<span class="token content">Google</span>][<span class="token variable">1</span>]</span> than from
<span class="token url">[<span class="token content">Yahoo</span>][<span class="token variable">2</span>]</span> or <span class="token url">[<span class="token content">MSN</span>][<span class="token variable">3</span>]</span>.

<span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> http://google.com/ <span class="token string">&quot;Google&quot;</span></span>
<span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> http://search.yahoo.com/ <span class="token string">&quot;Yahoo Search&quot;</span></span>
<span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> http://search.msn.com/ <span class="token string">&quot;MSN Search&quot;</span></span>
</code></pre></div><p><strong>等同于</strong>:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>I get 10 times more traffic from [Google][] than from
[Yahoo][] or [MSN][].

<span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">google</span><span class="token punctuation">]</span><span class="token punctuation">:</span> http://google.com/ <span class="token string">&quot;Google&quot;</span></span>
<span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">yahoo</span><span class="token punctuation">]</span><span class="token punctuation">:</span> http://search.yahoo.com/ <span class="token string">&quot;Yahoo Search&quot;</span></span>
<span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">msn</span><span class="token punctuation">]</span><span class="token punctuation">:</span> http://search.msn.com/ <span class="token string">&quot;MSN Search&quot;</span></span>
</code></pre></div><p><strong>渲染结果</strong>:</p><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
  I get 10 times more traffic from
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://google.com/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Google<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Google<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> than from
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://search.yahoo.com/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Yahoo Search<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Yahoo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  or <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://search.msn.com/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>MSN Search<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>MSN<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><strong>输出</strong>:</p>`,8),f={href:"http://google.com/",title:"Google",target:"_blank",rel:"noopener noreferrer"},w={href:"http://search.yahoo.com/",title:"Yahoo Search",target:"_blank",rel:"noopener noreferrer"},b={href:"http://search.msn.com/",title:"MSN Search",target:"_blank",rel:"noopener noreferrer"},x=s(`<p><strong>同样的行内模式写法</strong>:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>I get 10 times more traffic from <span class="token url">[<span class="token content">Google</span>](<span class="token url">http://google.com/</span> <span class="token string">&quot;Google&quot;</span>)</span>
than from <span class="token url">[<span class="token content">Yahoo</span>](<span class="token url">http://search.yahoo.com/</span> <span class="token string">&quot;Yahoo Search&quot;</span>)</span> or
<span class="token url">[<span class="token content">MSN</span>](<span class="token url">http://search.msn.com/</span> <span class="token string">&quot;MSN Search&quot;</span>)</span>.
</code></pre></div>`,2),_=s(`<div class="hint-container tip"><p class="hint-container-title">优势</p><p>参考式的链接其实重点不在于它比较好写，而是它比较好读，比较一下上面的范例，使用参考式的文章本身只有 81 个字符，但是用行内形式的链接却会增加到 176 个字符，如果是用纯 HTML 格式来写，会有 234 个字符，在 HTML 格式中，标签比文字还要多。</p><p>使用 Markdown 的参考式链接，可以让文件更像是浏览器最后产生的结果，让您可以把一些标记相关的资讯移到段落文字之外，您就可以增加链接而不让文章的阅读感觉被打断。</p></div><h2 id="强调" tabindex="-1"><a class="header-anchor" href="#强调"><span>强调</span></a></h2><p>Markdown 使用星号 (<code>*</code>) 和底线 (<code>_</code>) 作为标记强调字词的符号。</p><p>被 <code>*</code> 或 <code>_</code> 包围的字词会被转成用 <code>&lt;em&gt;</code> 标签包围，用两个 <code>*</code> 或 <code>_</code> 包起来的话，则会被转成 <code>&lt;strong&gt;</code>。</p><details class="hint-container details"><summary>例子</summary><p><strong>输入</strong>:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">double asterisks</span><span class="token punctuation">**</span></span> (建议)

<span class="token italic"><span class="token punctuation">_</span><span class="token content">single underscores</span><span class="token punctuation">_</span></span> (建议)

<span class="token bold"><span class="token punctuation">__</span><span class="token content">double underscores</span><span class="token punctuation">__</span></span>

<span class="token italic"><span class="token punctuation">*</span><span class="token content">single asterisks</span><span class="token punctuation">*</span></span>
</code></pre></div><p><strong>渲染结果</strong>:</p><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>double asterisks<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>single underscores<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>double underscores<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>single asterisks<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><p>但是如果您的 <code>*</code> 和 <code>_</code> 两边都有空白的话，它们就只会被当成普通的符号</p><details class="hint-container details"><summary>例子</summary><p><strong>输入</strong>:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>These two <span class="token italic"><span class="token punctuation">_</span><span class="token content">, </span><span class="token punctuation">_</span></span> and <span class="token italic"><span class="token punctuation">*</span><span class="token content">, </span><span class="token punctuation">*</span></span> will be treated as normal characters.
</code></pre></div><p><strong>输出</strong>:</p><p>These two _, _ and *, * will be treated as normal characters.</p></details><div class="hint-container tip"><p class="hint-container-title">最佳实践</p><p>为了将两者进行区分，Markdown 最佳实践要求在所有地方尽可能使用 <code>**</code> 和 <code>_</code>。但是这里有一个例外:</p><p>由于使用代码或者是其他情况，人们很容易创造出带有下划线的单词 (如 <code>last_updated_time</code>)，在这种情况下，updated 就不会识别为斜体。只有在这种情况下，使用 <code>*</code> 而不是 <code>_</code>。</p><details class="hint-container details"><summary>例子</summary><p><strong>输入</strong>:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>A varibale like last_updated_time won’t be <span class="token italic"><span class="token punctuation">_</span><span class="token content">transformed</span><span class="token punctuation">_</span></span> like last<span class="token italic"><span class="token punctuation">*</span><span class="token content">updated</span><span class="token punctuation">*</span></span>time.
</code></pre></div><p><strong>输出</strong>:</p><p>A varibale like last_updated_time won’t be <em>transformed</em> like last<em>updated</em>time.</p></details></div><p>强调也可以直接插在文字中间:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>un<span class="token italic"><span class="token punctuation">*</span><span class="token content">frigging</span><span class="token punctuation">*</span></span>believable
</code></pre></div><h3 id="转义" tabindex="-1"><a class="header-anchor" href="#转义"><span>转义</span></a></h3><details class="hint-container details"><summary>如果要在文字前后直接插入普通的星号或底线，您可以用 \\</summary><p><strong>输入</strong>:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>\\*this text is surrounded by literal asterisks\\*

\\_this text is surrounded by literal underscores\\_
</code></pre></div><p><strong>输出</strong>:</p><p>*this text is surrounded by literal asterisks*</p><p>_this text is surrounded by literal underscores_</p></details><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h2><p>如果要标记一小段行内代码，您可以用反引号 (<code>\`</code>) 把它包起来。</p><div class="hint-container tip"><p class="hint-container-title">反引号</p><p>反引号在键盘的左上角，ESC 键的下方</p></div><details class="hint-container details"><summary>例子</summary><p><strong>输入</strong>:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>Use the <span class="token code-snippet code keyword">\`printf()\`</span> function.
</code></pre></div><p><strong>渲染结果</strong>:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Use the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>printf()<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> function.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><strong>输出</strong>:</p><p>Use the <code>printf()</code> function.</p></details><h3 id="转义-1" tabindex="-1"><a class="header-anchor" href="#转义-1"><span>转义</span></a></h3><p>如果要在代码内插入反引号，您可以用多个反引号来开启和结束行内代码</p><details class="hint-container details"><summary>例子</summary><p><strong>输入</strong>:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code-snippet code keyword">\`\` There is a literal backtick (\`) here. \`\`</span>
</code></pre></div><p><strong>渲染结果</strong>:</p><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>There is a literal backtick (\`) here.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><strong>输出</strong>:</p><p><code>There is a literal backtick (\`) here.</code></p></details><p>代码码区段的起始和结束端都可以放入一个空白，起始端后面一个，结束端前面一个，这样您就可以在区段的一开始就插入反引号。</p><details class="hint-container details"><summary>例子</summary><p><strong>输入</strong>:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>A single backtick in a code span: <span class="token code-snippet code keyword">\`\` \` \`\`</span>

A backtick-delimited string in a code span: <span class="token code-snippet code keyword">\`\` \`foo\` \`\`</span>
</code></pre></div><p><strong>渲染结果</strong>:</p><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>A single backtick in a code span: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>\`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>A backtick-delimited string in a code span: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>\`foo\`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><strong>输出</strong>:</p><p>A single backtick in a code span: <code>\`</code></p><p>A backtick-delimited string in a code span: <code>\`foo\`</code></p></details><p>在代码码区段内，<code>&amp;</code> 和方括号都会被转成 HTML 实体，这样会比较容易插入 HTML 原始码.</p><details class="hint-container details"><summary>例子</summary><p><strong>输入</strong>:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>Please don’t use any <span class="token code-snippet code keyword">\`&lt;blink&gt;\`</span> tags.
</code></pre></div><p><strong>渲染结果</strong>:</p><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Please don’t use any <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token entity named-entity" title="&lt;">&amp;lt;</span>blink<span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> tags.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><strong>输出</strong>:</p><p>Please don’t use any <code>&lt;blink&gt;</code> tags.</p></details><h2 id="图片" tabindex="-1"><a class="header-anchor" href="#图片"><span>图片</span></a></h2><p>很明显地，要在纯文字应用中设计一个「自然」的语法来插入图片是有一定难度的。</p><p>Markdown 使用一种和链接很相似的语法来标记图片，同样也允许两种样式: <em>行内</em> 和 <em>参考</em>。</p><ul><li><p>行内图片的语法如下:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">Alt text</span>](<span class="token url">/path/to/img.jpg</span>)</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">Alt text</span>](<span class="token url">/path/to/img.jpg</span> <span class="token string">&quot;Optional title&quot;</span>)</span>
</code></pre></div><p>详细叙述如下:</p><ul><li>一个惊叹号 <code>!</code></li><li>一个方括号，里面放上图片的替代文字</li><li>一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上 选择性的 title 文字。</li></ul></li><li><p>参考式的图片语法如下:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">Alt text</span>][<span class="token variable">id</span>]</span>
</code></pre></div><p><code>id</code> 是图片参考的名称，图片参考的定义方式则和链接参考一样:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">id</span><span class="token punctuation">]</span><span class="token punctuation">:</span> url/to/image <span class="token string">&quot;Optional title attribute&quot;</span></span>
</code></pre></div></li></ul><p>它们的优劣与链接相同。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Markdown 无法指定图片的宽高，如果您需要的话，您可以使用普通的 <code>&lt;img&gt;</code> 标签。</p></div>`,29);function q(y,M){const t=o("ExternalLinkIcon");return l(),c("div",null,[r,n("details",u,[d,n("p",null,[a("This is "),n("a",k,[a("an example"),e(t)]),a(" inline link.")]),n("p",null,[n("a",g,[a("This link"),e(t)]),a(" has no title attribute.")])]),m,n("details",h,[v,n("p",null,[a("I get 10 times more traffic from "),n("a",f,[a("Google"),e(t)]),a(" than from "),n("a",w,[a("Yahoo"),e(t)]),a(" or "),n("a",b,[a("MSN"),e(t)]),a(".")]),x]),_])}const H=p(i,[["render",q],["__file","inline.html.vue"]]),N=JSON.parse('{"path":"/code/language/markdown/inline.html","title":"Markdown 行内元素","lang":"zh-CN","frontmatter":{"date":"2021-02-21T00:00:00.000Z","title":"Markdown 行内元素","icon":"markdown","category":"Markdown","tag":["Markdown"],"description":"链接 Markdown 支持两种形式的链接语法: 行内和参考。 不管是哪一种，链接的文字都是用 [方括号] 来标记。 行内链接 要建立一个行内形式的链接，只要在方块括号后输入圆括号并插入网址链接即可，如果您还想要加上链接的 title 文字，只要在网址后面，用双引号把 title 文字包起来即可。 例子 输入: 渲染结果: 输出: This is an...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/markdown/inline.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Markdown 行内元素"}],["meta",{"property":"og:description","content":"链接 Markdown 支持两种形式的链接语法: 行内和参考。 不管是哪一种，链接的文字都是用 [方括号] 来标记。 行内链接 要建立一个行内形式的链接，只要在方块括号后输入圆括号并插入网址链接即可，如果您还想要加上链接的 title 文字，只要在网址后面，用双引号把 title 文字包起来即可。 例子 输入: 渲染结果: 输出: This is an..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.com/path/to/img.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Markdown 行内元素"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:published_time","content":"2021-02-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Markdown 行内元素\\",\\"image\\":[\\"https://mister-hope.com/path/to/img.jpg\\",\\"https://mister-hope.com/path/to/img.jpg \\\\\\"Optional title\\\\\\"\\"],\\"datePublished\\":\\"2021-02-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"链接","slug":"链接","link":"#链接","children":[{"level":3,"title":"行内链接","slug":"行内链接","link":"#行内链接","children":[]},{"level":3,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}]},{"level":2,"title":"强调","slug":"强调","link":"#强调","children":[{"level":3,"title":"转义","slug":"转义","link":"#转义","children":[]}]},{"level":2,"title":"代码","slug":"代码","link":"#代码","children":[{"level":3,"title":"转义","slug":"转义-1","link":"#转义-1","children":[]}]},{"level":2,"title":"图片","slug":"图片","link":"#图片","children":[]}],"git":{"createdTime":1616318554000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":6},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":6.91,"words":2073},"filePathRelative":"code/language/markdown/inline.md","localizedDate":"2021年2月21日","excerpt":"","autoDesc":true}');export{H as comp,N as data};
