import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as a,b as n}from"./app-S62fdHqc.js";const s={},o=n(`<h1 id="uniq" tabindex="-1"><a class="header-anchor" href="#uniq"><span>uniq</span></a></h1><p><code>uniq</code> 用于过滤掉重复的行，该命令只对排序后的文件有效。</p><p>下面是 <code>example.txt</code> 文件的内容。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>a
a
b
a
b
c
d
c
</code></pre></div><p>对该文件进行排序后，再过滤掉重复的行。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sort</span> example.txt <span class="token operator">|</span> <span class="token function">uniq</span>
a
b
c
d
</code></pre></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><p><code>-c</code> 参数会显示每行一共出现了多少次。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sort</span> example.txt <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>
    <span class="token number">3</span> a
    <span class="token number">2</span> b
    <span class="token number">2</span> c
    <span class="token number">1</span> d
</code></pre></div>`,9),p=[o];function r(c,i){return t(),a("div",null,p)}const d=e(s,[["render",r],["__file","uniq.html.vue"]]),h=JSON.parse('{"path":"/linux/bash/archives/commands/uniq.html","title":"uniq","lang":"zh-CN","frontmatter":{"description":"uniq uniq 用于过滤掉重复的行，该命令只对排序后的文件有效。 下面是 example.txt 文件的内容。 对该文件进行排序后，再过滤掉重复的行。 参数 -c 参数会显示每行一共出现了多少次。 ","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/bash/archives/commands/uniq.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"uniq"}],["meta",{"property":"og:description","content":"uniq uniq 用于过滤掉重复的行，该命令只对排序后的文件有效。 下面是 example.txt 文件的内容。 对该文件进行排序后，再过滤掉重复的行。 参数 -c 参数会显示每行一共出现了多少次。 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2021-01-27T06:58:54.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2021-01-27T06:58:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"uniq\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-01-27T06:58:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]],"date":"2020-06-03T17:08:34.000Z"},"headers":[{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1611730734000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2}]},"readingTime":{"minutes":0.33,"words":98},"filePathRelative":"linux/bash/archives/commands/uniq.md","localizedDate":"2020年6月3日","excerpt":"","autoDesc":true}');export{d as comp,h as data};
