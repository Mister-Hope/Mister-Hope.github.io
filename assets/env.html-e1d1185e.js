import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as u,c as i,e as r,b as a,d as n,a as s,w as e,f as t}from"./app-d1a44583.js";const d={},k=a("p",null,"宿主环境是微信客户端给小程序所提供的环境。小程序借助宿主环境提供的能力，可以完成许多普通网页无法完成的功能。",-1),g=t(`<h2 id="渲染层和逻辑层" tabindex="-1"><a class="header-anchor" href="#渲染层和逻辑层" aria-hidden="true">#</a> 渲染层和逻辑层</h2><p>小程序的运行环境分成渲染层和逻辑层。</p><ul><li>WXML 模板和 WXSS 样式工作在渲染层；</li><li>JS 脚本工作在逻辑层。</li></ul><p>小程序的渲染层和逻辑层分别由 2 个线程管理:</p><ul><li>渲染层的界面使用了 WebView 进行渲染；</li><li>逻辑层采用 JsCore 线程运行 JS 脚本。</li></ul><p>一个小程序存在多个界面，所以渲染层存在多个 WebView 线程，这两个线程的通信会经由微信客户端(Native)做中转，逻辑层发送网络请求也经由 Native 转发，小程序的通信模型下图所示。</p><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/4-1.ad156d1c.png" alt="通信模型" loading="lazy"></p><h2 id="程序与页面" tabindex="-1"><a class="header-anchor" href="#程序与页面" aria-hidden="true">#</a> 程序与页面</h2><p>微信客户端在打开小程序之前，会把整个小程序的代码包下载到本地。</p><p>客户端通过 <code>app.json</code> 的 <code>pages</code> 字段获得当前小程序的所有页面路径:</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pages/logs/logs&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>QuickStart 项目通过该配置定义了两个页面，分别位于 <code>pages/index/index</code> 和 <code>pages/logs/logs</code>。写在 <code>pages</code> 字段的第一个页面就是这个小程序的首页(打开小程序看到的第一个页面)。</p></div><p>于是微信客户端就把首页的代码装载进来，染出这个首页。</p><p>小程序启动之后，在 <code>app.js</code> 定义的 <code>App</code> 实例的 <code>onLaunch</code> 回调会被执行:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLaunch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 小程序启动之后 触发</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,15),m=t(`<p>接下来我们简单看看小程序的一个页面是怎么写的。</p><p>您可以观察到 <code>pages/logs/logs</code> 下其实是包括了 4 种文件的，微信客户端会先根据 <code>logs.json</code> 配置生成一个界面，顶部的颜色和文字您都可以在这个 json 文件里边定义好。紧接着客户端就会装载这个页面的 WXML 结构和 WXSS 样式。最后客户端会装载 <code>logs.js</code>，您可以看到 <code>logs.js</code> 的大体内容就是:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 参与页面渲染的数据</span>
    <span class="token literal-property property">logs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 页面渲染后 执行</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Page 是一个页面构造器，这个构造器就生成了一个页面。在生成页面的时候，小程序框架会把 <code>data</code> 数据和对应的 wxml 一起渲染出最终的结构，于是就得到了您看到的小程序的样子。</p><p>在渲染完界面之后，页面实例就会收到一个 <code>onLoad</code> 的回调，您可以在这个回调处理您的逻辑。</p>`,5),v=t(`<h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><p>小程序提供了丰富的基础组件给开发者，开发者可以像搭积木一样，组合各种组件拼合成自己的小程序。</p><p>就像 HTML 的 <code>div</code>, <code>p</code> 等标签一样，在小程序里边，您只需要在 WXML 写上对应的组件标签名字就可以把该组件显示在界面上，例如，您需要在界面上显示地图，您只需要这样写即可:</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>map</span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>使用组件的时候，还可以通过属性传递值给组件，让组件可以以不同的状态去展现，例如，我们希望地图一开始的中心的经纬度是长春，那么您需要声明地图的 <code>longitude</code>(中心经度) 和 <code>latitude</code>(中心纬度)两个属性:</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>map</span> <span class="token attr-name">longitude</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>长春经度<span class="token punctuation">&quot;</span></span> <span class="token attr-name">latitude</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>长春纬度<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>组件的内部行为也会通过事件的形式让开发者可以感知，例如用户点击了地图上的某个标记，您可以在 js 编写 markertap 函数来处理:</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>map</span> <span class="token attr-name">bindmarkertap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>markertap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">longitude</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>长春经度<span class="token punctuation">&quot;</span></span> <span class="token attr-name">latitude</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>长春纬度<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>当然您也可以通过 <code>style</code> 或者 <code>class</code> 来控制组件的外层样式，以便适应您的界面宽度高度等等。</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><p>为了让开发者可以很方便的调起微信提供的能力，例如获取用户信息、微信支付等等，小程序提供了很多 API 给开发者去使用。</p><p>要获取用户的地理位置时，只需要:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">getLocation</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;wgs84&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> latitude<span class="token punctuation">,</span> longitude <span class="token punctuation">}</span> <span class="token operator">=</span> res<span class="token punctuation">;</span> <span class="token comment">// 获取经纬度</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>latitude<span class="token punctuation">,</span> longitude<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>调用微信扫一扫能力，只需要:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">scanCode</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>需要注意的是: 多数 API 的回调都是异步，您需要处理好代码逻辑的异步问题。</p>`,16),h={href:"https://developers.weixin.qq.com/miniprogram/dev/api/",target:"_blank",rel:"noopener noreferrer"};function x(f,_){const p=o("RouterLink"),c=o("ExternalLinkIcon");return u(),i("div",null,[k,r(" more "),g,a("p",null,[n("整个小程序只有一个 App 实例，是全部页面共享的，更多的事件回调参考文档 "),s(p,{to:"/code/mini-app/guide/service/app.html"},{default:e(()=>[n("注册程序 App")]),_:1}),n(" 。")]),m,a("p",null,[n("有关于 Page 构造器更多详细的文档参考 "),s(p,{to:"/code/mini-app/guide/service/page.html"},{default:e(()=>[n("注册页面 Page")]),_:1}),n("。")]),v,a("p",null,[n("更多的 API 能力见 "),a("a",h,[n("小程序的 API"),s(c)]),n("。")])])}const L=l(d,[["render",x],["__file","env.html.vue"]]);export{L as default};
