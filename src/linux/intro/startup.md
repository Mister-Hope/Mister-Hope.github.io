---
title: Linux 系统启动过程
date: 2020-05-04
---

::: tip

本篇教程以 CentOS 为例介绍系统的启动过程。

:::

Linux 启动时我们会看到许多启动信息。

Linux 系统的启动过程并不是大家想象中的那么复杂，其过程可以分为 5 个阶段:

- 内核的引导。
- 运行 init。
- 系统初始化。
- 建立终端 。
- 用户登录系统。

::: tip

init 程序的类型:

- SysV: init, CentOS 5 之前, 配置文件: /etc/inittab。
- Upstart: init,CentOS 6, 配置文件: /etc/inittab, /etc/init/\*.conf。
- Systemd: systemd, CentOS 7,配置文件: /usr/lib/systemd/system、 /etc/systemd/system。

:::

## 内核引导

当计算机打开电源后，首先是 BIOS 开机自检，按照 BIOS 中设置的启动设备(通常是硬盘)来启动。

操作系统接管硬件以后，首先读入 `/boot` 目录下的内核文件。

![boot](../assets/boot.png)

## 运行 init

init 进程是系统所有进程的起点，您可以把它比拟成系统所有进程的老祖宗，没有这个进程，系统中任何进程都不会启动。

init 程序首先是需要读取配置文件 `/etc/inittab`。

![init](../assets/init.png)

### 运行级别

许多程序需要开机启动。它们在 Windows 叫做"服务"(service)，在 Linux 就叫做"守护进程"(daemon)。

init 进程的一大任务，就是去运行这些开机启动的程序。

但是，不同的场合需要启动不同的程序，比如用作服务器时，需要启动 Apache，用作桌面就不需要。

Linux 允许为不同的场合，分配不同的开机启动程序，这就叫做"运行级别"(runlevel)。也就是说，启动时根据"运行级别"，确定要运行哪些程序。

![runlevel](../assets/runlevel.png)

Linux 系统有 7 个运行级别(runlevel):

- 运行级别 0: 系统停机状态，系统默认运行级别不能设为 0，否则不能正常启动
- 运行级别 1: 单用户工作状态，root 权限，用于系统维护，禁止远程登陆
- 运行级别 2: 多用户状态(没有 NFS)
- 运行级别 3: 完全的多用户状态(有 NFS)，登陆后进入控制台命令行模式
- 运行级别 4: 系统未使用，保留
- 运行级别 5: X11 控制台，登陆后进入图形 GUI 模式
- 运行级别 6: 系统正常关闭并重启，默认运行级别不能设为 6，否则不能正常启动

## 系统初始化

在 init 的配置文件中有这么一行: `si::sysinit:/etc/rc.d/rc.sysinit`　它调用执行了 `/etc/rc.d/rc.sysinit`，而 `rc.sysinit` 是一个 bash shell 的脚本，它主要是完成一些系统初始化的工作，rc.sysinit 是每一个运行级别都要首先运行的重要脚本。

它主要完成的工作有: 激活交换分区，检查磁盘，加载硬件模块以及其它一些需要优先执行任务。

```bash
l5:5:wait:/etc/rc.d/rc 5
```

这一行表示以 5 为参数运行 `/etc/rc.d/rc`，`/etc/rc.d/rc` 是一个 Shell 脚本，它接受 5 作为参数，去执行 `/etc/rc.d/rc5.d/` 目录下的所有的 rc 启动脚本，`/etc/rc.d/rc5.d/` 目录中的这些启动脚本实际上都是一些连接文件，而不是真正的 rc 启动脚本，真正的 rc 启动脚本实际上都是放在 `/etc/rc.d/init.d/`目录下。

而这些 rc 启动脚本有着类似的用法，它们一般能接受 start、stop、restart、status 等参数。

`/etc/rc.d/rc5.d/` 中的 rc 启动脚本通常是 K 或 S 开头的连接文件，对于以 S 开头的启动脚本，将以 start 参数来运行。

而如果发现存在相应的脚本也存在 K 打头的连接，而且已经处于运行态了(以 `/var/lock/subsys/` 下的文件作为标志)，则将首先以 stop 为参数停止这些已经启动了的守护进程，然后再重新运行。

这样做是为了保证是当 init 改变运行级别时，所有相关的守护进程都将重启。

至于在每个运行级中将运行哪些守护进程，用户可以通过 chkconfig 或 setup 中的 "System Services" 来自行设定。
