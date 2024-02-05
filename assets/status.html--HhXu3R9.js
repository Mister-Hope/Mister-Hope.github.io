import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as a,b as s}from"./app-S62fdHqc.js";const n={},o=s(`<p>我们已经成功地添加并提交了一个 readme.txt 文件，继续修改 readme.txt 文件，改成如下内容:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>Git is a distributed version control system.
Git is free software.
</code></pre></div><p>现在，运行 <code>git status</code> 命令看看结果:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>

    modified:   readme.txt

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p><code>git status</code> 命令可以输出仓库当前的状态，上面的命令输出告诉我们，readme.txt 被修改过了，但还没有准备提交的修改。</p><div class="hint-container tip"><p class="hint-container-title">简介输出</p><p><code>git status</code> 命令的输出十分详细，但其用语有些繁琐。Git 有一个选项可以帮您缩短状态命令的输出，这样可以以简洁的方式查看更改。如果您使用 <code>git status -s</code> 命令或 <code>git status --short</code> 命令，您将得到一种格式更为紧凑的输出。</p><p>输出中有两栏，左栏指明了暂存区的状态，右栏指明了工作区的状态。</p><p>新添加的未跟踪文件前面有 <code>??</code> 标记，新添加到暂存区中的文件前面有 <code>A</code> 标记，修改过的文件前面有 <code>M</code> 标记。</p><details class="hint-container details"><summary>案例</summary><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status <span class="token parameter variable">-s</span>
 M README
MM Rakefile
A  lib/git.rb
M  lib/simplegit.rb
?? LICENSE.txt
</code></pre></div><p>上面的状态报告显示: <code>README</code> 文件在工作区已修改但尚未暂存，而 <code>lib/simplegit.rb</code> 文件已修改且已暂存。<code>Rakefile</code> 文件已修改，暂存后又作了修改，因此该文件的修改中既有已暂存的部分，又有未暂存的部分。</p></details></div><p>Git 现在只告诉我们 readme.txt 被修改了，我们用 <code>git diff</code> 这个命令能看看具体修改了什么内容:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">diff</span> readme.txt
<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/readme.txt b/readme.txt
index 46d49bf<span class="token punctuation">..</span>9247db6 <span class="token number">100644</span>
--- a/readme.txt
+++ b/readme.txt
@@ -1,2 +1,2 @@
<span class="token parameter variable">-Git</span> is a version control system.
+Git is a distributed version control system.
 Git is <span class="token function">free</span> software.
</code></pre></div><p><code>git diff</code> 顾名思义就是查看 difference，显示的格式正是 Unix 通用的 diff 格式，可以从上面的命令输出看到，我们在第一行添加了一个 distributed 单词。</p><p>知道了对 readme.txt 作了什么修改后，再把它提交到仓库就放心多了，提交修改和提交新文件是一样的两步，第一步是 <code>git add</code>:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> readme.txt
<span class="token parameter variable">--no</span> output --
</code></pre></div><p>同样没有任何输出。在执行第二步 <code>git commit</code> 之前，我们再运行 <code>git status</code> 看看当前仓库的状态:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>

    modified:   readme.txt
</code></pre></div><p><code>git status</code> 告诉我们，将要被提交的修改包括 readme.txt，下一步，就可以放心地提交了:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;add distributed&quot;</span>
<span class="token punctuation">[</span>master e475afc<span class="token punctuation">]</span> <span class="token function">add</span> distributed
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
</code></pre></div><p>提交后，我们再用 <code>git status</code> 命令看看仓库的当前状态:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
nothing to commit, working tree clean
</code></pre></div><p>Git 告诉我们当前没有需要提交的修改，而且，工作目录是干净(working tree clean)的。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><ul><li><p>要随时掌握工作区的状态，使用 <code>git status</code> 命令。</p></li><li><p>如果 <code>git status</code> 告诉您有文件被修改过，用 <code>git diff</code> 可以查看修改内容。</p></li></ul>`,20),i=[o];function c(p,d){return e(),a("div",null,i)}const u=t(n,[["render",c],["__file","status.html.vue"]]),m=JSON.parse('{"path":"/software/git/status.html","title":"纵向查看","lang":"zh-CN","frontmatter":{"date":"2020-05-05T00:00:00.000Z","title":"纵向查看","icon":"list","order":4,"author":"廖雪峰","category":"Git","tag":["Git","软件"],"copyright":"Copyright by 廖雪峰 Edited by Mr.Hope","description":"我们已经成功地添加并提交了一个 readme.txt 文件，继续修改 readme.txt 文件，改成如下内容: 现在，运行 git status 命令看看结果: git status 命令可以输出仓库当前的状态，上面的命令输出告诉我们，readme.txt 被修改过了，但还没有准备提交的修改。 简介输出 git status 命令的输出十分详细，但其...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/software/git/status.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"纵向查看"}],["meta",{"property":"og:description","content":"我们已经成功地添加并提交了一个 readme.txt 文件，继续修改 readme.txt 文件，改成如下内容: 现在，运行 git status 命令看看结果: git status 命令可以输出仓库当前的状态，上面的命令输出告诉我们，readme.txt 被修改过了，但还没有准备提交的修改。 简介输出 git status 命令的输出十分详细，但其..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:published_time","content":"2020-05-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"纵向查看\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1591291369000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":13},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":2.68,"words":805},"filePathRelative":"software/git/status.md","localizedDate":"2020年5月5日","excerpt":"","autoDesc":true}');export{u as comp,m as data};
