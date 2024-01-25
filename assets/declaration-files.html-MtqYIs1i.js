const e=JSON.parse('{"key":"v-6193fda3","path":"/code/language/typescript/basics/declaration-files.html","title":"声明文件","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"声明文件","icon":"notice","category":"TypeScript","description":"当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。 什么是声明语句 假如我们想使用第三方库 jQuery，一种常见的方式是在 HTML 中通过 标签引入 jQuery，然后就可以使用全局变量 $ 或 jQuery 了。 我们通常这样获取一个 id 是 foo 的元素: 但是在 ts 中，编译器并不知道 $ 或 jQue...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/language/typescript/basics/declaration-files.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"声明文件"}],["meta",{"property":"og:description","content":"当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。 什么是声明语句 假如我们想使用第三方库 jQuery，一种常见的方式是在 HTML 中通过 标签引入 jQuery，然后就可以使用全局变量 $ 或 jQuery 了。 我们通常这样获取一个 id 是 foo 的元素: 但是在 ts 中，编译器并不知道 $ 或 jQue..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"声明文件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"什么是声明语句","slug":"什么是声明语句","link":"#什么是声明语句","children":[]},{"level":2,"title":"什么是声明文件","slug":"什么是声明文件","link":"#什么是声明文件","children":[{"level":3,"title":"第三方声明文件","slug":"第三方声明文件","link":"#第三方声明文件","children":[]}]},{"level":2,"title":"书写声明文件","slug":"书写声明文件","link":"#书写声明文件","children":[{"level":3,"title":"全局变量","slug":"全局变量","link":"#全局变量","children":[]},{"level":3,"title":"npm 包","slug":"npm-包","link":"#npm-包","children":[]},{"level":3,"title":"UMD 库","slug":"umd-库","link":"#umd-库","children":[]},{"level":3,"title":"直接扩展全局变量","slug":"直接扩展全局变量","link":"#直接扩展全局变量","children":[]},{"level":3,"title":"在 npm 包或 UMD 库中扩展全局变量","slug":"在-npm-包或-umd-库中扩展全局变量","link":"#在-npm-包或-umd-库中扩展全局变量","children":[]},{"level":3,"title":"模块插件","slug":"模块插件","link":"#模块插件","children":[]},{"level":3,"title":"声明文件中的依赖","slug":"声明文件中的依赖","link":"#声明文件中的依赖","children":[]},{"level":3,"title":"自动生成声明文件","slug":"自动生成声明文件","link":"#自动生成声明文件","children":[]}]},{"level":2,"title":"发布声明文件","slug":"发布声明文件","link":"#发布声明文件","children":[{"level":3,"title":"将声明文件和源码放在一起","slug":"将声明文件和源码放在一起","link":"#将声明文件和源码放在一起","children":[]},{"level":3,"title":"将声明文件发布到 @types 下","slug":"将声明文件发布到-types-下","link":"#将声明文件发布到-types-下","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":26.51,"words":7952},"filePathRelative":"code/language/typescript/basics/declaration-files.md","localizedDate":"2020年5月4日","excerpt":"","autoDesc":true}');export{e as data};
