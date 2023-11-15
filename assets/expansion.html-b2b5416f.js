const e=JSON.parse('{"key":"v-5675dda1","path":"/linux/bash/expansion.html","title":"Bash 的模式扩展","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"Bash 的模式扩展","icon":"expansion","author":"阮一峰","category":"Linux","tag":["Bash"],"copyright":"本教程采用<a href=\\"https://creativecommons.org/licenses/by-sa/3.0/deed.zh\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">知识共享 署名-相同方式共享 3.0协议</a>","description":"简介 Shell 接收到用户输入的命令以后，会根据空格将用户的输入，拆分成一个个词元(token)。然后，Shell 会扩展词元里面的特殊字符，扩展完成后才会调用相应的命令。 这种特殊字符的扩展，称为模式扩展(globbing)。其中有些用到通配符，又称为通配符扩展(wildcard expansion)。Bash 一共提供八种扩展。 波浪线扩展; ?...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/linux/bash/expansion.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Bash 的模式扩展"}],["meta",{"property":"og:description","content":"简介 Shell 接收到用户输入的命令以后，会根据空格将用户的输入，拆分成一个个词元(token)。然后，Shell 会扩展词元里面的特殊字符，扩展完成后才会调用相应的命令。 这种特殊字符的扩展，称为模式扩展(globbing)。其中有些用到通配符，又称为通配符扩展(wildcard expansion)。Bash 一共提供八种扩展。 波浪线扩展; ?..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-15T16:10:32.000Z"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:tag","content":"Bash"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-15T16:10:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Bash 的模式扩展\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-15T16:10:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"阮一峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"波浪线扩展","slug":"波浪线扩展","link":"#波浪线扩展","children":[]},{"level":2,"title":"? 字符扩展","slug":"字符扩展","link":"#字符扩展","children":[]},{"level":2,"title":"* 字符扩展","slug":"字符扩展-1","link":"#字符扩展-1","children":[]},{"level":2,"title":"方括号扩展","slug":"方括号扩展","link":"#方括号扩展","children":[]},{"level":2,"title":"[start-end] 扩展","slug":"start-end-扩展","link":"#start-end-扩展","children":[]},{"level":2,"title":"大括号扩展","slug":"大括号扩展","link":"#大括号扩展","children":[]},{"level":2,"title":"{start..end} 扩展","slug":"start-end-扩展-1","link":"#start-end-扩展-1","children":[]},{"level":2,"title":"变量扩展","slug":"变量扩展","link":"#变量扩展","children":[]},{"level":2,"title":"子命令扩展","slug":"子命令扩展","link":"#子命令扩展","children":[]},{"level":2,"title":"算术扩展","slug":"算术扩展","link":"#算术扩展","children":[]},{"level":2,"title":"字符类","slug":"字符类","link":"#字符类","children":[]},{"level":2,"title":"使用注意点","slug":"使用注意点","link":"#使用注意点","children":[]},{"level":2,"title":"量词语法","slug":"量词语法","link":"#量词语法","children":[]},{"level":2,"title":"shopt 命令","slug":"shopt-命令","link":"#shopt-命令","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1700064632000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":10},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":16.35,"words":4905},"filePathRelative":"linux/bash/expansion.md","localizedDate":"2020年5月4日","excerpt":"","autoDesc":true}');export{e as data};
