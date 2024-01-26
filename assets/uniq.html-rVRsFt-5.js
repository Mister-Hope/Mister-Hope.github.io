import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,b as e}from"./app-W9Dk-dRG.js";const t={},c=e(`<h1 id="uniq" tabindex="-1"><a class="header-anchor" href="#uniq"><span>uniq</span></a></h1><p><code>uniq</code> 用于过滤掉重复的行，该命令只对排序后的文件有效。</p><p>下面是 <code>example.txt</code> 文件的内容。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>a
a
b
a
b
c
d
c
</code></pre></div><p>对该文件进行排序后，再过滤掉重复的行。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sort</span> example.txt <span class="token operator">|</span> <span class="token function">uniq</span>
a
b
c
d
</code></pre></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><p><code>-c</code> 参数会显示每行一共出现了多少次。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sort</span> example.txt <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>
    <span class="token number">3</span> a
    <span class="token number">2</span> b
    <span class="token number">2</span> c
    <span class="token number">1</span> d
</code></pre></div>`,9),o=[c];function p(l,d){return n(),s("div",null,o)}const h=a(t,[["render",p],["__file","uniq.html.vue"]]);export{h as default};
