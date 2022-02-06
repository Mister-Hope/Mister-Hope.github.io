---
title: Promise
icon: any
date: 2019-10-18
category: JavaScript
---

在 JavaScript 的世界中，所有代码都是单线程执行的。

由于这个“缺陷”，导致 JavaScript 的所有网络操作，浏览器事件，都必须是异步执行。异步执行可以用回调函数实现:

<!-- more -->

```js
function callback() {
  console.log("Done");
}
console.log("before setTimeout()");
setTimeout(callback, 1000); // 1秒钟后调用callback函数
console.log("after setTimeout()");
```

观察上述代码执行，在 Chrome 的控制台输出可以看到:

```text
before setTimeout()
after setTimeout()
(等待1秒后)
Done
```

可见，异步操作会在将来的某个时间点触发一个函数调用。

Ajax 就是典型的异步操作。以上一节的代码为例:

```js
request.onreadystatechange = () => {
  if (request.readyState === 4)
    if (request.status === 200) return success(request.responseText);
    else return fail(request.status);
};
```

把回调函数 `success(request.responseText)` 和 `fail(request.status)` 写到一个 Ajax 操作里很正常，但是不好看，而且不利于代码复用。

有没有更好的写法? 比如写成这样:

```js
const ajax = ajaxGet("https://...");

ajax.ifSuccess(success).ifFail(fail);
```

这种链式写法的好处在于，先统一执行 Ajax 逻辑，不关心如何处理结果，然后，根据结果是成功还是失败，在将来的某个时候调用 `success` 函数或 `fail` 函数。

古人云: “君子一诺千金”，这种“承诺将来会执行”的对象在 JavaScript 中称为 `Promise` 对象。

Promise 有各种开源实现，在 ES6 中被统一规范，由浏览器直接支持。

我们先看一个最简单的 `Promise` 例子: 生成一个 `0-2` 之间的随机数，如果小于 1，则等待一段时间后返回成功，否则返回失败:

```js
function test(resolve, reject) {
  const timeOut = Math.random() * 2;

  log(`set timeout to: ${timeOut} seconds.`);
  setTimeout(() => {
    if (timeOut < 1) {
      log("call resolve()...");
      resolve("200 OK");
    } else {
      log("call reject()...");
      reject(`timeout in ${timeOut} seconds.`);
    }
  }, timeOut * 1000);
}
```

这个 `test()` 函数有两个参数，这两个参数都是函数，如果执行成功，我们将调用 `resolve('200 OK')`，如果执行失败，我们将调用 `reject(timeout in ${timeOut} seconds.)`。可以看出，`test()` 函数只关心自身的逻辑，并不关心具体的 `resolve` 和 `reject` 将如何处理结果。

有了执行函数，我们就可以用一个 `Promise` 对象来执行它，并在将来某个时刻获得成功或失败的结果:

```js
const p1 = new Promise(test);
const p2 = p1.then((result) => console.log(`成功: ${result}`));
const p3 = p2.catch((reason) => console.log(`失败: ${reason}`));
```

变量 `p1` 是一个 Promise 对象，它负责执行 `test` 函数。由于 `test` 函数在内部是异步执行的，当 `test` 函数执行成功时，我们告诉 Promise 对象:

```js
// 如果成功，执行这个函数:
p1.then((result) => console.log(`成功: ${result}`));
```

当 `test` 函数执行失败时，我们告诉 Promise 对象:

```js
p2.catch((reason) => console.log(`失败: ${reason}`));
```

Promise 对象可以串联起来，所以上述代码可以简化为:

```js
new Promise(test)
  .then((result) => console.log("成功: " + result))
  .catch((reason) => console.log("失败: " + reason));
```

实际测试一下，看看 Promise 是如何异步执行的:

```js
"use strict";

// 清除log:
const logging = document.querySelector("#test-promise-log");

while (logging.children.length > 1)
  logging.removeChild(logging.children[logging.children.length - 1]);

// 输出log到页面:
function log(s) {
  const p = document.createElement("p");

  p.innerHTML = s;
  logging.appendChild(p);
}

new Promise((resolve, reject) => {
  log("start new Promise...");
  const timeOut = Math.random() * 2;

  log(`set timeout to: ${timeOut} seconds.`);
  setTimeout(() => {
    if (timeOut < 1) {
      log("call resolve()...");
      resolve("200 OK");
    } else {
      log("call reject()...");
      reject(`timeout in ${timeOut} seconds.`);
    }
  }, timeOut * 1000);
})
  .then((r) => log(`Done: ${r}`))
  .catch((reason) => log(`Failed: ${reason}`));
```

可见 Promise 最大的好处是在异步执行的流程中，把执行代码和处理结果的代码清晰地分离了:

![promise](../assets/promise.png)

Promise 还可以做更多的事情，比如，有若干个异步任务，需要先做任务 1，如果成功后再做任务 2，任何任务失败则不再继续并执行错误处理函数。

要串行执行这样的异步任务，不用 Promise 需要写一层一层的嵌套代码。有了 Promise，我们只需要简单地写:

```js
job1.then(job2).then(job3).catch(handleError);
```

其中，`job1`、`job2` 和 `job3` 都是 Promise 对象。

下面的例子演示了如何串行执行一系列需要异步计算获得结果的任务:

```js
"use strict";

let logging = document.querySelector("#test-promise2-log");
while (logging.children.length > 1) {
  logging.removeChild(logging.children[logging.children.length - 1]);
}

function log(s) {
  let p = document.createElement("p");
  p.innerHTML = s;
  logging.appendChild(p);
}

// 0.5秒后返回input*input的计算结果:
function multiply(input) {
  return new Promise(function (resolve, reject) {
    log("calculating " + input + " x " + input + "...");
    setTimeout(resolve, 500, input * input);
  });
}

// 0.5秒后返回input+input的计算结果:
function add(input) {
  return new Promise(function (resolve, reject) {
    log("calculating " + input + " + " + input + "...");
    setTimeout(resolve, 500, input + input);
  });
}

let p = new Promise(function (resolve, reject) {
  log("start new Promise...");
  resolve(123);
});

p.then(multiply)
  .then(add)
  .then(multiply)
  .then(add)
  .then(function (result) {
    log("Got value: " + result);
  });
```

`setTimeout` 可以看成一个模拟网络等异步执行的函数。现在，我们把上一节的 Ajax 异步执行函数转换为 `Promise` 对象，看看用 `Promise` 如何简化异步处理:

```js
"use strict";

// ajax函数将返回Promise对象:
function ajax(method, url, data) {
  let request = new XMLHttpRequest();
  return new Promise(function (resolve, reject) {
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(request.responseText);
        } else {
          reject(request.status);
        }
      }
    };
    request.open(method, url);
    request.send(data);
  });
}

let log = document.querySelector("#test-promise-ajax-result");
let p = ajax("GET", "/api/categories");
p.then(function (text) {
  // 如果AJAX成功，获得响应内容
  log.innerText = text;
}).catch(function (status) {
  // 如果AJAX失败，获得响应代码
  log.innerText = "ERROR: " + status;
});
```

除了串行执行若干异步任务外，`Promise` 还可以并行执行异步任务。

试想一个页面聊天系统，我们需要从两个不同的 URL 分别获得用户的个人信息和好友列表，这两个任务是可以并行执行的，用 `Promise.all()` 实现如下:

```js
let p1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "P1");
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 600, "P2");
});
// 同时执行p1和p2，并在它们都完成后执行then:
Promise.all([p1, p2]).then(function (results) {
  console.log(results); // 获得一个Array: ['P1', 'P2']
});
```

有些时候，多个异步任务是为了容错。比如，同时向两个 URL 读取用户的个人信息，只需要获得先返回的结果即可。这种情况下，用 `Promise.race()` 实现:

```js
const p1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "P1");
});
const p2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 600, "P2");
});

Promise.race([p1, p2]).then(function (result) {
  console.log(result); // 'P1'
});
```

由于 p1 执行较快，Promise 的 `then()` 将获得结果 `'P1'`，p2 仍在继续执行，但执行结果将被丢弃。

如果我们组合使用 Promise，就可以把很多异步任务以并行和串行的方式组合起来执行。
