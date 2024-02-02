import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as n,b as e}from"./app-odku2cZ-.js";const t={},o=e(`<h1 id="export" tabindex="-1"><a class="header-anchor" href="#export"><span>export</span></a></h1><p><code>export</code> 命令用于向子 Shell 输出变量。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">hotellogs</span><span class="token operator">=</span><span class="token string">&quot;/workspace/hotel-api/storage/logs&quot;</span>
</code></pre></div><p>然后执行下面的命令，新建一个子 Shell。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">bash</span>
<span class="token builtin class-name">cd</span> hotellogs
</code></pre></div><p>上面命令的执行结果会进入 <code>hotellogs</code> 变量指向的目录。</p><p><code>export</code> 命令还可以显示所有环境变量。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">export</span>
<span class="token assign-left variable"><span class="token environment constant">SHELL</span></span><span class="token operator">=</span>/bin/zsh
<span class="token assign-left variable">AWS_HOME</span><span class="token operator">=</span>/Users/adnanadnan/.aws
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>en_US.UTF-8
<span class="token assign-left variable">LC_CTYPE</span><span class="token operator">=</span>en_US.UTF-8
<span class="token assign-left variable">LESS</span><span class="token operator">=</span>-R
</code></pre></div><p>如果想查看单个变量，使用 <code>echo $VARIABLE_NAME</code>。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span>
/usr/bin/zsh
</code></pre></div>`,10),p=[o];function l(c,r){return s(),n("div",null,p)}const h=a(t,[["render",l],["__file","export.html.vue"]]);export{h as default};
