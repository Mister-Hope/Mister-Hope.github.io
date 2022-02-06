---
title: 字符串
icon: string
author: 廖雪峰
date: 2020-05-22
category: Python
---

在最新的 Python 3 版本中，字符串是以 Unicode 编码的，也就是说，Python 的字符串支持多语言，例如:

```sh
>>> print('包含中文的str')
包含中文的str
```

对于单个字符的编码，Python 提供了 `ord()` 函数获取字符的整数表示，`chr()` 函数把编码转换为对应的字符:

```py
>>> ord('A')
65
>>> ord('中')
20013
>>> chr(66)
'B'
>>> chr(25991)
'文'
```

如果知道字符的整数编码，还可以用十六进制这么写 `str`:

```py
>>> '\u4e2d\u6587'
'中文'
```

两种写法完全是等价的。

由于 Python 的字符串类型是 `str`，在内存中以 Unicode 表示，一个字符对应若干个字节。如果要在网络上传输，或者保存到磁盘上，就需要把 `str` 变为以字节为单位的 `bytes`。

Python 对 `bytes` 类型的数据用带 `b` 前缀的单引号或双引号表示:

```py
x = b'ABC'
```

要注意区分 `'ABC'` 和 `b'ABC'`，前者是 `str`，后者虽然内容显示得和前者一样，但 `bytes` 的每个字符都只占用一个字节。

以 Unicode 表示的 `str` 通过 `encode()` 方法可以编码为指定的 `bytes`，例如:

```sh
>>> 'ABC'.encode('ascii')
b'ABC'
>>> '中文'.encode('utf-8')
b'\xe4\xb8\xad\xe6\x96\x87'
>>> '中文'.encode('ascii')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
UnicodeEncodeError: 'ascii' codec can't encode characters in position 0-1: ordinal not in range(128)
```

纯英文的 `str` 可以用 ASCII 编码为 `bytes`，内容是一样的，含有中文的 `str` 可以用 UTF-8 编码为 `bytes`。含有中文的 `str` 无法用 ASCII 编码，因为中文编码的范围超过了 ASCII 编码的范围，Python 会报错。

在 `bytes` 中，无法显示为 ASCII 字符的字节，用 `\x##` 显示。

反过来，如果我们从网络或磁盘上读取了字节流，那么读到的数据就是 `bytes`。要把 `bytes` 变为 `str`，就需要用 `decode()` 方法:

```py
>>> b'ABC'.decode('ascii')
'ABC'
>>> b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8')
'中文'
```

如果 `bytes` 中包含无法解码的字节，`decode()` 方法会报错:

```sh
>>> b'\xe4\xb8\xad\xff'.decode('utf-8')
Traceback (most recent call last):
  ...
UnicodeDecodeError: 'utf-8' codec can't decode byte 0xff in position 3: invalid start byte
```

如果 `bytes` 中只有一小部分无效的字节，可以传入 `errors='ignore'` 忽略错误的字节:

```py
>>> b'\xe4\xb8\xad\xff'.decode('utf-8', errors='ignore')
'中'
```

要计算 `str` 包含多少个字符，可以用 `len()` 函数:

```py
>>> len('ABC')
3
>>> len('中文')
2
```

`len()` 函数计算的是 `str` 的字符数，如果换成 `bytes`，`len()` 函数就计算字节数:

```py
>>> len(b'ABC')
3
>>> len(b'\xe4\xb8\xad\xe6\x96\x87')
6
>>> len('中文'.encode('utf-8'))
6
```

可见，1 个中文字符经过 UTF-8 编码后通常会占用 3 个字节，而 1 个英文字符只占用 1 个字节。

在操作字符串时，我们经常遇到 `str` 和 `bytes` 的互相转换。为了避免乱码问题，应当始终坚持使用 UTF-8 编码对 `str` 和 `bytes` 进行转换。

由于 Python 源代码也是一个文本文件，所以，当您的源代码中包含中文的时候，在保存源代码时，就需要务必指定保存为 UTF-8 编码。当 Python 解释器读取源代码时，为了让它按 UTF-8 编码读取，我们通常在文件开头写上这两行:

```py
# !/usr/bin/env python3

# -*- coding: utf-8 -*-
```

第一行注释是为了告诉 Linux/macOS 系统，这是一个 Python 可执行程序，Windows 系统会忽略这个注释；

第二行注释是为了告诉 Python 解释器，按照 UTF-8 编码读取源代码，否则，您在源代码中写的中文输出可能会有乱码。

申明了 UTF-8 编码并不意味着您的 `.py` 文件就是 UTF-8 编码的，必须并且要确保文本编辑器正在使用 "UTF-8 without BOM" 编码。

::: info

旧版 Windows 记事本的 UTF-8 是 UTF-8 with BOM。

- 具体详情请见 [记事本的遗留问题](../../../windows/notepad.md)

:::

如果 `.py` 文件本身使用 UTF-8 编码，并且也申明了 `# -*- coding: utf-8 -*-`，打开命令提示符测试就可以正常显示中文。

## 格式化

一个常见的问题是如何输出格式化的字符串。我们经常会输出类似 `'亲爱的xxx您好! 您xx月的话费是xx，余额是xx'` 之类的字符串，而 `xxx` 的内容都是根据变量变化的，所以，需要一种简便的格式化字符串的方式。

在 Python 中，采用的格式化方式和 C 语言是一致的，用 `%` 实现，举例如下:

```py
>>> 'Hello, %s' % 'world'
'Hello, world'
>>> 'Hi, %s, you have $%d.' % ('Michael', 1000000)
'Hi, Michael, you have $1000000.'
```

没错，`%` 运算符就是用来格式化字符串的。在字符串内部，`%s` 表示用字符串替换，`%d` 表示用整数替换，有几个 `%?` 占位符，后面就跟几个变量或者值，顺序要对应好。如果只有一个 `%?`，括号可以省略。

::: info 常见的占位符有

| 占位符 | 替换内容     |
| ------ | ------------ |
| `%d`   | 整数         |
| `%f`   | 浮点数       |
| `%s`   | 字符串       |
| `%x`   | 十六进制整数 |

:::

其中，格式化整数和浮点数还可以指定是否补 0 和整数与小数的位数:

```py
# -*- coding: utf-8 -*-
print('%2d-%02d' % (3, 1))
print('%.2f' % 3.1415926)
```

如果您不太确定应该用什么，`%s` 永远起作用，它会把任何数据类型转换为字符串:

```py
>>> 'Age: %s. Gender: %s' % (25, True)
'Age: 25. Gender: True'
```

有些时候，字符串里面的 `%` 是一个普通字符怎么办? 这个时候就需要转义，用 `%%` 来表示一个 `%`:

```py
>>> 'growth rate: %d %%' % 7
'growth rate: 7 %'
```

### format()

另一种格式化字符串的方法是使用字符串的 `format()` 方法，它会用传入的参数依次替换字符串内的占位符 `{0}`、`{1}`……，不过这种方式写起来比 `%` 要麻烦得多:

```py
>>> 'Hello, {0}, 成绩提升了 {1:.1f}%'.format('小明', 17.125)
'Hello, 小明, 成绩提升了 17.1%'
```

### 小结

Python 3 的字符串使用 Unicode，直接支持多语言。

当 `str` 和 `bytes` 互相转换时，需要指定编码。最常用的编码是 `UTF-8`。Python 当然也支持其他编码方式，比如把 Unicode 编码成 `GB2312`:

```py
>>> '中文'.encode('gb2312')
b'\xd6\xd0\xce\xc4'
```

但这种方式纯属自找麻烦，如果没有特殊业务要求，请牢记仅使用 UTF-8 编码。

格式化字符串的时候，可以用 Python 的交互式环境测试，方便快捷。
