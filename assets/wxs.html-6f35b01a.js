import{_ as a,X as s,Y as t,a1 as e,$ as n,a3 as p}from"./framework-a91f7991.js";const l={},c=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"此部分在初步学习小程序的时候直接略过即可。")],-1),o=n("p",null,"WXS (WeiXin Script) 是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。",-1),i=n("ol",null,[n("li",null,"WXS 不依赖于运行时的基础库版本，可以在所有版本的小程序中运行。"),n("li",null,"WXS 与 JavaScript 是不同的语言，有自己的语法，并不和 JavaScript 一致。"),n("li",null,"WXS 的运行环境和其他 JavaScript 代码是隔离的，WXS 中不能调用其他 JavaScript 文件中定义的函数，也不能调用小程序提供的 API。"),n("li",null,"WXS 函数不能作为组件的事件回调。"),n("li",null,"由于运行环境的差异，在 iOS 设备上小程序内的 WXS 会比 JavaScript 代码快 2 ~ 20 倍。在 Android 设备上二者运行效率无差异。")],-1),u=p(`<p>以下是一些使用 WXS 的简单示例，要完整了解 WXS 语法，请参考 WXS 语法参考。</p><h2 id="页面渲染" tabindex="-1"><a class="header-anchor" href="#页面渲染" aria-hidden="true">#</a> 页面渲染</h2><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--wxml--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wxs</span> <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>m1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
const msg = &quot;hello world&quot;;

module.exports.message = msg;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wxs</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> {{m1.message}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>页面输出:</p><div class="language-html" data-ext="html"><pre class="language-html"><code>hello world
</code></pre></div><h2 id="数据处理" tabindex="-1"><a class="header-anchor" href="#数据处理" aria-hidden="true">#</a> 数据处理</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// page.js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">array</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--wxml--&gt;</span>
<span class="token comment">&lt;!-- 下面的 getMax 函数，接受一个数组，且返回数组中最大的元素的值 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wxs</span> <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>m1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
const getMax = array =&gt; {
  let max = undefined;
  for (let i = 0; i &lt; array.length; ++i) {
    max = max === undefined ?
      array[i] :
      (max &gt;= array[i] ? max : array[i]);
  }

  return max;
};

module.exports.getMax = getMax;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wxs</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 调用 wxs 里面的 getMax 函数，参数为 page.js 里面的 array --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> {{m1.getMax(array)}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>页面输出:</p><div class="language-html" data-ext="html"><pre class="language-html"><code>5
</code></pre></div>`,10);function r(d,m){return s(),t("div",null,[c,o,i,e(" more "),u])}const v=a(l,[["render",r],["__file","wxs.html.vue"]]);export{v as default};
