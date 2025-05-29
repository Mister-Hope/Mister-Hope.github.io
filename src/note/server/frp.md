---
title: frp
---

[frp](https://github.com/fatedier/frp) 是一个高性能的反向代理应用，主要用于内网穿透。它可以将内网服务暴露到公网上，方便外部访问。

frp 的文档可以参照 [frp 文档](https://gofrp.org/zh-cn/docs/) 或 [frp GitHub](https://github.com/fatedier/frp)

## Linux 安装服务端

标准的做法，是将 frps 放置在 `/usr/local/bin` 目录下。

确保 systemd 已经安装：

```bash
apt install systemd
```

创建 `frpc` 或 `frps` 服务：

```bash
sudo vim /etc/systemd/system/frps.service
```

写入服务配置：

```conf
[Unit]
Description = FRP Server
After = network.target

[Service]
Type = simple
ExecStart=/usr/local/bin/frps -c /etc/frp/frps.toml
Restart = on-failure
RestartSec = 5s
StandardOutput = file:/var/log/frp/frps.log
StandardError =file:/var/log/frp/frps.error.log

[Install]
WantedBy = multi-user.target
```

进行其他配置，配置好后启用

```bash
# 启动
sudo systemctl start frps
# 查看状态
sudo systemctl status frps
# 开机启动
sudo systemctl enable frps
```

如果想要查看日志，可以使用 `journalctl` 命令：

```bash
# 查看日志
sudo journalctl -u frps
```

## Linux 安装客户端

标准的做法，是将 frpc 放置在 `/usr/local/bin` 目录下。

创建 `frpc` 服务：

```bash
sudo vim /etc/systemd/system/frpc.service
```

写入服务配置：

```conf
[Unit]
Description = FRP Client
After = network.target

[Service]
Type = simple
ExecStart=/usr/local/bin/frpc -c /etc/frp/frpc.toml
Restart = on-failure
RestartSec = 5s
StandardOutput = file:/var/log/frp/frpc.log
StandardError = file:/var/log/frp/frpc.error.log

[Install]
WantedBy = multi-user.target
```

## Windows 安装

可以放置在 `C:\frp` 目录下。

创建 Windows 服务模板:

```xml title="frpc.xml"
<?xml version="1.0" ?>
<service>
  <id>frpc</id>
  <description>frpc.exe</description>
  <executable>%BASE%\frpc.exe</executable>
  <log mode="roll-by-size">
    <keepFiles>4</keepFiles>
    <sizeThreshold>262144</sizeThreshold>
  </log>
  <name>frpc</name>
  <onfailure action="restart" delay="1 sec" />
  <onfailure action="restart" delay="1 sec" />
  <onfailure action="restart" delay="1 sec" />
  <resetfailure>1 min</resetfailure>
  <startarguments>-c frpc.toml</startarguments>
</service>
```

通过 `WinSW-x64.exe` 创建 `frpc` 或 `frps` 服务：

```bash
C:\frp\WinSW-x64.exe install frpc.xml
```
