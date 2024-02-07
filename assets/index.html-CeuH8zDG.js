import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,b as a}from"./app-DDVDjG37.js";const t={},o=a(`<p>目前使用的系统是 WSL2。</p><p>其中以下操作可能需要在新机器上进行相同操作:</p><h2 id="windows-侧" tabindex="-1"><a class="header-anchor" href="#windows-侧"><span>Windows 侧</span></a></h2><p>Windows 侧可以在用户目录下创建 <code>.wslconfig</code> 文件，用于配置 WSL2。</p><div class="language-conf" data-ext="conf" data-title="conf"><pre class="language-conf"><code>[wsl2]
# Limits VM memory in WSL 2 to 8 GB
memory=8GB
</code></pre></div><h2 id="wsl-侧" tabindex="-1"><a class="header-anchor" href="#wsl-侧"><span>WSL 侧</span></a></h2><p>WSL 侧可以通过 <code>/etc/wsl.conf</code> 进行配置。</p><h3 id="启用-init-d-支持" tabindex="-1"><a class="header-anchor" href="#启用-init-d-支持"><span>启用 init.d 支持</span></a></h3><p>在 <code>/etc/wsl.conf</code> 中加入:</p><div class="language-conf" data-ext="conf" data-title="conf"><pre class="language-conf"><code>[boot]
systemd=true
</code></pre></div><h3 id="生成新的-rsa-密钥" tabindex="-1"><a class="header-anchor" href="#生成新的-rsa-密钥"><span>生成新的 RSA 密钥</span></a></h3><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;mister-hope@outlook.com&quot;</span>
</code></pre></div><h3 id="使用-windows-代理" tabindex="-1"><a class="header-anchor" href="#使用-windows-代理"><span>使用 Windows 代理</span></a></h3><p>可以在 <code>.bashrc</code> 中加入以下内容:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># add for proxy</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">hostIP</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ip</span> route <span class="token operator">|</span> <span class="token function">grep</span> default <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span><span class="token variable">)</span></span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">socks5Port</span><span class="token operator">=</span><span class="token number">10810</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">httpPort</span><span class="token operator">=</span><span class="token number">10811</span>

<span class="token builtin class-name">alias</span> <span class="token assign-left variable">proxy</span><span class="token operator">=</span><span class="token string">&#39;
  export HTTPS_PROXY=&quot;socks5://\${hostIP}:\${socks5Port}&quot;;
  export HTTP_PROXY=&quot;socks5://\${hostIP}:\${socks5Port}&quot;;
  export ALL_PROXY=&quot;socks5://\${hostIP}:\${socks5Port}&quot;;
  git config --global http.proxy &quot;socks5://\${hostIP}:\${socks5Port}&quot;;
  git config --global https.proxy &quot;socks5://\${hostIP}:\${socks5Port}&quot;;
  echo -e &quot;Acquire::http::Proxy \\&quot;socks5://\${hostIP}:\${socks5Port}\\&quot;; &quot; | sudo tee -a /etc/apt/apt.conf.d/proxy.conf;
  echo -e &quot;Acquire::https::Proxy \\&quot;socks5://\${hostIP}:\${socks5Port}\\&quot;; &quot; | sudo tee -a /etc/apt/apt.conf.d/proxy.conf;
  if [ -e &quot;~/.ssh/config&quot;]; then
    sed -i &quot;s/^ProxyCommand \\/usr\\/bin\\/corkscrew .* %h %p$/ProxyCommand \\/usr\\/bin\\/corkscrew \${hostIP} \${httpPort} %h %p/g&quot; ~/.ssh/config;
  else
    echo &quot;Host github.com
  User git
  Port 22
  Hostname github.com
  IdentityFile &quot;~/.ssh/id_rsa&quot;
  TCPKeepAlive yes
  ProxyCommand /usr/bin/corkscrew \${hostIP} \${httpPort} %h %p

Host ssh.github.com
  User git
  Port 443
  Hostname ssh.github.com
  IdentityFile &quot;~/.ssh/id_rsa&quot;
  TCPKeepAlive yes
  ProxyCommand /usr/bin/corkscrew \${hostIP} \${httpPort} %h %p
&quot;
&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">unproxy</span><span class="token operator">=</span><span class="token string">&#39;
  unset HTTPS_PROXY;
  unset HTTP_PROXY;
  unset ALL_PROXY;
  git config --global --unset http.proxy;
  git config --global --unset https.proxy;
  sudo sed -i -e &#39;</span>/Acquire::http::Proxy/d<span class="token string">&#39; /etc/apt/apt.conf.d/proxy.conf;
  sudo sed -i -e &#39;</span>/Acquire::https::Proxy/d<span class="token string">&#39; /etc/apt/apt.conf.d/proxy.conf;
&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以快速地使用 proxy 和 unproxy 命令。</p><h3 id="安装-nvm-和-node-js" tabindex="-1"><a class="header-anchor" href="#安装-nvm-和-node-js"><span>安装 nvm 和 Node.js</span></a></h3><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre></div><ol><li><p>由于 GitHub 已经遭到封锁，可以考虑安装 V2Ray 给 WSL2 以获得推送代码的能力。</p></li><li><p>更改 Node.js 可以使用的 Old Space 大小:</p><p>在用户目录的 <code>.bashrc</code> 中加入:</p><div class="language-conf" data-ext="conf" data-title="conf"><pre class="language-conf"><code>export NODE_OPTIONS=&quot;--max-old-space-size=8192&quot;
</code></pre></div></li></ol>`,19),i=[o];function l(c,r){return e(),n("div",null,i)}const u=s(t,[["render",l],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/note/wsl/","title":"WSL","lang":"zh-CN","frontmatter":{"date":"2022-11-06T00:00:00.000Z","title":"WSL","description":"目前使用的系统是 WSL2。 其中以下操作可能需要在新机器上进行相同操作: Windows 侧 Windows 侧可以在用户目录下创建 .wslconfig 文件，用于配置 WSL2。 WSL 侧 WSL 侧可以通过 /etc/wsl.conf 进行配置。 启用 init.d 支持 在 /etc/wsl.conf 中加入: 生成新的 RSA 密钥 使用...","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/note/wsl/"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"WSL"}],["meta",{"property":"og:description","content":"目前使用的系统是 WSL2。 其中以下操作可能需要在新机器上进行相同操作: Windows 侧 Windows 侧可以在用户目录下创建 .wslconfig 文件，用于配置 WSL2。 WSL 侧 WSL 侧可以通过 /etc/wsl.conf 进行配置。 启用 init.d 支持 在 /etc/wsl.conf 中加入: 生成新的 RSA 密钥 使用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T17:47:26.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:published_time","content":"2022-11-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T17:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WSL\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T17:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"Windows 侧","slug":"windows-侧","link":"#windows-侧","children":[]},{"level":2,"title":"WSL 侧","slug":"wsl-侧","link":"#wsl-侧","children":[{"level":3,"title":"启用 init.d 支持","slug":"启用-init-d-支持","link":"#启用-init-d-支持","children":[]},{"level":3,"title":"生成新的 RSA 密钥","slug":"生成新的-rsa-密钥","link":"#生成新的-rsa-密钥","children":[]},{"level":3,"title":"使用 Windows 代理","slug":"使用-windows-代理","link":"#使用-windows-代理","children":[]},{"level":3,"title":"安装 nvm 和 Node.js","slug":"安装-nvm-和-node-js","link":"#安装-nvm-和-node-js","children":[]}]}],"git":{"createdTime":1670336302000,"updatedTime":1706204846000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":1.31,"words":392},"filePathRelative":"note/wsl/README.md","localizedDate":"2022年11月6日","excerpt":"","autoDesc":true}');export{u as comp,m as data};
