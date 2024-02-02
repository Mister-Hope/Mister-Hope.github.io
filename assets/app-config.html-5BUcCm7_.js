import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as p,c as r,f as i,d as t,e as n,a as s,b as e}from"./app-odku2cZ-.js";const c={},l=t("p",null,"小程序根目录下的 app.json 文件用来对微信小程序进行全局配置。文件内容为一个 JSON 对象，有以下属性:",-1),u=e(`<h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2><p>以下是比较<strong>重要</strong>的配置项:</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>pages</td><td>string[]</td><td>是</td><td>页面路径列表</td></tr><tr><td>window</td><td>Object</td><td>否</td><td>全局的默认窗口表现</td></tr><tr><td>tabBar</td><td>Object</td><td>否</td><td>底部 tab 栏的表现</td></tr></tbody></table><p>以下是一些补充与细节的配置项，在初期可以不用掌握与配置。</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>描述</th><th>最低版本</th></tr></thead><tbody><tr><td>entryPagePath</td><td>string</td><td>否</td><td>小程序默认启动首页</td><td></td></tr><tr><td>networkTimeout</td><td>Object</td><td>否</td><td>网络超时时间</td><td></td></tr><tr><td>debug</td><td>boolean</td><td>否</td><td>是否开启 debug 模式，默认关闭</td><td></td></tr><tr><td>functionalPages</td><td>boolean</td><td>否</td><td>是否启用插件功能页，默认关闭</td><td>2.1.0</td></tr><tr><td>subpackages</td><td>Object[]</td><td>否</td><td>分包结构配置</td><td>1.7.3</td></tr><tr><td>workers</td><td>string</td><td>否</td><td>Worker 代码放置的目录</td><td>1.9.90</td></tr><tr><td>requiredBackgroundModes</td><td>string[]</td><td>否</td><td>需要在后台使用的能力，如「音乐播放」</td><td></td></tr><tr><td>plugins</td><td>Object</td><td>否</td><td>使用到的插件</td><td>1.9.6</td></tr><tr><td>preloadRule</td><td>Object</td><td>否</td><td>分包预下载规则</td><td>2.3.0</td></tr><tr><td>resizable</td><td>boolean</td><td>否</td><td>iPad 小程序是否支持屏幕旋转、Windows 系统下是否宽屏显示，默认关闭</td><td>2.3.0</td></tr><tr><td>usingComponents</td><td>Object</td><td>否</td><td>全局自定义组件配置</td><td>开发者工具 1.02.1810190</td></tr><tr><td>permission</td><td>Object</td><td>否</td><td>小程序接口权限相关设置</td><td>微信客户端 7.0.0</td></tr><tr><td>sitemapLocation</td><td>string</td><td>是</td><td>指明</td><td>sitemap.json 的位置</td></tr><tr><td>style</td><td>string</td><td>否</td><td>指定使用升级后的 weui 样式</td><td>2.8.0</td></tr><tr><td>useExtendedLib</td><td>Object</td><td>否</td><td>指定需要引用的扩展库</td><td>2.2.1</td></tr><tr><td>darkmode</td><td>boolean</td><td>否</td><td>小程序支持 DarkMode</td><td>2.11.0</td></tr><tr><td>themeLocation</td><td>string</td><td>否</td><td>指明 theme.json 的位置，darkmode 为 true 为必填</td><td>开发者工具 1.03.2004271</td></tr><tr><td>lazyCodeLoading</td><td>string</td><td>否</td><td>配置自定义组件代码按需注入</td><td>2.11.1</td></tr><tr><td>singlePage</td><td>Object</td><td>否</td><td>单页模式相关配置</td><td>2.12.0</td></tr></tbody></table><h2 id="pages" tabindex="-1"><a class="header-anchor" href="#pages"><span>pages</span></a></h2><p>用于指定小程序由哪些页面组成，每一项都对应一个页面的 路径(含文件名) 信息。文件名不需要写文件后缀，框架会自动去寻找对于位置的 <code>.json</code>, <code>.js</code>, <code>.wxml</code>, <code>.wxss</code> 四个文件进行处理。</p><p>数组的第一项代表小程序的初始页面(首页)。小程序中新增/减少页面，都需要对 <code>pages</code> 数组进行修改。</p><p>如开发目录为:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>├── app.js
├── app.json
├── app.wxss
├── pages
│ │── index
│ │ ├── index.wxml
│ │ ├── index.js
│ │ ├── index.json
│ │ └── index.wxss
│ └── logs
│ ├── logs.wxml
│ └── logs.js
└── utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>则需要在 <code>app.json</code> 中写</p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pages/logs/logs&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="window" tabindex="-1"><a class="header-anchor" href="#window"><span>window</span></a></h2><p>用于设置小程序的状态栏、导航条、标题、窗口背景色。</p><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>描述</th><th>最低版本</th></tr></thead><tbody><tr><td>navigationBarBackgroundColor</td><td>HexColor</td><td>#000000</td><td>导航栏背景颜色，如 #000000</td><td></td></tr><tr><td>navigationBarTextStyle</td><td>string</td><td>white</td><td>导航栏标题颜色，仅支持 black / white</td><td></td></tr><tr><td>navigationBarTitleText</td><td>string</td><td></td><td>导航栏标题文字内容</td><td></td></tr><tr><td>navigationStyle</td><td>string</td><td>default</td><td>导航栏样式，仅支持 <code>default</code> 默认样式 <code>custom</code> 自定义导航航栏</td><td>微信客户端 6.6.0</td></tr><tr><td>backgroundColor</td><td>HexColor</td><td>#ffffff</td><td>窗口的背景色</td><td></td></tr><tr><td>backgroundTextStyle</td><td>string</td><td>dark</td><td>下拉 loading 的样式，仅支持 dark / light</td><td></td></tr><tr><td>backgroundColorTop</td><td>string</td><td>#ffffff</td><td>顶部窗口的背景色，仅 iOS 支持</td><td>微信客户端 6.5.16</td></tr><tr><td>backgroundColorBottom</td><td>string</td><td>#ffffff</td><td>底部窗口的背景色，仅 iOS 支持</td><td>微信客户端 6.5.16</td></tr><tr><td>enablePullDownRefresh</td><td>boolean</td><td>false</td><td>是否开启全局的下拉刷新。</td><td></td></tr><tr><td>onReachBottomDistance</td><td>number</td><td>50</td><td>页面上拉触底事件触发时距页面底部距离，单位为 px。</td><td></td></tr><tr><td>pageOrientation</td><td>string</td><td>portrait</td><td>屏幕旋转设置，支持 auto / portrait / landscape</td><td>2.4.0 (auto) / 2.5.0 (landscape)</td></tr></tbody></table><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;window&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;navigationBarBackgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;navigationBarTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微信接口功能演示&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#eeeeee&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;backgroundTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;light&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="tabbar" tabindex="-1"><a class="header-anchor" href="#tabbar"><span>tabBar</span></a></h2><p>如果小程序是一个多 tab 应用(客户端窗口的底部或顶部有 tab 栏可以切换页面)，可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>默认值</th><th>描述</th><th>最低版本</th></tr></thead><tbody><tr><td>color</td><td>HexColor</td><td>是</td><td></td><td>tab 上的文字默认颜色，仅支持十六进制颜色</td><td></td></tr><tr><td>selectedColor</td><td>HexColor</td><td>是</td><td></td><td>tab 上的文字选中时的颜色，仅支持十六进制颜色</td><td></td></tr><tr><td>backgroundColor</td><td>HexColor</td><td>是</td><td></td><td>tab 的背景色，仅支持十六进制颜色</td><td></td></tr><tr><td>borderStyle</td><td>string</td><td>否</td><td>black</td><td>tabbar 上边框的颜色， 仅支持 black / white</td><td></td></tr><tr><td>list</td><td>Array</td><td>是</td><td></td><td>tab 的列表，详见 list 属性说明，最少 2 个、最多 5 个 tab</td><td></td></tr><tr><td>position</td><td>string</td><td>否</td><td>bottom</td><td>tabBar 的位置，仅支持 bottom / top</td><td></td></tr><tr><td>custom</td><td>boolean</td><td>否</td><td>false</td><td>自定义 tabBar</td><td>2.5.0</td></tr></tbody></table><p>其中 <code>list</code> 接受一个数组，只能配置最少 2 个、最多 5 个 tab。tab 按数组的顺序排序，每个项都是一个对象，其属性值如下:</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>pagePath</td><td>string</td><td>是</td><td>页面路径，必须在 pages 中先定义</td></tr><tr><td>text</td><td>string</td><td>是</td><td>tab 上按钮文字</td></tr><tr><td>iconPath</td><td>string</td><td>否</td><td>图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。</td></tr><tr><td>selectedIconPath</td><td>string</td><td>否</td><td>选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">注意</p><p>当 position 为 top 时，不显示 icon。</p></div><h2 id="其他配置" tabindex="-1"><a class="header-anchor" href="#其他配置"><span>其他配置</span></a></h2><h3 id="networktimeout" tabindex="-1"><a class="header-anchor" href="#networktimeout"><span>networkTimeout</span></a></h3><p>各类网络请求的超时时间，单位均为毫秒。</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>request</td><td>number</td><td>否</td><td>60000</td><td>wx.request 的超时时间，单位: 毫秒。</td></tr><tr><td>connectSocket</td><td>number</td><td>否</td><td>60000</td><td>wx.connectSocket 的超时时间，单位: 毫秒。</td></tr><tr><td>uploadFile</td><td>number</td><td>否</td><td>60000</td><td>wx.uploadFile 的超时时间，单位: 毫秒。</td></tr><tr><td>downloadFile</td><td>number</td><td>否</td><td>60000</td><td>wx.downloadFile 的超时时间，单位: 毫秒。</td></tr></tbody></table><h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug"><span>debug</span></a></h3><p>可以在开发者工具中开启 debug 模式，在开发者工具的控制台面板，调试信息以 info 的形式给出，其信息有 Page 的注册，页面路由，数据更新，事件触发等。可以帮助开发者快速定位一些常见的问题。</p><h3 id="functionalpages" tabindex="-1"><a class="header-anchor" href="#functionalpages"><span>functionalPages</span></a></h3><p>插件所有者小程序需要设置这一项来启用插件功能页。</p><h3 id="subpackages" tabindex="-1"><a class="header-anchor" href="#subpackages"><span>subpackages</span></a></h3><p>启用分包加载时，声明项目分包结构。</p><h3 id="workers" tabindex="-1"><a class="header-anchor" href="#workers"><span>workers</span></a></h3><p>使用 Worker 处理多线程任务时，设置 Worker 代码放置的目录</p><h3 id="requiredbackgroundmodes" tabindex="-1"><a class="header-anchor" href="#requiredbackgroundmodes"><span>requiredBackgroundModes</span></a></h3><blockquote><p>微信客户端 6.7.2 及以上版本支持</p></blockquote><p>申明需要后台运行的能力，类型为数组。目前支持以下项目:</p><ul><li>audio: 后台音乐播放</li></ul><p>如:</p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;requiredBackgroundModes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;audio&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在此处申明了后台运行的接口，开发版和体验版上可以直接生效，正式版还需通过审核。</p></div><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins"><span>plugins</span></a></h3><p>声明小程序需要使用的插件。</p><h3 id="preloadrule" tabindex="-1"><a class="header-anchor" href="#preloadrule"><span>preloadRule</span></a></h3><blockquote><p>基础库 2.3.0 开始支持</p></blockquote><p>声明分包预下载的规则。</p><h3 id="resizable" tabindex="-1"><a class="header-anchor" href="#resizable"><span>resizable</span></a></h3><blockquote><p>基础库 2.3.0 开始支持</p></blockquote><p>在 iPad 上运行的小程序可以设置支持屏幕旋转。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>设置此项后在 Windows 版微信也会默认横向打开小程序。</p></div><h3 id="navigatetominiprogramappidlist" tabindex="-1"><a class="header-anchor" href="#navigatetominiprogramappidlist"><span>navigateToMiniProgramAppIdList</span></a></h3><blockquote><p>基础库 2.4.0 开始支持</p></blockquote><p>当小程序需要使用 wx.navigateToMiniProgram 接口跳转到其他小程序时，需要先在配置文件中声明需要跳转的小程序 appId 列表，最多允许填写 10 个。</p><h3 id="usingcomponents" tabindex="-1"><a class="header-anchor" href="#usingcomponents"><span>usingComponents</span></a></h3><blockquote><p>开发者工具 1.02.1810190 及以上版本支持</p></blockquote><p>在此处声明的自定义组件视为全局自定义组件，在小程序内的页面或自定义组件中可以直接使用而无需再声明。</p><h3 id="permission" tabindex="-1"><a class="header-anchor" href="#permission"><span>permission</span></a></h3><blockquote><p>微信客户端 7.0.0 及以上版本支持</p></blockquote><p>小程序接口权限相关设置。字段类型为 Object，结构为:</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>scope.userLocation</td><td>PermissionObject</td><td>否</td><td>位置相关权限声明</td></tr></tbody></table><p>PermissionObject 结构</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>desc</td><td>string</td><td>是</td><td>小程序获取权限时展示的接口用途说明。最长 30 个字符</td></tr></tbody></table><p>如:</p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;permission&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;scope.userLocation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;您的位置信息将用于小程序位置接口的效果展示&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="sitemaplocation" tabindex="-1"><a class="header-anchor" href="#sitemaplocation"><span>sitemapLocation</span></a></h3><p>指明 sitemap.json 的位置；默认为 <code>&#39;sitemap.json&#39;</code> 即在 app.json 同级目录下名字的 sitemap.json 文件</p><details class="hint-container details"><summary>配置示例</summary><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pages/logs/index&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;window&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Demo&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tabBar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;首页&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/logs/logs&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;日志&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;networkTimeout&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
    <span class="token property">&quot;downloadFile&quot;</span><span class="token operator">:</span> <span class="token number">10000</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;debug&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="style" tabindex="-1"><a class="header-anchor" href="#style"><span>style</span></a></h3><blockquote><p>基础库 2.8.0 开始支持</p></blockquote><p>微信客户端 7.0 开始，UI 界面进行了大改版。小程序也进行了基础组件的样式升级。app.json 中配置 <code>&quot;style&quot;: &quot;v2&quot;</code> 可表明启用新版的组件样式。</p><p>本次改动涉及的组件有 <code>button</code> <code>icon</code> <code>radio</code> <code>checkbox</code> <code>switch</code> <code>slider</code>。可前往小程序示例进行体验。</p><h3 id="useextendedlib" tabindex="-1"><a class="header-anchor" href="#useextendedlib"><span>useExtendedLib</span></a></h3><blockquote><p>基础库 2.2.1 开始支持</p></blockquote><p>指定需要引用的扩展库。目前支持以下项目:</p>`,74),k={href:"https://developers.weixin.qq.com/miniprogram/dev/extended/kbone/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://developers.weixin.qq.com/miniprogram/dev/extended/weui/",target:"_blank",rel:"noopener noreferrer"},b=e(`<p>指定后，相当于引入了对应扩展库相关的最新版本的 npm 包，同时也不占用小程序的包体积。目前暂不支持在分包中引用。用法如下:</p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;useExtendedLib&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;kbone&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;weui&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="darkmode" tabindex="-1"><a class="header-anchor" href="#darkmode"><span>darkmode</span></a></h3><blockquote><p>开发者工具 1.03.2004271 及以上版本支持，基础库 2.11.0 及以上版本支持</p></blockquote><p>微信 iOS 客户端 7.0.12 版本、Android 客户端 7.0.13 版本正式支持 DarkMode，可通过配置 <code>&quot;darkmode&quot;: true</code> 表示当前小程序可适配 DarkMode，所有基础组件均会根据系统主题展示不同的默认样式，navigation bar 和 tab bar 也会根据开发者的配置自动切换。</p>`,5),g={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/darkmode.html",target:"_blank",rel:"noopener noreferrer"},q=e(`<div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;darkmode&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="themelocation" tabindex="-1"><a class="header-anchor" href="#themelocation"><span>themeLocation</span></a></h3><p>自定义 theme.json 的路径，当配置 <code>&quot;darkmode&quot;:true</code> 时，当前配置文件为必填项。</p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;themeLocation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/path/to/theme.json&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="lazycodeloading" tabindex="-1"><a class="header-anchor" href="#lazycodeloading"><span>lazyCodeLoading</span></a></h3><blockquote><p>基础库 2.11.1 及以上版本支持，2.11.1 以下兼容但无优化效果</p></blockquote><p>通常情况下，在小程序启动期间，所有页面及自定义组件的代码都会进行注入，当前页面没有使用到的自定义组件和页面在注入后其实并没有被使用。</p><p>自基础库版本 2.11.1 起，小程序支持有选择地注入必要的代码，以降低小程序的启动时间和运行时内存。</p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;lazyCodeLoading&quot;</span><span class="token operator">:</span> <span class="token string">&quot;requiredComponents&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>当配置了这一项时，小程序仅注入当前页面需要的自定义组件和页面代码，在页面中必然不会用到的自定义组件不会被加载和初始化。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>添加这项配置后，未使用到的代码文件将不被执行。</p></div><h3 id="singlepage" tabindex="-1"><a class="header-anchor" href="#singlepage"><span>singlePage</span></a></h3><blockquote><p>基础库 2.11.3 及以上版本支持，目前分享到朋友圈 (Beta) 后打开会进入单页模式</p></blockquote><p>单页模式相关配置</p><p>| 属性 | 类型 | 必填 | 默认值 | 描述 | | ---------------- | ------ | ---- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --- | | navigationBarFit | String | 否 | 默认自动调整，若原页面是自定义导航栏，则为 <code>float</code>，否则为 <code>squeezed</code> | 导航栏与页面的相交状态，值为 <code>float</code> 时表示导航栏浮在页面上，与页面相交；值为 <code>squeezed</code> 时表示页面被导航栏挤压，与页面不相交 | |</p><details class="hint-container details"><summary>配置示例</summary><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pages/logs/index&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;window&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Demo&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tabBar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;首页&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/logs/logs&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;日志&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;networkTimeout&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
    <span class="token property">&quot;downloadFile&quot;</span><span class="token operator">:</span> <span class="token number">10000</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;debug&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;navigateToMiniProgramAppIdList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;wxe5f52902cf4de896&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,16);function v(m,x){const a=d("ExternalLinkIcon");return p(),r("div",null,[l,i(" more "),u,t("ul",null,[t("li",null,[n("kbone: "),t("a",k,[n("多端开发框架"),s(a)])]),t("li",null,[n("weui: "),t("a",h,[n("WeUI 组件库"),s(a)])])]),b,t("p",null,[n("配置后，请根据 "),t("a",g,[n("DarkMode 适配指南"),s(a)]),n(" 自行完成基础样式以外的适配工作。")]),q])}const j=o(c,[["render",v],["__file","app-config.html.vue"]]);export{j as default};
