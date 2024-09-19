import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,d as s,f as n,a as l,w as t,e as d,b as m,r as o,o as c}from"./app-BGIrljxn.js";const u={},y={id:"响应的数据绑定",tabindex:"-1"},v={class:"header-anchor",href:"#响应的数据绑定"};function g(E,e){const a=o("RouteLink"),p=o("Badge");return c(),r("div",null,[e[28]||(e[28]=s("p",null,"小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。",-1)),s("p",null,[e[4]||(e[4]=n("整个小程序框架系统分为两部分: ")),l(a,{to:"/code/mini-app/guide/service/"},{default:t(()=>e[0]||(e[0]=[s("strong",null,"逻辑层",-1)])),_:1}),e[5]||(e[5]=n(" (App Service) 和 ")),l(a,{to:"/code/mini-app/guide/view/"},{default:t(()=>e[1]||(e[1]=[s("strong",null,"视图层",-1)])),_:1}),e[6]||(e[6]=n(" (../view)。小程序提供了自己的视图层描述语言 ")),l(a,{to:"/code/mini-app/guide/view/wxml.html"},{default:t(()=>e[2]||(e[2]=[n("WXML")])),_:1}),e[7]||(e[7]=n(" 和 ")),l(a,{to:"/code/mini-app/guide/view/wxss.html"},{default:t(()=>e[3]||(e[3]=[n("WXSS")])),_:1}),e[8]||(e[8]=n("，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，让开发者能够专注于数据与逻辑。"))]),d(" more "),s("h2",y,[s("a",v,[s("span",null,[e[9]||(e[9]=n("响应的数据绑定 ")),l(p,{text:"务必理解",type:"error"})])])]),e[29]||(e[29]=m(`<p>框架的核心是一个响应的数据绑定系统，可以让数据与视图非常简单地保持同步。当做数据修改的时候，只需要在逻辑层修改数据，视图层就会做相应的更新。</p><p><a href="https://developers.weixin.qq.com/s/l0gLEKmv6gZa" target="_blank" rel="noopener noreferrer">在开发者工具中预览效果</a></p><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">&lt;!-- This is our View --&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;view&gt;</span><span style="color:#D8DEE9FF;"> Hello {{name}}! </span><span style="color:#81A1C1;">&lt;/view&gt;</span></span>
<span class="line"><span style="color:#81A1C1;">&lt;button</span><span style="color:#8FBCBB;"> bindtap</span><span style="color:#D8DEE9FF;">=</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">changeName</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> Click me! </span><span style="color:#81A1C1;">&lt;/button&gt;</span></span></code></pre></div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;">// This is our App Service.</span></span>
<span class="line"><span style="color:#616E88;">// This is our data.</span></span>
<span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9;"> helloData</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#88C0D0;">  name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">WeChat</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// Register a Page.</span></span>
<span class="line"><span style="color:#88C0D0;">Page</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">  data</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9;"> helloData</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#88C0D0;">  changeName</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">e</span><span style="color:#ECEFF4;">)</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#616E88;">    // sent data change to view</span></span>
<span class="line"><span style="color:#81A1C1;">    this</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">setData</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#88C0D0;">      name</span><span style="color:#ECEFF4;">:</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">MINA</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>
<span class="line"><span style="color:#ECEFF4;">    }</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">  },</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>开发者通过框架将逻辑层数据中的 <code>name</code> 与视图层的 <code>name</code> 进行了绑定，所以在页面一打开的时候会显示 <code>Hello WeChat!</code>；</li><li>当点击按钮的时候，视图层会发送 <code>changeName</code> 的事件给逻辑层，逻辑层找到并执行对应的事件处理函数；</li><li>回调函数触发后，逻辑层执行 <code>setData</code> 的操作，将 <code>data</code> 中的 <code>name</code> 从 <code>WeChat</code> 变为 <code>MINA</code>，因为该数据和视图层已经绑定了，从而视图层会自动改变为 <code>Hello MINA!</code>。</li></ol><h2 id="页面管理" tabindex="-1"><a class="header-anchor" href="#页面管理"><span>页面管理</span></a></h2>`,6)),s("p",null,[e[11]||(e[11]=s("strong",null,"框架",-1)),e[12]||(e[12]=n(" 管理了整个小程序的页面路由，可以做到页面间的无缝切换，并给以页面完整的 ")),l(a,{to:"/code/mini-app/guide/service/lifetime.html"},{default:t(()=>e[10]||(e[10]=[n("生命周期")])),_:1}),e[13]||(e[13]=n("。开发者需要做的只是将页面的数据、方法、生命周期函数注册到 ")),e[14]||(e[14]=s("strong",null,"框架",-1)),e[15]||(e[15]=n(" 中，其他的一切复杂的操作都交由 ")),e[16]||(e[16]=s("strong",null,"框架",-1)),e[17]||(e[17]=n(" 处理。"))]),e[30]||(e[30]=s("h2",{id:"基础组件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#基础组件"},[s("span",null,"基础组件")])],-1)),s("p",null,[e[20]||(e[20]=s("strong",null,"框架",-1)),e[21]||(e[21]=n(" 提供了一套基础的 ")),l(a,{to:"/code/mini-app/guide/view/component.html"},{default:t(()=>e[18]||(e[18]=[n("组件")])),_:1}),e[22]||(e[22]=n("，")),l(a,{to:"/code/mini-app/guide/view/component.html"},{default:t(()=>e[19]||(e[19]=[n("这些组件")])),_:1}),e[23]||(e[23]=n(" 自带微信风格的样式以及特殊的逻辑，开发者可以通过组合基础组件，创建出强大的微信小程序 。"))]),e[31]||(e[31]=s("h2",{id:"丰富的-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#丰富的-api"},[s("span",null,"丰富的 API")])],-1)),s("p",null,[e[25]||(e[25]=s("strong",null,"框架",-1)),e[26]||(e[26]=n(" 提供丰富的 ")),l(a,{to:"/code/mini-app/guide/service/api/"},{default:t(()=>e[24]||(e[24]=[n("微信原生 API")])),_:1}),e[27]||(e[27]=n("，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等。"))])])}const f=i(u,[["render",g],["__file","intro.html.vue"]]),b=JSON.parse('{"path":"/code/mini-app/guide/frame/intro.html","title":"框架","lang":"zh-CN","frontmatter":{"date":"2020-12-12T00:00:00.000Z","title":"框架","icon":"frame","category":"小程序","description":"小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。 整个小程序框架系统分为两部分: 逻辑层 (App Service) 和 视图层 (../view)。小程序提供了自己的视图层描述语言 WXML 和 WXSS，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/mini-app/guide/frame/intro.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"框架"}],["meta",{"property":"og:description","content":"小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。 整个小程序框架系统分为两部分: 逻辑层 (App Service) 和 视图层 (../view)。小程序提供了自己的视图层描述语言 WXML 和 WXSS，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-12-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"框架\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"响应的数据绑定","slug":"响应的数据绑定","link":"#响应的数据绑定","children":[]},{"level":2,"title":"页面管理","slug":"页面管理","link":"#页面管理","children":[]},{"level":2,"title":"基础组件","slug":"基础组件","link":"#基础组件","children":[]},{"level":2,"title":"丰富的 API","slug":"丰富的-api","link":"#丰富的-api","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":2.11,"words":633},"filePathRelative":"code/mini-app/guide/frame/intro.md","localizedDate":"2020年12月12日","excerpt":"<p>小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。</p>\\n<p>整个小程序框架系统分为两部分: <a href=\\"/code/mini-app/guide/service/\\" target=\\"_blank\\"><strong>逻辑层</strong></a> (App Service) 和 <a href=\\"/code/mini-app/guide/view/\\" target=\\"_blank\\"><strong>视图层</strong></a> (../view)。小程序提供了自己的视图层描述语言 <a href=\\"/code/mini-app/guide/view/wxml.html\\" target=\\"_blank\\">WXML</a> 和 <a href=\\"/code/mini-app/guide/view/wxss.html\\" target=\\"_blank\\">WXSS</a>，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，让开发者能够专注于数据与逻辑。</p>\\n","autoDesc":true}');export{f as comp,b as data};
