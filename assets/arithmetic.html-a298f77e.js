import{ac as n,G as s,H as a,L as p,E as e,ae as t}from"./framework-931f0218.js";const o={},c=e("p",null,"运算符是处理数据的基本方法，用来从现有的值得到新的值。JavaScript 提供了多种运算符，覆盖了所有主要的运算。",-1),l=t(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>JavaScript 共提供 10 个算术运算符，用来完成基本的算术运算。</p><ul><li><strong>加法运算符</strong>: <code>x + y</code></li><li><strong>减法运算符</strong>: <code>x - y</code></li><li><strong>乘法运算符</strong>: <code>x * y</code></li><li><strong>除法运算符</strong>: <code>x / y</code></li><li><strong>指数运算符</strong>: <code>x ** y</code></li><li><strong>余数运算符</strong>: <code>x % y</code></li><li><strong>自增运算符</strong>: <code>++x</code> 或者 <code>x++</code></li><li><strong>自减运算符</strong>: <code>--x</code> 或者 <code>x--</code></li><li><strong>数值运算符</strong>: <code>+x</code></li><li><strong>负数值运算符</strong>: <code>-x</code></li></ul><p>减法、乘法、除法运算法比较单纯，就是执行相应的数学运算。下面介绍其他几个算术运算符，重点是加法运算符。</p><h2 id="加法运算符" tabindex="-1"><a class="header-anchor" href="#加法运算符" aria-hidden="true">#</a> 加法运算符</h2><h3 id="基本规则" tabindex="-1"><a class="header-anchor" href="#基本规则" aria-hidden="true">#</a> 基本规则</h3><p>加法运算符(<code>+</code>)是最常见的运算符，用来求两个数值的和。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre></div><p>JavaScript 允许非数值的相加。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token boolean">true</span> <span class="token operator">+</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token number">1</span> <span class="token operator">+</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre></div><p>上面代码中，第一行是两个布尔值相加，第二行是数值与布尔值相加。这两种情况，布尔值都会自动转成数值，然后再相加。</p><p>比较特殊的是，如果是两个字符串相加，这时加法运算符会变成连接运算符，返回一个新的字符串，将两个原字符串连接在一起。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;a&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;bc&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;abc&quot;</span>
</code></pre></div><p>如果一个运算子是字符串，另一个运算子是非字符串，这时非字符串会转成字符串，再连接在一起。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">+</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;1a&quot;</span>
<span class="token boolean">false</span> <span class="token operator">+</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;falsea&quot;</span>
</code></pre></div><p>加法运算符是在运行时决定，到底是执行相加，还是执行连接。也就是说，运算子的不同，导致了不同的语法行为，这种现象称为“重载”(overload)。由于加法运算符存在重载，可能执行两种运算，使用的时候必须很小心。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;3&quot;</span> <span class="token operator">+</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// &quot;345&quot;</span>
<span class="token number">3</span> <span class="token operator">+</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;75&quot;</span>
</code></pre></div><p>上面代码中，由于从左到右的运算次序，字符串的位置不同会导致不同的结果。</p><p>除了加法运算符，其他算术运算符(比如减法、除法和乘法)都不会发生重载。它们的规则是: 所有运算子一律转为数值，再进行相应的数学运算。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">-</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">;</span> <span class="token comment">// -1</span>
<span class="token number">1</span> <span class="token operator">*</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token number">1</span> <span class="token operator">/</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 0.5</span>
</code></pre></div><p>上面代码中，减法、除法和乘法运算符，都是将字符串自动转为数值，然后再运算。</p><h3 id="对象的相加" tabindex="-1"><a class="header-anchor" href="#对象的相加" aria-hidden="true">#</a> 对象的相加</h3><p>如果运算子是对象，必须先转成原始类型的值，然后再相加。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

obj <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// &quot;[object Object]2&quot;</span>
</code></pre></div><p>上面代码中，对象 <code>obj</code> 转成原始类型的值是 <code>[object Object]</code>，再加 <code>2</code> 就得到了上面的结果。</p><p>对象转成原始类型的值，规则如下。</p><p>首先，自动调用对象的 <code>valueOf</code> 方法。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { p: 1 }</span>
</code></pre></div><p>一般来说，对象的 <code>valueOf</code> 方法总是返回对象自身，这时再自动调用对象的 <code>toString</code> 方法，将其转为字符串。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;[object Object]&quot;</span>
</code></pre></div><p>对象的 <code>toString</code> 方法默认返回 <code>[object Object]</code>，所以就得到了最前面那个例子的结果。</p><p>知道了这个规则以后，就可以自己定义 <code>valueOf</code> 方法或 <code>toString</code> 方法，得到想要的结果。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">valueOf</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre></div><p>上面代码中，我们定义 <code>obj</code> 对象的 <code>valueOf</code> 方法返回 <code>1</code>，于是 <code>obj + 2</code> 就得到了 <code>3</code>。这个例子中，由于 <code>valueOf</code> 方法直接返回一个原始类型的值，所以不再调用 <code>toString</code> 方法。</p><p>下面是自定义 <code>toString</code> 方法的例子。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">toString</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// &quot;hello2&quot;</span>
</code></pre></div><p>上面代码中，对象 <code>obj</code> 的 <code>toString</code> 方法返回字符串 <code>hello</code>。前面说过，只要有一个运算子是字符串，加法运算符就变成连接运算符，返回连接后的字符串。</p><p>这里有一个特例，如果运算子是一个 <code>Date</code> 对象的实例，那么会优先执行 <code>toString</code> 方法。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function-variable function">valueOf</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// &quot;hello2&quot;</span>
</code></pre></div><p>上面代码中，对象 <code>obj</code> 是一个 <code>Date</code> 对象的实例，并且自定义了 <code>valueOf</code> 方法和 <code>toString</code> 方法，结果 <code>toString</code> 方法优先执行。</p><h2 id="余数运算符" tabindex="-1"><a class="header-anchor" href="#余数运算符" aria-hidden="true">#</a> 余数运算符</h2><p>余数运算符(<code>%</code>)返回前一个运算子被后一个运算子除，所得的余数。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">12</span> <span class="token operator">%</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre></div><p>需要注意的是，运算结果的正负号由第一个运算子的正负号决定。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// -1</span>
<span class="token number">1</span> <span class="token operator">%</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre></div><p>所以，为了得到负数的正确余数值，可以先使用绝对值函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 错误的写法</span>
<span class="token keyword">function</span> <span class="token function">isOdd</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">isOdd</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token function">isOdd</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token comment">// 正确的写法</span>
<span class="token keyword">function</span> <span class="token function">isOdd</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">isOdd</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isOdd</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>余数运算符还可以用于浮点数的运算。但是，由于浮点数不是精确的值，无法得到完全准确的结果。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">6.5</span> <span class="token operator">%</span> <span class="token number">2.1</span><span class="token punctuation">;</span>
<span class="token comment">// 0.19999999999999973</span>
</code></pre></div><h2 id="自增和自减运算符" tabindex="-1"><a class="header-anchor" href="#自增和自减运算符" aria-hidden="true">#</a> 自增和自减运算符</h2><p>自增和自减运算符，是一元运算符，只需要一个运算子。它们的作用是将运算子首先转为数值，然后加上 1 或者减去 1。它们会修改原始变量。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token operator">++</span>x<span class="token punctuation">;</span> <span class="token comment">// 2</span>
x<span class="token punctuation">;</span> <span class="token comment">// 2</span>

<span class="token operator">--</span>x<span class="token punctuation">;</span> <span class="token comment">// 1</span>
x<span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre></div><p>上面代码的变量 <code>x</code> 自增后，返回 <code>2</code>，再进行自减，返回 <code>1</code>。这两种情况都会使得，原始变量 <code>x</code> 的值发生改变。</p><p>运算之后，变量的值发生变化，这种效应叫做运算的副作用(side effect)。自增和自减运算符是仅有的两个具有副作用的运算符，其他运算符都不会改变变量的值。</p><p>自增和自减运算符有一个需要注意的地方，就是放在变量之后，会先返回变量操作前的值，再进行自增/自减操作；放在变量之前，会先进行自增/自减操作，再返回变量操作后的值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

x<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token operator">++</span>y<span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre></div><p>上面代码中，<code>x</code> 是先返回当前值，然后自增，所以得到 <code>1</code>；<code>y</code> 是先自增，然后返回新的值，所以得到 <code>2</code>。</p><h2 id="数值运算符-负数值运算符" tabindex="-1"><a class="header-anchor" href="#数值运算符-负数值运算符" aria-hidden="true">#</a> 数值运算符，负数值运算符</h2><p>数值运算符(<code>+</code>)同样使用加号，但它是一元运算符(只需要一个操作数)，而加法运算符是二元运算符(需要两个操作数)。</p><p>数值运算符的作用在于可以将任何值转为数值(与 <code>Number</code> 函数的作用相同)。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">+</span><span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token operator">+</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
<span class="token operator">+</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>
</code></pre></div><p>上面代码表示，非数值经过数值运算符以后，都变成了数值(最后一行 <code>NaN</code> 也是数值)。具体的类型转换规则，参见《数据类型转换》一章。</p><p>负数值运算符(<code>-</code>)，也同样具有将一个值转为数值的功能，只不过得到的值正负相反。连用两个负数值运算符，等同于数值运算符。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token operator">-</span>x <span class="token operator">-</span> <span class="token operator">-</span>x<span class="token punctuation">;</span> <span class="token comment">// -1 // 1</span>
</code></pre></div><p>上面代码最后一行的圆括号不可少，否则会变成自减运算符。</p><p>数值运算符号和负数值运算符，都会返回一个新的值，而不会改变原始变量的值。</p><h2 id="指数运算符" tabindex="-1"><a class="header-anchor" href="#指数运算符" aria-hidden="true">#</a> 指数运算符</h2><p>指数运算符(<code>**</code>)完成指数运算，前一个运算子是底数，后一个运算子是指数。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// 16</span>
</code></pre></div><p>注意，指数运算符是右结合，而不是左结合。即多个指数运算符连用时，先进行最右边的计算。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 相当于 2 ** (3 ** 2)</span>
<span class="token number">2</span> <span class="token operator">**</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 512</span>
</code></pre></div><p>上面代码中，由于指数运算符是右结合，所以先计算第二个指数运算符，而不是第一个。</p><h2 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a> 赋值运算符</h2><p>赋值运算符(Assignment Operators)用于给变量赋值。</p><p>最常见的赋值运算符，当然就是等号(<code>=</code>)。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 将 1 赋值给变量 x</span>
<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">// 将变量 y 的值赋值给变量 x</span>
<span class="token keyword">let</span> x <span class="token operator">=</span> y<span class="token punctuation">;</span>
</code></pre></div><p>赋值运算符还可以与其他运算符结合，形成变体。下面是与算术运算符的结合。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 等同于 x = x + y</span>
x <span class="token operator">+=</span> y<span class="token punctuation">;</span>

<span class="token comment">// 等同于 x = x - y</span>
x <span class="token operator">-=</span> y<span class="token punctuation">;</span>

<span class="token comment">// 等同于 x = x * y</span>
x <span class="token operator">*=</span> y<span class="token punctuation">;</span>

<span class="token comment">// 等同于 x = x / y</span>
x <span class="token operator">/=</span> y<span class="token punctuation">;</span>

<span class="token comment">// 等同于 x = x % y</span>
x <span class="token operator">%=</span> y<span class="token punctuation">;</span>

<span class="token comment">// 等同于 x = x ** y</span>
x <span class="token operator">**=</span> y<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是与位运算符的结合(关于位运算符，请见后文的介绍)。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 等同于 x = x &gt;&gt; y</span>
x <span class="token operator">&gt;&gt;=</span> y<span class="token punctuation">;</span>

<span class="token comment">// 等同于 x = x &lt;&lt; y</span>
x <span class="token operator">&lt;&lt;=</span> y<span class="token punctuation">;</span>

<span class="token comment">// 等同于 x = x &gt;&gt;&gt; y</span>
x <span class="token operator">&gt;&gt;&gt;=</span> y<span class="token punctuation">;</span>

<span class="token comment">// 等同于 x = x &amp; y</span>
x <span class="token operator">&amp;=</span> y<span class="token punctuation">;</span>

<span class="token comment">// 等同于 x = x | y</span>
x <span class="token operator">|=</span> y<span class="token punctuation">;</span>

<span class="token comment">// 等同于 x = x ^ y</span>
x <span class="token operator">^=</span> y<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些复合的赋值运算符，都是先进行指定运算，然后将得到值返回给左边的变量。</p>`,81);function r(i,u){return s(),a("div",null,[c,p(" more "),l])}const k=n(o,[["render",r],["__file","arithmetic.html.vue"]]);export{k as default};
