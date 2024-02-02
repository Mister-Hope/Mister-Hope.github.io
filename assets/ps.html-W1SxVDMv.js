import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,b as n}from"./app-odku2cZ-.js";const c={},t=n(`<h1 id="ps" tabindex="-1"><a class="header-anchor" href="#ps"><span>ps</span></a></h1><p><code>ps</code> 命令列出当前正在执行的进程信息。</p><p>由于进程很多，所以为了快速找到某个进程，一般与 <code>grep</code> 配合使用。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 找出正在运行 vim 的进程</span>
$ <span class="token function">ps</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">vi</span>
</code></pre></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><p><code>-u</code> 参数列出指定用户拥有的进程。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-u</span> yourusername
</code></pre></div>`,7),o=[t];function p(r,d){return s(),e("div",null,o)}const h=a(c,[["render",p],["__file","ps.html.vue"]]);export{h as default};
