const e=JSON.parse('{"key":"v-2fc52e78","path":"/code/language/js/es6/module-loader.html","title":"Module 的加载实现","lang":"zh-CN","frontmatter":{"title":"Module 的加载实现","icon":"load","author":"阮一峰","date":"2019-10-23T00:00:00.000Z","category":"JavaScript","copyright":"此部分博客采用 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">“保持署名—非商用”创意共享4.0许可证</a>","description":"上一章介绍了模块的语法，本章介绍如何在浏览器和 Node.js 之中加载 ES6 模块，以及实际开发中经常遇到的一些问题(比如循环加载)。 浏览器加载 传统方法 HTML 网页中，浏览器通过 标签加载 JavaScript 脚本。 上面代码中，由于浏览器脚本的默认语言是 JavaScript，因此 type=\\"application/javascrip...","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/js/es6/module-loader.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Module 的加载实现"}],["meta",{"property":"og:description","content":"上一章介绍了模块的语法，本章介绍如何在浏览器和 Node.js 之中加载 ES6 模块，以及实际开发中经常遇到的一些问题(比如循环加载)。 浏览器加载 传统方法 HTML 网页中，浏览器通过 标签加载 JavaScript 脚本。 上面代码中，由于浏览器脚本的默认语言是 JavaScript，因此 type=\\"application/javascrip..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-12T05:50:30.000Z"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2019-10-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-12T05:50:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Module 的加载实现\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-10-23T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-12T05:50:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"阮一峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mrhope.site/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mrhope.site/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mrhope.site/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"浏览器加载","slug":"浏览器加载","link":"#浏览器加载","children":[{"level":3,"title":"传统方法","slug":"传统方法","link":"#传统方法","children":[]},{"level":3,"title":"加载规则","slug":"加载规则","link":"#加载规则","children":[]}]},{"level":2,"title":"ES6 模块与 CommonJS 模块的差异","slug":"es6-模块与-commonjs-模块的差异","link":"#es6-模块与-commonjs-模块的差异","children":[]},{"level":2,"title":"Node.js 加载","slug":"node-js-加载","link":"#node-js-加载","children":[{"level":3,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":3,"title":"内部变量","slug":"内部变量","link":"#内部变量","children":[]},{"level":3,"title":"ES6 模块加载 CommonJS 模块","slug":"es6-模块加载-commonjs-模块","link":"#es6-模块加载-commonjs-模块","children":[]},{"level":3,"title":"CommonJS 模块加载 ES6 模块","slug":"commonjs-模块加载-es6-模块","link":"#commonjs-模块加载-es6-模块","children":[]}]},{"level":2,"title":"循环加载","slug":"循环加载","link":"#循环加载","children":[{"level":3,"title":"CommonJS 模块的加载原理","slug":"commonjs-模块的加载原理","link":"#commonjs-模块的加载原理","children":[]},{"level":3,"title":"CommonJS 模块的循环加载","slug":"commonjs-模块的循环加载","link":"#commonjs-模块的循环加载","children":[]},{"level":3,"title":"ES6 模块的循环加载","slug":"es6-模块的循环加载","link":"#es6-模块的循环加载","children":[]}]},{"level":2,"title":"ES6 模块的转码","slug":"es6-模块的转码","link":"#es6-模块的转码","children":[{"level":3,"title":"ES6 module transpiler","slug":"es6-module-transpiler","link":"#es6-module-transpiler","children":[]},{"level":3,"title":"SystemJS","slug":"systemjs","link":"#systemjs","children":[]}]}],"git":{"createdTime":1591204114000,"updatedTime":1644645030000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":7}]},"readingTime":{"minutes":20.44,"words":6133},"filePathRelative":"code/language/js/es6/module-loader.md","localizedDate":"2019年10月23日","excerpt":"","autoDesc":true}');export{e as data};
