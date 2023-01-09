import{ac as a,G as e,H as s,ae as n}from"./framework-931f0218.js";const c={},o=n(`<h1 id="du" tabindex="-1"><a class="header-anchor" href="#du" aria-hidden="true">#</a> du</h1><p><code>du</code> 命令显示某个文件或目录的磁盘使用量。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">du</span> filename
</code></pre></div><p><code>-h</code> 参数将返回的大小显示为人类可读的格式，即显示单位为 K、M、G 等。</p><p><code>-s</code> 参数表示总结(summarize)。</p><p><code>-x</code> 参数表示不显示不在当前分区的目录，通常会忽略<code>/dev</code>、<code>/proc</code>、<code>/sys</code> 等目录。</p><p><code>-c</code> 参数表示显示当前目录总共占用的空间大小。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示根目录下各级目录占用的空间大小</span>
$ <span class="token function">sudo</span> <span class="token function">du</span> <span class="token parameter variable">-shxc</span> /*
</code></pre></div><p><code>--exclude</code> 参数用于排除某些目录或文件。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">du</span> <span class="token parameter variable">-shxc</span> /* <span class="token parameter variable">--exclude</span><span class="token operator">=</span>proc
<span class="token function">sudo</span> <span class="token function">du</span> <span class="token parameter variable">-sh</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span>*.iso
</code></pre></div><p><code>--max-depth</code> 参数用于设定目录大小统计到第几层。如果设为 <code>-–max-depth=0</code>，那么等同于 <code>-s</code> 参数。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">du</span> /home/ <span class="token parameter variable">-hc</span> --max-depth<span class="token operator">=</span><span class="token number">2</span>
</code></pre></div>`,12),p=[o];function d(t,l){return e(),s("div",null,p)}const u=a(c,[["render",d],["__file","du.html.vue"]]);export{u as default};
