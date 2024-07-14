---
title: Apache
icon: Apache
date: 2019-12-12
category: 服务器
---

Apache 是世界使用排名第一的 Web 服务器软件。它可以运行在几乎所有广泛使用的计算机平台上，由于其跨平台和安全性被广泛使用，是最流行的 Web 服务器端软件之一。它快速、可靠并且可通过简单的 API 扩充，将 Perl/Python 等解释器编译到服务器中。

<!-- more -->

## Apache 是什么

Apache HTTP Server (简称 Apache )是 Apache 软件基金会的一个开放源码的网页服务器，可以在大多数计算机操作系统中运行，由于其多平台和安全性被广泛使用，是最流行的 Web 服务器端软件之一。它快速、可靠并且可通过简单的 API 扩展，将 Perl/Python 等解释器编译到服务器中。

Apache HTTP 服务器是一个模块化的服务器，源于 NCSAhttpd 服务器，经过多次修改，成为世界使用排名第一的 Web 服务器软件。
它可以运行在几乎所有广泛使用的计算机平台上。

## Apache 模块

Apache 通过引入各种模块来完成不同的功能。

## Apache 官方文档

- [文档地址](https://httpd.apache.org/docs/2.4/zh-cn/)

## Apache 配置

Apache 通过 conf 文件夹下的 httpd.conf 来配置。

```apache
# 此处填入 Apache 的路径
Define SRVROOT "U:/Apache"
ServerRoot "${SRVROOT}"
Listen 127.0.0.1:80
Listen 127.0.0.1:443

LoadModule auth_basic_module modules/mod_auth_basic.so
LoadModule authz_core_module modules/mod_authz_core.so
LoadModule deflate_module modules/mod_deflate.so
LoadModule dir_module modules/mod_dir.so
LoadModule env_module modules/mod_env.so
LoadModule isapi_module modules/mod_isapi.so
LoadModule log_config_module modules/mod_log_config.so
LoadModule mime_module modules/mod_mime.so
LoadModule negotiation_module modules/mod_negotiation.so
LoadModule proxy_http2_module modules/mod_proxy_http2.so
LoadModule ratelimit_module modules/mod_ratelimit.so
LoadModule rewrite_module modules/mod_rewrite.so
LoadModule setenvif_module modules/mod_setenvif.so
LoadModule ssl_module modules/mod_ssl.so
# 此处填入 PHP 的 ssh 组件路径
LoadFile "u:/php/libssh2.dll"
# 此处填入 PHP 的 Apache 组件路径
LoadModule php7_module "u:/PHP/php7apache2_4.dll"
# 此处填入 PHP 的路径
PHPIniDir "u:/PHP"

<IfModule unixd_module>
User daemon
Group daemon
</IfModule>

ServerAdmin mister-hope@outlook.com
ServerName localhost

<Directory />
  AllowOverride none
  Require all denied
</Directory>

DocumentRoot "${SRVROOT}/htdocs"
<Directory "${SRVROOT}/htdocs">
  Options FollowSymLinks
  AllowOverride All
  Require all granted
</Directory>

<IfModule dir_module>
  DirectoryIndex index.html index.php
</IfModule>

<Files ".ht*">
  Require all denied
</Files>

ErrorLog "logs/error.log"
LogLevel info

<IfModule log_config_module>
  LogFormat "%h %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-Agent}i\"" combined
  LogFormat "%h %l %u %t \"%r\" %>s %b" common
  <IfModule logio_module>
    LogFormat "%h %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-Agent}i\" %I %O" combinedio
  </IfModule>
  CustomLog "logs/access.log" common
</IfModule>

<IfModule alias_module>
  ScriptAlias /cgi-bin/ "${SRVROOT}/cgi-bin/"
</IfModule>

<Directory "${SRVROOT}/cgi-bin">
  AllowOverride None
  Options None
  Require all granted
</Directory>

<IfModule headers_module>
  RequestHeader unset Proxy early
</IfModule>

<IfModule mime_module>
  TypesConfig conf/mime.types
  AddHandler application/x-httpd-php .php
  AddType application/x-compress .Z
  AddType application/x-gzip .gz .tgz
  AddType application/x-httpd-php .php .html
</IfModule>

<IfModule proxy_html_module>
  Include conf/extra/proxy-html.conf
</IfModule>
<IfModule ssl_module>
  SSLRandomSeed startup builtin
  SSLRandomSeed connect builtin
</IfModule>

<VirtualHost *:80>
  ServerAdmin mister-hope@outlook.com
  ServerName nenu.com
  ServerAlias innenu
  DocumentRoot "${SRVROOT}/htdocs"
</VirtualHost>

<VirtualHost *:443>
  ServerAdmin mister-hope@outlook.com
  ServerName mrhope.com
  ServerAlias mrhope
  DocumentRoot "${SRVROOT}/htdocs"
</VirtualHost>
```

- ### ServerRoot

  指定服务器的根目录

- ### Listen

  指定服务器监听的 IP 与 port

- ### LoadModule

  加载指定的模块来使服务器调用

- ### PHPIniDir

  指定 PHP 目录

- ### unixd_module

  分配用户权限

- ### ServerAdmin

  服务器管理员

- ### ServerName

  服务器名称
