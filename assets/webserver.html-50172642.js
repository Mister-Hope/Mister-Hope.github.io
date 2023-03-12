import{_ as a,X as n,Y as s,a3 as e}from"./framework-a91f7991.js";const p={},t=e(`<h1 id="网络服务器相关" tabindex="-1"><a class="header-anchor" href="#网络服务器相关" aria-hidden="true">#</a> 网络服务器相关</h1><h2 id="ftp" tabindex="-1"><a class="header-anchor" href="#ftp" aria-hidden="true">#</a> ftp</h2><h3 id="vsftpd" tabindex="-1"><a class="header-anchor" href="#vsftpd" aria-hidden="true">#</a> vsftpd</h3><ul><li><p>安装</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> <span class="token function">install</span> vsftpd <span class="token function">ftp</span>
</code></pre></div></li><li><p>配置</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/vsftpd.conf
</code></pre></div><p>至少要更改:</p><div class="language-ini" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">write_enable</span><span class="token punctuation">=</span><span class="token value attr-value">YES</span>
<span class="token key attr-name">utf8_filesystem</span><span class="token punctuation">=</span><span class="token value attr-value">YES</span>
</code></pre></div></li></ul><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h2><ul><li><p>安装</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> nginx
</code></pre></div><p>Nginx 默认安装在 <code>/etc/nginx</code> 目录下</p></li><li><p>配置</p><p>配置文件为 <code>nginx.conf</code>。</p><p>默认站点配置文件在 <code>/etc/nginx/sites-available/default</code></p><p>为了使得 Nginx 能使用 PHP，需要配置</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code>
<span class="token directive"><span class="token keyword">location</span> ~ \\.php$</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>           /var/www/html</span><span class="token punctuation">;</span>
    <span class="token comment"># 配置给 socks 应该可行，还在研究中</span>
    <span class="token directive"><span class="token keyword">fastcgi_pass</span>   127.0.0.1:9000</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">fastcgi_index</span>  index.php</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">fastcgi_param</span>  SCRIPT_FILENAME  <span class="token variable">$document_root</span><span class="token variable">$fastcgi_script_name</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">include</span>        fastcgi_params</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><h2 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Apache</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> php

<span class="token comment"># Ngnix</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> php-fpm

<span class="token comment"># MySQL</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> php-mysql
</code></pre></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://dev.mysql.com/get/mysql-apt-config_0.8.14-1_all.deb
<span class="token function">sudo</span> dpkg <span class="token parameter variable">-i</span> mysql-apt-config_0.8.14-1_all.deb
</code></pre></div><p>配置版本(一般是 5.7)后安装</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> mysql-server
</code></pre></div><p>之后重启，完成配置</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> mysql restart
mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
</code></pre></div><h2 id="nmp" tabindex="-1"><a class="header-anchor" href="#nmp" aria-hidden="true">#</a> NMP</h2><p>需要对 Nginx 的配置文件进行修改: 主要改动的目标是把 Nginx 代理端口转发给 php-fpm。</p><p>首先配置 index:</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">index</span> index.php index.html</span><span class="token punctuation">;</span>
</code></pre></div><p>需要注意的是，Nginx 将端口转发给 php 默认的 9000 端口。而通过 apt-get 安装的 php 默认使用本地 sock 文件通信，需要对 php 的配置进行修改。要修改的文件位于: <code>/etc/php/7.2/fpm/pool.d/www.conf</code>，将</p><div class="language-ini" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">listen</span> <span class="token punctuation">=</span> <span class="token value attr-value">/run/php/php7.0-fpm.sock</span>
</code></pre></div><p>改成:</p><div class="language-ini" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">listen</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1:9000</span>
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果报了 permission limitted 的错误，说明 php 没法访问 html 文件夹，修改配置的 html 文件夹权限即可。</p></div>`,24),c=[t];function i(l,o){return n(),s("div",null,c)}const r=a(p,[["render",i],["__file","webserver.html.vue"]]);export{r as default};
