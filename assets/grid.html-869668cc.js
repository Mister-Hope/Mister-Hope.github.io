const e=JSON.parse('{"key":"v-6383d537","path":"/code/website/css/layout/grid.html","title":"网格布局","lang":"zh-CN","frontmatter":{"title":"网格布局","author":"阮一峰","icon":"grid","date":"2020-10-20T00:00:00.000Z","category":"CSS","copyright":"自由转载-非商用-非衍生-保持署名 (创意共享3.0许可证)","description":"概述 网格布局 (Grid) 是最强大的 CSS 布局方案。它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。 网格布局案例 上图这样的布局，就是 Grid 布局的拿手好戏。 与 flex 的区别 Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别。 Flex 布局是轴线布局，...","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/website/css/layout/grid.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"网格布局"}],["meta",{"property":"og:description","content":"概述 网格布局 (Grid) 是最强大的 CSS 布局方案。它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。 网格布局案例 上图这样的布局，就是 Grid 布局的拿手好戏。 与 flex 的区别 Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别。 Flex 布局是轴线布局，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mrhope.site/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-05-18T14:17:40.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"网格布局"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2020-10-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-05-18T14:17:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"网格布局\\",\\"image\\":[\\"https://mrhope.site/\\"],\\"datePublished\\":\\"2020-10-20T00:00:00.000Z\\",\\"dateModified\\":\\"2022-05-18T14:17:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"阮一峰\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mrhope.site/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mrhope.site/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mrhope.site/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[{"level":3,"title":"容器和项目","slug":"容器和项目","link":"#容器和项目","children":[]},{"level":3,"title":"行和列","slug":"行和列","link":"#行和列","children":[]},{"level":3,"title":"单元格","slug":"单元格","link":"#单元格","children":[]},{"level":3,"title":"网格线","slug":"网格线","link":"#网格线","children":[]},{"level":3,"title":"沟槽","slug":"沟槽","link":"#沟槽","children":[]}]},{"level":2,"title":"容器属性","slug":"容器属性","link":"#容器属性","children":[{"level":3,"title":"display 属性","slug":"display-属性","link":"#display-属性","children":[]},{"level":3,"title":"grid-template-columns 和 grid-template-rows 属性","slug":"grid-template-columns-和-grid-template-rows-属性","link":"#grid-template-columns-和-grid-template-rows-属性","children":[]},{"level":3,"title":"row-gap 属性、column-gap 属性 和 gap 属性","slug":"row-gap-属性、column-gap-属性-和-gap-属性","link":"#row-gap-属性、column-gap-属性-和-gap-属性","children":[]},{"level":3,"title":"grid-template-areas 属性","slug":"grid-template-areas-属性","link":"#grid-template-areas-属性","children":[]},{"level":3,"title":"grid-auto-flow 属性","slug":"grid-auto-flow-属性","link":"#grid-auto-flow-属性","children":[]},{"level":3,"title":"justify-items 属性，align-items 属性 和 place-items 属性","slug":"justify-items-属性-align-items-属性-和-place-items-属性","link":"#justify-items-属性-align-items-属性-和-place-items-属性","children":[]},{"level":3,"title":"justify-content 属性，align-content 属性 和 place-content 属性","slug":"justify-content-属性-align-content-属性-和-place-content-属性","link":"#justify-content-属性-align-content-属性-和-place-content-属性","children":[]},{"level":3,"title":"grid-auto-columns 属性 和 grid-auto-rows 属性","slug":"grid-auto-columns-属性-和-grid-auto-rows-属性","link":"#grid-auto-columns-属性-和-grid-auto-rows-属性","children":[]},{"level":3,"title":"grid-template 属性 和 grid 属性","slug":"grid-template-属性-和-grid-属性","link":"#grid-template-属性-和-grid-属性","children":[]}]},{"level":2,"title":"项目属性","slug":"项目属性","link":"#项目属性","children":[{"level":3,"title":"位置指定","slug":"位置指定","link":"#位置指定","children":[]},{"level":3,"title":"grid-column 属性 和 grid-row 属性","slug":"grid-column-属性-和-grid-row-属性","link":"#grid-column-属性-和-grid-row-属性","children":[]},{"level":3,"title":"grid-area 属性","slug":"grid-area-属性","link":"#grid-area-属性","children":[]},{"level":3,"title":"justify-self 属性，align-self 属性 和 place-self 属性","slug":"justify-self-属性-align-self-属性-和-place-self-属性","link":"#justify-self-属性-align-self-属性-和-place-self-属性","children":[]}]}],"git":{"createdTime":1603130583000,"updatedTime":1652883460000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":16},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":31.84,"words":9551},"filePathRelative":"code/website/css/layout/grid.md","localizedDate":"2020年10月20日","excerpt":"","autoDesc":true}');export{e as data};
