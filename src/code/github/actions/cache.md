---
title: cache
date: 2021-02-20
category: GitHub
tag:
  - action
  - workflow
---

这个 Action 允许您缓存依赖项和构建输出内容以缩短 Workflow 执行时间。

日常最多使用的就是缓存依赖项，在每个工作流程中，将安装后的依赖通过安装后生成的依赖版本文件的哈希值进行缓存。

当前工作流程的版本文件哈希值与历史缓存中的某一项完全相同时，直接载入这些依赖项缓存，这样就可以免去安装步骤。

::: info 缓存依赖

关于缓存依赖的文档，详见 [缓存依赖项以加快工作流程](https://docs.github.com/cn/actions/guides/caching-dependencies-to-speed-up-workflows)。

:::

<!-- more -->

## 配置项

### path

要缓存和还原的文件，目录和通配符模式的列表。

::: info

支持的 glob 模式，请参见 [@actions/glob](https://github.com/actions/toolkit/tree/main/packages/glob)。

:::

### key

用于保存缓存与还原缓存的的密钥

### restore-keys

当 key 没有命中缓存是用于恢复缓存键值的有序列表

## 输出

`cache-hit`: 一个布尔值，表明是否找到与该键完全匹配的值

## 缓存范围

缓存的作用域为特定的键和分支。默认分支缓存可用于其他分支。

## 案例

Yarn:

```yml
- uses: actions/cache@v3
  # 使用此 id 获得 `cache-hit`
  # (`steps.yarn-cache.outputs.cache-hit != 'true'`)
  id: yarn-cache
  with:
    path: node_modules/
    key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
    restore-keys: |
      ${{ runner.os }}-yarn-

- name: Install Dependencies
  if: steps.yarn-cache.outputs.cache-hit != 'true'
  run: yarn install
```

## 创建一个缓存键

缓存键可以包括 GitHub Actions 支持的任何上下文，函数，文字和运算符。

例如，使用 `hashFiles` 功能可让您在依存关系更改时创建新的缓存。

```yml
- uses: actions/cache@v3
  id: yarn-cache
  with:
    path: |
      node_modules/
    key: ${{ runner.os }}-${{ hashFiles('**/yarn.lock') }}
```

利用 cache-hit 输出，当对应键命中特定缓存后，可以跳过后续步骤 (例如，安装或构建) 。

```yml
- name: Install Dependencies
  if: steps.yarn-cache.outputs.cache-hit != 'true'
  run: yarn install
```

## 缓存限制

一个存储库最多可以有 5GB 的缓存。达到 5GB 限制后，将根据上次访问缓存的时间驱逐较早的缓存。过去未访问的缓存也将被自动删除。

## 仓库

<https://github.com/actions/cache>
