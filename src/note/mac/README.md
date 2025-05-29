---
title: macOS 设置
---

## 安装 Homebrew

在终端中运行以下命令安装 Homebrew：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

同时需要将 Homebrew 添加到你的 shell 配置文件中（例如 `~/.zshrc` 或 `~/.bash_profile`）：

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
```

## 安装常用软件

使用 Homebrew 安装常用软件，例如：

```bash
brew install git
brew install node
brew install python
```

## 关闭 Swap 分区

macOS 默认启用 Swap 分区，需要先长按电源键进入恢复模式，在终端中禁用系统完整性保护（SIP）：

```bash
csrutil disable
```

然后重启电脑，进入终端，运行以下命令禁用 Swap 分区：

```bash
sudo vim /etc/sysctl.conf
```

在文件中添加以下内容：

```ini
vm.swap_enabled=0
```

之后再次重启电脑进入恢复模式，重新启用系统完整性保护：

```bash
csrutil enable
```

## 常用软件

- iTerm2
- Alfred
- Bartender

## 修改启动台图标数量

在终端中运行以下命令修改启动台图标数量：

```bash
defaults write com.apple.dock springboard-rows -int 6
defaults write com.apple.dock springboard-columns -int 8
killall Dock
```

## 修改电脑名称

在终端中运行以下命令修改电脑名称：

```bash
sudo scutil --set HostName "终端电脑名称"
```
