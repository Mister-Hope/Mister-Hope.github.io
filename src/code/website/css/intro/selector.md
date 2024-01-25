---
title: 选择器
icon: select
date: 2019-09-05
order: 1
category: CSS
tag:
  - CSS
prev: ../guide/common.html
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

## ID 选择器

ID 选择器可以为标有特定 ID 的 HTML 元素指定特定的样式。

HTML 可以用 ID 属性来设置 ID 选择器，CSS 中 ID 选择器以 `#` 来定义。

以下的样式规则应用于元素属性 `id="para1"`:

::: normal-demo ID 案例

```html
<p>Mr.Hope 很帅！</p>
<p id="para1">Mr.Hope is handsome!</p>
```

```css
#para1 {
  text-align: center;
  color: red;
}
```

:::

::: tip

ID 的全称是 Identify，是身份标识的意思。ID 的实际作用是为这个 HTML 标签绑定一个页面内唯一的标识符。因此，每一个 HTML 页面出现的 ID 应该仅被使用一次，以 ID 来代指这个元素。

:::

::: warning

ID 属性不要以数字开头，数字开头的 ID 在 `Mozilla/Firefox` 浏览器中不起作用。

:::

## Class 选择器

Class 选择器用于描述一组元素的样式，class 选择器有别于 ID 选择器，class 可以在多个元素中使用。

Class 选择器在 HTML 中以 class 属性表示, 在 CSS 中，类选择器以句点 (`.`) 显示:

在以下的例子中，所有拥有 `center` 类的 HTML 元素均为居中。

::: normal-demo Class 案例

```html
<p>Mr.Hope 很帅！</p>
<p class="bold">Mr.Hope is handsome!</p>
<p class="bold center">Mr.Hope is handsome!</p>
<p class="center">Mr.Hope is handsome!</p>
```

```css
.bold {
  font-weight: bold;
}

.center {
  text-align: center;
}
```

:::

## 标签选择器

标签选择器用于指定一个 HTML 标签的样式。通常，浏览器会为每个特定的 HTML 标签指定一个默认样式，但是不同的浏览器的默认样式可能有细微的区别。

有些时候想要覆盖浏览器的默认样式，或者说想在所有浏览器中保持统一样式，即可使用标签选择器指定标签的默认样式。在 CSS 指定的标签样式会覆盖掉浏览器默认指定的样式。

```css
/* 确保所有浏览器的段落标签的字体大小均为16像素。*/
p {
  font-size: 16px;
}
```

## 属性选择器

属性选择器根据一个元素上的某个标签的属性的存在以选择元素的不同方式:

```css
a[title] {
}
```

或者根据一个有特定值的标签属性是否存在来选择:

```css
a[href="https://example.com"]
{
}
```

## 伪类与伪元素

### 伪类

选择器可以包含伪类，用来样式化一个元素的特定状态。

例如 `:hover` 伪类会在鼠标指针悬浮到一个元素上的时候选择这个元素:

```css
a:hover {
}
```

其他的常见伪类还有 `:visited` `:active` `:focus` 等。

### 伪元素

选择器也可以包含伪元素，选择一个元素的某个部分而不是元素自己。

例如 `::first-line` 会选择一个元素(下面的情况中是 `<p>`)中的第一行。

```css
p::first-line {
}
```

其他的常见伪元素还有 `::before` `::after` `::fist-letter` `::last-child` 等。

::: info

关于全部的伪类与伪元素选择器，请见 [菜鸟教程](https://www.runoob.com/cssref/css-selectors.html) 或 [MDN 伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes) [MDN 伪元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements)。

:::

## 通用选择器

通用选择器 `*` 会选中所有元素

## 选择器列表

可以选择多种类型的元素并为它们添加一组相同的样式。将不同的选择器用逗号分开。例如:

```css
p,
li,
.tag,
#link {
  color: red;
}
```

## 运算符

选择器可以通过运算符，构成更加复杂的选择器。

常见的运算符主要有四种:

- 后代选择器

  以空格分隔，用于选取某元素的后代元素

- 子元素选择器

  以大于号 `>` 分隔，只能选择作为某元素子元素的元素

- 相邻兄弟选择器

  加号 `+` 分隔，选择紧接某元素后的另一元素。

- 通用兄弟选择器

  波浪线 `~` 分隔，选择紧接一元素后所有的同级的另一元素

::: tip 选择器案例

- `p{ }`: 为所有 **p** 元素指定一个样式。

- `.marked{ }`: 为所有 **class="marked"** 的元素指定一个样式。

- `.marked p{ }`: 为所有 **class="marked"** 元素内的 **p** 元素指定一个样式。

- `p.marked{ }`: 为所有 **class="marked"** 的 **p** 元素指定一个样式。

:::

::: info

更多高级选择器，请见 [菜鸟教程](https://www.runoob.com/cssref/css-selectors.html) 或 [MDN 参考表](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors#%E9%80%89%E6%8B%A9%E5%99%A8%E5%8F%82%E8%80%83%E8%A1%A8)

:::
