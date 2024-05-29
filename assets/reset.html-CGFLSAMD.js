import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as i,b as e}from"./app-C6d_tW6U.js";const n="/assets/timeline-D7Ph1VNE.jpg",l="/assets/git1-hKWnLlXB.jpg",r="/assets/git2-Ca3SP0d1.jpg",o={},d=e(`<p>修改 readme.txt 文件如下:</p><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">Git is a distributed version control system.</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">Git is free software distributed under the GPL.</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后尝试提交:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> git</span><span style="color:#032F62;--shiki-dark:#98C379;"> add</span><span style="color:#032F62;--shiki-dark:#98C379;"> readme.txt</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># nothing displayed</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> git</span><span style="color:#032F62;--shiki-dark:#98C379;"> commit</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -m</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;append GPL&quot;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">[master 1094adb] append GPL</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> 1</span><span style="color:#032F62;--shiki-dark:#98C379;"> file</span><span style="color:#032F62;--shiki-dark:#98C379;"> changed,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="color:#032F62;--shiki-dark:#98C379;"> insertion</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">+</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="color:#032F62;--shiki-dark:#98C379;">,</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="color:#032F62;--shiki-dark:#98C379;"> deletion</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">-</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>像这样不断对文件进行修改，然后不断提交修改到版本库里，每当文件修改到一定程度的时候，就可以“保存一个快照”，这个快照在 Git 中被称为 <code>commit</code>。如果把文件改乱了，或者误删了文件，还可以从最近的一个 <code>commit</code> 恢复，然后继续工作，而不是把几个月的工作成果全部丢失。</p><p>现在，我们回顾一下 <code>readme.txt</code> 文件一共有几个版本被提交到 Git 仓库里了:</p><ul><li>版本 1: wrote a readme file</li></ul><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">Git is a version control system.</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">Git is free software.</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>版本 2: add distributed</li></ul><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">Git is a distributed version control system.</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">Git is free software.</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>版本 3: append GPL</li></ul><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">Git is a distributed version control system.</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">Git is free software distributed under the GPL.</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看版本信息" tabindex="-1"><a class="header-anchor" href="#查看版本信息"><span>查看版本信息</span></a></h2><p>版本控制系统用 <code>git log</code> 命令可以告诉我们历史记录，在 Git 中，我们查看:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> git</span><span style="color:#032F62;--shiki-dark:#98C379;"> log</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">commit</span><span style="color:#032F62;--shiki-dark:#98C379;"> 1094adb7b9b3807259d8cb349e7df1d4d6477073</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (HEAD -</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#032F62;--shiki-dark:#98C379;"> master</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Author:</span><span style="color:#032F62;--shiki-dark:#98C379;"> Michael</span><span style="color:#032F62;--shiki-dark:#98C379;"> Liao</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#032F62;--shiki-dark:#98C379;">askxuefeng@gmail.co</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">m</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Date:</span><span style="color:#032F62;--shiki-dark:#98C379;">   Fri</span><span style="color:#032F62;--shiki-dark:#98C379;"> May</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 18</span><span style="color:#032F62;--shiki-dark:#98C379;"> 21:06:15</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 2018</span><span style="color:#032F62;--shiki-dark:#98C379;"> +0800</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    append</span><span style="color:#032F62;--shiki-dark:#98C379;"> GPL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">commit</span><span style="color:#032F62;--shiki-dark:#98C379;"> e475afc93c209a690c39c13a46716e8fa000c366</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Author:</span><span style="color:#032F62;--shiki-dark:#98C379;"> Michael</span><span style="color:#032F62;--shiki-dark:#98C379;"> Liao</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#032F62;--shiki-dark:#98C379;">askxuefeng@gmail.co</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">m</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Date:</span><span style="color:#032F62;--shiki-dark:#98C379;">   Fri</span><span style="color:#032F62;--shiki-dark:#98C379;"> May</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 18</span><span style="color:#032F62;--shiki-dark:#98C379;"> 21:03:36</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 2018</span><span style="color:#032F62;--shiki-dark:#98C379;"> +0800</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    add</span><span style="color:#032F62;--shiki-dark:#98C379;"> distributed</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">commit</span><span style="color:#032F62;--shiki-dark:#98C379;"> eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Author:</span><span style="color:#032F62;--shiki-dark:#98C379;"> Michael</span><span style="color:#032F62;--shiki-dark:#98C379;"> Liao</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#032F62;--shiki-dark:#98C379;">askxuefeng@gmail.co</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">m</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Date:</span><span style="color:#032F62;--shiki-dark:#98C379;">   Fri</span><span style="color:#032F62;--shiki-dark:#98C379;"> May</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 18</span><span style="color:#032F62;--shiki-dark:#98C379;"> 20:59:18</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 2018</span><span style="color:#032F62;--shiki-dark:#98C379;"> +0800</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    wrote</span><span style="color:#032F62;--shiki-dark:#98C379;"> a</span><span style="color:#032F62;--shiki-dark:#98C379;"> readme</span><span style="color:#032F62;--shiki-dark:#98C379;"> file</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git log</code> 命令显示从最近到最远的提交日志，我们可以看到 3 次提交，最近的一次是 <code>append GPL</code>，上一次是 <code>add distributed</code>，最早的一次是 <code>wrote a readme file</code>。</p><p>如果嫌输出信息太多，看得眼花缭乱的，可以试试加上 <code>--pretty=oneline</code> 参数:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> git</span><span style="color:#032F62;--shiki-dark:#98C379;"> log</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --pretty=oneline</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">1094adb7b9b3807259d8cb349e7df1d4d6477073</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (HEAD -</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#032F62;--shiki-dark:#98C379;"> master</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) append GPL</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">e475afc93c209a690c39c13a46716e8fa000c366</span><span style="color:#032F62;--shiki-dark:#98C379;"> add</span><span style="color:#032F62;--shiki-dark:#98C379;"> distributed</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0</span><span style="color:#032F62;--shiki-dark:#98C379;"> wrote</span><span style="color:#032F62;--shiki-dark:#98C379;"> a</span><span style="color:#032F62;--shiki-dark:#98C379;"> readme</span><span style="color:#032F62;--shiki-dark:#98C379;"> file</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一大串类似 <code>1094adb...</code> 的是 commit id (版本号)，和 SVN 不一样，Git 的 commit id 不是 1，2，3…… 递增的数字，而是一个 SHA1 计算出来的一个非常大的数字，用十六进制表示，为什么 commit id 需要用这么一大串数字表示呢? 因为 Git 是分布式的版本控制系统，多人在同一个版本库里工作，如果大家都用 1，2，3…… 作为版本号，那肯定就冲突了。</p><p>每提交一个新版本，实际上 Git 就会把它们自动串成一条时间线。如果使用可视化工具查看 Git 历史，就可以更清楚地看到提交历史的时间线:</p><figure><img src="`+n+`" alt="Git 时间线" tabindex="0" loading="lazy"><figcaption>Git 时间线</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">更多选项</p><p>关于 <code>git log</code> 的更多选项，请见 <a href="/file/git/progit_v2.1.45.pdf">ProGit 书籍</a> 的 P43。</p></div><h2 id="回退版本" tabindex="-1"><a class="header-anchor" href="#回退版本"><span>回退版本</span></a></h2><p>好了，现在准备把 readme.txt 回退到上一个版本，也就是 <code>add distributed</code> 的那个版本，怎么做呢?</p><p>首先，Git 必须知道当前版本是哪个版本，在 Git 中，用 <code>HEAD</code> 表示当前版本，也就是最新的提交 <code>1094adb...</code> (注意我的提交 ID 和您的肯定不一样)，上一个版本就是 <code>HEAD^</code>，上上一个版本就是 <code>HEAD^^</code>，当然往上 100 个版本写 100 个 <code>^</code> 比较容易数不过来，所以写成 <code>HEAD~100</code>。</p><p>现在，要把当前版本 <code>append GPL</code> 回退到上一个版本 <code>add distributed</code>，就可以使用 <code>git reset</code> 命令:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> git</span><span style="color:#032F62;--shiki-dark:#98C379;"> reset</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --hard</span><span style="color:#032F62;--shiki-dark:#98C379;"> HEAD^</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">HEAD</span><span style="color:#032F62;--shiki-dark:#98C379;"> is</span><span style="color:#032F62;--shiki-dark:#98C379;"> now</span><span style="color:#032F62;--shiki-dark:#98C379;"> at</span><span style="color:#032F62;--shiki-dark:#98C379;"> e475afc</span><span style="color:#032F62;--shiki-dark:#98C379;"> add</span><span style="color:#032F62;--shiki-dark:#98C379;"> distributed</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>看看 readme.txt 的内容是不是版本 add distributed:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> cat</span><span style="color:#032F62;--shiki-dark:#98C379;"> readme.txt</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Git</span><span style="color:#032F62;--shiki-dark:#98C379;"> is</span><span style="color:#032F62;--shiki-dark:#98C379;"> a</span><span style="color:#032F62;--shiki-dark:#98C379;"> distributed</span><span style="color:#032F62;--shiki-dark:#98C379;"> version</span><span style="color:#032F62;--shiki-dark:#98C379;"> control</span><span style="color:#032F62;--shiki-dark:#98C379;"> system.</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Git</span><span style="color:#032F62;--shiki-dark:#98C379;"> is</span><span style="color:#032F62;--shiki-dark:#98C379;"> free</span><span style="color:#032F62;--shiki-dark:#98C379;"> software.</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>果然被还原了。</p><p>还可以继续回退到上一个版本 wrote a readme file，不过且慢，然我们用 <code>git log</code> 再看看现在版本库的状态:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> git</span><span style="color:#032F62;--shiki-dark:#98C379;"> log</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">commit</span><span style="color:#032F62;--shiki-dark:#98C379;"> e475afc93c209a690c39c13a46716e8fa000c366</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (HEAD -</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#032F62;--shiki-dark:#98C379;"> master</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Author:</span><span style="color:#032F62;--shiki-dark:#98C379;"> Michael</span><span style="color:#032F62;--shiki-dark:#98C379;"> Liao</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#032F62;--shiki-dark:#98C379;">askxuefeng@gmail.co</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">m</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Date:</span><span style="color:#032F62;--shiki-dark:#98C379;">   Fri</span><span style="color:#032F62;--shiki-dark:#98C379;"> May</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 18</span><span style="color:#032F62;--shiki-dark:#98C379;"> 21:03:36</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 2018</span><span style="color:#032F62;--shiki-dark:#98C379;"> +0800</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    add</span><span style="color:#032F62;--shiki-dark:#98C379;"> distributed</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">commit</span><span style="color:#032F62;--shiki-dark:#98C379;"> eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Author:</span><span style="color:#032F62;--shiki-dark:#98C379;"> Michael</span><span style="color:#032F62;--shiki-dark:#98C379;"> Liao</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#032F62;--shiki-dark:#98C379;">askxuefeng@gmail.co</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">m</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Date:</span><span style="color:#032F62;--shiki-dark:#98C379;">   Fri</span><span style="color:#032F62;--shiki-dark:#98C379;"> May</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 18</span><span style="color:#032F62;--shiki-dark:#98C379;"> 20:59:18</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 2018</span><span style="color:#032F62;--shiki-dark:#98C379;"> +0800</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">    wrote</span><span style="color:#032F62;--shiki-dark:#98C379;"> a</span><span style="color:#032F62;--shiki-dark:#98C379;"> readme</span><span style="color:#032F62;--shiki-dark:#98C379;"> file</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最新的那个版本 append GPL 已经看不到了! 肿么办?</p><p>办法其实还是有的，只要上面的命令行窗口还没有被关掉，您就可以顺着往上找啊找啊，找到那个 append GPL 的 commit id 是 1094adb...，于是就可以指定回到未来的某个版本:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> git</span><span style="color:#032F62;--shiki-dark:#98C379;"> reset</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> --hard</span><span style="color:#032F62;--shiki-dark:#98C379;"> 1094a</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">HEAD</span><span style="color:#032F62;--shiki-dark:#98C379;"> is</span><span style="color:#032F62;--shiki-dark:#98C379;"> now</span><span style="color:#032F62;--shiki-dark:#98C379;"> at</span><span style="color:#032F62;--shiki-dark:#98C379;"> 83b0afe</span><span style="color:#032F62;--shiki-dark:#98C379;"> append</span><span style="color:#032F62;--shiki-dark:#98C379;"> GPL</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>版本号没必要写全，前几位就可以了，Git 会自动去找。当然也不能只写前一两位，因为 Git 可能会找到多个版本号，就无法确定是哪一个了。</p><p>再小心翼翼地看看 readme.txt 的内容:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> cat</span><span style="color:#032F62;--shiki-dark:#98C379;"> readme.txt</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Git</span><span style="color:#032F62;--shiki-dark:#98C379;"> is</span><span style="color:#032F62;--shiki-dark:#98C379;"> a</span><span style="color:#032F62;--shiki-dark:#98C379;"> distributed</span><span style="color:#032F62;--shiki-dark:#98C379;"> version</span><span style="color:#032F62;--shiki-dark:#98C379;"> control</span><span style="color:#032F62;--shiki-dark:#98C379;"> system.</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">Git</span><span style="color:#032F62;--shiki-dark:#98C379;"> is</span><span style="color:#032F62;--shiki-dark:#98C379;"> free</span><span style="color:#032F62;--shiki-dark:#98C379;"> software</span><span style="color:#032F62;--shiki-dark:#98C379;"> distributed</span><span style="color:#032F62;--shiki-dark:#98C379;"> under</span><span style="color:#032F62;--shiki-dark:#98C379;"> the</span><span style="color:#032F62;--shiki-dark:#98C379;"> GPL.</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>果然，我胡汉三又回来了。</p><p>Git 的版本回退速度非常快，因为 Git 在内部有个指向当前版本的 <code>HEAD</code> 指针，当您回退版本的时候，Git 仅仅是把 <code>HEAD</code> 从指向 append GPL:</p><figure><img src="`+l+'" alt="示例图4" tabindex="0" loading="lazy"><figcaption>示例图4</figcaption></figure><p>改为指向 <code>add distributed</code>:</p><figure><img src="'+r+`" alt="示例图5" tabindex="0" loading="lazy"><figcaption>示例图5</figcaption></figure><p>然后顺便把工作区的文件更新了。所以您让 <code>HEAD</code> 指向哪个版本号，您就把当前版本定位在哪。</p><h2 id="找回-commit-id" tabindex="-1"><a class="header-anchor" href="#找回-commit-id"><span>找回 commit id</span></a></h2><p>如果回退到了某个版本找不到新版本的 <code>commit id</code>，在 Git 中，就无法用 <code>$ git reset --hard HEAD^</code> 回退。</p><p>所以 Git 提供了一个命令 <code>git reflog</code> 用来记录您的每一次命令:</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> git</span><span style="color:#032F62;--shiki-dark:#98C379;"> reflog</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">e475afc</span><span style="color:#032F62;--shiki-dark:#98C379;"> HEAD@{</span><span style="color:#005CC5;--shiki-dark:#D19A66;">1</span><span style="color:#032F62;--shiki-dark:#98C379;">}:</span><span style="color:#032F62;--shiki-dark:#98C379;"> reset:</span><span style="color:#032F62;--shiki-dark:#98C379;"> moving</span><span style="color:#032F62;--shiki-dark:#98C379;"> to</span><span style="color:#032F62;--shiki-dark:#98C379;"> HEAD^</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">1094adb</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (HEAD -</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#032F62;--shiki-dark:#98C379;"> master</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) HEAD@{</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">2}:</span><span style="color:#032F62;--shiki-dark:#98C379;"> commit:</span><span style="color:#032F62;--shiki-dark:#98C379;"> append</span><span style="color:#032F62;--shiki-dark:#98C379;"> GPL</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">e475afc</span><span style="color:#032F62;--shiki-dark:#98C379;"> HEAD@{</span><span style="color:#005CC5;--shiki-dark:#D19A66;">3</span><span style="color:#032F62;--shiki-dark:#98C379;">}:</span><span style="color:#032F62;--shiki-dark:#98C379;"> commit:</span><span style="color:#032F62;--shiki-dark:#98C379;"> add</span><span style="color:#032F62;--shiki-dark:#98C379;"> distributed</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">eaadf4e</span><span style="color:#032F62;--shiki-dark:#98C379;"> HEAD@{</span><span style="color:#005CC5;--shiki-dark:#D19A66;">4</span><span style="color:#032F62;--shiki-dark:#98C379;">}:</span><span style="color:#032F62;--shiki-dark:#98C379;"> commit</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (initial): wrote a readme file</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> git</span><span style="color:#032F62;--shiki-dark:#98C379;"> reflog</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">e475afc</span><span style="color:#032F62;--shiki-dark:#98C379;"> HEAD@{</span><span style="color:#005CC5;--shiki-dark:#D19A66;">1</span><span style="color:#032F62;--shiki-dark:#98C379;">}:</span><span style="color:#032F62;--shiki-dark:#98C379;"> reset:</span><span style="color:#032F62;--shiki-dark:#98C379;"> moving</span><span style="color:#032F62;--shiki-dark:#98C379;"> to</span><span style="color:#032F62;--shiki-dark:#98C379;"> HEAD^</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">1094adb</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (HEAD -</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#032F62;--shiki-dark:#98C379;"> master</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) HEAD@{</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">2}:</span><span style="color:#032F62;--shiki-dark:#98C379;"> commit:</span><span style="color:#032F62;--shiki-dark:#98C379;"> append</span><span style="color:#032F62;--shiki-dark:#98C379;"> GPL</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">e475afc</span><span style="color:#032F62;--shiki-dark:#98C379;"> HEAD@{</span><span style="color:#005CC5;--shiki-dark:#D19A66;">3</span><span style="color:#032F62;--shiki-dark:#98C379;">}:</span><span style="color:#032F62;--shiki-dark:#98C379;"> commit:</span><span style="color:#032F62;--shiki-dark:#98C379;"> add</span><span style="color:#032F62;--shiki-dark:#98C379;"> distributed</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">eaadf4e</span><span style="color:#032F62;--shiki-dark:#98C379;"> HEAD@{</span><span style="color:#005CC5;--shiki-dark:#D19A66;">4</span><span style="color:#032F62;--shiki-dark:#98C379;">}:</span><span style="color:#032F62;--shiki-dark:#98C379;"> commit</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (initial): wrote a readme file</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>终于舒了口气，从输出可知，append GPL 的 commit id 是 1094adb，现在，您又可以乘坐时光机回到未来了。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><ul><li><p><code>HEAD</code> 指向的版本就是当前版本，因此，Git 允许我们在版本的历史之间穿梭，使用命令 <code>git reset --hard commit_id</code>。</p></li><li><p>用 <code>git log</code> 可以查看提交历史，以便确定要回退到哪个版本。</p></li><li><p>用 <code>git reflog</code> 查看命令历史，以便确定要回到未来的哪个版本。</p></li></ul>`,52),p=[d];function t(c,k){return a(),i("div",null,p)}const y=s(o,[["render",t],["__file","reset.html.vue"]]),m=JSON.parse('{"path":"/software/git/reset.html","title":"版本回退","lang":"zh-CN","frontmatter":{"date":"2020-05-05T00:00:00.000Z","title":"版本回退","icon":"return","order":6,"author":"廖雪峰","category":"Git","tag":["Git","软件"],"copyright":"Copyright by 廖雪峰 Edited by Mr.Hope","description":"修改 readme.txt 文件如下: 然后尝试提交: 像这样不断对文件进行修改，然后不断提交修改到版本库里，每当文件修改到一定程度的时候，就可以“保存一个快照”，这个快照在 Git 中被称为 commit。如果把文件改乱了，或者误删了文件，还可以从最近的一个 commit 恢复，然后继续工作，而不是把几个月的工作成果全部丢失。 现在，我们回顾一下 r...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/software/git/reset.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"版本回退"}],["meta",{"property":"og:description","content":"修改 readme.txt 文件如下: 然后尝试提交: 像这样不断对文件进行修改，然后不断提交修改到版本库里，每当文件修改到一定程度的时候，就可以“保存一个快照”，这个快照在 Git 中被称为 commit。如果把文件改乱了，或者误删了文件，还可以从最近的一个 commit 恢复，然后继续工作，而不是把几个月的工作成果全部丢失。 现在，我们回顾一下 r..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:published_time","content":"2020-05-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"版本回退\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"查看版本信息","slug":"查看版本信息","link":"#查看版本信息","children":[]},{"level":2,"title":"回退版本","slug":"回退版本","link":"#回退版本","children":[]},{"level":2,"title":"找回 commit id","slug":"找回-commit-id","link":"#找回-commit-id","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":9},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":4.94,"words":1481},"filePathRelative":"software/git/reset.md","localizedDate":"2020年5月5日","excerpt":"","autoDesc":true}');export{y as comp,m as data};
