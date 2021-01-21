---
title: 媒体查询
icon: search
time: 2019-09-05
category: CSS
tags:
  - CSS
---

**媒体查询** (Media queries) 非常实用，尤其是当您想要根据设备的大致类型 (如打印设备与带屏幕的设备) 或者特定的特征和设备参数 (例如屏幕分辨率和浏览器视窗宽度) 来修改网站或应用程序时。

<!-- more -->

媒体查询常被用于以下目的:

- 有条件的通过 `@media` 和 `@import` 用 CSS 装饰样式。
- 用`media=` 属性为 `<style>`, `<link>`, `<source>` 和其他 HTML 元素指定特定的媒体类型。如:

  ```html
  <link rel="stylesheet" src="styles.css" media="screen" />
  <link rel="stylesheet" src="styles.css" media="print" />
  ```

- 使用 `Window.matchMedia()` 和 `MediaQueryList.addListener()` 方法来测试和监控媒体状态。

## 语法

每条媒体查询语句都由一个可选的媒体类型和任意数量的媒体特性表达式构成。可以使用多种逻辑操作符合并多条媒体查询语句。媒体查询语句不区分大小写。

当媒体类型(如果指定)与在其上显示文档的设备匹配并且所有媒体功能表达式都计算为 `true` 时，媒体查询将计算为 `true`。涉及未知媒体类型的查询始终为 `false`。

::: warning

有媒体查询附加到其 `<link>`的样式表在媒体查询返回 `false` 时也会下载。只有查询结果变为 `true` 时才会应用内容。

:::

### 媒体类型

媒体类型(Media types)描述设备的一般类别。除非使用 `not` 或 `only` 逻辑操作符，媒体类型是可选的，并且会(隐式地)应用 `all` 类型。

- **all**: 适用于所有设备。
- **print**: 适用于在打印预览模式下在屏幕上查看的分页材料和文档。
- **screen**: 主要用于屏幕。
- **speech**: 主要用于语音合成器。

### 媒体特性

媒体特性(Media features)描述了 user agent、输出设备，或是浏览环境的具体特征。媒体特性表达式是完全可选的，它负责测试这些特性或特征是否存在、值为多少。每条媒体特性表达式都必须用括号括起来。

| 名称                         | 简介                                                                                       | 备注                                |
| ---------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------- |
| any-hover                    | 是否有任何可用的输入机制允许用户(将鼠标等)悬停在元素上?                                    | 在 Media Queries Level 4 中被添加。 |
| any-pointer                  | 可用的输入机制中是否有任何指针设备，如果有，它的精度如何?                                  | 在 Media Queries Level 4 中被添加。 |
| aspect-ratio                 | 视窗(viewport)的宽高比                                                                     |
| color                        | 输出设备每个像素的比特值，常见的有 8、16、32 位。如果设备不支持输出彩色，则该值为 0        |
| color-gamut                  | 用户代理和输出设备大致程度上支持的色域                                                     | 在 Media Queries Level 4 中被添加。 |
| color-index                  | 输出设备的颜色查询表(color lookup table)中的条目数量，如果设备不使用颜色查询表，则该值为 0 |
| display-mode                 | 应用程序的显示模式，如 web app 的 manifest 中的 display 成员所指定                         | 在 Web App Manifest spec 被定义.    |
| forced-colors                | 检测是 user agent 否限制调色板                                                             | 在 Media Queries Level 5 中被添加。 |
| grid                         | 输出设备使用网格屏幕还是点阵屏幕?                                                          |
| height                       | 视窗(viewport)的高度                                                                       |
| hover                        | 主要输入模式是否允许用户在元素上悬停                                                       | 在 Media Queries Level 4 中被添加。 |
| inverted-colors              | user agent 或者底层操作系统是否反转了颜色                                                  | 在 Media Queries Level 5 中被添加。 |
| light-level                  | 环境光亮度                                                                                 | 在 Media Queries Level 5 中被添加。 |
| monochrome                   | 输出设备单色帧缓冲区中每个像素的位深度。如果设备并非黑白屏幕，则该值为 0                   |
| orientation                  | 视窗(viewport)的旋转方向                                                                   |
| overflow-block               | 输出设备如何处理沿块轴溢出视窗(viewport)的内容                                             | 在 Media Queries Level 4 中被添加。 |
| overflow-inline              | 沿内联轴溢出视窗(viewport)的内容是否可以滚动?                                              | 在 Media Queries Level 4 中被添加。 |
| pointer                      | 主要输入机制是一个指针设备吗?如果是，它的精度如何?                                         | 在 Media Queries Level 4 中被添加。 |
| prefers-color-scheme         | 探测用户倾向于选择亮色还是暗色的配色方案                                                   | 在 Media Queries Level 5 中被添加。 |
| prefers-contrast             | 探测用户是否有向系统要求提高或降低相近颜色之间的对比度                                     | 在 Media Queries Level 5 中被添加。 |
| prefers-reduced-motion       | 用户是否希望页面上出现更少的动态效果                                                       | 在 Media Queries Level 5 中被添加。 |
| prefers-reduced-transparency | 用户是否倾向于选择更低的透明度                                                             | 在 Media Queries Level 5 中被添加。 |
| resolution                   | 输出设备的像素密度(分辨率)                                                                 |
| scan                         | 输出设备的扫描过程(适用于电视等)                                                           |
| scripting                    | 探测脚本(例如 JavaScript)是否可用                                                          | 在 Media Queries Level 5 中被添加。 |
| update                       | 输出设备更新内容的渲染结果的频率                                                           | 在 Media Queries Level 4 中被添加。 |
| width                        | 视窗(viewport)的宽度，包括纵向滚动条的宽度                                                 |                                     |

### 逻辑操作符

逻辑操作符(logical operators) `not`, `and`, 和 `only` 可用于联合构造复杂的媒体查询，您还可以通过用逗号分隔多个媒体查询，将它们组合为一个规则。

#### and

`and` 操作符用于将多个媒体查询规则组合成单条媒体查询，当每个查询规则都为真时则该条媒体查询为真，它还用于将媒体功能与媒体类型结合在一起。

#### not

`not` 运算符用于否定媒体查询，如果不满足这个条件则返回 `true`，否则返回 `false`。如果出现在以逗号分隔的查询列表中，它将仅否定应用了该查询的特定查询。如果使用 `not` 运算符，则还必须指定媒体类型。

#### only

`only` 运算符仅在整个查询匹配时才用于应用样式，并且对于防止较早的浏览器应用所选样式很有用。当不使用 `only` 时，旧版本的浏览器会将 `screen and (max-width: 500px)` 简单地解释为 `screen`，忽略查询的其余部分，并将其样式应用于所有屏幕。如果使用 `only`运算符，则还必须指定媒体类型。

#### , (逗号)

逗号用于将多个媒体查询合并为一个规则。逗号分隔列表中的每个查询都与其他查询分开处理。因此，如果列表中的任何查询为 true，则整个 media 语句均返回 true。换句话说，列表的行为类似于逻辑或 or 运算符。

## 定位媒体类型

媒体类型描述了给定设备的一般类别。尽管通常在设计网站时会考虑屏幕，但您可能希望创建针对特殊设备(例如打印机或基于音频的屏幕阅读器)的样式。例如，此 CSS 针对打印机:

```css
@media print {
  ...;
}
```

您还可以定位多个设备。例如，此 `@media` 规则使用两个媒体查询来同时定位屏幕和打印设备

```css
@media screen, print {
  ...;
}
```

## 定位媒体特性

媒体功能描述了给定的 user agent 的输出设备或环境的特定特征。例如，您可以将特定样式应用于宽屏显示器，使用鼠标的计算机，或应用于在弱光条件下使用的设备。当用户的主要输入机制(例如鼠标)可以悬停在元素上时，如下为一个示例:

```css
@media (hover: hover) {
  ...;
}
```

许多媒体功能都是范围功能，这意味着可以在它们前面加上“最小”或“最大”来表示“最小条件”或“最大条件”约束。例如，仅当您的浏览器的 viewport 宽度等于或小于 12450px 时，此 CSS 才会应用样式:

```css
@media (max-width: 12450px) {
  ...;
}
```

如果您在未指定值的情况下创建媒体功能查询，则该样式将全部被应用，只要该查询的值不为零即可。例如，此 CSS 将适用于任何带有彩色屏幕的设备:

```css
@media (color) {
  ...;
}
```

如果某个功能不适用于运行浏览器的设备，则涉及该媒体功能的表达式始终为 `false`。例如，将不会使用嵌套在以下查询中的样式，因为没有语音专用设备具有屏幕长宽比:

```css
@media speech and (aspect-ratio: 11/5) {
  ...;
}
```

## 创建复杂查询

有时您可能想创建一个取决于多个条件的媒体查询。这就是逻辑运算符使用的场景: `not`，`and`，和 `only`。此外，您可以将多个媒体查询合并到一个逗号分隔的列表中。这使您可以在不同情况下应用相同的样式。

在前面的示例中，我们已经看到 `and` 运算符用于将媒体类型与媒体功能分组。`and` 运算符还可以将多个媒体功能组合到单个媒体查询中。同时， `not` 运算符会否定媒体查询，从而基本上颠倒了它的正常含义。唯一的运算符可防止较早的浏览器应用样式。

::: warning

在大多数情况下，默认情况下，如果未指定其他类型，则使用 `all` 媒体类型。但是，如果使用 `not` 或 `only` 运算符，则必须显式指定媒体类型。

:::

### 结合多种类型和特性

`and` 关键字将媒体功能与媒体类型或其他媒体功能组合在一起。此示例结合了两种媒体功能，以将样式限制为宽度至少为 30em 的横向的设备:

```css
@media (min-width: 30em) and (orientation: landscape) {
  ...;
}
```

要将样式限制为带有屏幕的设备，可以将媒体功能链接到 screen 媒体类型:

```css
@media screen and (min-width: 30em) and (orientation: landscape) {
  ...;
}
```

### 测试多重查询

当用户的设备与各种媒体类型，功能或状态中的任何一种匹配时，可以使用逗号分隔的列表来应用样式。例如，如果用户设备的最小高度为 680px 或为纵向模式的屏幕设备，则以下规则将应用其样式:

```css
@media (min-height: 680px), screen and (orientation: portrait) {
  ...;
}
```

以上面的示例为例，如果用户使用的打印机的页面高度为 800 像素，则 media 语句将返回 `true`，因为将应用第一个查询。同样，如果用户使用的是纵向模式的智能手机，并且视口高度为 480px，则将应用第二个查询，并且 media 语句仍将返回 `true`。

### 反转查询的含义

`not` 关键字会反转整个媒体查询的含义。它只会否定要应用的特定媒体查询。(因此，它不会应用于以逗号分隔的媒体查询列表中的每个媒体查询。)`not` 关键字不能用于否定单个功能查询，只能用于否定整个媒体查询。看看以下`not`关键字的例子:

```css
@media not all and (monochrome) {
  ...;
}
```

所以上述查询等价于:

```css
@media not (all and (monochrome)) {
  ...;
}
```

而不是:

```css
@media (not all) and (monochrome) {
  ...;
}
```

再看另一个例子，如下媒体查询:

```css
@media not screen and (color), print and (color) {
  ...;
}
```

等价于:

```css
@media (not (screen and (color))), print and (color) {
  ...;
}
```

### 提升老版本浏览器兼容性

`only` 关键字可防止不支持带有媒体功能的媒体查询的旧版浏览器应用给定的样式。它对现代浏览器没有影响。

```css
@media only screen and (color) {
  ...;
}
```

## 版本 4 中的语法改进

媒体查询 4 级规范对语法进行了一些改进，以使用具有“范围”类型(例如宽度或高度，减少冗余)的功能进行媒体查询。级别 4 添加了用于编写此类的查询范围上下文。例如，使用最大宽度 `max-` 功能，我们可以编写以下代码:

```css
@media (max-width: 30em) {
  ...;
}
```

在媒体查询 4 级规范可以这样写:

```css
@media (width <= 30em) {
  ...;
}
```

使用 `min-` 和 `max-` 可以测试一个在两个值之间的宽度

```css
@media (min-width: 30em) and (max-width: 50em) {
  ...;
}
```

用 4 级语法书写如下

```css
@media (30em <= width <= 50em) {
  ...;
}
```

媒体查询 4 级规范还添加了用 `and`, `not`, 和 `or` 实现的完整的布尔运算来合并媒体查询的方法。

### 使用 `not` 否定一个特性

在媒体功能周围使用 `not()` 会否定查询中的该特性。例如，如果设备没有悬停功能，则 `not(hover)` 将被匹配:

```css
@media (not(hover)) {
  ...;
}
```

### 用 `or` 测试多个特性

您可以使用 `or` 测试多个功能之间的匹配，如果任何功能为 `true`，则解析为 `true`。例如，以下查询测试具有单色显示或悬停功能的设备:

```css
@media (not (color)) or (hover) {
  ...;
}
```
