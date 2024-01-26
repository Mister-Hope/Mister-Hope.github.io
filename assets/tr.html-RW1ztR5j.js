import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as n,b as e}from"./app-W9Dk-dRG.js";const t={},o=e(`<h1 id="tr" tabindex="-1"><a class="header-anchor" href="#tr"><span>tr</span></a></h1><p><code>tr</code> 命令用于按照给定模式转换文本。</p><p>下面是 <code>example.txt</code> 文件的内容。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Hello World Foo Bar Baz<span class="token operator">!</span>
</code></pre></div><p><code>tr</code> 命令可以将所有小写字母转换为大写字母。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> example.txt <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&#39;a-z&#39;</span> <span class="token string">&#39;A-Z&#39;</span>
HELLO WORLD FOO BAR BAZ<span class="token operator">!</span>
</code></pre></div><p><code>tr</code> 命令还可以将所有空格转为换行符。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> example.txt <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&#39; &#39;</span> <span class="token string">&#39;\\n&#39;</span>
Hello
World
Foo
Bar
Baz<span class="token operator">!</span>
</code></pre></div>`,8),c=[o];function p(r,l){return s(),n("div",null,c)}const h=a(t,[["render",p],["__file","tr.html.vue"]]);export{h as default};
