---
date: 2020-05-04
title: 类型别名
icon: alias
category: TypeScript
---

类型别名用来给一个类型起个新名字。

<!-- more -->

## 简单的例子

```ts
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}
```

上例中，我们使用 `type` 创建类型别名。

类型别名常用于联合类型。

## 参考

- [Advanced Types # Type Aliases](http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases)([中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#类型别名))
