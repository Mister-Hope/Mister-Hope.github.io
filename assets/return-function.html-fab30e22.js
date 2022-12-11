const n=JSON.parse('{"key":"v-7b8e695f","path":"/code/language/python/functional-programming/return-function.html","title":"返回函数","lang":"zh-CN","frontmatter":{"title":"返回函数","icon":"return","author":"廖雪峰","date":"2020-06-02T00:00:00.000Z","category":["Python"],"description":"函数作为返回值 高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回。 我们来实现一个可变参数的求和。通常情况下，求和的函数是这样定义的: def calc_sum(*args): ax = 0 for n in args: ax = ax + n return ax","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/python/functional-programming/return-function.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"返回函数"}],["meta",{"property":"og:description","content":"函数作为返回值 高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回。 我们来实现一个可变参数的求和。通常情况下，求和的函数是这样定义的: def calc_sum(*args): ax = 0 for n in args: ax = ax + n return ax"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-06-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"headers":[{"level":2,"title":"函数作为返回值","slug":"函数作为返回值","link":"#函数作为返回值","children":[]},{"level":2,"title":"闭包","slug":"闭包","link":"#闭包","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":6},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":2.94,"words":881},"filePathRelative":"code/language/python/functional-programming/return-function.md","localizedDate":"2020年6月2日","excerpt":"<h2> 函数作为返回值</h2>\\n<p>高阶函数除了可以接受函数作为参数外，还可以把函数作为结果值返回。</p>\\n<p>我们来实现一个可变参数的求和。通常情况下，求和的函数是这样定义的:</p>\\n<div class=\\"language-python\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">def</span> <span class=\\"token function\\">calc_sum</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">*</span>args<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    ax <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span>\\n    <span class=\\"token keyword\\">for</span> n <span class=\\"token keyword\\">in</span> args<span class=\\"token punctuation\\">:</span>\\n        ax <span class=\\"token operator\\">=</span> ax <span class=\\"token operator\\">+</span> n\\n    <span class=\\"token keyword\\">return</span> ax\\n</code></pre></div>","autoDesc":true}');export{n as data};
