import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as i}from"./app-C6d_tW6U.js";const o={},t=i(`<h1 id="du" tabindex="-1"><a class="header-anchor" href="#du"><span>du</span></a></h1><p><code>du</code> 命令显示某个文件或目录的磁盘使用量。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">du</span><span style="color:#032F62;--shiki-dark:#98C379;"> filename</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-h</code> 参数将返回的大小显示为人类可读的格式，即显示单位为 K、M、G 等。</p><p><code>-s</code> 参数表示总结(summarize)。</p><p><code>-x</code> 参数表示不显示不在当前分区的目录，通常会忽略<code>/dev</code>、<code>/proc</code>、<code>/sys</code> 等目录。</p><p><code>-c</code> 参数表示显示当前目录总共占用的空间大小。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># 显示根目录下各级目录占用的空间大小</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> du</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -shxc</span><span style="color:#032F62;--shiki-dark:#98C379;"> /</span><span style="color:#005CC5;--shiki-dark:#E5C07B;">*</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>--exclude</code> 参数用于排除某些目录或文件。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> du</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -shxc</span><span style="color:#032F62;--shiki-dark:#98C379;"> /</span><span style="color:#005CC5;--shiki-dark:#E5C07B;">*</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --exclude=proc</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> du</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -sh</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --exclude=</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">*</span><span style="color:#005CC5;--shiki-dark:#D19A66;">.iso</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>--max-depth</code> 参数用于设定目录大小统计到第几层。如果设为 <code>-–max-depth=0</code>，那么等同于 <code>-s</code> 参数。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="color:#032F62;--shiki-dark:#98C379;"> du</span><span style="color:#032F62;--shiki-dark:#98C379;"> /home/</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -hc</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --max-depth=2</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),r=[t];function d(n,l){return s(),a("div",null,r)}const h=e(o,[["render",d],["__file","du.html.vue"]]),m=JSON.parse('{"path":"/linux/bash/archives/commands/du.html","title":"du","lang":"zh-CN","frontmatter":{"date":"2020-06-04T00:00:00.000Z","description":"du du 命令显示某个文件或目录的磁盘使用量。 -h 参数将返回的大小显示为人类可读的格式，即显示单位为 K、M、G 等。 -s 参数表示总结(summarize)。 -x 参数表示不显示不在当前分区的目录，通常会忽略/dev、/proc、/sys 等目录。 -c 参数表示显示当前目录总共占用的空间大小。 --exclude 参数用于排除某些目录或文...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/bash/archives/commands/du.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"du"}],["meta",{"property":"og:description","content":"du du 命令显示某个文件或目录的磁盘使用量。 -h 参数将返回的大小显示为人类可读的格式，即显示单位为 K、M、G 等。 -s 参数表示总结(summarize)。 -x 参数表示不显示不在当前分区的目录，通常会忽略/dev、/proc、/sys 等目录。 -c 参数表示显示当前目录总共占用的空间大小。 --exclude 参数用于排除某些目录或文..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-07T05:21:25.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-06-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-07T05:21:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"du\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-07T05:21:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[],"git":{"createdTime":1591204114000,"updatedTime":1712467285000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":0.67,"words":200},"filePathRelative":"linux/bash/archives/commands/du.md","localizedDate":"2020年6月4日","excerpt":"","autoDesc":true}');export{h as comp,m as data};
