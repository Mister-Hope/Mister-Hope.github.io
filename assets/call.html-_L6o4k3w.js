import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,b as o}from"./app-DHOHoluL.js";const e={},l=o(`<p>调用函数时，要使用圆括号运算符。圆括号之中，可以加入函数的参数。</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">abs</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">10</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 返回 10</span></span>
<span class="line"><span style="color:#88C0D0;">abs</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">-</span><span style="color:#B48EAD;">9</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 返回 9</span></span></code></pre></div><p>由于 JavaScript 允许传入任意个参数而不影响调用，因此传入的参数比定义的参数多也没有问题，虽然函数内部并不需要这些参数:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">abs</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">10</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">blablabla</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 返回 10</span></span>
<span class="line"><span style="color:#88C0D0;">abs</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">-</span><span style="color:#B48EAD;">9</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">haha</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">hehe</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#81A1C1;"> null</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 返回 9</span></span></code></pre></div><p>传入的参数比定义的少也没有问题:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">abs</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 返回 NaN</span></span></code></pre></div><p>此时 <code>abs(x)</code> 函数的参数 x 将收到 <code>undefined</code>，计算结果为 <code>NaN</code>。</p><p>要避免收到 <code>undefined</code>，可以对参数进行检查:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> abs</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">x</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#81A1C1;">typeof</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;"> !==</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">number</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">) </span><span style="color:#81A1C1;">throw</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">Not a number</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">  if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">x</span><span style="color:#81A1C1;"> &gt;=</span><span style="color:#B48EAD;"> 0</span><span style="color:#D8DEE9FF;">) </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9;"> x</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">  else</span><span style="color:#81A1C1;"> return</span><span style="color:#81A1C1;"> -</span><span style="color:#D8DEE9;">x</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span></code></pre></div><h2 id="递归调用" tabindex="-1"><a class="header-anchor" href="#递归调用"><span>递归调用</span></a></h2><p>函数可以调用自身，这就是递归(recursion)。下面就是通过递归，计算斐波那契数列的代码。</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> fib</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">num</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#81A1C1;">  if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">num</span><span style="color:#81A1C1;"> ===</span><span style="color:#B48EAD;"> 0</span><span style="color:#D8DEE9FF;">) </span><span style="color:#81A1C1;">return</span><span style="color:#B48EAD;"> 0</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">  if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">num</span><span style="color:#81A1C1;"> ===</span><span style="color:#B48EAD;"> 1</span><span style="color:#D8DEE9FF;">) </span><span style="color:#81A1C1;">return</span><span style="color:#B48EAD;"> 1</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">  return</span><span style="color:#88C0D0;"> fib</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">num</span><span style="color:#81A1C1;"> -</span><span style="color:#B48EAD;"> 2</span><span style="color:#D8DEE9FF;">) </span><span style="color:#81A1C1;">+</span><span style="color:#88C0D0;"> fib</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">num</span><span style="color:#81A1C1;"> -</span><span style="color:#B48EAD;"> 1</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">fib</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">6</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 8</span></span></code></pre></div><p>上面代码中，<code>fib</code> 函数内部又调用了 <code>fib</code>，计算得到斐波那契数列的第 6 个元素是 8。</p>`,13),p=[l];function t(c,r){return a(),n("div",null,p)}const E=s(e,[["render",t],["__file","call.html.vue"]]),d=JSON.parse('{"path":"/code/language/js/function/call.html","title":"函数的调用","lang":"zh-CN","frontmatter":{"title":"函数的调用","icon":"call","date":"2019-10-02T00:00:00.000Z","category":"JavaScript","description":"调用函数时，要使用圆括号运算符。圆括号之中，可以加入函数的参数。 由于 JavaScript 允许传入任意个参数而不影响调用，因此传入的参数比定义的参数多也没有问题，虽然函数内部并不需要这些参数: 传入的参数比定义的少也没有问题: 此时 abs(x) 函数的参数 x 将收到 undefined，计算结果为 NaN。 要避免收到 undefined，可以...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/js/function/call.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"函数的调用"}],["meta",{"property":"og:description","content":"调用函数时，要使用圆括号运算符。圆括号之中，可以加入函数的参数。 由于 JavaScript 允许传入任意个参数而不影响调用，因此传入的参数比定义的参数多也没有问题，虽然函数内部并不需要这些参数: 传入的参数比定义的少也没有问题: 此时 abs(x) 函数的参数 x 将收到 undefined，计算结果为 NaN。 要避免收到 undefined，可以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2019-10-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"函数的调用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-10-02T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-06T16:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"递归调用","slug":"递归调用","link":"#递归调用","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4}]},"readingTime":{"minutes":0.98,"words":294},"filePathRelative":"code/language/js/function/call.md","localizedDate":"2019年10月2日","excerpt":"","autoDesc":true}');export{E as comp,d as data};
