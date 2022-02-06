---
title: Date
icon: date
date: 2019-10-11
category: JavaScript
---

在 JavaScript 中，`Date` 对象用来表示日期和时间。

<!-- more -->

要获取系统当前时间，用:

```js
const now = new Date();

now; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
now.getFullYear(); // 2015, 年份
now.getMonth(); // 5, 月份，注意月份范围是0~11，5表示六月
now.getDate(); // 24, 表示24号
now.getDay(); // 3, 表示星期三
now.getHours(); // 19, 24小时制
now.getMinutes(); // 49, 分钟
now.getSeconds(); // 22, 秒
now.getMilliseconds(); // 875, 毫秒数
now.getTime(); // 1435146562875, 以number形式表示的时间戳
```

注意，当前时间是浏览器从本机操作系统获取的时间，所以不一定准确，因为用户可以把当前时间设定为任何值。

如果要创建一个指定日期和时间的 `Date` 对象，可以用:

```js
const d = new Date(2015, 5, 19, 20, 15, 30, 123);

d; // Fri Jun 19 2015 20:15:30 GMT+0800 (CST)
```

::: tip

您可能观察到了一个非常非常坑爹的地方，就是 JavaScript 的月份范围用整数表示是 $0 - 11$，`0` 表示一月，`1` 表示二月…….

JavaScript 的 Date 对象月份值从 0 开始，牢记 `0` = 1 月，`1` = 2 月，`2` = 3 月，……，`11` = 12 月。

:::

第二种创建一个指定日期和时间的方法是解析一个符合 ISO 8601 格式的字符串:

```js
const d = Date.parse("2015-06-24T19:49:22.875+08:00");

d; // 1435146562875
```

但它返回的不是 `Date` 对象，而是一个时间戳。不过有时间戳就可以很容易地把它转换为一个 `Date`:

```js
const d = new Date(1435146562875);

d; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
d.getMonth(); // 5
```

::: tip

使用 `Date.parse()` 时传入的字符串使用实际月份 `01~12`，转换为 Date 对象后 `getMonth()` 获取的月份值为 $0 - 11$。

:::

## 时区

Date 对象表示的时间总是按浏览器所在时区显示的，不过我们既可以显示本地时间，也可以显示调整后的 UTC 时间:

```js
const d = new Date(1435146562875);

d.toLocaleString(); // '2015/6/24 下午7:49:22'，本地时间(北京时区+8:00)，显示的字符串与操作系统设定的格式有关
d.toUTCString(); // 'Wed, 24 Jun 2015 11:49:22 GMT'，UTC时间，与本地时间相差8小时
```

那么在 JavaScript 中如何进行时区转换呢? 实际上，只要我们传递的是一个 number 类型的时间戳，我们就不用关心时区转换。任何浏览器都可以把一个时间戳正确转换为本地时间。

时间戳是个什么东西? 时间戳是一个自增的整数，它表示从 1970 年 1 月 1 日 零时整的 GMT 时区开始的那一刻，到现在的毫秒数。假设浏览器所在电脑的时间是准确的，那么世界上无论哪个时区的电脑，它们此刻产生的时间戳数字都是一样的，所以，时间戳可以精确地表示一个时刻，并且与时区无关。

所以，我们只需要传递时间戳，或者把时间戳从数据库里读出来，再让 JavaScript 自动转换为当地时间就可以了。

要获取当前时间戳，可以用:

```js
"use strict";

if (Date.now) console.log(Date.now());
// 老版本 IE 没有 now() 方法
else console.log(new Date().getTime());
```
