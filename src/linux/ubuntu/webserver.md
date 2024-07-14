---
icon: network
date: 2019-11-22
---

# 网络服务器相关

## ftp

### vsftpd

- 安装

  ```bash
  apt-get install vsftpd ftp
  ```

- 配置

  ```bash
  vim /etc/vsftpd.conf
  ```

  至少要更改:

  ```conf
  write_enable=YES
  utf8_filesystem=YES
  ```

## Nginx

- 安装

  ```bash
  sudo apt-get install nginx
  ```

  Nginx 默认安装在 `/etc/nginx` 目录下

- 配置

  配置文件为 `nginx.conf`。

  默认站点配置文件在 `/etc/nginx/sites-available/default`

  为了使得 Nginx 能使用 PHP，需要配置

  ```nginx

  location ~ \.php$ {
      root           /var/www/html;
      # 配置给 socks 应该可行，还在研究中
      fastcgi_pass   127.0.0.1:9000;
      fastcgi_index  index.php;
      fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
      include        fastcgi_params;
  }
  ```

## PHP

```bash
# Apache
sudo apt-get install php

# Ngnix
sudo apt-get install php-fpm

# MySQL
sudo apt-get install php-mysql
```

## MySQL

### 安装

```bash
wget https://dev.mysql.com/get/mysql-apt-config_0.8.14-1_all.deb
sudo dpkg -i mysql-apt-config_0.8.14-1_all.deb
```

配置版本(一般是 5.7)后安装

```bash
sudo apt-get install mysql-server
```

之后重启，完成配置

```bash
sudo service mysql restart
mysql -u root -p
```

## NMP

需要对 Nginx 的配置文件进行修改: 主要改动的目标是把 Nginx 代理端口转发给 php-fpm。

首先配置 index:

```nginx
index index.php index.html;
```

需要注意的是，Nginx 将端口转发给 php 默认的 9000 端口。而通过 apt-get 安装的 php 默认使用本地 sock 文件通信，需要对 php 的配置进行修改。要修改的文件位于: `/etc/php/7.2/fpm/pool.d/www.conf`，将

```conf
listen = /run/php/php7.0-fpm.sock
```

改成:

```conf
listen = 127.0.0.1:9000
```

::: tip

如果报了 permission limitted 的错误，说明 php 没法访问 html 文件夹，修改配置的 html 文件夹权限即可。

:::
