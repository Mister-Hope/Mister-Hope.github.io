---
title: SVG
icon: svg
date: 2019-09-02
category: HTML
order: 6
---

## 矢量图形

在网上，您会和两种类型的图片打交道 — 位图和矢量图:

- 位图使用像素网格来定义。

  一个位图文件精确得包含了每个像素的位置和它的色彩信息。流行的位图格式包括 Bitmap (.bmp), PNG (.png), JPEG (.jpg), and GIF (.gif.)

- 矢量图使用算法来定义。

  一个矢量图文件包含了图形和路径的定义，电脑可以根据这些定义计算出当它们在屏幕上渲染时应该呈现的样子。 SVG 格式可以让我们创造用于 Web 的精彩的矢量图形。

::: tip

矢量图形相较于同样的位图，通常拥有更小的体积，因为它们仅需储存少量的算法，而不是逐个储存每个像素的信息。

:::

## 简介

SVG 是用于描述矢量图像的 XML 语言。它基本上是像 HTML 一样的标记，只是您有许多不同的元素来定义要显示在图像中的形状，以及要应用于这些形状的效果。 SVG 用于标记图形，而不是内容。您可以使用一些元素来创建简单图形，如 `<circle>` 和 `<rect>`。更高级的 SVG 功能包括 `<feColorMatrix>`(使用变换矩阵转换颜色)`<animate>` (矢量图形的动画部分)和 `<mask>`(在图像顶部应用模板)。

::: normal-demo 一个简单的 SVG

```html
<svg
  version="1.1"
  baseProfile="full"
  width="300"
  height="200"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="100%" height="100%" fill="black" />
  <circle cx="150" cy="100" r="90" fill="blue" />
</svg>
```

:::

从上面的例子可以看出，SVG 很容易人工编码。您可以在文本编辑器中手动编写简单的 SVG，但是对于复杂的图像，这就变得非常困难。

为了创建 SVG 图像，大多数人使用矢量图形编辑器，如 Inkscape 或 Illustrator。这些软件包允许您使用各种图形工具创建各种插图，并创建照片的近似值(例如 Inkscape 的跟踪位图功能)。

SVG 除了迄今为止所描述的以外还有其他优点:

- 矢量图像中的文本仍然可访问(这也有利于 SEO)。
- SVG 可以很好地适应样式/脚本，因为图像的每个组件都是可以通过 CSS 或通过 JavaScript 编写的样式的元素。

SVG 也确实有一些缺点:

- SVG 非常容易变得复杂，这意味着文件大小会增加; 复杂的 SVG 也会在浏览器中占用很长的处理时间。
- SVG 可能比栅格图像更难创建，具体取决于您尝试创建哪种图像。
- 旧版浏览器不支持 SVG，(非主要的原因，IE 8 及更低版本，Android 2.3 及更低版本)。

由于上述原因，光栅图形更适合照片那样复杂精密的图像。

## 添加到页面

### `<img>`

要通过 `<img>` 元素嵌入 SVG，您只需要按照预期的方式在 `src` 属性中引用它。您将需要一个 `height` 或 `width` 属性。

::: normal-demo 使用 img 插入 SVG

```html
<img
  src="/assets/img/vuepress-hope-logo.svg"
  alt="vuepress-theme-hope"
  height="87px"
  width="100px"
/>
```

:::

**优点**:

- 快速，熟悉的图像语法与 `alt` 属性中提供的内置文本等效。
- 可以通过在 `<a>` 元素嵌套 `<img>`，使图像轻松地成为超链接。

**缺点**:

- 无法使用 JavaScript 操作图像。
- 如果要使用 CSS 控制 SVG 内容，则必须在 SVG 代码中包含内联 CSS 样式。 (从 SVG 文件调用的外部样式表不起作用)
- 不能用 CSS 伪类来重设图像样式 (如 `:focus`)。

### 兼容

对于不支持 SVG (IE 8 及更低版本，Android 2.3 及更低版本) 的浏览器，您可以从 `src` 属性引用 PNG 或 JPG，并使用 `srcset` 属性来引用 SVG。 在这种情况下，支持的浏览器将加载 SVG，而较旧的浏览器将加载 PNG:

::: normal-demo 兼容上古浏览器

```html
<img
  src="/assets/img/vuepress-hope-logo.png"
  alt="vuepress-theme-hope"
  srcset="/assets/img/vuepress-hope-logo.svg"
  width="100px"
/>
```

:::

您还可以使用 SVG 作为 CSS 背景图像，如下所示。 在下面的代码中，旧版浏览器会坚持他们理解的 PNG，而较新的浏览器将加载 SVG:

```css
 {
  background: url("fallback.png") no-repeat center;
  background-image: url("image.svg");
  background-size: contain;
}
```

像上面描述的 `<img>` 方法一样，使用 CSS 背景图像插入 SVG 意味着它不能被 JavaScript 操作，并且也受到相同的 CSS 限制。

### HTML

您可以直接将 SVG 代码插入 HTML 文档中，这称为内联 SVG。确保您的 SVG 代码在 `<svg></svg>` 标签中(不要在外面添加任何内容)。

::: normal-demo 案例

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

:::

**优点**:

- 将 SVG 内联减少 HTTP 请求，可以减少加载时间。
- 您可以为 SVG 元素分配 class 和 id，并使用 CSS 修改样式，无论是在 SVG 中，还是 HTML 文档中的 CSS 样式规则。 实际上，您可以使用任何 SVG 外观属性 作为 CSS 属性。
- 内联 SVG 是唯一可以让您在 SVG 图像上使用 CSS 交互(如 `:focus`)和 CSS 动画的方法(即使在常规样式表中)。
- 您可以通过将 SVG 标记包在 `<a>` 元素中，使其成为超链接。

**缺点**:

- 这种方法只适用于在一个地方使用的 SVG。多次使用会导致资源密集型维护(resource-intensive maintenance)。
- 额外的 SVG 代码会增加 HTML 文件的大小。
- 浏览器不能像缓存普通图片一样缓存内联 SVG。
- 您可能会在 `<foreignObject>` 元素中包含回退，但支持 SVG 的浏览器仍然会下载任何后备图像。您需要考虑仅仅为支持过时的浏览器，而增加额外开销是否真的值得。

::: tip 总结

在 2023 年，显然内联 SVG 更加适合。

:::
