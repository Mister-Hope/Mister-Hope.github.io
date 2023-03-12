import{_ as a,X as n,Y as s,a3 as t}from"./framework-a91f7991.js";const e={},p=t(`<h2 id="段落和换行" tabindex="-1"><a class="header-anchor" href="#段落和换行" aria-hidden="true">#</a> 段落和换行</h2><p>一个段落由一个及以上相连接的行句组成。</p><p>一个即以上的空行则会切分出不同的段落，一般的段落不需要用空白或断行缩进。</p><div class="hint-container tip"><p class="hint-container-title">空行</p><p>空行的定义是显示上看起来像是空行，便会被视为空行。</p><p>也就是若某一行只包含空白和 tab，则该行也会被视为空行。</p></div><p>「一个及以上相连接的行句组成」这句话其实暗示了 Markdown 允许段落内的强迫断行，其它的格式会把每个断行都转成 <code>&lt;br /&gt;</code> 标签。</p><p>如果您<strong>真的想要</strong>插入 <code>&lt;br /&gt;</code> 标签的话，在行尾加上两个以上的空白，然后按下回车:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>这是一句话，它可以在这里  
强制换行
</code></pre></div><h2 id="标题" tabindex="-1"><a class="header-anchor" href="#标题" aria-hidden="true">#</a> 标题</h2><p>标题能显示出文章的结构。</p><p>Atx (<strong>推荐</strong>)形式是在行首插入 1 到 6 个 <code>#</code> ，对应到标题 1 到 6 阶，例如:</p><ul><li>H1: <code># Header 1</code></li><li>H2: <code>## Header 2</code></li><li>H3: <code>### Header 3</code></li><li>H4: <code>#### Header 4</code></li><li>H5: <code>##### Header 5</code></li><li>H6: <code>###### Header 6</code></li></ul><div class="hint-container tip"><p class="hint-container-title">最佳实践</p><p>为了使内容可读性更强，Markdown 最佳实践要求标题应使用 Atx 写法，并且每个标题应被空行隔开。 (第一行的大标题不需要向上空行)</p></div><p>Setext<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> 格式不推荐使用。</p><h2 id="blockquotes" tabindex="-1"><a class="header-anchor" href="#blockquotes" aria-hidden="true">#</a> Blockquotes</h2><p>Markdown 使用 email 形式的块引言。</p><p>如果您很熟悉如何在 email 信件中引言，您就知道如何在 Markdown 文件中建立一个块引言:在每行的最前面加上 <code>&gt;</code> 接一个空格:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
<span class="token blockquote punctuation">&gt;</span> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
<span class="token blockquote punctuation">&gt;</span> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
<span class="token blockquote punctuation">&gt;</span> id sem consectetuer libero luctus adipiscing.
</code></pre></div><details class="hint-container details"><summary>渲染结果</summary><blockquote><p>This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.</p><p>Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.</p></blockquote></details><div class="hint-container info"><p class="hint-container-title">易写性</p><p>处于易写性的考虑，Markdown 允许您只在整个段落的第一行最前面加上 <code>&gt;</code> :</p><details class="hint-container details"><summary>例子</summary><p><strong>输入</strong>:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
  consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
  Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

<span class="token blockquote punctuation">&gt;</span> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
  id sem consectetuer libero luctus adipiscing.
</code></pre></div><p><strong>输出</strong>:</p><!-- markdownlint-disable MD028 --><blockquote><p>This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.</p></blockquote><blockquote><p>Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.</p></blockquote><!-- markdownlint-enable MD028 --></details><p>但是请注意，我们<strong>不推荐</strong>使用这种做法，这并不是符合 Markdown 最佳实践。</p><p>同时，<code>&gt;</code> 后面的空格也是可选的，我们也推荐您加上它。</p></div><details class="hint-container details"><summary>块引言可以有阶层 (例如: 引言内的引言) ，只要根据层数加上不同数量的 &gt;</summary><p><strong>输入</strong>:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> This is the first level of quoting.
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt; &gt;</span> This is nested blockquote.
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span> Back to the first level.
</code></pre></div><p><strong>输出</strong>:</p><blockquote><p>This is the first level of quoting.</p><blockquote><p>This is nested blockquote.</p></blockquote><p>Back to the first level.</p></blockquote></details><details class="hint-container details"><summary>引言的块内也可以使用其他的 Markdown 语法，包括标题、列表、代码块等</summary><p><strong>输入</strong>:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> <span class="token list punctuation">1.</span> This is the first list item.
<span class="token blockquote punctuation">&gt;</span> <span class="token list punctuation">1.</span> This is the second list item.
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span> Here’s some example code:
<span class="token blockquote punctuation">&gt;</span> 
<span class="token blockquote punctuation">&gt;</span> \`\`\`js
<span class="token blockquote punctuation">&gt;</span> const a = 1;
<span class="token blockquote punctuation">&gt;</span> \`\`\`
</code></pre></div><p><strong>输出</strong>:</p><blockquote><ol><li>This is the first list item.</li><li>This is the second list item.</li></ol><p>Here’s some example code:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div></blockquote></details><h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h2><p>Markdown 支持有序列表和无序列表。</p><h3 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表" aria-hidden="true">#</a> 无序列表</h3><p>无序列表在规范中使用减号作为列表标记:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> Red
<span class="token list punctuation">-</span> Green
<span class="token list punctuation">-</span> Blue
</code></pre></div><details class="hint-container details"><summary>渲染结果</summary><ul><li>Red</li><li>Green</li><li>Blue</li></ul></details><div class="hint-container info"><p class="hint-container-title">其他支持的符号</p><p>Markdown 最初的规范也支持使用星号、加号:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">+</span> Red
<span class="token list punctuation">+</span> Green
<span class="token list punctuation">+</span> Blue

<span class="token list punctuation">*</span> Red
<span class="token list punctuation">*</span> Green
<span class="token list punctuation">*</span> Blue
</code></pre></div><p>我们<strong>极其不建议</strong>使用以上写法，它们并不符合 Markdown 最佳实践。(加号看上去并不像一个列表，而且星号并不是可以直接按键输入的符号)</p></div><h3 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表" aria-hidden="true">#</a> 有序列表</h3><p>有序列表使用数字接著一个英文句点:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">1.</span> Bird
<span class="token list punctuation">2.</span> McHale
<span class="token list punctuation">3.</span> Parish
</code></pre></div><details class="hint-container details"><summary>渲染结果</summary><ol><li>Bird</li><li>McHale</li><li>Parish</li></ol></details><p>很重要的一点是，您在列表标记上使用的数字并不会影响输出的 HTML 结果，因为上面的列表所产生的 HTML 标记为:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Bird<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>McHale<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Parish<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><details class="hint-container details"><summary>这意味着您无需刻意对列表进行标号</summary><p>如果您使用:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">1.</span> Bird
<span class="token list punctuation">1.</span> McHale
<span class="token list punctuation">1.</span> Parish
</code></pre></div><p>列表项也会正确的渲染:</p><ol><li>Bird</li><li>McHale</li><li>Parish</li></ol></details><div class="hint-container info"><p class="hint-container-title">将标号交给 Markdown</p><p>人工为列表进行正确的标号与全部使用 <code>1.</code> 都符合 Markdown 最佳实践。</p><p>但是请不要错误的进行标号，如:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">2.</span> Bird
<span class="token list punctuation">3.</span> McHale
<span class="token list punctuation">5.</span> Parish
</code></pre></div><p>为了更加便捷的添加、删除或排序有序列表项，我们<strong>推荐都设置为标号 <code>1</code></strong>。</p></div><h3 id="列表格式的转义" tabindex="-1"><a class="header-anchor" href="#列表格式的转义" aria-hidden="true">#</a> 列表格式的转义</h3><p>有些时候项目列表很可能会不小心被产生，比如:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>XXX finally died in
<span class="token list punctuation">1986.</span> What a great man.
</code></pre></div><p>换句话说，也就是在行首出现<em>数字-句点-空白</em>，要避免这样的状况，您可以在句点前面加上反斜线。</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>XXX finally died in
1986\\. What a great man.
</code></pre></div><h3 id="缩进与段落" tabindex="-1"><a class="header-anchor" href="#缩进与段落" aria-hidden="true">#</a> 缩进与段落</h3><p>列表项目标记通常是放在最左边，但是其实也可以缩进，最多三个空白，项目标记后面则一定要接著至少一个空白或 tab。</p><p>要让列表看起来更漂亮，您可以把内容用固定的缩进整理好:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
  viverra nec, fringilla in, laoreet vitae, risus.
<span class="token list punctuation">-</span> Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
  Suspendisse id sem consectetuer libero luctus adipiscing.
</code></pre></div><details class="hint-container details"><summary>渲染结果</summary><ul><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.</li><li>Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.</li></ul></details><div class="hint-container info"><p class="hint-container-title">易写性</p><p>处于易写性的考虑，列表缩进不是强制的，也就是以下的内容渲染结果与上面相同。</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
viverra nec, fringilla in, laoreet vitae, risus.
<span class="token list punctuation">-</span> Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
Suspendisse id sem consectetuer libero luctus adipiscing.
</code></pre></div><details class="hint-container details"><summary>渲染结果</summary><ul><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.</li><li>Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.</li></ul></details><p>但是我们<strong>不推荐</strong>这种写法，这种写法会导致 Markdown 源文件可读性变差，不符合 Markdown 最佳实践。</p></div><p>如果列表项目间用空行分开， Markdown 会把项目的内容在输出时用 <code>&lt;p&gt;</code> 标签包起来，举例来说:</p><details class="hint-container details"><summary>普通的无序列表</summary><p>输入:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> Bird
<span class="token list punctuation">-</span> Magic
<span class="token list punctuation">-</span> Wood
</code></pre></div><p>转换结果:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Bird<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Magic<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Wood<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>渲染:</p><ul><li>Bird</li><li>Magic</li><li>Wood</li></ul></details><p>但是这个:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> Bird

<span class="token list punctuation">-</span> Magic

<span class="token list punctuation">-</span> Wood
</code></pre></div><p>会被转换为:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Bird<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Magic<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Wood<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><details class="hint-container details"><summary>渲染结果</summary><ul><li><p>Bird</p></li><li><p>Magic</p></li><li><p>Wood</p></li></ul></details><p>这会在列表项之间创建更大的空间。</p><div class="hint-container tip"><p class="hint-container-title">最佳实践</p><p>对于一个列表项来说，只要有一项使用了空行，所有项目都会转换为段落，也就是以下格式也会渲染为段落列表。</p><details class="hint-container details"><summary>例子</summary><p><strong>输入</strong>:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> Bird
<span class="token list punctuation">-</span> Magic

<span class="token list punctuation">-</span> Wood
</code></pre></div><p><strong>输出</strong>:</p><ul><li><p>Bird</p></li><li><p>Magic</p></li><li><p>Wood</p></li></ul></details><p>Markdown 最佳实践要求您在每一个列表间始终(或始终不)添加空行。</p></div><p>列表项目可以包含多个段落，每个项目下的段落都必须缩进 2 - 4 个空白或是一个 tab。</p><details class="hint-container details"><summary>例子</summary><p><strong>输入</strong>:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> This is a list item with two paragraphs.

  This is the second paragraph in the list item. You’re
  only required to indent the first line. Lorem ipsum dolor
  sit amet, consectetuer adipiscing elit.

<span class="token list punctuation">-</span> Another item in the same list.

<span class="token list punctuation">1.</span> This is a list item with two paragraphs. Lorem ipsum dolor
   sit amet, consectetuer adipiscing elit. Aliquam hendrerit
   mi posuere lectus.

   Vestibulum enim wisi, viverra nec, fringilla in, laoreet
   vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
   sit amet velit.

<span class="token list punctuation">2.</span> Suspendisse id sem consectetuer libero luctus adipiscing.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong>:</p><ul><li><p>This is a list item with two paragraphs.</p><p>This is the second paragraph in the list item. You’re only required to indent the first line. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p></li><li><p>Another item in the same list.</p></li></ul><ol><li><p>This is a list item with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.</p><p>Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus. Donec sit amet nisl. Aliquam semper ipsum sit amet velit.</p></li><li><p>Suspendisse id sem consectetuer libero luctus adipiscing.</p></li></ol></details><p>如果要在列表项目内放入其他内容，也需要缩进。</p><p>比如放进引言，那 <code>&gt;</code> 就需要缩进:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> A list item with a blockquote:

  &gt; This is a blockquote
  &gt; inside a list item.
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">Markdown 最佳实践</p><p>为了更高的可读性，段落缩进应当等同于列表第一行，也就是无序列表缩进 2 个空格，有序列表根据缩进三或四个空格。</p></div><h2 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h2><p>和代码相关的写作或是标签语言原始码通常会有已经排版好的代码块，通常这些块我们并不希望它以一般段落文件的方式去排版，而是照原来的样子显示，Markdown 会用 <code>&lt;pre&gt;</code> 和 <code>&lt;code&gt;</code> 标签来把代码块包起来。</p><p>Markdown 最初标准只规定了一种缩进格式的代码块<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>。</p><p>由于缩进式的代码块格式不够鲜明，且无法在此模式下设置代码块的语言并对代码块进行高亮，围栏式的代码扩展几乎被所有 Markdown 实现所支持。</p><p>Markdown 最佳实践也同样推荐使用围栏式的代码块，尽管它并不在最初的标准中。</p><p>您可以很简单的使用 <code>\`\`\`代码名称</code> 与 <code>\`\`\`</code> 创建围栏式代码块。比如:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre></div><p>会渲染为</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><p>在代码块里面， <code>&amp;</code> 、 <code>&lt;</code> 和 <code>&gt;</code> 会自动转成 HTML 实体，这样的方式让您非常容易使用 Markdown 插入范例用的 HTML 原始码，只需要复制粘贴，再加上缩进就可以了，剩下的 Markdown 都会帮您处理。</p><details class="hint-container details"><summary>Markdown 处理例子</summary><p><strong>输入</strong>:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">html</span>
<span class="token code-block language-html language-html language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token entity named-entity" title="©">&amp;copy;</span> 2004 Foo Corporation
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre></div><p><strong>转换结果</strong>:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token entity named-entity" title="&lt;">&amp;lt;</span>div class=&quot;footer&quot;<span class="token entity named-entity" title="&gt;">&amp;gt;</span>
  <span class="token entity named-entity" title="&amp;">&amp;amp;</span>copy; 2004 Foo Corporation
<span class="token entity named-entity" title="&lt;">&amp;lt;</span>/div<span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><strong>输出</strong>:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token entity named-entity" title="©">&amp;copy;</span> 2004 Foo Corporation
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></details><p>代码块中，一般的 Markdown 语法不会被转换，像是星号便只是星号，这表示您可以很容易地以 Markdown 语法撰写 Markdown 语法相关的文件。</p><h3 id="转义与嵌套" tabindex="-1"><a class="header-anchor" href="#转义与嵌套" aria-hidden="true">#</a> 转义与嵌套</h3><p>如果您希望在一个代码块中放置另一个 Markdown 代码块格式，您可以增加 <code>\`</code> 的数量来进行嵌套</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">\`md</span>
<span class="token code-block language-md language-md language-md">\`\`\`js
const a = 1;</span>
<span class="token punctuation">\`\`\`</span></span>
\`\`\`\`
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div></div></div><p>会渲染为</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre></div><p>如果您希望输入 <code>\`\`\`</code>，您可以使用 <code>\\</code> 转义:</p><p><code>\\\`\\\`\\\`</code> 会被渲染为: \`\`\`</p><h3 id="分隔线" tabindex="-1"><a class="header-anchor" href="#分隔线" aria-hidden="true">#</a> 分隔线</h3><p>您可以在一行中用三个或以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。您也可以在星号中间插入空白。下面每种写法都可以建立分隔线:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>---(建议)

<span class="token hr punctuation">* * *</span>

<span class="token hr punctuation">***</span>

<span class="token hr punctuation">*****</span>

<span class="token hr punctuation">- - -</span>

<span class="token hr punctuation">---------------------------------------</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>Setext 格式</p><p>Setext 形式是用底线的形式，利用 <code>=</code> (最高阶标题) 和 <code>-</code> (第二阶标题) ，例如:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token title important">This is an H1
<span class="token punctuation">=============</span></span>

<span class="token title important">This is an H2
<span class="token punctuation">-------------</span></span>
</code></pre></div><p>任何数量的 <code>=</code> 和 <code>-</code> 都可以有效果。</p><p>请注意我们<strong>极其不推荐</strong>使用该格式! 因为它不仅麻烦，还仅支持两级目录。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p>缩进格式的代码块</p><p>在 Markdown 中，可以通过简单地缩进 4 个空白或是 1 个 tab 来建立代码块。比如:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>This is a normal paragraph:

<span class="token code keyword">    This is a code block.</span>
</code></pre></div><p>Markdown 会转换成:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>This is a normal paragraph:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>This is a code block.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>这里的缩进 (4 个空白或是 1 个 tab) ，都会被移除，例如:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>Here is an example of AppleScript:

<span class="token code keyword">    tell application &quot;Foo&quot;
    beep
    end tell</span>
</code></pre></div><p>会被转换为:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Here is an example of AppleScript:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>tell application &quot;Foo&quot;
beep
end tell
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>一个代码块会一直持续到没有缩进的那一行 (或是文件结尾)。 <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li></ol></section>`,86),i=[p];function o(l,c){return n(),s("div",null,i)}const d=a(e,[["render",o],["__file","block.html.vue"]]);export{d as default};
