const e=JSON.parse('{"key":"v-189ba04a","path":"/code/language/js/es6/object.html","title":"对象的扩展","lang":"zh-CN","frontmatter":{"icon":"object","author":"阮一峰","date":"2019-10-21T00:00:00.000Z","category":"JavaScript","copyright":"此部分博客采用 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">“保持署名—非商用”创意共享4.0许可证</a>","description":"对象的扩展 属性的简洁表示法 ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。 上面代码表明，ES6 允许在对象之中，直接写变量。这时，属性名为变量名, 属性值为变量的值。下面是另一个例子。 除了属性简写，方法也可以简写。 下面是一个实际的例子。 这种写法用于函数的返回值，将会非常方便。 CommonJS 模块输出一组变量，就...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/js/es6/object.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"对象的扩展"}],["meta",{"property":"og:description","content":"对象的扩展 属性的简洁表示法 ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。 上面代码表明，ES6 允许在对象之中，直接写变量。这时，属性名为变量名, 属性值为变量的值。下面是另一个例子。 除了属性简写，方法也可以简写。 下面是一个实际的例子。 这种写法用于函数的返回值，将会非常方便。 CommonJS 模块输出一组变量，就..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2019-10-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"对象的扩展\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-10-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"阮一峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"属性的简洁表示法","slug":"属性的简洁表示法","link":"#属性的简洁表示法","children":[]},{"level":2,"title":"属性名表达式","slug":"属性名表达式","link":"#属性名表达式","children":[]},{"level":2,"title":"方法的 name 属性","slug":"方法的-name-属性","link":"#方法的-name-属性","children":[]},{"level":2,"title":"Object.is()","slug":"object-is","link":"#object-is","children":[]},{"level":2,"title":"Object.assign()","slug":"object-assign","link":"#object-assign","children":[{"level":3,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":3,"title":"注意点","slug":"注意点","link":"#注意点","children":[]},{"level":3,"title":"常见用途","slug":"常见用途","link":"#常见用途","children":[]}]},{"level":2,"title":"属性的可枚举性和遍历","slug":"属性的可枚举性和遍历","link":"#属性的可枚举性和遍历","children":[{"level":3,"title":"可枚举性","slug":"可枚举性","link":"#可枚举性","children":[]},{"level":3,"title":"属性的遍历","slug":"属性的遍历","link":"#属性的遍历","children":[]}]},{"level":2,"title":"Object.getOwnPropertyDescriptors()","slug":"object-getownpropertydescriptors","link":"#object-getownpropertydescriptors","children":[]},{"level":2,"title":"__proto__ 属性，Object.setPrototypeOf()，Object.getPrototypeOf()","slug":"proto-属性-object-setprototypeof-object-getprototypeof","link":"#proto-属性-object-setprototypeof-object-getprototypeof","children":[{"level":3,"title":"__proto__ 属性","slug":"proto-属性","link":"#proto-属性","children":[]},{"level":3,"title":"Object.setPrototypeOf()","slug":"object-setprototypeof","link":"#object-setprototypeof","children":[]},{"level":3,"title":"Object.getPrototypeOf()","slug":"object-getprototypeof","link":"#object-getprototypeof","children":[]}]},{"level":2,"title":"super 关键字","slug":"super-关键字","link":"#super-关键字","children":[]},{"level":2,"title":"Object.keys()，Object.values()，Object.entries()","slug":"object-keys-object-values-object-entries","link":"#object-keys-object-values-object-entries","children":[{"level":3,"title":"Object.keys()","slug":"object-keys","link":"#object-keys","children":[]},{"level":3,"title":"Object.values()","slug":"object-values","link":"#object-values","children":[]},{"level":3,"title":"Object.entries","slug":"object-entries","link":"#object-entries","children":[]}]},{"level":2,"title":"对象的扩展运算符","slug":"对象的扩展运算符","link":"#对象的扩展运算符","children":[{"level":3,"title":"解构赋值","slug":"解构赋值","link":"#解构赋值","children":[]},{"level":3,"title":"扩展运算符","slug":"扩展运算符","link":"#扩展运算符","children":[]}]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":7},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":27.13,"words":8138},"filePathRelative":"code/language/js/es6/object.md","localizedDate":"2019年10月21日","excerpt":"","autoDesc":true}');export{e as data};
