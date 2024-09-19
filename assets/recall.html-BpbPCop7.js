import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as o,o as p}from"./app-BGIrljxn.js";const r={};function s(n,e){return p(),a("div",null,e[0]||(e[0]=[o(`<p>在任何一个阶段，您都有可能想要撤消某些操作。这里，我们将会学习几个撤消您所做修改的基本工具。注 意，有些撤消操作是不可逆的。这是在使用 Git 的过程中，会因为操作失误而导致之前的工作丢失的少有的几个 地方之一。</p><p>有时候我们提交完了才发现漏掉了几个文件没有添加，或者提交信息写错了。此时，可以运行带有 <code>--amend</code> 选 项的提交命令来重新提交:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">git</span><span style="color:#A3BE8C;"> commit</span><span style="color:#A3BE8C;"> --amend</span></span></code></pre></div><p>这个命令会将暂存区中的文件提交。如果自上次提交以来您还未做任何修改(例如，在上次提交后马上执行了 此命令)， 那么快照会保持不变，而您所修改的只是提交信息。</p><p>文本编辑器启动后，可以看到之前的提交信息。编辑后保存会覆盖原来的提交信息。</p><p>例如，您提交后发现忘记了暂存某些需要的修改，可以像下面这样操作:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">git</span><span style="color:#A3BE8C;"> commit</span><span style="color:#A3BE8C;"> -m</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">initial commit</span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#88C0D0;">git</span><span style="color:#A3BE8C;"> add</span><span style="color:#A3BE8C;"> forgotten_file</span></span>
<span class="line"><span style="color:#88C0D0;">git</span><span style="color:#A3BE8C;"> commit</span><span style="color:#A3BE8C;"> --amend</span></span></code></pre></div><p>最终您只会有一个提交——第二次提交将代替第一次提交的结果。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当您在修补最后的提交时，并不是通过用改进后的提交 原位替换 掉旧有提交的方式来修复 的， 理解这一点非常重要。从效果上来说，就像是旧有的提交从未存在过一样，它并不会出 现在仓库的历史中。</p><p>修补提交最明显的价值是可以稍微改进您最后的提交，而不会让“啊，忘了添加一个文件”或 者 “小修补，修正笔误”这种提交信息弄乱您的仓库历史。</p></div>`,9)]))}const c=t(r,[["render",s],["__file","recall.html.vue"]]),m=JSON.parse('{"path":"/software/git/recall.html","title":"撤销操作","lang":"zh-CN","frontmatter":{"date":"2020-05-11T00:00:00.000Z","title":"撤销操作","icon":"return","order":5,"category":"Git","tag":["Git","软件"],"description":"在任何一个阶段，您都有可能想要撤消某些操作。这里，我们将会学习几个撤消您所做修改的基本工具。注 意，有些撤消操作是不可逆的。这是在使用 Git 的过程中，会因为操作失误而导致之前的工作丢失的少有的几个 地方之一。 有时候我们提交完了才发现漏掉了几个文件没有添加，或者提交信息写错了。此时，可以运行带有 --amend 选 项的提交命令来重新提交: 这个命...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/software/git/recall.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"撤销操作"}],["meta",{"property":"og:description","content":"在任何一个阶段，您都有可能想要撤消某些操作。这里，我们将会学习几个撤消您所做修改的基本工具。注 意，有些撤消操作是不可逆的。这是在使用 Git 的过程中，会因为操作失误而导致之前的工作丢失的少有的几个 地方之一。 有时候我们提交完了才发现漏掉了几个文件没有添加，或者提交信息写错了。此时，可以运行带有 --amend 选 项的提交命令来重新提交: 这个命..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:published_time","content":"2020-05-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"撤销操作\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[],"git":{"createdTime":1591861522000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":1.6,"words":480},"filePathRelative":"software/git/recall.md","localizedDate":"2020年5月11日","excerpt":"","autoDesc":true}');export{c as comp,m as data};
