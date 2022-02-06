---
title: AJAX
icon: ajax
date: 2019-11-05
category: jQuery
---

::: tip 章节过时

目前，一套代码已经可以在多个浏览器上运行良好了，所以 jQuery 的意义并不大。在 Node.js 中，我们使用 [axios](../../node-js/package/axois.md) 来进行请求。

:::

<!-- more -->

用 JavaScript 写 Ajax 前面已经介绍过了，主要问题就是不同浏览器需要写不同代码，并且状态和错误处理写起来很麻烦。

用 jQuery 的相关对象来处理 AJAX，不但不需要考虑浏览器问题，代码也能大大简化。

## Ajax

jQuery 在全局对象 jQuery (也就是 `$`) 绑定了 `ajax()` 函数，可以处理 Ajax 请求。`ajax(url, settings)` 函数需要接收一个 URL 和一个可选的 settings 对象，常用的选项如下:

- async: 是否异步执行 Ajax 请求，默认为 `true`；

- method: 发送的 Method，缺省为 `'GET'`，可指定为 `'POST'` 、`'PUT'` 等；

- contentType: 发送 POST 请求的格式，默认值为 `'application/x-www-form-urlencoded; charset=UTF-8'`，也可以指定为 `text/plain`、`application/json`；

- data: 发送的数据，可以是字符串、数组或 object。如果是 `GET` 请求，data 将被转换成 `query` 附加到 URL 上，如果是 `POST` 请求，根据 `contentType` 把 `data` 序列化成合适的格式；

- headers: 发送的额外的 HTTP 头，必须是一个 object；

- dataType: 接收的数据格式，可以指定为 `'html'`、`'xml'`、`'json'`、`'text'` 等，缺省情况下根据响应的 `Content-Type` 猜测。

下面的例子发送一个 `GET` 请求，并返回一个 JSON 格式的数据:

```js
const jqxhr = $.ajax("/api/categories", {
  dataType: "json",
});
// 请求已经发送了
```

不过，如何用回调函数处理返回的数据和出错时的响应呢?

还记得 Promise 对象吗? jQuery 的 `jqXHR` 对象类似一个 Promise 对象，我们可以用链式写法来处理各种回调:

```js
"use strict";

function ajaxLog(s) {
  const txt = $("#test-response-text");
  txt.val(txt.val() + "\n" + s);
}

$("#test-response-text").val("");

const jqxhr = $.ajax("/api/categories", {
  dataType: "json",
})
  .done(function (data) {
    ajaxLog("成功, 收到的数据: " + JSON.stringify(data));
  })
  .fail(function (xhr, status) {
    ajaxLog("失败: " + xhr.status + ", 原因: " + status);
  })
  .always(function () {
    ajaxLog("请求完成: 无论成功或失败都会调用");
  });
```

## get

对常用的 Ajax 操作，jQuery 提供了一些辅助方法。由于 GET 请求最常见，所以 jQuery 提供了 `get()` 方法，可以这么写:

```js
const jqxhr = $.get("/path/to/resource", {
  name: "Bob Lee",
  check: 1,
});
```

第二个参数如果是 object，jQuery 自动把它变成 `query string` 然后加到 URL 后面，实际的 URL 是:

`/path/to/resource?name=Bob%20Lee&check=1`

这样我们就不用关心如何用 URL 编码并构造一个 `query string` 了。

## post

`post()` 和 `get()` 类似，但是传入的第二个参数默认被序列化为 `application/x-www-form-urlencoded`:

```js
const jqxhr = $.post("/path/to/resource", {
  name: "Bob Lee",
  check: 1,
});
```

实际构造的数据 `name=Bob%20Lee&check=1` 作为 POST 的 body 被发送。

## getJSON

由于 JSON 用得越来越普遍，所以 jQuery 也提供了 `getJSON()` 方法来快速通过 GET 获取一个 JSON 对象:

```js
const jqxhr = $.getJSON("/path/to/resource", {
  name: "Bob Lee",
  check: 1,
}).done(function (data) {
  // data已经被解析为JSON对象了
});
```

## 安全限制

jQuery 的 Ajax 完全封装的是 JavaScript 的 Ajax 操作，所以它的安全限制和前面讲的用 JavaScript 写 Ajax 完全一样。

如果需要使用 JSONP，可以在 `ajax()` 中设置 `jsonp: 'callback'`，让 jQuery 实现 JSONP 跨域加载数据。

关于跨域的设置请参考浏览器 Ajax 一节中 CORS 的设置。
