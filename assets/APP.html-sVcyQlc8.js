import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as i,c as o,f as l,d as a,e,a as s,b as t}from"./app-S62fdHqc.js";const c="/assets/navbar1-tKDoyN6O.jpg",d="/assets/navbar2-Zd5AFkVD.jpg",h="/assets/navbar3-oBexKBM6.jpg",m="/assets/tab1-ylkMsVO8.jpg",g="/assets/tab2-tLoQaeQQ.jpg",_="/assets/pc-pOJZcbFh.png",b="/assets/phone-DnSgeiUt.png",u="/assets/phone1-zzGH9jwJ.png",f="/assets/phone2-2WTBtcji.png",y="/assets/sider1-_F2NXGJm.jpg",P="/assets/sider2-OQqQX6wa.png",x="/assets/grid1-kxfsM6sD.jpg",k="/assets/grid2-qwKz8UAP.jpg",v={},z=a("p",null,"本文对应用程序设计中常见的组件及其作用进行了介绍。",-1),A=t('<h2 id="页面总体布局" tabindex="-1"><a class="header-anchor" href="#页面总体布局"><span>页面总体布局</span></a></h2><ul><li><h3 id="navigationbar" tabindex="-1"><a class="header-anchor" href="#navigationbar"><span>navigationbar</span></a></h3><p>简称 Navbar 也就是导航栏。</p><p>主要负责承接页面的导航操作。</p><p>在内部界面上，一般左侧展示返回操作，居中显示页面标题，右侧展示更多操作。</p><p>在主页上，主要承载 tabpage 对应的功能展示与触发。</p><p>在 navbar 上，设计要突出质感，应该以简约为主。</p><p>使用不鲜明的颜色，可以使用 APP 或网页对的主体色。</p><p>可附以纯色 icon。</p><p>不能太吸睛导致用户对页面内容注意的分散。</p><p>有条件的情况下应该设计其切换动效。</p><p><img src="'+c+'" alt="图片" loading="lazy"><img src="'+d+'" alt="图片" loading="lazy"><img src="'+h+'" alt="图片" loading="lazy"></p></li></ul>',2),M={href:"https://www.jianshu.com/p/6037e4f79f4d",target:"_blank",rel:"noopener noreferrer"},j=t('<ul><li><h3 id="tabbar" tabindex="-1"><a class="header-anchor" href="#tabbar"><span>Tabbar</span></a></h3><p>APP 打开后底部的操作栏叫 tabbar，一般设置 2-5 个模块，每个模块应该设计 logo 与文字，对应的界面叫 tabpage。</p><p>在 logo 上应以简约为主，应当设计设置点击与激活效果。</p><p>tabpage 的设置要慎重，分类展示 APP 最关键的几个分项设置，并在每个界面内展示具体内容。</p><p><img src="'+m+'" alt="图片" loading="lazy"><img src="'+g+'" alt="图片" loading="lazy"></p></li></ul><h3 id="page" tabindex="-1"><a class="header-anchor" href="#page"><span>Page</span></a></h3><p>App 每个页面的背景色，除了纯文章之外不应采用纯白色，设计可以向 APP 主题色靠拢。</p><p>应当针对不同设备造成的不同长宽比、分辨率设置不同的页面排版样式，并制作不同的 UI 布局。</p><p><img src="'+_+'" alt="图片" loading="lazy"><img src="'+b+'" alt="图片" loading="lazy"><img src="'+u+'" alt="图片" loading="lazy"><img src="'+f+'" alt="图片" loading="lazy"></p><ul><li><h3 id="sider" tabindex="-1"><a class="header-anchor" href="#sider"><span>Sider</span></a></h3><p>侧边栏，可以设置侧边固定按钮点击弹出或者从左向右滑动弹出式。</p><p>一般用于承载不需要展示的一些设置项、介绍项、个人信息项。</p><p><img src="'+y+'" alt="图片" loading="lazy"><img src="'+P+'" alt="图片" loading="lazy"></p></li></ul><h2 id="ui-元素" tabindex="-1"><a class="header-anchor" href="#ui-元素"><span>UI 元素</span></a></h2>',7),N=t('<li><h3 id="grid" tabindex="-1"><a class="header-anchor" href="#grid"><span>Grid</span></a></h3><p>九宫格结构，实际使用的时候 3×3、4×2 都有广泛使用。</p><p>Gird 结构主要用于罗列展示各项功能，或者是各项板块。</p><p>各元素应该以上部的圆形或异形图标于下部的说明文字为主。</p><p>在移动设备上一般不显示边框、不设计点击动效，而在 PC 与 HD 恰好相反。</p><p><img src="'+x+'" alt="图片" loading="lazy"><img src="'+k+'" alt="图片" loading="lazy"></p></li><li><h3 id="menu" tabindex="-1"><a class="header-anchor" href="#menu"><span>Menu</span></a></h3><p>菜单有多种表现方式，比如 float menu、pop-up menu、modal menu、dropdown 等。</p></li>',2),T={id:"其他元素可以参考ant-design",tabindex:"-1"},w={class:"header-anchor",href:"#其他元素可以参考ant-design"},H={href:"https://vue.ant.design/docs/vue/introduce-cn/",target:"_blank",rel:"noopener noreferrer"},S=t('<h2 id="杂项" tabindex="-1"><a class="header-anchor" href="#杂项"><span>杂项</span></a></h2><h3 id="mask-设计" tabindex="-1"><a class="header-anchor" href="#mask-设计"><span>Mask 设计</span></a></h3><p>灰色的半透明遮罩叫 mask</p><p>当透明度很高，感受很小的时候一般设计成可穿透，也就是说点击相当于直接点击蒙层下部区域。</p><p>透明度中等的一般式可触摸做取消热区的，也就是点击会取消。</p><p>不可穿透的 mask，也就是说点击没有反应，一般要给非常高的不透明度，用户只能点叉号取消。(一般用于弹出推广)</p><h3 id="设计趋势" tabindex="-1"><a class="header-anchor" href="#设计趋势"><span>设计趋势</span></a></h3><p>目前以 iOS 特有的苹果风，Windows 上的 Aero 效果(毛玻璃效果)与安卓的 Material Design 设计为主。</p><h4 id="图标" tabindex="-1"><a class="header-anchor" href="#图标"><span>图标</span></a></h4><p>常用实心矢量图标</p><h4 id="移动端" tabindex="-1"><a class="header-anchor" href="#移动端"><span>移动端</span></a></h4><p>分割线和边框目前采用已经比较少。</p><h4 id="pc" tabindex="-1"><a class="header-anchor" href="#pc"><span>PC</span></a></h4><p>增强鼠标移动与网页的交互带来沉浸式的体验。</p><h4 id="突出质感" tabindex="-1"><a class="header-anchor" href="#突出质感"><span>突出质感</span></a></h4><p>因为不同机型现实效果不一样，普遍采用圆角、阴影、以及毛玻璃效果，还有避免用纯色背景转而用略蓝略灰的色调突出质感。</p><h4 id="增强反馈感" tabindex="-1"><a class="header-anchor" href="#增强反馈感"><span>增强反馈感</span></a></h4><p>每次点击时和点击之后出发的效果都能在屏幕上让用户感知自己的操作(即我刚刚点了按钮，按钮生效产生了某种操作)</p>',18);function D(O,Z){const n=r("ExternalLinkIcon");return i(),o("div",null,[z,l(" more "),A,a("p",null,[e("好文推荐: "),a("a",M,[e("iOS 导航栏动效设计思路"),s(n)])]),j,a("ul",null,[N,a("li",null,[a("h3",T,[a("a",w,[a("span",null,[e("其他元素可以参考"),a("a",H,[e("Ant-design"),s(n)])])])])])]),S])}const V=p(v,[["render",D],["__file","APP.html.vue"]]),B=JSON.parse('{"path":"/design/APP.html","title":"APP 组件设计规范","lang":"zh-CN","frontmatter":{"title":"APP 组件设计规范","icon":"app","date":"2019-11-24T00:00:00.000Z","category":"设计","tag":["UI"],"description":"本文对应用程序设计中常见的组件及其作用进行了介绍。 页面总体布局 navigationbar 简称 Navbar 也就是导航栏。 主要负责承接页面的导航操作。 在内部界面上，一般左侧展示返回操作，居中显示页面标题，右侧展示更多操作。 在主页上，主要承载 tabpage 对应的功能展示与触发。 在 navbar 上，设计要突出质感，应该以简约为主。 使用...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/design/APP.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"APP 组件设计规范"}],["meta",{"property":"og:description","content":"本文对应用程序设计中常见的组件及其作用进行了介绍。 页面总体布局 navigationbar 简称 Navbar 也就是导航栏。 主要负责承接页面的导航操作。 在内部界面上，一般左侧展示返回操作，居中显示页面标题，右侧展示更多操作。 在主页上，主要承载 tabpage 对应的功能展示与触发。 在 navbar 上，设计要突出质感，应该以简约为主。 使用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"UI"}],["meta",{"property":"article:published_time","content":"2019-11-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"APP 组件设计规范\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-11-24T00:00:00.000Z\\",\\"dateModified\\":\\"2022-02-06T16:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"页面总体布局","slug":"页面总体布局","link":"#页面总体布局","children":[{"level":3,"title":"Page","slug":"page","link":"#page","children":[]}]},{"level":2,"title":"UI 元素","slug":"ui-元素","link":"#ui-元素","children":[]},{"level":2,"title":"杂项","slug":"杂项","link":"#杂项","children":[{"level":3,"title":"Mask 设计","slug":"mask-设计","link":"#mask-设计","children":[]},{"level":3,"title":"设计趋势","slug":"设计趋势","link":"#设计趋势","children":[]}]}],"git":{"createdTime":1600101470000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3}]},"readingTime":{"minutes":3.13,"words":939},"filePathRelative":"design/APP.md","localizedDate":"2019年11月24日","excerpt":"<p>本文对应用程序设计中常见的组件及其作用进行了介绍。</p>\\n","autoDesc":true}');export{V as comp,B as data};
