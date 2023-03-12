import{_ as o,X as e,Y as c,$ as s,a0 as n,Z as p,a3 as t,C as l}from"./framework-a91f7991.js";const i={},u=t(`<h1 id="let-和-const-命令" tabindex="-1"><a class="header-anchor" href="#let-和-const-命令" aria-hidden="true">#</a> let 和 const 命令</h1><h2 id="let-命令" tabindex="-1"><a class="header-anchor" href="#let-命令" aria-hidden="true">#</a> let 命令</h2><h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3><p>ES6 新增了 <code>let</code> 命令，用来声明变量。它的用法类似于 <code>var</code>，但是所声明的变量，只在 <code>let</code> 命令所在的代码块内有效。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

a<span class="token punctuation">;</span> <span class="token comment">// ReferenceError: a is not defined.</span>
b<span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre></div><p>上面代码在代码块之中，分别用 <code>let</code> 和 <code>var</code> 声明了两个变量。然后在代码块之外调用这两个变量，结果 <code>let</code> 声明的变量报错，<code>var</code> 声明的变量返回了正确的值。这表明，<code>let</code> 声明的变量只在它所在的代码块有效。</p><p><code>for</code> 循环的计数器，就很合适使用 <code>let</code> 命令。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ReferenceError: i is not defined</span>
</code></pre></div><p>上面代码中，计数器 <code>i</code> 只在 <code>for</code> 循环体内有效，在循环体外引用就会报错。</p><p>下面的代码如果使用 <code>var</code>，最后输出的是 <code>10</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
a<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
</code></pre></div><p>上面代码中，变量 <code>i</code> 是 <code>var</code> 命令声明的，在全局范围内都有效，所以全局只有一个变量 <code>i</code>。每一次循环，变量 <code>i</code> 的值都会发生改变，而循环内被赋给数组 <code>a</code> 的函数内部的 <code>console.log(i)</code>，里面的 <code>i</code> 指向的就是全局的 <code>i</code>。也就是说，所有数组 <code>a</code> 的成员里面的 <code>i</code>，指向的都是同一个 <code>i</code>，导致运行时输出的是最后一轮的 <code>i</code> 的值，也就是 10。</p><p>如果使用 <code>let</code>，声明的变量仅在块级作用域内有效，最后输出的是 6。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
a<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
</code></pre></div><p>上面代码中，变量 <code>i</code> 是 <code>let</code> 声明的，当前的 <code>i</code> 只在本轮循环有效，所以每一次循环的 <code>i</code> 其实都是一个新的变量，所以最后输出的是 <code>6</code>。您可能会问，如果每一轮循环的变量 <code>i</code> 都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值? 这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量 <code>i</code> 时，就在上一轮循环的基础上进行计算。</p><p>另外，<code>for</code> 循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// abc</span>
<span class="token comment">// abc</span>
<span class="token comment">// abc</span>
</code></pre></div><p>上面代码正确运行，输出了 3 次 <code>abc</code>。这表明函数内部的变量 <code>i</code> 与循环变量 <code>i</code> 不在同一个作用域，有各自单独的作用域。</p><h3 id="不存在变量提升" tabindex="-1"><a class="header-anchor" href="#不存在变量提升" aria-hidden="true">#</a> 不存在变量提升</h3><p><code>var</code> 命令会发生”变量提升“现象，即变量可以在声明之前使用，值为 <code>undefined</code>。这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。</p><p>为了纠正这种现象，<code>let</code> 命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// var 的情况</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出undefined</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token comment">// let 的情况</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错ReferenceError</span>
<span class="token keyword">let</span> bar <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre></div><p>上面代码中，变量 <code>foo</code> 用 <code>var</code> 命令声明，会发生变量提升，即脚本开始运行时，变量 <code>foo</code> 已经存在了，但是没有值，所以会输出 <code>undefined</code>。变量 <code>bar</code> 用 <code>let</code> 命令声明，不会发生变量提升。这表示在声明它之前，变量 <code>bar</code> 是不存在的，这时如果用到它，就会抛出一个错误。</p><h3 id="暂时性死区" tabindex="-1"><a class="header-anchor" href="#暂时性死区" aria-hidden="true">#</a> 暂时性死区</h3><p>只要块级作用域内存在 <code>let</code> 命令，它所声明的变量就“绑定”(binding)这个区域，不再受外部的影响。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> tmp <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  tmp <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>
  <span class="token keyword">let</span> tmp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面代码中，存在全局变量 <code>tmp</code>，但是块级作用域内 <code>let</code> 又声明了一个局部变量 <code>tmp</code>，导致后者绑定这个块级作用域，所以在 <code>let</code> 声明变量前，对 <code>tmp</code> 赋值会报错。</p><p>ES6 明确规定，如果区块中存在 <code>let</code> 和 <code>const</code> 命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。</p><p>总之，在代码块内，使用 <code>let</code> 命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”(temporal dead zone，简称 TDZ)。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// TDZ开始</span>
  tmp <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>

  <span class="token keyword">let</span> tmp<span class="token punctuation">;</span> <span class="token comment">// TDZ结束</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>

  tmp <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，在 <code>let</code> 命令声明变量 <code>tmp</code> 之前，都属于变量 <code>tmp</code> 的“死区”。</p><p>“暂时性死区”也意味着 <code>typeof</code> 不再是一个百分之百安全的操作。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> x<span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>
<span class="token keyword">let</span> x<span class="token punctuation">;</span>
</code></pre></div><p>上面代码中，变量 <code>x</code> 使用 <code>let</code> 命令声明，所以在声明之前，都属于 <code>x</code> 的“死区”，只要用到该变量就会报错。因此，<code>typeof</code> 运行时就会抛出一个 <code>ReferenceError</code>。</p><p>作为比较，如果一个变量根本没有被声明，使用 <code>typeof</code> 反而不会报错。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> undeclared_variable<span class="token punctuation">;</span> <span class="token comment">// &quot;undefined&quot;</span>
</code></pre></div><p>上面代码中，<code>undeclared_variable</code> 是一个不存在的变量名，结果返回“undefined”。所以，在没有 <code>let</code> 之前，<code>typeof</code> 运算符是百分之百安全的，永远不会报错。现在这一点不成立了。这样的设计是为了让大家养成良好的编程习惯，变量一定要在声明之后使用，否则就报错。</p><p>有些“死区”比较隐蔽，不太容易发现。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">x <span class="token operator">=</span> y<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">2</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
</code></pre></div><p>上面代码中，调用 <code>bar</code> 函数之所以报错(某些实现可能不报错)，是因为参数 <code>x</code> 默认值等于另一个参数 <code>y</code>，而此时 <code>y</code> 还没有声明，属于”死区“。如果 <code>y</code> 的默认值是 <code>x</code>，就不会报错，因为此时 <code>x</code> 已经声明了。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> y <span class="token operator">=</span> x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [2, 2]</span>
</code></pre></div><p>另外，下面的代码也会报错，与 <code>var</code> 的行为不同。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 不报错</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> x<span class="token punctuation">;</span>

<span class="token comment">// 报错</span>
<span class="token keyword">let</span> x <span class="token operator">=</span> x<span class="token punctuation">;</span>
<span class="token comment">// ReferenceError: x is not defined</span>
</code></pre></div><p>上面代码报错，也是因为暂时性死区。使用 <code>let</code> 声明变量时，只要变量在还没有声明完成前使用，就会报错。上面这行就属于这个情况，在变量 <code>x</code> 的声明语句还没有执行完成前，就去取 <code>x</code> 的值，导致报错”x 未定义“。</p><p>ES6 规定暂时性死区和 <code>let</code>、<code>const</code> 语句不出现变量提升，主要是为了减少运行时错误，防止在变量声明前就使用这个变量，从而导致意料之外的行为。这样的错误在 ES5 是很常见的，现在有了这种规定，避免此类错误就很容易了。</p><p>总之，暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。</p><h3 id="不允许重复声明" tabindex="-1"><a class="header-anchor" href="#不允许重复声明" aria-hidden="true">#</a> 不允许重复声明</h3><p><code>let</code> 不允许在相同作用域内，重复声明同一个变量。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 报错</span>
<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 报错</span>
<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，不能在函数内部重新声明参数。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> arg<span class="token punctuation">;</span> <span class="token comment">// 报错</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">let</span> arg<span class="token punctuation">;</span> <span class="token comment">// 不报错</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="块级作用域" tabindex="-1"><a class="header-anchor" href="#块级作用域" aria-hidden="true">#</a> 块级作用域</h2><h3 id="为什么需要块级作用域" tabindex="-1"><a class="header-anchor" href="#为什么需要块级作用域" aria-hidden="true">#</a> 为什么需要块级作用域</h3><p>ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。</p><p>第一种场景，内层变量可能会覆盖外层变量。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> tmp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> tmp <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的原意是，<code>if</code> 代码块的外部使用外层的 <code>tmp</code> 变量，内部使用内层的 <code>tmp</code> 变量。但是，函数 <code>f</code> 执行后，输出结果为 <code>undefined</code>，原因在于变量提升，导致内层的 <code>tmp</code> 变量覆盖了外层的 <code>tmp</code> 变量。</p><p>第二种场景，用来计数的循环变量泄露为全局变量。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre></div><p>上面代码中，变量 <code>i</code> 只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量。</p><h3 id="es6-的块级作用域" tabindex="-1"><a class="header-anchor" href="#es6-的块级作用域" aria-hidden="true">#</a> ES6 的块级作用域</h3><p><code>let</code> 实际上为 JavaScript 新增了块级作用域。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面的函数有两个代码块，都声明了变量 <code>n</code>，运行后输出 5。这表示外层代码块不受内层代码块的影响。如果两次都使用 <code>var</code> 定义变量 <code>n</code>，最后输出的值才是 10。</p><p>ES6 允许块级作用域的任意嵌套。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
      <span class="token punctuation">{</span>
        <span class="token punctuation">{</span>
          <span class="token keyword">let</span> insane <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码使用了一个五层的块级作用域。外层作用域无法读取内层作用域的变量。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
      <span class="token punctuation">{</span>
        <span class="token punctuation">{</span>
          <span class="token keyword">let</span> insane <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>insane<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>内层作用域可以定义外层作用域的同名变量。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
      <span class="token punctuation">{</span>
        <span class="token keyword">let</span> insane <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">{</span>
          <span class="token keyword">let</span> insane <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式(IIFE)不再必要了。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// IIFE 写法</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> tmp <span class="token operator">=</span> <span class="token operator">...</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 块级作用域写法</span>
<span class="token punctuation">{</span>
  <span class="token keyword">let</span> tmp <span class="token operator">=</span> <span class="token operator">...</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="块级作用域与函数声明" tabindex="-1"><a class="header-anchor" href="#块级作用域与函数声明" aria-hidden="true">#</a> 块级作用域与函数声明</h3><p>函数能不能在块级作用域之中声明? 这是一个相当令人混淆的问题。</p><p>ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 情况一</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 情况二</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面两种函数声明，根据 ES5 的规定都是非法的。</p><p>但是，浏览器没有遵守这个规定，为了兼容以前的旧代码，还是支持在块级作用域之中声明函数，因此上面两种情况实际都能运行，不会报错。</p><p>ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于 <code>let</code>，在块级作用域之外不可引用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;I am outside!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 重复声明一次函数f</span>
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;I am inside!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码在 ES5 中运行，会得到“I am inside!”，因为在 <code>if</code> 内声明的函数 <code>f</code> 会被提升到函数头部，实际运行的代码如下。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ES5 环境</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;I am outside!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;I am inside!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
  <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6 就完全不一样了，理论上会得到“I am outside!”。因为块级作用域内声明的函数类似于 <code>let</code>，对作用域之外没有影响。但是，如果您真的在 ES6 浏览器中运行一下上面的代码，是会报错的，这是为什么呢?</p>`,83),d={href:"https://www.ecma-international.org/ecma-262/6.0/index.html#sec-block-level-function-declarations-web-legacy-compatibility-semantics",target:"_blank",rel:"noopener noreferrer"},k={href:"https://stackoverflow.com/questions/31419897/what-are-the-precise-semantics-of-block-level-functions-in-es6",target:"_blank",rel:"noopener noreferrer"},r=t(`<ul><li>允许在块级作用域内声明函数。</li><li>函数声明类似于 <code>var</code>，即会提升到全局作用域或函数作用域的头部。</li><li>同时，函数声明还会提升到所在的块级作用域的头部。</li></ul><p>注意，上面三条规则只对 ES6 的浏览器实现有效，其他环境的实现不用遵守，还是将块级作用域的函数声明当作 <code>let</code> 处理。</p><p>根据这三条规则，在浏览器的 ES6 环境中，块级作用域内声明的函数，行为类似于 <code>var</code> 声明的变量。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 浏览器的 ES6 环境</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;I am outside!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 重复声明一次函数f</span>
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;I am inside!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Uncaught TypeError: f is not a function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码在符合 ES6 的浏览器中，都会报错，因为实际运行的是下面的代码。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 浏览器的 ES6 环境</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;I am outside!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> f <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;I am inside!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

  <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Uncaught TypeError: f is not a function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 函数声明语句</span>
<span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">&quot;secret&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 函数表达式</span>
<span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">&quot;secret&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，还有一个需要注意的地方。ES6 的块级作用域允许声明函数的规则，只在使用大括号的情况下成立，如果没有使用大括号，就会报错。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 不报错</span>
<span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 报错</span>
<span class="token punctuation">(</span><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><h2 id="const-命令" tabindex="-1"><a class="header-anchor" href="#const-命令" aria-hidden="true">#</a> const 命令</h2><h3 id="const-用法" tabindex="-1"><a class="header-anchor" href="#const-用法" aria-hidden="true">#</a> const 用法</h3><p><code>const</code> 声明一个只读的常量。一旦声明，常量的值就不能改变。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.1415</span><span class="token punctuation">;</span>
<span class="token constant">PI</span><span class="token punctuation">;</span> <span class="token comment">// 3.1415</span>

<span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token comment">// TypeError: Assignment to constant variable.</span>
</code></pre></div><p>上面代码表明改变常量的值会报错。</p><p><code>const</code> 声明的变量不得改变值，这意味着，<code>const</code> 一旦声明变量，就必须立即初始化，不能留到以后赋值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo<span class="token punctuation">;</span>
<span class="token comment">// SyntaxError: Missing initializer in const declaration</span>
</code></pre></div><p>上面代码表示，对于 <code>const</code> 来说，只声明不赋值，就会报错。</p><p><code>const</code> 的作用域与 <code>let</code> 命令相同: 只在声明所在的块级作用域内有效。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token constant">MAX</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token constant">MAX</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught ReferenceError: MAX is not defined</span>
</code></pre></div><p><code>const</code> 命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">MAX</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>
  <span class="token keyword">const</span> <span class="token constant">MAX</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面代码在常量 <code>MAX</code> 声明之前就调用，结果报错。</p><p><code>const</code> 声明的常量，也与 <code>let</code> 一样不可重复声明。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token string">&quot;Hello!&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>

<span class="token comment">// 以下两行都会报错</span>
<span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">&quot;Goodbye!&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="本质" tabindex="-1"><a class="header-anchor" href="#本质" aria-hidden="true">#</a> 本质</h3><p><code>const</code> 实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据(数值、字符串、布尔值)，值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据(主要是对象和数组)，变量指向的内存地址，保存的只是一个指向实际数据的指针，<code>const</code> 只能保证这个指针是固定的(即总是指向另一个固定的地址)，至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 为 foo 添加一个属性，可以成功</span>
foo<span class="token punctuation">.</span>prop <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>prop<span class="token punctuation">;</span> <span class="token comment">// 123</span>

<span class="token comment">// 将 foo 指向另一个对象，就会报错</span>
foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// TypeError: &quot;foo&quot; is read-only</span>
</code></pre></div><p>上面代码中，常量 <code>foo</code> 储存的是一个地址，这个地址指向一个对象。不可变的只是这个地址，即不能把 <code>foo</code> 指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性。</p><p>下面是另一个例子。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 可执行</span>
a<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 可执行</span>
a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Dave&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
</code></pre></div><p>上面代码中，常量 <code>a</code> 是一个数组，这个数组本身是可写的，但是如果将另一个数组赋值给 <code>a</code>，就会报错。</p><p>如果真的想将对象冻结，应该使用 <code>Object.freeze</code> 方法。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 常规模式时，下面一行不起作用；</span>
<span class="token comment">// 严格模式时，该行会报错</span>
foo<span class="token punctuation">.</span>prop <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
</code></pre></div><p>上面代码中，常量 <code>foo</code> 指向一个冻结的对象，所以添加新属性不起作用，严格模式时还会报错。</p><p>除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">constantize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">)</span> <span class="token function">constantize</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="es6-声明变量的六种方法" tabindex="-1"><a class="header-anchor" href="#es6-声明变量的六种方法" aria-hidden="true">#</a> ES6 声明变量的六种方法</h3><p>ES5 只有两种声明变量的方法: <code>var</code> 命令和 <code>function</code> 命令。ES6 除了添加 <code>let</code> 和 <code>const</code> 命令，后面章节还会提到，另外两种声明变量的方法: <code>import</code> 命令和 <code>class</code> 命令。所以，ES6 一共有 6 种声明变量的方法。</p><h2 id="顶层对象的属性" tabindex="-1"><a class="header-anchor" href="#顶层对象的属性" aria-hidden="true">#</a> 顶层对象的属性</h2><p>顶层对象，在浏览器环境指的是 <code>window</code> 对象，在 Node.js 指的是 <code>global</code> 对象。ES5 之中，顶层对象的属性与全局变量是等价的。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
a<span class="token punctuation">;</span> <span class="token comment">// 1</span>

a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>a<span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre></div><p>上面代码中，顶层对象的属性赋值与全局变量的赋值，是同一件事。</p><p>顶层对象的属性与全局变量挂钩，被认为是 JavaScript 语言最大的设计败笔之一。这样的设计带来了几个很大的问题，首先是没法在编译时就报出变量未声明的错误，只有运行时才能知道(因为全局变量可能是顶层对象的属性创造的，而属性的创造是动态的)；其次，程序员很容易不知不觉地就创建了全局变量(比如打字出错)；最后，顶层对象的属性是到处可以读写的，这非常不利于模块化编程。另一方面，<code>window</code> 对象有实体含义，指的是浏览器的窗口对象，顶层对象是一个有实体含义的对象，也是不合适的。</p><p>ES6 为了改变这一点，一方面规定，为了保持兼容性，<code>var</code> 命令和 <code>function</code> 命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，<code>let</code> 命令、<code>const</code> 命令、<code>class</code> 命令声明的全局变量，不属于顶层对象的属性。也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// 如果在 Node 的 REPL 环境，可以写成 global.a</span>
<span class="token comment">// 或者采用通用方法，写成 this.a</span>
window<span class="token punctuation">.</span>a<span class="token punctuation">;</span> <span class="token comment">// 1</span>

<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>b<span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre></div><p>上面代码中，全局变量 <code>a</code> 由 <code>var</code> 命令声明，所以它是顶层对象的属性；全局变量 <code>b</code> 由 <code>let</code> 命令声明，所以它不是顶层对象的属性，返回 <code>undefined</code>。</p><h2 id="global-对象" tabindex="-1"><a class="header-anchor" href="#global-对象" aria-hidden="true">#</a> global 对象</h2><p>ES5 的顶层对象，本身也是一个问题，因为它在各种实现里面是不统一的。</p><ul><li>浏览器里面，顶层对象是 <code>window</code>，但 Node.js 和 Web Worker 没有 <code>window</code>。</li><li>浏览器和 Web Worker 里面，<code>self</code> 也指向顶层对象，但是 Node.js 没有 <code>self</code>。</li><li>Node.js 里面，顶层对象是 <code>global</code>，但其他环境都不支持。</li></ul><p>同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用 <code>this</code> 变量，但是有局限性。</p><ul><li>全局环境中，<code>this</code> 会返回顶层对象。但是，Node.js 模块和 ES6 模块中，<code>this</code> 返回的是当前模块。</li><li>函数里面的 <code>this</code>，如果函数不是作为对象的方法运行，而是单纯作为函数运行，<code>this</code> 会指向顶层对象。但是，严格模式下，这时 <code>this</code> 会返回 <code>undefined</code>。</li><li>不管是严格模式，还是普通模式，<code>new Function(&#39;return this&#39;)()</code>，总是会返回全局对象。但是，如果浏览器用了 CSP(Content Security Policy，内容安全策略)，那么 <code>eval</code>、<code>new Function</code> 这些方法都可能无法使用。</li></ul><p>综上所述，很难找到一种方法，可以在所有情况下，都取到顶层对象。下面是两种勉强可以使用的方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 方法一</span>
<span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">&quot;undefined&quot;</span>
  <span class="token operator">?</span> window
  <span class="token operator">:</span> <span class="token keyword">typeof</span> process <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">&amp;&amp;</span>
    <span class="token keyword">typeof</span> require <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span> <span class="token operator">&amp;&amp;</span>
    <span class="token keyword">typeof</span> global <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span>
  <span class="token operator">?</span> global
  <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

<span class="token comment">// 方法二</span>
<span class="token keyword">var</span> <span class="token function-variable function">getGlobal</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> self <span class="token operator">!==</span> <span class="token string">&quot;undefined&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> self<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">&quot;undefined&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> window<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> global <span class="token operator">!==</span> <span class="token string">&quot;undefined&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> global<span class="token punctuation">;</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;unable to locate global object&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,54),v={href:"https://github.com/tc39/proposal-global",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,"global",-1),b=s("code",null,"global",-1),g={href:"https://github.com/ljharb/System.global",target:"_blank",rel:"noopener noreferrer"},f=s("code",null,"system.global",-1),y=s("code",null,"global",-1),w=t(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// CommonJS 的写法</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;system.global/shim&quot;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ES6 模块的写法</span>
<span class="token keyword">import</span> shim <span class="token keyword">from</span> <span class="token string">&quot;system.global/shim&quot;</span><span class="token punctuation">;</span>
<span class="token function">shim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>上面代码可以保证各种环境里面，<code>global</code> 对象都是存在的。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// CommonJS 的写法</span>
<span class="token keyword">var</span> global <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;system.global&quot;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ES6 模块的写法</span>
<span class="token keyword">import</span> getGlobal <span class="token keyword">from</span> <span class="token string">&quot;system.global&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> global <span class="token operator">=</span> <span class="token function">getGlobal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>上面代码将顶层对象放入变量 <code>global</code>。</p>`,4);function h(j,x){const a=l("ExternalLinkIcon");return e(),c("div",null,[u,s("p",null,[n("原来，如果改变了块级作用域内声明的函数的处理规则，显然会对老代码产生很大影响。为了减轻因此产生的不兼容问题，ES6 在"),s("a",d,[n("附录 B"),p(a)]),n("里面规定，浏览器的实现可以不遵守上面的规定，有自己的"),s("a",k,[n("行为方式"),p(a)]),n("。")]),r,s("p",null,[n("现在有一个"),s("a",v,[n("提案"),p(a)]),n("，在语言标准的层面，引入 "),m,n(" 作为顶层对象。也就是说，在所有环境下，"),b,n(" 都是存在的，都可以从它拿到顶层对象。")]),s("p",null,[n("垫片库"),s("a",g,[f,p(a)]),n("模拟了这个提案，可以在所有环境拿到 "),y,n("。")]),w])}const E=o(i,[["render",h],["__file","let.html.vue"]]);export{E as default};
