import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,d as l,e as s,f as e,b as t}from"./app-C6d_tW6U.js";const r={},o=s("p",null,"这个 Action 允许您缓存依赖项和构建输出内容以缩短 Workflow 执行时间。",-1),c=s("p",null,"日常最多使用的就是缓存依赖项，在每个工作流程中，将安装后的依赖通过安装后生成的依赖版本文件的哈希值进行缓存。",-1),p=s("p",null,"当前工作流程的版本文件哈希值与历史缓存中的某一项完全相同时，直接载入这些依赖项缓存，这样就可以免去安装步骤。",-1),d=s("div",{class:"hint-container info"},[s("p",{class:"hint-container-title"},"缓存依赖"),s("p",null,[e("关于缓存依赖的文档，详见 "),s("a",{href:"https://docs.github.com/cn/actions/guides/caching-dependencies-to-speed-up-workflows",target:"_blank",rel:"noopener noreferrer"},"缓存依赖项以加快工作流程"),e("。")])],-1),h=t(`<h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2><h3 id="path" tabindex="-1"><a class="header-anchor" href="#path"><span>path</span></a></h3><p>要缓存和还原的文件，目录和通配符模式的列表。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>支持的 glob 模式，请参见 <a href="https://github.com/actions/toolkit/tree/main/packages/glob" target="_blank" rel="noopener noreferrer">@actions/glob</a>。</p></div><h3 id="key" tabindex="-1"><a class="header-anchor" href="#key"><span>key</span></a></h3><p>用于保存缓存与还原缓存的的密钥</p><h3 id="restore-keys" tabindex="-1"><a class="header-anchor" href="#restore-keys"><span>restore-keys</span></a></h3><p>当 key 没有命中缓存是用于恢复缓存键值的有序列表</p><h2 id="输出" tabindex="-1"><a class="header-anchor" href="#输出"><span>输出</span></a></h2><p><code>cache-hit</code>: 一个布尔值，表明是否找到与该键完全匹配的值</p><h2 id="缓存范围" tabindex="-1"><a class="header-anchor" href="#缓存范围"><span>缓存范围</span></a></h2><p>缓存的作用域为特定的键和分支。默认分支缓存可用于其他分支。</p><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2><p>Yarn:</p><div class="language-yml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">- </span><span style="color:#22863A;--shiki-dark:#E06C75;">uses</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">actions/cache@v3</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  # 使用此 id 获得 \`cache-hit\`</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  # (\`steps.yarn-cache.outputs.cache-hit != &#39;true&#39;\`)</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  id</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">yarn-cache</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  with</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">    path</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">node_modules/</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">    key</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">\${{ runner.os }}-yarn-\${{ hashFiles(&#39;**/yarn.lock&#39;) }}</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">    restore-keys</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#D73A49;--shiki-dark:#C678DD;">|</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#98C379;">      \${{ runner.os }}-yarn-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">- </span><span style="color:#22863A;--shiki-dark:#E06C75;">name</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">Install Dependencies</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  if</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">steps.yarn-cache.outputs.cache-hit != &#39;true&#39;</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  run</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">yarn install</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建一个缓存键" tabindex="-1"><a class="header-anchor" href="#创建一个缓存键"><span>创建一个缓存键</span></a></h2><p>缓存键可以包括 GitHub Actions 支持的任何上下文，函数，文字和运算符。</p><p>例如，使用 <code>hashFiles</code> 功能可让您在依存关系更改时创建新的缓存。</p><div class="language-yml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">- </span><span style="color:#22863A;--shiki-dark:#E06C75;">uses</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">actions/cache@v3</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  id</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">yarn-cache</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  with</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">    path</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#D73A49;--shiki-dark:#C678DD;">|</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#98C379;">      node_modules/</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">    key</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">\${{ runner.os }}-\${{ hashFiles(&#39;**/yarn.lock&#39;) }}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用 cache-hit 输出，当对应键命中特定缓存后，可以跳过后续步骤 (例如，安装或构建) 。</p><div class="language-yml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">- </span><span style="color:#22863A;--shiki-dark:#E06C75;">name</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">Install Dependencies</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  if</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">steps.yarn-cache.outputs.cache-hit != &#39;true&#39;</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  run</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">yarn install</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="缓存限制" tabindex="-1"><a class="header-anchor" href="#缓存限制"><span>缓存限制</span></a></h2><p>一个存储库最多可以有 5GB 的缓存。达到 5GB 限制后，将根据上次访问缓存的时间驱逐较早的缓存。过去未访问的缓存也将被自动删除。</p><h2 id="仓库" tabindex="-1"><a class="header-anchor" href="#仓库"><span>仓库</span></a></h2><p><a href="https://github.com/actions/cache" target="_blank" rel="noopener noreferrer">https://github.com/actions/cache</a></p>`,25);function k(y,m){return n(),i("div",null,[o,c,p,d,l(" more "),h])}const v=a(r,[["render",k],["__file","cache.html.vue"]]),B=JSON.parse('{"path":"/code/github/actions/cache.html","title":"cache","lang":"zh-CN","frontmatter":{"title":"cache","date":"2021-02-20T00:00:00.000Z","category":"GitHub","tag":["action","workflow"],"description":"这个 Action 允许您缓存依赖项和构建输出内容以缩短 Workflow 执行时间。 日常最多使用的就是缓存依赖项，在每个工作流程中，将安装后的依赖通过安装后生成的依赖版本文件的哈希值进行缓存。 当前工作流程的版本文件哈希值与历史缓存中的某一项完全相同时，直接载入这些依赖项缓存，这样就可以免去安装步骤。 缓存依赖 关于缓存依赖的文档，详见 缓存依赖项...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/github/actions/cache.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"cache"}],["meta",{"property":"og:description","content":"这个 Action 允许您缓存依赖项和构建输出内容以缩短 Workflow 执行时间。 日常最多使用的就是缓存依赖项，在每个工作流程中，将安装后的依赖通过安装后生成的依赖版本文件的哈希值进行缓存。 当前工作流程的版本文件哈希值与历史缓存中的某一项完全相同时，直接载入这些依赖项缓存，这样就可以免去安装步骤。 缓存依赖 关于缓存依赖的文档，详见 缓存依赖项..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-03-31T03:20:18.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"action"}],["meta",{"property":"article:tag","content":"workflow"}],["meta",{"property":"article:published_time","content":"2021-02-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-03-31T03:20:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cache\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-02-20T00:00:00.000Z\\",\\"dateModified\\":\\"2022-03-31T03:20:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"配置项","slug":"配置项","link":"#配置项","children":[{"level":3,"title":"path","slug":"path","link":"#path","children":[]},{"level":3,"title":"key","slug":"key","link":"#key","children":[]},{"level":3,"title":"restore-keys","slug":"restore-keys","link":"#restore-keys","children":[]}]},{"level":2,"title":"输出","slug":"输出","link":"#输出","children":[]},{"level":2,"title":"缓存范围","slug":"缓存范围","link":"#缓存范围","children":[]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[]},{"level":2,"title":"创建一个缓存键","slug":"创建一个缓存键","link":"#创建一个缓存键","children":[]},{"level":2,"title":"缓存限制","slug":"缓存限制","link":"#缓存限制","children":[]},{"level":2,"title":"仓库","slug":"仓库","link":"#仓库","children":[]}],"git":{"createdTime":1613826006000,"updatedTime":1648696818000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":7}]},"readingTime":{"minutes":1.75,"words":526},"filePathRelative":"code/github/actions/cache.md","localizedDate":"2021年2月20日","excerpt":"<p>这个 Action 允许您缓存依赖项和构建输出内容以缩短 Workflow 执行时间。</p>\\n<p>日常最多使用的就是缓存依赖项，在每个工作流程中，将安装后的依赖通过安装后生成的依赖版本文件的哈希值进行缓存。</p>\\n<p>当前工作流程的版本文件哈希值与历史缓存中的某一项完全相同时，直接载入这些依赖项缓存，这样就可以免去安装步骤。</p>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">缓存依赖</p>\\n<p>关于缓存依赖的文档，详见 <a href=\\"https://docs.github.com/cn/actions/guides/caching-dependencies-to-speed-up-workflows\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">缓存依赖项以加快工作流程</a>。</p>\\n</div>\\n","autoDesc":true}');export{v as comp,B as data};
