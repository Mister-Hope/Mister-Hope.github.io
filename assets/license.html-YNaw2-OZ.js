import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as a,c as o,f as i,a as n,d as e,b as r}from"./app-S62fdHqc.js";const c={},s=e("p",null,"开源软件在追求“自由”的同时，不能牺牲程序员的利益，否则将会影响程序员的创造激情，因此世界上现在有 60 多种被开源促进组织 (Open Source Initiative) 认可的开源许可协议来保证开源工作者的权益。",-1),h=e("p",null,"开源协议规定了您在使用开源软件时的权利和责任，也就是规定了您可以做什么，不可以做什么。",-1),d=e("p",null,"开源协议虽然不一定具备法律效力，但是当涉及软件版权纠纷时，开源协议也是非常重要的证据之一。",-1),m=r('<p>对于准备编写一款开源软件的开发人员，也非常建议先了解一下当前最热门的开源许可协议，选择一个合适的开源许可协议来最大限度保护自己的软件权益。</p><h2 id="gnu-gpl" tabindex="-1"><a class="header-anchor" href="#gnu-gpl"><span>GNU GPL</span></a></h2><blockquote><p>GNU General Public License，GNU 通用公共许可证</p></blockquote><p>只要软件中包含了遵循 GPL 协议的产品或代码，该软件就必须也遵循 GPL 许可协议，也就是必须开源免费，不能闭源收费，因此这个协议并不适合商用软件。</p><p>遵循 GPL 协议的开源软件数量极其庞大，包括 Linux 系统在内的大多数的开源软件都是基于这个协议的。</p><p>GPL 开源协议的主要特点:</p><ul><li><p>复制自由</p><p>允许把软件复制到任何人的电脑中，并且不限制复制的数量。</p></li><li><p>传播自由</p></li></ul><p>允许软件以各种形式进行传播。</p><ul><li><p>收费传播</p><p>允许在各种媒介上出售该软件，但必须提前让买家知道这个软件是可以免费获得的；因此，一般来讲，开源软件都是通过为用户提供有偿服务的形式来盈利的。</p></li><li><p>修改自由</p><p>允许开发人员增加或删除软件的功能，但软件修改后必须依然基于 GPL 许可协议授权。</p></li></ul><h2 id="bsd" tabindex="-1"><a class="header-anchor" href="#bsd"><span>BSD</span></a></h2><blockquote><p>Berkeley Software Distribution，伯克利软件发布版) 协议</p></blockquote><p>BSD 协议基本上允许用户“为所欲为”，用户可以使用、修改和重新发布遵循该许可的软件，并且可以将软件作为商业软件发布和销售，前提是需要满足下面三个条件:</p><ul><li>如果再发布的软件中包含源代码，则源代码必须继续遵循 BSD 许可协议。</li><li>如果再发布的软件中只有二进制程序，则需要在相关文档或版权文件中声明原始代码遵循了 BSD 协议。</li><li>不允许用原始软件的名字、作者名字或机构名称进行市场推广。</li></ul><p>BSD 对商业比较友好，很多公司在选用开源产品的时候都首选 BSD 协议，因为可以完全控制这些第三方的代码，甚至在必要的时候可以修改或者二次开发。</p><h2 id="apache-许可证版本" tabindex="-1"><a class="header-anchor" href="#apache-许可证版本"><span>Apache 许可证版本</span></a></h2><blockquote><p>(Apache License Version) 协议</p></blockquote><p>Apache 开源协议</p><p>Apache 和 BSD 类似，都适用于商业软件。Apache 协议在为开发人员提供版权及专利许可的同时，允许用户拥有修改代码及再发布的自由。</p><p>现在热门的 Hadoop、Apache HTTP Server、MongoDB 等项目都是基于该许可协议研发的，程序开发人员在开发遵循该协议的软件时，要严格遵守下面的四个条件:</p><ul><li>该软件及其衍生品必须继续使用 Apache 许可协议。</li><li>如果修改了程序源代码，需要在文档中进行声明。</li><li>若软件是基于他人的源代码编写而成的，则需要保留原始代码的协议、商标、专利声明及其他原作者声明的内容信息。</li><li>如果再发布的软件中有声明文件，则需在此文件中标注 Apache 许可协议及其他许可协议。</li></ul><h2 id="mit" tabindex="-1"><a class="header-anchor" href="#mit"><span>MIT</span></a></h2><blockquote><p>(Massachusetts Institute of Technology) 协议</p></blockquote><p>目前限制最少的开源许可协议之一(比 BSD 和 Apache 的限制都少)，只要程序的开发者在修改后的源代码中保留原作者的许可信息即可，因此普遍被商业软件所使用。</p><p>使用 MIT 协议的软件有 PuTTY、X Window System、Ruby on Rails、Lua 5.0 onwards、Mono 等。</p><h2 id="gun-lgpl" tabindex="-1"><a class="header-anchor" href="#gun-lgpl"><span>GUN LGPL</span></a></h2><blockquote><p>(GNU Lesser General Public License，GNU 宽通用公共许可证)</p></blockquote><p>LGPL 是 GPL 的一个衍生版本，也被称为 GPL V2，该协议主要是为类库设计的开源协议。</p><p>LGPL 允许商业软件通过类库引用(link)的方式使用 LGPL 类库，而不需要开源商业软件的代码。这使得采用 LGPL 协议的开源代码可以被商业软件作为类库引用并发布和销售。</p><p>但是如果修改 LGPL 协议的代码或者衍生品，则所有修改的代码，涉及修改部分的额外代码和衍生的代码都必须采用 LGPL 协议。因此 LGPL 协议的开源代码很适合作为第三方类库被商业软件引用，但不适合希望以 LGPL 协议代码为基础，通过修改和衍生的方式做二次开发的商业软件采用。</p><h2 id="如何选择开源协议" tabindex="-1"><a class="header-anchor" href="#如何选择开源协议"><span>如何选择开源协议</span></a></h2><p>世界上的开源协议有上百种，很少有人能彻底搞清它们之间的区别，即使在最流行的六种开源协议——GPL、BSD、MIT、Mozilla、Apache 和 LGPL——之中做选择，也很复杂。</p><p>乌克兰程序员 Paul Bagwell 画了一张分析图，说明应该怎么选择开源协议，大家看了一目了然，真是清爽。</p>',32);function u(g,L){const t=p("FlowChart");return a(),o("div",null,[s,h,d,i(" more "),m,n(t,{id:"flowchart-176",code:"eJxlUU1LAlEU3b9fMcuCWvjRRlApiggUgvoDopIDMiM6LmqlGZiZOsGgkvRhklmg0yLEj9Q/896b8V/05t1RGNvM8M4959x77s0o/kBGiaQVn0B+c+SjvMyVaPkTxf2BuBTzCUdSDEVlKebyB6yfqIiy5BPwtI4nE7wYUG1MJ6rxmidqFdGmTtQuqel4+r5s9FmBS90OKdVreJTDoy9Qm4ui8XhD60U8HdoGy8LM7OapNjdmA6N0S58Kpv5Dm9Ugd/M43Mx2xdBezBlrOWQ+ZLwgD3fILMyYj6H16HXPQtUK6TfworDUcmDidY5U/yZvz3jaYTlgBNYfMbnRGhH13hyMWCZTz4N2z6ld8Ylub4I1hGiI1lQ8b8HwLCFtd4JoPxWJJthyRSmVVeSswr4+AUAUPjnfKDAEHZwdbqAMQcenoQ2UISgsX4nJZGTTBVAU+i+yIIQyyi7P5IJTb13GMztCWrxIKNtQcNsFSbYBL1yWM1dEOwUU1kwPXM3BtGIBymlWHm5qkdjbmgnekrzW8NXDAWzaKhZg3InH+QM+10sD",preset:"vue"})])}const y=l(c,[["render",u],["__file","license.html.vue"]]),P=JSON.parse('{"path":"/code/basic/license.html","title":"开源协议","lang":"zh-CN","frontmatter":{"title":"开源协议","icon":"license","date":"2019-12-27T00:00:00.000Z","category":"基础","order":9,"description":"开源软件在追求“自由”的同时，不能牺牲程序员的利益，否则将会影响程序员的创造激情，因此世界上现在有 60 多种被开源促进组织 (Open Source Initiative) 认可的开源许可协议来保证开源工作者的权益。 开源协议规定了您在使用开源软件时的权利和责任，也就是规定了您可以做什么，不可以做什么。 开源协议虽然不一定具备法律效力，但是当涉及软件...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/basic/license.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"开源协议"}],["meta",{"property":"og:description","content":"开源软件在追求“自由”的同时，不能牺牲程序员的利益，否则将会影响程序员的创造激情，因此世界上现在有 60 多种被开源促进组织 (Open Source Initiative) 认可的开源许可协议来保证开源工作者的权益。 开源协议规定了您在使用开源软件时的权利和责任，也就是规定了您可以做什么，不可以做什么。 开源协议虽然不一定具备法律效力，但是当涉及软件..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2019-12-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"开源协议\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-12-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"GNU GPL","slug":"gnu-gpl","link":"#gnu-gpl","children":[]},{"level":2,"title":"BSD","slug":"bsd","link":"#bsd","children":[]},{"level":2,"title":"Apache 许可证版本","slug":"apache-许可证版本","link":"#apache-许可证版本","children":[]},{"level":2,"title":"MIT","slug":"mit","link":"#mit","children":[]},{"level":2,"title":"GUN LGPL","slug":"gun-lgpl","link":"#gun-lgpl","children":[]},{"level":2,"title":"如何选择开源协议","slug":"如何选择开源协议","link":"#如何选择开源协议","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":6},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":5.27,"words":1582},"filePathRelative":"code/basic/license.md","localizedDate":"2019年12月27日","excerpt":"<p>开源软件在追求“自由”的同时，不能牺牲程序员的利益，否则将会影响程序员的创造激情，因此世界上现在有 60 多种被开源促进组织 (Open Source Initiative) 认可的开源许可协议来保证开源工作者的权益。</p>\\n<p>开源协议规定了您在使用开源软件时的权利和责任，也就是规定了您可以做什么，不可以做什么。</p>\\n<p>开源协议虽然不一定具备法律效力，但是当涉及软件版权纠纷时，开源协议也是非常重要的证据之一。</p>\\n","autoDesc":true}');export{y as comp,P as data};
