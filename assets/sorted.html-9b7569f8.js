const n=JSON.parse('{"key":"v-377c72d8","path":"/code/language/python/functional-programming/high-order-function/sorted.html","title":"sorted","lang":"zh-CN","frontmatter":{"title":"sorted","icon":"sort","author":"廖雪峰","date":"2020-05-31T00:00:00.000Z","category":["Python"],"description":"排序算法 排序也是在程序中经常用到的算法。无论使用冒泡排序还是快速排序，排序的核心是比较两个元素的大小。如果是数字，我们可以直接比较，但如果是字符串或者两个 dict 呢? 直接比较数学上的大小是没有意义的，因此，比较的过程必须通过函数抽象出来。 Python 内置的 sorted() 函数就可以对 list 进行排序: &gt;&gt;&gt; sorted([36, 5, -12, 9, -21]) [-21, -12, 5, 9, 36]","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/python/functional-programming/high-order-function/sorted.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"sorted"}],["meta",{"property":"og:description","content":"排序算法 排序也是在程序中经常用到的算法。无论使用冒泡排序还是快速排序，排序的核心是比较两个元素的大小。如果是数字，我们可以直接比较，但如果是字符串或者两个 dict 呢? 直接比较数学上的大小是没有意义的，因此，比较的过程必须通过函数抽象出来。 Python 内置的 sorted() 函数就可以对 list 进行排序: &gt;&gt;&gt; sorted([36, 5, -12, 9, -21]) [-21, -12, 5, 9, 36]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"headers":[{"level":2,"title":"排序算法","slug":"排序算法","link":"#排序算法","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":2.16,"words":649},"localizedDate":"2020年5月31日","filePathRelative":"code/language/python/functional-programming/high-order-function/sorted.md","excerpt":"<h2> 排序算法</h2>\\n<p>排序也是在程序中经常用到的算法。无论使用冒泡排序还是快速排序，排序的核心是比较两个元素的大小。如果是数字，我们可以直接比较，但如果是字符串或者两个 dict 呢? 直接比较数学上的大小是没有意义的，因此，比较的过程必须通过函数抽象出来。</p>\\n<p>Python 内置的 <code>sorted()</code> 函数就可以对 list 进行排序:</p>\\n<div class=\\"language-python\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token builtin\\">sorted</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">36</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">12</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">9</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">21</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">[</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">21</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">12</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">9</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">36</span><span class=\\"token punctuation\\">]</span>\\n</code></pre></div>","autoDesc":true}');export{n as data};
