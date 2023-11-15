import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as s,d,e as t,a as c,f as l,b as a}from"./app-0f8c396e.js";const p={},i={href:"https://developers.weixin.qq.com/miniprogram/dev/component/",target:"_blank",rel:"noopener noreferrer"},h=a(`<p>什么是组件:</p><ul><li><p>组件是视图层的基本组成单元。</p></li><li><p>组件自带一些功能与微信风格一致的样式。</p></li><li><p>一个组件通常包括 <strong>开始标签</strong> 和 <strong>结束标签</strong>，属性 用来修饰这个组件，内容 在两个标签之内。</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tagname</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
Content goes here ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tagname</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>所有组件与属性都是小写，以连字符 <code>-</code> 连接</p></div></li></ul>`,2),u=a('<h2 id="属性类型" tabindex="-1"><a class="header-anchor" href="#属性类型" aria-hidden="true">#</a> 属性类型</h2><table><thead><tr><th>类型</th><th>描述</th><th>注解</th></tr></thead><tbody><tr><td>Boolean</td><td>布尔值</td><td>组件写上该属性，不管是什么值都被当作 <code>true</code>；只有组件上没有该属性时，属性值才为 <code>false</code>。<br>如果属性值为变量，变量的值会被转换为 Boolean 类型</td></tr><tr><td>Number</td><td>数字</td><td>1, 2.5</td></tr><tr><td>String</td><td>字符串</td><td>&quot;string&quot;</td></tr><tr><td>Array</td><td>数组</td><td>[ 1, &quot;string&quot; ]</td></tr><tr><td>Object</td><td>对象</td><td>{ key: value }</td></tr><tr><td>EventHandler</td><td>事件处理函数名</td><td><code>&quot;handlerName&quot;</code> 是 <code>Page</code> 中定义的事件处理函数名</td></tr><tr><td>Any</td><td>任意属性</td><td></td></tr></tbody></table><h2 id="公共属性" tabindex="-1"><a class="header-anchor" href="#公共属性" aria-hidden="true">#</a> 公共属性</h2><p>所有组件都有以下属性:</p><table><thead><tr><th>属性名</th><th>类型</th><th>描述</th><th>注解</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>组件的唯一标示</td><td>保持整个页面唯一</td></tr><tr><td>class</td><td>String</td><td>组件的样式类</td><td>在对应的 WXSS 中定义的样式类</td></tr><tr><td>style</td><td>String</td><td>组件的内联样式</td><td>可以动态设置的内联样式</td></tr><tr><td>hidden</td><td>Boolean</td><td>组件是否显示</td><td>所有组件默认显示</td></tr><tr><td>data-*</td><td>Any</td><td>自定义属性</td><td>组件上触发的事件时，会发送给事件处理函数</td></tr><tr><td>bind* / catch*</td><td>EventHandler</td><td>组件的事件</td><td>详见事件</td></tr></tbody></table><h2 id="特殊属性" tabindex="-1"><a class="header-anchor" href="#特殊属性" aria-hidden="true">#</a> 特殊属性</h2><p>几乎所有组件都有各自定义的属性，可以对该组件的功能或样式进行修饰，请参考各个组件的定义。</p>',7);function g(m,_){const e=o("ExternalLinkIcon");return r(),s("div",null,[d("p",null,[t("框架为开发者提供了一系列基础组件，开发者可以通过组合这些基础组件进行快速开发。详细介绍请参考 "),d("a",i,[t("组件文档"),c(e)]),t("。")]),h,l(" more "),u])}const f=n(p,[["render",g],["__file","component.html.vue"]]);export{f as default};
