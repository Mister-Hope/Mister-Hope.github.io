import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as a,d as n,b as t}from"./app-r406UCC8.js";const s={},d=t(`<p>框架为开发者提供了一系列基础组件，开发者可以通过组合这些基础组件进行快速开发。详细介绍请参考 <a href="https://developers.weixin.qq.com/miniprogram/dev/component/" target="_blank" rel="noopener noreferrer">组件文档</a>。</p><p>什么是组件:</p><ul><li><p>组件是视图层的基本组成单元。</p></li><li><p>组件自带一些功能与微信风格一致的样式。</p></li><li><p>一个组件通常包括 <strong>开始标签</strong> 和 <strong>结束标签</strong>，属性 用来修饰这个组件，内容 在两个标签之内。</p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">tagname</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> property</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">Content goes here ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">tagname</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>所有组件与属性都是小写，以连字符 <code>-</code> 连接</p></div></li></ul>`,3),r=t('<h2 id="属性类型" tabindex="-1"><a class="header-anchor" href="#属性类型"><span>属性类型</span></a></h2><table><thead><tr><th>类型</th><th>描述</th><th>注解</th></tr></thead><tbody><tr><td>Boolean</td><td>布尔值</td><td>组件写上该属性，不管是什么值都被当作 <code>true</code>；只有组件上没有该属性时，属性值才为 <code>false</code>。<br>如果属性值为变量，变量的值会被转换为 Boolean 类型</td></tr><tr><td>Number</td><td>数字</td><td>1, 2.5</td></tr><tr><td>String</td><td>字符串</td><td>&quot;string&quot;</td></tr><tr><td>Array</td><td>数组</td><td>[ 1, &quot;string&quot; ]</td></tr><tr><td>Object</td><td>对象</td><td>{ key: value }</td></tr><tr><td>EventHandler</td><td>事件处理函数名</td><td><code>&quot;handlerName&quot;</code> 是 <code>Page</code> 中定义的事件处理函数名</td></tr><tr><td>Any</td><td>任意属性</td><td></td></tr></tbody></table><h2 id="公共属性" tabindex="-1"><a class="header-anchor" href="#公共属性"><span>公共属性</span></a></h2><p>所有组件都有以下属性:</p><table><thead><tr><th>属性名</th><th>类型</th><th>描述</th><th>注解</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>组件的唯一标示</td><td>保持整个页面唯一</td></tr><tr><td>class</td><td>String</td><td>组件的样式类</td><td>在对应的 WXSS 中定义的样式类</td></tr><tr><td>style</td><td>String</td><td>组件的内联样式</td><td>可以动态设置的内联样式</td></tr><tr><td>hidden</td><td>Boolean</td><td>组件是否显示</td><td>所有组件默认显示</td></tr><tr><td>data-*</td><td>Any</td><td>自定义属性</td><td>组件上触发的事件时，会发送给事件处理函数</td></tr><tr><td>bind* / catch*</td><td>EventHandler</td><td>组件的事件</td><td>详见事件</td></tr></tbody></table><h2 id="特殊属性" tabindex="-1"><a class="header-anchor" href="#特殊属性"><span>特殊属性</span></a></h2><p>几乎所有组件都有各自定义的属性，可以对该组件的功能或样式进行修饰，请参考各个组件的定义。</p>',7);function l(o,p){return i(),a("div",null,[d,n(" more "),r])}const m=e(s,[["render",l],["__file","component.html.vue"]]),g=JSON.parse('{"path":"/code/mini-app/guide/view/component.html","title":"基础组件","lang":"zh-CN","frontmatter":{"date":"2020-10-09T00:00:00.000Z","title":"基础组件","icon":"plugin","category":"小程序","description":"框架为开发者提供了一系列基础组件，开发者可以通过组合这些基础组件进行快速开发。详细介绍请参考 组件文档。 什么是组件: 组件是视图层的基本组成单元。 组件自带一些功能与微信风格一致的样式。 一个组件通常包括 开始标签 和 结束标签，属性 用来修饰这个组件，内容 在两个标签之内。 注意 所有组件与属性都是小写，以连字符 - 连接","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/mini-app/guide/view/component.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"基础组件"}],["meta",{"property":"og:description","content":"框架为开发者提供了一系列基础组件，开发者可以通过组合这些基础组件进行快速开发。详细介绍请参考 组件文档。 什么是组件: 组件是视图层的基本组成单元。 组件自带一些功能与微信风格一致的样式。 一个组件通常包括 开始标签 和 结束标签，属性 用来修饰这个组件，内容 在两个标签之内。 注意 所有组件与属性都是小写，以连字符 - 连接"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T18:01:12.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-10-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T18:01:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基础组件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-10-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T18:01:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"属性类型","slug":"属性类型","link":"#属性类型","children":[]},{"level":2,"title":"公共属性","slug":"公共属性","link":"#公共属性","children":[]},{"level":2,"title":"特殊属性","slug":"特殊属性","link":"#特殊属性","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1706205672000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":1.54,"words":463},"filePathRelative":"code/mini-app/guide/view/component.md","localizedDate":"2020年10月9日","excerpt":"<p>框架为开发者提供了一系列基础组件，开发者可以通过组合这些基础组件进行快速开发。详细介绍请参考 <a href=\\"https://developers.weixin.qq.com/miniprogram/dev/component/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">组件文档</a>。</p>\\n<p>什么是组件:</p>\\n<ul>\\n<li>\\n<p>组件是视图层的基本组成单元。</p>\\n</li>\\n<li>\\n<p>组件自带一些功能与微信风格一致的样式。</p>\\n</li>\\n<li>\\n<p>一个组件通常包括 <strong>开始标签</strong> 和 <strong>结束标签</strong>，属性 用来修饰这个组件，内容 在两个标签之内。</p>\\n<div class=\\"language-xml line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"xml\\" data-title=\\"xml\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">tagname</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#D19A66\\"> property</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">=</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"value\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">Content goes here ...</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&lt;/</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">tagname</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>所有组件与属性都是小写，以连字符 <code>-</code> 连接</p>\\n</div>\\n</li>\\n</ul>\\n","autoDesc":true}');export{m as comp,g as data};
