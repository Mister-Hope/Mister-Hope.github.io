import{_ as e,X as s,Y as a,a3 as n}from"./framework-a91f7991.js";const c={},d=n(`<h1 id="sed" tabindex="-1"><a class="header-anchor" href="#sed" aria-hidden="true">#</a> sed</h1><p><code>sed</code> 命令用于对文本进行过滤和变形处理。</p><p>下面是 <code>example.txt</code> 文件的内容。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Hello This is a Test <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span>
replace all spaces with hyphens
</code></pre></div><p><code>sed</code> 命令将所有的空格换成连词线 <code>-</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sed</span> <span class="token string">&#39;s/ /-/g&#39;</span> example.txt
Hello-This-is-a-Test-1-2-3-4
</code></pre></div><p>下面的命令将数字换成字母 <code>d</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sed</span> <span class="token string">&#39;s/[0-9]/d/g&#39;</span> example.txt
Hello This is a Test d d d d
</code></pre></div>`,8),t=[d];function o(l,p){return s(),a("div",null,t)}const i=e(c,[["render",o],["__file","sed.html.vue"]]);export{i as default};
