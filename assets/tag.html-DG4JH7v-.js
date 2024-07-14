import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,b as e}from"./app-DHOHoluL.js";const l={},o=e(`<h2 id="为什么要有-tag" tabindex="-1"><a class="header-anchor" href="#为什么要有-tag"><span>为什么要有 tag</span></a></h2><p>发布一个版本时，我们通常先在版本库中打一个标签 (<code>tag</code>)，这样，就唯一确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照。</p><p>Git 的标签虽然是版本库的快照，但其实它就是指向某个 <code>commit</code> 的指针(跟分支很像对不对? 但是分支可以移动，标签不能移动)，所以，创建和删除标签都是瞬间完成的。</p><p>Git 有 <code>commit</code>，为什么还要引入 <code>tag</code>?</p><p>“请把上周一的那个版本打包发布，<code>commit</code> 号是 6a5819e...”</p><p>“一串乱七八糟的数字不好找! ”</p><p>如果换一个办法:</p><p>“请把上周一的那个版本打包发布，版本号是 <code>v1.2</code>”</p><p>“好的，按照 <code>tag v1.2</code> 查找 <code>commit</code> 就行! ”</p><p>所以，<code>tag</code> 就是一个让人容易记住的有意义的名字，它跟某个 <code>commit</code> 绑在一起。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>推荐的标签规范是以小写字母 <code>v</code> 开头，后接 <code>x.x</code> 或 <code>x.x.x</code> 等若干位版本号。</p></div><h2 id="创建轻量标签" tabindex="-1"><a class="header-anchor" href="#创建轻量标签"><span>创建轻量标签</span></a></h2><p>在 Git 中打标签非常简单，首先，切换到需要打标签的分支上:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> git</span><span style="color:#A3BE8C;"> branch</span></span>
<span class="line"><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;"> dev</span></span>
<span class="line"><span style="color:#88C0D0;">  master</span></span>
<span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> git</span><span style="color:#A3BE8C;"> checkout</span><span style="color:#A3BE8C;"> master</span></span>
<span class="line"><span style="color:#88C0D0;">Switched</span><span style="color:#A3BE8C;"> to</span><span style="color:#A3BE8C;"> branch</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">master</span><span style="color:#ECEFF4;">&#39;</span></span></code></pre></div><p>然后，敲命令 <code>git tag &lt;name&gt;</code> 就可以打一个新标签:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> git</span><span style="color:#A3BE8C;"> tag</span><span style="color:#A3BE8C;"> v1.0</span></span>
<span class="line"><span style="color:#88C0D0;">--</span><span style="color:#A3BE8C;"> no</span><span style="color:#A3BE8C;"> output</span><span style="color:#A3BE8C;"> --</span></span></code></pre></div><p>可以用命令 <code>git tag</code> 查看所有标签:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> git</span><span style="color:#A3BE8C;"> tag</span></span>
<span class="line"><span style="color:#88C0D0;">v1.0</span></span></code></pre></div><p>默认标签是打在最新提交的 <code>commit</code> 上的。有时候，如果忘了打标签，比如，现在已经是周五了，但应该在周一打的标签没有打，怎么办?</p><p>方法是找到历史提交的 <code>commit id</code>，然后打上就可以了:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> git</span><span style="color:#A3BE8C;"> log</span><span style="color:#A3BE8C;"> --pretty=oneline</span><span style="color:#A3BE8C;"> --abbrev-commit</span></span>
<span class="line"><span style="color:#88C0D0;">12a631b</span><span style="color:#D8DEE9FF;"> (HEAD -</span><span style="color:#81A1C1;">&gt;</span><span style="color:#A3BE8C;"> master,</span><span style="color:#A3BE8C;"> tag:</span><span style="color:#A3BE8C;"> v1.0,</span><span style="color:#A3BE8C;"> origin/master</span><span style="color:#D8DEE9FF;">) merged bug fix 101</span></span>
<span class="line"><span style="color:#88C0D0;">4c805e2</span><span style="color:#A3BE8C;"> fix</span><span style="color:#A3BE8C;"> bug</span><span style="color:#B48EAD;"> 101</span></span>
<span class="line"><span style="color:#88C0D0;">e1e9c68</span><span style="color:#A3BE8C;"> merge</span><span style="color:#A3BE8C;"> with</span><span style="color:#A3BE8C;"> no-ff</span></span>
<span class="line"><span style="color:#88C0D0;">f52c633</span><span style="color:#A3BE8C;"> add</span><span style="color:#A3BE8C;"> merge</span></span>
<span class="line"><span style="color:#88C0D0;">cf810e4</span><span style="color:#A3BE8C;"> conflict</span><span style="color:#A3BE8C;"> fixed</span></span>
<span class="line"><span style="color:#88C0D0;">5dc6824</span><span style="color:#ECEFF4;"> &amp;</span><span style="color:#88C0D0;"> simple</span></span>
<span class="line"><span style="color:#88C0D0;">14096d0</span><span style="color:#A3BE8C;"> AND</span><span style="color:#A3BE8C;"> simple</span></span>
<span class="line"><span style="color:#88C0D0;">b17d20e</span><span style="color:#A3BE8C;"> branch</span><span style="color:#A3BE8C;"> test</span></span>
<span class="line"><span style="color:#88C0D0;">d46f35e</span><span style="color:#A3BE8C;"> remove</span><span style="color:#A3BE8C;"> test.txt</span></span>
<span class="line"><span style="color:#88C0D0;">b84166e</span><span style="color:#A3BE8C;"> add</span><span style="color:#A3BE8C;"> test.txt</span></span>
<span class="line"><span style="color:#88C0D0;">519219b</span><span style="color:#A3BE8C;"> git</span><span style="color:#A3BE8C;"> tracks</span><span style="color:#A3BE8C;"> changes</span></span>
<span class="line"><span style="color:#88C0D0;">e43a48b</span><span style="color:#A3BE8C;"> understand</span><span style="color:#A3BE8C;"> how</span><span style="color:#A3BE8C;"> stage</span><span style="color:#A3BE8C;"> works</span></span>
<span class="line"><span style="color:#88C0D0;">1094adb</span><span style="color:#A3BE8C;"> append</span><span style="color:#A3BE8C;"> GPL</span></span>
<span class="line"><span style="color:#88C0D0;">e475afc</span><span style="color:#A3BE8C;"> add</span><span style="color:#A3BE8C;"> distributed</span></span>
<span class="line"><span style="color:#88C0D0;">eaadf4e</span><span style="color:#A3BE8C;"> wrote</span><span style="color:#A3BE8C;"> a</span><span style="color:#A3BE8C;"> readme</span><span style="color:#A3BE8C;"> file</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比方说要对 <code>add merge</code> 这次提交打标签，它对应的 <code>commit id</code> 是 <code>f52c633</code>，敲入命令:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> git</span><span style="color:#A3BE8C;"> tag</span><span style="color:#A3BE8C;"> v0.9</span><span style="color:#A3BE8C;"> f52c633</span></span>
<span class="line"><span style="color:#88C0D0;">--no</span><span style="color:#A3BE8C;"> output</span><span style="color:#A3BE8C;"> --</span></span></code></pre></div><p>再用命令 <code>git tag</code> 查看标签:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> git</span><span style="color:#A3BE8C;"> tag</span></span>
<span class="line"><span style="color:#88C0D0;">v0.9</span></span>
<span class="line"><span style="color:#88C0D0;">v1.0</span></span></code></pre></div><p>注意，标签不是按时间顺序列出，而是按字母排序的。可以用 <code>git show &lt;tagname&gt;</code> 查看标签信息:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> git</span><span style="color:#A3BE8C;"> show</span><span style="color:#A3BE8C;"> v0.9</span></span>
<span class="line"><span style="color:#88C0D0;">commit</span><span style="color:#A3BE8C;"> f52c63349bc3c1593499807e5c8e972b82c8f286</span><span style="color:#D8DEE9FF;"> (tag: </span><span style="color:#A3BE8C;">v0.9</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#88C0D0;">Author:</span><span style="color:#A3BE8C;"> Michael</span><span style="color:#A3BE8C;"> Liao</span><span style="color:#81A1C1;"> &lt;</span><span style="color:#A3BE8C;">askxuefeng@gmail.co</span><span style="color:#D8DEE9FF;">m</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#88C0D0;">Date:</span><span style="color:#A3BE8C;">   Fri</span><span style="color:#A3BE8C;"> May</span><span style="color:#B48EAD;"> 18</span><span style="color:#A3BE8C;"> 21:56:54</span><span style="color:#B48EAD;"> 2018</span><span style="color:#A3BE8C;"> +0800</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">    add</span><span style="color:#A3BE8C;"> merge</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">diff</span><span style="color:#A3BE8C;"> --git</span><span style="color:#A3BE8C;"> a/readme.txt</span><span style="color:#A3BE8C;"> b/readme.txt</span></span>
<span class="line"><span style="color:#88C0D0;">...</span></span></code></pre></div><p>可以看到，<code>v0.9</code> 确实打在 <code>add merge</code> 这次提交上。</p><h2 id="附注标签" tabindex="-1"><a class="header-anchor" href="#附注标签"><span>附注标签</span></a></h2><p>Git 还可以创建带有说明的标签，用 <code>-a</code> 指定标签名，<code>-m</code> 指定说明文字:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> git</span><span style="color:#A3BE8C;"> tag</span><span style="color:#A3BE8C;"> -a</span><span style="color:#A3BE8C;"> v0.1</span><span style="color:#A3BE8C;"> -m</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">version 0.1 released</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;"> 1094adb</span></span>
<span class="line"><span style="color:#88C0D0;">--no</span><span style="color:#A3BE8C;"> output</span><span style="color:#A3BE8C;"> --</span></span></code></pre></div><p>用命令 <code>git show &lt;tagname&gt;</code> 可以看到说明文字:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> git</span><span style="color:#A3BE8C;"> show</span><span style="color:#A3BE8C;"> v0.1</span></span>
<span class="line"><span style="color:#88C0D0;">tag</span><span style="color:#A3BE8C;"> v0.1</span></span>
<span class="line"><span style="color:#88C0D0;">Tagger:</span><span style="color:#A3BE8C;"> Michael</span><span style="color:#A3BE8C;"> Liao</span><span style="color:#81A1C1;"> &lt;</span><span style="color:#A3BE8C;">askxuefeng@gmail.co</span><span style="color:#D8DEE9FF;">m</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#88C0D0;">Date:</span><span style="color:#A3BE8C;">   Fri</span><span style="color:#A3BE8C;"> May</span><span style="color:#B48EAD;"> 18</span><span style="color:#A3BE8C;"> 22:48:43</span><span style="color:#B48EAD;"> 2018</span><span style="color:#A3BE8C;"> +0800</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">version</span><span style="color:#B48EAD;"> 0.1</span><span style="color:#A3BE8C;"> released</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">commit</span><span style="color:#A3BE8C;"> 1094adb7b9b3807259d8cb349e7df1d4d6477073</span><span style="color:#D8DEE9FF;"> (tag: </span><span style="color:#A3BE8C;">v0.1</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#88C0D0;">Author:</span><span style="color:#A3BE8C;"> Michael</span><span style="color:#A3BE8C;"> Liao</span><span style="color:#81A1C1;"> &lt;</span><span style="color:#A3BE8C;">askxuefeng@gmail.co</span><span style="color:#D8DEE9FF;">m</span><span style="color:#81A1C1;">&gt;</span></span>
<span class="line"><span style="color:#88C0D0;">Date:</span><span style="color:#A3BE8C;">   Fri</span><span style="color:#A3BE8C;"> May</span><span style="color:#B48EAD;"> 18</span><span style="color:#A3BE8C;"> 21:06:15</span><span style="color:#B48EAD;"> 2018</span><span style="color:#A3BE8C;"> +0800</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">    append</span><span style="color:#A3BE8C;"> GPL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">diff</span><span style="color:#A3BE8C;"> --git</span><span style="color:#A3BE8C;"> a/readme.txt</span><span style="color:#A3BE8C;"> b/readme.txt</span></span>
<span class="line"><span style="color:#88C0D0;">...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>标签总是和某个 commit 挂钩。如果这个 commit 既出现在 master 分支，又出现在 dev 分支，那么在这两个分支上都可以看到这个标签。</p></div><h3 id="添加小结" tabindex="-1"><a class="header-anchor" href="#添加小结"><span>添加小结</span></a></h3><p>命令 <code>git tag &lt;tagname&gt;</code> 用于新建一个标签，默认为 <code>HEAD</code>，也可以指定一个 <code>commit id</code>；</p><p>命令 <code>git tag -a &lt;tagname&gt; -m &quot;blablabla...&quot;</code> 可以指定标签信息；</p><p>命令 <code>git tag</code> 可以查看所有标签。</p><h2 id="操作标签" tabindex="-1"><a class="header-anchor" href="#操作标签"><span>操作标签</span></a></h2><p>如果标签打错了，也可以删除:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> git</span><span style="color:#A3BE8C;"> tag</span><span style="color:#A3BE8C;"> -d</span><span style="color:#A3BE8C;"> v0.1</span></span>
<span class="line"><span style="color:#88C0D0;">Deleted</span><span style="color:#A3BE8C;"> tag</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">v0.1</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;"> (was </span><span style="color:#A3BE8C;">f15b0dd</span><span style="color:#D8DEE9FF;">)</span><span style="color:#EBCB8B;">\\</span></span></code></pre></div><p>因为创建的标签都只存储在本地，不会自动推送到远程。所以，打错的标签可以在本地安全删除。</p><p>如果要推送某个标签到远程，使用命令 <code>git push origin &lt;tagname&gt;</code>:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> git</span><span style="color:#A3BE8C;"> push</span><span style="color:#A3BE8C;"> origin</span><span style="color:#A3BE8C;"> v1.0</span></span>
<span class="line"><span style="color:#88C0D0;">Total</span><span style="color:#B48EAD;"> 0</span><span style="color:#D8DEE9FF;"> (delta </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">), reused 0 (</span><span style="color:#88C0D0;">delta</span><span style="color:#B48EAD;"> 0</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#88C0D0;">To</span><span style="color:#A3BE8C;"> github.com:Hope-Studio/learngit.git</span></span>
<span class="line"><span style="color:#88C0D0;"> *</span><span style="color:#D8DEE9FF;"> [new </span><span style="color:#A3BE8C;">tag]</span><span style="color:#A3BE8C;">         v1.0</span><span style="color:#D8DEE9FF;"> -</span><span style="color:#81A1C1;">&gt;</span><span style="color:#A3BE8C;"> v1.0</span></span></code></pre></div><p>或者，一次性推送全部尚未推送到远程的本地标签:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> git</span><span style="color:#A3BE8C;"> push</span><span style="color:#A3BE8C;"> origin</span><span style="color:#A3BE8C;"> --tags</span></span>
<span class="line"><span style="color:#88C0D0;">Total</span><span style="color:#B48EAD;"> 0</span><span style="color:#D8DEE9FF;"> (delta </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">), reused 0 (</span><span style="color:#88C0D0;">delta</span><span style="color:#B48EAD;"> 0</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#88C0D0;">To</span><span style="color:#A3BE8C;"> github.com:Hope-Studio/learngit.git</span></span>
<span class="line"><span style="color:#88C0D0;"> *</span><span style="color:#D8DEE9FF;"> [new </span><span style="color:#A3BE8C;">tag]</span><span style="color:#A3BE8C;">         v0.9</span><span style="color:#D8DEE9FF;"> -</span><span style="color:#81A1C1;">&gt;</span><span style="color:#A3BE8C;"> v0.9</span></span></code></pre></div><p>如果标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> git</span><span style="color:#A3BE8C;"> tag</span><span style="color:#A3BE8C;"> -d</span><span style="color:#A3BE8C;"> v0.9</span></span>
<span class="line"><span style="color:#88C0D0;">Deleted</span><span style="color:#A3BE8C;"> tag</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">v0.9</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;"> (was </span><span style="color:#A3BE8C;">f52c633</span><span style="color:#D8DEE9FF;">)</span></span></code></pre></div><p>然后，从远程删除。删除命令也是 push，但是格式如下:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">$</span><span style="color:#A3BE8C;"> git</span><span style="color:#A3BE8C;"> push</span><span style="color:#A3BE8C;"> origin</span><span style="color:#A3BE8C;"> :refs/tags/v0.9</span></span>
<span class="line"><span style="color:#88C0D0;">To</span><span style="color:#A3BE8C;"> github.com:Hope-Studio/learngit.git</span></span>
<span class="line"><span style="color:#88C0D0;"> -</span><span style="color:#D8DEE9FF;"> [deleted]         v0.9</span></span></code></pre></div><p>要看看是否真的从远程库删除了标签，可以登陆 GitHub 查看。</p><h3 id="管理标签小结" tabindex="-1"><a class="header-anchor" href="#管理标签小结"><span>管理标签小结</span></a></h3><ul><li><p>命令 <code>git push origin &lt;tagname&gt;</code> 可以推送一个本地标签；</p></li><li><p>命令 <code>git push origin --tags</code> 可以推送全部未推送过的本地标签；</p></li><li><p>命令 <code>git tag -d &lt;tagname&gt;</code> 可以删除一个本地标签；</p></li><li><p>命令 <code>git push origin :refs/tags/&lt;tagname&gt;</code> 可以删除一个远程标签。</p></li></ul>`,53),p=[o];function t(c,r){return a(),n("div",null,p)}const y=s(l,[["render",t],["__file","tag.html.vue"]]),C=JSON.parse('{"path":"/software/git/tag.html","title":"标签管理","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"标签管理","icon":"tag","order":11,"author":"廖雪峰","category":"Git","tag":["Git","软件"],"copyright":"Copyright by 廖雪峰 Edited by Mr.Hope","description":"为什么要有 tag 发布一个版本时，我们通常先在版本库中打一个标签 (tag)，这样，就唯一确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照。 Git 的标签虽然是版本库的快照，但其实它就是指向某个 commit 的指针(跟分支很像对不对? 但是分支可以移动，标签不能移动...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/software/git/tag.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"标签管理"}],["meta",{"property":"og:description","content":"为什么要有 tag 发布一个版本时，我们通常先在版本库中打一个标签 (tag)，这样，就唯一确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照。 Git 的标签虽然是版本库的快照，但其实它就是指向某个 commit 的指针(跟分支很像对不对? 但是分支可以移动，标签不能移动..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"标签管理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"为什么要有 tag","slug":"为什么要有-tag","link":"#为什么要有-tag","children":[]},{"level":2,"title":"创建轻量标签","slug":"创建轻量标签","link":"#创建轻量标签","children":[]},{"level":2,"title":"附注标签","slug":"附注标签","link":"#附注标签","children":[{"level":3,"title":"添加小结","slug":"添加小结","link":"#添加小结","children":[]}]},{"level":2,"title":"操作标签","slug":"操作标签","link":"#操作标签","children":[{"level":3,"title":"管理标签小结","slug":"管理标签小结","link":"#管理标签小结","children":[]}]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":11},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":3.99,"words":1197},"filePathRelative":"software/git/tag.md","localizedDate":"2020年5月4日","excerpt":"","autoDesc":true}');export{y as comp,C as data};
