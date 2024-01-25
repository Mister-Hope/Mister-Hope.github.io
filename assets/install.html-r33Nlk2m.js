import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as p,c,f as t,d as a,e,a as d,b as r}from"./app-50nBCNnt.js";const l={},i=a("p",null,"由于 Node.js 平台是在后端运行 JavaScript 代码，所以，必须首先在本机安装 Node.js 环境。",-1),h=a("h2",{id:"安装-node-js",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#安装-node-js","aria-hidden":"true"},"#"),e(" 安装 Node.js")],-1),u=a("p",null,[e("目前 Node.js 的 LTS 版本是 18.15.0。首先，从 Node.js 官网下载对应平台的安装程序。点击"),a("strong",null,"长期维护版"),e("的下载按钮。")],-1),m={href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},g=r(`<h3 id="安装过程" tabindex="-1"><a class="header-anchor" href="#安装过程" aria-hidden="true">#</a> 安装过程</h3><ul><li><p>在 Windows 上安装时务必选择全部组件，包括勾选 <code>Add to Path</code>。</p><p>在安装过程中，无需勾选 &quot;Automatically install the necessary tools&quot;。选中此项会在电脑中安装 VS 等日常开发使用不到的软件。</p><p>安装完成后，在 Windows 环境下，请打开命令提示符，然后输入 <code>node -v</code> ，如果安装正常，您应该看到 <code>v18.15.0</code> 这样的输出:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>IEUser<span class="token operator">&gt;</span>node <span class="token parameter variable">-v</span>
v18.15.0
</code></pre></div><p>继续在命令提示符输入 node，此刻您将进入 Node.js 的交互环境。在交互环境下，您可以输入任意 JavaScript 语句，例如 <code>100 + 200</code>，回车后将得到输出结果。</p><p>要退出 Node.js 环境，连按两次 <code>Ctrl + C</code> 。</p></li><li><p>在 Mac 或 Linux 环境下，请打开终端，然后输入 <code>node -v</code>，您应该看到如下输出:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">node</span> <span class="token parameter variable">-v</span>
v18.15.0
</code></pre></div></li></ul><h2 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h2><p>npm 是 Node.js 的包管理工具(package manager)。</p><p>我们在 Node.js 上开发时，会用到很多别人写的 JavaScript 代码。如果我们要使用别人写的某个包，每次都根据名称搜索一下官方网站，下载代码，解压，再使用，非常繁琐。于是一个集中管理的工具应运而生: 大家都把自己开发的模块打包后放到 npm 官网上，如果要使用，直接通过 npm 安装就可以直接用，不用管代码存在哪，应该从哪下载。</p><p>更重要的是，如果我们要使用模块 A，而模块 A 又依赖于模块 B，模块 B 又依赖于模块 X 和模块 Y，npm 可以根据依赖关系，把所有依赖的包都下载下来并管理起来。否则，靠我们自己手动管理，肯定既麻烦又容易出错。</p><p>讲了这么多，npm 究竟在哪?</p><p>其实 npm 已经在 Node.js 安装的时候顺带装好了。我们在命令提示符或者终端输入 <code>npm -v</code>，应该看到类似的输出:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span><span class="token operator">&gt;</span>npm <span class="token parameter variable">-v</span>
<span class="token number">9.6</span>.0
</code></pre></div><blockquote><p>如果版本号太小，说明 npm 版本较低，请使用此命令升级到最新版本: <code>npm i -g npm</code>。</p></blockquote><p>如果直接输入 <code>npm</code>，您会看到类似下面的输出:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span><span class="token operator">&gt;</span> <span class="token function">npm</span>
<span class="token function">npm</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>

Usage:

<span class="token function">npm</span> <span class="token function">install</span>        <span class="token function">install</span> all the dependencies <span class="token keyword">in</span> your project
<span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&lt;</span>foo<span class="token operator">&gt;</span>  <span class="token function">add</span> the <span class="token operator">&lt;</span>foo<span class="token operator">&gt;</span> dependency to your project
    <span class="token punctuation">..</span>.
</code></pre></div><p>上面的一大堆文字告诉您，npm 需要附带命令。现在我们不用关心这些命令，后面会一一讲到。目前，您只需要确保 npm 正确安装了，能运行就行。</p><h2 id="国内镜像站" tabindex="-1"><a class="header-anchor" href="#国内镜像站" aria-hidden="true">#</a> 国内镜像站</h2><p>由于 GFW，有的时候，访问国外的 Node.js 服务器可能会十分缓慢以至于您想把它砸了。</p><p>阿里巴巴免费为国内开发者提供镜像源。你可以将 npm 的源配置为该镜像源，以在每次安装依赖的时候从国内镜像站拉取镜像。这可以极大的提升安装速度。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>如果官方源的速度还可以的话请尽可能使用官方源。</p><p>国内源毕竟是镜像站点，同步官方源的包会出现延迟，所以有时候你可能会遇到 <code>version xxx not found</code> 之类的错误，这是因为所需要的版本还没来得及被镜像站点同步所导致。</p><p>你可以通过访问 <code>npmmirror.com/sync/&lt;包名&gt;</code> 来手动同步一个包。</p></div><p>设置及国内源的命令如下:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com/
</code></pre></div><div class="hint-container caution"><p class="hint-container-title">警告</p><p><code>https://registry.npm.taobao.org/</code> 是老的淘宝源地址，现已停止维护，请不要使用!!!</p></div><h2 id="启用-corepack" tabindex="-1"><a class="header-anchor" href="#启用-corepack" aria-hidden="true">#</a> 启用 Corepack</h2><p>Node.js 自带的包管理工具 npm 并不是那么的强大，其安装速度也很慢，所以社区开发了一些其他的包管理工具如 <code>yarn</code> 和 <code>pnpm</code>，它们有自己的优势。</p><p>Mr.Hope 推荐使用 pnpm 进行包管理，因为它使用硬链接索引包文件，安装速度更快而且节省磁盘空间。</p><p>从 v16 开始，Node.js 引入了 Corepack 工具，并在 package.json 支持了 <code>packageManager</code> 选项以支持第三方管理工具。</p><p>你需要通过下方命令启用 Corepack:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>corepack <span class="token builtin class-name">enable</span>
</code></pre></div><p>这样每个项目会自动应用根目录 package.json 中的 <code>packageManager</code> 选项。比如设置 <code>&quot;packageManager&quot;: &quot;pnpm@7.30.3&quot;</code> 的时候，会自动下载并使用 <code>pnpm@7.30.3</code>。</p><div class="hint-container info"><p class="hint-container-title">设置全局的 packageManager</p><p>你可以使用 <code>corepack prepare packageManager@semver</code> 来全局准备一个 packageManager 版本，并使用 <code>--activate</code> 选新娘 全局激活。</p><p>比如以下命令下载 <code>pnpm@7.30.3</code> 并将其作为默认的全局包管理器:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>corepack prepare pnpm@7.30.3 <span class="token parameter variable">--activate</span>
</code></pre></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>请在本机安装 Node.js 环境，并确保 Node.js 和 npm 能正常运行。</p>`,30);function k(v,b){const n=o("ExternalLinkIcon");return p(),c("div",null,[i,t(" more "),h,u,a("ul",null,[a("li",null,[a("a",m,[e("Node.js 官网"),d(n)])])]),g])}const j=s(l,[["render",k],["__file","install.html.vue"]]);export{j as default};
