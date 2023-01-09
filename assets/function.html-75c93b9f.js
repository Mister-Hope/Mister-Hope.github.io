const n=JSON.parse('{"key":"v-2f8d5e13","path":"/code/language/js/types/function.html","title":"函数","lang":"zh-CN","frontmatter":{"title":"函数","icon":"function","date":"2019-09-23T00:00:00.000Z","category":["JavaScript"],"description":"闭包 闭包(closure)是 JavaScript 语言的一个难点，也是它的特色，很多高级应用都要依靠闭包实现。 理解闭包，首先必须理解变量作用域。前面提到，JavaScript 有两种作用域: 全局作用域和函数作用域。函数内部可以直接读取全局变量。 const n = 999; function f1() { console.log(n); } f1(); // 999","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/js/types/function.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"函数"}],["meta",{"property":"og:description","content":"闭包 闭包(closure)是 JavaScript 语言的一个难点，也是它的特色，很多高级应用都要依靠闭包实现。 理解闭包，首先必须理解变量作用域。前面提到，JavaScript 有两种作用域: 全局作用域和函数作用域。函数内部可以直接读取全局变量。 const n = 999; function f1() { console.log(n); } f1(); // 999"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"article:published_time","content":"2019-09-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"函数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-23T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-06T16:46:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"闭包","slug":"闭包","link":"#闭包","children":[]},{"level":2,"title":"立即调用的函数表达式(IIFE)","slug":"立即调用的函数表达式-iife","link":"#立即调用的函数表达式-iife","children":[]},{"level":2,"title":"eval 命令","slug":"eval-命令","link":"#eval-命令","children":[{"level":3,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":3,"title":"eval 的别名调用","slug":"eval-的别名调用","link":"#eval-的别名调用","children":[]}]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":6}]},"readingTime":{"minutes":8.66,"words":2598},"filePathRelative":"code/language/js/types/function.md","localizedDate":"2019年9月23日","excerpt":"<h2> 闭包</h2>\\n<p>闭包(closure)是 JavaScript 语言的一个难点，也是它的特色，很多高级应用都要依靠闭包实现。</p>\\n<p>理解闭包，首先必须理解变量作用域。前面提到，JavaScript 有两种作用域: 全局作用域和函数作用域。函数内部可以直接读取全局变量。</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> n <span class=\\"token operator\\">=</span> <span class=\\"token number\\">999</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">f1</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>n<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token function\\">f1</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 999</span>\\n</code></pre></div>","autoDesc":true}');export{n as data};
