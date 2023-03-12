import{_ as i,X as a,Y as t,$ as s,Z as o,a2 as d,a3 as e,C as c,a0 as l}from"./framework-a91f7991.js";const r={},p=e(`<p>由于目前 GitHub 已经在全国大部分范围内被主要运营商进行 DNS 封锁，所以如果需要配合 GitHub 使用 Git，需要进行代理设置。</p><h2 id="代理设置" tabindex="-1"><a class="header-anchor" href="#代理设置" aria-hidden="true">#</a> 代理设置</h2><p>通常情况下，我们可以通过设置环境变量 <code>HTTP_PROXY</code> 和 <code>HTTPS_PROXY</code> 来进行代理设置。</p><p>在 Windows 下，我们可以通过设置环境变量 <code>HTTP_PROXY</code> 和 <code>HTTPS_PROXY</code> 来进行代理设置。</p><details class="hint-container details"><summary>Windows 例子</summary><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> <span class="token assign-left variable">HTTP_PROXY</span><span class="token operator">=</span>http://127.0.0.1:1080
<span class="token builtin class-name">set</span> <span class="token assign-left variable">HTTPS_PROXY</span><span class="token operator">=</span>http://127.0.0.1:1080
</code></pre></div></details><details class="hint-container details"><summary>Linux 例子</summary><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTP_PROXY</span><span class="token operator">=</span>http://127.0.0.1:1080
<span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTPS_PROXY</span><span class="token operator">=</span>http://127.0.0.1:1080
</code></pre></div></details><p>上述做法仅对当前终端有效，如果需要永久生效，可以将上述命令添加到系统环境变量 (Windows) 或 <code>~/.bashrc</code> (Linux) 中。</p>`,7),u={class:"hint-container tip"},v=s("p",{class:"hint-container-title"},"提示",-1),m=e(`<h2 id="ssh-配置" tabindex="-1"><a class="header-anchor" href="#ssh-配置" aria-hidden="true">#</a> SSH 配置</h2><p>如果你在使用 22 端口通过 SSH 使用 Git，那么你需要在用户目录下的 <code>.ssh</code> 目录新建 <code>config</code> 文件，并输入以下内容:</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>Host github.com
  User git
  Port 22
  Hostname github.com
  # 这里在 Windows 下需要替换成实际目录，如 &quot;C:\\Users\\mister-hope\\.ssh\\id_rsa&quot;
  IdentityFile &quot;~/.ssh/id_rsa&quot;
  TCPKeepAlive yes
  # Ubuntu 需要安装 corkscrew
  ProxyCommand /usr/bin/corkscrew 172.31.16.1 10808 %h %p
  # Windows 可以改为 Git 安装目录下的 connect，如
  # ProxyCommand &quot;C:\\Program Files\\Git\\mingw64\\bin\\connect&quot; -S 127.0.0.1:10808 -a none %h %p

Host ssh.github.com
  User git
  Port 443
  Hostname ssh.github.com
  # 这里在 Windows 下需要替换成实际目录，如 &quot;C:\\Users\\mister-hope\\.ssh\\id_rsa&quot;
  IdentityFile &quot;~/.ssh/id_rsa&quot;
  TCPKeepAlive yes
  # Ubuntu 需要安装 corkscrew
  ProxyCommand /usr/bin/corkscrew 172.31.16.1 10808 %h %p
  # Windows 可以改为 Git 安装目录下的 connect，如
  # ProxyCommand &quot;C:\\Program Files\\Git\\mingw64\\bin\\connect&quot; -S 127.0.0.1:10808 -a none %h %p

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果在 WSL 使用，获取 Windows 的 IP 地址命令为 <code>ip route | grep default | awk &#39;{print $3}&#39;</code>。</p><p>特别注意，如不进行额外配置，每次重启后主机地址都会发生变化。</p></div><p>你可以使用 <code>ssh -T git@github.com</code> 来测试你的代理配置是否有效。</p>`,5);function h(b,_){const n=c("RouterLink");return a(),t("div",null,[p,s("div",u,[v,s("p",null,[o(n,{to:"/code/windows/env-variable.html"},{default:d(()=>[l("Windows 添加环境变量")]),_:1})])]),m])}const P=i(r,[["render",h],["__file","proxy.html.vue"]]);export{P as default};
