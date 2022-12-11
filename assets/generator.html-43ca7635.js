const e=JSON.parse('{"key":"v-2a661765","path":"/code/language/js/es6/generator.html","title":"Generator","lang":"zh-CN","frontmatter":{"title":"Generator","icon":"cycle","author":"阮一峰","date":"2019-10-23T00:00:00.000Z","category":["JavaScript"],"copyright":"此部分博客采用 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">“保持署名—非商用”创意共享4.0许可证</a>","description":"简介 基本概念 Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。本章详细介绍 Generator 函数的语法和 API，它的异步编程应用请看 Generator 函数的异步应用 一章。 Generator 函数有多种理解角度。语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。 执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/js/es6/generator.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Generator"}],["meta",{"property":"og:description","content":"简介 基本概念 Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。本章详细介绍 Generator 函数的语法和 API，它的异步编程应用请看 Generator 函数的异步应用 一章。 Generator 函数有多种理解角度。语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。 执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-12T05:50:30.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2019-10-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-12T05:50:30.000Z"}]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[{"level":3,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":3,"title":"yield 表达式","slug":"yield-表达式","link":"#yield-表达式","children":[]},{"level":3,"title":"与 Iterator 接口的关系","slug":"与-iterator-接口的关系","link":"#与-iterator-接口的关系","children":[]}]},{"level":2,"title":"next 方法的参数","slug":"next-方法的参数","link":"#next-方法的参数","children":[]},{"level":2,"title":"for...of 循环","slug":"for-of-循环","link":"#for-of-循环","children":[]},{"level":2,"title":"Generator.prototype.throw()","slug":"generator-prototype-throw","link":"#generator-prototype-throw","children":[]},{"level":2,"title":"Generator.prototype.return()","slug":"generator-prototype-return","link":"#generator-prototype-return","children":[]},{"level":2,"title":"next()、throw()、return() 的共同点","slug":"next-、throw-、return-的共同点","link":"#next-、throw-、return-的共同点","children":[]},{"level":2,"title":"yield* 表达式","slug":"yield-表达式-1","link":"#yield-表达式-1","children":[]},{"level":2,"title":"作为对象属性的 Generator 函数","slug":"作为对象属性的-generator-函数","link":"#作为对象属性的-generator-函数","children":[]},{"level":2,"title":"Generator 函数的 this","slug":"generator-函数的-this","link":"#generator-函数的-this","children":[]},{"level":2,"title":"含义","slug":"含义","link":"#含义","children":[{"level":3,"title":"Generator 与状态机","slug":"generator-与状态机","link":"#generator-与状态机","children":[]},{"level":3,"title":"Generator 与协程","slug":"generator-与协程","link":"#generator-与协程","children":[]},{"level":3,"title":"Generator 与上下文","slug":"generator-与上下文","link":"#generator-与上下文","children":[]}]},{"level":2,"title":"应用","slug":"应用","link":"#应用","children":[{"level":3,"title":"(1)异步操作的同步化表达","slug":"_1-异步操作的同步化表达","link":"#_1-异步操作的同步化表达","children":[]},{"level":3,"title":"(2)控制流管理","slug":"_2-控制流管理","link":"#_2-控制流管理","children":[]},{"level":3,"title":"(3)部署 Iterator 接口","slug":"_3-部署-iterator-接口","link":"#_3-部署-iterator-接口","children":[]},{"level":3,"title":"(4)作为数据结构","slug":"_4-作为数据结构","link":"#_4-作为数据结构","children":[]}]}],"git":{"createdTime":1591204114000,"updatedTime":1644645030000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":7}]},"readingTime":{"minutes":35.34,"words":10603},"filePathRelative":"code/language/js/es6/generator.md","localizedDate":"2019年10月23日","excerpt":"<h2> 简介</h2>\\n<h3> 基本概念</h3>\\n<p>Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。本章详细介绍 Generator 函数的语法和 API，它的异步编程应用请看 <a href=\\"/code/language/js/es6/generator-async.html\\" target=\\"blank\\">Generator 函数的异步应用</a> 一章。</p>\\n<p>Generator 函数有多种理解角度。语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。</p>\\n<p>执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。</p>","autoDesc":true}');export{e as data};
