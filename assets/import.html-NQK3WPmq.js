import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,b as t}from"./app-50nBCNnt.js";const p={},e=t(`<p>有三种方式引入并应用 CSS。</p><h2 id="外部样式表" tabindex="-1"><a class="header-anchor" href="#外部样式表" aria-hidden="true">#</a> 外部样式表</h2><p>外部样式表将样式写入 CSS 文件中，在 HTML 中使用 <code>&lt;link&gt;</code> 引用，可以根据实际需要放在 <code>&lt;head&gt;</code> 标签里或 <code>&lt;body&gt;</code> 标签的末尾。比如:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mystyle.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>浏览器会从文件 <code>mystyle.css</code> 中读到样式声明，并根据它来格式文档。</p><p>外部样式表可以在任何文本编辑器中进行编辑。文件不能包含任何的 HTML 标签。样式表应该以 <code>.css</code> 扩展名进行保存。</p><h2 id="内部样式表" tabindex="-1"><a class="header-anchor" href="#内部样式表" aria-hidden="true">#</a> 内部样式表</h2><p>当单个文档需要特殊的样式时，就应该使用内部样式表。您可以使用 <code>&lt;style&gt;</code> 标签定义内部样式表，就像这样:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">hr</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> sienna<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">p</span> <span class="token punctuation">{</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">body</span> <span class="token punctuation">{</span>
      <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;images/back40.gif&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内联样式" tabindex="-1"><a class="header-anchor" href="#内联样式" aria-hidden="true">#</a> 内联样式</h2><p>在 HTML 中使用 style 属性指定。</p><p>由于要将表现和内容混杂在一起，内联样式会损失掉样式表的许多优势，请慎用这种方法。</p><p>您可以在特定情况下使用它，例如当 1 -3 个样式仅需要在一个元素上应用一次时。</p><p><strong>案例</strong>:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 改变了这个段落的字体颜色和左外边距 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> sienna<span class="token punctuation">;</span> <span class="token property">margin-left</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>这是一个段落。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,15),c=[e];function o(l,u){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","import.html.vue"]]);export{k as default};
