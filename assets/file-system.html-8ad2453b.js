const e=JSON.parse('{"key":"v-97a6cd28","path":"/code/mini-app/guide/ability/file-system.html","title":"文件系统","lang":"zh-CN","frontmatter":{"title":"文件系统","icon":"file","category":"小程序","description":"文件系统是小程序提供的一套以小程序和用户维度隔离的存储以及一套相应的管理接口。通过 wx.getFileSystemManager() 可以获取到全局唯一的文件系统管理器，所有文件系统的管理操作通过 FileSystemManager 来调用。 const fs = wx.getFileSystemManager(); 文件主要分为两大类: 代码包文件: 代码包文件指的是在项目目录中添加的文件。 本地文件: 通过调用接口本地产生，或通过网络下载下来，存储到本地的文件。","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/mini-app/guide/ability/file-system.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"文件系统"}],["meta",{"property":"og:description","content":"文件系统是小程序提供的一套以小程序和用户维度隔离的存储以及一套相应的管理接口。通过 wx.getFileSystemManager() 可以获取到全局唯一的文件系统管理器，所有文件系统的管理操作通过 FileSystemManager 来调用。 const fs = wx.getFileSystemManager(); 文件主要分为两大类: 代码包文件: 代码包文件指的是在项目目录中添加的文件。 本地文件: 通过调用接口本地产生，或通过网络下载下来，存储到本地的文件。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2021-03-21T09:22:34.000Z"}],["meta",{"property":"article:modified_time","content":"2021-03-21T09:22:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文件系统\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-03-21T09:22:34.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"代码包文件","slug":"代码包文件","link":"#代码包文件","children":[{"level":3,"title":"访问代码包文件","slug":"访问代码包文件","link":"#访问代码包文件","children":[]},{"level":3,"title":"修改代码包文件","slug":"修改代码包文件","link":"#修改代码包文件","children":[]},{"level":3,"title":"本地文件","slug":"本地文件","link":"#本地文件","children":[]},{"level":3,"title":"本地临时文件","slug":"本地临时文件","link":"#本地临时文件","children":[]},{"level":3,"title":"本地缓存文件","slug":"本地缓存文件","link":"#本地缓存文件","children":[]},{"level":3,"title":"本地用户文件","slug":"本地用户文件","link":"#本地用户文件","children":[]},{"level":3,"title":"清理策略","slug":"清理策略","link":"#清理策略","children":[]}]}],"git":{"createdTime":1604856934000,"updatedTime":1616318554000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4}]},"readingTime":{"minutes":4.51,"words":1353},"filePathRelative":"code/mini-app/guide/ability/file-system.md","localizedDate":"2020年11月8日","excerpt":"<p>文件系统是小程序提供的一套以小程序和用户维度隔离的存储以及一套相应的管理接口。通过 <code>wx.getFileSystemManager()</code> 可以获取到全局唯一的文件系统管理器，所有文件系统的管理操作通过 FileSystemManager 来调用。</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> fs <span class=\\"token operator\\">=</span> wx<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getFileSystemManager</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div><p>文件主要分为两大类:</p>\\n<ul>\\n<li>代码包文件: 代码包文件指的是在项目目录中添加的文件。</li>\\n<li>本地文件: 通过调用接口本地产生，或通过网络下载下来，存储到本地的文件。</li>\\n</ul>\\n","autoDesc":true}');export{e as data};
