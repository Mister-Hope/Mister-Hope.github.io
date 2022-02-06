---
title: URL
icon: info
date: 2019-09-02
category: HTML
---

## 简介

**统一资源定位符**(英语: Uniform Resource Locator，缩写: URL；或称统一资源定位器、定位地址、URL 地址，俗称网页地址或简称网址)是因特网上标准的资源的地址(Address)，如同在网络上的门牌。

统一资源定位符的标准格式如下:

```text
[协议类型]://[服务器地址]:[端口号]/[资源层级UNIX文件路径][文件名]?[查询]#[片段ID]
```

统一资源定位符的完整格式如下:

```text
[协议类型]://[访问资源需要的凭证信息]@[服务器地址]:[端口号]/[资源层级UNIX文件路径][文件名]?[查询]#[片段ID]
```

::: info

更多详情请见 [维基百科](https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E5%AE%9A%E4%BD%8D%E7%AC%A6)

:::

## 绝对 URL 和相对 URL

您可能会在网络上遇到两个术语，绝对 URL 和相对 URL(或者称为，绝对链接和相对链接):

### 绝对 URL

指向由其在 Web 上的绝对位置定义的位置，包括 protocol(协议) 和 domain name(域名)。

::: tip 例子

如果 index.html 页面上传到 projects 这一个目录。并且 projects 目录位于 web 服务站点的根目录，web 站点的域名为 `http://www.example.com`，那么这个页面就可以通过 `http://www.example.com/projects/index.html` 访问(或者通过 `http://www.example.com/projects/` 来访问，因为在没有指定特定的 URL 的情况下，大多数 web 服务会默认访问加载 `index.html` 这类页面)

:::

不管绝对 URL 在哪里使用，它总是指向确定的相同位置。

### 相对 URL

指向与您链接的文件相关的位置，更像我们在前面一节中所看到的位置。例如，如果我们想从示例文件链接 `http://www.example.com/projects/index.html` 转到相同目录下的一个 PDF 文件，URL 就是文件名 URL(如: `project-brief.pdf`)。如果 PDF 文件能够在 projects 的子目录 pdfs 中访问到，相对路径就是 `pdfs/project-brief.pdf`(对应的绝对 URL 是 `http://www.example.com/projects/pdfs/project-brief.pdf`)

一个相对 URL 将指向不同的位置，这取决于它所在的文件所在的位置——例如，如果我们把 index.html 文件从 projects 目录移动到 Web 站点的根目录(最高级别，而不是任何目录中)，里面的 `pdfs/project-brief.pdf` 相对 URL 将会指向 `http://www.example.com/pdfs/project-brief.pdf`，而不是 `http://www.example.com/projects/pdfs/project-brief.pdf`

当然，project-brief.pdf 文件和 pdfs 文件夹的位置不会因为您移动了 `index.html` 文件而突然发生变化——这将使您的链接指向错误的位置，因此如果单击它，它将无法工作。您得小心点!
