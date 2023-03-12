import{_ as a,X as n,Y as s,a3 as e}from"./framework-a91f7991.js";const l={},p=e(`<h1 id="文件系统" tabindex="-1"><a class="header-anchor" href="#文件系统" aria-hidden="true">#</a> 文件系统</h1><h2 id="pwd" tabindex="-1"><a class="header-anchor" href="#pwd" aria-hidden="true">#</a> pwd</h2><p><code>pwd</code> 命令显示列出当前所在的目录。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">pwd</span>
</code></pre></div><h2 id="cd" tabindex="-1"><a class="header-anchor" href="#cd" aria-hidden="true">#</a> cd</h2><p><code>cd</code> 命令用来改变用户所在的目录。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入用户的主目录</span>
$ <span class="token builtin class-name">cd</span>

<span class="token comment"># 进入前一个工作目录</span>
$ <span class="token builtin class-name">cd</span> -

<span class="token comment"># 进入指定用户的主目录</span>
$ <span class="token builtin class-name">cd</span> ~user_name
</code></pre></div><h2 id="ls" tabindex="-1"><a class="header-anchor" href="#ls" aria-hidden="true">#</a> ls</h2><p><code>ls</code> 目录可以显示指定目录的内容。不加参数时，显示当前目录的内容。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span>
</code></pre></div><p>上面命令显示当前目录的内容。</p><p><code>ls</code> 命令也可以显示指定文件是否存在。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> foo.txt
foo.txt
</code></pre></div><p><code>-l</code> 参数可以显示文件的详细信息。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> foo.txt
-rw-rw-r-- <span class="token number">1</span> me   me   <span class="token number">0</span> <span class="token number">2016</span>-03-06 <span class="token number">14</span>:52 foo.txt
</code></pre></div><p>上面命令输出结果的第一栏，是文件的类型和权限。</p><p>文件类型分为以下几种。</p><ul><li><code>-</code> 普通文件</li><li><code>d</code> 目录</li><li><code>l</code> 符号链接。注意，对于符号链接文件，剩余的文件属性总是&quot;rwxrwxrwx&quot;。</li><li><code>c</code> 字符设备文件，指按照字节流处理数据的设备，比如调制解调器。</li><li><code>b</code> 块设备文件，指按照数据块处理数据的设备，比如硬盘。</li></ul><p>其他参数的用法。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示多个目录的内容</span>
$ <span class="token function">ls</span> ~ /usr

<span class="token comment"># -a --all 显示隐藏文件</span>
$ <span class="token function">ls</span> <span class="token parameter variable">-a</span>

<span class="token comment"># -A 与-a类似，但是不显示当前目录和上一级目录两个点文件</span>
$ <span class="token function">ls</span> <span class="token parameter variable">-A</span>

<span class="token comment"># -l 显示详细信息</span>
$ <span class="token function">ls</span> <span class="token parameter variable">-l</span>

<span class="token comment"># -1 单列显示，每行只显示一个文件</span>
$ <span class="token function">ls</span> <span class="token parameter variable">-1</span>

<span class="token comment"># -d 显示当前目录本身，而不是它的内容</span>
<span class="token comment"># 通常与-l配合使用，列出一个目录本身的详细信息</span>
$ <span class="token function">ls</span> <span class="token parameter variable">-dl</span>

<span class="token comment"># -F 目录名之后添加斜杠，可执行文件后面添加星号</span>
$ <span class="token function">ls</span> <span class="token parameter variable">-F</span>

<span class="token comment"># -h 与-l配合使用，将文件大小显示为人类可读的格式</span>

<span class="token comment"># -t 按文件修改时间排序，修改晚的排在前面</span>
$ <span class="token function">ls</span> <span class="token parameter variable">-t</span>

<span class="token comment"># -s 按文件大小排序，</span>

<span class="token comment"># --reverse 显示结果倒序排列</span>
$ <span class="token function">ls</span> <span class="token parameter variable">-lt</span> <span class="token parameter variable">--reverse</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果只显示一个目录里面的子目录，不显示文件，可以使用下面这些命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 只显示常规目录</span>
$ <span class="token function">ls</span> <span class="token parameter variable">-d</span> */
$ <span class="token function">ls</span> <span class="token parameter variable">-F</span> <span class="token operator">|</span> <span class="token function">grep</span> /
$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">grep</span> ^d
$ tree <span class="token parameter variable">-dL</span> <span class="token number">1</span>

<span class="token comment"># 只显示隐藏目录</span>
$ <span class="token function">ls</span> <span class="token parameter variable">-d</span> .*/

<span class="token comment"># 隐藏目录和非隐藏目录都显示</span>
$ <span class="token function">find</span> <span class="token parameter variable">-maxdepth</span> <span class="token number">1</span> <span class="token parameter variable">-type</span> d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一个简便方法是利用自动补全功能，先键入 <code>cd</code> 命令，然后连按两下 <code>tab</code> 键。</p><h2 id="stat" tabindex="-1"><a class="header-anchor" href="#stat" aria-hidden="true">#</a> stat</h2><p><code>stat</code> 命令是加强版的 <code>ls</code> 命令，可以显示一个文件的详细信息。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">stat</span> timestamp
File: <span class="token string">&#39;timestamp&#39;</span>
Size: <span class="token number">0</span> Blocks: <span class="token number">0</span> IO Block: <span class="token number">4096</span> regular empty <span class="token function">file</span>
Device: 803h/2051d Inode: <span class="token number">14265061</span> Links: <span class="token number">1</span>
Access: <span class="token punctuation">(</span>0644/-rw-r--r--<span class="token punctuation">)</span> Uid: <span class="token punctuation">(</span> <span class="token number">1001</span>/ me<span class="token punctuation">)</span> Gid: <span class="token punctuation">(</span> <span class="token number">1001</span>/ me<span class="token punctuation">)</span>
Access: <span class="token number">2008</span>-10-08 <span class="token number">15</span>:15:39.000000000 <span class="token parameter variable">-0400</span>
Modify: <span class="token number">2008</span>-10-08 <span class="token number">15</span>:15:39.000000000 <span class="token parameter variable">-0400</span>
Change: <span class="token number">2008</span>-10-08 <span class="token number">15</span>:15:39.000000000 <span class="token parameter variable">-0400</span>
</code></pre></div><h2 id="touch" tabindex="-1"><a class="header-anchor" href="#touch" aria-hidden="true">#</a> touch</h2><p><code>touch</code> 用来设置或更新文件的访问，更改，和修改时间。然而，如果一个文件名参数是一个 不存在的文件，则会创建一个空文件。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">touch</span> timestamp
</code></pre></div><p>上面命令创建了一个名为 <code>timestamp</code> 空文件。如果该文件已经存在，就会把它的修改时间设置为当前时间。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> playground/dir-<span class="token punctuation">{</span>00<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">9</span><span class="token punctuation">}</span>,0<span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">..</span><span class="token number">99</span><span class="token punctuation">}</span>,100<span class="token punctuation">}</span>
<span class="token function">touch</span> playground/dir-<span class="token punctuation">{</span>00<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">9</span><span class="token punctuation">}</span>,0<span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">..</span><span class="token number">99</span><span class="token punctuation">}</span>,100<span class="token punctuation">}</span>/file-<span class="token punctuation">{</span>A<span class="token punctuation">..</span>Z<span class="token punctuation">}</span>
</code></pre></div><p>上面的命令创建了一个包含一百个子目录，每个子目录中包含了 26 个空文件。</p><h2 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> file</h2><p><code>file</code> 命令显示指定文件的类型。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">file</span> picture.jpg
picture.jpg: JPEG image data, JFIF standard <span class="token number">1.01</span>
</code></pre></div><h2 id="chmod" tabindex="-1"><a class="header-anchor" href="#chmod" aria-hidden="true">#</a> chmod</h2><p><code>chmod</code> 命令用于更改文件的权限，是“change mode”的缩写。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">600</span> foo.txt
</code></pre></div><p>上面命令将 <code>foo.txt</code> 的权限改成了 600。</p><p><code>chmod</code> 还可以接受四个缩写，为不同的对象单独设置权限。</p><ul><li><code>u</code> 所有者“user”的简写</li><li><code>g</code> 用户组“group”的缩写</li><li><code>o</code> 其他所有人“others”的简写</li><li><code>a</code> 所有人“all”的简写</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 为所有者添加可执行权限</span>
$ <span class="token function">chmod</span> u+x foo.txt

<span class="token comment"># 删除所有者的可执行权限</span>
$ <span class="token function">chmod</span> u-x foo.txt

<span class="token comment"># 为所有人添加可执行权限，等价于 a+x</span>
$ <span class="token function">chmod</span> +x foo.txt

<span class="token comment"># 删除其他人的读权限和写权限。</span>
$ <span class="token function">chmod</span> o-rw foo.txt

<span class="token comment"># 设定用户组和其他人的权限是读权限和写权限</span>
$ <span class="token function">chmod</span> <span class="token assign-left variable">go</span><span class="token operator">=</span>rw foo.txt

<span class="token comment"># 为所有者添加执行权限，设定用户组和其他人为读权限和写权限，多种设定用逗号分隔</span>
$ <span class="token function">chmod</span> u+x,go<span class="token operator">=</span>rw foo.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加权限。</p><ul><li>+x 添加执行权限</li><li>+r 设置读权限</li><li>+w 设置写权限</li><li>+rwx 设置所有读、写和执行权限。</li></ul><p>删除权限只需将 <code>+</code> 更改为 <code>-</code>，就可以删除任何已设置的指定权限。可以使用 <code>-R</code>(或 <code>--recursive</code>)选项来递归地操作目录和文件。</p><p>设置精确权限，可以使用<code>=</code>代替 <code>+</code> 或 <code>-</code> 来实现此操作。如果想为用户、组或其他用户设置不同的权限，可以使用逗号将不同表达式分开(例如 <code>ug=rwx,o=rx</code>)。</p><p>由于一共有 3 种可能的权限。也可以使用八进制数代替符号来设置权限。通过这种方式设置的权限最多使用 3 个八进制数。第 1 个数定义用户权限，第 2 个数定义组权限，第 3 个数定义其他权限。这 3 个数中的每一个都通过添加想要的权限设置来构造: 读 (4)、写 (2) 和执行 (1)。</p><ul><li>rwx 7</li><li>rw- 6</li><li>r-x 5</li><li>r-- 4</li><li>-wx 3</li><li>-w- 2</li><li>--x 1</li><li>--- 0</li></ul><h2 id="umask" tabindex="-1"><a class="header-anchor" href="#umask" aria-hidden="true">#</a> umask</h2><p><code>umask</code> 用来查看和设置权限掩码。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">umask</span>
0022
</code></pre></div><p>上面命令显示当前系统之中，默认的文件掩码是 <code>0022</code>，转为二进制就是 <code>000 000 010 010</code>。</p><p>可以看到，这个掩码是一个 12 位的二进制数，后面的 9 位分别代表文件三种使用对象的三类权限。只要对应位置上是 <code>1</code>，就表示关闭该项权限，所以 <code>010</code> 就表示关闭读权限。</p><p>新建文件时，通常不会带有执行权限，也就是说，新建文件的默认权限是 <code>rw-rw-rw-</code>。如果文件掩码是 <code>0022</code>，那么用户组和其他人的写权限也会被拿掉。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">touch</span> new.txt
$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> new.txt
-rw-r--r-- <span class="token number">1</span> me   me   <span class="token number">0</span> <span class="token number">2016</span>-03-06 <span class="token number">14</span>:52 new.txt
</code></pre></div><p>上面代码中，<code>new.txt</code> 的用户组和其他人的写权限就没了。</p><p><code>umask</code> 后面跟着参数，就表示设置权限掩码。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">umask</span> 0000
</code></pre></div><p>上面命令将权限掩码设为 <code>0000</code>，实际上就是关闭了权限掩码。</p><p><code>umask</code> 命令设置的掩码值只能在当前 Shell 会话中生效，若当前 Shell 会话结束后，则必须重新设置。</p><h2 id="du" tabindex="-1"><a class="header-anchor" href="#du" aria-hidden="true">#</a> du</h2><p><code>du</code> 命令用于查看指定目录的大小。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">du</span> <span class="token parameter variable">-hs</span> /path/to/directory
</code></pre></div><p>显示第一层子目录的大小。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">du</span> <span class="token parameter variable">-h</span> --max-depth<span class="token operator">=</span><span class="token number">1</span> /path/to/folder
</code></pre></div><p>参数的含义。</p><ul><li><code>-h</code> 表示人类可读的格式</li><li><code>-s</code> 表示总结信息，否则会显示该目录内所有文件和子目录的信息。</li></ul><p><code>tree</code> 命令也可以显示子目录大小。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>tree <span class="token parameter variable">--du</span> <span class="token parameter variable">-h</span> /path/to/directory
</code></pre></div><h2 id="md5sum" tabindex="-1"><a class="header-anchor" href="#md5sum" aria-hidden="true">#</a> md5sum</h2><p><code>md5sum</code> 命令用来显示一个文件的 md5 校验码。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ md5sum image.iso
34e354760f9bb7fbf85c96f6a3f94ece    image.iso
</code></pre></div><h2 id="locate" tabindex="-1"><a class="header-anchor" href="#locate" aria-hidden="true">#</a> locate</h2><p><code>locate</code> 程序快速搜索本机的路径名数据库，并且输出每个与给定字符串相匹配的文件名。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">locate</span> bin/zip
/usr/bin/zip
/usr/bin/zipcloak
/usr/bin/zipgrep
/usr/bin/zipinfo
/usr/bin/zipnote
/usr/bin/zipsplit
</code></pre></div><p><code>locate</code> 数据库由另一个叫做 <code>updatedb</code> 的程序创建。大多数装有 locate 的系统会每隔一天运行一回 updatedb 程序。因为数据库不能被持续地更新，所以当使用 locate 时，您会发现 目前最新的文件不会出现。为了克服这个问题，可以手动运行 updatedb 程序， 更改为超级用户身份，在提示符下运行 updatedb 命令。</p><p><code>locate</code> 支持正则查找。<code>--regexp</code> 参数支持基本的正则表达式，<code>--regex</code> 参数支持扩展的正则表达式。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">locate</span> <span class="token parameter variable">--regex</span> <span class="token string">&#39;bin/(bz|gz|zip)&#39;</span>
</code></pre></div><h2 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find</h2><p><code>locate</code> 程序只能依据文件名来查找文件，而 <code>find</code> 程序能基于各种各样的属性，搜索一个给定目录(以及它的子目录)，来查找文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出当前目录的所有子目录和文件(含子目录)</span>
$ <span class="token function">find</span>
$ <span class="token function">find</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 显示当前目录的文件总数</span>
$ <span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>

<span class="token comment"># 当前目录的子目录总数</span>
$ <span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> d <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>

<span class="token comment"># 当前目录的文件总数(不含子目录)</span>
$ <span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>

<span class="token comment"># 当前目录的文件名匹配“*.JPG”且大于1M的文件总数</span>
$ <span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;\\*.JPG&quot;</span> <span class="token parameter variable">-size</span> +1M <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-type</code> 参数支持的文件类型。</p><ul><li><code>b</code> 块设备文件</li><li><code>c</code> 字符设备文件</li><li><code>d</code> 目录</li><li><code>f</code> 普通文件</li><li><code>l</code> 符号链接</li></ul><p><code>-size</code> 参数支持的文件大小类型。</p><ul><li>b 512 个字节块。如果没有指定单位，则这是默认值。</li><li>c 字节</li><li>w 两个字节的字</li><li>k 千字节</li><li>M 兆字节</li><li>G 千兆字节</li></ul><p><code>find</code> 程序支持的查询参数。</p><ul><li>-cmin n 匹配的文件和目录的内容或属性最后修改时间正好在 n 分钟之前。指定少于 n 分钟之前，使用 -n，指定多于 n 分钟之前，使用 +n。</li><li>-cnewer file 匹配的文件和目录的内容或属性最后修改时间早于那些文件。</li><li>-ctime n 匹配的文件和目录的内容和属性最后修改时间在 n*24 小时之前。</li><li>-empty 匹配空文件和目录。</li><li>-group name 匹配的文件和目录属于一个组。组可以用组名或组 ID 来表示。</li><li>-iname pattern 就像-name 测试条件，但是不区分大小写。</li><li>-inum n 匹配的文件的 inode 号是 n。这对于找到某个特殊 inode 的所有硬链接很有帮助。</li><li>-mmin n 匹配的文件或目录的内容被修改于 n 分钟之前。</li><li>-mtime n 匹配的文件或目录的内容被修改于 n*24 小时之前。</li><li>-name pattern 用指定的通配符模式匹配的文件和目录。</li><li>-newer file 匹配的文件和目录的内容早于指定的文件。当编写 shell 脚本，做文件备份时，非常有帮助。每次您制作一个备份，更新文件(比如说日志)，然后使用 find 命令来决定自从上次更新，哪一个文件已经更改了。</li><li>-nouser 匹配的文件和目录不属于一个有效用户。这可以用来查找 属于删除帐户的文件或监测攻击行为。</li><li>-nogroup 匹配的文件和目录不属于一个有效的组。</li><li>-perm mode 匹配的文件和目录的权限已经设置为指定的 mode。mode 可以用 八进制或符号表示法。</li><li>-samefile name 相似于-inum 测试条件。匹配和文件 name 享有同样 inode 号的文件。</li><li>-size n 匹配的文件大小为 n。</li><li>-type c 匹配的文件类型是 c。</li><li>-user name 匹配的文件或目录属于某个用户。这个用户可以通过用户名或用户 ID 来表示。</li><li>-depth 指导 find 程序先处理目录中的文件，再处理目录自身。当指定-delete 行为时，会自动 应用这个选项。</li><li>-maxdepth levels 当执行测试条件和行为的时候，设置 find 程序陷入目录树的最大级别数</li><li>-mindepth levels 在应用测试条件和行为之前，设置 find 程序陷入目录数的最小级别数。</li><li>-mount 指导 find 程序不要搜索挂载到其它文件系统上的目录。</li><li>-regex 指定正则表达式</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 找出包括空格或其它不规范字符的文件名或路径名</span>
$ <span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-regex</span> <span class="token string">&#39;.*[^-\\_./0-9a-zA-Z].*&#39;</span>
</code></pre></div><p><code>find</code> 程序还支持逻辑操作符。</p><ul><li><code>-and</code> 如果操作符两边的测试条件都是真，则匹配。可以简写为 -a。注意若没有使用操作符，则默认使用 -and。</li><li><code>-or</code> 若操作符两边的任一个测试条件为真，则匹配。可以简写为 -o。</li><li><code>-not</code> 若操作符后面的测试条件是真，则匹配。可以简写为一个感叹号(!)。</li><li><code>()</code> 把测试条件和操作符组合起来形成更大的表达式。这用来控制逻辑计算的优先级。注意 因为圆括号字符对于 shell 来说有特殊含义，所以在命令行中使用它们的时候，它们必须 用引号引起来，才能作为实参传递给 find 命令。通常反斜杠字符被用来转义圆括号字符。</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 或关系</span>
<span class="token punctuation">(</span> expression <span class="token number">1</span> <span class="token punctuation">)</span> <span class="token parameter variable">-or</span> <span class="token punctuation">(</span> expression <span class="token number">2</span> <span class="token punctuation">)</span>

<span class="token comment"># 找出不是600权限的文件，或者不是700权限的目录</span>
$ <span class="token function">find</span> ~ <span class="token punctuation">\\</span><span class="token punctuation">(</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-not</span> <span class="token parameter variable">-perm</span> 0600 <span class="token punctuation">\\</span><span class="token punctuation">)</span> <span class="token parameter variable">-or</span> <span class="token punctuation">\\</span><span class="token punctuation">(</span> <span class="token parameter variable">-type</span> d <span class="token parameter variable">-not</span> <span class="token parameter variable">-perm</span> 0700 <span class="token punctuation">\\</span><span class="token punctuation">)</span>
</code></pre></div><p><code>find</code> 程序的逻辑表达式，具有“短路运算”的特点，即对于 <code>expr1 -operator expr2</code> 这个表达式，<code>expr2</code> 不一定执行。这是为了提高运行速度。</p><ul><li>expr1 为真，且操作符为 <code>-and</code>，expr2 总是执行</li><li>expr1 为假，且操作符为 <code>-and</code>，expr2 从不执行</li><li>expr1 为真，且操作符为 <code>-or</code>，expr2 从不执行</li><li>expr1 为假，且操作符为 <code>-or</code>，expr2 总是执行</li></ul><p>为了方便执行一些常见操作，<code>find</code> 程序定义了一些预定义操作。</p><ul><li>-delete 删除当前匹配的文件。</li><li>-ls 对匹配的文件执行等同的 ls -dils 命令。并将结果发送到标准输出。</li><li>-print 把匹配文件的全路径名输送到标准输出。如果没有指定其它操作，这是 默认操作。</li><li>-quit 一旦找到一个匹配，退出。</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 找到匹配的文件，并显示在标准输出</span>
<span class="token comment"># -print 是默认操作，可以省略</span>
$ <span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-print</span>

<span class="token comment"># 删除后缀名为BAK的文件</span>
<span class="token comment"># 执行 delete 操作前，最好先执行 print 操作，确认要删除哪些文件</span>
$ <span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&#39;*.BAK&#39;</span> <span class="token parameter variable">-delete</span>
</code></pre></div><p>预定义操作可以与逻辑表达式，结合使用。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ~ <span class="token parameter variable">-type</span> f <span class="token parameter variable">-and</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;*.BAK&#39;</span> <span class="token parameter variable">-and</span> <span class="token parameter variable">-print</span>
</code></pre></div><p>除了预定义操作以外，用户还可以使用 <code>-exec</code> 参数自定义操作。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-exec</span> <span class="token builtin class-name">command</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">;</span>
</code></pre></div><p>上面的命令中，<code>command</code> 是一个命令行命令，<code>{}</code> 用来指代当前路径，分号表示命令结束。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 预定义的 -delete 操作，等同于下面的操作</span>
<span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token string">&#39;{}&#39;</span> <span class="token string">&#39;;&#39;</span>
</code></pre></div><p><code>-exec</code> 使用时，每次找到一个匹配的文件，会启动一个新的指定命令的实例。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ~ <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&#39;foo*&#39;</span> <span class="token parameter variable">-exec</span> <span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token string">&#39;{}&#39;</span> <span class="token string">&#39;;&#39;</span>
</code></pre></div><p>执行上面的命令，<code>ls</code> 程序可能会被调用多次。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-l</span> file1
<span class="token function">ls</span> <span class="token parameter variable">-l</span> file2
</code></pre></div><p>如果想改成 <code>ls</code> 程序只调用一次，要把 <code>find</code> 命令里面的分号，改成加号。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> file1 file2
<span class="token comment"># 相当于</span>
$ <span class="token function">find</span> ~ <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&#39;foo*&#39;</span> <span class="token parameter variable">-exec</span> <span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token string">&#39;{}&#39;</span> +
</code></pre></div><h2 id="xargs" tabindex="-1"><a class="header-anchor" href="#xargs" aria-hidden="true">#</a> xargs</h2><p><code>xargs</code> 命令从标准输入接受输入，并把输入转换为一个特定命令的参数列表。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ~ <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&#39;foo\\*&#39;</span> <span class="token parameter variable">-print</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">ls</span> <span class="token parameter variable">-l</span>
</code></pre></div>`,111),c=[p];function i(t,o){return n(),s("div",null,c)}const r=a(l,[["render",i],["__file","file.html.vue"]]);export{r as default};
