const e=JSON.parse(`{"key":"v-59a21084","path":"/code/language/python/oop/special.html","title":"特殊的 class","lang":"zh-CN","frontmatter":{"title":"特殊的 class","icon":"any","author":"廖雪峰","date":"2021-03-28T00:00:00.000Z","category":["Python"],"description":"type() 动态语言和静态语言最大的不同，就是函数和类的定义，不是编译时定义的，而是运行时动态创建的。 比方说我们要定义一个 Hello 的 class，就写一个 hello.py 模块: class Hello(object): def hello(self, name='world'): print('Hello, %s.' % name)","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/python/oop/special.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"特殊的 class"}],["meta",{"property":"og:description","content":"type() 动态语言和静态语言最大的不同，就是函数和类的定义，不是编译时定义的，而是运行时动态创建的。 比方说我们要定义一个 Hello 的 class，就写一个 hello.py 模块: class Hello(object): def hello(self, name='world'): print('Hello, %s.' % name)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2021-03-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"headers":[{"level":2,"title":"type()","slug":"type","link":"#type","children":[]},{"level":2,"title":"Enum","slug":"enum","link":"#enum","children":[]},{"level":2,"title":"metaclass","slug":"metaclass","link":"#metaclass","children":[]}],"git":{"createdTime":1616944982000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":9.1,"words":2731},"filePathRelative":"code/language/python/oop/special.md","localizedDate":"2021年3月28日","excerpt":"<h2> <code>type()</code></h2>\\n<p>动态语言和静态语言最大的不同，就是函数和类的定义，不是编译时定义的，而是运行时动态创建的。</p>\\n<p>比方说我们要定义一个 <code>Hello</code> 的 class，就写一个 <code>hello.py</code> 模块:</p>\\n<div class=\\"language-python\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Hello</span><span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">object</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">hello</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">,</span> name<span class=\\"token operator\\">=</span><span class=\\"token string\\">'world'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'Hello, %s.'</span> <span class=\\"token operator\\">%</span> name<span class=\\"token punctuation\\">)</span>\\n</code></pre></div>","autoDesc":true}`);export{e as data};
