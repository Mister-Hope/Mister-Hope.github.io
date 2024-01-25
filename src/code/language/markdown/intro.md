---
date: 2021-02-21
title: Markdown 介绍
icon: info
category: Markdown
tag:
  - Markdown
---

Markdown 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。

Markdown 的目标是实现「易读易写」。它的扩展名为 `.md`。

<!-- more -->

## 设计理念

Markdown 最需要强调的便是它的可读性。一份使用 Markdown 格式撰写的文件应该可以直接以纯文字发布，并且看起来不会像是由许多标签或是格式指令所构成。

其语法在设计时受到一些既有 text-to-HTML 格式的影响，包括 [Setext][1]、[atx][2]、[Textile][3]、[reStructuredText][4]、[Grutatext][5] 和 [EtText][6]，然而最大灵感来源其实是纯文字的电子邮件格式。因此 Markdown 的语法全由标点符号所组成，并经过严谨慎选，是为了让它们看起来就像所要表达的意思。像是在文字两旁加上星号，看起来就像\*强调\*。Markdown 的列表看起来，嗯，就是列表。假如您有使用过电子邮件，引言写法看起来就真的像是引用一段文字。

Markdown 具有一系列衍生版本，用于扩展 Markdown 的功能 (如表格、脚注、内嵌 HTML 等等) ，这些功能并不在最初的设计中，但它们能让 Markdown 转换成更多的格式，例如 LaTeX，Docbook。Markdown 增强版中比较有名的有 Markdown Extra、MultiMarkdown、 Maruku 等。这些衍生版本要么基于工具，如 Pandoc；要么基于网站，如 GitHub 和 Wikipedia，在语法上基本兼容，但在一些语法和渲染效果上有改动。

## 用途

Markdown 的语法有个主要的目的: 用来作为一种网络内容的**写作用语言**。Markdown 的重点在于，它能让文件**更容易阅读、编写**。因此，Markdown 的格式语法只涵盖纯文字可以涵盖的范围。

Markdown 的语法简洁明了、学习容易，而且功能比纯文本更强，因此有很多人用它写博客。世界上最流行的博客平台 WordPress 能很好的支持 Markdown。

用于编写说明文档，并且以 “README.md” 的文件名保存在软件的目录下面。

除此之外，我们还可以快速将 Markdown 转化为演讲 PPT、Word 产品文档、LaTex 论文甚至是用非常少量的代码完成最小可用原型。在数据科学领域，Markdown 已经广泛使用，极大地推进了动态可重复性研究的历史进程。

## 特点

### 行内 HTML

不在 Markdown 涵盖范围之外的标签，都可以直接在文件里面用 HTML 撰写。不需要额外标注这是 HTML 或是 Markdown；只要直接加标签就可以了。

只有块元素 ── 比如 `<div>`、`<table>`、`<pre>`、`<p>` 等标签，必须在前后加上空行，以利与内容区隔。而且这些 (元素) 的开始与结尾标签，不可以用 tab 或是空白来缩进。Markdown 的解析器有智慧型判断，可以避免在块标签前后加上没有必要的 `<p>` 标签。

举例来说，在 Markdown 文件里加上一段 HTML 表格:

```md
This is a regular paragraph.

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

This is another regular paragraph.
```

::: warning

Markdown 语法在 HTML 块标签中将不会被进行处理。

例如，您无法在 HTML 块内使用 Markdown 形式的 `*强调*`。

:::

### 特殊字符自动转换

简单来说，在 Markdown 中，您无需考虑 HTML 本应考虑的特殊字符转义的问题。

比如对于 `AT&T`，Markdown 就会将它转为 `AT&amp;T`。

::: tip HTML 中的特殊字符

在 HTML 文件中，有两个字符需要特殊处理: `<` 和 `&` 。 `<` 符号用于起始标签，`&` 符号则用于标记 HTML 实体，如果您只是想要使用这些符号，您必须要使用实体的形式，像是 `&lt;` 和 `&amp;`。

使用 HTML 时，`&` 符号其实很容易让写作网络文件的人感到困扰。

如果您要打 「AT&T」 ，您必须要写成 `「AT&amp;T」`。

同时您还得转换网址内的 `&` 符号，如果您要链接到 `http://images.google.com/images?num=30&q=larry+bird`，您必须要把网址转成 `http://images.google.com/images?num=30&amp;q=larry+bird`，才能放到链接标签的 `href` 属性里。

不用说也知道这很容易忘记，这也可能是 HTML 标准检查所检查到的错误中，数量最多的。

:::

Markdown 即允许您直接使用这些符号。也允许您使用转义符号。

比如您如果要在文件中插入一个著作权的符号，但是您又不想费力地输入这个不常见的特殊符号，您可以直接在 Markdown 中输入 `&copy;`，Markdown 会推测出它是转移符号，并把它输出为 &copy;。

类似的状况也会发生在 `<` 符号上，因为 Markdown 支持 [行内 HTML](#行内-HTML) ，如果您是使用 `<` 符号作为 HTML 标签使用，那 Markdown 也不会对它做任何转换，但是如果您是写:

```md
4 < 5
```

Markdown 将会把它转换为:

```html
4 &lt; 5
```

::: tip

需要注意的是，code 范围内，不论是行内还是块， `<` 和 `&` 两个符号都*一定*会被转换成 HTML 实体，这项特性让您可以很容易地用 Markdown 写 HTML code (和 HTML 相对而言， HTML 语法中，您要把所有的 `<` 和 `&` 都转换为 HTML 实体，才能在 HTML 文件里面写出 HTML code。)

:::

## 编写

Markdown 就是一个扩展名为 `.md` 的文本文件。

理论上您可以使用任何编辑器 (如 [VS Code](../../../software/vscode/README.md))编辑 Markdown，也可以使用专门的 Markdown 编辑器 (如 [Typora](https://typora.io)) 进行编写。

[1]: http://docutils.sourceforge.net/mirror/setext.html
[2]: http://www.aaronsw.com/2002/atx/
[3]: http://textism.com/tools/textile/
[4]: http://docutils.sourceforge.net/rst.html
[5]: http://www.triptico.com/software/grutatxt.html
[6]: http://ettext.taint.org/doc/
