---
title: 属性
author: 廖雪峰
icon: state
date: 2021-03-28
category: Python
---

## 私有属性

在 Class 内部，可以有属性和方法，而外部代码可以通过直接调用实例变量的方法来操作数据，这样，就隐藏了内部的复杂逻辑。

但是，从前面 Student 类的定义来看，外部代码还是可以自由地修改一个实例的 `name`、`score` 属性:

```py
>>> bart = Student('Bart Simpson', 59)
>>> bart.score
59
>>> bart.score = 99
>>> bart.score
99
```

如果要让内部属性不被外部访问，可以把属性的名称前加上两个下划线 `__`，在 Python 中，实例的变量名如果以 `__` 开头，就变成了一个私有变量 (private) ，只有内部可以访问，外部不能访问，所以，我们把 `Student` 类改一改:

```py
class Student(object):

    def __init__(self, name, score):
        self.__name = name
        self.__score = score

    def print_score(self):
        print('%s: %s' % (self.__name, self.__score))
```

改完后，对于外部代码来说，没什么变动，但是已经无法从外部访问实例变量. `__name` 和实例变量 `__score` 了:

```py
>>> bart = Student('Bart Simpson', 59)
>>> bart.__name
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'Student' object has no attribute '__name'
```

这样就确保了外部代码不能随意修改对象内部的状态，这样通过访问限制的保护，代码更加健壮。

但是如果外部代码要获取 `name` 和 `score` 怎么办？可以给 Student 类增加 `get_name` 和 `get_score` 这样的方法:

```py
class Student(object):
    ...

    def get_name(self):
        return self.__name

    def get_score(self):
        return self.__score
```

如果又要允许外部代码修改 score 怎么办？可以再给 Student 类增加 `set_score` 方法:

```py
class Student(object):
    ...

    def set_score(self, score):
        self.__score = score
```

您也许会问，原先那种直接通过 bart.score = 99 也可以修改啊，为什么要定义一个方法大费周折？因为在方法中，可以对参数做检查，避免传入无效的参数:

```py
class Student(object):
    ...

    def set_score(self, score):
        if 0 <= score <= 100:
            self.__score = score
        else:
            raise ValueError('bad score')
```

需要注意的是，在 Python 中，变量名类似 `__xxx__` 的，也就是以双下划线开头，并且以双下划线结尾的，是特殊变量，特殊变量是可以直接访问的，不是 private 变量，所以，不能用 `__name__`、`__score__` 这样的变量名。

有些时候，您会看到以一个下划线开头的实例变量名，比如 `_name`，这样的实例变量外部是可以访问的，但是，按照约定俗成的规定，当您看到这样的变量时，意思就是，“虽然我可以被访问，但是，请把我视为私有变量，不要随意访问”。

双下划线开头的实例变量是不是一定不能从外部访问呢？其实也不是。不能直接访问 `__name` 是因为 Python 解释器对外把 `__name` 变量改成了 `_Student__name`，所以，仍然可以通过 `_Student__name` 来访问 `__name` 变量:

```py
>>> bart._Student__name
'Bart Simpson'
```

但是强烈建议您不要这么干，因为不同版本的 Python 解释器可能会把 `__name` 改成不同的变量名。

总的来说就是，Python 本身没有任何机制阻止您干坏事，一切全靠自觉。

::: caution 错误写法

```py
>>> bart = Student('Bart Simpson', 59)
>>> bart.get_name()
'Bart Simpson'
>>> bart.__name = 'New Name' # 设置__name变量!
>>> bart.__name
'New Name'
```

表面上看，外部代码“成功”地设置了 `__name` 变量，但实际上这个 `__name` 变量和 class 内部的 `__name` 变量不是一个变量! 内部的 `__name` 变量已经被 Python 解释器自动改成了 `_Student__name`，而外部代码给 bart 新增了一个 `__name` 变量。

```py
>>> bart.get_name() # get_name()内部返回self.__name
'Bart Simpson'
```

:::

## `__slots__`

Python 允许在定义 class 的时候，定义一个特殊的 `__slots__` 变量，来限制该 class 实例能添加的属性。

### 不受限制的属性

正常情况下，当我们定义了一个 class，创建了一个 class 的实例后，我们可以给该实例绑定任何属性和方法，这就是动态语言的灵活性。先定义 class:

```py
class Student(object):
    pass
```

然后，尝试给实例绑定一个属性:

```py
>>> s = Student()
>>> s.name = 'Michael' # 动态给实例绑定一个属性
>>> print(s.name)
Michael
```

还可以尝试给实例绑定一个方法:

```py
>>> def set_age(self, age): # 定义一个函数作为实例方法
...     self.age = age
...
>>> from types import MethodType
>>> s.set_age = MethodType(set_age, s) # 给实例绑定一个方法
>>> s.set_age(25) # 调用实例方法
>>> s.age # 测试结果
25
```

但是，给一个实例绑定的方法，对另一个实例是不起作用的:

```py
>>> s2 = Student() # 创建新的实例
>>> s2.set_age(25) # 尝试调用方法
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'Student' object has no attribute 'set_age'
```

为了给所有实例都绑定方法，可以给 class 绑定方法:

```py
>>> def set_score(self, score):
...     self.score = score
...
>>> Student.set_score = set_score
```

给 class 绑定方法后，所有实例均可调用:

```py
>>> s.set_score(100)
>>> s.score
100
>>> s2.set_score(99)
>>> s2.score
99
```

通常情况下，上面的 `set_score` 方法可以直接定义在 class 中，但动态绑定允许我们在程序运行的过程中动态给 class 加上功能，这在静态语言中很难实现。

### 使用 `__slots__`

想要限制实例的属性，比如只允许对 `Student` 实例添加 `name` 和 `age` 属性，就要使用 `__slots__`。Python 允许在定义 class 的时候，定义一个特殊的 `__slots__` 变量，来限制该 class 实例能添加的属性:

```py
class Student(object):
    __slots__ = ('name', 'age') # 用tuple定义允许绑定的属性名称
```

然后，我们试试:

```py
>>> s = Student() # 创建新的实例
>>> s.name = 'Michael' # 绑定属性'name'
>>> s.age = 25 # 绑定属性'age'
>>> s.score = 99 # 绑定属性'score'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'Student' object has no attribute 'score'
```

由于 `'score'` 没有被放到 `__slots__` 中，所以不能绑定 score 属性，试图绑定 score 将得到 `AttributeError` 的错误。

使用 `__slots__` 要注意，`__slots__` 定义的属性仅对当前类实例起作用，对继承的子类是不起作用的:

```py
>>> class GraduateStudent(Student):
...     pass
...
>>> g = GraduateStudent()
>>> g.score = 9999
```

除非在子类中也定义 `__slots__`，这样，子类实例允许定义的属性就是自身的 `__slots__` 加上父类的 `__slots__`。

## @property

`@property` 广泛应用在类的定义中，可以让调用者写出简短的代码，同时保证对参数进行必要的检查，这样，程序运行时就减少了出错的可能性。

在绑定属性时，若直接暴露属性，虽然写起来很简单，但是，没办法检查参数，导致可以把成绩随便改:

```py
s = Student()
s.score = 9999
```

这显然不合逻辑。为了限制 `score` 的范围，可以通过一个 `set_score()` 方法来设置成绩，再通过一个 `get_score()` 来获取成绩，这样，在 `set_score()` 方法里，就可以检查参数:

```py
class Student(object):

    def get_score(self):
         return self._score

    def set_score(self, value):
        if not isinstance(value, int):
            raise ValueError('score must be an integer!')
        if value < 0 or value > 100:
            raise ValueError('score must between 0 ~ 100!')
        self._score = value
```

现在，对任意的 `Student` 实例进行操作，就不能随心所欲地设置 `score` 了:

```py
>>> s = Student()
>>> s.set_score(60) # ok!
>>> s.get_score()
60
>>> s.set_score(9999)
Traceback (most recent call last):
  ...
ValueError: score must between 0 ~ 100!
```

但是，上面的调用方法又略显复杂，没有直接用属性这么直接简单。

有没有既能检查参数，又可以用类似属性这样简单的方式来访问类的变量呢？对于追求完美的 Python 程序员来说，这是必须要做到的!

还记得装饰器 (decorator) 可以给函数动态加上功能吗？对于类的方法，装饰器一样起作用。Python 内置的 `@property` 装饰器就是负责把一个方法变成属性调用的:

```py
class Student(object):

    @property
    def score(self):
        return self._score

    @score.setter
    def score(self, value):
        if not isinstance(value, int):
            raise ValueError('score must be an integer!')
        if value < 0 or value > 100:
            raise ValueError('score must between 0 ~ 100!')
        self._score = value
```

`@property` 的实现比较复杂，我们先考察如何使用。把一个 `getter` 方法变成属性，只需要加上 `@property` 就可以了，此时，`@property` 本身又创建了另一个装饰器 `@score.setter`，负责把一个 `setter` 方法变成属性赋值，于是，我们就拥有一个可控的属性操作:

```py
>>> s = Student()
>>> s.score = 60 # OK，实际转化为s.set_score(60)
>>> s.score # OK，实际转化为s.get_score()
60
>>> s.score = 9999
Traceback (most recent call last):
  ...
ValueError: score must between 0 ~ 100!
```

注意到这个神奇的 `@property`，我们在对实例属性操作的时候，就知道该属性很可能不是直接暴露的，而是通过 `getter` 和 `setter` 方法来实现的。

还可以定义只读属性，只定义 `getter` 方法，不定义 `setter` 方法就是一个只读属性:

```py
class Student(object):

    @property
    def birth(self):
        return self._birth

    @birth.setter
    def birth(self, value):
        self._birth = value

    @property
    def age(self):
        return 2015 - self._birth
```

上面的 `birth` 是可读写属性，而 `age` 就是一个只读属性，因为 `age` 可以根据 `birth` 和当前时间计算出来。
