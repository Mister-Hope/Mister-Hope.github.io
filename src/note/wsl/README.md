---
date: 2022-11-06
title: WSL
---

目前使用的系统是 WSL2。

其中以下操作可能需要在新机器上进行相同操作:

## Windows 侧

Windows 侧可以在用户目录下创建 `.wslconfig` 文件，用于配置 WSL2。

```conf
[wsl2]
# Limits VM memory in WSL 2 to 8 GB
memory=8GB
```

## WSL 侧

WSL 侧可以通过 `/etc/wsl.conf` 进行配置。

### 启用 init.d 支持

在 `/etc/wsl.conf` 中加入:

```conf
[boot]
systemd=true
```

### 生成新的 RSA 密钥

```bash
ssh-keygen -t rsa -C "mister-hope@outlook.com"
```

### 使用 Windows 代理

可以在 `.bashrc` 中加入以下内容:

```bash
# add for proxy
export hostIP=$(ip route | grep default | awk '{print $3}')
export socks5Port=10810
export httpPort=10811

alias proxy='
  export HTTPS_PROXY="socks5://${hostIP}:${socks5Port}";
  export HTTP_PROXY="socks5://${hostIP}:${socks5Port}";
  export ALL_PROXY="socks5://${hostIP}:${socks5Port}";
  git config --global http.proxy "socks5://${hostIP}:${socks5Port}";
  git config --global https.proxy "socks5://${hostIP}:${socks5Port}";
  echo -e "Acquire::http::Proxy \"socks5://${hostIP}:${socks5Port}\"; " | sudo tee -a /etc/apt/apt.conf.d/proxy.conf;
  echo -e "Acquire::https::Proxy \"socks5://${hostIP}:${socks5Port}\"; " | sudo tee -a /etc/apt/apt.conf.d/proxy.conf;
  if [ -e "~/.ssh/config"]; then
    sed -i "s/^ProxyCommand \/usr\/bin\/corkscrew .* %h %p$/ProxyCommand \/usr\/bin\/corkscrew ${hostIP} ${httpPort} %h %p/g" ~/.ssh/config;
  else
    echo "Host github.com
  User git
  Port 22
  Hostname github.com
  IdentityFile "~/.ssh/id_rsa"
  TCPKeepAlive yes
  ProxyCommand /usr/bin/corkscrew ${hostIP} ${httpPort} %h %p

Host ssh.github.com
  User git
  Port 443
  Hostname ssh.github.com
  IdentityFile "~/.ssh/id_rsa"
  TCPKeepAlive yes
  ProxyCommand /usr/bin/corkscrew ${hostIP} ${httpPort} %h %p
"
'
alias unproxy='
  unset HTTPS_PROXY;
  unset HTTP_PROXY;
  unset ALL_PROXY;
  git config --global --unset http.proxy;
  git config --global --unset https.proxy;
  sudo sed -i -e '/Acquire::http::Proxy/d' /etc/apt/apt.conf.d/proxy.conf;
  sudo sed -i -e '/Acquire::https::Proxy/d' /etc/apt/apt.conf.d/proxy.conf;
'
```

这样就可以快速地使用 proxy 和 unproxy 命令。

### 安装 nvm 和 Node.js

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

1. 由于 GitHub 已经遭到封锁，可以考虑安装 V2Ray 给 WSL2 以获得推送代码的能力。

1. 更改 Node.js 可以使用的 Old Space 大小:

   在用户目录的 `.bashrc` 中加入:

   ```conf
   export NODE_OPTIONS="--max-old-space-size=8192"
   ```
