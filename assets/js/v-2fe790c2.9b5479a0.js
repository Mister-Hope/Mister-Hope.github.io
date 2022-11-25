"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[46320],{29149:(t,e,a)=>{a.r(e),a.d(e,{default:()=>g});var n=a(16492);const o=(0,n._)("p",null,[(0,n.Uk)("什么是仓库呢? 英文名"),(0,n._)("strong",null,"repository"),(0,n.Uk)("，您可以简单理解成一个目录，这个目录里面的所有文件都可以被 Git 管理起来，每个文件的修改、删除， Git 都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。")],-1),s=(0,n.uE)('<h2 id="初始化仓库" tabindex="-1"><a class="header-anchor" href="#初始化仓库" aria-hidden="true">#</a> 初始化仓库</h2><p>创建一个仓库非常简单，首先，选择一个合适的地方，创建一个空目录:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># open shell (PowerShell on Windows) in a proper directory</span>\n$ <span class="token function">mkdir</span> learngit\n$ <span class="token builtin class-name">cd</span> learngit\n$ <span class="token builtin class-name">pwd</span>\n/users/hope-studio/learngit\n</code></pre></div><p><code>pwd</code> 命令用于显示当前目录。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><ul><li>使用 Windows 系统时，为了避免遇到各种莫名其妙的问题，请确保目录名(包括父目录)不包含中文。</li><li>为了确保能够执行跨平台的命令，请在 Windows 上安装 PowerShell 并设置为 VS Code 的默认终端。</li></ul></div><p>第二步，通过 <code>git init</code> 命令把这个目录变成 Git 可以管理的仓库:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> init\nInitialized empty Git repository <span class="token keyword">in</span> /users/hope-studio/learngit/.git/\n</code></pre></div><p>瞬间 Git 就把仓库建好了，而且告诉您是一个空的仓库(empty Git repository)，可以发现当前目录下多了一个.git 的目录，这个目录是 Git 来跟踪管理仓库的，如果这个目录里面的文件破坏了，Git 仓库也破坏了。</p><p>如果您没有看到 .git 目录，那是因为这个目录默认是隐藏的，用 <code>ls -ah</code> 命令就可以看见。</p><p>也不一定必须在空目录下创建 Git 仓库，选择一个已经有东西的目录也是可以的。</p><div class="custom-container danger"><p class="custom-container-title">警告</p><p>请不要用已经在使用的项目练习 Git!</p></div><h2 id="把文件添加到仓库" tabindex="-1"><a class="header-anchor" href="#把文件添加到仓库" aria-hidden="true">#</a> 把文件添加到仓库</h2><p>首先这里再明确一下，所有的版本控制系统，其实只能跟踪文本文件的改动，比如 TXT 文件，网页，所有的程序代码等等，Git 也不例外。版本控制系统可以告诉您每次的改动，比如在第 5 行加了一个单词“Linux”，在第 8 行删了一个单词“Windows”。而图片、视频这些二进制文件，虽然也能由版本控制系统管理，但没法跟踪文件的变化，只能把二进制文件每次改动串起来，也就是只知道图片从 100KB 改成了 120KB，但到底改了啥，版本控制系统不知道，也没法知道。(Microsoft 的 Word 格式是二进制格式，所以很不幸) 所以要使用版本控制系统，就要以纯文本方式编写文件。</p>',13),i={class:"custom-container tip"},c=(0,n._)("p",{class:"custom-container-title"},"提示",-1),l=(0,n._)("p",null,"因为文本是有编码的，比如中文有常用的 GBK 编码，日文有 Shift_JIS 编码，如果没有历史遗留问题，强烈建议使用标准的 UTF-8 编码，所有语言使用同一种编码，既没有冲突，又被所有平台所支持。",-1),p={class:"custom-container warning"},r=(0,n._)("p",{class:"custom-container-title"},"注意",-1),d=(0,n._)("p",null,"千万不要使用 Windows 自带的记事本编辑任何文本文件。",-1),u=(0,n.uE)('<p>现在编写一个 readme.txt 文件，内容如下:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>Git is a version control system.\nGit is free software.\n</code></pre></div><p>一定要放到 <code>learngit</code> 目录下(子目录也行)，因为这是一个 Git 仓库，放到其他地方 Git 再厉害也找不到这个文件。</p><p>把一个文件放到 Git 仓库只需要两步:</p><ol><li><p>用命令 <code>git add</code> 告诉 Git，把文件添加到仓库:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> readme.txt\n</code></pre></div><p>执行上面的命令，没有任何显示，这就对了，Unix 的哲学是“没有消息就是好消息”，说明添加成功。</p></li><li><p>用命令 <code>git commit</code> 告诉 Git，把文件提交到仓库:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;wrote a readme file&quot;</span>\n<span class="token punctuation">[</span>master <span class="token punctuation">(</span>root-commit<span class="token punctuation">)</span> eaadf4e<span class="token punctuation">]</span> wrote a readme <span class="token function">file</span>\n <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">2</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>\n create mode <span class="token number">100644</span> readme.txt\n</code></pre></div><p><code>git commit</code> 命令，<code>-m</code> 后面输入的是本次提交的说明，这样您就能从历史记录里方便地找到改动记录。</p><p><code>git commit</code> 命令执行成功后会告诉您，<code>1 file changed</code>: 1 个文件被改动(我们新添加的 readme.txt 文件)；<code>2 insertions</code>: 插入了两行内容(readme.txt 有两行内容)。</p></li></ol><p>为什么 Git 添加文件需要 <code>add</code>，<code>commit</code> 一共两步呢? 因为 <code>commit</code> 可以一次提交很多文件，所以您可以多次 <code>add</code> 不同的文件，比如:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> file1.txt\n<span class="token function">git</span> <span class="token function">add</span> file2.txt file3.txt\n<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;add 3 files.&quot;</span>\n</code></pre></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><ul><li><p>初始化一个 Git 仓库，使用 <code>git init</code> 命令。</p></li><li><p>添加文件到 Git 仓库，分两步:</p><ol><li>使用命令 <code>git add &lt;file&gt;</code>，可反复多次使用，添加多个文件；</li><li>使用命令 <code>git commit -m &lt;message&gt;</code>，完成。</li></ol></li></ul>',9),m={},g=(0,a(11164).Z)(m,[["render",function(t,e){const a=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[o,(0,n.kq)(" more "),s,(0,n._)("div",i,[c,l,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Uk)("具体详情请见 "),(0,n.Wm)(a,{to:"/code/basic/encoding.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("文件编码")])),_:1})])])]),(0,n._)("div",p,[r,d,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Uk)("具体详情请见 "),(0,n.Wm)(a,{to:"/code/windows/notepad.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("记事本遗留问题")])),_:1})])])]),u])}]])},11164:(t,e)=>{e.Z=(t,e)=>{const a=t.__vccOpts||t;for(const[t,n]of e)a[t]=n;return a}},10072:(t,e,a)=>{a.r(e),a.d(e,{data:()=>n});const n=JSON.parse('{"key":"v-2fe790c2","path":"/software/git/create-repo.html","title":"Git 仓库","lang":"zh-CN","frontmatter":{"title":"Git 仓库","icon":"repo","order":3,"author":"廖雪峰","category":["Git"],"tag":["Git","软件"],"copyright":"Copyright by 廖雪峰 Edited by Mr.Hope","description":"什么是仓库呢? 英文名repository，您可以简单理解成一个目录，这个目录里面的所有文件都可以被 Git 管理起来，每个文件的修改、删除， Git 都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。","head":[["meta",{"property":"og:url","content":"https://mrhope.site/software/git/create-repo.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Git 仓库"}],["meta",{"property":"og:description","content":"什么是仓库呢? 英文名repository，您可以简单理解成一个目录，这个目录里面的所有文件都可以被 Git 管理起来，每个文件的修改、删除， Git 都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-07T17:18:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:modified_time","content":"2022-09-07T17:18:06.000Z"}]]},"excerpt":"<p>什么是仓库呢? 英文名<strong>repository</strong>，您可以简单理解成一个目录，这个目录里面的所有文件都可以被 Git 管理起来，每个文件的修改、删除， Git 都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。</p>\\n","headers":[{"level":2,"title":"初始化仓库","slug":"初始化仓库","link":"#初始化仓库","children":[]},{"level":2,"title":"把文件添加到仓库","slug":"把文件添加到仓库","link":"#把文件添加到仓库","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1591291369000,"updatedTime":1662571086000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":12},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":3.92,"words":1176},"filePathRelative":"software/git/create-repo.md","localizedDate":"2020年6月4日"}')}}]);