import{ac as a,G as e,H as s,ae as l}from"./framework-931f0218.js";const i={},n=l(`<h1 id="ls" tabindex="-1"><a class="header-anchor" href="#ls" aria-hidden="true">#</a> ls</h1><p><code>ls</code> 命令用于列出当前目录里面的文件和子目录。</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ul><li>a: 列出隐藏文件</li><li>l: 以长格式列出文件</li><li>t: 按最后编辑日期排序，最新的最先。这在某个大目录里找出最近修改的文件列表时很有用，比如将结果导入( pipe ) head 或者 sed 10q。或许加上 -l 会效果更好。当然如果您想获取最旧的文件列表，只要加 -r 反转列表即可。</li><li>X: 按文件类型分类。这在多语言或多后缀的项目中特别方便，比如头文件和源文件分开，或区分开源文件和生成文件或目录。</li><li>v: 按照文件名里的版本号排序。</li><li>S: 按文件大小排序。</li><li>R: 递归地列举文件。这个选项和 -l 组合使用并将结果导出到 less 效果很好。</li></ul><p>可以把结果导出给类似 vim 的进程。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-XR</span> <span class="token operator">|</span> <span class="token function">vim</span> -
</code></pre></div>`,6),t=[n];function c(r,o){return e(),s("div",null,t)}const p=a(i,[["render",c],["__file","ls.html.vue"]]);export{p as default};
