import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as i,d as a,e as n,a as t,w as d,b as e}from"./app-odku2cZ-.js";const r={},u=e(`<h2 id="其他特性" tabindex="-1"><a class="header-anchor" href="#其他特性"><span>其他特性</span></a></h2><h3 id="自动链接" tabindex="-1"><a class="header-anchor" href="#自动链接"><span>自动链接</span></a></h3><p>Markdown 支持比较简短的自动链接形式来处理网址和电子邮件信箱，只要是用尖括号包起来， Markdown 就会自动把它转成链接，链接的文字就和链接位置一样，例如:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>&lt;http://example.com/&gt;
</code></pre></div><p>Markdown 会转为:</p><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://example.com/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>http://example.com/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>自动的邮件链接也很类似，只是 Markdown 会先做一个编码转换的过程，把文字字符转成 16 进位码的 HTML 实体，这样的格式可以混淆一些不好的信箱地址收集机器人，例如:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>address@example.com</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Markdown 会转成:</p><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>
  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token entity" title="m">&amp;#x6D;</span><span class="token entity" title="a">&amp;#x61;</span>i<span class="token entity" title="l">&amp;#x6C;</span><span class="token entity" title="t">&amp;#x74;</span><span class="token entity" title="o">&amp;#x6F;</span>:<span class="token entity" title="a">&amp;#x61;</span><span class="token entity" title="d">&amp;#x64;</span><span class="token entity" title="d">&amp;#x64;</span><span class="token entity" title="r">&amp;#x72;</span><span class="token entity" title="e">&amp;#x65;</span><span class="token entity" title="s">&amp;#115;</span><span class="token entity" title="s">&amp;#115;</span><span class="token entity" title="@">&amp;#64;</span><span class="token entity" title="e">&amp;#101;</span><span class="token entity" title="x">&amp;#120;</span><span class="token entity" title="a">&amp;#x61;</span><span class="token entity" title="m">&amp;#109;</span><span class="token entity" title="p">&amp;#x70;</span><span class="token entity" title="l">&amp;#x6C;</span>e<span class="token entity" title=".">&amp;#x2E;</span><span class="token entity" title="c">&amp;#99;</span><span class="token entity" title="o">&amp;#111;</span><span class="token entity" title="m">&amp;#109;</span><span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span><span class="token entity" title="a">&amp;#x61;</span><span class="token entity" title="d">&amp;#x64;</span><span class="token entity" title="d">&amp;#x64;</span><span class="token entity" title="r">&amp;#x72;</span><span class="token entity" title="e">&amp;#x65;</span><span class="token entity" title="s">&amp;#115;</span><span class="token entity" title="s">&amp;#115;</span><span class="token entity" title="@">&amp;#64;</span><span class="token entity" title="e">&amp;#101;</span><span class="token entity" title="x">&amp;#120;</span><span class="token entity" title="a">&amp;#x61;</span><span class="token entity" title="m">&amp;#109;</span><span class="token entity" title="p">&amp;#x70;</span><span class="token entity" title="l">&amp;#x6C;</span>e<span class="token entity" title=".">&amp;#x2E;</span><span class="token entity" title="c">&amp;#99;</span><span class="token entity" title="o">&amp;#111;</span><span class="token entity" title="m">&amp;#109;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span>
<span class="token punctuation">&gt;</span></span>
</code></pre></div><p>在浏览器里面，这段字串会变成一个可以点击的 「address@example.com」 链接。</p><p>(这种作法虽然可以混淆不少的机器人，但并无法全部挡下来，不过这样也比什么都不做好些。无论如何，公开您的信箱终究会引来广告信件的。)</p><h3 id="转义字符" tabindex="-1"><a class="header-anchor" href="#转义字符"><span>转义字符</span></a></h3><p>Markdown 可以利用反斜线来插入一些在语法中有其它意义的符号，例如: 如果您想要用星号加在文字旁边的方式来做出强调效果 (但不用 <code>&lt;em&gt;</code> 标签) ，您可以在星号的前面加上反斜线:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>\\*literal asterisks\\*
</code></pre></div><p>Markdown 支持在下面这些符号前面加上反斜线来帮助插入普通的符号:</p><ul><li><code>\\</code> 反斜线</li><li><code>\`</code> 反引号</li><li><code>*</code> 星号</li><li><code>_</code> 底线</li><li><code>{}</code> 大括号</li><li><code>[]</code> 方括号</li><li><code>()</code> 括号</li><li><code>#</code> 井字号</li><li><code>+</code> 加号</li><li><code>-</code> 减号</li><li><code>.</code> 英文句点</li><li><code>!</code> 惊叹号</li></ul><h2 id="大部分编辑器通用快捷键" tabindex="-1"><a class="header-anchor" href="#大部分编辑器通用快捷键"><span>大部分编辑器通用快捷键</span></a></h2><table><thead><tr><th>输出后的效果</th><th>Markdown</th><th>快捷键</th></tr></thead><tbody><tr><td><strong>Bold</strong></td><td><code>**text**</code></td><td>Ctrl/⌘ + B</td></tr><tr><td><em>Emphasize</em></td><td><code>*text*</code></td><td>Ctrl/⌘ + I</td></tr><tr><td><code>Inline Code</code></td><td>\`code\`</td><td>选中后 <code>\`</code></td></tr></tbody></table><h2 id="常见扩展" tabindex="-1"><a class="header-anchor" href="#常见扩展"><span>常见扩展</span></a></h2><p>有几种轻量级标记语言是 Markdown 的超集。它们包含 Gruber 的基本语法，并通过添加其他元素 (例如表，代码块，语法突出显示，URL 自动链接和脚注) 在此基础上构建。许多最受欢迎的 Markdown 应用程序使用以下轻量级标记语言之一:</p>`,21),k={href:"https://commonmark.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.github.com/gfm/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://michelf.ca/projects/php-markdown/extra/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://fletcherpenney.net/multimarkdown/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://rmarkdown.rstudio.com/",target:"_blank",rel:"noopener noreferrer"},x=e('<h3 id="表格" tabindex="-1"><a class="header-anchor" href="#表格"><span>表格</span></a></h3><p>表格是 GFM 标准支持的格式。</p><p>您需要创建表头，并使用 <code>---</code> 来分割表头和表身。</p><p>您需要使用 <code>|</code> 来分割每一个表格项目，如果您需要输入 <code>|</code> 请使用 <code>\\</code> 转义它。</p><p>您可以在表头分割行处使用 <code>:</code> 来自定义该列的对其</p><details class="hint-container details"><summary>例子</summary><p><strong>输入</strong>:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important">     居中      </span><span class="token punctuation">|</span><span class="token table-header important">                   右对齐 </span><span class="token punctuation">|</span><span class="token table-header important"> 左对齐         </span><span class="token punctuation">|</span>\n</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">:-----------:</span> <span class="token punctuation">|</span> <span class="token punctuation">-----------------------:</span> <span class="token punctuation">|</span> <span class="token punctuation">:-------------</span> <span class="token punctuation">|</span>\n</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> 居中使用<span class="token code-snippet code keyword">`:-:`</span> </span><span class="token punctuation">|</span><span class="token table-data">           右对齐使用<span class="token code-snippet code keyword">`-:`</span> </span><span class="token punctuation">|</span><span class="token table-data"> 左对齐使用<span class="token code-snippet code keyword">`:-`</span> </span><span class="token punctuation">|</span>\n<span class="token punctuation">|</span><span class="token table-data">       b       </span><span class="token punctuation">|</span><span class="token table-data"> 表格中包含的 \\| 需要转义 </span><span class="token punctuation">|</span><span class="token table-data"> aaaa           </span><span class="token punctuation">|</span>\n<span class="token punctuation">|</span><span class="token table-data">       c       </span><span class="token punctuation">|</span><span class="token table-data">                     aaaa </span><span class="token punctuation">|</span><span class="token table-data"> a              </span><span class="token punctuation">|</span>\n</span></span></code></pre></div><p><strong>输出</strong>:</p><table><thead><tr><th style="text-align:center;">居中</th><th style="text-align:right;">右对齐</th><th style="text-align:left;">左对齐</th></tr></thead><tbody><tr><td style="text-align:center;">居中使用<code>:-:</code></td><td style="text-align:right;">右对齐使用<code>-:</code></td><td style="text-align:left;">左对齐使用<code>:-</code></td></tr><tr><td style="text-align:center;">b</td><td style="text-align:right;">表格中包含的 | 需要转义</td><td style="text-align:left;">aaaa</td></tr><tr><td style="text-align:center;">c</td><td style="text-align:right;">aaaa</td><td style="text-align:left;">a</td></tr></tbody></table></details><h3 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji"><span>Emoji</span></a></h3><p>Emoji 是 GFM 标准支持的格式，需要通过 <code>:emoji名称:</code> 来使用 emoji。</p><p>例子: <code>:smile:</code> 😄</p>',9),b=e(`<h3 id="删除线" tabindex="-1"><a class="header-anchor" href="#删除线"><span>删除线</span></a></h3><p>您可以使用 <code>~~delete~~</code> 来创建类似 <s>delete</s> 的删除线</p><h3 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注"><span>脚注</span></a></h3><p>在 Markdown 中使用 <code>[^锚点文字]</code> 来定义脚注。</p><p>在之后的任何位置使用 <code>[^锚点文字]: ...</code> 来描述脚注内容。</p><p>如果脚注包含多个段落，其后的段落应当保持双层缩进。</p><details class="hint-container details"><summary>例子</summary><p><strong>输入</strong>:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>脚注 1 链接[^first].

脚注 2 链接[^second].

行内的脚注^[Text of inline footnote] 定义.

重复的页脚引用[^second].

<span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">^first</span><span class="token punctuation">]</span><span class="token punctuation">:</span> 脚注</span> <span class="token bold"><span class="token punctuation">**</span><span class="token content">可以包含特殊标记</span><span class="token punctuation">**</span></span>

<span class="token code keyword">    也可以由多个段落组成</span>

<span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">^second</span><span class="token punctuation">]</span><span class="token punctuation">:</span> 脚注文字。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong>:</p><p>脚注 1 链接<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p><p>脚注 2 链接<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>.</p><p>行内的脚注<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup> 定义.</p><p>重复的页脚引用<sup class="footnote-ref"><a href="#footnote2">[2:1]</a><a class="footnote-anchor" id="footnote-ref2:1"></a></sup>.</p></details><h3 id="自定义标题" tabindex="-1"><a class="header-anchor" href="#自定义标题"><span>自定义标题</span></a></h3><p>许多 Markdown 处理器支持标题的自定义 ID。</p><p>添加自定义 ID 允许您直接链接到标题并使用 CSS 对其进行修改。要添加自定义标题 ID，请在与标题相同的行上用大括号括起该自定义 ID。</p><details class="hint-container details"><summary>例子</summary><p><strong>输入</strong>:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">###</span> My Great Heading {#custom-id}</span>
</code></pre></div><p><strong>渲染结果</strong>:</p><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom-id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>My Great Heading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><h3 id="定义列表" tabindex="-1"><a class="header-anchor" href="#定义列表"><span>定义列表</span></a></h3><p>一些 Markdown 处理器允许您创建术语及其对应定义的定义列表。要创建定义列表，请在第一行上键入术语。在下一行，键入一个冒号，后跟一个空格和定义。</p><details class="hint-container details"><summary>例子</summary><p><strong>输入</strong>:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.
</code></pre></div><p><strong>渲染结果</strong>:</p><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>First Term<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>This is the definition of the first term.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>Second Term<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>This is one definition of the second term.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>This is another definition of the second term.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><strong>输出</strong>:</p><!-- markdownlint-disable MD033 --><dl><dt>First Term</dt><dd>This is the definition of the first term.</dd><dt>Second Term</dt><dd>This is one definition of the second term.</dd><dd>This is another definition of the second term.</dd></dl></details><h3 id="任务列表" tabindex="-1"><a class="header-anchor" href="#任务列表"><span>任务列表</span></a></h3><p>任务列表使您可以创建带有复选框的项目列表。</p><p>要创建任务列表，请创建一个列表，并以方括号 <code>[ ]</code> 开头。通过添加空格 <code>x</code> 来改变复选框的勾选情况。</p><details class="hint-container details"><summary>例子</summary><p><strong>输入</strong>:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> [x] Write the press release
<span class="token list punctuation">-</span> [ ] Update the website
<span class="token list punctuation">-</span> [ ] Contact the media
</code></pre></div><p><strong>输出</strong>:</p><ul><li><input type="checkbox" checked disabled>Write the press release</li><li><input type="checkbox" disabled>Update the website</li><li><input type="checkbox" disabled>Contact the media</li></ul></details><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>脚注 <strong>可以包含特殊标记</strong></p><p>也可以由多个段落组成 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p>脚注文字。 <a href="#footnote-ref2" class="footnote-backref">↩︎</a> <a href="#footnote-ref2:1" class="footnote-backref">↩︎</a></p></li><li id="footnote3" class="footnote-item"><p>Text of inline footnote <a href="#footnote-ref3" class="footnote-backref">↩︎</a></p></li></ol></section>`,20);function y(v,w){const s=o("ExternalLinkIcon"),p=o("RouterLink");return c(),i("div",null,[u,a("ul",null,[a("li",null,[a("a",k,[n("CommonMark"),t(s)])]),a("li",null,[a("a",m,[n("GitHub Flavored Markdown (GFM)"),t(s)])]),a("li",null,[a("a",h,[n("Markdown Extra"),t(s)])]),a("li",null,[a("a",g,[n("MultiMarkdown"),t(s)])]),a("li",null,[a("a",f,[n("R Markdown"),t(s)])])]),x,a("p",null,[n("您可以在 "),t(p,{to:"/code/language/markdown/emoji/"},{default:d(()=>[n("Emoji 列表")]),_:1}),n(" 找到所有可用的 Emoji。")]),b])}const T=l(r,[["render",y],["__file","extend.html.vue"]]);export{T as default};
