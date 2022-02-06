---
icon: debug
date: 2019-11-21
category: Linux
---

# 开发软件

## 安装 VS Code

- 使用 snap

  ```bash
  sudo snap install --classic code
  ```

- 在 WSL 环境下 snap 无法使用，则使用以下命令安装 code 库。

  ```bash
  curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
  sudo install -o root -g root -m 644 packages.microsoft.gpg /usr/share/keyrings/
  sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
  ```

  然后正常安装:

  ```bash
  sudo apt-get install apt-transport-https
  sudo apt-get update
  sudo apt-get install code # or code-insiders
  ```

可能还需要安装

```bash
sudo apt-get install libx11-xcb1 libasound2
```

### remote 插件安装

```bash
code --install-extension ms-vscode-remote.vscode-remote-extensionpack
```

## nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
```

在 Linux 上可能需要重新链接终端，命令才可用。

测试命令，输入 `nvm` 即安装成功:

```bash
command -v nvm
```

安装命令:

```bash
nvm install 10
```

切换命令:

```bash
nvm use 10
```

## 安装 Git

```bash
sudo add-apt-repository ppa:git-core/ppa

sudo apt-get update

sudo apt-get install git
```

## yarn

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

测试是否安装成功:

```bash
yarn --version
```
