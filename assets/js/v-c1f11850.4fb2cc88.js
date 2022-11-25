"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[22345],{41766:(n,s,a)=>{a.r(s),a.d(s,{default:()=>c});var e=a(16492);const t=(0,e.uE)("<p>JavaScript 一共提供了 8 个比较运算符。</p><ul><li><code>&gt;</code> 大于运算符</li><li><code>&lt;</code> 小于运算符</li><li><code>&lt;=</code> 小于或等于运算符</li><li><code>&gt;=</code> 大于或等于运算符</li><li><code>==</code> 相等运算符</li><li><code>===</code> 严格相等运算符</li><li><code>!=</code> 不相等运算符</li><li><code>!==</code> 严格不相等运算符</li></ul><p>这八个比较运算符分成两类: 相等比较和非相等比较。两者的规则是不一样的，对于非相等的比较，算法是先看两个运算子是否都是字符串，如果是的，就按照字典顺序比较(实际上是比较 Unicode 码点)；否则，将两个运算子都转成数值，再比较数值的大小。</p>",3),p=(0,e.uE)('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>比较运算符用于比较两个值的大小，然后返回一个布尔值，表示是否满足指定的条件。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">2</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre></div><p>上面代码比较 <code>2</code> 是否大于 <code>1</code>，返回 <code>true</code>。</p><blockquote><p>注意，比较运算符可以比较各种类型的值，不仅仅是数值。</p></blockquote><h2 id="非相等运算符-字符串的比较" tabindex="-1"><a class="header-anchor" href="#非相等运算符-字符串的比较" aria-hidden="true">#</a> 非相等运算符: 字符串的比较</h2><p>字符串按照字典顺序进行比较。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;cat&quot;</span> <span class="token operator">&gt;</span> <span class="token string">&quot;dog&quot;</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token string">&quot;cat&quot;</span> <span class="token operator">&gt;</span> <span class="token string">&quot;catalog&quot;</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre></div><p>JavaScript 引擎内部首先比较首字符的 Unicode 码点。如果相等，再比较第二个字符的 Unicode 码点，以此类推。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;cat&quot;</span> <span class="token operator">&gt;</span> <span class="token string">&quot;Cat&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true&#39;</span>\n</code></pre></div><p>上面代码中，小写的 <code>c</code> 的 Unicode 码点(<code>99</code>)大于大写的 <code>C</code> 的 Unicode 码点(<code>67</code>)，所以返回 <code>true</code>。</p><p>由于所有字符都有 Unicode 码点，因此汉字也可以比较。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;大&quot;</span> <span class="token operator">&gt;</span> <span class="token string">&quot;小&quot;</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre></div><p>上面代码中，“大”的 Unicode 码点是 22823，“小”是 23567，因此返回 <code>false</code>。</p><h2 id="非相等运算符-非字符串的比较" tabindex="-1"><a class="header-anchor" href="#非相等运算符-非字符串的比较" aria-hidden="true">#</a> 非相等运算符: 非字符串的比较</h2><p>如果两个运算子之中，至少有一个不是字符串，需要分成以下两种情况。</p><h3 id="原始类型值" tabindex="-1"><a class="header-anchor" href="#原始类型值" aria-hidden="true">#</a> 原始类型值</h3><p>如果两个运算子都是原始类型的值，则是先转成数值再比较。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">5</span> <span class="token operator">&gt;</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token comment">// 等同于 5 &gt; Number(&#39;4&#39;)</span>\n<span class="token comment">// 即 5 &gt; 4</span>\n\n<span class="token boolean">true</span> <span class="token operator">&gt;</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token comment">// 等同于 Number(true) &gt; Number(false)</span>\n<span class="token comment">// 即 1 &gt; 0</span>\n\n<span class="token number">2</span> <span class="token operator">&gt;</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token comment">// 等同于 2 &gt; Number(true)</span>\n<span class="token comment">// 即 2 &gt; 1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，字符串和布尔值都会先转成数值，再进行比较。</p><p>这里需要注意与 <code>NaN</code> 的比较。任何值(包括 <code>NaN</code> 本身)与 <code>NaN</code> 比较，返回的都是 <code>false</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">&gt;</span> <span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token number">1</span> <span class="token operator">&lt;=</span> <span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token string">&quot;1&quot;</span> <span class="token operator">&gt;</span> <span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token string">&quot;1&quot;</span> <span class="token operator">&lt;=</span> <span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token number">NaN</span> <span class="token operator">&gt;</span> <span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token number">NaN</span> <span class="token operator">&lt;=</span> <span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre></div><h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h3><p>如果运算子是对象，会转为原始类型的值，再进行比较。</p><p>对象转换成原始类型的值，算法是先调用 <code>valueOf</code> 方法；如果返回的还是对象，再接着调用 <code>toString</code> 方法，详细解释参见《数据类型的转换》一章。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nx <span class="token operator">&gt;</span> <span class="token string">&quot;11&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token comment">// 等同于 [2].valueOf().toString() &gt; &#39;11&#39;</span>\n<span class="token comment">// 即 &#39;2&#39; &gt; &#39;11&#39;</span>\n\nx<span class="token punctuation">.</span><span class="token function-variable function">valueOf</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nx <span class="token operator">&gt;</span> <span class="token string">&quot;11&quot;</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token comment">// 等同于 [2].valueOf() &gt; &#39;11&#39;</span>\n<span class="token comment">// 即 &#39;1&#39; &gt; &#39;11&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两个对象之间的比较也是如此。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// true</span>\n<span class="token comment">// 等同于 [2].valueOf().toString() &gt; [1].valueOf().toString()</span>\n<span class="token comment">// 即 &#39;2&#39; &gt; &#39;1&#39;</span>\n\n<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span> <span class="token comment">// true</span>\n<span class="token comment">// 等同于 [2].valueOf().toString() &gt; [11].valueOf().toString()</span>\n<span class="token comment">// 即 &#39;2&#39; &gt; &#39;11&#39;</span>\n\n<span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token operator">&gt;=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token comment">// true</span>\n<span class="token comment">// 等同于 { x: 2 }.valueOf().toString() &gt;= { x: 1 }.valueOf().toString()</span>\n<span class="token comment">// 即 &#39;[object Object]&#39; &gt;= &#39;[object Object]&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="严格相等运算符" tabindex="-1"><a class="header-anchor" href="#严格相等运算符" aria-hidden="true">#</a> 严格相等运算符</h2><p>JavaScript 提供两种相等运算符: <code>==</code>和<code>===</code>。</p><p>简单说，它们的区别是相等运算符(<code>==</code>)比较两个值是否相等，严格相等运算符(<code>===</code>)比较它们是否为“同一个值”。如果两个值不是同一类型，严格相等运算符(<code>===</code>)直接返回 <code>false</code>，而相等运算符(<code>==</code>)会将它们转换成同一个类型，再用严格相等运算符进行比较。</p><p>本节介绍严格相等运算符的算法。</p><h3 id="不同类型的值" tabindex="-1"><a class="header-anchor" href="#不同类型的值" aria-hidden="true">#</a> 不同类型的值</h3><p>如果两个值的类型不同，直接返回 <code>false</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">===</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token boolean">true</span> <span class="token operator">===</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre></div><p>上面代码比较数值的 <code>1</code> 与字符串的“1”、布尔值的 <code>true</code> 与字符串 <code>&quot;true&quot;</code>，因为类型不同，结果都是 <code>false</code>。</p><h3 id="同一类的原始类型值" tabindex="-1"><a class="header-anchor" href="#同一类的原始类型值" aria-hidden="true">#</a> 同一类的原始类型值</h3><p>同一类型的原始类型的值(数值、字符串、布尔值)比较时，值相同就返回 <code>true</code>，值不同就返回 <code>false</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">===</span> <span class="token number">0x1</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre></div><p>上面代码比较十进制的 <code>1</code> 与十六进制的 <code>1</code>，因为类型和值都相同，返回 <code>true</code>。</p><p>需要注意的是，<code>NaN</code> 与任何值都不相等(包括自身)。另外，正 <code>0</code> 等于负 <code>0</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token number">NaN</span> <span class="token operator">===</span>\n  <span class="token number">NaN</span> <span class="token operator">+</span> <span class="token comment">// false</span>\n    <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">===</span>\n  <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre></div><h3 id="复合类型值" tabindex="-1"><a class="header-anchor" href="#复合类型值" aria-hidden="true">#</a> 复合类型值</h3><p>两个复合类型(对象、数组、函数)的数据比较时，不是比较它们的值是否相等，而是比较它们是否指向同一个地址。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">===</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// false</span>\n<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// false</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">===</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// false</span>\n</code></pre></div><p>上面代码分别比较两个空对象、两个空数组、两个空函数，结果都是不相等。原因是对于复合类型的值，严格相等运算比较的是，它们是否引用同一个内存地址，而运算符两边的空对象、空数组、空函数的值，都存放在不同的内存地址，结果当然是 <code>false</code>。</p><p>如果两个变量引用同一个对象，则它们相等。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> v1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> v2 <span class="token operator">=</span> v1<span class="token punctuation">;</span>\n\nv1 <span class="token operator">===</span> v2<span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre></div><p>注意，对于两个对象的比较，严格相等运算符比较的是地址，而大于或小于运算符比较的是值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nobj1 <span class="token operator">&gt;</span> obj2<span class="token punctuation">;</span> <span class="token comment">// false</span>\nobj1 <span class="token operator">&lt;</span> obj2<span class="token punctuation">;</span> <span class="token comment">// false</span>\nobj1 <span class="token operator">===</span> obj2<span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre></div><p>上面的三个比较，前两个比较的是值，最后一个比较的是地址，所以都返回 <code>false</code>。</p><h3 id="undefined-和-null" tabindex="-1"><a class="header-anchor" href="#undefined-和-null" aria-hidden="true">#</a> undefined 和 null</h3><p><code>undefined</code> 和 <code>null</code> 与自身严格相等。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">undefined</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre></div><p>由于变量声明后默认值是 <code>undefined</code>，因此两个只声明未赋值的变量是相等的。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> v1<span class="token punctuation">;</span>\n<span class="token keyword">let</span> v2<span class="token punctuation">;</span>\n\nv1 <span class="token operator">===</span> v2<span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre></div><h2 id="严格不相等运算符" tabindex="-1"><a class="header-anchor" href="#严格不相等运算符" aria-hidden="true">#</a> 严格不相等运算符</h2><p>严格相等运算符有一个对应的“严格不相等运算符”(<code>!==</code>)，它的算法就是先求严格相等运算符的结果，然后返回相反值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">!==</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token comment">// 等同于</span>\n<span class="token operator">!</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">===</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>上面代码中，感叹号<code>!</code>是求出后面表达式的相反值。</p><h2 id="相等运算符" tabindex="-1"><a class="header-anchor" href="#相等运算符" aria-hidden="true">#</a> 相等运算符</h2><p>相等运算符用来比较相同类型的数据时，与严格相等运算符完全一样。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">==</span> <span class="token number">1.0</span><span class="token punctuation">;</span>\n<span class="token comment">// 等同于</span>\n<span class="token number">1</span> <span class="token operator">===</span> <span class="token number">1.0</span><span class="token punctuation">;</span>\n</code></pre></div><p>比较不同类型的数据时，相等运算符会先将数据进行类型转换，然后再用严格相等运算符比较。下面分成四种情况，讨论不同类型的值互相比较的规则。</p><h3 id="原始类型值-1" tabindex="-1"><a class="header-anchor" href="#原始类型值-1" aria-hidden="true">#</a> 原始类型值</h3><p>原始类型的值会转换成数值再进行比较。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token comment">// 等同于 1 === Number(true)</span>\n\n<span class="token number">0</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token comment">// 等同于 0 === Number(false)</span>\n\n<span class="token number">2</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token comment">// 等同于 2 === Number(true)</span>\n\n<span class="token number">2</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token comment">// 等同于 2 === Number(false)</span>\n\n<span class="token string">&quot;true&quot;</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token comment">// 等同于 Number(&#39;true&#39;) === Number(true)</span>\n<span class="token comment">// 等同于 NaN === 1</span>\n\n<span class="token string">&quot;&quot;</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token comment">// 等同于 Number(&#39;&#39;) === 0</span>\n<span class="token comment">// 等同于 0 === 0</span>\n\n<span class="token string">&quot;&quot;</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token comment">// 等同于 Number(&#39;&#39;) === Number(false)</span>\n<span class="token comment">// 等同于 0 === 0</span>\n\n<span class="token string">&quot;1&quot;</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token comment">// 等同于 Number(&#39;1&#39;) === Number(true)</span>\n<span class="token comment">// 等同于 1 === 1</span>\n\n<span class="token string">&quot;\\n  123  \\t&quot;</span> <span class="token operator">==</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token comment">// 因为字符串转为数字时，省略前置和后置的空格</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码将字符串和布尔值都转为数值，然后再进行比较。具体的字符串与布尔值的类型转换规则，参见《数据类型转换》一章。</p><h3 id="对象与原始类型值比较" tabindex="-1"><a class="header-anchor" href="#对象与原始类型值比较" aria-hidden="true">#</a> 对象与原始类型值比较</h3><p>对象(这里指广义的对象，包括数组和函数)与原始类型的值比较时，对象转换成原始类型的值，再进行比较。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 对象与数值比较时，对象转为数值</span>\n<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token comment">// 等同于 Number([1]) == 1</span>\n\n<span class="token comment">// 对象与字符串比较时，对象转为字符串</span>\n<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token comment">// 等同于 String([1]) == &#39;1&#39;</span>\n<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;1,2&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token comment">// 等同于 String([1, 2]) == &#39;1,2&#39;</span>\n\n<span class="token comment">// 对象与布尔值比较时，两边都转为数值</span>\n<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token comment">// 等同于 Number([1]) == Number(true)</span>\n<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token comment">// 等同于 Number([2]) == Number(true)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，数组 <code>[1]</code> 与数值进行比较，会先转成数值，再进行比较；与字符串进行比较，会先转成字符串，再进行比较；与布尔值进行比较，对象和布尔值都会先转成数值，再进行比较。</p><h3 id="undefined-和-null-1" tabindex="-1"><a class="header-anchor" href="#undefined-和-null-1" aria-hidden="true">#</a> undefined 和 null</h3><p><code>undefined</code> 和 <code>null</code> 与其他类型的值比较时，结果都为 <code>false</code>，它们互相比较时结果为 <code>true</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token boolean">false</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n\n<span class="token number">0</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token number">0</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n\n<span class="token keyword">undefined</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre></div><h3 id="相等运算符的缺点" tabindex="-1"><a class="header-anchor" href="#相等运算符的缺点" aria-hidden="true">#</a> 相等运算符的缺点</h3><p>相等运算符隐藏的类型转换，会带来一些违反直觉的结果。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">0</span> <span class="token operator">==</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token number">0</span> <span class="token operator">==</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n\n<span class="token number">2</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token number">2</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n\n<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token string">&quot;false&quot;</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n\n<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n\n<span class="token string">&quot; \\t\\r\\n &quot;</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这些表达式都不同于直觉，很容易出错。因此建议不要使用相等运算符(<code>==</code>)，最好只使用严格相等运算符(<code>===</code>)。</p><h2 id="不相等运算符" tabindex="-1"><a class="header-anchor" href="#不相等运算符" aria-hidden="true">#</a> 不相等运算符</h2><p>相等运算符有一个对应的“不相等运算符”(<code>!=</code>)，它的算法就是先求相等运算符的结果，然后返回相反值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">!=</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n\n<span class="token comment">// 等同于</span>\n<span class="token operator">!</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">==</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',82),o={},c=(0,a(11164).Z)(o,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)("div",null,[t,(0,e.kq)(" more "),p])}]])},11164:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},86080:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-c1f11850","path":"/code/language/js/operators/comparison.html","title":"比较运算符","lang":"zh-CN","frontmatter":{"title":"比较运算符","icon":"compare","date":"2019-09-26T00:00:00.000Z","category":["JavaScript"],"description":"JavaScript 一共提供了 8 个比较运算符。 &gt; 大于运算符 &lt; 小于运算符 &lt;= 小于或等于运算符 &gt;= 大于或等于运算符 == 相等运算符 === 严格相等运算符 != 不相等运算符 !== 严格不相等运算符 这八个比较运算符分成两类: 相等比较和非相等比较。两者的规则是不一样的，对于非相等的比较，算法是先看两个运算子是否都是字符串，如果是的，就按照字典顺序比较(实际上是比较 Unicode 码点)；否则，将两个运算子都转成数值，再比较数值的大小。","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/js/operators/comparison.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"比较运算符"}],["meta",{"property":"og:description","content":"JavaScript 一共提供了 8 个比较运算符。 &gt; 大于运算符 &lt; 小于运算符 &lt;= 小于或等于运算符 &gt;= 大于或等于运算符 == 相等运算符 === 严格相等运算符 != 不相等运算符 !== 严格不相等运算符 这八个比较运算符分成两类: 相等比较和非相等比较。两者的规则是不一样的，对于非相等的比较，算法是先看两个运算子是否都是字符串，如果是的，就按照字典顺序比较(实际上是比较 Unicode 码点)；否则，将两个运算子都转成数值，再比较数值的大小。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-09-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"<p>JavaScript 一共提供了 8 个比较运算符。</p>\\n<ul>\\n<li><code v-pre>&gt;</code> 大于运算符</li>\\n<li><code v-pre>&lt;</code> 小于运算符</li>\\n<li><code v-pre>&lt;=</code> 小于或等于运算符</li>\\n<li><code v-pre>&gt;=</code> 大于或等于运算符</li>\\n<li><code v-pre>==</code> 相等运算符</li>\\n<li><code v-pre>===</code> 严格相等运算符</li>\\n<li><code v-pre>!=</code> 不相等运算符</li>\\n<li><code v-pre>!==</code> 严格不相等运算符</li>\\n</ul>\\n<p>这八个比较运算符分成两类: 相等比较和非相等比较。两者的规则是不一样的，对于非相等的比较，算法是先看两个运算子是否都是字符串，如果是的，就按照字典顺序比较(实际上是比较 Unicode 码点)；否则，将两个运算子都转成数值，再比较数值的大小。</p>\\n","headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"非相等运算符: 字符串的比较","slug":"非相等运算符-字符串的比较","link":"#非相等运算符-字符串的比较","children":[]},{"level":2,"title":"非相等运算符: 非字符串的比较","slug":"非相等运算符-非字符串的比较","link":"#非相等运算符-非字符串的比较","children":[{"level":3,"title":"原始类型值","slug":"原始类型值","link":"#原始类型值","children":[]},{"level":3,"title":"对象","slug":"对象","link":"#对象","children":[]}]},{"level":2,"title":"严格相等运算符","slug":"严格相等运算符","link":"#严格相等运算符","children":[{"level":3,"title":"不同类型的值","slug":"不同类型的值","link":"#不同类型的值","children":[]},{"level":3,"title":"同一类的原始类型值","slug":"同一类的原始类型值","link":"#同一类的原始类型值","children":[]},{"level":3,"title":"复合类型值","slug":"复合类型值","link":"#复合类型值","children":[]},{"level":3,"title":"undefined 和 null","slug":"undefined-和-null","link":"#undefined-和-null","children":[]}]},{"level":2,"title":"严格不相等运算符","slug":"严格不相等运算符","link":"#严格不相等运算符","children":[]},{"level":2,"title":"相等运算符","slug":"相等运算符","link":"#相等运算符","children":[{"level":3,"title":"原始类型值","slug":"原始类型值-1","link":"#原始类型值-1","children":[]},{"level":3,"title":"对象与原始类型值比较","slug":"对象与原始类型值比较","link":"#对象与原始类型值比较","children":[]},{"level":3,"title":"undefined 和 null","slug":"undefined-和-null-1","link":"#undefined-和-null-1","children":[]},{"level":3,"title":"相等运算符的缺点","slug":"相等运算符的缺点","link":"#相等运算符的缺点","children":[]}]},{"level":2,"title":"不相等运算符","slug":"不相等运算符","link":"#不相等运算符","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":7}]},"readingTime":{"minutes":7.32,"words":2196},"filePathRelative":"code/language/js/operators/comparison.md","localizedDate":"2019年9月26日"}')}}]);