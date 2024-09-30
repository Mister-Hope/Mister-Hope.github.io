import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,d as a,e as k,b as t,g as s,a as l,f as n,r as d,o as r}from"./app-D_3IGtdL.js";const o={};function g(A,i){const e=d("RouteLink");return r(),p("div",null,[i[6]||(i[6]=a("p",null,"宿主环境是微信客户端给小程序所提供的环境。小程序借助宿主环境提供的能力，可以完成许多普通网页无法完成的功能。",-1)),k(" more "),i[7]||(i[7]=t(`<h2 id="渲染层和逻辑层" tabindex="-1"><a class="header-anchor" href="#渲染层和逻辑层"><span>渲染层和逻辑层</span></a></h2><p>小程序的运行环境分成渲染层和逻辑层。</p><ul><li>WXML 模板和 WXSS 样式工作在渲染层；</li><li>JS 脚本工作在逻辑层。</li></ul><p>小程序的渲染层和逻辑层分别由 2 个线程管理:</p><ul><li>渲染层的界面使用了 WebView 进行渲染；</li><li>逻辑层采用 JsCore 线程运行 JS 脚本。</li></ul><p>一个小程序存在多个界面，所以渲染层存在多个 WebView 线程，这两个线程的通信会经由微信客户端(Native)做中转，逻辑层发送网络请求也经由 Native 转发，小程序的通信模型下图所示。</p><figure><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/4-1.ad156d1c.png" alt="通信模型" tabindex="0" loading="lazy"><figcaption>通信模型</figcaption></figure><h2 id="程序与页面" tabindex="-1"><a class="header-anchor" href="#程序与页面"><span>程序与页面</span></a></h2><p>微信客户端在打开小程序之前，会把整个小程序的代码包下载到本地。</p><p>客户端通过 <code>app.json</code> 的 <code>pages</code> 字段获得当前小程序的所有页面路径:</p><div class="language-json" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;pages&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pages/index/index&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pages/logs/logs&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>QuickStart 项目通过该配置定义了两个页面，分别位于 <code>pages/index/index</code> 和 <code>pages/logs/logs</code>。写在 <code>pages</code> 字段的第一个页面就是这个小程序的首页(打开小程序看到的第一个页面)。</p></div><p>于是微信客户端就把首页的代码装载进来，染出这个首页。</p><p>小程序启动之后，在 <code>app.js</code> 定义的 <code>App</code> 实例的 <code>onLaunch</code> 回调会被执行:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">App</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  onLaunch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 小程序启动之后 触发</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre></div>`,15)),a("p",null,[i[1]||(i[1]=s("整个小程序只有一个 App 实例，是全部页面共享的，更多的事件回调参考文档 ")),l(e,{to:"/code/mini-app/guide/service/app.html"},{default:n(()=>i[0]||(i[0]=[s("注册程序 App")])),_:1}),i[2]||(i[2]=s(" 。"))]),i[8]||(i[8]=t(`<p>接下来我们简单看看小程序的一个页面是怎么写的。</p><p>您可以观察到 <code>pages/logs/logs</code> 下其实是包括了 4 种文件的，微信客户端会先根据 <code>logs.json</code> 配置生成一个界面，顶部的颜色和文字您都可以在这个 json 文件里边定义好。紧接着客户端就会装载这个页面的 WXML 结构和 WXSS 样式。最后客户端会装载 <code>logs.js</code>，您可以看到 <code>logs.js</code> 的大体内容就是:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Page</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 参与页面渲染的数据</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    logs</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  onLoad</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 页面渲染后 执行</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre></div><p>Page 是一个页面构造器，这个构造器就生成了一个页面。在生成页面的时候，小程序框架会把 <code>data</code> 数据和对应的 wxml 一起渲染出最终的结构，于是就得到了您看到的小程序的样子。</p><p>在渲染完界面之后，页面实例就会收到一个 <code>onLoad</code> 的回调，您可以在这个回调处理您的逻辑。</p>`,5)),a("p",null,[i[4]||(i[4]=s("有关于 Page 构造器更多详细的文档参考 ")),l(e,{to:"/code/mini-app/guide/service/page.html"},{default:n(()=>i[3]||(i[3]=[s("注册页面 Page")])),_:1}),i[5]||(i[5]=s("。"))]),i[9]||(i[9]=t(`<h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h2><p>小程序提供了丰富的基础组件给开发者，开发者可以像搭积木一样，组合各种组件拼合成自己的小程序。</p><p>就像 HTML 的 <code>div</code>, <code>p</code> 等标签一样，在小程序里边，您只需要在 WXML 写上对应的组件标签名字就可以把该组件显示在界面上，例如，您需要在界面上显示地图，您只需要这样写即可:</p><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">map</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre></div><p>使用组件的时候，还可以通过属性传递值给组件，让组件可以以不同的状态去展现，例如，我们希望地图一开始的中心的经纬度是长春，那么您需要声明地图的 <code>longitude</code>(中心经度) 和 <code>latitude</code>(中心纬度)两个属性:</p><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">map</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> longitude</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;长春经度&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> latitude</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;长春纬度&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre></div><p>组件的内部行为也会通过事件的形式让开发者可以感知，例如用户点击了地图上的某个标记，您可以在 js 编写 markertap 函数来处理:</p><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">map</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> bindmarkertap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;markertap&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> longitude</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;长春经度&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> latitude</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;长春纬度&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre></div><p>当然您也可以通过 <code>style</code> 或者 <code>class</code> 来控制组件的外层样式，以便适应您的界面宽度高度等等。</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h2><p>为了让开发者可以很方便的调起微信提供的能力，例如获取用户信息、微信支付等等，小程序提供了很多 API 给开发者去使用。</p><p>要获取用户的地理位置时，只需要:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">wx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getLocation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  type</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;wgs84&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  success</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    const</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">latitude</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">longitude</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 获取经纬度</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">latitude</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">longitude</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre></div><p>调用微信扫一扫能力，只需要:</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">wx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">scanCode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  success</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre></div><p>需要注意的是: 多数 API 的回调都是异步，您需要处理好代码逻辑的异步问题。</p><p>更多的 API 能力见 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/" target="_blank" rel="noopener noreferrer">小程序的 API</a>。</p>`,17))])}const y=h(o,[["render",g],["__file","env.html.vue"]]),F=JSON.parse('{"path":"/code/mini-app/guide/env.html","title":"宿主环境","lang":"zh-CN","frontmatter":{"date":"2020-10-09T00:00:00.000Z","title":"宿主环境","icon":"leaf","category":"小程序","description":"宿主环境是微信客户端给小程序所提供的环境。小程序借助宿主环境提供的能力，可以完成许多普通网页无法完成的功能。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/mini-app/guide/env.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"宿主环境"}],["meta",{"property":"og:description","content":"宿主环境是微信客户端给小程序所提供的环境。小程序借助宿主环境提供的能力，可以完成许多普通网页无法完成的功能。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://res.wx.qq.com/wxdoc/dist/assets/img/4-1.ad156d1c.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2020-10-09T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"宿主环境\\",\\"image\\":[\\"https://res.wx.qq.com/wxdoc/dist/assets/img/4-1.ad156d1c.png\\"],\\"datePublished\\":\\"2020-10-09T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"渲染层和逻辑层","slug":"渲染层和逻辑层","link":"#渲染层和逻辑层","children":[]},{"level":2,"title":"程序与页面","slug":"程序与页面","link":"#程序与页面","children":[]},{"level":2,"title":"组件","slug":"组件","link":"#组件","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[]}],"readingTime":{"minutes":3.97,"words":1192},"filePathRelative":"code/mini-app/guide/env.md","localizedDate":"2020年10月9日","excerpt":"<p>宿主环境是微信客户端给小程序所提供的环境。小程序借助宿主环境提供的能力，可以完成许多普通网页无法完成的功能。</p>\\n","autoDesc":true}');export{y as comp,F as data};
