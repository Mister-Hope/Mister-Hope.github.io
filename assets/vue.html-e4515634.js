const n=JSON.parse('{"key":"v-ec0e16f6","path":"/code/vue/vue.html","title":"Vue 单文件组件","lang":"zh-CN","frontmatter":{"title":"Vue 单文件组件","icon":"vue","category":["Vue"],"description":"介绍 Vue 的单文件组件 (即 *.vue 文件，简称 SFC) 是一种特殊的文件格式，使我们能够将一个 Vue 组件的模板、逻辑与样式封装在单个文件中。下面是一个单文件组件的示例： &lt;script&gt; export default { data() { return { greeting: \\"Hello World!\\", }; }, }; &lt;/script&gt; &lt;template&gt; &lt;p class=\\"greeting\\"&gt;{{ greeting }}&lt;/p&gt; &lt;/template&gt; &lt;style&gt; .greeting { color: red; font-weight: bold; } &lt;/style&gt;","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/vue/vue.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Vue 单文件组件"}],["meta",{"property":"og:description","content":"介绍 Vue 的单文件组件 (即 *.vue 文件，简称 SFC) 是一种特殊的文件格式，使我们能够将一个 Vue 组件的模板、逻辑与样式封装在单个文件中。下面是一个单文件组件的示例： &lt;script&gt; export default { data() { return { greeting: \\"Hello World!\\", }; }, }; &lt;/script&gt; &lt;template&gt; &lt;p class=\\"greeting\\"&gt;{{ greeting }}&lt;/p&gt; &lt;/template&gt; &lt;style&gt; .greeting { color: red; font-weight: bold; } &lt;/style&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-05-28T16:24:21.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-05-28T16:24:21.000Z"}]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"总览","slug":"总览","link":"#总览","children":[]},{"level":2,"title":"总览 {#overview}","slug":"总览-overview","link":"#总览-overview","children":[]},{"level":2,"title":"相应语言块 {#language-blocks}","slug":"相应语言块-language-blocks","link":"#相应语言块-language-blocks","children":[{"level":3,"title":"<template> {#template}","slug":"template-template","link":"#template-template","children":[]},{"level":3,"title":"<script> {#script}","slug":"script-script","link":"#script-script","children":[]},{"level":3,"title":"<script setup> {#script-setup}","slug":"script-setup-script-setup","link":"#script-setup-script-setup","children":[]},{"level":3,"title":"<style> {#style}","slug":"style-style","link":"#style-style","children":[]},{"level":3,"title":"自定义块 {#custom-blocks}","slug":"自定义块-custom-blocks","link":"#自定义块-custom-blocks","children":[]}]},{"level":2,"title":"自动名称推导 {#automatic-name-inference}","slug":"自动名称推导-automatic-name-inference","link":"#自动名称推导-automatic-name-inference","children":[]},{"level":2,"title":"预处理器 {#pre-processors}","slug":"预处理器-pre-processors","link":"#预处理器-pre-processors","children":[]},{"level":2,"title":"Src 导入 {#src-imports}","slug":"src-导入-src-imports","link":"#src-导入-src-imports","children":[]},{"level":2,"title":"注释 {#comments}","slug":"注释-comments","link":"#注释-comments","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1653755061000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":4.18,"words":1255},"filePathRelative":"code/vue/vue.md","localizedDate":"2020年6月3日","excerpt":"<h2> 介绍</h2>\\n<p>Vue 的单文件组件 (即 <code>*.vue</code> 文件，简称 <strong>SFC</strong>) 是一种特殊的文件格式，使我们能够将一个 Vue 组件的模板、逻辑与样式封装在单个文件中。下面是一个单文件组件的示例：</p>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token function\\">data</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token literal-property property\\">greeting</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"Hello World!\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>greeting<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>{{ greeting }}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>p</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>style</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token style\\"><span class=\\"token language-css\\">\\n<span class=\\"token selector\\">.greeting</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">color</span><span class=\\"token punctuation\\">:</span> red<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">font-weight</span><span class=\\"token punctuation\\">:</span> bold<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>style</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
