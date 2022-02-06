---
title: 条件判断
icon: condition
author: 廖雪峰
date: 2020-05-24
category: Python
---

计算机之所以能做很多自动化的任务，因为它可以自己做条件判断。

比如，输入用户年龄，根据年龄打印不同的内容，在 Python 程序中，用 `if` 语句实现:

<!-- more -->

```py
age = 20
if age >= 18:
    print('your age is', age)
    print('adult')
```

根据 Python 的缩进规则，如果 `if` 语句判断是 `True`，就把缩进的两行 `print` 语句执行了，否则，什么也不做。

也可以给 `if` 添加一个 `else` 语句，意思是，如果 `if` 判断是 `False`，不要执行 `if` 的内容，去把 `else` 执行了:

```py
age = 3
if age >= 18:
    print('your age is', age)
    print('adult')
else:
    print('your age is', age)
    print('teenager')
```

注意不要少写了冒号 `:`。

当然上面的判断是很粗略的，完全可以用 `elif` 做更细致的判断:

```py
age = 3
if age >= 18:
    print('adult')
elif age >= 6:
    print('teenager')
else:
    print('kid')
```

`elif` 是 `else if` 的缩写，完全可以有多个 `elif`，所以 `if` 语句的完整形式就是:

```py
if <条件判断1>:
    <执行1>
elif <条件判断2>:
    <执行2>
elif <条件判断3>:
    <执行3>
else:
    <执行4>
```

`if` 语句执行有个特点，它是从上往下判断，如果在某个判断上是 `True`，把该判断对应的语句执行后，就忽略掉剩下的 `elif` 和 `else`，所以，请测试并解释为什么下面的程序打印的是 `teenager`:

```py
age = 20
if age >= 6:
    print('teenager')
elif age >= 18:
    print('adult')
else:
    print('kid')
```

`if` 判断条件还可以简写，比如写:

```py
if x:
    print('True')
```

只要 `x` 是非零数值、非空字符串、非空 list 等，就判断为 `True`，否则为 `False`。

## 再议 input

最后看一个有问题的条件判断。很多同学会用 `input()` 读取用户的输入，这样可以自己输入，程序运行得更有意思:

```py
birth = input('birth: ')
if birth < 2000:
    print('00前')
else:
    print('00后')
```

输入 1982，结果报错:

```sh
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unorderable types: str() > int()
```

这是因为 `input()` 返回的数据类型是 `str`，`str` 不能直接和整数比较，必须先把 `str` 转换成整数。Python 提供了 `int()` 函数来完成这件事情:

```py
s = input('birth: ')
birth = int(s)
if birth < 2000:
    print('00前')
else:
    print('00后')
```

再次运行，就可以得到正确地结果。但是，如果输入 `abc` 呢? 又会得到一个错误信息:

```sh
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: invalid literal for int() with base 10: 'abc'
```

原来 `int()` 函数发现一个字符串并不是合法的数字时就会报错，程序就退出了。

如何检查并捕获程序运行期的错误呢? 后面的错误和调试会讲到。

## 小结

条件判断可以让计算机自己做选择，Python 的 `if...elif...else` 很灵活。

条件判断从上向下匹配，当满足条件时执行对应的块内语句，后续的 `elif` 和 `else` 都不再执行。
