import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,f as s}from"./app-nhrIJ9Yj.js";const t={},i=s(`<h1 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作"><span>文件操作</span></a></h1><h2 id="cp" tabindex="-1"><a class="header-anchor" href="#cp"><span>cp</span></a></h2><p><code>cp</code> 命令用于将文件(或目录)拷贝到目的地。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 拷贝单个文件</span>
$ <span class="token function">cp</span> <span class="token builtin class-name">source</span> dest

<span class="token comment"># 拷贝多个文件</span>
$ <span class="token function">cp</span> source1 source2 source3 dest

<span class="token comment"># -i 目的地有同名文件时会提示确认</span>
$ <span class="token function">cp</span> <span class="token parameter variable">-i</span> file1 file2

<span class="token comment"># -r 递归拷贝，将dir1拷贝到dir2，完成后dir2生成一个子目录dir1</span>
<span class="token comment"># dir2如果不存在，将被创建</span>
<span class="token comment"># 拷贝目录时，该参数是必需的</span>
$ <span class="token function">cp</span> <span class="token parameter variable">-r</span> dir1 dir2

<span class="token comment"># -u --update 只拷贝目的地没有的文件，或者比目的地同名文件更新的文件</span>
$ <span class="token function">cp</span> <span class="token parameter variable">-u</span> *.html destination
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他参数</p><ul><li><code>-a</code> 拷贝时保留所有属性，包括所有者与权限</li><li><code>-v</code> 显示拷贝的详细信息</li></ul><h2 id="mkdir" tabindex="-1"><a class="header-anchor" href="#mkdir"><span>mkdir</span></a></h2><p><code>mkdir</code> 命令用于新建目录。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 新建多个目录</span>
$ <span class="token function">mkdir</span> dir1 dir2 dir3
</code></pre></div><h2 id="mv" tabindex="-1"><a class="header-anchor" href="#mv"><span>mv</span></a></h2><p><code>mv</code> 命令用于将源文件移动到目的地。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 移动单个文件</span>
$ <span class="token function">mv</span> item1 item2

<span class="token comment"># 移动多个文件</span>
$ <span class="token function">mv</span> file1 file2 dir1

<span class="token comment"># 将dir1拷贝进入dir2，完成后dir2将多出一个子目录dir1</span>
<span class="token comment"># 如果dir2不存在，将会被创建</span>
$ <span class="token function">mv</span> dir1 dir2
</code></pre></div><p>参数</p><ul><li><code>-i</code> 覆盖已经存在的文件时，会提示确认</li><li><code>-u</code> 只移动目的地不存在的文件，或比目的地更新的文件</li></ul><h2 id="rm" tabindex="-1"><a class="header-anchor" href="#rm"><span>rm</span></a></h2><p><code>rm</code> 命令用于删除文件。</p><p>参数。</p><ul><li><code>-i</code> 文件存在时，会提示确认。</li><li><code>-r</code> 递归删除一个子目录</li><li><code>-f</code> 如果删除不存在的文件，不报错</li><li><code>-v</code> 删除时展示详细信息</li></ul><h2 id="ln" tabindex="-1"><a class="header-anchor" href="#ln"><span>ln</span></a></h2><p><code>ln</code> 命令用于建立链接文件。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 新建硬链接</span>
$ <span class="token function">ln</span> <span class="token function">file</span> <span class="token function">link</span>

<span class="token comment"># 新建软链接</span>
$ <span class="token function">ln</span> <span class="token parameter variable">-s</span> item <span class="token function">link</span>
</code></pre></div>`,21),l=[i];function c(o,r){return n(),a("div",null,l)}const m=e(t,[["render",c],["__file","file-operation.html.vue"]]),h=JSON.parse('{"path":"/linux/bash/archives/file-operation.html","title":"文件操作","lang":"zh-CN","frontmatter":{"description":"文件操作 cp cp 命令用于将文件(或目录)拷贝到目的地。 其他参数 -a 拷贝时保留所有属性，包括所有者与权限 -v 显示拷贝的详细信息 mkdir mkdir 命令用于新建目录。 mv mv 命令用于将源文件移动到目的地。 参数 -i 覆盖已经存在的文件时，会提示确认 -u 只移动目的地不存在的文件，或比目的地更新的文件 rm rm 命令用于删除...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/bash/archives/file-operation.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"文件操作"}],["meta",{"property":"og:description","content":"文件操作 cp cp 命令用于将文件(或目录)拷贝到目的地。 其他参数 -a 拷贝时保留所有属性，包括所有者与权限 -v 显示拷贝的详细信息 mkdir mkdir 命令用于新建目录。 mv mv 命令用于将源文件移动到目的地。 参数 -i 覆盖已经存在的文件时，会提示确认 -u 只移动目的地不存在的文件，或比目的地更新的文件 rm rm 命令用于删除..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2021-01-27T06:58:54.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2021-01-27T06:58:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文件操作\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-01-27T06:58:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]],"date":"2020-06-03T17:08:34.000Z"},"headers":[{"level":2,"title":"cp","slug":"cp","link":"#cp","children":[]},{"level":2,"title":"mkdir","slug":"mkdir","link":"#mkdir","children":[]},{"level":2,"title":"mv","slug":"mv","link":"#mv","children":[]},{"level":2,"title":"rm","slug":"rm","link":"#rm","children":[]},{"level":2,"title":"ln","slug":"ln","link":"#ln","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1611730734000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2}]},"readingTime":{"minutes":1.31,"words":394},"filePathRelative":"linux/bash/archives/file-operation.md","localizedDate":"2020年6月3日","excerpt":"","autoDesc":true}');export{m as comp,h as data};
