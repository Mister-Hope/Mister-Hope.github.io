---
title: 箭头函数
icon: arrow
date: 2019-10-03
category: JavaScript
---

ES6 标准新增了一种新的函数: Arrow Function (箭头函数)。

为什么叫 Arrow Function ? 因为它的定义用的就是一个箭头:

```js
(x) => x * x;
```

<!-- more -->

上面的箭头函数相当于:

```js
function (x) {
  return x * x;
}
```

箭头函数相当于匿名函数，并且简化了函数定义。箭头函数有两种格式，一种像上面的，只包含一个表达式，连 `{ ... }` 和 `return` 都省略掉了。还有一种可以包含多条语句，这时候就不能省略 `{ ... }` 和 `return`:

```js
(x) => {
  if (x > 0) return x * x;
  else return -x * x;
};
```

如果参数不是一个，就需要用括号 `()` 括起来:

```js
// 两个参数:
(x, y) => x * x + y * y

// 无参数:
() => 3.14

// 可变参数:
(x, y, ...rest) => {
  let i;
  let sum = x + y;

  for (i = 0; i < rest.length; i++)
    sum += rest[i];

  return sum;
}
```

如果要返回一个对象，就要注意，如果是单表达式，这么写的话会报错:

```js
// SyntaxError:
(x) => {
  foo: x;
};
```

因为和函数体的 `{ ... }` 有语法冲突，所以要改为:

```js
// ok:
(x) => ({ foo: x });
```

## 箭头函数的 this

箭头函数看上去是匿名函数的一种简写，但实际上，箭头函数和匿名函数有个明显的区别: 箭头函数内部的 `this` 是词法作用域，由上下文确定。

回顾前面的例子，由于 JavaScript 函数对 `this` 绑定的错误处理，下面的例子无法得到预期结果:

```js
const obj = {
  birth: 1990,
  getAge() {
    const b = this.birth; // 1990
    const fn = function () {
      return new Date().getFullYear() - this.birth; // this 指向 window 或 undefined
    };

    return fn();
  },
};
```

现在，箭头函数完全修复了 `this` 的指向，`this` 总是指向词法作用域，也就是外层调用者 `obj`:

```js
const obj = {
  birth: 1990,
  getAge() {
    const b = this.birth; // 1990
    const fn = () => new Date().getFullYear() - this.birth; // this 指向 obj 对象

    return fn();
  },
};

obj.getAge(); // 25
```

如果使用箭头函数，以前的那种 hack 写法:

```js
const that = this;
```

就不再需要了。

由于 `this` 在箭头函数中已经按照词法作用域绑定了，所以，用 `call()` 或者 `apply()` 调用箭头函数时，无法对 `this` 进行绑定，即传入的第一个参数被忽略:

```js
const obj = {
  birth: 1990,
  getAge(year) {
    const b = this.birth; // 1990
    const fn = (y) => y - this.birth; // this.birth 仍是 1990

    return fn.call({ birth: 2000 }, year);
  },
};

obj.getAge(2015); // 25
```
