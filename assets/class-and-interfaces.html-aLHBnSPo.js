import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c as t,e as a,a as i,w as l,f as s,d as c,b as e}from"./app-C6d_tW6U.js";const d={},k=a("p",null,"这一章主要介绍接口的另一个用途，对类的一部分行为进行抽象。",-1),B=e(`<h2 id="类实现接口" tabindex="-1"><a class="header-anchor" href="#类实现接口"><span>类实现接口</span></a></h2><p>实现(implements)是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口(interfaces)，用 <code>implements</code> 关键字来实现。这个特性大大提高了面向对象的灵活性。</p><p>举例来说，门是一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。这时候如果有另一个类，车，也有报警器的功能，就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它:</p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">interface</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> Alarm</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  alert</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">class</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> Door</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">class</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> SecurityDoor</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> Door</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> implements</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> Alarm</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  alert</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E5C07B;">    console</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;SecurityDoor alert&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">class</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> Car</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> implements</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> Alarm</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  alert</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E5C07B;">    console</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;Car alert&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个类可以实现多个接口:</p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">interface</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> Alarm</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  alert</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">interface</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> Light</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  lightOn</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  lightOff</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">class</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> Car</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> implements</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> Alarm</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#6F42C1;--shiki-dark:#E5C07B;">Light</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  alert</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E5C07B;">    console</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;Car alert&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  lightOn</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E5C07B;">    console</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;Car light on&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  lightOff</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E5C07B;">    console</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;Car light off&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，<code>Car</code> 实现了 <code>Alarm</code> 和 <code>Light</code> 接口，既能报警，也能开关车灯。</p><h2 id="接口继承接口" tabindex="-1"><a class="header-anchor" href="#接口继承接口"><span>接口继承接口</span></a></h2><p>接口与接口之间可以是继承关系:</p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">interface</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> Alarm</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  alert</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">interface</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> LightableAlarm</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> Alarm</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  lightOn</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  lightOff</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，我们使用 <code>extends</code> 使 <code>LightableAlarm</code> 继承 <code>Alarm</code>。</p><h2 id="接口继承类" tabindex="-1"><a class="header-anchor" href="#接口继承类"><span>接口继承类</span></a></h2><p>接口也可以继承类:</p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">class</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> Point</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  x</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="color:#005CC5;--shiki-dark:#E5C07B;"> number</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  y</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="color:#005CC5;--shiki-dark:#E5C07B;"> number</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">interface</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> Point3d</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> Point</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  z</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="color:#005CC5;--shiki-dark:#E5C07B;"> number</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">let</span><span style="color:#24292E;--shiki-dark:#E06C75;"> point3d</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> Point3d</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="color:#24292E;--shiki-dark:#E06C75;">x</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">1</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#24292E;--shiki-dark:#E06C75;">y</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">2</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#24292E;--shiki-dark:#E06C75;">z</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">3</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> };</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="混合类型" tabindex="-1"><a class="header-anchor" href="#混合类型"><span>混合类型</span></a></h2>`,15),h=e(`<div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">interface</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> SearchFunc</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  (</span><span style="color:#E36209;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic;">source</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="color:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#E36209;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic;">subString</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="color:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="color:#005CC5;--shiki-dark:#E5C07B;"> boolean</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">let</span><span style="color:#24292E;--shiki-dark:#E06C75;"> mySearch</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> SearchFunc</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">mySearch</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> function</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E36209;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic;">source</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="color:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#E36209;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic;">subString</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="color:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  return</span><span style="color:#24292E;--shiki-dark:#E5C07B;"> source</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">search</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#24292E;--shiki-dark:#E06C75;">subString</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">!==</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="color:#005CC5;--shiki-dark:#D19A66;">1</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有时候，一个函数还可以有自己的属性和方法:</p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">interface</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> Counter</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  (</span><span style="color:#E36209;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic;">start</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="color:#005CC5;--shiki-dark:#E5C07B;"> number</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="color:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  interval</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="color:#005CC5;--shiki-dark:#E5C07B;"> number</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  reset</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">()</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="color:#005CC5;--shiki-dark:#E5C07B;"> void</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">function</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> getCounter</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">()</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;"> Counter</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  let</span><span style="color:#24292E;--shiki-dark:#E06C75;"> counter</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> &lt;</span><span style="color:#6F42C1;--shiki-dark:#E5C07B;">Counter</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span><span style="color:#D73A49;--shiki-dark:#C678DD;">function</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E36209;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic;">start</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="color:#005CC5;--shiki-dark:#E5C07B;"> number</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) {};</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E5C07B;">  counter</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#24292E;--shiki-dark:#E06C75;">interval</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 123</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E5C07B;">  counter</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">reset</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> function</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> () {};</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  return</span><span style="color:#24292E;--shiki-dark:#E06C75;"> counter</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">let</span><span style="color:#24292E;--shiki-dark:#E06C75;"> c</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> getCounter</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">c</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#005CC5;--shiki-dark:#D19A66;">10</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E5C07B;">c</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">reset</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E5C07B;">c</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#24292E;--shiki-dark:#E06C75;">interval</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 5.0</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ul><li><a href="http://www.typescriptlang.org/docs/handbook/interfaces.html" target="_blank" rel="noopener noreferrer">Interfaces</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html" target="_blank" rel="noopener noreferrer">中文版</a>)</li></ul>`,5);function y(E,F){const n=p("RouteLink");return o(),t("div",null,[a("p",null,[i(n,{to:"/code/language/typescript/basics/type-of-object-interfaces.html"},{default:l(()=>[s("之前学习过")]),_:1}),s("，接口(Interfaces)可以用于对「对象的形状(Shape)」进行描述。")]),k,c(" more "),B,a("p",null,[i(n,{to:"/code/language/typescript/basics/type-of-function.html#%E6%8E%A5%E5%8F%A3%E4%B8%AD%E5%87%BD%E6%95%B0%E7%9A%84%E5%AE%9A%E4%B9%89"},{default:l(()=>[s("之前学习过")]),_:1}),s("，可以使用接口的方式来定义一个函数需要符合的形状:")]),h])}const m=r(d,[["render",y],["__file","class-and-interfaces.html.vue"]]),v=JSON.parse('{"path":"/code/language/typescript/advanced/class-and-interfaces.html","title":"类与接口","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"类与接口","icon":"api","category":"TypeScript","description":"之前学习过，接口(Interfaces)可以用于对「对象的形状(Shape)」进行描述。 这一章主要介绍接口的另一个用途，对类的一部分行为进行抽象。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/typescript/advanced/class-and-interfaces.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"类与接口"}],["meta",{"property":"og:description","content":"之前学习过，接口(Interfaces)可以用于对「对象的形状(Shape)」进行描述。 这一章主要介绍接口的另一个用途，对类的一部分行为进行抽象。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类与接口\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"类实现接口","slug":"类实现接口","link":"#类实现接口","children":[]},{"level":2,"title":"接口继承接口","slug":"接口继承接口","link":"#接口继承接口","children":[]},{"level":2,"title":"接口继承类","slug":"接口继承类","link":"#接口继承类","children":[]},{"level":2,"title":"混合类型","slug":"混合类型","link":"#混合类型","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":1.83,"words":550},"filePathRelative":"code/language/typescript/advanced/class-and-interfaces.md","localizedDate":"2020年5月4日","excerpt":"<p><a href=\\"/code/language/typescript/basics/type-of-object-interfaces.html\\" target=\\"_blank\\">之前学习过</a>，接口(Interfaces)可以用于对「对象的形状(Shape)」进行描述。</p>\\n<p>这一章主要介绍接口的另一个用途，对类的一部分行为进行抽象。</p>\\n","autoDesc":true}');export{m as comp,v as data};
