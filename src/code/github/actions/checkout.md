---
title: checkout
date: 2021-02-18
category: GitHub
tag:
  - action
  - workflow
---

该操作将检出您的存储库 `$GITHUB_WORKSPACE`，使您的工作流可以访问它。

<!-- more -->

默认情况下，对于触发工作流的 ref / SHA，为了速度仅提取一次提交。如需获取所有分支和标签的所有历史记录，需要设置设置 `fetch-depth: 0`。

身份验证令牌保留在本地 Git 配置中。这使您的脚本可以运行经过身份验证的 Git 命令。在工作后清理期间将删除令牌。

设置 `persist-credentials: false` 取消保留。

## 常用参数

### ref

需要检出的 ref，即可以填入特定分支、commitID 或 tag。默认为触发当前工作流的 ref。

### token

个人访问令牌，又称 Personal access token (PAT)，用于配置机器 Git 配置，以运行需要身份验证的 Git 命令，详见 [GitHub Token](../token.md)。

::: v-pre

默认为工作流提供的 `${{ github.token }}`

:::

### fetch-depth

要获取的提交数。 `0` 表示所有分支和标签的所有历史记录。

默认为 `1`

### submodules

是否检出子模块。`true` 检出子模块 `recursive` 会递归检出子模块。

默认为 `false`

## 其他参数

### repository

带有作者的仓库名，如 `Hope-Studio/innenu-app`，默认为当前仓库。

### persist-credentials

是否将 token 等信息用于本地的 Git 配置，以便后续 Git 命令可以访问。

### path

`$GITHUB_WORKSPACE` 下用于放置存储库的相对路径

默认为 `./`

### ssh-key

用于获取仓库的 SSH 私钥，用于配置机器 Git 配置，以运行需要身份验证的 Git 命令。

::: tip

默认的 token 有权限拉取工作流所在的仓库。

如果仓库包含了存放于其他代码托管商或私有的 submodules，或是的仓库，可能需要设置上述两选项之一，才能拉取对应 submodule。

:::

### ssh-known-hosts

除了用户和全局主机密钥数据库外的已知主机。可以使用 `ssh-keyscan` 获得主机的公共 SSH 密钥。 例如，`ssh-keyscan github.com`。 github.com 的公钥总是隐式添加的。

::: info

当您需要获取其他代码托管商的仓库时，需要设置此选项

:::

### ssh-strict

是否进行严格的 ssh 校验，默认为 `true`，即不检查 IP，而是检查 Host 给出的密钥指纹是否匹配。

### clean

是否在拉取代码前执行 `git clean -ffdx && git reset --hard HEAD`。

默认为 `true`

### lfs

是否下载 Git-LFS 文件。

默认为 `false`

## 例子

- 获取所有标签与历史:

  ```yml
  - uses: actions/checkout@v4
    with:
      fetch-depth: 0
  ```

- 检出特定分支

```yml
- uses: actions/checkout@v4
  with:
    ref: my-branch
```

- 检出 `HEAD^`

  ```yml
  - uses: actions/checkout@v4
    with:
      fetch-depth: 2
  - run: git checkout HEAD^
  ```

- 并列检出多个 repo

  ```yml
  - name: Checkout
    uses: actions/checkout@v4
    with:
      path: main

  - name: Checkout tools repo
    uses: actions/checkout@v4
    with:
      repository: my-org/my-tools
      path: my-tools
  ```

- 嵌套检出多个 repo

  ```yml
  - name: Checkout
    uses: actions/checkout@v4

  - name: Checkout tools repo
    uses: actions/checkout@v4
    with:
      repository: my-org/my-tools
      path: my-tools
  ```

- 检出多个私有 repo

  ```yml
  - name: Checkout
    uses: actions/checkout@v4
    with:
      path: main

  - name: Checkout private tools
    uses: actions/checkout@v4
    with:
      repository: my-org/my-private-tools
      token: ${{ secrets.GitHub_PAT }} # `GitHub_PAT` is a secret that contains your PAT
      path: my-tools
  ```

:::: info

::: v-pre

`${{ github.token }}` 仅限于当前存储库，因此，如果要签出其他私有存储库，则需要提供自己的 PAT。

:::

::::

- 检出 PR HEAD commit 而不是 merge commit

  ```yml
  - uses: actions/checkout@v4
    with:
      ref: ${{ github.event.pull_request.head.sha }}
  ```

- 当关闭 PR 时将其检出

  ```yml
  on:
    pull_request:
      branches: [main]
      types: [opened, synchronize, closed]
  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
  ```

- 使用内置 token 进行提交

  ```yml
  on: push
  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - run: |
            date > generated.txt
            git config user.name github-actions
            git config user.email github-actions@github.com
            git add .
            git commit -m "generated"
            git push
  ```

## 地址

地址: <https://github.com/actions/checkout>
