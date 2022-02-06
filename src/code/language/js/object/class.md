---
title: class 继承
icon: class
date: 2019-10-10
category: JavaScript
---

在上面的章节中我们看到了 JavaScript 的对象模型是基于原型实现的，特点是简单，缺点是理解起来比传统的类－实例模型要困难，最大的缺点是继承的实现需要编写大量代码，并且需要正确实现原型链。

有没有更简单的写法? 有!

新的关键字 `class` 从 ES6 开始正式被引入到 JavaScript 中。`class` 的目的就是让定义类更简单。

<!-- more -->

我们先回顾用函数实现 `Student` 的方法:

```js
function Student(name) {
  this.name = name;
}

Student.prototype.hello = function () {
  alert(`Hello, ${this.name}!`);
};
```

如果用新的 `class` 关键字来编写 `Student`，可以这样写:

```js
class Student {
  constructor(name) {
    this.name = name;
  }

  hello() {
    alert(`Hello, ${this.name}!`);
  }
}
```

比较一下就可以发现，`class` 的定义包含了构造函数 `constructor` 和定义在原型对象上的函数 `hello()` (注意没有 `function` 关键字)，这样就避免了 `Student.prototype.hello = function () {...}` 这样分散的代码。

最后，创建一个 `Student` 对象代码和前面章节完全一样:

```js
const xiaoming = new Student("小明");

xiaoming.hello();
```

用 `class` 定义对象的另一个巨大的好处是继承更方便了。想一想我们从 `Student` 派生一个 `PrimaryStudent` 需要编写的代码量。现在，原型继承的中间对象，原型对象的构造函数等等都不需要考虑了，直接通过 `extends` 来实现:

```js
class PrimaryStudent extends Student {
  constructor(name, grade) {
    super(name); // 记得用super调用父类的构造方法!
    this.grade = grade;
  }

  myGrade() {
    alert(`I am at grade ${this.grade}`);
  }
}
```

注意 `PrimaryStudent` 的定义也是 `class` 关键字实现的，而 `extends` 则表示原型链对象来自 `Student`。子类的构造函数可能会与父类不太相同，例如，`PrimaryStudent` 需要 `name` 和 `grade` 两个参数，并且需要通过 `super(name)` 来调用父类的构造函数，否则父类的 `name` 属性无法正常初始化。

`PrimaryStudent` 已经自动获得了父类 `Student` 的 `hello` 方法，我们又在子类中定义了新的 `myGrade` 方法。

ES6 引入的 `class` 和原有的 JavaScript 原型继承有什么区别呢? 实际上它们没有任何区别，`class` 的作用就是让 JavaScript 引擎去实现原来需要我们自己编写的原型链代码。简而言之，用 `class` 的好处就是极大地简化了原型链代码。
