import{ac as p,F as l,G as u,K as i,M as n,ad as t,E as s,R as a,ae as r,U as e}from"./framework-729f259c.js";const d={},k=s("p",null,"CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。",-1),g=s("p",null,"选择器所选择的元素，叫做“选择器的对象”。",-1),m=s("div",{class:"language-html","data-ext":"html"},[s("pre",{class:"language-html"},[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),a("img")]),a(),s("span",{class:"token attr-name"},"src"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),a("/logo.svg"),s("span",{class:"token punctuation"},'"')]),a(),s("span",{class:"token attr-name"},"alt"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),a("logo"),s("span",{class:"token punctuation"},'"')]),a(),s("span",{class:"token special-attr"},[s("span",{class:"token attr-name"},"style"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),s("span",{class:"token value css language-css"},[s("span",{class:"token property"},"max-width"),s("span",{class:"token punctuation"},":"),a(" 150px")]),s("span",{class:"token punctuation"},'"')])]),a(),s("span",{class:"token punctuation"},"/>")]),a(`

`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),a("p")]),a(),s("span",{class:"token attr-name"},"class"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),a("paragraph"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),a("Mr.Hope is handsome!"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),a("p")]),s("span",{class:"token punctuation"},">")]),a(`
`),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),a("p")]),a(),s("span",{class:"token attr-name"},"id"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),a("par"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),a("Mr.Hope is very handsome!"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),a("p")]),s("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),h=s("div",{class:"language-css line-numbers-mode","data-ext":"css"},[s("pre",{class:"language-css"},[s("code",null,[s("span",{class:"token selector"},"p"),a(),s("span",{class:"token punctuation"},"{"),a(`
  `),s("span",{class:"token property"},"color"),s("span",{class:"token punctuation"},":"),a(" red"),s("span",{class:"token punctuation"},";"),a(`
`),s("span",{class:"token punctuation"},"}"),a(`

`),s("span",{class:"token selector"},".paragraph"),a(),s("span",{class:"token punctuation"},"{"),a(`
  `),s("span",{class:"token property"},"color"),s("span",{class:"token punctuation"},":"),a(" red"),s("span",{class:"token punctuation"},";"),a(`
`),s("span",{class:"token punctuation"},"}"),a(`

`),s("span",{class:"token selector"},"#par"),a(),s("span",{class:"token punctuation"},"{"),a(`
  `),s("span",{class:"token property"},"color"),s("span",{class:"token punctuation"},":"),a(" blue"),s("span",{class:"token punctuation"},";"),a(`
`),s("span",{class:"token punctuation"},"}"),a(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),v=r(`<p>在上文中，CSS 选择器选中了对应的 HTML 元素并为其应用样式规则。</p><h2 id="三个常见选择器" tabindex="-1"><a class="header-anchor" href="#三个常见选择器" aria-hidden="true">#</a> 三个常见选择器</h2><h3 id="id-选择器" tabindex="-1"><a class="header-anchor" href="#id-选择器" aria-hidden="true">#</a> ID 选择器</h3><p>ID 选择器可以为标有特定 ID 的 HTML 元素指定特定的样式。</p><p>HTML 可以用 ID 属性来设置 ID 选择器，CSS 中 ID 选择器以 <code>#</code> 来定义。</p><p>以下的样式规则应用于元素属性 <code>id=&quot;para1&quot;</code>:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">#para1</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>ID 的全称是 Identify，是身份标识的意思。ID 的实际作用是为这个 HTML 标签绑定一个页面内唯一的标识符。因此，每一个 HTML 页面出现的 ID 应该仅被使用一次，以 ID 来代指这个元素。</p></div><h3 id="class-选择器" tabindex="-1"><a class="header-anchor" href="#class-选择器" aria-hidden="true">#</a> Class 选择器</h3><p>Class 选择器用于描述一组元素的样式，class 选择器有别于 ID 选择器，class 可以在多个元素中使用。</p><p>Class 选择器在 HTML 中以 class 属性表示, 在 CSS 中，类选择器以句点 (<code>.</code>) 显示:</p><p>在以下的例子中，所有拥有 center 类的 HTML 元素均为居中。</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.center</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="标签选择器" tabindex="-1"><a class="header-anchor" href="#标签选择器" aria-hidden="true">#</a> 标签选择器</h3><p>标签选择器用于指定一个 HTML 标签的样式。通常，浏览器会为每个特定的 HTML 标签指定一个默认样式，但是不同的浏览器的默认样式可能有细微的区别。</p><p>有些时候想要覆盖浏览器的默认样式，或者说想在所有浏览器中保持统一样式，即可使用标签选择器指定标签的默认样式。在 CSS 指定的标签样式会覆盖掉浏览器默认指定的样式。</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 确保所有浏览器的段落标签的字体大小均为16像素。*/</span>
<span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2><p>选择器可以通过运算符，构成更加复杂的选择器。</p><p>最常见的是<strong>后代选择器</strong>，以空格分隔，用于选取某元素的后代元素</p><div class="custom-container tip"><p class="custom-container-title">选择器案例</p><ul><li><p><code>p{ }</code>: 为所有 <strong>p</strong> 元素指定一个样式。</p></li><li><p><code>.marked{ }</code>: 为所有 <strong>class=&quot;marked&quot;</strong> 的元素指定一个样式。</p></li><li><p><code>.marked p{ }</code>: 为所有 <strong>class=&quot;marked&quot;</strong> 元素内的 <strong>p</strong> 元素指定一个样式。</p></li><li><p><code>p.marked{ }</code>: 为所有 <strong>class=&quot;marked&quot;</strong> 的 <strong>p</strong> 元素指定一个样式。</p></li></ul></div>`,21),_={class:"custom-container info"},b=s("p",{class:"custom-container-title"},"相关信息",-1);function x(f,M){const o=e("CodeDemo"),c=e("RouterLink");return l(),u("div",null,[k,g,i(" more "),n(o,{id:"code-demo-7",type:"normal",title:"%E6%A1%88%E4%BE%8B",code:"eJx1jr0OgkAQhF9lXVsFLWwQqW18g2tOuMAl95fbEyGEd3cJiQkmljPzTWYm7JI1WGCpbQsU65vA3PjWZ9S3AkGaxM5isKA0GsXSyuH41k3qCjhfTmHgKK+EE64MUBtJxEyQUbZRhk5g9YjZ3QcFmqCTriFv1a7MA1e4oJuV3nK9iuMvjAesifhrgEk4gNobHwuIqrkKNy/72Xf1H7FnYpM9zUutIc4fhEJbQg=="},{default:t(()=>[m,h]),_:1}),v,s("div",_,[b,s("p",null,[a("选择器详细介绍，请见 "),n(c,{to:"/code/website/css/intro/selector.html"},{default:t(()=>[a("选择器")]),_:1}),a("。")])])])}const q=p(d,[["render",x],["__file","selector.html.vue"]]);export{q as default};
