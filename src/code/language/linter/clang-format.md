---
title: clang-format
icon: linter
date: 2020-10-21
tag:
  - linter
---

clang-format 是一种代码格式化工具，可用于格式化(排版) C / C++ / Java / JavaScript / Objective-C / Protobuf / C# 的代码。它支持多种预设代码风格与自定义风格 (通过编写 `.clang-format` 文件)。

<!-- more -->

## 自定义格式化

```shell
clang-format -style=格式名 -dump-config > .clang-format`
```

其中，格式名的取值可以为 `LLVM`, `Google`, `Chromium`, `Mozilla`, `Webkit` 中的任一种，这会将对应格式预设写入 `.clang-format` 文件。

## 使用命令行

### 格式

```shell
clang-format [options] [<file> ...]
```

### 可用选项

- `--Werror`: 将格式化警告变为错误
- `--Wno-error=unknown`: 未知的格式化选项仅产生警告。

  这可以保持格式化启用，即使配置包含未知 (较新) 选项。

- `--assume-filename=<string>`: 覆盖用于确定语言的文件名。

  通常在从 stdin 读取时，帮助 clang-fomat 获取文件名

- `--dry-run` 或 `-n`: 如果设置，实际上不进行格式更改
- `--dump-config`: 将配置选项转储到标准输出并退出, 可以与 `--style` 选项一起使用。

- `--fallback-style=<string>`: 设置回退的默认格式，通常在 clang-format 找不到配置文件时使用。

  设置 `--fallback-style=none` 可以在这种情况下跳过格式化

- `--ferror-limit=<uint>`: 设置 clang-format 输出的最大错误数，超过将停止输出。

  请仅与 `--dry-run` 或 `-n` 配合使用，`0` 意味着无限制

- `-i`: 替换输入文件

- `--length=<uint>`: 格式化指定长度范围

  可以通过指定多个偏移和长度对来格式化几个范围。

  当仅指定一个偏移量而没有 `--length`，clang-format 会一直格式化到文件的最后。

  只能与一个输入文件一起使用。

- `--lines=<string>`: 格式为 `<start line>:<end line>`

  设置格式化行的范围(起始为第一行)，可以通过指定多个范围来格式化多行。

  不能与 `--offset` 和 `--length` 一起使用。

  只能与一个输入文件一起使用。

- `--offset=<uint>`: 格式化从此字节偏移量开始的范围。

  可以通过指定多个范围来格式化几个偏移量和长度对。

  只能与一个输入文件一起使用。

- `--output-replacements-xml`: 输出 XML

- `--sort-includes`: 如果设置，将覆盖包含排序行为。由 SortIncludes 样式标志确定

- `--style=<string>` 编码样式

  当前支持: `LLVM`, `Google`, `Chromium`, `Mozilla`, `Webkit`

  使用 `--style=file` 从中文件加载样式配置

  使用 `--style="{key:value,...}"` 来设置特定的参数，
  例如: `"{BasedOnStyle: llvm, IndentWidth: 8}"`

- `--verbose`: 输出处理的文件列表

## VS Code

在 VS Code 中安装 C/C++ 插件以启用两者支持时会自动安装 clang-format，因此无需进行任何操作，即可在 C/C++ 文件中对代码进行格式化。

## 推荐样式

Mr.Hope 推荐使用 Google 预设，所以在个人与工作室的每个项目中，都会使用 Google 编码风格。

建议在 VS Code 中配置默认格式风格:

```json
{
  "C_Cpp.clang_format_fallbackStyle": "Google"
}
```

## 官方文档

- [地址](http://clang.llvm.org/docs/ClangFormat.html) (需 VPN)
