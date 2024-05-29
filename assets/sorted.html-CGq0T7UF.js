import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as i,b as e}from"./app-C6d_tW6U.js";const o={},n=e(`<h2 id="排序算法" tabindex="-1"><a class="header-anchor" href="#排序算法"><span>排序算法</span></a></h2><p>排序也是在程序中经常用到的算法。无论使用冒泡排序还是快速排序，排序的核心是比较两个元素的大小。如果是数字，我们可以直接比较，但如果是字符串或者两个 dict 呢? 直接比较数学上的大小是没有意义的，因此，比较的过程必须通过函数抽象出来。</p><p>Python 内置的 <code>sorted()</code> 函数就可以对 list 进行排序:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> sorted</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">([</span><span style="color:#005CC5;--shiki-dark:#D19A66;">36</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#005CC5;--shiki-dark:#D19A66;">5</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="color:#005CC5;--shiki-dark:#D19A66;">12</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#005CC5;--shiki-dark:#D19A66;">9</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="color:#005CC5;--shiki-dark:#D19A66;">21</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">])</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="color:#005CC5;--shiki-dark:#D19A66;">21</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="color:#005CC5;--shiki-dark:#D19A66;">12</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#005CC5;--shiki-dark:#D19A66;">5</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#005CC5;--shiki-dark:#D19A66;">9</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#005CC5;--shiki-dark:#D19A66;">36</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，<code>sorted()</code> 函数也是一个高阶函数，它还可以接收一个 <code>key</code> 函数来实现自定义的排序，例如按绝对值大小排序:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> sorted</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">([</span><span style="color:#005CC5;--shiki-dark:#D19A66;">36</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#005CC5;--shiki-dark:#D19A66;">5</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="color:#005CC5;--shiki-dark:#D19A66;">12</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#005CC5;--shiki-dark:#D19A66;">9</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="color:#005CC5;--shiki-dark:#D19A66;">21</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">], </span><span style="color:#E36209;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic;">key</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#005CC5;--shiki-dark:#56B6C2;">abs</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="color:#005CC5;--shiki-dark:#D19A66;">5</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#005CC5;--shiki-dark:#D19A66;">9</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="color:#005CC5;--shiki-dark:#D19A66;">12</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="color:#005CC5;--shiki-dark:#D19A66;">21</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#005CC5;--shiki-dark:#D19A66;">36</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>key 指定的函数将作用于 list 的每一个元素上，并根据 <code>key</code> 函数返回的结果进行排序。对比原始的 list 和经过 <code>key=abs</code> 处理过的 list:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">list</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="color:#005CC5;--shiki-dark:#D19A66;">36</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#005CC5;--shiki-dark:#D19A66;">5</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="color:#005CC5;--shiki-dark:#D19A66;">12</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#005CC5;--shiki-dark:#D19A66;">9</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="color:#005CC5;--shiki-dark:#D19A66;">21</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">keys </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="color:#005CC5;--shiki-dark:#D19A66;">36</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#005CC5;--shiki-dark:#D19A66;">5</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,  </span><span style="color:#005CC5;--shiki-dark:#D19A66;">12</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#005CC5;--shiki-dark:#D19A66;">9</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,  </span><span style="color:#005CC5;--shiki-dark:#D19A66;">21</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后 <code>sorted()</code> 函数按照 keys 进行排序，并按照对应关系返回 list 相应的元素:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span>keys排序结果 =&gt; [5, 9,  12,  21, 36]</span></span>
<span class="line"><span>                |  |    |    |   |</span></span>
<span class="line"><span>最终结果     =&gt; [5, 9, -12, -21, 36]</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们再看一个字符串排序的例子:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> sorted</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">([</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;bob&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;about&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;Zoo&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;Credit&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">])</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;Credit&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;Zoo&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;about&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;bob&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，对字符串排序，是按照 ASCII 的大小比较的，由于 <code>&#39;Z&#39; &lt; &#39;a&#39;</code>，结果，大写字母 Z 会排在小写字母 a 的前面。</p><p>现在，我们提出排序应该忽略大小写，按照字母序排序。要实现这个算法，不必对现有代码大加改动，只要我们能用一个 key 函数把字符串映射为忽略大小写排序即可。忽略大小写来比较两个字符串，实际上就是先把字符串都变成大写(或者都变成小写)，再比较。</p><p>这样，我们给 <code>sorted</code> 传入 key 函数，即可实现忽略大小写的排序:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> sorted</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">([</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;bob&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;about&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;Zoo&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;Credit&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">], </span><span style="color:#E36209;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic;">key</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#005CC5;--shiki-dark:#56B6C2;">str</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.lower)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;about&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;bob&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;Credit&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;Zoo&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>要进行反向排序，不必改动 key 函数，可以传入第三个参数 <code>reverse=True</code>:</p><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#56B6C2;">&gt;&gt;&gt;</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> sorted</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">([</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;bob&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;about&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;Zoo&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;Credit&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">], </span><span style="color:#E36209;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic;">key</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#005CC5;--shiki-dark:#56B6C2;">str</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.lower, </span><span style="color:#E36209;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic;">reverse</span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#005CC5;--shiki-dark:#D19A66;">True</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;Zoo&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;Credit&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;bob&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;about&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>从上述例子可以看出，高阶函数的抽象能力是非常强大的，而且，核心代码可以保持得非常简洁。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p><code>sorted()</code> 也是一个高阶函数。用 <code>sorted()</code> 排序的关键在于实现一个映射函数。</p>`,21),r=[n];function l(t,p){return a(),i("div",null,r)}const c=s(o,[["render",l],["__file","sorted.html.vue"]]),h=JSON.parse('{"path":"/code/language/python/functional-programming/high-order-function/sorted.html","title":"sorted","lang":"zh-CN","frontmatter":{"title":"sorted","icon":"sort","author":"廖雪峰","date":"2020-05-31T00:00:00.000Z","category":"Python","description":"排序算法 排序也是在程序中经常用到的算法。无论使用冒泡排序还是快速排序，排序的核心是比较两个元素的大小。如果是数字，我们可以直接比较，但如果是字符串或者两个 dict 呢? 直接比较数学上的大小是没有意义的，因此，比较的过程必须通过函数抽象出来。 Python 内置的 sorted() 函数就可以对 list 进行排序: 此外，sorted() 函数也...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/python/functional-programming/high-order-function/sorted.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"sorted"}],["meta",{"property":"og:description","content":"排序算法 排序也是在程序中经常用到的算法。无论使用冒泡排序还是快速排序，排序的核心是比较两个元素的大小。如果是数字，我们可以直接比较，但如果是字符串或者两个 dict 呢? 直接比较数学上的大小是没有意义的，因此，比较的过程必须通过函数抽象出来。 Python 内置的 sorted() 函数就可以对 list 进行排序: 此外，sorted() 函数也..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sorted\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-31T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-06T16:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"排序算法","slug":"排序算法","link":"#排序算法","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":2.09,"words":628},"filePathRelative":"code/language/python/functional-programming/high-order-function/sorted.md","localizedDate":"2020年5月31日","excerpt":"","autoDesc":true}');export{c as comp,h as data};
