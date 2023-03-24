---
title: 格式化
icon: format
date: 2019-09-02
category: HTML
order: 10
---

HTML 中有许多其他元素可以用于格式化文本。本文介绍标记引文、描述列表、计算机代码和其他相关文本、下标和上标、联系信息等。

<!-- more -->

## 描述列表

在 HTML 基础部分，我们说 HTML 有三种列表。第三种类型的列表叫**描述列表** (description list)。这种列表的目的是标记一组项目及其相关描述，例如术语和定义，或者是问题和答案等。让我们看一组术语和定义的示例:

```text
内心独白
戏剧中，某个角色对自己的内心活动或感受进行念白表演，这些台词只面向观众，而其他角色不会听到。
语言独白
戏剧中，某个角色把自己的想法直接进行念白表演，观众和其他角色都可以听到。
旁白
戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。
```

描述列表使用与其他列表类型不同的闭合标签 `<dl>`; 此外，每一项都用 `<dt>` (description term) 元素闭合。每个描述都用 `<dd>` (description description) 元素闭合.

::: normal-demo 描述列表

```html
<dl>
  <dt>内心独白</dt>
  <dd>
    戏剧中，某个角色对自己的内心活动或感受进行念白表演，这些台词只面向观众，而其他角色不会听到。
  </dd>
  <dt>语言独白</dt>
  <dd>
    戏剧中，某个角色把自己的想法直接进行念白表演，观众和其他角色都可以听到。
  </dd>
  <dt>旁白</dt>
  <dd>
    戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。
  </dd>
</dl>
```

:::

浏览器的默认样式会在描述列表的**描述部分**(description description)和**描述术语**(description terms)之间产生缩进。MDN 非常严密地遵循这一惯例，同时也鼓励关于术语的其他更多的定义。

::: tip

一个术语 `<dt>` 可以同时有多个描述 `<dd>`。

:::

## 引用

HTML 也有用于标记引用的特性，至于使用哪个元素标记，取决于您引用的是一块还是一行。

### 块引用

如果一个块级内容(一个段落、多个段落、一个列表等)从其他地方被引用，您应该把它用 `<blockquote>` 元素包裹起来表示，并且在 `cite` 属性里用 URL 来指向引用的资源。

### 行内引用

行内元素需要使用 `<q>` 元素。浏览器默认将其作为普通文本放入引号内表示引用

### 引文

`cite` 属性内容不会被浏览器显示、屏幕阅读器阅读，需使用 JavaScript 或 CSS，浏览器才会显示 `cite` 的内容。如果您想要确保引用的来源在页面上是可显示的，最好使用 `<cite>` 元素。

::: normal-demo 引文案例

```html
<p>
  According to the
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote"
  >
    <cite>MDN blockquote page</cite></a
  >:
</p>

<blockquote
  cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote"
>
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>

<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q"
    >intended for short quotations that don't require paragraph breaks.</q
  >
  --
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">
    <cite>MDN q page</cite></a
  >.
</p>
```

:::

## 缩略语

`<abbr>` 用来包裹一个缩略语或缩写，并且提供缩写的解释(包含在 `title` 属性中)。

::: normal-demo 缩略语

```html
<p>
  我们使用
  <abbr title="超文本标记语言(Hypertext Markup Language)">HTML</abbr>
  来组织网页文档。
</p>

<p>
  第 33 届 <abbr title="夏季奥林匹克运动会">奥运会</abbr> 将于 2024 年 8
  月在法国巴黎举行。
</p>
```

:::

## 标记联系方式

`<address>` 用于标记联系方式，它仅仅包含您的联系方式。

::: normal-demo 标记联系方式

```html
<address>
  <p>Chris Mills, Manchester, The Grim North, UK</p>
</address>
```

:::

::: warning

`<address>` 元素是为了标记编写 HTML 文档的人的联系方式，而不是任何其他的内容。

:::

## 上标和下标

当您使用日期、化学方程式、和数学方程式时会偶尔使用上标和下标。`<sup>` 和 `<sub>` 元素可以解决这样的问题。

::: normal-demo 上标和下标

```html
<p>
  咖啡因的化学方程式是 C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>。
</p>
<p>如果 x<sup>2</sup> 的值为 9，那么 x 的值必为 3 或 -3。</p>
```

:::

## 展示计算机代码

有大量的 HTML 元素可以来标记计算机代码:

- `<code>`: 用于标记计算机通用代码。
- `<pre>`: 用于保留空白字符(通常用于代码块)——如果您在文本中使用缩进或多余的空白，浏览器将忽略它，您将不会在呈现的页面上看到它。但是，如果您将文本- 包含在 `<pre></pre>` 标签中，那么空白将会以与您在文本编辑器中看到的相同的方式渲染出来。
- `<var>`: 用于标记具体变量名。
- `<kbd>`: 用于标记输入电脑的键盘(或其他类型)输入。
- `<samp>`: 用于标记计算机程序的输出。

## 标记时间和日期

HTML 还支持将时间和日期标记为可供机器识别的格式的 `<time>` 元素。例如:

```html
<time datetime="2016-01-20">2016年1月20日</time>
```

为什么需要这样做? 因为世界上有许多种书写日期的格式，上边的日期可能被写成:

- 20 January 2016
- 20th January 2016
- Jan 20 2016
- 20/06/16
- 06/20/16
- The 20th of next month
- 20e Janvier 2016
- 2016 年 1 月 20 日

但是这些不同的格式不容易被电脑识别 — 假如您想自动抓取页面上所有事件的日期并将它们插入到日历中，`<time>` 元素允许您附上清晰的、可被机器识别的 时间/日期来实现这种需求。

上述基本的例子仅仅提供了一种简单的可被机器识别的日期格式，这里还有许多其他支持的格式。

::: normal-demo 标记时间

```html
<!-- 标准简单日期 -->
<time datetime="2016-01-20">20 January 2016</time>
<!-- 只包含年份和月份-->
<time datetime="2016-01">January 2016</time>
<!-- 只包含月份和日期 -->
<time datetime="01-20">20 January</time>
<!-- 只包含时间，小时和分钟数 -->
<time datetime="19:30">19:30</time>
<!-- 还可包含秒和毫秒 -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- 日期和时间 -->
<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
<!-- 含有时区偏移值的日期时间 -->
<time datetime="2016-01-20T19:30+01:00"
  >7.30pm, 20 January 2016 is 8.30pm in France</time
>
<!-- 调用特定的周 -->
<time datetime="2016-W04">The fourth week of 2016</time>
```

:::
