---
date: 2021-01-18
title: GitHub Token
icon: token
category: GitHub
order: 6
---

Personal Access Token (PAT)，又称个人访问令牌，是一种代替密码进行 GitHub 身份认证的方式。

通常情况下，你可能需要在 GitHub Workflow 中使用 PAT，以便在 GitHub Actions 中使用需要授权的 GitHub API。

<!-- more -->

## 创建个人访问令牌

1. 访问 [新建 Token 页面](https://github.com/settings/tokens/new) (当然您需要先登陆 GitHub)

   > 或者可以点击头像 → Settings → Developer settings → Personal access tokens → Generate new Token

1. 输入一个备注，选择您需要授权 Token 访问的内容，之后点击页面底部的 "Generate Token"
1. 妥善保存该 Token (因为您无法再次查看它)

详见 [创建个人访问令牌](https://docs.github.com/cn/github/authenticating-to-github/creating-a-personal-access-token)
