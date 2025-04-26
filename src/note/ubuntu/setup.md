---
title: 设置 Ubuntu
---

1. 启用 ufw

   ```bash
   sudo ufw enable
   ```

2. 前往设置，激活 Ubuntu Pro

3. 安装 ssh

   ```bash
   sudo apt install openssh-server
   ```

4. 修改 ssh 端口并禁用 root 登录

   ```bash
   sudo vim /etc/ssh/sshd_config
   ```

   ```bash
   Port xxx
   PermitRootLogin no
   ```

5. 启用 ssh 服务

   ```bash
   sudo systemctl enable ssh
   sudo systemctl start ssh
   ```

6. 安装防爆破工具

   ```bash
   sudo apt install fail2ban
   ```

7. 配置防爆破工具

   ```bash
   sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
   sudo vim /etc/fail2ban/jail.local
   ```

   ```bash
   [sshd]
   enabled = true
   port = xxx
   filter = sshd
   logpath = /var/log/auth.log
   maxretry = 3
   bantime = 86400
   ```

8. 启用 fail2ban 服务

   ```bash
   sudo systemctl enable fail2ban
   sudo systemctl start fail2ban
   ```

9. 添加常用源

   ```bash
    # 添加 git
    sudo add-apt-repository ppa:git-core/ppa
    # 添加 nvidia
    sudo add-apt-repository ppa:graphics-drivers/ppa
   ```

10. 安装 flatpak

    ```bash
    sudo apt install flatpak
    ```

    安装 flathub 源

    ```bash
    flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
    ```

    如果网络不稳定，可以考虑使用国内源：

    ```bash
    flatpak remote-modify flathub --url=https://mirrors.ustc.edu.cn/flathub
    ```

11. 如果需要使用 NVIDIA 显卡，安装 NVIDIA 驱动，对于 Ubuntu 22.04 及以上版本，安装 NVIDIA 驱动的命令如下：

    ```bash
    sudo ubuntu-drivers autoinstall
    ```

    安装后需要重启。

    如果需要使用 CUDA，安装 CUDA 驱动的命令如下：

    ```bash
    sudo apt install nvidia-cuda-toolkit
    ```

    如果需要最新的 CUDA Toolkit，可以前往 [NVIDIA 官网](https://developer.nvidia.com/cuda-downloads) 下载最新的 CUDA Toolkit。

    同时如果需要最大化性能，需要修改 NVIDIA 驱动的配置文件，命令如下：

    ```bash
    sudo nvidia-smi -pm 1
    nvidia-settings -a GPUPowerMizerMode=1
    ```

12. 完成安装后，建议检查系统更新。

    ```bash
    sudo apt update && sudo apt upgrade
    ```
