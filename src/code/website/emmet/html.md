---
title: HTML Emmet
icon: html
date: 2019-09-03
category: Emmet
tag:
  - 快捷键
  - HTML
---

## 元素创建

1. 在编辑器中输入元素名称之后按下 tab 即可自动补全生成 HTML 标签，即使不是标准的 HTML 标签。

::: tip 创建文档

输入: `!` 或者 `html:5` 将创建 HTML 基本结构。

:::

## 结构操作

### 子元素

使用 `>` 生成子元素

::: details 案例

`div>ul>li`:

```html
<div>
  <ul>
    <li></li>
  </ul>
</div>
```

:::

### 兄弟元素

使用 `+` 生成兄弟元素

::: details 案例

`div+p+bq`:

```html
<div></div>
<p></p>
<blockquote></blockquote>
```

:::

### 上移

使用 `^` 上移一级

::: details 案例

`div+div>p>span+em^bq`:

```html
<div></div>
<div>
  <p><span></span><em></em></p>
  <blockquote></blockquote>
</div>
```

:::

### 重复

使用 `*` 生成多个相同元素。

::: details 案例

`div>ul>li*5`:

```html
<div>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
```

:::

### 分组

使用 `()` 将元素分组

::: details 案例

`+` 后面的元素与括号中的第一个元素属于兄弟关系

`div>(header>ul>li*2)+footer>p`:

```html
<div>
  <header>
    <ul>
      <li></li>
      <li></li>
    </ul>
  </header>
  <footer>
    <p></p>
  </footer>
</div>
```

:::

## 属性操作

### ID 与 class

元素与 `id` 属性值之间用 `#` 分隔，与 `class` 属性值之间用 `.` 分隔

::: details 案例

`div#header+div.page+div#footer.class1.class2.class3`:

```html
<div id="header"></div>
<div class="page"></div>
<div id="footer" class="class1 class2 class3"></div>
```

:::

### 自定义属性

在 Emmet 中，使用 `[]` 标记其他属性。

您无需输入引号，直接使用 `[属性1=值1 属性2=值2 ... ]` 即可。

- 您可以在方括号内放置任意数量的属性。

- 您不必指定属性值: `td[colspan title]` 会生成 `<td colspan="" title="">`。

  接下来您可以通过按下 tab 将光标顺序移动至每个空属性内，这会让您很方便的输入内容。

- 您可以使用单引号或双引号来引用属性值。如果值不包含空格，则无需引用它们。如: `td[title=hello colspan=3]`

::: details 案例

`td[title="Hello world!" colspan=3]`:

```html
<td title="Hello world!" colspan="3"></td>
```

:::

### 项目编号

用 `$` 符号实现 `1` 到 `n` 的自动编号 (`*` 实现多个元素)

::: details 案例

`li.item$*3`:

```html
<li class="item1"></li>
<li class="item2"></li>
<li class="item3"></li>
```

:::

可在 `$` 后添加 `@n` 修改编号的起始值为 `n`。

::: details 案例

`li.item$@3*3`:

```html
<li class="item3"></li>
<li class="item4"></li>
<li class="item5"></li>
```

:::

可在 “`$`” 后添加 “`@-`” 修改编号的方向。

::: details 案例

`li.item$@-3*3`:

```html
<li class="item5"></li>
<li class="item4"></li>
<li class="item3"></li>
```

:::

您可以连续使用多个 `$` 以零填充数字。

::: details 案例

`ul>li.item$$$*5`:

```html
<ul>
  <li class="item001"></li>
  <li class="item002"></li>
  <li class="item003"></li>
  <li class="item004"></li>
  <li class="item005"></li>
</ul>
```

:::

### 文本

使用 `{}` 添加文本内容

::: details 案例

`a[href=me.html]{click me}`:

```html
<a href="me.html">click me</a>
```

:::

::: warning

请注意，`{text}` 是作为一个单独的元素使用和解析的。

请理解以下案例:

```html
<!-- a{click}+b{here} -->
<a href="">click</a><b>here</b>

<!-- a>{click}+b{here} -->
<a href="">click<b>here</b></a>

<!-- p>{Click }+a{here}+{ to continue} -->

<p>Click <a href="">here</a> to continue</p>
```

:::

## 隐式标签名称

即使使用功能强大的缩写引擎(可以从短缩写扩展大型 HTML 结构)，编写标签名称也可能非常繁琐。

在许多情况下，您可以跳过键入标签名称的操作，而 Emmet 会自动为您生成一个。例如，您可以简单地将 `div.content` 写为 `.content`，Emmet 将自动扩展为 `<div class="content"></div>`。

### 工作原理

扩展缩写词时，Emmet 会尝试在其内部扩展缩写词的地方获取上下文进行推断。如果成功捕获了上下文，Emmet 将使用其名称来解析隐式名称。

::: details 案例

| Emmet 缩写                  | Emmet 实际输出                  |
| --------------------------- | ------------------------------- |
| `.wrap>.content`            | `div.wrap>div.content`          |
| `em>.info`                  | `em>span.info`                  |
| `ul>.item*3`                | `ul>li.item*3`                  |
| `table>#row$*4>[colspan=2]` | `table>tr#row$*4>td[colspan=2]` |

:::

## Lorem Ipsum 生成

`lorem` 是一个示例词的生成器，您可以很方便的生成一些预设文字查看效果。它会自动根据标签调整文字数量，并在重复时轮换输出。

::: details 案例

`p*4>lorem`:

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus
  molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias
  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
</p>
<p>
  Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore
  recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at
  neque quos facere sequi unde optio aliquam!
</p>
<p>
  Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro
  quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio
  nam nulla unde amet odit pariatur at!
</p>
<p>
  Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil
  explicabo perferendis quos provident delectus ducimus necessitatibus
  reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel
  odio?
</p>
```

`ul.generic-list>lorem10.item*4`:

```html
<ul class="generic-list">
  <li class="item">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.
  </li>
  <li class="item">
    Laboriosam quaerat sapiente minima nam minus similique illum architecto et!
  </li>
  <li class="item">
    Incidunt vitae quae facere ducimus nostrum aliquid dolorum veritatis dicta!
  </li>
  <li class="item">
    Tenetur laborum quod cum excepturi recusandae porro sint quas soluta!
  </li>
</ul>
```

:::

## 其他内容

某些元素(例如 a 或)img 会转换为具有预定义属性的元素: `<a href=""></a>` 和 `<img src="" alt="" />`。

同时 emmet 还包含了一些常用缩写，如 `bq` 会输出 `<blockquote></blockquote>`。

这些功能是通过预置的 snippets 实现的。

::: info

部分 snippets 内容:

```json
...
{
  "a": "a[href]",
  "img": "img[src alt]/",
  "bq": "blockquote",
  "fig": "figure",
  "cap": "caption",
  "pic": "picture",
  "mn": "main",
  "!!!": "{<!DOCTYPE html>}",
  "doc": "html[lang=${lang}]>(head>meta[charset=${charset}]+meta:vp+title{${1:Document}})+body",
  "!|html:5": "!!!+doc",
}
```

完整的 HTML snippets 请见 [Emmet Repo](https://github.com/emmetio/emmet/blob/master/snippets/html.json)

:::
