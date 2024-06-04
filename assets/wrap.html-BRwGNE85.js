import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,d as e,b as i}from"./app-r406UCC8.js";const n={},l=i(`<p>除了类型外，JavaScript 还提供了包装对象，熟悉 Java 就会了解 <code>int</code> 和 <code>Integer</code> 的关系。</p><p><code>number</code>、<code>boolean</code> 和 <code>string</code> 都有包装对象。没错，在 JavaScript 中，字符串也区分 <code>string</code> 类型和它的包装类型。包装对象用 <code>new</code> 创建:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> n</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">123</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 123,生成了新的包装类型</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> b</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// true,生成了新的包装类型</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> s</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;str&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// &#39;str&#39;,生成了新的包装类型</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),h=i(`<p>虽然包装对象看上去和原来的值一模一样，显示出来也是一模一样，但他们的类型已经变为 <code>object</code> 了! 所以，包装对象和原始值用 <code>===</code> 比较会返回 <code>false</code>:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">typeof</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">123</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// &#39;object&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">123</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 123</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">typeof</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// &#39;object&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">typeof</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;str&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// &#39;object&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;str&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;str&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以不要使用包装对象! 尤其是针对 <code>string</code> 类型!!!</p><p>如果我们在使用 <code>Number</code>、<code>Boolean</code> 和 <code>String</code> 时，没有写 new 会发生什么情况?</p><p>此时，<code>Number()</code>、<code>Boolean()</code> 和 <code>String()</code> 被当做普通函数，把任何类型的数据转换为 <code>number</code>、<code>boolean</code> 和 <code>string</code> 类型(注意不是其包装类型):</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> n</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;123&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 123，相当于parseInt()或parseFloat()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// &#39;number&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> b</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// &#39;boolean&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> b2</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// true! &#39;false&#39;字符串转换结果为true!因为它是非空字符串!</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> b3</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> s</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">123.45</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// &#39;123.45&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> s</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// &#39;string&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结:</p><ul><li><p>不要使用 <code>new Number()</code>、<code>new Boolean()</code>、<code>new String()</code> 创建包装对象；</p></li><li><p>用 <code>parseInt()</code> 或 <code>parseFloat()</code> 来转换任意类型到 <code>number</code>；</p></li><li><p>用 <code>String()</code> 来转换任意类型到 <code>string</code>，或者直接调用某个对象的 <code>toString()</code> 方法；</p></li><li><p>通常不必把任意类型转换为 <code>boolean</code> 再判断，因为可以直接写 <code>if (myVar) {...}</code>；</p></li><li><p><code>typeof</code> 操作符可以判断出 <code>number</code>、<code>boolean</code>、<code>string</code>、<code>function</code> 和 <code>undefined</code>；</p></li><li><p>判断 <code>Array</code> 要使用 <code>Array.isArray(arr)</code>；</p></li><li><p>判断 <code>null</code> 请使用 <code>myVar === null</code>；</p></li><li><p>判断某个全局变量是否存在用 <code>typeof window.myVar === &#39;undefined&#39;</code>；</p></li><li><p>函数内部判断某个变量是否存在用 <code>typeof myVar === &#39;undefined&#39;</code>。</p></li><li><p><code>null</code> 和 <code>undefined</code> 没有 <code>toString()</code> 方法，<code>number</code> 对象调用 <code>toString()</code> 报 <code>SyntaxError</code>。虽然 <code>null</code> 还伪装成了 <code>object</code> 类型。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">123.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// SyntaxError</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 遇到这种情况，要特殊处理一下:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">123.</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// &#39;123&#39;, 注意是两个点!</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">123</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// &#39;123&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,8);function k(p,r){return a(),t("div",null,[l,e(" more "),h])}const c=s(n,[["render",k],["__file","wrap.html.vue"]]),g=JSON.parse(`{"path":"/code/language/js/object/wrap.html","title":"包装对象","lang":"zh-CN","frontmatter":{"title":"包装对象","icon":"wrap","date":"2019-10-11T00:00:00.000Z","category":"JavaScript","description":"除了类型外，JavaScript 还提供了包装对象，熟悉 Java 就会了解 int 和 Integer 的关系。 number、boolean 和 string 都有包装对象。没错，在 JavaScript 中，字符串也区分 string 类型和它的包装类型。包装对象用 new 创建:","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/js/object/wrap.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"包装对象"}],["meta",{"property":"og:description","content":"除了类型外，JavaScript 还提供了包装对象，熟悉 Java 就会了解 int 和 Integer 的关系。 number、boolean 和 string 都有包装对象。没错，在 JavaScript 中，字符串也区分 string 类型和它的包装类型。包装对象用 new 创建:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2019-10-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"包装对象\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-10-11T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-06T16:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5}]},"readingTime":{"minutes":1.92,"words":575},"filePathRelative":"code/language/js/object/wrap.md","localizedDate":"2019年10月11日","excerpt":"<p>除了类型外，JavaScript 还提供了包装对象，熟悉 Java 就会了解 <code>int</code> 和 <code>Integer</code> 的关系。</p>\\n<p><code>number</code>、<code>boolean</code> 和 <code>string</code> 都有包装对象。没错，在 JavaScript 中，字符串也区分 <code>string</code> 类型和它的包装类型。包装对象用 <code>new</code> 创建:</p>\\n<div class=\\"language-js line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"js\\" data-title=\\"js\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">const</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E5C07B\\"> n</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> new</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> Number</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">123</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">); </span><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">// 123,生成了新的包装类型</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">const</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E5C07B\\"> b</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> new</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> Boolean</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">true</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">); </span><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">// true,生成了新的包装类型</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">const</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E5C07B\\"> s</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> new</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> String</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"str\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">); </span><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">// 'str',生成了新的包装类型</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{c as comp,g as data};
