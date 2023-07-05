import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as i,c as u,b as s,a,w as o,d as n,e as r,f as c}from"./app-27839578.js";const k={},d=s("p",null,"这一章主要介绍接口的另一个用途，对类的一部分行为进行抽象。",-1),v=c(`<h2 id="类实现接口" tabindex="-1"><a class="header-anchor" href="#类实现接口" aria-hidden="true">#</a> 类实现接口</h2><p>实现(implements)是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口(interfaces)，用 <code>implements</code> 关键字来实现。这个特性大大提高了面向对象的灵活性。</p><p>举例来说，门是一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。这时候如果有另一个类，车，也有报警器的功能，就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Door</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SecurityDoor</span> <span class="token keyword">extends</span> <span class="token class-name">Door</span> <span class="token keyword">implements</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;SecurityDoor alert&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token keyword">implements</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Car alert&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个类可以实现多个接口:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Light</span> <span class="token punctuation">{</span>
  <span class="token function">lightOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">lightOff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token keyword">implements</span> <span class="token class-name">Alarm</span><span class="token punctuation">,</span> Light <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Car alert&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">lightOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Car light on&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">lightOff</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Car light off&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，<code>Car</code> 实现了 <code>Alarm</code> 和 <code>Light</code> 接口，既能报警，也能开关车灯。</p><h2 id="接口继承接口" tabindex="-1"><a class="header-anchor" href="#接口继承接口" aria-hidden="true">#</a> 接口继承接口</h2><p>接口与接口之间可以是继承关系:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">LightableAlarm</span> <span class="token keyword">extends</span> <span class="token class-name">Alarm</span> <span class="token punctuation">{</span>
  <span class="token function">lightOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">lightOff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上例中，我们使用 <code>extends</code> 使 <code>LightableAlarm</code> 继承 <code>Alarm</code>。</p><h2 id="接口继承类" tabindex="-1"><a class="header-anchor" href="#接口继承类" aria-hidden="true">#</a> 接口继承类</h2><p>接口也可以继承类:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Point3d</span> <span class="token keyword">extends</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> point3d<span class="token operator">:</span> Point3d <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="混合类型" tabindex="-1"><a class="header-anchor" href="#混合类型" aria-hidden="true">#</a> 混合类型</h2>`,15),m=c(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SearchFunc</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> subString<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> mySearch<span class="token operator">:</span> SearchFunc<span class="token punctuation">;</span>
<span class="token function-variable function">mySearch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> subString<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>subString<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>有时候，一个函数还可以有自己的属性和方法:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Counter</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>start<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  interval<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Counter <span class="token punctuation">{</span>
  <span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token operator">&lt;</span>Counter<span class="token operator">&gt;</span><span class="token keyword">function</span> <span class="token punctuation">(</span>start<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  counter<span class="token punctuation">.</span>interval <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
  counter<span class="token punctuation">.</span><span class="token function-variable function">reset</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> counter<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token function">getCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">c</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span>interval <span class="token operator">=</span> <span class="token number">5.0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,4),b={href:"http://www.typescriptlang.org/docs/handbook/interfaces.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html",target:"_blank",rel:"noopener noreferrer"};function h(g,y){const t=e("RouterLink"),p=e("ExternalLinkIcon");return i(),u("div",null,[s("p",null,[a(t,{to:"/code/language/typescript/basics/type-of-object-interfaces.html"},{default:o(()=>[n("之前学习过")]),_:1}),n("，接口(Interfaces)可以用于对「对象的形状(Shape)」进行描述。")]),d,r(" more "),v,s("p",null,[a(t,{to:"/code/language/typescript/basics/type-of-function.html#%E6%8E%A5%E5%8F%A3%E4%B8%AD%E5%87%BD%E6%95%B0%E7%9A%84%E5%AE%9A%E4%B9%89"},{default:o(()=>[n("之前学习过")]),_:1}),n("，可以使用接口的方式来定义一个函数需要符合的形状:")]),m,s("ul",null,[s("li",null,[s("a",b,[n("Interfaces"),a(p)]),n("("),s("a",f,[n("中文版"),a(p)]),n(")")])])])}const x=l(k,[["render",h],["__file","class-and-interfaces.html.vue"]]);export{x as default};
