import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as s}from"./app-721f5af7.js";const t={},c=s(`<h1 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> file</h1><p><code>file</code> 命令用来某个文件的类型。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">file</span> index.html
 index.html: HTML document, ASCII text
</code></pre></div><p>file 工具可以对所给的文件一行简短的介绍，它用文件后缀、头部信息和一些其他的线索来判断文件。您在检查一堆您不熟悉的文件时使用 find 非常方便:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">find</span> <span class="token parameter variable">-exec</span> <span class="token function">file</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
.:            directory
./hanoi:      Perl script, ASCII text executable
./.hanoi.swp: Vim swap file, version <span class="token number">7.3</span>
./factorial:  Perl script, ASCII text executable
./bits.c:     C source, ASCII text
./bits:       ELF <span class="token number">32</span>-bit LSB executable, Intel <span class="token number">80386</span>, version <span class="token punctuation">..</span>.
</code></pre></div>`,5),o=[c];function i(l,p){return n(),a("div",null,o)}const d=e(t,[["render",i],["__file","file.html.vue"]]);export{d as default};
