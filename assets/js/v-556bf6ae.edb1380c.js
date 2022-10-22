"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[82415],{84297:(n,s,a)=>{a.r(s),a.d(s,{default:()=>c});var p=a(71534);const t=(0,p._)("p",null,"从 ES6 开始，JavaScript 引入了解构赋值，可以同时对一组变量进行赋值。",-1),e=(0,p.uE)('<p>什么是解构赋值? 我们先看看传统的做法，如何把一个数组的元素分别赋值给几个变量:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ES6&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> x <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> y <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> z <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，在 ES6 中，可以使用解构赋值，直接对多个变量同时赋值:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 如果浏览器支持解构赋值就不会报错:</span>\n<span class="token keyword">const</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ES6&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment">// x, y, z分别被赋值为数组对应元素:</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;x = &quot;</span> <span class="token operator">+</span> x <span class="token operator">+</span> <span class="token string">&quot;, y = &quot;</span> <span class="token operator">+</span> y <span class="token operator">+</span> <span class="token string">&quot;, z = &quot;</span> <span class="token operator">+</span> z<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，对数组元素进行解构赋值时，多个变量要用 <code>[...]</code> 括起来。</p><p>如果数组本身还有嵌套，也可以通过下面的形式进行解构赋值，注意嵌套层次和位置要保持一致:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> <span class="token punctuation">[</span>y<span class="token punctuation">,</span> z<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ES6&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nx<span class="token punctuation">;</span> <span class="token comment">// &#39;hello&#39;</span>\ny<span class="token punctuation">;</span> <span class="token comment">// &#39;JavaScript&#39;</span>\nz<span class="token punctuation">;</span> <span class="token comment">// &#39;ES6&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解构赋值还可以忽略某些元素:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> z<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ES6&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 忽略前两个元素，只对 z 赋值第三个元素</span>\nz<span class="token punctuation">;</span> <span class="token comment">// &#39;ES6&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要从一个对象中取出若干属性，也可以使用解构赋值，便于快速获取对象的指定属性:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">passport</span><span class="token operator">:</span> <span class="token string">&quot;G-12345678&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">school</span><span class="token operator">:</span> <span class="token string">&quot;No.4 middle school&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> passport <span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span>\n\n<span class="token comment">// name, age, passport 分别被赋值为对应属性:</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">name = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, age = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, passport = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>passport<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对一个对象进行解构赋值时，同样可以直接对嵌套的对象属性进行赋值，只要保证对应的层次是一致的:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">passport</span><span class="token operator">:</span> <span class="token string">&quot;G-12345678&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">school</span><span class="token operator">:</span> <span class="token string">&quot;No.4 middle school&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">&quot;Beijing&quot;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">street</span><span class="token operator">:</span> <span class="token string">&quot;No.1 Road&quot;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">zipcode</span><span class="token operator">:</span> <span class="token string">&quot;100001&quot;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">,</span>\n  <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span> city<span class="token punctuation">,</span> zip <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span>\n\nname<span class="token punctuation">;</span> <span class="token comment">// &#39;小明&#39;</span>\ncity<span class="token punctuation">;</span> <span class="token comment">// &#39;Beijing&#39;</span>\nzip<span class="token punctuation">;</span> <span class="token comment">// undefined, 因为属性名是 zipcode 而不是 zip</span>\n<span class="token comment">// 注意: address 不是变量，而是为了让 city 和 zip 获得嵌套的 address 对象的属性:</span>\naddress<span class="token punctuation">;</span> <span class="token comment">// Uncaught ReferenceError: address is not defined</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用解构赋值对对象属性进行赋值时，如果对应的属性不存在，变量将被赋值为 <code>undefined</code>，这和引用一个不存在的属性获得 <code>undefined</code> 是一致的。如果要使用的变量名和属性名不一致，可以用下面的语法获取:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">passport</span><span class="token operator">:</span> <span class="token string">&quot;G-12345678&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">school</span><span class="token operator">:</span> <span class="token string">&quot;No.4 middle school&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 把 passport 属性赋值给变量 id:</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> <span class="token literal-property property">passport</span><span class="token operator">:</span> id <span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span>\n\nname<span class="token punctuation">;</span> <span class="token comment">// &#39;小明&#39;</span>\nid<span class="token punctuation">;</span> <span class="token comment">// &#39;G-12345678&#39;</span>\n<span class="token comment">// 注意: passport 不是变量，而是为了让变量 id 获得 passport 属性:</span>\npassport<span class="token punctuation">;</span> <span class="token comment">// Uncaught ReferenceError: passport is not defined</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解构赋值还可以使用默认值，这样就避免了不存在的属性返回 <code>undefined</code> 的问题:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">passport</span><span class="token operator">:</span> <span class="token string">&quot;G-12345678&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 如果 person 对象没有 single 属性，默认赋值为 true:</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> single <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span>\n\nname<span class="token punctuation">;</span> <span class="token comment">// &#39;小明&#39;</span>\nsingle<span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有些时候，如果变量已经被声明了，再次赋值的时候，正确的写法也会报语法错误:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 声明变量:</span>\n<span class="token keyword">let</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>\n\n<span class="token comment">// 解构赋值:</span>\n<span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;小明&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token comment">// 语法错误: Uncaught SyntaxError: Unexpected token =</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为 JavaScript 引擎把 <code>{</code> 开头的语句当作了块处理，于是 <code>=</code> 不再合法。解决方法是用小括号括起来:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2><p>解构赋值在很多时候可以大大简化代码。例如，交换两个变量 x 和 y 的值，可以这么写，不再需要临时变量:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>y<span class="token punctuation">,</span> x<span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>快速获取当前页面的域名和路径:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">hostname</span><span class="token operator">:</span> domain<span class="token punctuation">,</span> <span class="token literal-property property">pathname</span><span class="token operator">:</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> location<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果一个函数接收一个对象作为参数，那么，可以使用解构直接把对象的属性绑定到变量中。例如，下面的函数可以快速创建一个 Date 对象:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">buildDate</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> year<span class="token punctuation">,</span> month<span class="token punctuation">,</span> day<span class="token punctuation">,</span> hour <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> minute <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> second <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>year<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>month<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>day<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>hour<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>minute<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>second<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它的方便之处在于传入的对象只需要 <code>year</code>、<code>month</code> 和 <code>day</code> 这三个属性:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">buildDate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2017</span><span class="token punctuation">,</span> <span class="token literal-property property">month</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">day</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Sun Jan 01 2017 00:00:00 GMT+0800 (CST)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以传入 <code>hour</code>、<code>minute</code> 和 <code>second</code> 属性:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">buildDate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2017</span><span class="token punctuation">,</span> <span class="token literal-property property">month</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">day</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">hour</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">minute</span><span class="token operator">:</span> <span class="token number">15</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Sun Jan 01 2017 20:15:00 GMT+0800 (CST)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用解构赋值可以减少代码量，但是，需要在支持 ES6 解构赋值特性的现代浏览器中才能正常运行。目前支持解构赋值的浏览器包括 Chrome，Firefox，Edge 等。</p>',33),o={},c=(0,a(61935).Z)(o,[["render",function(n,s){return(0,p.wg)(),(0,p.iD)("div",null,[t,(0,p.kq)(" more "),e])}]])},61935:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}},21664:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p=JSON.parse('{"key":"v-556bf6ae","path":"/code/language/js/function/destructuring.html","title":"解构赋值","lang":"zh-CN","frontmatter":{"title":"解构赋值","icon":"structure","date":"2019-10-03T00:00:00.000Z","category":["JavaScript"],"summary":"从 ES6 开始，JavaScript 引入了解构赋值，可以同时对一组变量进行赋值。\\n","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/js/function/destructuring.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"解构赋值"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-10-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"<p>从 ES6 开始，JavaScript 引入了解构赋值，可以同时对一组变量进行赋值。</p>\\n","headers":[{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4}]},"readingTime":{"minutes":3.78,"words":1135},"filePathRelative":"code/language/js/function/destructuring.md","localizedDate":"2019年10月3日"}')}}]);