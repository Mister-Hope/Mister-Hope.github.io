import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as t,d as a,e as i,f as n,b as l}from"./app-r406UCC8.js";const h={},p=i("div",{class:"hint-container tip"},[i("p",{class:"hint-container-title"},"提示"),i("p",null,[i("code",null,"page.ts"),n(" 用于小程序页面渲染。")])],-1),d=l(`<h2 id="插件的引入" tabindex="-1"><a class="header-anchor" href="#插件的引入"><span>插件的引入</span></a></h2><p>首先在 <code>ts</code> 文件头部引入 <code>page</code> 与 <code>@mptool/enhance</code>。</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$Page</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;\`@mptool/enhance&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">xxx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;path/to/page/ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2><h3 id="resolvepage" tabindex="-1"><a class="header-anchor" href="#resolvepage"><span>resolvePage()</span></a></h3><p><code>(option: PageQuery, page?: PageData, setGlobal = true) =&gt; PageData | null</code></p><p><strong>简介:</strong></p><ul><li><p>性质: 同步函数</p></li><li><p>描述: 预处理 <code>page</code> 数据写入全局数据</p></li><li><p>用法: 在页面 <code>onNavigate</code> 时调用，</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>option</td><td>页面跳转参数</td></tr><tr><td>page</td><td>页面数据</td></tr><tr><td>setGlobal</td><td>是否将处理后的数据写入到全局数据中</td></tr></tbody></table></li><li><p>返回: 处理后的 page 配置</p></li></ul><p><strong>案例:</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  onNavigate</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    resolvePage</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setpage" tabindex="-1"><a class="header-anchor" href="#setpage"><span>setPage()</span></a></h3><p><code>({ option, ctx, handle }: SetPageOption, page?: ComponentData[] | undefined, preload?: boolean) =&gt; void</code></p><p><strong>简介:</strong></p><ul><li><p>描述: 设置本地界面数据，如果传入 <code>page</code> 参数，则根据 <code>handle</code> 的值决定是否在 <code>setData</code> 前处理 <code>page</code>。</p><p>如果没有传入 <code>page</code>，则使用 <code>PageOption.data.page</code>。之后根据 <code>preload</code> 的值决定是否对页面链接进行预加载。</p></li><li><p>用法: 在页面 <code>onLoad</code> 时调用</p></li><li><p>性质: 同步函数</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>object</td><td>配置对象</td></tr><tr><td>page</td><td>页面数据</td></tr><tr><td>preload [default:true]</td><td>是否预加载子页面</td></tr></tbody></table><p><code>object</code> 参数:</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>option</td><td>页面传参</td></tr><tr><td>ctx</td><td>页面指针</td></tr><tr><td>handle [default:false]</td><td>页面是否已经被处理</td></tr></tbody></table></li></ul><p><strong>案例:</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  onLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    setPage</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({ </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setonlinepage" tabindex="-1"><a class="header-anchor" href="#setonlinepage"><span>setOnlinePage()</span></a></h3><p><code>(option: PageOption, ctx: PageInstanceWithPage, preload = true) =&gt; void</code></p><p><strong>简介:</strong></p><ul><li><p>描述: 设置在线界面数据</p></li><li><p>用法: 在页面 <code>onLoad</code> 时调用</p></li><li><p>性质: 同步函数</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>option</td><td>页面跳转参数</td></tr><tr><td>ctx</td><td>页面指针</td></tr><tr><td>preload [default:true]</td><td>是否预加载子页面</td></tr></tbody></table></li></ul><p><strong>案例:</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  onLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    setOnlinePage</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="popnotice" tabindex="-1"><a class="header-anchor" href="#popnotice"><span>popNotice()</span></a></h3><p><code>(id: string) =&gt; void</code></p><p><strong>简介:</strong></p><ul><li><p>描述: 弹出通知</p></li><li><p>用法: 在页面 <code>onLoad</code> 时调用</p></li><li><p>性质: 同步函数</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>当前界面的标识符</td></tr></tbody></table></li></ul><p><strong>案例:</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  onLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({ </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    popNotice</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getcolor" tabindex="-1"><a class="header-anchor" href="#getcolor"><span>getColor()</span></a></h3><p><code>(grey?: boolean) =&gt; Colors</code></p><p><strong>简介:</strong></p><ul><li><p>描述: 获得页面背景相关颜色</p></li><li><p>用法: 在页面 <code>onShow</code> 时调用</p></li><li><p>性质: 同步函数</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>grey [default:false]</td><td>页面是否为灰色背景</td></tr></tbody></table></li></ul><p><strong>案例:</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  onShow</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">setData</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">      color</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getColor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">page</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">].</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">grey</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function r(o,k){return e(),t("div",null,[p,a(" more "),d])}const B=s(h,[["render",r],["__file","page.html.vue"]]),y=JSON.parse('{"path":"/code/mini-app/framework/page.html","title":"Page 插件","lang":"zh-CN","frontmatter":{"date":"2020-10-09T00:00:00.000Z","title":"Page 插件","icon":"page","category":"小程序","description":"提示 page.ts 用于小程序页面渲染。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/mini-app/framework/page.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Page 插件"}],["meta",{"property":"og:description","content":"提示 page.ts 用于小程序页面渲染。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-10-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Page 插件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-10-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"插件的引入","slug":"插件的引入","link":"#插件的引入","children":[]},{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[{"level":3,"title":"resolvePage()","slug":"resolvepage","link":"#resolvepage","children":[]},{"level":3,"title":"setPage()","slug":"setpage","link":"#setpage","children":[]},{"level":3,"title":"setOnlinePage()","slug":"setonlinepage","link":"#setonlinepage","children":[]},{"level":3,"title":"popNotice()","slug":"popnotice","link":"#popnotice","children":[]},{"level":3,"title":"getColor()","slug":"getcolor","link":"#getcolor","children":[]}]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":5},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":1.6,"words":479},"filePathRelative":"code/mini-app/framework/page.md","localizedDate":"2020年10月9日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p><code>page.ts</code> 用于小程序页面渲染。</p>\\n</div>\\n","autoDesc":true}');export{B as comp,y as data};
