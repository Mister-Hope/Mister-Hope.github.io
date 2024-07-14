import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,b as o}from"./app-DHOHoluL.js";const n={},l=o(`<h2 id="session" tabindex="-1"><a class="header-anchor" href="#session"><span>Session</span></a></h2><p>用户每次使用 Shell，都会开启一个与 Shell 的 Session(对话)。</p><p>Session 有两种类型: 登录 Session 和非登录 Session，也可以叫做 login shell 和 non-login shell。</p><h3 id="登录-session" tabindex="-1"><a class="header-anchor" href="#登录-session"><span>登录 Session</span></a></h3><p>登录 Session 是用户登录系统以后，系统为用户开启的原始 Session，通常需要用户输入用户名和密码进行登录。</p><p>登录 Session 一般进行整个系统环境的初始化，启动的初始化脚本依次如下。</p><ul><li><code>/etc/profile</code>: 所有用户的全局配置脚本。</li><li><code>/etc/profile.d</code> 目录里面所有 <code>.sh</code> 文件</li><li><code>~/.bash_profile</code>: 用户的个人配置脚本。如果该脚本存在，则执行完就不再往下执行。</li><li><code>~/.bash_login</code>: 如果 <code>~/.bash_profile</code> 没找到，则尝试执行这个脚本(C shell 的初始化脚本)。如果该脚本存在，则执行完就不再往下执行。</li><li><code>~/.profile</code>: 如果<code>~/.bash_profile</code> 和 <code>~/.bash_login</code> 都没找到，则尝试读取这个脚本(Bourne shell 和 Korn shell 的初始化脚本)。</li></ul><p>Linux 发行版更新的时候，会更新 <code>/etc</code> 里面的文件，比如 <code>/etc/profile</code>，因此不要直接修改这个文件。如果想修改所有用户的登陆环境，就在 <code>/etc/profile.d</code> 目录里面新建 <code>.sh</code> 脚本。</p><p>如果想修改您个人的登录环境，一般是写在 <code>~/.bash_profile</code> 里面。下面是一个典型的 <code>.bash_profile</code> 文件。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;"># .bash_profile</span></span>
<span class="line"><span style="color:#D8DEE9;">PATH</span><span style="color:#81A1C1;">=</span><span style="color:#A3BE8C;">/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/bin</span></span>
<span class="line"><span style="color:#D8DEE9;">PATH</span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9;">$PATH</span><span style="color:#A3BE8C;">:</span><span style="color:#D8DEE9;">$HOME</span><span style="color:#A3BE8C;">/bin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9;">SHELL</span><span style="color:#81A1C1;">=</span><span style="color:#A3BE8C;">/bin/bash</span></span>
<span class="line"><span style="color:#D8DEE9;">MANPATH</span><span style="color:#81A1C1;">=</span><span style="color:#A3BE8C;">/usr/man:/usr/X11/man</span></span>
<span class="line"><span style="color:#D8DEE9;">EDITOR</span><span style="color:#81A1C1;">=</span><span style="color:#A3BE8C;">/usr/bin/vi</span></span>
<span class="line"><span style="color:#D8DEE9;">PS1</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">\\h:\\w\\$ </span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"><span style="color:#D8DEE9;">PS2</span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">&gt; </span><span style="color:#ECEFF4;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">if</span><span style="color:#ECEFF4;"> [</span><span style="color:#81A1C1;"> -f</span><span style="color:#81A1C1;"> ~</span><span style="color:#D8DEE9FF;">/.bashrc </span><span style="color:#ECEFF4;">]</span><span style="color:#81A1C1;">;</span><span style="color:#81A1C1;"> then</span></span>
<span class="line"><span style="color:#88C0D0;">.</span><span style="color:#A3BE8C;"> ~/.bashrc</span></span>
<span class="line"><span style="color:#81A1C1;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">export</span><span style="color:#D8DEE9;"> PATH</span></span>
<span class="line"><span style="color:#81A1C1;">export</span><span style="color:#D8DEE9;"> EDITOR</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，这个脚本定义了一些最基本的环境变量，然后执行了 <code>~/.bashrc</code>。</p><p><code>bash</code> 命令的 <code>--login</code> 参数，会强制执行登录 Session 会执行的脚本。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">bash</span><span style="color:#A3BE8C;"> --login</span></span></code></pre></div><p><code>bash</code> 命令的 <code>--noprofile</code> 参数，会跳过上面这些 Profile 脚本。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">bash</span><span style="color:#A3BE8C;"> --noprofile</span></span></code></pre></div><h3 id="非登录-session" tabindex="-1"><a class="header-anchor" href="#非登录-session"><span>非登录 Session</span></a></h3><p>非登录 Session 是用户进入系统以后，手动新建的 Session，这时不会进行环境初始化。比如，在命令行执行 <code>bash</code> 命令，就会新建一个非登录 Session。</p><p>非登录 Session 的初始化脚本依次如下。</p><ul><li><code>/etc/bash.bashrc</code>: 对全体用户有效。</li><li><code>~/.bashrc</code>: 仅对当前用户有效。</li></ul><p>对用户来说，<code>~/.bashrc</code> 通常是最重要的脚本。非登录 Session 默认会执行它，而登陆 Session 一般也会通过调用执行它。由于每次执行 Bash 脚本，都会新建一个非登录 Session，所以 <code>~/.bashrc</code> 也是每次执行脚本都会执行的。</p><p><code>bash</code> 命令的 <code>--norc</code> 参数，可以禁止在非登录 Session 执行 <code>~/.bashrc</code> 脚本。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">bash</span><span style="color:#A3BE8C;"> --norc</span></span></code></pre></div><p><code>bash</code> 命令的 <code>--rcfile</code> 参数，指定另一个脚本代替 <code>.bashrc</code>。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">bash</span><span style="color:#A3BE8C;"> --rcfile</span><span style="color:#A3BE8C;"> testrc</span></span></code></pre></div><h3 id="bash-logout" tabindex="-1"><a class="header-anchor" href="#bash-logout"><span>.bash_logout</span></a></h3><p><code>~/.bash_logout</code> 脚本在每次退出 Session 时执行，通常用来做一些清理工作和记录工作，比如删除临时文件，记录用户在本次 Session 花费的时间。</p><p>如果没有退出时要执行的命令，这个文件也可以不存在。</p><h2 id="启动选项" tabindex="-1"><a class="header-anchor" href="#启动选项"><span>启动选项</span></a></h2><p>为了方便 Debug，有时在启动 Bash 的时候，可以加上启动参数。</p><ul><li><code>-n</code>: 不运行脚本，只检查是否有语法错误。</li><li><code>-v</code>: 输出每一行语句运行结果前，会先输出该行语句。</li><li><code>-x</code>: 每一个命令处理完以后，先输出该命令，再进行下一个命令的处理。</li></ul><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">bash</span><span style="color:#A3BE8C;"> -n</span><span style="color:#A3BE8C;"> scriptname</span></span>
<span class="line"><span style="color:#88C0D0;">bash</span><span style="color:#A3BE8C;"> -v</span><span style="color:#A3BE8C;"> scriptname</span></span>
<span class="line"><span style="color:#88C0D0;">bash</span><span style="color:#A3BE8C;"> -x</span><span style="color:#A3BE8C;"> scriptname</span></span></code></pre></div><h2 id="键盘绑定" tabindex="-1"><a class="header-anchor" href="#键盘绑定"><span>键盘绑定</span></a></h2><p>Bash 允许用户定义自己的快捷键。全局的键盘绑定文件默认为 <code>/etc/inputrc</code>，您可以在主目录创建自己的键盘绑定文件 <code>.inputrc</code> 文件。如果定义了这个文件，需要在其中加入下面这行，保证全局绑定不会被遗漏。</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9;">$include</span><span style="color:#D8DEE9FF;"> /etc/inputrc</span></span></code></pre></div><p><code>.inputrc</code> 文件里面的快捷键，可以像这样定义，<code>&quot;\\C-t&quot;:&quot;pwd\\n&quot;</code> 表示将 <code>Ctrl + t</code> 绑定为运行 <code>pwd</code> 命令。</p>`,35),i=[l];function c(t,p){return e(),a("div",null,i)}const h=s(n,[["render",c],["__file","startup.html.vue"]]),b=JSON.parse('{"path":"/linux/bash/startup.html","title":"Bash 启动环境","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"Bash 启动环境","icon":"leaf","author":"阮一峰","category":"Linux","tag":["Bash"],"copyright":"本教程采用<a href=\\"https://creativecommons.org/licenses/by-sa/3.0/deed.zh\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">知识共享 署名-相同方式共享 3.0协议</a>","description":"Session 用户每次使用 Shell，都会开启一个与 Shell 的 Session(对话)。 Session 有两种类型: 登录 Session 和非登录 Session，也可以叫做 login shell 和 non-login shell。 登录 Session 登录 Session 是用户登录系统以后，系统为用户开启的原始 Session，...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/bash/startup.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Bash 启动环境"}],["meta",{"property":"og:description","content":"Session 用户每次使用 Shell，都会开启一个与 Shell 的 Session(对话)。 Session 有两种类型: 登录 Session 和非登录 Session，也可以叫做 login shell 和 non-login shell。 登录 Session 登录 Session 是用户登录系统以后，系统为用户开启的原始 Session，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:tag","content":"Bash"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Bash 启动环境\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"阮一峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"Session","slug":"session","link":"#session","children":[{"level":3,"title":"登录 Session","slug":"登录-session","link":"#登录-session","children":[]},{"level":3,"title":"非登录 Session","slug":"非登录-session","link":"#非登录-session","children":[]},{"level":3,"title":".bash_logout","slug":"bash-logout","link":"#bash-logout","children":[]}]},{"level":2,"title":"启动选项","slug":"启动选项","link":"#启动选项","children":[]},{"level":2,"title":"键盘绑定","slug":"键盘绑定","link":"#键盘绑定","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":6},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":3.28,"words":985},"filePathRelative":"linux/bash/startup.md","localizedDate":"2020年5月4日","excerpt":"","autoDesc":true}');export{h as comp,b as data};
