import{_ as t,X as o,Y as e,$ as n,a0 as s,Z as p,a3 as c,C as l}from"./framework-a91f7991.js";const u={},i=c(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><h3 id="生成方法" tabindex="-1"><a class="header-anchor" href="#生成方法" aria-hidden="true">#</a> 生成方法</h3><p>对象(object)是 JavaScript 语言的核心概念，也是最重要的数据类型。</p><p>什么是对象? 简单说，对象就是一组“键值对”(key-value)的集合，是一种无序的复合数据集合。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">&quot;World&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>上面代码中，大括号就定义了一个对象，它被赋值给变量 <code>obj</code>，所以变量 <code>obj</code> 就指向一个对象。该对象内部包含两个键值对(又称为两个“成员”)，第一个键值对是 <code>foo: &#39;Hello&#39;</code>，其中 <code>foo</code> 是“键名”(成员的名称)，字符串 <code>Hello</code> 是“键值”(成员的值)。键名与键值之间用冒号分隔。第二个键值对是 <code>bar: &#39;World&#39;</code>，<code>bar</code> 是键名，<code>World</code> 是键值。两个键值对之间用逗号分隔。</p><h3 id="键名" tabindex="-1"><a class="header-anchor" href="#键名" aria-hidden="true">#</a> 键名</h3><p>对象的所有键名都是字符串(ES6 又引入了 Symbol 值也可以作为键名)，所以加不加引号都可以。上面的代码也可以写成下面这样。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>vconstar obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;foo&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;bar&#39;</span><span class="token operator">:</span> <span class="token string">&#39;World&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>如果键名是数值，会被自动转为字符串。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token number">1</span><span class="token operator">:</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span>
  <span class="token number">3.2</span><span class="token operator">:</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span>
  <span class="token number">1e2</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token number">1e-2</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token number">0.234</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token number">0xff</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">;</span>
<span class="token comment">// Object {</span>
<span class="token comment">//   1: &quot;a&quot;,</span>
<span class="token comment">//   3.2: &quot;b&quot;,</span>
<span class="token comment">//   100: true,</span>
<span class="token comment">//   0.01: true,</span>
<span class="token comment">//   0.234: true,</span>
<span class="token comment">//   255: true</span>
<span class="token comment">// }</span>

obj<span class="token punctuation">[</span><span class="token string">&quot;100&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，对象 <code>obj</code> 的所有键名虽然看上去像数值，实际上都被自动转成了字符串。</p><p>如果键名不符合标识名的条件(比如第一个字符为数字，或者含有空格或运算符)，且也不是数字，则必须加上引号，否则会报错。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 报错</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  1p<span class="token operator">:</span> <span class="token string">&#39;Hello World&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 不报错</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;1p&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;h w&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;p+q&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Hello World&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面对象的三个键名，都不符合标识名的条件，所以必须加上引号。</p><p>对象的每一个键名又称为“属性”(property)，它的“键值”可以是任何数据类型。如果一个属性的值为函数，通常把这个属性称为“方法”，它可以像函数那样调用。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">p</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token function">p</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre></div><p>上面代码中，对象 <code>obj</code> 的属性 <code>p</code>，就指向一个函数。</p><p>如果属性的值还是一个对象，就形成了链式引用。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> o2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

o1<span class="token punctuation">.</span>foo <span class="token operator">=</span> o2<span class="token punctuation">;</span>
o1<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>bar<span class="token punctuation">;</span> <span class="token comment">// &quot;hello&quot;</span>
</code></pre></div><p>上面代码中，对象 <code>o1</code> 的属性 <code>foo</code> 指向对象 <code>o2</code>，就可以链式引用 <code>o2</code> 的属性。</p><p>对象的属性之间用逗号分隔，最后一个属性后面可以加逗号(trailing comma)，也可以不加。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  <span class="token function-variable function">m</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面的代码中，<code>m</code> 属性后面的那个逗号，有没有都可以。</p><p>属性可以动态创建，不必在对象声明时就指定。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>foo<span class="token punctuation">;</span> <span class="token comment">// 123</span>
</code></pre></div><p>上面代码中，直接对 <code>obj</code> 对象的 <code>foo</code> 属性赋值，结果就在运行时创建了 <code>foo</code> 属性。</p><h3 id="对象的引用" tabindex="-1"><a class="header-anchor" href="#对象的引用" aria-hidden="true">#</a> 对象的引用</h3><p>如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> o2 <span class="token operator">=</span> o1<span class="token punctuation">;</span>

o1<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
o2<span class="token punctuation">.</span>a<span class="token punctuation">;</span> <span class="token comment">// 1</span>

o2<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
o1<span class="token punctuation">.</span>b<span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre></div><p>上面代码中，<code>o1</code> 和 <code>o2</code> 指向同一个对象，因此为其中任何一个变量添加属性，另一个变量都可以读写该属性。</p><p>此时，如果取消某一个变量对于原对象的引用，不会影响到另一个变量。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> o2 <span class="token operator">=</span> o1<span class="token punctuation">;</span>

o1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
o2<span class="token punctuation">;</span> <span class="token comment">// {}</span>
</code></pre></div><p>上面代码中，<code>o1</code> 和 <code>o2</code> 指向同一个对象，然后 <code>o1</code> 的值变为 1，这时不会对 <code>o2</code> 产生影响，<code>o2</code> 还是指向原来的那个对象。</p><p>但是，这种引用只局限于对象，如果两个变量指向同一个原始类型的值。那么，变量这时都是值的拷贝。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> x<span class="token punctuation">;</span>

x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
y<span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre></div><p>上面的代码中，当 <code>x</code> 的值发生变化后，<code>y</code> 的值并不变，这就表示 <code>y</code> 和 <code>x</code> 并不是指向同一个内存地址。</p><h3 id="表达式还是语句" tabindex="-1"><a class="header-anchor" href="#表达式还是语句" aria-hidden="true">#</a> 表达式还是语句</h3><p>对象采用大括号表示，这导致了一个问题: 如果行首是一个大括号，它到底是表达式还是语句?</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>JavaScript 引擎读到上面这行代码，会发现可能有两种含义。第一种可能是，这是一个表达式，表示一个包含 <code>foo</code> 属性的对象；第二种可能是，这是一个语句，表示一个代码区块，里面有一个标签 <code>foo</code>，指向表达式 <code>123</code>。</p><p>为了避免这种歧义，JavaScript 引擎的做法是，如果遇到这种情况，无法确定是对象还是代码块，一律解释为代码块。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">// 123</span>
</code></pre></div><p>上面的语句是一个代码块，而且只有解释为代码块，才能执行。</p><p>如果要解释为对象，最好在大括号前加上圆括号。因为圆括号的里面，只能是表达式，所以确保大括号只能解释为对象。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 正确</span>
<span class="token punctuation">(</span><span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 报错</span>
</code></pre></div><p>这种差异在 <code>eval</code> 语句(作用是对字符串求值)中反映得最明显。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&quot;{foo: 123}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123</span>
<span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&quot;({foo: 123})&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {foo: 123}</span>
</code></pre></div><p>上面代码中，如果没有圆括号，<code>eval</code> 将其理解为一个代码块；加上圆括号以后，就理解成一个对象。</p><h2 id="属性的操作" tabindex="-1"><a class="header-anchor" href="#属性的操作" aria-hidden="true">#</a> 属性的操作</h2><h3 id="属性的读取" tabindex="-1"><a class="header-anchor" href="#属性的读取" aria-hidden="true">#</a> 属性的读取</h3><p>读取对象的属性，有两种方法，一种是使用点运算符，还有一种是使用方括号运算符。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>p<span class="token punctuation">;</span> <span class="token comment">// &quot;Hello World&quot;</span>
obj<span class="token punctuation">[</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &quot;Hello World&quot;</span>
</code></pre></div><p>上面代码分别采用点运算符和方括号运算符，读取属性 <code>p</code>。</p><p>请注意，如果使用方括号运算符，键名必须放在引号里面，否则会被当作变量处理。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>foo<span class="token punctuation">;</span> <span class="token comment">// 1</span>
obj<span class="token punctuation">[</span>foo<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre></div><p>上面代码中，引用对象 <code>obj</code> 的 <code>foo</code> 属性时，如果使用点运算符，<code>foo</code> 就是字符串；如果使用方括号运算符，但是不使用引号，那么 <code>foo</code> 就是一个变量，指向字符串 <code>bar</code>。</p><p>方括号运算符内部还可以使用表达式。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>obj<span class="token punctuation">[</span><span class="token string">&quot;hello&quot;</span> <span class="token operator">+</span> <span class="token string">&quot; world&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
obj<span class="token punctuation">[</span><span class="token number">3</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><p>数字键可以不加引号，因为会自动转成字符串。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token number">0.7</span><span class="token operator">:</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">[</span><span class="token string">&quot;0.7&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &quot;Hello World&quot;</span>
obj<span class="token punctuation">[</span><span class="token number">0.7</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &quot;Hello World&quot;</span>
</code></pre></div><p>上面代码中，对象 <code>obj</code> 的数字键 <code>0.7</code>，加不加引号都可以，因为会被自动转为字符串。</p><p>注意，数值键名不能使用点运算符(因为会被当成小数点)，只能使用方括号运算符。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token number">123</span><span class="token operator">:</span> <span class="token string">&#39;hello world&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token number">123</span> <span class="token comment">// 报错</span>
obj<span class="token punctuation">[</span><span class="token number">123</span><span class="token punctuation">]</span> <span class="token comment">// &quot;hello world&quot;</span>
</code></pre></div><p>上面代码的第一个表达式，对数值键名 <code>123</code> 使用点运算符，结果报错。第二个表达式使用方括号运算符，结果就是正确的。</p><h3 id="属性的赋值" tabindex="-1"><a class="header-anchor" href="#属性的赋值" aria-hidden="true">#</a> 属性的赋值</h3><p>点运算符和方括号运算符，不仅可以用来读取值，还可以用来赋值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
obj<span class="token punctuation">[</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;World&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>上面代码中，分别使用点运算符和方括号运算符，对属性赋值。</p><p>JavaScript 允许属性的“后绑定”，也就是说，您可以在任意时刻新增属性，没必要在定义对象的时候，就定义好属性。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 等价于</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>p <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="属性的查看" tabindex="-1"><a class="header-anchor" href="#属性的查看" aria-hidden="true">#</a> 属性的查看</h3><p>查看一个对象本身的所有属性，可以使用 <code>Object.keys</code> 方法。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">key1</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">key2</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&#39;key1&#39;, &#39;key2&#39;]</span>
</code></pre></div><h3 id="属性的删除-delete-命令" tabindex="-1"><a class="header-anchor" href="#属性的删除-delete-命令" aria-hidden="true">#</a> 属性的删除: delete 命令</h3><p><code>delete</code> 命令用于删除对象的属性，删除成功后返回 <code>true</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;p&quot;]</span>

<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>p<span class="token punctuation">;</span> <span class="token comment">// true</span>
obj<span class="token punctuation">.</span>p<span class="token punctuation">;</span> <span class="token comment">// undefined</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// []</span>
</code></pre></div><p>上面代码中，<code>delete</code> 命令删除对象 <code>obj</code> 的 <code>p</code> 属性。删除后，再读取 <code>p</code> 属性就会返回 <code>undefined</code>，而且 <code>Object.keys</code> 方法的返回值也不再包括该属性。</p><p>注意，删除一个不存在的属性，<code>delete</code> 不报错，而且返回 <code>true</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>p<span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div><p>上面代码中，对象 <code>obj</code> 并没有 <code>p</code> 属性，但是 <code>delete</code> 命令照样返回 <code>true</code>。因此，不能根据 <code>delete</code> 命令的结果，认定某个属性是存在的。</p><p>只有一种情况，<code>delete</code> 命令会返回 <code>false</code>，那就是该属性存在，且不得删除。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;p&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>p<span class="token punctuation">;</span> <span class="token comment">// 123</span>
<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>p<span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre></div><p>上面代码之中，对象 <code>obj</code> 的 <code>p</code> 属性是不能删除的，所以 <code>delete</code> 命令返回 <code>false</code>(关于 <code>Object.defineProperty</code> 方法的介绍，请看《标准库》的 Object 对象一章)。</p><p>另外，需要注意的是，<code>delete</code> 命令只能删除对象本身的属性，无法删除继承的属性(关于继承参见《面向对象编程》章节)。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>toString<span class="token punctuation">;</span> <span class="token comment">// true</span>
obj<span class="token punctuation">.</span>toString<span class="token punctuation">;</span> <span class="token comment">// function toString() { [native code] }</span>
</code></pre></div><p>上面代码中，<code>toString</code> 是对象 <code>obj</code> 继承的属性，虽然 <code>delete</code> 命令返回 <code>true</code>，但该属性并没有被删除，依然存在。这个例子还说明，即使 <code>delete</code> 返回 <code>true</code>，该属性依然可能读取到值。</p><h3 id="属性是否存在-in-运算符" tabindex="-1"><a class="header-anchor" href="#属性是否存在-in-运算符" aria-hidden="true">#</a> 属性是否存在: in 运算符</h3><p><code>in</code> 运算符用于检查对象是否包含某个属性(注意，检查的是键名，不是键值)，如果包含就返回 <code>true</code>，否则返回 <code>false</code>。它的左边是一个字符串，表示属性名，右边是一个对象。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token string">&quot;p&quot;</span> <span class="token keyword">in</span> obj<span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token string">&quot;toString&quot;</span> <span class="token keyword">in</span> obj<span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div><p><code>in</code> 运算符的一个问题是，它不能识别哪些属性是对象自身的，哪些属性是继承的。就像上面代码中，对象 <code>obj</code> 本身并没有 <code>toString</code> 属性，但是 <code>in</code> 运算符会返回 <code>true</code>，因为这个属性是继承的。</p><p>这时，可以使用对象的 <code>hasOwnProperty</code> 方法判断一下，是否为对象自身的属性。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;toString&quot;</span> <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&quot;toString&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="属性的遍历-for-in-循环" tabindex="-1"><a class="header-anchor" href="#属性的遍历-for-in-循环" aria-hidden="true">#</a> 属性的遍历: for...in 循环</h3><p><code>for...in</code> 循环用来遍历一个对象的全部属性。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;键名: &quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;键值: &quot;</span><span class="token punctuation">,</span> obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 键名:  a</span>
<span class="token comment">// 键值:  1</span>
<span class="token comment">// 键名:  b</span>
<span class="token comment">// 键值:  2</span>
<span class="token comment">// 键名:  c</span>
<span class="token comment">// 键值:  3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>for...in</code> 循环有两个使用注意点。</p><ul><li>它遍历的是对象所有可遍历(enumerable)的属性，会跳过不可遍历的属性。</li><li>它不仅遍历对象自身的属性，还遍历继承的属性。</li></ul><p>举例来说，对象都继承了 <code>toString</code> 属性，但是 <code>for...in</code> 循环不会遍历到这个属性。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// toString 属性是存在的</span>
obj<span class="token punctuation">.</span>toString<span class="token punctuation">;</span> <span class="token comment">// toString() { [native code] }</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> p <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">// 没有任何输出</span>
</code></pre></div><p>上面代码中，对象 <code>obj</code> 继承了 <code>toString</code> 属性，该属性不会被 <code>for...in</code> 循环遍历到，因为它默认是“不可遍历”的。关于对象属性的可遍历性，参见《标准库》章节中 Object 一章的介绍。</p><p>如果继承的属性是可遍历的，那么就会被 <code>for...in</code> 循环遍历到。但是，一般情况下，都是只想遍历对象自身的属性，所以使用 <code>for...in</code> 的时候，应该结合使用 <code>hasOwnProperty</code> 方法，在循环内部判断一下，某个属性是否为对象自身的属性。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;老张&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>person<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// name</span>
</code></pre></div><h2 id="with-语句" tabindex="-1"><a class="header-anchor" href="#with-语句" aria-hidden="true">#</a> with 语句</h2><p><code>with</code> 语句的格式如下:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">with</span> <span class="token punctuation">(</span>对象<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  语句<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>它的作用是操作同一个对象的多个属性时，提供一些书写的方便。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 例一</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">p1</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">p2</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">with</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  p1 <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  p2 <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 等同于</span>
obj<span class="token punctuation">.</span>p1 <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>p2 <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token comment">// 例二</span>
<span class="token keyword">with</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>links<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 等同于</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>links<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>links<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>links<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，如果 <code>with</code> 区块内部有变量的赋值操作，必须是当前对象已经存在的属性，否则会创造一个当前作用域的全局变量。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">with</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  p1 <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  p2 <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

obj<span class="token punctuation">.</span>p1<span class="token punctuation">;</span> <span class="token comment">// undefined</span>
p1<span class="token punctuation">;</span> <span class="token comment">// 4</span>
</code></pre></div><p>上面代码中，对象 <code>obj</code> 并没有 <code>p1</code> 属性，对 <code>p1</code> 赋值等于创造了一个全局变量 <code>p1</code>。正确的写法应该是，先定义对象 <code>obj</code> 的属性 <code>p1</code>，然后在 <code>with</code> 区块内操作它。</p><p>这是因为 <code>with</code> 区块没有改变作用域，它的内部依然是当前作用域。这造成了 <code>with</code> 语句的一个很大的弊病，就是绑定对象不明确。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">with</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>单纯从上面的代码块，根本无法判断 <code>x</code> 到底是全局变量，还是对象 <code>obj</code> 的一个属性。这非常不利于代码的除错和模块化，编译器也无法对这段代码进行优化，只能留到运行时判断，这就拖慢了运行速度。因此，建议不要使用 <code>with</code> 语句，可以考虑用一个临时变量代替 <code>with</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">with</span> <span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>obj2<span class="token punctuation">.</span>obj3<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1 <span class="token operator">+</span> p2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 可以写成</span>
<span class="token keyword">const</span> temp <span class="token operator">=</span> obj1<span class="token punctuation">.</span>obj2<span class="token punctuation">.</span>obj3<span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>temp<span class="token punctuation">.</span>p1 <span class="token operator">+</span> temp<span class="token punctuation">.</span>p2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,116),r={href:"http://www.2ality.com/2012/10/javascript-properties.html",target:"_blank",rel:"noopener noreferrer"},k={href:"http://www.laktek.com/2012/12/29/revisiting-javascript-objects/",target:"_blank",rel:"noopener noreferrer"},d={href:"http://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/",target:"_blank",rel:"noopener noreferrer"},v={href:"http://www.2ality.com/2011/06/with-statement.html",target:"_blank",rel:"noopener noreferrer"};function m(b,g){const a=l("ExternalLinkIcon");return o(),e("div",null,[i,n("ul",null,[n("li",null,[s("Dr. Axel Rauschmayer，"),n("a",r,[s("Object properties in JavaScript"),p(a)])]),n("li",null,[s("Lakshan Perera, "),n("a",k,[s("Revisiting JavaScript Objects"),p(a)])]),n("li",null,[s("Angus Croll, "),n("a",d,[s("The Secret Life of JavaScript Primitives"),p(a)]),s("i")]),n("li",null,[s("Dr. Axel Rauschmayer, "),n("a",v,[s("JavaScript’s with statement and why it’s deprecated"),p(a)])])])])}const y=t(u,[["render",m],["__file","object.html.vue"]]);export{y as default};
