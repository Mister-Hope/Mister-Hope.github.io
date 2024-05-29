import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,d as l,e as s,f as a,b as r}from"./app-C6d_tW6U.js";const p={},o=s("p",null,[a("Bash 脚本有时需要创建临时文件或临时目录。常见的做法是，在 "),s("code",null,"/tmp"),a(" 目录里面创建文件或目录，这样做有很多弊端，使用 "),s("code",null,"mktemp"),a(" 命令是最安全的做法。")],-1),t=r(`<h2 id="临时文件的安全问题" tabindex="-1"><a class="header-anchor" href="#临时文件的安全问题"><span>临时文件的安全问题</span></a></h2><p>直接创建临时文件，尤其在 <code>/tmp</code> 目录里面，往往会导致安全问题。</p><p>首先，<code>/tmp</code> 目录是所有人可读写的，任何用户都可以往该目录里面写文件。创建的临时文件也是所有人可读的。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> touch</span><span style="color:#032F62;--shiki-dark:#98C379;"> /tmp/info.txt</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> ls</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -l</span><span style="color:#032F62;--shiki-dark:#98C379;"> /tmp/info.txt</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">-rw-r--r--</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="color:#032F62;--shiki-dark:#98C379;"> ruanyf</span><span style="color:#032F62;--shiki-dark:#98C379;"> ruanyf</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="color:#032F62;--shiki-dark:#98C379;"> 12月</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 28</span><span style="color:#032F62;--shiki-dark:#98C379;"> 17:12</span><span style="color:#032F62;--shiki-dark:#98C379;"> /tmp/info.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令在 <code>/tmp</code> 目录直接创建文件，该文件默认是所有人可读的。</p><p>其次，如果攻击者知道临时文件的文件名，他可以创建符号链接，链接到临时文件，可能导致系统运行异常。攻击者也可能向脚本提供一些恶意数据。因此，临时文件最好使用不可预测、每次都不一样的文件名，防止被利用。</p><p>最后，临时文件使用完毕，应该删除。但是，脚本意外退出时，往往会忽略清理临时文件。</p><p>生成临时文件应该遵循下面的规则。</p><blockquote><ul><li>创建前检查文件是否已经存在。</li><li>确保临时文件已成功创建。</li><li>临时文件必须有权限的限制。</li><li>临时文件要使用不可预测的文件名。</li><li>脚本退出时，要删除临时文件(使用 <code>trap</code> 命令)。</li></ul></blockquote><h2 id="mktemp-命令的用法" tabindex="-1"><a class="header-anchor" href="#mktemp-命令的用法"><span>mktemp 命令的用法</span></a></h2><p><code>mktemp</code> 命令就是为安全创建临时文件而设计的。虽然在创建临时文件之前，它不会检查临时文件是否存在，但是它支持唯一文件名和清除机制，因此可以减轻安全攻击的风险。</p><p>直接运行 <code>mktemp</code> 命令，就能生成一个临时文件。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> mktemp</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/tmp/tmp.4GcsWSG4vj</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> ls</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -l</span><span style="color:#032F62;--shiki-dark:#98C379;"> /tmp/tmp.4GcsWSG4vj</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">-rw-------</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="color:#032F62;--shiki-dark:#98C379;"> ruanyf</span><span style="color:#032F62;--shiki-dark:#98C379;"> ruanyf</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="color:#032F62;--shiki-dark:#98C379;"> 12月</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 28</span><span style="color:#032F62;--shiki-dark:#98C379;"> 12:49</span><span style="color:#032F62;--shiki-dark:#98C379;"> /tmp/tmp.4GcsWSG4vj</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令中，<code>mktemp</code> 命令生成的临时文件名是随机的，而且权限是只有用户本人可读写。</p><p>Bash 脚本使用 <code>mktemp</code> 命令的用法如下。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">TMPFILE</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">$(</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">mktemp</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;Our temp file is </span><span style="color:#24292E;--shiki-dark:#E06C75;">$TMPFILE</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了确保临时文件创建成功，<code>mktemp</code> 命令后面最好使用 OR 运算符 (<code>||</code>)，保证创建失败时退出脚本。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">TMPFILE</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">$(</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">mktemp</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">||</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> exit</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;Our temp file is </span><span style="color:#24292E;--shiki-dark:#E06C75;">$TMPFILE</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了保证脚本退出时临时文件被删除，可以使用 <code>trap</code> 命令指定退出时的清除操作。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">trap</span><span style="color:#032F62;--shiki-dark:#98C379;"> &#39;rm -f &quot;$TMPFILE&quot;&#39;</span><span style="color:#032F62;--shiki-dark:#98C379;"> EXIT</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">TMPFILE</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">$(</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">mktemp</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">||</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> exit</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;Our temp file is </span><span style="color:#24292E;--shiki-dark:#E06C75;">$TMPFILE</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mktemp-命令的参数" tabindex="-1"><a class="header-anchor" href="#mktemp-命令的参数"><span>mktemp 命令的参数</span></a></h2><p><code>-d</code> 参数可以创建一个临时目录。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> mktemp</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -d</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/tmp/tmp.Wcau5UjmN6</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-p</code> 参数可以指定临时文件所在的目录。默认是使用 <code>$TMPDIR</code> 环境变量指定的目录，如果这个变量没设置，那么使用 <code>/tmp</code> 目录。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> mktemp</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -p</span><span style="color:#032F62;--shiki-dark:#98C379;"> /home/ruanyf/</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/home/ruanyf/tmp.FOKEtvs2H3</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-t</code> 参数可以指定临时文件的文件名模板，模板的末尾必须至少包含三个连续的 <code>X</code> 字符，表示随机字符，建议至少使用六个 <code>X</code>。默认的文件名模板是 <code>tmp.</code> 后接十个随机字符。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> mktemp</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="color:#032F62;--shiki-dark:#98C379;"> mytemp.XXXXXXX</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">/tmp/mytemp.yZ1HgZV</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="trap-命令" tabindex="-1"><a class="header-anchor" href="#trap-命令"><span>trap 命令</span></a></h2><p><code>trap</code> 命令用来在 Bash 脚本中响应系统信号。</p><p>最常见的系统信号就是 SIGINT(中断)，即按 <code>Ctrl + C</code> 所产生的信号。<code>trap</code> 命令的 <code>-l</code> 参数，可以列出所有的系统信号。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="color:#032F62;--shiki-dark:#98C379;"> trap</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -l</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> 1</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) SIGHUP  2) SIGINT  3) SIGQUIT  4) SIGILL  5) SIGTRAP</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> 6</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) SIGABRT  7) SIGBUS  8) SIGFPE  9) SIGKILL 10) SIGUSR1</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">11</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) SIGSEGV 12) SIGUSR2 13) SIGPIPE 14) SIGALRM 15) SIGTERM</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">16</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) SIGSTKFLT 17) SIGCHLD 18) SIGCONT 19) SIGSTOP 20) SIGTSTP</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">21</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) SIGTTIN 22) SIGTTOU 23) SIGURG 24) SIGXCPU 25) SIGXFSZ</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">26</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) SIGVTALRM 27) SIGPROF 28) SIGWINCH 29) SIGIO 30) SIGPWR</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">31</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) SIGSYS 34) SIGRTMIN 35) SIGRTMIN+1 36) SIGRTMIN+2 37) SIGRTMIN+3</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">38</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) SIGRTMIN+4 39) SIGRTMIN+5 40) SIGRTMIN+6 41) SIGRTMIN+7 42) SIGRTMIN+8</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">43</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) SIGRTMIN+9 44) SIGRTMIN+10 45) SIGRTMIN+11 46) SIGRTMIN+12 47) SIGRTMIN+13</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">48</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) SIGRTMIN+14 49) SIGRTMIN+15 50) SIGRTMAX-14 51) SIGRTMAX-13 52) SIGRTMAX-12</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">53</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) SIGRTMAX-11 54) SIGRTMAX-10 55) SIGRTMAX-9 56) SIGRTMAX-8 57) SIGRTMAX-7</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">58</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) SIGRTMAX-6 59) SIGRTMAX-5 60) SIGRTMAX-4 61) SIGRTMAX-3 62) SIGRTMAX-2</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">63</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) SIGRTMAX-1 64) SIGRTMAX</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>trap</code> 的命令格式如下。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">trap</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [动作] [信号1] [信号2] ...</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，“动作”是一个 Bash 命令，“信号”常用的有以下几个。</p><blockquote><ul><li>HUP: 编号 1，脚本与所在的终端脱离联系。</li><li>INT: 编号 2，用户按下 Ctrl + C，意图让脚本中止运行。</li><li>QUIT: 编号 3，用户按下 Ctrl + 斜杠，意图退出脚本。</li><li>KILL: 编号 9，该信号用于杀死进程。</li><li>TERM: 编号 15，这是 <code>kill</code> 命令发出的默认信号。</li><li>EXIT: 编号 0，这不是系统信号，而是 Bash 脚本特有的信号，不管什么情况，只要退出脚本就会产生。</li></ul></blockquote><p><code>trap</code> 命令响应 <code>EXIT</code> 信号的写法如下。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">trap</span><span style="color:#032F62;--shiki-dark:#98C379;"> &#39;rm -f &quot;$TMPFILE&quot;&#39;</span><span style="color:#032F62;--shiki-dark:#98C379;"> EXIT</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，脚本遇到 <code>EXIT</code> 信号时，就会执行 <code>rm -f &quot;$TMPFILE&quot;</code>。</p><p>trap 命令的常见使用场景，就是在 Bash 脚本中指定退出时执行的清理命令。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">trap</span><span style="color:#032F62;--shiki-dark:#98C379;"> &#39;rm -f &quot;$TMPFILE&quot;&#39;</span><span style="color:#032F62;--shiki-dark:#98C379;"> EXIT</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">TMPFILE</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">$(</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">mktemp</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">||</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> exit</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">ls</span><span style="color:#032F62;--shiki-dark:#98C379;"> /etc</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;"> &gt;</span><span style="color:#24292E;--shiki-dark:#E06C75;"> $TMPFILE</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">if</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> grep</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -qi</span><span style="color:#032F62;--shiki-dark:#98C379;"> &quot;kernel&quot;</span><span style="color:#24292E;--shiki-dark:#E06C75;"> $TMPFILE</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="color:#D73A49;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">  echo</span><span style="color:#032F62;--shiki-dark:#98C379;"> &#39;find&#39;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">fi</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，不管是脚本正常执行结束，还是用户按 <code>Ctrl + C</code> 终止，都会产生 <code>EXIT</code> 信号，从而触发删除临时文件。</p><p>注意，<code>trap</code> 命令必须放在脚本的开头。否则，它上方的任何命令导致脚本退出，都不会被它捕获。</p><p>如果 <code>trap</code> 需要触发多条命令，可以封装一个 Bash 函数。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">function</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> egress</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  command1</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  command2</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  command3</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">trap</span><span style="color:#032F62;--shiki-dark:#98C379;"> egress</span><span style="color:#032F62;--shiki-dark:#98C379;"> EXIT</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2><ul><li><a href="https://www.putorius.net/working-with-temporary-files.html" target="_blank" rel="noopener noreferrer">Working with Temporary Files and Directories in Shell Scripts</a>, Steven Vona</li><li><a href="https://www.putorius.net/using-trap-to-exit-bash-scripts-cleanly.html" target="_blank" rel="noopener noreferrer">Using Trap to Exit Bash Scripts Cleanly</a></li><li><a href="https://mywiki.wooledge.org/SignalTrap" target="_blank" rel="noopener noreferrer">Sending and Trapping Signals</a></li></ul>`,46);function d(c,k){return i(),n("div",null,[o,l(" more "),t])}const b=e(p,[["render",d],["__file","mktemp.html.vue"]]),y=JSON.parse('{"path":"/linux/bash/mktemp.html","title":"mktemp 命令，trap 命令","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"mktemp 命令，trap 命令","icon":"shell","author":"阮一峰","category":"Linux","tag":["Bash"],"copyright":"本教程采用<a href=\\"https://creativecommons.org/licenses/by-sa/3.0/deed.zh\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">知识共享 署名-相同方式共享 3.0协议</a>","description":"Bash 脚本有时需要创建临时文件或临时目录。常见的做法是，在 /tmp 目录里面创建文件或目录，这样做有很多弊端，使用 mktemp 命令是最安全的做法。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/bash/mktemp.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"mktemp 命令，trap 命令"}],["meta",{"property":"og:description","content":"Bash 脚本有时需要创建临时文件或临时目录。常见的做法是，在 /tmp 目录里面创建文件或目录，这样做有很多弊端，使用 mktemp 命令是最安全的做法。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:tag","content":"Bash"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mktemp 命令，trap 命令\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"阮一峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"临时文件的安全问题","slug":"临时文件的安全问题","link":"#临时文件的安全问题","children":[]},{"level":2,"title":"mktemp 命令的用法","slug":"mktemp-命令的用法","link":"#mktemp-命令的用法","children":[]},{"level":2,"title":"mktemp 命令的参数","slug":"mktemp-命令的参数","link":"#mktemp-命令的参数","children":[]},{"level":2,"title":"trap 命令","slug":"trap-命令","link":"#trap-命令","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":7},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":4.9,"words":1470},"filePathRelative":"linux/bash/mktemp.md","localizedDate":"2020年5月4日","excerpt":"<p>Bash 脚本有时需要创建临时文件或临时目录。常见的做法是，在 <code>/tmp</code> 目录里面创建文件或目录，这样做有很多弊端，使用 <code>mktemp</code> 命令是最安全的做法。</p>\\n","autoDesc":true}');export{b as comp,y as data};
