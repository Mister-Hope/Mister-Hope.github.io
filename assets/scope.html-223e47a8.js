import{_ as p,X as e,Y as t,$ as n,a0 as s,Z as o,a2 as c,a3 as l,C as i}from"./framework-a91f7991.js";const u={},d=n("h2",{id:"变量作用域",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#变量作用域","aria-hidden":"true"},"#"),s(" 变量作用域")],-1),r=l(`<h2 id="函数作用域" tabindex="-1"><a class="header-anchor" href="#函数作用域" aria-hidden="true">#</a> 函数作用域</h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><p>作用域(scope)指的是变量存在的范围。在 ES5 的规范中，JavaScript 只有两种作用域: 一种是全局作用域，变量在整个程序中一直存在，所有地方都可以读取；另一种是函数作用域，变量只在函数内部存在。ES6 又新增了块级作用域，本教程不涉及。</p><p>对于顶层函数来说，函数外部声明的变量就是全局变量(global variable)，它可以在函数内部读取。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> v <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1</span>
</code></pre></div><p>上面的代码表明，函数 <code>f</code> 内部可以读取全局变量 <code>v</code>。</p><p>在函数内部定义的变量，外部无法读取，称为“局部变量”(local variable)。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> v <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

v<span class="token punctuation">;</span> <span class="token comment">// ReferenceError: v is not defined</span>
</code></pre></div><p>上面代码中，变量 <code>v</code> 在函数内部定义，所以是一个局部变量，函数之外就无法读取。</p><p>函数内部定义的变量，会在该作用域内覆盖同名全局变量。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> v <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> v <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
v<span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre></div><p>上面代码中，变量 <code>v</code> 同时在函数的外部和内部有定义。结果，在函数内部定义，局部变量 <code>v</code> 覆盖了全局变量 <code>v</code>。</p><p>注意，对于 <code>var</code> 命令来说，局部变量只能在函数内部声明，在其他区块中声明，一律都是全局变量。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre></div><p>上面代码中，变量 <code>x</code> 在条件判断区块之中声明，结果就是一个全局变量，可以在区块之外读取。</p><h3 id="函数内部的变量提升" tabindex="-1"><a class="header-anchor" href="#函数内部的变量提升" aria-hidden="true">#</a> 函数内部的变量提升</h3><p>与全局作用域一样，函数作用域内部也会产生“变量提升”现象。<code>var</code> 命令声明的变量，不管在什么位置，变量声明都会被提升到函数体的头部。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> tmp <span class="token operator">=</span> x <span class="token operator">-</span> <span class="token number">100</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> tmp<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    tmp <span class="token operator">=</span> x <span class="token operator">-</span> <span class="token number">100</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数本身的作用域" tabindex="-1"><a class="header-anchor" href="#函数本身的作用域" aria-hidden="true">#</a> 函数本身的作用域</h3><p>函数本身也是一个值，也有自己的作用域。它的作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">x</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token function">x</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，函数 <code>x</code> 是在函数 <code>f</code> 的外部声明的，所以它的作用域绑定外层，内部变量 <code>a</code> 不会到函数 <code>f</code> 体内取值，所以输出 <code>1</code>，而不是 <code>2</code>。</p><p>总之，函数执行时所在的作用域，是定义时的作用域，而不是调用时所在的作用域。</p><p>很容易犯错的一点是，如果函数 <code>A</code> 调用函数 <code>B</code>，却没考虑到函数 <code>B</code> 不会引用函数 <code>A</code> 的内部变量。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">x</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">y</span><span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">y</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ReferenceError: a is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码将函数 <code>x</code> 作为参数，传入函数 <code>y</code>。但是，函数 <code>x</code> 是在函数 <code>y</code> 体外声明的，作用域绑定外层，因此找不到函数 <code>y</code> 的内部变量 <code>a</code>，导致报错。</p><p>同样的，函数体内部声明的函数，作用域绑定函数体内部。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> bar<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> f <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，函数 <code>foo</code> 内部声明了一个函数 <code>bar</code>，<code>bar</code> 的作用域绑定 <code>foo</code>。当我们在 <code>foo</code> 外部取出 <code>bar</code> 执行时，变量 <code>x</code> 指向的是 <code>foo</code> 内部的 <code>x</code>，而不是 <code>foo</code> 外部的 <code>x</code>。正是这种机制，构成了下文要讲解的“闭包”现象。</p><h2 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间" aria-hidden="true">#</a> 命名空间</h2><p>全局变量会绑定到 <code>window</code> 上，不同的 JavaScript 文件如果使用了相同的全局变量，或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现。</p><p>减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中。例如:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 唯一的全局变量MYAPP:</span>
<span class="token keyword">const</span> <span class="token constant">MYAPP</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 其他变量:</span>
<span class="token constant">MYAPP</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;myapp&quot;</span><span class="token punctuation">;</span>
<span class="token constant">MYAPP</span><span class="token punctuation">.</span>version <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>

<span class="token comment">// 其他函数:</span>
<span class="token constant">MYAPP</span><span class="token punctuation">.</span><span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把自己的代码全部放入唯一的命名空间 <code>MYAPP</code> 中，会大大减少全局变量冲突的可能。</p><p>许多著名的 JavaScript 库都是这么干的: jQuery，YUI，underscore 等等。</p>`,35);function k(v,m){const a=i("RouterLink");return e(),t("div",null,[d,n("p",null,[s("请看 "),o(a,{to:"/code/language/js/es6/let.html"},{default:c(()=>[s("let 命令")]),_:1})]),r])}const f=p(u,[["render",k],["__file","scope.html.vue"]]);export{f as default};
