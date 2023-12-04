---
title: CSS 声明
icon: object
date: 2019-09-05
order: 2
category: CSS
tag:
  - 快速上手
---

## 值的专一性

CSS 每个属性都会有且仅有一个值。

- 如果您设置了多个值，最终优先级最高的值会被应用、
- 如果您没有设置值，则会应用默认值。默认值可以是 `unset`(未设置), `inherit` (继承父属性值), `initial` (初始值)。

::: tip

如果属性未知或某个值对给定属性无效，则声明被视为无效，并被浏览器的 CSS 引擎完全忽略。

:::

## 函数

虽然大多数值是相对简单的关键字或数值，但也有一些可能的值以函数的形式出现。一个函数由函数名和一些括号组成，其中放置了该函数的允许值。

**案例**: `calc()` 函数允许您在 CSS 中进行简单的计算

::: normal-demo calc()

```html
<div class="box" />
```

```css
.box {
  padding: 10px;
  width: calc(90% - 30px);
  background-color: rebeccapurple;
  color: white;
}
```

:::

**案例**: `url()` 允许您引入外部资源

::: normal-demo url()

```html
<div class="logo" />
```

```css
.logo {
  width: 100px;
  height: 100px;
  background-image: url(/logo.svg);
}
```

:::

## 速记属性

一些属性，如 `font`, `background`, `padding`, `border`, `margin` 等属性称为速记属性--这是因为它们允许您在一行中设置多个属性值，从而节省时间并使代码更整洁。

**案例**: 以下两个 CSS 是完全等价的

```css
.box {
  padding: 10px 15px 15px 5px;
  background: red url(bg-graphic.png) 10px 10px repeat-x fixed;
}
```

```css
.box {
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-left: 5px;
  background-color: red;
  background-image: url(bg-graphic.png);
  background-position: 10px 10px;
  background-repeat: repeat-x;
  background-attachment: fixed;
}
```
