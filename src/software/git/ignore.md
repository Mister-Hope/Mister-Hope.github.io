---
date: 2020-05-05
title: 忽略特殊文件
icon: skin
order: 12
author: 廖雪峰
category: Git
tag:
  - Git
  - 软件
copyright: Copyright by 廖雪峰 Edited by Mr.Hope
---

有些时候，您必须把某些文件放到 Git 工作目录中，但又不能提交它们，比如保存了数据库密码的配置文件啦，等等，每次 `git status` 都会显示 `Untracked files` ...，有强迫症的童鞋心里肯定不爽。

好在 Git 考虑到了大家的感受，这个问题解决起来也很简单，在 Git 工作区的根目录下创建一个特殊的 `.gitignore` 文件，然后把要忽略的文件名填进去，Git 就会自动忽略这些文件。

忽略文件的原则是:

- 忽略操作系统自动生成的文件，比如缩略图等；
- 忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如 Java 编译产生的 `.class` 文件；
- 忽略您自己的带有敏感信息的配置文件，比如存放口令的配置文件。

举个例子:

假设您在 Windows 下进行 Python 开发，Windows 会自动在有图片的目录下生成隐藏的缩略图文件，如果有自定义目录，目录下就会有 `Desktop.ini` 文件，因此您需要忽略 Windows 自动生成的垃圾文件:

```text
Thumbs.db
ehthumbs.db
Desktop.ini
```

然后，继续忽略 Python 编译产生的 `.pyc`、`.pyo`、`dist` 等文件或目录:

```text
_.py[cod]
_.so
_.egg
_.egg-info
dist
build
```

加上您自己定义的文件，最终得到一个完整的 `.gitignore` 文件，内容如下:

```text
# Windows:

Thumbs.db
ehthumbs.db
Desktop.ini

# Python:

_.py[cod]
_.so
_.egg
_.egg-info
dist
build

# My configurations:

db.ini
deploy_key_rsa
```

最后一步就是把 `.gitignore` 也提交到 Git，就完成了! 当然检验 `.gitignore` 的标准是 `git status` 命令是不是说 `working directory clean`。

使用 Windows 的童鞋注意了，如果您在资源管理器里新建一个 `.gitignore` 文件，它会非常弱智地提示您必须输入文件名，但是在文本编辑器里“保存”或者“另存为”就可以把文件保存为 `.gitignore` 了。

有些时候，您想添加一个文件到 Git，但发现添加不了，原因是这个文件被 `.gitignore` 忽略了:

```sh
$ git add App.class
The following paths are ignored by one of your .gitignore files:
App.class
Use -f if you really want to add them.
```

如果您确实想添加该文件，可以用 `-f` 强制添加到 Git:

```sh
git add -f App.class
```

或者您发现，可能是 `.gitignore` 写得有问题，需要找出来到底哪个规则写错了，可以用 `git check-ignore` 命令检查:

```sh
$ git check-ignore -v App.class
.gitignore:3:*.class    App.class
```

Git 会告诉我们，`.gitignore` 的第 3 行规则忽略了该文件，于是我们就可以知道应该修订哪个规则。

## 格式规范

- 所有空行或者以 # 开头的行都会被 Git 忽略。

- 可以使用标准的 glob 模式匹配，它会递归地应用在整个工作区中。

- 匹配模式可以以(`/`)开头防止递归。

- 匹配模式可以以(`/`)结尾指定目录。

- 要忽略指定模式以外的文件或目录，可以在模式前加上叹号(`!`)取反。

::: tip glob 模式

所谓的 glob 模式是指 shell 所使用的简化了的正则表达式。星号(`*`)匹配零个或多个任意字符；`[abc]` 匹配任何一个列在方括号中的字符 (这个例子要么匹配一个 `a`，要么匹配一个 `b`，要么匹配一个 `c`)； 问号(`?`)只匹配一个任意字符；如果在方括号中使用短划线分隔两个字符， 表示所有在这两个字符范围内的都可以匹配(比如 `[0-9]` 表示匹配所有 `0` 到 `9` 的数字)。使用两个星号(`**`)表示匹配任意中间目录，比如 `a/**/z` 可以匹配 `a/z` 、`a/b/z` 或 `a/b/c/z` 等。

:::

一个具体的例子:

```text
# 忽略所有的 .a 文件
*.a

# 但跟踪所有的 lib.a，即便您在前面忽略了 .a 文件
!lib.a

# 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO
/TODO

# 忽略任何目录下名为 build 的文件夹
build/

# 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt
doc/*.txt

# 忽略 doc/ 目录及其所有子目录下的 .pdf 文件
doc/**/*.pdf
```

::: tip

GitHub 有一个十分详细的针对数十种项目及语言的 .gitignore 文件列表， 您可以在 [https://github.com/github/gitignore](https://github.com/github/gitignore) 找到它。

:::

::: tip 多个 .gitignore

在最简单的情况下，一个仓库可能只根目录下有一个 .gitignore 文件，它递归地应用到整个仓库中。然而，子目录下也可以有额外的 .gitignore 文件。子目录中的 .gitignore 文件中的规则只作用于它所在的目录中。(Linux 内核的源码库拥有 206 个 .gitignore 文件。)

:::

## 小结

- 忽略某些文件时，需要编写 `.gitignore`；

- `.gitignore` 文件本身要放到版本库里，并且可以对 `.gitignore` 做版本管理!
