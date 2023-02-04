import{_ as c,X as p,Y as t,a1 as l,$ as a,a0 as s,Z as n,a3 as o,H as d}from"./framework-e3372978.js";const i={},r=a("p",null,[a("code",null,"set"),s(" 命令是 Bash 脚本的重要环节，却常常被忽视，导致脚本的安全性和可维护性出问题。本章介绍 "),a("code",null,"set"),s(" 的基本用法，帮助您写出更安全的 Bash 脚本。")],-1),h=o(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>我们知道，Bash 执行脚本时，会创建一个子 Shell。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> script.sh
</code></pre></div><p>上面代码中，<code>script.sh</code> 是在一个子 Shell 里面执行。这个子 Shell 就是脚本的执行环境，Bash 默认给定了这个环境的各种参数。</p>`,4),u=a("code",null,"set",-1),b={href:"https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html",target:"_blank",rel:"noopener noreferrer"},k=o(`<p>顺便提一下，如果命令行下不带任何参数，直接运行 <code>set</code>，会显示所有的环境变量和 Shell 函数。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span>
</code></pre></div><h2 id="set-u" tabindex="-1"><a class="header-anchor" href="#set-u" aria-hidden="true">#</a> set -u</h2><p>执行脚本时，如果遇到不存在的变量，Bash 默认忽略它。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$a</span>
<span class="token builtin class-name">echo</span> bar
</code></pre></div><p>上面代码中，<code>$a</code> 是一个不存在的变量。执行结果如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">bash</span> script.sh

bar
</code></pre></div><p>可以看到，<code>echo $a</code> 输出了一个空行，Bash 忽略了不存在的 <code>$a</code>，然后继续执行 <code>echo bar</code>。大多数情况下，这不是开发者想要的行为，遇到变量不存在，脚本应该报错，而不是一声不响地往下执行。</p><p><code>set -u</code> 就用来改变这种行为。脚本在头部加上它，遇到不存在的变量就会报错，并停止执行。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-u</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$a</span>
<span class="token builtin class-name">echo</span> bar
</code></pre></div><p>运行结果如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">bash</span> script.sh
bash: script.sh:行4: a: 未绑定的变量
</code></pre></div><p>可以看到，脚本报错了，并且不再执行后面的语句。</p><p><code>-u</code> 还有另一种写法 <code>-o nounset</code>，两者是等价的。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> <span class="token parameter variable">-o</span> nounset
</code></pre></div><h2 id="set-x" tabindex="-1"><a class="header-anchor" href="#set-x" aria-hidden="true">#</a> set -x</h2><p>默认情况下，脚本执行后，只输出运行结果，没有其他内容。如果多个命令连续执行，它们的运行结果就会连续输出。有时会分不清，某一段内容是什么命令产生的。</p><p><code>set -x</code> 用来在运行结果之前，先输出执行的那一行命令。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-x</span>

<span class="token builtin class-name">echo</span> bar
</code></pre></div><p>执行上面的脚本，结果如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">bash</span> script.sh
+ <span class="token builtin class-name">echo</span> bar
bar
</code></pre></div><p>可以看到，执行 <code>echo bar</code> 之前，该命令会先打印出来，行首以 <code>+</code> 表示。这对于调试复杂的脚本是很有用的。</p><p><code>-x</code> 还有另一种写法 <code>-o xtrace</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> <span class="token parameter variable">-o</span> xtrace
</code></pre></div><p>脚本当中如果要关闭命令输出，可以使用 <code>set +x</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token builtin class-name">set</span> <span class="token parameter variable">-x</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$number</span> <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Number equals 1&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Number does not equal 1&quot;</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">set</span> +x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中，只对特定的代码段打开命令输出。</p><h2 id="bash-的错误处理" tabindex="-1"><a class="header-anchor" href="#bash-的错误处理" aria-hidden="true">#</a> Bash 的错误处理</h2><p>如果脚本里面有运行失败的命令(返回值非 <code>0</code>)，Bash 默认会继续执行后面的命令。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>

foo
<span class="token builtin class-name">echo</span> bar
</code></pre></div><p>上面脚本中，<code>foo</code> 是一个不存在的命令，执行时会报错。但是，Bash 会忽略这个错误，继续往下执行。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">bash</span> script.sh
script.sh:行3: foo: 未找到命令
bar
</code></pre></div><p>可以看到，Bash 只是显示有错误，并没有终止执行。</p><p>这种行为很不利于脚本安全和除错。实际开发中，如果某个命令失败，往往需要脚本停止执行，防止错误累积。这时，一般采用下面的写法。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
</code></pre></div><p>上面的写法表示只要 <code>command</code> 有非零返回值，脚本就会停止执行。</p><p>如果停止执行之前需要完成多个操作，就要采用下面三种写法。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 写法一</span>
<span class="token builtin class-name">command</span> <span class="token operator">||</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;command failed&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token comment"># 写法二</span>
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token builtin class-name">command</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;command failed&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>

<span class="token comment"># 写法三</span>
<span class="token builtin class-name">command</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;command failed&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>
</code></pre></div><p>另外，除了停止执行，还有一种情况。如果两个命令有继承关系，只有第一个命令成功了，才能继续执行第二个命令，那么就要采用下面的写法。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>command1 <span class="token operator">&amp;&amp;</span> command2
</code></pre></div><h2 id="set-e" tabindex="-1"><a class="header-anchor" href="#set-e" aria-hidden="true">#</a> set -e</h2><p>上面这些写法多少有些麻烦，容易疏忽。<code>set -e</code> 从根本上解决了这个问题，它使得脚本只要发生错误，就终止执行。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

foo
<span class="token builtin class-name">echo</span> bar
</code></pre></div><p>执行结果如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">bash</span> script.sh
script.sh:行4: foo: 未找到命令
</code></pre></div><p>可以看到，第 4 行执行失败以后，脚本就终止执行了。</p><p><code>set -e</code> 根据返回值来判断，一个命令是否运行失败。但是，某些命令的非零返回值可能不表示失败，或者开发者希望在命令失败的情况下，脚本继续执行下去。这时可以暂时关闭 <code>set -e</code>，该命令执行结束后，再重新打开 <code>set -e</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> +e
command1
command2
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>
</code></pre></div><p>上面代码中，<code>set +e</code> 表示关闭 <code>-e</code> 选项，<code>set -e</code> 表示重新打开 <code>-e</code> 选项。</p><p>还有一种方法是使用 <code>command || true</code>，使得该命令即使执行失败，脚本也不会终止执行。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

foo <span class="token operator">||</span> <span class="token boolean">true</span>
<span class="token builtin class-name">echo</span> bar
</code></pre></div><p>上面代码中，<code>true</code> 使得这一行语句总是会执行成功，后面的 <code>echo bar</code> 会执行。</p><p><code>-e</code> 还有另一种写法 <code>-o errexit</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> <span class="token parameter variable">-o</span> errexit
</code></pre></div><h2 id="set-o-pipefail" tabindex="-1"><a class="header-anchor" href="#set-o-pipefail" aria-hidden="true">#</a> set -o pipefail</h2><p><code>set -e</code> 有一个例外情况，就是不适用于管道命令。</p><p>所谓管道命令，就是多个子命令通过管道运算符 (<code>|</code>) 组合成为一个大的命令。Bash 会把最后一个子命令的返回值，作为整个命令的返回值。也就是说，只要最后一个子命令不失败，管道命令总是会执行成功，因此它后面命令依然会执行，<code>set -e</code> 就失效了。</p><p>请看下面这个例子。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

foo <span class="token operator">|</span> <span class="token builtin class-name">echo</span> a
<span class="token builtin class-name">echo</span> bar
</code></pre></div><p>执行结果如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">bash</span> script.sh
a
script.sh:行4: foo: 未找到命令
bar
</code></pre></div><p>上面代码中，<code>foo</code> 是一个不存在的命令，但是 <code>foo | echo a</code> 这个管道命令会执行成功，导致后面的 <code>echo bar</code> 会继续执行。</p><p><code>set -o pipefail</code> 用来解决这种情况，只要一个子命令失败，整个管道命令就失败，脚本就会终止执行。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-eo</span> pipefail

foo <span class="token operator">|</span> <span class="token builtin class-name">echo</span> a
<span class="token builtin class-name">echo</span> bar
</code></pre></div><p>运行后，结果如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">bash</span> script.sh
a
script.sh:行4: foo: 未找到命令
</code></pre></div><p>可以看到，<code>echo bar</code> 没有执行。</p><h2 id="其他参数" tabindex="-1"><a class="header-anchor" href="#其他参数" aria-hidden="true">#</a> 其他参数</h2><p><code>set</code> 命令还有一些其他参数。</p><ul><li><code>set -n</code>: 等同于 <code>set -o noexec</code>，不运行命令，只检查语法是否正确。</li><li><code>set -f</code>: 等同于 <code>set -o noglob</code>，表示不对通配符进行文件名扩展。</li><li><code>set -v</code>: 等同于 <code>set -o verbose</code>，表示打印 Shell 接收到的每一行输入。</li></ul><p>上面的 <code>-f</code> 和 <code>-v</code> 参数，可以分别使用 <code>set +f</code>、<code>set +v</code> 关闭。</p><h2 id="set-命令总结" tabindex="-1"><a class="header-anchor" href="#set-命令总结" aria-hidden="true">#</a> set 命令总结</h2><p>上面重点介绍的 <code>set</code> 命令的四个参数，一般都放在一起使用。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 写法一</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-euxo</span> pipefail

<span class="token comment"># 写法二</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-eux</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-o</span> pipefail
</code></pre></div><p>这两种写法建议放在所有 Bash 脚本的头部。</p><p>另一种办法是在执行 Bash 脚本的时候，从命令行传入这些参数。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> <span class="token parameter variable">-euxo</span> pipefail script.sh
</code></pre></div><h2 id="shopt-命令" tabindex="-1"><a class="header-anchor" href="#shopt-命令" aria-hidden="true">#</a> shopt 命令</h2><p><code>shopt</code> 命令用来调整 Shell 的参数，跟 <code>set</code> 命令的作用很类似。之所以会有这两个类似命令的主要原因是，<code>set</code> 是从 Ksh 继承的，属于 POSIX 规范的一部分，而 <code>shopt</code> 是 Bash 特有的。</p><p>直接输入 <code>shopt</code> 可以查看所有参数，以及它们各自打开和关闭的状态。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">shopt</span>
</code></pre></div><p><code>shopt</code> 命令后面跟着参数名，可以查询该参数是否打开。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">shopt</span> globstar
globstar  off
</code></pre></div><p>上面例子表示 <code>globstar</code> 参数默认是关闭的。</p><ol><li><p><strong><code>-s</code></strong></p><p><code>-s</code> 用来打开某个参数。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">shopt</span> <span class="token parameter variable">-s</span> optionNameHere
</code></pre></div></li><li><p><strong><code>-u</code></strong></p><p><code>-u</code> 用来关闭某个参数。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">shopt</span> <span class="token parameter variable">-u</span> optionNameHere
</code></pre></div><p>举例来说，<code>histappend</code> 这个参数表示退出当前 Shell 时，将操作历史追加到历史文件中。这个参数默认是打开的，如果使用下面的命令将其关闭，那么当前 Shell 的操作历史将替换掉整个历史文件。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">shopt</span> <span class="token parameter variable">-u</span> histappend
</code></pre></div></li><li><p><strong><code>-q</code></strong></p><p><code>-q</code> 的作用也是查询某个参数是否打开，但不是直接输出查询结果，而是通过命令的执行状态 (<code>$?</code>) 表示查询结果。如果状态为 <code>0</code>，表示该参数打开；如果为 <code>1</code>，表示该参数关闭。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">shopt</span> <span class="token parameter variable">-q</span> globstar
$ <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">1</span>
</code></pre></div><p>上面命令查询 <code>globstar</code> 参数是否打开。返回状态为 <code>1</code>，表示该参数是关闭的。</p><p>这个用法主要用于脚本，供 <code>if</code> 条件结构使用。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token builtin class-name">shopt</span> <span class="token parameter variable">-q</span> globstar<span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token punctuation">..</span>.
<span class="token keyword">if</span>
</code></pre></div></li></ol><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,86),g={href:"https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://vaneyckt.io/posts/safer_bash_scripts_with_set_euxo_pipefail/",target:"_blank",rel:"noopener noreferrer"},v={href:"http://www.davidpashley.com/articles/writing-robust-shell-scripts/",target:"_blank",rel:"noopener noreferrer"};function f(x,_){const e=d("ExternalLinkIcon");return p(),t("div",null,[r,l(" more "),h,a("p",null,[u,s(" 命令用来修改子 Shell 环境的运行参数，即定制环境。一共有十几个参数可以定制，"),a("a",b,[s("官方手册"),n(e)]),s("有完整清单，本章介绍其中最常用的几个。")]),k,a("ul",null,[a("li",null,[a("a",g,[s("The Set built-in"),n(e)])]),a("li",null,[a("a",m,[s("Safer bash scripts with 'set -euxo pipefail’"),n(e)])]),a("li",null,[a("a",v,[s("Writing Robust Bash Shell Scripts"),n(e)])])])])}const q=c(i,[["render",f],["__file","set.html.vue"]]);export{q as default};
