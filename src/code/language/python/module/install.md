---
title: 安装第三方模块
icon: install
author: 廖雪峰
date: 2021-03-27
category: Python
---

在 Python 中，安装第三方模块，是通过包管理工具 pip 完成的。

如果您正在使用 Mac 或 Linux，安装 pip 本身这个步骤就可以跳过了。

如果您正在使用 Windows，请参考 [安装 Python](../intro/install.md) 一节的内容，确保安装时勾选了 `pip` 和 `Add python.exe to Path`。

在命令提示符窗口下尝试运行 pip，如果 Windows 提示未找到命令，可以重新运行安装程序添加 pip。

::: warning

Mac 或 Linux 上有可能并存 Python 3.x 和 Python 2.x，因此对应的 pip 命令是 pip3。

:::

例如，我们要安装一个第三方库——Python Imaging Library，这是 Python 下非常强大的处理图像的工具库。不过，PIL 目前只支持到 Python 2.7，并且有年头没有更新了，因此，基于 PIL 的 Pillow 项目开发非常活跃，并且支持最新的 Python 3。

一般来说，第三方库都会在 Python 官方的 <pypi.python.org> 网站注册，要安装一个第三方库，必须先知道该库的名称，可以在官网或者 pypi 上搜索，比如 Pillow 的名称叫 [Pillow](https://pypi.python.org/pypi/Pillow/)，因此，安装 Pillow 的命令就是:

```sh
pip install Pillow
```

耐心等待下载并安装后，就可以使用 Pillow 了。

## 安装常用模块

在使用 Python 时，我们经常需要用到很多第三方库，例如，上面提到的 Pillow，以及 MySQL 驱动程序，Web 框架 Flask，科学计算 Numpy 等。用 pip 一个一个安装费时费力，还需要考虑兼容性。我们推荐直接使用 [Anaconda](https://www.anaconda.com/)，这是一个基于 Python 的数据处理和科学计算平台，它已经内置了许多非常有用的第三方库，我们装上 Anaconda，就相当于把数十个第三方模块自动安装好了，非常简单易用。

可以从 [Anaconda 官网](https://www.anaconda.com/download/) 下载 GUI 安装包，安装包有 500~600M，所以需要耐心等待下载。下载后直接安装，Anaconda 会把系统 Path 中的 python 指向自己自带的 Python，并且，Anaconda 安装的第三方模块会安装在 Anaconda 自己的路径下，不影响系统已安装的 Python 目录。

安装好 Anaconda 后，重新打开命令行窗口，输入 python，可以看到 Anaconda 的信息:

```
┌────────────────────────────────────────────────────────┐
│Command Prompt - python                           - □ x │
├────────────────────────────────────────────────────────┤
│Microsoft Windows [Version 10.0.0]                      │
│(c) 2015 Microsoft Corporation. All rights reserved.    │
│                                                        │
│C:\> python                                             │
│Python 3.9.2 |Anaconda, Inc.| ... on win32              │
│Type "help", ... for more information.                  │
│>>> import numpy                                        │
│>>> _                                                   │
│                                                        │
│                                                        │
│                                                        │
└────────────────────────────────────────────────────────┘
```

可以尝试直接 `import numpy` 等已安装的第三方模块。

## 模块搜索路径

当我们试图加载一个模块时，Python 会在指定的路径下搜索对应的.py 文件，如果找不到，就会报错:

```sh
>>> import mymodule
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ImportError: No module named mymodule
```

默认情况下，Python 解释器会搜索当前目录、所有已安装的内置模块和第三方模块，搜索路径存放在 sys 模块的 path 变量中:

```sh
>>> import sys
>>> sys.path
['', '/Library/Frameworks/Python.framework/Versions/3.9/lib/python36.zip', '/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9', ..., '/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9/site-packages']
```

如果我们要添加自己的搜索目录，有两种方法:

一是直接修改 `sys.path`，添加要搜索的目录:

```sh
>>> import sys
>>> sys.path.append('/Users/michael/my_py_scripts')
```

这种方法是在运行时修改，运行结束后失效。

第二种方法是设置环境变量 `PYTHONPATH`，该环境变量的内容会被自动添加到模块搜索路径中。设置方式与 [设置境变量](../../../windows/env-variable.md) 类似。注意只需要添加您自己的搜索路径，Python 自己本身的搜索路径不受影响。
