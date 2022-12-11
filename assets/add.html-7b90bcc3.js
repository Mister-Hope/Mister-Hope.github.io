import{ac as n,F as e,G as o,K as t,E as s,R as a,ae as p}from"./framework-729f259c.js";const l={},c=s("p",null,[a("文件名(或者目录名)是执行 Linux 命令中最常见的参数，例如前面介绍的 "),s("code",null,"cd"),a("、"),s("code",null,"mkdir"),a("、"),s("code",null,"cp"),a(" 等命令，都涉及到了文件名。然而对初学者来说，输入完整的文件名感觉很麻烦，尤其面临文件名(目录名)特别长的时候。")],-1),u=s("p",null,"考虑到这种情况，Shell (Bash) 提供了一种称为“命令行自动补全”的功能，即在输入文件名的时候，只需要输入该文件名的前几个字符，然后按 Tab 键，Shell 就可以自动将文件名补全。",-1),i=p(`<p>举个例子，在 <code>/etc</code> 目录下，执行如下命令:</p><div class="language-shell-session" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">cd</span> /etc</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost etc]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">cd</span> fs <span class="token operator">&lt;</span>-- 按一次 Tab 键</span></span>
</code></pre></div><p>当按下 Tab 键时，您会发现 Shell 自动将 &quot;fs&quot; 补全成了 &quot;fatab&quot;，这是因为当前 <code>/etc</code> 目录中只有 fstab 是以 &quot;fs&quot; 开头，因此 Shell 可以确定这里想要输入的文件名称为 fstab。</p><p>那么，如果当前目录中含有多个以指定字符(或字符串)开头的目录或文件，Shell 还可以成功辨认吗? 答案是否定的，但它会以列表的形式给出所有以指定字符或字符串开头的文件或目录，供用户选择。</p><p>例如，还是在 <code>/etc</code> 目录下，执行如下命令:</p><div class="language-shell-session" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost etc]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">cd</span> b <span class="token operator">&lt;</span>-- 连续按两次 Tab 键</span></span>
<span class="token output">bash_completion.d/      blkid/          bonobo-activation/
bashrc                  bluetooth
</span></code></pre></div><p>可以看到，当按一次 Tab 键时，Shell 没有任何反映，原因就是当前目录下以 &quot;b&quot; 为开头的文件或目录有多个(2 个以上)，仅凭一个字符 &quot;b&quot; 无法精准判断出具体指的是哪个文件。而当再一次按下 Tab 键时，Shell 会列表的形式显示给用户当前目录下所有以 &quot;b&quot; 开头的文件或目录。</p><p>事实上，Shell 提供的命令行补全功能不仅适用于补全文件名，也同样适用于所有 Linux 命令。举个例子，当输入 <code>ca</code> 并连续按下 2 次 Tab 键时，Shell 会罗列出所有以 &quot;ca&quot; 开头的 Linux 命令，如下所示:</p><div class="language-shell-session" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost etc]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash">ca <span class="token operator">&lt;</span>--连续按两次 Tab 键</span></span>
<span class="token output">cacertdir_rehash    cache_restore       capsh       catchsegv
cache_check         cal                 captoinfo
cache_dump          caller              case
cache_repair        canberra-gtk-play   cat
</span></code></pre></div><p>另外，Shell 还有一套被称作通配符的转用符号，这些通配符可以搜索并匹配文件名的一部分，从而大大简化了文件名的输入。</p><ul><li><code>*</code>: 匹配任意数量的字符。</li><li><code>?</code>: 匹配任意一个字符。</li><li><code>[]</code>: 匹配括号内的任意一个字符，甚至 <code>[]</code> 中还可以包含用 <code>-</code>(短横线)连接的字符或数字，表示一定范围内的字符或数字。</li></ul><p>为了学习这些通配符的用法，首先需要建立一个空目录(如 test)，并在该目录中创建一些文件(供测试用)，执行命令如下:</p><div class="language-shell-session" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost etc]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash">makdir <span class="token builtin class-name">test</span></span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost etc]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">cd</span> <span class="token builtin class-name">test</span></span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost test]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">touch</span> apple banana grape grapefruit watermelon</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost test]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">ls</span></span></span>
<span class="token output">apple banana grape grapefruit watermelon
</span></code></pre></div><p>在此基础上，继续执行如下命令:</p><div class="language-shell-session" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost test]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">ls</span> a* <span class="token operator">&lt;</span>--匹配所有以 a 字符开头的文件名</span></span>
<span class="token output">apple
</span><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost test]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">ls</span> g*t <span class="token operator">&lt;</span>--匹配所有以 g 字符开头，以 t 字符结尾的文件名</span></span>
<span class="token output">grapefruit
</span><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost test]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">ls</span> *e* <span class="token operator">&lt;</span>--匹配所有包含 e 字符的文件名</span></span>
<span class="token output">apple grape grapefruit watermelon
</span><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost test]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">ls</span> *n* <span class="token operator">&lt;</span>--匹配所有包含 n 字符的文件名</span></span>
<span class="token output">banana watermelon
</span></code></pre></div><p>结合以上实例，因为 <code>*</code> 可以匹配任何数量的字符，因此可以一一实现实例中标注的功能。</p><p>接下来，列举一下使用 ? 匹配文件名的示例:</p><div class="language-shell-session" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost test]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">ls</span> ????e</span></span>
<span class="token output">apple grape
</span><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost test]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">ls</span> g???e*</span></span>
<span class="token output">grape grapefruit
</span></code></pre></div><p>因为 1 个 ? 只能匹配 1 个任意字符，因此该示例中第一个例子表示的是匹配任意包含 5 个字符但以 e 结尾的文件(apple 和 grape)，第二例子表示匹配任何以 g 开头且第 5 个字符为 e 的文件(grape 和 grapefruit)。</p><p>最后，列举一些使用括号 <code>[]</code> 匹配文件名的示例:</p><div class="language-shell-session" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost test]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">ls</span> <span class="token punctuation">[</span>abw<span class="token punctuation">]</span>*</span></span>
<span class="token output">apple banana watermelon
</span><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost test]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">ls</span> <span class="token punctuation">[</span>agw<span class="token punctuation">]</span>*<span class="token punctuation">[</span>ne<span class="token punctuation">]</span></span></span>
<span class="token output">apple grape watermelon
</span></code></pre></div><p>此示例中，第一个例子表示匹配任何以 a、b 或 w 开头的文件；第二个例子中表示匹配任何以 a、g、w 开头，以 n 或 e 结尾的文件名。</p><p>不仅如此，<code>[]</code> 中还可以通过 -(短横线)表示一定范围内的任意字符(或数字)，例如:</p><div class="language-shell-session" data-ext="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost test]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">ls</span> <span class="token punctuation">[</span>a-g<span class="token punctuation">]</span>*</span></span>
<span class="token output">apple banana grape grapefruit
</span></code></pre></div><p>其中，<code>[a-g]*</code> 表示匹配以字母 a 到 g 之间任何一个字母开头的文件名。</p>`,25);function r(k,h){return e(),o("div",null,[c,u,t(" more "),i])}const g=n(l,[["render",r],["__file","add.html.vue"]]);export{g as default};
