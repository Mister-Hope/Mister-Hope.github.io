---
date: 2022-11-06
title: Git 代理
icon: git
category: Git
tag:
  - Git
  - 软件
---

由于目前 GitHub 已经在全国大部分范围内被主要运营商进行 DNS 封锁，所以如果需要配合 GitHub 使用 Git，需要进行代理设置。

## 代理设置

通常情况下，我们可以通过设置环境变量 `HTTP_PROXY` 和 `HTTPS_PROXY` 来进行代理设置。

在 Windows 下，我们可以通过设置环境变量 `HTTP_PROXY` 和 `HTTPS_PROXY` 来进行代理设置。

::: details Windows 例子

```bash
set HTTP_PROXY=http://127.0.0.1:1080
set HTTPS_PROXY=http://127.0.0.1:1080
```

:::

::: details Linux 例子

```bash
export HTTP_PROXY=http://127.0.0.1:1080
export HTTPS_PROXY=http://127.0.0.1:1080
```

:::

上述做法仅对当前终端有效，如果需要永久生效，可以将上述命令添加到系统环境变量 (Windows) 或 `~/.bashrc` (Linux) 中。

::: tip

[Windows 添加环境变量](../../code/windows/env-variable.md)

:::

## SSH 配置

如果你在使用 22 端口通过 SSH 使用 Git，那么你需要在用户目录下的 `.ssh` 目录新建 `config` 文件，并输入以下内容:

```conf
Host github.com
  User git
  Port 22
  Hostname github.com
  # 这里在 Windows 下需要替换成实际目录，如 "C:\Users\mister-hope\.ssh\id_rsa"
  IdentityFile "~/.ssh/id_rsa"
  TCPKeepAlive yes
  # Ubuntu 需要安装 corkscrew
  ProxyCommand /usr/bin/corkscrew 172.31.16.1 10808 %h %p
  # Windows 可以改为 Git 安装目录下的 connect，如
  # ProxyCommand "C:\Program Files\Git\mingw64\bin\connect" -S 127.0.0.1:10808 -a none %h %p

Host ssh.github.com
  User git
  Port 443
  Hostname ssh.github.com
  # 这里在 Windows 下需要替换成实际目录，如 "C:\Users\mister-hope\.ssh\id_rsa"
  IdentityFile "~/.ssh/id_rsa"
  TCPKeepAlive yes
  # Ubuntu 需要安装 corkscrew
  ProxyCommand /usr/bin/corkscrew 172.31.16.1 10808 %h %p
  # Windows 可以改为 Git 安装目录下的 connect，如
  # ProxyCommand "C:\Program Files\Git\mingw64\bin\connect" -S 127.0.0.1:10808 -a none %h %p

```

::: tip

如果在 WSL 使用，获取 Windows 的 IP 地址命令为 `ip route | grep default | awk '{print $3}'`。

特别注意，如不进行额外配置，每次重启后主机地址都会发生变化。

:::

你可以使用 `ssh -T git@github.com` 来测试你的代理配置是否有效。
