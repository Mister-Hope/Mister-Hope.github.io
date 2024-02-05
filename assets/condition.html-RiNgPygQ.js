import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as e,f as p,d as n,e as s,b as o}from"./app-S62fdHqc.js";const c={},l=n("p",null,[s("JavaScript 提供 "),n("code",null,"if"),s(" 结构和 "),n("code",null,"switch"),s(" 结构，完成条件判断，即只有满足预设的条件，才会执行相应的语句。")],-1),i=o(`<h2 id="if" tabindex="-1"><a class="header-anchor" href="#if"><span>if</span></a></h2><h3 id="if-结构" tabindex="-1"><a class="header-anchor" href="#if-结构"><span>if 结构</span></a></h3><p><code>if</code> 结构先判断一个表达式的布尔值，然后根据布尔值的真伪<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>，执行不同的语句。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>布尔值<span class="token punctuation">)</span>
  语句<span class="token punctuation">;</span>
<span class="token comment">// 或者</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>布尔值<span class="token punctuation">)</span> 语句<span class="token punctuation">;</span>
</code></pre></div><p>上面是 <code>if</code> 结构的基本形式。需要注意的是，“布尔值”往往由一个条件表达式产生的，必须放在圆括号中，表示对表达式求值。如果表达式的求值结果为 <code>true</code>，就执行紧跟在后面的语句；如果结果为 <code>false</code>，则跳过紧跟在后面的语句。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span> m <span class="token operator">=</span> m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><p>上面代码表示，只有在 <code>m</code> 等于 <code>3</code> 时，才会将其值加上 <code>1</code>。</p><p>这种写法要求条件表达式后面只能有一个语句。如果想执行多个语句，必须在 <code>if</code> 的条件判断之后，加上大括号，表示代码块(多个语句合并成一个语句)。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  m <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>注意，<code>if</code> 后面的表达式之中，不要混淆赋值表达式 (<code>=</code>)、严格相等运算符 (<code>===</code>) 和相等运算符 (<code>==</code>)。尤其是赋值表达式不具有比较作用。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">=</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// &quot;2&quot;</span>
</code></pre></div><p>上面代码的原意是，当 <code>x</code> 等于 <code>y</code> 的时候，才执行相关语句。但是，不小心将严格相等运算符写成赋值表达式，结果变成了将 <code>y</code> 赋值给变量 <code>x</code>，再判断变量 <code>x</code> 的值(等于 2)的布尔值(结果为 <code>true</code>)。</p></div><h3 id="if-else-结构" tabindex="-1"><a class="header-anchor" href="#if-else-结构"><span><code>if...else</code> 结构</span></a></h3><p><code>if</code> 代码块后面，还可以跟一个 <code>else</code> 代码块，表示不满足条件时，所要执行的代码。例如，根据年龄显示不同内容，可以实现如下:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">)</span>
  <span class="token comment">// 如果 age &gt;= 18 为 true，则执行 if 语句块</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;adult&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 否则执行 else 语句块</span>
<span class="token keyword">else</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;teenager&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>省略 <code>{}</code> 的危险之处在于，如果后来想添加一些语句，却忘了写 <code>{}</code> ，就改变了语义，例如:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;adult&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">else</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;age &lt; 18&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 添加一行日志</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;teenager&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;- 这行语句已经不在 else 的控制范围了</span>
</code></pre></div><p>上述代码的 <code>else</code> 子句实际上只负责执行 <code>console.log(&#39;age &lt; 18&#39;);</code>，原有的 <code>alert(&#39;teenager&#39;);</code> 已经不属于 <code>if...else...</code> 的控制范围了，它每次都会执行。</p><p>相反地，有 <code>{}</code> 的语句就不会出错:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;adult&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;age &lt; 18&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;teenager&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>建议初学者带上 <code>{}</code>。</p></div><h3 id="多行条件判断" tabindex="-1"><a class="header-anchor" href="#多行条件判断"><span>多行条件判断</span></a></h3><p>如果还要更细致地判断条件，可以使用多个 <code>if...else...</code> 的组合:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;adult&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;teenager&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;kid&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上述多个 <code>if...else...</code> 的组合实际上相当于两层 <code>if...else...</code> :</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;adult&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;teenager&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;kid&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是我们通常把 <code>else if</code> 连写在一起，来增加可读性。这里的 <code>else</code> 略掉了 <code>{}</code> 是没有问题的，因为它只包含一个 <code>if</code> 语句。注意最后一个单独的 <code>else</code> 不要略掉 <code>{}</code><sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>。</p><p>请注意， <code>if...else...</code> 语句的执行特点是二选一，在多个 <code>if...else...</code> 语句中，如果某个条件成立，则后续就不再继续判断了。</p><h2 id="switch-结构" tabindex="-1"><a class="header-anchor" href="#switch-结构"><span>switch 结构</span></a></h2><p>当对一个变量连在一起使用多个 <code>if...else</code> 的时候，可以转为使用更方便的 <code>switch</code> 结构。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>fruit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token string">&quot;banana&quot;</span><span class="token operator">:</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">&quot;apple&quot;</span><span class="token operator">:</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码根据变量 <code>fruit</code> 的值，选择执行相应的 <code>case</code>。如果所有 <code>case</code> 都不符合，则执行最后的 <code>default</code> 部分。需要注意的是，每个 <code>case</code> 代码块内部的 <code>break</code> 语句不能少，否则会接下去执行下一个 <code>case</code> 代码块，而不是跳出 <code>switch</code> 结构。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">switch</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;x 等于1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;x 等于2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;x 等于其他值&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// x等于1</span>
<span class="token comment">// x等于2</span>
<span class="token comment">// x等于其他值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>case</code> 代码块之中没有 <code>break</code> 语句，导致不会跳出 <code>switch</code> 结构，而会一直执行下去。正确的写法是像下面这样。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;x 等于1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;x 等于2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;x 等于其他值&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>switch</code> 语句部分和 <code>case</code> 语句部分，都可以使用表达式。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token operator">:</span>
    <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    <span class="token function">neverHappens</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面代码的 <code>default</code> 部分，是永远不会执行到的。 需要注意的是，<code>switch</code> 语句后面的表达式，与 <code>case</code> 语句后面的表示式比较运行结果时，采用的是严格相等运算符(<code>===</code>)，而不是相等运算符(<code>==</code>)，这意味着比较时不会发生类型转换。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token boolean">true</span><span class="token operator">:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;x 发生类型转换&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;x 没有发生类型转换&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// x 没有发生类型转换</span>
</code></pre></div><p>上面代码中，由于变量 <code>x</code> 没有发生类型转换，所以不会执行 <code>case true</code> 的情况。这表明，<code>switch</code> 语句内部采用的是“严格相等运算符”。</p><h2 id="三元运算符" tabindex="-1"><a class="header-anchor" href="#三元运算符"><span><code>? :</code> 三元运算符</span></a></h2><p>JavaScript 还有一个三元运算符(即该运算符需要三个运算子)<code>? :</code>，也可以用于逻辑判断。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code>条件 <span class="token operator">?</span> 表达式<span class="token number">1</span> <span class="token operator">:</span> 表达式<span class="token number">2</span><span class="token punctuation">;</span>
</code></pre></div><p>上面代码中，如果“条件”为 <code>true</code>，则返回“表达式 1”的值，否则返回“表达式 2”的值。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> even <span class="token operator">=</span> n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre></div><p>上面代码中，如果 <code>n</code> 可以被 2 整除，则 <code>even</code> 等于 <code>true</code>，否则等于 <code>false</code>。它等同于下面的形式。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> even<span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  even <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  even <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这个三元运算符可以被视为 <code>if...else...</code> 的简写形式，因此可以用于多种场合。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> myVar<span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myVar <span class="token operator">?</span> <span class="token string">&quot;myVar has a value&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;myVar does not have a value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// myVar does not have a value</span>
</code></pre></div><p>上面代码利用三元运算符，输出相应的提示。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token string">&quot;数字&quot;</span> <span class="token operator">+</span> n <span class="token operator">+</span> <span class="token string">&quot;是&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&quot;偶数&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;奇数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>上面代码利用三元运算符，在字符串之中插入不同的值。</p><h2 id="章节问题" tabindex="-1"><a class="header-anchor" href="#章节问题"><span>章节问题</span></a></h2><p>试解释为什么下面的代码显示的是 <code>teenager</code>:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">6</span><span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;teenager&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;adult&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">else</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;kid&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>由于 <code>age</code> 的值为 <code>20</code>，它实际上同时满足条件 <code>age &gt;= 6</code> 和 <code>age &gt;= 18</code> ，这说明条件判断的顺序非常重要。请修复后让其显示 <code>&#39;adult&#39;</code>。</p><p>:::</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>布尔值的转换</p><p>如果 <code>if</code> 的条件判断语句结果不是 <code>true</code> 或 <code>false</code> 怎么办? 例如:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 条件计算结果为3</span>
<span class="token punctuation">}</span>
</code></pre></div><p>不要忘记 JavaScript 把 <code>false</code> 本身、<code>null</code> 、 <code>undefined</code> 、 <code>0</code> 、 <code>NaN</code> 和空字符串 <code>&#39;&#39;</code> 视为 <code>false</code> ，其他值一概视为 <code>true</code>。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p>else 的从属</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p><code>else</code> 代码块总是与离自己最近的那个 <code>if</code> 语句配对。</p></div><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">!==</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">else</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>上面代码不会有任何输出，<code>else</code> 代码块不会得到执行，因为它跟着的是最近的那个 <code>if</code> 语句，相当于下面这样。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">!==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>如果想让 <code>else</code> 代码块跟随最上面的那个 <code>if</code> 语句，就要改变大括号的位置。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">!==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// world</span>
</code></pre></div> <a href="#footnote-ref2" class="footnote-backref">↩︎</a></li></ol></section>`,52);function u(r,k){return t(),e("div",null,[l,p(" more "),i])}const v=a(c,[["render",u],["__file","condition.html.vue"]]),m=JSON.parse('{"path":"/code/language/js/guide/condition.html","title":"条件判断","lang":"zh-CN","frontmatter":{"title":"条件判断","icon":"condition","date":"2019-09-16T00:00:00.000Z","category":"JavaScript","tag":["快速上手"],"description":"JavaScript 提供 if 结构和 switch 结构，完成条件判断，即只有满足预设的条件，才会执行相应的语句。 if if 结构 if 结构先判断一个表达式的布尔值，然后根据布尔值的真伪[1]，执行不同的语句。 上面是 if 结构的基本形式。需要注意的是，“布尔值”往往由一个条件表达式产生的，必须放在圆括号中，表示对表达式求值。如果表达式的求值...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/js/guide/condition.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"条件判断"}],["meta",{"property":"og:description","content":"JavaScript 提供 if 结构和 switch 结构，完成条件判断，即只有满足预设的条件，才会执行相应的语句。 if if 结构 if 结构先判断一个表达式的布尔值，然后根据布尔值的真伪[1]，执行不同的语句。 上面是 if 结构的基本形式。需要注意的是，“布尔值”往往由一个条件表达式产生的，必须放在圆括号中，表示对表达式求值。如果表达式的求值..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"快速上手"}],["meta",{"property":"article:published_time","content":"2019-09-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"条件判断\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-16T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-06T16:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"if","slug":"if","link":"#if","children":[{"level":3,"title":"if 结构","slug":"if-结构","link":"#if-结构","children":[]},{"level":3,"title":"if...else 结构","slug":"if-else-结构","link":"#if-else-结构","children":[]},{"level":3,"title":"多行条件判断","slug":"多行条件判断","link":"#多行条件判断","children":[]}]},{"level":2,"title":"switch 结构","slug":"switch-结构","link":"#switch-结构","children":[]},{"level":2,"title":"? : 三元运算符","slug":"三元运算符","link":"#三元运算符","children":[]},{"level":2,"title":"章节问题","slug":"章节问题","link":"#章节问题","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":10}]},"readingTime":{"minutes":6.09,"words":1827},"filePathRelative":"code/language/js/guide/condition.md","localizedDate":"2019年9月16日","excerpt":"<p>JavaScript 提供 <code>if</code> 结构和 <code>switch</code> 结构，完成条件判断，即只有满足预设的条件，才会执行相应的语句。</p>\\n","autoDesc":true}');export{v as comp,m as data};
