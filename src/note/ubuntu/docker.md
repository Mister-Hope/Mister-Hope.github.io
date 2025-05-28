---
title: Docker 的安装与设置
---

## 安装 Docker

```bash
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

::: info 让 Docker 以 root 模式运行

将用户添加到 docker 组

```bash
sudo usermod -aG docker $USER
```

完成后，请注销并重新登录以应用组更改。

:::

为了安全，可以使用 Rootless Docker，避免使用 root 权限运行 Docker。

对于 Ubuntu 系统，需要先安装 `uidmap` 并确定 `dbus-user-session` 已经安装：

```bash
sudo apt-get install uidmap dbus-user-session
```

确定你已经安装了 `docker-ce-rootless-extras`：

```bash
sudo apt-get install docker-ce-rootless-extras
```

确保禁用 Root 模式 Docker:

```bash
sudo systemctl disable --now docker.service docker.socket
sudo rm /var/run/docker.sock
```

执行以下命令安装 Rootless Docker：

```bash
dockerd-rootless-setuptool.sh install
```

同时将以下环境变量添加到 `~/.bashrc` 或 `~/.profile` 中：

```bash
export PATH=/usr/bin:$PATH
export DOCKER_HOST=unix:///run/user/1000/docker.sock
```

如果想要让 Rootless Docker 以系统服务的方式运行，可以使用以下命令：

```bash
systemctl --user enable docker
sudo loginctl enable-linger $(whoami)
```

如果想要启动 Rootless Docker，可以使用以下命令：

```bash
systemctl --user start docker
```

如果想要停止 Rootless Docker，可以使用以下命令：

```bash
systemctl --user stop docker
```

对于国内用户，可以在 `/etc/docker/daemon.json` (如果是 Rootless 模式，则为 `~/.config/docker/daemon.json`) 配置国内源，并且为 Docker 设置代理。

```json
{
  "proxies": {
    "http-proxy": "http://127.0.0.1:10808",
    "no-proxy": "127.0.0.0/8"
  },
  "registry-mirrors": [
    "https://docker.1ms.run",
    "https://docker.xuanyuan.me",
    "https://run-docker.cn"
  ]
}
```

如果在 Ubuntu 中安装 Docker，需要禁用 Docker 修改 iptable，以避免 Docker 绕过 ufw 防火墙。

编辑 `/etc/docker/daemon.json` (如果是 Rootless 模式，则为 `~/.config/docker/daemon.json`)，添加以下内容：

```json
{
  // ...
  "iptables": false
}
```

之后，手动允许 Docker 网桥通过防火墙:

```bash
sudo ufw allow in on docker0 from 172.17.0.0/16
sudo ufw allow out on docker0 to 172.17.0.0/16
sudo ufw reload
```

对于 Rootless Docker 服务，可以通过 `~/.config/systemd/user/docker.service.d/override.conf` 进行配置：

```ini
# 在这里，我们修改了网络设置和端口驱动
[Service]
Environment="DOCKERD_ROOTLESS_ROOTLESSKIT_NET=pasta"
Environment="DOCKERD_ROOTLESS_ROOTLESSKIT_PORT_DRIVER=implicit"
```

## 管理 Docker

安装并启动 Portainer

```bash
docker run -d \
  --name portainer \
  --restart always \
  -p 9000:9000 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v portainer_data:/data \
  portainer/portainer-ce:latest
```

如果使用 Rootless Docker，可以使用以下命令：

```bash
docker run -d \
  --name portainer \
  --restart always \
  -p 9000:9000 \
  -v $XDG_RUNTIME_DIR/docker.sock:/var/run/docker.sock \
  -v portainer_data:/data \
  portainer/portainer-ce:latest
```

访问 `http://localhost:9000`，设置新的管理员密码，连接到 Docker 环境。

## 自动更新 Docker 容器

可以使用 `watchtower` 来自动更新 Docker 容器。

```bash
docker run -d \
  --name watchtower \
  --restart always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower:latest
```

如果使用 Rootless Docker，可以使用以下命令：

```bash
docker run -d \
  --name watchtower \
  --restart always \
  -v $XDG_RUNTIME_DIR/docker.sock:/var/run/docker.sock \
  containrrr/watchtower:latest
```

如果有必要，你可以设置 `HTTP_PROXY` `HTTPS_PROXY` 和 `NO_PROXY` 环境变量来配置代理。

## GPU 设置

如果需要使用 GPU，可以使用以下命令安装 NVIDIA Container Toolkit：

```bash
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
  && curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
    sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
    sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list

sudo apt-get install nvidia-container-toolkit
```

之后对 Docker 进行配置:

```bash
sudo nvidia-ctk runtime configure --runtime=docker

# 记得重启 Docker 服务
sudo systemctl restart docker
```

如果使用 Rootless Docker，需要额外进行设置：

```bash
nvidia-ctk runtime configure --runtime=docker --config=$HOME/.config/docker/daemon.json
sudo nvidia-ctk config --set nvidia-container-cli.no-cgroups --in-place

# 记得重启 Docker 服务
systemctl --user restart docker
```

想要测试 GPU 是否可用，可以使用以下命令：

```bash
# 这里的 nvidia/cuda:12.8.1-base-ubuntu24.04 可以替换为你需要的 CUDA 版本
docker run --rm --gpus all nvidia/cuda:12.8.1-base-ubuntu24.04 nvidia-smi
```
