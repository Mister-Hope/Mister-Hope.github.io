---
title: list 和 tuple
icon: list
author: 廖雪峰
date: 2020-05-23
category: Python
---

`list` 和 `tuple` 是 Python 中常用的数据结构。

<!-- more -->

## list

Python 内置的一种数据类型是列表: list。list 是一种有序的集合，可以随时添加和删除其中的元素。

比如，列出班里所有同学的名字，就可以用一个 list 表示:

```py
>>> classmates = ['Michael', 'Bob', 'Tracy']
>>> classmates
['Michael', 'Bob', 'Tracy']
```

变量 `classmates` 就是一个 list。用 `len()` 函数可以获得 list 元素的个数:

```py
>>> len(classmates)
3
```

用索引来访问 list 中每一个位置的元素，记得索引是从 `0` 开始的:

```py
>>> classmates[0]
'Michael'
>>> classmates[1]
'Bob'
>>> classmates[2]
'Tracy'
>>> classmates[3]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: list index out of range
```

当索引超出了范围时，Python 会报一个 `IndexError` 错误，所以，要确保索引不要越界，记得最后一个元素的索引是 `len(classmates) - 1`。

如果要取最后一个元素，除了计算索引位置外，还可以用 `-1` 做索引，直接获取最后一个元素:

```py
>>> classmates[-1]
'Tracy'
```

以此类推，可以获取倒数第 2 个、倒数第 3 个:

```sh
>>> classmates[-2]
'Bob'
>>> classmates[-3]
'Michael'
>>> classmates[-4]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: list index out of range
```

当然，倒数第 4 个就越界了。

list 是一个可变的有序表，所以，可以往 list 中追加元素到末尾:

```py
>>> classmates.append('Adam')
>>> classmates
['Michael', 'Bob', 'Tracy', 'Adam']
```

也可以把元素插入到指定的位置，比如索引号为 `1` 的位置:

```py
>>> classmates.insert(1, 'Jack')
>>> classmates
['Michael', 'Jack', 'Bob', 'Tracy', 'Adam']
```

要删除 list 末尾的元素，用 `pop()` 方法:

```py
>>> classmates.pop()
'Adam'
>>> classmates
['Michael', 'Jack', 'Bob', 'Tracy']
```

要删除指定位置的元素，用 `pop(i)` 方法，其中 `i` 是索引位置:

```py
>>> classmates.pop(1)
'Jack'
>>> classmates
['Michael', 'Bob', 'Tracy']
```

要把某个元素替换成别的元素，可以直接赋值给对应的索引位置:

```py
>>> classmates[1] = 'Sarah'
>>> classmates
['Michael', 'Sarah', 'Tracy']
```

list 里面的元素的数据类型也可以不同，比如:

```py
>>> L = ['Apple', 123, True]
```

list 元素也可以是另一个 list，比如:

```py
>>> s = ['python', 'java', ['asp', 'php'], 'scheme']
>>> len(s)
4
```

要注意 `s` 只有 4 个元素，其中 `s[2]` 又是一个 list，如果拆开写就更容易理解了:

```py
>>> p = ['asp', 'php']
>>> s = ['python', 'java', p, 'scheme']
```

要拿到 `'php'` 可以写 `p[1]` 或者 `s[2][1]`，因此 `s` 可以看成是一个二维数组，类似的还有三维、四维……数组，不过很少用到。

如果一个 list 中一个元素也没有，就是一个空的 list，它的长度为 0:

```py
>>> L = []
>>> len(L)
0
```

## tuple

另一种有序列表叫元组: tuple。tuple 和 list 非常类似，但是 tuple 一旦初始化就不能修改，比如同样是列出同学的名字:

```py
>>> classmates = ('Michael', 'Bob', 'Tracy')
```

现在，classmates 这个 tuple 不能变了，它也没有 `append()`，`insert()` 这样的方法。其他获取元素的方法和 list 是一样的，您可以正常地使用 `classmates[0]`，`classmates[-1]`，但不能赋值成另外的元素。

不可变的 tuple 有什么意义? 因为 tuple 不可变，所以代码更安全。如果可能，能用 tuple 代替 list 就尽量用 tuple。

tuple 的陷阱: 当您定义一个 tuple 时，在定义的时候，tuple 的元素就必须被确定下来，比如:

```py
>>> t = (1, 2)
>>> t
(1, 2)
```

如果要定义一个空的 tuple，可以写成 `()`:

```py
>>> t = ()
>>> t
()
```

但是，要定义一个只有 1 个元素的 tuple，如果您这么定义:

```py
>>> t = (1)
>>> t
1
```

定义的不是 tuple，是 `1` 这个数! 这是因为括号 `()` 既可以表示 tuple，又可以表示数学公式中的小括号，这就产生了歧义，因此，Python 规定，这种情况下，按小括号进行计算，计算结果自然是 1。

所以，只有 1 个元素的 tuple 定义时必须加一个逗号 `,`，来消除歧义:

```py
>>> t = (1,)
>>> t
(1,)
```

Python 在显示只有 1 个元素的 tuple 时，也会加一个逗号 `,`，以免您误解成数学计算意义上的括号。

最后来看一个“可变的”tuple:

```py
>>> t = ('a', 'b', ['A', 'B'])
>>> t[2][0] = 'X'
>>> t[2][1] = 'Y'
>>> t
('a', 'b', ['X', 'Y'])
```

这个 tuple 定义的时候有 3 个元素，分别是 `'a'`，`'b'` 和一个 list。不是说 tuple 一旦定义后就不可变了吗? 怎么后来又变了?

别急，我们先看看定义的时候 tuple 包含的 3 个元素:

![tuple 示意图](../assets/tuple0.png)

当我们把 list 的元素 `'A'` 和 `'B'` 修改为 `'X'` 和 `'Y'` 后，tuple 变为:

![tuple 示意图](../assets/tuple1.png)

表面上看，tuple 的元素确实变了，但其实变的不是 tuple 的元素，而是 list 的元素。tuple 一开始指向的 list 并没有改成别的 list，所以，tuple 所谓的“不变”是说，tuple 的每个元素，指向永远不变。即指向 `'a'`，就不能改成指向 `'b'`，指向一个 list，就不能改成指向其他对象，但指向的这个 list 本身是可变的!

理解了 “指向不变” 后，要创建一个内容也不变的 tuple 怎么做? 那就必须保证 tuple 的每一个元素本身也不能变。

## 小结

list 和 tuple 是 Python 内置的有序集合，一个可变，一个不可变。根据需要来选择使用它们。
