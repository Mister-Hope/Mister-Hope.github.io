const e=JSON.parse('{"key":"v-e7d0ffd8","path":"/code/language/js/es6/class-extends.html","title":"Class 的继承","lang":"zh-CN","frontmatter":{"icon":"extend","author":"阮一峰","date":"2019-10-23T00:00:00.000Z","category":["JavaScript"],"copyright":"此部分博客采用 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">“保持署名—非商用”创意共享4.0许可证</a>","description":"Class 的继承 简介 Class 可以通过 extends 关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。 class Point {} class ColorPoint extends Point {}","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/js/es6/class-extends.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Class 的继承"}],["meta",{"property":"og:description","content":"Class 的继承 简介 Class 可以通过 extends 关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。 class Point {} class ColorPoint extends Point {}"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-12T05:50:30.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2019-10-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-12T05:50:30.000Z"}]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"Object.getPrototypeOf()","slug":"object-getprototypeof","link":"#object-getprototypeof","children":[]},{"level":2,"title":"super 关键字","slug":"super-关键字","link":"#super-关键字","children":[]},{"level":2,"title":"类的 prototype 属性和__proto__属性","slug":"类的-prototype-属性和-proto-属性","link":"#类的-prototype-属性和-proto-属性","children":[{"level":3,"title":"实例的 __proto__ 属性","slug":"实例的-proto-属性","link":"#实例的-proto-属性","children":[]}]},{"level":2,"title":"原生构造函数的继承","slug":"原生构造函数的继承","link":"#原生构造函数的继承","children":[]},{"level":2,"title":"Mixin 模式的实现","slug":"mixin-模式的实现","link":"#mixin-模式的实现","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644645030000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5}]},"readingTime":{"minutes":13.56,"words":4069},"filePathRelative":"code/language/js/es6/class-extends.md","localizedDate":"2019年10月23日","excerpt":"<h1> Class 的继承</h1>\\n<h2> 简介</h2>\\n<p>Class 可以通过 <code>extends</code> 关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Point</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ColorPoint</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Point</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{e as data};
