import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as e,o as h}from"./app-D_3IGtdL.js";const t={};function p(l,i){return h(),a("div",null,i[0]||(i[0]=[e(`<h1 id="grep" tabindex="-1"><a class="header-anchor" href="#grep"><span>grep</span></a></h1><p><code>grep</code> 命令用于文件内容的搜索，返回所有匹配的行。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pattern</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> filename</span></span></code></pre></div><p>下面是一个例子。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> admin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/passwd</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">_kadmin_admin:*:218:-2:Kerberos</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Admin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Service:/var/empty:/usr/bin/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">_kadmin_changepw:*:219:-2:Kerberos</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Change</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Password</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Service:/var/empty:/usr/bin/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">_krb_kadmin:*:231:-2:Open</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Directory</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Kerberos</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Admin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Service:/var/empty:/usr/bin/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span></code></pre></div><p>一般情况下，应该使用 <code>grep -R</code>，递归地找出当前目录下符合 <code>someVar</code> 的文件。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -FR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;someVar&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span></span></code></pre></div><p>別忘了大小不敏感的参数，因为 grep 默认搜索是大小写敏感的。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -iR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;somevar&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span></span></code></pre></div><p>也可以用 <code>grep -l</code> 光打印出符合条件的文件名而非文件内容选段。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -lR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;somevar&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span></span></code></pre></div><p>如果您写的脚本或批处理任务需要上面的输出内容，可以使用 while 和 read 来处理文件名中的空格和其他特殊字符:</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -lR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> someVar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">while</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> IFS</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> read</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">do</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    head</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">done</span></span></code></pre></div><p>如果您在您的项目里使用了版本控制软件，它通常会在 .svn， .git， .hg 目录下包含一些元数据。您也可以很容易地用 grep -v 把这些目录移出搜索范围，当然得用 grep -F 指定一个恰当且确定的字符串，即要移除的目录名:</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -R</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;someVar&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -vF</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;.svn&#39;</span></span></code></pre></div><p>部分版本的 grep 包含了 --exclude 和 --exclude-dir 选项，这看起来更加易读。</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><p><code>-i</code> 参数表示忽略大小写。</p><p><code>-r</code> 表示搜索某个目录下面的所有文件。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> admin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/</span></span></code></pre></div><p><code>-v</code> 过滤包含某个词的行，即 <code>grep</code> 的逆操作。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 显示所有包含 vim，但不包含 grep 的行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ps</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vim</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> grep</span></span></code></pre></div>`,22)]))}const r=s(t,[["render",p],["__file","grep.html.vue"]]),d=JSON.parse('{"path":"/linux/bash/archives/commands/grep.html","title":"grep","lang":"zh-CN","frontmatter":{"date":"2020-06-04T00:00:00.000Z","description":"grep grep 命令用于文件内容的搜索，返回所有匹配的行。 下面是一个例子。 一般情况下，应该使用 grep -R，递归地找出当前目录下符合 someVar 的文件。 別忘了大小不敏感的参数，因为 grep 默认搜索是大小写敏感的。 也可以用 grep -l 光打印出符合条件的文件名而非文件内容选段。 如果您写的脚本或批处理任务需要上面的输出内容，...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/bash/archives/commands/grep.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"grep"}],["meta",{"property":"og:description","content":"grep grep 命令用于文件内容的搜索，返回所有匹配的行。 下面是一个例子。 一般情况下，应该使用 grep -R，递归地找出当前目录下符合 someVar 的文件。 別忘了大小不敏感的参数，因为 grep 默认搜索是大小写敏感的。 也可以用 grep -l 光打印出符合条件的文件名而非文件内容选段。 如果您写的脚本或批处理任务需要上面的输出内容，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2020-06-04T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"grep\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-04T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]}],"readingTime":{"minutes":1.35,"words":405},"filePathRelative":"linux/bash/archives/commands/grep.md","localizedDate":"2020年6月4日","excerpt":"","autoDesc":true}');export{r as comp,d as data};
