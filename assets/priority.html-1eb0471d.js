import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,f as p}from"./app-27839578.js";const t={},o=p(`<h2 id="void-运算符" tabindex="-1"><a class="header-anchor" href="#void-运算符" aria-hidden="true">#</a> void 运算符</h2><p><code>void</code> 运算符的作用是执行一个表达式，然后不返回任何值，或者说返回 <code>undefined</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
<span class="token keyword">void</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre></div><p>上面是 <code>void</code> 运算符的两种写法，都正确。建议采用后一种形式，即总是使用圆括号。因为 <code>void</code> 运算符的优先性很高，如果不使用括号，容易造成错误的结果。比如，<code>void 4 + 7</code> 实际上等同于 <code>(void 4) + 7</code>。</p><p>下面是 <code>void</code> 运算符的一个例子。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token punctuation">(</span>x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>
x<span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre></div><p>这个运算符的主要用途是浏览器的书签工具(Bookmarklet)，以及在超级链接中插入代码防止网页跳转。</p><p>请看下面的代码。</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://example.com<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>点击<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>上面代码中，点击链接后，会先执行 <code>onclick</code> 的代码，由于 <code>onclick</code> 返回 <code>false</code>，所以浏览器不会跳转到 example.com。</p><p><code>void</code> 运算符可以取代上面的写法。</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>javascript: void(f())<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>下面是一个更实际的例子，用户点击链接提交表单，但是不产生页面跳转。</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>javascript: void(document.form.submit())<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 提交 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="逗号运算符" tabindex="-1"><a class="header-anchor" href="#逗号运算符" aria-hidden="true">#</a> 逗号运算符</h2><p>逗号运算符用于对两个表达式求值，并返回后一个表达式的值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;b&quot;</span>

<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">++</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
x<span class="token punctuation">;</span> <span class="token comment">// 1</span>
y<span class="token punctuation">;</span> <span class="token comment">// 10</span>
</code></pre></div><p>上面代码中，逗号运算符返回后一个表达式的值。</p><p>逗号运算符的一个用途是，在返回一个值之前，进行一些辅助操作。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hi!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Hi!</span>

value<span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div><p>上面代码中，先执行逗号之前的操作，然后返回逗号后面的值。</p><h2 id="运算顺序" tabindex="-1"><a class="header-anchor" href="#运算顺序" aria-hidden="true">#</a> 运算顺序</h2><h3 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h3><p>JavaScript 各种运算符的优先级别(Operator Precedence)是不一样的。优先级高的运算符先执行，优先级低的运算符后执行。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">4</span> <span class="token operator">+</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token comment">// 34</span>
</code></pre></div><p>上面的代码中，乘法运算符(<code>*</code>)的优先性高于加法运算符(<code>+</code>)，所以先执行乘法，再执行加法，相当于下面这样。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">4</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 34</span>
</code></pre></div><p>如果多个运算符混写在一起，常常会导致令人困惑的代码。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> y <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">||</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> x <span class="token operator">:</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><p>上面代码中，变量 <code>y</code> 的值就很难看出来，因为这个表达式涉及 5 个运算符，到底谁的优先级最高，实在不容易记住。</p><p>根据语言规格，这五个运算符的优先级从高到低依次为: 小于等于(<code>&lt;=</code>)、严格相等(<code>===</code>)、或(<code>||</code>)、三元(<code>?:</code>)、等号(<code>=</code>)。因此上面的表达式，实际的运算顺序如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">?</span> x <span class="token operator">:</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><p>记住所有运算符的优先级，是非常难的，也是没有必要的。</p><h3 id="圆括号的作用" tabindex="-1"><a class="header-anchor" href="#圆括号的作用" aria-hidden="true">#</a> 圆括号的作用</h3><p>圆括号(<code>()</code>)可以用来提高运算的优先级，因为它的优先级是最高的，即圆括号中的表达式会第一个运算。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token comment">// 54</span>
</code></pre></div><p>上面代码中，由于使用了圆括号，加法会先于乘法执行。</p><p>运算符的优先级别十分繁杂，且都是硬性规定，因此建议总是使用圆括号，保证运算顺序清晰可读，这对代码的维护和除错至关重要。</p><p>顺便说一下，圆括号不是运算符，而是一种语法结构。它一共有两种用法: 一种是把表达式放在圆括号之中，提升运算的优先级；另一种是跟在函数的后面，作用是调用函数。</p><p>注意，因为圆括号不是运算符，所以不具有求值作用，只改变运算的优先级。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre></div><p>上面代码的第二行，如果圆括号具有求值作用，那么就会变成 <code>1 = 2</code>，这是会报错了。但是，上面的代码可以运行，这验证了圆括号只改变优先级，不会求值。</p><p>这也意味着，如果整个表达式都放在圆括号之中，那么不会有任何效果。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span>expression<span class="token punctuation">)</span>
<span class="token comment">// 等同于</span>
expression
</code></pre></div><p>函数放在圆括号中，会返回函数本身。如果圆括号紧跟在函数的后面，就表示调用函数。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// function f(){return 1;}</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre></div><p>上面代码中，函数放在圆括号之中会返回函数本身，圆括号跟在函数后面则是调用函数。</p><p>圆括号之中，只能放置表达式，如果将语句放在圆括号之中，就会报错。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// SyntaxError: Unexpected token var</span>
</code></pre></div><h3 id="左结合与右结合" tabindex="-1"><a class="header-anchor" href="#左结合与右结合" aria-hidden="true">#</a> 左结合与右结合</h3><p>对于优先级别相同的运算符，大多数情况，计算顺序总是从左到右，这叫做运算符的“左结合”(left-to-right associativity)，即从左边开始计算。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>x <span class="token operator">+</span> y <span class="token operator">+</span> z<span class="token punctuation">;</span>
</code></pre></div><p>上面代码先计算最左边的 <code>x</code> 与 <code>y</code> 的和，然后再计算与 <code>z</code> 的和。</p><p>但是少数运算符的计算顺序是从右到左，即从右边开始计算，这叫做运算符的“右结合”(right-to-left associativity)。其中，最主要的是赋值运算符(<code>=</code>)和三元条件运算符(<code>?:</code>)。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>w <span class="token operator">=</span> x <span class="token operator">=</span> y <span class="token operator">=</span> z<span class="token punctuation">;</span>
q <span class="token operator">=</span> a <span class="token operator">?</span> b <span class="token operator">:</span> c <span class="token operator">?</span> d <span class="token operator">:</span> e <span class="token operator">?</span> f <span class="token operator">:</span> g<span class="token punctuation">;</span>
</code></pre></div><p>上面代码的运算结果，相当于下面的样子。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>w <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">=</span> <span class="token punctuation">(</span>y <span class="token operator">=</span> z<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
q <span class="token operator">=</span> a <span class="token operator">?</span> b <span class="token operator">:</span> <span class="token punctuation">(</span>c <span class="token operator">?</span> d <span class="token operator">:</span> <span class="token punctuation">(</span>e <span class="token operator">?</span> f <span class="token operator">:</span> g<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>上面的两行代码，各有三个等号运算符和三个三元运算符，都是先计算最右边的那个运算符。</p><p>指数运算符(<code>**</code>)也是右结合的。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 相当于 2 ** (3 ** 2)</span>
<span class="token number">2</span> <span class="token operator">**</span> <span class="token number">3</span> <span class="token operator">**</span> <span class="token number">2</span>
<span class="token comment">// 512</span>
</code></pre></div>`,60),e=[o];function c(l,u){return n(),s("div",null,e)}const i=a(t,[["render",c],["__file","priority.html.vue"]]);export{i as default};
