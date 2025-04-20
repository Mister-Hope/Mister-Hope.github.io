---
title: frp
---

[frp](https://github.com/fatedier/frp) 是一个高性能的反向代理应用，主要用于内网穿透。它可以将内网服务暴露到公网上，方便外部访问。

frp 的文档可以参照 [frp 文档](https://gofrp.org/zh-cn/docs/) 或

## Linux 安装

frp 适合放置在 `/usr/local/frp` 目录下。

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
Description = frp server
After = network.target syslog.target
Wants = network.target

[Service]
Type = simple
ExecStart = /usr/local/frp/frps -c /usr/local/frp/frps.toml

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
