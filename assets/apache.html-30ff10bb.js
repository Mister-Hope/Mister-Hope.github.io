import{_ as e,X as i,Y as t,a1 as l,$ as n,a0 as p,Z as o,a3 as s,C as c}from"./framework-a91f7991.js";const r={},d=n("p",null,"Apache 是世界使用排名第一的 Web 服务器软件。它可以运行在几乎所有广泛使用的计算机平台上，由于其跨平台和安全性被广泛使用，是最流行的 Web 服务器端软件之一。它快速、可靠并且可通过简单的 API 扩充，将 Perl/Python 等解释器编译到服务器中。",-1),u=s('<h2 id="apache-是什么" tabindex="-1"><a class="header-anchor" href="#apache-是什么" aria-hidden="true">#</a> Apache 是什么</h2><p>Apache HTTP Server (简称 Apache )是 Apache 软件基金会的一个开放源码的网页服务器，可以在大多数计算机操作系统中运行，由于其多平台和安全性被广泛使用，是最流行的 Web 服务器端软件之一。它快速、可靠并且可通过简单的 API 扩展，将 Perl/Python 等解释器编译到服务器中。</p><p>Apache HTTP 服务器是一个模块化的服务器，源于 NCSAhttpd 服务器，经过多次修改，成为世界使用排名第一的 Web 服务器软件。 它可以运行在几乎所有广泛使用的计算机平台上。</p><h2 id="apache-模块" tabindex="-1"><a class="header-anchor" href="#apache-模块" aria-hidden="true">#</a> Apache 模块</h2><p>Apache 通过引入各种模块来完成不同的功能。</p><h2 id="apache-官方文档" tabindex="-1"><a class="header-anchor" href="#apache-官方文档" aria-hidden="true">#</a> Apache 官方文档</h2>',6),v={href:"https://httpd.apache.org/docs/2.4/zh-cn/",target:"_blank",rel:"noopener noreferrer"},k=s(`<h2 id="apache-配置" tabindex="-1"><a class="header-anchor" href="#apache-配置" aria-hidden="true">#</a> Apache 配置</h2><p>Apache 通过 conf 文件夹下的 httpd.conf 来配置。</p><div class="language-apacheconf line-numbers-mode" data-ext="apacheconf"><pre class="language-apacheconf"><code><span class="token comment"># 此处填入 Apache 的路径</span>
<span class="token directive-inline property">Define</span> SRVROOT <span class="token string">&quot;U:/Apache&quot;</span>
<span class="token directive-inline property">ServerRoot</span> <span class="token string">&quot;<span class="token variable">\${SRVROOT}</span>&quot;</span>
<span class="token directive-inline property">Listen</span> 127.0.0.1:80
<span class="token directive-inline property">Listen</span> 127.0.0.1:443

<span class="token directive-inline property">LoadModule</span> auth_basic_module modules/mod_auth_basic.so
<span class="token directive-inline property">LoadModule</span> authz_core_module modules/mod_authz_core.so
<span class="token directive-inline property">LoadModule</span> deflate_module modules/mod_deflate.so
<span class="token directive-inline property">LoadModule</span> dir_module modules/mod_dir.so
<span class="token directive-inline property">LoadModule</span> env_module modules/mod_env.so
<span class="token directive-inline property">LoadModule</span> isapi_module modules/mod_isapi.so
<span class="token directive-inline property">LoadModule</span> log_config_module modules/mod_log_config.so
<span class="token directive-inline property">LoadModule</span> mime_module modules/mod_mime.so
<span class="token directive-inline property">LoadModule</span> negotiation_module modules/mod_negotiation.so
<span class="token directive-inline property">LoadModule</span> proxy_http2_module modules/mod_proxy_http2.so
<span class="token directive-inline property">LoadModule</span> ratelimit_module modules/mod_ratelimit.so
<span class="token directive-inline property">LoadModule</span> rewrite_module modules/mod_rewrite.so
<span class="token directive-inline property">LoadModule</span> setenvif_module modules/mod_setenvif.so
<span class="token directive-inline property">LoadModule</span> ssl_module modules/mod_ssl.so
<span class="token comment"># 此处填入 PHP 的 ssh 组件路径</span>
<span class="token directive-inline property">LoadFile</span> <span class="token string">&quot;u:/php/libssh2.dll&quot;</span>
<span class="token comment"># 此处填入 PHP 的 Apache 组件路径</span>
<span class="token directive-inline property">LoadModule</span> php7_module <span class="token string">&quot;u:/PHP/php7apache2_4.dll&quot;</span>
<span class="token comment"># 此处填入 PHP 的路径</span>
PHPIniDir <span class="token string">&quot;u:/PHP&quot;</span>

<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;</span>IfModule</span><span class="token directive-block-parameter attr-value"> unixd_module</span><span class="token punctuation">&gt;</span></span>
<span class="token directive-inline property">User</span> daemon
<span class="token directive-inline property">Group</span> daemon
<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;/</span>IfModule</span><span class="token punctuation">&gt;</span></span>

<span class="token directive-inline property">ServerAdmin</span> mister-hope@outlook.com
<span class="token directive-inline property">ServerName</span> localhost

<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;</span>Directory</span><span class="token directive-block-parameter attr-value"> /</span><span class="token punctuation">&gt;</span></span>
  <span class="token directive-inline property">AllowOverride</span> none
  <span class="token directive-inline property">Require</span> all denied
<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;/</span>Directory</span><span class="token punctuation">&gt;</span></span>

<span class="token directive-inline property">DocumentRoot</span> <span class="token string">&quot;<span class="token variable">\${SRVROOT}</span>/htdocs&quot;</span>
<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;</span>Directory</span><span class="token directive-block-parameter attr-value"> <span class="token string">&quot;<span class="token variable">\${SRVROOT}</span>/htdocs&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token directive-inline property">Options</span> FollowSymLinks
  <span class="token directive-inline property">AllowOverride</span> All
  <span class="token directive-inline property">Require</span> all granted
<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;/</span>Directory</span><span class="token punctuation">&gt;</span></span>

<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;</span>IfModule</span><span class="token directive-block-parameter attr-value"> dir_module</span><span class="token punctuation">&gt;</span></span>
  <span class="token directive-inline property">DirectoryIndex</span> index.html index.php
<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;/</span>IfModule</span><span class="token punctuation">&gt;</span></span>

<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;</span>Files</span><span class="token directive-block-parameter attr-value"> <span class="token string">&quot;.ht*&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token directive-inline property">Require</span> all denied
<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;/</span>Files</span><span class="token punctuation">&gt;</span></span>

<span class="token directive-inline property">ErrorLog</span> <span class="token string">&quot;logs/error.log&quot;</span>
<span class="token directive-inline property">LogLevel</span> info

<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;</span>IfModule</span><span class="token directive-block-parameter attr-value"> log_config_module</span><span class="token punctuation">&gt;</span></span>
  <span class="token directive-inline property">LogFormat</span> <span class="token string">&quot;<span class="token variable">%h</span> <span class="token variable">%l</span> <span class="token variable">%u</span> <span class="token variable">%t</span> \\&quot;<span class="token variable">%r</span>\\&quot; %&gt;s <span class="token variable">%b</span> \\&quot;<span class="token variable">%{Referer}</span>i\\&quot; \\&quot;<span class="token variable">%{User-Agent}</span>i\\&quot;&quot;</span> combined
  <span class="token directive-inline property">LogFormat</span> <span class="token string">&quot;<span class="token variable">%h</span> <span class="token variable">%l</span> <span class="token variable">%u</span> <span class="token variable">%t</span> \\&quot;<span class="token variable">%r</span>\\&quot; %&gt;s <span class="token variable">%b</span>&quot;</span> common
  <span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;</span>IfModule</span><span class="token directive-block-parameter attr-value"> logio_module</span><span class="token punctuation">&gt;</span></span>
    <span class="token directive-inline property">LogFormat</span> <span class="token string">&quot;<span class="token variable">%h</span> <span class="token variable">%l</span> <span class="token variable">%u</span> <span class="token variable">%t</span> \\&quot;<span class="token variable">%r</span>\\&quot; %&gt;s <span class="token variable">%b</span> \\&quot;<span class="token variable">%{Referer}</span>i\\&quot; \\&quot;<span class="token variable">%{User-Agent}</span>i\\&quot; <span class="token variable">%I</span> <span class="token variable">%O</span>&quot;</span> combinedio
  <span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;/</span>IfModule</span><span class="token punctuation">&gt;</span></span>
  <span class="token directive-inline property">CustomLog</span> <span class="token string">&quot;logs/access.log&quot;</span> common
<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;/</span>IfModule</span><span class="token punctuation">&gt;</span></span>

<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;</span>IfModule</span><span class="token directive-block-parameter attr-value"> alias_module</span><span class="token punctuation">&gt;</span></span>
  <span class="token directive-inline property">ScriptAlias</span> /cgi-bin/ <span class="token string">&quot;<span class="token variable">\${SRVROOT}</span>/cgi-bin/&quot;</span>
<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;/</span>IfModule</span><span class="token punctuation">&gt;</span></span>

<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;</span>Directory</span><span class="token directive-block-parameter attr-value"> <span class="token string">&quot;<span class="token variable">\${SRVROOT}</span>/cgi-bin&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token directive-inline property">AllowOverride</span> None
  <span class="token directive-inline property">Options</span> None
  <span class="token directive-inline property">Require</span> all granted
<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;/</span>Directory</span><span class="token punctuation">&gt;</span></span>

<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;</span>IfModule</span><span class="token directive-block-parameter attr-value"> headers_module</span><span class="token punctuation">&gt;</span></span>
  <span class="token directive-inline property">RequestHeader</span> unset Proxy early
<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;/</span>IfModule</span><span class="token punctuation">&gt;</span></span>

<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;</span>IfModule</span><span class="token directive-block-parameter attr-value"> mime_module</span><span class="token punctuation">&gt;</span></span>
  <span class="token directive-inline property">TypesConfig</span> conf/mime.types
  <span class="token directive-inline property">AddHandler</span> application/x-httpd-php .php
  <span class="token directive-inline property">AddType</span> application/x-compress .Z
  <span class="token directive-inline property">AddType</span> application/x-gzip .gz .tgz
  <span class="token directive-inline property">AddType</span> application/x-httpd-php .php .html
<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;/</span>IfModule</span><span class="token punctuation">&gt;</span></span>

<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;</span>IfModule</span><span class="token directive-block-parameter attr-value"> proxy_html_module</span><span class="token punctuation">&gt;</span></span>
  <span class="token directive-inline property">Include</span> conf/extra/proxy-html.conf
<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;/</span>IfModule</span><span class="token punctuation">&gt;</span></span>
<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;</span>IfModule</span><span class="token directive-block-parameter attr-value"> ssl_module</span><span class="token punctuation">&gt;</span></span>
  <span class="token directive-inline property">SSLRandomSeed</span> startup builtin
  <span class="token directive-inline property">SSLRandomSeed</span> connect builtin
<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;/</span>IfModule</span><span class="token punctuation">&gt;</span></span>

<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;</span>VirtualHost</span><span class="token directive-block-parameter attr-value"> *<span class="token punctuation">:</span>80</span><span class="token punctuation">&gt;</span></span>
  <span class="token directive-inline property">ServerAdmin</span> mister-hope@outlook.com
  <span class="token directive-inline property">ServerName</span> nenu.com
  <span class="token directive-inline property">ServerAlias</span> innenu
  <span class="token directive-inline property">DocumentRoot</span> <span class="token string">&quot;<span class="token variable">\${SRVROOT}</span>/htdocs&quot;</span>
<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;/</span>VirtualHost</span><span class="token punctuation">&gt;</span></span>

<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;</span>VirtualHost</span><span class="token directive-block-parameter attr-value"> *<span class="token punctuation">:</span>443</span><span class="token punctuation">&gt;</span></span>
  <span class="token directive-inline property">ServerAdmin</span> mister-hope@outlook.com
  <span class="token directive-inline property">ServerName</span> mrhope.com
  <span class="token directive-inline property">ServerAlias</span> mrhope
  <span class="token directive-inline property">DocumentRoot</span> <span class="token string">&quot;<span class="token variable">\${SRVROOT}</span>/htdocs&quot;</span>
<span class="token directive-block tag"><span class="token directive-block tag"><span class="token punctuation">&lt;/</span>VirtualHost</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h3 id="serverroot" tabindex="-1"><a class="header-anchor" href="#serverroot" aria-hidden="true">#</a> ServerRoot</h3><p>指定服务器的根目录</p></li><li><h3 id="listen" tabindex="-1"><a class="header-anchor" href="#listen" aria-hidden="true">#</a> Listen</h3><p>指定服务器监听的 IP 与 port</p></li><li><h3 id="loadmodule" tabindex="-1"><a class="header-anchor" href="#loadmodule" aria-hidden="true">#</a> LoadModule</h3><p>加载指定的模块来使服务器调用</p></li><li><h3 id="phpinidir" tabindex="-1"><a class="header-anchor" href="#phpinidir" aria-hidden="true">#</a> PHPIniDir</h3><p>指定 PHP 目录</p></li><li><h3 id="unixd-module" tabindex="-1"><a class="header-anchor" href="#unixd-module" aria-hidden="true">#</a> unixd_module</h3><p>分配用户权限</p></li><li><h3 id="serveradmin" tabindex="-1"><a class="header-anchor" href="#serveradmin" aria-hidden="true">#</a> ServerAdmin</h3><p>服务器管理员</p></li><li><h3 id="servername" tabindex="-1"><a class="header-anchor" href="#servername" aria-hidden="true">#</a> ServerName</h3><p>服务器名称</p></li></ul>`,4);function m(b,h){const a=c("ExternalLinkIcon");return i(),t("div",null,[d,l(" more "),u,n("ul",null,[n("li",null,[n("a",v,[p("文档地址"),o(a)])])]),k])}const y=e(r,[["render",m],["__file","apache.html.vue"]]);export{y as default};
