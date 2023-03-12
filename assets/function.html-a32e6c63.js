import{_ as e,X as o,Y as t,a1 as c,$ as a,a0 as n,Z as p,a3 as l,C as i}from"./framework-a91f7991.js";const u={},d=a("p",null,"本章介绍 Bash 函数的用法。",-1),r=l(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>函数(function)是可以重复使用的代码片段，有利于代码的复用。它与别名(alias)的区别是，别名只适合封装简单的单个命令，函数则可以封装复杂的多行命令。</p><p>函数总是在当前 Shell 执行，这是跟脚本的一个重大区别，Bash 会新建一个子 Shell 执行脚本。如果函数与脚本同名，函数会优先执行。但是，函数的优先级不如别名，即如果函数与别名同名，那么别名优先执行。</p><p>Bash 函数定义的语法有两种。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 第一种</span>
<span class="token function-name function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment"># codes</span>
<span class="token punctuation">}</span>

<span class="token comment"># 第二种</span>
<span class="token keyword">function</span> <span class="token function-name function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment"># codes</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面代码中，<code>fn</code> 是自定义的函数名，函数代码就写在大括号之中。这两种写法是等价的。</p><p>下面是一个简单函数的例子。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function-name function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello <span class="token variable">$1</span>&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面代码中，函数体里面的 <code>$1</code> 表示函数调用时的第一个参数。</p><p>调用时，就直接写函数名，参数跟在函数名后面。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ hello world
hello world
</code></pre></div><p>下面是一个多行函数的例子，显示当前日期时间。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function-name function">today</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;Today&#39;s date is: &quot;</span>
  <span class="token function">date</span> +<span class="token string">&quot;%A, %B %-d, %Y&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>删除一个函数，可以使用 <code>unset</code> 命令。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">unset</span> <span class="token parameter variable">-f</span> functionName
</code></pre></div><p>查看当前 Shell 已经定义的所有函数，可以使用 <code>declare</code> 命令。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">declare</span> <span class="token parameter variable">-f</span>
</code></pre></div><p>上面的 <code>declare</code> 命令不仅会输出函数名，还会输出所有定义。输出顺序是按照函数名的字母表顺序。由于会输出很多内容，最好通过管道命令配合 <code>more</code> 或 <code>less</code> 使用。</p><p><code>declare</code> 命令还支持查看单个函数的定义。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">declare</span> <span class="token parameter variable">-f</span> functionName
</code></pre></div><p><code>declare -F</code> 可以输出所有已经定义的函数名，不含函数体。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">declare</span> <span class="token parameter variable">-F</span>
</code></pre></div><h2 id="参数变量" tabindex="-1"><a class="header-anchor" href="#参数变量" aria-hidden="true">#</a> 参数变量</h2><p>函数体内可以使用参数变量，获取函数参数。函数的参数变量，与脚本参数变量是一致的。</p><ul><li><code>$1</code> ~ <code>$9</code>: 函数的第一个到第 9 个的参数。</li><li><code>$0</code>: 函数所在的脚本名。</li><li><code>$#</code>: 函数的参数总数。</li><li><code>$@</code>: 函数的全部参数，参数之间使用空格分隔。</li><li><code>$*</code>: 函数的全部参数，参数之间使用变量 <code>$IFS</code> 值的第一个字符分隔，默认为空格，但是可以自定义。</li></ul><p>如果函数的参数多于 9 个，那么第 10 个参数可以用 <code>\${10}</code> 的形式引用，以此类推。</p><p>下面是一个示例脚本 <code>test.sh</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># test.sh</span>

<span class="token keyword">function</span> <span class="token function-name function">alice</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;alice: <span class="token variable">$@</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$0</span>: <span class="token variable">$1</span> <span class="token variable">$2</span> <span class="token variable">$3</span> <span class="token variable">$4</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$#</span> arguments&quot;</span>

<span class="token punctuation">}</span>

alice <span class="token keyword">in</span> wonderland
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行该脚本，结果如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">bash</span> test.sh
alice: <span class="token keyword">in</span> wonderland
test.sh: <span class="token keyword">in</span> wonderland
<span class="token number">2</span> arguments
</code></pre></div><p>上面例子中，由于函数 <code>alice</code> 只有第一个和第二个参数，所以第三个和第四个参数为空。</p><p>下面是一个日志函数的例子。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">log_msg</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;[<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> <span class="token string">&#39;+ %F %T&#39;</span><span class="token variable">\`</span></span> ]: <span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>使用方法如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ log_msg <span class="token string">&quot;This is sample log message&quot;</span>
<span class="token punctuation">[</span> <span class="token number">2018</span>-08-16 <span class="token number">19</span>:56:34 <span class="token punctuation">]</span>: This is sample log message
</code></pre></div><h2 id="return-命令" tabindex="-1"><a class="header-anchor" href="#return-命令" aria-hidden="true">#</a> return 命令</h2><p><code>return</code> 命令用于从函数返回一个值。函数执行到这条命令，就不再往下执行了，直接返回了。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">func_return_value</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">return</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre></div><p>函数将返回值返回给调用者。如果命令行直接执行函数，下一个命令可以用 <code>$?</code> 拿到返回值。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ func_return_value
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;Value returned by function is: <span class="token variable">$?</span>&quot;</span>
Value returned by <span class="token keyword">function</span> is: <span class="token number">10</span>
</code></pre></div><p><code>return</code> 后面不跟参数，只用于返回也是可以的。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">name</span> <span class="token punctuation">{</span>
  commands
  <span class="token builtin class-name">return</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="全局变量和局部变量-local-命令" tabindex="-1"><a class="header-anchor" href="#全局变量和局部变量-local-命令" aria-hidden="true">#</a> 全局变量和局部变量，local 命令</h2><p>Bash 函数体内直接声明的变量，属于全局变量，整个脚本都可以读取。这一点需要特别小心。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 脚本 test.sh</span>
<span class="token function-name function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token number">1</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;fn: foo = <span class="token variable">$foo</span>&quot;</span>
<span class="token punctuation">}</span>

fn
<span class="token builtin class-name">echo</span> <span class="token string">&quot;global: foo = <span class="token variable">$foo</span>&quot;</span>
</code></pre></div><p>上面脚本的运行结果如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">bash</span> test.sh
fn: foo <span class="token operator">=</span> <span class="token number">1</span>
global: foo <span class="token operator">=</span> <span class="token number">1</span>
</code></pre></div><p>上面例子中，变量 <code>$foo</code> 是在函数 <code>fn</code> 内部声明的，函数体外也可以读取。</p><p>函数体内不仅可以声明全局变量，还可以修改全局变量。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token function-name function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$foo</span>
</code></pre></div><p>上面代码执行后，输出的变量 <code>$foo</code> 值为 2。</p><p>函数里面可以用 <code>local</code> 命令声明局部变量。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 脚本 test.sh</span>
<span class="token function-name function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">local</span> foo
  <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token number">1</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;fn: foo = <span class="token variable">$foo</span>&quot;</span>
<span class="token punctuation">}</span>

fn
<span class="token builtin class-name">echo</span> <span class="token string">&quot;global: foo = <span class="token variable">$foo</span>&quot;</span>
</code></pre></div><p>上面脚本的运行结果如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">bash</span> test.sh
fn: foo <span class="token operator">=</span> <span class="token number">1</span>
global: foo <span class="token operator">=</span>
</code></pre></div><p>上面例子中，<code>local</code> 命令声明的 <code>$foo</code> 变量，只在函数体内有效，函数体外没有定义。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,57),k={href:"https://www.linuxtechi.com/define-use-functions-linux-shell-script/",target:"_blank",rel:"noopener noreferrer"};function h(b,g){const s=i("ExternalLinkIcon");return o(),t("div",null,[d,c(" more "),r,a("ul",null,[a("li",null,[a("a",k,[n("How to define and use functions in Linux Shell Script"),p(s)]),n(", by Pradeep Kumar")])])])}const f=e(u,[["render",h],["__file","function.html.vue"]]);export{f as default};
