import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as l,o as e}from"./app-D_3IGtdL.js";const n={};function t(h,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h2 id="cp-命令" tabindex="-1"><a class="header-anchor" href="#cp-命令"><span>cp 命令</span></a></h2><p>cp 命令，主要用来复制文件和目录，同时借助某些选项，还可以实现复制整个目录，以及比对两文件的新旧而予以升级等功能。</p><p>cp 命令的基本格式如下:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# cp [选项] 源文件 目标文件</span></span></code></pre></div><p>选项:</p><ul><li>-a: 相当于 -d、-p、-r 选项的集合，这几个选项我们一一介绍；</li><li>-d: 如果源文件为软链接(对硬链接无效)，则复制出的目标文件也为软链接；</li><li>-i: 询问，如果目标文件已经存在，则会询问是否覆盖；</li><li>-l: 把目标文件建立为源文件的硬链接文件，而不是复制源文件；</li><li>-s: 把目标文件建立为源文件的软链接文件，而不是复制源文件；</li><li>-p: 复制后目标文件保留源文件的属性(包括所有者、所属组、权限和时间)；</li><li>-r: 递归复制，用于复制目录；</li><li>-u: 若目标文件比源文件有差异，则使用该选项可以更新目标文件，此选项可用于对文件的升级和备用。</li></ul><p>需要注意的是，源文件可以有多个，但这种情况下，目标文件必须是目录才可以。</p><h3 id="cp-命令基本用法" tabindex="-1"><a class="header-anchor" href="#cp-命令基本用法"><span>cp 命令基本用法</span></a></h3><p>cp 命令既可以复制文件，也可以复制目录。我们先来看看如何复制文件，例如:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# touch cangls</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#建立源文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# cp cangls /tmp/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#把源文件不改名复制到 /tmp/ 目录下</span></span></code></pre></div><p>如果需要改名复制，则命令如下:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# cp cangls /tmp/bols</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#改名复制</span></span></code></pre></div><p>如果复制的目标位置已经存在同名的文件，则会提示是否覆盖，因为 cp 命令默认执行的是 <code>cp -i</code> 的别名，例如:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# cp cangls /tmp/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">cp:是否覆盖&quot;/tmp/cangls&quot;?y</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#目标位置有同名文件，所以会提示是否覆盖</span></span></code></pre></div><p>接下来我们看看如何复制目录，其实复制目录只需使用 <code>-r</code> 选项即可，例如:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# mkdir movie</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#建立测试目录</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# cp -r /root/movie/ /tmp/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#目录原名复制</span></span></code></pre></div><h3 id="复制软链接文件" tabindex="-1"><a class="header-anchor" href="#复制软链接文件"><span>复制软链接文件</span></a></h3><p>如果源文件不是一个普通文件，而是一个软链接文件，那么是否可以复制软链接的属性呢? 我们试试:</p><div class="language-shellsession line-numbers-mode" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# ln -s /root/cangls /tmp/cangls_slink</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#建立一个测试软链接文件/tmp/cangls_slink</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# ll /tmp/cangls_slink</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">lrwxrwxrwx 1 root root 12 6 月 14 05:53 /tmp/cangls_slink -&gt; /root/cangls</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#源文件本身就是一个软链接文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# cp /tmp/cangls_slink /tmp/cangls_t1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#复制软链接文件，但是不加&quot;-d&quot;选项</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# cp -d /tmp/cangls_slink /tmp/cangls_t2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#复制软链接文件，加入&quot;-d&quot;选项</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# ll /tmp/cangls_t1 /tmp/cangls_t2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-rw-r--r-- 1 root root 0 6月 14 05:56 /tmp/cangls_t1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#会发现不加&quot;-d&quot;选项，实际复制的是软链接的源文件，而不是软链接文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">lrwxrwxrwx 1 root root 12 6 月 14 05:56/tmp/ cangls_t2-&gt; /root/cangls</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#而如果加入了&quot;-d&quot;选项，则会复制软链接文件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子说明，如果在复制软链接文件时不使用 <code>-d</code> 选项，则 <code>cp</code> 命令复制的是源文件，而不是软链接文件；只有加入了 <code>-d</code> 选项，才会复制软链接文件。请大家注意，<code>-d</code> 选项对硬链接是无效的。</p><h3 id="保留源文件属性复制" tabindex="-1"><a class="header-anchor" href="#保留源文件属性复制"><span>保留源文件属性复制</span></a></h3><p>我们发现，在执行复制命令后，目标文件的时间会变成复制命令的执行时间，而不是源文件的时间。例如:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# cp /var/lib/mlocate/mlocate.db /tmp/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# ll /var/lib/mlocate/mlocate.db</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-rw-r-----1 root slocate2328027 6月 14 02:08/var/lib/mlocate/mlocate.db</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#注意源文件的时间和所属组</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]#ll /tmp/mlocate.db</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-rw-r----- 1 root root2328027 6 月 14 06:05/tmp/mlocate.db</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#由于复制命令由root用户执行，所以目标文件的所属组为了root，而且时间也变成了复制命令的执行时间</span></span></code></pre></div><p>而当我们执行备份、曰志备份的时候，这些文件的时间可能是一个重要的参数，这就需执行 <code>-p</code> 选项了。这个选项会保留源文件的属性，包括所有者、所属组和时间。例如:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# cp -p /var/lib/mlocate/mlocate.db /tmp/mlocate.db_2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#使用&quot;-p&quot;选项</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# ll /var/lib/mlocate/mlocate.db /tmp/mlocate.db_2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-rw-r----- root slocate 2328027 6月 14 02:08 /tmp/mlocate.db_2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-rw-r----- root slocate 2328027 6月 14 02:08 /var/lib/mlocate/mlocate.db</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#源文件和目标文件的所有属性都一致，包括时间</span></span></code></pre></div><p>我们之前讲过，<code>-a</code> 选项相当于 &quot;-d、-p、-r&quot; 选项，这几个选项我们已经分别讲过了。所以，当我们使用 <code>-a</code> 选项时，目标文件和源文件的所有属性都一致，包括源文件的所有者，所属组、时间和软链接性。使用 <code>-a</code> 选项来取代 &quot;-d、-p、-r&quot; 选项更加方便。</p><h3 id="l-和-s-选项" tabindex="-1"><a class="header-anchor" href="#l-和-s-选项"><span>&quot;-l&quot; 和 &quot;-s&quot; 选项</span></a></h3><p>我们如果使用 <code>-l</code> 选项，则目标文件会被建立为源文件的硬链接；而如果使用了 <code>-s</code> 选项，则目标文件会被建立为源文件的软链接。</p><p>这两个选项和 <code>-d</code> 选项是不同的，<code>d</code> 选项要求源文件必须是软链接，目标文件才会复制为软链接；而 <code>-l</code> 和 <code>-s</code> 选项的源文件只需是普通文件，目标文件就可以直接复制为硬链接和软链接。例如:</p><div class="language-shellsession line-numbers-mode" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# touch bols</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#建立测试文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# ll -i bols</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">262154-rw-r--r-- 1 root root 0 6月 14 06:26 bols</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#源文件只是一个普通文件，而不是软链接文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# cp -l /root/bols /tmp/bols_h</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# cp -s /root/bols /tmp/bols_s</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#使用&quot;-l&quot; 和&quot;-s&quot;选项复制</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# ll -i /tmp/bols_h /tmp/bols_s</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">262154-rw-r--r-- 2root root 0 6 月 14 06:26/tmp/bols_h</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#目标文件 /tmp/bols_h 为源文件的硬链接文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">932113 lrwxrwxrwx 1 root root 10 6 月 14 06:27/tmp/bols_s -&gt; /root/bols</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#目标文件 /tmp/bols_s 为源文件的软链接文件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rm-命令" tabindex="-1"><a class="header-anchor" href="#rm-命令"><span>rm 命令</span></a></h2><p>当 Linux 系统使用很长时间之后，可能会有一些已经没用的文件(即垃圾)，这些文件不但会消耗宝贵的硬盘资源，还是降低系统的运行效率，因此需要及时地清理。</p><p>rm 是强大的删除命令，它可以永久性地删除文件系统中指定的文件或目录。在使用 rm 命令删除文件或目录时，系统不会产生任何提示信息。此命令的基本格式为:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# rm[选项] 文件或目录</span></span></code></pre></div><p>选项:</p><ul><li>-f: 强制删除(force)，和 <code>-i</code> 选项相反，使用 <code>-f</code>，系统将不再询问，而是直接删除目标文件或目录。</li><li>-i: 和 <code>-f</code> 正好相反，在删除文件或目录之前，系统会给出提示信息，使用 <code>-i</code> 可以有效防止不小心删除有用的文件或目录。</li><li>-r: 递归删除，主要用于删除目录，可删除指定目录及包含的所有内容，包括所有的子目录和文件。</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>rm 命令是一个具有破坏性的命令，因为 rm 命令会永久性地删除文件或目录，这就意味着，如果没有对文件或目录进行备份，一旦使用 rm 命令将其删除，将无法恢复，因此，尤其在使用 rm 命令删除目录时，要慎之又慎。</p></div><h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h3><p>rm 命令如果任何选项都不加，则默认执行的是 <code>rm -i 文件名</code>，也就是在删除一个文件之前会先询问是否删除。例如:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# touch cangls</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# rm cangls</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">rm:是否删除普通空文件&quot;cangls&quot;?y</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#删除前会询问是否删除</span></span></code></pre></div><h3 id="删除目录" tabindex="-1"><a class="header-anchor" href="#删除目录"><span>删除目录</span></a></h3><p>如果需要删除目录，则需要使用 <code>-r</code> 选项。例如:</p><div class="language-shellsession line-numbers-mode" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# mkdir -p /test/lm/movie/jp</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#递归建立测试目录</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# rm /test</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">rm:无法删除&quot;/test/&quot;: 是一个目录</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#如果不加&quot;-r&quot;选项，则会报错</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# rm -r /test</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">rm:是否进入目录&quot;/test&quot;?y</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">rm:是否进入目录&quot;/test/lm/movie&quot;?y</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">rm:是否删除目录&quot;/test/lm/movie/jp&quot;?y</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">rm:是否删除目录&quot;/test/lm/movie&quot;?y</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">rm:是否删除目录&quot;/test/lm&quot;?y</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">rm:是否删除目录&quot;/test&quot;?y</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#会分别询问是否进入子目录、是否删除子目录</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大家会发现，如果每级目录和每个文件都需要确认，那么在实际使用中简直是灾难!</p><h3 id="强制删除" tabindex="-1"><a class="header-anchor" href="#强制删除"><span>强制删除</span></a></h3><p>如果要删除的目录中有 1 万个子目录或子文件，那么普通的 rm 删除最少需要确认 1 万次。所以，在真正删除文件的时候，我们会选择强制删除。例如:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# mkdir -p /test/lm/movie/jp</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#重新建立测试目录</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# rm -rf /test</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#强制删除，一了百了</span></span></code></pre></div><p>加入了强制功能之后，删除就会变得很简单，但是需要注意，数据强制删除之后无法恢复，除非依赖第三方的数据恢复工具，如 extundelete 等。但要注意，数据恢复很难恢复完整的数据，一般能恢复 70%~80% 就很难得了。所以，与其把宝压在数据恢复上，不如养成良好的操作习惯。</p><p>虽然 <code>-rf</code> 选项是用来删除目录的，但是删除文件也不会报错。所以，为了使用方便，一般不论是删除文件还是删除目录，都会直接使用 <code>-rf</code> 选项。</p><h2 id="mv-命令" tabindex="-1"><a class="header-anchor" href="#mv-命令"><span>mv 命令</span></a></h2><p>mv 命令(move 的缩写)，既可以在不同的目录之间移动文件或目录，也可以对文件和目录进行重命名。该命令的基本格式如下:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# mv 【选项】 源文件 目标文件</span></span></code></pre></div><p>选项:</p><ul><li>-f: 强制覆盖，如果目标文件已经存在，则不询问，直接强制覆盖；</li><li>-i: 交互移动，如果目标文件已经存在，则询问用户是否覆盖(默认选项)；</li><li>-n: 如果目标文件已经存在，则不会覆盖移动，而且不询问用户；</li><li>-v: 显示文件或目录的移动过程；</li><li>-u: 若目标文件已经存在，但两者相比，源文件更新，则会对目标文件进行升级；</li></ul><p>需要注意的是，同 rm 命令类似，mv 命令也是一个具有破坏性的命令，如果使用不当，很可能给系统带来灾难性的后果。</p><h3 id="移动文件或目录" tabindex="-1"><a class="header-anchor" href="#移动文件或目录"><span>移动文件或目录</span></a></h3><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# mv cangls /tmp</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#移动之后，源文件会被删除，类似剪切</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# mkdir movie</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# mv movie/ /tmp</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#也可以移动目录。和 rm、cp 不同的是，mv 移动目录不需要加入 &quot;-r&quot; 选项</span></span></code></pre></div><p>如果移动的目标位置已经存在同名的文件，则同样会提示是否覆盖，因为 mv 命令默认执行的也是 <code>mv -i</code> 的别名，例如:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# touch cangls</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#重新建立文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# mv cangls /tmp</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">mv:县否覆盖&quot;tmp/cangls&quot;? y</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#由于 /tmp 目录下已经存在 cangls 文件，所以会提示是否覆盖，需要手工输入 y 覆盖移动</span></span></code></pre></div><h3 id="强制移动" tabindex="-1"><a class="header-anchor" href="#强制移动"><span>强制移动</span></a></h3><p>之前说过，如果目标目录下已经存在同名文件，则会提示是否覆盖，需要手工确认。这时如果移动的同名文件较多，则需要一个一个文件进行确认，很不方便。</p><p>如果我们确认需要覆盖已经存在的同名文件，则可以使用 <code>-f</code> 选项进行强制移动，这就不再需要用户手工确认了。例如:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# touch cangls</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#重新建立文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# mv -f cangls /tmp</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#就算 /tmp/ 目录下已经存在同名的文件，由于&quot;-f&quot;选项的作用，所以会强制覆盖</span></span></code></pre></div><h3 id="不覆盖移动" tabindex="-1"><a class="header-anchor" href="#不覆盖移动"><span>不覆盖移动</span></a></h3><p>既然可以强制覆盖移动，那也有可能需要不覆盖的移动。如果需要移动几百个同名文件，但是不想覆盖，这时就需要 <code>-n</code> 选项的帮助了。例如:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# ls /tmp</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/tmp/bols /tmp/cangls</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#在/tmp/目录下已经存在bols、cangls文件了</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# mv -vn bols cangls lmls /tmp/、</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&quot;lmls&quot;-&gt;&quot;/tmp/lmls&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#再向 /tmp/ 目录中移动同名文件，如果使用了 &quot;-n&quot; 选项，则可以看到只移动了 lmls，而同名的 bols 和 cangls 并没有移动(&quot;-v&quot; 选项用于显示移动过程)</span></span></code></pre></div><h3 id="改名" tabindex="-1"><a class="header-anchor" href="#改名"><span>改名</span></a></h3><p>如果源文件和目标文件在同一目录中，那就是改名。例如:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# mv bols lmls</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#把 bols 改名为 lmls</span></span></code></pre></div><p>目录也可以按照同样的方法改名。</p><h3 id="显示移动过程" tabindex="-1"><a class="header-anchor" href="#显示移动过程"><span>显示移动过程</span></a></h3><p>如果我们想要知道在移动过程中到底有哪些文件进行了移动，则可以使用 <code>-v</code> 选项来查看详细的移动信息。例如:</p><div class="language-shellsession" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# touch test1.txt test2.txt test3.txt</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#建立三个测试文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@localhost ~]# mv -v *.txt /tmp</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&quot;test1.txt&quot; -&gt; &quot;/tmp/test1.txt&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&quot;test2.txt&quot; -&gt; &quot;/tmp/test2.txt&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&quot;test3.txt&quot; -&gt; &quot;/tmp/test3.txt&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">#加入&quot;-v&quot;选项，可以看到有哪些文件进行了移</span></span></code></pre></div>`,73)]))}const d=i(n,[["render",t],["__file","other.html.vue"]]),r=JSON.parse('{"path":"/linux/command/other.html","title":"其他文件命令","lang":"zh-CN","frontmatter":{"title":"其他文件命令","icon":"sort","date":"2019-11-19T00:00:00.000Z","category":"Linux","description":"cp 命令 cp 命令，主要用来复制文件和目录，同时借助某些选项，还可以实现复制整个目录，以及比对两文件的新旧而予以升级等功能。 cp 命令的基本格式如下: 选项: -a: 相当于 -d、-p、-r 选项的集合，这几个选项我们一一介绍； -d: 如果源文件为软链接(对硬链接无效)，则复制出的目标文件也为软链接； -i: 询问，如果目标文件已经存在，则会...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/command/other.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"其他文件命令"}],["meta",{"property":"og:description","content":"cp 命令 cp 命令，主要用来复制文件和目录，同时借助某些选项，还可以实现复制整个目录，以及比对两文件的新旧而予以升级等功能。 cp 命令的基本格式如下: 选项: -a: 相当于 -d、-p、-r 选项的集合，这几个选项我们一一介绍； -d: 如果源文件为软链接(对硬链接无效)，则复制出的目标文件也为软链接； -i: 询问，如果目标文件已经存在，则会..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-11-19T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"其他文件命令\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-11-19T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"cp 命令","slug":"cp-命令","link":"#cp-命令","children":[{"level":3,"title":"cp 命令基本用法","slug":"cp-命令基本用法","link":"#cp-命令基本用法","children":[]},{"level":3,"title":"复制软链接文件","slug":"复制软链接文件","link":"#复制软链接文件","children":[]},{"level":3,"title":"保留源文件属性复制","slug":"保留源文件属性复制","link":"#保留源文件属性复制","children":[]},{"level":3,"title":"\\"-l\\" 和 \\"-s\\" 选项","slug":"l-和-s-选项","link":"#l-和-s-选项","children":[]}]},{"level":2,"title":"rm 命令","slug":"rm-命令","link":"#rm-命令","children":[{"level":3,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":3,"title":"删除目录","slug":"删除目录","link":"#删除目录","children":[]},{"level":3,"title":"强制删除","slug":"强制删除","link":"#强制删除","children":[]}]},{"level":2,"title":"mv 命令","slug":"mv-命令","link":"#mv-命令","children":[{"level":3,"title":"移动文件或目录","slug":"移动文件或目录","link":"#移动文件或目录","children":[]},{"level":3,"title":"强制移动","slug":"强制移动","link":"#强制移动","children":[]},{"level":3,"title":"不覆盖移动","slug":"不覆盖移动","link":"#不覆盖移动","children":[]},{"level":3,"title":"改名","slug":"改名","link":"#改名","children":[]},{"level":3,"title":"显示移动过程","slug":"显示移动过程","link":"#显示移动过程","children":[]}]}],"readingTime":{"minutes":10.46,"words":3139},"filePathRelative":"linux/command/other.md","localizedDate":"2019年11月19日","excerpt":"","autoDesc":true}');export{d as comp,r as data};
