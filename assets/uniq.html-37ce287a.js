import{_ as a,X as n,Y as e,a3 as s}from"./framework-a91f7991.js";const c={},t=s(`<h1 id="uniq" tabindex="-1"><a class="header-anchor" href="#uniq" aria-hidden="true">#</a> uniq</h1><p><code>uniq</code> 用于过滤掉重复的行，该命令只对排序后的文件有效。</p><p>下面是 <code>example.txt</code> 文件的内容。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>a
a
b
a
b
c
d
c
</code></pre></div><p>对该文件进行排序后，再过滤掉重复的行。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sort</span> example.txt <span class="token operator">|</span> <span class="token function">uniq</span>
a
b
c
d
</code></pre></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p><code>-c</code> 参数会显示每行一共出现了多少次。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sort</span> example.txt <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>
    <span class="token number">3</span> a
    <span class="token number">2</span> b
    <span class="token number">2</span> c
    <span class="token number">1</span> d
</code></pre></div>`,9),o=[t];function p(d,r){return n(),e("div",null,o)}const i=a(c,[["render",p],["__file","uniq.html.vue"]]);export{i as default};
