import{ac as l,G as c,H as d,E as n,S as t,N as s,ad as i,ae as e,W as p}from"./framework-931f0218.js";const u={},k=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"此部分在初步学习小程序的时候直接略过即可。")],-1),m=n("h2",{id:"界面动画的常见方式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#界面动画的常见方式","aria-hidden":"true"},"#"),t(" 界面动画的常见方式")],-1),v={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions",target:"_blank",rel:"noopener noreferrer"},b={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations",target:"_blank",rel:"noopener noreferrer"},h={href:"https://developers.weixin.qq.com/s/oHKxDPm47h5k",target:"_blank",rel:"noopener noreferrer"},y={href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html",target:"_blank",rel:"noopener noreferrer"},S=n("code",null,"wx.createAnimation",-1),f=e('<p>动画过程中，可以使用 <code>bindtransitionend</code> <code>bindanimationstart</code> <code>bindanimationiteration</code> <code>bindanimationend</code> 来监听动画事件。</p><table><thead><tr><th>事件名</th><th>含义</th></tr></thead><tbody><tr><td>transitionend</td><td>CSS 渐变结束或 wx.createAnimation 结束一个阶段</td></tr><tr><td>animationstart</td><td>CSS 动画开始</td></tr><tr><td>animationiteration</td><td>CSS 动画结束一个阶段</td></tr><tr><td>animationend</td><td>CSS 动画结束</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这几个事件都不是冒泡事件，需要绑定在真正发生了动画的节点上才会生效。</p><p>Mr.Hope 强烈建议优先使用 <strong>CSS 动画</strong>。只有 <strong>CSS 动画</strong> 无法满足要求时，才应该考虑 <code>wx.createAnimation</code>。</p></div><h2 id="关键帧动画" tabindex="-1"><a class="header-anchor" href="#关键帧动画" aria-hidden="true">#</a> 关键帧动画</h2><blockquote><p>基础库 2.9.0 开始支持</p></blockquote>',5),g={href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"wx.createAnimation",-1),q=e(`<h3 id="animate" tabindex="-1"><a class="header-anchor" href="#animate" aria-hidden="true">#</a> animate</h3><p>在页面或自定义组件中，当需要进行关键帧动画时，可以使用 <code>this.animate</code> 接口:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>selector<span class="token punctuation">,</span> keyframes<span class="token punctuation">,</span> duration<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>参数说明</p><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>selector</td><td>String</td><td></td><td>是</td><td>选择器(同 SelectorQuery.select 的选择器格式)</td></tr><tr><td>keyframes</td><td>Array</td><td></td><td>是</td><td>关键帧信息</td></tr><tr><td>duration</td><td>Number</td><td></td><td>是</td><td>动画持续时长(毫秒为单位)</td></tr><tr><td>callback</td><td>function</td><td></td><td>否</td><td>动画完成后的回调函数</td></tr></tbody></table><p>keyframes 中对象的结构</p><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>offset</td><td>Number</td><td></td><td>否</td><td>关键帧的偏移，范围[0-1]</td></tr><tr><td>ease</td><td>String</td><td>linear</td><td>否</td><td>动画缓动函数</td></tr><tr><td>transformOrigin</td><td>String</td><td>否</td><td>基点位置，即 CSS transform-origin</td><td></td></tr><tr><td>backgroundColor</td><td>String</td><td></td><td>否</td><td>背景颜色，即 CSS background-color</td></tr><tr><td>bottom</td><td>Number/String</td><td></td><td>否</td><td>底边位置，即 CSS bottom</td></tr><tr><td>height</td><td>Number/String</td><td></td><td>否</td><td>高度，即 CSS height</td></tr><tr><td>left</td><td>Number/String</td><td></td><td>否</td><td>左边位置，即 CSS left</td></tr><tr><td>width</td><td>Number/String</td><td></td><td>否</td><td>宽度，即 CSS width</td></tr><tr><td>opacity</td><td>Number</td><td></td><td>否</td><td>不透明度，即 CSS opacity</td></tr><tr><td>right</td><td>Number</td><td></td><td>否</td><td>右边位置，即 CSS right</td></tr><tr><td>top</td><td>Number/String</td><td></td><td>否</td><td>顶边位置，即 CSS top</td></tr><tr><td>matrix</td><td>Array</td><td></td><td>否</td><td>变换矩阵，即 CSS transform matrix</td></tr><tr><td>matrix3d</td><td>Array</td><td></td><td>否</td><td>三维变换矩阵，即 CSS transform matrix3d</td></tr><tr><td>rotate</td><td>Number</td><td></td><td>否</td><td>旋转，即 CSS transform rotate</td></tr><tr><td>rotate3d</td><td>Array</td><td></td><td>否</td><td>三维旋转，即 CSS transform rotate3d</td></tr><tr><td>rotateX</td><td>Number</td><td></td><td>否</td><td>X 方向旋转，即 CSS transform rotateX</td></tr><tr><td>rotateY</td><td>Number</td><td></td><td>否</td><td>Y 方向旋转，即 CSS transform rotateY</td></tr><tr><td>rotateZ</td><td>Number</td><td></td><td>否</td><td>Z 方向旋转，即 CSS transform rotateZ</td></tr><tr><td>scale</td><td>Array</td><td></td><td>否</td><td>缩放，即 CSS transform scale</td></tr><tr><td>scale3d</td><td>Array</td><td></td><td>否</td><td>三维缩放，即 CSS transform scale3d</td></tr><tr><td>scaleX</td><td>Number</td><td></td><td>否</td><td>X 方向缩放，即 CSS transform scaleX</td></tr><tr><td>scaleY</td><td>Number</td><td></td><td>否</td><td>Y 方向缩放，即 CSS transform scaleY</td></tr><tr><td>scaleZ</td><td>Number</td><td></td><td>否</td><td>Z 方向缩放，即 CSS transform scaleZ</td></tr><tr><td>skew</td><td>Array</td><td></td><td>否</td><td>倾斜，即 CSS transform skew</td></tr><tr><td>skewX</td><td>Number</td><td></td><td>否</td><td>X 方向倾斜，即 CSS transform skewX</td></tr><tr><td>skewY</td><td>Number</td><td></td><td>否</td><td>Y 方向倾斜，即 CSS transform skewY</td></tr><tr><td>translate</td><td>Array</td><td></td><td>否</td><td>位移，即 CSS transform translate</td></tr><tr><td>translate3d</td><td>Array</td><td></td><td>否</td><td>三维位移，即 CSS transform translate3d</td></tr><tr><td>translateX</td><td>Number</td><td></td><td>否</td><td>X 方向位移，即 CSS transform translateX</td></tr><tr><td>translateY</td><td>Number</td><td></td><td>否</td><td>Y 方向位移，即 CSS transform translateY</td></tr><tr><td>translateZ</td><td>Number</td><td></td><td>否</td><td>Z 方向位移，即 CSS transform translateZ</td></tr></tbody></table>`,7),C={class:"hint-container details"},w=n("summary",null,"代码示例",-1),x={href:"https://developers.weixin.qq.com/s/P73kJ7mi7UcA",target:"_blank",rel:"noopener noreferrer"},N=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>
  <span class="token string">&quot;#container&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&quot;#FF0000&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&quot;#00FF00&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&quot;#FF0000&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token number">5000</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">clearAnimation</span><span class="token punctuation">(</span>
      <span class="token string">&quot;#container&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;清除了#container上的opacity和rotate属性&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>
  <span class="token string">&quot;.block&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">ease</span><span class="token operator">:</span> <span class="token string">&quot;ease-out&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1.5</span><span class="token punctuation">,</span> <span class="token number">1.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token literal-property property">ease</span><span class="token operator">:</span> <span class="token string">&quot;ease-in&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.9</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token number">90</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token number">5000</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">clearAnimation</span><span class="token punctuation">(</span><span class="token string">&quot;.block&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;清除了.block上的所有动画属性&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),A=e(`<h3 id="clearanimation" tabindex="-1"><a class="header-anchor" href="#clearanimation" aria-hidden="true">#</a> clearAnimation</h3><p>调用 animate API 后会在节点上新增一些样式属性覆盖掉原有的对应样式。如果需要清除这些样式，可在该节点上的动画全部执行完毕后使用 <code>this.clearAnimation</code> 清除这些属性。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">clearAnimation</span><span class="token punctuation">(</span>selector<span class="token punctuation">,</span> options<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>参数说明</p><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>selector</td><td>String</td><td></td><td>是</td><td>选择器(同 SelectorQuery.select 的选择器格式)</td></tr><tr><td>options</td><td>Object</td><td></td><td>否</td><td>需要清除的属性，不填写则全部清除</td></tr><tr><td>callback</td><td>Function</td><td></td><td>否</td><td>清除完成后的回调函数</td></tr></tbody></table><h2 id="滚动驱动的动画" tabindex="-1"><a class="header-anchor" href="#滚动驱动的动画" aria-hidden="true">#</a> 滚动驱动的动画</h2><blockquote><p>基础库 2.9.0 开始支持</p></blockquote><p>根据滚动位置而不断改变动画的进度是一种比较常见的场景，这类动画可以让人感觉到界面交互很连贯自然，体验更好，目前支持一种由滚动驱动的动画机制。</p><p>基于上述的关键帧动画接口，新增一个 <code>ScrollTimeline</code> 的参数，用来绑定滚动元素(目前只支持 scroll-view)。接口定义如下:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>selector<span class="token punctuation">,</span> keyframes<span class="token punctuation">,</span> duration<span class="token punctuation">,</span> ScrollTimeline<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="scrolltimeline-中对象的结构" tabindex="-1"><a class="header-anchor" href="#scrolltimeline-中对象的结构" aria-hidden="true">#</a> ScrollTimeline 中对象的结构</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>scrollSource</td><td>String</td><td></td><td>是</td><td>指定滚动元素的选择器(只支持 scroll-view)，该元素滚动时会驱动动画的进度</td></tr><tr><td>orientation</td><td>String</td><td>vertical</td><td>否</td><td>指定滚动的方向。有效值为 horizontal 或 vertical</td></tr><tr><td>startScrollOffset</td><td>Number</td><td></td><td>是</td><td>指定开始驱动动画进度的滚动偏移量，单位 px</td></tr><tr><td>endScrollOffset</td><td>Number</td><td></td><td>是</td><td>指定停止驱动动画进度的滚动偏移量，单位 px</td></tr><tr><td>timeRange</td><td>Number</td><td></td><td>是</td><td>起始和结束的滚动范围映射的时间长度，该时间可用于与关键帧动画里的时间 (duration) 相匹配，单位 ms</td></tr></tbody></table>`,12),j={class:"hint-container details"},Y=n("summary",null,"代码示例",-1),X={href:"https://developers.weixin.qq.com/s/994o8jmY7FcQ",target:"_blank",rel:"noopener noreferrer"},O=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>
  <span class="token string">&quot;.avatar&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">&quot;scale(1) translateY(-20px)&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token string">&quot;25%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">&quot;scale(.65) translateY(-20px)&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token string">&quot;50%&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">scale(.3) translateY(-20px)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token number">2000</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">scrollSource</span><span class="token operator">:</span> <span class="token string">&quot;#scroller&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">timeRange</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">startScrollOffset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">endScrollOffset</span><span class="token operator">:</span> <span class="token number">85</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>
  <span class="token string">&quot;.search_input&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;0%&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;100%&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">scrollSource</span><span class="token operator">:</span> <span class="token string">&quot;#scroller&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">timeRange</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">startScrollOffset</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
    <span class="token literal-property property">endScrollOffset</span><span class="token operator">:</span> <span class="token number">252</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),R={id:"高级的动画方式",tabindex:"-1"},Z=n("a",{class:"header-anchor",href:"#高级的动画方式","aria-hidden":"true"},"#",-1),F=n("p",null,"在一些复杂场景下，上述的动画方法可能并不适用。所以这个时候就需要一些高级的动画方式。",-1),T=n("p",null,[t("连续使用 "),n("code",null,"setData"),t(" 来改变界面的方法也可以达到动画的效果。这样可以任意地改变界面，但通常会产生较大的延迟或卡顿，甚至导致小程序僵死。此时可以通过将页面的 "),n("code",null,"setData"),t(" 改为 自定义组件 中的 "),n("code",null,"setData"),t(" 来提升性能。下面的例子是使用 "),n("code",null,"setData"),t(" 来实现秒表动画的示例。")],-1),z={href:"https://developers.weixin.qq.com/s/cRTvdPmO7d5T",target:"_blank",rel:"noopener noreferrer"};function B(D,W){const a=p("ExternalLinkIcon"),o=p("Badge"),r=p("RouterLink");return c(),d("div",null,[k,m,n("p",null,[t("在小程序中，通常可以使用 "),n("a",v,[t("CSS 渐变"),s(a)]),t(" 和 "),n("a",b,[t("CSS 动画"),s(a)]),t(" 来创建简易的界面动画。(这也是 Mr.Hope 主要使用的动画方式)")]),n("blockquote",null,[n("p",null,[n("a",h,[t("在开发者工具中预览效果"),s(a)])])]),n("p",null,[t("同时，还可以使用 "),n("a",y,[S,s(a)]),t(" 接口来动态创建简易的动画效果。")]),f,n("p",null,[t("关键帧动画用于代替旧的 "),n("a",g,[_,s(a)]),t(" 。它具有更好的性能和更可控的接口。")]),q,n("details",C,[w,n("p",null,[n("a",x,[t("在开发者工具中预览效果"),s(a)])]),N]),A,n("details",j,[Y,n("p",null,[n("a",X,[t("在开发者工具中预览效果"),s(a)])]),O]),n("h2",R,[Z,t(" 高级的动画方式 "),s(o,{text:"初学者无需掌握",type:"warning"})]),F,n("ol",null,[n("li",null,[n("p",null,[s(r,{to:"/code/mini-app/guide/view/wxs-event.html"},{default:i(()=>[t("WXS 响应事件")]),_:1}),t(" 的方式可以通过使用 WXS 来响应事件的方法来动态调整节点的 style 属性。通过不断改变 style 属性的值可以做到动画效果。同时，这种方式也可以根据用户的触摸事件来动态地生成动画。")])]),n("li",null,[T,n("blockquote",null,[n("p",null,[n("a",z,[t("在开发者工具中预览效果"),s(a)])])])])])])}const H=l(u,[["render",B],["__file","animation.html.vue"]]);export{H as default};
