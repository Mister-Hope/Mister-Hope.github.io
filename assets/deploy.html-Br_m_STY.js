import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,e as l,b as t,o as e}from"./app-D_3IGtdL.js";const h={};function k(p,i){return e(),a("div",null,[i[0]||(i[0]=n("p",null,"本文介绍如何利用 Git 和 GitHub Action，自动部署代码到服务器。",-1)),l(" more "),i[1]||(i[1]=t(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于 Centos 仍然是用 GitV1，本教程使用 Ubuntu 20.04 进行教学。</p></div><h2 id="服务器" tabindex="-1"><a class="header-anchor" href="#服务器"><span>服务器</span></a></h2><p>为了能供自动部署到服务器，我们需要让服务器的网站目录成为一个 Git 仓库，这样我们可以在 GitHub Actions 中，通过向服务器对应 GitHub 仓库推送网站内容，使服务器网站获得自动更新。下面是服务器侧的部署配置</p><h3 id="添加账户" tabindex="-1"><a class="header-anchor" href="#添加账户"><span>添加账户</span></a></h3><p>为了安全，首先需要使用命令创建 Git 用户，为了安全请务必设置密码。</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> adduser</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span></span></code></pre></div><p>之后，查看部署目录所在组，git 用户添加到组中。</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">usermod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -G</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">目录所在</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">组&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">git</span></span></code></pre></div><p>然后将部署目录的权限设置为 <code>775</code>，即允许同组访问。这样 git 就有权限访问部署目录。</p><h3 id="添加权限" tabindex="-1"><a class="header-anchor" href="#添加权限"><span>添加权限</span></a></h3><p>创建 <code>~/.ssh/</code> 文件夹，生成 <code>authorized_keys</code> 文件，并设置其权限为 <code>600</code>。</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/.ssh/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">touch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/.ssh/authorized_keys</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 600</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/.ssh/authorized_keys</span></span></code></pre></div><p>之后将需要赋予权限的用户公钥依次粘贴至该文件，这样相关用户即可以使用对应私钥，向服务器相关仓库推送代码。</p><h3 id="创建仓库" tabindex="-1"><a class="header-anchor" href="#创建仓库"><span>创建仓库</span></a></h3><p>回到 <code>/home/git/</code>，创建所需的文件夹:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">仓库</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">名&gt;</span></span></code></pre></div><p>进入文件夹，使用</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --separate-git-dir=.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">部署位</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">置&gt;</span></span></code></pre></div><p>这会将 git 库保持在 <code>/home/git/&lt;仓库名&gt;</code> 下，同时将工作区设置到部署文件夹中。</p><p>接下来执行:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> receive.denyCurrentBranch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ignore</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> safe.directory</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">部署文件</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">夹&gt;</span></span></code></pre></div><div class="hint-container note"><p class="hint-container-title">注</p><p>Git 默认拒绝外部对当前分支的推送操作，因为这可能会覆盖或变更工作区文件。所以我们需要显式通知 Git 不要拒绝当前分支的推送操作。</p><p>另外在新版本 Git 中，考虑到安全因素，Git 会在检出时检测项目文件夹是否属于其他组成员，如果检测到会默认拒绝相关操作以防止其他用于获取到本不应该获取到的代码信息。因为部署文件夹的所有者通常不会是 git，所以我们需要标记对应的部署文件夹“安全”。</p></div><h2 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions"><span>GitHub Actions</span></a></h2><p>在 GitHub 一侧，我们需要通过 GitHub Action，在新代码推送时自动构建网站，并部署到 GitHub 的 gh-pages 分支。之后，GitHub Action 将该分支的变动推送服务器的对应仓库，完成网站的自动部署。</p><p>之后只需要使用 GitHub Action 通过 Git 推送到 <code>git@&lt;domain&gt;:&lt;部署目录&gt; gh-pages</code> 即可。</p><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 自动部署的名称</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">GitHub pages deploy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 自动部署的条件</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    branches</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">master</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">jobs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 构建网站并部署到 GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  deploy-gh-pages</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 运行环境</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    runs-on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 步骤</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    steps</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 第一步: 下载源码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Checkout</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # action 配置详见 https://github.com/actions/checkout</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">actions/checkout@v4</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 如果本项目包含了子模块 (git submodules)，需要将此项设置为 true</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # submodules: true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 这是获取历史 commit 的深度，默认为 1，即只拉取最后一个 commit</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 这样可以加快拉取速度</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          #</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 如果项目使用 VuePress，为了正确通过 Git 历史提交记录生成页面的最后更新时间</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 需要设置为 0 以拉取完整的 git 历史提交</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # fetch-depth: 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 如果子模块包含私有仓库，需要设置 ssh key 或 token 以保证拥有拉取相应仓库的权限</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 您可以将 ssh-key 设置为 github 绑定公钥对应的私钥</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 也可以新建一个具有相关仓库访问权限的 github token</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # token:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 缓存 node_modules 以避免重复安装</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">actions/cache@v3</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">node-modules</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 需要缓存的路径</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">node_modules/</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 缓存的 key</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\${{ runner.os }}-node-modules-\${{ hashFiles(&#39;yarn.lock&#39;) }}</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 恢复 key</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          restore-keys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            \${{ runner.os }}-node-modules-</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Install Deps</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 只有没有命中缓存才会执行</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">steps.node-modules.outputs.cache-hit != &#39;true&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 严格按照 yarn.lock 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">yarn install --frozen-lockfile</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 构建项目</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Build</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 项目的构建命令</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">yarn run build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 第四步，部署</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Deploy</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # action 配置详见 https://github.com/JamesIves/github-pages-deploy-action</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">JamesIves/github-pages-deploy-action@v4</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 部署到的分支</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          branch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">gh-pages</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 需要部署的文件夹</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          folder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">dist</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # 部署到服务器</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  deploy-server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    runs-on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # 确保在部署到 GitHub Pages 之后执行</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    needs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">deploy-gh-pages</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    steps</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 检出网站代码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Checkout</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        uses</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">actions/checkout@v4</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 检出 gh-pages 分支</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          ref</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">gh-pages</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">          # 获取全部的历史提交</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          fetch-depth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 配置环境</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Configuration environment</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 写入私钥、配置 Git 用户名，写入服务器地址</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 您需要自行将服务器的私钥写入 secrets 的 SSH_PRIVATE_KEY</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          mkdir -p ~/.ssh/</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          echo &quot;\${{ secrets.SSH_PRIVATE_KEY }}&quot; &gt; ~/.ssh/id_rsa</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          chmod 600 ~/.ssh/id_rsa</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          ssh-keyscan &lt;your domain&gt; &gt;&gt; ~/.ssh/known_hosts</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          git config --global user.name &#39;Your Name&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          git config --global user.email &#39;You email&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      # 部署到服务器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Deploy</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 使用 Git 将网站代码强制推送到远程的网站目录</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        # 并使用 SSH 连接服务器进入网站目录手动切换到最新提交</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          git push -f git@&lt;your domain&gt;:&lt;deploy dir&gt; gh-pages</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          ssh git@&lt;your domain&gt; &quot;cd &lt;deploy dir&gt; &amp;&amp; git reset --hard HEAD&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26))])}const c=s(h,[["render",k],["__file","deploy.html.vue"]]),g=JSON.parse('{"path":"/code/github/deploy.html","title":"自动部署","lang":"zh-CN","frontmatter":{"date":"2021-01-18T00:00:00.000Z","title":"自动部署","icon":"network","category":"GitHub","tag":["Git","deploy"],"order":8,"description":"本文介绍如何利用 Git 和 GitHub Action，自动部署代码到服务器。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/github/deploy.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"自动部署"}],["meta",{"property":"og:description","content":"本文介绍如何利用 Git 和 GitHub Action，自动部署代码到服务器。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"deploy"}],["meta",{"property":"article:published_time","content":"2021-01-18T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自动部署\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-01-18T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"服务器","slug":"服务器","link":"#服务器","children":[{"level":3,"title":"添加账户","slug":"添加账户","link":"#添加账户","children":[]},{"level":3,"title":"添加权限","slug":"添加权限","link":"#添加权限","children":[]},{"level":3,"title":"创建仓库","slug":"创建仓库","link":"#创建仓库","children":[]}]},{"level":2,"title":"GitHub Actions","slug":"github-actions","link":"#github-actions","children":[]}],"readingTime":{"minutes":4.21,"words":1263},"filePathRelative":"code/github/deploy.md","localizedDate":"2021年1月18日","excerpt":"<p>本文介绍如何利用 Git 和 GitHub Action，自动部署代码到服务器。</p>\\n","autoDesc":true}');export{c as comp,g as data};
