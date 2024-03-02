import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,b as n}from"./app-HKiGrZwE.js";const r={},o=n(`<h1 id="egrep" tabindex="-1"><a class="header-anchor" href="#egrep"><span>egrep</span></a></h1><p><code>egrep</code> 命令用于显示匹配正则模式的行，与 <code>grep -E</code> 命令等价。</p><p>下面是 <code>example.txt</code> 文件的内容。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Lorem ipsum
dolor sit amet,
consetetur
sadipscing elitr,
sed diam nonumy
eirmod tempor
invidunt ut labore
et dolore magna
aliquyam erat, sed
diam voluptua. At
vero eos et
accusam et justo
duo dolores et ea
rebum. Stet clita
kasd gubergren,
no sea takimata
sanctus est Lorem
ipsum dolor sit
amet.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>egrep</code> 命令显示包括 <code>Lorem</code> 或 <code>dolor</code> 的行。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">egrep</span> <span class="token string">&#39;(Lorem|dolor)&#39;</span> example.txt
<span class="token comment"># 或者</span>
$ <span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;(Lorem|dolor)&#39;</span> example.txt
Lorem ipsum
dolor sit amet,
et dolore magna
duo dolores et ea
sanctus est Lorem
ipsum dolor sit
</code></pre></div>`,6),s=[o];function i(l,d){return t(),a("div",null,s)}const c=e(r,[["render",i],["__file","egrep.html.vue"]]),u=JSON.parse('{"path":"/linux/bash/archives/commands/egrep.html","title":"egrep","lang":"zh-CN","frontmatter":{"description":"egrep egrep 命令用于显示匹配正则模式的行，与 grep -E 命令等价。 下面是 example.txt 文件的内容。 egrep 命令显示包括 Lorem 或 dolor 的行。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/bash/archives/commands/egrep.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"egrep"}],["meta",{"property":"og:description","content":"egrep egrep 命令用于显示匹配正则模式的行，与 grep -E 命令等价。 下面是 example.txt 文件的内容。 egrep 命令显示包括 Lorem 或 dolor 的行。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2021-01-27T06:58:54.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2021-01-27T06:58:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"egrep\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-01-27T06:58:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]],"date":"2020-06-03T17:08:34.000Z"},"headers":[],"git":{"createdTime":1591204114000,"updatedTime":1611730734000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3}]},"readingTime":{"minutes":0.42,"words":125},"filePathRelative":"linux/bash/archives/commands/egrep.md","localizedDate":"2020年6月3日","excerpt":"","autoDesc":true}');export{c as comp,u as data};
