---
date: 2021-01-18
title: 语义化提交
icon: semantic
category: GitHub
order: 3
---

## Semantic

对于一个大型项目，几千个 commit 是很常见的，这些 commit 部分是项目维护者提交的 commit，部分是一些热心的开发者通过 PR 贡献的。

无论是对于项目维护者，还是想要贡献代码的热心开发者来说，一个简洁明了的 commit 描述都是必不可少的。也就是说我们需要用尽可能简短的备注信息，备注每一个 commit 的作用，以便大家查看。所以我们需要一种规范的，语义化的备注格式，很快由知名项目牵头，全球接收并统一了一种语义化的备注格式，这就是 semantic 规范的来源。

## 优势

当一个仓库所有的 commit 信息都是用标准的 semantic 格式时，用户可以很方便的理解每一个 commit 的作用。

同时，semantic 支持直接将某个提交或 PR 与特定 issue 链接，并自动关闭或引用这些 issue。

通过一些第三方工具，大家可以基于这些备注信息进行过滤查找，更新日志生成等操作。

## 格式

```text
<type>(<scope>): <subject>
<body>

<footer>
```

### header

第一行被称为 `header`，它必须只有一行，包括三个字段: `<type>`(必需)、`<scope>`(可选)和 `<subject>`(必需)

### type

commit 的类型。

规范中规定了如下类型:

- `feat`: feature, 新增功能
- `fix` : bug fix, 修复 bug
- `docs`: documentation, 仅仅修改了文档，如 `README.md`
- `style`: style, 仅仅是对格式进行修改，如逗号、缩进、空格等，不改变代码逻辑
- `refactor`: refactor, 代码重构，一般更改了源文件或测试文件，但没有新增功能或修复 bug
- `perf`: performance, 优化相关，如提升性能、用户体验等
- `test`: test, 测试用例，包括单元测试，集成测试
- `chore`: chore, 对于库的其他内容的改变，一般不涉及到源文件或测试文件，比如更改 CI 设置，提升仓库以来等
- `revert`: 版本回滚

### scope

用于说明 commit 影响的范围，比如: `views` , `component`, `utils`, `test`。这个是由项目的内容与结构决定的。

### subject

commit 目的的简短描述，最好小于 50 字符，一般不超过 65 个字符，最长不超过 80 字符。

当 subject 限制的字符数无法详细说明此 commit 的变动时，将 commit 的具体变动放置在 body 中

### body

对本次 commit 修改内容的具体描述，可以分为多行。`body` 是可选的，而且 `body` 可以有多行。

### footer

可选的，前面有一空行。可以添加一些备注，一般放置 `BREAKING CHANGE`(一些破坏性的变动) 或修复的 bug(涉及的 issue)的链接。

## Semantic commit 与 Changelog 生成

不同语言环境都有很多种工具来帮助您创建一个 semantic commit 或者自动生成 changelog。

::: tip 案例

Node.js 环境下可以使用:

- [`cz-conventional-changelog`](https://github.com/commitizen/cz-conventional-changelog) 提供 `git cz` 命令辅助创建 semantic commit。

- [`conventional-changelog-cli`](https://github.com/conventional-changelog/conventional-changelog) 来快速生成更新日志，如 [vuepress-theme-hope 的更改日志](https://github.com/Mister-Hope/vuepress-theme-hope/blob/master/CHANGELOG.md)

:::
