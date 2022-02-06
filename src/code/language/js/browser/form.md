---
title: 操作表单
icon: form
date: 2019-10-17
category: JavaScript
---

用 JavaScript 操作表单和操作 DOM 是类似的，因为表单本身也是 DOM 树。

不过表单的输入框、下拉框等可以接收用户输入，所以用 JavaScript 来操作表单，可以获得用户输入的内容，或者对一个输入框设置新的内容。

<!-- more -->

HTML 表单的输入控件主要有以下几种:

- 文本框，对应的 `<input type="text">`，用于输入文本；

- 口令框，对应的 `<input type="password">`，用于输入口令；

- 单选框，对应的 `<input type="radio">`，用于选择一项；

- 复选框，对应的 `<input type="checkbox">`，用于选择多项；

- 下拉框，对应的 `<select>`，用于选择一项；

- 隐藏文本，对应的 `<input type="hidden">`，用户不可见，但表单提交时会把隐藏文本发送到服务器。

## 获取值

如果我们获得了一个 `<input>` 节点的引用，就可以直接调用 `value` 获得对应的用户输入值:

```html
<input type="text" id="email" />
```

```js
const input = document.querySelector("#email");

input.value; // '用户输入的值'
```

这种方式可以应用于 `text`、`password`、`hidden` 以及 `select`。但是，对于单选框和复选框，`value` 属性返回的永远是 HTML 预设的值，而我们需要获得的实际是用户是否“勾上了”选项，所以应该用 `checked` 判断:

````html
<label><input type="radio" name="weekday" id="monday" value="1" />Monday</label>
<label
  ><input type="radio" name="weekday" id="tuesday" value="2" />Tuesday</label
>```
````

```js
const mon = document.querySelector("#monday");
const tue = document.querySelector("#tuesday");
mon.value; // '1'
tue.value; // '2'
mon.checked; // true 或者 false
tue.checked; // true 或者 false
```

## 设置值

设置值和获取值类似，对于 text、password、hidden 以及 select，直接设置 value 就可以:

```html
<input type="text" id="email" />
```

```js
const input = document.querySelector("#email");
input.value = "test@example.com"; // 文本框的内容已更新
```

对于单选框和复选框，设置 `checked` 为 `true` 或 `false` 即可。

### HTML5 控件

HTML5 新增了大量标准控件，常用的包括 `date`、`datetime`、`datetime-local`、`color` 等，它们都使用 `<input>` 标签:

```html
<input type="date" value="2015-07-01" />
```

```html
<input type="datetime-local" value="2015-07-01T02:03:04" />
```

```html
<input type="color" value="#ff0000" />
```

::: tip

不支持 HTML5 的浏览器无法识别新的控件，会把它们当做 `type="text"` 来显示。支持 HTML5 的浏览器将获得格式化的字符串。例如，`type="date"` 类型的 input 的 `value` 将保证是一个有效的 `YYYY-MM-DD` 格式的日期，或者空字符串。

:::

## 提交表单

最后，JavaScript 可以以两种方式来处理表单的提交 (Ajax 方式在后面章节介绍)。

方式一是通过 `<form>` 元素的 `submit()` 方法提交一个表单，例如，响应一个 `<button>` 的 click 事件，在 JavaScript 代码中提交表单:

```html
<!-- HTML -->
<form id="test-form">
  <input type="text" name="test" />
  <button type="button" onclick="doSubmitForm()">Submit</button>
</form>

<script>
  function doSubmitForm() {
    const form = document.querySelector("#test-form");
    // 可以在此修改form的input...
    // 提交form:
    form.submit();
  }
</script>
```

这种方式的缺点是扰乱了浏览器对 `form` 的正常提交。浏览器默认点击 `<button type="submit">` 时提交表单，或者用户在最后一个输入框按回车键。因此，第二种方式是响应 `<form>` 本身的 `onsubmit` 事件，在提交 `form` 时作修改:

```html
<!-- HTML -->
<form id="test-form" onsubmit="return checkForm()">
  <input type="text" name="test" />
  <button type="submit">Submit</button>
</form>

<script>
  function checkForm() {
    const form = document.querySelector("#test-form");
    // 可以在此修改 form 的 input...
    // 继续下一步:
    return true;
  }
</script>
```

注意要 `return true` 来告诉浏览器继续提交，如果 `return false`，浏览器将不会继续提交 form，这种情况通常对应用户输入有误，提示用户错误信息后终止提交 form。

在检查和修改 `<input>` 时，要充分利用 `<input type="hidden">` 来传递数据。

例如，很多登录表单希望用户输入用户名和口令，但是，安全考虑，提交表单时不传输明文口令，而是口令的 MD5。普通 JavaScript 开发人员会直接修改

```html
<!-- HTML -->
<form id="login-form" method="post" onsubmit="return checkForm()">
  <input type="text" id="username" name="username" />
  <input type="password" id="password" name="password" />
  <button type="submit">Submit</button>
</form>

<script>
  function checkForm() {
    const pwd = document.querySelector("#password");
    // 把用户输入的明文变为MD5:
    pwd.value = toMD5(pwd.value);
    // 继续下一步:
    return true;
  }
</script>
```

这个做法看上去没啥问题，但用户输入了口令提交时，口令框的显示会突然从几个*变成 32 个*(因为 MD5 有 32 个字符)。

要想不改变用户的输入，可以利用 `<input type="hidden">` 实现:

```html
<!-- HTML -->
<form id="login-form" method="post" onsubmit="return checkForm()">
  <input type="text" id="username" name="username" />
  <input type="password" id="input-password" />
  <input type="hidden" id="md5-password" name="password" />
  <button type="submit">Submit</button>
</form>

<script>
  function checkForm() {
    const input_pwd = document.querySelector("#input-password");
    const md5_pwd = document.querySelector("#md5-password");
    // 把用户输入的明文变为MD5:
    md5_pwd.value = toMD5(input_pwd.value);
    // 继续下一步:
    return true;
  }
</script>
```

::: tip

`id` 为 `md5-password` 的 `<input>` 标记了 `name="password"`，而用户输入的 `id` 为 `input-password` 的 `<input>` 没有 `name` 属性。没有 `name` 属性的 `<input>` 的数据不会被提交。

:::
