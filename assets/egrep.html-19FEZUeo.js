import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,b as a}from"./app-r406UCC8.js";const n={},t=a(`<h1 id="egrep" tabindex="-1"><a class="header-anchor" href="#egrep"><span>egrep</span></a></h1><p><code>egrep</code> 命令用于显示匹配正则模式的行，与 <code>grep -E</code> 命令等价。</p><p>下面是 <code>example.txt</code> 文件的内容。</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>Lorem ipsum</span></span>
<span class="line"><span>dolor sit amet,</span></span>
<span class="line"><span>consetetur</span></span>
<span class="line"><span>sadipscing elitr,</span></span>
<span class="line"><span>sed diam nonumy</span></span>
<span class="line"><span>eirmod tempor</span></span>
<span class="line"><span>invidunt ut labore</span></span>
<span class="line"><span>et dolore magna</span></span>
<span class="line"><span>aliquyam erat, sed</span></span>
<span class="line"><span>diam voluptua. At</span></span>
<span class="line"><span>vero eos et</span></span>
<span class="line"><span>accusam et justo</span></span>
<span class="line"><span>duo dolores et ea</span></span>
<span class="line"><span>rebum. Stet clita</span></span>
<span class="line"><span>kasd gubergren,</span></span>
<span class="line"><span>no sea takimata</span></span>
<span class="line"><span>sanctus est Lorem</span></span>
<span class="line"><span>ipsum dolor sit</span></span>
<span class="line"><span>amet.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>egrep</code> 命令显示包括 <code>Lorem</code> 或 <code>dolor</code> 的行。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> egrep</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;(Lorem|dolor)&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> example.txt</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 或者</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -E</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;(Lorem|dolor)&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> example.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Lorem</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ipsum</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dolor</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> sit</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> amet,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">et</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> dolore</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> magna</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">duo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> dolores</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> et</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ea</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sanctus</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> est</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Lorem</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ipsum</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> dolor</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> sit</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[t];function p(r,d){return e(),i("div",null,l)}const c=s(n,[["render",p],["__file","egrep.html.vue"]]),m=JSON.parse('{"path":"/linux/bash/archives/commands/egrep.html","title":"egrep","lang":"zh-CN","frontmatter":{"date":"2020-06-04T00:00:00.000Z","description":"egrep egrep 命令用于显示匹配正则模式的行，与 grep -E 命令等价。 下面是 example.txt 文件的内容。 egrep 命令显示包括 Lorem 或 dolor 的行。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/bash/archives/commands/egrep.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"egrep"}],["meta",{"property":"og:description","content":"egrep egrep 命令用于显示匹配正则模式的行，与 grep -E 命令等价。 下面是 example.txt 文件的内容。 egrep 命令显示包括 Lorem 或 dolor 的行。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-07T05:21:25.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-06-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-07T05:21:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"egrep\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-07T05:21:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[],"git":{"createdTime":1591204114000,"updatedTime":1712467285000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":0.43,"words":129},"filePathRelative":"linux/bash/archives/commands/egrep.md","localizedDate":"2020年6月4日","excerpt":"","autoDesc":true}');export{c as comp,m as data};
