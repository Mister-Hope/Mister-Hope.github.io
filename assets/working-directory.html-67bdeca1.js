import{_ as s,X as n,Y as a,a1 as e,$ as t,a3 as i}from"./framework-a91f7991.js";const o="/assets/git3-5dbe1179.jpg",c="/assets/git4-b1942131.jpg",d={},r=t("p",null,"Git 和其他版本控制系统如 SVN 的一个不同之处就是有暂存区的概念。",-1),p=i('<h2 id="工作区-working-directory" tabindex="-1"><a class="header-anchor" href="#工作区-working-directory" aria-hidden="true">#</a> 工作区(Working Directory)</h2><p>就是您在电脑里能看到的目录，比如 learngit 文件夹就是一个工作区:</p><h2 id="版本库-repository" tabindex="-1"><a class="header-anchor" href="#版本库-repository" aria-hidden="true">#</a> 版本库(Repository)</h2><p>工作区有一个隐藏目录.git，这个不算工作区，而是 Git 的版本库。</p><p>Git 的版本库里存了很多东西，其中最重要的就是称为 stage(或者叫 index)的暂存区，还有 Git 为我们自动创建的第一个分支 <code>master</code>，以及指向 master 的一个指针叫 <code>HEAD</code>。</p><p><img src="'+o+`" alt="版本库图例"></p><p>前面讲了我们把文件往 Git 版本库里添加的时候，提交更改，实际上就是把暂存区的所有内容提交到当前分支。我们创建 Git 版本库时，Git 自动为我们创建了唯一一个 <code>master</code> 分支，所以，现在，<code>git commit</code> 就是往 master 分支上提交更改。</p><p>您可以简单理解为，需要提交的文件修改通通放到暂存区，然后，一次性提交暂存区的所有修改。</p><p>先对 readme.txt 做个修改，比如加上一行内容:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
</code></pre></div><p>然后，在工作区新增一个 LICENSE 文本文件(内容随便写)。</p><p>先用 <code>git status</code> 查看一下状态:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>

    modified:   readme.txt

Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>

    LICENSE

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git 非常清楚地告诉我们，readme.txt 被修改了，而 LICENSE 还从来没有被添加过，所以它的状态是 <code>Untracked</code>。</p><p>现在，使用两次命令 <code>git add</code>，把 readme.txt 和 LICENSE 都添加后，用 <code>git status</code> 再查看一下:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>

    new file:   LICENSE
    modified:   readme.txt
</code></pre></div><p>现在，暂存区的状态就变成这样了:</p><p><img src="`+c+`" alt="状态示意图"></p><p>所以，<code>git add</code> 命令实际上就是把要提交的所有修改放到暂存区(Stage)，然后，执行 <code>git commit</code> 就可以一次性把暂存区的所有修改提交到分支。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;understand how stage works&quot;</span>
<span class="token punctuation">[</span>master e43a48b<span class="token punctuation">]</span> understand how stage works
 <span class="token number">2</span> files changed, <span class="token number">2</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> LICENSE
</code></pre></div><p>一旦提交后，如果您又没有对工作区做任何修改，那么工作区就是“干净”的:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
nothing to commit, working tree clean
</code></pre></div>`,22);function l(u,m){return n(),a("div",null,[r,e(" more "),p])}const k=s(d,[["render",l],["__file","working-directory.html.vue"]]);export{k as default};
