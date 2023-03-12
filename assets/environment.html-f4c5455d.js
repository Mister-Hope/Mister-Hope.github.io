import{_ as p,X as l,Y as c,a1 as r,$ as n,a0 as s,Z as a,a2 as i,a3 as u,C as o}from"./framework-a91f7991.js";const d={},k=n("p",null,[s("由于 Node.js 需要编码、运行、调试，我们需要一个 IDE 集成开发环境，这样就可以大大提升开发效率。综合考察后，Mr.Hope 隆重向大家推荐 Node.js 集成开发环境: "),n("strong",null,"Visual Studio Code"),s("。它启动速度快，执行简单，调试方便这三点上。当然，免费使用是一个加分项。")],-1),v={class:"hint-container info"},q=n("p",{class:"hint-container-title"},"相关信息",-1),m=u(`<h2 id="运行和调试-javascript" tabindex="-1"><a class="header-anchor" href="#运行和调试-javascript" aria-hidden="true">#</a> 运行和调试 JavaScript</h2><p>在 VS Code 中，我们可以非常方便地运行 JavaScript 文件。</p><p>VS Code 以文件夹作为工程目录 (Workspace Dir)，所有的 JavaScript 文件都存放在该目录下。此外，VS Code 在工程目录下还需要一个 <code>.vscode</code> 的配置目录，里面存放里 VS Code 需要的配置文件。</p><p>假设我们在 <code>C:\\Work\\</code> 目录下创建了一个 hello 目录作为工程目录，并编写了一个 <code>hello.js</code> 文件，则该工程目录的结构如下:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>hello/ &lt;-- workspace dir
|
├─ hello.js &lt;-- JavaScript file
|
└─ .vscode/ &lt;-- VS Code config
      |
      └ launch.json &lt;-- VS Code config file for JavaScript
</code></pre></div><p>可以用 VS Code 快速创建 <code>launch.json</code>，然后修改如下:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Run hello.js&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;program&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceRoot}/hello.js&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;stopOnEntry&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;cwd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceRoot}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;preLaunchTask&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;runtimeExecutable&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;runtimeArgs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;--nolazy&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;NODE_ENV&quot;</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;externalConsole&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sourceMaps&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有了配置文件，即可使用 VS Code 调试 JavaScript。</p><h2 id="视频演示" tabindex="-1"><a class="header-anchor" href="#视频演示" aria-hidden="true">#</a> 视频演示</h2>`,9),h={href:"https://www.bilibili.com/video/av5827351/",target:"_blank",rel:"noopener noreferrer"};function b(_,g){const e=o("RouterLink"),t=o("ExternalLinkIcon");return l(),c("div",null,[k,r(" more "),n("div",v,[q,n("p",null,[s("有关 VS Code 使用教程请"),a(e,{to:"/software/vscode/"},{default:i(()=>[s("访问这里")]),_:1})])]),m,n("ul",null,[n("li",null,[n("a",h,[s("视频演示"),a(t)])])])])}const y=p(d,[["render",b],["__file","environment.html.vue"]]);export{y as default};
