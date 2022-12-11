const e=JSON.parse('{"key":"v-189ba04a","path":"/code/language/js/es6/object.html","title":"对象的扩展","lang":"zh-CN","frontmatter":{"icon":"object","author":"阮一峰","date":"2019-10-21T00:00:00.000Z","category":["JavaScript"],"copyright":"此部分博客采用 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">“保持署名—非商用”创意共享4.0许可证</a>","description":"对象的扩展 属性的简洁表示法 ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。 const foo = \\"bar\\"; const baz = { foo }; baz; // {foo: \\"bar\\"} // 等同于 const baz = { foo: foo };","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/js/es6/object.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"对象的扩展"}],["meta",{"property":"og:description","content":"对象的扩展 属性的简洁表示法 ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。 const foo = \\"bar\\"; const baz = { foo }; baz; // {foo: \\"bar\\"} // 等同于 const baz = { foo: foo };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-12T05:50:30.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2019-10-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-12T05:50:30.000Z"}]]},"headers":[{"level":2,"title":"属性的简洁表示法","slug":"属性的简洁表示法","link":"#属性的简洁表示法","children":[]},{"level":2,"title":"属性名表达式","slug":"属性名表达式","link":"#属性名表达式","children":[]},{"level":2,"title":"方法的 name 属性","slug":"方法的-name-属性","link":"#方法的-name-属性","children":[]},{"level":2,"title":"Object.is()","slug":"object-is","link":"#object-is","children":[]},{"level":2,"title":"Object.assign()","slug":"object-assign","link":"#object-assign","children":[{"level":3,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":3,"title":"注意点","slug":"注意点","link":"#注意点","children":[]},{"level":3,"title":"常见用途","slug":"常见用途","link":"#常见用途","children":[]}]},{"level":2,"title":"属性的可枚举性和遍历","slug":"属性的可枚举性和遍历","link":"#属性的可枚举性和遍历","children":[{"level":3,"title":"可枚举性","slug":"可枚举性","link":"#可枚举性","children":[]},{"level":3,"title":"属性的遍历","slug":"属性的遍历","link":"#属性的遍历","children":[]}]},{"level":2,"title":"Object.getOwnPropertyDescriptors()","slug":"object-getownpropertydescriptors","link":"#object-getownpropertydescriptors","children":[]},{"level":2,"title":"__proto__ 属性，Object.setPrototypeOf()，Object.getPrototypeOf()","slug":"proto-属性-object-setprototypeof-object-getprototypeof","link":"#proto-属性-object-setprototypeof-object-getprototypeof","children":[{"level":3,"title":"__proto__ 属性","slug":"proto-属性","link":"#proto-属性","children":[]},{"level":3,"title":"Object.setPrototypeOf()","slug":"object-setprototypeof","link":"#object-setprototypeof","children":[]},{"level":3,"title":"Object.getPrototypeOf()","slug":"object-getprototypeof","link":"#object-getprototypeof","children":[]}]},{"level":2,"title":"super 关键字","slug":"super-关键字","link":"#super-关键字","children":[]},{"level":2,"title":"Object.keys()，Object.values()，Object.entries()","slug":"object-keys-object-values-object-entries","link":"#object-keys-object-values-object-entries","children":[{"level":3,"title":"Object.keys()","slug":"object-keys","link":"#object-keys","children":[]},{"level":3,"title":"Object.values()","slug":"object-values","link":"#object-values","children":[]},{"level":3,"title":"Object.entries","slug":"object-entries","link":"#object-entries","children":[]}]},{"level":2,"title":"对象的扩展运算符","slug":"对象的扩展运算符","link":"#对象的扩展运算符","children":[{"level":3,"title":"解构赋值","slug":"解构赋值","link":"#解构赋值","children":[]},{"level":3,"title":"扩展运算符","slug":"扩展运算符","link":"#扩展运算符","children":[]}]}],"git":{"createdTime":1591204114000,"updatedTime":1644645030000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":7}]},"readingTime":{"minutes":26.96,"words":8088},"filePathRelative":"code/language/js/es6/object.md","localizedDate":"2019年10月21日","excerpt":"<h1> 对象的扩展</h1>\\n<h2> 属性的简洁表示法</h2>\\n<p>ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> foo <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"bar\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">const</span> baz <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span> foo <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\nbaz<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// {foo: \\"bar\\"}</span>\\n\\n<span class=\\"token comment\\">// 等同于</span>\\n<span class=\\"token keyword\\">const</span> baz <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">foo</span><span class=\\"token operator\\">:</span> foo <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}');export{e as data};
