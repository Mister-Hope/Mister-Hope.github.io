import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,f as p,d as t,e,b as o}from"./app-odku2cZ-.js";const c={},l=t("div",{class:"hint-container tip"},[t("p",{class:"hint-container-title"},"提示"),t("p",null,[t("code",null,"page.ts"),e(" 用于小程序页面渲染。")])],-1),d=o(`<h2 id="插件的引入" tabindex="-1"><a class="header-anchor" href="#插件的引入"><span>插件的引入</span></a></h2><p>首先在 <code>ts</code> 文件头部引入 <code>page</code> 与 <code>@mptool/enhance</code>。</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> $Page <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;\`@mptool/enhance&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> xxx <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;path/to/page/ts&quot;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2><h3 id="resolvepage" tabindex="-1"><a class="header-anchor" href="#resolvepage"><span>resolvePage()</span></a></h3><p><code>(option: PageQuery, page?: PageData, setGlobal = true) =&gt; PageData | null</code></p><p><strong>简介:</strong></p><ul><li><p>性质: 同步函数</p></li><li><p>描述: 预处理 <code>page</code> 数据写入全局数据</p></li><li><p>用法: 在页面 <code>onNavigate</code> 时调用，</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>option</td><td>页面跳转参数</td></tr><tr><td>page</td><td>页面数据</td></tr><tr><td>setGlobal</td><td>是否将处理后的数据写入到全局数据中</td></tr></tbody></table></li><li><p>返回: 处理后的 page 配置</p></li></ul><p><strong>案例:</strong></p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>  <span class="token function">onNavigate</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">resolvePage</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="setpage" tabindex="-1"><a class="header-anchor" href="#setpage"><span>setPage()</span></a></h3><p><code>({ option, ctx, handle }: SetPageOption, page?: ComponentData[] | undefined, preload?: boolean) =&gt; void</code></p><p><strong>简介:</strong></p><ul><li><p>描述: 设置本地界面数据，如果传入 <code>page</code> 参数，则根据 <code>handle</code> 的值决定是否在 <code>setData</code> 前处理 <code>page</code>。</p><p>如果没有传入 <code>page</code>，则使用 <code>PageOption.data.page</code>。之后根据 <code>preload</code> 的值决定是否对页面链接进行预加载。</p></li><li><p>用法: 在页面 <code>onLoad</code> 时调用</p></li><li><p>性质: 同步函数</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>object</td><td>配置对象</td></tr><tr><td>page</td><td>页面数据</td></tr><tr><td>preload [default:true]</td><td>是否预加载子页面</td></tr></tbody></table><p><code>object</code> 参数:</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>option</td><td>页面传参</td></tr><tr><td>ctx</td><td>页面指针</td></tr><tr><td>handle [default:false]</td><td>页面是否已经被处理</td></tr></tbody></table></li></ul><p><strong>案例:</strong></p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>  <span class="token function">onLoad</span><span class="token punctuation">(</span>option<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> option<span class="token punctuation">,</span> ctx<span class="token operator">:</span> <span class="token keyword">this</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="setonlinepage" tabindex="-1"><a class="header-anchor" href="#setonlinepage"><span>setOnlinePage()</span></a></h3><p><code>(option: PageOption, ctx: PageInstanceWithPage, preload = true) =&gt; void</code></p><p><strong>简介:</strong></p><ul><li><p>描述: 设置在线界面数据</p></li><li><p>用法: 在页面 <code>onLoad</code> 时调用</p></li><li><p>性质: 同步函数</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>option</td><td>页面跳转参数</td></tr><tr><td>ctx</td><td>页面指针</td></tr><tr><td>preload [default:true]</td><td>是否预加载子页面</td></tr></tbody></table></li></ul><p><strong>案例:</strong></p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>  <span class="token function">onLoad</span><span class="token punctuation">(</span>res<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setOnlinePage</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="popnotice" tabindex="-1"><a class="header-anchor" href="#popnotice"><span>popNotice()</span></a></h3><p><code>(id: string) =&gt; void</code></p><p><strong>简介:</strong></p><ul><li><p>描述: 弹出通知</p></li><li><p>用法: 在页面 <code>onLoad</code> 时调用</p></li><li><p>性质: 同步函数</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>当前界面的标识符</td></tr></tbody></table></li></ul><p><strong>案例:</strong></p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">popNotice</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="getcolor" tabindex="-1"><a class="header-anchor" href="#getcolor"><span>getColor()</span></a></h3><p><code>(grey?: boolean) =&gt; Colors</code></p><p><strong>简介:</strong></p><ul><li><p>描述: 获得页面背景相关颜色</p></li><li><p>用法: 在页面 <code>onShow</code> 时调用</p></li><li><p>性质: 同步函数</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>grey [default:false]</td><td>页面是否为灰色背景</td></tr></tbody></table></li></ul><p><strong>案例:</strong></p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      color<span class="token operator">:</span> <span class="token function">getColor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>page<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>grey<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div>`,34);function i(r,u){return n(),s("div",null,[l,p(" more "),d])}const h=a(c,[["render",i],["__file","page.html.vue"]]);export{h as default};
