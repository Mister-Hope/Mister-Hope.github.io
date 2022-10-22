"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[99972],{77621:(n,a,e)=>{e.r(a),e.d(a,{default:()=>w});var s=e(71534);const t=(0,s.uE)('<h2 id="显示区域尺寸" tabindex="-1"><a class="header-anchor" href="#显示区域尺寸" aria-hidden="true">#</a> 显示区域尺寸</h2><p>显示区域指小程序界面中可以自由布局展示的区域。在默认情况下，小程序显示区域的尺寸自页面初始化起就不会发生变化。但以下两种方式都可以改变这一默认行为。</p><h3 id="在手机上启用屏幕旋转支持" tabindex="-1"><a class="header-anchor" href="#在手机上启用屏幕旋转支持" aria-hidden="true">#</a> 在手机上启用屏幕旋转支持</h3><p>从小程序基础库版本 2.4.0 开始，小程序在手机上支持屏幕旋转。使小程序中的页面支持屏幕旋转的方法是: 在 app.json 的 window 段中设置 <code>&quot;pageOrientation&quot;: &quot;auto&quot;</code> ，或在页面 json 文件中配置 <code>&quot;pageOrientation&quot;: &quot;auto&quot;</code>。</p><details class="custom-container details"><summary>代码示例</summary><p>以下是在单个页面 json 文件中启用屏幕旋转的示例。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;pageOrientation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果页面添加了上述声明，则在屏幕旋转时，这个页面将随之旋转，显示区域尺寸也会随着屏幕旋转而变化。</p></details><p>从小程序基础库版本 2.5.0 开始， <code>pageOrientation</code> 还可以被设置为 <code>landscape</code> ，表示固定为横屏显示。</p><h3 id="在-ipad-上启用屏幕旋转支持" tabindex="-1"><a class="header-anchor" href="#在-ipad-上启用屏幕旋转支持" aria-hidden="true">#</a> 在 iPad 上启用屏幕旋转支持</h3><p>从小程序基础库版本 2.3.0 开始，在 iPad 上运行的小程序可以支持屏幕旋转。使小程序支持 iPad 屏幕旋转的方法是: 在 app.json 中添加 <code>&quot;resizable&quot;: true</code> 。</p><details class="custom-container details"><summary>代码示例</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;resizable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果小程序添加了上述声明，则在屏幕旋转时，小程序将随之旋转，显示区域尺寸也会随着屏幕旋转而变化。</p></details><div class="custom-container warning"><p class="custom-container-title">注意</p><p>在 iPad 上不能单独配置某个页面是否支持屏幕旋转。</p></div><h2 id="media-query" tabindex="-1"><a class="header-anchor" href="#media-query" aria-hidden="true">#</a> Media Query</h2><p>有时，对于不同尺寸的显示区域，页面的布局会有所差异。此时可以使用 media query 来解决大多数问题。</p><details class="custom-container details"><summary>代码示例</summary><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.my-class</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 480px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n  <span class="token comment">/*仅在 480px 或更宽的屏幕上生效的样式规则*/</span>\n  <span class="token selector">.my-class</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>',13),i={href:"https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html",target:"_blank",rel:"noopener noreferrer"},p=(0,s._)("code",null,"this.createMediaQueryObserver()",-1),o={href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/MediaQueryObserver.html",target:"_blank",rel:"noopener noreferrer"},l=(0,s._)("code",null,"MediaQueryObserver",-1),c={href:"https://developers.weixin.qq.com/s/TtFaFjmb7aiy",target:"_blank",rel:"noopener noreferrer"},r=(0,s._)("h2",{id:"屏幕旋转事件",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#屏幕旋转事件","aria-hidden":"true"},"#"),(0,s.Uk)(" 屏幕旋转事件")],-1),u=(0,s._)("p",null,"有时，仅仅使用 media query 无法控制一些精细的布局变化。此时可以使用 js 作为辅助。",-1),d={href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.selectViewport.html",target:"_blank",rel:"noopener noreferrer"},m=(0,s._)("code",null,"selectorQuery.selectViewport",-1),v=(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("页面尺寸发生改变的事件，可以使用页面的 "),(0,s._)("code",null,"onResize"),(0,s.Uk)(" 来监听。")])],-1),k=(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("对于自定义组件，可以使用 "),(0,s._)("code",null,"resize"),(0,s.Uk)(" 生命周期来监听。回调函数中将返回显示区域的尺寸信息。(从基础库版本 2.4.0 开始支持。)")])],-1),h=(0,s.uE)('<details class="custom-container details"><summary>代码示例</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">onResize</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span>size<span class="token punctuation">.</span>windowWidth<span class="token punctuation">;</span> <span class="token comment">// 新的显示区域宽度</span>\n    res<span class="token punctuation">.</span>size<span class="token punctuation">.</span>windowHeight<span class="token punctuation">;</span> <span class="token comment">// 新的显示区域高度</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">pageLifetimes</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">resize</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      res<span class="token punctuation">.</span>size<span class="token punctuation">.</span>windowWidth<span class="token punctuation">;</span> <span class="token comment">// 新的显示区域宽度</span>\n      res<span class="token punctuation">.</span>size<span class="token punctuation">.</span>windowHeight<span class="token punctuation">;</span> <span class="token comment">// 新的显示区域高度</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>',1),b={href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.onWindowResize.html",target:"_blank",rel:"noopener noreferrer"},g=(0,s._)("code",null,"wx.onWindowResize",-1),y={},w=(0,e(61935).Z)(y,[["render",function(n,a){const e=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[t,(0,s._)("p",null,[(0,s.Uk)("在 WXML 中，可以使用 "),(0,s._)("a",i,[(0,s.Uk)("match-media"),(0,s.Wm)(e)]),(0,s.Uk)(" 组件来根据 media query 匹配状态展示、隐藏节点。")]),(0,s._)("p",null,[(0,s.Uk)("此外，可以在页面或者自定义组件 JS 中使用 "),p,(0,s.Uk)(" 方法来创建一个 "),(0,s._)("a",o,[l,(0,s.Wm)(e)]),(0,s.Uk)(" 对象，用于监听指定的 media query 的匹配状态。")]),(0,s._)("blockquote",null,[(0,s._)("p",null,[(0,s._)("a",c,[(0,s.Uk)("在开发者工具中预览效果"),(0,s.Wm)(e)])])]),r,u,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("在 js 中读取页面的显示区域尺寸，可以使用 "),(0,s._)("a",d,[m,(0,s.Wm)(e)]),(0,s.Uk)(" 。")])]),v,k]),h,(0,s._)("p",null,[(0,s.Uk)("此外，还可以使用 "),(0,s._)("a",b,[g,(0,s.Wm)(e)]),(0,s.Uk)(" 来监听(但这不是推荐的方式)。")])])}]])},61935:(n,a)=>{a.Z=(n,a)=>{const e=n.__vccOpts||n;for(const[n,s]of a)e[n]=s;return e}},4291:(n,a,e)=>{e.r(a),e.d(a,{data:()=>s});const s=JSON.parse('{"key":"v-59358b0a","path":"/code/mini-app/guide/view/resizable.html","title":"响应显示区域变化","lang":"zh-CN","frontmatter":{"title":"响应显示区域变化","icon":"view","category":["小程序"],"summary":"显示区域尺寸 显示区域指小程序界面中可以自由布局展示的区域。在默认情况下，小程序显示区域的尺寸自页面初始化起就不会发生变化。但以下两种方式都可以改变这一默认行为。 在手机上启用屏幕旋转支持 从小程序基础库版本 2.4.0 开始，小程序在手机上支持屏幕旋转。使小程序中的页面支持屏幕旋转的方法是: 在 app.json 的 window 段中设置 \\"pageOr","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/mini-app/guide/view/resizable.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"响应显示区域变化"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2021-01-20T11:45:00.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2021-01-20T11:45:00.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"显示区域尺寸","slug":"显示区域尺寸","link":"#显示区域尺寸","children":[{"level":3,"title":"在手机上启用屏幕旋转支持","slug":"在手机上启用屏幕旋转支持","link":"#在手机上启用屏幕旋转支持","children":[]},{"level":3,"title":"在 iPad 上启用屏幕旋转支持","slug":"在-ipad-上启用屏幕旋转支持","link":"#在-ipad-上启用屏幕旋转支持","children":[]}]},{"level":2,"title":"Media Query","slug":"media-query","link":"#media-query","children":[]},{"level":2,"title":"屏幕旋转事件","slug":"屏幕旋转事件","link":"#屏幕旋转事件","children":[]}],"git":{"createdTime":1611033126000,"updatedTime":1611143100000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3}]},"readingTime":{"minutes":2.65,"words":795},"filePathRelative":"code/mini-app/guide/view/resizable.md","localizedDate":"2021年1月19日"}')}}]);