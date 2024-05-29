import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as e,d as t,e as s,f as a,b as l}from"./app-C6d_tW6U.js";const o={},p=s("p",null,[a("微信现已开放小程序内搜索，开发者可以通过 "),s("code",null,"sitemap.json"),a(" 配置，或者管理后台页面收录开关来配置其小程序页面是否允许微信索引。当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索词条触发该索引时，小程序的页面将可能展示在搜索结果中。爬虫访问小程序内页面时，会携带特定的 "),s("code",null,"user-agent: mpcrawler"),a(" 及场景值: "),s("code",null,"1129"),a("。需要注意的是，若小程序爬虫发现的页面数据和真实用户的呈现不一致，那么该页面将不会进入索引中。")],-1),r=s("p",null,[a("小程序根目录下的 sitemap.json 文件用于配置小程序及其页面是否允许被微信索引，文件内容为一个 JSON 对象，如果没有 "),s("code",null,"sitemap.json"),a(" ，则默认为所有页面都允许被索引。")],-1),d=l(`<h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>rules</td><td>Object[]</td><td>是</td><td>索引规则列表</td></tr></tbody></table><h3 id="rules" tabindex="-1"><a class="header-anchor" href="#rules"><span>rules</span></a></h3><p>rules 配置项指定了索引规则，每项规则为一个 JSON 对象，属性如下所示:</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>默认值</th><th>取值</th><th>取值说明</th></tr></thead><tbody><tr><td>action</td><td>string</td><td>否</td><td>&quot;allow&quot;</td><td>&quot;allow&quot;、&quot;disallow&quot;</td><td>命中该规则的页面是否能被索引</td></tr><tr><td>page</td><td>string</td><td>是</td><td></td><td>&quot;*&quot;、页面的路径</td><td>* 表示所有页面，不能作为通配符使用</td></tr><tr><td>params</td><td>string[]</td><td>否</td><td>[]</td><td></td><td>当 page 字段指定的页面在被本规则匹配时可能使用的页面参数名称的列表(不含参数值)</td></tr><tr><td>matching</td><td>string</td><td>否</td><td>&quot;inclusive&quot;</td><td>参考 matching 取值说明</td><td>当 page 字段指定的页面在被本规则匹配时，此参数说明 params 匹配方式</td></tr><tr><td>priority</td><td>Number</td><td>否</td><td></td><td></td><td>优先级，值越大则规则越早被匹配，否则默认从上到下匹配</td></tr></tbody></table><h3 id="matching-取值说明" tabindex="-1"><a class="header-anchor" href="#matching-取值说明"><span>matching 取值说明</span></a></h3><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>exact</td><td>当小程序页面的参数列表等于 params 时，规则命中</td></tr><tr><td>inclusive</td><td>当小程序页面的参数列表包含 params 时，规则命中</td></tr><tr><td>exclusive</td><td>当小程序页面的参数列表与 params 交集为空时，规则命中</td></tr><tr><td>partial</td><td>当小程序页面的参数列表与 params 交集不为空时，规则命中</td></tr></tbody></table><h3 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例"><span>配置示例</span></a></h3><h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例 1</span></a></h4><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">  &quot;rules&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;action&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;allow&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;page&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;path/to/page&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;params&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;a&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;b&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;matching&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;exact&quot;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;action&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;disallow&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;page&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;path/to/page&quot;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>path/to/page?a=1&amp;b=2</code> =&gt; 优先索引</li><li><code>path/to/page</code> =&gt; 不被索引</li><li><code>path/to/page?a=1</code> =&gt; 不被索引</li><li><code>path/to/page?a=1&amp;b=2&amp;c=3</code> =&gt; 不被索引</li><li>其他页面都会被索引</li></ul><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2"><span>示例 2</span></a></h4><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">  &quot;rules&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;action&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;allow&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;page&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;path/to/page&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;params&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;a&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;b&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;matching&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;inclusive&quot;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;action&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;disallow&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;page&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;path/to/page&quot;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>path/to/page?a=1&amp;b=2</code> =&gt; 优先索引</li><li><code>path/to/page?a=1&amp;b=2&amp;c=3</code> =&gt; 优先索引</li><li><code>path/to/page</code> =&gt; 不被索引</li><li><code>path/to/page?a=1</code> =&gt; 不被索引</li><li>其他页面都会被索引</li></ul><h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3"><span>示例 3</span></a></h4><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">  &quot;rules&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;action&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;allow&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;page&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;path/to/page&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;params&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;a&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;b&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;matching&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;exclusive&quot;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;action&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;disallow&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;page&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;path/to/page&quot;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>path/to/pag</code>e =&gt; 优先索引</li><li><code>path/to/page?c=3</code> =&gt; 优先索引</li><li><code>path/to/page?a=1</code> =&gt; 不被索引</li><li><code>path/to/page?a=1&amp;b=2</code> =&gt; 不被索引</li><li>其他页面都会被索引</li></ul><h4 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4"><span>示例 4</span></a></h4><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">  &quot;rules&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;action&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;allow&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;page&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;path/to/page&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;params&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;a&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;b&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;matching&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;partial&quot;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;action&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;disallow&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;page&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;path/to/page&quot;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>path/to/page?a=1</code> =&gt; 优先索引</li><li><code>path/to/page?a=1&amp;b=2</code> =&gt; 优先索引</li><li><code>path/to/page</code> =&gt; 不被索引</li><li><code>path/to/page?c=3</code> =&gt; 不被索引</li><li>其他页面都会被索引</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>没有 sitemap.json 则默认所有页面都能被索引</p><p><code>{&quot;action&quot;: &quot;allow&quot;, &quot;page&quot;: &quot;*&quot;}</code> 是优先级最低的默认规则，未显式指明 <code>&quot;disallow&quot;</code> 的都默认被索引</p></div>`,21);function c(h,k){return i(),e("div",null,[p,r,t(" more "),d])}const m=n(o,[["render",c],["__file","sitemap-config.html.vue"]]),y=JSON.parse('{"path":"/code/mini-app/guide/config/sitemap-config.html","title":"小程序内索引","lang":"zh-CN","frontmatter":{"date":"2020-10-09T00:00:00.000Z","title":"小程序内索引","icon":"search","category":"小程序","description":"微信现已开放小程序内搜索，开发者可以通过 sitemap.json 配置，或者管理后台页面收录开关来配置其小程序页面是否允许微信索引。当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索词条触发该索引时，小程序的页面将可能展示在搜索结果中。爬虫访问小程序内页面时，会携带特定的 user-agent: mpcrawler...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/mini-app/guide/config/sitemap-config.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"小程序内索引"}],["meta",{"property":"og:description","content":"微信现已开放小程序内搜索，开发者可以通过 sitemap.json 配置，或者管理后台页面收录开关来配置其小程序页面是否允许微信索引。当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索词条触发该索引时，小程序的页面将可能展示在搜索结果中。爬虫访问小程序内页面时，会携带特定的 user-agent: mpcrawler..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2020-10-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"小程序内索引\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-10-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"配置项","slug":"配置项","link":"#配置项","children":[{"level":3,"title":"rules","slug":"rules","link":"#rules","children":[]},{"level":3,"title":"matching 取值说明","slug":"matching-取值说明","link":"#matching-取值说明","children":[]},{"level":3,"title":"配置示例","slug":"配置示例","link":"#配置示例","children":[]}]}],"git":{"createdTime":1591204114000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":2.81,"words":843},"filePathRelative":"code/mini-app/guide/config/sitemap-config.md","localizedDate":"2020年10月9日","excerpt":"<p>微信现已开放小程序内搜索，开发者可以通过 <code>sitemap.json</code> 配置，或者管理后台页面收录开关来配置其小程序页面是否允许微信索引。当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索词条触发该索引时，小程序的页面将可能展示在搜索结果中。爬虫访问小程序内页面时，会携带特定的 <code>user-agent: mpcrawler</code> 及场景值: <code>1129</code>。需要注意的是，若小程序爬虫发现的页面数据和真实用户的呈现不一致，那么该页面将不会进入索引中。</p>\\n<p>小程序根目录下的 sitemap.json 文件用于配置小程序及其页面是否允许被微信索引，文件内容为一个 JSON 对象，如果没有 <code>sitemap.json</code> ，则默认为所有页面都允许被索引。</p>\\n","autoDesc":true}');export{m as comp,y as data};
