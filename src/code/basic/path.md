---
title: 路径
icon: navigation
date: 2019-09-20
category: 基础
order: 5
---

无论是我们想直接访问一个文件，还是在一个文件中希望访问另一个文件，都涉及到一个获取文件的操作。而无论是在 Windows 中还是在 Linux 中，文件的具体位置都用文档的路径标注。

路径常常涉及到物理路径，相对路径，绝对路径，根目录的概念，现加以说明。

<!-- more -->

## 物理路径

物理路径的英文全称是: Physical path，它就是指硬盘上文件的路径，比如下面的文件位置表示方法:

```text
d:\wwwroot\html\a.html
d:\wwwroot\html\photo\b.html
d:\wwwroot\html\photo\c.html
d:\wwwroot\html\photo\ours\d.html
```

> `D:` 与 `d:` 均可。盘符不分大小写。

一般来说物理路径可用于访问本地文件，即不通过 WEB 服务器(如: 本地调试)等的情况下。

## 相对路径

相对路径的英文全称是 Relative Path，我们可以从以下三个方面来了解它的用法 (以“物理路径”中的位置情况为例):

- 如何表示同级目录的文件

  b.html 和 c.html 在同一个文件夹下，如果 b.html 需要链接到 c.html，可以在 b.html 中这样写:

  ```html
  <a href="./c.html">同目录下文件间互相链接</a>
  ```

  代码中的 `./` 代表同级目录。

  `./`是相对路径，也可以省略不写，省略不写，即直接以文件夹或文件名称开头的路径也是相对路径。

  ```html
  <a href="./c.html">同目录下文件间互相链接</a>
  ```

- 如何表示上级目录的文件

  a.html 是 b.html 和 c.html 的上级目录中的文件，如果 b.html 或 c.html 链接到 a.html，可以在 b.html 或 c.html 中这样写:

  ```html
  <a href="../a.html">链接到上级目录中的文件</a>
  ```

  代码中的 `../` 代表一级上级目录(间隔一个目录)。

  需要注意的是: “`../../`”代表二级上级目录(间隔两个目录)，比如 a.html 是 d.html 的前两级目录，同时 d.html 需要链接到 a.html，可以在 d.html 中这样写:

  ```html
  <a href="../../a.html">链接到上级目录的上级目录中的文件</a>
  ```

- 如何表示子目录的文件

  b.html 和 c.html 是 a.html 的子目录中的文件，如果需要在 a.html 中链接到 b.html， 可以在 a.html 中这样写:

  ```html
  <a href="photo/b.html">链接到子目录(photo)中的文件</a>
  如果需要在a.html中链接到d.html，可以在a.html中这样写
  <a href="photo/ours/d.html">链接到子目录(photo/ours/)中的文件</a>
  ```

## 绝对路径

绝对路径的英文全称是 Absolute Path，它就是带有网址的路径。比如您有一个域名 `www.example.com`，其域名指向 `d:\wwwroot`，那么上面的四个文件就可以这么表示:

```html
<a href="http://www.example.com/html/a.html">链接到a.html</a>
<a href="http://www.example.com/html/photo/b.html">链接到b.html</a>
<a href="http://www.example.com/html/photo/c.html">链接到c.html</a>
<a href="http://www.example.com/html/photo/ours/d.html">链接到d.html</a>
```

## 根目录

根目录的英文全称是 Root directory，去掉绝对路径前面的域名就是根目录，所以它可以理解为是网站的最上层目录。它的表示方法如下:

```html
<a href="/html/a.html">链接到a.html</a>
<a href="/html/photo/b.html">链接到b.html</a>
<a href="/html/photo/c.html">链接到c.html</a>
<a href="/html/photo/ours/d.html">链接到d.html</a>
```

在服务器上，根目录即代表网站主页所在的目录。网站服务器一般只能访问网站主页所在文件夹内的文件与文件夹。
