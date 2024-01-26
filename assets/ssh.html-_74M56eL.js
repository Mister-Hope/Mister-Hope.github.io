import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,b as n}from"./app-W9Dk-dRG.js";const o={},t=n(`<h2 id="使用密码登录" tabindex="-1"><a class="header-anchor" href="#使用密码登录"><span>使用密码登录</span></a></h2><ol><li><p>执行以下命令，连接 Linux 云服务器。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>@<span class="token operator">&lt;</span>hostname or IP address<span class="token operator">&gt;</span>
</code></pre></div><ul><li>username 即为前提条件中获得的默认帐号。</li><li>hostname or IP address 为您的 Linux 实例公网 IP 或自定义域名。</li></ul></li><li><p>输入已获取的密码，按 Enter，即可完成登录。</p></li></ol><h2 id="使用密钥登录" tabindex="-1"><a class="header-anchor" href="#使用密钥登录"><span>使用密钥登录</span></a></h2><ol><li><p>执行以下命令，赋予私钥文件仅本人可读权限。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">400</span> <span class="token operator">&lt;</span>下载的与云服务器关联的私钥的绝对路径<span class="token operator">&gt;</span>
</code></pre></div></li><li><p>执行以下命令，进行远程登录。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-i</span> <span class="token operator">&lt;</span>下载的与云服务器关联的私钥的绝对路径<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>@<span class="token operator">&lt;</span>hostname or IP address<span class="token operator">&gt;</span>
</code></pre></div><ul><li>username 即为前提条件中获得的默认帐号。</li><li>hostname or IP address 为您的 Linux 实例公网 IP 或自定义域名。</li></ul><p>例如，执行 <code>ssh -i &quot;id_rsa&quot; ubuntu@123.206.113.227</code> 命令，远程登录 Linux 云服务器。</p></li></ol><h2 id="断开链接" tabindex="-1"><a class="header-anchor" href="#断开链接"><span>断开链接</span></a></h2><p><code>Ctrl + D</code> 或 输入 <code>logout</code>.</p>`,6),l=[t];function p(r,c){return s(),e("div",null,l)}const h=a(o,[["render",p],["__file","ssh.html.vue"]]);export{h as default};
