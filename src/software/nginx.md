---
title: Nginx
icon: nginx
date: 2019-12-13
category: 服务器
---

Nginx 是一个高性能的 HTTP 和反向代理服务器，也是一个 IMAP / POP3 / SMTP 代理服务器。其特点是占有内存少，并发能力强，稳定性高，并且 Nginx 也拥有友好灵活的配置。

<!-- more -->

## 启动，停止和重新加载配置

要启动 nginx，请运行可执行文件。一旦启动 nginx，就可以通过使用 `-s` 参数调用可执行文件来对其进行控制。使用以下语法:

```bash
nginx -s signal
```

其中 `signal` 可能是以下之一:

- stop - 快速关机
- quit — 正常关机
- reload — 重新加载配置文件
- reopen — 重新打开日志文件

## 配置文件的结构

Nginx 由受配置文件中指定的指令控制的模块组成。指令分为简单指令和块指令。一个简单的指令由名称和参数组成，这些名称和参数之间用空格分隔，并以分号(`;`)结尾。块指令的结构与简单指令的结构相同，但是它不以分号结尾，而是带有一组用括号 (`{` 和 `}`) 括起来的附加指令。如果一个块指令在括号内可以有其他指令，则称为 context (例如: `events`, `http`, `server` 和 `location`)。

放置在任何 context 外部的配置文件中的指令都被视为在 main context 中。`events` 和 `http` 指令位于 `main` context 中，`server` 位于 `http` 中, 并且 `location` 在 `server` 中

`#` 号后的其余行被视为注释。

## 提供静态内容

Web 服务器的一项重要任务是分发文件(例如图像或静态 HTML 页面)。您将实现一个示例，其中将根据请求从不同的本地目录提供文件: `/data/www` (可能包含 HTML 文件)和 `/data/images`(包含图像)。这将需要编辑配置文件，并在带有两个位置块的 http 块内设置服务器块。

首先，创建 `/data/www` 目录，并将包含任何文本内容的 `index.html` 文件放入其中，并创建 `/data/images` 目录并将一些图像放入其中。

接下来，打开配置文件。默认配置文件已经包含了服务器块的几个示例，大部分已被注释掉。现在，注释掉所有这些块并启动一个新的服务器块:

```nginx
http {
  server {
  }
}
```

通常，配置文件可以包括几个服务器块，这些服务器块通过它们侦听的端口和服务器名称来区分。一旦 nginx 决定了哪个服务器处理请求，它就会根据服务器块内定义的 location 指令的参数测试请求标头中指定的 URI。

将以下位置块添加到服务器块:

```nginx
location / {
  root /data/www;
}
```

与请求中的 URI 相比，此位置块指定 “`/`” 前缀。对于匹配的请求，URI 将被添加到 root 指令中指定的路径，即 `/data/www`，以形成本地文件系统上所请求文件的路径。如果有多个匹配的位置块，nginx 将选择前缀最长的位置块。上面的位置块提供了最短的前缀，长度为 1，因此，只有在所有其他位置块均未提供匹配项时，才会使用该块。

接下来，添加第二个位置块:

```nginx
location /images/ {
  root /data;
}
```

这将匹配以 `/images/` 开头的请求(位置 `/` 也匹配此类请求，但前缀较短)。

服务器块的最终配置应如下所示:

```nginx
server {
  location / {
    root /data/www;
  }

  location /images/ {
    root /data;
  }
}
```

这已经是服务器的工作配置，可以在标准端口 `80` 上侦听，并且可以在本地计算机上的 `http://localhost/` 上访问。响应以 `/images/` 开头的 URI 请求，服务器将从 `/data/images` 目录中发送文件。例如，为响应 `http://localhost/images/example.png` 请求，nginx 将发送文件 `/data/images/example.png`。如果该文件不存在，nginx 将发送一个注明 404 错误的响应。URI 不以 `/images/` 开头的请求将被映射到 `/data/www` 目录。例如，nginx 会响应 `http://localhost/some/example.html` 请求发送 `/data/www/some/example.html` 文件。

要应用新配置，请启动 nginx (如果尚未启动)，或通过执行以下命令向 nginx 的主进程发送 `reload` 信号:

```bash
nginx -s reload
```

如果某些东西无法按预期工作，则可以尝试在目录 `/usr/local/nginx/logs` 或目录 `/var/log/nginx` 中的 access.log 和 error.log 文件中找出原因。。

## 设置简单的代理服务器

Nginx 的一种常用用法是将其设置为代理服务器，这意味着服务器可以接收请求，将请求传递给代理服务器，从请求中检索响应并将它们发送给客户端。

我们将配置一个基本的代理服务器，该服务器为图像请求和本地目录中的文件提供服务，并将所有其他请求发送到代理服务器。在此示例中，两个服务器都将在单个 nginx 实例上定义。

首先，通过向 nginx 的配置文件中添加另一个 `server` 块来定义代理服务器，其内容如下:

```nginx
server {
  listen 8080;
  root /data/up1;

  location / {
  }
}
```

这将是一个简单的服务器，它在端口 8080 上侦听 (以前，自从使用标准端口 80 以来，未指定 listen 指令) 并将所有请求映射到本地文件系统的 `/data/up1` 目录中。创建此目录，并将 `index.html` 文件放入其中。请注意，根指令位于服务器上下文中。当选择用于服务请求的位置块不包括自己的根指令时，将使用这种根指令。

接下来，使用上一部分中的服务器配置并对其进行修改以使其成为代理服务器配置。在第一个位置块中，将 `proxy_pass` 指令与参数中指定的代理服务器的协议，名称和端口放在一起 (在本例中为 `http://localhost:8080` ):

```nginx
server {
  location / {
    proxy_pass http://localhost:8080;
  }

  location /images/ {
    root /data;
  }
}
```

我们将修改第二个 location 块，该位置块当前将带有 `/images/` 前缀的请求映射到 `/data/images` 目录下的文件，以使其与具有典型文件扩展名的图像的请求相匹配。修改后的位置块如下所示:

```nginx
location ~ \.(gif|jpg|png)$ {
  root /data/images;
}
```

该参数是一个正则表达式，它匹配以 `.gif`，`.jpg` 或 `.png` 结尾的所有 URI。正则表达式应以 `~` 开头。相应的请求将被映射到 `/ data/images` 目录。

当 nginx 选择一个 `location` 块来服务请求时，它首先检查指定前缀的 `location` 指令，记住带有最长前缀的 `location`，然后检查正则表达式。如果存在与正则表达式匹配的内容，nginx 会选择该 “`location`”，否则，它将选择之前记住的位置。

代理服务器的最终配置如下所示:

```nginx
server {
  location / {
    proxy_pass http://localhost:8080/;
  }

  location ~ \.(gif|jpg|png)$ {
    root /data/images;
  }
}
```

该服务器将过滤以 `.gif`，`.jpg` 或 `.png` 结尾的请求，并将它们映射到目录 `/data/images`(通过将 URI 添加到根指令的参数)，并将所有其他请求传递给上面配置的代理服务器。

要应用新配置，请按照前面几节的说明将重载信号发送到 nginx。

还有许多其他指令可用于进一步配置代理连接。

## 设置 FastCGI 代理

Nginx 可用于将请求路由到 FastCGI 服务器，该服务器运行使用各种框架和编程语言 (例如 PHP) 构建的应用程序。

与 FastCGI 服务器一起使用的最基本的 Nginx 配置包括使用 `fastcgi_pass` 指令而不是 `proxy_pass` 指令和 `fastcgi_param` 指令来设置传递给 FastCGI 服务器的参数。假设 FastCGI 服务器可以在 `localhost:9000` 上访问。以上一节中的代理配置为基础，用 `fastcgi_pass` 指令替换 `proxy_pass` 指令，并将参数更改为 `localhost:9000`。在 PHP 中， `SCRIPT_FILENAME` 参数用于确定脚本名称，而 `QUERY_STRING` 参数用于传递请求参数。配置的结果为:

```nginx
server {
  location / {
    fastcgi_pass  localhost:9000;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    fastcgi_param QUERY_STRING    $query_string;
  }

  location ~ \.(gif|jpg|png)$ {
    root /data/images;
  }
}
```

这将设置一个服务器，该服务器将通过 FastCGI 协议将除静态图像请求以外的所有请求路由到运行在 `localhost:9000` 上的代理服务器。

## 官方文档

- [点击此处](https://docs.nginx.com/nginx/admin-guide/)
