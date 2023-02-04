import{_ as a,X as s,Y as n,a3 as e}from"./framework-e3372978.js";const o="/assets/git16-89a69458.png",t={},c=e(`<p>在安装 Git 一节中，我们已经配置了 <code>user.name</code> 和 <code>user.email</code>，实际上，Git 还有很多可配置项。</p><p>比如，让 Git 显示颜色，会让命令输出看起来更醒目:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> color.ui <span class="token boolean">true</span>
</code></pre></div><p>这样，Git 会适当地显示不同的颜色，比如 <code>git status</code> 命令，文件名就会标上颜色。</p><h2 id="配置别名" tabindex="-1"><a class="header-anchor" href="#配置别名" aria-hidden="true">#</a> 配置别名</h2><p>有没有经常敲错命令? 比如 <code>git status</code>? <code>status</code> 这个单词真心不好记。</p><p>如果敲 <code>git st</code> 就表示 <code>git status</code> 那就简单多了，当然这种偷懒的办法我们是极力赞成的。</p><p>我们只需要敲一行命令，告诉 Git，以后 <code>st</code> 就表示 <code>status</code>:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.st status
</code></pre></div><p>好了，现在敲 <code>git st</code> 看看效果。</p><p>当然还有别的命令可以简写，很多人都用 <code>co</code> 表示 <code>checkout</code>，<code>ci</code> 表示 <code>commit</code>，<code>br</code> 表示 <code>branch</code>:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.co checkout
<span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.ci commit
<span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.br branch
</code></pre></div><p>以后提交就可以简写成:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> ci <span class="token parameter variable">-m</span> <span class="token string">&quot;bala bala bala...&quot;</span>
</code></pre></div><p><code>--global</code> 参数是全局参数，也就是这些命令在这台电脑的所有 Git 仓库下都有用。</p><p>在撤销修改一节中，我们知道，命令 <code>git reset HEAD file</code> 可以把暂存区的修改撤销掉(unstage)，重新放回工作区。既然是一个 <code>unstage</code> 操作，就可以配置一个 <code>unstage</code> 别名:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.unstage <span class="token string">&#39;reset HEAD&#39;</span>
</code></pre></div><p>当您敲入命令:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> unstage test.py
</code></pre></div><p>实际上 Git 执行的是:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset HEAD test.py
</code></pre></div><p>配置一个 <code>git last</code>，让其显示最后一次提交信息:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.last <span class="token string">&#39;log -1&#39;</span>
</code></pre></div><p>这样，用 <code>git last</code> 就能显示最近一次的提交:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> last
commit adca45d317e6d8a4b23f9811c3d7b7f0f180bfe2
Merge: bd6ae48 291bea8
Author: Mr-Hope <span class="token operator">&lt;</span>mister-hope@outlook.com<span class="token operator">&gt;</span>
Date:   Thu Aug <span class="token number">22</span> <span class="token number">22</span>:49:22 <span class="token number">2013</span> +0800

    merge <span class="token operator">&amp;</span> fix hello.py
</code></pre></div><p>甚至还有人丧心病狂地把 <code>lg</code> 配置成了:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> alias.lg <span class="token string">&quot;log --color --graph --pretty=format:&#39;%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&lt;%an&gt;%Creset&#39; --abbrev-commit&quot;</span>
</code></pre></div><p>来看看 <code>git lg</code> 的效果:</p><p><img src="`+o+`" alt="命令 git lg 示例图"></p><p>为什么不早点告诉我? 别激动，咱不是为了多记几个英文单词嘛!</p><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>配置 Git 的时候，加上 <code>--global</code> 是针对当前用户起作用的，如果不加，那只针对当前的仓库起作用。</p><p>配置文件放哪了? 每个仓库的 Git 配置文件都放在 <code>.git/config</code> 文件中:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .git/config
<span class="token punctuation">[</span>core<span class="token punctuation">]</span>
    repositoryformatversion <span class="token operator">=</span> <span class="token number">0</span>
    filemode <span class="token operator">=</span> <span class="token boolean">true</span>
    bare <span class="token operator">=</span> <span class="token boolean">false</span>
    logallrefupdates <span class="token operator">=</span> <span class="token boolean">true</span>
    ignorecase <span class="token operator">=</span> <span class="token boolean">true</span>
    precomposeunicode <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">[</span>remote <span class="token string">&quot;origin&quot;</span><span class="token punctuation">]</span>
    url <span class="token operator">=</span> git@github.com:michaelliao/learngit.git
    fetch <span class="token operator">=</span> +refs/heads/*:refs/remotes/origin/*
<span class="token punctuation">[</span>branch <span class="token string">&quot;master&quot;</span><span class="token punctuation">]</span>
    remote <span class="token operator">=</span> origin
    merge <span class="token operator">=</span> refs/heads/master
<span class="token punctuation">[</span>alias<span class="token punctuation">]</span>
    last <span class="token operator">=</span> log <span class="token parameter variable">-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>别名就在 <code>[alias]</code> 后面，要删除别名，直接把对应的行删掉即可。</p><p>而当前用户的 Git 配置文件放在用户主目录下的一个隐藏文件 <code>.gitconfig</code> 中:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .gitconfig
<span class="token punctuation">[</span>alias<span class="token punctuation">]</span>
    co <span class="token operator">=</span> checkout
    ci <span class="token operator">=</span> commit
    br <span class="token operator">=</span> branch
    st <span class="token operator">=</span> status
<span class="token punctuation">[</span>user<span class="token punctuation">]</span>
    name <span class="token operator">=</span> Your Name
    email <span class="token operator">=</span> your@email.com
</code></pre></div><p>配置别名也可以直接修改这个文件，如果改错了，可以删掉文件重新通过命令配置。</p><h3 id="别名小结" tabindex="-1"><a class="header-anchor" href="#别名小结" aria-hidden="true">#</a> 别名小结</h3><ul><li>给 Git 配置好别名，就可以输入命令时偷个懒。我们鼓励偷懒。</li></ul>`,40),p=[c];function l(i,r){return s(),n("div",null,p)}const u=a(t,[["render",l],["__file","custom.html.vue"]]);export{u as default};
