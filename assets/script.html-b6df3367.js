import{_ as e,X as o,Y as c,a1 as p,$ as s,a0 as a,Z as t,a3 as d,C as l}from"./framework-a91f7991.js";const i={},r=s("p",null,"脚本(script)就是包含一系列命令的一个文本文件。Shell 读取这个文件，依次执行里面的所有命令，就好像这些命令直接输入到命令行一样。所有能够在命令行完成的任务，都能够用脚本完成。",-1),h=s("p",null,"脚本的好处是可以重复使用，也可以指定在特定场合自动调用，比如系统启动或关闭时自动执行脚本。",-1),u=d(`<h2 id="shebang-行" tabindex="-1"><a class="header-anchor" href="#shebang-行" aria-hidden="true">#</a> Shebang 行</h2><p>脚本的第一行通常是指定解释器，即这个脚本必须通过什么解释器执行。这一行以 <code>#!</code> 字符开头，这个字符称为 Shebang，所以这一行就叫做 Shebang 行。</p><p><code>#!</code> 后面就是脚本解释器的位置，Bash 脚本的解释器一般是 <code>/bin/sh</code> 或 <code>/bin/bash</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token comment"># 或者</span>
<span class="token comment">#!/bin/bash</span>
</code></pre></div><p><code>#!</code> 与脚本解释器之间有没有空格，都是可以的。</p><p>如果 Bash 解释器不放在目录 <code>/bin</code>，脚本就无法执行了。为了保险，可以写成下面这样。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
</code></pre></div><p>上面命令使用 <code>env</code> 命令(这个命令总是在 <code>/usr/bin</code> 目录)，返回 Bash 可执行文件的位置。<code>env</code> 命令的详细介绍，请看后文。</p><p>Shebang 行不是必需的，但是建议加上这行。如果缺少该行，就需要手动将脚本传给解释器。举例来说，脚本是 <code>script.sh</code>，有 Shebang 行的时候，可以直接调用执行。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>./script.sh
</code></pre></div><p>上面例子中，<code>script.sh</code> 是脚本文件名。脚本通常使用 <code>.sh</code> 后缀名，不过这不是必需的。</p><p>如果没有 Shebang 行，就只能手动将脚本传给解释器来执行。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ /bin/sh ./script.sh
<span class="token comment"># 或者</span>
$ <span class="token function">bash</span> ./script.sh
</code></pre></div><h2 id="执行权限和路径" tabindex="-1"><a class="header-anchor" href="#执行权限和路径" aria-hidden="true">#</a> 执行权限和路径</h2><p>前面说过，只要指定了 Shebang 行的脚本，可以直接执行。这有一个前提条件，就是脚本需要有执行权限。可以使用下面的命令，赋予脚本执行权限。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 给所有用户执行权限</span>
$ <span class="token function">chmod</span> +x script.sh

<span class="token comment"># 给所有用户读权限和执行权限</span>
$ <span class="token function">chmod</span> +rx script.sh
<span class="token comment"># 或者</span>
$ <span class="token function">chmod</span> <span class="token number">755</span> script.sh

<span class="token comment"># 只给脚本拥有者读权限和执行权限</span>
$ <span class="token function">chmod</span> u+rx script.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本的权限通常设为 <code>755</code> (拥有者有所有权限，其他人有读和执行权限)或者 <code>700</code>(只有拥有者可以执行)。</p><p>除了执行权限，脚本调用时，一般需要指定脚本的路径(比如 <code>path/script.sh</code>)。如果将脚本放在环境变量 <code>$PATH</code> 指定的目录中，就不需要指定路径了。因为 Bash 会自动到这些目录中，寻找是否存在同名的可执行文件。</p><p>建议在主目录新建一个 <code>~/bin</code> 子目录，专门存放可执行脚本，然后把 <code>~/bin</code> 加入 <code>$PATH</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:~/bin
</code></pre></div><p>上面命令改变环境变量 <code>$PATH</code>，将 <code>~/bin</code> 添加到 <code>$PATH</code> 的末尾。可以将这一行加到 <code>~/.bashrc</code> 文件里面，然后重新加载一次 <code>.bashrc</code>，这个配置就可以生效了。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.bashrc
</code></pre></div><p>以后不管在什么目录，直接输入脚本文件名，脚本就会执行。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>script.sh
</code></pre></div><p>上面命令没有指定脚本路径，因为 <code>script.sh</code> 在 <code>$PATH</code> 指定的目录中。</p><h2 id="env-命令" tabindex="-1"><a class="header-anchor" href="#env-命令" aria-hidden="true">#</a> env 命令</h2><p><code>env</code> 命令总是指向 <code>/usr/bin/env</code> 文件，或者说，这个二进制文件总是在目录 <code>/usr/bin</code>。</p><p><code>#!/usr/bin/env NAME</code> 这个语法的意思是，让 Shell 查找 <code>$PATH</code> 环境变量里面第一个匹配的 <code>NAME</code>。如果您不知道某个命令的具体路径，或者希望兼容其他用户的机器，这样的写法就很有用。</p><p><code>/usr/bin/env bash</code> 的意思就是，返回 <code>bash</code> 可执行文件的位置，前提是 <code>bash</code> 的路径是在 <code>$PATH</code> 里面。其他脚本文件也可以使用这个命令。比如 Node.js 脚本的 Shebang 行，可以写成下面这样。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env node</span>
</code></pre></div><p><code>env</code> 命令的参数如下。</p><ul><li><code>-i</code>, <code>--ignore-environment</code>: 不带环境变量启动。</li><li><code>-u</code>, <code>--unset=NAME</code>: 从环境变量中删除一个变量。</li><li><code>--help</code>: 显示帮助。</li><li><code>--version</code>: 输出版本信息。</li></ul><p>下面是一个例子，新建一个不带任何环境变量的 Shell。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">env</span> <span class="token parameter variable">-i</span> /bin/sh
</code></pre></div><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><p>Bash 脚本中，<code>#</code> 表示注释，可以放在行首，也可以放在行尾。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 本行是注释</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;Hello World!&#39;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&#39;Hello World!&#39;</span> <span class="token comment"># 井号后面的部分也是注释</span>
</code></pre></div><p>建议在脚本开头，使用注释说明当前脚本的作用，这样有利于日后的维护。</p><h2 id="脚本参数" tabindex="-1"><a class="header-anchor" href="#脚本参数" aria-hidden="true">#</a> 脚本参数</h2><p>调用脚本的时候，脚本文件名后面可以带有参数。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>script.sh word1 word2 word3
</code></pre></div><p>上面例子中，<code>script.sh</code> 是一个脚本文件，<code>word1</code>、<code>word2</code> 和 <code>word3</code> 是三个参数。</p><p>脚本文件内部，可以使用特殊变量，引用这些参数。</p><ul><li><code>$0</code>: 脚本文件名，即 <code>script.sh</code>。</li><li><code>$1</code>~<code>$9</code>: 对应脚本的第一个参数到第九个参数。</li><li><code>$#</code>: 参数的总数。</li><li><code>$@</code>: 全部的参数，参数之间使用空格分隔。</li><li><code>$*</code>: 全部的参数，参数之间使用变量 <code>$IFS</code> 值的第一个字符分隔，默认为空格，但是可以自定义。</li></ul><p>如果脚本的参数多于 9 个，那么第 10 个参数可以用 <code>\${10}</code> 的形式引用，以此类推。</p><p>注意，如果命令是 <code>command -o foo bar</code>，那么 <code>-o</code> 是 <code>$1</code>，<code>foo</code> 是 <code>$2</code>，<code>bar</code> 是 <code>$3</code>。</p><p>下面是一个脚本内部读取命令行参数的例子。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># script.sh</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;全部参数: &quot;</span> <span class="token variable">$@</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;命令行参数数量: &quot;</span> <span class="token variable">$#</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;$0 = &#39;</span> <span class="token variable">$0</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;$1 = &#39;</span> <span class="token variable">$1</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;$2 = &#39;</span> <span class="token variable">$2</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;$3 = &#39;</span> <span class="token variable">$3</span>
</code></pre></div><p>执行结果如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ ./script.sh a b c
全部参数: a b c
命令行参数数量: <span class="token number">3</span>
<span class="token variable">$0</span> <span class="token operator">=</span>  script.sh
<span class="token variable">$1</span> <span class="token operator">=</span>  a
<span class="token variable">$2</span> <span class="token operator">=</span>  b
<span class="token variable">$3</span> <span class="token operator">=</span>  c
</code></pre></div><p>用户可以输入任意数量的参数，利用 <code>for</code> 循环，可以读取每一个参数。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>
</code></pre></div><p>上面例子中，<code>$@</code> 返回一个全部参数的列表，然后使用 <code>for</code> 循环遍历。</p><p>如果多个参数放在双引号里面，视为一个参数。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>./script.sh <span class="token string">&quot;a b&quot;</span>
</code></pre></div><p>上面例子中，Bash 会认为 <code>&quot;a b&quot;</code> 是一个参数，<code>$1</code> 会返回 <code>a b</code>。注意，返回时不包括双引号。</p><h2 id="shift-命令" tabindex="-1"><a class="header-anchor" href="#shift-命令" aria-hidden="true">#</a> shift 命令</h2><p><code>shift</code> 命令可以改变脚本参数，每次执行都会移除脚本当前的第一个参数 (<code>$1</code>)，使得后面的参数向前一位，即 <code>$2</code> 变成 <code>$1</code>、<code>$3</code> 变成 <code>$2</code>、<code>$4</code> 变成 <code>$3</code>，以此类推。</p><p><code>while</code> 循环结合 <code>shift</code> 命令，也可以读取每一个参数。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;一共输入了 <span class="token variable">$#</span> 个参数&quot;</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;剩下 <span class="token variable">$#</span> 个参数&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;参数: <span class="token variable">$1</span>&quot;</span>
  <span class="token builtin class-name">shift</span>
<span class="token keyword">done</span>
</code></pre></div><p>上面例子中，<code>shift</code> 命令每次移除当前第一个参数，从而通过 <code>while</code> 循环遍历所有参数。</p><p><code>shift</code> 命令可以接受一个整数作为参数，指定所要移除的参数个数，默认为 <code>1</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">shift</span> <span class="token number">3</span>
</code></pre></div><p>上面的命令移除前三个参数，原来的 <code>$4</code> 变成 <code>$1</code>。</p><h2 id="getopts-命令" tabindex="-1"><a class="header-anchor" href="#getopts-命令" aria-hidden="true">#</a> getopts 命令</h2><p><code>getopts</code> 命令用在脚本内部，可以解析复杂的脚本命令行参数，通常与 <code>while</code> 循环一起使用，取出脚本所有的带有前置连词线 (<code>-</code>) 的参数。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">getopts</span> optstring name
</code></pre></div><p>它带有两个参数。第一个参数 <code>optstring</code> 是字符串，给出脚本所有的连词线参数。比如，某个脚本可以有三个配置项参数 <code>-l</code>、<code>-h</code>、<code>-a</code>，其中只有 <code>-a</code> 可以带有参数值，而 <code>-l</code> 和 <code>-h</code> 是开关参数，那么 <code>getopts</code> 的第一个参数写成 <code>lha:</code>，顺序不重要。注意，<code>a</code> 后面有一个冒号，表示该参数带有参数值，<code>getopts</code> 规定带有参数值的配置项参数，后面必须带有一个冒号 (<code>:</code>)。<code>getopts</code> 的第二个参数 <code>name</code> 是一个变量名，用来保存当前取到的配置项参数，即 <code>l</code>、<code>h</code> 或 <code>a</code>。</p><p>下面是一个例子。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token builtin class-name">getopts</span> <span class="token string">&#39;lha:&#39;</span> OPTION<span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$OPTION</span>&quot;</span> <span class="token keyword">in</span>
    l<span class="token punctuation">)</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;linuxconfig&quot;</span>
      <span class="token punctuation">;</span><span class="token punctuation">;</span>

    h<span class="token punctuation">)</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;h stands for h&quot;</span>
      <span class="token punctuation">;</span><span class="token punctuation">;</span>

    a<span class="token punctuation">)</span>
      <span class="token assign-left variable">avalue</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$OPTARG</span>&quot;</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;The value provided is <span class="token variable">$OPTARG</span>&quot;</span>
      <span class="token punctuation">;</span><span class="token punctuation">;</span>
    ?<span class="token punctuation">)</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;script usage: <span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> $0<span class="token variable">)</span></span> [-l] [-h] [-a somevalue]&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>
      <span class="token builtin class-name">exit</span> <span class="token number">1</span>
      <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">shift</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$((</span>$OPTIND <span class="token operator">-</span> <span class="token number">1</span><span class="token variable">))</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code>while</code> 循环不断执行 <code>getopts &#39;lha:&#39; OPTION</code> 命令，每次执行就会读取一个连词线参数(以及对应的参数值)，然后进入循环体。变量 <code>OPTION</code> 保存的是，当前处理的那一个连词线参数(即 <code>l</code>、<code>h</code> 或 <code>a</code>)。如果用户输入了没有指定的参数(比如 <code>-x</code>)，那么 <code>OPTION</code> 等于 <code>?</code>。循环体内使用 <code>case</code> 判断，处理这四种不同的情况。</p><p>如果某个连词线参数带有参数值，比如 <code>-a foo</code>，那么处理 <code>a</code> 参数的时候，环境变量 <code>$OPTARG</code> 保存的就是参数值。</p><p>注意，只要遇到不带连词线的参数，<code>getopts</code> 就会执行失败，从而退出 <code>while</code> 循环。比如，<code>getopts</code> 可以解析 <code>command -l foo</code>，但不可以解析 <code>command foo -l</code>。另外，多个连词线参数写在一起的形式，比如 <code>command -lh</code>，<code>getopts</code> 也可以正确处理。</p><p>变量 <code>$OPTIND</code> 在 <code>getopts</code> 开始执行前是 <code>1</code>，然后每次执行就会加 <code>1</code>。等到退出 <code>while</code> 循环，就意味着连词线参数全部处理完毕。这时，<code>$OPTIND - 1</code> 就是已经处理的连词线参数个数，使用 <code>shift</code> 命令将这些参数移除，保证后面的代码可以用 <code>$1</code>、<code>$2</code> 等处理命令的主参数。</p><h2 id="配置项参数终止符" tabindex="-1"><a class="header-anchor" href="#配置项参数终止符" aria-hidden="true">#</a> 配置项参数终止符 <code>--</code></h2><p>变量当作命令的参数时，有时希望指定变量只能作为实体参数，不能当作配置项参数，这时可以使用配置项参数终止符 <code>--</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">myPath</span><span class="token operator">=</span><span class="token string">&quot;~/docs&quot;</span>
<span class="token function">ls</span> -- <span class="token variable">$myPath</span>
</code></pre></div><p>上面例子中，<code>--</code> 强制变量 <code>$myPath</code> 只能当作实体参数(即路径名)解释。</p><p>如果变量不是路径名，就会报错。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">myPath</span><span class="token operator">=</span><span class="token string">&quot;-l&quot;</span>
$ <span class="token function">ls</span> -- <span class="token variable">$myPath</span>
ls: 无法访问<span class="token string">&#39;-l&#39;</span><span class="token builtin class-name">:</span> 没有那个文件或目录
</code></pre></div><p>上面例子中，变量 <code>myPath</code> 的值为 <code>-l</code>，不是路径。但是，<code>--</code> 强制 <code>$myPath</code> 只能作为路径解释，导致报错“不存在该路径”。</p><h2 id="exit-命令" tabindex="-1"><a class="header-anchor" href="#exit-命令" aria-hidden="true">#</a> exit 命令</h2><p><code>exit</code> 命令用于终止当前脚本的执行，并向 Shell 返回一个退出值。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">exit</span>
</code></pre></div><p>上面命令中止当前脚本，将最后一条命令的退出状态，作为整个脚本的退出状态。</p><p><code>exit</code> 命令后面可以跟参数，该参数就是退出状态。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 退出值为0(成功)</span>
$ <span class="token builtin class-name">exit</span> <span class="token number">0</span>

<span class="token comment"># 退出值为1(失败)</span>
$ <span class="token builtin class-name">exit</span> <span class="token number">1</span>
</code></pre></div><p>退出时，脚本会返回一个退出值。脚本的退出值，<code>0</code> 表示正常，<code>1</code> 表示发生错误，<code>2</code> 表示用法不对，<code>126</code> 表示不是可执行脚本，<code>127</code> 表示命令没有发现。如果脚本被信号 <code>N</code> 终止，则退出值为 <code>128 + N</code>。简单来说，只要退出值非 0，就认为执行出错。</p><p>下面是一个例子。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span> <span class="token operator">!=</span> <span class="token string">&quot;0&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;根用户才能执行当前脚本&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
</code></pre></div><p>上面的例子中，<code>id -u</code> 命令返回用户的 ID，一旦用户的 ID 不等于 <code>0</code>(根用户的 ID)，脚本就会退出，并且退出码为 <code>1</code>，表示运行失败。</p><p><code>exit</code> 与 <code>return</code> 命令的差别是，<code>return</code> 命令是函数的退出，并返回一个值给调用者，脚本依然执行。<code>exit</code> 是整个脚本的退出，如果在函数之中调用 <code>exit</code>，则退出函数，并终止脚本执行。</p><h2 id="命令执行结果" tabindex="-1"><a class="header-anchor" href="#命令执行结果" aria-hidden="true">#</a> 命令执行结果</h2><p>命令执行结束后，会有一个返回值。<code>0</code> 表示执行成功，非 <code>0</code> (通常是 <code>1</code>)表示执行失败。环境变量 <code>$?</code> 可以读取前一个命令的返回值。</p><p>利用这一点，可以在脚本中对命令执行结果进行判断。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">$some_directory</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;0&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token function">rm</span> *
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;无法切换目录!&quot;</span> <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token file-descriptor important">&amp;2</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
</code></pre></div><p>上面例子中，<code>cd $some_directory</code> 这个命令如果执行成功(返回值等于 <code>0</code>)，就删除该目录里面的文件，否则退出脚本，整个脚本的返回值变为 <code>1</code>，表示执行失败。</p><p>由于 <code>if</code> 可以直接判断命令的执行结果，执行相应的操作，上面的脚本可以改写成下面的样子。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token builtin class-name">cd</span> <span class="token variable">$some_directory</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token function">rm</span> *
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Could not change directory! Aborting.&quot;</span> <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token file-descriptor important">&amp;2</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
</code></pre></div><p>更简洁的写法是利用两个逻辑运算符 <code>&amp;&amp;</code>(且)和 <code>||</code>(或)。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 第一步执行成功，才会执行第二步</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$some_directory</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> *

<span class="token comment"># 第一步执行失败，才会执行第二步</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$some_directory</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
</code></pre></div><h2 id="source-命令" tabindex="-1"><a class="header-anchor" href="#source-命令" aria-hidden="true">#</a> source 命令</h2><p><code>source</code> 命令用于执行一个脚本，通常用于重新加载一个配置文件。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> .bashrc
</code></pre></div><p><code>source</code> 命令最大的特点是在当前 Shell 执行脚本，不像直接执行脚本时，会新建一个子 Shell。所以，<code>source</code> 命令执行脚本时，不需要 <code>export</code> 变量。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># test.sh</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$foo</span>
</code></pre></div><p>上面脚本输出 <code>$foo</code> 变量的值。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 当前 Shell 新建一个变量 foo</span>
$ <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token comment"># 打印输出 1</span>
$ <span class="token builtin class-name">source</span> test.sh
<span class="token number">1</span>

<span class="token comment"># 打印输出空字符串</span>
$ <span class="token function">bash</span> test.sh
</code></pre></div><p>上面例子中，当前 Shell 的变量 <code>foo</code> 并没有 <code>export</code>，所以直接执行无法读取，但是 <code>source</code> 执行可以读取。</p><p><code>source</code> 命令的另一个用途，是在脚本内部加载外部库。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">source</span> ./lib.sh

function_from_lib
</code></pre></div><p>上面脚本在内部使用 <code>source</code> 命令加载了一个外部库，然后就可以在脚本里面，使用这个外部库定义的函数。</p><p><code>source</code> 有一个简写形式，可以使用一个点 (<code>.</code>) 来表示。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span> .bashrc
</code></pre></div><h2 id="别名-alias-命令" tabindex="-1"><a class="header-anchor" href="#别名-alias-命令" aria-hidden="true">#</a> 别名，alias 命令</h2><p><code>alias</code> 命令用来为一个命令指定别名，这样更便于记忆。下面是 <code>alias</code> 的格式。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">alias</span> <span class="token assign-left variable">NAME</span><span class="token operator">=</span>DEFINITION
</code></pre></div><p>上面命令中，<code>NAME</code> 是别名的名称，<code>DEFINITION</code> 是别名对应的原始命令。注意，等号两侧不能有空格，否则会报错。</p><p>一个常见的例子是为 <code>grep</code> 命令起一个 <code>search</code> 的别名。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">alias</span> <span class="token assign-left variable">search</span><span class="token operator">=</span>grep
</code></pre></div><p><code>alias</code> 也可以用来为长命令指定一个更短的别名。下面是通过别名定义一个 <code>today</code> 的命令。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">alias</span> <span class="token assign-left variable">today</span><span class="token operator">=</span><span class="token string">&#39;date +&quot;%A, %B %-d, %Y&quot;&#39;</span>
$ today
星期一, 一月 <span class="token number">6</span>, <span class="token number">2020</span>
</code></pre></div><p>有时为了防止误删除文件，可以指定 <code>rm</code> 命令的别名。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">alias</span> <span class="token assign-left variable">rm</span><span class="token operator">=</span><span class="token string">&#39;rm -i&#39;</span>
</code></pre></div><p>上面命令指定 <code>rm</code> 命令是 <code>rm -i</code>，每次删除文件之前，都会让用户确认。</p><p><code>alias</code> 定义的别名也可以接受参数，参数会直接传入原始命令。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">alias</span> <span class="token assign-left variable">echo</span><span class="token operator">=</span><span class="token string">&#39;echo It says: &#39;</span>
$ <span class="token builtin class-name">echo</span> hello world
It says: hello world
</code></pre></div><p>上面例子中，别名定义了 <code>echo</code> 命令的前两个参数，等同于修改了 <code>echo</code> 命令的默认行为。</p><p>指定别名以后，就可以像使用其他命令一样使用别名。一般来说，都会把常用的别名写在 <code>~/.bashrc</code> 的末尾。另外，只能为命令定义别名，为其他部分(比如很长的路径)定义别名是无效的。</p><p>直接调用 <code>alias</code> 命令，可以显示所有别名。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">alias</span>
</code></pre></div><p><code>unalias</code> 命令可以解除别名。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">unalias</span> lt
</code></pre></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,134),b={href:"https://linuxconfig.org/how-to-use-getopts-to-parse-a-script-options",target:"_blank",rel:"noopener noreferrer"};function k(g,v){const n=l("ExternalLinkIcon");return o(),c("div",null,[r,h,p(" more "),u,s("ul",null,[s("li",null,[s("a",b,[a("How to use getopts to parse a script options"),t(n)]),a(", Egidio Docile")])])])}const $=e(i,[["render",k],["__file","script.html.vue"]]);export{$ as default};
