"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[95717],{54563:(e,a,n)=>{n.r(a),n.d(a,{default:()=>d});var i=n(7875);const s=[(0,i.uE)('<h1 id="其他指令" tabindex="-1"><a class="header-anchor" href="#其他指令" aria-hidden="true">#</a> 其他指令</h1><h2 id="文件" tabindex="-1"><a class="header-anchor" href="#文件" aria-hidden="true">#</a> 文件</h2><h3 id="创建文件" tabindex="-1"><a class="header-anchor" href="#创建文件" aria-hidden="true">#</a> 创建文件</h3><ul><li>touch</li><li>vi</li></ul><h3 id="编辑文件" tabindex="-1"><a class="header-anchor" href="#编辑文件" aria-hidden="true">#</a> 编辑文件</h3><ul><li>vi</li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>使用 vi 命令后，默认进入浏览模式。</p><p>按 <code>i</code> 进入 insert 模式， 按 <code>ESC</code> 退出。</p><ol><li><p>命令模式下，输入: <code>/</code> 字符串</p><p>比如搜索 user, 输入 <code>/user</code></p><p>按下回车之后，可以看到 vim 已经把光标移动到该字符处和高亮了匹配的字符串</p></li><li><p>查看下一个匹配，按下 n(小写 n)</p></li><li><p>跳转到上一个匹配，按下 N(大写 N)</p></li><li><p>搜索后，我们打开别的文件，发现也被高亮了，怎么关闭高亮?</p></li></ol><p>命令模式下，输入 <code>:nohlsearch</code> 也可以 <code>:set nohlsearch</code>；当然，可以简写，<code>noh</code> 或者 <code>set noh</code>。</p></div><h3 id="重命名文件" tabindex="-1"><a class="header-anchor" href="#重命名文件" aria-hidden="true">#</a> 重命名文件</h3><ul><li>rename</li></ul><h3 id="移动文件" tabindex="-1"><a class="header-anchor" href="#移动文件" aria-hidden="true">#</a> 移动文件</h3><ul><li>mv</li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>该命令也可用于重命名</p></div><h3 id="文件浏览" tabindex="-1"><a class="header-anchor" href="#文件浏览" aria-hidden="true">#</a> 文件浏览</h3><ul><li>pwd: 查看当前目录</li><li>cd: 移动当前目录</li><li>ls: 列出当前目录 <ul><li><code>-l</code>: 以表格列出当前目录详情</li><li><code>-a</code>: 包括隐藏文件</li></ul></li></ul><h2 id="权限" tabindex="-1"><a class="header-anchor" href="#权限" aria-hidden="true">#</a> 权限</h2><ul><li>chmod: 查看/更改文件或文件夹权限</li></ul><p><code>chmod</code> 是权限管理命令 <code>change the permissions mode of a file</code> 的缩写。</p><p><code>u</code> 代表所有者，<code>x</code> 代表执行权限。<code>+</code> 表示增加权限。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> u+x file.sh\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> 权限数字 文件名\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>r 读权限 read 4</p></li><li><p>w 写权限 write 2</p></li><li><p>x 操作权限 execute 1</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">600</span> id_rsa\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="用户组" tabindex="-1"><a class="header-anchor" href="#用户组" aria-hidden="true">#</a> 用户组</h2><h3 id="管理用户组" tabindex="-1"><a class="header-anchor" href="#管理用户组" aria-hidden="true">#</a> 管理用户组</h3><p>groupadd groupname 　　添加用户组</p><p>groupdel groupname 　　删除用户组</p><p>##　添加用户到用户组 将一个用户添加到用户组中，千万不能直接用:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">usermod</span> <span class="token parameter variable">-G</span> groupA\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样做会使您离开其他用户组，仅仅做为 这个用户组 groupA 的成员。</p><p>应该用 加上 <code>-a</code> 选项:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">usermod</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-G</span> groupA user\n<span class="token punctuation">(</span>FC4: <span class="token function">usermod</span> <span class="token parameter variable">-G</span> groupA,groupB,groupC user<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-a</code> 代表 <code>append</code>， 也就是 将自己添加到 用户组 groupA 中，而不必离开 其他用户组。</p><p>命令的所有的选项，及其含义:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Options:\n\n-c, –comment COMMENT new value of the GECOS field\n-d, –home HOME_DIR new home directory for the user account\n-e, –expiredate EXPIRE_DATE set account expiration date to EXPIRE_DATE\n-f, –inactive INACTIVE set password inactive after expiration\nto INACTIVE\n-g, –gid GROUP force use GROUP as new primary group\n-G, –groups GROUPS new list of supplementary GROUPS\n-a, –append append the user to the supplemental GROUPS\nmentioned by the -G option without removing\nhim/her from other groups\n-h, –help display this help message and exit\n-l, –login NEW_LOGIN new value of the login name\n-L, –lock lock the user account\n-m, –move-home move contents of the home directory to the new\nlocation (use only with -d)\n-o, –non-unique allow using duplicate (non-unique) UID\n-p, –password PASSWORD use encrypted password for the new password\n-s, –shell SHELL new login shell for the user account\n-u, –uid UID new UID for the user account\n-U, –unlock unlock the user account\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看用户所属的组使用命令:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">groups</span> user\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者查看文件:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> /etc/group\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="用户" tabindex="-1"><a class="header-anchor" href="#用户" aria-hidden="true">#</a> 用户</h2><p><code>cat /etc/passwd</code> 查看用户列表</p><h3 id="添加用户" tabindex="-1"><a class="header-anchor" href="#添加用户" aria-hidden="true">#</a> 添加用户</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">useradd</span> <span class="token punctuation">[</span>用户名<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建新用户: useradd</p><p><code>-d</code> 指定目录文件夹</p><p><code>-m</code> 新账号名</p><p>如:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">useradd</span> <span class="token parameter variable">-d</span> /www/abc <span class="token parameter variable">-m</span> abc\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-c</code>: comment 指定一段注释性描述。</li><li><code>-d</code>: 目录 指定用户主目录，如果此目录不存在，则同时使用-m 选项，可以创建主目录。</li><li><code>-g</code>: 用户组 指定用户所属的用户组。</li><li><code>-G</code>: 用户组，用户组 指定用户所属的附加组。</li><li><code>-s</code>: Shell 文件 指定用户的登录 Shell。</li><li><code>-u</code>: 用户号 指定用户的用户号，如果同时有-o 选项，则可以重复使用其他用户的标识号。</li></ul><h3 id="设置密码" tabindex="-1"><a class="header-anchor" href="#设置密码" aria-hidden="true">#</a> 设置密码</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">passwd</span> <span class="token punctuation">[</span>用户名<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="删除用户" tabindex="-1"><a class="header-anchor" href="#删除用户" aria-hidden="true">#</a> 删除用户</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">userdel</span> abc\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>使用 userdel abc 命令删除该用户时，并不能删除该用户的所有信息，只是删除了/etc/passwd、/etc/shadow、/etc/group/、/etc/gshadow 四个文件里的该账户和组的信息。默认情况下创建一个用户账号，会创建一个家目录和一个用户邮箱(在/var/spool/mail 目录以用户名命名)</p><p>所以建议使用 <code>userdel -r abc</code> 删除用户。</p></div><h2 id="服务管理" tabindex="-1"><a class="header-anchor" href="#服务管理" aria-hidden="true">#</a> 服务管理</h2><p>Linux 服务管理两种方式 service 和 systemctl</p><ol><li><p>service 命令</p><p>service 命令其实是去 <code>/etc/init.d</code> 目录下，去执行相关程序</p><ul><li>service 命令启动 redis 脚本</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> redis start\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>直接启动 redis 脚本</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/etc/init.d/redis start\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>开机自启动</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>update-rc.d redis defaults\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中脚本需要我们自己编写</p></li><li><p>systemctl 命令</p><p>systemd 是 Linux 系统最新的初始化系统(init),作用是提高系统的启动速度，尽可能启动较少的进程，尽可能更多进程并发启动。</p><p>systemd 对应的进程管理命令是 systemctl</p></li></ol>',56)],l={},d=(0,n(61935).Z)(l,[["render",function(e,a){return(0,i.wg)(),(0,i.iD)("div",null,s)}]])},61935:(e,a)=>{a.Z=(e,a)=>{const n=e.__vccOpts||e;for(const[e,i]of a)n[e]=i;return n}},9337:(e,a,n)=>{n.r(a),n.d(a,{data:()=>i});const i=JSON.parse('{"key":"v-02d56f66","path":"/linux/command/temp.html","title":"其他指令","lang":"zh-CN","frontmatter":{"category":["Linux"],"summary":"其他指令 文件 创建文件 touch; vi; 编辑文件 vi; 使用 vi 命令后，默认进入浏览模式。 按 i 进入 insert 模式， 按 ESC 退出。 1. 命令模式下，输入: / 字符串 比如搜索 user, 输入 /user 按下回车之后，可以看到 vim 已经把光标移动到该字符处和高亮了匹配的字符串 1. 查看下一个匹配，按下 n(小写 n)","head":[["meta",{"property":"og:url","content":"https://mrhope.site/linux/command/temp.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"其他指令"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2021-01-27T06:58:54.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2021-01-27T06:58:54.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"文件","slug":"文件","link":"#文件","children":[{"level":3,"title":"创建文件","slug":"创建文件","link":"#创建文件","children":[]},{"level":3,"title":"编辑文件","slug":"编辑文件","link":"#编辑文件","children":[]},{"level":3,"title":"重命名文件","slug":"重命名文件","link":"#重命名文件","children":[]},{"level":3,"title":"移动文件","slug":"移动文件","link":"#移动文件","children":[]},{"level":3,"title":"文件浏览","slug":"文件浏览","link":"#文件浏览","children":[]}]},{"level":2,"title":"权限","slug":"权限","link":"#权限","children":[]},{"level":2,"title":"用户组","slug":"用户组","link":"#用户组","children":[{"level":3,"title":"管理用户组","slug":"管理用户组","link":"#管理用户组","children":[]}]},{"level":2,"title":"用户","slug":"用户","link":"#用户","children":[{"level":3,"title":"添加用户","slug":"添加用户","link":"#添加用户","children":[]},{"level":3,"title":"设置密码","slug":"设置密码","link":"#设置密码","children":[]}]},{"level":2,"title":"删除用户","slug":"删除用户","link":"#删除用户","children":[]},{"level":2,"title":"服务管理","slug":"服务管理","link":"#服务管理","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1611730734000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":9}]},"readingTime":{"minutes":3.66,"words":1098},"filePathRelative":"linux/command/temp.md","localizedDate":"2020年6月3日"}')}}]);