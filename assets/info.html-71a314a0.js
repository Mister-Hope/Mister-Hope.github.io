const t=JSON.parse(`{"key":"v-1d5feaa7","path":"/code/language/python/oop/info.html","title":"获取对象信息","lang":"zh-CN","frontmatter":{"title":"获取对象信息","author":"廖雪峰","icon":"info","date":"2021-03-28T00:00:00.000Z","category":["Python"],"description":"当我们拿到一个对象的引用时，如何知道这个对象是什么类型、有哪些方法呢？ 使用 type() 首先，我们来判断对象类型，使用 type() 函数: 基本类型都可以用 type() 判断: &gt;&gt;&gt; type(123) &lt;class 'int'&gt; &gt;&gt;&gt; type('str') &lt;class 'str'&gt; &gt;&gt;&gt; type(None) &lt;type(None) 'NoneType'&gt;","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/python/oop/info.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"获取对象信息"}],["meta",{"property":"og:description","content":"当我们拿到一个对象的引用时，如何知道这个对象是什么类型、有哪些方法呢？ 使用 type() 首先，我们来判断对象类型，使用 type() 函数: 基本类型都可以用 type() 判断: &gt;&gt;&gt; type(123) &lt;class 'int'&gt; &gt;&gt;&gt; type('str') &lt;class 'str'&gt; &gt;&gt;&gt; type(None) &lt;type(None) 'NoneType'&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2021-03-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"headers":[{"level":2,"title":"使用 type()","slug":"使用-type","link":"#使用-type","children":[]},{"level":2,"title":"使用 isinstance()","slug":"使用-isinstance","link":"#使用-isinstance","children":[]},{"level":2,"title":"使用 dir()","slug":"使用-dir","link":"#使用-dir","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1616944982000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":4.79,"words":1436},"filePathRelative":"code/language/python/oop/info.md","localizedDate":"2021年3月28日","excerpt":"<p>当我们拿到一个对象的引用时，如何知道这个对象是什么类型、有哪些方法呢？</p>\\n<h2> 使用 <code>type()</code></h2>\\n<p>首先，我们来判断对象类型，使用 <code>type()</code> 函数:</p>\\n<p>基本类型都可以用 <code>type()</code> 判断:</p>\\n<div class=\\"language-python\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token builtin\\">type</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">123</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token keyword\\">class</span> <span class=\\"token string\\">'int'</span><span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token builtin\\">type</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'str'</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token keyword\\">class</span> <span class=\\"token string\\">'str'</span><span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token builtin\\">type</span><span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token builtin\\">type</span><span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">)</span> <span class=\\"token string\\">'NoneType'</span><span class=\\"token operator\\">&gt;</span>\\n</code></pre></div>","autoDesc":true}`);export{t as data};
