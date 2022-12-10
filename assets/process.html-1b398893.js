import{ac as a,M as s,N as e,ae as n}from"./framework-6fc096bd.js";const c={},o=n(`<h1 id="进程管理" tabindex="-1"><a class="header-anchor" href="#进程管理" aria-hidden="true">#</a> 进程管理</h1><h2 id="ps" tabindex="-1"><a class="header-anchor" href="#ps" aria-hidden="true">#</a> ps</h2><p><code>ps</code> 命令用来列出进程信息。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ps</span>
PID TTY           TIME CMD
<span class="token number">5198</span> pts/1    00:00:00 <span class="token function">bash</span>
<span class="token number">10129</span> pts/1   00:00:00 <span class="token function">ps</span>
</code></pre></div><p>不带任何参数时，<code>ps</code> 只列出与当前 Session 相关的进程。输出结果中，<code>PID</code> 是进程 ID、<code>TTY</code> 是进程的终端号(如果显示<code>?</code>，则表示进程没有终端)，<code>TIME</code> 是消耗的 CPU 时间，<code>CMD</code> 是触发进程的命令。</p><p><code>x</code> 参数列出所有进程的详细信息，包括不在当前 Session 的信息。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ps</span> x
PID TTY   STAT   TIME COMMAND
<span class="token number">2799</span> ?    Ssl    <span class="token number">0</span>:00 /usr/libexec/bonobo-activation-server –ac
<span class="token number">2820</span> ?    Sl     <span class="token number">0</span>:01 /usr/libexec/evolution-data-server-1.10 --
</code></pre></div><p>这时的输出结果，会多出 <code>STAT</code> 一栏，表示状态。它的各种值如下。</p><ul><li><code>R</code> 正在运行或准备运行</li><li><code>S</code> 正在睡眠，即没有运行，正在等待一个事件唤醒</li><li><code>D</code> 不可中断睡眠。进程正在等待 I/O，比如磁盘驱动器的 I/O</li><li><code>T</code> 已停止，即进程停止运行</li><li><code>Z</code> “僵尸”进程。即这是一个已经终止的子进程，但父进程还没有清空它(没有把子进程从进程表中删除)</li><li><code>&lt;</code> 高优先级进程。这可能会授予一个进程更多重要的资源，给它更多的 CPU 时间。</li><li><code>N</code> 低优先级进程。一个低优先级进程(一个“好”进程)只有当其它高优先级进程执行之后，才会得到处理器时间。</li></ul><p><code>aux</code> 参数可以显示更多信息。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ps</span> aux
<span class="token environment constant">USER</span>   PID  %CPU  %MEM     VSZ    RSS  TTY   STAT   START   TIME  COMMAND
root     <span class="token number">1</span>   <span class="token number">0.0</span>   <span class="token number">0.0</span>    <span class="token number">2136</span>    <span class="token number">644</span>  ?     Ss     Mar05   <span class="token number">0</span>:31  init
root     <span class="token number">2</span>   <span class="token number">0.0</span>   <span class="token number">0.0</span>       <span class="token number">0</span>      <span class="token number">0</span>  ?     S<span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>     Mar05   <span class="token number">0</span>:00  <span class="token punctuation">[</span>kt<span class="token punctuation">]</span>
</code></pre></div><p>输出结果包含的列的含义如下。</p><ul><li><code>USER</code> 用户 ID，表示进程的所有者</li><li><code>%CPU</code> 百分比表示的 CPU 使用率</li><li><code>%MEM</code> 百分比表示的内存使用率</li><li><code>VSZ</code> 虚拟内存大小</li><li><code>RSS</code> 进程占用的物理内存的大小，以千字节为单位。</li><li><code>START</code> 进程运行的起始时间。若超过 24 小时，则用天表示。</li></ul><h2 id="top" tabindex="-1"><a class="header-anchor" href="#top" aria-hidden="true">#</a> top</h2><p><code>top</code> 命令可以查看机器的当前状态。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">top</span>
</code></pre></div><p>它的输出结果分为两部分，最上面是系统概要，下面是进程列表，以 CPU 的使用率排序。</p><p>输出结果是动态更新的，默认每三分钟更新一次。</p><h2 id="jobs" tabindex="-1"><a class="header-anchor" href="#jobs" aria-hidden="true">#</a> jobs</h2><p><code>jobs</code> 命令用来查看后台任务。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">jobs</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ Running            xlogo <span class="token operator">&amp;</span>
</code></pre></div><p>输出结果之中，每个后台任务会有一个编号。上面结果中，<code>xlogo</code> 的编号是 <code>1</code>，<code>+</code> 表示正在运行。</p><h2 id="fg" tabindex="-1"><a class="header-anchor" href="#fg" aria-hidden="true">#</a> fg</h2><p><code>fg</code> 命令用于将后台任务切换到前台。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">fg</span> %1
</code></pre></div><p><code>fg</code> 命令之后，跟随着一个百分号和工作序号，用来指定切换哪一个后台任务。如果只有一个后台任务，那么 <code>fg</code> 命令可以不带参数。</p><h2 id="bg" tabindex="-1"><a class="header-anchor" href="#bg" aria-hidden="true">#</a> bg</h2><p><code>bg</code> 命令用于将一个暂停的前台任务，转移到后台。只有暂停的任务，才能使用 <code>bg</code> 命令，因为正在运行的任务，命令行是无法输入的。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">bg</span> %1
</code></pre></div><p><code>Ctrl + z</code> 可以暂停正在运行的前台任务。</p><h2 id="kill" tabindex="-1"><a class="header-anchor" href="#kill" aria-hidden="true">#</a> kill</h2><p><code>kill</code> 命令用于杀死进程。它的参数是进程 ID。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">kill</span> <span class="token number">28401</span>
</code></pre></div><p><code>kill</code> 命令的实质是操作系统向进程发送信号。在使用 Ctrl-c 的情况下，会发送一个叫做 INT(中断)的信号；当使用 Ctrl-z 时，则发送一个叫做 TSTP(终端停止)的信号。</p><p><code>kill</code> 命令可以用来向进程发送指定信号。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">kill</span> <span class="token punctuation">[</span>-signal<span class="token punctuation">]</span> PID
</code></pre></div><p>下面是常见信号。</p><ul><li>HUP: 编号 1，表示挂起。发送这个信号到前台程序，程序会终止。许多守护进程也使用这个信号，来重新初始化。这意味着，当发送这个信号到一个守护进程后， 这个进程会重新启动，并且重新读取它的配置文件。Apache 网络服务器守护进程就是一个例子。</li><li>INT: 编号 2，中断。实现和 <code>Ctrl-c</code> 一样的功能，由终端发送。通常，它会终止一个程序。</li><li>KILL: 编号 9，杀死。进程可能选择忽略这个信号。所以，操作系统不发送该信号到目标进程，而是内核立即终止这个进程。当一个进程以这种方式终止的时候，它没有机会去做些“清理”工作，或者是保存劳动成果。因为这个原因，把 KILL 信号看作杀手锏，当其它终止信号失败后，再使用它。</li><li>TERM: 编号 15，终止。这是 kill 命令发送的默认信号。如果程序仍然“活着”，可以接受信号，那么这个信号终止。</li><li>CONT: 编号 18，继续。在停止一段时间后，进程恢复运行。</li><li>STOP: 编号 19，停止。这个信号导致进程停止运行，而没有终止。像 KILL 信号，它不被 发送到目标进程，因此它不能被忽略。</li><li>QUIT: 编号 3，退出</li><li>SEGV: 编号 11，段错误。如果一个程序非法使用内存，就会发送这个信号。也就是说，程序试图写入内存，而这个内存空间是不允许此程序写入的。</li><li>TSTP: 编号 20，终端停止。当按下 Ctrl-z 组合键后，终端发送这个信号。不像 STOP 信号， TSTP 信号由目标进程接收，且可能被忽略。</li><li>WINCH: 编号 28，改变窗口大小。当改变窗口大小时，系统会发送这个信号。一些程序，像 top 和 less 程序会响应这个信号，按照新窗口的尺寸，刷新显示的内容。</li></ul><p><code>-l</code> 参数可以列出所有信号。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">kill</span> <span class="token parameter variable">-l</span>
</code></pre></div><h2 id="killall" tabindex="-1"><a class="header-anchor" href="#killall" aria-hidden="true">#</a> killall</h2><p><code>killall</code> 命令用于向指定的程序或用户发送信号。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">killall</span> <span class="token punctuation">[</span>-u user<span class="token punctuation">]</span> <span class="token punctuation">[</span>-signal<span class="token punctuation">]</span> name
</code></pre></div><h2 id="其他进程相关命令" tabindex="-1"><a class="header-anchor" href="#其他进程相关命令" aria-hidden="true">#</a> 其他进程相关命令</h2><ul><li><code>pstree</code> 输出树型结构的进程列表，这个列表展示了进程间父/子关系。</li><li><code>vmstat</code> 输出一个系统资源使用快照，包括内存，交换分区和磁盘 I/O。为了看到连续的显示结果，则在命令名后加上延时的时间(以秒为单位)。例如，“vmstat 5”。终止输出，按下 Ctrl-c 组合键。</li><li><code>xload</code> 一个图形界面程序，可以画出系统负载的图形。</li><li><code>tload</code> 与 <code>xload</code> 程序相似，但是在终端中画出图形。使用 Ctrl-c，来终止输出。</li></ul>`,45),l=[o];function d(p,t){return s(),e("div",null,l)}const r=a(c,[["render",d],["__file","process.html.vue"]]);export{r as default};
