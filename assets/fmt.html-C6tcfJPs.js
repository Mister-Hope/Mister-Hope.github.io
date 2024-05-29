import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,b as n}from"./app-C6d_tW6U.js";const i={},t=n(`<h1 id="fmt" tabindex="-1"><a class="header-anchor" href="#fmt"><span>fmt</span></a></h1><p><code>fmt</code> 命令用于对文本指定样式。</p><p>下面是 <code>example.txt</code> 的内容，是非常长的一行。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>fmt</code> 可以将其输出为每行 80 个字符。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">cat</span><span style="color:#032F62;--shiki-dark:#98C379;"> example.txt</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> fmt</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -w</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 20</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Lorem</span><span style="color:#032F62;--shiki-dark:#98C379;"> ipsum</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">dolor</span><span style="color:#032F62;--shiki-dark:#98C379;"> sit</span><span style="color:#032F62;--shiki-dark:#98C379;"> amet,</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">consetetur</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sadipscing</span><span style="color:#032F62;--shiki-dark:#98C379;"> elitr,</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sed</span><span style="color:#032F62;--shiki-dark:#98C379;"> diam</span><span style="color:#032F62;--shiki-dark:#98C379;"> nonumy</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">eirmod</span><span style="color:#032F62;--shiki-dark:#98C379;"> tempor</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">invidunt</span><span style="color:#032F62;--shiki-dark:#98C379;"> ut</span><span style="color:#032F62;--shiki-dark:#98C379;"> labore</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">et</span><span style="color:#032F62;--shiki-dark:#98C379;"> dolore</span><span style="color:#032F62;--shiki-dark:#98C379;"> magna</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">aliquyam</span><span style="color:#032F62;--shiki-dark:#98C379;"> erat,</span><span style="color:#032F62;--shiki-dark:#98C379;"> sed</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">diam</span><span style="color:#032F62;--shiki-dark:#98C379;"> voluptua.</span><span style="color:#032F62;--shiki-dark:#98C379;"> At</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">vero</span><span style="color:#032F62;--shiki-dark:#98C379;"> eos</span><span style="color:#032F62;--shiki-dark:#98C379;"> et</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">accusam</span><span style="color:#032F62;--shiki-dark:#98C379;"> et</span><span style="color:#032F62;--shiki-dark:#98C379;"> justo</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">duo</span><span style="color:#032F62;--shiki-dark:#98C379;"> dolores</span><span style="color:#032F62;--shiki-dark:#98C379;"> et</span><span style="color:#032F62;--shiki-dark:#98C379;"> ea</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">rebum.</span><span style="color:#032F62;--shiki-dark:#98C379;"> Stet</span><span style="color:#032F62;--shiki-dark:#98C379;"> clita</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">kasd</span><span style="color:#032F62;--shiki-dark:#98C379;"> gubergren,</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">no</span><span style="color:#032F62;--shiki-dark:#98C379;"> sea</span><span style="color:#032F62;--shiki-dark:#98C379;"> takimata</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">sanctus</span><span style="color:#032F62;--shiki-dark:#98C379;"> est</span><span style="color:#032F62;--shiki-dark:#98C379;"> Lorem</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">ipsum</span><span style="color:#032F62;--shiki-dark:#98C379;"> dolor</span><span style="color:#032F62;--shiki-dark:#98C379;"> sit</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">amet.</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[t];function o(r,p){return a(),e("div",null,l)}const m=s(i,[["render",o],["__file","fmt.html.vue"]]),k=JSON.parse('{"path":"/linux/bash/archives/commands/fmt.html","title":"fmt","lang":"zh-CN","frontmatter":{"date":"2020-06-04T00:00:00.000Z","description":"fmt fmt 命令用于对文本指定样式。 下面是 example.txt 的内容，是非常长的一行。 fmt 可以将其输出为每行 80 个字符。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/bash/archives/commands/fmt.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"fmt"}],["meta",{"property":"og:description","content":"fmt fmt 命令用于对文本指定样式。 下面是 example.txt 的内容，是非常长的一行。 fmt 可以将其输出为每行 80 个字符。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-07T05:21:25.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-06-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-07T05:21:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"fmt\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-07T05:21:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[],"git":{"createdTime":1591204114000,"updatedTime":1712467285000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":0.51,"words":152},"filePathRelative":"linux/bash/archives/commands/fmt.md","localizedDate":"2020年6月4日","excerpt":"","autoDesc":true}');export{m as comp,k as data};
