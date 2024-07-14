---
icon: shell
date: 2019-11-20
category: Linux
---

# 环境变量

## 变量

变量是计算机系统用于保存可变值的数据类型，我们可以直接通过变量名称来提取到对应的变量值。在 Linux 系统中，环境变量是用来定义系统运行环境的一些参数，比如每个用户不同的家目录 (HOME)、邮件存放位置 (MAIL)等。
值得一提的是，Linux 系统中环境变量的名称一般都是大写的，这是一种约定俗成的规范。

我们可以使用 env 命令来查看到 Linux 系统中所有的环境变量，执行命令如下:

```shellsession
[root@localhost ~]# env
ORBIT_SOCKETDIR=/tmp/orbit-root
HOSTNAME=livecd.centos
GIO_LAUNCHED_DESKTOP_FILE_PID=2065
TERM=xterm
SHELL=/bin/bash
......
```

Linux 系统能够正常运行并且为用户提供服务，需要数百个环境变量来协同工作，但是，我们没有必要逐一学习每个变量。常见变量见下表:

| 环境变量名称 | 作用                                   |
| ------------ | -------------------------------------- |
| HOME         | 用户的主目录(也称家目录)               |
| SHELL        | 用户使用的 Shell 解释器名称            |
| PATH         | 定义命令行解释器搜索用户执行命令的路径 |
| EDITOR       | 用户默认的文本解释器                   |
| RANDOM       | 生成一个随机数字                       |
| LANG         | 系统语言、语系名称                     |
| HISTSIZE     | 输出的历史命令记录条数                 |
| HISTFILESIZE | 保存的历史命令记录条数                 |
| PS1          | Bash 解释器的提示符                    |
| MAIL         | 邮件保存路径                           |

Linux 作为一个多用户多任务的操作系统，能够为每个用户提供独立的、合适的工作运行环境，因此，一个相同的环境变量会因为用户身份的不同而具有不同的值。

例如，使用下述命令来查看 `HOME` 变量在不同用户身份下都有哪些值:

```shellsession
[root@localhost ~]# echo $HOME
/root
[root@localhost ~]# su - user1  <--切换到 user1 用户身份
[user1@localhost ~]$ echo $HOME
/home/user1
```

这里的 `su` 命令可以临时切换用户身份，此命令的具体用法会在后续章节做详细介绍。

其实，环境变量是由固定的变量名与用户或系统设置的变量值两部分组成的，我们完全可以自行创建环境变量来满足工作需求。例如，设置一个名称为 `WORKDIR` 的环境变量，方便用户更轻松地进入一个层次较深的目录，执行命令如下:

```shellsession
[root@localhost ~]# mkdir /home/work1
[root@localhost ~]# WORKDIR=/home/work1
[root@localhost ~]# cd $WORKDIR
[root@localhost work1]# pwd
/home/work1
```

但是，这样的环境变量不具有全局性，作用范围也有限，默认情况下不能被其他用户使用。如果工作需要，可以使用 `export` 命令将其提升为全局环境变量，这样其他用户就可以使用它了:

```shellsession
[root@localhost work1]# su user1  <-- 切换到 user1，发现无法使用 WORKDIR 自定义变量
[user1@localhost ~]$ cd $WORKDIR
[user1@localhost ~]$ echo $WORKDIR

[user1@localhost ~]$ exit <--退出user1身份
[root@localhost work1]# export WORKDIR
[root@localhost work1]# su user1
[user1@localhost ~]$ cd $WORKDIR
[user1@localhost work1]$ pwd
/home/work1
```

## path

在讲解 PATH 环境变量之前，首先介绍一下 `which` 命令，它用于查找某个命令所在的绝对路径。例如:

```shellsession
[root@localhost ~]# which rm
/bin/rm
[root@localhost ~]# which rmdir
/bin/rmdir
[root@localhost ~]# which ls
alias ls='ls --color=auto'
        /bin/ls
```

注意，`ls` 是一个相对特殊的命令，它使用 alias 命令做了别名，也就是说，我们常用的 `ls` 实际上执行的是 `ls --color=auto`。

通过使用 `which` 命令，可以查找各个外部命令(和 Shell 内置命令相对)所在的绝对路径。学到这里，读者是否有这样一个疑问，为什么前面在使用 `rm`、`rmdir`、`ls` 等命令时，无论当前位于哪个目录，都可以直接使用，而无需指明命令的执行文件所在的位置 (绝对路径) 呢? 其实，这是 PATH 环境变量在起作用。

首先，执行如下命令:

```shellsession
[root@localhost ~]# echo $PATH
/usr/local/sbin:/usr/sbin:/sbin:/usr/local/bin:/usr/bin:/bin:/root/bin
```

这里的 `echo` 命令用来输出 PATH 环境变量的值(这里的 `$` 是 PATH 的前缀符号)，PATH 环境变量的内容是由一堆目录组成的，各目录之间用冒号 `:` 隔开。当执行某个命令时，Linux 会依照 PATH 中包含的目录依次搜寻该命令的可执行文件，一旦找到，即正常执行；反之，则提示无法找到该命令。
如果在 PATH 包含的目录中，有多个目录都包含某命令的可执行文件，那么会执行先搜索到的可执行文件。

从执行结果中可以看到，`/bin` 目录已经包含在 PATH 环境变量中，因此在使用类似 `rm`、`rmdir`、`ls` 等命令时，即便直接使用其命令名，Linux 也可以找到该命令。

为了印证以上观点，下面举个反例，如果我们将 `ls` 命令移动到 `/root` 目录下，由于 PATH 环境变量中没有包含此目录，所有当直接使用 `ls` 命令名执行时，Linux 将无法找到此命令的可执行文件，并提示 `No such file or directory`，示例命令如下:

```shellsession
[root@localhost ~]# mv /bin/ls /root
[root@localhost ~]# ls
bash: /bin/ls: No such file or directory
```

此时，如果仍想使用 `ls` 命令，有 2 种方法，一种是直接将 `/root` 添加到 PATH 环境变量中，例如:

```shellsession
[root@localhost ~]# PATH=$PATH:/root
[root@localhost ~]# echo $PATH
/usr/local/sbin:/usr/sbin:/usr/local/bin:/usr/bin:/bin:/root/bin:/root
[root@localhost ~]# ls
Desktop    Downloads    Music    post-install     Public    Videos
Documents  ls           Pictures post-install.org Templates
```

注意，这种方式只是临时有效，一旦退出下次再登陆的时候，`$PATH` 就恢复成了默认值。

另一种方法是以绝对路径的方式使用此命令，例如:

```shellsession
[root@localhost ~]# /root/ls
Desktop    Downloads    Music    post-install     Public    Videos
Documents  ls           Pictures post-install.org Templates
```

为了不影响系统的正常使用，强烈建议大家将移动后的 `ls` 文件还原，命令如下:

```shellsession
[root@localhost ~]# mv /root/ls /bin
```
