import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as i,b as e}from"./app-C6d_tW6U.js";const n="/assets/git16-npF-8tSF.png",l={},o=e(`<p>在安装 Git 一节中，我们已经配置了 <code>user.name</code> 和 <code>user.email</code>，实际上，Git 还有很多可配置项。</p><p>比如，让 Git 显示颜色，会让命令输出看起来更醒目:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="color:#032F62;--shiki-dark:#98C379;"> config</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="color:#032F62;--shiki-dark:#98C379;"> color.ui</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> true</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样，Git 会适当地显示不同的颜色，比如 <code>git status</code> 命令，文件名就会标上颜色。</p><h2 id="配置别名" tabindex="-1"><a class="header-anchor" href="#配置别名"><span>配置别名</span></a></h2><p>有没有经常敲错命令? 比如 <code>git status</code>? <code>status</code> 这个单词真心不好记。</p><p>如果敲 <code>git st</code> 就表示 <code>git status</code> 那就简单多了，当然这种偷懒的办法我们是极力赞成的。</p><p>我们只需要敲一行命令，告诉 Git，以后 <code>st</code> 就表示 <code>status</code>:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="color:#032F62;--shiki-dark:#98C379;"> config</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="color:#032F62;--shiki-dark:#98C379;"> alias.st</span><span style="color:#032F62;--shiki-dark:#98C379;"> status</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>好了，现在敲 <code>git st</code> 看看效果。</p><p>当然还有别的命令可以简写，很多人都用 <code>co</code> 表示 <code>checkout</code>，<code>ci</code> 表示 <code>commit</code>，<code>br</code> 表示 <code>branch</code>:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="color:#032F62;--shiki-dark:#98C379;"> config</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="color:#032F62;--shiki-dark:#98C379;"> alias.co</span><span style="color:#032F62;--shiki-dark:#98C379;"> checkout</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="color:#032F62;--shiki-dark:#98C379;"> config</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="color:#032F62;--shiki-dark:#98C379;"> alias.ci</span><span style="color:#032F62;--shiki-dark:#98C379;"> commit</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="color:#032F62;--shiki-dark:#98C379;"> config</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="color:#032F62;--shiki-dark:#98C379;"> alias.br</span><span style="color:#032F62;--shiki-dark:#98C379;"> branch</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以后提交就可以简写成:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="color:#032F62;--shiki-dark:#98C379;"> ci</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -m</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;bala bala bala...&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>--global</code> 参数是全局参数，也就是这些命令在这台电脑的所有 Git 仓库下都有用。</p><p>在撤销修改一节中，我们知道，命令 <code>git reset HEAD file</code> 可以把暂存区的修改撤销掉(unstage)，重新放回工作区。既然是一个 <code>unstage</code> 操作，就可以配置一个 <code>unstage</code> 别名:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="color:#032F62;--shiki-dark:#98C379;"> config</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="color:#032F62;--shiki-dark:#98C379;"> alias.unstage</span><span style="color:#032F62;--shiki-dark:#98C379;"> &#39;reset HEAD&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当您敲入命令:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="color:#032F62;--shiki-dark:#98C379;"> unstage</span><span style="color:#032F62;--shiki-dark:#98C379;"> test.py</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实际上 Git 执行的是:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="color:#032F62;--shiki-dark:#98C379;"> reset</span><span style="color:#032F62;--shiki-dark:#98C379;"> HEAD</span><span style="color:#032F62;--shiki-dark:#98C379;"> test.py</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置一个 <code>git last</code>，让其显示最后一次提交信息:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="color:#032F62;--shiki-dark:#98C379;"> config</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="color:#032F62;--shiki-dark:#98C379;"> alias.last</span><span style="color:#032F62;--shiki-dark:#98C379;"> &#39;log -1&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样，用 <code>git last</code> 就能显示最近一次的提交:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> git</span><span style="color:#032F62;--shiki-dark:#98C379;"> last</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">commit</span><span style="color:#032F62;--shiki-dark:#98C379;"> adca45d317e6d8a4b23f9811c3d7b7f0f180bfe2</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Merge:</span><span style="color:#032F62;--shiki-dark:#98C379;"> bd6ae48</span><span style="color:#032F62;--shiki-dark:#98C379;"> 291bea8</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Author:</span><span style="color:#032F62;--shiki-dark:#98C379;"> Mr-Hope</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#032F62;--shiki-dark:#98C379;">mister-hope@outlook.co</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">m</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Date:</span><span style="color:#032F62;--shiki-dark:#98C379;">   Thu</span><span style="color:#032F62;--shiki-dark:#98C379;"> Aug</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 22</span><span style="color:#032F62;--shiki-dark:#98C379;"> 22:49:22</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 2013</span><span style="color:#032F62;--shiki-dark:#98C379;"> +0800</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    merge</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> &amp; </span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">fix</span><span style="color:#032F62;--shiki-dark:#98C379;"> hello.py</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>甚至还有人丧心病狂地把 <code>lg</code> 配置成了:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="color:#032F62;--shiki-dark:#98C379;"> config</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="color:#032F62;--shiki-dark:#98C379;"> alias.lg</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;log --color --graph --pretty=format:&#39;%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&lt;%an&gt;%Creset&#39; --abbrev-commit&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>来看看 <code>git lg</code> 的效果:</p><figure><img src="`+n+`" alt="命令 git lg 示例图" tabindex="0" loading="lazy"><figcaption>命令 git lg 示例图</figcaption></figure><p>为什么不早点告诉我? 别激动，咱不是为了多记几个英文单词嘛!</p><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h2><p>配置 Git 的时候，加上 <code>--global</code> 是针对当前用户起作用的，如果不加，那只针对当前的仓库起作用。</p><p>配置文件放哪了? 每个仓库的 Git 配置文件都放在 <code>.git/config</code> 文件中:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> cat</span><span style="color:#032F62;--shiki-dark:#98C379;"> .git/config</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">[core]</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    repositoryformatversion</span><span style="color:#032F62;--shiki-dark:#98C379;"> =</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    filemode</span><span style="color:#032F62;--shiki-dark:#98C379;"> =</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    bare</span><span style="color:#032F62;--shiki-dark:#98C379;"> =</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> false</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    logallrefupdates</span><span style="color:#032F62;--shiki-dark:#98C379;"> =</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    ignorecase</span><span style="color:#032F62;--shiki-dark:#98C379;"> =</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    precomposeunicode</span><span style="color:#032F62;--shiki-dark:#98C379;"> =</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">[remote </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;origin&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    url</span><span style="color:#032F62;--shiki-dark:#98C379;"> =</span><span style="color:#032F62;--shiki-dark:#98C379;"> git@github.com:michaelliao/learngit.git</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    fetch</span><span style="color:#032F62;--shiki-dark:#98C379;"> =</span><span style="color:#032F62;--shiki-dark:#98C379;"> +refs/heads/</span><span style="color:#005CC5;--shiki-dark:#E5C07B;">*</span><span style="color:#032F62;--shiki-dark:#98C379;">:refs/remotes/origin/</span><span style="color:#005CC5;--shiki-dark:#E5C07B;">*</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">[branch </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;master&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    remote</span><span style="color:#032F62;--shiki-dark:#98C379;"> =</span><span style="color:#032F62;--shiki-dark:#98C379;"> origin</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    merge</span><span style="color:#032F62;--shiki-dark:#98C379;"> =</span><span style="color:#032F62;--shiki-dark:#98C379;"> refs/heads/master</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">[alias]</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    last</span><span style="color:#032F62;--shiki-dark:#98C379;"> =</span><span style="color:#032F62;--shiki-dark:#98C379;"> log</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -1</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>别名就在 <code>[alias]</code> 后面，要删除别名，直接把对应的行删掉即可。</p><p>而当前用户的 Git 配置文件放在用户主目录下的一个隐藏文件 <code>.gitconfig</code> 中:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> cat</span><span style="color:#032F62;--shiki-dark:#98C379;"> .gitconfig</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">[alias]</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    co</span><span style="color:#032F62;--shiki-dark:#98C379;"> =</span><span style="color:#032F62;--shiki-dark:#98C379;"> checkout</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    ci</span><span style="color:#032F62;--shiki-dark:#98C379;"> =</span><span style="color:#032F62;--shiki-dark:#98C379;"> commit</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    br</span><span style="color:#032F62;--shiki-dark:#98C379;"> =</span><span style="color:#032F62;--shiki-dark:#98C379;"> branch</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    st</span><span style="color:#032F62;--shiki-dark:#98C379;"> =</span><span style="color:#032F62;--shiki-dark:#98C379;"> status</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">[user]</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    name</span><span style="color:#032F62;--shiki-dark:#98C379;"> =</span><span style="color:#032F62;--shiki-dark:#98C379;"> Your</span><span style="color:#032F62;--shiki-dark:#98C379;"> Name</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    email</span><span style="color:#032F62;--shiki-dark:#98C379;"> =</span><span style="color:#032F62;--shiki-dark:#98C379;"> your@email.com</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置别名也可以直接修改这个文件，如果改错了，可以删掉文件重新通过命令配置。</p><h3 id="别名小结" tabindex="-1"><a class="header-anchor" href="#别名小结"><span>别名小结</span></a></h3><ul><li>给 Git 配置好别名，就可以输入命令时偷个懒。我们鼓励偷懒。</li></ul>`,40),r=[o];function t(p,d){return a(),i("div",null,r)}const h=s(l,[["render",t],["__file","custom.html.vue"]]),F=JSON.parse('{"path":"/software/git/custom.html","title":"自定义 Git","lang":"zh-CN","frontmatter":{"date":"2020-05-05T00:00:00.000Z","title":"自定义 Git","icon":"skin","order":14,"author":"廖雪峰","category":"Git","tag":["Git","软件"],"copyright":"Copyright by 廖雪峰 Edited by Mr.Hope","description":"在安装 Git 一节中，我们已经配置了 user.name 和 user.email，实际上，Git 还有很多可配置项。 比如，让 Git 显示颜色，会让命令输出看起来更醒目: 这样，Git 会适当地显示不同的颜色，比如 git status 命令，文件名就会标上颜色。 配置别名 有没有经常敲错命令? 比如 git status? status 这个单...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/software/git/custom.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"自定义 Git"}],["meta",{"property":"og:description","content":"在安装 Git 一节中，我们已经配置了 user.name 和 user.email，实际上，Git 还有很多可配置项。 比如，让 Git 显示颜色，会让命令输出看起来更醒目: 这样，Git 会适当地显示不同的颜色，比如 git status 命令，文件名就会标上颜色。 配置别名 有没有经常敲错命令? 比如 git status? status 这个单..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:published_time","content":"2020-05-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自定义 Git\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"配置别名","slug":"配置别名","link":"#配置别名","children":[]},{"level":2,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[{"level":3,"title":"别名小结","slug":"别名小结","link":"#别名小结","children":[]}]}],"git":{"createdTime":1591291369000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":7},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3}]},"readingTime":{"minutes":2.57,"words":771},"filePathRelative":"software/git/custom.md","localizedDate":"2020年5月5日","excerpt":"","autoDesc":true}');export{h as comp,F as data};
