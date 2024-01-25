---
title: 选择器简介
icon: select
date: 2019-09-05
order: 1
category: CSS
tag:
  - 快速上手
---

CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。

选择器所选择的元素，叫做“选择器的对象”。

<!-- more -->

::: normal-demo 案例

```html
<img src="/logo.svg" alt="logo" style="max-width: 150px" />

<p class="paragraph">Mr.Hope is handsome!</p>
<p id="par">Mr.Hope is very handsome!</p>
```

```css
p {
  color: red;
}

.paragraph {
  color: red;
}

#par {
  color: blue;
}
```

:::

在上文中，CSS 选择器选中了对应的 HTML 元素并为其应用样式规则。

## 三个常见选择器

### ID 选择器

ID 选择器可以为标有特定 ID 的 HTML 元素指定特定的样式。

HTML 可以用 ID 属性来设置 ID 选择器，CSS 中 ID 选择器以 `#` 来定义。

以下的样式规则应用于元素属性 `id="para1"`:

```css
#para1 {
  text-align: center;
  color: red;
}
```

::: tip

ID 的全称是 Identify，是身份标识的意思。ID 的实际作用是为这个 HTML 标签绑定一个页面内唯一的标识符。因此，每一个 HTML 页面出现的 ID 应该仅被使用一次，以 ID 来代指这个元素。

:::

### Class 选择器

Class 选择器用于描述一组元素的样式，class 选择器有别于 ID 选择器，class 可以在多个元素中使用。

Class 选择器在 HTML 中以 class 属性表示, 在 CSS 中，类选择器以句点 (`.`) 显示:

在以下的例子中，所有拥有 center 类的 HTML 元素均为居中。

```css
.center {
  text-align: center;
}
```

### 标签选择器

标签选择器用于指定一个 HTML 标签的样式。通常，浏览器会为每个特定的 HTML 标签指定一个默认样式，但是不同的浏览器的默认样式可能有细微的区别。

有些时候想要覆盖浏览器的默认样式，或者说想在所有浏览器中保持统一样式，即可使用标签选择器指定标签的默认样式。在 CSS 指定的标签样式会覆盖掉浏览器默认指定的样式。

```css
/* 确保所有浏览器的段落标签的字体大小均为16像素。*/
p {
  font-size: 16px;
}
```

## 运算符

选择器可以通过运算符，构成更加复杂的选择器。

最常见的是**后代选择器**，以空格分隔，用于选取某元素的后代元素

::: tip 选择器案例

- `p{ }`: 为所有 **p** 元素指定一个样式。

- `.marked{ }`: 为所有 **class="marked"** 的元素指定一个样式。

- `.marked p{ }`: 为所有 **class="marked"** 元素内的 **p** 元素指定一个样式。

- `p.marked{ }`: 为所有 **class="marked"** 的 **p** 元素指定一个样式。

:::

::: info

选择器详细介绍，请见 [选择器](../intro/selector.md)。

:::
