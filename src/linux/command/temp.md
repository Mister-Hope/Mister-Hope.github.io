---
date: 2020-05-04
category: Linux
---

# 其他指令

## 文件

### 创建文件

- touch
- vi

### 编辑文件

- vi

::: tip

使用 vi 命令后，默认进入浏览模式。

按 `i` 进入 insert 模式， 按 `ESC` 退出。

1. 命令模式下，输入: `/` 字符串

   比如搜索 user, 输入 `/user`

   按下回车之后，可以看到 vim 已经把光标移动到该字符处和高亮了匹配的字符串

1. 查看下一个匹配，按下 n(小写 n)

1. 跳转到上一个匹配，按下 N(大写 N)

1. 搜索后，我们打开别的文件，发现也被高亮了，怎么关闭高亮?

命令模式下，输入 `:nohlsearch` 也可以 `:set nohlsearch`；当然，可以简写，`noh` 或者 `set noh`。

:::

### 重命名文件

- rename

### 移动文件

- mv

::: tip

该命令也可用于重命名

:::

### 文件浏览

- pwd: 查看当前目录
- cd: 移动当前目录
- ls: 列出当前目录
  - `-l`: 以表格列出当前目录详情
  - `-a`: 包括隐藏文件

## 权限

- chmod: 查看/更改文件或文件夹权限

`chmod` 是权限管理命令 `change the permissions mode of a file` 的缩写。

`u` 代表所有者，`x` 代表执行权限。`+` 表示增加权限。

```bash
chmod u+x file.sh
```

```bash
chmod 权限数字 文件名
```

- r 读权限 read 4

- w 写权限 write 2

- x 操作权限 execute 1

```bash
chmod 600 id_rsa
```

## 用户组

### 管理用户组

```sh
groupadd groupname 　　添加用户组

groupdel groupname 　　删除用户组
```

### 添加用户到用户组

将一个用户添加到用户组中，千万不能直接用:

```sh
usermod -G groupA
```

这样做会使您离开其他用户组，仅仅做为 这个用户组 groupA 的成员。

应该用 加上 `-a` 选项:

```sh
usermod -a -G groupA user
(FC4: usermod -G groupA,groupB,groupC user)
```

`-a` 代表 `append`， 也就是 将自己添加到 用户组 groupA 中，而不必离开 其他用户组。

命令的所有的选项，及其含义:

```text
Options:

-c, –comment COMMENT new value of the GECOS field
-d, –home HOME_DIR new home directory for the user account
-e, –expiredate EXPIRE_DATE set account expiration date to EXPIRE_DATE
-f, –inactive INACTIVE set password inactive after expiration
to INACTIVE
-g, –gid GROUP force use GROUP as new primary group
-G, –groups GROUPS new list of supplementary GROUPS
-a, –append append the user to the supplemental GROUPS
mentioned by the -G option without removing
him/her from other groups
-h, –help display this help message and exit
-l, –login NEW_LOGIN new value of the login name
-L, –lock lock the user account
-m, –move-home move contents of the home directory to the new
location (use only with -d)
-o, –non-unique allow using duplicate (non-unique) UID
-p, –password PASSWORD use encrypted password for the new password
-s, –shell SHELL new login shell for the user account
-u, –uid UID new UID for the user account
-U, –unlock unlock the user account
```

查看用户所属的组使用命令:

```sh
groups user
```

或者查看文件:

```sh
cat /etc/group
```

## 用户

`cat /etc/passwd` 查看用户列表

### 添加用户

```bash
sudo useradd [用户名]
```

创建新用户: useradd

`-d` 指定目录文件夹

`-m` 新账号名

如:

```bash
useradd -d /www/abc -m abc
```

- `-c`: comment 指定一段注释性描述。
- `-d`: 目录 指定用户主目录，如果此目录不存在，则同时使用-m 选项，可以创建主目录。
- `-g`: 用户组 指定用户所属的用户组。
- `-G`: 用户组，用户组 指定用户所属的附加组。
- `-s`: Shell 文件 指定用户的登录 Shell。
- `-u`: 用户号 指定用户的用户号，如果同时有-o 选项，则可以重复使用其他用户的标识号。

### 设置密码

```bash
sudo passwd [用户名]
```

## 删除用户

```bash
userdel abc
```

::: tip

使用 userdel abc 命令删除该用户时，并不能删除该用户的所有信息，只是删除了/etc/passwd、/etc/shadow、/etc/group/、/etc/gshadow 四个文件里的该账户和组的信息。默认情况下创建一个用户账号，会创建一个家目录和一个用户邮箱(在/var/spool/mail 目录以用户名命名)

所以建议使用 `userdel -r abc` 删除用户。

:::

## 服务管理

Linux 服务管理两种方式 service 和 systemctl

1. service 命令

   service 命令其实是去 `/etc/init.d` 目录下，去执行相关程序

   - service 命令启动 redis 脚本

   ```bash
   service redis start
   ```

   - 直接启动 redis 脚本

   ```bash
   /etc/init.d/redis start
   ```

   - 开机自启动

   ```bash
   update-rc.d redis defaults
   ```

   其中脚本需要我们自己编写

1. systemctl 命令

   systemd 是 Linux 系统最新的初始化系统(init),作用是提高系统的启动速度，尽可能启动较少的进程，尽可能更多进程并发启动。

   systemd 对应的进程管理命令是 systemctl
