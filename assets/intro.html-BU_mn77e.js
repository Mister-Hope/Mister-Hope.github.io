import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as n,c as s,f as i,d as e,e as o,a,b as c}from"./app-BBDjrnAY.js";const l={},d=e("p",null,"从本章开始，我们就正式开启 JavaScript 的后端开发之旅。",-1),m=e("p",null,"Node.js 是目前非常火热的技术，但是它的诞生经历却很奇特。",-1),h=c('<p>众所周知，在 Netscape 设计出 JavaScript 后的短短几个月，JavaScript 事实上已经是前端开发的唯一标准。</p><p>后来，微软通过 IE 击败了 Netscape 后一统桌面，结果几年时间，浏览器毫无进步。(2001 年推出的古老的 IE 6 到今天仍然有人在使用! )</p><p>没有竞争就没有发展。微软认为 IE6 浏览器已经非常完善，几乎没有可改进之处，然后解散了 IE6 开发团队! 而 Google 却认为支持现代 Web 应用的新一代浏览器才刚刚起步，尤其是浏览器负责运行 JavaScript 的引擎性能还可提升 10 倍。</p><p>先是 Mozilla 借助已壮烈牺牲的 Netscape 遗产在 2002 年推出了 Firefox 浏览器，紧接着 Apple 于 2003 年在开源的 KHTML 浏览器的基础上推出了 WebKit 内核的 Safari 浏览器，不过仅限于 Mac 平台。</p><p>随后，Google 也开始创建自家的浏览器。他们也看中了 WebKit 内核，于是基于 WebKit 内核推出了 Chrome 浏览器。</p><p>Chrome 浏览器是跨 Windows 和 Mac 平台的，并且，Google 认为要运行现代 Web 应用，浏览器必须有一个性能非常强劲的 JavaScript 引擎，于是 Google 自己开发了一个高性能 JavaScript 引擎，名字叫 V8，以 BSD 许可证开源。</p><p>现代浏览器大战让微软的 IE 浏览器远远地落后了，因为他们解散了最有经验、战斗力最强的浏览器团队! 回过头再追赶却发现，支持 HTML5 的 WebKit 已经成为手机端的标准了，IE 浏览器从此与主流移动端设备绝缘。</p><h2 id="浏览器大战和-node-js-的关系" tabindex="-1"><a class="header-anchor" href="#浏览器大战和-node-js-的关系"><span>浏览器大战和 Node.js 的关系</span></a></h2><p>话说有个叫 Ryan Dahl 的歪果仁，他的工作是用 C/C++写高性能 Web 服务。对于高性能，异步 IO、事件驱动是基本原则，但是用 C/C++写就太痛苦了。于是这位仁兄开始设想用高级语言开发 Web 服务。他评估了很多种高级语言，发现很多语言虽然同时提供了同步 IO 和异步 IO，但是开发人员一旦用了同步 IO，他们就再也懒得写异步 IO 了，所以，最终，Ryan 瞄向了 JavaScript。</p><p>因为 JavaScript 是单线程执行，根本不能进行同步 IO 操作，所以，JavaScript 的这一“缺陷”导致了它只能使用异步 IO。</p><p>选定了开发语言，还要有运行时引擎。这位仁兄曾考虑过自己写一个，不过明智地放弃了，因为 V8 就是开源的 JavaScript 引擎。让 Google 投资去优化 V8，咱只负责改造一下拿来用，还不用付钱，这个买卖很划算。</p><p>于是在 2009 年，Ryan 正式推出了基于 JavaScript 语言和 V8 引擎的开源 Web 服务器项目，命名为 Node.js。虽然名字很土，但是，Node.js 第一次把 JavaScript 带入到后端服务器开发，加上世界上已经有无数的 JavaScript 开发人员，所以 Node.js 一下子就火了起来。</p><h2 id="在-node-js-上运行的-javascript-相比其他后端开发语言的优势" tabindex="-1"><a class="header-anchor" href="#在-node-js-上运行的-javascript-相比其他后端开发语言的优势"><span>在 Node.js 上运行的 JavaScript 相比其他后端开发语言的优势</span></a></h2><p>最大的优势是借助 JavaScript 天生的事件驱动机制加 V8 高性能引擎，使编写高性能 Web 服务轻而易举。</p><p>其次，JavaScript 语言本身是完善的函数式语言，在前端开发时，开发人员往往写得比较随意，让人感觉 JavaScript 就是个“玩具语言”。但是，在 Node.js 环境下，通过模块化的 JavaScript 代码，加上函数式编程，并且无需考虑浏览器兼容性问题，直接使用最新的 ECMAScript 6 标准，可以完全满足工程上的需求。</p><blockquote><p>我还听说过 io.js，这又是什么鬼?</p></blockquote><p>因为 Node.js 是开源项目，虽然由社区推动，但幕后一直由 Joyent 公司资助。由于一群开发者对 Joyent 公司的策略不满，于 2014 年从 Node.js 项目 fork 出了 io.js 项目，决定单独发展，但两者实际上是兼容的。</p><p>然而中国有句古话，叫做“分久必合，合久必分”。分家后没多久，Joyent 公司表示要和解，于是，io.js 项目又决定回归 Node.js。</p><p>具体做法是将来 io.js 将首先添加新的特性，如果大家测试用得爽，就把新特性加入 Node.js。Io.js 是“尝鲜版”，而 Node.js 是线上稳定版，相当于 Fedora Linux 和 RHEL 的关系。</p><p>本章教程的所有代码都在 Node.js 上调试通过。如果您要尝试 io.js 也是可以的，不过两者如果遇到一些区别请自行查看 io.js 的文档。</p><h2 id="node-js-相关链接" tabindex="-1"><a class="header-anchor" href="#node-js-相关链接"><span>Node.js 相关链接</span></a></h2>',21),j={href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://nodejs.org/zh-cn/docs/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://nodejs.org/dist/latest-v16.x/docs/api/",target:"_blank",rel:"noopener noreferrer"};function g(u,_){const t=p("ExternalLinkIcon");return n(),s("div",null,[d,m,i(" more "),h,e("ul",null,[e("li",null,[e("p",null,[e("a",j,[o("Node.js 官网"),a(t)])])]),e("li",null,[e("p",null,[e("a",N,[o("Node.js 最新文档"),a(t)])])]),e("li",null,[e("p",null,[e("a",v,[o("Node.js 最新 API 文档"),a(t)])])])])])}const y=r(l,[["render",g],["__file","intro.html.vue"]]),J=JSON.parse('{"path":"/code/node-js/intro.html","title":"Node.js","lang":"zh-CN","frontmatter":{"date":"2020-12-27T00:00:00.000Z","title":"Node.js","icon":"creative","order":1,"category":"Node.js","tag":["Node.js","软件","介绍"],"description":"从本章开始，我们就正式开启 JavaScript 的后端开发之旅。 Node.js 是目前非常火热的技术，但是它的诞生经历却很奇特。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/node-js/intro.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Node.js"}],["meta",{"property":"og:description","content":"从本章开始，我们就正式开启 JavaScript 的后端开发之旅。 Node.js 是目前非常火热的技术，但是它的诞生经历却很奇特。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"Node.js"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:tag","content":"介绍"}],["meta",{"property":"article:published_time","content":"2020-12-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Node.js\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"浏览器大战和 Node.js 的关系","slug":"浏览器大战和-node-js-的关系","link":"#浏览器大战和-node-js-的关系","children":[]},{"level":2,"title":"在 Node.js 上运行的 JavaScript 相比其他后端开发语言的优势","slug":"在-node-js-上运行的-javascript-相比其他后端开发语言的优势","link":"#在-node-js-上运行的-javascript-相比其他后端开发语言的优势","children":[]},{"level":2,"title":"Node.js 相关链接","slug":"node-js-相关链接","link":"#node-js-相关链接","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2}]},"readingTime":{"minutes":4.19,"words":1258},"filePathRelative":"code/node-js/intro.md","localizedDate":"2020年12月27日","excerpt":"<p>从本章开始，我们就正式开启 JavaScript 的后端开发之旅。</p>\\n<p>Node.js 是目前非常火热的技术，但是它的诞生经历却很奇特。</p>\\n","autoDesc":true}');export{y as comp,J as data};
