import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as t}from"./app-DHOHoluL.js";const o={},p=t(`<h1 id="sed" tabindex="-1"><a class="header-anchor" href="#sed"><span>sed</span></a></h1><p><code>sed</code> 命令用于对文本进行过滤和变形处理。</p><p>下面是 <code>example.txt</code> 文件的内容。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">Hello</span><span style="color:#A3BE8C;"> This</span><span style="color:#A3BE8C;"> is</span><span style="color:#A3BE8C;"> a</span><span style="color:#A3BE8C;"> Test</span><span style="color:#B48EAD;"> 1</span><span style="color:#B48EAD;"> 2</span><span style="color:#B48EAD;"> 3</span><span style="color:#B48EAD;"> 4</span></span>
<span class="line"><span style="color:#88C0D0;">replace</span><span style="color:#A3BE8C;"> all</span><span style="color:#A3BE8C;"> spaces</span><span style="color:#A3BE8C;"> with</span><span style="color:#A3BE8C;"> hyphens</span></span></code></pre></div><p><code>sed</code> 命令将所有的空格换成连词线 <code>-</code>。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> sed</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">s/ /-/g</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;"> example.txt</span></span>
<span class="line"><span style="color:#88C0D0;">Hello-This-is-a-Test-1-2-3-4</span></span></code></pre></div><p>下面的命令将数字换成字母 <code>d</code>。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> sed</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">s/[0-9]/d/g</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;"> example.txt</span></span>
<span class="line"><span style="color:#88C0D0;">Hello</span><span style="color:#A3BE8C;"> This</span><span style="color:#A3BE8C;"> is</span><span style="color:#A3BE8C;"> a</span><span style="color:#A3BE8C;"> Test</span><span style="color:#A3BE8C;"> d</span><span style="color:#A3BE8C;"> d</span><span style="color:#A3BE8C;"> d</span><span style="color:#A3BE8C;"> d</span></span></code></pre></div>`,8),l=[p];function n(r,c){return s(),a("div",null,l)}const h=e(o,[["render",n],["__file","sed.html.vue"]]),m=JSON.parse('{"path":"/linux/bash/archives/commands/sed.html","title":"sed","lang":"zh-CN","frontmatter":{"date":"2020-06-04T00:00:00.000Z","description":"sed sed 命令用于对文本进行过滤和变形处理。 下面是 example.txt 文件的内容。 sed 命令将所有的空格换成连词线 -。 下面的命令将数字换成字母 d。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/bash/archives/commands/sed.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"sed"}],["meta",{"property":"og:description","content":"sed sed 命令用于对文本进行过滤和变形处理。 下面是 example.txt 文件的内容。 sed 命令将所有的空格换成连词线 -。 下面的命令将数字换成字母 d。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-07T05:21:25.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-06-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-07T05:21:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sed\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-07T05:21:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[],"git":{"createdTime":1591204114000,"updatedTime":1712467285000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":0.35,"words":104},"filePathRelative":"linux/bash/archives/commands/sed.md","localizedDate":"2020年6月4日","excerpt":"","autoDesc":true}');export{h as comp,m as data};
