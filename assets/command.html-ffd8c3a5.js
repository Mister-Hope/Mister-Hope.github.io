import{_ as s,X as n,Y as e,a3 as a}from"./framework-a91f7991.js";const i={},c=a(`<p>VS Code 具有强大的命令行界面(CLI)，可让您自定义启动编辑器以支持各种情况的方式。</p><p>确保 VS Code 可执行文件已经添加到您的环境变量。只需键入 <code>code</code> 即可启动 VS Code。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用 code 打开当前文件夹</span>
code <span class="token builtin class-name">.</span>

<span class="token comment"># 在最近使用面板</span>
code <span class="token parameter variable">-r</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 打开新窗口</span>
code <span class="token parameter variable">-n</span>

<span class="token comment"># 改编当前语言</span>
code <span class="token parameter variable">--locale</span><span class="token operator">=</span>es

<span class="token comment"># 打开文件比较器</span>
code <span class="token parameter variable">--diff</span> <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>file<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>

<span class="token comment"># 打开文件并跳转到指定的行(和列)</span>
code <span class="token parameter variable">--goto</span> package.json:10:5

<span class="token comment"># 查看帮助选项</span>
code <span class="token parameter variable">--help</span>

<span class="token comment"># 禁用所有扩展</span>
code --disable-extensions <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vscode-文件夹" tabindex="-1"><a class="header-anchor" href="#vscode-文件夹" aria-hidden="true">#</a> .vscode 文件夹</h2><p>基于工作区的 <code>.vscode</code> 文件夹位于根目录下。例如任务运行对应的 <code>tasks.json</code> 配置文件和调试器对应的 <code>launch.json</code> 文件。</p>`,5),l=[c];function d(o,t){return n(),e("div",null,l)}const p=s(i,[["render",d],["__file","command.html.vue"]]);export{p as default};
