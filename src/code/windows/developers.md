---
date: 2024-01-26
title: Windows 开发
icon: windows
category: 基础
tag:
  - 开发
  - Windows
---

本文主要介绍 Windows 11 系统下，与开发相关的功能。

## WSL

WSL 是 Windows Subsystem for Linux 的缩写，即 Windows 的 Linux 子系统。Windows 11 支持 WSL2，同时支持 wslg，即 WSL 图形化。

你可以很方便的启用 Windows For Linux 子系统，然后在 Windows 11 上安装 Linux 发行版，如 Ubuntu、Debian、Kali 等，然后在 Linux 环境下进行开发，同时启用 wslg，即可在 Windows 11 上使用 Linux 图形化应用如 Firefox 等进行调试。

### 安装 WSL

你可以使用单个命令安装运行 WSL 所需的一切内容。 在管理员模式下打开 PowerShell 或 Windows 命令提示符，方法是右键单击并选择“以管理员身份运行”，输入 `wsl --install` 命令，然后重启计算机。

::: info

有关 WSL 的详细内容，详见 [WSL 官方文档](https://learn.microsoft.com/zh-cn/windows/wsl/)。

:::

## WSA

WSA 是 Windows Subsystem for Android 的缩写，即 Windows 的 Android 子系统。Windows 11 支持 WSA，你可以在 Windows 11 上安装 Android 应用，如微信、QQ、抖音等，然后在 Windows 11 上使用。

默认情况下，你只能通过 WSA 内置的 Amazon 应用商店安装应用，但是你可以打开开发者模式通过 adb 安装任意应用的 APK。

::: info

有关 WSA 的详细内容，详见 [WSA 官方文档](https://learn.microsoft.com/zh-cn/windows/android/wsa/)。

:::

## Windows 终端

Windows 终端是一个新式主机应用程序，它面向你喜爱的命令行 shell，如命令提示符、PowerShell 和 bash（通过适用于 Linux 的 Windows 子系统 (WSL)）。 它的主要功能包括多个选项卡、窗格、Unicode 和 UTF-8 字符支持、GPU 加速文本呈现引擎，你还可用它来创建你自己的主题并自定义文本、颜色、背景和快捷方式。

更多内容详见 [软件 → Windows 终端](../../software/tool/terminal/README.md)。

## PowerToys

Microsoft PowerToys 是一组实用工具，可帮助高级用户调整和简化其 Windows 体验，从而提高工作效率。

更多内容详见 [软件 → PowerToys](../../software/tool/power-toys.md)。
