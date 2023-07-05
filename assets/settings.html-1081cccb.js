import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c as r,e as c,b as s,d as n,a as o,f as t}from"./app-27839578.js";const i="/assets/terminal-global-settings-e4d5a632.png",u="/assets/terminal-profiles-ba15c56f.png",d="/assets/terminal-actions-5d043da5.png",k={},q=s("p",null,"配置文件代表着您可以在 Windows Terminal 中配置的不同的命令行环境。默认情况下，每个配置文件使用不同的命令行可执行程序，但是您可以根据自己的喜好，创建任意数量的使用同一可执行程序的配置文件。每个配置文件可以有自己的定制项以帮助您区分它们，并可以自由定制。",-1),h=s("p",null,[n("可以使用快捷键 "),s("code",null,"Ctrl + Shift + *"),n(" 来打开对应的配置文件，可使用 "),s("code",null,"Ctrl + ,"),n(" 打开 settings.json 文件，来进行个性化调整和默认设置更改等设置。")],-1),m=t('<div class="hint-container tip"><p class="hint-container-title">默认设置</p><p>您可以通过按住 Alt 键并点击下拉菜单中的 Settings 按钮打开 defaults.json。该文件由 Terminal 自动生成，展示了 Windows Terminal 所有默认设置及其值。更改此文件是无效的。</p></div><p>settings.json 文件分为四个主要部分:</p><ol><li>全局设置对象，它位于 JSON 文件的顶部。全局设置将影响整个应用程序。</li><li>配置文件设置，由 <code>profiles</code> 对象控制。负责控制每个配置文件。</li><li>配色方案，由 <code>schemes</code> 数组控制。</li><li>自定义操作，由 <code>actions</code> 数组控制</li></ol><h2 id="全局设置" tabindex="-1"><a class="header-anchor" href="#全局设置" aria-hidden="true">#</a> 全局设置</h2><p>全局设置会将影响整个终端窗口。</p>',5),g={href:"https://aka.ms/terminal-global-settings",target:"_blank",rel:"noopener noreferrer"},v=t('<p><img src="'+i+`" alt="全局设置" loading="lazy"></p><h3 id="默认配置文件" tabindex="-1"><a class="header-anchor" href="#默认配置文件" aria-hidden="true">#</a> 默认配置文件</h3><p>默认配置文件为 Windows PowerShell。您可以通过在 settings.json 文件中将 <code>defaultProfile</code> 设置为首选配置文件的名称或 GUID 来更改默认配置文件。</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;defaultProfile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PowerShell&quot;</span>
</code></pre></div><h2 id="配置文件设置" tabindex="-1"><a class="header-anchor" href="#配置文件设置" aria-hidden="true">#</a> 配置文件设置</h2><p><code>profiles</code> 对象描述配置文件。它分为两个部分: <code>defaults</code> 和 <code>list</code>。</p><ul><li><p><code>defaults</code> 对象中的配置文件会应用于列表中的所有项目。</p></li><li><p><code>list</code> 包含代表配置文件的每个配置文件对象，这些是出现在 Windows Terminal 下拉菜单中的项目。应用于 <code>list</code> 中各个配置文件的设置会覆盖 <code>defaults</code> 部分中应用的设置。</p></li></ul>`,7),_={href:"https://aka.ms/terminal-profile-settings",target:"_blank",rel:"noopener noreferrer"},b=t('<p><img src="'+u+'" alt="配置文件设置" loading="lazy"></p><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li><p>您可以在 <code>defaults</code> 中设置 <code>fontFace</code> 控制终端的字体。</p></li><li><p>您可以在 Powershell 配置文件中添加 <code>commandline</code> 为 <code>&lt;PowerShell 地址&gt; -nologo</code> 来去除 powershell 启动时的 logo 显示。(默认地址为: <code>C:/Program Files/PowerShell/7/pwsh.exe</code>)</p></li><li><p>您可以通过设置 <code>backgroundImage</code> 自定义背景图片，通过 <code>backgroundImageOpacity</code> 自定义背景透明度，通过 <code>useAcrylic</code> 开启或关闭毛玻璃效果。</p></li></ul></div><h3 id="新增配置文件" tabindex="-1"><a class="header-anchor" href="#新增配置文件" aria-hidden="true">#</a> 新增配置文件</h3><p>Windows Terminal 会自动为 PowerShell 和 WSL 分发版创建配置文件。</p><p>您也可以手动添加新的配置文件: 只需生成一个新的 <code>guid</code>，提供一个 <code>name</code>，并为 <code>commandline</code> 属性提供可执行程序。</p>',5),f={class:"hint-container info"},y=s("p",{class:"hint-container-title"},"WSL",-1),C={href:"https://www.microsoft.com/zh-cn/p/ubuntu-2004-lts/9n6svws3rx71#activetab=pivot:overviewtab",target:"_blank",rel:"noopener noreferrer"},w=t(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>您不能从动态生成的配置文件中复制 <code>source</code> 属性，否则 Windows Terminal 会忽略此配置文件。您必须使用 <code>commandline</code> 替换 <code>source</code> 并提供可执行程序，以便复制一个动态生成的配置文件。</p></div><h2 id="配色方案" tabindex="-1"><a class="header-anchor" href="#配色方案" aria-hidden="true">#</a> 配色方案</h2><p>您可以在 <code>schemes</code> 数组中配置自定义配色方案。它们是使用以下格式写入的:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Campbell&quot;</span><span class="token punctuation">,</span>

  <span class="token property">&quot;cursorColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#FFFFFF&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;selectionBackground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#FFFFFF&quot;</span><span class="token punctuation">,</span>

  <span class="token property">&quot;background&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0C0C0C&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#CCCCCC&quot;</span><span class="token punctuation">,</span>

  <span class="token property">&quot;black&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0C0C0C&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;blue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0037DA&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;cyan&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#3A96DD&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;green&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#13A10E&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;purple&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#881798&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;red&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#C50F1F&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;white&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#CCCCCC&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;yellow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#C19C00&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;brightBlack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#767676&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;brightBlue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#3B78FF&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;brightCyan&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#61D6D6&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;brightGreen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#16C60C&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;brightPurple&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#B4009E&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;brightRed&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#E74856&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;brightWhite&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#F2F2F2&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;brightYellow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#F9F1A5&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),j={href:"https://aka.ms/terminal-color-schemes",target:"_blank",rel:"noopener noreferrer"},x=t(`<h3 id="自带的配色方案" tabindex="-1"><a class="header-anchor" href="#自带的配色方案" aria-hidden="true">#</a> 自带的配色方案</h3><p>Windows Terminal 在 defaults.json 文件中包含了一些配色方案。如果要在一个命令行配置文件中设置配色方案，请添加 <code>colorScheme</code> 属性，并将配色方案的 <code>name</code> 作为值。</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;colorScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;COLOR SCHEME NAME&quot;</span>
</code></pre></div>`,3),F={href:"https://aka.ms/terminal-color-schemes#included-color-schemes",target:"_blank",rel:"noopener noreferrer"},S=s("h3",{id:"自定义配色方案",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#自定义配色方案","aria-hidden":"true"},"#"),n(" 自定义配色方案")],-1),W=s("p",null,"下面提供几个主题色工具:",-1),T={href:"https://terminal.sexy/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://windowsterminalthemes.dev/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://terminalsplash.com/",target:"_blank",rel:"noopener noreferrer"},B=s("h2",{id:"自定义操作",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#自定义操作","aria-hidden":"true"},"#"),n(" 自定义操作")],-1),N=s("p",null,"您可以在 Windows 终端中创建自定义操作，以控制与终端的交互方式。这些操作将自动添加到命令面板。",-1),A={href:"https://aka.ms/terminal-keybindings",target:"_blank",rel:"noopener noreferrer"},D=t('<p><img src="'+d+`" alt="自定义操作" loading="lazy"></p><p>自定义操作可以设置为以下格式:</p><ul><li><p>无参数命令</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span> <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;命令名称&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token string">&quot;快捷键&quot;</span> <span class="token punctuation">}</span>
</code></pre></div><details class="hint-container details"><summary>例子</summary><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span> <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;closeWindow&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+f4&quot;</span> <span class="token punctuation">}</span>
</code></pre></div></details></li><li><p>有参数命令</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commandName&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;argument&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token string">&quot;modifiers+key&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><details class="hint-container details"><summary>例子</summary><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span> <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;newTab&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+shift+1&quot;</span> <span class="token punctuation">}</span>
</code></pre></div></details></li></ul>`,3);function L(I,V){const a=p("ExternalLinkIcon");return l(),r("div",null,[q,h,c(" more "),m,s("p",null,[n("关于详细的配置项，请见 "),s("a",g,[n("全局设置"),o(a)]),n("。")]),v,s("p",null,[n("关于详细的配置项，请见 "),s("a",_,[n("配置文件设置"),o(a)]),n("。")]),b,s("div",f,[y,s("p",null,[n("您可以通过 "),s("a",C,[n("Microsoft 应用商店"),o(a)]),n(" 安装 Ubuntu。之后便可以在 terminal 上运行 Ubuntu WSL 环境。")])]),w,s("p",null,[n("关于详细的配置项，请见 "),s("a",j,[n("配置文件设置"),o(a)]),n("。")]),x,s("p",null,[n("查看各配色方案效果，请见 "),s("a",F,[n("包含的配色方案"),o(a)]),n("。")]),S,W,s("ul",null,[s("li",null,[s("a",T,[n("terminal.sexy"),o(a)])]),s("li",null,[s("a",P,[n("Windows Terminal Themes"),o(a)])]),s("li",null,[s("a",E,[n("TerminalSplash"),o(a)]),n("，")])]),B,N,s("p",null,[n("关于详细的配置项，请见 "),s("a",A,[n("自定义操作设置"),o(a)]),n("。")]),D])}const M=e(k,[["render",L],["__file","settings.html.vue"]]);export{M as default};
