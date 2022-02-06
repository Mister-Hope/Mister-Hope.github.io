---
title: WSL
icon: api
date: 2019-11-23
category: Linux
---

WSL 可以直接在 Windows 系统上安装并运行 Linux。目前最新的版本是 WSL2。

<!-- more -->

## Ubuntu

Windows 上的功能有很大缺失。已知不能用 Snap。

## WSL 文件位置

```md
C:\Users\%USERNAME%\AppData\Local\Packages\CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc\LocalState\rootfs
```

## 重启 WSL

使用

```bash
net stop LxssManager
```

和

```bash
net start LxssManager
```
