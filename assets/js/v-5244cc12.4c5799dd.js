"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[554],{13781:(n,a,s)=>{s.r(a),s.d(a,{default:()=>i});var t=s(16492);const e=(0,t._)("h1",{id:"mixin",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#mixin","aria-hidden":"true"},"#"),(0,t.Uk)(" Mixin")],-1),p={href:"https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem",target:"_blank",rel:"noopener noreferrer"},o=(0,t.uE)('<p>但是，这大大降低了编程的灵活性。因为实际开发中，有时不可避免，子类需要继承多个父类。举例来说，“猫”可以继承“哺乳类动物”，也可以继承“宠物”。</p><p>各种单一继承的编程语言，有不同的多重继承解决方案。比如，Java 语言也是子类只能继承一个父类，但是还允许继承多个界面(interface)，这样就间接实现了多重继承。Interface 与父类一样，也是一个类，只不过它只定义接口(method signature)，不定义实现，因此又被称为“抽象类”。凡是继承于 Interface 的方法，都必须自己定义实现，否则就会报错。这样就避免了多重继承的最大问题: 多个父类的同名方法的碰撞(naming collision)。</p><p>JavaScript 语言没有采用 Interface 的方案，而是通过代理(delegation)实现了从其他类引入方法。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">Enumerable_first</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">first</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;baz&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token function">Enumerable_first</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// explicit delegation</span>\nlist<span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;foo&quot;</span>\n</code></pre></div><p>上面代码中，<code>list</code> 是一个数组，本身并没有 <code>first</code> 方法。通过 <code>call</code> 方法，可以把 <code>Enumerable_first</code> 里面的方法，绑定到 <code>list</code>，从而 <code>list</code> 就具有 <code>first</code> 方法。这就叫做“代理”(delegation)，<code>list</code> 对象代理了 <code>Enumerable_first</code> 的 <code>first</code> 方法。</p><h2 id="含义" tabindex="-1"><a class="header-anchor" href="#含义" aria-hidden="true">#</a> 含义</h2><p>Mixin 这个名字来自于冰淇淋，在基本口味的冰淇淋上面混入其他口味，这就叫做 Mix-in。</p><p>它允许向一个类里面注入一些代码，使得一个类的功能能够“混入”另一个类。实质上是多重继承的一种解决方案，但是避免了多重继承的复杂性，而且有利于代码复用。</p><p>Mixin 就是一个正常的类，不仅定义了接口，还定义了接口的实现。</p><p>子类通过在 <code>this</code> 对象上面绑定方法，达到多重继承的目的。</p><p>很多库提供了 Mixin 功能。下面以 Lodash 为例。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">vowels</span><span class="token punctuation">(</span><span class="token parameter">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[aeiou]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n_<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">vowels</span><span class="token operator">:</span> vowels <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nobj<span class="token punctuation">.</span><span class="token function">vowels</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre></div><p>上面代码通过 Lodash 库的 <code>_.mixin</code> 方法，让 <code>obj</code> 对象继承了 <code>vowels</code> 方法。</p><p>Underscore 的类似方法是 <code>_.extend</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">Person</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fName<span class="token punctuation">,</span> lName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> fName<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">=</span> lName<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> sam <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;Sam&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Lowry&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> NameMixin <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">fullName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">rename</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">first<span class="token punctuation">,</span> last</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> first<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">=</span> last<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n_<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> NameMixin<span class="token punctuation">)</span><span class="token punctuation">;</span>\nsam<span class="token punctuation">.</span><span class="token function">rename</span><span class="token punctuation">(</span><span class="token string">&quot;Samwise&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Gamgee&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nsam<span class="token punctuation">.</span><span class="token function">fullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;Samwise Gamgee&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码通过 <code>_.extend</code> 方法，在 <code>sam</code> 对象上面(准确说是它的原型对象 <code>Person.prototype</code> 上面)，混入了 <code>NameMixin</code> 类。</p><p><code>extend</code> 方法的实现非常简单。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token parameter">destination<span class="token punctuation">,</span> source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> k <span class="token keyword">in</span> source<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>source<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      destination<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> source<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> destination<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>上面代码将 <code>source</code> 对象的所有方法，添加到 <code>destination</code> 对象。</p><h2 id="trait" tabindex="-1"><a class="header-anchor" href="#trait" aria-hidden="true">#</a> Trait</h2><p>Trait 是另外一种多重继承的解决方案。它与 Mixin 很相似，但是有一些细微的差别。</p><ul><li>Mixin 可以包含状态(state)，Trait 不包含，即 Trait 里面的方法都是互不相干，可以线性包含的。比如，<code>Trait1</code> 包含方法 <code>A</code> 和 <code>B</code>，<code>Trait2</code> 继承了 <code>Trait1</code>，同时还包含一个自己的方法 <code>C</code>，实际上就等同于直接包含方法 <code>A</code>、<code>B</code>、<code>C</code>。</li><li>对于同名方法的碰撞，Mixin 包含了解决规则，Trait 则是报错。</li></ul>',22),c={},i=(0,s(11164).Z)(c,[["render",function(n,a){const s=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[e,(0,t._)("p",null,[(0,t.Uk)("JavaScript 语言的设计是单一继承，即子类只能继承一个父类，不允许继承多个父类。这种设计保证了对象继承的层次结构是树状的，而不是复杂的"),(0,t._)("a",p,[(0,t.Uk)("网状结构"),(0,t.Wm)(s)]),(0,t.Uk)("。")]),o])}]])},11164:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,t]of a)s[n]=t;return s}},62555:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t=JSON.parse('{"key":"v-5244cc12","path":"/code/language/js/es6/mixin.html","title":"Mixin","lang":"zh-CN","frontmatter":{"icon":"merge","author":"阮一峰","category":["JavaScript"],"copyright":"此部分博客采用 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">“保持署名—非商用”创意共享4.0许可证</a>","description":"JavaScript 语言的设计是单一继承，即子类只能继承一个父类，不允许继承多个父类。这种设计保证了对象继承的层次结构是树状的，而不是复杂的网状结构 (https://en.wikipedia.org/wiki/Multipleinheritance#Thediamond_problem)。 但是，这大大降低了编程的灵活性。因为实际开发中，有时不可避...","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/js/es6/mixin.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Mixin"}],["meta",{"property":"og:description","content":"JavaScript 语言的设计是单一继承，即子类只能继承一个父类，不允许继承多个父类。这种设计保证了对象继承的层次结构是树状的，而不是复杂的网状结构 (https://en.wikipedia.org/wiki/Multipleinheritance#Thediamond_problem)。 但是，这大大降低了编程的灵活性。因为实际开发中，有时不可避..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-12T05:50:30.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:modified_time","content":"2022-02-12T05:50:30.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"含义","slug":"含义","link":"#含义","children":[]},{"level":2,"title":"Trait","slug":"trait","link":"#trait","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644645030000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4}]},"readingTime":{"minutes":3.03,"words":910},"filePathRelative":"code/language/js/es6/mixin.md","localizedDate":"2020年6月3日"}')}}]);