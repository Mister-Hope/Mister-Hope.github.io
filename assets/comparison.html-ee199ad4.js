const e=JSON.parse('{"key":"v-c1f11850","path":"/code/language/js/operators/comparison.html","title":"比较运算符","lang":"zh-CN","frontmatter":{"title":"比较运算符","icon":"compare","date":"2019-09-26T00:00:00.000Z","category":"JavaScript","description":"JavaScript 一共提供了 8 个比较运算符。 &gt; 大于运算符 &lt; 小于运算符 &lt;= 小于或等于运算符 &gt;= 大于或等于运算符 == 相等运算符 === 严格相等运算符 != 不相等运算符 !== 严格不相等运算符 这八个比较运算符分成两类: 相等比较和非相等比较。两者的规则是不一样的，对于非相等的比较，算法是先看两个运算子是否都是字符串，如果是的，就按照字典顺序比较(实际上是比较 Unicode 码点)；否则，将两个运算子都转成数值，再比较数值的大小。","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/js/operators/comparison.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"比较运算符"}],["meta",{"property":"og:description","content":"JavaScript 一共提供了 8 个比较运算符。 &gt; 大于运算符 &lt; 小于运算符 &lt;= 小于或等于运算符 &gt;= 大于或等于运算符 == 相等运算符 === 严格相等运算符 != 不相等运算符 !== 严格不相等运算符 这八个比较运算符分成两类: 相等比较和非相等比较。两者的规则是不一样的，对于非相等的比较，算法是先看两个运算子是否都是字符串，如果是的，就按照字典顺序比较(实际上是比较 Unicode 码点)；否则，将两个运算子都转成数值，再比较数值的大小。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"article:published_time","content":"2019-09-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"比较运算符\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-26T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-06T16:46:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"非相等运算符: 字符串的比较","slug":"非相等运算符-字符串的比较","link":"#非相等运算符-字符串的比较","children":[]},{"level":2,"title":"非相等运算符: 非字符串的比较","slug":"非相等运算符-非字符串的比较","link":"#非相等运算符-非字符串的比较","children":[{"level":3,"title":"原始类型值","slug":"原始类型值","link":"#原始类型值","children":[]},{"level":3,"title":"对象","slug":"对象","link":"#对象","children":[]}]},{"level":2,"title":"严格相等运算符","slug":"严格相等运算符","link":"#严格相等运算符","children":[{"level":3,"title":"不同类型的值","slug":"不同类型的值","link":"#不同类型的值","children":[]},{"level":3,"title":"同一类的原始类型值","slug":"同一类的原始类型值","link":"#同一类的原始类型值","children":[]},{"level":3,"title":"复合类型值","slug":"复合类型值","link":"#复合类型值","children":[]},{"level":3,"title":"undefined 和 null","slug":"undefined-和-null","link":"#undefined-和-null","children":[]}]},{"level":2,"title":"严格不相等运算符","slug":"严格不相等运算符","link":"#严格不相等运算符","children":[]},{"level":2,"title":"相等运算符","slug":"相等运算符","link":"#相等运算符","children":[{"level":3,"title":"原始类型值","slug":"原始类型值-1","link":"#原始类型值-1","children":[]},{"level":3,"title":"对象与原始类型值比较","slug":"对象与原始类型值比较","link":"#对象与原始类型值比较","children":[]},{"level":3,"title":"undefined 和 null","slug":"undefined-和-null-1","link":"#undefined-和-null-1","children":[]},{"level":3,"title":"相等运算符的缺点","slug":"相等运算符的缺点","link":"#相等运算符的缺点","children":[]}]},{"level":2,"title":"不相等运算符","slug":"不相等运算符","link":"#不相等运算符","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":7}]},"readingTime":{"minutes":7.32,"words":2196},"filePathRelative":"code/language/js/operators/comparison.md","localizedDate":"2019年9月26日","excerpt":"<p>JavaScript 一共提供了 8 个比较运算符。</p>\\n<ul>\\n<li><code>&gt;</code> 大于运算符</li>\\n<li><code>&lt;</code> 小于运算符</li>\\n<li><code>&lt;=</code> 小于或等于运算符</li>\\n<li><code>&gt;=</code> 大于或等于运算符</li>\\n<li><code>==</code> 相等运算符</li>\\n<li><code>===</code> 严格相等运算符</li>\\n<li><code>!=</code> 不相等运算符</li>\\n<li><code>!==</code> 严格不相等运算符</li>\\n</ul>\\n<p>这八个比较运算符分成两类: 相等比较和非相等比较。两者的规则是不一样的，对于非相等的比较，算法是先看两个运算子是否都是字符串，如果是的，就按照字典顺序比较(实际上是比较 Unicode 码点)；否则，将两个运算子都转成数值，再比较数值的大小。</p>\\n","autoDesc":true}');export{e as data};
