import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as p,f as c,d as n,e as a,a as l,w as r,b as i}from"./app-S62fdHqc.js";const u={},d=n("p",null,[a("布尔值代表“真”和“假”两个状态。“真”用关键字 "),n("code",null,"true"),a(" 表示，“假”用关键字 "),n("code",null,"false"),a(" 表示。布尔值只有这两个值。")],-1),k=i(`<p>下列运算符会返回布尔值:</p><ul><li>前置逻辑运算符: <code>!</code> (Not)</li><li>相等运算符: <code>===</code>，<code>!==</code>，<code>==</code>，<code>!=</code></li><li>比较运算符: <code>&gt;</code>，<code>&gt;=</code>，<code>&lt;</code>，<code>&lt;=</code></li></ul><p>如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为 <code>false</code>，其他值都视为 <code>true</code>。</p><ul><li><code>undefined</code></li><li><code>null</code></li><li><code>false</code></li><li><code>0</code></li><li><code>NaN</code></li><li><code>&quot;&quot;</code> 或 <code>&#39;&#39;</code>(空字符串)</li></ul><p>布尔值往往用于程序流程的控制，请看一个例子。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 没有任何输出</span>
</code></pre></div><p>上面代码中，<code>if</code> 命令后面的判断条件，预期应该是一个布尔值，所以 JavaScript 自动将空字符串，转为布尔值 <code>false</code>，导致程序不会进入代码块，所以没有任何输出。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>注意，空数组(<code>[]</code>)和空对象(<code>{}</code>)对应的布尔值，都是 <code>true</code>。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// true</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// true</span>
</code></pre></div></div><h2 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符"><span>比较运算符</span></a></h2><p>当我们对 <code>Number</code> 做比较时，可以通过比较运算符得到一个布尔值:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token number">2</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token number">5</span> <span class="token operator">&gt;=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token number">7</span> <span class="token operator">==</span> <span class="token number">7</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div><p>实际上，JavaScript 允许对任意数据类型做比较:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token boolean">false</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token boolean">false</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre></div><p>要特别注意相等运算符 <code>==</code>。JavaScript 在设计时，有两种比较运算符:</p><ul><li><p>第一种是 <code>==</code> 比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；</p></li><li><p>第二种是 <code>===</code> 比较，它不会自动转换数据类型，如果数据类型不一致，返回 <code>false</code>，如果一致，再比较。</p></li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>由于 JavaScript 这个设计缺陷，不要使用 <code>==</code> 比较，始终坚持使用 <code>===</code> 比较。</p></div><p>另一个例外是 <code>NaN</code> 这个特殊的 <code>Number</code> 与所有其他值都不相等，包括它自己:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre></div><p>唯一能判断 <code>NaN</code> 的方法是通过 <code>isNaN()</code> 函数:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div><p>最后要注意浮点数的相等比较:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre></div><p>这不是 JavaScript 的设计缺陷。因为计算机无法精确表示无限循环小数，浮点数在运算过程中会产生误差。要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">3</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0.0000001</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div><h2 id="布尔运算符" tabindex="-1"><a class="header-anchor" href="#布尔运算符"><span>布尔运算符</span></a></h2><h3 id="与运算符" tabindex="-1"><a class="header-anchor" href="#与运算符"><span>与运算符 <code>&amp;&amp;</code></span></a></h3><p><code>&amp;&amp;</code> 运算是与运算，从左至右运行时，检测到有任一表达式为 <code>false</code> 时，即停止执行输出该表达式的值，否则输出最后一个表达式的值。</p><p>也就是说，只有当所有表达式都为“真”时， <code>&amp;&amp;</code> 才会输出真值。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 这个&amp;&amp;语句计算结果为true</span>
<span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 这个&amp;&amp;语句计算结果为false</span>
<span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 这个&amp;&amp;语句计算结果为false</span>
</code></pre></div><h3 id="或运算符" tabindex="-1"><a class="header-anchor" href="#或运算符"><span>或运算符 <code>||</code></span></a></h3><p><code>||</code> 运算是或运算，从左至右运行时，检测到有任一表达式为 <code>true</code> 时，即停止执行输出该表达式的值，否则输出最后一个表达式的值。</p><p>也就是说，只有当所有表达式都为“假”时， <code>||</code> 才会输出假值。</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token boolean">false</span> <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 这个||语句计算结果为false</span>
<span class="token boolean">true</span> <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 这个||语句计算结果为true</span>
<span class="token boolean">false</span> <span class="token operator">||</span> <span class="token boolean">true</span> <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 这个||语句计算结果为true</span>
</code></pre></div><h3 id="非运算符" tabindex="-1"><a class="header-anchor" href="#非运算符"><span>非运算符 <code>!</code></span></a></h3><p><code>!</code> 运算是非运算，它是一个单目运算符，把 <code>true</code> 变成 <code>false</code>，<code>false</code> 变成 <code>true</code>:</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>!</code> 会等待其后的表达式运算完毕，之后将其转换为 Boolean 后给出一个相反的值。</p></div><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">!</span><span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 结果为false</span>
<span class="token operator">!</span><span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 结果为true</span>
<span class="token operator">!</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 结果为true</span>
</code></pre></div><p>布尔值经常用在条件判断中，比如:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;adult&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">else</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;teenager&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="三元运算符" tabindex="-1"><a class="header-anchor" href="#三元运算符"><span>三元运算符</span></a></h3>`,40);function m(g,h){const s=t("RouteLink");return o(),p("div",null,[d,c(" more "),k,n("p",null,[a("详见 "),l(s,{to:"/code/language/js/guide/condition.html#%E4%B8%89%E5%85%83%E8%BF%90%E7%AE%97%E7%AC%A6"},{default:r(()=>[a("条件判断 → 三元运算符")]),_:1}),a(" 章节")])])}const b=e(u,[["render",m],["__file","boolean.html.vue"]]),j=JSON.parse('{"path":"/code/language/js/guide/boolean.html","title":"布尔值","lang":"zh-CN","frontmatter":{"title":"布尔值","icon":"boolean","category":"JavaScript","date":"2019-09-15T00:00:00.000Z","tag":["快速上手"],"description":"布尔值代表“真”和“假”两个状态。“真”用关键字 true 表示，“假”用关键字 false 表示。布尔值只有这两个值。 下列运算符会返回布尔值: 前置逻辑运算符: ! (Not) 相等运算符: ===，!==，==，!= 比较运算符: >，>=，<，<= 如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/js/guide/boolean.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"布尔值"}],["meta",{"property":"og:description","content":"布尔值代表“真”和“假”两个状态。“真”用关键字 true 表示，“假”用关键字 false 表示。布尔值只有这两个值。 下列运算符会返回布尔值: 前置逻辑运算符: ! (Not) 相等运算符: ===，!==，==，!= 比较运算符: >，>=，<，<= 如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-04-06T05:10:01.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"快速上手"}],["meta",{"property":"article:published_time","content":"2019-09-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-04-06T05:10:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"布尔值\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-15T00:00:00.000Z\\",\\"dateModified\\":\\"2022-04-06T05:10:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"比较运算符","slug":"比较运算符","link":"#比较运算符","children":[]},{"level":2,"title":"布尔运算符","slug":"布尔运算符","link":"#布尔运算符","children":[{"level":3,"title":"与运算符 &&","slug":"与运算符","link":"#与运算符","children":[]},{"level":3,"title":"或运算符 ||","slug":"或运算符","link":"#或运算符","children":[]},{"level":3,"title":"非运算符 !","slug":"非运算符","link":"#非运算符","children":[]},{"level":3,"title":"三元运算符","slug":"三元运算符","link":"#三元运算符","children":[]}]}],"git":{"createdTime":1591204114000,"updatedTime":1649221801000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5},{"name":"Jellower","email":"99652489+Jellower@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.28,"words":985},"filePathRelative":"code/language/js/guide/boolean.md","localizedDate":"2019年9月15日","excerpt":"<p>布尔值代表“真”和“假”两个状态。“真”用关键字 <code>true</code> 表示，“假”用关键字 <code>false</code> 表示。布尔值只有这两个值。</p>\\n","autoDesc":true}');export{b as comp,j as data};
