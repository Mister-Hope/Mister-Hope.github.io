import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as p,c as r,f as c,d as e,e as n,a,b as l}from"./app-W9Dk-dRG.js";const i={},d=e("p",null,"如果没有明确的指定类型，那么 TypeScript 会依照类型推论(Type Inference)的规则推断出一个类型。",-1),u=l(`<h2 id="什么是类型推论" tabindex="-1"><a class="header-anchor" href="#什么是类型推论"><span>什么是类型推论</span></a></h2><p>以下代码虽然没有指定类型，但是会在编译的时候报错:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(2,1): error TS2322: Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span>
</code></pre></div><p>事实上，它等价于:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(2,1): error TS2322: Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span>
</code></pre></div><p>TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。</p><p><strong>如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 <code>any</code> 类型而完全不被类型检查</strong>:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2>`,9),k={href:"http://www.typescriptlang.org/docs/handbook/type-inference.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html",target:"_blank",rel:"noopener noreferrer"};function y(g,h){const s=o("ExternalLinkIcon");return p(),r("div",null,[d,c(" more "),u,e("ul",null,[e("li",null,[e("a",k,[n("Type Inference"),a(s)]),n("("),e("a",m,[n("中文版"),a(s)]),n(")")])])])}const f=t(i,[["render",y],["__file","type-inference.html.vue"]]);export{f as default};
