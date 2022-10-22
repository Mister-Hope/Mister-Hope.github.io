"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[67441],{54055:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var t=a(71534);const e=[(0,t.uE)('<p>有三种方式引入并应用 CSS。</p><h2 id="外部样式表" tabindex="-1"><a class="header-anchor" href="#外部样式表" aria-hidden="true">#</a> 外部样式表</h2><p>外部样式表将样式写入 CSS 文件中，在 HTML 中使用 <code>&lt;link&gt;</code> 引用，可以根据实际需要放在 <code>&lt;head&gt;</code> 标签里或 <code>&lt;body&gt;</code> 标签的末尾。比如:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mystyle.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器会从文件 <code>mystyle.css</code> 中读到样式声明，并根据它来格式文档。</p><p>外部样式表可以在任何文本编辑器中进行编辑。文件不能包含任何的 HTML 标签。样式表应该以 <code>.css</code> 扩展名进行保存。</p><h2 id="内部样式表" tabindex="-1"><a class="header-anchor" href="#内部样式表" aria-hidden="true">#</a> 内部样式表</h2><p>当单个文档需要特殊的样式时，就应该使用内部样式表。您可以使用 <code>&lt;style&gt;</code> 标签定义内部样式表，就像这样:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n    <span class="token selector">hr</span> <span class="token punctuation">{</span>\n      <span class="token property">color</span><span class="token punctuation">:</span> sienna<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">p</span> <span class="token punctuation">{</span>\n      <span class="token property">margin-left</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">body</span> <span class="token punctuation">{</span>\n      <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;images/back40.gif&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内联样式" tabindex="-1"><a class="header-anchor" href="#内联样式" aria-hidden="true">#</a> 内联样式</h2><p>在 HTML 中使用 style 属性指定。</p><p>由于要将表现和内容混杂在一起，内联样式会损失掉样式表的许多优势，请慎用这种方法。</p><p>您可以在特定情况下使用它，例如当 1 -3 个样式仅需要在一个元素上应用一次时。</p><p><strong>案例</strong>:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 改变了这个段落的字体颜色和左外边距 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> sienna<span class="token punctuation">;</span> <span class="token property">margin-left</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>这是一个段落。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',15)],p={},l=(0,a(61935).Z)(p,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,e)}]])},61935:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},13428:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-3e54ab50","path":"/code/website/css/guide/import.html","title":"引入 CSS","lang":"zh-CN","frontmatter":{"title":"引入 CSS","icon":"link","date":"2019-09-05T00:00:00.000Z","category":["CSS"],"tag":["快速上手"],"summary":"有三种方式引入并应用 CSS。 外部样式表 外部样式表将样式写入 CSS 文件中，在 HTML 中使用 引用，可以根据实际需要放在 标签里或 `` 标签的末尾。比如: 浏览器会从文件 mystyle.css 中读到样式声明，并根据它来格式文档。 外部样式表可以在任何文本编辑器中进行编辑。文件不能包含任何的 HTML 标签。样式表应该以 .css 扩展名进行保","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/website/css/guide/import.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"引入 CSS"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"快速上手"}],["meta",{"property":"article:published_time","content":"2019-09-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"外部样式表","slug":"外部样式表","link":"#外部样式表","children":[]},{"level":2,"title":"内部样式表","slug":"内部样式表","link":"#内部样式表","children":[]},{"level":2,"title":"内联样式","slug":"内联样式","link":"#内联样式","children":[]}],"git":{"createdTime":1604600480000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5}]},"readingTime":{"minutes":1.14,"words":343},"filePathRelative":"code/website/css/guide/import.md","localizedDate":"2019年9月5日"}')}}]);