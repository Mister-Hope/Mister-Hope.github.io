import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,b as s}from"./app-S62fdHqc.js";const t={},i=s(`<h1 id="find" tabindex="-1"><a class="header-anchor" href="#find"><span>find</span></a></h1><p><code>find</code> 命令用于寻找文件，会包括当前目录的所有下级目录。</p><p>如果不带任何参数，<code>find</code> 文件会列出当前目录的所有文件，甚至还包括相对路径。如果把结果导入 <code>sort</code> 效果更好。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">find</span> <span class="token operator">|</span> <span class="token function">sort</span>
<span class="token builtin class-name">.</span>
./Makefile
./README
./build
./client.c
./client.h
./common.h
./project.c
./server.c
./server.h
./tests
./tests/suite1.pl
./tests/suite2.pl
./tests/suite3.pl
./tests/suite4.pl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要 <code>ls -l</code> 样式的列表，只要在 <code>find</code> 后面加上 <code>-ls</code>。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token parameter variable">-ls</span>
</code></pre></div><p><code>find</code> 有它自己的一套复杂的过滤语句。下面列举的是一些最常用的您可以用以获取某些文件列表的过滤器:</p><ul><li><code>find -name &#39;*.c&#39;</code> —— 查找符合某 shell 式样式的文件名的文件。用 iname 开启大小写不敏感搜索。</li><li><code>find -path &#39;_test_&#39;</code> —— 查找符合某 shell 式样式的路径的文件。用 ipath 开启大小写不敏感搜索。</li><li><code>find -mtime -5</code> —— 查找近五天内编辑过的文件。您也可以用 +5 来查找五天之前编辑过的文件。</li><li><code>find -newer server.c</code> —— 查找比 server.c 更新的文件。</li><li><code>find -type d</code> —— 查找所有文件夹。如果想找出所有文件，那就用 <code>-type f</code>；找符号连接就用 <code>-type l</code>。</li></ul><p>要注意，上面提到的这些过滤器都是可以组合使用的，例如找出近两天内编辑过的 C 源码:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;*.c&#39;</span> <span class="token parameter variable">-mtime</span> <span class="token parameter variable">-2</span>
</code></pre></div><p>默认情况下， find 对搜索结果所采取的动作只是简单地通过标准输出输出一个列表，然而其实还有其他一些有用的后续动作。</p><ul><li>-ls —— 如前文，提供了一种类 ls -l 式的列表。</li><li>-delete —— 删除符合查找条件的文件。</li><li>-exec —— 对搜索结果里的每个文件都运行某个命令， <code>{}</code> 会被替换成适当的文件名，并且命令用 <code>\\;</code> 终结。</li></ul><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;*.pl&#39;</span> <span class="token parameter variable">-exec</span> perl <span class="token parameter variable">-c</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre></div><p>您也可以使用 <code>+</code> 作为终止符来对所有结果运行一次命令。我还发现一个我经常使用的小技巧，就是用 <code>find</code> 生成一个文件列表，然后在 Vim 的垂直分窗中编辑:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;*.c&#39;</span> <span class="token parameter variable">-exec</span> <span class="token function">vim</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> +
</code></pre></div>`,15),l=[i];function c(o,d){return a(),n("div",null,l)}const m=e(t,[["render",c],["__file","find.html.vue"]]),u=JSON.parse('{"path":"/linux/bash/archives/commands/find.html","title":"find","lang":"zh-CN","frontmatter":{"description":"find find 命令用于寻找文件，会包括当前目录的所有下级目录。 如果不带任何参数，find 文件会列出当前目录的所有文件，甚至还包括相对路径。如果把结果导入 sort 效果更好。 如果想要 ls -l 样式的列表，只要在 find 后面加上 -ls。 find 有它自己的一套复杂的过滤语句。下面列举的是一些最常用的您可以用以获取某些文件列表的过滤...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/bash/archives/commands/find.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"find"}],["meta",{"property":"og:description","content":"find find 命令用于寻找文件，会包括当前目录的所有下级目录。 如果不带任何参数，find 文件会列出当前目录的所有文件，甚至还包括相对路径。如果把结果导入 sort 效果更好。 如果想要 ls -l 样式的列表，只要在 find 后面加上 -ls。 find 有它自己的一套复杂的过滤语句。下面列举的是一些最常用的您可以用以获取某些文件列表的过滤..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2021-01-27T06:58:54.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2021-01-27T06:58:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"find\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-01-27T06:58:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]],"date":"2020-06-03T17:08:34.000Z"},"headers":[],"git":{"createdTime":1591204114000,"updatedTime":1611730734000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3}]},"readingTime":{"minutes":1.76,"words":527},"filePathRelative":"linux/bash/archives/commands/find.md","localizedDate":"2020年6月3日","excerpt":"","autoDesc":true}');export{m as comp,u as data};
