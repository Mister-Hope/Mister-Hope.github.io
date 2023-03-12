import{_ as a,X as n,Y as s,a3 as e}from"./framework-a91f7991.js";const i={},c=e(`<h1 id="归档和备份" tabindex="-1"><a class="header-anchor" href="#归档和备份" aria-hidden="true">#</a> 归档和备份</h1><h2 id="gzip" tabindex="-1"><a class="header-anchor" href="#gzip" aria-hidden="true">#</a> gzip</h2><p>gzip 程序用来压缩文件，原文件的压缩版(添加 <code>gz</code> 后缀名)会替代原文件。gunzip 程序用来还原压缩版本。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">gzip</span> foo.txt
gunzip foo.txt.gz
</code></pre></div><p><code>gzip</code> 的参数如下。</p><ul><li>-c 把输出写入到标准输出，并且保留原始文件。也有可能用--stdout 和--to-stdout 选项来指定。</li><li>-d 解压缩。正如 gunzip 命令一样。也可以用--decompress 或者--uncompress 选项来指定.</li><li>-f 强制压缩，即使原始文件的压缩文件已经存在了，也要执行。也可以用--force 选项来指定。</li><li>-h 显示用法信息。也可用--help 选项来指定。</li><li>-l 列出每个被压缩文件的压缩数据。也可用--list 选项。</li><li>-r 若命令的一个或多个参数是目录，则递归地压缩目录中的文件。也可用--recursive 选项来指定。</li><li>-t 测试压缩文件的完整性。也可用--test 选项来指定。</li><li>-v 显示压缩过程中的信息。也可用--verbose 选项来指定。</li><li>-number 设置压缩指数。number 是一个在 1(最快，最小压缩)到 9(最慢，最大压缩)之间的整数。数值 1 和 9 也可以各自用--fast 和--best 选项来表示。默认值是整数 6。</li></ul><p>下面是一些例子。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看解压缩后的内容</span>
$ gunzip <span class="token parameter variable">-c</span> foo.txt <span class="token operator">|</span> <span class="token function">less</span>
</code></pre></div><p><code>zcat</code> 程序等同于带有-c 选项的 gunzip 命令。它可以像 <code>cat</code> 命令那样，用来查看 <code>gzip</code> 压缩文件。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>zcat foo.txt.gz <span class="token operator">|</span> <span class="token function">less</span>
</code></pre></div><h2 id="bzip2" tabindex="-1"><a class="header-anchor" href="#bzip2" aria-hidden="true">#</a> bzip2</h2><p><code>bzip2</code> 程序与 <code>gzip</code> 程序相似，但是使用了不同的压缩算法，舍弃了压缩速度，实现了更高的压缩级别。在大多数情况下，它的工作模式等同于 <code>gzip</code>。由 <code>bzip2</code> 压缩的文件，用扩展名 <code>.bz2</code> 表示。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">bzip2</span> foo.txt
bunzip2 foo.txt.bz2
</code></pre></div><p>gzip 程序的所有选项(除了 <code>-r</code>)，bzip2 程序同样也支持。同样有 bunzip2 和 bzcat 程序来解压缩文件。bzip2 文件也带有 bzip2recover 程序，其会 试图恢复受损的 .bz2 文件。</p><h2 id="zip" tabindex="-1"><a class="header-anchor" href="#zip" aria-hidden="true">#</a> zip</h2><p><code>zip</code> 程序既是压缩工具，也是一个打包工具，读取和写入.zip 文件。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">zip</span> options zipfile file<span class="token punctuation">..</span>.
</code></pre></div><p>它的用法如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将指定目录压缩成zip文件</span>
$ <span class="token function">zip</span> <span class="token parameter variable">-r</span> playground.zip playground
</code></pre></div><p><code>zip</code> 与 <code>tar</code> 命令有一个相反之处。如果压缩文件已存在，其将被更新而不是被替代。这意味着会保留此文件包，但是会添加新文件，同时替换匹配的文件。</p><p>解压使用 <code>unzip</code> 命令。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">unzip</span> <span class="token punctuation">..</span>/playground.zip
</code></pre></div><p><code>unzip</code> 命令的参数如下。</p><ul><li><code>-l</code> 列出文件包中的内容而不解压</li><li><code>-v</code> 显示冗余信息</li><li><code>-p</code> 输出发送到标准输出</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">unzip</span> <span class="token parameter variable">-p</span> ls-etc.zip <span class="token operator">|</span> <span class="token function">less</span>
</code></pre></div><h2 id="tar" tabindex="-1"><a class="header-anchor" href="#tar" aria-hidden="true">#</a> tar</h2><p><code>tar</code> 是 tape archive 的简称，原来是一款制作磁带备份的工具，现在主要用于打包。一个 tar 包可以由一组独立的文件，一个或者多个目录，或者两者混合体组成。</p><p><code>tar</code> 程序的语法如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> mode<span class="token punctuation">[</span>options<span class="token punctuation">]</span> pathname<span class="token punctuation">..</span>.
</code></pre></div><p>tar 支持以下模式。</p><ul><li>c 表示 create，为文件和／或目录列表创建归档文件。</li><li>x 抽取归档文件。</li><li>r 追加具体的路径到归档文件的末尾。</li><li>t 列出归档文件的内容。</li></ul><p>支持的参数如下。</p><ul><li>f 表示 file，用来指定生成的文件。</li></ul><p>模式和参数可以写在一起，而且不需要开头的短横线。注意，必须首先指定模式，然后才是其它的选项。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建子目录的tar包</span>
$ <span class="token function">tar</span> cf playground.tar playground

<span class="token comment"># 查看tar包内容</span>
$ <span class="token function">tar</span> tf playground.tar

<span class="token comment"># 查看更详细的列表信息</span>
$ <span class="token function">tar</span> tvf playground.tar

<span class="token comment"># 还原归档文件</span>
$ <span class="token function">tar</span> xf playground.tar

<span class="token comment"># 还原单个文件</span>
$ <span class="token function">tar</span> xf archive.tar pathname

<span class="token comment"># 还原文件到指定目录</span>
$ <span class="token function">tar</span> xvf archive.tar <span class="token parameter variable">-C</span> /home/me/

<span class="token comment"># 追加文件</span>
$ <span class="token function">tar</span> rf archive.tar file.txt

<span class="token comment"># 验证归档文件内容是否正确</span>
$ <span class="token function">tar</span> tvfW archive.tar

<span class="token comment"># 支持通配符</span>
$ <span class="token function">tar</span> xf <span class="token punctuation">..</span>/playground2.tar <span class="token parameter variable">--wildcards</span> <span class="token string">&#39;home/me/playground/\\*.txt&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<code>tar</code> 命令还原的时候，总是还原为相对路径。如果归档的时候，保存的是绝对路径，那么还原的时候，这个绝对路径会整个变成相对路径。</p><p><code>find</code> 命令可以与 <code>tar</code> 命令配合使用。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> playground <span class="token parameter variable">-name</span> <span class="token string">&#39;file.txt&#39;</span> <span class="token parameter variable">-exec</span> <span class="token function">tar</span> rf playground.tar <span class="token string">&#39;{}&#39;</span> <span class="token string">&#39;+&#39;</span>
</code></pre></div><p>上面的命令先用 <code>find</code> 程序找到所有名为 <code>file.txt</code> 的文件，然后使用追加模式(<code>r</code>)的 <code>tar</code> 命令，把匹配的文件添加到归档文件 <code>playground.tar</code> 里面。</p><p>这种 <code>tar</code> 和 <code>find</code> 的配合使用，可以创建逐渐增加的目录树或者整个系统的备份。通过 <code>find</code> 命令匹配新于某个时间戳的文件，我们就能够创建一个归档文件，其只包含新于上一个 tar 包的文件。</p><p>tar 支持压缩功能。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打成gzip压缩包</span>
$ <span class="token function">tar</span> czvf assets.tar.gz dist

<span class="token comment"># 打成bz2压缩包</span>
$ <span class="token function">tar</span> cvfj assets.tar.bz2 dist

<span class="token comment"># 解压 tar.gz 文件</span>
$ <span class="token function">tar</span> xzv archive.tar.gz
$ <span class="token function">tar</span> xvf archive.tar.gz

<span class="token comment"># 解压bz2压缩包</span>
$ <span class="token function">tar</span> xvf archive.tar.bz2

<span class="token comment"># 显示gzip压缩包内容</span>
$ <span class="token function">tar</span> tvf archive.tar.gz

<span class="token comment"># 显示bz2压缩包内容</span>
$ <span class="token function">tar</span> tvf archive.tar.bz2

<span class="token comment"># 从gzip压缩包取出单个文件</span>
$ <span class="token function">tar</span> zxvf archive.tar.gz file.txt

<span class="token comment"># 从bz2压缩包取出单个文件</span>
$ <span class="token function">tar</span> jxvf archive.tar.bz2 file.txt

<span class="token comment"># 按通配符取出文件</span>
$ <span class="token function">tar</span> zxvf archive.tar.gz <span class="token parameter variable">--wildcards</span> <span class="token string">&#39;*.php&#39;</span>
$ <span class="token function">tar</span> jxvf archive.tar.bz2 <span class="token parameter variable">--wildcards</span> <span class="token string">&#39;*.php&#39;</span>

<span class="token comment"># 追加文件到压缩包</span>
$ <span class="token function">tar</span> rvf archive.tar.gz xyz.txt
$ <span class="token function">tar</span> rvf archive.tar.bz2 xyz.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rsync" tabindex="-1"><a class="header-anchor" href="#rsync" aria-hidden="true">#</a> rsync</h2><p><code>rsync</code> 命令用于在多个目录之间、或者本地与远程目录之间同步。字母 <code>r</code> 表示 <code>remote</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">rsync</span> options <span class="token builtin class-name">source</span> destination
</code></pre></div><p>source 和 destination 是下列选项之一:</p><ul><li>一个本地文件或目录</li><li>一个远端文件或目录，以 <code>[user@]host:path</code> 的形式存在</li><li>一个远端 rsync 服务器，由 <code>rsync://[user@]host[:port]/path</code> 指定</li></ul><p>注意 source 和 destination 两者之一必须是本地文件。rsync 不支持远端到远端的复制。</p><p><code>rsync</code> 命令的参数如下。</p><ul><li><code>-a</code> 递归和保护文件属性</li><li><code>-v</code> 冗余输出</li><li><code>--delete</code> 删除可能在备份设备中已经存在但却不再存在于源设备中的文件</li><li><code>--rsh=ssh</code> 使用 ssh 程序作为远程 shell，目的地必须标注主机名。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 同步两个本地目录</span>
$ <span class="token function">rsync</span> <span class="token parameter variable">-av</span> playground foo

<span class="token comment"># 删除源设备不存在的文件</span>
$ <span class="token function">sudo</span> <span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--delete</span> /etc /home /usr/local /media/BigDisk/backup

<span class="token comment"># 远程同步</span>
$ <span class="token function">sudo</span> <span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--delete</span> <span class="token parameter variable">--rsh</span><span class="token operator">=</span>ssh /etc /home /usr/local remote-sys:/backup

<span class="token comment"># 与远程rsync主机同步</span>
$ <span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">-delete</span> rsync://rsync.gtlib.gatech.edu/path/to/oss fedora-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51),l=[c];function t(p,d){return n(),s("div",null,l)}const r=a(i,[["render",t],["__file","archiving.html.vue"]]);export{r as default};
