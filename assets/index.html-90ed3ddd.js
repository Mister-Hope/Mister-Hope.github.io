import{_ as s,X as n,Y as a,a3 as e}from"./framework-e3372978.js";const o={},i=e(`<p>目前使用的系统是 WSL2。</p><p>其中以下操作可能需要在新机器上进行相同操作:</p><h2 id="windows-侧" tabindex="-1"><a class="header-anchor" href="#windows-侧" aria-hidden="true">#</a> Windows 侧</h2><p>Windows 侧可以在用户目录下创建 <code>.wslconfig</code> 文件，用于配置 WSL2。</p><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>[wsl2]
# Limits VM memory in WSL 2 to 8 GB
memory=8GB
</code></pre></div><h2 id="wsl-侧" tabindex="-1"><a class="header-anchor" href="#wsl-侧" aria-hidden="true">#</a> WSL 侧</h2><p>WSL 侧可以通过 <code>/etc/wsl.conf</code> 进行配置。</p><h3 id="启用-init-d-支持" tabindex="-1"><a class="header-anchor" href="#启用-init-d-支持" aria-hidden="true">#</a> 启用 init.d 支持</h3><p>在 <code>/etc/wsl.conf</code> 中加入:</p><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>[boot]
systemd=true
</code></pre></div><h3 id="生成新的-rsa-密钥" tabindex="-1"><a class="header-anchor" href="#生成新的-rsa-密钥" aria-hidden="true">#</a> 生成新的 RSA 密钥</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;mister-hope@outlook.com&quot;</span>
</code></pre></div><h3 id="使用-windows-代理" tabindex="-1"><a class="header-anchor" href="#使用-windows-代理" aria-hidden="true">#</a> 使用 Windows 代理</h3><p>可以在 <code>.bashrc</code> 中加入以下内容:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># add for proxy</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以快速地使用 proxy 和 unproxy 命令。</p><h3 id="安装-nvm-和-node-js" tabindex="-1"><a class="header-anchor" href="#安装-nvm-和-node-js" aria-hidden="true">#</a> 安装 nvm 和 Node.js</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre></div><ol><li><p>由于 GitHub 已经遭到封锁，可以考虑安装 V2Ray 给 WSL2 以获得推送代码的能力。</p></li><li><p>更改 Node.js 可以使用的 Old Space 大小:</p><p>在用户目录的 <code>.bashrc</code> 中加入:</p><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>export NODE_OPTIONS=&quot;--max-old-space-size=8192&quot;
</code></pre></div></li></ol>`,19),t=[i];function c(l,r){return n(),a("div",null,t)}const p=s(o,[["render",c],["__file","index.html.vue"]]);export{p as default};
