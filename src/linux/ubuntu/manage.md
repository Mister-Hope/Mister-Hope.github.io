---
icon: tool
date: 2019-11-21
category: Linux
---

# 管理工具

## apt-get

`apt-get` 命令默认的源在国内访问很慢，可以考虑换源。

- 获取软件包更新:

  ```bash
  apt-get update
  ```

- 更新软件包:

  ```bash
  apt-get update
  ```

- 其他命令[^order]

[^order]: 其他命令

    ```bash
    apt-cache search # ------(package 搜索包)

    apt-cache show #------(package 获取包的相关信息，如说明、大小、版本等)

    sudo apt-get install # ------(package 安装包)sudo apt-get install # -----(package - - reinstall 重新安装包)

    sudo apt-get -f install # -----(强制安装?#"-f = --fix-missing"当是修复安装吧...)

    sudo apt-get remove #-----(package 删除包)

    sudo apt-get remove - - purge # ------(package 删除包，包括删除配置文件等)

    sudo apt-get autoremove --purge # ----(package 删除包及其依赖的软件包+配置文件等(只对6.10有效，强烈推荐))

    sudo apt-get update #------更新源

    sudo apt-get upgrade #------更新已安装的包

    sudo apt-get dist-upgrade # ---------升级系统

    sudo apt-get dselect-upgrade #------使用 dselect 升级

    apt-cache depends #-------(package 了解使用依赖)

    apt-cache rdepends # ------(package 了解某个具体的依赖?#当是查看该包被哪些包依赖吧...)

    sudo apt-get build-dep # ------(package 安装相关的编译环境)

    apt-get source #------(package 下载该包的源代码)

    sudo apt-get clean && sudo apt-get autoclean # --------清理下载文件的存档 && 只清理过时的包

    sudo apt-get check #-------检查是否有损坏的依赖
    ```

## Snap

已经预装。

在中国大陆不建议使用 Snap
