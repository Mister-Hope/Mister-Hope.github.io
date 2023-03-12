import{_ as a,X as n,Y as s,a3 as e}from"./framework-a91f7991.js";const c={},t=e(`<h1 id="系统信息" tabindex="-1"><a class="header-anchor" href="#系统信息" aria-hidden="true">#</a> 系统信息</h1><h2 id="uname" tabindex="-1"><a class="header-anchor" href="#uname" aria-hidden="true">#</a> uname</h2><p><code>uname</code> 命令返回当前机器的信息。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 内核的版本</span>
$ <span class="token function">uname</span> <span class="token parameter variable">-r</span>
<span class="token number">3.2</span>.0-24-virtual

<span class="token comment"># CPU 架构</span>
$ <span class="token function">uname</span> <span class="token parameter variable">-m</span>
x86_64
</code></pre></div><p>如果要了解操作系统的版本，可以查看<code>/etc/issue</code> 文件。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> /etc/issue
Debian GNU/Linux <span class="token number">9</span> <span class="token punctuation">\\</span>n <span class="token punctuation">\\</span>l
</code></pre></div><h2 id="service" tabindex="-1"><a class="header-anchor" href="#service" aria-hidden="true">#</a> service</h2><p><code>service</code> 命令可以查看当前正在运行的服务。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">service</span> --status-all
 <span class="token punctuation">[</span> + <span class="token punctuation">]</span>  apache2
 <span class="token punctuation">[</span> ? <span class="token punctuation">]</span>  atd
 <span class="token punctuation">[</span> - <span class="token punctuation">]</span>  bootlogd
</code></pre></div><p>上面代码中，<code>+</code> 表示正在运行，<code>-</code> 表示已经停止，<code>?</code>表示 <code>service</code> 命令不了解相关信息。</p>`,10),o=[t];function p(d,i){return n(),s("div",null,o)}const r=a(c,[["render",p],["__file","system.html.vue"]]);export{r as default};
