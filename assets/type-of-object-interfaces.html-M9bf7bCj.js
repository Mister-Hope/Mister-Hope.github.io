import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as c,c as l,f as r,d as n,e as s,a,w as u,b as p}from"./app-yzqTKq0J.js";const d={},m=n("p",null,"在 TypeScript 中，我们使用接口(Interfaces)来定义对象的类型。",-1),k=n("h2",{id:"什么是接口",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#什么是接口"},[n("span",null,"什么是接口")])],-1),v=n("p",null,"在面向对象语言中，接口(Interfaces)是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类(classes)去实现(implement)。",-1),b=p(`<h2 id="简单的例子" tabindex="-1"><a class="header-anchor" href="#简单的例子"><span>简单的例子</span></a></h2><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>上面的例子中，我们定义了一个接口 <code>Person</code>，接着定义了一个变量 <code>tom</code>，它的类型是 <code>Person</code>。这样，我们就约束了 <code>tom</code> 的形状必须和接口 <code>Person</code> 一致。</p>`,3),g={href:"https://msdn.microsoft.com/en-us/library/8bc1fexb%28v=vs.71%29.aspx",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"I",-1),h=p(`<p>定义的变量比接口少了一些属性是不允许的:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(6,5): error TS2322: Type &#39;{ name: string; }&#39; is not assignable to type &#39;Person&#39;.</span>
<span class="token comment">//   Property &#39;age&#39; is missing in type &#39;{ name: string; }&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多一些属性也是不允许的:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
  gender<span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(9,5): error TS2322: Type &#39;{ name: string; age: number; gender: string; }&#39; is not assignable to type &#39;Person&#39;.</span>
<span class="token comment">//   Object literal may only specify known properties, and &#39;gender&#39; does not exist in type &#39;Person&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见，<strong>赋值的时候，变量的形状必须和接口的形状保持一致</strong>。</p><h2 id="可选属性" tabindex="-1"><a class="header-anchor" href="#可选属性"><span>可选属性</span></a></h2><p>有时我们希望不要完全匹配一个形状，那么可以用可选属性:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>可选属性的含义是该属性可以不存在。</p><p>这时<strong>仍然不允许添加未定义的属性</strong>:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
  gender<span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// examples/playground/index.ts(9,5): error TS2322: Type &#39;{ name: string; age: number; gender: string; }&#39; is not assignable to type &#39;Person&#39;.</span>
<span class="token comment">//   Object literal may only specify known properties, and &#39;gender&#39; does not exist in type &#39;Person&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="任意属性" tabindex="-1"><a class="header-anchor" href="#任意属性"><span>任意属性</span></a></h2><p>有时候我们希望一个接口允许有任意的属性，可以使用如下方式:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
  gender<span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>[propName: string]</code> 定义了任意属性取 <code>string</code> 类型的值。</p><p>需要注意的是，<strong>一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集</strong>:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
  gender<span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(3,5): error TS2411: Property &#39;age&#39; of type &#39;number&#39; is not assignable to string index type &#39;string&#39;.</span>
<span class="token comment">// index.ts(7,5): error TS2322: Type &#39;{ [x: string]: string | number; name: string; age: number; gender: string; }&#39; is not assignable to type &#39;Person&#39;.</span>
<span class="token comment">//   Index signatures are incompatible.</span>
<span class="token comment">//     Type &#39;string | number&#39; is not assignable to type &#39;string&#39;.</span>
<span class="token comment">//       Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，任意属性的值允许是 <code>string</code>，但是可选属性 <code>age</code> 的值却是 <code>number</code>，<code>number</code> 不是 <code>string</code> 的子属性，所以报错了。</p><p>另外，在报错信息中可以看出，此时 <code>{ name: &#39;Tom&#39;, age: 25, gender: &#39;male&#39; }</code> 的类型被推断成了 <code>{ [x: string]: string | number; name: string; age: number; gender: string; }</code>，这是联合类型和接口的结合。</p><h2 id="只读属性" tabindex="-1"><a class="header-anchor" href="#只读属性"><span>只读属性</span></a></h2><p>有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 <code>readonly</code> 定义只读属性:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token number">89757</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
  gender<span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

tom<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">9527</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(14,5): error TS2540: Cannot assign to &#39;id&#39; because it is a constant or a read-only property.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，使用 <code>readonly</code> 定义的属性 <code>id</code> 初始化后，又被赋值了，所以报错了。</p><p><strong>注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候</strong>:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
  gender<span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

tom<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">89757</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(8,5): error TS2322: Type &#39;{ name: string; gender: string; }&#39; is not assignable to type &#39;Person&#39;.</span>
<span class="token comment">//   Property &#39;id&#39; is missing in type &#39;{ name: string; gender: string; }&#39;.</span>
<span class="token comment">// index.ts(13,5): error TS2540: Cannot assign to &#39;id&#39; because it is a constant or a read-only property.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，报错信息有两处，第一处是在对 <code>tom</code> 进行赋值的时候，没有给 <code>id</code> 赋值。</p><p>第二处是在给 <code>tom.id</code> 赋值的时候，由于它是只读属性，所以报错了。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2>`,29),f={href:"http://www.typescriptlang.org/docs/handbook/interfaces.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html",target:"_blank",rel:"noopener noreferrer"};function T(_,P){const o=t("RouteLink"),e=t("ExternalLinkIcon");return c(),l("div",null,[m,r(" more "),k,v,n("p",null,[s("TypeScript 中的接口是一个非常灵活的概念，除了可用于"),a(o,{to:"/code/language/typescript/advanced/class-and-interfaces.html#%E7%B1%BB%E5%AE%9E%E7%8E%B0%E6%8E%A5%E5%8F%A3"},{default:u(()=>[s("对类的一部分行为进行抽象")]),_:1}),s("以外，也常用于对「对象的形状(Shape)」进行描述。")]),b,n("p",null,[s("接口一般首字母大写。"),n("a",g,[s("有的编程语言中会建议接口的名称加上 "),y,s(" 前缀"),a(e)]),s("。")]),h,n("ul",null,[n("li",null,[n("a",f,[s("Interfaces"),a(e)]),s("("),n("a",x,[s("中文版"),a(e)]),s(")")])])])}const S=i(d,[["render",T],["__file","type-of-object-interfaces.html.vue"]]),I=JSON.parse('{"path":"/code/language/typescript/basics/type-of-object-interfaces.html","title":"对象的类型——接口","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"对象的类型——接口","icon":"api","category":"TypeScript","description":"在 TypeScript 中，我们使用接口(Interfaces)来定义对象的类型。 什么是接口 在面向对象语言中，接口(Interfaces)是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类(classes)去实现(implement)。 TypeScript 中的接口是一个非常灵活的概念，除了可用于以外，也常用于对「对象的形状(Shap...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/typescript/basics/type-of-object-interfaces.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"对象的类型——接口"}],["meta",{"property":"og:description","content":"在 TypeScript 中，我们使用接口(Interfaces)来定义对象的类型。 什么是接口 在面向对象语言中，接口(Interfaces)是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类(classes)去实现(implement)。 TypeScript 中的接口是一个非常灵活的概念，除了可用于以外，也常用于对「对象的形状(Shap..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"对象的类型——接口\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"什么是接口","slug":"什么是接口","link":"#什么是接口","children":[]},{"level":2,"title":"简单的例子","slug":"简单的例子","link":"#简单的例子","children":[]},{"level":2,"title":"可选属性","slug":"可选属性","link":"#可选属性","children":[]},{"level":2,"title":"任意属性","slug":"任意属性","link":"#任意属性","children":[]},{"level":2,"title":"只读属性","slug":"只读属性","link":"#只读属性","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":3.67,"words":1100},"filePathRelative":"code/language/typescript/basics/type-of-object-interfaces.md","localizedDate":"2020年5月4日","excerpt":"<p>在 TypeScript 中，我们使用接口(Interfaces)来定义对象的类型。</p>\\n","autoDesc":true}');export{S as comp,I as data};
