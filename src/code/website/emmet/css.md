---
title: CSS Emmet
icon: css
date: 2019-09-03
category: Emmet
tag:
  - 快捷键
  - HTML
next: ../js.html
---

对于 CSS 语法，Emmet 为属性提供了许多预定义的代码段。

## 添加属性

您可以使用缩写来生成 CSS 属性。如 `m` 会生成 `margin: ;`，同时光标会自动置于值处。

## 同时添加属性与值值

您可以将值直接输入缩写的后面，如果有多个值，您需要用 `-` 将它们分开，多余的 `-` 将会被理解为负值。

::: tip 案例

- `m10`: `margin: 10px;`
- `m10-20`: `margin: 10px 20px;`
- `m-10--20`: `margin: -10px -20px;`

:::

::: warning

请只有在必要(不添加会产生歧义)的情况下添加 `-` 分隔符，否则 Emmet 可能会错误的理解它。

:::

## 值的单位

使用整数值扩展缩写时，Emmet 会以 px 单位输出: `m10` → `margin: 10px;`。

使用浮点值扩展缩写时，会以 em 单位输出: `m1.5` → `margin: 1.5em;`。

您也可以在值后面紧跟任何字母字符，来显式提供单位名称: `m1.5ex` → `margin: 1.5ex;`，`m10foo` → `margin: 10foo;`。

明确定义单位后，不再需要使用连字符来分隔值: `m10ex20em` → `margin: 10ex 20em;`，`m10ex-5` → `margin: 10ex -5px;`。

## 值别名

Emmet 具有一些常用值的别名:

- `p` → `%`
- `e` → `em`
- `x` → `ex`

您可以使用别名代替完整的单位:

- `w100p` → `width: 100%`
- `m10p30e5x` → `margin: 10% 30em 5ex`

## 颜色值

Emmet 支持十六进制颜色值。`#` 将自动作为分隔符，所以针对颜色变量，将不再需要 `-`。

- `c#3` → `color: #333;`
- `bd5#0s` → `border: 5px #000 solid`。(`#` 符号可将颜色与 `5` 分隔开，并且 `s`(别名为 `solid`)不是十六进制字符，因此省略了 `-`。

颜色变量支持 1-3 位的缩写，表现如下:

- `#1` → `#111111`
- `#e0` → `#e0e0e0`
- `#fc0` → `#ffcc00`

## 无单元属性

一些 CSS 属性默认为无单位输出:

- `lh2`→ `line-height: 2;`
- `fw400`→ `font-weight: 400`。

这些值是: `z-index`，`line-height`，`opacity` 和 `font-weight`

## 重要修饰符

您可以在任何 CSS 缩写的末尾添加 `!` 后缀来添加 `!important`

`p!+m10e!`:

```css
padding: !important;
margin: 10em !important;
```

## 输出多个属性

正如上方演示，您可以利用 `+` 同时输出多个 CSS 属性。

::: info Snippets

完整的 CSS snippets 请见 [Emmet Repo](https://github.com/emmetio/emmet/blob/master/snippets/css.json)

:::
