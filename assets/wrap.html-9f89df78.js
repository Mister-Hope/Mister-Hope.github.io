import{ac as s,G as a,H as e,L as o,ae as n}from"./framework-931f0218.js";const t={},p=n(`<p>除了类型外，JavaScript 还提供了包装对象，熟悉 Java 就会了解 <code>int</code> 和 <code>Integer</code> 的关系。</p><p><code>number</code>、<code>boolean</code> 和 <code>string</code> 都有包装对象。没错，在 JavaScript 中，字符串也区分 <code>string</code> 类型和它的包装类型。包装对象用 <code>new</code> 创建:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123,生成了新的包装类型</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true,生成了新的包装类型</span>
<span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;str&#39;,生成了新的包装类型</span>
</code></pre></div>`,3),c=n(`<p>虽然包装对象看上去和原来的值一模一样，显示出来也是一模一样，但他们的类型已经变为 <code>object</code> 了! 所以，包装对象和原始值用 <code>===</code> 比较会返回 <code>false</code>:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;str&quot;</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre></div><p>所以不要使用包装对象! 尤其是针对 <code>string</code> 类型!!!</p><p>如果我们在使用 <code>Number</code>、<code>Boolean</code> 和 <code>String</code> 时，没有写 new 会发生什么情况?</p><p>此时，<code>Number()</code>、<code>Boolean()</code> 和 <code>String()</code> 被当做普通函数，把任何类型的数据转换为 <code>number</code>、<code>boolean</code> 和 <code>string</code> 类型(注意不是其包装类型):</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123，相当于parseInt()或parseFloat()</span>
<span class="token keyword">typeof</span> n<span class="token punctuation">;</span> <span class="token comment">// &#39;number&#39;</span>

<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">typeof</span> b<span class="token punctuation">;</span> <span class="token comment">// &#39;boolean&#39;</span>

<span class="token keyword">const</span> b2 <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token string">&quot;false&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true! &#39;false&#39;字符串转换结果为true!因为它是非空字符串!</span>
<span class="token keyword">const</span> b3 <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token number">123.45</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;123.45&#39;</span>
<span class="token keyword">typeof</span> s<span class="token punctuation">;</span> <span class="token comment">// &#39;string&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结:</p><ul><li><p>不要使用 <code>new Number()</code>、<code>new Boolean()</code>、<code>new String()</code> 创建包装对象；</p></li><li><p>用 <code>parseInt()</code> 或 <code>parseFloat()</code> 来转换任意类型到 <code>number</code>；</p></li><li><p>用 <code>String()</code> 来转换任意类型到 <code>string</code>，或者直接调用某个对象的 <code>toString()</code> 方法；</p></li><li><p>通常不必把任意类型转换为 <code>boolean</code> 再判断，因为可以直接写 <code>if (myVar) {...}</code>；</p></li><li><p><code>typeof</code> 操作符可以判断出 <code>number</code>、<code>boolean</code>、<code>string</code>、<code>function</code> 和 <code>undefined</code>；</p></li><li><p>判断 <code>Array</code> 要使用 <code>Array.isArray(arr)</code>；</p></li><li><p>判断 <code>null</code> 请使用 <code>myVar === null</code>；</p></li><li><p>判断某个全局变量是否存在用 <code>typeof window.myVar === &#39;undefined&#39;</code>；</p></li><li><p>函数内部判断某个变量是否存在用 <code>typeof myVar === &#39;undefined&#39;</code>。</p></li><li><p><code>null</code> 和 <code>undefined</code> 没有 <code>toString()</code> 方法，<code>number</code> 对象调用 <code>toString()</code> 报 <code>SyntaxError</code>。虽然 <code>null</code> 还伪装成了 <code>object</code> 类型。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">123.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// SyntaxError</span>
<span class="token comment">// 遇到这种情况，要特殊处理一下:</span>

<span class="token number">123.</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;123&#39;, 注意是两个点!</span>
<span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;123&#39;</span>
</code></pre></div></li></ul>`,8);function l(u,d){return a(),e("div",null,[p,o(" more "),c])}const r=s(t,[["render",l],["__file","wrap.html.vue"]]);export{r as default};
