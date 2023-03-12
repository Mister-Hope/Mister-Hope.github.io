import{_ as n,X as s,Y as a,a1 as e,$ as t,a3 as i}from"./framework-a91f7991.js";const p={},c=t("p",null,"本文介绍如何利用 Git 和 GitHub Action，自动部署代码到服务器。",-1),l=i(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于 Centos 仍然是用 GitV1，本教程使用 Ubuntu 20.04 进行教学。</p></div><h2 id="服务器" tabindex="-1"><a class="header-anchor" href="#服务器" aria-hidden="true">#</a> 服务器</h2><p>为了能供自动部署到服务器，我们需要让服务器的网站目录成为一个 Git 仓库，这样我们可以在 GitHub Actions 中，通过向服务器对应 GitHub 仓库推送网站内容，使服务器网站获得自动更新。下面是服务器侧的部署配置</p><h3 id="添加账户" tabindex="-1"><a class="header-anchor" href="#添加账户" aria-hidden="true">#</a> 添加账户</h3><p>为了安全，首先需要使用命令创建 Git 用户，为了安全请务必设置密码。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> adduser <span class="token function">git</span>
</code></pre></div><p>之后，查看部署目录所在组，git 用户添加到组中。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">usermod</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-G</span> <span class="token operator">&lt;</span>目录所在组<span class="token operator">&gt;</span> <span class="token function">git</span>
</code></pre></div><p>然后将部署目录的权限设置为 <code>775</code>，即允许同组访问。这样 git 就有权限访问部署目录。</p><h3 id="添加权限" tabindex="-1"><a class="header-anchor" href="#添加权限" aria-hidden="true">#</a> 添加权限</h3><p>创建 <code>~/.ssh/</code> 文件夹，生成 <code>authorized_keys</code> 文件，并设置其权限为 <code>600</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/.ssh/

<span class="token function">touch</span> ~/.ssh/authorized_keys

<span class="token function">chmod</span> <span class="token number">600</span> ~/.ssh/authorized_keys
</code></pre></div><p>之后将需要赋予权限的用户公钥依次粘贴至该文件，这样相关用户即可以使用对应私钥，向服务器相关仓库推送代码。</p><h3 id="创建仓库" tabindex="-1"><a class="header-anchor" href="#创建仓库" aria-hidden="true">#</a> 创建仓库</h3><p>回到 <code>/home/git/</code>，创建所需的文件夹:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~
<span class="token function">mkdir</span> <span class="token operator">&lt;</span>仓库名<span class="token operator">&gt;</span>
</code></pre></div><p>进入文件夹，使用</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init --separate-git-dir<span class="token operator">=</span>. <span class="token operator">&lt;</span>部署位置<span class="token operator">&gt;</span>
</code></pre></div><p>这会将 git 库保持在 <code>/home/git/&lt;仓库名&gt;</code> 下，同时将工作区设置到部署文件夹中。</p><p>接下来执行:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config receive.denyCurrentBranch ignore
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--add</span> safe.directory <span class="token operator">&lt;</span>部署文件夹<span class="token operator">&gt;</span>
</code></pre></div><div class="hint-container note"><p class="hint-container-title">注</p><p>Git 默认拒绝外部对当前分支的推送操作，因为这可能会覆盖或变更工作区文件。所以我们需要显式通知 Git 不要拒绝当前分支的推送操作。</p><p>另外在新版本 Git 中，考虑到安全因素，Git 会在检出时检测项目文件夹是否属于其他组成员，如果检测到会默认拒绝相关操作以防止其他用于获取到本不应该获取到的代码信息。因为部署文件夹的所有者通常不会是 git，所以我们需要标记对应的部署文件夹“安全”。</p></div><h2 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions" aria-hidden="true">#</a> GitHub Actions</h2><p>在 GitHub 一侧，我们需要通过 GitHub Action，在新代码推送时自动构建网站，并部署到 GitHub 的 gh-pages 分支。之后，GitHub Action 将该分支的变动推送服务器的对应仓库，完成网站的自动部署。</p><p>之后只需要使用 GitHub Action 通过 Git 推送到 <code>git@&lt;domain&gt;:&lt;部署目录&gt; gh-pages</code> 即可。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 自动部署的名称</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> GitHub pages deploy

<span class="token comment"># 自动部署的条件</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> master

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token comment"># 构建网站并部署到 GitHub Pages</span>
  <span class="token key atrule">deploy-gh-pages</span><span class="token punctuation">:</span>
    <span class="token comment"># 运行环境</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token comment"># 步骤</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token comment"># 第一步: 下载源码</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token comment"># action 配置详见 https://github.com/actions/checkout</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 如果本项目包含了子模块 (git submodules)，需要将此项设置为 true</span>
          <span class="token comment"># submodules: true</span>

          <span class="token comment"># 这是获取历史 commit 的深度，默认为 1，即只拉取最后一个 commit</span>
          <span class="token comment"># 这样可以加快拉取速度</span>
          <span class="token comment">#</span>
          <span class="token comment"># 如果项目使用 VuePress，为了正确通过 Git 历史提交记录生成页面的最后更新时间</span>
          <span class="token comment"># 需要设置为 0 以拉取完整的 git 历史提交</span>
          <span class="token comment"># fetch-depth: 0</span>

          <span class="token comment"># 如果子模块包含私有仓库，需要设置 ssh key 或 token 以保证拥有拉取相应仓库的权限</span>
          <span class="token comment"># 您可以将 ssh-key 设置为 github 绑定公钥对应的私钥</span>
          <span class="token comment"># 也可以新建一个具有相关仓库访问权限的 github token</span>
          <span class="token comment"># token:</span>

      <span class="token comment"># 缓存 node_modules 以避免重复安装</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v3
        <span class="token key atrule">id</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>modules
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 需要缓存的路径</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> node_modules/
          <span class="token comment"># 缓存的 key</span>
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>node<span class="token punctuation">-</span>modules<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;yarn.lock&#39;) <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token comment"># 恢复 key</span>
          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            \${{ runner.os }}-node-modules-</span>

      <span class="token comment"># 安装依赖</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Deps
        <span class="token comment"># 只有没有命中缓存才会执行</span>
        <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.node<span class="token punctuation">-</span>modules.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;
        <span class="token comment"># 严格按照 yarn.lock 安装依赖</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn install <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile

      <span class="token comment"># 构建项目</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token comment"># 项目的构建命令</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn run build

      <span class="token comment"># 第四步，部署</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token comment"># action 配置详见 https://github.com/JamesIves/github-pages-deploy-action</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 部署到的分支</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># 需要部署的文件夹</span>
          <span class="token key atrule">folder</span><span class="token punctuation">:</span> dist

  <span class="token comment"># 部署到服务器</span>
  <span class="token key atrule">deploy-server</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token comment"># 确保在部署到 GitHub Pages 之后执行</span>
    <span class="token key atrule">needs</span><span class="token punctuation">:</span> deploy<span class="token punctuation">-</span>gh<span class="token punctuation">-</span>pages
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token comment"># 检出网站代码</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 检出 gh-pages 分支</span>
          <span class="token key atrule">ref</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># 获取全部的历史提交</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token comment"># 配置环境</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Configuration environment
        <span class="token comment"># 写入私钥、配置 Git 用户名，写入服务器地址</span>
        <span class="token comment"># 您需要自行将服务器的私钥写入 secrets 的 SSH_PRIVATE_KEY</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          mkdir -p ~/.ssh/
          echo &quot;\${{ secrets.SSH_PRIVATE_KEY }}&quot; &gt; ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan &lt;your domain&gt; &gt;&gt; ~/.ssh/known_hosts
          git config --global user.name &#39;Your Name&#39;
          git config --global user.email &#39;You email&#39;</span>

      <span class="token comment"># 部署到服务器</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token comment"># 使用 Git 将网站代码强制推送到远程的网站目录</span>
        <span class="token comment"># 并使用 SSH 连接服务器进入网站目录手动切换到最新提交</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          git push -f git@&lt;your domain&gt;:&lt;deploy dir&gt; gh-pages
          ssh git@&lt;your domain&gt; &quot;cd &lt;deploy dir&gt; &amp;&amp; git reset --hard HEAD&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function o(u,d){return s(),a("div",null,[c,e(" more "),l])}const k=n(p,[["render",o],["__file","deploy.html.vue"]]);export{k as default};
