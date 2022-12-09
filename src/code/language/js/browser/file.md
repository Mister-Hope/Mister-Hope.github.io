---
title: 操作文件
icon: file
date: 2019-10-17
category: JavaScript
---

在 HTML 表单中，可以上传文件的唯一控件就是 `<input type="file">`。

<!-- more -->

::: warning

当一个表单包含 `<input type="file">` 时，表单的 `enctype` 必须指定为 `multipart/form-data`，`method` 必须指定为 `post`，浏览器才能正确编码并以 `multipart/form-data` 格式发送表单的数据。

:::

出于安全考虑，浏览器只允许用户点击 `<input type="file">` 来选择本地文件，用 JavaScript 对 `<input type="file">` 的 `value` 赋值是没有任何效果的。当用户选择了上传某个文件后，JavaScript 也无法获得该文件的真实路径:

通常，上传的文件都由后台服务器处理，JavaScript 可以在提交表单时对文件扩展名做检查，以便防止用户上传无效格式的文件:

```js
const f = document.querySelector("#test-file-upload");
const filename = f.value; // 'C:\fake-path\test.png'

if (
  !filename ||
  !(
    filename.endsWith(".jpg") ||
    filename.endsWith(".png") ||
    filename.endsWith(".gif")
  )
) {
  alert("Can only upload image file.");
  return false;
}
```

## File API

由于 JavaScript 对用户上传的文件操作非常有限，尤其是无法读取文件内容，使得很多需要操作文件的网页不得不用 Flash 这样的第三方插件来实现。

随着 HTML5 的普及，新增的 File API 允许 JavaScript 读取文件内容，获得更多的文件信息。

HTML5 的 File API 提供了 `File` 和 `FileReader` 两个主要对象，可以获得文件信息并读取文件。

下面的例子演示了如何读取用户选取的图片文件，并在一个 `<div>` 中预览图像:

```js
const fileInput = document.querySelector("#test-image-file");
const info = document.querySelector("#test-file-info");
const preview = document.querySelector("#test-image-preview");

// 监听change事件:
fileInput.addEventListener("change", () => {
  // 清除背景图片:
  preview.style.backgroundImage = "";
  // 检查文件是否选择:
  if (!fileInput.value) {
    info.innerHTML = "没有选择文件";
    return;
  }
  // 获取File引用:
  const file = fileInput.files[0];

  // 获取File信息:
  info.innerHTML = `文件: ${file.name}<br>大小: ${file.size}<br>修改: ${file.lastModifiedDate}`;

  if (
    file.type !== "image/jpeg" &&
    file.type !== "image/png" &&
    file.type !== "image/gif"
  ) {
    alert("不是有效的图片文件!");
    return;
  }
  // 读取文件:
  const reader = new FileReader();

  reader.onload = (e) => {
    const data = e.target.result; // 'data:image/jpeg;base64,/9j/4AAQSk...(base64编码)...'

    preview.style.backgroundImage = `url(${data})`;
  };
  // 以DataURL的形式读取文件:
  reader.readAsDataURL(file);
});
```

上面的代码演示了如何通过 HTML5 的 File API 读取文件内容。以 DataURL 的形式读取到的文件是一个字符串，类似于 `data:image/jpeg;base64,/9j/4AAQSk...(base64编码)...`，常用于设置图像。如果需要服务器端处理，把字符串 `base64`,后面的字符发送给服务器并用 base64 解码就可以得到原始文件的二进制内容。

## 回调

上面的代码还演示了 JavaScript 的一个重要的特性就是单线程执行模式。在 JavaScript 中，浏览器的 JavaScript 执行引擎在执行 JavaScript 代码时，总是以单线程模式执行，也就是说，任何时候，JavaScript 代码都不可能同时有多于 `1` 个线程在执行。

您可能会问，单线程模式执行的 JavaScript，如何处理多任务?

在 JavaScript 中，执行多任务实际上都是异步调用，比如上面的代码:

```js
reader.readAsDataURL(file);
```

就会发起一个异步操作来读取文件内容。因为是异步操作，所以我们在 JavaScript 代码中就不知道什么时候操作结束，因此需要先设置一个回调函数:

```js
reader.onload = (e) => {
  // 当文件读取完成后，自动调用此函数:
};
```

当文件读取完成后，JavaScript 引擎将自动调用我们设置的回调函数。执行回调函数时，文件已经读取完毕，所以我们可以在回调函数内部安全地获得文件内容。
