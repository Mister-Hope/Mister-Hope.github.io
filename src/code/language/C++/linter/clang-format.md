# clang-format介绍与使用

## clang-format介绍

### clang-format是一种代码格式化工具，可用于格式化（排版）多种不同语言的代码

  平时团队进行合作的时候需要注意代码的格式，虽然很难统一每个人的编码风格，但是通过工具能够很好的管理代码格式。这里介绍下clang-format，它是基于clang的一个命令行工具，能够自动化格式：C、C++、Object-C代码，支持多种代码风格：Google、Chromium、LLVM、Mozilla、WebKit；也支持自定义风格（通过编写.clang-format文件）。

### .clang-format自定义格式化

 基本语法： 在powershell中输入 `clang-format -style=格式名 -dump-config > 文件名`

 其中，格式名的取值可以为llvm, google, chromium, mozilla, webkit中的任一种；文件名可以取任何名字，一般取.clang-format或_clang-format，因为自定义的排版格式文件只有取这两种名字之一，才能被clang-Format识别。

## 使用clang-format格式化C/C++

安装C/C++插件时会自动安装clang-format,因此只需要在VSCode中设置

1. `Ctrl + Shift + X` 打开拓展，选择 `C/C++` 栏目中下方的管理，左击并选择拓展设置

    ![如图](./assets/sample1.png "sample1")

2. 在设置搜索栏输入 `format`,勾选
    1. ***Format On Paste***
    2. ***Format On Save***
    3. ***Format On Type***

    ![如图](./assets/sample2.png "sample2")

3. 在设置搜索栏输入 `clang`, 在第一栏输入 `Google`

    ![如图](./assets/sample3.png "sample3")
