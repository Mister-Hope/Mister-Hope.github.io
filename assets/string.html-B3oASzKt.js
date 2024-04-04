import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as n,f as e,d as o,b as t}from"./app-BTaUmG5a.js";const p={},l=o("p",null,"本章介绍 Bash 字符串操作的语法。",-1),c=t(`<h2 id="字符串的长度" tabindex="-1"><a class="header-anchor" href="#字符串的长度"><span>字符串的长度</span></a></h2><p>获取字符串长度的语法如下。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token variable">\${<span class="token operator">#</span>varname}</span>
</code></pre></div><p>下面是一个例子。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">myPath</span><span class="token operator">=</span>/home/cam/book/long.file.name
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>myPath}</span>
<span class="token number">29</span>
</code></pre></div><p>大括号 <code>{}</code> 是必需的，否则 Bash 会将 <code>$#</code> 理解成脚本的参数个数，将变量名理解成文本。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable">$#</span>myvar
0myvar
</code></pre></div><p>上面例子中，Bash 将 <code>$#</code> 和 <code>myvar</code> 分开解释了。</p><h2 id="子字符串" tabindex="-1"><a class="header-anchor" href="#子字符串"><span>子字符串</span></a></h2><p>字符串提取子串的语法如下。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token variable">\${varname<span class="token operator">:</span>offset<span class="token operator">:</span>length}</span>
</code></pre></div><p>上面语法的含义是返回变量 <code>$varname</code> 的子字符串，从位置 <code>offset</code> 开始(从 <code>0</code> 开始计算)，长度为 <code>length</code>。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">count</span><span class="token operator">=</span>frogfootman
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${count<span class="token operator">:</span>4<span class="token operator">:</span>4}</span>
foot
</code></pre></div><p>上面例子返回字符串 <code>frogfootman</code> 从 4 号位置开始的长度为 4 的子字符串 <code>foot</code>。</p><p>这种语法不能直接操作字符串，只能通过变量来读取字符串，并且不会改变原始字符串。变量前面的美元符号可以省略。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 报错</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${&quot;hello&quot;<span class="token operator">:</span>2<span class="token operator">:</span>3}</span>
</code></pre></div><p>上面例子中，<code>&quot;hello&quot;</code> 不是变量名，导致 Bash 报错。</p><p>如果省略 <code>length</code>，则从位置 <code>offset</code> 开始，一直返回到字符串的结尾。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">count</span><span class="token operator">=</span>frogfootman
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${count<span class="token operator">:</span>4}</span>
footman
</code></pre></div><p>上面例子是返回变量 <code>count</code> 从 4 号位置一直到结尾的子字符串。</p><p>如果 <code>offset</code> 为负值，表示从字符串的末尾开始算起。注意，负数前面必须有一个空格， 以防止与 <code>\${variable:-word}</code> 的变量的设置默认值语法混淆。这时，如果还指定 <code>length</code>，则 <code>length</code> 不能小于零。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token string">&quot;This string is long.&quot;</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${foo<span class="token operator">:</span> -5}</span>
long.
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${foo<span class="token operator">:</span> -5<span class="token operator">:</span>2}</span>
lo
</code></pre></div><p>上面例子中，<code>offset</code> 为 <code>-5</code>，表示从倒数第 5 个字符开始截取，所以返回 <code>long.</code>。如果指定长度为 <code>2</code>，则返回 <code>lo</code>。</p><h2 id="搜索和替换" tabindex="-1"><a class="header-anchor" href="#搜索和替换"><span>搜索和替换</span></a></h2><p>Bash 提供字符串搜索和替换的多种方法。</p><h3 id="字符串头部的模式匹配" tabindex="-1"><a class="header-anchor" href="#字符串头部的模式匹配"><span>字符串头部的模式匹配</span></a></h3><p>以下两种语法可以检查字符串开头，是否匹配给定的模式。如果匹配成功，就删除匹配的部分，返回剩下的部分。原始变量不会发生变化。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 如果 pattern 匹配变量 variable 的开头，</span>
<span class="token comment"># 删除最短匹配(非贪婪匹配)的部分，返回剩余部分</span>
<span class="token variable">\${variable<span class="token operator">#</span>pattern}</span>

<span class="token comment"># 如果 pattern 匹配变量 variable 的开头，</span>
<span class="token comment"># 删除最长匹配(贪婪匹配)的部分，返回剩余部分</span>
<span class="token variable">\${variable<span class="token operator">##</span>pattern}</span>
</code></pre></div><p>上面两种语法会删除变量字符串开头的匹配部分(将其替换为空)，返回剩下的部分。区别是一个是最短匹配(又称非贪婪匹配)，另一个是最长匹配(又称贪婪匹配)。</p><p>匹配模式 <code>pattern</code> 可以使用 <code>*</code>、<code>?</code>、<code>[]</code> 等通配符。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">myPath</span><span class="token operator">=</span>/home/cam/book/long.file.name

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${myPath<span class="token operator">#</span><span class="token operator">/</span>*<span class="token operator">/</span>}</span>
cam/book/long.file.name

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${myPath<span class="token operator">##</span><span class="token operator">/</span>*<span class="token operator">/</span>}</span>
long.file.name
</code></pre></div><p>上面例子中，匹配的模式是 <code>/*/</code>，其中 <code>*</code> 可以匹配任意数量的字符，所以最短匹配是 <code>/home/</code>，最长匹配是 <code>/home/cam/book/</code>。</p><p>下面写法可以删除文件路径的目录部分，只留下文件名。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">path</span><span class="token operator">=</span>/home/cam/book/long.file.name

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${path<span class="token operator">##</span>*<span class="token operator">/</span>}</span>
long.file.name
</code></pre></div><p>上面例子中，模式 <code>*/</code> 匹配目录部分，所以只返回文件名。</p><p>下面再看一个例子。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">phone</span><span class="token operator">=</span><span class="token string">&quot;555-456-1414&quot;</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${phone<span class="token operator">#</span>*-}</span>
<span class="token number">456</span>-1414
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${phone<span class="token operator">##</span>*-}</span>
<span class="token number">1414</span>
</code></pre></div><p>如果匹配不成功，则返回原始字符串。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">phone</span><span class="token operator">=</span><span class="token string">&quot;555-456-1414&quot;</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${phone<span class="token operator">#</span>444}</span>
<span class="token number">555</span>-456-1414
</code></pre></div><p>上面例子中，原始字符串里面无法匹配模式 <code>444</code>，所以原样返回。</p><p>如果要将头部匹配的部分，替换成其他内容，采用下面的写法。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 模式必须出现在字符串的开头</span>
<span class="token variable">\${variable<span class="token operator">/</span><span class="token operator">#</span>pattern<span class="token operator">/</span>string}</span>

<span class="token comment"># 示例</span>
$ <span class="token assign-left variable">foo</span><span class="token operator">=</span>JPG.JPG
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${foo<span class="token operator">/</span><span class="token operator">#</span>JPG<span class="token operator">/</span>jpg}</span>
jpg.JPG
</code></pre></div><p>上面例子中，被替换的 <code>JPG</code> 必须出现在字符串头部，所以返回 <code>jpg.JPG</code>。</p><h3 id="字符串尾部的模式匹配" tabindex="-1"><a class="header-anchor" href="#字符串尾部的模式匹配"><span>字符串尾部的模式匹配</span></a></h3><p>以下两种语法可以检查字符串结尾，是否匹配给定的模式。如果匹配成功，就删除匹配的部分，返回剩下的部分。原始变量不会发生变化。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 如果 pattern 匹配变量 variable 的结尾，</span>
<span class="token comment"># 删除最短匹配(非贪婪匹配)的部分，返回剩余部分</span>
<span class="token variable">\${variable<span class="token operator">%</span>pattern}</span>

<span class="token comment"># 如果 pattern 匹配变量 variable 的结尾，</span>
<span class="token comment"># 删除最长匹配(贪婪匹配)的部分，返回剩余部分</span>
<span class="token variable">\${variable<span class="token operator">%%</span>pattern}</span>
</code></pre></div><p>上面两种语法会删除变量字符串结尾的匹配部分(将其替换为空)，返回剩下的部分。区别是一个是最短匹配(又称非贪婪匹配)，另一个是最长匹配(又称贪婪匹配)。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">path</span><span class="token operator">=</span>/home/cam/book/long.file.name

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${path<span class="token operator">%</span>.*}</span>
/home/cam/book/long.file

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${path<span class="token operator">%%</span>.*}</span>
/home/cam/book/long
</code></pre></div><p>上面例子中，匹配模式是 <code>.*</code>，其中 <code>*</code> 可以匹配任意数量的字符，所以最短匹配是 <code>.name</code>，最长匹配是 <code>.file.name</code>。</p><p>下面写法可以删除路径的文件名部分，只留下目录部分。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">path</span><span class="token operator">=</span>/home/cam/book/long.file.name

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${path<span class="token operator">%</span><span class="token operator">/</span>*}</span>
/home/cam/book
</code></pre></div><p>上面例子中，模式 <code>/*</code> 匹配文件名部分，所以只返回目录部分。</p><p>下面的写法可以替换文件的后缀名。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">file</span><span class="token operator">=</span>foo.png
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${file<span class="token operator">%</span>.png}</span>.jpg
foo.jpg
</code></pre></div><p>上面的例子将文件的后缀名，从 <code>.png</code> 改成了 <code>.jpg</code>。</p><p>下面再看一个例子。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">phone</span><span class="token operator">=</span><span class="token string">&quot;555-456-1414&quot;</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${phone<span class="token operator">%</span>-*}</span>
<span class="token number">555</span>-456
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${phone<span class="token operator">%%</span>-*}</span>
<span class="token number">555</span>
</code></pre></div><p>如果匹配不成功，则返回原始字符串。</p><p>如果要将尾部匹配的部分，替换成其他内容，采用下面的写法。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 模式必须出现在字符串的结尾</span>
<span class="token variable">\${variable<span class="token operator">/</span><span class="token operator">%</span>pattern<span class="token operator">/</span>string}</span>

<span class="token comment"># 示例</span>
$ <span class="token assign-left variable">foo</span><span class="token operator">=</span>JPG.JPG
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${foo<span class="token operator">/</span><span class="token operator">%</span>JPG<span class="token operator">/</span>jpg}</span>
JPG.jpg
</code></pre></div><p>上面例子中，被替换的 <code>JPG</code> 必须出现在字符串尾部，所以返回 <code>JPG.jpg</code>。</p><h3 id="任意位置的模式匹配" tabindex="-1"><a class="header-anchor" href="#任意位置的模式匹配"><span>任意位置的模式匹配</span></a></h3><p>以下两种语法可以检查字符串内部，是否匹配给定的模式。如果匹配成功，就删除匹配的部分，换成其他的字符串返回。原始变量不会发生变化。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 如果 pattern 匹配变量 variable 的一部分，</span>
<span class="token comment"># 最长匹配(贪婪匹配)的那部分被 string 替换，但仅替换第一个匹配</span>
<span class="token variable">\${variable<span class="token operator">/</span>pattern<span class="token operator">/</span>string}</span>

<span class="token comment"># 如果 pattern 匹配变量 variable 的一部分，</span>
<span class="token comment"># 最长匹配(贪婪匹配)的那部分被 string 替换，所有匹配都替换</span>
<span class="token variable">\${variable<span class="token operator">/</span><span class="token operator">/</span>pattern<span class="token operator">/</span>string}</span>
</code></pre></div><p>上面两种语法都是最长匹配(贪婪匹配)下的替换，区别是前一个语法仅仅替换第一个匹配，后一个语法替换所有匹配。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">path</span><span class="token operator">=</span>/home/cam/foo/foo.name

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${path<span class="token operator">/</span>foo<span class="token operator">/</span>bar}</span>
/home/cam/bar/foo.name

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${path<span class="token operator">/</span><span class="token operator">/</span>foo<span class="token operator">/</span>bar}</span>
/home/cam/bar/bar.name
</code></pre></div><p>上面例子中，前一个命令只替换了第一个 <code>foo</code>，后一个命令将两个 <code>foo</code> 都替换了。</p><p>下面的例子将分隔符从 <code>:</code> 换成换行符。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token variable">\${<span class="token environment constant">PATH</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">:</span><span class="token operator">/</span>&#39;\\n&#39;}</span>
/usr/local/bin
/usr/bin
/bin
<span class="token punctuation">..</span>.
</code></pre></div><p>上面例子中，<code>echo</code> 命令的 <code>-e</code> 参数，表示将替换后的字符串的 <code>\\n</code> 字符，解释为换行符。</p><p>模式部分可以使用通配符。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">phone</span><span class="token operator">=</span><span class="token string">&quot;555-456-1414&quot;</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${phone<span class="token operator">/</span>5?4<span class="token operator">/</span>-}</span>
<span class="token number">55</span>-56-1414
</code></pre></div><p>上面的例子将 <code>5-4</code> 替换成 <code>-</code>。</p><p>如果省略了 <code>string</code> 部分，那么就相当于匹配的部分替换成空字符串，即删除匹配的部分。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">path</span><span class="token operator">=</span>/home/cam/foo/foo.name

$ <span class="token builtin class-name">echo</span> <span class="token variable">\${path<span class="token operator">/</span>.*<span class="token operator">/</span>}</span>
/home/cam/foo/foo
</code></pre></div><p>上面例子中，第二个斜杠后面的 <code>string</code> 部分省略了，所以模式 <code>.*</code> 匹配的部分 <code>.name</code> 被删除后返回。</p><p>前面提到过，这个语法还有两种扩展形式。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 模式必须出现在字符串的开头</span>
<span class="token variable">\${variable<span class="token operator">/</span><span class="token operator">#</span>pattern<span class="token operator">/</span>string}</span>

<span class="token comment"># 模式必须出现在字符串的结尾</span>
<span class="token variable">\${variable<span class="token operator">/</span><span class="token operator">%</span>pattern<span class="token operator">/</span>string}</span>
</code></pre></div><h2 id="改变大小写" tabindex="-1"><a class="header-anchor" href="#改变大小写"><span>改变大小写</span></a></h2><p>下面的语法可以改变变量的大小写。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 转为大写</span>
<span class="token variable">\${varname<span class="token operator">^^</span>}</span>

<span class="token comment"># 转为小写</span>
<span class="token variable">\${varname<span class="token operator">,,</span>}</span>
</code></pre></div><p>下面是一个例子。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">foo</span><span class="token operator">=</span>heLLo
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${foo<span class="token operator">^^</span>}</span>
HELLO
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${foo<span class="token operator">,,</span>}</span>
hello
</code></pre></div>`,83);function r(i,d){return s(),n("div",null,[l,e(" more "),c])}const g=a(p,[["render",r],["__file","string.html.vue"]]),m=JSON.parse('{"path":"/linux/bash/string.html","title":"字符串操作","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"字符串操作","icon":"string","author":"阮一峰","category":"Linux","tag":["Bash"],"copyright":"本教程采用<a href=\\"https://creativecommons.org/licenses/by-sa/3.0/deed.zh\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">知识共享 署名-相同方式共享 3.0协议</a>","description":"本章介绍 Bash 字符串操作的语法。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/bash/string.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"字符串操作"}],["meta",{"property":"og:description","content":"本章介绍 Bash 字符串操作的语法。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:tag","content":"Bash"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"字符串操作\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"阮一峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"字符串的长度","slug":"字符串的长度","link":"#字符串的长度","children":[]},{"level":2,"title":"子字符串","slug":"子字符串","link":"#子字符串","children":[]},{"level":2,"title":"搜索和替换","slug":"搜索和替换","link":"#搜索和替换","children":[{"level":3,"title":"字符串头部的模式匹配","slug":"字符串头部的模式匹配","link":"#字符串头部的模式匹配","children":[]},{"level":3,"title":"字符串尾部的模式匹配","slug":"字符串尾部的模式匹配","link":"#字符串尾部的模式匹配","children":[]},{"level":3,"title":"任意位置的模式匹配","slug":"任意位置的模式匹配","link":"#任意位置的模式匹配","children":[]}]},{"level":2,"title":"改变大小写","slug":"改变大小写","link":"#改变大小写","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":6},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":6.35,"words":1906},"filePathRelative":"linux/bash/string.md","localizedDate":"2020年5月4日","excerpt":"<p>本章介绍 Bash 字符串操作的语法。</p>\\n","autoDesc":true}');export{g as comp,m as data};
