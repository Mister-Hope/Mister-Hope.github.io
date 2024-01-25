---
date: 2021-02-21
title: Markdown 扩展
icon: plugin
category: Markdown
tag:
  - Markdown
---

## 其他特性

### 自动链接

Markdown 支持比较简短的自动链接形式来处理网址和电子邮件信箱，只要是用尖括号包起来， Markdown 就会自动把它转成链接，链接的文字就和链接位置一样，例如:

```md
<http://example.com/>
```

Markdown 会转为:

```html
<a href="http://example.com/">http://example.com/</a>
```

自动的邮件链接也很类似，只是 Markdown 会先做一个编码转换的过程，把文字字符转成 16 进位码的 HTML 实体，这样的格式可以混淆一些不好的信箱地址收集机器人，例如:

```md
<address@example.com>
```

Markdown 会转成:

```html
<a
  href="&#x6D;&#x61;i&#x6C;&#x74;&#x6F;:&#x61;&#x64;&#x64;&#x72;&#x65;&#115;&#115;&#64;&#101;&#120;&#x61;&#109;&#x70;&#x6C;e&#x2E;&#99;&#111;&#109;"
  >&#x61;&#x64;&#x64;&#x72;&#x65;&#115;&#115;&#64;&#101;&#120;&#x61;&#109;&#x70;&#x6C;e&#x2E;&#99;&#111;&#109;</a
>
```

在浏览器里面，这段字串会变成一个可以点击的 「address@example.com」 链接。

(这种作法虽然可以混淆不少的机器人，但并无法全部挡下来，不过这样也比什么都不做好些。无论如何，公开您的信箱终究会引来广告信件的。)

### 转义字符

Markdown 可以利用反斜线来插入一些在语法中有其它意义的符号，例如: 如果您想要用星号加在文字旁边的方式来做出强调效果 (但不用 `<em>` 标签) ，您可以在星号的前面加上反斜线:

```md
\*literal asterisks\*
```

Markdown 支持在下面这些符号前面加上反斜线来帮助插入普通的符号:

- `\` 反斜线
- `` ` `` 反引号
- `*` 星号
- `_` 底线
- `{}` 大括号
- `[]` 方括号
- `()` 括号
- `#` 井字号
- `+` 加号
- `-` 减号
- `.` 英文句点
- `!` 惊叹号

## 大部分编辑器通用快捷键

| 输出后的效果  | Markdown   | 快捷键         |
| ------------- | ---------- | -------------- |
| **Bold**      | `**text**` | Ctrl/⌘ + B     |
| _Emphasize_   | `*text*`   | Ctrl/⌘ + I     |
| `Inline Code` | \`code\`   | 选中后 `` ` `` |

## 常见扩展

有几种轻量级标记语言是 Markdown 的超集。它们包含 Gruber 的基本语法，并通过添加其他元素 (例如表，代码块，语法突出显示，URL 自动链接和脚注) 在此基础上构建。许多最受欢迎的 Markdown 应用程序使用以下轻量级标记语言之一:

- [CommonMark](https://commonmark.org/)
- [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/)
- [Markdown Extra](https://michelf.ca/projects/php-markdown/extra/)
- [MultiMarkdown](https://fletcherpenney.net/multimarkdown/)
- [R Markdown](https://rmarkdown.rstudio.com/)

### 表格

表格是 GFM 标准支持的格式。

您需要创建表头，并使用 `---` 来分割表头和表身。

您需要使用 `|` 来分割每一个表格项目，如果您需要输入 `|` 请使用 `\` 转义它。

您可以在表头分割行处使用 `:` 来自定义该列的对其

::: details 例子

**输入**:

```md
|     居中      |                   右对齐 | 左对齐         |
| :-----------: | -----------------------: | :------------- |
| 居中使用`:-:` |           右对齐使用`-:` | 左对齐使用`:-` |
|       b       | 表格中包含的 \| 需要转义 | aaaa           |
|       c       |                     aaaa | a              |
```

**输出**:

|     居中      |                   右对齐 | 左对齐         |
| :-----------: | -----------------------: | :------------- |
| 居中使用`:-:` |           右对齐使用`-:` | 左对齐使用`:-` |
|       b       | 表格中包含的 \| 需要转义 | aaaa           |
|       c       |                     aaaa | a              |

:::

### Emoji

Emoji 是 GFM 标准支持的格式，需要通过 `:emoji名称:` 来使用 emoji。

例子: `:smile:` :smile:

您可以在 [Emoji 列表](./emoji/README.md) 找到所有可用的 Emoji。

### 删除线

您可以使用 `~~delete~~` 来创建类似 ~~delete~~ 的删除线

### 脚注

在 Markdown 中使用 `[^锚点文字]` 来定义脚注。

在之后的任何位置使用 `[^锚点文字]: ...` 来描述脚注内容。

如果脚注包含多个段落，其后的段落应当保持双层缩进。

::: details 例子

**输入**:

```md
脚注 1 链接[^first].

脚注 2 链接[^second].

行内的脚注^[Text of inline footnote] 定义.

重复的页脚引用[^second].

[^first]: 脚注 **可以包含特殊标记**

    也可以由多个段落组成

[^second]: 脚注文字。
```

**输出**:

脚注 1 链接[^first].

脚注 2 链接[^second].

行内的脚注^[Text of inline footnote] 定义.

重复的页脚引用[^second].

[^first]: 脚注 **可以包含特殊标记**

    也可以由多个段落组成

[^second]: 脚注文字。

:::

### 自定义标题

许多 Markdown 处理器支持标题的自定义 ID。

添加自定义 ID 允许您直接链接到标题并使用 CSS 对其进行修改。要添加自定义标题 ID，请在与标题相同的行上用大括号括起该自定义 ID。

::: details 例子

**输入**:

```md
### My Great Heading {#custom-id}
```

**渲染结果**:

```html
<h3 id="custom-id">My Great Heading</h3>
```

:::

### 定义列表

一些 Markdown 处理器允许您创建术语及其对应定义的定义列表。要创建定义列表，请在第一行上键入术语。在下一行，键入一个冒号，后跟一个空格和定义。

::: details 例子

**输入**:

```md
First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.
```

**渲染结果**:

```html
<dl>
  <dt>First Term</dt>
  <dd>This is the definition of the first term.</dd>
  <dt>Second Term</dt>
  <dd>This is one definition of the second term.</dd>
  <dd>This is another definition of the second term.</dd>
</dl>
```

**输出**:

<!-- markdownlint-disable MD033 -->

<dl>
  <dt>First Term</dt>
  <dd>This is the definition of the first term.</dd>
  <dt>Second Term</dt>
  <dd>This is one definition of the second term.</dd>
  <dd>This is another definition of the second term.</dd>
</dl>

:::

### 任务列表

任务列表使您可以创建带有复选框的项目列表。

要创建任务列表，请创建一个列表，并以方括号 `[ ]` 开头。通过添加空格 `x` 来改变复选框的勾选情况。

::: details 例子

**输入**:

```md
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

**输出**:

<ul>
  <li><input type="checkbox" checked disabled />Write the press release</li>
  <li><input type="checkbox" disabled />Update the website</li>
  <li><input type="checkbox" disabled />Contact the media</li>
</ul>

:::
