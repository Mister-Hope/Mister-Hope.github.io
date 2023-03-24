---
title: 表格
icon: table
date: 2019-09-02
category: HTML
order: 8
---

表格是由行和列组成的结构化数据集(表格数据)，它能够使您简捷迅速地查找某个表示不同类型数据之间的某种关系的值。

表格的一个特点就是严格. 通过在行和列的标题之间进行视觉关联的方法，就可以让信息能够很简单地被解读出来。

## 常见误区

HTML 表格应该用于表格数据 ，这正是 HTML 表格设计出来的用途。请不要用它来进行布局。

使用表格而不是 CSS 布局的缺点:

1. 表格布局减少了视觉受损的用户的可访问性:

   屏幕阅读器, 被盲人所使用, 解析存在于 HTML 页面上的标签，然后为用户读出其中的内容。因为对于布局来说，表格不是一个正确的工具，使用的标记比使用 CSS 布局技术更复杂, 所以屏幕阅读器的输出会让他们的用户感到困惑。

1. 表格会产生很多标签:

   正如刚才提到的, 表格布局通常会比正确的布局技术涉及更复杂的标签结构，这会导致代码变得更难于编写、维护、调试.

1. 表格不能自动响应:

   当您使用正确的布局容器 (比如 `<header>`, `<section>`, `<article>`, 或是 `<div>`), 它们的默认宽度是父元素的 `100%`. 而表格的的默认大小是根据其内容而定的。因此，需要采取额外的措施来获取表格布局样式，以便有效地在各种设备上工作。

## 使用表格

- 使用 `<table></table>` 构建表格。
- 在表格中，最小的内容容器是单元格, 是通过 `<td>` 元素创建的 (td 代表 table data)，同时使用 `<th>` 元素 (th 代表 table header) 描述表格标题，它是一个特殊的单元格。
- 使用 `<tr>` 元素 (tr 代表 table row) 描述一行表格

## 合并单元格

表格中的标题和单元格有 `colspan` 和 `rowspan` 属性，这两个属性可以帮助我们实现这些效果。这两个属性接受一个没有单位的数字值，数字决定了它们的宽度或高度是几个单元格。比如 `colspan="2"` 使一个单元格的宽度是两个单元格。

::: tip 规则

当单元格额外占据其他单元格位置时。表格会在渲染时自动跳过他们放置其他单元格。

:::

## 为列提供共同的样式

HTML 有一种方法可以定义整列数据的样式信息: 就是 `<col>` 和 `<colgroup>` 元素。

如果您想让一列中的每个数据的样式都一样，那么您就要为每个数据都添加一个样式，这样的做法是令人厌烦和低效的。您通常需要在列中的每个 `<td>` 或 `<th>` 上定义样式，或者使用一个复杂的选择器，比如 `:nth-child()`。为了舍弃这种做法，我们可以只定义一次，在 `<col>` 元素中。`<col>` 元素被规定包含在 `<colgroup>` 容器中，而 `<colgroup>` 就在 `<table>` 标签的下方。

::: normal-demo 样式化表格

```html
<table>
  <colgroup>
    <col />
    <col style="background-color: yellow" />
  </colgroup>
  <tr>
    <th>Data 1</th>
    <th>Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td>Orange</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td>Jazz</td>
  </tr>
</table>
```

:::

我们使用了两个 `<col>` 来定义“列的样式”，每一个 `<col>` 都会制定每列的样式，对于第一列，我们没有采取任何样式，但是我们仍然需要添加一个空的 `<col>` 元素，如果不这样做，那么我们的样式就会应用到第一列上，这和我们预想的不一样。

如果您想把这种样式信息应用到每一列，我们可以只使用一个 `<col>` 元素，不过需要包含 `span` 属性，像这样:

```html
<colgroup>
  <col style="background-color: yellow" span="2" />
</colgroup>
```

`rowspan` 就像 `colspan`, `span` 需要一个无单位的数字值，用来制定您想要让这个样式应用到表格中多少列

::: normal-demo 样式化表格

```html
<table>
  <colgroup>
    <col span="2" />
    <col style="background-color:#97DB9A;" />
    <col style="width:42px;" />
    <col style="background-color:#97DB9A;" />
    <col style="background-color:#DCC48E; border:4px solid #C1437A;" />
    <col span="2" style="width:42px;" />
  </colgroup>
  <tr>
    <td>&nbsp;</td>
    <th>Mon</th>
    <th>Tues</th>
    <th>Wed</th>
    <th>Thurs</th>
    <th>Fri</th>
    <th>Sat</th>
    <th>Sun</th>
  </tr>
  <tr>
    <th>1st period</th>
    <td>English</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>German</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>2nd period</th>
    <td>English</td>
    <td>English</td>
    <td>&nbsp;</td>
    <td>German</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>3rd period</th>
    <td>&nbsp;</td>
    <td>German</td>
    <td>&nbsp;</td>
    <td>German</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <th>4th period</th>
    <td>&nbsp;</td>
    <td>English</td>
    <td>&nbsp;</td>
    <td>English</td>
    <td>Dutch</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
</table>
```

:::

## 添加标题 `<caption>`

您可以通过 `<caption>` 元素为您的表格增加一个标题。

您应该把 `<caption>` 元素放入 `<table>` 元素中，`<table>` 标签的下面。

```html
<table>
  <caption>
    Dinosaurs in the Jurassic period
  </caption>

  ...
</table>
```

标题意味着包含对于表格内容的描述，这对那些希望可以快速浏览网页中的表格对他们是否有帮助的读者们来说，是非常好的功能。特别是盲人用户，不需要让屏幕阅读设备读出很多单元格的内容，来让用户了解这张表格讲的是什么，而是可以依靠标题的内容，来决定是否需要了解更详细的内容。

## 结构化

使用 `<thead>`, `<tfoot>`,和 `<tbody>` 可以结构化表格。这些元素允许您把表格中的部分标记为表头、页脚、正文部分。

在长表格的情况下，您可以在每个打印页面上使表格页眉和页脚重复，您也可以让表格的正文部分显示在一个单独的页面上，并通过上下滚动来获得内容。

- `<thead>` 需要嵌套在 table 元素中，放置在头部的位置，因为它通常代表第一行，第一行中往往都是每列的标题，但是不是每种情况都是这样的。如果您使用了 `<col>/<colgroup>` 元素，那么 `<thead>` 元素就需要放在它们的下面。
- `<tfoot>` 需要嵌套在 table 元素中，放置在底部 (页脚)的位置，一般是最后一行，往往是对前面所有行的总结，比如，您可以按照预想的方式将 `<tfoot>` 放在表格的底部，或者就放在 `<thead>` 的下面。(浏览器仍将它呈现在表格的底部)
- `<tbody>` 需要嵌套在 table 元素中，放置在 `<thead>` 的下面或者是 `<tfoot>` 的下面，这取决于您如何设计您的结构。(`<tfoot>` 放在 `<thead>` 下面也可以生效.)

::: warning

`<tbody>` 总是包含在每个表中，如果您没有在代码中指定它，那就是隐式的。可以来验证一下，打开一个没有包含 `<tbody>` 的网页，然后在开发者工具中查看代码，您会看到浏览器为您添加了这个标签。它可以让您更好地控制表格结构和样式。

:::

## 嵌套表格

在一个单元格中可以嵌套里另一个表格，但是这会让用户 (尤其是使用阅读器的盲人) 非常困惑，您更应该用锚点与引用的方式去避免嵌套表格。

## 屏幕阅读增强

视力受损的用户经常使用一个屏幕阅读设备来为他们读出网页上的信息。对于盲人来说，阅读简单的文字没有什么问题，但是要理解一张表格的内容，这就有一些难度了。虽然，使用正确的标记，我们可以用程序化来代替视觉关联。

### 使用列和行的标题

屏幕阅读设备会识别所有的标题，然后在它们和它们所关联的单元格之间产生编程关联。列和行标题的组合将标识和解释每个单元格中的数据，以便屏幕阅读器用户可以类似于视力正常的用户的操作来理解表格。

### scope 属性

scope 属性可以添加在 `<th>` 元素中，用来帮助屏幕阅读设备更好地理解那些标题单元格，这个标题单元格到底是列标题呢，还是行标题。

::: tip 案例

一个表头:

```html
<thead>
  <tr>
    <th scope="col">Purchase</th>
    <th scope="col">Location</th>
    <th scope="col">Date</th>
    <th scope="col">Evaluation</th>
    <th scope="col">Cost (€)</th>
  </tr>
</thead>
```

一个有行标题的行:

```html
<tr>
  <th scope="row">Haircut</th>
  <td>Hairdresser</td>
  <td>12/09</td>
  <td>Great idea</td>
  <td>30</td>
</tr>
```

:::

scope 还有两个可选的值 `colgroup` 和 `rowgroup`。这些用于位于多个列或行的顶部的标题，以配合 `colspan` 和 `rowspan`。

### id 和标题属性

如果要替代 scope 属性，可以使用 id 和 headers 属性来创造标题与单元格之间的联系。使用方法如下:

- 为每个 `<th>` 元素添加一个唯一的 id 。
- 为每个 `<td>` 元素添加一个 `headers` 属性。每个单元格的 `headers` 属性需要包含它从属于的所有标题的 id，之间用空格分隔开。

这会给您的 HTML 表格中每个单元格的位置一个明确的定义。像一个电子表格一样，通过 headers 属性来定义属于哪些行或列。为了让它工作良好，表格同时需要列和行标题。

```html
<thead>
  <tr>
    <th id="purchase">Purchase</th>
    <th id="location">Location</th>
    <th id="date">Date</th>
    <th id="evaluation">Evaluation</th>
    <th id="cost">Cost (€)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th id="haircut">Haircut</th>
    <td headers="location haircut">Hairdresser</td>
    <td headers="date haircut">12/09</td>
    <td headers="evaluation haircut">Great idea</td>
    <td headers="cost haircut">30</td>
  </tr>

  ...
</tbody>
```
