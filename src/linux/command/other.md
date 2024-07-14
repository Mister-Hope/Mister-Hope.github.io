---
title: 其他文件命令
icon: sort
date: 2019-11-19
category: Linux
---

## cp 命令

cp 命令，主要用来复制文件和目录，同时借助某些选项，还可以实现复制整个目录，以及比对两文件的新旧而予以升级等功能。

cp 命令的基本格式如下:

```shellsession
[root@localhost ~]# cp [选项] 源文件 目标文件
```

选项:

- -a: 相当于 -d、-p、-r 选项的集合，这几个选项我们一一介绍；
- -d: 如果源文件为软链接(对硬链接无效)，则复制出的目标文件也为软链接；
- -i: 询问，如果目标文件已经存在，则会询问是否覆盖；
- -l: 把目标文件建立为源文件的硬链接文件，而不是复制源文件；
- -s: 把目标文件建立为源文件的软链接文件，而不是复制源文件；
- -p: 复制后目标文件保留源文件的属性(包括所有者、所属组、权限和时间)；
- -r: 递归复制，用于复制目录；
- -u: 若目标文件比源文件有差异，则使用该选项可以更新目标文件，此选项可用于对文件的升级和备用。

需要注意的是，源文件可以有多个，但这种情况下，目标文件必须是目录才可以。

### cp 命令基本用法

cp 命令既可以复制文件，也可以复制目录。我们先来看看如何复制文件，例如:

```shellsession
[root@localhost ~]# touch cangls
#建立源文件
[root@localhost ~]# cp cangls /tmp/
#把源文件不改名复制到 /tmp/ 目录下
```

如果需要改名复制，则命令如下:

```shellsession
[root@localhost ~]# cp cangls /tmp/bols
#改名复制
```

如果复制的目标位置已经存在同名的文件，则会提示是否覆盖，因为 cp 命令默认执行的是 `cp -i` 的别名，例如:

```shellsession
[root@localhost ~]# cp cangls /tmp/
cp:是否覆盖"/tmp/cangls"?y
#目标位置有同名文件，所以会提示是否覆盖
```

接下来我们看看如何复制目录，其实复制目录只需使用 `-r` 选项即可，例如:

```shellsession
[root@localhost ~]# mkdir movie
#建立测试目录
[root@localhost ~]# cp -r /root/movie/ /tmp/
#目录原名复制
```

### 复制软链接文件

如果源文件不是一个普通文件，而是一个软链接文件，那么是否可以复制软链接的属性呢? 我们试试:

```shellsession
[root@localhost ~]# ln -s /root/cangls /tmp/cangls_slink
#建立一个测试软链接文件/tmp/cangls_slink
[root@localhost ~]# ll /tmp/cangls_slink
lrwxrwxrwx 1 root root 12 6 月 14 05:53 /tmp/cangls_slink -> /root/cangls
#源文件本身就是一个软链接文件
[root@localhost ~]# cp /tmp/cangls_slink /tmp/cangls_t1
#复制软链接文件，但是不加"-d"选项
[root@localhost ~]# cp -d /tmp/cangls_slink /tmp/cangls_t2
#复制软链接文件，加入"-d"选项
[root@localhost ~]# ll /tmp/cangls_t1 /tmp/cangls_t2
-rw-r--r-- 1 root root 0 6月 14 05:56 /tmp/cangls_t1
#会发现不加"-d"选项，实际复制的是软链接的源文件，而不是软链接文件
lrwxrwxrwx 1 root root 12 6 月 14 05:56/tmp/ cangls_t2-> /root/cangls
#而如果加入了"-d"选项，则会复制软链接文件
```

这个例子说明，如果在复制软链接文件时不使用 `-d` 选项，则 `cp` 命令复制的是源文件，而不是软链接文件；只有加入了 `-d` 选项，才会复制软链接文件。请大家注意，`-d` 选项对硬链接是无效的。

### 保留源文件属性复制

我们发现，在执行复制命令后，目标文件的时间会变成复制命令的执行时间，而不是源文件的时间。例如:

```shellsession
[root@localhost ~]# cp /var/lib/mlocate/mlocate.db /tmp/
[root@localhost ~]# ll /var/lib/mlocate/mlocate.db
-rw-r-----1 root slocate2328027 6月 14 02:08/var/lib/mlocate/mlocate.db
#注意源文件的时间和所属组
[root@localhost ~]#ll /tmp/mlocate.db
-rw-r----- 1 root root2328027 6 月 14 06:05/tmp/mlocate.db
#由于复制命令由root用户执行，所以目标文件的所属组为了root，而且时间也变成了复制命令的执行时间
```

而当我们执行备份、曰志备份的时候，这些文件的时间可能是一个重要的参数，这就需执行 `-p` 选项了。这个选项会保留源文件的属性，包括所有者、所属组和时间。例如:

```shellsession
[root@localhost ~]# cp -p /var/lib/mlocate/mlocate.db /tmp/mlocate.db_2
#使用"-p"选项
[root@localhost ~]# ll /var/lib/mlocate/mlocate.db /tmp/mlocate.db_2
-rw-r----- root slocate 2328027 6月 14 02:08 /tmp/mlocate.db_2
-rw-r----- root slocate 2328027 6月 14 02:08 /var/lib/mlocate/mlocate.db
#源文件和目标文件的所有属性都一致，包括时间
```

我们之前讲过，`-a` 选项相当于 "-d、-p、-r" 选项，这几个选项我们已经分别讲过了。所以，当我们使用 `-a` 选项时，目标文件和源文件的所有属性都一致，包括源文件的所有者，所属组、时间和软链接性。使用 `-a` 选项来取代 "-d、-p、-r" 选项更加方便。

### "-l" 和 "-s" 选项

我们如果使用 `-l` 选项，则目标文件会被建立为源文件的硬链接；而如果使用了 `-s` 选项，则目标文件会被建立为源文件的软链接。

这两个选项和 `-d` 选项是不同的，`d` 选项要求源文件必须是软链接，目标文件才会复制为软链接；而 `-l` 和 `-s` 选项的源文件只需是普通文件，目标文件就可以直接复制为硬链接和软链接。例如:

```shellsession
[root@localhost ~]# touch bols
#建立测试文件
[root@localhost ~]# ll -i bols
262154-rw-r--r-- 1 root root 0 6月 14 06:26 bols
#源文件只是一个普通文件，而不是软链接文件
[root@localhost ~]# cp -l /root/bols /tmp/bols_h
[root@localhost ~]# cp -s /root/bols /tmp/bols_s
#使用"-l" 和"-s"选项复制
[root@localhost ~]# ll -i /tmp/bols_h /tmp/bols_s
262154-rw-r--r-- 2root root 0 6 月 14 06:26/tmp/bols_h
#目标文件 /tmp/bols_h 为源文件的硬链接文件
932113 lrwxrwxrwx 1 root root 10 6 月 14 06:27/tmp/bols_s -> /root/bols
#目标文件 /tmp/bols_s 为源文件的软链接文件
```

## rm 命令

当 Linux 系统使用很长时间之后，可能会有一些已经没用的文件(即垃圾)，这些文件不但会消耗宝贵的硬盘资源，还是降低系统的运行效率，因此需要及时地清理。

rm 是强大的删除命令，它可以永久性地删除文件系统中指定的文件或目录。在使用 rm 命令删除文件或目录时，系统不会产生任何提示信息。此命令的基本格式为:

```shellsession
[root@localhost ~]# rm[选项] 文件或目录
```

选项:

- -f: 强制删除(force)，和 `-i` 选项相反，使用 `-f`，系统将不再询问，而是直接删除目标文件或目录。
- -i: 和 `-f` 正好相反，在删除文件或目录之前，系统会给出提示信息，使用 `-i` 可以有效防止不小心删除有用的文件或目录。
- -r: 递归删除，主要用于删除目录，可删除指定目录及包含的所有内容，包括所有的子目录和文件。

::: tip

rm 命令是一个具有破坏性的命令，因为 rm 命令会永久性地删除文件或目录，这就意味着，如果没有对文件或目录进行备份，一旦使用 rm 命令将其删除，将无法恢复，因此，尤其在使用 rm 命令删除目录时，要慎之又慎。

:::

### 基本用法

rm 命令如果任何选项都不加，则默认执行的是 `rm -i 文件名`，也就是在删除一个文件之前会先询问是否删除。例如:

```shellsession
[root@localhost ~]# touch cangls
[root@localhost ~]# rm cangls
rm:是否删除普通空文件"cangls"?y
#删除前会询问是否删除
```

### 删除目录

如果需要删除目录，则需要使用 `-r` 选项。例如:

```shellsession
[root@localhost ~]# mkdir -p /test/lm/movie/jp
#递归建立测试目录
[root@localhost ~]# rm /test
rm:无法删除"/test/": 是一个目录
#如果不加"-r"选项，则会报错
[root@localhost ~]# rm -r /test
rm:是否进入目录"/test"?y
rm:是否进入目录"/test/lm/movie"?y
rm:是否删除目录"/test/lm/movie/jp"?y
rm:是否删除目录"/test/lm/movie"?y
rm:是否删除目录"/test/lm"?y
rm:是否删除目录"/test"?y
#会分别询问是否进入子目录、是否删除子目录
```

大家会发现，如果每级目录和每个文件都需要确认，那么在实际使用中简直是灾难!

### 强制删除

如果要删除的目录中有 1 万个子目录或子文件，那么普通的 rm 删除最少需要确认 1 万次。所以，在真正删除文件的时候，我们会选择强制删除。例如:

```shellsession
[root@localhost ~]# mkdir -p /test/lm/movie/jp
#重新建立测试目录
[root@localhost ~]# rm -rf /test
#强制删除，一了百了
```

加入了强制功能之后，删除就会变得很简单，但是需要注意，数据强制删除之后无法恢复，除非依赖第三方的数据恢复工具，如 extundelete 等。但要注意，数据恢复很难恢复完整的数据，一般能恢复 70%~80% 就很难得了。所以，与其把宝压在数据恢复上，不如养成良好的操作习惯。

虽然 `-rf` 选项是用来删除目录的，但是删除文件也不会报错。所以，为了使用方便，一般不论是删除文件还是删除目录，都会直接使用 `-rf` 选项。

## mv 命令

mv 命令(move 的缩写)，既可以在不同的目录之间移动文件或目录，也可以对文件和目录进行重命名。该命令的基本格式如下:

```shellsession
[root@localhost ~]# mv 【选项】 源文件 目标文件
```

选项:

- -f: 强制覆盖，如果目标文件已经存在，则不询问，直接强制覆盖；
- -i: 交互移动，如果目标文件已经存在，则询问用户是否覆盖(默认选项)；
- -n: 如果目标文件已经存在，则不会覆盖移动，而且不询问用户；
- -v: 显示文件或目录的移动过程；
- -u: 若目标文件已经存在，但两者相比，源文件更新，则会对目标文件进行升级；

需要注意的是，同 rm 命令类似，mv 命令也是一个具有破坏性的命令，如果使用不当，很可能给系统带来灾难性的后果。

### 移动文件或目录

```shellsession
[root@localhost ~]# mv cangls /tmp
#移动之后，源文件会被删除，类似剪切
[root@localhost ~]# mkdir movie
[root@localhost ~]# mv movie/ /tmp
#也可以移动目录。和 rm、cp 不同的是，mv 移动目录不需要加入 "-r" 选项
```

如果移动的目标位置已经存在同名的文件，则同样会提示是否覆盖，因为 mv 命令默认执行的也是 `mv -i` 的别名，例如:

```shellsession
[root@localhost ~]# touch cangls
#重新建立文件
[root@localhost ~]# mv cangls /tmp
mv:县否覆盖"tmp/cangls"? y
#由于 /tmp 目录下已经存在 cangls 文件，所以会提示是否覆盖，需要手工输入 y 覆盖移动
```

### 强制移动

之前说过，如果目标目录下已经存在同名文件，则会提示是否覆盖，需要手工确认。这时如果移动的同名文件较多，则需要一个一个文件进行确认，很不方便。

如果我们确认需要覆盖已经存在的同名文件，则可以使用 `-f` 选项进行强制移动，这就不再需要用户手工确认了。例如:

```shellsession
[root@localhost ~]# touch cangls
#重新建立文件
[root@localhost ~]# mv -f cangls /tmp
#就算 /tmp/ 目录下已经存在同名的文件，由于"-f"选项的作用，所以会强制覆盖
```

### 不覆盖移动

既然可以强制覆盖移动，那也有可能需要不覆盖的移动。如果需要移动几百个同名文件，但是不想覆盖，这时就需要 `-n` 选项的帮助了。例如:

```shellsession
[root@localhost ~]# ls /tmp
/tmp/bols /tmp/cangls
#在/tmp/目录下已经存在bols、cangls文件了
[root@localhost ~]# mv -vn bols cangls lmls /tmp/、
"lmls"->"/tmp/lmls"
#再向 /tmp/ 目录中移动同名文件，如果使用了 "-n" 选项，则可以看到只移动了 lmls，而同名的 bols 和 cangls 并没有移动("-v" 选项用于显示移动过程)
```

### 改名

如果源文件和目标文件在同一目录中，那就是改名。例如:

```shellsession
[root@localhost ~]# mv bols lmls
#把 bols 改名为 lmls
```

目录也可以按照同样的方法改名。

### 显示移动过程

如果我们想要知道在移动过程中到底有哪些文件进行了移动，则可以使用 `-v` 选项来查看详细的移动信息。例如:

```shellsession
[root@localhost ~]# touch test1.txt test2.txt test3.txt
#建立三个测试文件
[root@localhost ~]# mv -v *.txt /tmp
"test1.txt" -> "/tmp/test1.txt"
"test2.txt" -> "/tmp/test2.txt"
"test3.txt" -> "/tmp/test3.txt"
#加入"-v"选项，可以看到有哪些文件进行了移
```
