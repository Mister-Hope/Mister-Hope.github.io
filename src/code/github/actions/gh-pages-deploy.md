---
title: github-pages-deploy
date: 2021-02-20
category: GitHub
tag:
  - action
  - deploy
  - workflow
---

github-pages-deploy-action 用于自动将网站内容部署到 GitHub Pages。

您可以使用这个 Action 将代码推送到您想要的任何分支中，包括 gh-pages 和 docs, 甚至可以处理跨存储库部署。

<!-- more -->

## 重要配置

### branch

此项必填，填入您希望部署到的分支，例如 gh-pages 或 docs

### folder

此项必填，填入存储库中要部署的文件夹。此项自动识别为相对路径。

- 如您的构建输出到 dist 目录，可以直接设置 `dist`

- 如果您希望部署根目录，请设置 `.`

- 如果您希望使用绝对路径访问 workflow 所在的 server，请在路径前添加 `~`

## 可选配置

### token

此选项默认为可访问存储库的 Token。

如果您需要更多权限 (例如，部署到另一个存储库) ，可以通过此选项设置个人访问令牌 (PAT) 。

本选项的值应该存储在 secrets 中。

::: tip

建议在生成新的 PAT 时选择所需的最少权限范围

:::

### ssh-key

此选项可以填入部署用的 SSH 专用密钥，(本选项的值应该存储在 secrets 中)，也可以将其设置为 `true` 使用现有的 SSH 客户端配置，使用 SSH 部署。

### repository-name

允许您指定其他存储库路径，只要您有权将其推送。格式应为: `用户名/存储库名称`。您需要设置 token 为 PAT，此配置选项才能正常运行。

### target-folder

如果要将部署文件夹的内容推送到部署分支上的特定目录中，可以在此处指定。

### commit-message

定制提交信息

### clean

如果您的项目在构建时生成哈希文件，则可以使用此选项在每次部署时从部署分支的目标文件夹中自动将其删除。

此选项默认情况下处于启用状态，可以通过将其设置为来关闭 `false`。

::: tip

也就是每次部署默认是全新的，不会保留任何上一次部署的文件。您需要保证部署时您已经拥有了所有需要的文件。

:::

### clean-exclude

如果您需要使用 `clean` 但想保留某些文件或文件夹，则可以使用此选项。这应该在多行字符串中将每个模式包含为一行。

### single-commit

如果您希望在部署分支只有一次最新的提交，而不是维护完整的历史记录，则可以将此选项切换为 `true`。

::: warning

使用此选项还将导致从部署分支中移除所有现有历史记录。

:::

## 案例

当构建完整网站后，请添加下列步骤:

```yml
- name: Deploy 🚀
  uses: JamesIves/github-pages-deploy-action@v4
  with:
    # 需要部署到的分支
    branch: gh-pages
    # 需要部署的文件夹
    folder: dist
```

## 仓库

<https://github.com/JamesIves/github-pages-deploy-action>
