import{_ as a,X as e,Y as n,a3 as s}from"./framework-e3372978.js";const t={},c=s(`<h1 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort</h1><p><code>sort</code> 命令用于文本文件的排序。</p><p>下面是 <code>example.txt</code> 文件的内容。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>f
b
c
g
a
e
d
</code></pre></div><p>执行 <code>sort</code> 命令对其进行排序。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sort</span> example.txt
a
b
c
d
e
f
g
</code></pre></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p><code>-R</code> 参数表示随机排序。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sort</span> <span class="token parameter variable">-R</span> example.txt
b
d
a
c
g
e
f
</code></pre></div>`,9),o=[c];function d(r,l){return e(),n("div",null,o)}const h=a(t,[["render",d],["__file","sort.html.vue"]]);export{h as default};
