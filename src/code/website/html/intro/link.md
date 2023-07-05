---
title: 超链接
icon: link
date: 2019-09-02
category: HTML
order: 4
---

超链接是互联网提供的最令人兴奋的创新之一，它们从一开始就一直是互联网的一个特性，使互联网成为互联的网络。超链接使我们能够将我们的文档链接到任何其他文档(或其他资源)，也可以链接到文档的指定部分，我们可以在一个简单的网址上提供应用程序(与必须先安装的本地应用程序或其他东西相比)。几乎任何网络内容都可以转换为链接，点击(或激活)超链接将使网络浏览器转到另一个网址(URL)。

<!-- more -->

::: tip URL

URL 可以指向 HTML 文件、文本文件、图像、文本文档、视频和音频文件以及可以在网络上保存的任何其他内容。如果浏览器不知道如何显示或处理文件，它会询问您是否要打开文件(需要选择合适的本地应用来打开或处理文件)或下载文件(以后处理它)

更多 URL 相关，请见 [定义 → URL](../../definition/url.md)。

:::

## 链接的解析

通过将文本(或其他内容，见块级链接)转换为 `<a>` 元素内的链接来创建基本链接， 给它一个 `href` 属性(也称为目标)，它将包含您希望链接指向的网址。

::: normal-demo 链接 Demo

```html
<p>我正在创建<a href="https://baidu.com">一个指向百度主页的链接</a>.</p>
```

:::

## 使用 title 属性

title 属性旨在包含关于链接的补充有用信息，例如页面包含什么样的信息或需要注意的事情。

::: normal-demo Title 属性

```html
<p>
  我正在创建<a href="https://baidu.com" title="最大的中文搜索引擎"
    >一个指向百度主页的链接</a
  >.
</p>
```

:::

当鼠标指针悬停在链接上时，标题将作为提示信息出现。

::: tip

链接的标题仅当鼠标悬停在其上时才会显示，这意味着使用键盘来导航网页的人很难获取到标题信息。如果标题信息对于页面非常重要，您应该使用所有用户能都方便获取的方式来呈现，例如放在常规文本中。

:::

## 块级链接

您可以将一些内容转换为链接，甚至是块级元素。例如您想要将一个图像转换为链接，您只需把图像元素放到 `<a></a>` 标签中。

```html
<a href="https://www.mozilla.org/en-US/">
  <img
    src="mozilla-image.png"
    alt="mozilla logo that links to the mozilla homepage"
  />
</a>
```

## 统一资源定位符 (URL)

统一资源定位符(英文: Uniform Resource Locator，简写: URL)是一个定义了在网络上的位置的一个文本字符串。例如我的博客主页定位在 `https://mister-hope.com`.

URL 使用路径查找文件。路径指定文件系统中您感兴趣的文件所在的位置。

::: info

更多详情，请见[定义 → URL](../../definition/url.md)。

:::

![目录结构图](./assets/simple-directory.png)

此目录结构的根目录称为 `creation-hyperlinks`。当在网站上工作时， 您会有一个包含整个网站的目录。在根目录，我们有一个 `index.html` 和一个 `contacts.html` 文件。在真实的网站上，`index.html` 将会成为我们的主页或登录页面。

我们的根目录还有两个目录—— `pdfs` 和 `projects`，它们分别包含一个 PDF (project-brief.pdf) 文件和一个 `index.html` 文件。请注意您可以有两个 `index.html` 文件，前提是他们在不同的目录下，许多网站就是如此。第二个 `index.html` 或许是项目相关信息的主登录界面。

- 指向当前目录:

  如果 `index.html`(目录顶层的 `index.html`)想要包含一个超链接指向 `contacts.html`，您只需要指定想要链接的文件名，因为它与当前文件是在同一个目录的. 所以您应该使用的 URL 是 `contacts.html`:

  ```html
  <p>
    Want to contact a specific staff member? Find details on our
    <a href="contacts.html">contacts page</a>.
  </p>
  ```

- 指向子目录:

  如果 `index.html` (目录顶层 `index.html`)想要包含一个超链接指向 `projects/index.html`，您需要先进入 `projects/` 项目目录，然后指明要链接到的文件 `index.html`。通过指定目录的名称，然后是正斜杠，然后是文件的名称。因此您要使用的 URL 是 `projects/index.html`:

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- 指向上级目录:

  如果您想在 `projects/index.html` 中包含一个指向 `pdfs/project-brief.pdf` 的超链接，您必须先返回上级目录，然后再回到 pdf 目录。“返回上一个目录级”使用两个英文点号表示 — `..` — 所以您应该使用的 URL 是 `../pdfs/project-brief.pdf`:

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a></p>
  ```

## 文档片段

超链接除了可以链接到文档外，也可以链接到 HTML 文档的特定部分(被称为文档片段)。要做到这一点，您必须首先给要链接到的元素分配一个 id 属性。例如，如果您想链接到一个特定的标题，可以这样做:

```html
<h2 id="Mailing_address">Mailing address</h2>
```

然后链接到那个特定的 id，您可以在 URL 的结尾使用一个 `#` 号指向它，例如:

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

您甚至可以在同一份文档下，通过链接文档片段，来链接到同一份文档的另一部分:

```html
<p>
  The <a href="#Mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
```

## 链接最佳实践

在写链接时有一些最好的做法。现在让我们看看这些。

### 用清晰的链接措辞

把链接放在您的页面上很容易。这还不够。我们需要让所有的读者都可以使用链接，不管他们当前的环境和哪些工具。例如:

- 使用屏幕阅读器的用户喜欢从页面上的一个链接跳到另一个链接，并且脱离上下文来阅读链接。
- 搜索引擎使用链接文本来索引目标文件，所以在链接文本中包含关键词是一个很好的主意，以有效地描述与之相关的信息。
- 读者往往会浏览页面而不是阅读每一个字，他们的眼睛会被页面的特征所吸引，比如链接。他们会找到描述性的链接。

::: normal-demo 清晰的链接

```html
<p>
  好的链接文本:
  <a href="https://firefox.com/"> 下载Firefox </a>
</p>

<p>
  不好的链接文本:
  <a href="https://firefox.com/"> 点击这里 </a>
  下载Firefox
</p>
```

:::

其他提示:

- 不要重复 URL 作为链接文本的一部分 ——URL 看起来很丑，当屏幕朗读器一个字母一个字母的读出来的时候听起来就更丑了。
- 不要在链接文本中说“链接”或“链接到”——它只是噪音。屏幕阅读器告诉人们有一个链接。可视化用户也会知道有一个链接，因为链接通常是用不同的颜色设计的，并且存在下划线。
- 保持您的链接标签尽可能短。长链接尤其惹恼屏幕阅读器用户。

### 尽可能使用相对链接

从上面的描述中，您可能认为始终使用绝对链接是一个好主意；毕竟，当页面像相对链接那样移动时，它们不会中断。但是，当链接到同一网站的其他位置时，您应该使用相对链接 (当链接到另一个网站时，您需要使用绝对链接):

- 首先，检查代码要容易得多——相对 URL 通常比绝对 URL 短得多，这使得阅读代码更容易。
- 其次，在可能的情况下使用相对 URL 更有效。当使用绝对 URL 时，浏览器首先通过 DNS 查找服务器的真实位置，然后再转到该服务器并查找所请求的文件。另一方面，相对 URL，浏览器只在同一服务器上查找被请求的文件。因此，如果您使用绝对 URL 而不是相对 URL，您就会不断地让您的浏览器做额外的工作，这意味着它的效率会降低。

### 链接到非 HTML 资源 ——留下清晰的指示

当链接到一个需要下载的资源 (如 PDF 或 Word 文档) 或流媒体 (如视频或音频) 或有另一个潜在的意想不到的效果(打开一个弹出窗口，或加载 Flash 电影)，您应该添加明确的措辞，以减少任何混乱。如下的例子会让人反感:

- 如果您是在低带宽连接，点击一个链接，然后就开始下载大文件。
- 如果您没有安装 Flash 播放器，点击一个链接，然后突然被带到一个需要 Flash 的页面。

::: normal-demo 为链接留下提示

```html
<p>
  <a href="http://www.example.com/large-report.pdf">
    下载销售报告(PDF, 10MB)
  </a>
</p>

<p>
  <a href="http://www.example.com/video-stream/">
    观看视频(将在新标签页中播放, HD画质)
  </a>
</p>

<p>
  <a href="http://www.example.com/car-game"> 进入汽车游戏 </a>
</p>
```

:::

### 在下载链接时使用 download 属性

当您链接到要下载的资源而不是在浏览器中打开时，您可以使用 `download` 属性来提供一个默认的保存文件名 (此属性仅适用于同源 URL)。下面是一个下载链接到 Firefox 的 Windows 最新版本的示例:

::: normal-demo download 属性

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe"
>
  下载最新的 Windows 版 Firefox (64-bit) (English, US)
</a>
```

:::

## 电子邮件链接

当点击一个链接或按钮时，打开一个新的电子邮件发送信息而不是连接到一个资源或页面，这种情况是可能做到的。这样做是使用 `<a>` 元素和 `mailto:` URL 的方案。其最基本和最常用的使用形式为一个 `mailto:link`，链接简单说明收件人的电子邮件地址。

::: normal-demo 电子邮箱链接

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

:::

实际上，邮件地址甚至是可选的。如果您忘记了(也就是说，您的 `href` 仅仅只是简单的 `mailto:`)，一个新的发送电子邮件的窗口也会被用户的邮件客户端打开，只是没有收件人的地址信息，这通常在“分享”链接是很有用的，用户可以发送给他们选择的地址邮件

### 具体细节

除了电子邮件地址，您还可以提供其他信息。事实上，任何标准的邮件头字段可以被添加到您提供的邮件 URL。其中最常用的是主题(subject)、抄送(cc)和主体(body) (这不是一个真正的头字段，但允许您为新邮件指定一个短内容消息)。每个字段及其值被指定为查询项。

::: normal-demo 在链接中提供信息

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email"
  >发送邮件</a
>
```

:::
