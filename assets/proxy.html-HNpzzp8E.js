import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as a,c as o,d as e,a as r,w as l,b as t,e as c}from"./app-S62fdHqc.js";const d={},p=t(`<p>由于目前 GitHub 已经在全国大部分范围内被主要运营商进行 DNS 封锁，所以如果需要配合 GitHub 使用 Git，需要进行代理设置。</p><h2 id="代理设置" tabindex="-1"><a class="header-anchor" href="#代理设置"><span>代理设置</span></a></h2><p>通常情况下，我们可以通过设置环境变量 <code>HTTP_PROXY</code> 和 <code>HTTPS_PROXY</code> 来进行代理设置。</p><p>在 Windows 下，我们可以通过设置环境变量 <code>HTTP_PROXY</code> 和 <code>HTTPS_PROXY</code> 来进行代理设置。</p><details class="hint-container details"><summary>Windows 例子</summary><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> <span class="token assign-left variable">HTTP_PROXY</span><span class="token operator">=</span>http://127.0.0.1:1080
<span class="token builtin class-name">set</span> <span class="token assign-left variable">HTTPS_PROXY</span><span class="token operator">=</span>http://127.0.0.1:1080
</code></pre></div></details><details class="hint-container details"><summary>Linux 例子</summary><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTP_PROXY</span><span class="token operator">=</span>http://127.0.0.1:1080
<span class="token builtin class-name">export</span> <span class="token assign-left variable">HTTPS_PROXY</span><span class="token operator">=</span>http://127.0.0.1:1080
</code></pre></div></details><p>上述做法仅对当前终端有效，如果需要永久生效，可以将上述命令添加到系统环境变量 (Windows) 或 <code>~/.bashrc</code> (Linux) 中。</p>`,7),m={class:"hint-container tip"},u=e("p",{class:"hint-container-title"},"提示",-1),h=t(`<h2 id="ssh-配置" tabindex="-1"><a class="header-anchor" href="#ssh-配置"><span>SSH 配置</span></a></h2><p>如果你在使用 22 端口通过 SSH 使用 Git，那么你需要在用户目录下的 <code>.ssh</code> 目录新建 <code>config</code> 文件，并输入以下内容:</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>Host github.com
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果在 WSL 使用，获取 Windows 的 IP 地址命令为 <code>ip route | grep default | awk &#39;{print $3}&#39;</code>。</p><p>特别注意，如不进行额外配置，每次重启后主机地址都会发生变化。</p></div><p>你可以使用 <code>ssh -T git@github.com</code> 来测试你的代理配置是否有效。</p>`,5);function v(b,g){const s=i("RouteLink");return a(),o("div",null,[p,e("div",m,[u,e("p",null,[r(s,{to:"/code/windows/env-variable.html"},{default:l(()=>[c("Windows 添加环境变量")]),_:1})])]),h])}const T=n(d,[["render",v],["__file","proxy.html.vue"]]),y=JSON.parse('{"path":"/software/git/proxy.html","title":"Git 代理","lang":"zh-CN","frontmatter":{"date":"2022-11-06T00:00:00.000Z","title":"Git 代理","icon":"git","category":"Git","tag":["Git","软件"],"description":"由于目前 GitHub 已经在全国大部分范围内被主要运营商进行 DNS 封锁，所以如果需要配合 GitHub 使用 Git，需要进行代理设置。 代理设置 通常情况下，我们可以通过设置环境变量 HTTP_PROXY 和 HTTPS_PROXY 来进行代理设置。 在 Windows 下，我们可以通过设置环境变量 HTTP_PROXY 和 HTTPS_PRO...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/software/git/proxy.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"Git 代理"}],["meta",{"property":"og:description","content":"由于目前 GitHub 已经在全国大部分范围内被主要运营商进行 DNS 封锁，所以如果需要配合 GitHub 使用 Git，需要进行代理设置。 代理设置 通常情况下，我们可以通过设置环境变量 HTTP_PROXY 和 HTTPS_PROXY 来进行代理设置。 在 Windows 下，我们可以通过设置环境变量 HTTP_PROXY 和 HTTPS_PRO..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:published_time","content":"2022-11-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git 代理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"代理设置","slug":"代理设置","link":"#代理设置","children":[]},{"level":2,"title":"SSH 配置","slug":"ssh-配置","link":"#ssh-配置","children":[]}],"git":{"createdTime":1670336302000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":1.55,"words":466},"filePathRelative":"software/git/proxy.md","localizedDate":"2022年11月6日","excerpt":"","autoDesc":true}');export{T as comp,y as data};
