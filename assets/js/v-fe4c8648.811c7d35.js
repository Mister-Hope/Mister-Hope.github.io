"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[10332],{15114:(a,e,s)=>{s.r(e),s.d(e,{default:()=>p});var n=s(16492);const t=s.p+"assets/img/git16.02f6ee61.png",o=[(0,n.uE)('<p>在安装 Git 一节中，我们已经配置了 <code>user.name</code> 和 <code>user.email</code>，实际上，Git 还有很多可配置项。</p><p>比如，让 Git 显示颜色，会让命令输出看起来更醒目:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> color.ui <span class="token boolean">true</span>\n</code></pre></div><p>这样，Git 会适当地显示不同的颜色，比如 <code>git status</code> 命令，文件名就会标上颜色。</p><h2 id="配置别名" tabindex="-1"><a class="header-anchor" href="#配置别名" aria-hidden="true">#</a> 配置别名</h2><p>有没有经常敲错命令? 比如 <code>git status</code>? <code>status</code> 这个单词真心不好记。</p><p>如果敲 <code>git st</code> 就表示 <code>git status</code> 那就简单多了，当然这种偷懒的办法我们是极力赞成的。</p><p>我们只需要敲一行命令，告诉 Git，以后 <code>st</code> 就表示 <code>status</code>:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.st status\n</code></pre></div><p>好了，现在敲 <code>git st</code> 看看效果。</p><p>当然还有别的命令可以简写，很多人都用 <code>co</code> 表示 <code>checkout</code>，<code>ci</code> 表示 <code>commit</code>，<code>br</code> 表示 <code>branch</code>:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.co checkout\n<span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.ci commit\n<span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.br branch\n</code></pre></div><p>以后提交就可以简写成:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> ci <span class="token parameter variable">-m</span> <span class="token string">&quot;bala bala bala...&quot;</span>\n</code></pre></div><p><code>--global</code> 参数是全局参数，也就是这些命令在这台电脑的所有 Git 仓库下都有用。</p><p>在撤销修改一节中，我们知道，命令 <code>git reset HEAD file</code> 可以把暂存区的修改撤销掉(unstage)，重新放回工作区。既然是一个 <code>unstage</code> 操作，就可以配置一个 <code>unstage</code> 别名:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.unstage <span class="token string">&#39;reset HEAD&#39;</span>\n</code></pre></div><p>当您敲入命令:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> unstage test.py\n</code></pre></div><p>实际上 Git 执行的是:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset HEAD test.py\n</code></pre></div><p>配置一个 <code>git last</code>，让其显示最后一次提交信息:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.last <span class="token string">&#39;log -1&#39;</span>\n</code></pre></div><p>这样，用 <code>git last</code> 就能显示最近一次的提交:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> last\ncommit adca45d317e6d8a4b23f9811c3d7b7f0f180bfe2\nMerge: bd6ae48 291bea8\nAuthor: Mr-Hope <span class="token operator">&lt;</span>mister-hope@outlook.com<span class="token operator">&gt;</span>\nDate:   Thu Aug <span class="token number">22</span> <span class="token number">22</span>:49:22 <span class="token number">2013</span> +0800\n\n    merge <span class="token operator">&amp;</span> fix hello.py\n</code></pre></div><p>甚至还有人丧心病狂地把 <code>lg</code> 配置成了:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.lg <span class="token string">&quot;log --color --graph --pretty=format:&#39;%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&lt;%an&gt;%Creset&#39; --abbrev-commit&quot;</span>\n</code></pre></div><p>来看看 <code>git lg</code> 的效果:</p><p><img src="'+t+'" alt="命令 git lg 示例图"></p><p>为什么不早点告诉我? 别激动，咱不是为了多记几个英文单词嘛!</p><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>配置 Git 的时候，加上 <code>--global</code> 是针对当前用户起作用的，如果不加，那只针对当前的仓库起作用。</p><p>配置文件放哪了? 每个仓库的 Git 配置文件都放在 <code>.git/config</code> 文件中:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .git/config\n<span class="token punctuation">[</span>core<span class="token punctuation">]</span>\n    repositoryformatversion <span class="token operator">=</span> <span class="token number">0</span>\n    filemode <span class="token operator">=</span> <span class="token boolean">true</span>\n    bare <span class="token operator">=</span> <span class="token boolean">false</span>\n    logallrefupdates <span class="token operator">=</span> <span class="token boolean">true</span>\n    ignorecase <span class="token operator">=</span> <span class="token boolean">true</span>\n    precomposeunicode <span class="token operator">=</span> <span class="token boolean">true</span>\n<span class="token punctuation">[</span>remote <span class="token string">&quot;origin&quot;</span><span class="token punctuation">]</span>\n    url <span class="token operator">=</span> git@github.com:michaelliao/learngit.git\n    fetch <span class="token operator">=</span> +refs/heads/*:refs/remotes/origin/*\n<span class="token punctuation">[</span>branch <span class="token string">&quot;master&quot;</span><span class="token punctuation">]</span>\n    remote <span class="token operator">=</span> origin\n    merge <span class="token operator">=</span> refs/heads/master\n<span class="token punctuation">[</span>alias<span class="token punctuation">]</span>\n    last <span class="token operator">=</span> log <span class="token parameter variable">-1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>别名就在 <code>[alias]</code> 后面，要删除别名，直接把对应的行删掉即可。</p><p>而当前用户的 Git 配置文件放在用户主目录下的一个隐藏文件 <code>.gitconfig</code> 中:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .gitconfig\n<span class="token punctuation">[</span>alias<span class="token punctuation">]</span>\n    co <span class="token operator">=</span> checkout\n    ci <span class="token operator">=</span> commit\n    br <span class="token operator">=</span> branch\n    st <span class="token operator">=</span> status\n<span class="token punctuation">[</span>user<span class="token punctuation">]</span>\n    name <span class="token operator">=</span> Your Name\n    email <span class="token operator">=</span> your@email.com\n</code></pre></div><p>配置别名也可以直接修改这个文件，如果改错了，可以删掉文件重新通过命令配置。</p><h3 id="别名小结" tabindex="-1"><a class="header-anchor" href="#别名小结" aria-hidden="true">#</a> 别名小结</h3><ul><li>给 Git 配置好别名，就可以输入命令时偷个懒。我们鼓励偷懒。</li></ul>',40)],c={},p=(0,s(11164).Z)(c,[["render",function(a,e){return(0,n.wg)(),(0,n.iD)("div",null,o)}]])},11164:(a,e)=>{e.Z=(a,e)=>{const s=a.__vccOpts||a;for(const[a,n]of e)s[a]=n;return s}},84212:(a,e,s)=>{s.r(e),s.d(e,{data:()=>n});const n=JSON.parse('{"key":"v-fe4c8648","path":"/software/git/custom.html","title":"自定义 Git","lang":"zh-CN","frontmatter":{"title":"自定义 Git","icon":"skin","order":14,"author":"廖雪峰","category":["Git"],"tag":["Git","软件"],"copyright":"Copyright by 廖雪峰 Edited by Mr.Hope","description":"在安装 Git 一节中，我们已经配置了 user.name 和 user.email，实际上，Git 还有很多可配置项。 比如，让 Git 显示颜色，会让命令输出看起来更醒目: 这样，Git 会适当地显示不同的颜色，比如 git status 命令，文件名就会标上颜色。 配置别名 有没有经常敲错命令? 比如 git status? status 这个单...","head":[["meta",{"property":"og:url","content":"https://mrhope.site/software/git/custom.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"自定义 Git"}],["meta",{"property":"og:description","content":"在安装 Git 一节中，我们已经配置了 user.name 和 user.email，实际上，Git 还有很多可配置项。 比如，让 Git 显示颜色，会让命令输出看起来更醒目: 这样，Git 会适当地显示不同的颜色，比如 git status 命令，文件名就会标上颜色。 配置别名 有没有经常敲错命令? 比如 git status? status 这个单..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mrhope.site/"}],["meta",{"property":"og:updated_time","content":"2022-09-07T17:18:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"自定义 Git"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:modified_time","content":"2022-09-07T17:18:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"配置别名","slug":"配置别名","link":"#配置别名","children":[]},{"level":2,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[{"level":3,"title":"别名小结","slug":"别名小结","link":"#别名小结","children":[]}]}],"git":{"createdTime":1591291369000,"updatedTime":1662571086000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":7},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":2.6,"words":780},"filePathRelative":"software/git/custom.md","localizedDate":"2020年6月4日"}')}}]);