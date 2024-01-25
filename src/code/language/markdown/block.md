---
date: 2021-02-21
title: Markdown 块元素
icon: markdown
category: Markdown
tag:
  - Markdown
---

## 段落和换行

一个段落由一个及以上相连接的行句组成。

一个即以上的空行则会切分出不同的段落，一般的段落不需要用空白或断行缩进。

::: tip 空行

空行的定义是显示上看起来像是空行，便会被视为空行。

也就是若某一行只包含空白和 tab，则该行也会被视为空行。

:::

「一个及以上相连接的行句组成」这句话其实暗示了 Markdown 允许段落内的强迫断行，其它的格式会把每个断行都转成 `<br />` 标签。

如果您**真的想要**插入 `<br />` 标签的话，在行尾加上两个以上的空白，然后按下回车:

```md
这是一句话，它可以在这里  
强制换行
```

## 标题

标题能显示出文章的结构。

Atx (**推荐**)形式是在行首插入 1 到 6 个 `#` ，对应到标题 1 到 6 阶，例如:

- H1: `# Header 1`
- H2: `## Header 2`
- H3: `### Header 3`
- H4: `#### Header 4`
- H5: `##### Header 5`
- H6: `###### Header 6`

::: tip 最佳实践

为了使内容可读性更强，Markdown 最佳实践要求标题应使用 Atx 写法，并且每个标题应被空行隔开。 (第一行的大标题不需要向上空行)

:::

Setext[^setext] 格式不推荐使用。

[^setext]: Setext 格式

    Setext 形式是用底线的形式，利用 `=` (最高阶标题) 和 `-` (第二阶标题) ，例如:

    ```md
    This is an H1
    =============

    This is an H2
    -------------
    ```

    任何数量的 `=` 和 `-` 都可以有效果。

    请注意我们**极其不推荐**使用该格式! 因为它不仅麻烦，还仅支持两级目录。

## Blockquotes

Markdown 使用 email 形式的块引言。

如果您很熟悉如何在 email 信件中引言，您就知道如何在 Markdown 文件中建立一个块引言:在每行的最前面加上 `>` 接一个空格:

```md
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.
```

::: details 渲染结果

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

:::

:::: info 易写性

处于易写性的考虑，Markdown 允许您只在整个段落的第一行最前面加上 `>` :

::: details 例子

**输入**:

```md
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
  consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
  Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
  id sem consectetuer libero luctus adipiscing.
```

**输出**:

<!-- markdownlint-disable MD028 -->

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
  consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
  Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
  id sem consectetuer libero luctus adipiscing.

<!-- markdownlint-enable MD028 -->

:::

但是请注意，我们**不推荐**使用这种做法，这并不是符合 Markdown 最佳实践。

同时，`>` 后面的空格也是可选的，我们也推荐您加上它。

::::

::: details 块引言可以有阶层 (例如: 引言内的引言) ，只要根据层数加上不同数量的 >

**输入**:

```md
> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.
```

**输出**:

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

:::

::: details 引言的块内也可以使用其他的 Markdown 语法，包括标题、列表、代码块等

**输入**:

```md
> 1. This is the first list item.
> 1. This is the second list item.
>
> Here’s some example code:
> 
> ```js
> const a = 1;
> ```
```

**输出**:

> 1. This is the first list item.
> 1. This is the second list item.
>
> Here’s some example code:
>
> ```js
> const a = 1;
> ```

:::

## 列表

Markdown 支持有序列表和无序列表。

### 无序列表

无序列表在规范中使用减号作为列表标记:

```md
- Red
- Green
- Blue
```

::: details 渲染结果

- Red
- Green
- Blue

:::

::: info 其他支持的符号

Markdown 最初的规范也支持使用星号、加号:

```md
+ Red
+ Green
+ Blue

* Red
* Green
* Blue
```

我们**极其不建议**使用以上写法，它们并不符合 Markdown 最佳实践。(加号看上去并不像一个列表，而且星号并不是可以直接按键输入的符号)

:::

### 有序列表

有序列表使用数字接著一个英文句点:

```md
1. Bird
2. McHale
3. Parish
```

::: details 渲染结果

1. Bird
2. McHale
3. Parish

:::

很重要的一点是，您在列表标记上使用的数字并不会影响输出的 HTML 结果，因为上面的列表所产生的 HTML 标记为:

```html
<ol>
  <li>Bird</li>
  <li>McHale</li>
  <li>Parish</li>
</ol>
```

::: details 这意味着您无需刻意对列表进行标号

如果您使用:

```md
1. Bird
1. McHale
1. Parish
```

列表项也会正确的渲染:

1. Bird
1. McHale
1. Parish

:::

::: info 将标号交给 Markdown

人工为列表进行正确的标号与全部使用 `1.` 都符合 Markdown 最佳实践。

但是请不要错误的进行标号，如:

```md
2. Bird
3. McHale
5. Parish
```

为了更加便捷的添加、删除或排序有序列表项，我们**推荐都设置为标号 `1`**。

:::

### 列表格式的转义

有些时候项目列表很可能会不小心被产生，比如:

```md
XXX finally died in
1986. What a great man.
```

换句话说，也就是在行首出现*数字-句点-空白*，要避免这样的状况，您可以在句点前面加上反斜线。

```md
XXX finally died in
1986\. What a great man.
```

### 缩进与段落

列表项目标记通常是放在最左边，但是其实也可以缩进，最多三个空白，项目标记后面则一定要接著至少一个空白或 tab。

要让列表看起来更漂亮，您可以把内容用固定的缩进整理好:

```md
- Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
  viverra nec, fringilla in, laoreet vitae, risus.
- Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
  Suspendisse id sem consectetuer libero luctus adipiscing.
```

::: details 渲染结果

- Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
  viverra nec, fringilla in, laoreet vitae, risus.
- Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
  Suspendisse id sem consectetuer libero luctus adipiscing.

:::

:::: info 易写性

处于易写性的考虑，列表缩进不是强制的，也就是以下的内容渲染结果与上面相同。

```md
- Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
viverra nec, fringilla in, laoreet vitae, risus.
- Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
Suspendisse id sem consectetuer libero luctus adipiscing.
```

::: details 渲染结果

- Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
viverra nec, fringilla in, laoreet vitae, risus.
- Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
Suspendisse id sem consectetuer libero luctus adipiscing.

:::

但是我们**不推荐**这种写法，这种写法会导致 Markdown 源文件可读性变差，不符合 Markdown 最佳实践。

::::

如果列表项目间用空行分开， Markdown 会把项目的内容在输出时用 `<p>` 标签包起来，举例来说:

::: details 普通的无序列表

输入:

```md
- Bird
- Magic
- Wood
```

转换结果:

```html
<ul>
  <li>Bird</li>
  <li>Magic</li>
  <li>Wood</li>
</ul>
```

渲染:

- Bird
- Magic
- Wood

:::

但是这个:

```md
- Bird

- Magic

- Wood
```

会被转换为:

```html
<ul>
  <li><p>Bird</p></li>
  <li><p>Magic</p></li>
  <li><p>Wood</p></li>
</ul>
```

::: details 渲染结果

- Bird

- Magic

- Wood

:::

这会在列表项之间创建更大的空间。

:::: tip 最佳实践

对于一个列表项来说，只要有一项使用了空行，所有项目都会转换为段落，也就是以下格式也会渲染为段落列表。

::: details 例子

**输入**:

```md
- Bird
- Magic

- Wood
```

**输出**:

- Bird

- Magic

- Wood

:::

Markdown 最佳实践要求您在每一个列表间始终(或始终不)添加空行。

::::

列表项目可以包含多个段落，每个项目下的段落都必须缩进 2 - 4 个空白或是一个 tab。

::: details 例子

**输入**:

```md
- This is a list item with two paragraphs.

  This is the second paragraph in the list item. You’re
  only required to indent the first line. Lorem ipsum dolor
  sit amet, consectetuer adipiscing elit.

- Another item in the same list.

1. This is a list item with two paragraphs. Lorem ipsum dolor
   sit amet, consectetuer adipiscing elit. Aliquam hendrerit
   mi posuere lectus.

   Vestibulum enim wisi, viverra nec, fringilla in, laoreet
   vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
   sit amet velit.

2. Suspendisse id sem consectetuer libero luctus adipiscing.
```

**输出**:

- This is a list item with two paragraphs.

  This is the second paragraph in the list item. You’re
  only required to indent the first line. Lorem ipsum dolor
  sit amet, consectetuer adipiscing elit.

- Another item in the same list.

1. This is a list item with two paragraphs. Lorem ipsum dolor
   sit amet, consectetuer adipiscing elit. Aliquam hendrerit
   mi posuere lectus.

   Vestibulum enim wisi, viverra nec, fringilla in, laoreet
   vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
   sit amet velit.

2. Suspendisse id sem consectetuer libero luctus adipiscing.

:::

如果要在列表项目内放入其他内容，也需要缩进。

比如放进引言，那 `>` 就需要缩进:

```md
- A list item with a blockquote:

  > This is a blockquote
  > inside a list item.
```

::: tip Markdown 最佳实践

为了更高的可读性，段落缩进应当等同于列表第一行，也就是无序列表缩进 2 个空格，有序列表根据缩进三或四个空格。

:::

## 代码块

和代码相关的写作或是标签语言原始码通常会有已经排版好的代码块，通常这些块我们并不希望它以一般段落文件的方式去排版，而是照原来的样子显示，Markdown 会用 `<pre>` 和 `<code>` 标签来把代码块包起来。

Markdown 最初标准只规定了一种缩进格式的代码块[^indent-code-block]。

[^indent-code-block]: 缩进格式的代码块

    在 Markdown 中，可以通过简单地缩进 4 个空白或是 1 个 tab 来建立代码块。比如:

    ```md
    This is a normal paragraph:

        This is a code block.
    ```

    Markdown 会转换成:

    ```html
    <p>This is a normal paragraph:</p>

    <pre>
      <code>This is a code block.</code>
    </pre>
    ```

    这里的缩进 (4 个空白或是 1 个 tab) ，都会被移除，例如:

    ```md
    Here is an example of AppleScript:

        tell application "Foo"
        beep
        end tell
    ```

    会被转换为:

    ```html
    <p>Here is an example of AppleScript:</p>

    <pre><code>tell application "Foo"
    beep
    end tell
    </code></pre>
    ```

    一个代码块会一直持续到没有缩进的那一行 (或是文件结尾)。

由于缩进式的代码块格式不够鲜明，且无法在此模式下设置代码块的语言并对代码块进行高亮，围栏式的代码扩展几乎被所有 Markdown 实现所支持。

Markdown 最佳实践也同样推荐使用围栏式的代码块，尽管它并不在最初的标准中。

您可以很简单的使用 ` ```代码名称 ` 与 ` ``` ` 创建围栏式代码块。比如:

````md
```js
const a = 1;
```
````

会渲染为

```js
const a = 1;
```

在代码块里面， `&` 、 `<` 和 `>` 会自动转成 HTML 实体，这样的方式让您非常容易使用 Markdown 插入范例用的 HTML 原始码，只需要复制粘贴，再加上缩进就可以了，剩下的 Markdown 都会帮您处理。

::: details Markdown 处理例子

**输入**:

````md
```html
<div class="footer">
  &copy; 2004 Foo Corporation
</div>
```
````

**转换结果**:

```html
<pre>
  <code>&lt;div class="footer"&gt;
  &amp;copy; 2004 Foo Corporation
&lt;/div&gt;</code>
</pre>
```

**输出**:

```html
<div class="footer">
  &copy; 2004 Foo Corporation
</div>
```

:::

代码块中，一般的 Markdown 语法不会被转换，像是星号便只是星号，这表示您可以很容易地以 Markdown 语法撰写 Markdown 语法相关的文件。

### 转义与嵌套

如果您希望在一个代码块中放置另一个 Markdown 代码块格式，您可以增加 `` ` `` 的数量来进行嵌套

`````md{1,5}
````md
```js
const a = 1;
```
````
`````

会渲染为

````md
```js
const a = 1;
```
````

如果您希望输入 ` ``` `，您可以使用 `\` 转义:

`` \`\`\` `` 会被渲染为: \`\`\`

### 分隔线

您可以在一行中用三个或以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。您也可以在星号中间插入空白。下面每种写法都可以建立分隔线:

```md{1,3,5,7,9,11}
---(建议)

* * *

***

*****

- - -

---------------------------------------
```
