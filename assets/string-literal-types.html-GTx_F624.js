import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as p,c,f as l,d as t,e,a,b as r}from"./app-S62fdHqc.js";const i={},d=t("p",null,"字符串字面量类型用来约束取值只能是某几个字符串中的一个。",-1),m=r(`<h2 id="简单的例子" tabindex="-1"><a class="header-anchor" href="#简单的例子"><span>简单的例子</span></a></h2><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">EventNames</span> <span class="token operator">=</span> <span class="token string">&quot;click&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;scroll&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;mousemove&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">handleEvent</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> Element<span class="token punctuation">,</span> event<span class="token operator">:</span> EventNames<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something</span>
<span class="token punctuation">}</span>

<span class="token function">handleEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;scroll&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 没问题</span>
<span class="token function">handleEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;dbclick&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错，event 不能为 &#39;dbclick&#39;</span>

<span class="token comment">// index.ts(7,47): error TS2345: Argument of type &#39;&quot;dbclick&quot;&#39; is not assignable to parameter of type &#39;EventNames&#39;.</span>
</code></pre></div><p>上例中，我们使用 <code>type</code> 定了一个字符串字面量类型 <code>EventNames</code>，它只能取三种字符串中的一种。</p><p>注意，<strong>类型别名与字符串字面量类型都是使用 <code>type</code> 进行定义。</strong></p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2>`,5),u={href:"http://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types",target:"_blank",rel:"noopener noreferrer"},k={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%AD%97%E9%9D%A2%E9%87%8F%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"};function h(g,y){const n=o("ExternalLinkIcon");return p(),c("div",null,[d,l(" more "),m,t("ul",null,[t("li",null,[t("a",u,[e("Advanced Types # Type Aliases"),a(n)]),e("("),t("a",k,[e("中文版"),a(n)]),e(")")])])])}const _=s(i,[["render",h],["__file","string-literal-types.html.vue"]]),E=JSON.parse('{"path":"/code/language/typescript/advanced/string-literal-types.html","title":"字符串字面量类型","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"字符串字面量类型","icon":"string","category":"TypeScript","description":"字符串字面量类型用来约束取值只能是某几个字符串中的一个。 简单的例子 上例中，我们使用 type 定了一个字符串字面量类型 EventNames，它只能取三种字符串中的一种。 注意，类型别名与字符串字面量类型都是使用 type 进行定义。 参考 Advanced Types # Type Aliases(中文版) ","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/typescript/advanced/string-literal-types.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"字符串字面量类型"}],["meta",{"property":"og:description","content":"字符串字面量类型用来约束取值只能是某几个字符串中的一个。 简单的例子 上例中，我们使用 type 定了一个字符串字面量类型 EventNames，它只能取三种字符串中的一种。 注意，类型别名与字符串字面量类型都是使用 type 进行定义。 参考 Advanced Types # Type Aliases(中文版) "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"字符串字面量类型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"简单的例子","slug":"简单的例子","link":"#简单的例子","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":0.63,"words":189},"filePathRelative":"code/language/typescript/advanced/string-literal-types.md","localizedDate":"2020年5月4日","excerpt":"<p>字符串字面量类型用来约束取值只能是某几个字符串中的一个。</p>\\n","autoDesc":true}');export{_ as comp,E as data};
