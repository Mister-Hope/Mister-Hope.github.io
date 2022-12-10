import{ac as a,M as t,N as p,U as o,L as n,$ as s,ae as e}from"./framework-6fc096bd.js";const c={},u=n("p",null,[n("code",null,"JSON"),s(" 是 "),n("code",null,"JavaScript Object Notation"),s(" 的缩写，它是一种数据交换格式。")],-1),l=e(`<p>在 JSON 出现之前，大家一直用 XML 来传递数据。因为 XML 是一种纯文本格式，所以它适合在网络上交换数据。XML 本身不算复杂，但是，加上 DTD、XSD、XPath、XSLT 等一大堆复杂的规范以后，任何正常的软件开发人员碰到 XML 都会感觉头大了，最后大家发现，即使您努力钻研几个月，也未必搞得清楚 XML 的规范。</p><p>终于，在 2002 年的一天，道格拉斯·克罗克福特 (Douglas Crockford) 同学为了拯救深陷水深火热同时又被某几个巨型软件企业长期愚弄的软件工程师，发明了 JSON 这种超轻量级的数据交换格式。</p><p>道格拉斯同学长期担任雅虎的高级架构师，自然钟情于 JavaScript。他设计的 JSON 实际上是 JavaScript 的一个子集。在 JSON 中，一共就这么几种数据类型:</p><ul><li>number: 和 JavaScript 的 number 完全一致；</li><li>boolean: 就是 JavaScript 的 <code>true</code> 或 <code>false；</code></li><li>string: 就是 JavaScript 的 string；</li><li>null: 就是 JavaScript 的 <code>null</code>；</li><li>array: 就是 JavaScript 的 Array 表示方式—— <code>[]</code>；</li><li>object: 就是 JavaScript 的 <code>{ ... }</code> 表示方式。</li></ul><p>以及上面的任意组合。</p><p>并且，JSON 还定死了字符集必须是 UTF-8，表示多语言就没有问题了。为了统一解析，JSON 的字符串规定必须用双引号 <code>&quot;&quot;</code>，Object 的键也必须用双引号 <code>&quot;&quot;</code>。</p><p>由于 JSON 非常简单，很快就风靡 Web 世界，并且成为 ECMA 标准。几乎所有编程语言都有解析 JSON 的库，而在 JavaScript 中，我们可以直接使用 JSON，因为 JavaScript 内置了 JSON 的解析。</p><p>把任何 JavaScript 对象变成 JSON，就是把这个对象序列化成一个 JSON 格式的字符串，这样才能够通过网络传递给其他计算机。</p><p>如果我们收到一个 JSON 格式的字符串，只需要把它反序列化成一个 JavaScript 对象，就可以在 JavaScript 中直接使用这个对象了。</p><h2 id="序列化" tabindex="-1"><a class="header-anchor" href="#序列化" aria-hidden="true">#</a> 序列化</h2><p>让我们先把小明这个对象序列化成 JSON 格式的字符串:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1.65</span><span class="token punctuation">,</span>
  <span class="token literal-property property">grade</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;middle-school&quot;</span><span class="token operator">:</span> <span class="token string">&#39;&quot;W3C&quot; Middle School&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">skills</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Java&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Python&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Lisp&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>xiaoming<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要输出得好看一些，可以加上参数，按缩进输出:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>xiaoming<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;  &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>结果:</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">1.65</span><span class="token punctuation">,</span>
  <span class="token property">&quot;grade&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;middle-school&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\&quot;W3C\\&quot; Middle School&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;skills&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Java&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Python&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Lisp&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>第二个参数用于控制如何筛选对象的键值，如果我们只想输出指定的属性，可以传入 <code>Array</code>:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>xiaoming<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;skills&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;  &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>结果:</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;skills&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Java&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Python&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Lisp&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>还可以传入一个函数，这样对象的每个键值对都会被函数先处理:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">convert</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>xiaoming<span class="token punctuation">,</span> convert<span class="token punctuation">,</span> <span class="token string">&quot;  &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>上面的代码把所有属性值都变成大写:</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">1.65</span><span class="token punctuation">,</span>
  <span class="token property">&quot;grade&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;middle-school&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\&quot;W3C\\&quot; MIDDLE SCHOOL&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;skills&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;JAVASCRIPT&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;JAVA&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PYTHON&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;LISP&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>如果我们还想要精确控制如何序列化小明，可以给 <code>xiaoming</code> 定义一个 <code>toJSON()</code> 的方法，直接返回 JSON 应该序列化的数据:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1.65</span><span class="token punctuation">,</span>
  <span class="token literal-property property">grade</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;middle-school&quot;</span><span class="token operator">:</span> <span class="token string">&#39;&quot;W3C&quot; Middle School&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">skills</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Java&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Python&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Lisp&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// 只输出name和age，并且改变了key:</span>
      <span class="token literal-property property">Name</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span>
      <span class="token literal-property property">Age</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>xiaoming<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;{&quot;Name&quot;:&quot;小明&quot;,&quot;Age&quot;:14}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反序列化" tabindex="-1"><a class="header-anchor" href="#反序列化" aria-hidden="true">#</a> 反序列化</h2><p>拿到一个 JSON 格式的字符串，我们直接用 <code>JSON.parse()</code> 把它变成一个 JavaScript 对象:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;[1,2,3,true]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3, true]</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&#39;{&quot;name&quot;:&quot;小明&quot;,&quot;age&quot;:14}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Object {name: &#39;小明&#39;, age: 14}</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;123.45&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123.45</span>
</code></pre></div><p><code>JSON.parse()</code> 还可以接收一个函数，用来转换解析出的属性:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&#39;{&quot;name&quot;:&quot;小明&quot;,&quot;age&quot;:14}&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  key <span class="token operator">===</span> <span class="token string">&quot;name&quot;</span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">同学</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> value
<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {name: &#39;小明同学&#39;, age: 14}</span>
</code></pre></div><p>在 JavaScript 中使用 JSON，就是这么简单!</p>`,32);function i(r,k){return t(),p("div",null,[u,o(" more "),l])}const q=a(c,[["render",i],["__file","JSON.html.vue"]]);export{q as default};
