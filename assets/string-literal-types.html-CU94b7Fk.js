import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as a,e as o,b as n,o as l}from"./app-BGIrljxn.js";const p={};function r(c,e){return l(),t("div",null,[e[0]||(e[0]=a("p",null,"字符串字面量类型用来约束取值只能是某几个字符串中的一个。",-1)),o(" more "),e[1]||(e[1]=n(`<h2 id="简单的例子" tabindex="-1"><a class="header-anchor" href="#简单的例子"><span>简单的例子</span></a></h2><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">type</span><span style="color:#8FBCBB;"> EventNames</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">click</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> |</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">scroll</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;"> |</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">mousemove</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">function</span><span style="color:#88C0D0;"> handleEvent</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">ele</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;"> Element</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> event</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;"> EventNames</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">  // do something</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">handleEvent</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">document</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getElementById</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">hello</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">scroll</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 没问题</span></span>
<span class="line"><span style="color:#88C0D0;">handleEvent</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">document</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getElementById</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">world</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">dbclick</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#616E88;"> // 报错，event 不能为 &#39;dbclick&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// index.ts(7,47): error TS2345: Argument of type &#39;&quot;dbclick&quot;&#39; is not assignable to parameter of type &#39;EventNames&#39;.</span></span></code></pre></div><p>上例中，我们使用 <code>type</code> 定了一个字符串字面量类型 <code>EventNames</code>，它只能取三种字符串中的一种。</p><p>注意，<strong>类型别名与字符串字面量类型都是使用 <code>type</code> 进行定义。</strong></p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ul><li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types" target="_blank" rel="noopener noreferrer">Advanced Types # Type Aliases</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%AD%97%E9%9D%A2%E9%87%8F%E7%B1%BB%E5%9E%8B" target="_blank" rel="noopener noreferrer">中文版</a>)</li></ul>`,6))])}const E=s(p,[["render",r],["__file","string-literal-types.html.vue"]]),d=JSON.parse('{"path":"/code/language/typescript/advanced/string-literal-types.html","title":"字符串字面量类型","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"字符串字面量类型","icon":"string","category":"TypeScript","description":"字符串字面量类型用来约束取值只能是某几个字符串中的一个。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/typescript/advanced/string-literal-types.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"字符串字面量类型"}],["meta",{"property":"og:description","content":"字符串字面量类型用来约束取值只能是某几个字符串中的一个。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"字符串字面量类型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"简单的例子","slug":"简单的例子","link":"#简单的例子","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":0.63,"words":189},"filePathRelative":"code/language/typescript/advanced/string-literal-types.md","localizedDate":"2020年5月4日","excerpt":"<p>字符串字面量类型用来约束取值只能是某几个字符串中的一个。</p>\\n","autoDesc":true}');export{E as comp,d as data};
