"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[98872],{68964:(n,s,a)=>{a.r(s),a.d(s,{default:()=>C});var e=a(71534);const t=(0,e.uE)('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>Vue 的单文件组件 (即 <code>*.vue</code> 文件，简称 <strong>SFC</strong>) 是一种特殊的文件格式，使我们能够将一个 Vue 组件的模板、逻辑与样式封装在单个文件中。下面是一个单文件组件的示例：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">greeting</span><span class="token operator">:</span> <span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>greeting<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ greeting }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n<span class="token selector">.greeting</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如你所见，Vue 的单文件组件是 HTML、CSS 和 JavaScript 三种元素的自然延伸。<code>&lt;template&gt;</code>、<code>&lt;script&gt;</code> 和 <code>&lt;style&gt;</code> 三个块在同一个文件中封装、组合了组件的视图、逻辑和样式。</p><h2 id="总览" tabindex="-1"><a class="header-anchor" href="#总览" aria-hidden="true">#</a> 总览</h2><h2 id="总览-overview" tabindex="-1"><a class="header-anchor" href="#总览-overview" aria-hidden="true">#</a> 总览 {#overview}</h2><p>一个 Vue 单文件组件 (SFC)，通常使用 <code>*.vue</code> 作为文件扩展名，它是一种使用了类似 HTML 语法的自定义文件格式，用于定义 Vue 组件。一个 Vue 单文件组件在语法上是兼容 HTML 的。</p><p>每一个 <code>*.vue</code> 文件都由三种顶层语块构成：<code>&lt;template&gt;</code>、<code>&lt;script&gt;</code> 和 <code>&lt;style&gt;</code>，以及一些其他的自定义块：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;Hello world!&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n<span class="token selector">.example</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom1</span><span class="token punctuation">&gt;</span></span>\n  This could be e.g. documentation for the component.\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>custom1</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相应语言块-language-blocks" tabindex="-1"><a class="header-anchor" href="#相应语言块-language-blocks" aria-hidden="true">#</a> 相应语言块 {#language-blocks}</h2><h3 id="template-template" tabindex="-1"><a class="header-anchor" href="#template-template" aria-hidden="true">#</a> <code>&lt;template&gt;</code> {#template}</h3><ul><li><p>每个 <code>*.vue</code> 文件最多可以包含一个顶层 <code>&lt;template&gt;</code> 块。</p></li><li><p>语块包裹的内容将会被提取、传递给 <code>@vue/compiler-dom</code>，预编译为 JavaScript 渲染函数，并附在导出的组件上作为其 <code>render</code> 选项。</p></li></ul><h3 id="script-script" tabindex="-1"><a class="header-anchor" href="#script-script" aria-hidden="true">#</a> <code>&lt;script&gt;</code> {#script}</h3>',13),l=(0,e._)("code",null,"*.vue",-1),p=(0,e._)("code",null,"<script>",-1),c=(0,e._)("code",null,"<script setup>",-1),o=(0,e._)("li",null,[(0,e._)("p",null,"这个脚本代码块将作为 ES 模块执行。")],-1),i=(0,e._)("strong",null,"默认导出",-1),u=(0,e.uE)('<h3 id="script-setup-script-setup" tabindex="-1"><a class="header-anchor" href="#script-setup-script-setup" aria-hidden="true">#</a> <code>&lt;script setup&gt;</code> {#script-setup}</h3><ul><li><p>每个 <code>*.vue</code> 文件最多可以包含一个 <code>&lt;script setup&gt;</code>。(不包括一般的 <code>&lt;script&gt;</code>)</p></li><li><p>这个脚本块将被预处理为组件的 <code>setup()</code> 函数，这意味着它将<strong>为每一个组件实例</strong>都执行。<code>&lt;script setup&gt;</code> 中的顶层绑定都将自动暴露给模板。要了解更多细节，请看 <a href="/api/sfc-script-setup"><code>&lt;script setup&gt;</code> 的专门文档</a>。</p></li></ul><h3 id="style-style" tabindex="-1"><a class="header-anchor" href="#style-style" aria-hidden="true">#</a> <code>&lt;style&gt;</code> {#style}</h3><ul><li><p>每个 <code>*.vue</code> 文件可以包含多个 <code>&lt;style&gt;</code> 标签。</p></li><li><p>一个 <code>&lt;style&gt;</code> 标签可以使用 <code>scoped</code> 或 <code>module</code> attribute (查看 <a href="/api/sfc-css-features">SFC 样式功能</a>了解更多细节) 来帮助封装当前组件的样式。使用了不同封装模式的多个 <code>&lt;style&gt;</code> 标签可以被混合入同一个组件。</p></li></ul><h3 id="自定义块-custom-blocks" tabindex="-1"><a class="header-anchor" href="#自定义块-custom-blocks" aria-hidden="true">#</a> 自定义块 {#custom-blocks}</h3><p>在一个 <code>*.vue</code> 文件中可以为任何项目特定需求使用额外的自定义块。举个例子，一个用作写文档的 <code>&lt;docs&gt;</code> 块。这里是一些自定义块的真实用例：</p>',6),r={href:"https://gridsome.org/docs/querying-data/",target:"_blank",rel:"noopener noreferrer"},d=(0,e._)("code",null,"<page-query>",-1),k={href:"https://github.com/wheatjs/vite-plugin-vue-gql",target:"_blank",rel:"noopener noreferrer"},v=(0,e._)("code",null,"<gql>",-1),g={href:"https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n#i18n-custom-block",target:"_blank",rel:"noopener noreferrer"},m=(0,e._)("code",null,"<i18n>",-1),h=(0,e.uE)('<h2 id="自动名称推导-automatic-name-inference" tabindex="-1"><a class="header-anchor" href="#自动名称推导-automatic-name-inference" aria-hidden="true">#</a> 自动名称推导 {#automatic-name-inference}</h2><p>SFC 在以下场景中会根据<strong>文件名</strong>自动推导其组件名：</p><ul><li>开发警告信息格式</li><li>DevTools 审阅</li><li>递归组件自引用。例如一个名为 <code>FooBar.vue</code> 的组件可以在模板中通过 <code>&lt;FooBar/&gt;</code> 引用自己。(同名情况下) 这比明确注册/导入的组件优先级低。</li></ul><h2 id="预处理器-pre-processors" tabindex="-1"><a class="header-anchor" href="#预处理器-pre-processors" aria-hidden="true">#</a> 预处理器 {#pre-processors}</h2><p>代码块可以使用 <code>lang</code> 这个 attribute 来声明预处理器语言，最常见的用例就是对 <code>&lt;script&gt;</code> 块使用 TypeScript：</p><div class="language-vue-html line-numbers-mode" data-ext="vue-html"><pre class="language-vue-html"><code>&lt;script lang=&quot;ts&quot;&gt;\n  // use TypeScript\n&lt;/script&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',6),b=(0,e._)("code",null,"lang",-1),f=(0,e._)("code",null,"<style>",-1),y={href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"},_=(0,e._)("code",null,"<template>",-1),q={href:"https://pugjs.org/api/getting-started.html",target:"_blank",rel:"noopener noreferrer"},x=(0,e.uE)('<div class="language-vue-html line-numbers-mode" data-ext="vue-html"><pre class="language-vue-html"><code>&lt;template lang=&quot;pug&quot;&gt;\np {{ msg }}\n&lt;/template&gt;\n\n&lt;style lang=&quot;scss&quot;&gt;\n  $primary-color: #333;\n  body {\n    color: $primary-color;\n  }\n&lt;/style&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意对各种不同的预处理的集成会导致工具链的不同，你应该查看相应的工具链文档了解细节：</p>',2),w={href:"https://vitejs.dev/guide/features.html#css-pre-processors",target:"_blank",rel:"noopener noreferrer"},S={href:"https://cli.vuejs.org/guide/css.html#pre-processors",target:"_blank",rel:"noopener noreferrer"},U={href:"https://vue-loader.vuejs.org/guide/pre-processors.html#using-pre-processors",target:"_blank",rel:"noopener noreferrer"},V=(0,e.uE)('<h2 id="src-导入-src-imports" tabindex="-1"><a class="header-anchor" href="#src-导入-src-imports" aria-hidden="true">#</a> Src 导入 {#src-imports}</h2><p>如果你更喜欢将 <code>*.vue</code> 组件分散到多个文件中，可以为一个语块使用 <code>src</code> 这个 attribute 来导入一个外部文件：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./template.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./style.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./script.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意 <code>src</code> 导入和 Webpack 的模块请求遵循相同的路径解析规则，这意味着：</p><ul><li>相对路径需要以 <code>./</code> 开头</li><li>你也可以从 npm 依赖中导入资源</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- 从所安装的 &quot;todomvc-app-css&quot; npm 包中导入一个文件 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todomvc-app-css/index.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>src</code> 导入对自定义语块也同样适用：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>unit-test</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./unit-test.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>unit-test</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注释-comments" tabindex="-1"><a class="header-anchor" href="#注释-comments" aria-hidden="true">#</a> 注释 {#comments}</h2><p>在每一个语块中你都可以按照相应语言 (HTML、CSS、JavaScript 和 Pug 等等) 的语法书写注释。对于顶层注释，请使用 HTML 的注释语法 <code>&lt;!-- comment contents here --&gt;</code></p>',10),T={},C=(0,a(61935).Z)(T,[["render",function(n,s){const a=(0,e.up)("RouterLink"),T=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)("div",null,[t,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("p",null,[(0,e.Uk)("每个 "),l,(0,e.Uk)(" 文件最多可以包含一个 "),p,(0,e.Uk)(" 块。(使用 "),(0,e.Wm)(a,{to:"/api/sfc-script-setup.html"},{default:(0,e.w5)((()=>[c])),_:1}),(0,e.Uk)(" 的情况除外)")])]),o,(0,e._)("li",null,[(0,e._)("p",null,[i,(0,e.Uk)("应该是 Vue 的组件选项对象，可以是一个对象字面量或是 "),(0,e.Wm)(a,{to:"/api/general.html#definecomponent"},{default:(0,e.w5)((()=>[(0,e.Uk)("defineComponent")])),_:1}),(0,e.Uk)(" 函数的返回值。")])])]),u,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",r,[(0,e.Uk)("Gridsome："),d,(0,e.Wm)(T)])]),(0,e._)("li",null,[(0,e._)("a",k,[(0,e.Uk)("vite-plugin-vue-gql："),v,(0,e.Wm)(T)])]),(0,e._)("li",null,[(0,e._)("a",g,[(0,e.Uk)("vue-i18n："),m,(0,e.Wm)(T)])])]),(0,e._)("p",null,[(0,e.Uk)("自定义块的处理需要依赖工具链。如果你想要在构建中集成你的自定义语块，请参见"),(0,e.Wm)(a,{to:"/guide/scaling-up/tooling.html#sfc-custom-block-integrations"},{default:(0,e.w5)((()=>[(0,e.Uk)("相关工具链指南")])),_:1}),(0,e.Uk)("获取更多细节。")]),h,(0,e._)("p",null,[b,(0,e.Uk)(" 在任意块上都能使用，比如我们可以在 "),f,(0,e.Uk)(" 标签上使用 "),(0,e._)("a",y,[(0,e.Uk)("SASS"),(0,e.Wm)(T)]),(0,e.Uk)(" 或是 "),_,(0,e.Uk)(" 上使用 "),(0,e._)("a",q,[(0,e.Uk)("Pug"),(0,e.Wm)(T)]),(0,e.Uk)("：")]),x,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",w,[(0,e.Uk)("Vite"),(0,e.Wm)(T)])]),(0,e._)("li",null,[(0,e._)("a",S,[(0,e.Uk)("Vue CLI"),(0,e.Wm)(T)])]),(0,e._)("li",null,[(0,e._)("a",U,[(0,e.Uk)("webpack + vue-loader"),(0,e.Wm)(T)])])]),V])}]])},61935:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},22133:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-ec0e16f6","path":"/code/vue/vue.html","title":"Vue 单文件组件","lang":"zh-CN","frontmatter":{"title":"Vue 单文件组件","icon":"vue","category":["Vue"],"summary":"介绍 Vue 的单文件组件 (即 .vue 文件，简称 *SFC**) 是一种特殊的文件格式，使我们能够将一个 Vue 组件的模板、逻辑与样式封装在单个文件中。下面是一个单文件组件的示例： 如你所见，Vue 的单文件组件是 HTML、CSS 和 JavaScript 三种元素的自然延伸。、 和 `` 三个块在同一个文件中封装、组合了组件的视图、逻辑和样式。 ","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/vue/vue.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Vue 单文件组件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-05-28T16:24:21.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-05-28T16:24:21.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"总览","slug":"总览","link":"#总览","children":[]},{"level":2,"title":"总览 {#overview}","slug":"总览-overview","link":"#总览-overview","children":[]},{"level":2,"title":"相应语言块 {#language-blocks}","slug":"相应语言块-language-blocks","link":"#相应语言块-language-blocks","children":[{"level":3,"title":"<template> {#template}","slug":"template-template","link":"#template-template","children":[]},{"level":3,"title":"<script> {#script}","slug":"script-script","link":"#script-script","children":[]},{"level":3,"title":"<script setup> {#script-setup}","slug":"script-setup-script-setup","link":"#script-setup-script-setup","children":[]},{"level":3,"title":"<style> {#style}","slug":"style-style","link":"#style-style","children":[]},{"level":3,"title":"自定义块 {#custom-blocks}","slug":"自定义块-custom-blocks","link":"#自定义块-custom-blocks","children":[]}]},{"level":2,"title":"自动名称推导 {#automatic-name-inference}","slug":"自动名称推导-automatic-name-inference","link":"#自动名称推导-automatic-name-inference","children":[]},{"level":2,"title":"预处理器 {#pre-processors}","slug":"预处理器-pre-processors","link":"#预处理器-pre-processors","children":[]},{"level":2,"title":"Src 导入 {#src-imports}","slug":"src-导入-src-imports","link":"#src-导入-src-imports","children":[]},{"level":2,"title":"注释 {#comments}","slug":"注释-comments","link":"#注释-comments","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1653755061000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":4.18,"words":1255},"filePathRelative":"code/vue/vue.md","localizedDate":"2020年6月3日"}')}}]);