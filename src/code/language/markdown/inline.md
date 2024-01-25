---
date: 2021-02-21
title: Markdown 行内元素
icon: markdown
category: Markdown
tag:
  - Markdown
---

## 链接

Markdown 支持两种形式的链接语法: *行内*和*参考*。

不管是哪一种，链接的文字都是用 `[方括号]` 来标记。

### 行内链接

要建立一个行内形式的链接，只要在方块括号后输入圆括号并插入网址链接即可，如果您还想要加上链接的 title 文字，只要在网址后面，用双引号把 title 文字包起来即可。

::: details 例子

**输入**:

```md
This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.
```

**渲染结果**:

```html
<p>
  This is <a href="http://example.com/" title="Title"> an example</a> inline
  link.
</p>

<p><a href="http://example.net/">This link</a> has no title attribute.</p>
```

**输出**:

This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.

:::

如果您是要链接到同样主机的资源，您可以使用绝对路径或相对路径:

```md
See my [About](/about.html) page for details.
```

### 参考链接

参考形式的链接使用另外一个方括号接在链接文字的括号后面，而在第二个方括号里面要填入标识链接的标签:

```md
This is [an example][id] reference-style link.
```

之后在文件的任意地方，您都可以把这个标签的链接内容定义出来:

```md
[id]: http://example.com/ "Optional Title Here"
```

链接定义的形式为:

- 方括号，输入链接的标识 ID
- 冒号
- 一个以上的空白或 tab
- 链接的网址
- 选择性地添加 title 内容，可以用单引号、双引号或是括号包括

下面这三种链接的定义相同:

```md
[foo]: http://example.com/ "Optional Title Here"
[foo]: http://example.com/ "Optional Title Here"
[foo]: http://example.com/ "Optional Title Here"
```

链接网址也可以用方括号包起来:

```md
[id]: [http://example.com/] "Optional Title Here"
```

您也可以把 title 属性放到下一行，也可以加一些缩进，网址太长的话，这样会比较好看:

```md
[id]: http://example.com/longish/path/to/resource/here
    "Optional Title Here"
```

网址定义只有在产生链接的时候用到，并不会直接出现在文件之中。

链接辨识标签可以有字母、数字、空白和标点符号，但是并**不**区分大小写，因此下面两个链接是一样的:

```md
[link text][a]
[link text][A]
```

::: tip 最佳实践

由于不区分大小写的原因，Markdown 最佳实践推荐标识标签均使用小写。

:::

#### 简写

您可以通过简写写法省略指定链接标签，这种情形下，链接标签和链接文字会视为相同，要用预设链接标签只要在链接文字后面加上一个空的方括号，如果您要让 "Google" 链接到 google.com，您可以简化成:

```md
[Google][]
```

然后定义链接内容:

```md
[google]: http://google.com/
```

由于链接文字可能包含空白，所以这种简化的标签内也可以包含多个文字:

```md
Visit [Daring Fireball][] for more information.
```

然后定义链接:

```md
[daring fireball]: http://daringfireball.net/
```

链接的定义可以放在文件中的任何一个地方，建议放在链接出现段落的后面或文件最后面，就像是注解一样。

::: details 例子

**输入**:

```md
I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].

[1]: http://google.com/ "Google"
[2]: http://search.yahoo.com/ "Yahoo Search"
[3]: http://search.msn.com/ "MSN Search"
```

**等同于**:

```md
I get 10 times more traffic from [Google][] than from
[Yahoo][] or [MSN][].

[google]: http://google.com/ "Google"
[yahoo]: http://search.yahoo.com/ "Yahoo Search"
[msn]: http://search.msn.com/ "MSN Search"
```

**渲染结果**:

```html
<p>
  I get 10 times more traffic from
  <a href="http://google.com/" title="Google">Google</a> than from
  <a href="http://search.yahoo.com/" title="Yahoo Search">Yahoo</a>
  or <a href="http://search.msn.com/" title="MSN Search">MSN</a>.
</p>
```

**输出**:

I get 10 times more traffic from [Google][] than from
[Yahoo][] or [MSN][].

[google]: http://google.com/ "Google"
[yahoo]: http://search.yahoo.com/ "Yahoo Search"
[msn]: http://search.msn.com/ "MSN Search"

**同样的行内模式写法**:

```md
I get 10 times more traffic from [Google](http://google.com/ "Google")
than from [Yahoo](http://search.yahoo.com/ "Yahoo Search") or
[MSN](http://search.msn.com/ "MSN Search").
```

:::

::: tip 优势

参考式的链接其实重点不在于它比较好写，而是它比较好读，比较一下上面的范例，使用参考式的文章本身只有 81 个字符，但是用行内形式的链接却会增加到 176 个字符，如果是用纯 HTML 格式来写，会有 234 个字符，在 HTML 格式中，标签比文字还要多。

使用 Markdown 的参考式链接，可以让文件更像是浏览器最后产生的结果，让您可以把一些标记相关的资讯移到段落文字之外，您就可以增加链接而不让文章的阅读感觉被打断。

:::

## 强调

Markdown 使用星号 (`*`) 和底线 (`_`) 作为标记强调字词的符号。

被 `*` 或 `_` 包围的字词会被转成用 `<em>` 标签包围，用两个 `*` 或 `_` 包起来的话，则会被转成 `<strong>`。

::: details 例子

**输入**:

```md
**double asterisks** (建议)

_single underscores_ (建议)

__double underscores__

*single asterisks*
```

**渲染结果**:

```html
<strong>double asterisks</strong>

<em>single underscores</em>

<strong>double underscores</strong>

<em>single asterisks</em>
```

:::

但是如果您的 `*` 和 `_` 两边都有空白的话，它们就只会被当成普通的符号

::: details 例子

**输入**:

```md
These two _, _ and *, * will be treated as normal characters.
```

**输出**:

These two \_, \_ and \*, \* will be treated as normal characters.

:::

:::: tip 最佳实践

为了将两者进行区分，Markdown 最佳实践要求在所有地方尽可能使用 `**` 和 `_`。但是这里有一个例外:

由于使用代码或者是其他情况，人们很容易创造出带有下划线的单词 (如 `last_updated_time`)，在这种情况下，updated 就不会识别为斜体。只有在这种情况下，使用 `*` 而不是 `_`。

::: details 例子

**输入**:

```md
A varibale like last_updated_time won’t be _transformed_ like last*updated*time.
```

**输出**:

A varibale like last_updated_time won’t be _transformed_ like last*updated*time.

:::

::::

强调也可以直接插在文字中间:

```md
un*frigging*believable
```

### 转义

::: details 如果要在文字前后直接插入普通的星号或底线，您可以用 \

**输入**:

```md
\*this text is surrounded by literal asterisks\*

\_this text is surrounded by literal underscores\_
```

**输出**:

\*this text is surrounded by literal asterisks\*

\_this text is surrounded by literal underscores\_

:::

## 代码

如果要标记一小段行内代码，您可以用反引号 (`` ` ``) 把它包起来。

::: tip 反引号

反引号在键盘的左上角，ESC 键的下方

:::

::: details 例子

**输入**:

```md
Use the `printf()` function.
```

**渲染结果**:

```md
<p>Use the <code>printf()</code> function.</p>
```

**输出**:

Use the `printf()` function.

:::

### 转义

如果要在代码内插入反引号，您可以用多个反引号来开启和结束行内代码

::: details 例子

**输入**:

```md
`` There is a literal backtick (`) here. ``
```

**渲染结果**:

```html
<p><code>There is a literal backtick (`) here.</code></p>
```

**输出**:

`` There is a literal backtick (`) here. ``

:::

代码码区段的起始和结束端都可以放入一个空白，起始端后面一个，结束端前面一个，这样您就可以在区段的一开始就插入反引号。

::: details 例子

**输入**:

```md
A single backtick in a code span: `` ` ``

A backtick-delimited string in a code span: `` `foo` ``
```

**渲染结果**:

```html
<p>A single backtick in a code span: <code>`</code></p>

<p>A backtick-delimited string in a code span: <code>`foo`</code></p>
```

**输出**:

A single backtick in a code span: `` ` ``

A backtick-delimited string in a code span: `` `foo` ``

:::

在代码码区段内，`&` 和方括号都会被转成 HTML 实体，这样会比较容易插入 HTML 原始码.

::: details 例子

**输入**:

```md
Please don’t use any `<blink>` tags.
```

**渲染结果**:

```html
<p>Please don’t use any <code>&lt;blink&gt;</code> tags.</p>
```

**输出**:

Please don’t use any `<blink>` tags.

:::

## 图片

很明显地，要在纯文字应用中设计一个「自然」的语法来插入图片是有一定难度的。

Markdown 使用一种和链接很相似的语法来标记图片，同样也允许两种样式: _行内_ 和 _参考_。

- 行内图片的语法如下:

  ```md
  ![Alt text](/path/to/img.jpg)

  ![Alt text](/path/to/img.jpg "Optional title")
  ```

  详细叙述如下:

  - 一个惊叹号 `!`
  - 一个方括号，里面放上图片的替代文字
  - 一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上
    选择性的 title 文字。

- 参考式的图片语法如下:

  ```md
  ![Alt text][id]
  ```

  `id` 是图片参考的名称，图片参考的定义方式则和链接参考一样:

  ```md
  [id]: url/to/image "Optional title attribute"
  ```

它们的优劣与链接相同。

::: tip

Markdown 无法指定图片的宽高，如果您需要的话，您可以使用普通的 `<img>` 标签。

:::
